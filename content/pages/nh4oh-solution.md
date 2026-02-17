---
title: "Ammonium Hydroxide (NH₄OH)"
company: "Yara / CF Industries / Nutrien"
country: "Norway / USA / Canada"
selling_price: 1
inputs:
  - name: "Ammonia Gas"
    cost: 0.4
    link: "ammonia-synthesis"
  - name: "Water"
    cost: 0.09
    link: "water-source"
  - name: "Storage Tanks"
    cost: 0.15
    link: "chemical-tanks"
  - name: "Gas Absorber"
    cost: 0.1
    link: "packed-tower"
  - name: "Cooling System"
    cost: 0.05
    link: "refrigeration"
value_created: 0.21
---

# How to Make Ammonium Hydroxide (NH₄OH)

**Top Market Leaders:**
- [Yara](/companies/yara)
- [CF Industries](/companies/cf-industries)
- [Nutrien](/companies/nutrien)



Aqueous ammonia solution - weak base used in semiconductor wafer cleaning (RCA SC-1), photoresist stripping, metal etching. Technically, "ammonium hydroxide" is misnomer - solution is ammonia (NH₃) dissolved in water, not true NH₄OH compound. Commercial name persists despite chemical inaccuracy.

**Step 1-8: [Ammonia Gas](ammonia-synthesis) Production**
Source anhydrous ammonia (NH₃) from Haber-Bosch synthesis plant. Ammonia synthesized from nitrogen and hydrogen: N₂ + 3H₂ → 2NH₃. Reaction at 450°C, 200 bar over iron catalyst. Delivered as liquid ammonia in pressure cylinders (8 bar) or refrigerated tanks (-33°C at 1 bar). For large-scale production, pipeline ammonia from nearby fertilizer plant. Ammonia purity: 99.5-99.98% NH₃. Impurities: water, nitrogen, hydrogen, oil traces from compressor. Filter through activated carbon if oil present.

**Step 9-18: Water Preparation**
Use [ultra-pure water](ultra-pure-water) for electronic grade. Specifications: 18 MΩ·cm resistivity, TOC <10 ppb, particles <10/mL >0.1 µm, bacteria <1 CFU/mL. Produce by: reverse osmosis → ion exchange → UV sterilization → 0.02 µm filtration. Pre-cool water to 5-10°C before ammonia absorption. Cold water absorbs more ammonia (higher solubility at low temperature). Ammonia solubility: 31% w/w at 25°C, 47% w/w at 0°C. Chill with refrigeration system or cooling tower.

**Step 19-30: Absorption Process**
Direct injection method: bubble ammonia gas through water in [absorption tower](packed-tower) (packed column). Tower: 3-5 meters tall, 0.5-1 meter diameter. Packing: ceramic Raschig rings, Pall rings, or structured metal packing (provides high surface area for gas-liquid contact). Feed chilled water from top. Inject ammonia gas from bottom. Countercurrent flow maximizes absorption efficiency. Ammonia dissolves exothermically: ΔH = -35 kJ/mol NH₃. Temperature rises to 40-60°C. Cool with water jacket around column - maintain 20-30°C for best absorption. Contact time: 5-10 seconds. Pressure: 1-2 bar. Efficiency: 98-99% ammonia absorbed.

**Step 31-40: Concentration Control**
Target concentrations: 28-30% NH₃ for industrial/reagent grade. 29% NH₃ (specific gravity 0.90) most common - called "ammonia water 28°Bé" (Baumé degrees). For semiconductor: 27-29% NH₃ for RCA SC-1 cleaning. Measure concentration by titration with HCl: NH₃ + HCl → NH₄Cl. Endpoint indicator: methyl orange (turns from yellow to red at pH 4). Alternative: measure specific gravity with hydrometer (density correlates with concentration). 29% NH₃ at 20°C: specific gravity 0.896. Control concentration by adjusting ammonia gas flow rate. If concentration too high, dilute with DI water. If too low, absorb more ammonia.

**Step 41-50: Purification for Electronic Grade**
Industrial ammonia contains metals (Fe, Cu, Ni, Cr from synthesis equipment) and organics (oil from compressors). For semiconductor use: <1 ppb metals, <10 ppb organics. Purification: Pass crude ammonium hydroxide through ion exchange resin bed (mixed bed: cation + anion resins). Removes metal ions. Follow with activated carbon column (removes organics). Then filter through 0.05 µm PTFE membrane in cleanroom. Alternative: sub-boiling distillation - gently heat at 40-50°C under partial vacuum, collect ammonia vapors, re-absorb in fresh ultra-pure water. Distillation effective but expensive. Test final product by ICP-MS: total metals <5 ppb. Specific metals (Fe, Cu, Ni, Cr, Na, K) <1 ppb. TOC <10 ppb. Particles <5/mL >0.1 µm.

