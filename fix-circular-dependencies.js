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
  ]
};

// Parse frontmatter from markdown
function parseFrontmatter(content) {
  const fmMatch = content.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
  if (!fmMatch) return null;

  const [, frontmatter, body] = fmMatch;
  return { frontmatter, body };
}

// Parse inputs from frontmatter
function parseInputs(frontmatter) {
  // Updated regex to capture all lines under inputs (including indented ones)
  const inputsMatch = frontmatter.match(/inputs:\s*\n((?:  .*\n)*)/);
  if (!inputsMatch) return null;

  const inputsBlock = inputsMatch[1];
  const inputs = [];

  const inputEntries = inputsBlock.split(/(?=  - name:)/);

  inputEntries.forEach(entry => {
    if (!entry.trim()) return;

    const nameMatch = entry.match(/name:\s*"([^"]+)"/);
    const costMatch = entry.match(/cost:\s*([0-9.]+)/);
    const linkMatch = entry.match(/link:\s*"([^"]+)"/);

    if (nameMatch && costMatch && linkMatch) {
      inputs.push({
        name: nameMatch[1],
        cost: parseFloat(costMatch[1]),
        link: linkMatch[1],
        rawText: entry.trim()
      });
    }
  });

  return inputs.length > 0 ? inputs : null;
}

// Generate replacement inputs
function generateReplacements(input, selling_price) {
  const replacement = replacements[input.link];
  if (!replacement) return null;

  // If multiple replacements, split cost
  if (replacement.length > 1) {
    return replacement.map(r => ({
      name: r.name,
      cost: parseFloat((input.cost * r.costMultiplier).toFixed(2)),
      link: r.id
    }));
  } else {
    return [{
      name: replacement[0].name,
      cost: parseFloat((input.cost * replacement[0].costMultiplier).toFixed(2)),
      link: replacement[0].id
    }];
  }
}

// Rebuild frontmatter with updated inputs
function rebuildFrontmatter(frontmatter, newInputs, newValueCreated) {
  // Remove old inputs section (including all indented lines)
  let updated = frontmatter.replace(/inputs:\s*\n(?:  .*\n)*/, '');

  // Build new inputs section
  let inputsSection = 'inputs:\n';
  newInputs.forEach(input => {
    inputsSection += `  - name: "${input.name}"\n`;
    inputsSection += `    cost: ${input.cost}\n`;
    inputsSection += `    link: "${input.link}"\n`;
  });

  // Update value_created
  updated = updated.replace(/value_created:\s*[0-9.]+/, `value_created: ${newValueCreated}`);

  // Ensure there's a newline before value_created
  if (!updated.match(/\n(?=value_created:)/)) {
    updated = updated.replace(/value_created:/, '\nvalue_created:');
  }

  // Insert new inputs before value_created
  const vcIndex = updated.indexOf('value_created:');
  if (vcIndex > 0) {
    updated = updated.substring(0, vcIndex) + inputsSection + updated.substring(vcIndex);
  } else {
    updated += '\n' + inputsSection;
  }

  return updated;
}

// Main processing function
function fixCircularDependencies() {
  const contentDir = path.join(__dirname, 'content/pages');
  const d4Nodes = graph.nodes.filter(n => n.distance === 4);

  let processedCount = 0;
  let fixedCount = 0;
  let totalCircularLinksRemoved = 0;
  const replacementStats = {};

  console.log(`Processing ${d4Nodes.length} D4 pages...\n`);

  d4Nodes.forEach((node, index) => {
    const filePath = path.join(contentDir, `${node.id}.md`);
    if (!fs.existsSync(filePath)) return;

    const content = fs.readFileSync(filePath, 'utf8');
    const parsed = parseFrontmatter(content);
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
        // This is a circular dependency - replace it
        const replacementList = generateReplacements(input, selling_price);

        if (replacementList) {
          newInputs.push(...replacementList);
          hadChanges = true;
          totalCircularLinksRemoved++;

          replacementList.forEach(r => {
            const key = `${input.link} -> ${r.link}`;
            replacementStats[key] = (replacementStats[key] || 0) + 1;
          });
        } else {
          // No replacement defined - keep original but log warning if D2/D3 (not D1)
          if (dist >= 2) {
            console.log(`  WARNING: No replacement for ${input.link} (D${dist}) in ${node.id}`);
          }
          newInputs.push(input);
        }
      } else {
        // Keep non-circular inputs (D4, D5, or D1 utilities)
        newInputs.push(input);
      }
    });

    if (!hadChanges) return;

    // Calculate new value_created
    const totalInputCost = newInputs.reduce((sum, inp) => sum + inp.cost, 0);
    const newValueCreated = parseFloat((selling_price - totalInputCost).toFixed(2));

    // Rebuild frontmatter
    const newFrontmatter = rebuildFrontmatter(frontmatter, newInputs, newValueCreated);
    const newContent = `---\n${newFrontmatter}---\n${body}`;

    // Write back to file
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

  return { processedCount, fixedCount, totalCircularLinksRemoved, replacementStats };
}

// Run the fix
fixCircularDependencies();
