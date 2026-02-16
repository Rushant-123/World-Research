const fs = require('fs');

// Load graph data
const graph = JSON.parse(fs.readFileSync('./static/data/graph.json', 'utf8'));

// Get all node IDs
const nodeIds = new Set(graph.nodes.map(n => n.id));

// Find all edge targets that don't exist as nodes
const missingTargets = new Set();

graph.edges.forEach(edge => {
  if (!nodeIds.has(edge.target)) {
    missingTargets.add(edge.target);
  }
});

// Convert to sorted array
const missing = Array.from(missingTargets).sort();

console.log(`Total missing pages: ${missing.length}\n`);
console.log('Missing pages:');
missing.forEach(page => console.log(page));

// Save to file
fs.writeFileSync('./missing-pages.json', JSON.stringify(missing, null, 2));
console.log('\nSaved to missing-pages.json');
