#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Load graph data
const graphData = JSON.parse(fs.readFileSync('static/data/graph.json', 'utf-8'));

// Build maps
const nodeMap = new Map(graphData.nodes.map(n => [n.id, n]));
const adjacency = new Map();
graphData.edges.forEach(edge => {
  if (!adjacency.has(edge.source)) {
    adjacency.set(edge.source, []);
  }
  adjacency.get(edge.source).push({
    target: edge.target,
    cost: edge.cost
  });
});

// Load missing list
const missingIds = fs.readFileSync('/tmp/distance4-missing.txt', 'utf-8')
  .split('\n')
  .filter(line => line.trim().length > 0);

console.log(`Generating ${missingIds.length} Distance 4 pages...`);

let generated = 0;
let skipped = 0;

missingIds.forEach((id, index) => {
  const node = nodeMap.get(id);

  if (!node) {
    console.log(`Skip: ${id} (not in graph)`);
    skipped++;
    return;
  }

  const filePath = path.join('content/pages', `${id}.md`);

  if (fs.existsSync(filePath)) {
    console.log(`Skip: ${id} (already exists)`);
    skipped++;
    return;
  }

  // Get inputs
  const inputs = adjacency.get(id) || [];

  // Build frontmatter
  let frontmatter = `---
title: "${node.title}"
company: "${node.company || 'Various Suppliers'}"
country: "${node.country || 'Global'}"
selling_price: ${node.price ? node.price.toFixed(2) : '0.00'}
`;

  if (inputs.length > 0) {
    frontmatter += 'inputs:\n';
    inputs.forEach(input => {
      const inputNode = nodeMap.get(input.target);
      const inputName = inputNode ? inputNode.title : input.target;
      frontmatter += `  - name: "${inputName}"
    cost: ${input.cost.toFixed(2)}
    link: "${input.target}"
`;
    });
  }

  // Calculate value created
  const totalInputCost = inputs.reduce((sum, inp) => sum + inp.cost, 0);
  const valueCreated = node.price ? (node.price - totalInputCost) : 0;

  frontmatter += `value_created: ${valueCreated.toFixed(2)}
---

`;

  // Generate manufacturing process based on category
  const steps = generateSteps(id, node.title, inputs);

  const content = frontmatter + steps.join('\n');

  fs.writeFileSync(filePath, content, 'utf-8');
  generated++;

  if (generated % 50 === 0) {
    console.log(`Progress: ${generated}/${missingIds.length} (${Math.round(generated/missingIds.length*100)}%)`);
  }
});

console.log(`\nComplete: ${generated} generated, ${skipped} skipped`);

function generateSteps(id, title, inputs) {
  const steps = [];

  // Distance 4 pages are raw materials, basic equipment, fundamental processes
  // Categories: raw materials, mining/extraction, basic manufacturing equipment, utilities

  if (id.includes('crystal') || id.includes('ingot') || id.includes('seed')) {
    // Crystal growing process
    return generateCrystalSteps(title, inputs);
  } else if (id.includes('mine') || id.includes('mining') || id.includes('ore') || id.includes('deposit')) {
    // Mining operations
    return generateMiningSteps(title, inputs);
  } else if (id.includes('furnace') || id.includes('oven') || id.includes('kiln')) {
    // Industrial furnace manufacturing
    return generateFurnaceSteps(title, inputs);
  } else if (id.includes('pump') || id.includes('valve') || id.includes('compressor')) {
    // Mechanical equipment
    return generateMechanicalSteps(title, inputs);
  } else if (id.includes('gas') || id.includes('liquid') || id.includes('chemical')) {
    // Chemical processing
    return generateChemicalSteps(title, inputs);
  } else if (id.includes('worker') || id.includes('labor') || id.includes('technician') || id.includes('engineer')) {
    // Workforce/training
    return generateWorkforceSteps(title, inputs);
  } else if (id.includes('power') || id.includes('electricity') || id.includes('utility')) {
    // Utilities
    return generateUtilitySteps(title, inputs);
  } else if (id.includes('tool') || id.includes('machine') || id.includes('equipment')) {
    // Tool/equipment manufacturing
    return generateToolSteps(title, inputs);
  } else {
    // Generic manufacturing for Distance 4
    return generateGenericD4Steps(title, inputs);
  }
}

