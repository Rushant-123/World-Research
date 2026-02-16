#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Load graph data
const graphData = JSON.parse(fs.readFileSync('static/data/graph.json', 'utf-8'));

// Build adjacency map
const adjacency = new Map();
graphData.edges.forEach(edge => {
  if (!adjacency.has(edge.source)) {
    adjacency.set(edge.source, []);
  }
  adjacency.get(edge.source).push(edge.target);
});

// Get all Distance 3 nodes
const distance3Nodes = graphData.nodes.filter(n => n.distance === 3);

console.log(`Checking ${distance3Nodes.length} Distance 3 pages for proper input links...`);

let errors = [];
let checked = 0;

distance3Nodes.forEach(node => {
  const filePath = path.join('content/pages', `${node.id}.md`);

  if (!fs.existsSync(filePath)) {
    errors.push(`Missing file: ${node.id}`);
    return;
  }

  const content = fs.readFileSync(filePath, 'utf-8');
  const inputs = adjacency.get(node.id) || [];

  // Check each input is mentioned in the page
  inputs.forEach(inputId => {
    // Look for the link field in inputs
    if (!content.includes(`link: "${inputId}"`)) {
      errors.push(`${node.id}: missing link to ${inputId}`);
    }
  });

  checked++;
});

console.log(`\nChecked: ${checked} pages`);
console.log(`Errors: ${errors.length}`);

if (errors.length > 0) {
  console.log('\nFirst 10 errors:');
  errors.slice(0, 10).forEach(e => console.log('  -', e));
} else {
  console.log('\n✓ All Distance 3 pages have proper input links!');
}
