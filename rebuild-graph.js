#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

console.log('Rebuilding graph.json from markdown pages...\n');

// Scan all markdown pages
const pagesDir = 'content/pages';
const files = fs.readdirSync(pagesDir).filter(f => f.endsWith('.md'));

console.log('Found', files.length, 'markdown pages');

const nodes = [];
const edges = [];
const nodeMap = new Map();

// Parse each markdown file
files.forEach((file, index) => {
  const id = file.replace('.md', '');
  const filePath = path.join(pagesDir, file);
  const content = fs.readFileSync(filePath, 'utf-8');

  // Extract frontmatter
  const frontmatterMatch = content.match(/^---\n([\s\S]*?)\n---/);
  if (!frontmatterMatch) {
    console.log('Warning: No frontmatter in', file);
    return;
  }

  const frontmatter = frontmatterMatch[1];

  // Parse frontmatter fields
  const titleMatch = frontmatter.match(/title:\s*"([^"]+)"/);
  const companyMatch = frontmatter.match(/company:\s*"([^"]+)"/);
  const countryMatch = frontmatter.match(/country:\s*"([^"]+)"/);
  const priceMatch = frontmatter.match(/selling_price:\s*([0-9.]+)/);

  const title = titleMatch ? titleMatch[1] : id;
  const company = companyMatch ? companyMatch[1] : 'Various';
  const country = countryMatch ? countryMatch[1] : 'Global';
  const price = priceMatch ? parseFloat(priceMatch[1]) : 0;

  // Create node
  const node = {
    id: id,
    title: title,
    company: company,
    country: country,
    price: price,
    distance: -1  // Will calculate later
  };

  nodes.push(node);
  nodeMap.set(id, node);

  // Extract inputs (edges) - handle multi-line better
  if (frontmatter.includes('inputs:')) {
    // Extract the inputs section
    const lines = frontmatter.split('\n');
    let inInputsSection = false;
    let currentInput = {};

    lines.forEach(line => {
      if (line.match(/^inputs:/)) {
        inInputsSection = true;
      } else if (inInputsSection) {
        // Check if we've left the inputs section
        if (line.match(/^[a-z_]+:/) && !line.includes('  ')) {
          inInputsSection = false;
        } else if (line.match(/^\s+-\s+name:\s*"([^"]+)"/)) {
          // Start of new input
          if (currentInput.name) {
            // Save previous input
            edges.push({
              source: id,
              target: currentInput.link,
              cost: currentInput.cost
            });
          }
          currentInput = { name: line.match(/name:\s*"([^"]+)"/)[1] };
        } else if (line.match(/^\s+cost:\s*([0-9.]+)/)) {
          currentInput.cost = parseFloat(line.match(/cost:\s*([0-9.]+)/)[1]);
        } else if (line.match(/^\s+link:\s*"([^"]+)"/)) {
          currentInput.link = line.match(/link:\s*"([^"]+)"/)[1];
        }
      }
    });

    // Don't forget the last input
    if (currentInput.name && currentInput.link) {
      edges.push({
        source: id,
        target: currentInput.link,
        cost: currentInput.cost
      });
    }
  }

  if ((index + 1) % 100 === 0) {
    console.log('Parsed', index + 1, '/', files.length);
  }
});

console.log('\nParsed:');
console.log('  Nodes:', nodes.length);
console.log('  Edges:', edges.length);

// Build adjacency map
const adjacency = new Map();
edges.forEach(edge => {
  if (!adjacency.has(edge.source)) {
    adjacency.set(edge.source, []);
  }
  adjacency.get(edge.source).push(edge.target);
});

// Calculate distances using BFS from root
const rootId = 'claude-code';
const rootNode = nodeMap.get(rootId);

if (!rootNode) {
  console.error('\nError: Root node "claude-code" not found!');
  console.log('Available nodes starting with "claude":',
    nodes.filter(n => n.id.startsWith('claude')).map(n => n.id));
  process.exit(1);
}

console.log('\nCalculating distances from root:', rootId);

