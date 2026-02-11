---
title: "Ammonia Gas (NH₃)"
company: "Yara / CF Industries / Nutrien"
country: "Norway / USA / Canada"
selling_price: 0.4
inputs:
  - name: "Natural Gas"
    cost: 0.12
    link: "natural-gas"
  - name: "Nitrogen Gas"
    cost: 0.08
    link: "air-separation"
  - name: "Haber-Bosch Reactor"
    cost: 0.1
    link: "catalytic-reactor"
  - name: "Iron Catalyst"
    cost: 0.03
    link: "catalyst-preparation"
  - name: "High-Pressure Compressor"
    cost: 0.05
    link: "synthesis-compressor"
  - name: "Heat Exchanger"
    cost: 0.02
    link: "recuperator"
value_created: 0
---

# How to Make Ammonia Gas (NH₃)

Foundation chemical - most produced synthetic chemical worldwide (175 million tonnes/year). 80% for fertilizers, 20% for chemicals (nitric acid, explosives, polymers, refrigerant, semiconductor cleaning). Haber-Bosch process: N₂ + 3H₂ → 2NH₃. Nobel Prize 1918 (Fritz Haber, Carl Bosch). Enabled industrial fertilizer production - supports ~50% of global food supply.

**Step 1-12: Hydrogen Production from [Natural Gas](natural-gas) - Steam Reforming**
Source: [natural gas](natural-gas) (primarily methane, CH₄). Desulfurization first: pass through zinc oxide bed (ZnO + H₂S → ZnS + H₂O) - sulfur poisons catalysts. Primary reformer: mix CH₄ with steam (H₂O:CH₄ = 3:1 molar ratio) at 25-30 bar, 750-850°C over nickel catalyst (NiO on alumina support) in fired tubes. Reaction: CH₄ + H₂O → CO + 3H₂ (strongly endothermic, ΔH = +206 kJ/mol). Also: CH₄ + 2H₂O → CO₂ + 4H₂ (ΔH = +165 kJ/mol). Heat supplied by burning additional natural gas (30-40% of feed used as fuel). Furnace: 100-200 tubes, 10-15m long, 100-150mm diameter, centrifugally cast HK40 steel (25% Cr, 20% Ni, resists 1,050°C). Conversion: 60-70% CH₄.

**Step 13-25: Secondary Reforming and CO Conversion**
Secondary reformer: add [air](air-separation) (source of N₂ for ammonia synthesis), partially combust remaining CH₄ with oxygen (exothermic raises temperature to 950-1,050°C), further reform over nickel catalyst. Air injection: provides N₂ in correct ratio (N₂:H₂ = 1:3 after complete conversion). Exit gas: H₂, N₂, CO, CO₂, H₂O, trace CH₄ (<0.5%). High-temperature shift (HTS): cool to 350-400°C, pass through iron-chromium oxide catalyst (Fe₃O₄-Cr₂O₃). Reaction: CO + H₂O → CO₂ + H₂ (water-gas shift, exothermic, ΔH = -41 kJ/mol). Reduces CO from 12% to 3%. Low-temperature shift (LTS): cool to 200-250°C, pass through copper-zinc oxide catalyst (CuO-ZnO-Al₂O₃). Further reduces CO to <0.3% (CO poisons ammonia synthesis catalyst - must be removed).

**Step 26-40: CO₂ Removal and Methanation**
Remove CO₂ (30-40% of gas stream by now). Absorption: bubble gas through amine solution (monoethanolamine MEA, or methyldiethanolamine MDEA, 15-30% in water) at 40°C, 25 bar. CO₂ dissolves: CO₂ + 2RNH₂ ⇌ RNH₃⁺ + RNHCOO⁻ (carbamate formation). Lean amine flows down absorber tower (countercurrent to gas), rich amine exits bottom. Regenerate amine: heat to 100-120°C in stripper column, CO₂ released (reverse reaction), vented or captured (carbon capture if facility has CCS). Lean amine recycled. Alternative: pressure swing adsorption (PSA, zeolite or carbon molecular sieve), or cryogenic separation. Gas after CO₂ removal: H₂ 73-74%, N₂ 24-25%, Ar 0.5%, CO 0.2-0.3%, CH₄ 0.2%, CO₂ <50 ppm. Methanation: final cleanup, remove trace CO and CO₂. Pass through nickel catalyst at 300-350°C. CO + 3H₂ → CH₄ + H₂O, CO₂ + 4H₂ → CH₄ + 2H₂O. Converts parts-per-million CO to CH₄ (inert to ammonia catalyst). Final syngas: H₂ 75%, N₂ 25%, inerts <1%.

