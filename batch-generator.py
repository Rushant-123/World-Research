#!/usr/bin/env python3
"""
Batch generator for Distance 4 manufacturing pages.
Generates 50-200 detailed, context-specific manufacturing steps per page.
"""

import os
import sys
import json

# Read pages list
with open('/tmp/d4-pages-to-generate.txt', 'r') as f:
    ALL_PAGES = [line.strip() for line in f if line.strip()]

def title_from_id(page_id):
    """Convert page ID to title."""
    return ' '.join(word.capitalize() for word in page_id.replace('-', ' ').split())

def estimate_price(page_id):
    """Estimate price based on category."""
    if 'gas' in page_id or page_id.endswith('-gas'):
        return 15.0
    elif 'ingot' in page_id or 'billet' in page_id:
        return 12.0
    elif 'machine' in page_id or 'equipment' in page_id or 'system' in page_id:
        return 45.0
    elif 'furnace' in page_id or 'reactor' in page_id:
        return 80.0
    elif 'controller' in page_id or 'ic' in page_id or 'chip' in page_id:
        return 8.0
    elif 'labor' in page_id or 'training' in page_id or 'workers' in page_id:
        return 0.0
    elif 'solvent' in page_id or 'chemical' in page_id or 'acid' in page_id:
        return 6.0
    elif 'film' in page_id or 'tape' in page_id or 'substrate' in page_id:
        return 4.0
    elif 'process' in page_id or 'production' in page_id:
        return 0.0
    else:
        return 8.0

def generate_content(page_id, batch_num, index_in_batch):
    """Generate complete page content."""

    title = title_from_id(page_id)
    price = estimate_price(page_id)

    # Determine category and generate steps
    pid = page_id.lower()
    steps = []

    print(f"[Batch {batch_num}] Generating {index_in_batch}/50: {page_id}")

    # Generate based on category - simplified for now with placeholder
    steps = generate_generic_steps(page_id, title)

    # Create frontmatter
    content = f"""---
title: "{title}"
company: "Various Manufacturers"
country: "Global"
selling_price: {price:.2f}
value_created: {price:.2f}
---

"""

    content += "\n\n".join(f"{i+1}. {step}" for i, step in enumerate(steps))

    return content

def generate_generic_steps(page_id, title):
    """Generate context-specific steps based on page type."""
    steps = []
    pid = page_id.lower()

    # This will be expanded with detailed logic for each category
    # For now, return a structured template

    if 'gas' in pid or pid.endswith('-gas'):
        steps = generate_gas_steps(page_id, title)
    elif 'solvent' in pid or 'acid' in pid or 'oil' in pid:
        steps = generate_liquid_chemical_steps(page_id, title)
    elif 'ingot' in pid or 'billet' in pid or 'metal' in pid:
        steps = generate_metal_steps(page_id, title)
    elif 'furnace' in pid or 'reactor' in pid or 'chamber' in pid:
        steps = generate_equipment_steps(page_id, title)
    else:
        steps = generate_component_steps(page_id, title)

    return steps

