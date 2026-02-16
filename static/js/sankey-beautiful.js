/* sankey-beautiful.js
 * Beautiful Sankey with glowing flows, gradients, and depth
 * Industrial data aesthetic with electric colors
 */
(function () {
  'use strict';

  console.log('[sankey-beautiful] Script loaded');

  var container = null;
  var attempts = 0;
  var maxAttempts = 20;

  function attemptRender() {
    attempts++;
    console.log('[sankey-beautiful] Attempt #' + attempts);

    container = document.getElementById('sankey-container');
    if (!container) {
      if (attempts < maxAttempts) setTimeout(attemptRender, 200);
      return;
    }

    if (typeof d3 === 'undefined') {
      if (attempts < maxAttempts) setTimeout(attemptRender, 200);
      return;
    }

    if (typeof d3.sankey === 'undefined') {
      if (attempts < maxAttempts) setTimeout(attemptRender, 200);
      return;
    }

    if (!window.graphData) {
      if (attempts < maxAttempts) setTimeout(attemptRender, 200);
      return;
    }

    var rect = container.getBoundingClientRect();
    if (rect.height < 400) {
      container.style.minHeight = '600px';
      rect = container.getBoundingClientRect();
    }

    if (rect.width < 100) {
      if (attempts < maxAttempts) setTimeout(attemptRender, 200);
      return;
    }

    console.log('[sankey-beautiful] All checks passed! Rendering...');
    render();
  }

  function render() {
    try {
      var rect = container.getBoundingClientRect();
      var width = rect.width;
      var height = rect.height;

      console.log('[sankey-beautiful] Dimensions: ' + width + 'x' + height);

      container.classList.remove('loading');
      container.innerHTML = '';

      var data = buildData();
      console.log('[sankey-beautiful] Data: ' + data.nodes.length + ' nodes, ' + data.links.length + ' links');

      if (!data.nodes.length || !data.links.length) {
        throw new Error('No data');
      }

      // Create SVG
      var svg = d3.select('#sankey-container')
        .append('svg')
        .attr('width', width)
        .attr('height', height)
        .attr('viewBox', [0, 0, width, height])
        .style('font-family', 'Darker Grotesque, sans-serif');

      // Defs for effects
      var defs = svg.append('defs');

      // Glow filter
      var glow = defs.append('filter')
        .attr('id', 'sankey-glow')
        .attr('x', '-100%')
        .attr('y', '-100%')
        .attr('width', '300%')
        .attr('height', '300%');

      glow.append('feGaussianBlur')
        .attr('stdDeviation', '5')
        .attr('result', 'coloredBlur');

      var feMerge = glow.append('feMerge');
      feMerge.append('feMergeNode').attr('in', 'coloredBlur');
      feMerge.append('feMergeNode').attr('in', 'coloredBlur');
      feMerge.append('feMergeNode').attr('in', 'SourceGraphic');

      // Strong glow for hover
      var strongGlow = defs.append('filter')
        .attr('id', 'sankey-glow-strong')
        .attr('x', '-150%')
        .attr('y', '-150%')
        .attr('width', '400%')
        .attr('height', '400%');

      strongGlow.append('feGaussianBlur')
        .attr('stdDeviation', '8')
        .attr('result', 'coloredBlur');

      var feMerge2 = strongGlow.append('feMerge');
      feMerge2.append('feMergeNode').attr('in', 'coloredBlur');
      feMerge2.append('feMergeNode').attr('in', 'coloredBlur');
      feMerge2.append('feMergeNode').attr('in', 'coloredBlur');
      feMerge2.append('feMergeNode').attr('in', 'SourceGraphic');

      // Sankey layout
      var sankey = d3.sankey()
        .nodeId(function(d) { return d.id; })
        .nodeAlign(d3.sankeyLeft)
        .nodeWidth(24)
        .nodePadding(20)
        .extent([[80, 60], [width - 80, height - 60]]);

      var graph = sankey({
        nodes: data.nodes.map(function(d) { return Object.assign({}, d); }),
        links: data.links.map(function(d) { return Object.assign({}, d); })
      });

      console.log('[sankey-beautiful] Layout computed');

      // Create gradients for each link
      graph.links.forEach(function(link, i) {
        var gradient = defs.append('linearGradient')
          .attr('id', 'link-gradient-' + i)
          .attr('gradientUnits', 'userSpaceOnUse')
          .attr('x1', link.source.x1)
          .attr('x2', link.target.x0);

        var sourceColor = getColor(link.source.distance);
        var targetColor = getColor(link.target.distance);

        gradient.append('stop')
          .attr('offset', '0%')
          .attr('stop-color', sourceColor)
          .attr('stop-opacity', 0.8);

        gradient.append('stop')
          .attr('offset', '100%')
          .attr('stop-color', targetColor)
          .attr('stop-opacity', 0.8);
      });

      // Draw links with beautiful gradients
      var links = svg.append('g')
        .attr('class', 'links')
        .selectAll('path')
        .data(graph.links)
        .join('path')
          .attr('d', d3.sankeyLinkHorizontal())
          .attr('stroke', function(d, i) { return 'url(#link-gradient-' + i + ')'; })
          .attr('stroke-width', function(d) { return Math.max(2, d.width); })
          .attr('fill', 'none')
          .attr('opacity', 0)
          .style('filter', 'url(#sankey-glow)')
          .style('mix-blend-mode', 'screen')
          .on('mouseover', function(event, d) {
            d3.select(this)
              .transition()
              .duration(200)
              .attr('opacity', 0.95)
              .attr('stroke-width', Math.max(3, d.width * 1.3))
              .style('filter', 'url(#sankey-glow-strong)');

            showTooltip(event, '<strong>' + d.source.name + '</strong> → <strong>' + d.target.name + '</strong><br/>Value: $' + d.value.toFixed(2));
          })
          .on('mouseout', function(event, d) {
            d3.select(this)
              .transition()
              .duration(300)
              .attr('opacity', 0.6)
              .attr('stroke-width', Math.max(2, d.width))
              .style('filter', 'url(#sankey-glow)');

            hideTooltip();
          });

      // Animate links in
      links
        .transition()
        .duration(1200)
        .delay(function(d, i) { return i * 15; })
        .ease(d3.easeCubicOut)
        .attr('opacity', 0.6);

      // Draw nodes with glow
      var nodes = svg.append('g')
        .attr('class', 'nodes')
        .selectAll('rect')
        .data(graph.nodes)
        .join('rect')
          .attr('x', function(d) { return d.x0; })
          .attr('y', function(d) { return d.y0; })
          .attr('height', function(d) { return Math.max(1, d.y1 - d.y0); })
          .attr('width', function(d) { return d.x1 - d.x0; })
          .attr('fill', function(d) { return getColor(d.distance); })
          .attr('opacity', 0)
          .attr('rx', 3)
          .style('filter', 'url(#sankey-glow)')
          .on('mouseover', function(event, d) {
            d3.select(this)
              .transition()
              .duration(200)
              .attr('opacity', 1)
              .style('filter', 'url(#sankey-glow-strong)');

            var text = '<strong>' + d.name + '</strong><br/>Distance: ' + d.distance;
            if (d.value) text += '<br/>Total flow: $' + d.value.toFixed(2);
            showTooltip(event, text);
          })
          .on('mouseout', function() {
            d3.select(this)
              .transition()
              .duration(300)
              .attr('opacity', 0.9)
              .style('filter', 'url(#sankey-glow)');

            hideTooltip();
          });

      // Animate nodes in
      nodes
        .transition()
        .duration(800)
        .delay(400)
        .ease(d3.easeCubicOut)
        .attr('opacity', 0.9);

      // Draw labels with better styling
      var labels = svg.append('g')
        .attr('class', 'labels')
        .selectAll('text')
        .data(graph.nodes)
        .join('text')
          .attr('x', function(d) { return d.x0 < width / 2 ? d.x1 + 10 : d.x0 - 10; })
          .attr('y', function(d) { return (d.y1 + d.y0) / 2; })
          .attr('dy', '0.35em')
          .attr('text-anchor', function(d) { return d.x0 < width / 2 ? 'start' : 'end'; })
          .attr('font-size', '13px')
          .attr('font-weight', '600')
          .attr('fill', '#ffffff')
          .attr('opacity', 0)
          .style('text-shadow', '0 0 8px rgba(0, 0, 0, 0.8), 0 2px 4px rgba(0, 0, 0, 0.5)')
          .text(function(d) {
            var name = d.name || d.id;
            return name.length > 18 ? name.slice(0, 18) + '...' : name;
          });

      // Animate labels in
      labels
        .transition()
        .duration(600)
        .delay(800)
        .ease(d3.easeCubicOut)
        .attr('opacity', 0.85);

      console.log('[sankey-beautiful] Render complete!');

    } catch (error) {
      console.error('[sankey-beautiful] Render error:', error);
      container.innerHTML = '<div style="position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);color:#ff006e;font-family:monospace;text-align:center;">Error: ' + error.message + '</div>';
    }
  }

  function buildData() {
    var graphData = window.graphData;
    var nodeMap = graphData.nodeMap;
    var adjacency = graphData.adjacency;
    var edges = graphData.edges;

    var nodes = [];
    var links = [];
    var nodeIds = new Set();

    var root = 'claude-code';
    if (!nodeMap.has(root)) {
      return { nodes: [], links: [] };
    }

    nodeIds.add(root);
    nodes.push({ id: root, name: nodeMap.get(root).title, distance: 0 });

    // Distance 1 (top 10 by cost)
    var d1 = adjacency.get(root) || [];
    var d1WithCost = d1.map(function(id) {
      var edge = edges.find(function(e) { return e.source === root && e.target === id; });
      return { id: id, cost: edge ? edge.cost : 0 };
    }).sort(function(a, b) { return b.cost - a.cost; }).slice(0, 10);

    d1WithCost.forEach(function(item) {
      if (nodeMap.has(item.id)) {
        nodeIds.add(item.id);
        nodes.push({ id: item.id, name: nodeMap.get(item.id).title, distance: 1 });
      }
    });

    // Distance 2 (top 2 per D1 node by cost)
    nodes.filter(function(n) { return n.distance === 1; }).forEach(function(n) {
      var inputs = adjacency.get(n.id) || [];
      var inputsWithCost = inputs.map(function(id) {
        var edge = edges.find(function(e) { return e.source === n.id && e.target === id; });
        return { id: id, cost: edge ? edge.cost : 0 };
      }).sort(function(a, b) { return b.cost - a.cost; }).slice(0, 2);

      inputsWithCost.forEach(function(item) {
        if (!nodeIds.has(item.id) && nodeMap.has(item.id)) {
          nodeIds.add(item.id);
          nodes.push({ id: item.id, name: nodeMap.get(item.id).title, distance: 2 });
        }
      });
    });

    // Distance 3 (top 1 per D2 node by cost)
    nodes.filter(function(n) { return n.distance === 2; }).forEach(function(n) {
      var inputs = adjacency.get(n.id) || [];
      var inputsWithCost = inputs.map(function(id) {
        var edge = edges.find(function(e) { return e.source === n.id && e.target === id; });
        return { id: id, cost: edge ? edge.cost : 0 };
      }).sort(function(a, b) { return b.cost - a.cost; }).slice(0, 1);

      inputsWithCost.forEach(function(item) {
        if (!nodeIds.has(item.id) && nodeMap.has(item.id)) {
          nodeIds.add(item.id);
          nodes.push({ id: item.id, name: nodeMap.get(item.id).title, distance: 3 });
        }
      });
    });

    // Distance 4 (top 1 per D3 node by cost)
    nodes.filter(function(n) { return n.distance === 3; }).forEach(function(n) {
      var inputs = adjacency.get(n.id) || [];
      var inputsWithCost = inputs.map(function(id) {
        var edge = edges.find(function(e) { return e.source === n.id && e.target === id; });
        return { id: id, cost: edge ? edge.cost : 0 };
      }).sort(function(a, b) { return b.cost - a.cost; }).slice(0, 1);

      inputsWithCost.forEach(function(item) {
        if (!nodeIds.has(item.id) && nodeMap.has(item.id)) {
          nodeIds.add(item.id);
          nodes.push({ id: item.id, name: nodeMap.get(item.id).title, distance: 4 });
        }
      });
    });

    // Distance 5 (top 1 per D4 node - show raw materials)
    nodes.filter(function(n) { return n.distance === 4; }).forEach(function(n) {
      var inputs = adjacency.get(n.id) || [];
      var inputsWithCost = inputs.map(function(id) {
        var edge = edges.find(function(e) { return e.source === n.id && e.target === id; });
        return { id: id, cost: edge ? edge.cost : 0 };
      }).sort(function(a, b) { return b.cost - a.cost; }).slice(0, 1);

      inputsWithCost.forEach(function(item) {
        if (!nodeIds.has(item.id) && nodeMap.has(item.id)) {
          nodeIds.add(item.id);
          nodes.push({ id: item.id, name: nodeMap.get(item.id).title, distance: 5 });
        }
      });
    });

    // Build links (prevent circular)
    var linkSet = new Set();

    edges.forEach(function(edge) {
      if (nodeIds.has(edge.source) && nodeIds.has(edge.target)) {
        var linkKey = edge.target + '->' + edge.source;
        var reverseKey = edge.source + '->' + edge.target;

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

    return { nodes: nodes, links: links };
  }

  function getColor(distance) {
    var colors = ['#00e5ff', '#39ff14', '#ffed00', '#ff006e', '#9d4edd', '#ff5722', '#8b4513'];
    return colors[distance] || '#666';
  }

  var tooltip = document.getElementById('viz-tooltip');

  function showTooltip(event, html) {
    if (!tooltip) return;
    tooltip.innerHTML = html;
    tooltip.style.display = 'block';
    tooltip.style.left = (event.pageX + 10) + 'px';
    tooltip.style.top = (event.pageY + 10) + 'px';
  }

  function hideTooltip() {
    if (!tooltip) return;
    tooltip.style.display = 'none';
  }

  // Start
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', attemptRender);
  } else {
    attemptRender();
  }

  document.addEventListener('graphDataReady', function() {
    console.log('[sankey-beautiful] graphDataReady received');
    if (attempts === 0 || !container || container.innerHTML === '') {
      attemptRender();
    }
  });

})();
