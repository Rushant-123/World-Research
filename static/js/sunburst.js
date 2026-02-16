/* sunburst.js
 * Zoomable D3 sunburst chart showing the dependency tree radiating outward
 * from Claude Code. Listens for "graphDataReady" and renders into
 * #sunburst-container.
 */
(function () {
  'use strict';

  // ---------------------------------------------------------------------------
  // Helpers
  // ---------------------------------------------------------------------------

  function formatPrice(p) {
    if (p == null) return '$?';
    if (p >= 1e9) return '$' + (p / 1e9).toFixed(1) + 'B';
    if (p >= 1e6) return '$' + (p / 1e6).toFixed(1) + 'M';
    if (p >= 1e3) return '$' + (p / 1e3).toFixed(1) + 'K';
    return '$' + p.toFixed(2);
  }

  // ---------------------------------------------------------------------------
  // Build a tree from the DAG
  // ---------------------------------------------------------------------------

  function buildHierarchy(rootId, graphData, maxDepth) {
    var visited = new Set();

    function build(nodeId, depth) {
      if (depth > maxDepth || visited.has(nodeId)) return null;
      visited.add(nodeId);

      var node = graphData.nodeMap.get(nodeId);
      if (!node) return null;

      var childIds = graphData.adjacency.get(nodeId) || [];
      var children = childIds
        .map(function (cid) { return build(cid, depth + 1); })
        .filter(Boolean);

      return {
        id: nodeId,
        title: node.title,
        company: node.company || '',
        country: node.country || '',
        price: node.price,
        distance: depth,
        inputCount: childIds.length,
        children: children.length > 0 ? children : undefined
      };
    }

    return build(rootId, 0);
  }

  // ---------------------------------------------------------------------------
  // SunburstViz class
  // ---------------------------------------------------------------------------

  function SunburstViz(containerId) {
    this.containerId = containerId;
    this.container = null;
    this.svg = null;
    this.root = null;
    this.currentRoot = null;
    this.arcGroup = null;
    this.centerLabel = null;
    this.centerSub = null;
    this.breadcrumbDiv = null;
    this.tooltip = null;
    this.width = 0;
    this.height = 0;
    this.radius = 0;
    this.arc = null;
    this.started = false;
    this.graphData = null;

    var self = this;
    document.addEventListener('graphDataReady', function () {
      self.init();
    });
  }

  // ---- init -----------------------------------------------------------------

  SunburstViz.prototype.init = function () {
    this.graphData = window.graphData;
    if (!this.graphData) return;

    this.container = document.getElementById(this.containerId);
    if (!this.container) return;

    this.tooltip = document.getElementById('viz-tooltip');

    // Build hierarchy tree (max depth 3 = distance 0..3 = 4 levels)
    var treeData = buildHierarchy('claude-code', this.graphData, 3);
    if (!treeData) return;

    // D3 hierarchy
    this.root = d3.hierarchy(treeData)
      .sum(function (d) { return d.children ? 0 : 1; })
      .sort(function (a, b) { return b.value - a.value; });

    // Dimensions
    this.calcDimensions();

    // Partition layout
    var partition = d3.partition()
      .size([2 * Math.PI, this.radius]);
    partition(this.root);

    // Store initial positions for entry animation
    this.root.each(function (d) {
      d.initial = { x0: d.x0, x1: d.x1, y0: d.y0, y1: d.y1 };
      d.current = { x0: d.x0, x1: d.x1, y0: d.y0, y1: d.y1 };
    });

    this.currentRoot = this.root;

    // Build DOM
    this.createBreadcrumb();
    this.createSVG();
    this.renderArcs();
    this.createCenterLabel();
    this.updateBreadcrumb(this.root);
  };

  // ---- dimensions -----------------------------------------------------------

  SunburstViz.prototype.calcDimensions = function () {
    var rect = this.container.getBoundingClientRect();
    this.width = rect.width || 600;
    this.height = this.width; // square
    this.radius = this.width / 2;
  };

  // ---- breadcrumb -----------------------------------------------------------

  SunburstViz.prototype.createBreadcrumb = function () {
    // Remove previous if exists
    if (this.breadcrumbDiv) this.breadcrumbDiv.remove();

    this.breadcrumbDiv = document.createElement('div');
    this.breadcrumbDiv.style.cssText =
      'text-align:center;padding:8px 0;font-size:0.85rem;color:rgba(255,255,255,0.5);' +
      'min-height:28px;letter-spacing:0.03em;';
    this.container.parentNode.insertBefore(this.breadcrumbDiv, this.container);
  };

  SunburstViz.prototype.updateBreadcrumb = function (target) {
    var self = this;
    var ancestors = target.ancestors().reverse(); // root first
    var html = '';

    ancestors.forEach(function (a, i) {
      var title = a.data.title || a.data.id;
      if (i === ancestors.length - 1) {
        // Current node — not clickable
        html += '<span style="color:#fff;font-weight:600;">' + title + '</span>';
      } else {
        html += '<span class="sunburst-crumb" data-idx="' + i + '" ' +
          'style="cursor:pointer;color:rgba(255,255,255,0.5);transition:color 0.2s;">' +
          title + '</span>';
        html += ' <span style="color:rgba(255,255,255,0.2);margin:0 6px;">&#9656;</span> ';
      }
    });

    this.breadcrumbDiv.innerHTML = html;

    // Attach click handlers
    var crumbs = this.breadcrumbDiv.querySelectorAll('.sunburst-crumb');
    crumbs.forEach(function (el) {
      el.addEventListener('mouseenter', function () { el.style.color = '#fff'; });
      el.addEventListener('mouseleave', function () { el.style.color = 'rgba(255,255,255,0.5)'; });
      el.addEventListener('click', function () {
        var idx = parseInt(el.getAttribute('data-idx'), 10);
        var node = ancestors[idx];
        if (node) self.zoomTo(node);
      });
    });
  };

  // ---- SVG ------------------------------------------------------------------

  SunburstViz.prototype.createSVG = function () {
    // Remove old
    d3.select('#' + this.containerId).select('svg').remove();

    this.svg = d3.select('#' + this.containerId)
      .append('svg')
      .attr('viewBox', [
        -this.width / 2, -this.height / 2,
        this.width, this.height
      ].join(' '))
      .style('font', '10px sans-serif');

    this.arcGroup = this.svg.append('g');
  };

  // ---- arc generator --------------------------------------------------------

  SunburstViz.prototype.makeArc = function () {
    return d3.arc()
      .startAngle(function (d) { return d.current.x0; })
      .endAngle(function (d) { return d.current.x1; })
      .innerRadius(function (d) { return d.current.y0; })
      .outerRadius(function (d) { return Math.max(d.current.y0, d.current.y1 - 1); });
  };

  // ---- render arcs ----------------------------------------------------------

  SunburstViz.prototype.renderArcs = function () {
    var self = this;
    var graphData = this.graphData;
    var arcGen = this.makeArc();

    // All descendants (skip root — we draw that as a center circle)
    var nodes = this.root.descendants().filter(function (d) { return d.depth > 0; });

    this.paths = this.arcGroup.selectAll('path')
      .data(nodes, function (d) { return d.data.id; })
      .join('path')
      .attr('d', function (d) {
        // Start collapsed for entry animation
        if (!self.started) {
          var collapsed = { current: { x0: d.current.x0, x1: d.current.x1, y0: 0, y1: 0 } };
          return d3.arc()
            .startAngle(function (n) { return n.current.x0; })
            .endAngle(function (n) { return n.current.x1; })
            .innerRadius(function (n) { return n.current.y0; })
            .outerRadius(function (n) { return n.current.y1; })(collapsed);
        }
        return arcGen(d);
      })
      .attr('fill', function (d) { return graphData.distanceColor(d.depth); })
      .attr('fill-opacity', function (d) { return 1.0 - d.depth * 0.15; })
      .attr('stroke', 'rgba(10, 10, 26, 0.5)')
      .attr('stroke-width', 0.5)
      .style('cursor', 'pointer')
      .on('click', function (event, d) { self.handleClick(event, d); })
      .on('mouseenter', function (event, d) { self.handleMouseEnter(event, d, this); })
      .on('mousemove', function (event) { self.handleMouseMove(event); })
      .on('mouseleave', function (event, d) { self.handleMouseLeave(event, d); });

    // Center circle for root
    this.arcGroup.selectAll('circle.sunburst-root').remove();
    this.arcGroup.append('circle')
      .attr('class', 'sunburst-root')
      .attr('r', this.root.y1 ? this.root.y1 : this.radius / (this.root.height + 1))
      .attr('fill', graphData.distanceColor(0))
      .attr('fill-opacity', 0.25)
      .attr('stroke', graphData.distanceColor(0))
      .attr('stroke-width', 1.5)
      .attr('stroke-opacity', 0.6)
      .style('cursor', 'pointer')
      .on('click', function () {
        // Zoom back to root
        if (self.currentRoot !== self.root) {
          self.zoomTo(self.root);
        }
      });
  };

  // ---- center label ---------------------------------------------------------

  SunburstViz.prototype.createCenterLabel = function () {
    var root = this.root;

    this.centerLabel = this.svg.append('text')
      .attr('text-anchor', 'middle')
      .attr('dy', '-0.2em')
      .style('font-size', '14px')
      .style('font-weight', '700')
      .style('fill', '#fff')
      .style('pointer-events', 'none')
      .text(root.data.title);

    this.centerSub = this.svg.append('text')
      .attr('text-anchor', 'middle')
      .attr('dy', '1.2em')
      .style('font-size', '11px')
      .style('fill', 'rgba(255,255,255,0.45)')
      .style('pointer-events', 'none')
      .text(formatPrice(root.data.price) + '  \u00B7  ' + (root.data.inputCount || 0) + ' inputs');
  };

  SunburstViz.prototype.updateCenterLabel = function (d) {
    this.centerLabel.text(d.data.title);
    this.centerSub.text(
      formatPrice(d.data.price) + '  \u00B7  ' + (d.data.inputCount || 0) + ' inputs'
    );
  };

  // ---- interaction: hover ---------------------------------------------------

  SunburstViz.prototype.handleMouseEnter = function (event, d, el) {
    var self = this;

    // Dim others
    this.paths.attr('fill-opacity', function (n) {
      return n === d ? 1.0 : (1.0 - n.depth * 0.15) * 0.6;
    });

    // Build tooltip content
    var inputs = this.graphData.adjacency.get(d.data.id) || [];
    var html = '<div class="tooltip-title">' + d.data.title + '</div>' +
      '<div class="tooltip-detail">' +
      (d.data.company ? d.data.company + '<br>' : '') +
      (d.data.country ? d.data.country + '<br>' : '') +
      formatPrice(d.data.price) + '<br>' +
      inputs.length + ' inputs' +
      '</div>';

    if (this.tooltip) {
      this.tooltip.innerHTML = html;
      this.tooltip.style.display = 'block';
      this.positionTooltip(event);
    }
  };

  SunburstViz.prototype.handleMouseMove = function (event) {
    this.positionTooltip(event);
  };

  SunburstViz.prototype.handleMouseLeave = function () {
    // Restore opacity
    this.paths.attr('fill-opacity', function (d) {
      return d.visible === false ? 0 : (1.0 - d.depth * 0.15);
    });
    if (this.tooltip) {
      this.tooltip.style.display = 'none';
    }
  };

  SunburstViz.prototype.positionTooltip = function (event) {
    if (!this.tooltip) return;
    var x = event.clientX + 14;
    var y = event.clientY - 14;
    var tw = this.tooltip.offsetWidth;
    var th = this.tooltip.offsetHeight;
    if (x + tw > window.innerWidth - 10) x = event.clientX - tw - 14;
    if (y + th > window.innerHeight - 10) y = event.clientY - th - 14;
    if (y < 10) y = 10;
    this.tooltip.style.left = x + 'px';
    this.tooltip.style.top = y + 'px';
  };

  // ---- interaction: click to zoom -------------------------------------------

  SunburstViz.prototype.handleClick = function (event, p) {
    this.zoomTo(p);
  };

  SunburstViz.prototype.zoomTo = function (p) {
    var self = this;
    this.currentRoot = p;

    // Calculate target positions
    var pX0 = p.x0;
    var pX1 = p.x1;
    var pY0 = p.y0;

    this.root.each(function (d) {
      d.target = {
        x0: Math.max(0, Math.min(1, (d.x0 - pX0) / (pX1 - pX0))) * 2 * Math.PI,
        x1: Math.max(0, Math.min(1, (d.x1 - pX0) / (pX1 - pX0))) * 2 * Math.PI,
        y0: Math.max(0, d.y0 - pY0),
        y1: Math.max(0, d.y1 - pY0)
      };
    });

    var arcGen = this.makeArc();

    var t = this.svg.transition()
      .duration(750)
      .ease(d3.easeCubicInOut);

    this.paths.transition(t)
      .tween('data', function (d) {
        var ix0 = d3.interpolate(d.current.x0, d.target.x0);
        var ix1 = d3.interpolate(d.current.x1, d.target.x1);
        var iy0 = d3.interpolate(d.current.y0, d.target.y0);
        var iy1 = d3.interpolate(d.current.y1, d.target.y1);
        return function (t) {
          d.current.x0 = ix0(t);
          d.current.x1 = ix1(t);
          d.current.y0 = iy0(t);
          d.current.y1 = iy1(t);
        };
      })
      .attrTween('d', function (d) {
        return function () { return arcGen(d); };
      })
      .attr('fill-opacity', function (d) {
        // Hide arcs that are no longer visible
        var visible = d.target.x1 > d.target.x0 + 0.001;
        d.visible = visible;
        if (!visible) return 0;
        // Recompute depth relative to new root
        var relDepth = d.depth - p.depth;
        return relDepth > 0 ? (1.0 - relDepth * 0.15) : 0;
      });

    // Update center circle radius
    var newCenterR = p.y1 ? p.y1 - pY0 : this.radius / (this.root.height + 1);
    this.arcGroup.select('circle.sunburst-root')
      .transition(t)
      .attr('r', newCenterR);

    // Update labels
    this.updateCenterLabel(p);
    this.updateBreadcrumb(p);
  };

  // ---- start (entry animation) ----------------------------------------------

  SunburstViz.prototype.start = function () {
    if (this.started || !this.paths) return;
    this.started = true;

    var arcGen = this.makeArc();

    this.paths
      .transition()
      .duration(900)
      .ease(d3.easeCubicOut)
      .delay(function (d) { return d.depth * 120; })
      .attrTween('d', function (d) {
        var iy0 = d3.interpolate(0, d.current.y0);
        var iy1 = d3.interpolate(0, d.current.y1);
        return function (t) {
          var prev0 = d.current.y0;
          var prev1 = d.current.y1;
          d.current.y0 = iy0(t);
          d.current.y1 = iy1(t);
          var path = arcGen(d);
          d.current.y0 = prev0;
          d.current.y1 = prev1;
          // At the end, snap to final
          if (t >= 1) {
            d.current.y0 = iy0(1);
            d.current.y1 = iy1(1);
          }
          return path;
        };
      })
      .on('end', function (d) {
        // Ensure current is set to final positions
        d.current.y0 = d.initial.y0;
        d.current.y1 = d.initial.y1;
      });
  };

  // ---- pause / resume (no-ops for static SVG) -------------------------------

  SunburstViz.prototype.pause = function () {};
  SunburstViz.prototype.resume = function () {};

  // ---- resize ---------------------------------------------------------------

  SunburstViz.prototype.resize = function () {
    if (!this.root || !this.container) return;

    this.calcDimensions();

    // Re-layout
    var partition = d3.partition().size([2 * Math.PI, this.radius]);
    partition(this.root);

    // Update stored positions
    var currentRootRef = this.currentRoot;
    this.root.each(function (d) {
      d.initial = { x0: d.x0, x1: d.x1, y0: d.y0, y1: d.y1 };
      d.current = { x0: d.x0, x1: d.x1, y0: d.y0, y1: d.y1 };
    });

    // Update SVG viewBox
    this.svg.attr('viewBox', [
      -this.width / 2, -this.height / 2,
      this.width, this.height
    ].join(' '));

    // Re-render arcs
    var arcGen = this.makeArc();
    this.paths.attr('d', function (d) { return arcGen(d); });

    // Update center circle
    this.arcGroup.select('circle.sunburst-root')
      .attr('r', this.root.y1 ? this.root.y1 : this.radius / (this.root.height + 1));

    // If we were zoomed in, re-apply zoom
    if (currentRootRef && currentRootRef !== this.root) {
      this.zoomTo(currentRootRef);
    }
  };

  // ---------------------------------------------------------------------------
  // Instantiate & expose
  // ---------------------------------------------------------------------------

  window.SunburstViz = SunburstViz;
  window.sunburstViz = new SunburstViz('sunburst-container');

})();