def generate_gas_steps(page_id, title):
    """Generate steps for specialty gas production."""
    return [
        f"Source raw materials required for {title} synthesis from qualified chemical suppliers",
        "Transport precursor chemicals to gas production facility in DOT-approved pressure vessels",
        "Receive and inspect incoming materials verifying purity certificates and chain of custody",
        "Store liquid precursors in stainless steel tanks with temperature control at 15-20°C",
        "Install gas synthesis reactor system with Hastelloy C-276 construction for corrosion resistance",
        "Design reactor for operating pressure up to 50 bar and temperature range -40°C to 400°C",
        "Connect precursor feed lines using electropolished 316L stainless steel tubing with orbital welding",
        "Install mass flow controllers on each gas feed line providing ±1% setpoint accuracy",
        "Implement automated process control system monitoring temperature, pressure, flow, and composition",
        "Purge synthesis system with ultra-high purity nitrogen reducing oxygen and moisture to <1 ppm",

        "Heat reactor to target synthesis temperature using PID-controlled heating jacket",
        "Introduce primary reactant gas through calibrated mass flow controller at specified flow rate",
        "Add secondary reactants in stoichiometric ratios calculated from balanced chemical equation",
        "Initiate synthesis reaction monitoring pressure rise indicating product formation",
        "Control reaction temperature within ±2°C of setpoint managing exothermic heat release",
        "Allow reaction to proceed until conversion exceeds 95% based on gas chromatography analysis",
        "Cool product gas stream to condense any unreacted liquid precursors for recycling",
        "Pass crude product gas through molecular sieve dryer removing moisture to <0.1 ppm",
        "Employ cryogenic distillation separating product gas from byproducts and impurities",
        "Achieve product purity >99.999% (5N) verified by gas chromatography-mass spectrometry",

        "Compress purified gas using diaphragm compressor avoiding contamination from lubricants",
        "Transfer compressed gas to high-pressure cylinders (2400 psi rated) manufactured per DOT-3AA specification",
        "Pre-evacuate cylinders to <10 millitorr using turbomolecular pump removing all atmospheric gases",
        "Passivate cylinder internal surfaces with product gas at low pressure for 24 hours",
        "Perform helium leak test on filled cylinder verifying leak rate <1×10⁻⁹ std cc/sec",
        "Analyze cylinder gas composition using Fourier-transform infrared spectroscopy",
        "Measure moisture content using tunable diode laser absorption spectroscopy to ppb levels",
        "Test for particulate contamination using laser particle counter detecting particles >0.1 μm",
        "Verify total hydrocarbon impurities <1 ppm using flame ionization detection GC",
        "Check for trace metals using ICP-MS after gas absorption in ultrapure water",

        "Apply tamper-evident valve seal caps preventing unauthorized access to cylinder valve",
        "Attach cylinder label showing chemical name, CAS number, lot number, and purity grade",
        "Affix GHS hazard labels indicating physical and health hazards (flammable, toxic, corrosive, etc.)",
        "Mark cylinder with DOT specification, serial number, and hydrostatic test date",
        "Apply color-coded shoulder band identifying gas type per industry standards",
        "Place plastic valve protection cap preventing damage to cylinder valve during transport",
        "Stage filled cylinders in gas storage bunker with explosion-proof electrical systems",
        "Maintain storage area temperature at 15-25°C preventing excessive pressure buildup",
        "Implement continuous gas detection monitoring for leaks with alarm at 10% LEL",
        "Segregate gas cylinders by hazard class keeping incompatible materials separated",

        "Load cylinders onto transport vehicles using specialized gas cylinder racks",
        "Secure cylinders in upright position with restraints preventing movement during transit",
        "Placard vehicle with appropriate hazard class diamonds per DOT/IMDG regulations",
        "Provide driver with emergency response guide and 24-hour emergency contact number",
        "Ship gas cylinders to semiconductor fabs, electronics manufacturers, and research laboratories",
        "Include certificate of analysis with each shipment documenting purity and impurity levels",
        "Maintain cold chain for liquefied gases requiring cryogenic temperatures during transport",
        "Track cylinder inventory using RFID tags enabling asset management and return processing",
        "Implement cylinder return program collecting empty cylinders for refurbishment and refilling",
        f"Archive production batch records maintaining traceability of {title} from synthesis to customer delivery",
    ]

