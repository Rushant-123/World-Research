/* sunburst-fast.js
 * Fast, responsive sunburst with instant hover feedback
 * Beautiful AND performant
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
    this.currentHover = null;

    var self = this;
    document.addEventListener('graphDataReady', function () {
      console.log('[sunburst-fast] graphDataReady received');
      self.init();
    });
  }

  SunburstViz.prototype.init = function () {
    console.log('[sunburst-fast] init() called');

    if (!window.graphData) {
      console.error('[sunburst-fast] No graph data');
      return;
    }

    this.container = document.getElementById(this.containerId);
    if (!this.container) {
      console.error('[sunburst-fast] Container not found');
      return;
    }

    var rect = this.container.getBoundingClientRect();
    if (rect.height < 400) {
      this.container.style.minHeight = '600px';
      rect = this.container.getBoundingClientRect();
    }

    this.width = rect.width || 1200;
    this.height = rect.height || 600;
    this.radius = Math.min(this.width, this.height) / 2 - 40;

    if (typeof d3 === 'undefined') {
      console.error('[sunburst-fast] D3 not loaded');
      return;
    }

    console.log('[sunburst-fast] Starting render...');
    this.render();
  };

  SunburstViz.prototype.render = function () {
    var self = this;

    console.log('[sunburst-fast] render() called');
    this.container.classList.remove('loading');

    // Build hierarchy - show all 6 distance levels
    var treeData = this.buildHierarchy('claude-code', window.graphData, 6);
    if (!treeData) {
      console.error('[sunburst-fast] Failed to build hierarchy');
      return;
    }

    this.root = d3.hierarchy(treeData)
      .sum(function(d) { return d.children ? 0 : 1; })
      .sort(function(a, b) { return b.value - a.value; });

    console.log('[sunburst-fast] Hierarchy: ' + this.root.descendants().length + ' nodes');

    // Clear container
    d3.select('#' + this.containerId).selectAll('*').remove();

    // Create SVG
    var svg = d3.select('#' + this.containerId)
      .append('svg')
      .attr('width', this.width)
      .attr('height', this.height)
      .attr('viewBox', [-this.width / 2, -this.height / 2, this.width, this.height])
      .style('font-family', 'Darker Grotesque, sans-serif');

    this.svg = svg;

    // Simple glow filter (no expensive effects)
    var defs = svg.append('defs');
    var glow = defs.append('filter')
      .attr('id', 'sunburst-glow-fast')
      .attr('x', '-50%')
      .attr('y', '-50%')
      .attr('width', '200%')
      .attr('height', '200%');

    glow.append('feGaussianBlur')
      .attr('stdDeviation', '3')
      .attr('result', 'blur');

    var feMerge = glow.append('feMerge');
    feMerge.append('feMergeNode').attr('in', 'blur');
    feMerge.append('feMergeNode').attr('in', 'SourceGraphic');

    // Partition layout
    var partition = d3.partition()
      .size([2 * Math.PI, this.radius]);

    partition(this.root);

    // Arc generator
    var arc = d3.arc()
      .startAngle(function(d) { return d.x0; })
      .endAngle(function(d) { return d.x1; })
      .padAngle(0.003)
      .padRadius(this.radius / 2)
      .innerRadius(function(d) { return d.y0; })
      .outerRadius(function(d) { return d.y1; });

    // Draw arcs - NO TRANSITIONS on hover for instant response
    var paths = svg.append('g')
      .attr('class', 'arcs')
      .selectAll('path')
      .data(this.root.descendants())
      .join('path')
        .attr('d', arc)
        .attr('fill', function(d) { return self.getColor(d.depth); })
        .attr('fill-opacity', 0.7)
        .attr('stroke', function(d) { return self.getColor(d.depth); })
        .attr('stroke-width', 1)
        .attr('stroke-opacity', 0.9)
        .style('cursor', 'pointer')
        .style('opacity', 0)
        .on('mouseover', function(event, d) {
          // INSTANT feedback - no transition!
          if (self.currentHover) {
            d3.select(self.currentHover)
              .attr('fill-opacity', 0.7)
              .attr('stroke-width', 1)
              .style('filter', 'none');
          }

          d3.select(this)
            .attr('fill-opacity', 1)
            .attr('stroke-width', 2.5)
            .style('filter', 'url(#sunburst-glow-fast)');

          self.currentHover = this;

          // Update on-chart hover labels INSTANTLY
          var name = (d.data.title || d.data.id);
          if (name.length > 30) name = name.slice(0, 30) + '...';

          svg.select('.hover-label')
            .text(name)
            .attr('fill', self.getColor(d.depth))
            .attr('opacity', 1);

          svg.select('.hover-distance')
            .text('Distance ' + d.depth + ' • ' + (d.children ? d.children.length : 0) + ' children')
            .attr('fill', self.getColor(d.depth))
            .attr('opacity', 0.8);

          // Hide static labels when showing hover
          svg.select('.center-static-label').attr('opacity', 0);
          svg.select('.center-static-count').attr('opacity', 0);

          // Tooltip
          var text = '<strong>' + (d.data.title || d.data.id) + '</strong>';
          if (d.depth > 0) {
            text += '<br/>Distance: ' + d.depth;
            text += '<br/>Children: ' + (d.children ? d.children.length : 0);
            if (d.value) text += '<br/>Size: ' + d.value;
          }
          self.showTooltip(event, text);
        })
        .on('mouseout', function() {
          d3.select(this)
            .attr('fill-opacity', 0.7)
            .attr('stroke-width', 1)
            .style('filter', 'none');

          self.currentHover = null;

          // Hide on-chart hover labels INSTANTLY
          svg.select('.hover-label').attr('opacity', 0);
          svg.select('.hover-distance').attr('opacity', 0);

          // Restore static labels
          svg.select('.center-static-label').attr('opacity', 0.5);
          svg.select('.center-static-count').attr('opacity', 0.7);

          self.hideTooltip();
        })
        .on('click', function(event, d) {
          if (d.data.id && d.data.id !== 'root') {
            window.location.href = '/pages/' + d.data.id + '/';
          }
        });

    // Fade in with stagger
    paths
      .transition()
      .duration(600)
      .delay(function(d) { return d.depth * 80; })
      .ease(d3.easeCubicOut)
      .style('opacity', 1);

    // Center labels
    var centerGroup = svg.append('g')
      .attr('class', 'center-labels');

    centerGroup.append('text')
      .attr('text-anchor', 'middle')
      .attr('dy', '-0.5em')
      .attr('font-size', '22px')
      .attr('font-weight', '800')
      .attr('fill', '#ffffff')
      .attr('opacity', 0)
      .attr('class', 'center-static-label')
      .text('Supply Chain')
      .transition()
      .duration(800)
      .delay(300)
      .attr('opacity', 0.5);

    centerGroup.append('text')
      .attr('text-anchor', 'middle')
      .attr('dy', '1em')
      .attr('font-size', '15px')
      .attr('font-weight', '600')
      .attr('fill', this.getColor(0))
      .attr('opacity', 0)
      .attr('class', 'center-static-count')
      .text(this.root.descendants().length + ' Products')
      .transition()
      .duration(800)
      .delay(500)
      .attr('opacity', 0.7);

    // Hover label (appears on top when hovering segments)
    var hoverLabel = centerGroup.append('text')
      .attr('class', 'hover-label')
      .attr('text-anchor', 'middle')
      .attr('dy', '-0.3em')
      .attr('font-size', '28px')
      .attr('font-weight', '900')
      .attr('fill', '#ffffff')
      .attr('opacity', 0)
      .style('text-shadow', '0 0 20px rgba(0, 229, 255, 0.8), 0 0 40px rgba(0, 229, 255, 0.4), 0 2px 8px rgba(0, 0, 0, 0.9)')
      .style('pointer-events', 'none');

    var hoverDistance = centerGroup.append('text')
      .attr('class', 'hover-distance')
      .attr('text-anchor', 'middle')
      .attr('dy', '1.3em')
      .attr('font-size', '14px')
      .attr('font-weight', '600')
      .attr('fill', this.getColor(0))
      .attr('opacity', 0)
      .style('text-shadow', '0 0 10px rgba(0, 0, 0, 0.9)')
      .style('pointer-events', 'none');

    console.log('[sunburst-fast] Render complete');
  };

  SunburstViz.prototype.buildHierarchy = function(rootId, graphData, maxDepth) {
    var nodeMap = graphData.nodeMap;
    var adjacency = graphData.adjacency;

    if (!nodeMap.has(rootId)) {
      console.error('[sunburst-fast] Root not found:', rootId);
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
      0: '#00e5ff',  // Cyan - Root
      1: '#39ff14',  // Green - Utilities
      2: '#ffed00',  // Yellow - Infrastructure
      3: '#ff006e',  // Pink - Components
      4: '#9d4edd',  // Purple - Materials
      5: '#ff5722',  // Orange - Ores/Raw
      6: '#8b4513'   // Brown - Mining Equipment
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
