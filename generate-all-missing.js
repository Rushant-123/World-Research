const fs = require('fs');

const missing = JSON.parse(fs.readFileSync('./missing-pages.json', 'utf8'));

// Categorize all missing pages
const categories = {
  ores: ['bauxite-ore', 'chromite-ore', 'copper-cobalt-ore', 'galena-ore', 'metal-ore', 'mineral-ore',
         'pentlandite-ore', 'rutile-ore', 'uranium-ore', 'zinc-ore'],

  rawMaterials: ['water-source', 'raw-materials', 'sulfur', 'silicon-metal', 'metallurgical-coke',
                 'magnesium-metal', 'palladium-metal', 'silver-metal', 'aluminum-powder', 'graphite-components',
                 'graphite-electrodes', 'quartz-mining', 'bastnasite-mining', 'laterite-mining', 'placer-deposits'],

  miningOperations: ['open-pit-mining', 'underground-mining', 'longwall-mining', 'strip-mining',
                     'room-pillar-mining', 'dragline-mining', 'hydraulic-mining', 'gold-mining',
                     'sphalerite-mining', 'heap-leach', 'ore-processing', 'mineral-processing'],

  miningEquipment: ['bulldozer', 'excavator', 'dump-truck', 'wheel-loader', 'hydraulic-excavator',
                    'continuous-miner', 'bucket-dredge', 'dragline-excavation', 'mining-trucks',
                    'concentrator-equipment', 'crusher', 'crusher-equipment', 'jaw-crusher',
                    'screening-equipment', 'vibrating-screens', 'vibrating-screen', 'belt-conveyor',
                    'conveyor-system', 'flotation-cells', 'flotation-plant', 'filter-press',
                    'jig-concentrator', 'shaking-table', 'air-classifier', 'ball-mill'],

  chemicalProcesses: ['acid-leach', 'pressure-acid-leach', 'cil-process', 'claus-process',
                      'electrolytic-refining', 'electroplating-equipment', 'chemical-extraction',
                      'cryogenic-distillation', 'distillation-equipment', 'chemical-distillation',
                      'gas-sweetening', 'gas-scrubber', 'packed-column', 'packed-tower',
                      'pressure-swing-adsorption', 'membrane-cell', 'chlorine-production'],

  metallurgy: ['arc-furnace', 'electric-arc-furnace', 'reverberatory-furnace', 'lead-blast-furnace',
               'reduction-furnace', 'gold-smelter', 'pyrometallurgical-refining', 'electrolytic-cobalt',
               'zinc-electrowinning', 'electrolytic-recovery', 'dwight-lloyd-sinter', 'calcination',
               'fluidized-bed-roaster', 'rotar y-kiln', 'rotary-dryer'],

  energy: ['diesel', 'explosives', 'anfo-explosives'],

  equipment: ['pump', 'submersible-pump', 'vacuum-pump', 'vacuum-system', 'reactor-vessel',
              'digester-tanks', 'steel-vessel', 'plastic-tanks', 'crude-storage', 'heat-recovery-system',
              'refrigeration', 'spray-dryer', 'atomizer', 'kneader', 'twin-screw-extruder',
              'planetary-mixer', 'vacuum-laminator', 'vacuum-evaporator'],

  labor: ['skilled-labor', 'instructor-wages', 'electrical-linemen', 'lineman-training',
          'open-source-contributors']
};

// Helper to write page
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
}

// Count generated
let generated = 0;

console.log('Generating all 282 missing pages...\n');
console.log('Progress:');

