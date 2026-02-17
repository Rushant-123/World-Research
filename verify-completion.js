// Verify manufacturer completion and data integrity
const fs = require('fs');
const path = require('path');

const pagesDir = path.join(__dirname, 'content/pages');
const companiesDir = path.join(__dirname, 'content/companies');

const genericPatterns = [
  'Various Manufacturers',
  'Industrial Manufacturer',
  'Semiconductor Manufacturer',
  'Various Mining Companies'
];

let totalProducts = 0;
let genericFound = 0;
let validPages = 0;
let errors = [];

// Slugify helper
function slugify(name) {
  return name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
}

// Get existing company slugs
const companyFiles = fs.readdirSync(companiesDir).filter(f => f.endsWith('.md'));
const existingCompanySlugs = new Set(companyFiles.map(f => f.replace('.md', '')));

// Check all product pages
const files = fs.readdirSync(pagesDir).filter(f => f.endsWith('.md'));

files.forEach(file => {
  totalProducts++;
  const filePath = path.join(pagesDir, file);
  const content = fs.readFileSync(filePath, 'utf-8');

  // Check for generic manufacturers
  const companyMatch = content.match(/company:\s*"([^"]+)"/);
  if (companyMatch) {
    const company = companyMatch[1];

    if (genericPatterns.includes(company)) {
      genericFound++;
      errors.push(`Generic manufacturer in ${file}: ${company}`);
    } else {
      validPages++;

      // Check company pages exist
      const companies = company.split('/').map(c => c.trim());
      companies.forEach(c => {
        const slug = slugify(c);
        if (!existingCompanySlugs.has(slug)) {
          errors.push(`Missing company page for "${c}" (${slug}.md) referenced in ${file}`);
        }
      });
    }
  } else {
    errors.push(`No company field in ${file}`);
  }

  // Check YAML syntax
  if (!content.match(/^---\n[\s\S]+?\n---/)) {
    errors.push(`Invalid YAML frontmatter in ${file}`);
  }

  // Check price model
  const priceMatch = content.match(/selling_price:\s*(\d+\.?\d*)/);
  const valueMatch = content.match(/value_created:\s*(\d+\.?\d*)/);

  if (priceMatch && valueMatch) {
    const price = parseFloat(priceMatch[1]);
    const value = parseFloat(valueMatch[1]);

    if (value >= price) {
      errors.push(`Invalid economics in ${file}: value_created >= selling_price`);
    }
  }
});

// Generate report
const report = {
  totalProducts,
  validPages,
  genericFound,
  totalCompanyPages: companyFiles.length,
  errors: errors.slice(0, 50),
  totalErrors: errors.length,
  success: genericFound === 0 && errors.length === 0
};

fs.writeFileSync('final-report.json', JSON.stringify(report, null, 2));

console.log('\n=== VERIFICATION REPORT ===\n');
console.log(`Total Products: ${totalProducts}`);
console.log(`Valid Pages: ${validPages}`);
console.log(`Generic Manufacturers Found: ${genericFound} ${genericFound === 0 ? '✓' : '✗'}`);
console.log(`Total Company Pages: ${companyFiles.length}`);
console.log(`Total Errors: ${errors.length} ${errors.length === 0 ? '✓' : '✗'}`);

if (errors.length > 0) {
  console.log('\nFirst 10 errors:');
  errors.slice(0, 10).forEach(e => console.log(`  - ${e}`));
  if (errors.length > 10) {
    console.log(`  ... and ${errors.length - 10} more (see final-report.json)`);
  }
}

console.log(`\n${report.success ? '✓ SUCCESS' : '✗ ISSUES FOUND'}: Manufacturer completion verification`);
console.log(`Report saved to final-report.json`);
