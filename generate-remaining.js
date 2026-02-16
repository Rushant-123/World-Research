const fs = require('fs');

const missing = JSON.parse(fs.readFileSync('./missing-pages.json', 'utf8'));
const remaining = missing.filter(slug => !fs.existsSync(`./content/pages/${slug}.md`));

console.log(`Generating ${remaining.length} remaining pages...`);

function writePage(slug, data) {
  const filename = `/Users/rushant/World-Research/content/pages/${slug}.md`;
  
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

// Template generator for basic pages
function generateBasicPage(slug) {
  const templates = {
    // Mining operations
    'dragline-excavation': {
      title: 'Dragline Excavation',
      company: 'Caterpillar / Komatsu',
      country: 'United States',
      selling_price: 15.00,
      distance: 6,
      inputs: [
        { name: 'Dragline Machine', cost: 6.00, link: 'mining-operations' }
      ],
      steps: [
        'Dragline positioned at highwall edge',
        'Bucket capacity: 50-150 cubic meters',
        'Boom length: 90-120 meters',
        'Operating weight: 3,000-13,000 tons',
        'Bucket cast from manganese steel',
        'Drag chains and hoist ropes made of steel cable',
        'Walking mechanism moves dragline',
        'Tub rotates 360 degrees on rollers',
        'Operator cab provides visibility',
        'Boom raised to vertical for bucket positioning',
        'Bucket thrown beyond working area',
        'Drag chains pull bucket through material',
        'Bucket fills with overburden',
        'Hoist ropes lift full bucket',
        'Swing tub to spoil position',
        'Trip mechanism releases bucket',
        'Overburden cast into mined-out area',
        'Cycle time: 50-90 seconds',
        'Production: 10,000-20,000 bank cubic meters per day',
        'Electric power: 5-15 MW from trailing cable',
        'Maintenance: weekly bucket and tooth inspection',
        'Rope inspection and replacement every 6-12 months',
        'Walking pads replaced as needed',
        'Operator training required for efficiency',
        'Safety: highwall stability monitoring',
        'Survey controls dig limits',
        'Environmental: dust suppression',
        'Reclamation follows mining',
        'Typical mine life: 20-30 years',
        'Major overhaul every 5-7 years'
      ]
    },
    
    'drill-blast': {
      title: 'Drill and Blast Operations',
      company: 'Atlas Copco / Sandvik',
      country: 'Sweden',
      selling_price: 8.50,
      distance: 6,
      inputs: [
        { name: 'Drill Rig', cost: 3.00, link: 'mining-operations' },
        { name: 'Explosives', cost: 2.50, link: 'explosives' }
      ],
      steps: [
        'Blast pattern designed by engineers',
        'Hole spacing: 5-12 meters',
        'Hole diameter: 100-380mm',
        'Drill rig positions at first hole location',
        'GPS guidance ensures accurate placement',
        'Drill bit: tricone or DTH (down-the-hole) hammer',
        'Drilling fluid: air, water, or foam',
        'Penetration rate: 15-50 meters per hour',
        'Hole depth: 12-18 meters (bench height + subdrill)',
        'Subdrill: 20-30% of bench height',
        'Drill cuttings indicate rock type',
        'Hole surveyed for deviation',
        'Maximum deviation: 2-3% of depth',
        'Collar protection prevents erosion',
        'Explosive loading begins after drilling',
        'Bottom priming with booster',
        'Column charge: ANFO or emulsion',
        'Stemming: crushed rock or drill cuttings',
        'Stemming length: 0.7x burden',
        'Detonator tied to downline',
        'Electronic detonators programmed',
        'Delay timing: 8-100 milliseconds',
        'Blast area evacuated and secured',
        'Shot firer initiates blast from safe distance',
        'Blast fragmentation: 80% < 500mm',
        'Throw distance controlled by timing',
        'Muckpile shape affects loading efficiency',
        'Post-blast inspection for misfires',
        'Fumes cleared before equipment entry',
        'Bench cleanup and scaling',
        'Survey confirms blast results',
        'Powder factor: 0.3-1.0 kg explosive per m³ rock',
        'Vibration monitoring protects nearby structures',
        'Flyrock control through blast design',
        'Continuous improvement of patterns'
      ]
    },

    'mining-operations': {
      title: 'Mining Operations Support',
      company: 'Various Mining Services',
      country: 'Global',
      selling_price: 22.00,
      distance: 6,
      inputs: [
        { name: 'Equipment', cost: 8.00, link: 'steel-raw' },
        { name: 'Labor', cost: 7.00, link: 'skilled-labor' }
      ],
      steps: [
        'Mine planning and scheduling',
        'Grade control modeling',
        'Fleet management system',
        'Equipment dispatch optimization',
        'Preventive maintenance program',
        'Parts inventory management',
        'Tire management for haul fleet',
        'Fuel distribution and monitoring',
        'Lubrication services',
        'Haul road maintenance and watering',
        'Drill rig positioning and operations',
        'Blast pattern layout and execution',
        'Excavator and loader assignment',
        'Truck spotting and loading',
        'Crusher feed management',
        'Stockpile management',
        'Survey and grade control',
        'Geotechnical monitoring',
        'Dewatering and water management',
        'Dust suppression',
        'Environmental monitoring',
        'Safety inspections and training',
        'Emergency response procedures',
        'First aid and medical services',
        'Communication systems',
        'Lighting for night operations',
        'Weather monitoring',
        'Production reporting',
        'Cost tracking and control',
        'Quality assurance',
        'Metallurgical testing',
        'Assay laboratory services',
        'Tailings management',
        'Reclamation activities',
        'Community relations',
        'Regulatory compliance',
        'Workforce training and development',
        'Contractor management',
        'Supply chain coordination',
        'Continuous improvement initiatives'
      ]
    },

    'continuous-miner': {
      title: 'Continuous Miner',
      company: 'Joy Global / Caterpillar',
      country: 'United States',
      selling_price: 485.00,
      distance: 6,
      inputs: [
        { name: 'Steel Chassis', cost: 180.00, link: 'steel-raw' },
        { name: 'Cutting Head', cost: 140.00, link: 'steel-raw' },
        { name: 'Hydraulic System', cost: 95.00, link: 'mining-operations' }
      ],
      steps: [
        'Machine designed for underground coal or soft rock',
        'Chassis fabricated from high-strength steel',
        'Overall length: 8-12 meters',
        'Width: 2.5-5 meters',
        'Height: 1.5-2.5 meters',
        'Operating weight: 40-90 tons',
        'Cutting head rotates on boom',
        'Head diameter: 1.2-2.5 meters',
        'Carbide-tipped picks arranged in spiral pattern',
        'Pick spacing optimized for rock type',
        'Electric motor drives cutting head: 300-600 kW',
        'Cutting speed: 30-60 RPM',
        'Boom extends and retracts hydraulically',
        'Boom can angle up/down for floor/roof cutting',
        'Gathering arms sweep cut material to center',
        'Conveyor system loads onto shuttle car or feeder',
        'Conveyor capacity: 5-10 tons per minute',
        'Dust suppression through water sprays',
        'Integrated scrubber filters air',
        'Cab provides operator protection and visibility',
        'Remote control option for hazardous areas',
        'Track system provides mobility',
        'Steering via differential track speed',
        'Hydraulic jacks stabilize during cutting',
        'Power supply: trailing cable or battery',
        'Voltage: 950-4,160 volts AC',
        'Cable handling system prevents damage',
        'Ventilation tubing attached to machine',
        'Methane monitor provides continuous safety check',
        'Production rate: 3-8 tons per minute',
        'Advance rate: 3-8 meters per hour',
        'Pick replacement every 8-16 hours',
        'Pick cost: $20-40 each, 100-200 picks per head',
        'Major maintenance: gearbox overhaul every 5,000 hours',
        'Hydraulic system service every 1,000 hours',
        'Conveyor chain and flights maintenance',
        'Electrical system inspection and testing',
        'Machine relocation between sections',
        'Operator training certification required',
        'Productivity depends on rock hardness and geology'
      ]
    },

    'dragline-mining': {
      title: 'Dragline Mining',
      company: 'Various Mining Companies',
      country: 'Global',
      selling_price: 12.00,
      distance: 6,
      inputs: [
        { name: 'Dragline Excavator', cost: 5.00, link: 'dragline-excavation' }
      ],
      steps: [
        'Method used for thick overburden removal',
        'Coal seam or ore at depth of 30-60 meters',
        'Initial box cut created with trucks and shovels',
        'Dragline positioned on bench',
        'First cast removes overburden',
        'Overburden placed in adjacent mined panel',
        'Sequential strips mined parallel to each other',
        'Strip width: 30-60 meters',
        'Dragline reaches across strip to dig next cut',
        'Extended bench method maximizes efficiency',
        'Coal or ore exposed and mined by smaller equipment',
        'Trucks haul product to plant',
        'Reclamation follows mining progression',
        'Spoil graded to drainage plan',
        'Topsoil replaced',
        'Vegetation established',
        'Dragline walking advance: 1-2 km per year',
        'Production: 15-30 million bank cubic meters per year',
        'Operating cost: $1-3 per BCM',
        'Stripping ratio: 5:1 to 25:1',
        'Mine planning optimizes dragline position',
        'Highwall and spoil stability critical',
        'Geotechnical monitoring continuous',
        'Groundwater management',
        'Dewatering wells as needed',
        'Water treatment before discharge',
        'Dust control during operations',
        'Noise impact managed',
        'Community relations program',
        'Progressive reclamation reduces liability',
        'Final landform designed for post-mine use',
        'Dragline operation 90-95% availability',
        'Major repairs during planned outages',
        'Bucket and rope replacement scheduled',
        'Walking pads and machinery rebuilt',
        'Mine life typically 15-40 years'
      ]
    }
  };

  return templates[slug] || null;
}

let generated = 0;
let batch = 0;

// Process in batches
for (let i = 0; i < remaining.length; i++) {
  const slug = remaining[i];
  const data = generateBasicPage(slug);
  
  if (data) {
    if (writePage(slug, data)) {
      generated++;
      if (generated % 10 === 0) {
        console.log(`  Progress: ${generated} pages generated...`);
      }
    }
  }
}

console.log(`\n✓ Generated ${generated} pages from templates`);
console.log(`\nRemaining: ${remaining.length - generated} pages need manual definitions`);
