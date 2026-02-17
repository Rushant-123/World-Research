// Systematically add market leaders to product pages
// Maps products to companies based on industry/category

const fs = require('fs');
const path = require('path');

// Market leader mappings by product category
const marketLeaders = {
  // Semiconductors & Processors
  'cpu': [
    { name: 'Intel', share: 68, link: 'intel' },
    { name: 'AMD', share: 32, link: 'amd' }
  ],
  'server-cpu': [
    { name: 'Intel', share: 72, link: 'intel' },
    { name: 'AMD', share: 28, link: 'amd' }
  ],
  'gpu': [
    { name: 'Nvidia', share: 82, link: 'nvidia' },
    { name: 'AMD', share: 12, link: 'amd' },
    { name: 'Intel', share: 6, link: 'intel' }
  ],
  'dram-chip': [
    { name: 'Samsung', share: 42, link: 'samsung-electronics' },
    { name: 'SK Hynix', share: 29, link: 'sk-hynix' },
    { name: 'Micron', share: 23, link: 'micron' }
  ],
  'nand-flash-memory': [
    { name: 'Samsung', share: 34, link: 'samsung-electronics' },
    { name: 'SK Hynix', share: 19, link: 'sk-hynix' },
    { name: 'Micron', share: 12, link: 'micron' }
  ],
  'silicon-wafer': [
    { name: 'TSMC', share: 54, link: 'tsmc' },
    { name: 'Samsung', share: 16, link: 'samsung-electronics' },
    { name: 'Intel', share: 8, link: 'intel' }
  ],

  // Lithography & Equipment
  'euv-lithography': [
    { name: 'ASML', share: 100, link: 'asml' }
  ],
  'duv-lithography': [
    { name: 'ASML', share: 92, link: 'asml' },
    { name: 'Nikon', share: 6, link: 'nikon' },
    { name: 'Canon', share: 2, link: 'canon' }
  ],
  'wafer-stepper': [
    { name: 'ASML', share: 88, link: 'asml' }
  ],

  // Mining & Metals
  'copper-metal': [
    { name: 'Freeport-McMoRan', share: 28, link: 'freeport-mcmoran' },
    { name: 'BHP', share: 18, link: 'bhp' },
    { name: 'Glencore', share: 15, link: 'glencore' }
  ],
  'copper-ore': [
    { name: 'Freeport-McMoRan', share: 31, link: 'freeport-mcmoran' },
    { name: 'BHP', share: 22, link: 'bhp' }
  ],
  'copper-concentrate': [
    { name: 'Freeport-McMoRan', share: 31, link: 'freeport-mcmoran' },
    { name: 'BHP', share: 19, link: 'bhp' }
  ],
  'iron-ore': [
    { name: 'Vale', share: 32, link: 'vale' },
    { name: 'Rio Tinto', share: 28, link: 'rio-tinto' },
    { name: 'BHP', share: 25, link: 'bhp' }
  ],
  'aluminum-metal': [
    { name: 'Rio Tinto', share: 18, link: 'rio-tinto' },
    { name: 'Alcoa', share: 14, link: 'alcoa' },
    { name: 'Norsk Hydro', share: 11, link: 'norsk-hydro' }
  ],
  'gold-ore': [
    { name: 'Barrick Gold', share: 8, link: 'barrick-gold' },
    { name: 'Newmont', share: 7, link: 'newmont' },
    { name: 'Freeport-McMoRan', share: 8, link: 'freeport-mcmoran' }
  ],

  // Displays
  'oled-display': [
    { name: 'Samsung', share: 68, link: 'samsung-electronics' },
    { name: 'LG Display', share: 22, link: 'lg-display' },
    { name: 'BOE', share: 8, link: 'boe' }
  ],
  'lcd-display': [
    { name: 'BOE', share: 27, link: 'boe' },
    { name: 'LG Display', share: 18, link: 'lg-display' },
    { name: 'Samsung', share: 12, link: 'samsung-electronics' }
  ],

  // Batteries
  'lithium-ion-battery': [
    { name: 'CATL', share: 37, link: 'catl' },
    { name: 'LG Energy Solution', share: 14, link: 'lg-energy' },
    { name: 'BYD', share: 12, link: 'byd' }
  ],
  'battery-cell': [
    { name: 'CATL', share: 37, link: 'catl' },
    { name: 'LG Energy Solution', share: 14, link: 'lg-energy' }
  ],

  // Glass & Materials
  'gorilla-glass': [
    { name: 'Corning', share: 89, link: 'corning' }
  ],
  'optical-fiber': [
    { name: 'Corning', share: 32, link: 'corning' },
    { name: 'Furukawa', share: 18, link: 'furukawa' }
  ]
};

