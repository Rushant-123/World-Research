/* sankey.js
 * D3-powered Sankey diagram showing cost flows from raw materials
 * through intermediate products to Claude Code, with animated particles.
 * Section 4 — "Follow the Money"
 */
(function () {
  'use strict';

  // ---------------------------------------------------------------------------
  // SankeyViz class
  // ---------------------------------------------------------------------------
  function SankeyViz(containerId) {
    this.containerId = containerId;
    this.container = null;
    this.svg = null;
    this.canvas = null;
    this.ctx = null;
    this.sankeyData = null;
    this.particles = [];
    this.animId = null;
    this.running = false;
    this.tooltip = document.getElementById('viz-tooltip');
    this.width = 0;
    this.height = 0;
    this.linkPaths = [];   // cached DOM path elements for particle positioning
    this.graphData = null;

    var self = this;
    document.addEventListener('graphDataReady', function () {
      self.init();
    });
  }

  // ---------------------------------------------------------------------------
  // Initialisation
  // ---------------------------------------------------------------------------
  SankeyViz.prototype.init = function () {
    this.graphData = window.graphData;
    if (!this.graphData) return;

    this.container = document.getElementById(this.containerId);
    if (!this.container) return;

    var rect = this.container.getBoundingClientRect();
    this.width = rect.width;
    this.height = rect.height;

    // Select interesting paths
    var selected = selectPaths(this.graphData);

    // Build the sankey layout
    this.sankeyData = this._layout(selected);

    // Render
    this._renderSVG();
    this._createCanvas();
    this._initParticles();
  };

  // ---------------------------------------------------------------------------
  // Path selection — pick ~60-80 most interesting cost flows
  // ---------------------------------------------------------------------------
  function selectPaths(graphData) {
    var nodes = new Set();
    var nodeMap = graphData.nodeMap;
    var adjacency = graphData.adjacency;
    var edges = graphData.edges;

    // Always include claude-code
    nodes.add('claude-code');

    // Distance-1 nodes (direct inputs to claude-code)
    var d1 = adjacency.get('claude-code') || [];
    d1.forEach(function (id) { nodes.add(id); });

    // For each distance-1 node, get top 5 inputs by cost
    d1.forEach(function (d1id) {
      var inputs = adjacency.get(d1id) || [];
      var withCost = inputs.map(function (id) {
        var edge = findEdge(edges, d1id, id);
        return { id: id, cost: edge ? edge.cost : 0 };
      }).sort(function (a, b) { return b.cost - a.cost; }).slice(0, 5);
      withCost.forEach(function (item) { nodes.add(item.id); });
    });

    // For each distance-2 node selected, get top 3 inputs by cost
    var d2nodes = [];
    nodes.forEach(function (id) {
      var n = nodeMap.get(id);
      if (n && n.distance === 2) d2nodes.push(id);
    });

    d2nodes.forEach(function (d2id) {
      var inputs = adjacency.get(d2id) || [];
      var withCost = inputs.map(function (id) {
        var edge = findEdge(edges, d2id, id);
        return { id: id, cost: edge ? edge.cost : 0 };
      }).sort(function (a, b) { return b.cost - a.cost; }).slice(0, 3);
      withCost.forEach(function (item) { nodes.add(item.id); });
    });

    // Build links array for selected node set
    var links = [];
    edges.forEach(function (edge) {
      if (nodes.has(edge.source) && nodes.has(edge.target)) {
        links.push({
          source: edge.target,   // Sankey: raw materials (targets) feed into products (sources)
          target: edge.source,
          value: Math.max(edge.cost, 0.1),
          name: edge.name,
          rawCost: edge.cost
        });
      }
    });

    return { nodes: arrayFrom(nodes), links: links };
  }

  function findEdge(edges, source, target) {
    for (var i = 0; i < edges.length; i++) {
      if (edges[i].source === source && edges[i].target === target) return edges[i];
    }
    return null;
  }

  function arrayFrom(set) {
    var arr = [];
    set.forEach(function (v) { arr.push(v); });
    return arr;
  }

  // ---------------------------------------------------------------------------
  // Sankey layout
  // ---------------------------------------------------------------------------
  SankeyViz.prototype._layout = function (selected) {
    var nodeMap = this.graphData.nodeMap;
    var margin = { top: 20, right: 140, bottom: 20, left: 140 };
    var innerW = this.width - margin.left - margin.right;
    var innerH = this.height - margin.top - margin.bottom;

    // Build node objects with distance info
    var sankeyNodes = selected.nodes.map(function (id) {
      var n = nodeMap.get(id);
      var dist = (n && n.distance >= 0) ? n.distance : 4;
      return {
        id: id,
        title: n ? n.title : id,
        distance: dist,
        price: n ? n.price : 0,
        inputCount: n ? (n.inputCount || 0) : 0
      };
    });

    // Determine max distance among selected nodes
    var maxDist = 0;
    sankeyNodes.forEach(function (n) {
      if (n.distance < 900 && n.distance > maxDist) maxDist = n.distance;
    });

    // Sankey layout
    var sankey = d3.sankey()
      .nodeId(function (d) { return d.id; })
      .nodeWidth(12)
      .nodePadding(8)
      .nodeAlign(function (node) {
        // Align by inverted distance: high distance = left (0), low distance = right
        return maxDist - node.distance;
      })
      .extent([[margin.left, margin.top], [this.width - margin.right, this.height - margin.bottom]]);

    var graph = sankey({
      nodes: sankeyNodes,
      links: selected.links.map(function (l) { return Object.assign({}, l); })
    });

    graph.margin = margin;
    graph.innerW = innerW;
    graph.innerH = innerH;
    graph.maxDist = maxDist;

    return graph;
  };

  // ---------------------------------------------------------------------------
  // SVG rendering
  // ---------------------------------------------------------------------------
  SankeyViz.prototype._renderSVG = function () {
    var self = this;
    var data = this.sankeyData;
    var graphData = this.graphData;

    // Clear previous
    d3.select('#' + this.containerId).selectAll('svg').remove();

    var svg = d3.select('#' + this.containerId)
      .append('svg')
      .attr('width', this.width)
      .attr('height', this.height)
      .style('position', 'absolute')
      .style('top', '0')
      .style('left', '0');

    this.svg = svg;

    // ---- Gradient definitions ----
    var defs = svg.append('defs');

    data.links.forEach(function (link, i) {
      var srcColor = graphData.distanceColor(link.source.distance);
      var tgtColor = graphData.distanceColor(link.target.distance);
      var grad = defs.append('linearGradient')
        .attr('id', 'sankey-grad-' + i)
        .attr('gradientUnits', 'userSpaceOnUse')
        .attr('x1', link.source.x1)
        .attr('x2', link.target.x0);

      grad.append('stop').attr('offset', '0%').attr('stop-color', srcColor);
      grad.append('stop').attr('offset', '100%').attr('stop-color', tgtColor);
    });

    // ---- Links ----
    var linkGroup = svg.append('g').attr('class', 'sankey-links');

    var linkSel = linkGroup.selectAll('path')
      .data(data.links)
      .enter()
      .append('path')
      .attr('d', d3.sankeyLinkHorizontal())
      .attr('fill', 'none')
      .attr('stroke', function (d, i) { return 'url(#sankey-grad-' + i + ')'; })
      .attr('stroke-opacity', 0.15)
      .attr('stroke-width', function (d) { return Math.max(1, d.width); })
      .style('cursor', 'pointer');

    // Store path elements for particle positioning
    this.linkPaths = linkSel.nodes();

    // Link hover
    linkSel
      .on('mouseenter', function (event, d) {
        d3.select(this).attr('stroke-opacity', 0.5);
        self._highlightChain(d);
        self._showTooltip(event, linkTooltipHtml(d));
      })
      .on('mousemove', function (event) {
        self._moveTooltip(event);
      })
      .on('mouseleave', function () {
        linkSel.attr('stroke-opacity', 0.15);
        self._hideTooltip();
      });

    // ---- Nodes ----
    var nodeGroup = svg.append('g').attr('class', 'sankey-nodes');

    var nodeSel = nodeGroup.selectAll('rect')
      .data(data.nodes)
      .enter()
      .append('rect')
      .attr('x', function (d) { return d.x0; })
      .attr('y', function (d) { return d.y0; })
      .attr('width', function (d) { return d.x1 - d.x0; })
      .attr('height', function (d) { return Math.max(1, d.y1 - d.y0); })
      .attr('fill', function (d) { return graphData.distanceColor(d.distance); })
      .attr('rx', 2)
      .attr('ry', 2)
      .style('cursor', 'pointer');

    // Node hover
    nodeSel
      .on('mouseenter', function (event, d) {
        self._highlightNode(d, linkSel);
        self._showTooltip(event, nodeTooltipHtml(d));
      })
      .on('mousemove', function (event) {
        self._moveTooltip(event);
      })
      .on('mouseleave', function () {
        linkSel.attr('stroke-opacity', 0.15);
        self._hideTooltip();
      })
      .on('click', function (event, d) {
        window.location.href = '/pages/' + d.id + '/';
      });

    // ---- Labels ----
    var labelGroup = svg.append('g').attr('class', 'sankey-labels');

    labelGroup.selectAll('text')
      .data(data.nodes.filter(function (d) { return (d.y1 - d.y0) > 15; }))
      .enter()
      .append('text')
      .attr('x', function (d) {
        // Right-side nodes get label to the right, left-side to the left
        return d.x0 < self.width / 2 ? d.x0 - 6 : d.x1 + 6;
      })
      .attr('y', function (d) { return (d.y0 + d.y1) / 2; })
      .attr('dy', '0.35em')
      .attr('text-anchor', function (d) {
        return d.x0 < self.width / 2 ? 'end' : 'start';
      })
      .attr('fill', 'rgba(255,255,255,0.6)')
      .attr('font-size', '10px')
      .attr('font-family', '-apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif')
      .text(function (d) {
        // Truncate long titles
        var t = d.title;
        return t.length > 24 ? t.slice(0, 22) + '...' : t;
      });
  };

  // ---------------------------------------------------------------------------
  // Tooltip helpers
  // ---------------------------------------------------------------------------
  function linkTooltipHtml(d) {
    var cost = d.rawCost !== undefined ? d.rawCost : d.value;
    return '<div class="tooltip-title">' + escHtml(d.source.title) +
      ' &rarr; ' + escHtml(d.target.title) + '</div>' +
      '<div class="tooltip-detail">$' + formatCost(cost) + '</div>';
  }

  function nodeTooltipHtml(d) {
    return '<div class="tooltip-title">' + escHtml(d.title) + '</div>' +
      '<div class="tooltip-detail">$' + formatCost(d.price) +
      ' | ' + d.inputCount + ' inputs</div>';
  }

  function formatCost(v) {
    if (v >= 1e6) return (v / 1e6).toFixed(1) + 'M';
    if (v >= 1e3) return (v / 1e3).toFixed(1) + 'K';
    if (v >= 1) return v.toFixed(2);
    return v.toFixed(2);
  }

  function escHtml(s) {
    if (!s) return '';
    return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  }

  SankeyViz.prototype._showTooltip = function (event, html) {
    if (!this.tooltip) return;
    this.tooltip.innerHTML = html;
    this.tooltip.style.display = 'block';
    this._moveTooltip(event);
  };

  SankeyViz.prototype._moveTooltip = function (event) {
    if (!this.tooltip) return;
    var x = event.clientX + 14;
    var y = event.clientY - 10;
    // Keep tooltip in viewport
    var tw = this.tooltip.offsetWidth;
    var th = this.tooltip.offsetHeight;
    if (x + tw > window.innerWidth - 10) x = event.clientX - tw - 14;
    if (y + th > window.innerHeight - 10) y = event.clientY - th - 10;
    this.tooltip.style.left = x + 'px';
    this.tooltip.style.top = y + 'px';
  };

  SankeyViz.prototype._hideTooltip = function () {
    if (!this.tooltip) return;
    this.tooltip.style.display = 'none';
  };

  // ---------------------------------------------------------------------------
  // Highlight helpers
  // ---------------------------------------------------------------------------
  SankeyViz.prototype._highlightChain = function (link) {
    // Highlight the hovered link and trace connected links in the chain
    var connected = new Set();
    connected.add(link.index);

    // Trace upstream (toward source/left)
    function traceUp(nodeId, links) {
      links.forEach(function (l, i) {
        if (l.target.id === nodeId && !connected.has(i)) {
          connected.add(i);
          traceUp(l.source.id, links);
        }
      });
    }

    // Trace downstream (toward target/right)
    function traceDown(nodeId, links) {
      links.forEach(function (l, i) {
        if (l.source.id === nodeId && !connected.has(i)) {
          connected.add(i);
          traceDown(l.target.id, links);
        }
      });
    }

    var allLinks = this.sankeyData.links;
    traceUp(link.source.id, allLinks);
    traceDown(link.target.id, allLinks);

    this.svg.selectAll('.sankey-links path')
      .attr('stroke-opacity', function (d, i) {
        return connected.has(i) ? 0.5 : 0.05;
      });
  };

  SankeyViz.prototype._highlightNode = function (node, linkSel) {
    linkSel.attr('stroke-opacity', function (d) {
      return (d.source.id === node.id || d.target.id === node.id) ? 0.5 : 0.05;
    });
  };

  // ---------------------------------------------------------------------------
  // Canvas overlay for animated particles
  // ---------------------------------------------------------------------------
  SankeyViz.prototype._createCanvas = function () {
    // Remove previous canvas
    var existing = this.container.querySelector('canvas');
    if (existing) existing.remove();

    var canvas = document.createElement('canvas');
    canvas.width = this.width * (window.devicePixelRatio || 1);
    canvas.height = this.height * (window.devicePixelRatio || 1);
    canvas.style.width = this.width + 'px';
    canvas.style.height = this.height + 'px';
    canvas.style.position = 'absolute';
    canvas.style.top = '0';
    canvas.style.left = '0';
    canvas.style.pointerEvents = 'none';

    this.container.appendChild(canvas);
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');
    this.ctx.scale(window.devicePixelRatio || 1, window.devicePixelRatio || 1);
  };

  // ---------------------------------------------------------------------------
  // Particles
  // ---------------------------------------------------------------------------
  SankeyViz.prototype._initParticles = function () {
    var data = this.sankeyData;
    var graphData = this.graphData;
    this.particles = [];

    // Determine value range for particle count scaling
    var maxVal = 0;
    data.links.forEach(function (l) { if (l.value > maxVal) maxVal = l.value; });

    for (var i = 0; i < data.links.length; i++) {
      var link = data.links[i];
      // More particles for higher-value links: 1 to 5
      var count = Math.max(1, Math.min(5, Math.ceil((link.value / Math.max(maxVal, 1)) * 5)));
      var color = graphData.distanceColor(link.source.distance);

      for (var j = 0; j < count; j++) {
        this.particles.push({
          linkIndex: i,
          progress: Math.random(),                    // start at random position
          speed: 0.002 + Math.random() * 0.003,       // vary speed for organic feel
          color: color
        });
      }
    }
  };

  SankeyViz.prototype._animateParticles = function () {
    if (!this.running) return;

    var self = this;
    var ctx = this.ctx;
    var w = this.width;
    var h = this.height;
    var particles = this.particles;
    var linkPaths = this.linkPaths;
    var links = this.sankeyData.links;

    ctx.clearRect(0, 0, w, h);

    for (var i = 0; i < particles.length; i++) {
      var p = particles[i];
      p.progress += p.speed;
      if (p.progress >= 1) p.progress -= 1;

      var link = links[p.linkIndex];
      var pathEl = linkPaths[p.linkIndex];
      if (!pathEl) continue;

      // Get position along the SVG path
      var totalLen = pathEl.getTotalLength();
      var point = pathEl.getPointAtLength(p.progress * totalLen);

      // Offset vertically within the link width for visual spread
      var halfW = Math.max(link.width * 0.4, 1);
      var offsetY = (Math.sin(p.progress * 6.28 + i) * halfW * 0.5);

      var x = point.x;
      var y = point.y + offsetY;

      // Draw glowing circle
      ctx.save();
      ctx.globalAlpha = 0.8;
      ctx.shadowColor = p.color;
      ctx.shadowBlur = 6;
      ctx.fillStyle = p.color;
      ctx.beginPath();
      ctx.arc(x, y, 2.5, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    }

    this.animId = requestAnimationFrame(function () {
      self._animateParticles();
    });
  };

  // ---------------------------------------------------------------------------
  // Public controls: start / pause / resume
  // ---------------------------------------------------------------------------
  SankeyViz.prototype.start = function () {
    if (this.running) return;
    this.running = true;
    this._animateParticles();
  };

  SankeyViz.prototype.pause = function () {
    this.running = false;
    if (this.animId) {
      cancelAnimationFrame(this.animId);
      this.animId = null;
    }
  };

  SankeyViz.prototype.resume = function () {
    this.start();
  };

  // ---------------------------------------------------------------------------
  // Resize
  // ---------------------------------------------------------------------------
  SankeyViz.prototype.resize = function () {
    if (!this.container || !this.graphData) return;

    var rect = this.container.getBoundingClientRect();
    this.width = rect.width;
    this.height = rect.height;

    // Re-run layout with new dimensions
    var selected = selectPaths(this.graphData);
    this.sankeyData = this._layout(selected);

    // Re-render SVG
    this._renderSVG();

    // Recreate canvas
    this._createCanvas();

    // Reinit particles
    this._initParticles();

    // Restart animation if it was running
    if (this.running) {
      this.running = false;
      this.start();
    }
  };

  // ---------------------------------------------------------------------------
  // Expose globally
  // ---------------------------------------------------------------------------
  window.SankeyViz = SankeyViz;
  window.sankeyViz = new SankeyViz('sankey-container');

})();
