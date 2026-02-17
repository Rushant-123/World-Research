// Analyze products and identify which need market leader data
const fs = require('fs');
const path = require('path');

const pagesDir = path.join(__dirname, 'content/pages');
const files = fs.readdirSync(pagesDir).filter(f => f.endsWith('.md'));

console.log(`Analyzing ${files.length} product pages...`);

const categories = {};
const productsNeedingLeaders = [];

files.forEach(file => {
  const content = fs.readFileSync(path.join(pagesDir, file), 'utf-8');
  const lines = content.split('\n');

  let inFrontmatter = false;
  let title = '';
  let company = '';

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    if (line === '---') {
      if (!inFrontmatter) {
        inFrontmatter = true;
      } else {
        break;
      }
      continue;
    }

    if (inFrontmatter) {
      if (line.startsWith('title:')) {
        title = line.match(/title:\s*"([^"]+)"/)?.[1] || '';
      } else if (line.startsWith('company:')) {
        company = line.match(/company:\s*"([^"]+)"/)?.[1] || '';
      }
    }
  }

  if (title && company) {
    const companies = company.split('/').map(c => c.trim());

    // Categorize products
    if (title.toLowerCase().includes('chip') || title.toLowerCase().includes('processor')) {
      categories['Semiconductors'] = categories['Semiconductors'] || [];
      categories['Semiconductors'].push({ file, title, companies });
    } else if (title.toLowerCase().includes('metal') || title.toLowerCase().includes('ore')) {
      categories['Mining & Metals'] = categories['Mining & Metals'] || [];
      categories['Mining & Metals'].push({ file, title, companies });
    } else if (title.toLowerCase().includes('display') || title.toLowerCase().includes('screen')) {
      categories['Displays'] = categories['Displays'] || [];
      categories['Displays'].push({ file, title, companies });
    } else if (title.toLowerCase().includes('battery')) {
      categories['Energy Storage'] = categories['Energy Storage'] || [];
      categories['Energy Storage'].push({ file, title, companies });
    }

    productsNeedingLeaders.push({
      file: file.replace('.md', ''),
      title,
      companies: companies.slice(0, 3) // Top 3
    });
  }
});

console.log('\n=== Product Categories ===');
Object.keys(categories).forEach(cat => {
  console.log(`${cat}: ${categories[cat].length} products`);
});

console.log(`\n=== Top 10 Products ===`);
productsNeedingLeaders.slice(0, 10).forEach(p => {
  console.log(`${p.title}: ${p.companies.join(', ')}`);
});

console.log(`\nTotal products: ${productsNeedingLeaders.length}`);

// Export for use in generation script
fs.writeFileSync(
  'products-with-leaders.json',
  JSON.stringify(productsNeedingLeaders, null, 2)
);

console.log('\nWrote products-with-leaders.json');
