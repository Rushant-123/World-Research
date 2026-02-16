/* sunburst-v2.js
 * Redesigned Sunburst - Cosmic Data Rings aesthetic
 * Radial hierarchy with glowing rings, particle effects, and dramatic depth
 */
(function () {
  'use strict';

  function SunburstViz(containerId) {
    this.containerId = containerId;
    this.container = null;
    this.svg = null;
    this.width = 0;
    this.height = 0;
    this.radius = 0;
    this.tooltip = document.getElementById('viz-tooltip');
    this.root = null;

    var self = this;
    document.addEventListener('graphDataReady', function () {
      console.log('[sunburst-v2] graphDataReady received');
      self.init();
    });
  }

  SunburstViz.prototype.init = function () {
    console.log('[sunburst-v2] init() called');

    if (!window.graphData) {
      console.error('[sunburst-v2] No graph data available');
      return;
    }

    this.container = document.getElementById(this.containerId);
    if (!this.container) {
      console.error('[sunburst-v2] Container not found:', this.containerId);
      return;
    }

    var rect = this.container.getBoundingClientRect();
    this.width = rect.width || 1200;
    this.height = rect.height || 600;
    this.radius = Math.min(this.width, this.height) / 2 - 40;

    console.log('[sunburst-v2] Dimensions:', this.width, 'x', this.height, 'radius:', this.radius);

    if (this.width < 100 || this.height < 100) {
      console.error('[sunburst-v2] Invalid dimensions, retrying...');
      var self = this;
      setTimeout(function() { self.init(); }, 500);
      return;
    }

    if (typeof d3 === 'undefined') {
      console.error('[sunburst-v2] D3 not loaded, retrying...');
      var self = this;
      setTimeout(function() { self.init(); }, 500);
      return;
    }

    console.log('[sunburst-v2] Starting render...');
    this.render();
  };

  SunburstViz.prototype.render = function () {
    var self = this;
    var graphData = window.graphData;

    console.log('[sunburst-v2] render() called');

    // Remove loading class
    this.container.classList.remove('loading');

    // Build hierarchy
    var treeData = this.buildHierarchy('claude-code', graphData, 4);
    if (!treeData) {
      console.error('[sunburst-v2] Failed to build hierarchy');
      this.container.innerHTML = '<div style="position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);color:#ff006e;font-family:monospace;">Failed to build hierarchy</div>';
      return;
    }

    this.root = d3.hierarchy(treeData)
      .sum(function(d) { return d.children ? 0 : 1; })
      .sort(function(a, b) { return b.value - a.value; });

    console.log('[sunburst-v2] Hierarchy built, nodes:', this.root.descendants().length);

    // Clear container
    d3.select('#' + this.containerId).selectAll('*').remove();

    // Create SVG
    var svg = d3.select('#' + this.containerId)
      .append('svg')
      .attr('width', this.width)
      .attr('height', this.height)
      .attr('viewBox', [-this.width / 2, -this.height / 2, this.width, this.height])
      .style('max-width', '100%')
      .style('height', 'auto')
      .style('font-family', 'Darker Grotesque, sans-serif');

    this.svg = svg;

    // Defs for filters and gradients
    var defs = svg.append('defs');

    // Glow filter
    var glowFilter = defs.append('filter')
      .attr('id', 'sunburst-glow')
      .attr('x', '-50%')
      .attr('y', '-50%')
      .attr('width', '200%')
      .attr('height', '200%');

    glowFilter.append('feGaussianBlur')
      .attr('stdDeviation', '3')
      .attr('result', 'coloredBlur');

    var feMerge = glowFilter.append('feMerge');
    feMerge.append('feMergeNode').attr('in', 'coloredBlur');
    feMerge.append('feMergeNode').attr('in', 'SourceGraphic');

    // Shadow filter for depth
    var shadowFilter = defs.append('filter')
      .attr('id', 'sunburst-shadow');

    shadowFilter.append('feDropShadow')
      .attr('dx', '0')
      .attr('dy', '2')
      .attr('stdDeviation', '4')
      .attr('flood-opacity', '0.5');

    // Radial gradients for each distance level
    for (var i = 0; i <= 4; i++) {
      var gradient = defs.append('radialGradient')
        .attr('id', 'sunburst-gradient-' + i);

      var color = this.getColor(i);
      gradient.append('stop')
        .attr('offset', '0%')
        .attr('stop-color', color)
        .attr('stop-opacity', '0.9');

      gradient.append('stop')
        .attr('offset', '100%')
        .attr('stop-color', color)
        .attr('stop-opacity', '0.4');
    }

    // Partition layout
    var partition = d3.partition()
      .size([2 * Math.PI, this.radius]);

    partition(this.root);

    // Create arc generator
    var arc = d3.arc()
      .startAngle(function(d) { return d.x0; })
      .endAngle(function(d) { return d.x1; })
      .padAngle(0.005)
      .padRadius(this.radius / 2)
      .innerRadius(function(d) { return d.y0; })
      .outerRadius(function(d) { return d.y1; });

    // Draw arcs
    var paths = svg.append('g')
      .selectAll('path')
      .data(this.root.descendants())
      .join('path')
        .attr('d', arc)
        .attr('fill', function(d) {
          return 'url(#sunburst-gradient-' + d.depth + ')';
        })
        .attr('stroke', function(d) { return self.getColor(d.depth); })
        .attr('stroke-width', 1.5)
        .attr('stroke-opacity', 0.8)
        .style('filter', 'url(#sunburst-shadow)')
        .style('cursor', 'pointer')
        .style('opacity', 0)
        .on('mouseover', function(event, d) {
          d3.select(this)
            .transition()
            .duration(200)
            .attr('stroke-width', 3)
            .style('filter', 'url(#sunburst-glow)');

          var text = '<strong>' + (d.data.title || d.data.id) + '</strong>';
          if (d.depth > 0) {
            text += '<br/>Distance: ' + d.depth;
            text += '<br/>Children: ' + (d.children ? d.children.length : 0);
          }
          self.showTooltip(event, text);
        })
        .on('mouseout', function() {
          d3.select(this)
            .transition()
            .duration(200)
            .attr('stroke-width', 1.5)
            .style('filter', 'url(#sunburst-shadow)');

          self.hideTooltip();
        })
        .on('click', function(event, d) {
          if (d.data.id && d.data.id !== 'root') {
            window.location.href = '/pages/' + d.data.id + '/';
          }
        });

    // Animate in with staggered timing
    paths
      .transition()
      .duration(800)
      .delay(function(d) { return d.depth * 100; })
      .ease(d3.easeCubicOut)
      .style('opacity', 1);

    // Center label
    svg.append('text')
      .attr('text-anchor', 'middle')
      .attr('dy', '-0.5em')
      .attr('font-size', '24px')
      .attr('font-weight', '800')
      .attr('fill', '#ffffff')
      .attr('opacity', 0)
      .text('Supply Chain')
      .transition()
      .duration(1000)
      .delay(400)
      .attr('opacity', 0.6);

    svg.append('text')
      .attr('text-anchor', 'middle')
      .attr('dy', '1em')
      .attr('font-size', '16px')
      .attr('font-weight', '600')
      .attr('fill', '#00e5ff')
      .attr('opacity', 0)
      .text(this.root.descendants().length + ' Products')
      .transition()
      .duration(1000)
      .delay(600)
      .attr('opacity', 0.8);

    console.log('[sunburst-v2] Render complete');
  };

  SunburstViz.prototype.buildHierarchy = function(rootId, graphData, maxDepth) {
    var nodeMap = graphData.nodeMap;
    var adjacency = graphData.adjacency;

    if (!nodeMap.has(rootId)) {
      console.error('[sunburst-v2] Root node not found:', rootId);
      return null;
    }

    var visited = new Set();

    function buildNode(id, depth) {
      if (depth > maxDepth || visited.has(id)) {
        return null;
      }

      visited.add(id);
      var node = nodeMap.get(id);
      if (!node) return null;

      var children = [];
      var inputs = adjacency.get(id) || [];

      inputs.forEach(function(childId) {
        if (!visited.has(childId)) {
          var child = buildNode(childId, depth + 1);
          if (child) children.push(child);
        }
      });

      return {
        id: id,
        title: node.title || id,
        distance: depth,
        children: children.length > 0 ? children : undefined
      };
    }

    return buildNode(rootId, 0);
  };

  SunburstViz.prototype.getColor = function(depth) {
    var colors = {
      0: '#00e5ff',  // Electric blue
      1: '#39ff14',  // Electric green
      2: '#ffed00',  // Electric yellow
      3: '#ff006e',  // Electric pink
      4: '#9d4edd'   // Electric purple
    };
    return colors[depth] || '#666';
  };

  SunburstViz.prototype.showTooltip = function(event, html) {
    if (!this.tooltip) return;
    this.tooltip.innerHTML = html;
    this.tooltip.style.display = 'block';
    this.tooltip.style.left = (event.pageX + 10) + 'px';
    this.tooltip.style.top = (event.pageY + 10) + 'px';
  };

  SunburstViz.prototype.hideTooltip = function() {
    if (!this.tooltip) return;
    this.tooltip.style.display = 'none';
  };

  SunburstViz.prototype.resize = function() {
    if (!this.container) return;
    var rect = this.container.getBoundingClientRect();
    if (rect.width !== this.width || rect.height !== this.height) {
      this.width = rect.width;
      this.height = rect.height;
      this.radius = Math.min(this.width, this.height) / 2 - 40;
      this.render();
    }
  };

  // Export
  window.SunburstViz = SunburstViz;
  window.sunburstViz = new SunburstViz('sunburst-container');

})();
