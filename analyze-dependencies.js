const fs = require('fs');
const path = require('path');

const pagesDir = '/Users/rushant/World-Research/content/pages';

// Read all markdown files
const files = fs.readdirSync(pagesDir).filter(f => f.endsWith('.md'));

// Parse each file to extract inputs
const pages = {};
files.forEach(file => {
  const content = fs.readFileSync(path.join(pagesDir, file), 'utf-8');
  const slug = file.replace('.md', '');

  // Extract inputs from YAML frontmatter
  const inputsMatch = content.match(/inputs:([\s\S]*?)(?=\n\w+:|---)/);
  const inputs = [];

  if (inputsMatch) {
    const inputsText = inputsMatch[1];
    const linkMatches = [...inputsText.matchAll(/link:\s*"([^"]+)"/g)];
    linkMatches.forEach(match => {
      inputs.push(match[1]);
    });
  }

  pages[slug] = { inputs, distance: Infinity, exists: true };
});

// BFS to calculate distances from claude-code
const queue = [{ page: 'claude-code', distance: 0 }];
const visited = new Set();

pages['claude-code'].distance = 0;

while (queue.length > 0) {
  const { page, distance } = queue.shift();

  if (visited.has(page)) continue;
  visited.add(page);

  const pageData = pages[page];
  if (!pageData) {
    // Page doesn't exist yet
    pages[page] = { inputs: [], distance, exists: false };
    continue;
  }

  pageData.inputs.forEach(input => {
    if (!pages[input]) {
      pages[input] = { inputs: [], distance: distance + 1, exists: false };
      queue.push({ page: input, distance: distance + 1 });
    } else if (pages[input].distance > distance + 1) {
      pages[input].distance = distance + 1;
      queue.push({ page: input, distance: distance + 1 });
    }
  });
}

// Group by distance
const byDistance = {};
Object.entries(pages).forEach(([slug, data]) => {
  const d = data.distance === Infinity ? 999 : data.distance;
  if (!byDistance[d]) byDistance[d] = [];
  byDistance[d].push({ slug, ...data });
});

// Output results
console.log('=== DEPENDENCY ANALYSIS ===\n');

Object.keys(byDistance).sort((a, b) => Number(a) - Number(b)).forEach(distance => {
  const items = byDistance[distance];
  const existing = items.filter(i => i.exists).length;
  const missing = items.filter(i => !i.exists).length;

  console.log(`Distance ${distance}: ${items.length} pages (${existing} exist, ${missing} missing)`);

  if (missing > 0 && Number(distance) <= 5) {
    console.log('  Missing:');
    items.filter(i => !i.exists).forEach(i => {
      console.log(`    - ${i.slug}`);
    });
  }
});

// Write full JSON
fs.writeFileSync(
  '/Users/rushant/World-Research/dependency-distances.json',
  JSON.stringify(byDistance, null, 2)
);

console.log('\n✓ Full analysis written to dependency-distances.json');
