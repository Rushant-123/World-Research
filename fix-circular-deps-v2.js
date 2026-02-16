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

// Replacement mappings for D2/D3 items
const replacements = {
  // D2 items
  'natural-gas': [
    { id: 'crude-oil', name: 'Crude Oil (Petroleum)', costMultiplier: 0.8 },
    { id: 'coal', name: 'Coal', costMultiplier: 0.3 }
  ],
  'software-developers': [
    { id: 'computer-science-education', name: 'Computer Science Education', costMultiplier: 0.9 }
  ],
  'data-center': [
    { id: 'server-hardware', name: 'Server Hardware', costMultiplier: 0.5 },
    { id: 'electricity', name: 'Electricity', costMultiplier: 0.4 }
  ],

  // D3 items
  'sulfuric-acid': [
    { id: 'sulfur', name: 'Sulfur', costMultiplier: 0.7 }
  ],
  'nitrogen-gas': [
    { id: 'atmospheric-air', name: 'Atmospheric Air', costMultiplier: 0.1 }
  ],
  'silicon-wafer': [
    { id: 'quartzite-sand', name: 'Quartzite Sand', costMultiplier: 0.3 },
    { id: 'silicon-metal', name: 'Silicon Metal', costMultiplier: 0.6 }
  ],
  'hydrogen-gas': [
    { id: 'water-source', name: 'Water', costMultiplier: 0.2 }
  ],
  'chlorine-gas': [
    { id: 'salt-mining', name: 'Salt (Sodium Chloride)', costMultiplier: 0.4 }
  ],
  'oxygen-gas': [
    { id: 'atmospheric-air', name: 'Atmospheric Air', costMultiplier: 0.1 }
  ],
  'argon-gas': [
    { id: 'atmospheric-air', name: 'Atmospheric Air', costMultiplier: 0.1 }
  ],
  'hydrochloric-acid': [
    { id: 'salt-mining', name: 'Salt (Sodium Chloride)', costMultiplier: 0.4 }
  ],
  'ammonia-synthesis': [
    { id: 'atmospheric-air', name: 'Atmospheric Air', costMultiplier: 0.2 }
  ],
  'gas-compressor': [
    { id: 'steel-alloys', name: 'Steel Alloys', costMultiplier: 0.7 }
  ],
  'mining-machinery': [
    { id: 'steel-alloys', name: 'Steel Alloys', costMultiplier: 0.6 },
    { id: 'iron-ore', name: 'Iron Ore', costMultiplier: 0.3 }
  ],
  'diesel-fuel': [
    { id: 'crude-oil', name: 'Crude Oil (Petroleum)', costMultiplier: 0.8 }
  ],
  'electrical-energy': [
    { id: 'coal', name: 'Coal', costMultiplier: 0.6 },
    { id: 'natural-uranium', name: 'Natural Uranium', costMultiplier: 0.3 }
  ],
  'technical-training': [
    { id: 'technical-documentation', name: 'Technical Documentation', costMultiplier: 0.4 },
    { id: 'online-learning', name: 'Online Learning', costMultiplier: 0.3 }
  ],
  'compensation': [
    { id: 'professional-certifications', name: 'Professional Certifications', costMultiplier: 0.5 }
  ],
  'bldc-motor': [
    { id: 'copper-ore', name: 'Copper Ore', costMultiplier: 0.4 },
    { id: 'iron-ore', name: 'Iron Ore', costMultiplier: 0.3 }
  ],
  'fan-housing': [
    { id: 'aluminum-ingot', name: 'Aluminum Ingot', costMultiplier: 0.8 }
  ],
  'sputter-coater': [
    { id: 'stainless-steel-chamber', name: 'Stainless Steel Chamber', costMultiplier: 0.6 },
    { id: 'vacuum-pumps', name: 'Vacuum Pumps', costMultiplier: 0.3 }
  ],
  'ultra-pure-water': [
    { id: 'water-source', name: 'Water', costMultiplier: 0.3 }
  ],
  'epoxy-resin': [
    { id: 'crude-oil', name: 'Crude Oil (Petroleum)', costMultiplier: 0.7 }
  ],
  'copper-foil': [
    { id: 'copper-ore', name: 'Copper Ore', costMultiplier: 0.6 }
  ],
  'copper-wire': [
    { id: 'copper-ore', name: 'Copper Ore', costMultiplier: 0.7 }
  ],
  'steel-alloys': [
    { id: 'iron-ore', name: 'Iron Ore', costMultiplier: 0.6 }
  ],
  'copper-metal': [
    { id: 'copper-ore', name: 'Copper Ore', costMultiplier: 0.7 }
  ],
  'natural-uranium': [
    { id: 'coal', name: 'Coal', costMultiplier: 0.5 }
  ]
};

