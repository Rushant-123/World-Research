// Analyze ALL 1,413 products and extract company information
const fs = require('fs');
const path = require('path');

const pagesDir = path.join(__dirname, 'content/pages');
const files = fs.readdirSync(pagesDir).filter(f => f.endsWith('.md'));

const companyFrequency = {};
const categoryMap = {};

files.forEach(file => {
  const content = fs.readFileSync(path.join(pagesDir, file), 'utf-8');

  const titleMatch = content.match(/title:\s*"([^"]+)"/);
  const companyMatch = content.match(/company:\s*"([^"]+)"/);

  const title = titleMatch ? titleMatch[1] : '';
  const companyString = companyMatch ? companyMatch[1] : '';

  if (companyString) {
    // Split by / and count each company
    const companies = companyString.split('/').map(c => c.trim());

    companies.forEach(company => {
      companyFrequency[company] = (companyFrequency[company] || 0) + 1;
    });

    // Categorize by keywords
    const titleLower = title.toLowerCase();
    let category = 'Other';

    if (titleLower.includes('chip') || titleLower.includes('processor') || titleLower.includes('cpu') || titleLower.includes('gpu')) {
      category = 'Semiconductors/Processors';
    } else if (titleLower.includes('memory') || titleLower.includes('dram') || titleLower.includes('flash') || titleLower.includes('storage')) {
      category = 'Memory/Storage';
    } else if (titleLower.includes('display') || titleLower.includes('screen') || titleLower.includes('oled') || titleLower.includes('lcd')) {
      category = 'Displays';
    } else if (titleLower.includes('battery') || titleLower.includes('lithium') || titleLower.includes('cell')) {
      category = 'Batteries';
    } else if (titleLower.includes('metal') || titleLower.includes('ore') || titleLower.includes('mining') || titleLower.includes('copper') || titleLower.includes('iron') || titleLower.includes('aluminum')) {
      category = 'Mining/Metals';
    } else if (titleLower.includes('glass') || titleLower.includes('optical') || titleLower.includes('lens')) {
      category = 'Glass/Optics';
    } else if (titleLower.includes('pcb') || titleLower.includes('circuit') || titleLower.includes('board')) {
      category = 'PCB/Boards';
    } else if (titleLower.includes('plastic') || titleLower.includes('polymer') || titleLower.includes('resin')) {
      category = 'Plastics/Polymers';
    } else if (titleLower.includes('chemical') || titleLower.includes('acid') || titleLower.includes('gas')) {
      category = 'Chemicals/Gases';
    } else if (titleLower.includes('sensor') || titleLower.includes('camera')) {
      category = 'Sensors/Cameras';
    } else if (titleLower.includes('equipment') || titleLower.includes('machine') || titleLower.includes('tool')) {
      category = 'Equipment/Machinery';
    } else if (titleLower.includes('software') || titleLower.includes('code')) {
      category = 'Software';
    } else if (titleLower.includes('labor') || titleLower.includes('worker') || titleLower.includes('engineer')) {
      category = 'Labor/Services';
    } else if (titleLower.includes('cable') || titleLower.includes('wire') || titleLower.includes('connector')) {
      category = 'Cables/Connectors';
    } else if (titleLower.includes('packaging') || titleLower.includes('box') || titleLower.includes('container')) {
      category = 'Packaging';
    }

    categoryMap[category] = categoryMap[category] || [];
    categoryMap[category].push({ file, title, companies });
  }
});

// Sort companies by frequency
const sortedCompanies = Object.entries(companyFrequency)
  .sort((a, b) => b[1] - a[1])
  .slice(0, 100);

console.log('=== TOP 100 COMPANIES BY PRODUCT FREQUENCY ===\n');
sortedCompanies.forEach(([company, count], idx) => {
  console.log(`${idx + 1}. ${company}: ${count} products`);
});

console.log('\n\n=== PRODUCTS BY CATEGORY ===\n');
Object.entries(categoryMap)
  .sort((a, b) => b[1].length - a[1].length)
  .forEach(([category, products]) => {
    console.log(`${category}: ${products.length} products`);
  });

console.log('\n\n=== SAMPLE PRODUCTS PER CATEGORY (first 3) ===\n');
Object.entries(categoryMap)
  .sort((a, b) => b[1].length - a[1].length)
  .forEach(([category, products]) => {
    console.log(`\n${category}:`);
    products.slice(0, 3).forEach(p => {
      console.log(`  - ${p.title}: ${p.companies.join(', ')}`);
    });
  });

// Write full analysis to file
fs.writeFileSync('product-analysis.json', JSON.stringify({
  companyFrequency,
  categoryMap,
  totalProducts: files.length,
  topCompanies: sortedCompanies
}, null, 2));

console.log('\n\nWrote full analysis to product-analysis.json');