function generateCrystalSteps(title, inputs) {
  return [
    `1. Prepare high-purity raw material feedstock for ${title} crystal growth process`,
    `2. Load feedstock into graphite crucible with precise weight measurement`,
    `3. Position seed crystal holder in vertical pulling mechanism with alignment`,
    `4. Install seed crystal onto holder ensuring proper crystallographic orientation`,
    `5. Lower crucible into vacuum chamber of Czochralski crystal growing furnace`,
    `6. Evacuate chamber to base pressure of 1×10⁻⁶ torr removing atmospheric gases`,
    `7. Backfill chamber with ultra-pure argon maintaining slight positive pressure`,
    `8. Energize RF induction heater coil surrounding graphite susceptor`,
    `9. Ramp furnace temperature to melting point of material at controlled 50°C/hour rate`,
    `10. Monitor melt temperature using optical pyrometer calibrated to ±2°C accuracy`,
    `11. Stabilize melt temperature at optimal growth point (typically melting point +10°C)`,
    `12. Dip seed crystal into molten material making initial contact with melt surface`,
    `13. Establish temperature gradient creating thin neck region preventing dislocations`,
    `14. Slowly pull seed crystal upward at 1-5 mm/hour while rotating at 5-15 RPM`,
    `15. Carefully control melt temperature maintaining constant undercooling conditions`,
    `16. Monitor crystal diameter using optical diameter sensor with PID feedback control`,
    `17. Adjust pulling rate and heater power maintaining target crystal diameter`,
    `18. Continue steady-state crystal growth for 24-72 hours depending on target length`,
    `19. Monitor crystalline quality using real-time X-ray diffraction analysis`,
    `20. Gradually taper crystal diameter at end of growth process`,
    `21. Lift finished crystal fully clear of melt surface`,
    `22. Cool crystal slowly in controlled argon atmosphere preventing thermal shock`,
    `23. Reduce temperature at 20°C/hour rate to room temperature over 48 hours`,
    `24. Remove crystal from growth chamber after complete cooldown`,
    `25. Inspect crystal boule for visual defects, cracks, or discoloration`,
    `26. Measure crystal diameter along length verifying dimensional specifications`,
    `27. Test crystal resistivity using four-point probe at multiple locations`,
    `28. Verify crystallographic orientation using X-ray diffraction Laue pattern`,
    `29. Cut test wafer from crystal and measure dislocation density using etch pit method`,
    `30. Perform interstitial oxygen measurement using FTIR spectroscopy`,
    `31. Grind crystal boule to precise diameter using centerless grinding with diamond wheels`,
    `32. Flat grind primary orientation flat and secondary flat per SEMI standards`,
    `33. Clean crystal surface removing grinding slurry and particulate contamination`,
    `34. Inspect flats for dimensional accuracy using coordinate measuring machine`,
    `35. Laser mark crystal ID code on seed end for traceability`,
    `36. Package crystal in sealed container with desiccant for shipment to wafer slicing`,
    `37. Generate crystal growth report documenting all process parameters and test results`,
    `38. Update inventory system with crystal specifications and quality data`
  ];
}

function generateMiningSteps(title, inputs) {
  return [
    `1. Conduct geological survey identifying ${title} deposit location and extent`,
    `2. Obtain mining permits and environmental impact assessments from authorities`,
    `3. Clear surface vegetation and topsoil from mining site area`,
    `4. Excavate overburden using hydraulic excavators removing non-ore material`,
    `5. Establish haul roads for heavy mining equipment access to extraction zones`,
    `6. Drill blast holes in ore body using rotary blast hole drills`,
    `7. Load blast holes with ANFO explosive charges and detonators`,
    `8. Execute controlled blasting sequence fragmenting ore body for excavation`,
    `9. Allow blast zone to clear ensuring safety before equipment approach`,
    `10. Load blasted ore into haul trucks using front-end loaders with 10m³ buckets`,
    `11. Transport ore to primary crushing station via 100-ton capacity haul trucks`,
    `12. Dump ore into primary jaw crusher reducing particle size to <300mm`,
    `13. Convey crushed ore to secondary cone crusher for further size reduction`,
    `14. Screen crushed ore separating oversize material for additional crushing`,
    `15. Transport crushed ore to grinding mill for fine size reduction`,
    `16. Grind ore in ball mill with steel grinding media producing <100μm particles`,
    `17. Classify ground ore using hydrocyclone separators`,
    `18. Process ore slurry through flotation cells concentrating valuable minerals`,
    `19. Add flotation reagents (collectors, frothers) optimizing mineral separation`,
    `20. Skim froth containing concentrated minerals from flotation cell surface`,
    `21. Pump concentrate slurry to thickener tanks for dewatering`,
    `22. Filter thickened concentrate using pressure filters or vacuum filters`,
    `23. Dry filtered concentrate in rotary dryer at 150°C`,
    `24. Sample dried concentrate for assay analysis determining grade and recovery`,
    `25. Perform XRF analysis verifying concentrate composition meets specifications`,
    `26. Store concentrate in covered storage building protecting from weather`,
    `27. Manage tailings slurry pumping to tailings storage facility`,
    `28. Monitor tailings dam stability and water quality per environmental regulations`,
    `29. Treat process water for reuse in mineral processing operations`,
    `30. Maintain water balance minimizing fresh water consumption`,
    `31. Inspect mining equipment performing preventive maintenance`,
    `32. Replace worn excavator bucket teeth, crusher liners, grinding mill liners`,
    `33. Monitor equipment operating hours scheduling major overhauls`,
    `34. Sample groundwater monitoring wells checking for contamination`,
    `35. Test surface water discharge ensuring compliance with permits`,
    `36. Document daily ore production tonnage and grade statistics`,
    `37. Update mine plan based on exploration drilling results and ore reserve estimates`,
    `38. Package concentrate in bulk bags or containers for shipment to refining facilities`,
    `39. Load concentrate onto rail cars or trucks for transport to customers`,
    `40. Perform progressive reclamation of mined-out areas per closure plan`
  ];
}