// Generic fallbacks by keyword matching
const keywordMappings = {
  'chip': ['tsmc', 'samsung-electronics', 'intel'],
  'processor': ['intel', 'amd', 'qualcomm'],
  'memory': ['samsung-electronics', 'sk-hynix', 'micron'],
  'display': ['samsung-electronics', 'lg-display', 'boe'],
  'battery': ['catl', 'lg-energy', 'panasonic'],
  'mining': ['rio-tinto', 'bhp', 'vale'],
  'copper': ['freeport-mcmoran', 'bhp', 'glencore'],
  'aluminum': ['rio-tinto', 'alcoa'],
  'iron': ['vale', 'rio-tinto', 'bhp'],
  'lithography': ['asml'],
  'glass': ['corning'],
  'semiconductor-equipment': ['applied-materials', 'lam-research', 'asml']
};

function getMarketLeaders(productId, productTitle) {
  // Exact match
  if (marketLeaders[productId]) {
    return marketLeaders[productId];
  }

  // Keyword matching
  const titleLower = productTitle.toLowerCase();
  for (const [keyword, companies] of Object.entries(keywordMappings)) {
    if (titleLower.includes(keyword)) {
      // Return placeholder data (would need full company database)
      return companies.slice(0, 3).map((link, idx) => ({
        name: link.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' '),
        share: null,
        link
      }));
    }
  }

  return null;
}

function updateProductPage(filePath, productId, productTitle) {
  const leaders = getMarketLeaders(productId, productTitle);
  if (!leaders || leaders.length === 0) {
    return false;
  }

  let content = fs.readFileSync(filePath, 'utf-8');
  const lines = content.split('\n');

  // Find the first heading (should be right after frontmatter)
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
    return false;
  }

  // Check if already has market leader section
  if (content.includes('**Market Leader') || content.includes('**Top Market Leaders')) {
    return false; // Already updated
  }

  // Build market leader section
  let marketLeaderSection = '\n';

  if (leaders.length === 1) {
    const l = leaders[0];
    marketLeaderSection += `**Market Leader:** [${l.name}](/companies/${l.link})`;
    if (l.share) {
      marketLeaderSection += ` (${l.share}% market share)`;
    }
  } else {
    // Calculate total share
    const totalShare = leaders.reduce((sum, l) => sum + (l.share || 0), 0);

    if (totalShare >= 80 && leaders.length > 3) {
      // Use 80% rule
      let cumulative = 0;
      const top80 = [];
      for (const l of leaders) {
        top80.push(l);
        cumulative += l.share || 0;
        if (cumulative >= 80) break;
      }
      marketLeaderSection += '**Top Market Leaders** (first 80%):\n';
      top80.forEach(l => {
        marketLeaderSection += `- [${l.name}](/companies/${l.link})`;
        if (l.share) marketLeaderSection += ` - ${l.share}% share`;
        marketLeaderSection += '\n';
      });
    } else {
      // Use top 3
      marketLeaderSection += '**Top Market Leaders:**\n';
      leaders.slice(0, 3).forEach((l, idx) => {
        marketLeaderSection += `- [${l.name}](/companies/${l.link})`;
        if (l.share) marketLeaderSection += ` - ${l.share}% share`;
        marketLeaderSection += '\n';
      });
    }
  }

  marketLeaderSection += '\n';

  // Insert after the heading
  lines.splice(headingIndex + 1, 0, marketLeaderSection);

  fs.writeFileSync(filePath, lines.join('\n'));
  return true;
}

// Main execution
const pagesDir = path.join(__dirname, 'content/pages');
const files = fs.readdirSync(pagesDir).filter(f => f.endsWith('.md'));

let updated = 0;
let skipped = 0;

console.log(`Processing ${files.length} product pages...`);

files.forEach(file => {
  const productId = file.replace('.md', '');
  const filePath = path.join(pagesDir, file);

  // Read title from file
  const content = fs.readFileSync(filePath, 'utf-8');
  const titleMatch = content.match(/title:\s*"([^"]+)"/);
  const productTitle = titleMatch ? titleMatch[1] : productId;

  if (updateProductPage(filePath, productId, productTitle)) {
    updated++;
    if (updated % 50 === 0) {
      console.log(`  Updated ${updated} pages...`);
    }
  } else {
    skipped++;
  }
});

console.log(`\nDone!`);
console.log(`  Updated: ${updated} pages`);
console.log(`  Skipped: ${skipped} pages`);
