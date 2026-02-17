#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const PAGES_DIR = path.join(ROOT, 'content', 'pages');
const COMPANIES_DIR = path.join(ROOT, 'content', 'companies');
const OUTPUT_FILE = path.join(ROOT, 'data', 'top100-companies.json');

console.log('Analyzing companies for top 100 ranking...');

// Load existing graph data for dependency counts
const graphData = JSON.parse(
  fs.readFileSync(path.join(ROOT, 'static', 'data', 'graph.json'), 'utf-8')
);

// Parse all company files
const companyFiles = fs.readdirSync(COMPANIES_DIR).filter(f => f.endsWith('.md'));
const companies = [];

console.log(`Found ${companyFiles.length} company files`);

companyFiles.forEach(file => {
  const content = fs.readFileSync(path.join(COMPANIES_DIR, file), 'utf-8');
  const slug = file.replace('.md', '');

  // Parse YAML frontmatter
  const titleMatch = content.match(/^title:\s*"([^"]+)"/m);
  const revenueMatch = content.match(/^revenue:\s*([\d]+)/m);
  const marketCapMatch = content.match(/^market_cap:\s*([\d]+)/m);
  const industryMatch = content.match(/^industry:\s*"([^"]+)"/m);

  // Parse products array
  const products = [];
  const productsMatch = content.match(/products:([\s\S]*?)(?=\n\w+:|financials:|---)/);
  if (productsMatch) {
    const linkMatches = productsMatch[1].matchAll(/link:\s*"([^"]+)"/g);
    for (const match of linkMatches) {
      products.push(match[1]);
    }
  }

  companies.push({
    slug,
    name: titleMatch ? titleMatch[1] : slug,
    revenue: revenueMatch ? parseInt(revenueMatch[1]) : 0,
    market_cap: marketCapMatch ? parseInt(marketCapMatch[1]) : 0,
    industry: industryMatch ? industryMatch[1] : 'Unknown',
    product_count: products.length,
    products
  });
});

console.log(`Parsed ${companies.length} companies`);

// Count downstream dependencies for each company's products
companies.forEach(company => {
  let totalDependencies = 0;
  let minDistance = Infinity;

  company.products.forEach(productSlug => {
    // Find this product in graph
    const node = graphData.nodes.find(n => n.id === productSlug);
    if (node) {
      // Count how many other products depend on this one
      const dependencies = graphData.edges.filter(e => e.target === productSlug).length;
      totalDependencies += dependencies;

      // Track minimum distance to end product
      if (node.distance >= 0 && node.distance < minDistance) {
        minDistance = node.distance;
      }
    }
  });

  company.downstream_dependencies = totalDependencies;
  company.min_distance = minDistance !== Infinity ? minDistance : -1;
});

console.log('Calculated dependency counts');

// Score each company (weights from design doc)
companies.forEach(company => {
  const marketCapScore = (company.market_cap / 1e12) * 40; // Normalize to trillions
  const productScore = company.product_count * 25;
  const dependencyScore = company.downstream_dependencies * 25;
  const distanceScore = company.min_distance >= 0
    ? (6 - company.min_distance) * 10 // Closer to end product = higher score
    : 0;

  company.score = marketCapScore + productScore + dependencyScore + distanceScore;
});

// Sort by score descending
companies.sort((a, b) => b.score - a.score);

// Take top 100
const top100 = companies.slice(0, 100);

// Write output
fs.mkdirSync(path.dirname(OUTPUT_FILE), { recursive: true });
fs.writeFileSync(OUTPUT_FILE, JSON.stringify(top100, null, 2));

console.log(`\nTop 100 companies written to ${OUTPUT_FILE}`);
console.log(`\nTop 10:`);
top100.slice(0, 10).forEach((c, i) => {
  console.log(`${i + 1}. ${c.name} (score: ${c.score.toFixed(1)})`);
});