// Parse frontmatter and body
function parseContent(content) {
  const match = content.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
  if (!match) return null;

  return {
    frontmatter: match[1],
    body: match[2]
  };
}

// Parse inputs manually (more robust than regex)
function parseInputs(frontmatter) {
  const lines = frontmatter.split('\n');
  const inputs = [];
  let currentInput = null;
  let inInputsSection = false;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    if (line.trim() === 'inputs:') {
      inInputsSection = true;
      continue;
    }

    if (inInputsSection) {
      // Check if this is a new input (starts with "  - name:")
      if (line.match(/^  - name:/)) {
        if (currentInput) {
          inputs.push(currentInput);
        }
        currentInput = { name: '', cost: 0, link: '' };
        const nameMatch = line.match(/name:\s*"([^"]+)"/);
        if (nameMatch) currentInput.name = nameMatch[1];
      }
      // Check for cost
      else if (line.match(/^\s+cost:/) && currentInput) {
        const costMatch = line.match(/cost:\s*([0-9.]+)/);
        if (costMatch) currentInput.cost = parseFloat(costMatch[1]);
      }
      // Check for link
      else if (line.match(/^\s+link:/) && currentInput) {
        const linkMatch = line.match(/link:\s*"([^"]+)"/);
        if (linkMatch) currentInput.link = linkMatch[1];
      }
      // If we hit a non-indented line (not part of inputs), stop
      else if (line.match(/^[a-z_]+:/) && !line.match(/^  /)) {
        if (currentInput) {
          inputs.push(currentInput);
          currentInput = null;
        }
        inInputsSection = false;
        break;
      }
    }
  }

  if (currentInput) {
    inputs.push(currentInput);
  }

  return inputs.length > 0 ? inputs : null;
}

// Generate replacement inputs
function generateReplacements(input) {
  const replacement = replacements[input.link];
  if (!replacement) return null;

  return replacement.map(r => ({
    name: r.name,
    cost: parseFloat((input.cost * r.costMultiplier).toFixed(2)),
    link: r.id
  }));
}

// Rebuild frontmatter with new inputs
function rebuildFrontmatter(frontmatter, newInputs, newValueCreated) {
  const lines = frontmatter.split('\n');
  const newLines = [];
  let inInputsSection = false;
  let skippedInputs = false;

  for (const line of lines) {
    if (line.trim() === 'inputs:') {
      inInputsSection = true;
      skippedInputs = true;
      // Skip this line, we'll add inputs later
      continue;
    }

    if (inInputsSection) {
      // Skip all input lines
      if (line.match(/^  /) || line.trim() === '') {
        continue;
      } else {
        // End of inputs section
        inInputsSection = false;
      }
    }

    // Update value_created
    if (line.match(/^value_created:/)) {
      // First add the inputs section if we haven't yet
      if (skippedInputs) {
        newLines.push('inputs:');
        newInputs.forEach(input => {
          newLines.push(`  - name: "${input.name}"`);
          newLines.push(`    cost: ${input.cost}`);
          newLines.push(`    link: "${input.link}"`);
        });
        skippedInputs = false;
      }
      newLines.push(`value_created: ${newValueCreated}`);
      continue;
    }

    // Keep other lines
    if (!inInputsSection) {
      newLines.push(line);
    }
  }

  return newLines.join('\n');
}