def generate_liquid_chemical_steps(page_id, title):
    """Generate steps for liquid chemicals and solvents."""
    return [
        f"Design chemical production facility for manufacturing {title} with appropriate safety and environmental controls",
        "Install chemical reactors constructed from glass-lined steel or stainless steel 316L",
        "Source raw material chemicals from qualified suppliers with purity >98%",
        "Receive feedstock chemicals in tanker trucks or rail cars with certified analysis",
        "Pump chemicals to storage tanks through dedicated piping systems with leak detection",
        "Implement secondary containment around chemical storage areas capturing 110% of tank volume",
        "Pre-heat reactants to specified temperature using jacketed vessel with thermal oil circulation",
        "Charge reactor with reactants in calculated stoichiometric ratios based on reaction equation",
        "Add catalyst (if required) at 0.1-1% loading to accelerate reaction kinetics",
        "Initiate reaction monitoring temperature, pressure, and pH every 5 minutes",

        "Control exothermic reaction heat using cooling water through reactor jacket maintaining ±3°C",
        "Employ reflux condenser returning vaporized reactants to reactor improving yield",
        "Sample reaction mixture hourly analyzing conversion by titration or chromatography",
        "Continue reaction until conversion reaches >95% ensuring complete utilization of limiting reagent",
        "Cool reaction mixture to 40°C preparing for product isolation and purification",
        "Neutralize residual acids or bases using controlled addition of neutralizing agent",
        "Monitor neutralization endpoint by continuous pH measurement targeting pH 6-8",
        "Transfer reaction mixture to separation equipment (distillation column, extractor, centrifuge)",
        "Separate product from reaction mixture using liquid-liquid extraction with immiscible solvent",
        "Employ countercurrent extraction column with 10 theoretical stages maximizing product recovery",

        "Wash extracted product with deionized water removing water-soluble impurities",
        "Dry organic phase using anhydrous sodium sulfate or molecular sieves removing moisture to <100 ppm",
        "Filter drying agent using pressure filter with 5-micron filter media",
        "Distill crude product under vacuum reducing boiling point and preventing thermal decomposition",
        "Operate distillation column at 50 mmHg with reflux ratio 3:1 achieving sharp separation",
        "Collect product fraction within ±2°C of target boiling point ensuring purity >99%",
        "Condense distillate vapors using shell-and-tube heat exchanger with chilled water cooling",
        "Perform second distillation if ultra-high purity required achieving >99.9% purity",
        "Analyze product purity using gas chromatography with FID or mass spectrometer detector",
        "Measure water content by Karl Fischer titration verifying <50 ppm moisture",

        "Test acidity by titration with standardized base solution determining acid number",
        "Check for trace metal impurities using ICP-OES or ICP-MS detection to ppb levels",
        "Measure density and refractive index verifying physical properties match specification",
        "Determine boiling point or melting point confirming identity and purity of product",
        "Analyze for residual solvents using headspace GC meeting ICH Q3C guideline limits",
        "Test for specific impurities unique to synthesis pathway using validated analytical methods",
        "Filter product through 0.2-micron membrane filter removing particulate contamination",
        "Transfer purified product to clean stainless steel or HDPE storage tanks",
        "Blanket product with nitrogen gas preventing oxidation and moisture absorption during storage",
        "Store product at controlled temperature (15-25°C) in temperature-monitored warehouse",

        "Sample stored product weekly testing stability and monitoring for degradation",
        "Package product in appropriate containers: glass bottles, HDPE drums, or steel IBCs",
        "Clean containers before filling using solvent rinse or validated cleaning procedure",
        "Fill containers using bottom-fill method minimizing vapor generation and static electricity",
        "Leave 5-10% headspace allowing thermal expansion without container overpressure",
        "Seal containers with compatible closures resistant to chemical permeation",
        "Apply GHS hazard labels showing hazard pictograms and precautionary statements",
        "Attach product label with chemical name, CAS number, lot number, concentration, and expiry date",
        "Affix handling labels indicating storage conditions and safety precautions",
        "Include safety data sheet (SDS) with each shipment providing hazard and emergency information",

        f"Package containers in overpack boxes with absorbent material for spill containment during shipping",
        "Palletize drums using stretch wrap securing load for transportation",
        "Mark pallets with gross weight and handling instructions (e.g., This Side Up)",
        "Store packaged goods in designated chemical warehouse segregated by hazard class",
        "Maintain warehouse ventilation with continuous air monitoring for chemical vapors",
        "Prepare shipping documents including commercial invoice, packing list, and certificate of analysis",
        "Complete hazardous materials paperwork per DOT or IMDG dangerous goods regulations",
        "Load shipment onto truck with placards displaying hazard class and UN number",
        "Provide carrier with emergency response information and 24-hour contact number",
        f"Ship {title} to pharmaceutical manufacturers, chemical processors, electronics fabs, and industrial users worldwide for applications requiring high-purity chemical reagents, process solvents, and specialty intermediates",
    ]