function generateFurnaceSteps(title, inputs) {
  return [
    `1. Review engineering specifications for ${title} design requirements`,
    `2. Fabricate furnace shell from stainless steel plate using welded construction`,
    `3. Machine precision mounting flanges on furnace chamber ends`,
    `4. Install refractory lining inside furnace chamber for thermal insulation`,
    `5. Cure refractory material using controlled heating schedule preventing cracking`,
    `6. Install heating elements (resistance, induction, or radiant) in furnace chamber`,
    `7. Wire heating elements to power control system with proper electrical isolation`,
    `8. Install temperature sensors (thermocouples or pyrometers) at measurement points`,
    `9. Mount atmosphere control system including gas inlets and exhaust manifolds`,
    `10. Install vacuum pumping system if furnace requires low-pressure operation`,
    `11. Fabricate furnace door or loading mechanism with precision sealing surfaces`,
    `12. Install door actuation system (pneumatic, hydraulic, or motorized)`,
    `13. Apply high-temperature gasket material to door sealing surfaces`,
    `14. Install cooling water jackets on furnace shell and penetrations`,
    `15. Connect cooling water supply with flow meters and temperature monitoring`,
    `16. Mount control panel containing temperature controllers and safety interlocks`,
    `17. Wire all sensors, heaters, and control devices per electrical schematic`,
    `18. Install emergency stop system with redundant safety circuits`,
    `19. Connect atmosphere gas supply lines with mass flow controllers`,
    `20. Install exhaust gas treatment system if hazardous gases are present`,
    `21. Perform hydrostatic test of cooling water system checking for leaks`,
    `22. Test door closure mechanism verifying proper seal compression`,
    `23. Perform vacuum leak test if furnace operates under vacuum`,
    `24. Calibrate temperature measurement system using certified standards`,
    `25. Perform temperature uniformity survey mapping thermal profile in chamber`,
    `26. Execute heating element burn-in procedure stabilizing resistance values`,
    `27. Test atmosphere control system verifying proper gas flow and composition`,
    `28. Validate temperature control system response and stability`,
    `29. Perform thermal cycling test running furnace through typical process cycles`,
    `30. Verify all safety interlocks function correctly preventing unsafe conditions`,
    `31. Test cooling system ensuring adequate heat removal at maximum power`,
    `32. Measure power consumption and efficiency at various operating conditions`,
    `33. Document all test results and calibration data in equipment qualification report`,
    `34. Apply equipment identification labels and safety warning placards`,
    `35. Create operating procedures documentation for end users`,
    `36. Package furnace for shipment protecting instrumentation and sealing surfaces`,
    `37. Arrange rigging and transportation to customer facility`,
    `38. Provide installation supervision and operator training at customer site`
  ];
}

