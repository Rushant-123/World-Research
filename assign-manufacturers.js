const fs = require('fs');
const path = require('path');

// Load data files
const genericProducts = JSON.parse(fs.readFileSync('generic-products.json', 'utf8'));
const manufacturerPatterns = JSON.parse(fs.readFileSync('manufacturer-patterns.json', 'utf8'));

// Map JSON keys to actual company names
const companyTypeMap = {
  'variousManufacturers': 'Various Manufacturers',
  'industrialManufacturer': 'Industrial Manufacturer',
  'semiconductorManufacturer': 'Semiconductor Manufacturer',
  'variousMiningCompanies': 'Various Mining Companies'
};

// Industry leader fallbacks by company type
const industryLeaders = {
  'Various Manufacturers': ['BASF', 'Dow', 'Siemens', '3M'],
  'Industrial Manufacturer': ['Siemens', 'ABB', 'Caterpillar', 'GE'],
  'Semiconductor Manufacturer': ['TSMC', 'Samsung', 'Intel', 'ASML'],
  'Various Mining Companies': ['Rio Tinto', 'BHP', 'Glencore', 'Vale']
};

// Category keywords for classification
const categoryKeywords = {
  semiconductors: ['chip', 'circuit', 'circuits', 'dac', 'adc', 'ic', 'transistor', 'mosfet', 'cpu', 'core', 'silicon', 'wafer', 'semiconductor', 'fpga', 'asic', 'soc', 'memory', 'dram', 'nand', 'flash', 'pcie', 'serdes', 'mux', 'interface', 'chipset', 'rtc', 'oscillator', 'crypto', 'ecc', 'buffer', 'analog', 'digital', 'amplifier', 'monitor'],
  equipment: ['equipment', 'machine', 'system', 'stage', 'scanner', 'probe', 'tester', 'testing', 'chuck', 'platen', 'puller', 'welder', 'mixer', 'reactor', 'tank', 'cell', 'chamber', 'crucible', 'boat', 'unit', 'module', 'accelerator', 'runner', 'dryer', 'kneader', 'atomizer', 'classifier', 'crusher', 'screens', 'column'],
  mining: ['mining', 'ore', 'mineral', 'bauxite', 'laterite', 'scheelite', 'sphalerite', 'placer', 'pit', 'underground', 'dragline', 'excavation', 'trucks', 'lease'],
  chemicals: ['chemical', 'chemicals', 'polymer', 'additive', 'additives', 'catalyst', 'solvent', 'acid', 'salt', 'carbonate', 'sulfate', 'resist', 'dopant', 'dopants', 'electrolyte', 'inhibitor', 'inhibitors', 'surfactant', 'emulsifier', 'emulsifiers', 'dispersing', 'retardant', 'agent', 'stabilizer', 'modifiers', 'adjusters', 'feedstock', 'monomer', 'pigment', 'pigments', 'dye', 'slurry', 'paste', 'epichlorohydrin', 'styrene', 'carbonate', 'bpa', 'lipf6', 'cobalt', 'manganese', 'dimethyl', 'ethylene', 'ethyl', 'cyanobiphenyl', 'wear', 'corrosion', 'chiral'],
  materials: ['film', 'sheet', 'layer', 'layers', 'membrane', 'coating', 'target', 'targets', 'substrate', 'foil', 'coverlay', 'prepreg', 'stiffener', 'pellicle', 'mask', 'blank', 'quartz', 'silica', 'ceramic', 'titanate', 'barium', 'ferrite', 'zeolite', 'nafion', 'tac', 'pet', 'pva', 'pp', 'ito', 'igzo', 'sapphire', 'silver', 'tungsten', 'neodymium', 'arsenic', 'iodine', 'anodes', 'anode', 'carbon', 'blade', 'diamond', 'protective', 'core', 'material'],
  optics: ['optics', 'lens', 'light', 'lamp', 'uv', 'euv', 'source', 'detector', 'xray', 'scanner', 'display', 'backlight', 'diffuser', 'reflector', 'matrix'],
  software: ['software', 'code', 'algorithm', 'algorithms', 'validation', 'verification', 'emulation', 'design', 'layout', 'pdk', 'rom', 'firmware', 'classification', 'defect'],
  infrastructure: ['building', 'flooring', 'ceiling', 'hvac', 'ahu', 'locks', 'shower', 'transport', 'overhead', 'web-handling', 'handling', 'hardware', 'mounting', 'grille', 'shielding', 'transport', 'storage', 'recovery']
};

