// Simple approach: For each product, use the companies already listed in frontmatter
const fs = require('fs');
const path = require('path');

const pagesDir = path.join(__dirname, 'content/pages');
const companiesDir = path.join(__dirname, 'content/companies');

// Get existing company pages
const existingCompanies = new Set();
fs.readdirSync(companiesDir)
  .filter(f => f.endsWith('.md') && f !== '_index.md')
  .forEach(f => {
    existingCompanies.add(f.replace('.md', ''));
  });

console.log(`Found ${existingCompanies.size} existing company pages\n`);

// Process each product page
const productFiles = fs.readdirSync(pagesDir).filter(f => f.endsWith('.md'));

let processed = 0;
let updated = 0;
let skipped = 0;
let companiesNeeded = new Set();

console.log(`Processing ${productFiles.length} product pages...\n`);

productFiles.forEach(file => {
  const filePath = path.join(pagesDir, file);
  let content = fs.readFileSync(filePath, 'utf-8');

  // Skip if already has market leaders
  if (content.includes('**Market Leader') || content.includes('**Top Market Leaders')) {
    skipped++;
    return;
  }

  // Extract company field from frontmatter
  const companyMatch = content.match(/company:\s*"([^"]+)"/);
  if (!companyMatch) {
    skipped++;
    return;
  }

  const companyString = companyMatch[1];

  // Skip generic manufacturers
  if (companyString.includes('Various') ||
      companyString.includes('Multiple') ||
      companyString.toLowerCase().includes('manufacturer') ||
      companyString.toLowerCase().includes('producer') ||
      companyString.toLowerCase().includes('supplier') ||
      companyString.length < 3) {
    skipped++;
    return;
  }

  // Split by / and take top 3
  const companies = companyString.split('/')
    .map(c => c.trim())
    .filter(c => c.length > 2)
    .slice(0, 3);

  if (companies.length === 0) {
    skipped++;
    return;
  }

  // Map each company to slug
  const companyLinks = companies.map(company => {
    const slug = company.toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-|-$/g, '');

    return { name: company, slug, exists: existingCompanies.has(slug) };
  });

  // Track companies that need pages
  companyLinks.forEach(c => {
    if (!c.exists) {
      companiesNeeded.add(JSON.stringify({ name: c.name, slug: c.slug }));
    }
  });

  // Find insertion point (after first heading)
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
    section += `**Manufactured by:** [${companyLinks[0].name}](/companies/${companyLinks[0].slug})\n`;
  } else {
    section += '**Top Manufacturers:**\n';
    companyLinks.forEach(c => {
      section += `- [${c.name}](/companies/${c.slug})\n`;
    });
  }

  section += '\n';

  // Insert
  lines.splice(headingIndex + 1, 0, section);
  fs.writeFileSync(filePath, lines.join('\n'));

  updated++;
  processed++;

  if (updated % 100 === 0) {
    console.log(`  Updated ${updated} products...`);
  }
});

console.log(`\nResults:`);
console.log(`  Updated: ${updated} products`);
console.log(`  Skipped: ${skipped} products (generic manufacturers or already done)`);
console.log(`  Companies that need pages: ${companiesNeeded.size}`);

// Show top companies that need pages
const neededArray = Array.from(companiesNeeded).map(s => JSON.parse(s));
console.log(`\nTop 30 companies that need pages:`);
neededArray.slice(0, 30).forEach((c, idx) => {
  console.log(`  ${idx + 1}. ${c.name} (${c.slug})`);
});
