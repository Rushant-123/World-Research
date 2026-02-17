// Replace "Various Manufacturers" with actual companies based on product type
const fs = require('fs');
const path = require('path');

const pagesDir = path.join(__dirname, 'content/pages');

// Real manufacturer mappings by product keywords
const manufacturerMappings = {
  // Cameras & Imaging
  'camera': ['Sony', 'Samsung', 'OmniVision'],
  '3d camera': ['Intel', 'Microsoft', 'Apple'],
  'lens': ['Largan Precision', 'Sunny Optical', 'Genius Electronic Optical'],

  // Polymers & Plastics
  'abs resin': ['SABIC', 'LG Chem', 'INEOS Styrolution'],
  'acrylic': ['Arkema', 'Mitsubishi Chemical', 'Sumitomo Chemical'],
  'polycarbonate': ['Covestro', 'SABIC', 'Mitsubishi Engineering-Plastics'],
  'polyethylene': ['Dow', 'ExxonMobil', 'SABIC'],
  'polypropylene': ['LyondellBasell', 'SABIC', 'ExxonMobil'],
  'pvc': ['Shin-Etsu', 'Formosa Plastics', 'Westlake Chemical'],
  'resin': ['Huntsman', 'Hexion', 'Olin'],
  'polymer': ['Dow', 'BASF', 'DuPont'],
  'plastic': ['SABIC', 'LG Chem', 'Formosa Plastics'],

  // Abrasives & Materials
  'abrasive': ['Saint-Gobain', '3M', 'Carborundum'],
  'ceramic': ['Kyocera', 'CoorsTek', 'Morgan Advanced Materials'],
  'graphite': ['SGL Carbon', 'Tokai Carbon', 'GrafTech'],

  // Adhesives & Tapes
  'adhesive': ['Henkel', '3M', 'H.B. Fuller'],
  'tape': ['3M', 'Nitto Denko', 'Avery Dennison'],

  // Electronics Components
  'resistor': ['Yageo', 'Vishay', 'KOA Speer'],
  'capacitor': ['Murata', 'Samsung Electro-Mechanics', 'TDK'],
  'inductor': ['Murata', 'TDK', 'Taiyo Yuden'],
  'diode': ['Vishay', 'ON Semiconductor', 'Rohm'],
  'transistor': ['Infineon', 'ON Semiconductor', 'Toshiba'],

  // Connectors & Cables
  'connector': ['TE Connectivity', 'Amphenol', 'Molex'],
  'cable': ['Prysmian', 'Nexans', 'Sumitomo Electric'],
  'wire': ['Prysmian', 'Southwire', 'General Cable'],

  // Mechanical Components
  'screw': ['Fastenal', 'Würth', 'ITW'],
  'bolt': ['Fastenal', 'Würth', 'Bulten'],
  'bearing': ['SKF', 'Timken', 'NSK'],
  'gear': ['SEW-Eurodrive', 'Bonfiglioli', 'Nord Drivesystems'],
  'spring': ['Lesjöfors', 'Lee Spring', 'Associated Spring'],
  'fastener': ['Fastenal', 'Würth', 'ITW'],

  // Sensors
  'sensor': ['TE Connectivity', 'Honeywell', 'Bosch'],
  'accelerometer': ['STMicroelectronics', 'Bosch', 'InvenSense'],
  'gyroscope': ['STMicroelectronics', 'InvenSense', 'Murata'],
  'pressure sensor': ['Honeywell', 'TE Connectivity', 'Sensata'],

  // Displays & Optics
  'filter': ['Pall Corporation', 'Donaldson', 'Parker Hannifin'],
  'prism': ['Edmund Optics', 'Thorlabs', 'Newport'],
  'mirror': ['Edmund Optics', 'Thorlabs', 'Newport'],

  // Batteries & Power
  'charger': ['Delta Electronics', 'Mean Well', 'TDK-Lambda'],
  'power supply': ['Delta Electronics', 'Mean Well', 'Artesyn'],
  'converter': ['Delta Electronics', 'Vicor', 'Mean Well'],

  // Software & Digital
  'software': ['Microsoft', 'Oracle', 'SAP'],
  'compiler': ['GNU', 'LLVM', 'Intel'],
  'library': ['Various Open Source', 'Apache Foundation', 'Linux Foundation'],

  // Testing Equipment
  'tester': ['Teradyne', 'Advantest', 'Keysight'],
  'meter': ['Fluke', 'Keysight', 'Tektronix'],
  'oscilloscope': ['Keysight', 'Tektronix', 'Rohde & Schwarz'],

  // Industrial Equipment
  'pump': ['Grundfos', 'Xylem', 'ITT'],
  'valve': ['Emerson', 'Flowserve', 'Crane'],
  'motor': ['ABB', 'Siemens', 'WEG'],
  'compressor': ['Atlas Copco', 'Ingersoll Rand', 'Gardner Denver'],

  // Packaging
  'box': ['International Paper', 'WestRock', 'Smurfit Kappa'],
  'packaging': ['Amcor', 'Sealed Air', 'Berry Global'],
  'label': ['Avery Dennison', 'CCL Industries', 'Multi-Color Corporation'],

  // Chemicals
  'acid': ['Dow', 'BASF', 'Solvay'],
  'solvent': ['ExxonMobil', 'Shell', 'Dow'],
  'catalyst': ['BASF', 'Johnson Matthey', 'Clariant']
};