// Top manufacturers by category (from manufacturer-patterns analysis)
const categoryManufacturers = {
  semiconductors: ['TSMC', 'Samsung', 'Intel', 'Texas Instruments', 'Analog Devices', 'STMicroelectronics', 'NXP', 'Infineon', 'Qualcomm', 'Broadcom', 'ARM', 'AMD'],
  equipment: ['Applied Materials', 'ASML', 'Tokyo Electron', 'Lam Research', 'KLA', 'ASM International', 'Veeco', 'Axcelis', 'Plasma-Therm', 'GEA', 'Alfa Laval', 'SPX Flow', 'Siemens', 'ABB'],
  mining: ['Rio Tinto', 'BHP', 'Glencore', 'Vale', 'Freeport-McMoRan', 'Anglo American', 'Newmont', 'Southern Copper', 'Aluminum Corporation of China', 'Norsk Hydro'],
  chemicals: ['BASF', 'Dow', 'Solvay', 'Evonik', 'Huntsman', 'Hexion', 'Olin', 'Arkema', 'Mitsubishi Chemical', 'Shin-Etsu', 'Sumitomo', 'LG Chem', 'SABIC', 'Covestro', 'Wacker'],
  materials: ['Saint-Gobain', '3M', 'Corning', 'AGC', 'Nitto Denko', 'Sumitomo Chemical', 'Tosoh', 'Mitsui Chemicals', 'DuPont', 'Toray', 'Mitsubishi Materials', 'JX Nippon Mining'],
  optics: ['Sony', 'Canon', 'Nikon', 'Zeiss', 'Coherent', 'II-VI', 'Lumentum', 'Samsung', 'LG Display', 'BOE Technology'],
  software: ['Cadence', 'Synopsys', 'Mentor Graphics', 'Siemens EDA', 'Ansys'],
  infrastructure: ['Johnson Controls', 'Carrier', 'Trane', 'Daikin', 'Armstrong World Industries', 'Ardmac Group', 'Flextronics']
};

function extractKeywords(title) {
  // Convert to lowercase and split into words
  const words = title.toLowerCase()
    .replace(/[^a-z0-9\s-]/g, ' ')
    .split(/[\s-]+/)
    .filter(w => w.length > 2);

  return words;
}

function getTopManufacturers(keyword, minCount = 2, limit = 4) {
  const patterns = manufacturerPatterns.patterns[keyword];
  if (!patterns) return [];

  // Convert to array and sort by frequency
  const sorted = Object.entries(patterns)
    .filter(([company, count]) => count >= minCount && !company.includes('Various'))
    .sort((a, b) => b[1] - a[1])
    .map(([company]) => company);

  return sorted.slice(0, limit);
}

function categorizeProduct(keywords) {
  const scores = {};

  // Score each category based on keyword matches
  for (const [category, categoryWords] of Object.entries(categoryKeywords)) {
    scores[category] = 0;
    for (const keyword of keywords) {
      if (categoryWords.includes(keyword)) {
        scores[category]++;
      }
    }
  }

  // Get category with highest score
  const sorted = Object.entries(scores)
    .filter(([_, score]) => score > 0)
    .sort((a, b) => b[1] - a[1]);

  return sorted.length > 0 ? sorted[0][0] : null;
}

