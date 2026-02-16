const fs = require('fs');
const path = require('path');

// Load graph
const graph = JSON.parse(fs.readFileSync('static/data/graph.json', 'utf8'));
const distanceMap = new Map();
graph.nodes.forEach(n => distanceMap.set(n.id, n.distance));

// Get all D4 pages
const contentDir = 'content/pages';
const d4Pages = [];

const files = fs.readdirSync(contentDir).filter(f => f.endsWith('.md'));

files.forEach(file => {
  const id = file.replace('.md', '');
  const node = graph.nodes.find(n => n.id === id);

  if (node && node.distance === 4) {
    const filePath = path.join(contentDir, file);
    const content = fs.readFileSync(filePath, 'utf8');

    // Parse inputs
    const fmMatch = content.match(/^---\n([\s\S]*?)\n---/);
    if (!fmMatch) return;

    const frontmatter = fmMatch[1];
    const inputsMatch = frontmatter.match(/inputs:\s*\n((?:  .*\n)*)/);
    if (!inputsMatch) return;

    const inputsBlock = inputsMatch[1];
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
      d4Pages.push({
        id: id,
        circular: circularInputs
      });
    }
  }
});

console.log(`Found ${d4Pages.length} D4 pages with circular dependencies:\n`);

d4Pages.forEach(page => {
  console.log(`${page.id}:`);
  page.circular.forEach(c => {
    console.log(`  - ${c.id} (D${c.distance})`);
  });
  console.log('');
});

// Count by item
const itemCounts = {};
d4Pages.forEach(page => {
  page.circular.forEach(c => {
    itemCounts[c.id] = (itemCounts[c.id] || 0) + 1;
  });
});

console.log('\nItems still causing circular dependencies:');
Object.entries(itemCounts)
  .sort((a, b) => b[1] - a[1])
  .forEach(([id, count]) => {
    const dist = distanceMap.get(id);
    console.log(`  ${id} (D${dist}): ${count} pages`);
  });
