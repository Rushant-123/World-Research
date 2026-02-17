---
title: "Nitric Acid (HNO₃)"
company: "Yara / CF Industries / Orica"
country: "Norway / USA / Australia"
selling_price: 1.5
inputs:
  - name: "Ammonia Gas"
    cost: 0.4
    link: "ammonia-synthesis"
  - name: "Air Compressor"
    cost: 0.2
    link: "industrial-compressor"
  - name: "Platinum-Rhodium Gauze"
    cost: 0.3
    link: "platinum-catalyst"
  - name: "Absorption Tower"
    cost: 0.15
    link: "packed-column"
  - name: "Stainless Steel Reactor"
    cost: 0.15
    link: "chemical-reactor"
  - name: "Heat Exchanger"
    cost: 0.1
    link: "heat-recovery"
  - name: "Electricity"
    cost: 0.05
    link: "electricity"
  - name: "Water"
    cost: 0.05
    link: "process-water"
  - name: "Chemical Plant"
    cost: 0.1
    link: "chemical-facility"
value_created: 0
---

# How to Make Nitric Acid (HNO₃)

**Top Market Leaders:**
- [Yara](/companies/yara)
- [CF Industries](/companies/cf-industries)
- [Orica](/companies/orica)



Strong oxidizing acid used in semiconductor etching, metal cleaning, fertilizer production, explosives manufacture. Ostwald process: catalytic oxidation of ammonia. Discovered by Wilhelm Ostwald, Nobel Prize 1909.

**Step 1-8: [Ammonia](ammonia-synthesis) Preparation**
Source ammonia gas (NH₃) from Haber-Bosch synthesis plant. Ammonia arrives as liquid in pressure tanks at -33°C or 8 bar. Vaporize by heating to 25°C. Filter through activated carbon to remove oil traces (from compressor). Flow rate: 100 kg NH₃/hour for typical plant (produces 360 kg HNO₃/hour). Purity required: >99.5% NH₃. Impurities (water, oil, inerts) poison catalyst. Mix with air in precise ratio: 10.5% NH₃, 89.5% air by volume. This is below explosive limit (16-25% NH₃ in air) for safety.

**Step 9-18: Air Compression and Mixing**
Draw atmospheric air through filters (removes dust, pollen, insects). Compress to 5-8 bar using [multi-stage compressor](industrial-compressor) (centrifugal or reciprocating). Cool between stages to 40°C with water-cooled heat exchangers. Remove condensed water in knockout drums. Air composition: 78% N₂, 21% O₂, 1% Ar. Flow rate: 850 kg air/hour. Mix ammonia and compressed air in static mixer (baffled pipe section, creates turbulence). Check mixture composition with IR analyzer continuously. Ratio critical: excess NH₃ wastes ammonia, excess air reduces conversion efficiency. Preheat mixture to 200-250°C using hot gas from reactor (energy recovery).

**Step 19-30: Catalytic Oxidation in [Reactor](chemical-reactor)**
Reactor: stainless steel vessel (316L grade) lined with acid-resistant alloy. Contains [platinum-rhodium catalyst gauze](platinum-catalyst): 90% Pt, 10% Rh. Gauze: wire diameter 0.076mm (3 mil), 80 mesh (80 wires/inch), stacked in 6-12 layers. Total Pt loading: 1-2 kg for industrial reactor. Feed preheated NH₃/air mixture into reactor. Exothermic reaction ignites at 800-900°C. Reactions: 4NH₃ + 5O₂ → 4NO + 6H₂O (primary, 850°C). Heat released: 227 kJ/mol NH₃. Temperature rises to 900-920°C immediately. Contact time: 0.001 seconds (1 millisecond). Conversion: 95-98% NH₃ → NO. Side reactions: 4NH₃ + 3O₂ → 2N₂ + 6H₂O (loses 2-5% to N₂, unwanted). 2NH₃ + 2O₂ → N₂O + 3H₂O (trace N₂O, greenhouse gas).

