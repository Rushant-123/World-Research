// Comprehensive manufacturer mappings - covering ~500+ more products
const fs = require('fs');
const path = require('path');

const pagesDir = path.join(__dirname, 'content/pages');

// Massively expanded manufacturer database
const manufacturerMappings = {
  // Previous mappings...
  'camera': ['Sony', 'Samsung', 'OmniVision'],
  '3d camera': ['Intel', 'Microsoft', 'Apple'],
  'lens': ['Largan Precision', 'Sunny Optical', 'Genius Electronic Optical'],

  // Polymers & Plastics (expanded)
  'abs': ['SABIC', 'LG Chem', 'INEOS Styrolution'],
  'acrylic': ['Arkema', 'Mitsubishi Chemical', 'Sumitomo Chemical'],
  'polycarbonate': ['Covestro', 'SABIC', 'Mitsubishi Engineering-Plastics'],
  'polyethylene': ['Dow', 'ExxonMobil', 'SABIC'],
  'polypropylene': ['LyondellBasell', 'SABIC', 'ExxonMobil'],
  'pvc': ['Shin-Etsu', 'Formosa Plastics', 'Westlake Chemical'],
  'polyimide': ['DuPont', 'Ube Industries', 'Kaneka'],
  'epoxy': ['Huntsman', 'Hexion', 'Olin'],
  'polyester': ['Indorama', 'Reliance Industries', 'Alpek'],
  'nylon': ['BASF', 'DuPont', 'Ube Industries'],
  'silicone': ['Dow Corning', 'Momentive', 'Shin-Etsu'],
  'foam': ['BASF', 'Covestro', 'Huntsman'],
  'rubber': ['Bridgestone', 'Michelin', 'Goodyear'],

  // Adhesives, Coatings, Tapes
  'adhesive': ['Henkel', '3M', 'H.B. Fuller'],
  'tape': ['3M', 'Nitto Denko', 'Avery Dennison'],
  'coating': ['PPG Industries', 'Sherwin-Williams', 'AkzoNobel'],
  'paint': ['PPG Industries', 'Sherwin-Williams', 'AkzoNobel'],
  'ink': ['Sun Chemical', 'DIC Corporation', 'Flint Group'],

  // Metals & Alloys
  'aluminum': ['Alcoa', 'Rio Tinto', 'Norsk Hydro'],
  'copper': ['Freeport-McMoRan', 'BHP', 'Glencore'],
  'steel': ['ArcelorMittal', 'Nippon Steel', 'POSCO'],
  'stainless': ['Outokumpu', 'Acerinox', 'Jindal Stainless'],
  'titanium': ['VSMPO-AVISMA', 'Timet', 'ATI'],
  'nickel': ['Vale', 'Nornickel', 'Glencore'],
  'zinc': ['Glencore', 'Nyrstar', 'Teck Resources'],
  'magnesium': ['US Magnesium', 'Dead Sea Magnesium', 'Ma Steel'],
  'brass': ['Mueller Industries', 'KME', 'Wieland'],
  'bronze': ['National Bronze', 'Farmers Copper', 'Ampco Metal'],

  // Electronics Components (expanded)
  'resistor': ['Yageo', 'Vishay', 'KOA Speer'],
  'capacitor': ['Murata', 'Samsung Electro-Mechanics', 'TDK'],
  'inductor': ['Murata', 'TDK', 'Taiyo Yuden'],
  'diode': ['Vishay', 'ON Semiconductor', 'Rohm'],
  'transistor': ['Infineon', 'ON Semiconductor', 'Toshiba'],
  'led': ['Nichia', 'Lumileds', 'Osram'],
  'crystal': ['Seiko Epson', 'TXC Corporation', 'Abracon'],
  'relay': ['Omron', 'TE Connectivity', 'Panasonic'],
  'switch': ['Omron', 'C&K Components', 'E-Switch'],
  'potentiometer': ['Bourns', 'Vishay', 'TT Electronics'],

  // Connectors & Interconnects (expanded)
  'connector': ['TE Connectivity', 'Amphenol', 'Molex'],
  'cable': ['Prysmian', 'Nexans', 'Sumitomo Electric'],
  'wire': ['Prysmian', 'Southwire', 'General Cable'],
  'socket': ['Yamaichi Electronics', 'Enplas', 'Johnstech'],
  'pin': ['Mill-Max', 'Harwin', 'Samtec'],
  'header': ['Samtec', 'Harwin', 'Sullins'],

  // PCB & Substrates
  'pcb': ['TTM Technologies', 'Unimicron', 'Ibiden'],
  'substrate': ['Ibiden', 'Shinko', 'AT&S'],
  'flex': ['Flexible Circuit', 'Career Technology', 'Flexcom'],
  'rigid-flex': ['TTM Technologies', 'Nippon Mektron', 'Sumitomo Electric'],

  // Mechanical Components (expanded)
  'screw': ['Fastenal', 'Würth', 'ITW'],
  'bolt': ['Fastenal', 'Würth', 'Bulten'],
  'nut': ['Fastenal', 'Würth', 'Bulten'],
  'washer': ['Fastenal', 'Würth', 'Bulten'],
  'bearing': ['SKF', 'Timken', 'NSK'],
  'gear': ['SEW-Eurodrive', 'Bonfiglioli', 'Nord Drivesystems'],
  'spring': ['Lesjöfors', 'Lee Spring', 'Associated Spring'],
  'fastener': ['Fastenal', 'Würth', 'ITW'],
  'hinge': ['Southco', 'Sugatsune', 'Hettich'],
  'latch': ['Southco', 'Emka', 'Dirak'],
  'shaft': ['Rexnord', 'Ruland', 'Misumi'],

  // Sensors (expanded)
  'sensor': ['TE Connectivity', 'Honeywell', 'Bosch'],
  'accelerometer': ['STMicroelectronics', 'Bosch', 'InvenSense'],
  'gyroscope': ['STMicroelectronics', 'InvenSense', 'Murata'],
  'pressure': ['Honeywell', 'TE Connectivity', 'Sensata'],
  'temperature': ['Texas Instruments', 'Analog Devices', 'NXP'],
  'proximity': ['Omron', 'Sick', 'Pepperl+Fuchs'],
  'force': ['Honeywell', 'Futek', 'Interface'],
  'load cell': ['Honeywell', 'Vishay', 'HBM'],

  // Optics & Glass
  'glass': ['Corning', 'Schott', 'AGC'],
  'optical': ['Edmund Optics', 'Thorlabs', 'Newport'],
  'prism': ['Edmund Optics', 'Thorlabs', 'Newport'],
  'mirror': ['Edmund Optics', 'Thorlabs', 'Newport'],
  'fiber optic': ['Corning', 'Prysmian', 'OFS Fitel'],

  // Filters (expanded)
  'filter': ['Pall Corporation', 'Donaldson', 'Parker Hannifin'],
  'air filter': ['Donaldson', 'Parker Hannifin', 'Camfil'],
  'water filter': ['Pall Corporation', 'Pentair', 'GE Water'],

  // Power Components
  'transformer': ['ABB', 'Siemens', 'Schneider Electric'],
  'charger': ['Delta Electronics', 'Mean Well', 'TDK-Lambda'],
  'power supply': ['Delta Electronics', 'Mean Well', 'Artesyn'],
  'converter': ['Delta Electronics', 'Vicor', 'Mean Well'],
  'inverter': ['SMA Solar', 'Fronius', 'SolarEdge'],
  'rectifier': ['Vishay', 'Infineon', 'STMicroelectronics'],

  // Motors & Actuators
  'motor': ['ABB', 'Siemens', 'WEG'],
  'servo': ['Yaskawa', 'Mitsubishi Electric', 'Siemens'],
  'stepper': ['Oriental Motor', 'Nema', 'Trinamic'],
  'actuator': ['THK', 'IAI', 'Festo'],

  // Pumps & Valves
  'pump': ['Grundfos', 'Xylem', 'ITT'],
  'valve': ['Emerson', 'Flowserve', 'Crane'],
  'compressor': ['Atlas Copco', 'Ingersoll Rand', 'Gardner Denver'],

  // Industrial Equipment (expanded)
  'cnc': ['Haas', 'DMG Mori', 'Mazak'],
  'lathe': ['Haas', 'DMG Mori', 'Doosan'],
  'mill': ['Haas', 'DMG Mori', 'Mazak'],
  'drill': ['Makita', 'DeWalt', 'Bosch'],
  'grinder': ['Makita', 'DeWalt', 'Bosch'],
  'saw': ['Makita', 'DeWalt', 'Milwaukee'],
  'press': ['Schuler', 'Aida', 'Komatsu'],
  'furnace': ['Ipsen', 'Surface Combustion', 'Lindberg/MPH'],
  'oven': ['Despatch', 'Wisconsin Oven', 'Grieve'],
  'extruder': ['Davis-Standard', 'Battenfeld-Cincinnati', 'KraussMaffei'],
  'injection mold': ['Engel', 'Arburg', 'Haitian'],

  // Assembly & Production Equipment
  'robot': ['ABB', 'Fanuc', 'Kuka'],
  'conveyor': ['Daifuku', 'Dematic', 'Intelligrated'],
  'picker': ['ABB', 'Fanuc', 'Yaskawa'],
  'feeder': ['Afag', 'RNA', 'Vibratory Solutions'],

  // Testing & Measurement (expanded)
  'tester': ['Teradyne', 'Advantest', 'Keysight'],
  'meter': ['Fluke', 'Keysight', 'Tektronix'],
  'oscilloscope': ['Keysight', 'Tektronix', 'Rohde & Schwarz'],
  'multimeter': ['Fluke', 'Keysight', 'Tektronix'],
  'analyzer': ['Keysight', 'Rohde & Schwarz', 'Anritsu'],
  'microscope': ['Olympus', 'Zeiss', 'Nikon'],
  'spectrometer': ['Thermo Fisher', 'Agilent', 'Bruker'],

  // Packaging & Materials Handling
  'box': ['International Paper', 'WestRock', 'Smurfit Kappa'],
  'carton': ['International Paper', 'WestRock', 'Smurfit Kappa'],
  'packaging': ['Amcor', 'Sealed Air', 'Berry Global'],
  'label': ['Avery Dennison', 'CCL Industries', 'Multi-Color Corporation'],
  'pallet': ['CHEP', 'PECO Pallet', 'iGPS'],

  // Chemicals (expanded)
  'acid': ['Dow', 'BASF', 'Solvay'],
  'base': ['Olin', 'Westlake Chemical', 'Formosa Plastics'],
  'solvent': ['ExxonMobil', 'Shell', 'Dow'],
  'catalyst': ['BASF', 'Johnson Matthey', 'Clariant'],
  'reagent': ['Merck', 'Sigma-Aldrich', 'Thermo Fisher'],

  // Gases
  'gas': ['Air Products', 'Linde', 'Air Liquide'],
  'nitrogen': ['Air Products', 'Linde', 'Air Liquide'],
  'oxygen': ['Air Products', 'Linde', 'Air Liquide'],
  'argon': ['Air Products', 'Linde', 'Air Liquide'],
  'hydrogen': ['Air Products', 'Linde', 'Praxair'],
  'helium': ['Air Products', 'Linde', 'Gazprom'],

  // Software & IT
  'software': ['Microsoft', 'Oracle', 'SAP'],
  'operating system': ['Microsoft', 'Red Hat', 'Canonical'],
  'compiler': ['GNU', 'LLVM', 'Intel'],
  'debugger': ['Microsoft', 'JetBrains', 'GNU'],
  'ide': ['Microsoft', 'JetBrains', 'Eclipse'],
  'database': ['Oracle', 'Microsoft', 'MySQL'],
  'server': ['Dell', 'HPE', 'Lenovo'],

  // Networking
  'router': ['Cisco', 'Juniper', 'Arista'],
  'switch': ['Cisco', 'Arista', 'Juniper'],
  'firewall': ['Palo Alto', 'Fortinet', 'Cisco'],
  'modem': ['Arris', 'Netgear', 'Motorola'],

  // Labor (specific roles)
  'engineer': ['Various Engineering Firms', 'Consulting Companies', 'OEM Staff'],
  'technician': ['Various Service Companies', 'OEM Support', 'Third-party Services'],
  'operator': ['Manufacturing Staff', 'Contract Labor', 'OEM Employees'],
  'assembly': ['Foxconn', 'Jabil', 'Flex'],
  'worker': ['Various Employers', 'Contract Labor', 'Staffing Agencies']
};

