---
title: "Organic Package Substrate"
company: "Ibiden / Unimicron / AT&S"
country: "Japan / Taiwan / Austria"
selling_price: 2
inputs:
  - name: "Copper Foil"
    cost: 0.3
    link: "copper-foil"
  - name: "Epoxy Resin"
    cost: 0.4
    link: "epoxy-resin"
  - name: "Glass Fiber"
    cost: 0.2
    link: "fiberglass-cloth"
  - name: "Photoresist"
    cost: 0.15
    link: "dry-film-resist"
  - name: "Electroless Copper"
    cost: 0.1
    link: "plating-chemistry"
  - name: "Drilling Equipment"
    cost: 0.3
    link: "micro-drill"
  - name: "Lithography Tools"
    cost: 0.2
    link: "exposure-system"
  - name: "Plating Line"
    cost: 0.2
    link: "electroplating-equipment"
  - name: "Lamination Press"
    cost: 0.15
    link: "vacuum-laminator"
value_created: 0
---

# How to Make Organic Package Substrate

**Top Market Leaders:**
- [Ibiden](/companies/ibiden)
- [Unimicron](/companies/unimicron)
- [AT&S](/companies/at-s)



Multi-layer circuit board connecting chip to printed circuit board. Advanced PCB with fine features: 15-30 µm traces, 50-100 µm vias, 4-8 layers. Ball Grid Array (BGA) on bottom. Similar to PCB fabrication but finer pitch, tighter tolerances.

**Step 1-10: Core Material Preparation**
Start with core laminate: [epoxy resin](epoxy-resin) impregnated [glass fiber](fiberglass-cloth) cloth with [copper foil](copper-foil) on both sides. Material: FR-4 (Flame Retardant 4, most common) or BT resin (bismaleimide triazine, better thermal performance). Core thickness: 0.1-0.2mm for inner layers, 0.4-0.6mm for center core. Copper thickness: 12-35 µm (0.5-1 oz/ft²). Panel size: 510mm × 610mm (20"×24") or 600mm × 600mm. Inspect for defects: wrinkles, copper voids, resin starving. Measure copper thickness by eddy current tester (±2 µm tolerance). Bake at 120°C for 4 hours to remove moisture (<0.02% moisture content). Store in humidity-controlled room (40-60% RH).

**Step 11-25: Inner Layer Circuit Patterning**
Clean copper surface with microetch (sulfuric acid + hydrogen peroxide, removes 2-3 µm copper oxide). Rinse, dry. Apply [dry film photoresist](dry-film-resist): laminate at 105-115°C, pressure 3-5 bar, speed 1-2 m/min. Film thickness: 25-50 µm. Align photomask (glass plate with chrome pattern) to panel using pin registration or optical alignment (accuracy ±15 µm). Expose with UV light (mercury arc lamp, 10-20 mJ/cm²). Develop resist in Na₂CO₃ solution (1%, 30-35°C, spray 1-2 bar, 60-90 seconds). Rinse, dry, inspect. Pattern transfer by etching: immerse in cupric chloride (CuCl₂) or alkaline ammonia etchant at 45-50°C. Etch rate: 25-35 µm/min. Etch until copper fully removed from exposed areas (check visually - color change from pink to brown substrate). Strip resist with NaOH solution (3%, 50°C).

**Step 26-40: Oxide Treatment and Lamination**
Roughen inner layer copper for better adhesion to prepreg. Oxide treatment: immerse in sodium chlorite solution (NaClO₂, 100 g/L, 80°C, 2-3 minutes). Forms black copper oxide layer (2-3 µm thick, increases surface area 3-5×). Alternative: mechanical brushing with pumice. Rinse, dry. Stack layup: bottom copper foil → prepreg sheets → inner layer core → prepreg → inner layer core → prepreg → top copper foil. Prepreg: glass cloth pre-impregnated with uncured epoxy resin (B-stage). Number of prepreg sheets determines final thickness. Insert into [vacuum lamination press](vacuum-laminator). Press cycle: heat to 180-200°C, hold 90 minutes (epoxy cures), pressure 25-40 bar. Vacuum to remove trapped air (prevent voids). Cool under pressure to 80°C, release. Final thickness: 0.8-1.6mm depending on layer count.

**Step 41-58: Via Drilling**
Drill holes (vias) to connect layers. Via types: through-hole (top to bottom), blind (outer to inner), buried (inner to inner). Use high-speed CNC [drill](micro-drill) with carbide or diamond bits. Spindle speed: 80,000-180,000 rpm. Feed rate: 1-3 m/min. Bit diameter: 0.15-0.3mm (for 100-200 µm finished via). Entry material: aluminum sheet (prevents burrs). Exit material: phenolic backer board (supports panel). Drill up to 3 panels stacked. Accuracy: ±25 µm position tolerance. Burr control critical - dull bits create smear (resin deposits in via barrel, blocks plating). Replace bits every 3,000-8,000 hits depending on stackup. For microvias (<100 µm): use laser drilling (CO₂ laser, 355nm UV laser, conformal mask).

