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

const pages = {
  'acid-leach': {
    title: 'Acid Leaching Process',
    company: 'Various Mining Operations',
    country: 'Global',
    selling_price: 35.00,
    distance: 6,
    inputs: [
      { name: 'Sulfuric Acid', cost: 12.00, link: 'sulfur' },
      { name: 'Agitation Tanks', cost: 15.00, link: 'chemical-facility' }
    ],
    steps: [
      'Crushed ore fed to agitated leach tanks',
      'Ore ground to 80% passing 75 microns',
      'Sulfuric acid added at 10-50 g/L concentration',
      'Temperature maintained at 40-90°C',
      'Oxygen or air sparging for oxidation',
      'Metal sulfides oxidized to metal sulfates',
      'Copper: CuS + 2O2 + H2SO4 → CuSO4 + S + H2O',
      'Zinc: ZnS + 2O2 → ZnSO4',
      'Nickel and cobalt similarly oxidized',
      'Residence time: 4-24 hours',
      'Multiple tanks in series for staged leaching',
      'pH controlled at 1.5-3.0',
      'Oxidation-reduction potential monitored',
      'Agitator speed: 40-80 RPM',
      'Rubber or polymer tank linings',
      'Temperature control via steam injection or heat exchange',
      'Pregnant leach solution (PLS) contains dissolved metals',
      'Typical PLS: 2-10 g/L copper or nickel',
      'Solid-liquid separation via thickeners',
      'Counter-current decantation (CCD) circuit',
      'Three to six thickener stages',
      'Wash water added at final stage',
      'Clarified PLS to solvent extraction or electrowinning',
      'Leach residue to tailings',
      'Acid consumption: 20-100 kg H2SO4 per ton ore',
      'Metal recovery: 85-95%',
      'Residue neutralized with lime',
      'Neutralized tailings to storage facility',
      'Off-gas scrubbing for SO2 removal',
      'Process control via online analyzers',
      'XRF or atomic absorption for metal content',
      'Automated pH and ORP control',
      'Tank inspection for corrosion',
      'Agitator maintenance every 6 months',
      'Safety: acid handling procedures',
      'PPE: face shields, acid-resistant gloves',
      'Emergency eyewash and shower stations',
      'Spill containment and neutralization materials'
    ]
  },

  'chlorine-production': {
    title: 'Chlorine Production',
    company: 'Olin / Occidental Chemical',
    country: 'United States',
    selling_price: 0.35,
    distance: 5,
    inputs: [
      { name: 'Salt (NaCl)', cost: 0.08, link: 'raw-materials' },
      { name: 'Electricity', cost: 0.15, link: 'electricity' }
    ],
    steps: [
      'Brine preparation from salt',
      'Salt dissolved in water to 25-28% concentration',
      'Brine purification removes calcium and magnesium',
      'Addition of sodium carbonate and caustic',
      'Settling tank removes precipitates',
      'Filtered brine to electrolysis cells',
      'Membrane cell technology (modern plants)',
      'Anode: titanium coated with ruthenium oxide',
      'Cathode: nickel or stainless steel',
      'Ion exchange membrane separates chambers',
      'Anolyte: brine (NaCl solution)',
      'Catholyte: caustic soda (NaOH solution)',
      'Applied voltage: 3-4 volts per cell',
      'Cell temperature: 85-95°C',
      'Anode reaction: 2Cl⁻ → Cl2 + 2e⁻',
      'Cathode reaction: 2H2O + 2e⁻ → H2 + 2OH⁻',
      'Overall: 2NaCl + 2H2O → Cl2 + H2 + 2NaOH',
      'Chlorine gas exits from anode chamber',
      'Hydrogen gas exits from cathode chamber',
      'Caustic soda solution concentrated',
      'Chlorine gas cooled to condense water',
      'Drying chlorine with concentrated sulfuric acid',
      'Or using titanium heat exchangers',
      'Dry chlorine compressed to 2-8 bar',
      'Liquefaction at -34°C at 1 atm',
      'Or pressure liquefaction at 6-8 bar, 20°C',
      'Liquid chlorine storage in steel vessels',
      'Hydrogen used as fuel or chemical feedstock',
      'Caustic soda evaporated to 50% concentration',
      'Current efficiency: 95-97%',
      'Energy consumption: 2,500-3,000 kWh per ton Cl2',
      'Membrane life: 3-5 years',
      'Anode coating replacement every 5-10 years',
      'Safety: chlorine leak detection systems',
      'Scrubbers with caustic to neutralize leaks',
      'Personnel PPE: full face respirators',
      'Emergency response plan for chlorine release',
      'Plant capacity: 100-1,000 tons Cl2 per day'
    ]
  },

  'claus-process': {
    title: 'Claus Process Equipment',
    company: 'Linde / Air Liquide',
    country: 'Germany',
    selling_price: 25.00,
    distance: 6,
    inputs: [
      { name: 'Reactor Vessels', cost: 10.00, link: 'steel-raw' },
      { name: 'Catalyst', cost: 8.00, link: 'raw-materials' }
    ],
    steps: [
      'Thermal reactor refractory-lined',
      'Combustion chamber operates at 1,000-1,400°C',
      'One-third of H2S burned with air',
      'Reaction: H2S + 1.5O2 → SO2 + H2O',
      'Stoichiometric ratio H2S:SO2 = 2:1 maintained',
      'Waste heat boiler recovers heat',
      'Steam generated at 40-60 bar',
      'Gas cooled to 200-350°C for catalytic stage',
      'First catalytic converter',
      'Alumina catalyst (activated Al2O3)',
      'Catalyst bed depth: 0.5-1.5 meters',
      'Claus reaction: 2H2S + SO2 → 3S + 2H2O',
      'Equilibrium conversion ~70% at 250°C',
      'Sulfur condenser cools gas to 155°C',
      'Molten sulfur separates and drains',
      'Second catalytic converter',
      'Reheater brings gas to 220-250°C',
      'Additional conversion to sulfur',
      'Second sulfur condenser',
      'Third catalytic stage (optional)',
      'Overall sulfur recovery: 95-97% (3 stages)',
      'Tail gas treatment for >99% recovery',
      'Hydrogenation converts all sulfur species to H2S',
      'Amine absorption captures remaining H2S',
      'Concentrated H2S returned to Claus plant',
      'Tail gas incinerator before stack discharge',
      'SO2 emissions <250 ppm',
      'Catalyst life: 3-5 years',
      'Catalyst poisoning by hydrocarbons or ammonia',
      'Sulfur product purity: 99.5-99.9%',
      'Degassing removes dissolved H2S',
      'Filtration removes catalyst fines',
      'Liquid sulfur storage at 130-145°C',
      'Trace heat maintains liquidity',
      'Solidification system for transport',
      'Process control automation',
      'Oxygen analyzer controls air-to-acid-gas ratio',
      'Temperature control via bypasses',
      'Safety: H2S and SO2 monitoring'
    ]
  },

  'chemical-facility': {
    title: 'Chemical Processing Facility',
    company: 'Various Chemical Companies',
    country: 'Global',
    selling_price: 850.00,
    distance: 6,
    inputs: [
      { name: 'Steel Structures', cost: 280.00, link: 'steel-raw' },
      { name: 'Process Equipment', cost: 320.00, link: 'raw-materials' },
      { name: 'Instrumentation', cost: 150.00, link: 'mining-operations' }
    ],
    steps: [
      'Site selection based on raw material proximity',
      'Geotechnical investigation of foundation soils',
      'Environmental permit application and approval',
      'Process design and engineering',
      'Process flow diagrams (PFDs) developed',
      'Piping and instrumentation diagrams (P&IDs)',
      'Equipment specifications written',
      'Materials of construction selected',
      'Corrosion-resistant alloys for aggressive chemicals',
      'Civil works: foundations and structures',
      'Reactor vessels fabricated from stainless steel or alloys',
      'Pressure vessels designed to ASME code',
      'Heat exchangers: shell-and-tube or plate type',
      'Distillation columns with trays or packing',
      'Absorption towers for gas treatment',
      'Storage tanks for raw materials and products',
      'Pumps: centrifugal for clean fluids, positive displacement for viscous',
      'Compressors for gas handling',
      'Piping systems: stainless steel, PTFE-lined, or plastic',
      'Valves: control, isolation, safety relief',
      'Instrumentation: flow, pressure, temperature, level',
      'Analytical instruments: pH, conductivity, composition',
      'Distributed control system (DCS)',
      'Programmable logic controllers (PLCs)',
      'Safety instrumented systems (SIS)',
      'Fire and gas detection systems',
      'Emergency shutdown (ESD) systems',
      'Cooling water system',
      'Chilled water or refrigeration',
      'Steam generation and distribution',
      'Compressed air system',
      'Nitrogen generation for inerting',
      'Electrical substation and distribution',
      'Waste treatment facility',
      'Effluent neutralization',
      'Scrubbers for off-gas treatment',
      'Flare stack for emergency relief',
      'Laboratory for quality control',
      'Control room with operator stations',
      'Maintenance workshop',
      'Warehouse for spare parts',
      'Administrative offices',
      'Safety equipment: showers, eyewash, fire extinguishers',
      'Personal protective equipment (PPE) stations',
      'Training facility for operators',
      'Commissioning and startup',
      'Performance testing',
      'Operator training programs',
      'Continuous improvement initiatives',
      'Regulatory compliance audits'
    ]
  },

  'chemical-extraction': {
    title: 'Chemical Extraction Process',
    company: 'BASF / Dow Chemical',
    country: 'Germany',
    selling_price: 45.00,
    distance: 6,
    inputs: [
      { name: 'Solvent', cost: 15.00, link: 'raw-materials' },
      { name: 'Extraction Equipment', cost: 18.00, link: 'chemical-facility' }
    ],
    steps: [
      'Feed preparation: grinding or dissolution',
      'Solvent selection based on selectivity',
      'Organic solvents: hexane, toluene, methyl ethyl ketone',
      'Aqueous extraction: pH-dependent',
      'Mixer-settler extraction',
      'Mixing stage: intensive agitation',
      'Residence time: 2-10 minutes',
      'Phase separation in settling tank',
      'Organic and aqueous phases separate by density',
      'Settling time: 10-30 minutes',
      'Interface level control',
      'Extract phase contains desired component',
      'Raffinate phase is depleted feed',
      'Counter-current extraction for efficiency',
      'Multiple stages increase recovery',
      '3-6 stages typical',
      'Solvent-to-feed ratio optimized',
      'Usually 1:1 to 5:1',
      'Column extractors: packed or pulsed',
      'Packed column with structured packing',
      'Pulsed column with reciprocating flow',
      'Centrifugal extractors for fast separation',
      'Residence time reduced to seconds',
      'High throughput in compact unit',
      'Solvent recovery by distillation',
      'Distillation column separates solvent from product',
      'Solvent recycled to extraction',
      'Make-up solvent added for losses',
      'Product purification',
      'Crystallization or further distillation',
      'Solvent losses: 0.1-1% of flow',
      'Extraction efficiency: 90-99%',
      'Temperature control affects selectivity',
      'Cooling or heating as required',
      'Materials: stainless steel or glass-lined',
      'Corrosion considerations',
      'Safety: flammable solvent handling',
      'Vapor recovery systems',
      'Inert atmosphere (nitrogen blanketing)',
      'Fire protection systems',
      'Process control automation',
      'Online analyzers for composition',
      'Density and interface level sensors',
      'Flow control of phases',
      'Environmental compliance',
      'Solvent emission controls',
      'Waste minimization strategies'
    ]
  },

  'cryogenic-distillation': {
    title: 'Cryogenic Distillation',
    company: 'Linde / Air Products',
    country: 'Germany',
    selling_price: 125.00,
    distance: 6,
    inputs: [
      { name: 'Distillation Column', cost: 55.00, link: 'steel-raw' },
      { name: 'Refrigeration System', cost: 45.00, link: 'chemical-facility' }
    ],
    steps: [
      'Air separation is primary application',
      'Air compressed to 5-10 bar',
      'Pre-cooling with chilled water',
      'Purification removes CO2 and moisture',
      'Molecular sieve adsorbers',
      'Switchable beds for regeneration',
      'Main heat exchanger cools air to -170°C',
      'Turbo-expander further cools and provides refrigeration',
      'Air enters lower distillation column',
      'Lower column operates at 5-6 bar',
      'Nitrogen (BP -196°C) exits top',
      'Oxygen-enriched liquid (30-40% O2) at bottom',
      'Upper column operates at 1.3 bar',
      'Feed from lower column reboiler',
      'Nitrogen product from top (99.99% purity)',
      'Oxygen product from bottom (99.5% purity)',
      'Argon sidestream at middle (crude argon column)',
      'Argon BP -186°C between O2 and N2',
      'Reboilers use nitrogen condensation heat',
      'Heat integration minimizes energy',
      'Product warming in heat exchangers',
      'Cold products cool incoming air',
      'Liquid nitrogen storage at -196°C',
      'Vacuum-insulated tanks',
      'Liquid oxygen storage at -183°C',
      'Safety: oxygen fire hazards',
      'Gaseous products via vaporizers',
      'Pressure swing for delivery pressure',
      'Purity specifications met',
      'Nitrogen: <5 ppm O2',
      'Oxygen: <5 ppm N2',
      'Production rates: 100-3,000 tons O2 per day',
      'Energy consumption: 0.4-0.5 kWh per Nm³ O2',
      'Plant availability: >95%',
      'Cryogenic pumps for liquid handling',
      'Instrumentation: temperature, pressure, flow, composition',
      'Distributed control system',
      'Automated startup and shutdown sequences',
      'Safety relief systems',
      'Cold box insulated with perlite powder',
      'Vacuum-jacketed piping for cryogenic liquids',
      'Maintenance: molecular sieve change every 5 years',
      'Heat exchanger inspection every 3-5 years',
      'Turbo-expander overhaul every 3 years',
      'Continuous monitoring for efficiency',
      'Optimization of column reflux ratios'
    ]
  },

  'distillation-equipment': {
    title: 'Distillation Equipment',
    company: 'Sulzer / Koch-Glitsch',
    country: 'Switzerland',
    selling_price: 95.00,
    distance: 6,
    inputs: [
      { name: 'Steel Column Shell', cost: 38.00, link: 'steel-raw' },
      { name: 'Internals (Trays or Packing)', cost: 32.00, link: 'raw-materials' }
    ],
    steps: [
      'Column shell fabricated from carbon or stainless steel',
      'Diameter: 0.5-10 meters',
      'Height: 5-60 meters',
      'Wall thickness per pressure design',
      'ASME pressure vessel code compliance',
      'Column type: tray or packed',
      'Tray columns: sieve, valve, or bubble cap trays',
      'Tray spacing: 0.3-1.0 meters',
      'Number of trays: 10-100',
      'Tray efficiency: 60-90%',
      'Downcomers for liquid flow between trays',
      'Packed columns: random or structured packing',
      'Random packing: ceramic or metal saddles, rings',
      'Structured packing: metal sheets with corrugations',
      'Packing height: 3-20 meters',
      'Packing efficiency: HETP 0.3-1.0 meters',
      'Liquid distributor at top',
      'Ensures even liquid distribution',
      'Redistributors at intervals in packing',
      'Vapor distributor at bottom',
      'Reboiler provides heat',
      'Thermosiphon, kettle, or forced circulation type',
      'Steam or hot oil heating medium',
      'Condenser at top cools vapor',
      'Total or partial condensation',
      'Coolant: water, air, or refrigerant',
      'Reflux drum collects condensate',
      'Reflux ratio controls separation',
      'Reflux pump returns liquid to column',
      'Product drawoff at various points',
      'Side streams for intermediate components',
      'Column pressure control',
      'Vacuum operation for heat-sensitive materials',
      'Pressure operation for low-boiling materials',
      'Temperature profile monitoring',
      'Thermocouples at multiple points',
      'Composition analyzers (GC or online)',
      'Control system adjusts reflux, heat input',
      'Flooding and weeping prevention',
      'Turndown ratio: 40-100%',
      'Energy efficiency optimization',
      'Heat integration with other processes',
      'Column insulation to minimize losses',
      'Materials selection for corrosion resistance',
      'Periodic inspection and cleaning',
      'Tray or packing fouling removal',
      'Typical campaign length: 1-3 years between turnarounds'
    ]
  },

  'calcination': {
    title: 'Calcination Process',
    company: 'FLSmidth / Metso',
    country: 'Denmark',
    selling_price: 18.00,
    distance: 6,
    inputs: [
      { name: 'Rotary Kiln', cost: 8.00, link: 'mining-operations' },
      { name: 'Fuel', cost: 5.00, link: 'diesel' }
    ],
    steps: [
      'Calcination removes volatile components by heating',
      'Common applications: limestone, alumina, kaolin',
      'Rotary kiln most common equipment',
      'Kiln shell: steel cylinder 3-6m diameter, 60-100m long',
      'Refractory lining protects shell',
      'Kiln incline: 2-4 degrees',
      'Rotation speed: 0.5-2 RPM',
      'Material fed at upper end',
      'Residence time: 30-90 minutes',
      'Kiln heated by burner at discharge end',
      'Fuels: natural gas, coal, oil, or waste fuels',
      'Flame temperature: 1,400-2,000°C',
      'Counter-current flow: hot gas meets feed',
      'Limestone calcination: CaCO3 → CaO + CO2',
      'Decomposition temperature: 900-1,000°C',
      'Alumina calcination: Al(OH)3 → Al2O3 + H2O',
      'Calcination temperature: 1,100-1,200°C',
      'Product temperature: 900-1,300°C at discharge',
      'Hot product enters rotary cooler',
      'Cooling air recovers heat for combustion',
      'Cooled product: 100-200°C',
      'Product storage in silos',
      'Exhaust gas treatment',
      'Cyclones remove dust',
      'Baghouse filter for fine particulate',
      'CO2 emission significant (limestone calcination)',
      'Kiln drive: motor and gearbox',
      'Riding rings support shell on rollers',
      'Thrust rollers control axial movement',
      'Kiln alignment critical',
      'Temperature monitoring along length',
      'Infrared scanners detect hot spots',
      'Shell hot spot indicates refractory failure',
      'Refractory maintenance during shutdowns',
      'Typical reline interval: 1-3 years',
      'Fuel consumption: 1,000-1,500 kcal per kg product',
      'Production rate: 100-1,000 tons per day per kiln',
      'Energy efficiency: 60-70%',
      'Process control optimizes fuel use',
      'Product quality: reactivity, surface area, residual volatiles'
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

console.log(`\n✓ Batch 5 (Chemical Processing) complete: ${count} pages generated`);