**Step 41-58: Compression to Synthesis Pressure**
Ammonia synthesis requires high pressure: 150-250 bar (older plants 300 bar, modern 150 bar). [Multi-stage centrifugal compressor](synthesis-compressor): 3-5 stages with intercooling. Driven by steam turbine (using steam generated from waste heat of process - energy integration). Compressor power: 30-50 MW for 1,500 tonne/day plant (single largest power consumer in ammonia plant). Intercoolers: cool compressed gas to 40°C between stages (increases density, reduces next stage power). Knockout drums: remove condensed water after each stage. Compressed syngas: 200 bar, 40°C, ready for synthesis.

**Step 59-78: Haber-Bosch Catalytic Synthesis**
[Synthesis reactor](catalytic-reactor): vertical pressure vessel, 5-15 meters tall, 1-3 meters diameter, 20-30cm thick steel wall (withstand 200-300 bar). [Iron catalyst](catalyst-preparation): promoted iron (Fe₃O₄ "magnetite" reduced to metallic Fe⁰). Promoters: Al₂O₃ (3-5%, structural stabilizer prevents sintering), K₂O (0.5-1%, electronic promoter enhances N₂ adsorption), CaO (1-2%), MgO (0.5%). Catalyst bed: 50-100 tonnes, particle size 2-10mm (balance pressure drop vs surface area). Preheat syngas to 200-250°C, pass through catalyst bed. Reaction: N₂ + 3H₂ ⇌ 2NH₃ (exothermic, ΔH = -92 kJ/mol, equilibrium-limited). Temperature: 400-500°C (compromise - higher T increases rate but decreases equilibrium conversion). Pressure: 150-250 bar (shifts equilibrium toward NH₃, Le Chatelier's principle). Contact time: 1-3 seconds. Single-pass conversion: 15-25% (equilibrium limit at these conditions ~30-40%). Exit gas: 15-20% NH₃, remainder H₂ + N₂ + inerts.

**Step 79-92: Product Separation and Recycle**
Cool reactor effluent to -10°C to 0°C using ammonia refrigeration cycle (ammonia itself as refrigerant - self-contained). Ammonia condenses (boiling point -33°C at 1 bar, but at 200 bar condenses at 0°C). Liquid NH₃ separates in separator vessel. Unreacted syngas (H₂ + N₂) returned to reactor (recycle loop). Recycle ratio: 4:1 to 6:1 (recycle:fresh feed). Purge stream: small slip stream removed from recycle (0.5-2% of flow) to prevent inert buildup (Ar, CH₄). Purge gas: contains H₂ (50-60%), burned for fuel or used in hydrogen recovery unit (PSA). Liquid NH₃ product: 99.5% purity, 20-200 bar, -33°C (if depressurized to 1 bar) or ambient temperature (if kept pressurized). Overall yield: 99% of N₂ and H₂ converted to NH₃ (including recycle).

**Step 93-108: Energy Integration and [Heat Recovery](recuperator)**
Haber-Bosch process is energy-intensive: 28-35 GJ/tonne NH₃ (modern plants), equivalent to 1% of global energy consumption. Energy sources: natural gas (50-60% for H₂ production, 40-50% as fuel for reformer). Heat integration critical: (1) Pre-heat reformer feed with flue gas (700°C → 350°C). (2) Generate high-pressure steam (100 bar) from reformer, synthesis reactor heat. (3) Drive steam turbine with HP steam (turbine drives syngas compressor, reduces electrical power). (4) Use exhaust steam for process heating (reboilers, preheaters). (5) Ammonia refrigeration uses waste cold from expansion. Well-integrated plant: 50-60% thermal efficiency (energy in fuel → energy in NH₃ bonds + useful heat). Waste heat: 300-500°C flue gas exiting stack (unavoidable loss ~15% of input energy).

**Step 109-122: Catalyst Preparation and Activation**
[Catalyst manufacture](catalyst-preparation): melt magnetite (Fe₃O₄) ore with promoters (Al₂O₃, K₂O, CaO) at 1,600-1,800°C in electric arc furnace. Cool, crush to 2-10mm granules. Sieve to narrow size distribution. Catalyst as-produced is oxide (Fe₃O₄), inactive. In-situ reduction: after loading into reactor, reduce with H₂ + N₂ syngas (no NH₃ yet) at 200-250°C over 3-5 days. Reaction: Fe₃O₄ + 4H₂ → 3Fe + 4H₂O. Iron oxide converts to metallic iron (active catalyst). Carefully controlled (exothermic - overheating sinters catalyst, loses surface area). Activated catalyst: metallic Fe nanocrystals (10-30 nm) supported on Al₂O₃ matrix. Surface area: 10-20 m²/g. Catalyst lifetime: 10-20 years (deactivates by sintering, poisoning from trace S, Cl, O₂). Replacement: drain reactor, remove spent catalyst, load fresh, reduce. Cost: $2-5M for full catalyst charge (large plant).

**Step 123-135: Mechanism and Kinetics**
Rate-limiting step: N₂ dissociation on Fe surface. N₂ adsorbs on Fe, triple bond breaks (N≡N → 2N*ads, * denotes surface site, most difficult step, activation energy 150-200 kJ/mol). H₂ dissociates easily (H-H bond weaker). Surface Nads reacts with surface Hads: N*ads + H*ads → NH*ads, NH*ads + H*ads → NH₂*ads, NH₂*ads + H*ads → NH₃. NH₃ desorbs. Promoters: K₂O donates electrons to Fe (increases electron density at surface, weakens N₂ bond, enhances adsorption). Al₂O₃ creates rough surface texture (step edges, kinks - high activity sites). Reaction is structure-sensitive: Fe(111) face most active. Temperature dependence: below 400°C too slow (kinetic limitation), above 500°C equilibrium unfavorable (thermodynamic limitation). Optimal: 450°C. Pressure: higher is better (thermodynamics and kinetics both favor), but equipment cost and safety limit to 150-300 bar.

**Step 136-148: Storage, Transport, and Safety**
Store liquid NH₃ in pressure vessels: 18 bar (at 25°C) or refrigerated storage (atmospheric pressure, -33°C). Refrigerated: cheaper for large volume (>1,000 tonnes), insulated tanks, ammonia refrigeration cycle maintains temperature. Pressure storage: smaller volumes, no refrigeration needed. Tank materials: carbon steel (NH₃ non-corrosive to steel if anhydrous). Avoid copper alloys (stress-corrosion cracking). Transport: pipeline (local, Midwest US has ammonia pipelines to farms), rail tank cars (30-130 tonnes), barges (river/coastal), ocean tankers (25,000-50,000 tonnes LPG carriers). Safety hazards: toxic (TLV-TWA 25 ppm, IDLH 300 ppm), corrosive to mucous membranes (causes pulmonary edema, eye/skin burns), flammable (LEL 15%, UEL 28% in air). Anhydrous NH₃ releases: forms visible white cloud (condenses moisture), heavier than air when cold (collects in low areas). Emergency response: water spray knocks down vapor, creates ammonium hydroxide (dilute, less hazardous). Respiratory protection: SCBA (self-contained breathing apparatus) for >300 ppm. Ammonia leaks detected by smell (characteristic pungent odor, detectable at 5 ppm).

**Step 149-160: Environmental and Economic Impact**
Global production: 175 million tonnes/year (2023). China: 30% of global production. Russia, India, USA each ~10%. Consumption: fertilizers 80% (urea, ammonium nitrate, ammonium phosphate, direct application), chemicals 12% (nitric acid, explosives, nylon, acrylonitrile), refrigeration 3%, other 5%. CO₂ emissions: 1.8-2.5 tonnes CO₂/tonne NH₃ (from natural gas combustion and reforming). Total: 400-500 million tonnes CO₂/year from ammonia production (1-1.5% of global emissions). Decarbonization efforts: (1) Green ammonia: use renewable electricity + water electrolysis → H₂, combine with N₂ from air separation. Zero carbon if renewable power. Electrolysis cost currently 2-3× higher than SMR. (2) Blue ammonia: conventional process + carbon capture and storage (CCS), capture 85-90% of CO₂. Several pilot plants operational. (3) Alternative catalysts: ruthenium (Ru) more active than Fe, works at lower pressure/temperature, but expensive (Ru price $15,000/kg vs Fe $500/tonne). Economics: ammonia price $300-600/tonne (2010-2024 range, volatile, tracks natural gas price). Production cost breakdown: natural gas 70-80%, capital 10-15%, labor 5-10%, maintenance 5%. Plant scale: 1,000-3,500 tonnes/day (modern world-scale plant). Capital cost: $500M-1.5B for 2,000 tonne/day plant. Payback: 5-10 years.

Price: $0.40/kg ($400/tonne) represents average selling price. Used as feedstock for nitric acid (for etchants), ammonium hydroxide (for wafer cleaning), and nitrogen (by dissociation or combustion). Per chip allocation: minimal (micrograms of NH₃-derived chemicals per chip). This $0.4 represents commodity price for ammonia traded globally, not per-chip allocation.
