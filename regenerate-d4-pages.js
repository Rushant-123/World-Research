const fs = require('fs');
const path = require('path');

// Read the graph data
const graphData = JSON.parse(fs.readFileSync('./static/data/graph.json', 'utf8'));

// Read the list of pages to regenerate
const pagesToRegenerate = fs.readFileSync('/tmp/d4-pages-to-generate.txt', 'utf8')
  .trim()
  .split('\n')
  .filter(line => line.trim());

console.log(`Total pages to regenerate: ${pagesToRegenerate.length}`);

// Create a map of page data from graph
const pageDataMap = new Map();
graphData.nodes.forEach(node => {
  pageDataMap.set(node.id, node);
});

// Get edges to find inputs
const inputsMap = new Map();
graphData.edges.forEach(edge => {
  if (!inputsMap.has(edge.target)) {
    inputsMap.set(edge.target, []);
  }
  inputsMap.get(edge.target).push({ source: edge.source, cost: edge.cost });
});

// Helper function to categorize pages
function categorizePage(pageId, pageData) {
  const title = pageData?.title?.toLowerCase() || pageId.toLowerCase();
  const id = pageId.toLowerCase();

  // Solvents and chemicals
  if (id.includes('solvent') || id.includes('acid') || id.includes('chemical') ||
      id.includes('carbonate') || id.includes('electrolyte') || id.includes('polymer') ||
      id.includes('resin') || id.includes('coating') || id.includes('adhesive') ||
      id.includes('catalyst') || id.includes('oil') || id.includes('gas-') || id.endsWith('-gas')) {
    return 'chemical';
  }

  // Metals and alloys
  if (id.includes('ingot') || id.includes('metal') || id.includes('alloy') ||
      id.includes('powder') || id.includes('foil') || id.includes('wire') ||
      id.includes('rod') || id.includes('sheet') || id.includes('billet') ||
      id.includes('strip') || id.includes('conductor')) {
    return 'metal';
  }

  // Equipment and machinery
  if (id.includes('machine') || id.includes('equipment') || id.includes('system') ||
      id.includes('furnace') || id.includes('press') || id.includes('mill') ||
      id.includes('reactor') || id.includes('chamber') || id.includes('tool') ||
      id.includes('robot') || id.includes('controller') || id.includes('pump') ||
      id.includes('generator') || id.includes('coater') || id.includes('grinder')) {
    return 'equipment';
  }

  // Electronic components
  if (id.includes('-ic') || id.includes('chip') || id.includes('circuit') ||
      id.includes('transistor') || id.includes('diode') || id.includes('capacitor') ||
      id.includes('resistor') || id.includes('inductor') || id.includes('asic') ||
      id.includes('controller') || id.includes('sensor') || id.includes('module')) {
    return 'electronic';
  }

  // Process and facilities
  if (id.includes('process') || id.includes('training') || id.includes('cleanroom') ||
      id.includes('protocols') || id.includes('certification') || id.includes('building')) {
    return 'process';
  }

  // Materials
  if (id.includes('substrate') || id.includes('film') || id.includes('fabric') ||
      id.includes('glass') || id.includes('ceramic') || id.includes('paper') ||
      id.includes('plastic') || id.includes('rubber')) {
    return 'material';
  }

  // Labor
  if (id.includes('labor') || id.includes('workers') || id.includes('technicians') ||
      id.includes('engineers') || id.includes('miners')) {
    return 'labor';
  }

  // Default
  return 'component';
}

// Export for use in other scripts
module.exports = {
  pagesToRegenerate,
  pageDataMap,
  inputsMap,
  categorizePage
};

// If run directly, show statistics
if (require.main === module) {
  const categories = {};
  let found = 0;
  let notFound = 0;

  pagesToRegenerate.forEach(pageId => {
    const pageData = pageDataMap.get(pageId);
    if (pageData) {
      found++;
      const category = categorizePage(pageId, pageData);
      categories[category] = (categories[category] || 0) + 1;
    } else {
      notFound++;
      console.log(`Not found in graph: ${pageId}`);
    }
  });

  console.log(`\nPages found in graph: ${found}`);
  console.log(`Pages not found: ${notFound}`);
  console.log(`\nCategory breakdown:`);
  Object.entries(categories).sort((a, b) => b[1] - a[1]).forEach(([cat, count]) => {
    console.log(`  ${cat}: ${count}`);
  });
}
