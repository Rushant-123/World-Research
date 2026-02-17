// Generate company pages for major market leaders
// This list covers ~80% of products across categories

const companies = [
  // Semiconductors & Electronics
  { id: 'intel', name: 'Intel', industry: 'Semiconductors', products: ['CPU', 'Processors', 'Server Chips'] },
  { id: 'amd', name: 'AMD', industry: 'Semiconductors', products: ['CPU', 'GPU', 'Server Chips'] },
  { id: 'nvidia', name: 'Nvidia', industry: 'Semiconductors', products: ['GPU', 'AI Chips', 'Data Center'] },
  { id: 'qualcomm', name: 'Qualcomm', industry: 'Semiconductors', products: ['Mobile Chips', 'Modems', '5G'] },
  { id: 'broadcom', name: 'Broadcom', industry: 'Semiconductors', products: ['Network Chips', 'WiFi', 'Bluetooth'] },
  { id: 'texas-instruments', name: 'Texas Instruments', industry: 'Semiconductors', products: ['Analog Chips', 'Embedded'] },
  { id: 'micron', name: 'Micron Technology', industry: 'Memory', products: ['DRAM', 'NAND Flash', 'SSD'] },
  { id: 'sk-hynix', name: 'SK Hynix', industry: 'Memory', products: ['DRAM', 'NAND Flash'] },
  { id: 'asml', name: 'ASML', industry: 'Semiconductor Equipment', products: ['Lithography', 'EUV'] },

  // Display & Optics
  { id: 'lg-display', name: 'LG Display', industry: 'Displays', products: ['OLED', 'LCD', 'TV Panels'] },
  { id: 'boe', name: 'BOE Technology', industry: 'Displays', products: ['LCD', 'OLED', 'Flexible'] },
  { id: 'corning', name: 'Corning', industry: 'Glass & Materials', products: ['Gorilla Glass', 'Optical Fiber'] },
  { id: 'sony', name: 'Sony', industry: 'Consumer Electronics', products: ['Camera Sensors', 'Displays', 'Audio'] },

  // Mining & Materials
  { id: 'rio-tinto', name: 'Rio Tinto', industry: 'Mining', products: ['Iron Ore', 'Aluminum', 'Copper'] },
  { id: 'bhp', name: 'BHP', industry: 'Mining', products: ['Iron Ore', 'Copper', 'Nickel'] },
  { id: 'vale', name: 'Vale', industry: 'Mining', products: ['Iron Ore', 'Nickel', 'Copper'] },
  { id: 'glencore', name: 'Glencore', industry: 'Mining & Trading', products: ['Copper', 'Zinc', 'Coal'] },
  { id: 'alcoa', name: 'Alcoa', industry: 'Aluminum', products: ['Aluminum', 'Alumina', 'Bauxite'] },

  // Battery & Energy
  { id: 'catl', name: 'CATL', industry: 'Battery Manufacturing', products: ['EV Batteries', 'Energy Storage'] },
  { id: 'lg-energy', name: 'LG Energy Solution', industry: 'Battery Manufacturing', products: ['EV Batteries', 'ESS'] },
  { id: 'panasonic', name: 'Panasonic', industry: 'Electronics & Energy', products: ['Batteries', 'Electronics'] },
  { id: 'byd', name: 'BYD', industry: 'EV & Battery', products: ['EV Batteries', 'Electric Vehicles'] },

  // Chemicals & Materials
  { id: 'basf', name: 'BASF', industry: 'Chemicals', products: ['Industrial Chemicals', 'Polymers'] },
  { id: 'dow', name: 'Dow Chemical', industry: 'Chemicals', products: ['Plastics', 'Polymers', 'Materials'] },
  { id: 'dupont', name: 'DuPont', industry: 'Materials Science', products: ['Polymers', 'Electronics Materials'] },

  // Equipment & Manufacturing
  { id: 'applied-materials', name: 'Applied Materials', industry: 'Semiconductor Equipment', products: ['Deposition', 'Etching', 'Metrology'] },
  { id: 'lam-research', name: 'Lam Research', industry: 'Semiconductor Equipment', products: ['Etching', 'Deposition'] },
  { id: 'kla', name: 'KLA Corporation', industry: 'Semiconductor Equipment', products: ['Inspection', 'Metrology'] },

  // Consumer Brands
  { id: 'apple', name: 'Apple', industry: 'Consumer Electronics', products: ['iPhone', 'Mac', 'iPad'] },
  { id: 'dell', name: 'Dell Technologies', industry: 'Computing', products: ['PCs', 'Servers', 'Storage'] },
  { id: 'hp', name: 'HP Inc', industry: 'Computing', products: ['PCs', 'Printers', 'Accessories'] },
  { id: 'lenovo', name: 'Lenovo', industry: 'Computing', products: ['PCs', 'Servers', 'Mobile'] }
];

console.log(`Need to generate ${companies.length} company pages`);
console.log('\nCompanies by industry:');

const byIndustry = {};
companies.forEach(c => {
  byIndustry[c.industry] = (byIndustry[c.industry] || 0) + 1;
});

Object.keys(byIndustry).forEach(ind => {
  console.log(`  ${ind}: ${byIndustry[ind]}`);
});
