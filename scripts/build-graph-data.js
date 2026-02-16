#!/usr/bin/env node
/**
 * build-graph-data.js
 *
 * Reads all markdown pages from content/pages/*.md, parses YAML frontmatter,
 * builds a dependency graph, runs BFS from "claude-code", and writes
 * static/data/graph.json for use by browser-side visualizations.
 */

const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const PAGES_DIR = path.join(ROOT, 'content', 'pages');
const OUTPUT_DIR = path.join(ROOT, 'static', 'data');
const OUTPUT_FILE = path.join(OUTPUT_DIR, 'graph.json');

// ---------------------------------------------------------------------------
// 1. Read and parse all markdown files
// ---------------------------------------------------------------------------

const files = fs.readdirSync(PAGES_DIR).filter(f => f.endsWith('.md'));

const pages = {}; // slug -> { title, company, country, price, inputs: [{name, cost, link}] }

files.forEach(file => {
  const content = fs.readFileSync(path.join(PAGES_DIR, file), 'utf-8');
  const slug = file.replace('.md', '');

  // Extract scalar frontmatter fields
  const titleMatch = content.match(/^title:\s*"([^"]+)"/m);
  const companyMatch = content.match(/^company:\s*"([^"]+)"/m);
  const countryMatch = content.match(/^country:\s*"([^"]+)"/m);
  const priceMatch = content.match(/^selling_price:\s*([\d.]+)/m);

  const title = titleMatch ? titleMatch[1] : slug;
  const company = companyMatch ? companyMatch[1] : '';
  const country = countryMatch ? countryMatch[1] : '';
  const price = priceMatch ? parseFloat(priceMatch[1]) : 0;

  // Extract inputs array
  const inputs = [];
  const inputsMatch = content.match(/inputs:([\s\S]*?)(?=\n\w+:|---)/);
  if (inputsMatch) {
    const inputsText = inputsMatch[1];
    // Split on "- name:" boundaries to get each input block
    const blocks = inputsText.split(/\n\s*- name:/).slice(1); // first element is empty/whitespace
    blocks.forEach(block => {
      const nameMatch = block.match(/^\s*"([^"]+)"/);
      const costMatch = block.match(/cost:\s*([\d.]+)/);
      const linkMatch = block.match(/link:\s*"([^"]+)"/);

      if (linkMatch) {
        inputs.push({
          name: nameMatch ? nameMatch[1] : linkMatch[1],
          cost: costMatch ? parseFloat(costMatch[1]) : 0,
          link: linkMatch[1]
        });
      }
    });
  }

  pages[slug] = { title, company, country, price, inputs };
});

// ---------------------------------------------------------------------------
// 2. BFS from "claude-code" to compute distances
// ---------------------------------------------------------------------------

const distances = {}; // slug -> distance
const queue = [{ slug: 'claude-code', distance: 0 }];
const visited = new Set();

// Initialize all existing pages to Infinity
Object.keys(pages).forEach(slug => { distances[slug] = Infinity; });
distances['claude-code'] = 0;

while (queue.length > 0) {
  const { slug, distance } = queue.shift();
  if (visited.has(slug)) continue;
  visited.add(slug);

  const page = pages[slug];
  if (!page) continue;

  page.inputs.forEach(input => {
    const target = input.link;
    if (distances[target] === undefined) distances[target] = Infinity;
    if (distance + 1 < distances[target]) {
      distances[target] = distance + 1;
      queue.push({ slug: target, distance: distance + 1 });
    }
  });
}

// ---------------------------------------------------------------------------
// 3. Build nodes and edges
// ---------------------------------------------------------------------------

const nodes = [];
const edges = [];

Object.entries(pages).forEach(([slug, data]) => {
  const dist = distances[slug] !== undefined && distances[slug] !== Infinity
    ? distances[slug]
    : -1; // unreachable

  nodes.push({
    id: slug,
    title: data.title,
    company: data.company,
    country: data.country,
    price: data.price,
    distance: dist,
    inputCount: data.inputs.length
  });

  data.inputs.forEach(input => {
    edges.push({
      source: slug,
      target: input.link,
      cost: input.cost,
      name: input.name
    });
  });
});

// ---------------------------------------------------------------------------
// 4. Aggregate statistics
// ---------------------------------------------------------------------------

// Country counts (use raw country string as key)
const countries = {};
nodes.forEach(node => {
  if (node.country) {
    if (!countries[node.country]) countries[node.country] = { count: 0 };
    countries[node.country].count++;
  }
});

// Distance distribution
const distanceCounts = {};
nodes.forEach(node => {
  const d = node.distance >= 0 ? node.distance : 'unreachable';
  if (!distanceCounts[d]) distanceCounts[d] = 0;
  distanceCounts[d]++;
});

// Price range (only among nodes with price > 0)
const prices = nodes.map(n => n.price).filter(p => p > 0);
const maxPrice = prices.length > 0 ? Math.max(...prices) : 0;
const minPrice = prices.length > 0 ? Math.min(...prices) : 0;

const stats = {
  totalNodes: nodes.length,
  totalEdges: edges.length,
  countryCount: Object.keys(countries).length,
  maxPrice,
  minPrice,
  distanceCounts
};

// ---------------------------------------------------------------------------
// 5. Write output
// ---------------------------------------------------------------------------

const output = { nodes, edges, stats, countries };

fs.mkdirSync(OUTPUT_DIR, { recursive: true });
fs.writeFileSync(OUTPUT_FILE, JSON.stringify(output, null, 2));

console.log(`Graph data written to ${OUTPUT_FILE}`);
console.log(`  Nodes: ${stats.totalNodes}`);
console.log(`  Edges: ${stats.totalEdges}`);
console.log(`  Countries: ${stats.countryCount}`);
console.log(`  Price range: ${stats.minPrice} - ${stats.maxPrice}`);
console.log(`  Distance distribution:`, stats.distanceCounts);
