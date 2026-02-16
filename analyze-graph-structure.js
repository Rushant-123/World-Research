const fs = require('fs');
const path = require('path');

// Load graph data
const graphPath = path.join(__dirname, 'static/data/graph.json');
const graph = JSON.parse(fs.readFileSync(graphPath, 'utf8'));

console.log('Graph Statistics:');
console.log(`Total nodes: ${graph.nodes.length}`);
console.log(`Total edges: ${graph.edges ? graph.edges.length : 'N/A'}`);

// Count by distance
const distCounts = {};
graph.nodes.forEach(node => {
  const d = node.distance || 'undefined';
  distCounts[d] = (distCounts[d] || 0) + 1;
});

console.log('\nNodes by distance:');
Object.entries(distCounts)
  .sort((a, b) => {
    const aNum = a[0] === 'undefined' ? 999 : parseInt(a[0]);
    const bNum = b[0] === 'undefined' ? 999 : parseInt(b[0]);
    return aNum - bNum;
  })
  .forEach(([dist, count]) => {
    console.log(`  D${dist}: ${count} nodes`);
  });

// Build distance lookup
const distanceMap = new Map();
graph.nodes.forEach(node => {
  distanceMap.set(node.id, node.distance);
});

// Check for D4 nodes with D2/D3 inputs in frontmatter
console.log('\n\nChecking D4 pages for circular dependencies:');
const contentDir = path.join(__dirname, 'content/pages');

let checkedCount = 0;
let pagesWithIssues = 0;
let totalCircularLinks = 0;
const offenderCounts = {};

const d4Nodes = graph.nodes.filter(n => n.distance === 4);

d4Nodes.forEach(node => {
  const filePath = path.join(contentDir, `${node.id}.md`);
  if (!fs.existsSync(filePath)) return;

  checkedCount++;
  const content = fs.readFileSync(filePath, 'utf8');

  // Parse frontmatter
  const fmMatch = content.match(/^---\n([\s\S]*?)\n---/);
  if (!fmMatch) return;

  const frontmatter = fmMatch[1];
  const inputsMatch = frontmatter.match(/inputs:\s*\n((?:  - .*\n)*)/);
  if (!inputsMatch) return;

  const inputsBlock = inputsMatch[1];
  const linkMatches = [...inputsBlock.matchAll(/link:\s*"([^"]+)"/g)];

  let foundIssueInPage = false;
  linkMatches.forEach(match => {
    const inputId = match[1];
    const inputNode = graph.nodes.find(n => n.id === inputId);
    if (inputNode && inputNode.distance < 4) {
      if (!foundIssueInPage) {
        pagesWithIssues++;
        foundIssueInPage = true;
      }
      totalCircularLinks++;
      offenderCounts[inputId] = (offenderCounts[inputId] || 0) + 1;
    }
  });
});

console.log(`Checked ${checkedCount} D4 pages`);
console.log(`Pages with circular dependencies: ${pagesWithIssues}`);
console.log(`Total circular dependency links: ${totalCircularLinks}`);

console.log('\nTop offenders (D2/D3 items used in D4 pages):');
Object.entries(offenderCounts)
  .sort((a, b) => b[1] - a[1])
  .slice(0, 20)
  .forEach(([id, count]) => {
    const node = graph.nodes.find(n => n.id === id);
    console.log(`  ${id} (D${node?.distance}): ${count} pages`);
  });
