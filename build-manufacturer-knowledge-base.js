// Build knowledge base from existing correctly-assigned products
const fs = require('fs');
const path = require('path');

const pagesDir = path.join(__dirname, 'content/pages');
const outputFile = 'manufacturer-patterns.json';

const genericPatterns = [
  'Various Manufacturers',
  'Industrial Manufacturer',
  'Semiconductor Manufacturer',
  'Various Mining Companies'
];

const patterns = {};
const categoryManufacturers = {
  semiconductors: new Set(),
  mining: new Set(),
  chemicals: new Set(),
  equipment: new Set(),
  electronics: new Set(),
  software: new Set()
};

const files = fs.readdirSync(pagesDir).filter(f => f.endsWith('.md'));

files.forEach(file => {
  const content = fs.readFileSync(path.join(pagesDir, file), 'utf-8');

  const titleMatch = content.match(/title:\s*"([^"]+)"/);
  const companyMatch = content.match(/company:\s*"([^"]+)"/);

  if (!titleMatch || !companyMatch) return;

  const title = titleMatch[1];
  const company = companyMatch[1];

  // Skip generic manufacturers
  if (genericPatterns.includes(company)) return;

  // Extract manufacturers
  const manufacturers = company.split('/').map(m => m.trim());

  // Store pattern by title keywords
  const titleLower = title.toLowerCase();
  const keywords = titleLower.split(/\s+/);

  keywords.forEach(keyword => {
    if (keyword.length > 3) {
      if (!patterns[keyword]) {
        patterns[keyword] = {};
      }
      manufacturers.forEach(m => {
        patterns[keyword][m] = (patterns[keyword][m] || 0) + 1;
      });
    }
  });

  // Categorize
  if (titleLower.includes('chip') || titleLower.includes('wafer') || titleLower.includes('semiconductor')) {
    manufacturers.forEach(m => categoryManufacturers.semiconductors.add(m));
  }
  if (titleLower.includes('mining') || titleLower.includes('ore') || titleLower.includes('mineral')) {
    manufacturers.forEach(m => categoryManufacturers.mining.add(m));
  }
  if (titleLower.includes('chemical') || titleLower.includes('acid') || titleLower.includes('gas')) {
    manufacturers.forEach(m => categoryManufacturers.chemicals.add(m));
  }
  if (titleLower.includes('equipment') || titleLower.includes('machine') || titleLower.includes('pump')) {
    manufacturers.forEach(m => categoryManufacturers.equipment.add(m));
  }
  if (titleLower.includes('circuit') || titleLower.includes('pcb') || titleLower.includes('electronic')) {
    manufacturers.forEach(m => categoryManufacturers.electronics.add(m));
  }
  if (titleLower.includes('software') || titleLower.includes('code') || titleLower.includes('program')) {
    manufacturers.forEach(m => categoryManufacturers.software.add(m));
  }
});

// Convert sets to arrays and sort by frequency
const result = {
  patterns: patterns,
  categoryManufacturers: {
    semiconductors: Array.from(categoryManufacturers.semiconductors),
    mining: Array.from(categoryManufacturers.mining),
    chemicals: Array.from(categoryManufacturers.chemicals),
    equipment: Array.from(categoryManufacturers.equipment),
    electronics: Array.from(categoryManufacturers.electronics),
    software: Array.from(categoryManufacturers.software)
  }
};

fs.writeFileSync(outputFile, JSON.stringify(result, null, 2));

console.log('Knowledge base built:');
console.log(`  - ${Object.keys(patterns).length} keyword patterns`);
console.log(`  - Semiconductors: ${result.categoryManufacturers.semiconductors.length} manufacturers`);
console.log(`  - Mining: ${result.categoryManufacturers.mining.length} manufacturers`);
console.log(`  - Chemicals: ${result.categoryManufacturers.chemicals.length} manufacturers`);
console.log(`  - Equipment: ${result.categoryManufacturers.equipment.length} manufacturers`);
console.log(`  - Electronics: ${result.categoryManufacturers.electronics.length} manufacturers`);
console.log(`  - Software: ${result.categoryManufacturers.software.length} manufacturers`);
console.log(`\nSaved to ${outputFile}`);