function generateMechanicalSteps(title, inputs) {
  return [
    `1. Cast or machine main housing for ${title} from appropriate material`,
    `2. Machine precision bore for shaft and seal interfaces`,
    `3. Install main shaft using precision bearings for low friction operation`,
    `4. Mount impeller, rotor, or moving element onto shaft with secure fastening`,
    `5. Balance rotating assembly to minimize vibration per ISO standards`,
    `6. Install mechanical seals or packing to prevent leakage at shaft penetration`,
    `7. Assemble casing or housing components with precision alignment`,
    `8. Torque all fasteners to specified values using calibrated torque wrench`,
    `9. Install inlet and outlet connection flanges per specification`,
    `10. Apply gaskets or O-rings to sealing surfaces`,
    `11. Mount motor or driver coupling assembly to main shaft`,
    `12. Align coupling to within 0.05mm tolerance using dial indicators`,
    `13. Install bearing lubrication system with grease fittings or oil reservoir`,
    `14. Mount cooling system if required (cooling fins, water jacket, fan)`,
    `15. Install instrumentation (pressure sensors, temperature sensors, flow meters)`,
    `16. Wire instrumentation to terminal box with proper cable glands`,
    `17. Perform hydrostatic pressure test at 1.5× rated pressure for 30 minutes`,
    `18. Check for leaks at all joints, seals, and penetrations during pressure test`,
    `19. Perform functional test running unit at no-load conditions`,
    `20. Measure vibration levels using accelerometer at bearing locations`,
    `21. Monitor temperature rise during initial run-in period`,
    `22. Test at rated operating conditions verifying performance specifications`,
    `23. Measure flow rate, pressure, or other key performance parameters`,
    `24. Check mechanical seal leakage rate ensuring below specification limit`,
    `25. Verify bearing temperatures remain within acceptable operating range`,
    `26. Test emergency shutdown system if equipped`,
    `27. Perform endurance test running unit for 48 hours continuous operation`,
    `28. Inspect unit after endurance test checking for wear or degradation`,
    `29. Apply final paint or protective coating to external surfaces`,
    `30. Attach identification nameplate with specifications and serial number`,
    `31. Package unit in protective crate with shock mounting if required`,
    `32. Include spare parts kit, maintenance manual, and test certificates`,
    `33. Arrange shipment to customer with appropriate handling instructions`
  ];
}

function generateChemicalSteps(title, inputs) {
  return [
    `1. Receive raw material feedstocks for ${title} production`,
    `2. Verify feedstock purity using analytical testing (GC, HPLC, ICP)`,
    `3. Store raw materials in appropriate containers (glass, HDPE, stainless steel)`,
    `4. Charge reactor vessel with measured quantities of reactants`,
    `5. Purge reactor with inert gas (nitrogen or argon) removing oxygen`,
    `6. Heat reactor to target temperature using jacketed heating system`,
    `7. Monitor reaction temperature with calibrated thermocouples`,
    `8. Add catalyst or initiator initiating chemical reaction`,
    `9. Control reaction exotherm using cooling water or refrigeration`,
    `10. Monitor pressure buildup using pressure transmitter with high-pressure alarm`,
    `11. Sample reaction mixture periodically analyzing conversion by GC or HPLC`,
    `12. Continue reaction until target conversion reached (typically >95%)`,
    `13. Cool reaction mixture to safe temperature for downstream processing`,
    `14. Transfer reaction mixture to separation equipment (distillation, extraction)`,
    `15. Separate product from unreacted starting materials and byproducts`,
    `16. Purify product using distillation column with reflux ratio control`,
    `17. Collect product fraction at specified boiling range`,
    `18. Monitor product purity using online refractive index or density measurement`,
    `19. Further purify product using crystallization, adsorption, or filtration`,
    `20. Dry purified product using vacuum drying or nitrogen sparging`,
    `21. Filter product removing particulate contamination (0.45μm filter)`,
    `22. Sample final product for full analytical characterization`,
    `23. Perform identity testing (NMR, IR, MS) confirming molecular structure`,
    `24. Measure purity using GC or HPLC with external standards`,
    `25. Test for trace impurities (metals, moisture, residual solvents)`,
    `26. Verify product meets specification limits for all parameters`,
    `27. Measure physical properties (density, viscosity, boiling point, pH)`,
    `28. Package product in appropriate containers (drums, totes, cylinders)`,
    `29. Inert gas blanket on product if air-sensitive or moisture-sensitive`,
    `30. Label containers with product name, batch number, hazard warnings`,
    `31. Generate certificate of analysis documenting all test results`,
    `32. Store finished product in appropriate warehouse conditions`,
    `33. Treat waste streams and byproducts per environmental regulations`,
    `34. Dispose of hazardous waste through licensed waste contractor`,
    `35. Clean reactor and processing equipment for next production batch`,
    `36. Document batch production record with all process parameters`,
    `37. Release batch for shipment after QC approval`,
    `38. Ship product with SDS and transportation documentation`
  ];
}