def generate_metal_steps(page_id, title):
    """Generate steps for metal ingots, billets, and metal products."""
    return [
        f"Mine metal ore from geological deposits containing economically extractable concentrations of {title} base metal",
        "Transport ore from mine to processing facility using haul trucks or conveyor systems",
        "Crush ore in jaw crusher and gyratory crusher reducing particle size to <150 mm",
        "Grind crushed ore in ball mill or SAG mill achieving 80% passing 200 mesh (74 microns)",
        "Add water and grinding media (steel balls) creating slurry for effective grinding",
        "Classify ground ore using hydrocyclones separating oversize particles for re-grinding",
        "Concentrate metal values using froth flotation process with selective surfactants",
        "Add collector reagents (xanthates) selectively adsorbing on valuable mineral surfaces",
        "Inject frother chemicals creating stable bubbles to carry hydrophobic minerals to froth layer",
        "Skim metal-rich froth from flotation cells achieving 25-40% metal content in concentrate",

        "Filter concentrate using vacuum disc filters or pressure filters removing excess water",
        "Dry concentrate in rotary dryer or flash dryer reducing moisture to <10%",
        "Transport concentrate to smelter facility for pyrometallurgical extraction",
        "Blend concentrate with flux materials (limestone, silica) to control slag composition",
        "Charge concentrate blend into smelting furnace (flash, reverberatory, or electric arc type)",
        "Heat furnace to 1200-1400°C using natural gas burners or electric arc electrodes",
        "Melt concentrate separating into matte (metal sulfide) and slag (oxide waste) layers",
        "Tap molten matte from furnace bottom transferring to converting vessel",
        "Blow compressed air or oxygen through molten matte oxidizing iron and sulfur impurities",
        "Remove slag layer continuously as it forms capturing iron oxides and other impurities",

        "Continue converting until reaching blister metal stage with 98-99% metal purity",
        "Cast blister metal into anode shapes for electrorefining process",
        "Transfer anodes to electrorefining tankhouse equipped with hundreds of electrolytic cells",
        "Hang impure anodes and pure starter sheet cathodes in sulfuric acid electrolyte bath",
        "Apply DC current at controlled voltage (0.2-0.3V) driving metal dissolution from anodes",
        "Plate pure metal onto cathodes achieving 99.99% purity through electrorefining",
        "Allow cathodes to build thickness to 10-15 mm over 10-14 days electrolysis time",
        "Remove cathodes from cells and strip deposited metal plates from starter sheets",
        "Wash cathode plates with water removing electrolyte residue and surface contamination",
        "Inspect cathode quality checking for smoothness, uniformity, and absence of nodules",

        "Load cathode plates into gas-fired or induction melting furnace for ingot casting",
        "Heat furnace to melting temperature (specific to each metal: 660°C Al, 1085°C Cu, 420°C Zn)",
        "Melt cathodes under protective atmosphere or flux cover preventing oxidation",
        "Add alloying elements if producing alloy ingots rather than pure metal ingots",
        "Stir molten metal thoroughly ensuring homogeneous composition throughout melt",
        "Degas molten metal using nitrogen or argon purge removing dissolved hydrogen",
        "Flux molten metal surface removing oxide dross and impurities to ladle",
        "Sample molten metal analyzing composition by optical emission spectroscopy",
        "Verify chemistry meets specification for alloying elements and impurity limits",
        "Pre-heat ingot molds to 150-200°C preventing thermal shock and cold shuts during casting",

        "Transfer molten metal from furnace to casting ladles using overhead cranes",
        "Pour metal into ingot molds at controlled rate avoiding turbulence and air entrainment",
        "Fill molds completely ensuring no voids or shrinkage cavities in ingot",
        "Allow ingots to solidify and cool in molds for specified time based on section thickness",
        "Directionally solidify from bottom to top concentrating porosity in feeder head (to be cropped)",
        "Remove solidified ingots from molds using hydraulic press or knockout machine",
        "Crop feeder head and bottom of ingot removing shrinkage cavity and contaminated ends",
        "Surface grind or scalp ingots removing oxide scale and surface defects",
        "Inspect ingot surface for cracks, laps, seams, and other casting defects",
        "Measure ingot dimensions verifying thickness, width, and length within tolerance",

        "Mark ingots with heat number, alloy designation, and date code using stamping or painting",
        "Sample ingot material for chemical analysis drilling chips from representative locations",
        "Perform spectrochemical analysis measuring all alloying elements and impurities",
        "Test mechanical properties on cast samples including hardness, tensile strength, elongation",
        "Bundle ingots using steel strapping preparing for storage or shipment",
        "Store ingots in covered warehouse protecting from weather and contamination",
        "Prepare certificate of analysis documenting chemistry and test results for each heat",
        "Package ingots on wooden pallets with protective covering preventing surface damage",
        "Load pallets onto flatbed trucks or rail cars using forklifts or overhead cranes",
        f"Ship {title} to rolling mills, extrusion plants, foundries, and metal fabricators for further processing into semi-finished products like sheet, plate, rod, wire, and tube used in automotive, aerospace, construction, electrical, and consumer goods industries",
    ]

