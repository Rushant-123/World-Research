const fs = require('fs');

function writePage(slug, data) {
  const filename = `/Users/rushant/World-Research/content/pages/${slug}.md`;
  if (fs.existsSync(filename)) return false;

  let inputsYaml = '';
  if (data.inputs && data.inputs.length > 0) {
    inputsYaml = 'inputs:\n' + data.inputs.map(i =>
      `  - name: "${i.name}"\n    cost: ${i.cost}\n    link: "${i.link}"`
    ).join('\n');
  } else {
    inputsYaml = 'inputs: []';
  }

  const value_created = data.inputs ?
    (data.selling_price - data.inputs.reduce((sum, i) => sum + i.cost, 0)).toFixed(3) :
    data.selling_price.toFixed(3);

  const steps = data.steps.map((step, idx) => `${idx + 1}. ${step}`).join('\n');

  const content = `---
title: "${data.title}"
company: "${data.company}"
country: "${data.country}"
selling_price: ${data.selling_price}
${inputsYaml}
value_created: ${value_created}
distance: ${data.distance}
---

${steps}
`;

  fs.writeFileSync(filename, content);
  return true;
}

// Next 50 pages
const pages = {
  'belt-conveyor': {
    title: 'Belt Conveyor',
    company: 'Continental Conveyor',
    country: 'Germany',
    selling_price: 45.00,
    distance: 6,
    inputs: [
      { name: 'Rubber Belt', cost: 18.00, link: 'raw-materials' },
      { name: 'Steel Frame', cost: 12.00, link: 'steel-raw' }
    ],
    steps: [
      'Belt fabric woven from polyester or nylon',
      'Steel cords laid parallel for high strength',
      'Rubber compound mixed: natural and synthetic rubber',
      'Carbon black added for UV resistance',
      'Calendering embeds cords in rubber',
      'Vulcanization at 150°C under pressure',
      'Belt width cut to specification',
      'Idler rollers manufactured from steel tube',
      'Roller bearings pressed into ends',
      'Support frame welded from channel steel',
      'Drive pulley machined and lagged',
      'Tail pulley with automatic tensioning',
      'Motor and gearbox matched to load',
      'Belt trained for proper tracking',
      'Skirtboard installed at loading zone',
      'Belt scrapers prevent carryback',
      'Emergency pull cords along length',
      'Speed: 1-5 m/s depending on material',
      'Capacity: 100-5,000 tons/hour',
      'Installation and commissioning at site',
'Testing under load conditions',
      'Operator training on maintenance',
      'Spare parts kit provided',
      'Belt splice can be vulcanized or mechanical',
      'Service life: 5-10 years typical',
      'Regular lubrication of bearings',
      'Alignment checks monthly',
      'Belt tension adjustment as needed',
      'Wear monitoring of pulleys and idlers',
      'Replacement scheduling minimizes downtime'
    ]
  },

  'flotation-cells': {
    title: 'Flotation Cells',
    company: 'Outotec / Metso',
    country: 'Finland',
    selling_price: 180.00,
    distance: 6,
    inputs: [
      { name: 'Steel Tank', cost: 75.00, link: 'steel-raw' },
      { name: 'Impeller and Motor', cost: 55.00, link: 'mining-operations' }
    ],
    steps: [
      'Tank fabricated from mild steel plate (6-12mm)',
      'Tank volume: 5-300 cubic meters per cell',
      'Cylindrical or rectangular geometry',
      'Internal compartments for staged flotation',
      'Rubber or polyurethane lining for wear resistance',
      'Impeller design: radial or axial flow',
      'Stator surrounds impeller for shearing',
      'Variable speed drive for impeller (50-400 RPM)',
      'Air injection through hollow impeller shaft',
      'Air dispersion creates 0.5-2mm bubbles',
      'Froth depth controller maintains level',
      'Launder collects overflowing froth',
      'Tailings discharge from bottom',
      'Level sensors control feed rate',
      'pH probes monitor chemistry',
      'Reagent addition points',
      'Collectors: xanthates, dithiophosphates',
      'Frothers: MIBC, pine oil',
      'Modifiers: lime for pH, cyanide for depression',
      'Residence time: 5-20 minutes per cell',
      'Cells arranged in banks of 4-12',
      'Rougher, scavenger, cleaner circuits',
      'Concentrate recycle loops',
      'Automated control system',
      'Optical sensors monitor froth characteristics',
      'Dosing pumps for reagents',
      'Mixing tanks for reagent preparation',
      'Piping sized for pulp density 20-40% solids',
      'Pumps handle abrasive slurry',
      'Tank cleaning access ports',
      'Maintenance: impeller wear parts every 6-12 months',
      'Rubber lining replacement every 2-3 years',
      'Metallurgical testing guides optimization',
      'Recovery rates: 85-95% for sulfide ores',
      'Concentrate grade: 20-30% metal content',
      'Operating cost: reagents + power',
      'Power consumption: 1-3 kWh per ton',
      'Water recycling reduces fresh water use',
      'Tailings thickening recovers process water'
    ]
  },

  'crusher-equipment': {
    title: 'Crushing Equipment',
    company: 'Metso Outotec / Sandvik',
    country: 'Sweden',
    selling_price: 220.00,
    distance: 6,
    inputs: [
      { name: 'Steel Structure', cost: 85.00, link: 'steel-raw' },
      { name: 'Manganese Wear Parts', cost: 65.00, link: 'steel-raw' }
    ],
    steps: [
      'Crusher type selection: primary, secondary, tertiary',
      'Gyratory crusher for primary crushing',
      'Main frame cast as single piece (50-150 tons)',
      'Concave (bowl liner) made of manganese steel',
      'Mantle mounted on main shaft',
      'Eccentric assembly creates crushing action',
      'Hydraulic motor rotates eccentric',
      'Crushing chamber shaped for size reduction',
      'Feed opening: 1,000-1,500mm',
      'Closed side setting (CSS): 150-300mm',
      'Hydraulic adjustment of CSS',
      'Hydraulic clearing cylinder ejects uncrushables',
      'Dust suppression system',
      'Lubrication: high-pressure grease or oil',
      'Lubrication system monitors bearing temperature',
      'Cone crusher for secondary crushing',
      'Bowl and mantle design for finer product',
      'Feed size: 150-300mm',
      'Product size: 20-80mm',
      'Crushing force: 200-800 tons',
      'Countersh aft provides power transmission',
      'Overload protection through hydraulics',
      'Automatic tramp iron relief',
      'Variable eccentric throw for size control',
      'Short head for fine crushing',
      'Standard head for coarse crushing',
      'Hydraulic lock nut for mantle retention',
      'Wear monitoring system',
      'Liner change interval: 6-18 months',
      'Liner change using overhead crane',
      'Stone crusher: horizontal shaft impactor',
      'Rotor with blow bars',
      'Impact aprons for secondary impact',
      'Product cubicity superior to compression crushers',
      'Electric motor: 200-800 kW',
      'Belt drive or direct drive',
      'Vibrating feeder controls feed rate',
      'Integrated screening for closed circuit',
      'Automation for optimal performance',
      'Remote monitoring and diagnostics'
    ]
  },

  'vibrating-screen': {
    title: 'Vibrating Screen',
    company: 'Terex / Metso',
    country: 'United States',
    selling_price: 95.00,
    distance: 6,
    inputs: [
      { name: 'Steel Frame', cost: 35.00, link: 'steel-raw' },
      { name: 'Screen Media', cost: 25.00, link: 'steel-raw' },
      { name: 'Vibrating Motors', cost: 20.00, link: 'mining-operations' }
    ],
    steps: [
      'Screen box fabricated from structural steel',
      'Box dimensions: 1.2-3.6m wide, 3-12m long',
      'Multiple decks (1-4) for size classification',
      'Screen media options: wire mesh, polyurethane, rubber',
      'Wire mesh: woven or welded',
      'Aperture sizes: 1mm to 150mm',
      'Media tensioning system',
      'Quick-release clamps for media changes',
      'Vibrating motors (unbalanced weight type)',
      'Two motors for linear or circular motion',
      'Adjustable eccentric weights',
      'Vibration frequency: 600-1,200 RPM',
      'Amplitude: 3-10mm',
      'Incline angle: 15-25 degrees',
      'Feed distributed across width',
      'Stratification of particles by size',
      'Undersize passes through, oversize retained',
      'Multiple fractions collected separately',
      'Dust enclosure with exhaust',
      'Water sprays for wet screening',
      'Support structure: coil springs or rubber mounts',
      'Isolation from foundation',
      'Capacity: 50-1,000 tons per hour',
      'Screening efficiency: 85-98%',
      'Electric power: 5-50 kW',
      'Screen media life: 3-12 months',
      'Blinding prevention: ball deck or ultrasonic',
      'Cleaning system removes pegged material',
      'Portable or stationary installation',
      'Modular design for easy transport',
      'Commissioning includes motion analysis',
      'Stroke and frequency optimization',
      'Noise abatement measures',
      'Regular inspection of media tension',
      'Bearing replacement every 5,000-10,000 hours',
      'Automation integration for process control'
    ]
  },

  'jaw-crusher': {
    title: 'Jaw Crusher',
    company: 'Terex / Sandvik',
    country: 'United States',
    selling_price: 115.00,
    distance: 6,
    inputs: [
      { name: 'Cast Steel Frame', cost: 45.00, link: 'iron-casting' },
      { name: 'Manganese Jaw Plates', cost: 35.00, link: 'steel-raw' }
    ],
    steps: [
      'Main frame cast from high-carbon steel',
      'Frame weight: 5-80 tons depending on size',
      'Fixed jaw bolted to frame',
      'Moving jaw (pitman) on eccentric shaft',
      'Eccentric shaft forged and machined',
      'Heavy-duty bearings support shaft',
      'Flywheel stores kinetic energy',
      'Flywheel weight: 1-15 tons',
      'Belt drive from electric motor',
      'Motor power: 15-250 kW',
      'V-belts with guards',
      'Toggle plate mechanism amplifies force',
      'Toggle plate designed as safety fuse',
      'Breaks if uncrushable enters',
      'Jaw plates from Hadfield manganese steel',
      'Corrugated or smooth jaw profile',
      'Jaw plates reversible for extended life',
      'Feed opening: 400-1,600mm',
      'Closed side setting (CSS): 50-200mm',
      'Adjustment via shims or hydraulic',
      'Reduction ratio: 4:1 to 6:1',
      'Stroke length: 20-50mm',
      'Crushing force: 50-500 tons',
      'Throughput: 10-800 tons per hour',
      'Lubrication system for bearings',
      'Oil or grease lubrication',
      'Dust seal protection',
      'Foundation bolts anchor crusher',
      'Vibration isolation pads',
      'Hopper with grizzly bars',
      'Grizzly removes fines before crushing',
      'Discharge chute directs product',
      'Jaw plate life: 6-18 months',
      'Replacement using overhead lift',
      'Toggle plate inspection monthly',
      'Bearing maintenance every 2,000 hours',
      'Mobile versions on tracked chassis',
      'Popular for aggregate and mining'
    ]
  },

  'screening-equipment': {
    title: 'Screening Equipment',
    company: 'Haver & Boecker',
    country: 'Germany',
    selling_price: 75.00,
    distance: 6,
    inputs: [
      { name: 'Steel Structure', cost: 28.00, link: 'steel-raw' },
      { name: 'Screen Panels', cost: 22.00, link: 'raw-materials' }
    ],
    steps: [
      'Screen type selection: vibrating, trommel, flip-flop',
      'Vibrating screen most common in mining',
      'Screen box fabricated from plate steel',
      'Box reinforced with cross members',
      'Exciter mechanism creates vibration',
      'Eccentric shaft or unbalanced motor',
      'Frequency range: 10-60 Hz',
      'Amplitude 2-15mm',
      'Screen decks: single, double, or triple',
      'Upper deck for coarse separation',
      'Lower deck for fine separation',
      'Screen media: wire mesh, punched plate, polyurethane',
      'Modular panels for easy replacement',
      'Self-cleaning media reduces blinding',
      'Feed end elevated for material flow',
      'Inclination: 0-25 degrees',
      'Banana screen for increased capacity',
      'Slope varies along length',
      'Horizontal screen for dewatering',
      'Dewatering efficiency >90%',
      'Water drainage through screen',
      'Solids conveyed to discharge',
      'Trommel screen: rotating drum',
      'Drum with perforated panels',
      'Spiral lifters inside drum',
      'Material tumbles for screening',
      'Suitable for sticky materials',
      'Dust covers enclose screen',
      'Water sprays for wet screening',
      'Capacity: 20-500 tons per hour',
      'Efficiency depends on material properties',
      'Electrical panel with controls',
      'VFD for frequency adjustment',
      'Installation on structural supports',
      'Commissioning and performance testing',
      'Maintenance: lubrication, inspection',
      'Media replacement every 6-24 months',
      'Modular design simplifies repairs'
    ]
  },

  'filter-press': {
    title: 'Filter Press',
    company: 'Andritz / Metso',
    country: 'Austria',
    selling_price: 155.00,
    distance: 6,
    inputs: [
      { name: 'Steel Frame', cost: 50.00, link: 'steel-raw' },
      { name: 'Filter Plates', cost: 55.00, link: 'raw-materials' },
      { name: 'Hydraulic System', cost: 30.00, link: 'mining-operations' }
    ],
    steps: [
      'Frame structure supports filter plates',
      'Fixed head at feed end',
      'Moving head actuated by hydraulic cylinders',
      'Filter plates: polypropylene or cast iron',
      'Plate thickness: 50-100mm',
      'Recessed chamber design',
      'Filter cloth: polypropylene, polyester, or nylon',
      'Cloth selection based on particle size',
      'Plates assembled in sequence',
      'Feed ports align when plates close',
      'Hydraulic closing pressure: 10-20 bar',
      'Slurry feed pump: positive displacement type',
      'Feed pressure: 5-15 bar',
      'Slurry fills chambers between plates',
      'Filtrate passes through cloth',
      'Solids accumulate as cake',
      'Filtration cycle: 15-120 minutes',
      'Cake thickness: 20-40mm',
      'Plate opening: hydraulic cylinders retract',
      'Cake discharge by gravity or vibration',
      'Cloth washing to prevent blinding',
      'Air blow-down removes residual moisture',
      'Cake moisture: 15-25%',
      'Automatic cycle control',
      'PLC programming for sequence',
      'Pressure and flow monitoring',
      'Filtrate quality sensors',
      'Cake thickness estimation from pressure',
      'Number of plates: 20-100',
      'Filter area: 50-800 square meters',
      'Capacity: 1-50 dry tons per hour',
      'Cloth life: 6-24 months',
      'Cleaning in place (CIP) system',
      'Cloth replacement when worn',
      'Hydraulic system maintenance',
      'Plate inspection for cracks',
      'Throughput optimization',
      'Suitable for concentrate and tailings dewatering'
    ]
  },

  'ball-mill': {
    title: 'Ball Mill',
    company: 'Metso Outotec / FLSmidth',
    country: 'Denmark',
    selling_price: 890.00,
    distance: 6,
    inputs: [
      { name: 'Steel Shell', cost: 320.00, link: 'steel-raw' },
      { name: 'Grinding Balls', cost: 180.00, link: 'steel-raw' },
      { name: 'Drive System', cost: 210.00, link: 'mining-operations' }
    ],
    steps: [
      'Mill shell fabricated from steel plate (40-80mm)',
      'Shell diameter: 3-7 meters for mining',
      'Shell length: 3-15 meters',
      'Shell weight: 50-500 tons',
      'Feed end trunnion assembly',
      'Discharge end trunnion assembly',
      'Trunnion bearings: sliding shoe or hydrostatic',
      'Liner plates bolted inside shell',
      'Liner material: high-chromium steel or rubber',
      'Lifter bars create cascading action',
      'Wave or ribbed liner pattern',
      'Liner thickness: 50-150mm',
      'Liner life: 6-18 months',
      'Grinding balls: forged or cast steel',
      'Ball sizes: 20-120mm diameter',
      'Ball charge: 30-45% of mill volume',
      'Top-up balls added monthly',
      'Girth gear mounted on shell',
      'Pinion gear driven by motor',
      'Drive motor: 500-5,000 kW',
      'Variable speed drive for optimization',
      'Critical speed: 70-80% of critical',
      'Critical speed formula: 42.3/√D (RPM)',
      'Gearbox reduction: 15:1 to 25:1',
      'Lubrication system for bearings',
      'Oil circulation with cooling',
      'Temperature monitoring',
      'Feed system: scoop feeder or chute',
      'Discharge: grate or overflow type',
      'Grate with slots retains balls',
      'Pulp lifters assist discharge',
      'Cyclone circuit for classification',
      'Cyclone overflow is final product',
      'Underflow recycles to mill',
      'Target grind size: 75-150 microns',
      'P80 (80% passing) specification',
      'Power draw monitored continuously',
      'Acoustic monitoring for charge level',
      'Mill liner inspection annually',
      'Liner replacement during shutdown',
      'Throughput: 50-1,000 tons per hour',
      'Grinding efficiency: 10-20 kWh per ton',
      'Water addition for 65-75% solids',
      'Reagents for flotation added in mill',
      'Collectors, frothers pre-conditioning',
      'SAG mill often precedes ball mill',
      'Two-stage grinding common in modern plants'
    ]
  }
};

let count = 0;
for (const [slug, data] of Object.entries(pages)) {
  if (writePage(slug, data)) {
    count++;
    if (count % 5 === 0) console.log(`  ${count} pages...`);
  }
}

console.log(`\n✓ Batch 4 complete: ${count} pages generated`);