// Find manufacturers
function findManufacturers(title) {
  const titleLower = title.toLowerCase();

  // Check for matches (more flexible matching)
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
      company.toLowerCase().includes('supplier') ||
      company.toLowerCase().includes('company') ||
      company.toLowerCase().includes('companies') ||
      company.toLowerCase().includes('vendor') ||
      company.toLowerCase().includes('operations')) {

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

console.log(`\n=== EXPANDED MANUFACTURER MAPPINGS ===`);
console.log(`Total products: ${productFiles.length}`);
console.log(`Need real manufacturers: ${needsUpdate}`);
console.log(`Can auto-fix NOW: ${canFix}`);
console.log(`Still need manual: ${cantFix}`);

console.log(`\n\nShowing sample of fixable products:\n`);
productsToFix.slice(0, 100).forEach((p, idx) => {
  if (idx % 10 === 0) {
    console.log(`\n--- Batch ${Math.floor(idx/10) + 1} ---`);
  }
  console.log(`${idx + 1}. ${p.title}: ${p.newCompany}`);
});

console.log(`\n\nReady to update ${canFix} products.`);
console.log(`Run with --apply to make changes.`);

if (process.argv.includes('--apply')) {
  console.log(`\nApplying changes to ${canFix} products...\n`);

  let updated = 0;
  productsToFix.forEach(p => {
    const filePath = path.join(pagesDir, p.file);
    let content = fs.readFileSync(filePath, 'utf-8');

    content = content.replace(
      /company:\s*"[^"]+"/,
      `company: "${p.newCompany}"`
    );

    fs.writeFileSync(filePath, content);
    updated++;

    if (updated % 100 === 0) {
      console.log(`  Updated ${updated} products...`);
    }
  });

  console.log(`\nDone! Updated ${updated} products.`);
}