// Main processing
function fixCircularDependencies() {
  const contentDir = path.join(__dirname, 'content/pages');
  const d4Nodes = graph.nodes.filter(n => n.distance === 4);

  let processedCount = 0;
  let fixedCount = 0;
  let totalCircularLinksRemoved = 0;
  const replacementStats = {};
  const unfixedItems = new Set();

  console.log(`Processing ${d4Nodes.length} D4 pages...\n`);

  d4Nodes.forEach((node, index) => {
    const filePath = path.join(contentDir, `${node.id}.md`);
    if (!fs.existsSync(filePath)) return;

    const content = fs.readFileSync(filePath, 'utf8');
    const parsed = parseContent(content);
    if (!parsed) return;

    const { frontmatter, body } = parsed;
    const inputs = parseInputs(frontmatter);
    if (!inputs || inputs.length === 0) return;

    processedCount++;

    // Check for circular dependencies
    const circularInputs = inputs.filter(inp => {
      const dist = distanceMap.get(inp.link);
      return dist !== undefined && dist < 4;
    });

    if (circularInputs.length === 0) return;

    // Extract selling_price
    const priceMatch = frontmatter.match(/selling_price:\s*([0-9.]+)/);
    const selling_price = priceMatch ? parseFloat(priceMatch[1]) : 10;

    // Build new inputs list
    const newInputs = [];
    let hadChanges = false;

    inputs.forEach(input => {
      const dist = distanceMap.get(input.link);

      if (dist !== undefined && dist < 4) {
        const replacementList = generateReplacements(input);

        if (replacementList) {
          newInputs.push(...replacementList);
          hadChanges = true;
          totalCircularLinksRemoved++;

          replacementList.forEach(r => {
            const key = `${input.link} -> ${r.link}`;
            replacementStats[key] = (replacementStats[key] || 0) + 1;
          });
        } else {
          // No replacement - keep original
          if (dist >= 2) {
            unfixedItems.add(`${input.link} (D${dist})`);
          }
          newInputs.push(input);
        }
      } else {
        // Keep non-circular inputs
        newInputs.push(input);
      }
    });

    if (!hadChanges) return;

    // Calculate new value_created
    const totalInputCost = newInputs.reduce((sum, inp) => sum + inp.cost, 0);
    const newValueCreated = parseFloat((selling_price - totalInputCost).toFixed(2));

    // Rebuild frontmatter
    const newFrontmatter = rebuildFrontmatter(frontmatter, newInputs, newValueCreated);
    const newContent = `---\n${newFrontmatter}\n---\n${body}`;

    // Write back
    fs.writeFileSync(filePath, newContent, 'utf8');
    fixedCount++;

    if (fixedCount % 50 === 0) {
      console.log(`Progress: ${fixedCount} pages fixed...`);
    }
  });

  console.log(`\n${'='.repeat(60)}`);
  console.log('SUMMARY');
  console.log('='.repeat(60));
  console.log(`Total D4 pages processed: ${processedCount}`);
  console.log(`Pages with circular dependencies fixed: ${fixedCount}`);
  console.log(`Total circular links removed: ${totalCircularLinksRemoved}`);

  console.log('\nMost common replacements:');
  Object.entries(replacementStats)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 10)
    .forEach(([replacement, count]) => {
      console.log(`  ${replacement}: ${count} times`);
    });

  if (unfixedItems.size > 0) {
    console.log(`\n⚠️  Items without replacements (${unfixedItems.size}):`);
    Array.from(unfixedItems).slice(0, 20).forEach(item => {
      console.log(`  - ${item}`);
    });
  }

  return { processedCount, fixedCount, totalCircularLinksRemoved };
}

// Run the fix
try {
  fixCircularDependencies();
} catch (error) {
  console.error('Error:', error);
  process.exit(1);
}
