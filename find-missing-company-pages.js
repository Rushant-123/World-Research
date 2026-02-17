// Find companies that need pages created
const fs = require('fs');
const path = require('path');

const pagesDir = path.join(__dirname, 'content/pages');
const companiesDir = path.join(__dirname, 'content/companies');

// Helper: Convert company name to slug
function slugify(name) {
  return name.toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
}

// Get all companies from product pages
const productCompanies = new Set();
const files = fs.readdirSync(pagesDir).filter(f => f.endsWith('.md'));

files.forEach(file => {
  const content = fs.readFileSync(path.join(pagesDir, file), 'utf-8');
  const companyMatch = content.match(/company:\s*"([^"]+)"/);

  if (companyMatch) {
    const companies = companyMatch[1].split('/').map(c => c.trim());
    companies.forEach(c => productCompanies.add(c));
  }
});

// Get existing company pages
const existingCompanies = new Set();
const companyFiles = fs.readdirSync(companiesDir).filter(f => f.endsWith('.md'));

companyFiles.forEach(file => {
  const slug = file.replace('.md', '');
  existingCompanies.add(slug);
});

// Find missing
const missing = [];

productCompanies.forEach(company => {
  const slug = slugify(company);
  if (!existingCompanies.has(slug)) {
    missing.push({ name: company, slug });
  }
});

fs.writeFileSync('missing-companies.json', JSON.stringify(missing, null, 2));

console.log(`Found ${missing.length} companies needing pages:`);
missing.slice(0, 20).forEach(c => console.log(`  - ${c.name} (${c.slug}.md)`));
if (missing.length > 20) {
  console.log(`  ... and ${missing.length - 20} more`);
}
console.log(`\nSaved to missing-companies.json`);
