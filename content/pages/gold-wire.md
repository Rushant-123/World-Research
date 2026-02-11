---
title: "Gold Bond Wire"
company: "Tanaka / Heraeus / MK Electron"
country: "Japan / Germany / USA"
selling_price: 0.2
inputs:
  - name: "Gold Metal"
    cost: 0.15
    link: "gold-metal"
  - name: "Wire Drawing Dies"
    cost: 0.02
    link: "diamond-die"
  - name: "Annealing Furnace"
    cost: 0.01
    link: "tube-furnace"
  - name: "Hydrogen Gas"
    cost: 0.01
    link: "hydrogen-gas"
  - name: "Spooling Equipment"
    cost: 0.01
    link: "winding-machine"
value_created: 0
---

# How to Make Gold Bond Wire

Ultra-fine wire connecting chip pads to package leads. Gold preferred for high-reliability applications: corrosion resistant, excellent electrical conductivity, forms reliable thermosonic bonds. Typical diameter: 15-50 µm (0.6-2 mil). Length: 2-6mm per bond. Alternative: copper wire (lower cost) for cost-sensitive applications.

**Step 1-10: [Gold Metal](gold-metal) Refining**
Start with high-purity gold: 99.99% (4N) or 99.999% (5N) Au. Source from gold refinery (electrolytic refining or chlorination process). Gold delivered as shot (small beads 2-5mm diameter), ingot (1 kg bar), or grain (irregularly shaped particles). Test purity by fire assay or ICP-MS. Impurities: Ag <50 ppm, Cu <30 ppm, Fe <10 ppm, Pd <10 ppm. Trace elements affect wire properties - mechanical strength, elongation, bonding behavior. Re-refine if impurities exceed specification. Melt gold at 1,100°C (melting point 1,064°C) in graphite or alumina crucible under argon atmosphere (prevent oxidation, contamination).

**Step 11-22: Casting and Initial Drawing**
Cast molten gold into rod: gravity casting or continuous casting. Rod diameter: 6-10mm. Cool slowly (50°C/hour) to room temperature (minimizes internal stress, large grain size). Anneal rod at 400-500°C for 2-4 hours in hydrogen or forming gas (5% H₂ in N₂) atmosphere. Hydrogen reduces surface oxides, prevents porosity. Pickling: immerse in dilute hydrochloric acid (10%, 5 minutes) to remove surface contamination. Rinse with DI water, dry. First drawing pass: feed rod through tungsten carbide die (6mm → 5mm). Drawing speed: 50-200 m/min. Lubricant: oil or soap solution. Reduction per pass: 10-20% area reduction. Coil drawn wire.

**Step 23-40: Multi-Stage Wire Drawing**
Progressive wire drawing through series of [diamond dies](diamond-die): single-crystal diamond with tapered hole. Die sequence: 5mm → 4mm → 3mm → 2mm → 1mm → 0.5mm → 0.25mm → 0.1mm → 0.050mm → 0.025mm (50 passes typical to reach 25 µm wire from 6mm rod). Reduction schedule: 15-20% per pass initially, decreasing to 5-10% per pass at fine diameters (excessive reduction causes work hardening, breakage). Lubricants: oil-based for large diameters, dry powder (graphite) for fine wires. Drawing speed: 1,000-2,000 m/min for fine wires. Work hardening: repeated plastic deformation dislocates crystal structure, increases strength, reduces ductility. Anneal every 5-10 passes: heat to 250-400°C, hold 15-60 seconds, cool rapidly. Restores ductility (recrystallization), softens wire.

**Step 41-52: Final Drawing and Sizing**
Final passes to target diameter: 25.4 µm ±0.5 µm (1.0 mil, common size). Precision die with ±0.2 µm tolerance. Inline diameter measurement: laser micrometer scans wire diameter continuously, feedback adjusts drawing speed (maintains diameter within ±0.3 µm). Tensile strength after drawing: 150-250 MPa (annealed), 300-500 MPa (as-drawn, work-hardened). Elongation: 1-3% (as-drawn), 10-20% (annealed). Breaking load for 25 µm wire: 6-12 gf (gram-force). Surface finish: smooth, <0.1 µm roughness Ra (affects bonding). Ultrasonic cleaner: remove drawing lubricant residue (contamination causes poor bonding). Dry with nitrogen.

**Step 53-65: Continuous [Annealing](tube-furnace)**
Pass wire through continuous annealing furnace. Tube furnace with controlled atmosphere: 5-10% [hydrogen](hydrogen-gas) in nitrogen (forming gas). Temperature zones: preheat 200°C, anneal 350-450°C, cool 150°C. Line speed: 100-500 m/min. Dwell time in hot zone: 1-5 seconds (sufficient for recrystallization at fine wire sizes). Hydrogen atmosphere: reduces gold oxide (minimal on gold, but improves surface cleanliness), prevents contamination. Rapid cooling after anneal freezes fine grain structure (grain size 1-5 µm for 25 µm wire). Annealed wire properties: tensile strength 120-180 MPa, elongation 8-15%, breaking load 5-9 gf for 25 µm.

