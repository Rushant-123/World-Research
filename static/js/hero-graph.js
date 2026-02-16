/* hero-graph.js
 * Animated force-directed graph on HTML Canvas using D3.js force simulation.
 * Renders the supply-chain dependency graph with staged reveal animation.
 */
(function () {
  'use strict';

  // ── HeroGraph class ──────────────────────────────────────────────────────

  function HeroGraph(canvasId) {
    this.canvasId = canvasId;
    this.canvas = null;
    this.ctx = null;
    this.width = 0;
    this.height = 0;
    this.simulation = null;
    this.nodes = [];
    this.edges = [];
    this.visibleNodes = new Set();
    this.hoveredNode = null;
    this.quadtree = null;
    this.animFrameId = null;
    this.running = false;
    this.startTime = Date.now();
    this.transform = d3.zoomIdentity;
    this.edgeByNode = new Map(); // nodeId -> [edge indices]
    this.counterValue = 0;
    this.counterTarget = 0;
    this.counterAnimId = null;

    var self = this;
    document.addEventListener('graphDataReady', function () {
      self.init();
    });
  }

  // ── Helpers ──────────────────────────────────────────────────────────────

  function nodeRadius(node) {
    if (node.distance === 0) return 8;
    return Math.max(2.5, 1.5 + Math.log10(Math.max(node.price, 0.1) + 1));
  }

  function linkDistance(edge) {
    var s = edge.source;
    var t = edge.target;
    var sd = typeof s === 'object' ? s.distance : 0;
    var td = typeof t === 'object' ? t.distance : 0;
    var minD = Math.min(sd, td);
    if (minD <= 0) return 120;
    if (minD <= 1) return 80;
    return 50;
  }

  function formatPrice(p) {
    if (p >= 1e9) return '$' + (p / 1e9).toFixed(1) + 'B';
    if (p >= 1e6) return '$' + (p / 1e6).toFixed(1) + 'M';
    if (p >= 1e3) return '$' + (p / 1e3).toFixed(1) + 'K';
    return '$' + p;
  }

  // ── Init ─────────────────────────────────────────────────────────────────

  HeroGraph.prototype.init = function () {
    var data = window.graphData;
    if (!data) return;

    this.canvas = document.getElementById(this.canvasId);
    if (!this.canvas) return;

    this.ctx = this.canvas.getContext('2d');
    this.resize();

    // Filter nodes to distance 0-6 (full supply chain)
    var nodeMap = new Map();
    var allNodes = data.nodes;
    for (var i = 0; i < allNodes.length; i++) {
      var n = allNodes[i];
      if (n.distance >= 0 && n.distance <= 6) {
        // Clone to avoid mutating the original
        var clone = {
          id: n.id,
          title: n.title,
          company: n.company,
          country: n.country,
          price: n.price,
          distance: n.distance,
          inputCount: n.inputCount,
          x: undefined,
          y: undefined,
          vx: 0,
          vy: 0
        };
        nodeMap.set(n.id, clone);
      }
    }
    this.nodes = Array.from(nodeMap.values());

    // Build edges referencing only valid nodes
    var allEdges = data.edges;
    var edges = [];
    for (var j = 0; j < allEdges.length; j++) {
      var e = allEdges[j];
      var src = typeof e.source === 'object' ? e.source.id : e.source;
      var tgt = typeof e.target === 'object' ? e.target.id : e.target;
      if (nodeMap.has(src) && nodeMap.has(tgt)) {
        edges.push({ source: src, target: tgt });
      }
    }
    this.edges = edges;

    // Build edge-by-node index for fast hover lookup
    this.edgeByNode = new Map();
    for (var k = 0; k < this.nodes.length; k++) {
      this.edgeByNode.set(this.nodes[k].id, []);
    }
    // Will rebuild after simulation links are set (source/target become objects)

    // Group nodes by distance for staged reveal (D0-D6)
    this.distGroups = [[], [], [], [], [], [], []];
    for (var m = 0; m < this.nodes.length; m++) {
      var nd = this.nodes[m];
      if (nd.distance >= 0 && nd.distance <= 6) {
        this.distGroups[nd.distance].push(nd);
      }
    }

    // Position root node at center
    var root = nodeMap.get('claude-code');
    if (root) {
      root.x = this.width / 2;
      root.y = this.height / 2;
      root.fx = this.width / 2;
      root.fy = this.height / 2;
    }

    // Create force simulation (start with no nodes, add in stages)
    var self = this;
    this.simulation = d3.forceSimulation([])
      .alphaDecay(0.008)
      .force('link', d3.forceLink([]).id(function (d) { return d.id; }).distance(linkDistance))
      .force('charge', d3.forceManyBody().strength(-25))
      .force('center', d3.forceCenter(this.width / 2, this.height / 2))
      .force('collide', d3.forceCollide().radius(function (d) { return nodeRadius(d) + 2; }))
      .on('tick', function () {
        self.rebuildQuadtree();
        self.render();
      });

    this.simulation.stop();

    // Set up interaction
    this.setupInteraction();

    // Don't auto-start - wait for manual trigger
    this.running = false;
  };

  // ── Start Animation ──────────────────────────────────────────────────────

  HeroGraph.prototype.start = function () {
    if (this.running) return;
    this.running = true;
    this.stageReveal();
  };

  // ── Staged Reveal ────────────────────────────────────────────────────────

  HeroGraph.prototype.stageReveal = function () {
    var self = this;

    // Stage 0: claude-code only
    this.addStage(0);

    // Stage 1: distance-1 nodes at T=1500ms
    setTimeout(function () {
      if (!self.running) return;
      self.addStage(1);
    }, 1500);

    // Stage 2: distance-2 nodes at T=3000ms
    setTimeout(function () {
      if (!self.running) return;
      self.addStage(2);
    }, 3000);

    // Stage 3: distance-3 nodes at T=5000ms
    setTimeout(function () {
      if (!self.running) return;
      self.addStage(3);
    }, 5000);

    // Stage 4: distance-4 nodes at T=7000ms
    setTimeout(function () {
      if (!self.running) return;
      self.addStage(4);
    }, 7000);

    // Stage 5: distance-5 nodes (ores) at T=9000ms
    setTimeout(function () {
      if (!self.running) return;
      self.addStage(5);
    }, 9000);

    // Stage 6: distance-6 nodes (mining equipment) at T=11000ms
    setTimeout(function () {
      if (!self.running) return;
      self.addStage(6);
    }, 11000);
  };

  HeroGraph.prototype.addStage = function (distance) {
    var group = this.distGroups[distance];
    if (!group || group.length === 0) return;

    // Position new nodes near their parent (source node) so they spring outward
    for (var i = 0; i < group.length; i++) {
      var node = group[i];
      if (node.x !== undefined && node.y !== undefined) {
        this.visibleNodes.add(node.id);
        continue;
      }
      // Find a parent node that is already visible
      var parentPos = this.findParentPosition(node);
      var jitterX = (Math.random() - 0.5) * 60;
      var jitterY = (Math.random() - 0.5) * 60;
      node.x = parentPos.x + jitterX;
      node.y = parentPos.y + jitterY;
      this.visibleNodes.add(node.id);
    }

    // Gather all visible nodes and matching edges
    var visibleNodesList = [];
    var visibleEdges = [];
    var visibleSet = this.visibleNodes;

    for (var j = 0; j < this.nodes.length; j++) {
      if (visibleSet.has(this.nodes[j].id)) {
        visibleNodesList.push(this.nodes[j]);
      }
    }
    for (var k = 0; k < this.edges.length; k++) {
      var e = this.edges[k];
      var srcId = typeof e.source === 'object' ? e.source.id : e.source;
      var tgtId = typeof e.target === 'object' ? e.target.id : e.target;
      if (visibleSet.has(srcId) && visibleSet.has(tgtId)) {
        visibleEdges.push(e);
      }
    }

    // Update simulation
    this.simulation.nodes(visibleNodesList);
    this.simulation.force('link').links(visibleEdges);
    this.simulation.alpha(0.3).restart();

    // Rebuild edge-by-node index
    this.rebuildEdgeIndex(visibleEdges);

    // Release root pin after stage 1 so it can move
    if (distance >= 1) {
      var root = null;
      for (var m = 0; m < this.nodes.length; m++) {
        if (this.nodes[m].id === 'claude-code') { root = this.nodes[m]; break; }
      }
      if (root) {
        root.fx = null;
        root.fy = null;
      }
    }

    // Animate counter
    this.animateCounter(visibleNodesList.length);
  };

  HeroGraph.prototype.findParentPosition = function (node) {
    var cx = this.width / 2;
    var cy = this.height / 2;
    // Search edges for a source that is already visible and links to this node
    for (var i = 0; i < this.edges.length; i++) {
      var e = this.edges[i];
      var srcId = typeof e.source === 'object' ? e.source.id : e.source;
      var tgtId = typeof e.target === 'object' ? e.target.id : e.target;
      if (tgtId === node.id && this.visibleNodes.has(srcId)) {
        // Find that source node's position
        for (var j = 0; j < this.nodes.length; j++) {
          if (this.nodes[j].id === srcId && this.nodes[j].x !== undefined) {
            return { x: this.nodes[j].x, y: this.nodes[j].y };
          }
        }
      }
      if (srcId === node.id && this.visibleNodes.has(tgtId)) {
        for (var k = 0; k < this.nodes.length; k++) {
          if (this.nodes[k].id === tgtId && this.nodes[k].x !== undefined) {
            return { x: this.nodes[k].x, y: this.nodes[k].y };
          }
        }
      }
    }
    return { x: cx, y: cy };
  };

  HeroGraph.prototype.rebuildEdgeIndex = function (edges) {
    this.edgeByNode = new Map();
    for (var i = 0; i < edges.length; i++) {
      var e = edges[i];
      var srcId = typeof e.source === 'object' ? e.source.id : e.source;
      var tgtId = typeof e.target === 'object' ? e.target.id : e.target;
      if (!this.edgeByNode.has(srcId)) this.edgeByNode.set(srcId, []);
      if (!this.edgeByNode.has(tgtId)) this.edgeByNode.set(tgtId, []);
      this.edgeByNode.get(srcId).push(i);
      this.edgeByNode.get(tgtId).push(i);
    }
    this._currentEdges = edges;
  };

  // ── Counter Animation ────────────────────────────────────────────────────

  HeroGraph.prototype.animateCounter = function (target) {
    var self = this;
    var el = document.getElementById('count-number');
    if (!el) return;

    var start = this.counterValue;
    var end = target;
    var duration = 800;
    var startTime = performance.now();

    if (this.counterAnimId) cancelAnimationFrame(this.counterAnimId);

    function step(now) {
      var elapsed = now - startTime;
      var t = Math.min(elapsed / duration, 1);
      // Ease out cubic
      var eased = 1 - Math.pow(1 - t, 3);
      var current = Math.round(start + (end - start) * eased);
      el.textContent = current;
      self.counterValue = current;
      if (t < 1) {
        self.counterAnimId = requestAnimationFrame(step);
      } else {
        self.counterValue = end;
        el.textContent = end;
      }
    }

    this.counterAnimId = requestAnimationFrame(step);
  };

  // ── Quadtree ─────────────────────────────────────────────────────────────

  HeroGraph.prototype.rebuildQuadtree = function () {
    var visibleSet = this.visibleNodes;
    var filtered = [];
    for (var i = 0; i < this.nodes.length; i++) {
      if (visibleSet.has(this.nodes[i].id)) filtered.push(this.nodes[i]);
    }
    this.quadtree = d3.quadtree()
      .x(function (d) { return d.x; })
      .y(function (d) { return d.y; })
      .addAll(filtered);
  };

  // ── Render ───────────────────────────────────────────────────────────────

  HeroGraph.prototype.render = function () {
    var ctx = this.ctx;
    var w = this.width;
    var h = this.height;
    if (!ctx) return;

    var now = Date.now();
    var t = this.transform;
    var visibleSet = this.visibleNodes;
    var hoveredId = this.hoveredNode ? this.hoveredNode.id : null;
    var hoveredEdgeSet = null;

    // Build set of edge indices connected to hovered node
    if (hoveredId && this.edgeByNode.has(hoveredId)) {
      hoveredEdgeSet = new Set(this.edgeByNode.get(hoveredId));
    }

    // Clear
    ctx.save();
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.fillStyle = '#0a0a1a';
    ctx.fillRect(0, 0, w, h);
    ctx.restore();

    // Apply zoom transform
    ctx.save();
    ctx.translate(t.x, t.y);
    ctx.scale(t.k, t.k);

    // Draw edges
    var edges = this._currentEdges || [];
    ctx.lineCap = 'round';
    for (var i = 0; i < edges.length; i++) {
      var e = edges[i];
      var src = e.source;
      var tgt = e.target;
      if (typeof src !== 'object' || typeof tgt !== 'object') continue;
      if (!visibleSet.has(src.id) || !visibleSet.has(tgt.id)) continue;

      var isHighlighted = hoveredEdgeSet && hoveredEdgeSet.has(i);
      if (isHighlighted) {
        ctx.strokeStyle = 'rgba(0, 212, 255, 0.4)';
        ctx.lineWidth = 1;
      } else {
        ctx.strokeStyle = 'rgba(255,255,255,0.04)';
        ctx.lineWidth = 0.3;
      }
      ctx.beginPath();
      ctx.moveTo(src.x, src.y);
      ctx.lineTo(tgt.x, tgt.y);
      ctx.stroke();
    }

    // Draw nodes
    var distanceColor = window.graphData ? window.graphData.distanceColor : function () { return '#888'; };

    for (var j = 0; j < this.nodes.length; j++) {
      var node = this.nodes[j];
      if (!visibleSet.has(node.id)) continue;

      var r = nodeRadius(node);
      var color = distanceColor(node.distance);

      // Distance 0 (claude-code): pulsing effect
      if (node.distance === 0) {
        var pulse = Math.sin((now - this.startTime) / 400) * 2;
        r = 8 + pulse;
        ctx.shadowBlur = 20;
        ctx.shadowColor = color;
      } else {
        ctx.shadowBlur = 8;
        ctx.shadowColor = color;
      }

      // Distance 3: slightly lower opacity
      if (node.distance === 3) {
        ctx.globalAlpha = 0.6;
      } else {
        ctx.globalAlpha = 1;
      }

      ctx.fillStyle = color;
      ctx.beginPath();
      ctx.arc(node.x, node.y, r, 0, Math.PI * 2);
      ctx.fill();
    }

    // Reset shadow and alpha
    ctx.shadowBlur = 0;
    ctx.shadowColor = 'transparent';
    ctx.globalAlpha = 1;

    // Draw hovered node label
    if (this.hoveredNode && visibleSet.has(this.hoveredNode.id)) {
      var hn = this.hoveredNode;
      var hr = nodeRadius(hn) + 6;
      ctx.fillStyle = '#ffffff';
      ctx.font = '12px -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'bottom';
      ctx.fillText(hn.title, hn.x, hn.y - hr);
    }

    ctx.restore();
  };

  // ── Interaction ──────────────────────────────────────────────────────────

  HeroGraph.prototype.setupInteraction = function () {
    var self = this;
    var canvas = this.canvas;
    var tooltip = document.getElementById('viz-tooltip');

    // Mousemove — hover detection via quadtree
    canvas.addEventListener('mousemove', function (evt) {
      if (!self.quadtree) return;
      var rect = canvas.getBoundingClientRect();
      var mx = evt.clientX - rect.left;
      var my = evt.clientY - rect.top;

      // Invert zoom transform to get data-space coordinates
      var t = self.transform;
      var dx = (mx - t.x) / t.k;
      var dy = (my - t.y) / t.k;

      var found = self.quadtree.find(dx, dy, 15 / t.k);

      if (found && self.visibleNodes.has(found.id)) {
        self.hoveredNode = found;
        canvas.style.cursor = 'pointer';
        // Show tooltip
        if (tooltip) {
          tooltip.style.display = 'block';
          tooltip.style.left = (evt.clientX + 14) + 'px';
          tooltip.style.top = (evt.clientY - 10) + 'px';
          tooltip.innerHTML =
            '<div class="tooltip-title">' + escapeHtml(found.title) + '</div>' +
            '<div class="tooltip-detail">' + escapeHtml(found.company) + ' | ' + escapeHtml(found.country) + '</div>' +
            '<div class="tooltip-detail">' + formatPrice(found.price) + ' | ' + found.inputCount + ' inputs | Distance ' + found.distance + '</div>';
        }
        // Re-render to show highlight
        self.render();
      } else {
        if (self.hoveredNode) {
          self.hoveredNode = null;
          canvas.style.cursor = 'default';
          if (tooltip) tooltip.style.display = 'none';
          self.render();
        }
      }
    });

    canvas.addEventListener('mouseleave', function () {
      self.hoveredNode = null;
      canvas.style.cursor = 'default';
      if (tooltip) tooltip.style.display = 'none';
      self.render();
    });

    // Click — navigate to page
    canvas.addEventListener('click', function (evt) {
      if (self.hoveredNode) {
        window.location.href = '/pages/' + self.hoveredNode.id + '/';
      }
    });

    // Drag behavior
    var dragNode = null;
    var dragSubject = function (evt) {
      if (!self.quadtree) return null;
      var t = self.transform;
      var mx = (evt.x - t.x) / t.k;
      var my = (evt.y - t.y) / t.k;
      var found = self.quadtree.find(mx, my, 15 / t.k);
      if (found && self.visibleNodes.has(found.id)) return found;
      return null;
    };

    var drag = d3.drag()
      .container(canvas)
      .subject(function (evt) { return dragSubject(evt); })
      .on('start', function (evt) {
        if (!evt.subject) return;
        dragNode = evt.subject;
        dragNode.fx = dragNode.x;
        dragNode.fy = dragNode.y;
        self.simulation.alphaTarget(0.1).restart();
      })
      .on('drag', function (evt) {
        if (!dragNode) return;
        var t = self.transform;
        dragNode.fx = (evt.x - t.x) / t.k;
        dragNode.fy = (evt.y - t.y) / t.k;
      })
      .on('end', function (evt) {
        if (!dragNode) return;
        dragNode.fx = null;
        dragNode.fy = null;
        dragNode = null;
        self.simulation.alphaTarget(0);
      });

    d3.select(canvas).call(drag);

    // Zoom behavior
    var zoom = d3.zoom()
      .scaleExtent([0.2, 5])
      .on('zoom', function (evt) {
        self.transform = evt.transform;
        self.render();
      });

    d3.select(canvas).call(zoom);

    // Resize listener
    window.addEventListener('resize', function () {
      self.resize();
      if (self.simulation) {
        self.simulation.force('center', d3.forceCenter(self.width / 2, self.height / 2));
        self.simulation.alpha(0.1).restart();
      }
    });
  };

  // ── Pause / Resume / Resize ──────────────────────────────────────────────

  HeroGraph.prototype.pause = function () {
    this.running = false;
    if (this.simulation) this.simulation.stop();
    if (this.animFrameId) {
      cancelAnimationFrame(this.animFrameId);
      this.animFrameId = null;
    }
  };

  HeroGraph.prototype.resume = function () {
    this.running = true;
    if (this.simulation) this.simulation.alpha(0.1).restart();
  };

  HeroGraph.prototype.resize = function () {
    this.width = window.innerWidth;
    this.height = window.innerHeight;
    if (this.canvas) {
      this.canvas.width = this.width;
      this.canvas.height = this.height;
    }
  };

  // ── Utility ──────────────────────────────────────────────────────────────

  function escapeHtml(str) {
    if (!str) return '';
    return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  }

  // ── Bootstrap ────────────────────────────────────────────────────────────

  window.heroGraph = new HeroGraph('hero-canvas');

})();
