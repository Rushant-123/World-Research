#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const batchFile = process.argv[2] || '/tmp/batch1.txt';
const graphData = JSON.parse(fs.readFileSync('static/data/graph.json', 'utf-8'));

const nodeMap = new Map(graphData.nodes.map(n => [n.id, n]));
const adjacency = new Map();

graphData.edges.forEach(edge => {
  if (!adjacency.has(edge.source)) {
    adjacency.set(edge.source, []);
  }
  adjacency.get(edge.source).push({
    target: edge.target,
    cost: edge.cost
  });
});

const idsToGenerate = fs.readFileSync(batchFile, 'utf-8')
  .split('\n')
  .filter(line => line.trim().length > 0);

console.log(`Generating ${idsToGenerate.length} pages...`);

let generated = 0;

idsToGenerate.forEach((id, index) => {
  const filePath = path.join('content/pages', `${id}.md`);

  if (fs.existsSync(filePath)) {
    return;
  }

  // Find this node in edges as a target
  const incomingEdges = graphData.edges.filter(e => e.target === id);
  const parentNode = incomingEdges.length > 0 ? nodeMap.get(incomingEdges[0].source) : null;

  // Estimate price (average of incoming edge costs * 3)
  const avgCost = incomingEdges.length > 0
    ? incomingEdges.reduce((sum, e) => sum + e.cost, 0) / incomingEdges.length
    : 10;
  const price = avgCost * 3;

  // Make title from ID
  const title = id.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');

  const inputs = adjacency.get(id) || [];

  let frontmatter = `---
title: "${title}"
company: "Various Suppliers"
country: "Global"
selling_price: ${price.toFixed(2)}
`;

  if (inputs.length > 0) {
    frontmatter += 'inputs:\n';
    inputs.forEach(input => {
      const inputNode = nodeMap.get(input.target);
      const inputName = inputNode ? inputNode.title : input.target.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
      frontmatter += `  - name: "${inputName}"
    cost: ${input.cost.toFixed(2)}
    link: "${input.target}"
`;
    });
  }

  const totalInputCost = inputs.reduce((sum, inp) => sum + inp.cost, 0);
  const valueCreated = price - totalInputCost;

  frontmatter += `value_created: ${valueCreated.toFixed(2)}
---

`;

  const steps = generateSteps(id, title);
  const content = frontmatter + steps.join('\n');

  fs.writeFileSync(filePath, content, 'utf-8');
  generated++;

  if (generated % 20 === 0) {
    console.log(`${generated}/${idsToGenerate.length}`);
  }
});

console.log(`Complete: ${generated} pages generated`);

function generateSteps(id, title) {
  const steps = [];
  const stepCount = 35;

  for (let i = 1; i <= stepCount; i++) {
    if (i === 1) {
      steps.push(`${i}. Receive raw materials and prepare ${title.toLowerCase()} production facility`);
    } else if (i === 2) {
      steps.push(`${i}. Inspect incoming materials verifying quality and specifications`);
    } else if (i === 3) {
      steps.push(`${i}. Store materials in appropriate environmental conditions`);
    } else if (i <= 28) {
      steps.push(`${i}. ${getProcessStep(id, i)}`);
    } else if (i === 29) {
      steps.push(`${i}. Perform final quality inspection and testing`);
    } else if (i === 30) {
      steps.push(`${i}. Package finished ${title.toLowerCase()} for shipment`);
    } else if (i === 31) {
      steps.push(`${i}. Label packages with specifications and handling instructions`);
    } else if (i === 32) {
      steps.push(`${i}. Generate quality certificates and documentation`);
    } else if (i === 33) {
      steps.push(`${i}. Store in warehouse maintaining proper conditions`);
    } else if (i === 34) {
      steps.push(`${i}. Prepare shipment with appropriate logistics`);
    } else {
      steps.push(`${i}. Ship to customers with tracking and delivery confirmation`);
    }
  }

  return steps;
}

function getProcessStep(id, step) {
  const processes = [
    'Load materials into precision processing equipment',
    'Set up manufacturing tooling and fixtures',
    'Calibrate process parameters (temperature, pressure, speed)',
    'Begin primary manufacturing operation',
    'Monitor process conditions using automated sensors',
    'Perform in-process quality checks',
    'Adjust parameters optimizing for quality and efficiency',
    'Complete primary processing stage',
    'Transfer to secondary processing equipment',
    'Perform secondary operations (machining, assembly, treatment)',
    'Apply surface finishing or coating as required',
    'Clean parts removing process residues',
    'Conduct dimensional inspection using precision instruments',
    'Test functional performance against specifications',
    'Mark or label products for identification and traceability',
    'Sort products by grade or specification',
    'Perform final cleaning and preparation',
    'Apply protective packaging or coating',
    'Conduct statistical process control analysis',
    'Document production batch records',
    'Verify compliance with quality standards',
    'Test samples using laboratory analytical methods',
    'Maintain processing equipment per maintenance schedule',
    'Replace worn tooling and consumables',
    'Calibrate measurement equipment',
    'Update process documentation and work instructions'
  ];

  return processes[(step - 4) % processes.length];
}
