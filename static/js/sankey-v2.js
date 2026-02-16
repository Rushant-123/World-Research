/* sankey-v2.js
 * Redesigned Sankey diagram - Financial flow aesthetic
 * Bold, glowing cost flows with animated particles
 */
(function () {
  'use strict';

  function SankeyViz(containerId) {
    this.containerId = containerId;
    this.container = null;
    this.svg = null;
    this.width = 0;
    this.height = 0;
    this.tooltip = document.getElementById('viz-tooltip');

    var self = this;
    document.addEventListener('graphDataReady', function () {
      console.log('[sankey-v2] graphDataReady received');
      self.init();
    });
  }

  SankeyViz.prototype.init = function () {
    console.log('[sankey-v2] init() called');
    var self = this;
    var retryCount = 0;
    var maxRetries = 10;

    function tryInit() {
      retryCount++;

      if (!window.graphData) {
        console.log('[sankey-v2] Waiting for graph data... (' + retryCount + '/' + maxRetries + ')');
        if (retryCount < maxRetries) {
          setTimeout(tryInit, 300);
        }
        return;
      }

      if (typeof d3 === 'undefined') {
        console.log('[sankey-v2] Waiting for D3... (' + retryCount + '/' + maxRetries + ')');
        if (retryCount < maxRetries) {
          setTimeout(tryInit, 300);
        }
        return;
      }

      if (typeof d3.sankey === 'undefined') {
        console.log('[sankey-v2] Waiting for d3-sankey... (' + retryCount + '/' + maxRetries + ')');
        if (retryCount < maxRetries) {
          setTimeout(tryInit, 300);
        }
        return;
      }

      self.container = document.getElementById(self.containerId);
      if (!self.container) {
        console.error('[sankey-v2] Container not found:', self.containerId);
        return;
      }

      // Force dimensions
      var rect = self.container.getBoundingClientRect();
      self.width = rect.width || 1200;
      self.height = rect.height || 600;

      console.log('[sankey-v2] Container dimensions:', self.width, 'x', self.height);

      if (self.width < 100 || self.height < 100) {
        console.log('[sankey-v2] Invalid dimensions, retrying... (' + retryCount + '/' + maxRetries + ')');
        if (retryCount < maxRetries) {
          setTimeout(tryInit, 300);
        }
        return;
      }

      console.log('[sankey-v2] All checks passed, rendering...');
      self.render();
    }

    tryInit();
  };

  SankeyViz.prototype.render = function () {
    var self = this;
    var graphData = window.graphData;

    console.log('[sankey-v2] render() called');

    // Remove loading class
    this.container.classList.remove('loading');

    // Build simplified data structure
    var data = this.buildSankeyData(graphData);

    if (!data || !data.nodes.length || !data.links.length) {
      console.error('[sankey-v2] No data to render');
      this.container.innerHTML = '<div style="position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);color:#ff006e;font-family:monospace;">Failed to build Sankey data</div>';
      return;
    }

    console.log('[sankey-v2] Data:', data.nodes.length, 'nodes,', data.links.length, 'links');

    // Clear container
    d3.select('#' + this.containerId).selectAll('*').remove();

    // Create SVG
    var svg = d3.select('#' + this.containerId)
      .append('svg')
      .attr('width', this.width)
      .attr('height', this.height)
      .attr('viewBox', [0, 0, this.width, this.height])
      .style('max-width', '100%')
      .style('height', 'auto');

    this.svg = svg;

    // Sankey layout
    var sankey = d3.sankey()
      .nodeId(function(d) { return d.id; })
      .nodeAlign(d3.sankeyLeft)
      .nodeWidth(20)
      .nodePadding(20)
      .extent([[50, 50], [this.width - 50, this.height - 50]]);

    var graph = sankey({
      nodes: data.nodes.map(function(d) { return Object.assign({}, d); }),
      links: data.links.map(function(d) { return Object.assign({}, d); })
    });

    // Gradients
    var defs = svg.append('defs');

    // Glow filter
    var filter = defs.append('filter')
      .attr('id', 'glow')
      .attr('x', '-50%')
      .attr('y', '-50%')
      .attr('width', '200%')
      .attr('height', '200%');

    filter.append('feGaussianBlur')
      .attr('stdDeviation', '4')
      .attr('result', 'coloredBlur');

    var feMerge = filter.append('feMerge');
    feMerge.append('feMergeNode').attr('in', 'coloredBlur');
    feMerge.append('feMergeNode').attr('in', 'SourceGraphic');

    // Link gradients
    graph.links.forEach(function(link, i) {
      var gradient = defs.append('linearGradient')
        .attr('id', 'gradient-' + i)
        .attr('gradientUnits', 'userSpaceOnUse')
        .attr('x1', link.source.x1)
        .attr('x2', link.target.x0);

      gradient.append('stop')
        .attr('offset', '0%')
        .attr('stop-color', self.getColor(link.source.distance));

      gradient.append('stop')
        .attr('offset', '100%')
        .attr('stop-color', self.getColor(link.target.distance));
    });

    // Draw links
    svg.append('g')
      .selectAll('path')
      .data(graph.links)
      .join('path')
        .attr('d', d3.sankeyLinkHorizontal())
        .attr('stroke', function(d, i) { return 'url(#gradient-' + i + ')'; })
        .attr('stroke-width', function(d) { return Math.max(1, d.width); })
        .attr('fill', 'none')
        .attr('opacity', 0.4)
        .style('filter', 'url(#glow)')
        .style('mix-blend-mode', 'screen')
        .on('mouseover', function(event, d) {
          d3.select(this).attr('opacity', 0.8).attr('stroke-width', d.width * 1.2);
          self.showTooltip(event, d.source.name + ' → ' + d.target.name + '<br/>$' + d.value.toFixed(2));
        })
        .on('mouseout', function(event, d) {
          d3.select(this).attr('opacity', 0.4).attr('stroke-width', d.width);
          self.hideTooltip();
        });

    // Draw nodes
    svg.append('g')
      .selectAll('rect')
      .data(graph.nodes)
      .join('rect')
        .attr('x', function(d) { return d.x0; })
        .attr('y', function(d) { return d.y0; })
        .attr('height', function(d) { return d.y1 - d.y0; })
        .attr('width', function(d) { return d.x1 - d.x0; })
        .attr('fill', function(d) { return self.getColor(d.distance); })
        .attr('opacity', 0.9)
        .style('filter', 'url(#glow)')
        .on('mouseover', function(event, d) {
          d3.select(this).attr('opacity', 1);
          var text = d.name + '<br/>Distance: ' + d.distance;
          if (d.value) text += '<br/>Flow: $' + d.value.toFixed(2);
          self.showTooltip(event, text);
        })
        .on('mouseout', function() {
          d3.select(this).attr('opacity', 0.9);
          self.hideTooltip();
        });

    // Draw labels
    svg.append('g')
      .selectAll('text')
      .data(graph.nodes)
      .join('text')
        .attr('x', function(d) { return d.x0 < self.width / 2 ? d.x1 + 6 : d.x0 - 6; })
        .attr('y', function(d) { return (d.y1 + d.y0) / 2; })
        .attr('dy', '0.35em')
        .attr('text-anchor', function(d) { return d.x0 < self.width / 2 ? 'start' : 'end'; })
        .attr('font-size', '12px')
        .attr('font-weight', '600')
        .attr('fill', '#ffffff')
        .attr('opacity', 0.8)
        .text(function(d) { return d.name; })
        .each(function(d) {
          // Truncate long names
          var text = d3.select(this);
          var textLength = text.node().getComputedTextLength();
          var maxLength = 100;
          if (textLength > maxLength) {
            var name = d.name;
            while (textLength > maxLength && name.length > 0) {
              name = name.slice(0, -1);
              text.text(name + '...');
              textLength = text.node().getComputedTextLength();
            }
          }
        });

    console.log('[sankey-v2] Render complete');
  };

  SankeyViz.prototype.buildSankeyData = function(graphData) {
    var nodeMap = graphData.nodeMap;
    var adjacency = graphData.adjacency;
    var edges = graphData.edges;

    var nodes = [];
    var links = [];
    var nodeIds = new Set();

    // Start from claude-code
    var root = 'claude-code';
    if (!nodeMap.has(root)) {
      console.error('[sankey-v2] Root node not found');
      return null;
    }

    nodeIds.add(root);
    nodes.push({
      id: root,
      name: nodeMap.get(root).title || root,
      distance: 0
    });

    // Add distance-1 nodes (direct inputs)
    var dist1 = adjacency.get(root) || [];
    dist1.slice(0, 10).forEach(function(id) {
      if (nodeMap.has(id)) {
        nodeIds.add(id);
        nodes.push({
          id: id,
          name: nodeMap.get(id).title || id,
          distance: 1
        });
      }
    });

    // Add some distance-2 nodes
    nodes.filter(function(n) { return n.distance === 1; }).forEach(function(n) {
      var inputs = adjacency.get(n.id) || [];
      inputs.slice(0, 3).forEach(function(id) {
        if (!nodeIds.has(id) && nodeMap.has(id)) {
          nodeIds.add(id);
          nodes.push({
            id: id,
            name: nodeMap.get(id).title || id,
            distance: 2
          });
        }
      });
    });

    // Build links
    edges.forEach(function(edge) {
      if (nodeIds.has(edge.source) && nodeIds.has(edge.target)) {
        links.push({
          source: edge.target,  // Reversed for Sankey (inputs on left)
          target: edge.source,
          value: edge.cost || 1
        });
      }
    });

    return { nodes: nodes, links: links };
  };

  SankeyViz.prototype.getColor = function(distance) {
    var colors = {
      0: '#00e5ff',  // Electric blue
      1: '#39ff14',  // Electric green
      2: '#ffed00',  // Electric yellow
      3: '#ff006e'   // Electric pink
    };
    return colors[distance] || '#666';
  };

  SankeyViz.prototype.showTooltip = function(event, html) {
    if (!this.tooltip) return;
    this.tooltip.innerHTML = html;
    this.tooltip.style.display = 'block';
    this.tooltip.style.left = (event.pageX + 10) + 'px';
    this.tooltip.style.top = (event.pageY + 10) + 'px';
  };

  SankeyViz.prototype.hideTooltip = function() {
    if (!this.tooltip) return;
    this.tooltip.style.display = 'none';
  };

  SankeyViz.prototype.resize = function() {
    if (!this.container) return;
    var rect = this.container.getBoundingClientRect();
    if (rect.width !== this.width || rect.height !== this.height) {
      this.width = rect.width;
      this.height = rect.height;
      this.render();
    }
  };

  // Export
  window.SankeyViz = SankeyViz;
  window.sankeyViz = new SankeyViz('sankey-container');

})();