const queue = [rootId];
rootNode.distance = 0;
let visited = new Set([rootId]);

while (queue.length > 0) {
  const currentId = queue.shift();
  const currentNode = nodeMap.get(currentId);

  if (!currentNode) continue;

  const currentDistance = currentNode.distance;
  const neighbors = adjacency.get(currentId) || [];

  neighbors.forEach(neighborId => {
    const neighborNode = nodeMap.get(neighborId);

    if (!neighborNode) {
      // Target doesn't exist as a page
      return;
    }

    if (!visited.has(neighborId)) {
      visited.add(neighborId);
      neighborNode.distance = currentDistance + 1;
      queue.push(neighborId);
    }
  });
}

// Count distances
const distanceCounts = {};
nodes.forEach(node => {
  const d = node.distance;
  distanceCounts[d] = (distanceCounts[d] || 0) + 1;
});

console.log('\nDistance distribution:');
Object.keys(distanceCounts).sort((a, b) => parseInt(a) - parseInt(b)).forEach(d => {
  console.log('  Distance ' + d + ':', distanceCounts[d], 'nodes');
});

// Find unreachable nodes
const unreachable = nodes.filter(n => n.distance === -1);
if (unreachable.length > 0) {
  console.log('\nWarning:', unreachable.length, 'unreachable nodes (not connected to root)');
  console.log('First 10:', unreachable.slice(0, 10).map(n => n.id).join(', '));
}

// Check for circular dependencies
console.log('\nChecking for circular dependencies...');
let circularCount = 0;
const circularExamples = [];

edges.forEach(edge => {
  const sourceNode = nodeMap.get(edge.source);
  const targetNode = nodeMap.get(edge.target);

  if (sourceNode && targetNode) {
    // Source should have higher distance than target (going deeper into supply chain)
    if (sourceNode.distance !== -1 && targetNode.distance !== -1) {
      if (targetNode.distance <= sourceNode.distance) {
        circularCount++;
        if (circularExamples.length < 10) {
          circularExamples.push({
            source: edge.source,
            target: edge.target,
            sourceDistance: sourceNode.distance,
            targetDistance: targetNode.distance
          });
        }
      }
    }
  }
});

if (circularCount > 0) {
  console.log('⚠️  Found', circularCount, 'circular/backward dependencies!');
  console.log('\nExamples:');
  circularExamples.forEach(ex => {
    console.log('  ' + ex.source + ' (D' + ex.sourceDistance + ') → ' +
                ex.target + ' (D' + ex.targetDistance + ') ❌');
  });
} else {
  console.log('✓ No circular dependencies found!');
}

// Parse countries
const countries = new Set();
nodes.forEach(node => {
  if (node.country) {
    // Split multi-country entries
    node.country.split('/').forEach(c => countries.add(c.trim()));
  }
});

// Calculate stats
const prices = nodes.map(n => n.price).filter(p => p > 0);
const minPrice = Math.min(...prices);
const maxPrice = Math.max(...prices);

// Build final graph object
const graphData = {
  nodes: nodes,
  edges: edges,
  countries: Array.from(countries).sort(),
  stats: {
    totalNodes: nodes.length,
    totalEdges: edges.length,
    minPrice: minPrice,
    maxPrice: maxPrice
  }
};

// Write to file
fs.writeFileSync('static/data/graph.json', JSON.stringify(graphData, null, 2));

console.log('\n✓ Rebuilt graph.json');
console.log('  File: static/data/graph.json');
console.log('  Size:', Math.round(fs.statSync('static/data/graph.json').size / 1024), 'KB');

// Summary
console.log('\n=== SUMMARY ===');
console.log('Total nodes:', nodes.length);
console.log('Total edges:', edges.length);
console.log('Countries:', countries.size);
console.log('Price range: $' + minPrice.toFixed(2), '- $' + maxPrice.toFixed(2));
console.log('Reachable nodes:', nodes.filter(n => n.distance >= 0).length);
console.log('Unreachable nodes:', unreachable.length);
console.log('Circular dependencies:', circularCount);