**Step 31-40: Secondary Oxidation**
Hot gases exit catalyst at 900°C: 10% NO, 2% NH₃ (unreacted), 10% H₂O, 5% O₂ (excess), 73% N₂. Cool rapidly to 150-200°C in [heat exchanger](heat-recovery) - generates steam for power recovery. In cooled gas, NO reacts with oxygen: 2NO + O₂ → 2NO₂ (spontaneous, exothermic, slower at high temperature - that's why cooling is needed). Takes 2-5 seconds. Gas turns brown (NO₂ is brown, NO is colorless). Also forms N₂O₄ (dimer): 2NO₂ ⇌ N₂O₄ (equilibrium, N₂O₄ dominates at low temperature). Equilibrium favors NO₂ at 150°C.

**Step 41-52: Absorption in [Tower](packed-column)**
Pass cooled gas mixture into absorption tower (packed column): 15-20 meters tall, 1-3 meters diameter. Packing: ceramic or plastic Raschig rings, Pall rings, or structured packing (stainless steel mesh). Spray water from top countercurrent to rising gas. Absorption reactions: 3NO₂ + H₂O → 2HNO₃ + NO. NO recycled to oxidation step. Also: 2NO₂ + H₂O → HNO₃ + HNO₂. HNO₂ (nitrous acid) unstable: 3HNO₂ → HNO₃ + 2NO + H₂O. Net: 4NO₂ + O₂ + 2H₂O → 4HNO₃. Absorption is slow - requires long residence time (10-30 seconds) and large contact area (packing provides ~100 m²/m³). Temperature rises to 40-60°C. Cool with water jackets on tower. Pressure: 5-10 bar accelerates absorption.

**Step 53-62: Concentration and Purification**
Absorption produces 50-70% HNO₃. Concentrate to 68% (azeotrope with water) by distillation. Cannot concentrate beyond 68% by simple distillation - forms constant boiling mixture. For >68% (fuming nitric acid): add sulfuric acid as dehydrating agent or use extractive distillation. For semiconductor applications: 68-70% is standard. Further purification: distill in glass or quartz still (metals contaminate). Collect middle fraction. Test for metals by ICP-MS: Fe, Cr, Ni, Cu each <1 ppb. Test for chloride (from ammonia impurity): <1 ppm. Test for sulfate: <1 ppm. Electronic grade: colorless (no dissolved NO₂), metals <100 ppt (parts per trillion).

**Step 63-72: Bleaching and Stabilization**
Commercial nitric acid often has yellow-brown color from dissolved NO₂. Remove by sparging with air or oxygen (oxidizes NO₂ to N₂O₅ which hydrolyzes to HNO₃) or by adding urea (reacts with nitrous acid impurities). For electronic grade: distill under partial vacuum (200 mbar) at 80°C. Add stabilizers: 0.01-0.05% phosphoric acid or sulfamic acid (prevents decomposition). Nitric acid slowly decomposes in light: 4HNO₃ → 4NO₂ + O₂ + 2H₂O. Store in opaque containers or dark rooms. Stainless steel (304L, 316L) resists 68% HNO₃ at room temperature due to passivation layer.

**Step 73-82: Storage and Handling**
Store in stainless steel tanks (austenitic grades: 304L, 316L, 304H). Avoid carbon steel (rapid corrosion). For concentrated acid (>90%), use aluminum (forms protective oxide). Tank capacity: 10,000-50,000 liters for industrial facility. Install pressure relief valves (acid decomposes slowly, releases NO₂ gas). Vent to scrubber tower (NaOH solution absorbs NO₂). Maintain tank temperature at 15-25°C. Install secondary containment (dike or double-wall tank) to contain spills. Label with concentration, hazard warnings (corrosive, oxidizer). Inspect tanks annually for corrosion (ultrasonic thickness measurement). Maximum storage: 6-12 months (slow decomposition forms NO₂).

**Step 83-92: Application Methods**
For silicon etching: mix with HF and acetic acid. Ratio 30:10:10 (HNO₃:HF:CH₃COOH). HNO₃ oxidizes silicon to SiO₂, HF dissolves SiO₂. Etch rate: 1-10 µm/min depending on concentration. For metal cleaning: 10-20% HNO₃, room temperature. Removes oxides from stainless steel, copper, brass. Passivates stainless steel surface (enhances corrosion resistance). For gold etching: aqua regia (3:1 HCl:HNO₃). HNO₃ oxidizes gold, HCl complexes it as AuCl₄⁻.

**Step 93-100: Waste Treatment and [Safety](chemical-safety)**
Neutralize spent acid with sodium carbonate (soda ash) or sodium hydroxide. Reaction: HNO₃ + NaOH → NaNO₃ + H₂O. Exothermic - add base slowly. Monitor pH, target 7-8. Resulting sodium nitrate solution can be discharged to wastewater treatment or evaporated to recover NaNO₃ crystals (used as fertilizer). For concentrated waste streams: distill to recover HNO₃. Wear personal protective equipment: face shield, acid-resistant gloves (neoprene or butyl rubber), apron, boots. Causes severe burns on contact. Vapors irritate respiratory system - use fume hood or ventilation. Oxidizer - fires intensify in presence of HNO₃. Separate from flammable materials (organics, metals, reducing agents). Spill response: neutralize with soda ash, absorb with vermiculite, dispose as hazardous waste. Price: $1-3/kg for industrial grade (68%). Electronic grade: $5-10/kg (>99.999% purity).
