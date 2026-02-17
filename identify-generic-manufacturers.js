// Identify all products with generic manufacturer names
const fs = require('fs');
const path = require('path');

const pagesDir = path.join(__dirname, 'content/pages');
const outputFile = 'generic-products.json';

const genericPatterns = [
  'Various Manufacturers',
  'Industrial Manufacturer',
  'Semiconductor Manufacturer',
  'Various Mining Companies'
];

const results = {
  variousManufacturers: [],
  industrialManufacturer: [],
  semiconductorManufacturer: [],
  variousMiningCompanies: [],
  totalCount: 0
};

const files = fs.readdirSync(pagesDir).filter(f => f.endsWith('.md'));

files.forEach(file => {
  const content = fs.readFileSync(path.join(pagesDir, file), 'utf-8');
  const companyMatch = content.match(/company:\s*"([^"]+)"/);

  if (companyMatch) {
    const company = companyMatch[1];

    if (company === 'Various Manufacturers') {
      results.variousManufacturers.push(file);
    } else if (company === 'Industrial Manufacturer') {
      results.industrialManufacturer.push(file);
    } else if (company === 'Semiconductor Manufacturer') {
      results.semiconductorManufacturer.push(file);
    } else if (company === 'Various Mining Companies') {
      results.variousMiningCompanies.push(file);
    }
  }
});

results.totalCount = results.variousManufacturers.length +
                     results.industrialManufacturer.length +
                     results.semiconductorManufacturer.length +
                     results.variousMiningCompanies.length;

fs.writeFileSync(outputFile, JSON.stringify(results, null, 2));

console.log(`Found ${results.totalCount} products with generic manufacturers:`);
console.log(`  - Various Manufacturers: ${results.variousManufacturers.length}`);
console.log(`  - Industrial Manufacturer: ${results.industrialManufacturer.length}`);
console.log(`  - Semiconductor Manufacturer: ${results.semiconductorManufacturer.length}`);
console.log(`  - Various Mining Companies: ${results.variousMiningCompanies.length}`);
console.log(`\nSaved to ${outputFile}`);
