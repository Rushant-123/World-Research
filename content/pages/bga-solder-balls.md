---
title: "BGA Solder Balls"
company: "Senju Metal / Indium Corporation / Kester"
country: "Japan / USA / USA"
selling_price: 1
inputs:
  - name: "Tin Metal"
    cost: 0.35
    link: "tin-metal"
  - name: "Silver Metal"
    cost: 0.15
    link: "silver-metal"
  - name: "Copper Powder"
    cost: 0.1
    link: "copper-powder"
  - name: "Lead Metal"
    cost: 0.05
    link: "lead-metal"
  - name: "Atomization Tower"
    cost: 0.15
    link: "atomizer"
  - name: "Sieving Equipment"
    cost: 0.1
    link: "classification"
  - name: "Flux Chemistry"
    cost: 0.1
    link: "solder-flux"
value_created: 0
lead_time_days: 33
minimum_order_quantity: 5000
transportation_method: "truck"
geopolitical_risk: "low"
price_volatility: "medium"

certifications:
  - "ISO9001"
  - "ISO14001"
data_quality: "estimated"
---

# How to Make BGA Solder Balls

**Top Market Leaders:**
- [Senju Metal](/companies/senju-metal)
- [Indium Corporation](/companies/indium-corporation)
- [Kester](/companies/kester)



Spherical solder balls for Ball Grid Array packages. Array of balls on package bottom provides electrical and mechanical connection to PCB. Typical: 0.3-0.76mm diameter, hundreds to thousands per package. Alloy: SAC305 (Sn96.5Ag3.0Cu0.5) lead-free, or SnPb eutectic (legacy).

