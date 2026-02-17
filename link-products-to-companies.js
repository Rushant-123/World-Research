// Update all product pages to link to their company pages
const fs = require('fs');
const path = require('path');

const pagesDir = path.join(__dirname, 'content/pages');
const companiesDir = path.join(__dirname, 'content/companies');

// Get all existing company slugs
const existingCompanies = new Set();
fs.readdirSync(companiesDir)
  .filter(f => f.endsWith('.md') && f !== '_index.md')
  .forEach(f => {
    existingCompanies.add(f.replace('.md', ''));
  });

console.log(`Found ${existingCompanies.size} company pages`);

// Process all product pages
const productFiles = fs.readdirSync(pagesDir).filter(f => f.endsWith('.md'));

let updated = 0;
let skipped = 0;
let noCompany = 0;

console.log(`Processing ${productFiles.length} product pages...`);

productFiles.forEach((file, idx) => {
  const filePath = path.join(pagesDir, file);
  const content = fs.readFileSync(filePath, 'utf-8');

  // Skip if already has market leader section
  if (content.includes('**Market Leader') || content.includes('**Top Market Leaders')) {
    skipped++;
    return;
  }

  // Extract frontmatter
  const companyMatch = content.match(/company:\s*"([^"]+)"/);
  if (!companyMatch) {
    noCompany++;
    return;
  }

  const companyString = companyMatch[1];

  // Skip generic placeholders
  if (companyString.includes('Various') ||
      companyString.includes('Multiple') ||
      companyString.includes('Manufacturer') ||
      companyString.includes('Producer') ||
      companyString.includes('Supplier')) {
    skipped++;
    return;
  }

  // Split companies
  const companies = companyString.split('/').map(c => c.trim()).slice(0, 3);

  // Map to slugs
  const companyLinks = [];
  companies.forEach(company => {
    const slug = company.toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-|-$/g, '');

    if (existingCompanies.has(slug)) {
      companyLinks.push({ name: company, slug });
    }
  });

  if (companyLinks.length === 0) {
    skipped++;
    return;
  }

  // Find where to insert (after first heading)
  const lines = content.split('\n');
  let headingIndex = -1;
  let inFrontmatter = false;
  let frontmatterClosed = false;

  for (let i = 0; i < lines.length; i++) {
    if (lines[i] === '---') {
      if (!inFrontmatter) {
        inFrontmatter = true;
      } else {
        frontmatterClosed = true;
        inFrontmatter = false;
      }
      continue;
    }

    if (frontmatterClosed && lines[i].startsWith('# ')) {
      headingIndex = i;
      break;
    }
  }

  if (headingIndex === -1) {
    skipped++;
    return;
  }

  // Build market leader section
  let section = '\n';

  if (companyLinks.length === 1) {
    section += `**Market Leader:** [${companyLinks[0].name}](/companies/${companyLinks[0].slug})\n`;
  } else {
    section += '**Top Market Leaders:**\n';
    companyLinks.forEach(c => {
      section += `- [${c.name}](/companies/${c.slug})\n`;
    });
  }

  section += '\n';

  // Insert section
  lines.splice(headingIndex + 1, 0, section);

  // Write back
  fs.writeFileSync(filePath, lines.join('\n'));
  updated++;

  if (updated % 100 === 0) {
    console.log(`  Updated ${updated} pages...`);
  }
});

console.log(`\nDone!`);
console.log(`  Updated: ${updated} pages`);
console.log(`  Skipped (already has section): ${skipped}`);
console.log(`  No company data: ${noCompany}`);
