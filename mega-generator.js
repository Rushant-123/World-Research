const fs = require('fs');

const missing = JSON.parse(fs.readFileSync('./missing-pages.json', 'utf8'));
const remaining = missing.filter(slug => !fs.existsSync(`./content/pages/${slug}.md`));

console.log(`Generating ${remaining.length} remaining pages...\n`);

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

// Category-based page generator
function generatePage(slug) {

  // MINING EQUIPMENT AND PROCESSES
  if (slug === 'bucket-dredge') {
    return {
      title: 'Bucket Dredge',
      company: 'IHC Mining',
      country: 'Netherlands',
      selling_price: 580.00,
      distance: 6,
      inputs: [
        { name: 'Steel Hull', cost: 220.00, link: 'steel-raw' },
        { name: 'Bucket Chain System', cost: 180.00, link: 'steel-raw' }
      ],
      steps: [
        'Dredge hull constructed from steel plate',
        'Pontoon design for stability',
        'Hull dimensions: 80-120m length, 20-30m width',
        'Bucket ladder extends forward from bow',
        'Ladder length: 20-50 meters',
        'Bucket chain with 80-150 buckets',
        'Each bucket capacity: 150-800 liters',
        'Buckets fabricated from manganese steel',
        'Upper tumbler at head of ladder',
        'Lower tumbler at digging end',
        'Electric motors drive chain: 500-2,000 kW',
        'Ladder lowered hydraulically to dig',
        'Buckets scoop sediment or ore',
        'Material discharged at top into screens',
        'Rotating screens separate by size',
        'Oversize rejected back to water',
        'Undersize (concentrate) to processing',
        'Spiral concentrators on deck',
        'Heavy minerals separated by gravity',
        'Tailings (lights) pumped overboard',
        'Concentrate stored in hull bins',
        'Spud system anchors dredge',
        'Spuds: large steel poles lowered to bottom',
        'Winches move dredge forward',
        'Swing winches move laterally',
        'Dredging pattern: systematic grid',
        'Production: 200-500 tons solids per hour',
        'Mining depth: 5-40 meters',
        'Onboard accommodation for crew (20-40 people)',
        'Power generation: diesel generators 2-4 MW',
        'Fresh water and sewage systems',
        'Workshop for maintenance',
        'Control room with instrumentation',
        'GPS positioning system',
        'Environmental monitoring',
        'Turbidity and discharge compliance',
        'Dredging campaign: months to years',
        'Mobilization and demobilization logistics',
        'Suitable for heavy mineral sands, tin, gold placer'
      ]
    };
  }

  if (slug === 'bastnasite-mining') {
    return {
      title: 'Bastnäsite Mining (Rare Earth Ore)',
      company: 'MP Materials / Lynas',
      country: 'United States',
      selling_price: 1.85,
      distance: 5,
      inputs: [
        { name: 'Open Pit Mining', cost: 0.45, link: 'open-pit-mining' },
        { name: 'Crushing', cost: 0.35, link: 'crusher' }
      ],
      steps: [
        'Bastnäsite is a fluoro-carbonate mineral of rare earths',
        'Formula: (Ce,La)(CO3)F',
        'Typical grade: 5-10% rare earth oxides (REO)',
        'Open pit mining method',
        'Overburden removal with draglines',
        'Ore drilling and blasting',
        'Loading with hydraulic shovels',
        'Hauling in 240-ton trucks',
        'Primary crushing to <300mm',
        'Conveyor transport to processing plant',
        'Secondary and tertiary crushing to <10mm',
        'Grinding in rod and ball mills',
        'Target size: 80% < 150 microns',
        'Flotation separates bastnäsite from gangue',
        'Collectors: hydroxamic acids or fatty acids',
        'pH control at 8-10',
        'Bastnäsite concentrate: 60% REO',
        'Concentrate contains Ce, La, Pr, Nd, Sm',
        'Thickening and filtration',
        'Roasting at 600-800°C to convert carbonates',
        'Acid leaching with HCl or H2SO4',
        'Rare earths dissolve as chlorides or sulfates',
        'Solvent extraction separates individual elements',
        'Extraction stages: 50-100 mixer-settlers',
        'Cerium separated first (oxidizes to Ce4+)',
        'Lanthanum extracted next',
        'Light rare earths (La, Ce, Pr, Nd) separated',
        'Individual element purity: 99-99.9%',
        'Oxalate precipitation',
        'Calcination produces rare earth oxides',
        'REO purity: 99.5-99.99%',
        'Packaging in drums or supersacks',
        'Environmental: tailings neutralization',
        'Radioactive elements (thorium, uranium) managed',
        'Tailings storage facility engineered',
        'Production: 20,000-50,000 tons REO per year',
        'Mine life: 20-50 years',
        'Rare earths critical for magnets, catalysts, phosphors'
      ]
    };
  }

  if (slug === 'brine-extraction') {
    return {
      title: 'Lithium Brine Extraction',
      company: 'SQM / Albemarle',
      country: 'Chile',
      selling_price: 0.85,
      distance: 5,
      inputs: [
        { name: 'Pumping Wells', cost: 0.15, link: 'water-source' },
        { name: 'Evaporation Ponds', cost: 0.25, link: 'mining-operations' }
      ],
      steps: [
        'Lithium-rich brine in salt flats (salars)',
        'Brine grade: 500-2,000 ppm lithium',
        'Exploration drilling identifies brine zones',
        'Production wells drilled to aquifer',
        'Well depth: 20-100 meters',
        'Submersible pumps installed',
        'Pumping rate: 10-50 liters per second per well',
        'Brine pumped to evaporation ponds',
        'Pond system: series of large shallow ponds',
        'Total area: several square kilometers',
        'Lined with clay or geomembrane',
        'Solar evaporation concentrates lithium',
        'Initial concentration: 0.15% lithium',
        'Evaporation stages over 12-18 months',
        'Magnesium and sulfate precipitate first',
        'Sequential ponds increase concentration',
        'Final brine: 3-6% lithium',
        'Lithium chloride solution to plant',
        'Precipitation with sodium carbonate',
        'Lithium carbonate (Li2CO3) precipitates',
        'Filtration and washing',
        'Drying at 200-250°C',
        'Product purity: 99.5% Li2CO3',
        'Packaging in bulk bags or containers',
        'Alternative: lithium hydroxide production',
        'Conversion with lime (calcium hydroxide)',
        'Lithium hydroxide (LiOH) for batteries',
        'Potassium often byproduct (KCl)',
        'Boron may be recovered',
        'Water consumption minimized (mostly evaporation)',
        'Fresh water for washing and processing',
        'Solar energy primary input',
        'Environmental: brine aquifer management',
        'Monitoring prevents over-extraction',
        'Baseline hydrology studies',
        'Wildlife (flamingos) protected',
        'Production: 10,000-40,000 tons Li2CO3 per year',
        'Operating cost: $3,000-4,000 per ton Li2CO3',
        'Mine life: 20-50 years'
      ]
    };
  }

  if (slug === 'bucket-trucks') {
    return {
      title: 'Bucket Trucks (Service Vehicles)',
      company: 'Terex / Altec',
      country: 'United States',
      selling_price: 185.00,
      distance: 6,
      inputs: [
        { name: 'Truck Chassis', cost: 65.00, link: 'steel-raw' },
        { name: 'Hydraulic Boom', cost: 55.00, link: 'mining-operations' }
      ],
      steps: [
        'Commercial truck chassis selected',
        'Gross vehicle weight: 12,000-15,000 kg',
        'Diesel engine: 200-300 HP',
        'Automatic transmission',
        'Boom mounting structure fabricated',
        'Insulated or non-insulated boom options',
        'Boom constructed from steel or fiberglass',
        'Telescoping sections for reach',
        'Working height: 10-40 meters',
        'Lower boom section mounts to chassis',
        'Upper boom sections telescope',
        'Hydraulic cylinders extend boom',
        'Articulating joints allow positioning',
        'Rotation: 360 degrees continuous',
        'Bucket (platform) at boom tip',
        'Bucket size: 0.6-1.2 meters diameter',
        'Fiberglass construction for electrical work',
        'Load capacity: 150-400 kg (1-2 workers)',
        'Outriggers stabilize truck',
        'Hydraulic outriggers extend laterally',
        'Outrigger pads distribute load',
        'Interlock prevents boom operation without outriggers',
        'Hydraulic power unit on chassis',
        'PTO (power take-off) from engine',
        'Hydraulic pump: 40-80 liters per minute',
        'Control station in bucket',
        'Joystick or lever controls',
        'Emergency descent system',
        'Upper controls override ground controls',
        'Ground controls for positioning',
        'Insulated boom: rated for electrical line work',
        'Dielectric testing: 30-46 kV',
        'Non-conductive fiberglass construction',
        'Tool holders and storage on bucket',
        'LED work lights',
        'Safety harness anchors',
        'Applications: utility line maintenance, tree trimming',
        'Inspection and certification annually',
        'Boom inspection for cracks',
        'Hydraulic system maintenance',
        'Load testing per regulations'
      ]
    };
  }

  if (slug === 'heap-leach') {
    return {
      title: 'Heap Leaching',
      company: 'Various Mining Operations',
      country: 'Global',
      selling_price: 8.50,
      distance: 6,
      inputs: [
        { name: 'Crushed Ore', cost: 2.50, link: 'copper-ore' },
        { name: 'Leach Solution', cost: 1.80, link: 'sulfur' }
      ],
      steps: [
        'Heap leach pad construction',
        'Pad foundation graded and compacted',
        'Liner system installed',
        'Primary liner: HDPE geomembrane (1.5-2.5mm)',
        'Secondary liner for leak detection',
        'Drainage layer: crushed rock (300-600mm)',
        'Collection pipes in herringbone pattern',
        'Ore crushed to minus 50mm or agglomerated',
        'Agglomeration adds acid and water',
        'Disc or drum agglomerators',
        'Agglomerates: 10-30mm diameter',
        'Stacking with conveyor or truck',
        'Lift height: 6-10 meters',
        'Total heap height: 30-100 meters',
        'Heap area: several hectares',
        'Drip irrigation system installed',
        'Emitters spaced 0.5-1.0 meters',
        'Leach solution: sulfuric acid for copper',
        'Or cyanide solution for gold',
        'Application rate: 5-20 liters per hour per m²',
        'Solution percolates through ore',
        'Dissolution of metal values',
        'Copper: CuO + H2SO4 → CuSO4 + H2O',
        'Gold: 4Au + 8NaCN + O2 + 2H2O → 4NaAu(CN)2 + 4NaOH',
        'Leach cycle: 30-365 days',
        'Pregnant leach solution (PLS) collects at pad bottom',
        'PLS pond stores solution',
        'Processing: solvent extraction for copper',
        'Or carbon adsorption for gold',
        'Metal recovery: 60-85%',
        'Barren solution returned to heap',
        'Make-up acid or cyanide added',
        'Water balance managed',
        'Evaporation losses',
        'Stormwater management',
        'Spent ore rinsed after cycle',
        'Neutralization with lime',
        'Reclamation: capping and revegetation',
        'Environmental monitoring: groundwater wells',
        'Heap leaching advantages: low cost, treats low-grade ore',
        'Disadvantages: long cycle time, weather dependent',
        'Production: 5,000-50,000 tons metal per year per operation'
      ]
    };
  }

  if (slug === 'gold-mining') {
    return {
      title: 'Gold Mining',
      company: 'Newmont / Barrick',
      country: 'Nevada, USA',
      selling_price: 0.95,
      distance: 5,
      inputs: [
        { name: 'Open Pit Mining', cost: 0.22, link: 'open-pit-mining' },
        { name: 'Ore Processing', cost: 0.35, link: 'ore-processing' }
      ],
      steps: [
        'Gold ore grades: 0.5-5 grams per ton',
        'Open pit or underground mining',
        'Oxide ores amenable to heap leaching',
        'Sulfide ores require milling and flotation',
        'Drilling and blasting',
        'Loading and hauling to crusher',
        'Primary crushing to <150mm',
        'Heap leach for oxide ore',
        'Or grinding for refractory ore',
        'SAG mill and ball mill circuit',
        'Grind size: 80% < 75 microns',
        'Gravity concentration for coarse gold',
        'Centrifugal concentrators',
        'Intensive cyanidation of concentrates',
        'Flotation for sulfide-hosted gold',
        'Concentrate roasted or pressure oxidized',
        'Roasting at 600-700°C oxidizes sulfides',
        'Calcine leached with cyanide',
        'Cyanide leaching in agitated tanks',
        'Solution: 0.5-2 g/L NaCN, pH 10-11',
        'Oxygen or air sparging',
        'Reaction: 4Au + 8CN⁻ + O2 + 2H2O → 4Au(CN)2⁻ + 4OH⁻',
        'Leach time: 24-48 hours',
        'Gold dissolution: 90-97%',
        'Carbon-in-pulp (CIP) or carbon-in-leach (CIL)',
        'Activated carbon adsorbs gold cyanide',
        'Carbon loading: 3,000-8,000 g gold per ton carbon',
        'Loaded carbon eluted with hot caustic solution',
        'Electrowinning from eluate',
        'Gold deposits on steel wool cathodes',
        'Smelting produces doré bars',
        'Doré: 70-90% gold, remainder silver',
        'Refining to 99.99% purity',
        'Electrolytic refining or chemical (aqua regia)',
        'Tailings neutralization',
        'Cyanide destruction with SO2 or peroxide',
        'Tailings storage facility',
        'Environmental monitoring',
        'Water recycling: 80-90%',
        'Production: 100,000-500,000 oz gold per year per mine',
        'All-in sustaining cost: $900-1,300 per oz'
      ]
    };
  }

  // Add more as needed...
  return null;
}

let count = 0;
for (const slug of remaining) {
  const data = generatePage(slug);
  if (data && writePage(slug, data)) {
    count++;
    if (count % 5 === 0) {
      console.log(`  ${count} pages generated...`);
    }
  }
}

console.log(`\n✓ Total generated: ${count} pages`);
console.log(`Remaining: ${remaining.length - count} pages\n`);