**Step 1-8: Alloy Formulation**
Modern: lead-free SAC alloys (Sn-Ag-Cu). SAC305: 96.5% [tin](tin-metal), 3.0% [silver](silver-metal), 0.5% [copper](copper-powder). Melting point: 217-220°C (eutectic). Alternative alloys: SAC105 (Sn98.5Ag1.0Cu0.5, lower cost, less silver), SAC405 (Sn95.5Ag4.0Cu0.5, higher reliability). Legacy: SnPb eutectic (63% Sn, 37% [Pb](lead-metal)), melting point 183°C (banned in electronics due to RoHS directive, still used in aerospace/military). High-lead alloys: Pb90Sn10 or Pb95Sn5 for die attach (melting point >300°C, doesn't remelt during subsequent assembly). Weigh metals precisely - ±0.1% tolerance on composition (affects melting point, mechanical properties).

**Step 9-20: Melting and Alloying**
Melt metals in resistance or induction furnace. Crucible: graphite or ceramic (resistant to molten metal). Heat under inert atmosphere (nitrogen or argon, prevents oxidation). Add tin first (melts at 232°C), heat to 300-350°C (liquid). Add silver and copper (higher melting points - Ag 962°C, Cu 1,085°C dissolve in liquid tin). Stir mechanically with graphite rod or by induction stirring (electromagnetic stirring, no moving parts). Hold at 350-400°C for 30-60 minutes (complete dissolution, homogenization). Skim off dross (oxide layer) from surface. Sample melt, test composition by X-ray fluorescence (XRF) or inductively coupled plasma (ICP). Adjust if needed. Target: SAC305 ±0.2% each element. Degas molten alloy by bubbling argon or by vacuum degassing (removes dissolved gases, prevents porosity in balls).

**Step 21-35: Atomization**
Pour molten alloy (350-400°C) through tundish into [atomization tower](atomizer). Gas atomization process: high-pressure gas jet (nitrogen or argon, 3-10 MPa) impinges on molten stream, breaks into fine droplets. Nozzle designs: twin-fluid (gas and metal nozzles), close-coupled annular (gas ring around metal stream). Droplet size controlled by gas pressure, flow rate, nozzle geometry. Higher pressure → smaller droplets. Tower height: 5-20 meters. Droplets solidify in flight (cooling rate 10³-10⁵ K/s), form spheres (surface tension). Collect in water bath at tower bottom or cyclone separator (dry process). Particle size distribution: log-normal, median 50-500 µm depending on atomization parameters. For 0.45mm balls, target median ~450 µm.

**Step 36-48: Sieving and [Classification](classification)**
Dry powder (if water atomization, dry at 120°C for 4 hours). Sieve to separate size fractions. Use vibratory sieve shaker or air classification. Standard mesh sizes: 20 mesh (850 µm), 40 mesh (425 µm), 60 mesh (250 µm), 80 mesh (180 µm), 100 mesh (150 µm). For 0.45mm ±0.05mm tolerance: use 500 µm and 400 µm sieves. Reject oversize and undersize. Narrow distribution critical for uniform reflow behavior (all balls melt and wet simultaneously). Yield: 30-60% in target size range (re-melt rejects). Sphericity check: inspect under microscope. Spherical balls: roundness >95% (diameter_min / diameter_max). Satellite formation (small balls attached to large) rejected.

**Step 49-60: Surface Treatment**
Clean balls to remove oxides and contamination. Tumble in dilute acid (5% hydrochloric or 10% citric acid, 5 minutes) - dissolves surface oxides. Rinse thoroughly with deionized water (5 washes). Dry at 120°C. Apply [flux](solder-flux) coating (optional): tumble balls with 0.5-2% flux (rosin-based or no-clean flux dissolved in isopropanol). Flux improves wetting during reflow. Dry to remove solvent. Alternatively, pre-coat balls with SAC alloy by re-melting surface layer (improves oxidation resistance). Pack in antistatic bags with desiccant. Inert atmosphere (nitrogen purge) for long-term storage. Shelf life: 12 months at room temperature, 24 months refrigerated (5°C).

**Step 61-75: Ball Placement Process**
At package assembly facility, balls attached to substrate pads. Methods: (1) Stencil printing: place stencil (laser-cut stainless steel, thickness = ball diameter) over substrate. Fill holes with flux paste. Remove stencil. Balls stick to flux on pads. (2) Ball mounter: vacuum pickup head places individual balls on flux-printed pads. Placement accuracy: ±25 µm. Speed: 10,000-20,000 balls/hour. (3) Transfer head: entire array of balls picked up and transferred to substrate simultaneously (fastest, for uniform arrays). Inspect ball placement: vision system checks each position. Missing balls or misaligned balls rejected.

**Step 76-88: Reflow Soldering**
Reflow oven: convection or IR heating. Temperature profile: preheat 150-180°C (activate flux, evaporate solvents), soak 180-200°C for 60-90 seconds (reduce thermal gradient), ramp to peak 230-250°C (above melting point 217°C), time above liquidus 60-90 seconds (complete wetting), cool at <3°C/s. Total time: 5-8 minutes. Atmosphere: nitrogen (<100 ppm O₂) or air (nitrogen preferred - reduces oxidation, improves wetting, brighter joints). During reflow, balls melt, wet pads, form metallurgical bond. Surface tension pulls molten ball into spherical shape (self-centering if misaligned). Intermetallic compounds form at interface: Cu₆Sn₅ and Cu₃Sn (Sn-Cu IMC) at copper pad, Ag₃Sn at silver traces. IMC thickness: 1-3 µm (good joint), >5 µm (brittle, poor reliability).

**Step 89-100: Quality Control and Testing**
Visual inspection: balls should be spherical, centered on pads, no solder bridges between balls. X-ray inspection: check for voids (>25% void area fails), non-wetting, solder separation from pad. Cross-section analysis (destructive): cut package, mount, polish, microscope. Measure ball height (coplanarity: variation in heights across array, spec <50-100 µm). IMC thickness (1-3 µm acceptable). Wetting angle (<30° good wetting). Voids (acceptable <25% area). Mechanical testing: ball shear test (apply lateral force until ball detaches, measure shear strength, min 500 gf for 0.5mm ball). Ball pull test (vertical pull, min 200 gf). Reliability testing: thermal cycling -55°C to +125°C (min 1,000 cycles without failure), temperature-humidity bias (85°C/85% RH, 1,000 hours, voltage applied). Drop test: JEDEC standard (1,500 g, 0.5ms half-sine pulse, >30 drops without failure). Price: $50-200/kg for SAC305 balls depending on size and tolerance. Typical package uses 0.05-0.5 grams of balls ($0.003-0.10 per package).
