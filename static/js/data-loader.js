/* data-loader.js
 * Fetches /data/graph.json, builds lookup structures, and exposes window.graphData.
 * All visualization modules listen for the "graphDataReady" CustomEvent on document.
 */
(async function () {
  'use strict';

  function distanceColor(d) {
    var colors = ['#ffd700', '#ff6b35', '#00d4ff', '#7b68ee', '#4a4a8a', '#2a2a5a'];
    if (d < 0 || d >= colors.length) return '#333';
    return colors[d];
  }

  try {
    var resp = await fetch('/data/graph.json');
    if (!resp.ok) throw new Error('HTTP ' + resp.status);
    var json = await resp.json();
  } catch (err) {
    console.error('[data-loader] Failed to load graph data:', err);
    return;
  }

  var nodes = json.nodes || [];
  var edges = json.edges || [];

  // --- nodeMap: slug -> node object ---
  var nodeMap = new Map();
  nodes.forEach(function (n) {
    nodeMap.set(n.id, n);
  });

  // --- adjacency: slug -> [input slugs] (children / dependencies) ---
  // An edge goes from source -> target meaning "source depends on target"
  // so adjacency[source] = list of targets (inputs)
  var adjacency = new Map();
  var reverseAdj = new Map();

  nodes.forEach(function (n) {
    adjacency.set(n.id, []);
    reverseAdj.set(n.id, []);
  });

  edges.forEach(function (e) {
    var src = e.source;
    var tgt = e.target;
    if (adjacency.has(src)) adjacency.get(src).push(tgt);
    if (reverseAdj.has(tgt)) reverseAdj.get(tgt).push(src);
  });

  // --- BFS from "claude-code" to assign distances ---
  // The JSON already has distances but some may be -1 (unreachable).
  // We re-run BFS to be safe and to normalise unreachable nodes to 999.
  var ROOT = 'claude-code';
  var visited = new Set();
  var queue = [];

  if (nodeMap.has(ROOT)) {
    nodeMap.get(ROOT).distance = 0;
    visited.add(ROOT);
    queue.push(ROOT);
  }

  while (queue.length > 0) {
    var current = queue.shift();
    var d = nodeMap.get(current).distance;
    var neighbours = adjacency.get(current) || [];
    for (var i = 0; i < neighbours.length; i++) {
      var nb = neighbours[i];
      if (!visited.has(nb) && nodeMap.has(nb)) {
        visited.add(nb);
        nodeMap.get(nb).distance = d + 1;
        queue.push(nb);
      }
    }
  }

  // Normalise unreachable nodes
  nodes.forEach(function (n) {
    if (!visited.has(n.id)) {
      n.distance = 999;
    }
  });

  // --- distanceLevels: distance -> [node objects] ---
  var distanceLevels = new Map();
  nodes.forEach(function (n) {
    var dist = n.distance;
    if (!distanceLevels.has(dist)) distanceLevels.set(dist, []);
    distanceLevels.get(dist).push(n);
  });

  // --- stats ---
  var maxPrice = -Infinity;
  var minPrice = Infinity;
  nodes.forEach(function (n) {
    if (n.price > maxPrice) maxPrice = n.price;
    if (n.price < minPrice) minPrice = n.price;
  });

  var distanceCounts = {};
  distanceLevels.forEach(function (arr, dist) {
    distanceCounts[dist] = arr.length;
  });

  var stats = {
    totalNodes: nodes.length,
    totalEdges: edges.length,
    maxPrice: maxPrice,
    minPrice: minPrice,
    distanceCounts: distanceCounts
  };

  // --- Normalize country names ---
  function normalizeCountry(rawCountry) {
    if (!rawCountry) return 'Unknown';
    var normalized = rawCountry.trim();
    // USA variations
    if (normalized === 'USA' || normalized === 'United States') {
      return 'United States';
    }
    // Remove "Various" and "Global" and "International" - too vague
    if (normalized === 'Various' || normalized === 'Global' || normalized === 'International') {
      return 'Unknown';
    }
    return normalized;
  }

  // --- Parse multi-country strings ---
  function parseCountries(rawCountry) {
    if (!rawCountry) return ['Unknown'];

    // Split by "/" or "," and normalize each
    var parts = rawCountry.split(/[\/,]/);
    var result = [];

    for (var i = 0; i < parts.length; i++) {
      var normalized = normalizeCountry(parts[i]);
      if (normalized && normalized !== 'Unknown' && result.indexOf(normalized) === -1) {
        result.push(normalized);
      }
    }

    return result.length > 0 ? result : ['Unknown'];
  }

  // --- countries: country string -> { count, nodes } ---
  var countries = new Map();
  nodes.forEach(function (n) {
    var countryList = parseCountries(n.country);

    countryList.forEach(function (c) {
      if (!countries.has(c)) countries.set(c, { count: 0, nodes: [] });
      var entry = countries.get(c);
      entry.count += 1;
      entry.nodes.push(n);
    });

    // Store normalized primary country on node for easy access
    n.primaryCountry = countryList[0];
    n.allCountries = countryList;
  });

  // --- Expose globally ---
  window.graphData = {
    nodes: nodes,
    edges: edges,
    nodeMap: nodeMap,
    adjacency: adjacency,
    reverseAdj: reverseAdj,
    distanceLevels: distanceLevels,
    stats: stats,
    countries: countries,
    distanceColor: distanceColor
  };

  document.dispatchEvent(new CustomEvent('graphDataReady'));
})();