**Step 51-60: Equilibrium Chemistry**
In water, ammonia exists in equilibrium: NH₃ + H₂O ⇌ NH₄⁺ + OH⁻. Kb = 1.8×10⁻⁵ at 25°C. Weak base - only ~1% of NH₃ converts to NH₄⁺. pH of 29% solution: ~11.6. True "ammonium hydroxide" (NH₄OH) doesn't exist as isolable compound. Solution is aqueous ammonia (NH₃·H₂O). Commercial name "ammonium hydroxide" persists for regulatory/labeling reasons. Concentration typically expressed as % NH₃ by weight. Also labeled by specific gravity (e.g., "0.90 ammonia" = 28-29% NH₃).

**Step 61-70: [Storage](chemical-tanks) and Stability**
Store in polyethylene, polypropylene, or stainless steel (304, 316) tanks. Avoid copper, brass, zinc alloys (ammonia corrodes). Tank venting critical - ammonia vapor pressure increases with temperature. Install pressure relief valve or breather cap. For bulk storage (>1,000 liters): refrigerate to 5-10°C (reduces vapor pressure, minimizes ammonia loss). Secondary containment required (dike or double-wall tank). Ammonia evaporates slowly from solution - concentration decreases over time. Open containers lose 1-2% per week. Store tightly sealed. Maximum storage: 6 months for electronic grade (metal pickup from container). Test stored product before use. Label with concentration, production date, hazard warnings (corrosive, irritant).

**Step 71-80: Packaging**
Package in HDPE or polypropylene bottles. Glass acceptable but less common (heavy, breakable). Sizes: 500 mL to 5 liters for lab bottles. 20-25 liter carboys for semiconductor fabs. 200 liter drums for industrial use. 1,000 liter IBC totes for bulk. Use vented caps (allow ammonia vapor escape, prevent pressure buildup). For electronic grade: package in ISO Class 5 cleanroom. Rinse bottles 3× with product before filling (eliminate contamination from prior use). Fill under nitrogen blanket (exclude atmospheric CO₂ - reacts with ammonia to form ammonium carbonate precipitate). Cap immediately after filling.

**Step 81-92: Semiconductor Cleaning Application**
RCA SC-1 clean: mix NH₄OH:H₂O₂:H₂O in ratio 1:1:5 (standard) or 1:2:10 (dilute, for <100nm nodes). Volume example: 100 mL NH₄OH (29%) + 100 mL H₂O₂ (30%) + 500 mL DI water. Mix in PTFE or quartz tank. Heat to 70-80°C. Immerse silicon wafers for 10-15 minutes. Solution removes organic contaminants, particles. Mechanism: NH₄OH attacks organics (saponification), H₂O₂ oxidizes organics and creates hydrophilic surface, particles lift off. Also grows thin oxide layer (1-2 nm SiO₂) - smooths surface. Rinse in cascading DI water (5 tanks) after clean. Dry with nitrogen gun or spin-dry. SC-1 solution ages - loses effectiveness after 2-4 hours (NH₃ evaporates, H₂O₂ decomposes). Prepare fresh batches. Used solution: pH ~10, cloudy appearance (suspended particles). Dispose as alkaline hazardous waste.

**Step 93-100: Safety and Waste Treatment**
Ammonia vapors: pungent odor (detectable at 5 ppm). Irritates eyes, nose, throat. TLV-TWA: 25 ppm. STEL: 35 ppm. IDLH: 300 ppm. Concentrated solutions (>10%) cause chemical burns on skin contact. Vapors can cause pulmonary edema at high concentrations. Wear personal protective equipment: nitrile or butyl rubber gloves, face shield, apron, vapor respirator. Work in fume hood or well-ventilated area. Spill response: evacuate area, ventilate, neutralize with acid (dilute HCl or citric acid). NH₃ + HCl → NH₄Cl (white smoke, ammonium chloride). Absorb with vermiculite or sand. Waste treatment: neutralize spent ammonia solutions with acid to pH 7-8. NH₃ + H₂SO₄ → (NH₄)₂SO₄ (ammonium sulfate, can be used as fertilizer). Dilute and discharge to wastewater treatment. Alternatively, distill to recover ammonia - recycle or sell as fertilizer feedstock. Environmental: ammonia is nutrient pollutant (causes eutrophication). Do not discharge concentrated solutions to waterways. Price: $0.50-1.00/kg for 29% industrial grade. $3-8/kg for electronic grade (ultra-high purity).