function assignManufacturers(file, currentCompany) {
  const title = file.replace('.md', '').replace(/-/g, ' ');
  const keywords = extractKeywords(title);

  // Strategy 1: Keyword Pattern Matching (High Confidence)
  const keywordMatches = new Map();

  for (const keyword of keywords) {
    const manufacturers = getTopManufacturers(keyword, 2, 4);
    if (manufacturers.length > 0) {
      for (const mfg of manufacturers) {
        keywordMatches.set(mfg, (keywordMatches.get(mfg) || 0) + 1);
      }
    }
  }

  // If we have strong keyword matches (3+ manufacturers with 2+ keyword matches)
  const strongMatches = Array.from(keywordMatches.entries())
    .filter(([_, count]) => count >= 2)
    .sort((a, b) => b[1] - a[1])
    .map(([mfg]) => mfg)
    .slice(0, 4);

  if (strongMatches.length >= 2) {
    return {
      file,
      currentCompany,
      proposedCompany: strongMatches.join(' / '),
      confidence: 'high',
      reasoning: `Strong keyword matches across multiple terms: ${keywords.slice(0, 3).join(', ')}`
    };
  }

  // Weaker keyword matches (1-2 matches)
  const mediumMatches = Array.from(keywordMatches.entries())
    .sort((a, b) => b[1] - a[1])
    .map(([mfg]) => mfg)
    .slice(0, 4);

  if (mediumMatches.length >= 2) {
    return {
      file,
      currentCompany,
      proposedCompany: mediumMatches.join(' / '),
      confidence: 'medium',
      reasoning: `Keyword pattern matches found for: ${keywords.slice(0, 3).join(', ')}`
    };
  }

  // Strategy 2: Category-Based Assignment (Medium Confidence)
  const category = categorizeProduct(keywords);

  if (category && categoryManufacturers[category]) {
    const categoryMfgs = categoryManufacturers[category].slice(0, 4);
    return {
      file,
      currentCompany,
      proposedCompany: categoryMfgs.join(' / '),
      confidence: 'medium',
      reasoning: `Categorized as '${category}' based on keywords: ${keywords.filter(k => categoryKeywords[category].includes(k)).join(', ')}`
    };
  }

  // Strategy 2b: Single keyword match from patterns (Medium-Low Confidence)
  if (mediumMatches.length >= 1) {
    // Supplement with category if available
    const cat = categorizeProduct(keywords);
    let companies = mediumMatches;
    if (cat && categoryManufacturers[cat]) {
      const catMfgs = categoryManufacturers[cat].slice(0, 2);
      companies = [...new Set([...mediumMatches, ...catMfgs])].slice(0, 4);
    }

    return {
      file,
      currentCompany,
      proposedCompany: companies.join(' / '),
      confidence: 'medium',
      reasoning: `Partial keyword matches combined with category context`
    };
  }

  // Check if we have a category match even without keyword matches
  const catOnly = categorizeProduct(keywords);

  if (catOnly && categoryManufacturers[catOnly]) {
    const categoryMfgs = categoryManufacturers[catOnly].slice(0, 4);
    return {
      file,
      currentCompany,
      proposedCompany: categoryMfgs.join(' / '),
      confidence: 'medium',
      reasoning: `Categorized as '${catOnly}' based on keywords: ${keywords.filter(k => categoryKeywords[catOnly] && categoryKeywords[catOnly].includes(k)).join(', ')}`
    };
  }

  // Strategy 3: Fallback to Industry Leaders (Low Confidence)
  const fallbackMfgs = industryLeaders[currentCompany] || industryLeaders['Various Manufacturers'];

  return {
    file,
    currentCompany,
    proposedCompany: fallbackMfgs.join(' / '),
    confidence: 'low',
    reasoning: `No specific matches found; using industry leaders for ${currentCompany}`
  };
}

// Main processing
console.log('Starting manufacturer assignment process...\n');

const assignments = [];
const stats = {
  total: 0,
  high: 0,
  medium: 0,
  low: 0
};

// Process each category
for (const [companyType, files] of Object.entries(genericProducts)) {
  if (companyType === 'totalCount') continue;

  console.log(`Processing ${companyType}: ${files.length} products`);

  for (const file of files) {
    const assignment = assignManufacturers(file, companyTypeMap[companyType]);
    assignments.push(assignment);

    stats.total++;
    if (assignment.confidence === 'high') stats.high++;
    else if (assignment.confidence === 'medium') stats.medium++;
    else if (assignment.confidence === 'low') stats.low++;
  }
}

// Save results
const output = {
  metadata: {
    generatedAt: new Date().toISOString(),
    strategy: 'Three-tier assignment: keyword patterns > category matching > industry leaders'
  },
  statistics: {
    total: stats.total,
    highConfidence: stats.high,
    mediumConfidence: stats.medium,
    lowConfidence: stats.low,
    confidenceBreakdown: {
      high: `${((stats.high / stats.total) * 100).toFixed(1)}%`,
      medium: `${((stats.medium / stats.total) * 100).toFixed(1)}%`,
      low: `${((stats.low / stats.total) * 100).toFixed(1)}%`
    }
  },
  assignments
};

fs.writeFileSync('manufacturer-assignments.json', JSON.stringify(output, null, 2));

console.log('\n=== Assignment Statistics ===');
console.log(`Total products processed: ${stats.total}`);
console.log(`High confidence: ${stats.high} (${output.statistics.confidenceBreakdown.high})`);
console.log(`Medium confidence: ${stats.medium} (${output.statistics.confidenceBreakdown.medium})`);
console.log(`Low confidence: ${stats.low} (${output.statistics.confidenceBreakdown.low})`);
console.log('\nResults saved to manufacturer-assignments.json');

// Show some examples
console.log('\n=== Sample High Confidence Assignments ===');
assignments
  .filter(a => a.confidence === 'high')
  .slice(0, 3)
  .forEach(a => {
    console.log(`\n${a.file}:`);
    console.log(`  Current: ${a.currentCompany}`);
    console.log(`  Proposed: ${a.proposedCompany}`);
    console.log(`  Reason: ${a.reasoning}`);
  });

console.log('\n=== Sample Low Confidence Assignments (need review) ===');
assignments
  .filter(a => a.confidence === 'low')
  .slice(0, 3)
  .forEach(a => {
    console.log(`\n${a.file}:`);
    console.log(`  Current: ${a.currentCompany}`);
    console.log(`  Proposed: ${a.proposedCompany}`);
    console.log(`  Reason: ${a.reasoning}`);
  });