// We already have 5 ores, now generate remaining ore pages
const oreData = {
  'chromite-ore': {
    title: 'Chromite Ore',
    company: 'Samancor / Merafe',
    country: 'South Africa',
    selling_price: 0.25,
    distance: 5,
    inputs: [
      { name: 'Underground Mining', cost: 0.055, link: 'room-pillar-mining' },
      { name: 'Crushing Equipment', cost: 0.03, link: 'crusher' }
    ],
    steps: [
      'Geologic mapping identifies chromite layers in mafic intrusions',
      'Core drilling confirms chromium oxide content (42-46% Cr2O3)',
      'Shaft sinking to depths of 300-1000 meters',
      'Main haulage developed at ore horizon',
      'Cross-cuts driven perpendicular to ore body',
      'Stope panels designed 30m wide by 100m long',
      'Uphole drilling creates blast rings',
      'Emulsion explosives charged into holes',
      'Top-down retreat mining sequence',
      'Blasted ore falls to collection drives',
      'LHD loaders scoop and transport ore',
      'Underground crushing station reduces size',
      'Conveyor belt transports to shaft',
      'Hoisting to surface in 10-ton skips',
      'Surface stockpiling by grade',
      'Dense media separation for beneficiation',
      'Ferrosilicon media at specific gravity 2.8',
      'Chromite sinks (SG 4.5), gangue floats',
      'Spiral concentrators provide secondary upgrade',
      'Washing removes clay and fine silica',
      'Magnetic separation removes magnetic iron oxides',
      'Final concentrate: 44-46% Cr2O3',
      'Chromium-to-iron ratio optimized (1.5:1 to 2:1)',
      'Sizing into lump (6-100mm) and fines (<6mm)',
      'Rotary dryer reduces moisture to <3%',
      'Quality control for alumina and silica content',
      'Stockpiling in weatherproof facility',
      'Rail transport to ferrochrome smelter',
      'Ventilation system delivers fresh air underground',
      'Rock support with shotcrete and mesh',
      'Dewatering pumps handle groundwater inflow',
      'Safety monitoring for ground movement',
      'Workforce training in confined space rescue',
      'Production rate: 2-4 million tons per year',
      'Mine life typically 15-30 years'
    ]
  },

  'copper-cobalt-ore': {
    title: 'Copper-Cobalt Ore',
    company: 'Glencore / China Molybdenum',
    country: 'Democratic Republic of Congo',
    selling_price: 0.42,
    distance: 5,
    inputs: [
      { name: 'Open Pit Mining', cost: 0.08, link: 'open-pit-mining' },
      { name: 'Excavation Equipment', cost: 0.06, link: 'excavator' }
    ],
    steps: [
      'Sedimentary copper-cobalt deposits in Katanga Copperbelt',
      'Ore grades: 2-4% copper, 0.3-0.8% cobalt',
      'Topsoil stripped and stockpiled for rehabilitation',
      'Overburden removed in 10m benches',
      'Ore body exposed at 20-50m depth',
      'Selective mining of high-grade zones',
      'Excavator loading into 50-ton trucks',
      'Grade control using portable XRF',
      'High-grade ore (>3% Cu) to crusher',
      'Medium-grade ore (1.5-3% Cu) stockpiled',
      'Low-grade ore to heap leach pads',
      'Primary crushing to <150mm',
      'Agglomeration with sulfuric acid',
      'Heap stacking in 8m lifts',
      'Drip irrigation with acidic solution',
      'Copper and cobalt dissolve over 60-90 days',
      'Pregnant leach solution collected',
      'Solution contains 2-5 g/L copper, 0.5-1 g/L cobalt',
      'Solvent extraction separates copper from cobalt',
      'Organic extractant selectively binds copper',
      'Copper stripped into concentrated sulfate solution',
      'Electrowinning produces pure copper cathode',
      'Cobalt-rich raffinate further processed',
      'Precipitation with lime forms cobalt hydroxide',
      'Re-dissolution and purification',
      'Final cobalt product as metal or sulfate',
      'Tailings neutralized with limestone',
      'Reclamation water recycled to process',
      'Environmental monitoring of acid rock drainage',
      'Dust suppression on haul roads',
      'Wildlife corridors maintained',
      'Local community employment programs',
      'Production: 300,000 tons ore per day',
      'Copper recovery: 85-90%',
      'Cobalt recovery: 70-80%'
    ]
  },

  'galena-ore': {
    title: 'Galena Ore (Lead Sulfide)',
    company: 'Nyrstar / Volcan Compania',
    country: 'Peru',
    selling_price: 0.32,
    distance: 5,
    inputs: [
      { name: 'Underground Mining', cost: 0.07, link: 'room-pillar-mining' },
      { name: 'Explosives', cost: 0.04, link: 'explosives' }
    ],
    steps: [
      'Galena (PbS) occurs in polymetallic veins with zinc and silver',
      'Vein widths range from 0.5 to 5 meters',
      'Typical grade: 5-15% lead, 3-8% zinc, 50-150 g/t silver',
      'Decline access driven at 1:8 gradient',
      'Sublevel stoping method for steep veins',
      'Drilling sublevels every 20 meters vertically',
      'Long-hole drilling rigs bore parallel holes',
      'Emulsion explosives for better water resistance',
      'Sequential blasting from top sublevel down',
      'Ore draws through extraction drifts',
      'Remote-controlled LHD units for safety',
      'Underground crushing to <100mm',
      'Shaft hoisting or decline trucking to surface',
      'Surface crushing reduces to <25mm',
      'Grinding in rod and ball mills to 150 microns',
      'Differential flotation separates lead, zinc, pyrite',
      'Lead circuit uses xanthate collectors',
      'pH controlled at 9-10 for selectivity',
      'Lead concentrate: 55-65% Pb, 150-300 g/t Ag',
      'Zinc flotation at pH 11-12',
      'Zinc concentrate: 50-55% Zn',
      'Pyrite depressed with cyanide or SO2',
      'Thickening and filtration of concentrates',
      'Concentrate moisture reduced to 8-10%',
      'Lead concentrate contains valuable silver',
      'Zinc concentrate sold as byproduct',
      'Assay for lead, zinc, silver, gold, bismuth',
      'Penalty elements monitored (arsenic, antimony)',
      'Bagging in 1-ton bulk bags or shipped bulk',
      'Underground ventilation capacity: 150 m3/s',
      'Ground support with cable bolts',
      'Pumping system handles 500 L/min water',
      'Tailings thickened for paste backfill',
      'Cemented paste backfill in mined stopes',
      'Production: 500,000 tons ore per year',
      'Workforce: 400-600 personnel'
    ]
  },

  'pentlandite-ore': {
    title: 'Pentlandite Ore (Nickel Sulfide)',
    company: 'Norilsk Nickel / Vale',
    country: 'Russia',
    selling_price: 0.55,
    distance: 5,
    inputs: [
      { name: 'Underground Mining', cost: 0.12, link: 'room-pillar-mining' },
      { name: 'Drilling Equipment', cost: 0.08, link: 'drill-blast' }
    ],
    steps: [
      'Pentlandite ((Fe,Ni)9S8) primary nickel mineral',
      'Associated with pyrrhotite and chalcopyrite',
      'Ore grade typically 0.5-2% nickel',
      'Deep underground mining (500-1500m depth)',
      'Shaft sinking through hard igneous rock',
      'Development of main haulage level',
      'Sublevel open stoping for massive sulfide',
      'Longhole drilling from sublevels',
      'Fan-pattern boreholes 25-40m long',
      'Heavy ANFO explosive mix for hard rock',
      'Large-scale blasting (20,000-50,000 tons)',
      'Ore drawdown over several months',
      'Remote-controlled ore passes',
      'Underground truck haulage to shaft',
      'Skip hoisting to surface facility',
      'Primary jaw crushing to <200mm',
      'Grinding in SAG and ball mill circuit',
      'Target grind size: 75-100 microns',
      'Bulk sulfide flotation using xanthates',
      'Combined nickel-copper concentrate',
      'Concentrate grade: 5-10% Ni, 2-4% Cu',
      'Pentlandite liberation critical for recovery',
      'Magnetic separation of pyrrhotite',
      'Reduced concentrate mass to smelter',
      'Thickening to 65-70% solids',
      'Filtration achieves 9% moisture',
      'Precious metals (Pt, Pd) credit in concentrate',
      'Complete assay: Ni, Cu, Co, Pt, Pd, Au, Fe, S',
      'Severe climate operations (-40°C winter)',
      'Heated buildings and equipment shelters',
      'Underground refuge chambers at 500m intervals',
      'Seismic monitoring for rockbursts',
      'Ground freezing for shaft stability',
      'Workforce operates year-round shifts',
      'Production rate: 3-5 million tons ore per year',
      'Nickel recovery: 85-90% in concentrate'
    ]
  },

  'rutile-ore': {
    title: 'Rutile Ore (Titanium Dioxide)',
    company: 'Iluka Resources / Rio Tinto',
    country: 'Australia',
    selling_price: 0.95,
    distance: 5,
    inputs: [
      { name: 'Dredge Mining', cost: 0.18, link: 'bucket-dredge' },
      { name: 'Mineral Separation', cost: 0.12, link: 'mineral-processing' }
    ],
    steps: [
      'Rutile (TiO2) occurs in heavy mineral sands',
      'Ancient beach deposits containing 1-5% heavy minerals',
      'Floating dredge excavates unconsolidated sand',
      'Dredge pumps 3,000 tons per hour slurry',
      'Wet screening separates >1mm oversize',
      'Spiral concentrators for gravity separation',
      'Heavy minerals (SG >2.9) concentrate in inner spirals',
      'Rutile specific gravity: 4.2',
      'Primary concentrate contains 40-60% heavy minerals',
      'Magnetic separation removes ilmenite (magnetic)',
      'High-intensity magnets (15,000 gauss)',
      'Rutile non-magnetic, separated from ilmenite',
      'Electrostatic separation uses conductivity differences',
      'Conductive minerals (ilmenite, magnetite) removed',
      'Non-conductive rutile and zircon separated',
      'Gravity tables provide final upgrade',
      'Rutile concentrate: 94-96% TiO2',
      'Zircon separated as co-product',
      'Dry screening classifies by size',
      'Optical sorting removes impurities',
      'Packaged in 1-ton bulk bags',
      'Quality control for TiO2, Fe2O3, Cr2O3',
      'Chromium content critical (<0.1% for chloride process)',
      'Tailings (95% of feed) returned to pit',
      'Progressive rehabilitation behind dredge',
      'Topsoil replaced, contoured to original',
      'Native vegetation planted immediately',
      'Water management in closed circuit',
      'Wildlife corridors maintained through lease',
      'Production rate: 200,000 tons rutile per year',
      'Mine advances 1-2 km per year',
      'Full rehabilitation achieved within 2 years',
      'Monitoring of rehabilitated land for 5 years',
      'Workforce: 150-200 personnel',
      'Highly automated dredge operation'
    ]
  },

  'uranium-ore': {
    title: 'Uranium Ore',
    company: 'Cameco / Kazatomprom',
    country: 'Kazakhstan',
    selling_price: 0.08,
    distance: 5,
    inputs: [
      { name: 'In-Situ Leaching', cost: 0.015, link: 'heap-leach' },
      { name: 'Pumping Equipment', cost: 0.01, link: 'submersible-pump' }
    ],
    steps: [
      'Roll-front uranium deposits in sandstone aquifers',
      'Typical grade: 0.03-0.1% U3O8',
      'In-situ leaching (ISL) method avoids surface mining',
      'Exploration drilling on 50m grid spacing',
      'Ore body delineation with geophysical logging',
      'Well field pattern designed (injection and recovery wells)',
      'Injection wells drilled on 20-40m spacing',
      'Recovery wells in center of patterns',
      'Monitor wells surround well field',
      'Baseline groundwater quality established',
      'Lixiviant prepared: sulfuric acid + oxidizer',
      'Acid concentration: 1-5 g/L H2SO4',
      'Oxidizer: hydrogen peroxide or oxygen',
      'Injection at 100-200 liters per minute per well',
      'Uranium dissolves: U4+ → U6+ in acidic oxidizing solution',
      'Solution percolates through sandstone ore',
      'Pregnant solution recovered from extraction wells',
      'Uranium concentration: 20-200 mg/L',
      'Ion exchange plant on surface',
      'Strong-base anion resin captures uranyl ions',
      'Resin eluted with chloride or sulfate solution',
      'Uranium precipitated with hydrogen peroxide or ammonia',
      'Yellow cake (U3O8) product filtered and dried',
      'Purity: 70-90% U3O8',
      'Packaged in 200-liter drums',
      'Spent lixiviant treated and re-injected',
      'Water balance maintained (no net extraction)',
      'Monitor wells checked weekly for excursions',
      'Well field restoration after depletion',
      'Groundwater restoration with reducing agents',
      'Post-mining monitoring for 5-10 years',
      'Radiation monitoring of workers (dosimetry)',
      'Radon gas monitoring in plant buildings',
      'Production: 2,000-5,000 tons U3O8 per year',
      'Low environmental footprint vs conventional mining',
      'Automated process control and monitoring'
    ]
  }
};

for (const [slug, data] of Object.entries(oreData)) {
  if (!fs.existsSync(`/Users/rushant/World-Research/content/pages/${slug}.md`)) {
    writePage(slug, data);
    generated++;
    if (generated % 10 === 0) console.log(`  ${generated} pages generated...`);
  }
}

console.log(`\n✓ Completed ore pages (${generated} new pages)\n`);
module.exports = { writePage };
