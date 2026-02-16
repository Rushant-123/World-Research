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

const equipment = {
  'bulldozer': {
    title: 'Bulldozer',
    company: 'Caterpillar / Komatsu',
    country: 'United States',
    selling_price: 285.00,
    distance: 6,
    inputs: [
      { name: 'Steel Frame', cost: 95.00, link: 'steel-raw' },
      { name: 'Diesel Engine', cost: 75.00, link: 'diesel' },
      { name: 'Hydraulic System', cost: 45.00, link: 'mining-operations' }
    ],
    steps: [
      'Steel frame welded from heavy plate (25-50mm thickness)',
      'Main frame designed for 50,000+ hour lifespan',
      'Track system assembled with steel shoes',
      'Each track shoe weighs 50-150kg',
      'Track pins and bushings hardened for wear resistance',
      'Idler wheels and carrier rollers installed',
      'Final drive planetary gearboxes mounted',
      'Diesel engine installed (300-850 horsepower)',
      'Turbocharged and aftercooled for high altitude',
      'Cooling system with heavy-duty radiator',
      'Hydraulic pumps driven by engine',
      'Hydraulic tank capacity: 200-400 liters',
      'Blade lift cylinders (2) rated for 30-ton blade',
      'Blade tilt cylinders for side-to-side angle',
      'Straight blade (S), universal blade (U), or semi-U variants',
      'Blade cutting edge with replaceable teeth',
      'Ripper assembly at rear (single or multi-shank)',
      'Ripper shank tips with carbide inserts',
      'ROPS/FOPS certified cab structure',
      'Climate-controlled operator cabin',
      'Suspension seat with air ride',
      'Joystick controls for blade and ripper',
      'Electronic monitoring of all systems',
      'GPS grading system integration',
      'Automatic blade control for precision',
      'LED lighting for 24-hour operation',
      'Fire suppression system in engine compartment',
      'Fuel tank capacity: 500-1,500 liters',
      'DEF (diesel exhaust fluid) system for emissions',
      'Ground clearance: 400-600mm',
      'Operating weight: 20-100 tons depending on size',
      'Drawbar pull: 50,000-200,000 kg',
      'Factory testing of all systems',
      'Paint system: primer and polyurethane topcoat',
      'Customer decal package applied',
      'Shipment on lowboy trailer',
      'Operator training at dealer facility',
      'Warranty coverage: 1-3 years or 3,000-5,000 hours'
    ]
  },

  'excavator': {
    title: 'Hydraulic Excavator',
    company: 'Hitachi / Caterpillar / Komatsu',
    country: 'Japan',
    selling_price: 380.00,
    distance: 6,
    inputs: [
      { name: 'Steel Structure', cost: 125.00, link: 'steel-raw' },
      { name: 'Hydraulic Components', cost: 110.00, link: 'mining-operations' },
      { name: 'Diesel Engine', cost: 85.00, link: 'diesel' }
    ],
    steps: [
      'Undercarriage frame fabricated from high-tensile steel',
      'Track frames with lifetime lubricated links',
      'Track shoes bolted to track chains',
      'Lower rollers (6-9 per side) support weight',
      'Upper carrier rollers guide track return',
      'Final drives contain planetary gear reduction',
      'Swing bearing installed between upper and lower',
      'Swing drive motor and gearbox mounted',
      'Upper frame houses engine, pumps, tanks',
      'Diesel engine: 200-800 HP for mining excavators',
      'Engine meets Tier 4 emissions standards',
      'Multiple hydraulic pumps (variable displacement)',
      'Pump flow: 400-800 liters per minute',
      'Hydraulic oil tank: 300-800 liters',
      'Boom cylinder (2) for vertical lift',
      'Stick (arm) cylinder for reach',
      'Bucket cylinder for digging force',
      'Boom structure fabricated from box section steel',
      'Stick (arm) telescopes or fixed design',
      'Bucket quick-coupler for bucket changes',
      'Rock bucket with GET (ground engaging tools)',
      'Bucket capacity: 1-50 cubic meters',
      'Cab mounted on vibration isolators',
      'Pressurized cab with filtered air',
      'Ergonomic pilot control levers',
      'LCD display shows machine parameters',
      'Rear-view and side-view cameras',
      'Payload monitoring system',
      'Telematics for remote diagnostics',
      'Counterweight: 10-80 tons for stability',
      'Operating weight: 20-800 tons',
      'Maximum reach: 10-25 meters',
      'Digging depth: 6-15 meters',
      'Factory load testing of hydraulic system',
      'Pressure testing to 1.5x rated pressure',
      'Breakout force testing',
      'Quality inspection of all welds',
      'Shipped in sections for large models',
      'Assembly and commissioning at mine site'
    ]
  },

  'dump-truck': {
    title: 'Mining Haul Truck',
    company: 'Caterpillar / Komatsu / Liebherr',
    country: 'United States',
    selling_price: 425.00,
    distance: 6,
    inputs: [
      { name: 'Steel Chassis', cost: 140.00, link: 'steel-raw' },
      { name: 'Diesel Engine', cost: 120.00, link: 'diesel' },
      { name: 'Tires (6)', cost: 90.00, link: 'mining-operations' }
    ],
    steps: [
      'Main frame rails fabricated from high-strength steel',
      'Frame designed with finite element analysis',
      'Welded construction meets fatigue life requirements',
      'Front suspension uses strut and spring design',
      'Rear suspension with hydraulic cylinders',
      'Oil-filled suspension struts dampen shocks',
      'Axle housings for front steering axle',
      'Rear drive axles with differential',
      'Electric drive option: wheel motors at rear',
      'Diesel engine: 2,000-4,000 horsepower',
      'Engine block cast from high-grade iron',
      'Turbochargers and intercoolers for power density',
      'After-coolers reduce intake air temperature',
      'Transmission: mechanical or electric drive',
      'Torque converter for mechanical drive',
      'Generators for electric drive system',
      'Inverters and wheel motors for electric',
      'Dynamic (electric) braking system',
      'Hydraulic retarder for additional braking',
      'Brake system with oil-cooled discs',
      'Dump body fabricated from 20-40mm plate',
      'Body capacity: 100-450 tons',
      'Two-stage telescopic hoist cylinder',
      'Hoist system raises body to 70-degree angle',
      'Canopy structure protects cab from falling rock',
      'ROPS/FOPS certified operator compartment',
      'Air-conditioned cab with visibility',
      'Automatic transmission controls',
      'Payload scale system in suspension',
      'GPS fleet management system',
      'Collision avoidance radar',
      'Tires: 55/80R63 or larger (4m diameter)',
      'Each tire costs $40,000-50,000',
      'Central tire inflation system',
      'Automatic lubrication system (200+ points)',
      'Pre-trip inspection checklist automated',
      'Factory acceptance testing',
      'Shipment via specialized heavy haul',
      'Commissioning and operator training at site'
    ]
  },

  'wheel-loader': {
    title: 'Wheel Loader',
    company: 'Caterpillar / Volvo / Komatsu',
    country: 'Sweden',
    selling_price: 195.00,
    distance: 6,
    inputs: [
      { name: 'Steel Frame', cost: 65.00, link: 'steel-raw' },
      { name: 'Engine and Transmission', cost: 55.00, link: 'diesel' },
      { name: 'Hydraulics', cost: 35.00, link: 'mining-operations' }
    ],
    steps: [
      'Articulated frame construction (front and rear sections)',
      'Articulation joint allows 40-degree turning angle',
      'Front frame houses engine and drivetrain',
      'Rear frame carries operator cab and counterweight',
      'Four-wheel drive for traction',
      'Torque converter automatic transmission',
      'Planetary final drives in each wheel hub',
      'Diesel engine: 150-600 horsepower',
      'Turbocharged for high-altitude performance',
      'Hydraulic pump driven by engine',
      'Load-sensing hydraulics for efficiency',
      'Boom lift cylinders (2) for vertical movement',
      'Bucket tilt cylinders (2) for dumping',
      'Z-bar linkage for parallel lift',
      'High-lift option for loading into trucks',
      'Bucket with bolt-on cutting edge',
      'Bucket capacity: 2-15 cubic meters',
      'Rock teeth or spade edge configurations',
      'Quick-coupler for bucket changes',
      'Cab with 360-degree visibility',
      'Reversing camera and monitoring',
      'Ride control system for load stability',
      'Automatic tire inflation monitoring',
      'Tires: 26.5R25 to 45/65R45 sizes',
      'Tire life: 3,000-6,000 hours',
      'Operating weight: 15-100 tons',
      'Breakout force: 20-60 tons',
      'Dump clearance at full height: 3-5 meters',
      'Cycle time (load-dump-return): 30-45 seconds',
      'Fuel efficiency monitoring',
      'DEF system for emissions compliance',
      'Automatic engine shutdown if overheating',
      'Fire suppression system in engine bay',
      'Pressurized cab with filtered air',
      'Heated and ventilated seat',
      'Joystick steering and operation controls',
      'Factory performance testing',
      'Paint: corrosion-resistant system',
      'Dealer delivery and setup'
    ]
  },

  'hydraulic-excavator': {
    title: 'Large Mining Excavator',
    company: 'Komatsu / Hitachi',
    country: 'Japan',
    selling_price: 1850.00,
    distance: 6,
    inputs: [
      { name: 'Heavy Steel Structures', cost: 750.00, link: 'steel-raw' },
      { name: 'Hydraulic System', cost: 550.00, link: 'mining-operations' },
      { name: 'Diesel Engine (Large)', cost: 350.00, link: 'diesel' }
    ],
    steps: [
      'Ultra-class excavator for 300-400 ton trucks',
      'Undercarriage fabricated from 80-100mm steel plate',
      'Track shoes individually weigh 500kg',
      'Track pitch: 350-400mm',
      'Ground contact length: 8-10 meters per side',
      'Lower frame supports 600-800 ton upper structure',
      'Swing bearing diameter: 5-6 meters',
      'External gear ring with precision-machined teeth',
      'Swing drive motors (dual) for rotation',
      'Upper frame houses all machinery',
      'Diesel engine: 2,500-4,000 horsepower',
      'V-16 or V-18 cylinder configuration',
      'Engine weight: 15-20 tons',
      'Cooling package with multiple radiators',
      'Hydraulic pumps: 4-6 variable displacement units',
      'Total flow: 3,000-5,000 liters per minute',
      'System pressure: 350-400 bar',
      'Hydraulic reservoir: 3,000-5,000 liters',
      'Boom structure: box section 2m x 3m',
      'Boom length: 10-12 meters',
      'Boom cylinders: diameter 500-600mm',
      'Stick length: 6-8 meters',
      'Stick cylinder: bore 450-500mm',
      'Bucket capacity: 30-50 cubic meters',
      'Bucket weight: 25-35 tons',
      'Teeth and adapters: cast manganese steel',
      'Hydraulic lines: 2-3 inch diameter',
      'Cab provides 6-meter eye height',
      'Pressurized and climate controlled',
      'Redundant air filtration',
      'Ergonomic controls with programmable functions',
      'Load-out monitoring system',
      'Automatic truck positioning assistance',
      'Telematics with satellite link',
      'Operating weight: 600-800 tons',
      'Bucket fill capacity: 40-60 tons per pass',
      'Cycle time: 28-35 seconds',
      'Production rate: 3,000-5,000 tons per hour',
      'Factory assembly in specialized facility',
      'Component-by-component testing',
      'Disassembly for shipment',
      'Site reassembly takes 4-6 weeks',
      'Commissioning with manufacturer technicians'
    ]
  }
};

let count = 0;
for (const [slug, data] of Object.entries(equipment)) {
  if (writePage(slug, data)) {
    count++;
    console.log(`Created: ${slug}.md`);
  }
}

console.log(`\n✓ Generated ${count} equipment pages`);