function generateWorkforceSteps(title, inputs) {
  return [
    `1. Define job requirements and qualifications for ${title} position`,
    `2. Post job opening on employment websites and recruiting platforms`,
    `3. Review resumes and applications screening for minimum qualifications`,
    `4. Conduct initial phone interviews with qualified candidates`,
    `5. Schedule in-person interviews with hiring managers and team members`,
    `6. Assess technical skills through practical tests or problem-solving exercises`,
    `7. Check candidate references contacting previous employers`,
    `8. Verify educational credentials and professional certifications`,
    `9. Conduct background checks and drug screening per company policy`,
    `10. Extend job offer to selected candidate with compensation details`,
    `11. Complete new hire paperwork (I-9, W-4, direct deposit, benefits enrollment)`,
    `12. Issue employee ID badge, access cards, and personal protective equipment`,
    `13. Conduct new employee orientation covering company policies and safety rules`,
    `14. Assign workstation, tools, and computer equipment as needed`,
    `15. Provide initial job training on standard operating procedures`,
    `16. Shadow experienced worker learning hands-on job tasks and techniques`,
    `17. Review safety procedures specific to job tasks and work area`,
    `18. Train on equipment operation with emphasis on safe work practices`,
    `19. Demonstrate proficiency on job tasks under supervision of trainer`,
    `20. Pass written and practical assessments verifying job competency`,
    `21. Receive certification or qualification to perform job tasks independently`,
    `22. Participate in ongoing training programs maintaining skill level`,
    `23. Attend toolbox talks and safety meetings learning from incidents and best practices`,
    `24. Complete required annual training (safety, hazmat, forklift, confined space)`,
    `25. Receive performance reviews providing feedback and development opportunities`,
    `26. Participate in cross-training programs learning adjacent job functions`,
    `27. Attend technical seminars or workshops for professional development`,
    `28. Mentor new employees sharing knowledge and experience`,
    `29. Suggest process improvements based on hands-on experience`,
    `30. Maintain attendance and punctuality meeting company standards`,
    `31. Follow all company policies including code of conduct and ethics`,
    `32. Use personal protective equipment properly (safety glasses, gloves, hearing protection)`,
    `33. Report safety hazards or near-miss incidents to supervision`,
    `34. Participate in emergency drills (fire, evacuation, chemical spill)`,
    `35. Maintain clean and organized work area following 5S principles`,
    `36. Document work completed in logbooks, checklists, or computer systems`,
    `37. Collaborate with team members achieving production or project goals`,
    `38. Adapt to changing priorities and assignments as business needs evolve`
  ];
}

function generateUtilitySteps(title, inputs) {
  return [
    `1. Generate or acquire ${title} from primary source (power plant, well, supplier)`,
    `2. Transmit or transport utility to distribution network infrastructure`,
    `3. Monitor system pressure, voltage, or flow rate using instrumentation`,
    `4. Regulate utility quality maintaining specifications (voltage, pressure, purity)`,
    `5. Filter or treat utility removing contaminants or unwanted components`,
    `6. Store utility in buffer tanks, batteries, or reservoirs as needed`,
    `7. Distribute utility through piping, wiring, or ductwork to consumption points`,
    `8. Meter utility consumption at user connection points`,
    `9. Bill customers based on metered consumption and tariff rates`,
    `10. Maintain distribution infrastructure performing inspections and repairs`,
    `11. Replace worn components (valves, transformers, filters) on preventive schedule`,
    `12. Respond to outages or service interruptions restoring utility supply`,
    `13. Monitor system load and capacity ensuring adequate supply margin`,
    `14. Forecast demand patterns planning for peak usage periods`,
    `15. Implement load management during high-demand situations`,
    `16. Test backup systems (generators, redundant pumps) ensuring reliability`,
    `17. Calibrate meters and sensors maintaining measurement accuracy`,
    `18. Sample utility quality performing laboratory analysis`,
    `19. Adjust treatment processes maintaining specification compliance`,
    `20. Treat waste or exhaust streams before environmental discharge`,
    `21. Comply with regulatory requirements (emissions, water quality, safety codes)`,
    `22. Report to regulatory agencies providing required operational data`,
    `23. Inspect high-voltage equipment using thermography or partial discharge testing`,
    `24. Perform vegetation management along transmission corridors`,
    `25. Coordinate with emergency services during major outages or incidents`,
    `26. Implement cybersecurity measures protecting SCADA and control systems`,
    `27. Train operations staff on system procedures and emergency response`,
    `28. Maintain spare parts inventory for critical system components`,
    `29. Update system documentation reflecting as-built conditions`,
    `30. Invest in system upgrades improving capacity, efficiency, or reliability`
  ];
}

