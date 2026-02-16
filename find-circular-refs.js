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

const problematicItems = ['natural-gas', 'sulfuric-acid', 'nitrogen-gas', 'silicon-wafer'];

console.log('Checking which D4 pages use D2/D3 items:\n');

problematicItems.forEach(itemId => {
  const itemDist = distanceMap.get(itemId);
  console.log(`\n${itemId} (D${itemDist}):`);

  const contentDir = path.join(__dirname, 'content/pages');
  const files = fs.readdirSync(contentDir).filter(f => f.endsWith('.md'));

  let count = 0;
  let d4Count = 0;

  files.forEach(file => {
    const filePath = path.join(contentDir, file);
    const content = fs.readFileSync(filePath, 'utf8');

    if (content.includes(`link: "${itemId}"`)) {
      count++;
      const pageId = file.replace('.md', '');
      const pageDist = distanceMap.get(pageId);

      if (pageDist === 4) {
        d4Count++;
        if (d4Count <= 5) {
          console.log(`  - ${pageId} (D${pageDist})`);
        }
      }
    }
  });

  console.log(`  Total: ${count} pages, ${d4Count} are D4 pages`);
});
