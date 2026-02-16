#!/usr/bin/env node

const fs = require('fs');

// Load graph data
const graphData = JSON.parse(fs.readFileSync('static/data/graph.json', 'utf-8'));

// Get all Distance 3 nodes
const distance3Nodes = graphData.nodes.filter(n => n.distance === 3).map(n => n.id);
const distance4Nodes = new Set(graphData.nodes.filter(n => n.distance === 4).map(n => n.id));

console.log('Distance 3 nodes:', distance3Nodes.length);
console.log('Distance 4 nodes in graph:', distance4Nodes.size);

// Find all targets from Distance 3 edges
const distance4Targets = new Set();
graphData.edges.forEach(edge => {
  if (distance3Nodes.includes(edge.source)) {
    distance4Targets.add(edge.target);
  }
});

console.log('Distance 4 targets referenced:', distance4Targets.size);

// Find missing ones
const missing = [];
distance4Targets.forEach(target => {
  if (!distance4Nodes.has(target)) {
    missing.push(target);
  }
});

console.log('Missing Distance 4 nodes:', missing.length);
console.log('\nFirst 20 missing:');
missing.slice(0, 20).forEach(id => console.log(' -', id));

// Write all missing to file
fs.writeFileSync('/tmp/d4-actually-missing.txt', missing.join('\n'));
console.log(`\nWrote all ${missing.length} missing IDs to /tmp/d4-actually-missing.txt`);