function generateToolSteps(title, inputs) {
  return [
    `1. Design ${title} using CAD software per engineering requirements`,
    `2. Select appropriate materials (tool steel, carbide, ceramics) for application`,
    `3. Procure raw material stock in required dimensions and grades`,
    `4. Cut raw material to rough dimensions using bandsaw or abrasive cutoff`,
    `5. Machine primary features using CNC milling center or turning center`,
    `6. Drill precision holes using drill press or CNC machine with pecking cycle`,
    `7. Ream holes to final size achieving tight diameter tolerance`,
    `8. Mill slots, pockets, and contours per CAD model geometry`,
    `9. Grind critical surfaces using surface grinder or cylindrical grinder`,
    `10. Achieve final dimension and surface finish (Ra 0.2μm typical)`,
    `11. Harden tool steel using heat treatment (austenitize and quench)`,
    `12. Quench in oil or polymer bath achieving target hardness (HRC 58-62)`,
    `13. Temper hardened steel reducing brittleness while maintaining hardness`,
    `14. Verify hardness using Rockwell hardness tester at multiple locations`,
    `15. Apply surface treatment (coating, plating, nitriding) if specified`,
    `16. Grind final geometry after heat treatment correcting distortion`,
    `17. Lap or polish critical surfaces achieving mirror finish if required`,
    `18. Inspect dimensions using CMM or precision measuring instruments`,
    `19. Verify geometric tolerances (flatness, parallelism, perpendicularity)`,
    `20. Check surface finish using profilometer`,
    `21. Deburr all edges removing sharp corners and machining artifacts`,
    `22. Clean tool removing cutting fluid, grinding swarf, and contamination`,
    `23. Apply corrosion preventive coating for storage and shipment`,
    `24. Mark tool with part number and specification using laser engraving`,
    `25. Perform functional test verifying tool operates per design intent`,
    `26. Package tool in protective case or wrapping preventing damage`,
    `27. Include calibration certificate or inspection report with shipment`,
    `28. Store tools in controlled environment preventing rust and degradation`
  ];
}

function generateGenericD4Steps(title, inputs) {
  const stepCount = 30 + Math.floor(Math.random() * 20);
  const steps = [];

  for (let i = 1; i <= stepCount; i++) {
    if (i === 1) {
      steps.push(`${i}. Receive raw materials and components for ${title} production`);
    } else if (i === 2) {
      steps.push(`${i}. Inspect incoming materials verifying specifications and quality`);
    } else if (i === 3) {
      steps.push(`${i}. Store materials in appropriate warehouse conditions`);
    } else if (i === 4) {
      steps.push(`${i}. Prepare production equipment and tooling for manufacturing`);
    } else if (i === 5) {
      steps.push(`${i}. Load materials into processing equipment`);
    } else if (i < stepCount - 10) {
      // Main processing steps
      const processes = [
        'Process materials using precision machinery with controlled parameters',
        'Monitor process parameters (temperature, pressure, speed, feed rate)',
        'Perform intermediate quality checks during production',
        'Adjust process settings optimizing quality and efficiency',
        'Machine components to specified dimensions using CNC equipment',
        'Assemble sub-components following standard work procedures',
        'Apply surface treatments or coatings as required',
        'Heat treat components achieving target material properties',
        'Perform non-destructive testing (visual, dimensional, functional)',
        'Clean parts removing process residues and contamination'
      ];
      steps.push(`${i}. ${processes[i % processes.length]}`);
    } else if (i < stepCount - 5) {
      // Testing phase
      steps.push(`${i}. Test finished product verifying performance specifications`);
    } else if (i < stepCount - 2) {
      // Final prep
      const final = [
        'Package product in appropriate containers with protective materials',
        'Label packages with product information and handling instructions',
        'Generate documentation (certificates, test reports, datasheets)'
      ];
      steps.push(`${i}. ${final[(i - stepCount + 5) % final.length]}`);
    } else if (i === stepCount - 1) {
      steps.push(`${i}. Store finished goods in warehouse awaiting shipment`);
    } else {
      steps.push(`${i}. Ship product to customers with appropriate logistics and tracking`);
    }
  }

  return steps;
}
