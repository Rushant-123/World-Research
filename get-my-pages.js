#!/usr/bin/env node

// Helper script to get assigned page range for a session
// Usage: node get-my-pages.js [session-number]

const fs = require('fs');
const path = require('path');

const sessionNumber = parseInt(process.argv[2]) || 1;
const pagesPerSession = 60;

console.log(`\n=== SESSION ${sessionNumber} PAGE ASSIGNMENT ===\n`);

// Run dependency analysis
const { execSync } = require('child_process');
const output = execSync('node analyze-dependencies.js', { encoding: 'utf-8' });

// Extract Distance 3 missing pages
const lines = output.split('\n');
let inDistance3 = false;
const missingPages = [];

for (const line of lines) {
  if (line.includes('Distance 3:')) {
    inDistance3 = true;
    console.log(line);
    continue;
  }
  if (inDistance3 && line.trim().startsWith('- ')) {
    const page = line.trim().substring(2);
    missingPages.push(page);
  }
  if (inDistance3 && line.includes('Distance 4:')) {
    break;
  }
}

console.log(`\nTotal missing Distance-3 pages: ${missingPages.length}\n`);

// Calculate range for this session
const startIdx = (sessionNumber - 1) * pagesPerSession;
const endIdx = Math.min(startIdx + pagesPerSession, missingPages.length);
const assignedPages = missingPages.slice(startIdx, endIdx);

console.log(`Session ${sessionNumber} assigned pages ${startIdx + 1}-${endIdx}:`);
console.log(`(${assignedPages.length} pages)\n`);

// Group pages by category for easier processing
const categorized = {
  sensors: [],
  ics: [],
  mechanical: [],
  materials: [],
  assembly: [],
  other: []
};

assignedPages.forEach(page => {
  if (page.includes('sensor') || page.includes('camera') || page.includes('vcm')) {
    categorized.sensors.push(page);
  } else if (page.includes('ic') || page.includes('asic') || page.includes('chip')) {
    categorized.ics.push(page);
  } else if (page.includes('housing') || page.includes('frame') || page.includes('bracket')) {
    categorized.mechanical.push(page);
  } else if (page.includes('adhesive') || page.includes('resin') || page.includes('alloy')) {
    categorized.materials.push(page);
  } else if (page.includes('assembly') || page.includes('labor')) {
    categorized.assembly.push(page);
  } else {
    categorized.other.push(page);
  }
});

// Print by category
for (const [category, pages] of Object.entries(categorized)) {
  if (pages.length > 0) {
    console.log(`\n${category.toUpperCase()} (${pages.length}):`);
    pages.forEach((page, idx) => {
      console.log(`  ${idx + 1}. ${page}`);
    });
  }
}

// Suggest batch grouping
console.log(`\n\n=== SUGGESTED BATCHES ===\n`);
const batchSize = 15;
for (let i = 0; i < assignedPages.length; i += batchSize) {
  const batch = assignedPages.slice(i, i + batchSize);
  console.log(`Batch ${Math.floor(i / batchSize) + 1}: ${batch.length} pages`);
  batch.forEach(page => console.log(`  - ${page}`));
  console.log('');
}

// Create session marker
const markerPath = path.join(__dirname, `.session-${sessionNumber}-active`);
fs.writeFileSync(markerPath, new Date().toISOString());
console.log(`Created session marker: ${markerPath}\n`);
console.log(`Remember to remove when done: rm ${markerPath}\n`);
