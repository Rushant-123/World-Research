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

let totalD4 = 0;
let d4WithCircular = 0;
let totalCircularLinks = 0;
const circularByDistance = { D1: 0, D2: 0, D3: 0 };

files.forEach(file => {
  const id = file.replace('.md', '');
  const node = graph.nodes.find(n => n.id === id);

  if (node && node.distance === 4) {
    totalD4++;

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

    let hasCircular = false;

    linkMatches.forEach(match => {
      const inputId = match[1];
      const inputDist = distanceMap.get(inputId);
      if (inputDist !== undefined && inputDist < 4) {
        totalCircularLinks++;

        if (inputDist === 1) circularByDistance.D1++;
        else if (inputDist === 2) circularByDistance.D2++;
        else if (inputDist === 3) circularByDistance.D3++;

        if (!hasCircular) {
          d4WithCircular++;
          hasCircular = true;
        }
      }
    });
  }
});

console.log('='.repeat(60));
console.log('FINAL VERIFICATION');
console.log('='.repeat(60));
console.log(`\nTotal D4 pages: ${totalD4}`);
console.log(`D4 pages with circular dependencies: ${d4WithCircular}`);
console.log(`Total circular dependency links: ${totalCircularLinks}`);

console.log('\nBreakdown by distance:');
console.log(`  D1 (utilities - OK): ${circularByDistance.D1} links`);
console.log(`  D2 (PROBLEM): ${circularByDistance.D2} links`);
console.log(`  D3 (PROBLEM): ${circularByDistance.D3} links`);

const realProblems = circularByDistance.D2 + circularByDistance.D3;

console.log(`\n${'='.repeat(60)}`);
console.log(`RESULT: ${realProblems} real circular dependencies remaining`);
console.log('='.repeat(60));

if (realProblems === 0) {
  console.log('\n✅ SUCCESS! All D2/D3 circular dependencies have been fixed!');
  console.log('   D4 pages now only reference D1 utilities (OK), D4, and D5 items.');
} else {
  console.log(`\n⚠️  WARNING: ${realProblems} D2/D3 circular dependencies still exist.`);
}