**Step 59-72: Desmear and [Electroless Copper](plating-chemistry) Plating**
Remove resin smear from via barrels. Desmear process: swell resin with swelling agent (dimethyl sulfoxide), etch with permanganate solution (KMnO₄, 80 g/L, 75°C, 10 minutes) - oxidizes resin. Neutralize with hydroxylamine. Rinse thoroughly. Activate surface for copper plating: immerse in palladium chloride solution (sensitizer: SnCl₂, activator: PdCl₂). Pd particles deposit on surface, catalyze copper deposition. Electroless copper plating: immerse in bath containing CuSO₄ (copper source), formaldehyde (reducing agent), EDTA (complexing agent), 2,2'-bipyridyl (stabilizer), pH 12.5, 70°C, 30-45 minutes. Copper deposits chemically (no electric current) on catalyzed surfaces. Deposit 0.3-1 µm copper layer (seed layer, makes surface conductive for electroplating).

**Step 73-88: Pattern Plating**
Apply dry film resist to panel. Expose with outer layer circuit pattern. Develop (opens areas to be plated - circuit traces, pads, vias). Electroplate copper: sulfuric acid-copper sulfate bath (CuSO₄ 60 g/L, H₂SO₄ 200 g/L), current density 2-4 A/dm², temperature 25-30°C. Plate 20-40 µm copper (fills vias, builds up traces). Brighteners added (polyethylene glycol, thiourea) - smooth, bright deposit. Plate time: 60-120 minutes depending on thickness. Flash tin plating: thin Sn layer (1-2 µm) protects copper during resist strip and etch. Alternative: print pattern, electroplate copper in pattern areas (panel plating method).

**Step 89-102: Resist Strip and Etch**
Strip dry film resist with NaOH solution (3%, 50°C). Tin layer protects underlying copper. Etch away seed copper from non-circuit areas using cupric chloride or sulfuric acid-peroxide. Tin acts as etch resist. After etch, strip tin with nitric acid (10%, room temperature, 2-3 minutes). Remaining: copper circuit pattern 35-65 µm thick, 15-30 µm trace width, 15-30 µm spacing. Inspect circuit: automated optical inspection (AOI) compares actual pattern to CAD design. Detects opens (broken traces), shorts (bridges between traces), width violations. Repair defects manually with UV-curable conductive ink (for opens) or laser ablation (for shorts).

**Step 103-115: Solder Mask Application**
Apply solder mask (polymer coating) to protect circuits, define solder pad openings. Clean panel surface with microetch. Print or spray liquid photoimageable solder mask (LPSM): epoxy-acrylate resin + photoinitiator. Thickness: 15-30 µm. Tack dry at 80°C for 15 minutes. Expose through photomask (clear areas where mask removed - pads, test points). Develop with Na₂CO₃ solution - removes unexposed areas. Final cure: UV + thermal (150°C, 60-90 minutes). Solder mask color: typically green (copper phthalocyanine pigment), also available in black, white, blue, red. Tolerance: pad opening ±50 µm. Solder mask provides insulation (>100 MΩ resistance), protects from solder bridging, environmental protection.

**Step 116-128: Surface Finish Application**
Apply surface finish to exposed copper pads (prevents oxidation, aids soldering). Finish types: ENIG (Electroless Nickel Immersion Gold): plate 3-6 µm Ni, flash 0.05-0.1 µm Au. Nickel barrier prevents copper diffusion, gold protects nickel from oxidation. Process: electroless Ni plating (NiSO₄ + sodium hypophosphite reducer, pH 4.8, 88°C, 20-30 minutes), immersion Au plating (displacement - gold replaces Ni surface atoms, 70-90°C, 10 minutes). Alternative: OSP (Organic Solderability Preservative) - thin organic film, lowest cost. HASL (Hot Air Solder Leveling) - dip in molten solder, blow off excess with air knives. ImAg (Immersion Silver), ImSn (Immersion Tin).

**Step 129-138: Electrical Test and Singulation**
Test electrical continuity and isolation. Flying probe tester: movable probes contact test points, measure resistance. Test every net: opens (infinite resistance), shorts (low resistance between nets). Parametric tests: impedance (50-100Ω controlled impedance traces for high-speed signals). Route panel to [CNC routing machine](routing-machine): carbide end mill cuts panel into individual substrates along scoring lines. Alternatively: V-scoring (groove cut into panel, substrate snapped apart). Bevel edges by routing at 30-45° angle. Clean routed edges with de-burring brush. Inspect final dimensions: ±0.1mm tolerance on length/width. Thickness: ±0.05mm. Warpage: <0.5% (measure flatness on optical comparator).

**Step 139-150: Quality Control**
Cross-section analysis: cut substrate, mount in epoxy, polish, microscope inspection. Measure: copper thickness (35±5 µm), trace width (25±3 µm), via barrel copper (25±5 µm), layer-to-layer registration (±25 µm), solder mask thickness (20±5 µm). Check for defects: voids in via, copper nodules, resin cracks, delamination. Peel strength test: measure adhesion between layers (min 1.2 N/mm). Thermal cycling: -55°C to +125°C, 500 cycles, inspect for cracks. Reliability testing: moisture sensitivity level (MSL), thermal shock. Electrical testing: high-pot test (apply high voltage, measure leakage - checks insulation). Pack in vacuum-sealed bags with desiccant, bake at 125°C for 24 hours before sealing. Shelf life: 12 months sealed.

Price: $2-10 per substrate depending on complexity (layer count, via density, minimum feature size). High-end CPU substrates: $20-50 each (10+ layers, 15 µm features, thousands of vias). Production: photolithography fab, Class 10,000 cleanroom. Cycle time: 10-15 days for 4-6 layer substrate.