def generate_equipment_steps(page_id, title):
    """Generate steps for manufacturing equipment and machinery."""
    return [
        f"Design {title} system based on customer specifications and process requirements",
        "Create detailed CAD models using SolidWorks or CATIA defining all mechanical components",
        "Perform finite element analysis (FEA) validating structural integrity under operating loads",
        "Generate engineering drawings with GD&T tolerances for manufacturing and inspection",
        "Develop bill of materials (BOM) listing all parts, materials, and purchased components",
        "Source raw materials: steel plate, structural shapes, tubing, and specialty alloys",
        "Procure purchased components: motors, drives, controllers, sensors, and instrumentation",
        "Inspect incoming materials verifying material certifications and dimensional conformance",
        "Cut steel plate using CNC plasma cutter or waterjet achieving ±1 mm cutting accuracy",
        "Machine precision components on CNC machining centers with 0.01 mm positioning accuracy",

        "Drill, bore, and tap holes for mounting hardware and fluid connections",
        "Ream precision bores to H7 tolerance for bearing and shaft fits",
        "Mill flat surfaces achieving flatness within 0.05 mm over component length",
        "Grind critical surfaces to Ra 0.8 μm surface finish for sliding interfaces",
        "Inspect machined dimensions using CMM (coordinate measuring machine) verifying tolerances",
        "Weld structural frame using GMAW (gas metal arc welding) with ER70S-6 filler metal",
        "Tack weld components holding alignment before final welding passes",
        "Complete welds per AWS D1.1 structural welding code ensuring penetration and fusion",
        "Inspect welds visually checking for cracks, porosity, undercut, and incomplete fusion",
        "Perform non-destructive testing: dye penetrant, magnetic particle, or ultrasonic examination",

        "Stress relieve welded assemblies in furnace at 600°C for 2 hours reducing residual stresses",
        "Sandblast metal surfaces removing scale, rust, and weld spatter preparing for coating",
        "Apply primer coat using electrostatic spray achieving 50-75 μm dry film thickness",
        "Cure primer in oven at 80°C for 30 minutes crosslinking coating polymers",
        "Apply topcoat using HVLP spray gun in climate-controlled paint booth",
        "Achieve topcoat thickness of 75-100 μm providing corrosion protection and appearance",
        "Cure topcoat at 80°C for 60 minutes developing full coating properties",
        "Inspect coating for uniformity, coverage, and defects (runs, sags, orange peel)",
        "Measure coating thickness using electromagnetic gauge verifying specification compliance",
        "Mask threaded holes and precision surfaces protecting from paint contamination",

        "Assemble frame and structural components using bolted connections per assembly drawings",
        "Torque structural bolts to specified values using calibrated torque wrench",
        "Install linear guides and ball screws for motion axes requiring precision positioning",
        "Align guide rails parallel within 0.02 mm over full travel length",
        "Install servo motors coupling to ball screws via flexible couplings absorbing misalignment",
        "Mount encoders on motor shafts and linear axes providing position feedback",
        "Install limit switches and proximity sensors defining motion axis travel limits",
        "Route motor power cables in cable carriers protecting from damage and providing strain relief",
        "Dress signal cables using shielded twisted-pair wire minimizing electrical noise pickup",
        "Ground all metal enclosures and frames to common ground point preventing ground loops",

        "Install electrical cabinet with modular power supplies, servo drives, and PLC controller",
        "Wire control circuits per electrical schematic using numbered wire markers for traceability",
        "Install emergency stop circuits meeting safety requirements with redundant contactors",
        "Program PLC control logic implementing equipment operating sequence and interlocks",
        "Develop HMI (human-machine interface) touchscreen providing operator control and monitoring",
        "Configure servo drive parameters tuning gains for stable and responsive motion control",
        "Implement safety interlocks preventing equipment operation with guards open",
        "Install light curtains or safety laser scanners protecting operator access points",
        "Commission equipment performing dry run without workpiece verifying motion sequences",
        "Jog individual axes verifying proper direction, speed, and acceleration profiles",

        "Home all axes to reference positions initializing absolute position encoders",
        "Test axis positioning accuracy using laser interferometer measuring to ±2 μm",
        "Verify repeatability performing 30 positioning cycles measuring standard deviation <5 μm",
        "Check motion axis perpendicularity using granite square and dial indicator",
        "Measure thermal stability monitoring axis positions during warmup period",
        "Install process-specific tooling: heaters, vacuum chucks, vision systems, dispensing heads",
        "Calibrate temperature controllers using reference thermocouples traceable to NIST standards",
        "Calibrate pressure sensors and flow controllers using deadweight testers and flow standards",
        "Align vision cameras using calibration targets establishing pixel-to-world coordinate transform",
        "Program equipment recipes entering process parameters for customer applications",

        "Run first article production validating equipment performance on actual workpieces",
        "Measure output part quality using metrology equipment verifying specification compliance",
        "Optimize process parameters adjusting speeds, temperatures, and pressures for quality and throughput",
        "Document equipment capabilities measuring cycle time, throughput, and process capability (Cpk)",
        "Perform safety validation testing emergency stop response, interlock function, and operator safety",
        "Create equipment documentation: operation manual, maintenance manual, spare parts list, drawings",
        "Train customer personnel on equipment operation, programming, and routine maintenance",
        "Prepare equipment for shipment disconnecting utilities and securing moving components",
        "Create rigging plan for equipment disassembly, crating, and transport",
        "Build custom crate using plywood and lumber protecting equipment during shipping",

        "Add desiccant packs inside crate controlling humidity during ocean transport",
        "Install shock indicators and tilt sensors monitoring handling during transit",
        "Freight equipment to customer facility using specialized machinery moving company",
        "Uncrate and position equipment at customer site using rigging and lifting equipment",
        "Level equipment to within 0.1 mm/meter using precision levels and adjustable feet",
        "Connect utilities: electrical power, compressed air, cooling water, vacuum, exhaust",
        "Commission equipment at customer site repeating functional and performance testing",
        "Verify equipment achieves specified performance in customer production environment",
        "Obtain customer acceptance sign-off confirming equipment meets purchase specification",
        f"Provide ongoing technical support and service ensuring {title} continues meeting production requirements throughout equipment lifecycle",
    ]