// Find manufacturers for a product
function findManufacturers(title) {
  const titleLower = title.toLowerCase();

  // Check for exact or partial matches
  for (const [keyword, manufacturers] of Object.entries(manufacturerMappings)) {
    if (titleLower.includes(keyword)) {
      return manufacturers.slice(0, 3);
    }
  }

  return null;
}

// Process products
const productFiles = fs.readdirSync(pagesDir).filter(f => f.endsWith('.md'));

let needsUpdate = 0;
let canFix = 0;
let cantFix = 0;

const productsToFix = [];

productFiles.forEach(file => {
  const filePath = path.join(pagesDir, file);
  const content = fs.readFileSync(filePath, 'utf-8');

  const titleMatch = content.match(/title:\s*"([^"]+)"/);
  const companyMatch = content.match(/company:\s*"([^"]+)"/);

  if (!titleMatch || !companyMatch) return;

  const title = titleMatch[1];
  const company = companyMatch[1];

  // Check if generic
  if (company.includes('Various') ||
      company.includes('Multiple') ||
      company.toLowerCase().includes('manufacturer') ||
      company.toLowerCase().includes('producer') ||
      company.toLowerCase().includes('supplier')) {

    needsUpdate++;

    const manufacturers = findManufacturers(title);

    if (manufacturers) {
      canFix++;
      productsToFix.push({
        file,
        title,
        oldCompany: company,
        newCompany: manufacturers.join(' / ')
      });
    } else {
      cantFix++;
    }
  }
});

console.log(`\nAnalysis of ${productFiles.length} products:`);
console.log(`  Need real manufacturers: ${needsUpdate}`);
console.log(`  Can auto-fix: ${canFix}`);
console.log(`  Need manual research: ${cantFix}`);

console.log(`\n\nShowing first 50 products that CAN be fixed:\n`);
productsToFix.slice(0, 50).forEach((p, idx) => {
  console.log(`${idx + 1}. ${p.title}`);
  console.log(`   OLD: "${p.oldCompany}"`);
  console.log(`   NEW: "${p.newCompany}"\n`);
});

console.log(`\n\nReady to update ${canFix} products with real manufacturers.`);
console.log(`Run with --apply flag to make changes.`);

if (process.argv.includes('--apply')) {
  console.log(`\nApplying changes...`);

  let updated = 0;
  productsToFix.forEach(p => {
    const filePath = path.join(pagesDir, p.file);
    let content = fs.readFileSync(filePath, 'utf-8');

    // Replace company line
    content = content.replace(
      /company:\s*"[^"]+"/,
      `company: "${p.newCompany}"`
    );

    fs.writeFileSync(filePath, content);
    updated++;

    if (updated % 50 === 0) {
      console.log(`  Updated ${updated} products...`);
    }
  });

  console.log(`\nUpdated ${updated} products!`);
  console.log(`Next: Run generate-missing-companies.js to create company pages`);
  console.log(`Then: Run link-products-to-companies.js to add market leader sections`);
}