**Step 66-78: Alloying (for Enhanced Strength)**
Pure gold wire: soft, excellent bonding, but low mechanical strength (sags in long spans, susceptible to wire sweep during molding). Alloyed gold wires for improved performance: Au-1%Pd (palladium addition increases strength), Au-3%Ag (silver addition), Au-Be (beryllium <100 ppm, significant strengthening). Alloying methods: (1) Add alloying element to melt before casting. (2) Diffusion coating during annealing (expose wire to metal vapor). Alloyed wire tensile strength: 200-300 MPa (50-100% stronger than pure gold). Trade-off: harder bonding (requires higher ultrasonic power, may damage chip pads). Pure gold for low-power devices, alloyed gold for high-power or large dies.

**Step 79-90: [Spooling](winding-machine) and Packaging**
Wind wire onto precision spools. Spool: plastic (polypropylene or polycarbonate), metal (aluminum), or ceramic. Spool capacity: 500m to 20km per spool (weight: 0.2g to 10g for 25 µm wire, gold density 19.3 g/cm³). Tension control critical during winding: 1-3 gf for 25 µm wire (too high causes stretching, reduces elongation; too low causes loose winding, tangling). Traverse winding: wire laid in helical pattern (uniform spool, no tangling). Inline testing: pull test every 100m (measures breaking load, detects weak spots). Mark spools with diameter, purity, mechanical properties, lot number. Package in nitrogen-purged bags or vacuum-sealed bags (prevent contamination, tarnishing - minimal for gold but good practice). Store at room temperature, low humidity (<40% RH).

**Step 91-105: Wire Bonding Process (Application)**
At chip assembly facility, wire bonder connects chip pads to package leads. Thermosonic ball bonding (most common for gold): (1) Feed wire through ceramic capillary (inner diameter 30-40 µm for 25 µm wire). (2) Electronic flame-off (EFO): high-voltage spark melts wire tip, surface tension forms ball (50-60 µm diameter, 1.5-2× wire diameter). (3) Capillary descends, presses ball onto chip pad (aluminum or gold). Substrate heated to 150-200°C. Ultrasonic energy (40-120 kHz, 30-100 mW) applied via capillary for 10-30 milliseconds (creates friction, breaks oxides, forms metallurgical bond). (4) Capillary lifts, wire forms arc (loop) to package lead. (5) Capillary descends on lead, ultrasonic energy forms wedge bond (crescent shape). (6) Clamp, break wire, repeat. Speed: 5-10 bonds/second. Modern auto wire bonders: 10-20 wires/second.

**Step 106-115: Bond Quality and Reliability**
Ball bond strength: shear test (lateral force), typical 50-100 gf for 50 µm ball on 5×5 mil pad (10-20 gf/mil² shear strength). Pull test: vertical force until bond or wire fails, minimum 5 gf for 25 µm wire (ideally wire breaks, not bond). Intermetallic formation: Au-Al IMCs (AuAl₂, Au₅Al₂, Au₄Al, Au₂Al) form at bond interface during bonding and aging. Thin IMC (<2 µm): good bond. Thick IMC (>5 µm): brittle, Kirkendall voids (reliability risk). High temperature storage (150-175°C, 1,000 hours): accelerates IMC growth. Purple plague: Au₂Al phase (purple color), brittle, forms at >250°C or long-term high temperature. Avoided by: lower bonding temperature, gold wire surface coatings (palladium flash), packaging hermetically.

**Step 116-125: Copper Wire Alternative**
Copper wire: 1/50th cost of gold (gold $60,000/kg, copper $8/kg). Electrical conductivity similar (Cu 59.6 MS/m, Au 45.5 MS/m). Challenges: oxidizes rapidly (requires protective atmosphere during bonding and storage), harder (more ultrasonic power needed, risk of cratering in low-k dielectrics), Cu-Al intermetallics (CuAl₂) grow faster than Au-Al. Solutions: palladium-coated copper wire (PCC, Pd flash 0.5-1 µm reduces oxidation), formic acid atmosphere during bonding (H₂ unavailable due to safety - formic acid vapor reduces Cu₂O), free-air ball formation by spark (Cu melting point 1,085°C vs Au 1,064°C). Market share: copper ~60%, gold ~40% as of 2020s. Gold dominant in high-reliability (automotive, aerospace, medical), copper in cost-sensitive (consumer electronics).

Price: Gold wire $3,000-6,000/kg (tracks gold spot price + processing markup, gold spot ~$60,000/kg, wire ~10% markup). 25 µm wire: 180,000 meters per kilogram. Typical bond uses 5mm wire = 0.000028g = $0.00015 per bond at $5,000/kg. Chip with 100 bonds: $0.015 wire cost. High-end CPUs: 2,000+ bonds. Copper wire: $300-800/kg, 90-95% cost savings on wire material. Global production: 5,000-10,000 tonnes/year (gold + copper bond wire combined).
