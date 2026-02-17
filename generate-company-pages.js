// Generate company pages for missing manufacturers
const fs = require('fs');
const path = require('path');

const companiesDir = path.join(__dirname, 'content/companies');
const missingFile = 'missing-companies.json';

const missing = JSON.parse(fs.readFileSync(missingFile, 'utf-8'));

// Company page template
function generateCompanyPage(company) {
  return `---
title: "${company.name}"
type: "companies"
industry: "Manufacturing"
country: "Global"
---

# ${company.name}

${company.name} is a manufacturer in the global supply chain, producing components and materials for technology products.

## Products

This company manufactures products used in the supply chain documented in this database.

## Market Position

As a manufacturing company, ${company.name} supplies critical components to the global technology ecosystem.
`;
}

let created = 0;

missing.forEach(company => {
  const filePath = path.join(companiesDir, `${company.slug}.md`);

  // Skip if file already exists
  if (fs.existsSync(filePath)) {
    console.log(`⊘ ${company.slug}.md already exists, skipping`);
    return;
  }

  const content = generateCompanyPage(company);
  fs.writeFileSync(filePath, content);
  created++;

  if (created <= 10) {
    console.log(`✓ Created ${company.slug}.md`);
  }
});

console.log(`\nCreated ${created} company pages`);
if (created > 10) {
  console.log(`  (showing first 10, ${created - 10} more created)`);
}
