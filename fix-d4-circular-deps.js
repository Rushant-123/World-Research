const fs = require('fs');
const path = require('path');

// Load graph data
const graphPath = path.join(__dirname, 'static/data/graph.json');
const graph = JSON.parse(fs.readFileSync(graphPath, 'utf8'));

// Build distance lookup
const distanceMap = new Map();
graph.nodes.forEach(node => {
  distanceMap.set(node.id, node.distance);
});

// Find all D4 pages with circular dependencies
const contentDir = path.join(__dirname, 'content/pages');
const d4Files = [];
const circularDeps = [];

// Get all D4 nodes
const d4Nodes = graph.nodes.filter(n => n.distance === 4);
console.log(`Found ${d4Nodes.length} Distance 4 nodes`);

// Check each D4 page for circular dependencies
d4Nodes.forEach(node => {
  const filePath = path.join(contentDir, `${node.id}.md`);
  if (!fs.existsSync(filePath)) return;

  const content = fs.readFileSync(filePath, 'utf8');
  const inputMatch = content.match(/inputs:\s*\n((?:  - .*\n)*)/);
  if (!inputMatch) return;

  const inputsBlock = inputMatch[1];
  const linkMatches = [...inputsBlock.matchAll(/link:\s*"([^"]+)"/g)];

  const circularInputs = [];
  linkMatches.forEach(match => {
    const inputId = match[1];
    const inputDist = distanceMap.get(inputId);
    if (inputDist !== undefined && inputDist < 4) {
      circularInputs.push({ id: inputId, distance: inputDist });
    }
  });

  if (circularInputs.length > 0) {
    d4Files.push(node.id);
    circularInputs.forEach(inp => {
      circularDeps.push({
        page: node.id,
        input: inp.id,
        inputDistance: inp.distance
      });
    });
  }
});

console.log(`\nFound ${d4Files.length} D4 pages with circular dependencies`);
console.log(`Total circular dependency links: ${circularDeps.length}`);

// Count most common offenders
const offenderCounts = {};
circularDeps.forEach(dep => {
  offenderCounts[dep.input] = (offenderCounts[dep.input] || 0) + 1;
});

console.log('\nTop circular dependency inputs:');
Object.entries(offenderCounts)
  .sort((a, b) => b[1] - a[1])
  .slice(0, 20)
  .forEach(([id, count]) => {
    const dist = distanceMap.get(id);
    console.log(`  ${id} (D${dist}): ${count} pages`);
  });

// Save list of pages to fix
fs.writeFileSync(
  path.join(__dirname, 'd4-pages-to-fix.json'),
  JSON.stringify({
    pages: d4Files,
    circularDeps: circularDeps,
    offenderCounts: offenderCounts
  }, null, 2)
);

console.log(`\nSaved list to d4-pages-to-fix.json`);
