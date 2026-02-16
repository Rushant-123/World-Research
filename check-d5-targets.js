#!/usr/bin/env node

const fs = require('fs');

// Load graph data
const graphData = JSON.parse(fs.readFileSync('static/data/graph.json', 'utf-8'));
const nodeMap = new Map(graphData.nodes.map(n => [n.id, n]));

// Get all Distance 4 nodes from graph
const d4Nodes = graphData.nodes.filter(n => n.distance === 4).map(n => n.id);

// Get all Distance 4 page files
const allPages = fs.readdirSync('content/pages').filter(f => f.endsWith('.md'));

// Find pages that should be Distance 4 (referenced by Distance 3 in edges)
const d3Nodes = graphData.nodes.filter(n => n.distance === 3).map(n => n.id);
const d4Targets = new Set();
graphData.edges.forEach(edge => {
  if (d3Nodes.includes(edge.source)) {
    d4Targets.add(edge.target);
  }
});

console.log('Distance 4 nodes in graph:', d4Nodes.length);
console.log('Distance 4 targets from D3 edges:', d4Targets.size);
console.log('');

// Now check what Distance 4 pages are linking to
const d5Targets = new Set();

d4Targets.forEach(d4Id => {
  const pagePath = `content/pages/${d4Id}.md`;
  if (!fs.existsSync(pagePath)) return;

  const content = fs.readFileSync(pagePath, 'utf-8');
  const linkMatches = content.match(/link: "([^"]+)"/g);

  if (linkMatches) {
    linkMatches.forEach(match => {
      const targetId = match.replace('link: "', '').replace('"', '');

      // Check if this target is in graph and what distance
      const targetNode = nodeMap.get(targetId);
      if (targetNode) {
        if (targetNode.distance === 5) {
          d5Targets.add(targetId);
        }
      } else {
        // Not in graph - could be a Distance 5 candidate
        d5Targets.add(targetId);
      }
    });
  }
});

console.log('Distance 5 targets referenced by Distance 4 pages:', d5Targets.size);
console.log('');

// Show which ones are in graph vs not
const d5InGraph = [];
const d5NotInGraph = [];

d5Targets.forEach(id => {
  const node = nodeMap.get(id);
  if (node && node.distance === 5) {
    d5InGraph.push(id);
  } else if (!node) {
    d5NotInGraph.push(id);
  }
});

console.log('Distance 5 in graph.json:', d5InGraph.length);
d5InGraph.forEach(id => console.log(' -', id));

console.log('');
console.log('Distance 5 candidates NOT in graph:', d5NotInGraph.length);
d5NotInGraph.slice(0, 20).forEach(id => console.log(' -', id));
if (d5NotInGraph.length > 20) {
  console.log(' ... and', d5NotInGraph.length - 20, 'more');
}