def generate_component_steps(page_id, title):
    """Generate steps for generic components and parts."""
    return [
        f"Design {title} component based on application requirements and interface specifications",
        "Create 3D CAD model defining geometry, features, and critical dimensions",
        "Select material appropriate for operating environment: temperature, stress, chemical exposure",
        "Specify material grade and condition (annealed, heat treated, etc.) per industry standards",
        "Generate manufacturing drawings with dimensional tolerances and surface finish requirements",
        "Determine manufacturing process: machining, molding, casting, stamping, or additive manufacturing",
        "Source raw material stock: bar, sheet, pellets, or powder depending on process",
        "Inspect incoming material verifying material certification and physical properties",
        "Set up manufacturing equipment installing tooling and fixtures for component production",
        "Program CNC machines or set process parameters based on engineering specifications",

        "Load raw material into manufacturing equipment positioning in fixture or chuck",
        "Execute primary manufacturing operation forming component to near-net shape",
        "Monitor process parameters: temperature, pressure, speed, force ensuring process stability",
        "Perform in-process inspection measuring critical features during manufacturing",
        "Complete secondary operations: drilling, tapping, deburring, cleaning as required",
        "Apply surface treatment if specified: plating, coating, anodizing, heat treatment",
        "Control treatment process parameters achieving specified surface properties",
        "Rinse and clean components removing process residues and contamination",
        "Dry components using forced air or oven preventing water spots and corrosion",
        "Inspect finished components using appropriate metrology: calipers, micrometers, gauges, CMM",

        "Measure critical dimensions verifying conformance to drawing tolerances",
        "Check surface finish using profilometer measuring Ra, Rz roughness parameters",
        "Perform functional testing if applicable: fit, force, leak test, electrical test",
        "Conduct material testing on sample parts: hardness, composition, coating thickness",
        "Sort components by inspection results separating conforming and non-conforming parts",
        "Rework or scrap non-conforming components per quality procedures",
        "Mark components with part number, revision, and lot code using laser marking or stamping",
        "Apply protective coating or bag components preventing corrosion and damage during storage",
        "Count and package components in specified quantities (bulk, trays, tubes, reels)",
        "Label packages with part number, quantity, lot number, and inspection status",

        "Store packaged components in controlled environment: temperature, humidity, cleanliness",
        "Maintain traceability records linking components to production batch and raw material lot",
        "Prepare quality documentation: certificate of conformance, test reports, inspection data",
        "Package components for shipment using appropriate cushioning and moisture barrier",
        "Apply shipping labels with destination, handling instructions, and tracking number",
        f"Ship {title} components to assembly plants, equipment manufacturers, and end users for integration into higher-level assemblies and systems",
    ]

def write_batch(batch_pages, batch_num):
    """Generate and write a batch of pages."""
    print(f"\n{'='*60}")
    print(f"BATCH {batch_num}: Generating {len(batch_pages)} pages")
    print(f"{'='*60}")

    for i, page_id in enumerate(batch_pages, 1):
        content = generate_content(page_id, batch_num, i)
        filepath = f"./content/pages/{page_id}.md"
        with open(filepath, 'w') as f:
            f.write(content)

    print(f"\nBatch {batch_num} complete: {len(batch_pages)} pages generated")

if __name__ == "__main__":
    batch_size = 50
    if len(sys.argv) > 1:
        batch_num = int(sys.argv[1])
        start_idx = (batch_num - 1) * batch_size
        end_idx = start_idx + batch_size
        batch_pages = ALL_PAGES[start_idx:end_idx]
        write_batch(batch_pages, batch_num)
    else:
        print(f"Usage: python3 batch-generator.py <batch_number>")
        print(f"Total pages: {len(ALL_PAGES)}")
        print(f"Total batches: {(len(ALL_PAGES) + batch_size - 1) // batch_size}")
