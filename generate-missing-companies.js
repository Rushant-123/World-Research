// Loop through all product pages and generate missing company pages
const fs = require('fs');
const path = require('path');

const pagesDir = path.join(__dirname, 'content/pages');
const companiesDir = path.join(__dirname, 'content/companies');

// Get all product pages
const productFiles = fs.readdirSync(pagesDir).filter(f => f.endsWith('.md'));

// Get existing company pages
const existingCompanies = new Set();
if (fs.existsSync(companiesDir)) {
  fs.readdirSync(companiesDir)
    .filter(f => f.endsWith('.md') && f !== '_index.md')
    .forEach(f => {
      existingCompanies.add(f.replace('.md', ''));
    });
}

console.log(`Found ${existingCompanies.size} existing company pages`);

// Extract all companies from product pages
const companyData = new Map();

productFiles.forEach(file => {
  const content = fs.readFileSync(path.join(pagesDir, file), 'utf-8');

  const titleMatch = content.match(/title:\s*"([^"]+)"/);
  const companyMatch = content.match(/company:\s*"([^"]+)"/);
  const countryMatch = content.match(/country:\s*"([^"]+)"/);

  if (companyMatch) {
    const title = titleMatch ? titleMatch[1] : '';
    const companyString = companyMatch[1];
    const country = countryMatch ? countryMatch[1] : 'Unknown';

    // Split by / to get individual companies
    const companies = companyString.split('/').map(c => c.trim());

    companies.forEach(company => {
      // Skip generic placeholders
      if (company.includes('Various') ||
          company.includes('Multiple') ||
          company.includes('Industrial Manufacturer') ||
          company.includes('Materials Producer') ||
          company.includes('Chemical Processing') ||
          company.includes('Equipment Manufacturer') ||
          company.includes('Semiconductor Manufacturer') ||
          company.length < 3) {
        return;
      }

      if (!companyData.has(company)) {
        companyData.set(company, {
          name: company,
          products: [],
          countries: new Set(),
          slug: company.toLowerCase()
            .replace(/[^a-z0-9]+/g, '-')
            .replace(/^-|-$/g, '')
        });
      }

      const data = companyData.get(company);
      data.products.push(title);
      data.countries.add(country.split('/')[0].trim());
    });
  }
});

console.log(`Found ${companyData.size} unique companies across all products`);

// Filter out companies that already have pages
const missingCompanies = Array.from(companyData.values())
  .filter(c => !existingCompanies.has(c.slug))
  .sort((a, b) => b.products.length - a.products.length);

console.log(`\nNeed to create ${missingCompanies.length} company pages`);

console.log('\nTop 50 companies by product count:');
missingCompanies.slice(0, 50).forEach((c, idx) => {
  console.log(`${idx + 1}. ${c.name} - ${c.products.length} products - ${Array.from(c.countries).join(', ')}`);
});

// Save to JSON for generation
fs.writeFileSync('missing-companies.json', JSON.stringify(missingCompanies, null, 2));
console.log('\nSaved missing companies to missing-companies.json');

console.log(`\nNext: Will generate ${missingCompanies.length} company pages`);
