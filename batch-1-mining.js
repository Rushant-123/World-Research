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

const miningOps = {
  'open-pit-mining': {
    title: 'Open Pit Mining Operations',
    company: 'Various Mining Companies',
    country: 'Global',
    selling_price: 12.00,
    distance: 6,
    inputs: [
      { name: 'Excavation Equipment', cost: 4.50, link: 'excavator' },
      { name: 'Explosives', cost: 2.00, link: 'explosives' },
      { name: 'Haul Trucks', cost: 3.00, link: 'dump-truck' }
    ],
    steps: [
      'Geologic survey identifies viable ore deposit',
      'Economic feasibility study evaluates deposit',
      'Environmental impact assessment submitted',
      'Mining permits obtained from regulatory authorities',
      'Land acquisition and access rights secured',
      'Initial site clearing with bulldozers',
      'Topsoil stripped and stockpiled separately',
      'Pit design optimized for ore recovery and stability',
      'Bench height set at 10-15 meters',
      'Bench face angle 60-70 degrees',
      'Overall pit slope 35-45 degrees for stability',
      'Access ramps at 10% grade for haul trucks',
      'Drill rigs position on benches',
      'Blast hole patterns marked by surveyors',
      'Rotary blast hole drills bore 9-15 inch diameter holes',
      'Hole depth typically 12-18 meters (1.5x bench height)',
      'Drill cuttings analyzed for grade control',
      'Explosive loading trucks deliver ANFO',
      'Boosters and detonators placed in each hole',
      'Electronic detonators programmed for millisecond delays',
      'Blast area evacuated and secured',
      'Blast fragmentation evaluated with image analysis',
      'Excavators or shovels load blasted material',
      'Haul trucks transport ore to crusher',
      'Waste rock transported to dump',
      'Pit dewatering with submersible pumps',
      'Haul road maintenance (grading, watering)',
      'Bench cleanup and scaling of loose rock',
      'Survey updates after each blast',
      'Grade control modeling guides dig limits',
      'Equipment dispatching system optimizes cycles',
      'Tire management for haul truck fleet',
      'Fuel delivered to equipment by service trucks',
      'Shift changes every 12 hours for continuous operation',
      'Safety inspections of pit walls daily',
      'Geotechnical monitoring with slope radar',
      'Dust suppression with water trucks',
      'Progressive rehabilitation of completed areas',
      'Final pit configuration designed for stability',
      'Post-closure monitoring plan implemented'
    ]
  },

  'underground-mining': {
    title: 'Underground Mining Operations',
    company: 'Various Mining Companies',
    country: 'Global',
    selling_price: 28.00,
    distance: 6,
    inputs: [
      { name: 'Drilling Equipment', cost: 8.00, link: 'drill-blast' },
      { name: 'Ventilation Systems', cost: 6.00, link: 'mining-operations' },
      { name: 'Ground Support', cost: 5.00, link: 'steel-raw' }
    ],
    steps: [
      'Ore body delineation through diamond drilling',
      'Metallurgical testing determines ore processing method',
      'Mining method selection based on ore geometry',
      'Shaft sinking or decline development planned',
      'Pre-sinking freeze holes for groundwater control',
      'Shaft excavation in 5-meter lifts',
      'Concrete lining installed for permanent support',
      'Headframe and hoist installation at surface',
      'Skip loading system for ore hoisting',
      'Cage system for personnel and equipment',
      'Main haulage level developed at ore horizon',
      'Ventilation raises drilled to surface',
      'Fresh air intake and exhaust shafts established',
      'Primary fans deliver 200-500 m3/s airflow',
      'Secondary ventilation to active headings',
      'Jumbo drills advance development headings',
      'Drill rounds of 3-4 meters advance',
      'Charging with emulsion explosives',
      'Electronic detonators for smooth blasting',
      'Ventilation clearing for 30 minutes post-blast',
      'Scaling of loose rock from walls and back',
      'Ground support installation: rock bolts and mesh',
      'Shotcrete application for additional support',
      'Cable bolting for large spans',
      'Ore pass development for gravity ore flow',
      'Drawpoint construction at collection level',
      'Stope access and drilling platforms',
      'Production drilling of longhole patterns',
      'Large-scale production blasting',
      'Remote loading with LHD equipment',
      'Ore trucking to underground crusher',
      'Conveyor system to shaft bottom',
      'Backfilling of mined stopes',
      'Paste backfill plant on surface',
      'Cemented fill placed for ground support',
      'Dewatering system handles inflow',
      'Refuge chambers every 500 meters',
      'Self-rescuer breathing apparatus for all workers',
      'Underground communications and tracking systems',
      'Seismic monitoring in high-stress ground',
      'Maintenance shops underground and surface',
      'Continuous training for emergency response'
    ]
  },

  'strip-mining': {
    title: 'Strip Mining (Surface Coal)',
    company: 'Peabody / Arch Resources',
    country: 'United States',
    selling_price: 8.50,
    distance: 6,
    inputs: [
      { name: 'Dragline Excavator', cost: 3.00, link: 'dragline-excavation' },
      { name: 'Bulldozers', cost: 1.50, link: 'bulldozer' }
    ],
    steps: [
      'Coal seam identified through exploration drilling',
      'Overburden thickness measured (typically 30-100 meters)',
      'Strip mining economical when stripping ratio <30:1',
      'Site preparation clears vegetation',
      'Topsoil removed and stockpiled separately',
      'First cut exposes coal seam',
      'Dragline excavator removes overburden',
      'Bucket capacity: 50-100 cubic meters',
      'Overburden cast into adjacent mined-out strip',
      'Coal seam exposed in long parallel strips',
      'Coal thickness typically 1-10 meters',
      'Bulldozers push coal into windrows',
      'Front-end loaders load coal into trucks',
      'Trucks transport to preparation plant',
      'Sequential strips mined advancing across property',
      'Highwall created at excavation face',
      'Final highwall angle designed for stability (30-45°)',
      'Spoil pile created from overburden',
      'Grading of spoil to approximate original contour',
      'Replacement of topsoil on graded spoil',
      'Seeding with native grasses and legumes',
      'Tree planting in reclaimed areas',
      'Erosion control structures installed',
      'Sediment ponds capture runoff',
      'Water quality monitoring downstream',
      'Groundwater monitoring wells',
      'Concurrent reclamation behind mining operation',
      'Reclamation bond held by regulatory authority',
      'Final inspection before bond release',
      'Post-mining land use established (pasture, forest, wildlife)'
    ]
  },

  'longwall-mining': {
    title: 'Longwall Mining',
    company: 'Komatsu Mining / Joy Global',
    country: 'Australia',
    selling_price: 45.00,
    distance: 6,
    inputs: [
      { name: 'Longwall Shearer', cost: 18.00, link: 'continuous-miner' },
      { name: 'Hydraulic Roof Supports', cost: 15.00, link: 'mining-operations' }
    ],
    steps: [
      'Coal seam accessed via shaft or drift mine',
      'Development roadways driven to block boundaries',
      'Longwall panel dimensions: 200-400m wide, 2-5km long',
      'Gate roads developed on each side of panel',
      'Face-end equipment installed',
      'Armored face conveyor (AFC) positioned',
      'Hydraulic roof supports placed along face (150-200 shields)',
      'Each shield capacity: 1,000-1,500 tons',
      'Longwall shearer mounted on AFC',
      'Shearer passes along face cutting coal',
      'Rotating drums with carbide picks',
      'Coal cut in 0.8-1.2 meter web',
      'Coal falls onto AFC and transported to gate',
      'Shields advance hydraulically after each cut',
      'Roof caves in controlled manner behind shields',
      'Shearer makes bi-directional cuts',
      'Cutting cycle time: 2-4 hours',
      'Daily advance: 5-10 meters',
      'Ventilation maintained through gates',
      'Dust suppression with water sprays',
      'Methane monitoring continuous',
      'Face auto mation reduces crew requirements',
      'Remote monitoring from surface',
      'Production rate: 5,000-15,000 tons per day',
      'Panel mining continues for 6-18 months',
      'Equipment recovery at panel end',
      'Shields, conveyor, shearer moved to next panel',
      'Relocation takes 1-3 months',
      'Subsidence monitoring on surface',
      'Ground movement typically 50-90% of seam thickness',
      'Surface structures protected or relocated',
      'Continuous improvement of equipment reliability'
    ]
  },

  'room-pillar-mining': {
    title: 'Room and Pillar Mining',
    company: 'Various Underground Mines',
    country: 'Global',
    selling_price: 18.00,
    distance: 6,
    inputs: [
      { name: 'Continuous Miner', cost: 7.00, link: 'continuous-miner' },
      { name: 'Roof Bolting Equipment', cost: 4.00, link: 'mining-operations' }
    ],
    steps: [
      'Ore body or coal seam accessed via portal or shaft',
      'Development of main access entries',
      'Room dimensions designed: 5-8m wide, 3-6m high',
      'Pillar dimensions provide roof support',
      'Pillar width typically 12-20 meters',
      'Room and pillar layout mapped',
      'Continuous miner cuts ore/coal',
      'Rotating drum with carbide teeth',
      'Loading arms gather material onto conveyor',
      'Shuttle cars transport to feeder',
      'Conveyor belt system to surface',
      'Roof bolter follows miner advance',
      'Resin-anchored rock bolts installed',
      'Bolt length: 1.2-2.4 meters',
      'Bolt spacing: 1-1.5 meters',
      'Mesh or straps installed with bolts',
      'Ground penetrating radar scans roof',
      'Roof falls mitigated through support',
      'Ventilation maintained with auxiliary fans',
      'Dust suppression at cutting face',
      'Methane monitoring in coal mines',
      'Room development continues systematically',
      'Extraction typically 40-60% of ore',
      'Pillars remain for permanent support',
      'Retreat mining option recovers pillars',
      'Pillar extraction increases recovery to 70-90%',
      'Controlled roof collapse in retreated areas',
      'Final pillars (barrier) left for stability',
      'Mine surveying ensures proper layout',
      'Equipment maintenance in underground shop',
      'Personnel training on emergency procedures',
      'Self-contained self-rescuer devices mandatory'
    ]
  }
};

let count = 0;
for (const [slug, data] of Object.entries(miningOps)) {
  if (writePage(slug, data)) {
    count++;
    console.log(`Created: ${slug}.md`);
  }
}

console.log(`\n✓ Generated ${count} mining operation pages`);
