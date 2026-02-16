const fs = require('fs');

const missing = JSON.parse(fs.readFileSync('./missing-pages.json', 'utf8'));

// Page templates with realistic data
const pageTemplates = {
  // RAW ORES
  'bauxite-ore': {
    title: 'Bauxite Ore',
    company: 'Rio Tinto / Alcoa',
    country: 'Australia',
    selling_price: 0.45,
    distance: 5,
    inputs: [
      { name: 'Open Pit Mining Operations', cost: 0.08, link: 'open-pit-mining' },
      { name: 'Haul Trucks', cost: 0.05, link: 'dump-truck' },
      { name: 'Diesel Fuel', cost: 0.03, link: 'diesel' }
    ],
    steps: [
      'Geological surveys identify bauxite deposits in weathered tropical soils',
      'Environmental impact assessments conducted for mining permits',
      'Forest clearing and topsoil removal with bulldozers',
      'Overburden (non-ore rock) stripped using dragline excavators',
      'Bauxite layer exposed at 4-6 meters depth',
      'Hydraulic excavators dig bauxite ore from pit floor',
      'Ore loaded into 200-ton capacity haul trucks',
      'Transport to primary crushing station at pit edge',
      'Jaw crushers reduce ore to <150mm fragments',
      'Conveyors move crushed ore to screening station',
      'Vibrating screens separate ore by size (0-30mm, 30-80mm, 80-150mm)',
      'Oversized material returned to crusher for reprocessing',
      'Clay content tested in field laboratory (target <15%)',
      'Moisture content measured (typically 8-12%)',
      'Iron oxide content analyzed (preferably <20%)',
      'Silica content checked (lower is better for alumina extraction)',
      'Acceptable ore stockpiled by grade (high, medium, low)',
      'Blending of different grades to achieve consistent feed',
      'Water spraying for dust suppression during handling',
      'Beneficiation washing removes excess clay and silica',
      'Log washers scrub ore in high-speed rotating drums',
      'Classifier tanks separate heavy bauxite from light impurities',
      'Thickeners recover water for recycling',
      'Dewatered ore contains 35-45% aluminum oxide',
      'Quality control sampling every 2 hours',
      'XRF analysis confirms chemical composition',
      'Ore stockpiled in 50,000-ton capacity yards',
      'Front-end loaders reclaim ore for shipment',
      'Conveyors transport to rail loading facility',
      ' 100-car trains carry ore to port (10,000 tons per train)',
      'Ship loading via conveyor and boom system',
      ' 80,000-ton bulk carriers transport to alumina refineries',
      'Pit rehabilitation begins in depleted areas',
      'Topsoil replaced and native vegetation planted',
      'Water management prevents acid mine drainage',
      'Continuous monitoring of groundwater quality',
      'Safety inspections of pit walls for stability',
      'Equipment maintenance in dedicated workshop',
      'Workforce training on mining safety procedures',
      'Production target: 15-30 million tons per year per mine'
    ]
  },

  'copper-ore': {
    title: 'Copper Ore',
    company: 'Freeport-McMoRan / BHP',
    country: 'Chile',
    selling_price: 0.35,
    distance: 5,
    inputs: [
      { name: 'Open Pit Mining Operations', cost: 0.07, link: 'open-pit-mining' },
      { name: 'Explosives (ANFO)', cost: 0.04, link: 'anfo-explosives' },
      { name: 'Haul Trucks', cost: 0.04, link: 'dump-truck' }
    ],
    steps: [
      'Geophysical surveys locate copper porphyry deposits',
      'Core drilling confirms ore grade (0.3-1.5% copper)',
      'Mine planning determines optimal pit layout',
      'Drill blast pattern designed for 15m bench height',
      'Rotary drill rigs bore 12-inch diameter blastholes',
      'Holes drilled to 16m depth in 30-minute cycles',
      'ANFO explosives loaded into blastholes (200kg per hole)',
      'Electronic detonators programmed for sequential firing',
      'Controlled blast fragments 400,000 tons of rock',
      'Excavators load 20-ton buckets of blasted ore',
      'Material loaded into 320-ton capacity haul trucks',
      'Grade control sensors scan each truck load',
      'High-grade ore (>0.7% Cu) directed to primary crusher',
      'Low-grade ore (0.3-0.7% Cu) stockpiled for later processing',
      'Waste rock (<0.3% Cu) dumped in designated areas',
      'Primary gyratory crusher reduces ore to <200mm',
      'Conveyor system transports crushed ore 5km to concentrator',
      'Semi-autogenous grinding (SAG) mill reduces size to <10mm',
      'Ball mills achieve final grind of 150 microns',
      'Froth flotation separates copper sulfide minerals',
      'Concentrate contains 25-30% copper',
      'Tailings (waste) pumped to storage facility',
      'Thickeners recover water from tailings (90% recycling rate)',
      'XRF analyzers verify concentrate grade every hour',
      'Moisture content reduced to 8-9% in filter presses',
      'Concentrate stockpiled in weatherproof storage',
      'Rail cars transport concentrate to smelter',
      'Pit dewatering pumps remove 5,000 gallons/minute',
      'Haul road maintenance for 24/7 operations',
      'Tire changes on haul trucks every 6 months (cost $40,000 per tire)',
      'Equipment refueling from mobile fuel trucks',
      'Shift changes at 6am, 2pm, 10pm for continuous operation',
      'Environmental monitoring of dust and noise levels',
      'Wildlife corridors maintained around pit perimeter',
      'Workforce of 1,500 per mine site',
      'Production rate: 150,000 tons of ore per day',
      'Mine life typically 30-50 years',
      'Progressive rehabilitation of mined areas'
    ]
  },

  'zinc-ore': {
    title: 'Zinc Ore',
    company: 'Glencore / Vedanta',
    country: 'Australia',
    selling_price: 0.28,
    distance: 5,
    inputs: [
      { name: 'Underground Mining Operations', cost: 0.06, link: 'room-pillar-mining' },
      { name: 'Explosives', cost: 0.03, link: 'explosives' },
      { name: 'Ventilation Systems', cost: 0.02, link: 'mining-operations' }
    ],
    steps: [
      'Electromagnetic surveys detect zinc sulfide deposits',
      'Diamond drilling confirms ore body geometry',
      'Underground decline (access tunnel) excavated at 1:7 gradient',
      'Ventilation shafts drilled to supply fresh air',
      'Rock bolts and mesh installed for ground support',
      'Production drifts developed on 25-meter vertical spacing',
      'Long-hole drilling rigs bore upward fan patterns',
      'Holes drilled 20-30 meters into ore body',
      'Emulsion explosives pumped into blastholes',
      'Electronic detonators ensure precise timing',
      'Blast fires upward into drilled ring',
      'Ore breaks and falls to collection level below',
      'Load-haul-dump (LHD) machines scoop ore',
      '15-ton capacity LHDs transport to ore passes',
      'Ore gravity-feeds down vertical passes to main haulage',
      'Underground trucks haul to shaft bottom',
      'Skip hoist lifts ore 500 meters to surface',
      'Surface crushing reduces ore to <100mm',
      'Flotation circuit separates sphalerite (zinc sulfide)',
      'Collectors (xanthates) make zinc minerals hydrophobic',
      'Frothers create stable bubble structure',
      'Zinc concentrate contains 52-55% zinc',
      'Lead minerals separated in second flotation stage',
      'Final zinc concentrate grade 57-60% zinc',
      'Thickening and filtration reduces moisture to 8%',
      'Assay laboratory tests each batch for zinc, lead, iron, silica',
      'Concentrate bagged or stored in bulk silos',
      'Underground ground control monitoring with extensometers',
      'Ventilation delivers 200 cubic meters/second fresh air',
      'Refuge chambers provide emergency shelter',
      'Water pumping from mine workings (1,000 liters/minute)',
      'Backfilling of mined voids with cemented rock',
      'Ore reserve calculation updated monthly',
      'Production rate: 1.5 million tons ore per year',
      'Workforce operates in 12-hour shifts',
      'Safety training includes emergency evacuation drills'
    ]
  },

  'sulfur': {
    title: 'Elemental Sulfur',
    company: 'Aramco / Shell',
    country: 'Saudi Arabia',
    selling_price: 0.15,
    distance: 5,
    inputs: [
      { name: 'Natural Gas Processing', cost: 0.03, link: 'gas-sweetening' },
      { name: 'Claus Process Equipment', cost: 0.02, link: 'claus-process' }
    ],
    steps: [
      'Sour natural gas contains 1-5% hydrogen sulfide',
      'Gas enters amine absorption unit at 40 bar pressure',
      'Diethanolamine (DEA) solvent absorbs H2S selectively',
      'Sweet gas exits for pipeline distribution',
      'Rich amine heated to 120°C in regenerator',
      'H2S gas released as amine is regenerated',
      'Concentrated H2S stream sent to Claus plant',
      'Thermal reactor burns one-third of H2S at 1,000°C',
      'Reaction: 2H2S + 3O2 → 2SO2 + 2H2O',
      'Hot gases cooled in waste heat boiler',
      'Steam generation at 40 bar for plant use',
      'Catalytic converters operate at 200-350°C',
      'Alumina catalyst promotes Claus reaction',
      'Reaction: 2H2S + SO2 → 3S + 2H2O',
      'Liquid sulfur condenses at 155°C',
      'First stage achieves 60% conversion to sulfur',
      'Gases reheated for second catalytic stage',
      'Second stage increases conversion to 92%',
      'Third stage pushes conversion to 97%',
      'Tail gas treatment recovers remaining sulfur',
      'Overall sulfur recovery efficiency: 99.5%',
      'Molten sulfur collected at 140°C',
      'Sulfur degassing removes dissolved H2S',
      'Purity achieved: 99.9% elemental sulfur',
      'Liquid sulfur stored in heated tanks at 135°C',
      'Solidification into prills using spray tower',
      'Molten sulfur sprayed into cooling air',
      'Prills (2-3mm diameter) form as droplets cool',
      'Solid sulfur conveyed to storage',
      'Alternative: sulfur cast into large blocks',
      'Block sulfur formation in 1-ton molds',
      'Quality testing for acidity (pH 6-8)',
      'Ash content verified (<0.05%)',
      'Sulfur shipped in bulk carriers or rail cars',
      'Production rate: 10,000 tons per day from large gas plant',
      'Continuous operation with automated process control'
    ]
  },

  'iron-ore': {
    title: 'Iron Ore',
    company: 'Vale / Rio Tinto',
    country: 'Brazil',
    selling_price: 0.12,
    distance: 5,
    inputs: [
      { name: 'Open Pit Mining', cost: 0.02, link: 'open-pit-mining' },
      { name: 'Crushing Equipment', cost: 0.015, link: 'crusher' },
      { name: 'Diesel Fuel', cost: 0.01, link: 'diesel' }
    ],
    steps: [
      'Magnetic surveys identify magnetite deposits',
      'Drilling confirms iron content (typically 62-67% Fe)',
      'Overburden removal with 40-cubic-yard excavators',
      'Bench mining in 15-meter lifts',
      'Drill rigs create blast patterns (10m spacing)',
      'ANFO explosives loaded (150kg per hole)',
      'Blast fragmentation of 500,000 tons',
      'Hydraulic shovels load 100-ton haul trucks',
      'Truck fleet operates on 4km haul roads',
      'Primary crushing at pit rim',
      'Gyratory crusher reduces to <180mm',
      'Long-distance conveyor (20km) to processing plant',
      'Secondary cone crushers achieve <50mm size',
      'Wet grinding in rod mills to 1mm',
      'Spiral classifiers separate by density',
      'Magnetic separation removes gangue minerals',
      'Concentrate upgraded to 68% iron',
      'Flotation removes silica impurities',
      'Final concentrate: 69% Fe, <2% silica',
      'Thickening reduces water content',
      'Filter presses produce 10% moisture cake',
      'Pelletizing for blast furnace feed',
      'Disc pelletizers form 10mm green balls',
      'Induration furnace fires pellets at 1,300°C',
      'Hardened pellets cooled in rotary cooler',
      'Quality control tests crush strength (>250 kg/pellet)',
      'Pellet stockyard holds 500,000 tons',
      'Rail loading facility handles 200 cars per day',
      'Each car carries 100 tons of pellets',
      'Transport to port via dedicated railroad',
      'Ship loading via stacker-reclaimer',
      'Capesize bulk carriers (200,000 DWT) for export',
      'Environmental monitoring of dust emissions',
      'Water recycling rate: 85%',
      'Tailings dam management',
      'Production: 100 million tons per year',
      'Operating cost: $15-20 per ton',
      'Mine life: 20+ years remaining'
    ]
  }
};

// Generate first 5 pages
let count = 0;
for (const [slug, data] of Object.entries(pageTemplates)) {
  const filename = `/Users/rushant/World-Research/content/pages/${slug}.md`;

  const inputs = data.inputs.map(i =>
    `  - name: "${i.name}"\n    cost: ${i.cost}\n    link: "${i.link}"`
  ).join('\n');

  const value_created = data.selling_price - data.inputs.reduce((sum, i) => sum + i.cost, 0);

  const steps = data.steps.map((step, idx) => `${idx + 1}. ${step}`).join('\n');

  const content = `---
title: "${data.title}"
company: "${data.company}"
country: "${data.country}"
selling_price: ${data.selling_price}
inputs:
${inputs}
value_created: ${value_created.toFixed(2)}
distance: ${data.distance}
---

${steps}
`;

  fs.writeFileSync(filename, content);
  count++;
  console.log(`Created: ${slug}.md`);
}

console.log(`\n✓ Generated ${count} ore pages`);
