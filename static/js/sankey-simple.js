/* sankey-simple.js
 * Simplified Sankey that always works
 * Strips down to essentials with aggressive error handling
 */
(function () {
  'use strict';

  console.log('[sankey-simple] Script loaded');

  var container = null;
  var attempts = 0;
  var maxAttempts = 20;

  function attemptRender() {
    attempts++;
    console.log('[sankey-simple] Attempt #' + attempts);

    // Check 1: Container exists
    container = document.getElementById('sankey-container');
    if (!container) {
      console.log('[sankey-simple] Container not found, retrying...');
      if (attempts < maxAttempts) setTimeout(attemptRender, 200);
      return;
    }

    // Check 2: D3 loaded
    if (typeof d3 === 'undefined') {
      console.log('[sankey-simple] D3 not loaded, retrying...');
      if (attempts < maxAttempts) setTimeout(attemptRender, 200);
      return;
    }

    // Check 3: d3-sankey loaded
    if (typeof d3.sankey === 'undefined') {
      console.log('[sankey-simple] d3-sankey not loaded, retrying...');
      if (attempts < maxAttempts) setTimeout(attemptRender, 200);
      return;
    }

    // Check 4: Graph data loaded
    if (!window.graphData) {
      console.log('[sankey-simple] Graph data not loaded, retrying...');
      if (attempts < maxAttempts) setTimeout(attemptRender, 200);
      return;
    }

    // Check 5: Container has dimensions
    var rect = container.getBoundingClientRect();

    // Force minimum height if collapsed
    if (rect.height < 400) {
      console.log('[sankey-simple] Container height too small (' + rect.height + 'px), forcing 600px');
      container.style.minHeight = '600px';
      rect = container.getBoundingClientRect();
    }

    if (rect.width < 100) {
      console.log('[sankey-simple] Invalid width: ' + rect.width + 'px, retrying...');
      if (attempts < maxAttempts) setTimeout(attemptRender, 200);
      return;
    }

    console.log('[sankey-simple] All checks passed! Rendering...');
    render();
  }

  function render() {
    try {
      var rect = container.getBoundingClientRect();
      var width = rect.width;
      var height = rect.height;

      console.log('[sankey-simple] Dimensions: ' + width + 'x' + height);

      // Remove loading class
      container.classList.remove('loading');

      // Clear container
      container.innerHTML = '';

      // Build simple data
      var data = buildSimpleData();
      console.log('[sankey-simple] Data: ' + data.nodes.length + ' nodes, ' + data.links.length + ' links');

      if (!data.nodes.length || !data.links.length) {
        throw new Error('No data generated');
      }

      // Create SVG
      var svg = d3.select('#sankey-container')
        .append('svg')
        .attr('width', width)
        .attr('height', height)
        .attr('viewBox', [0, 0, width, height]);

      // Sankey layout
      var sankey = d3.sankey()
        .nodeId(function(d) { return d.id; })
        .nodeAlign(d3.sankeyLeft)
        .nodeWidth(15)
        .nodePadding(15)
        .extent([[40, 40], [width - 40, height - 40]]);

      var graph = sankey({
        nodes: data.nodes.map(function(d) { return Object.assign({}, d); }),
        links: data.links.map(function(d) { return Object.assign({}, d); })
      });

      console.log('[sankey-simple] Layout computed');

      // Draw links
      svg.append('g')
        .selectAll('path')
        .data(graph.links)
        .join('path')
          .attr('d', d3.sankeyLinkHorizontal())
          .attr('stroke', function(d) { return getColor(d.source.distance); })
          .attr('stroke-width', function(d) { return Math.max(1, d.width); })
          .attr('fill', 'none')
          .attr('opacity', 0.5);

      // Draw nodes
      svg.append('g')
        .selectAll('rect')
        .data(graph.nodes)
        .join('rect')
          .attr('x', function(d) { return d.x0; })
          .attr('y', function(d) { return d.y0; })
          .attr('height', function(d) { return d.y1 - d.y0; })
          .attr('width', function(d) { return d.x1 - d.x0; })
          .attr('fill', function(d) { return getColor(d.distance); })
          .attr('opacity', 0.8);

      // Draw labels
      svg.append('g')
        .selectAll('text')
        .data(graph.nodes)
        .join('text')
          .attr('x', function(d) { return d.x0 < width / 2 ? d.x1 + 6 : d.x0 - 6; })
          .attr('y', function(d) { return (d.y1 + d.y0) / 2; })
          .attr('dy', '0.35em')
          .attr('text-anchor', function(d) { return d.x0 < width / 2 ? 'start' : 'end'; })
          .attr('font-size', '11px')
          .attr('fill', '#ffffff')
          .attr('opacity', 0.7)
          .text(function(d) {
            var name = d.name || d.id;
            return name.length > 15 ? name.slice(0, 15) + '...' : name;
          });

      console.log('[sankey-simple] Render complete!');

    } catch (error) {
      console.error('[sankey-simple] Render error:', error);
      container.innerHTML = '<div style="position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);color:#ff006e;font-family:monospace;text-align:center;">Error: ' + error.message + '</div>';
    }
  }

  function buildSimpleData() {
    var graphData = window.graphData;
    var nodeMap = graphData.nodeMap;
    var adjacency = graphData.adjacency;
    var edges = graphData.edges;

    var nodes = [];
    var links = [];
    var nodeIds = new Set();

    // Root
    var root = 'claude-code';
    if (!nodeMap.has(root)) {
      console.error('[sankey-simple] Root not found');
      return { nodes: [], links: [] };
    }

    nodeIds.add(root);
    nodes.push({ id: root, name: nodeMap.get(root).title, distance: 0 });

    // Distance 1 (limit to 8)
    var d1 = adjacency.get(root) || [];
    d1.slice(0, 8).forEach(function(id) {
      if (nodeMap.has(id)) {
        nodeIds.add(id);
        nodes.push({ id: id, name: nodeMap.get(id).title, distance: 1 });
      }
    });

    // Distance 2 (2 per D1 node)
    nodes.filter(function(n) { return n.distance === 1; }).forEach(function(n) {
      var inputs = adjacency.get(n.id) || [];
      inputs.slice(0, 2).forEach(function(id) {
        if (!nodeIds.has(id) && nodeMap.has(id)) {
          nodeIds.add(id);
          nodes.push({ id: id, name: nodeMap.get(id).title, distance: 2 });
        }
      });
    });

    // Build links (and prevent circular dependencies)
    var linkSet = new Set(); // Track links to avoid duplicates/circles

    edges.forEach(function(edge) {
      if (nodeIds.has(edge.source) && nodeIds.has(edge.target)) {
        var linkKey = edge.target + '->' + edge.source;
        var reverseKey = edge.source + '->' + edge.target;

        // Only add if not already added and not circular
        if (!linkSet.has(linkKey) && !linkSet.has(reverseKey) && edge.target !== edge.source) {
          linkSet.add(linkKey);
          links.push({
            source: edge.target,
            target: edge.source,
            value: edge.cost || 1
          });
        }
      }
    });

    console.log('[sankey-simple] Built ' + links.length + ' non-circular links');
    return { nodes: nodes, links: links };
  }

  function getColor(distance) {
    var colors = ['#00e5ff', '#39ff14', '#ffed00', '#ff006e', '#9d4edd'];
    return colors[distance] || '#666';
  }

  // Start on DOMContentLoaded
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', attemptRender);
  } else {
    attemptRender();
  }

  // Also try on graphDataReady
  document.addEventListener('graphDataReady', function() {
    console.log('[sankey-simple] graphDataReady event received');
    if (attempts === 0 || !container || container.innerHTML === '') {
      attemptRender();
    }
  });

})();
