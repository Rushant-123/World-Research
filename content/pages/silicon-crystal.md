---
title: "Single Crystal Silicon Ingot"
company: "Shin-Etsu / Sumco / GlobalWafers"
country: "Japan / Taiwan"
selling_price: 30
inputs:
  - name: "Polycrystalline Silicon"
    cost: 15
    link: "purified-silicon"
  - name: "Czochralski Puller"
    cost: 8
    link: "crystal-grower"
  - name: "Seed Crystal"
    cost: 0.5
    link: "silicon-seed"
  - name: "Quartz Crucible"
    cost: 3
    link: "fused-quartz-crucible"
  - name: "Graphite Heater"
    cost: 2
    link: "graphite-components"
  - name: "Argon Gas"
    cost: 0.5
    link: "argon-gas"
  - name: "Dopant"
    cost: 0.5
    link: "boron-dopant"
  - name: "Electricity"
    cost: 0.5
    link: "electricity"
value_created: 0
---

# How to Make Single Crystal Silicon Ingot

**Top Market Leaders:**
- [Shin-Etsu](/companies/shin-etsu)
- [Sumco](/companies/sumco)
- [GlobalWafers](/companies/globalwafers)



Perfect monocrystalline silicon - basis for all semiconductor wafers. Czochralski (CZ) method: grow cylindrical single crystal from molten silicon. Ingot: 200-450mm diameter, 1-3 meters long, 100-400 kg, <100> or <111> crystal orientation. Dislocation-free, oxygen-controlled, precise resistivity. 90% of silicon wafers from CZ ingots, 10% float-zone (FZ, higher purity but smaller diameter).

**Step 1-15: [Polycrystalline Silicon](purified-silicon) Loading**
Start with polysilicon chunks (Siemens rods or granular polysilicon, 99.9999999% Si, 9N purity, <0.1 ppb metals). Inspect each piece: reject discolored, cracked, contaminated chunks. Weigh charge: 120-450 kg poly for 200-450mm diameter ingot (melt 10-20% more than final ingot weight, losses to crucible/heater reactions). Etch poly in HF:HNO₃ (1:10 vol ratio, 5 minutes) - removes surface oxides, adsorbed contaminants. Rinse ultra-pure water (18 MΩ·cm, 5 cascading tanks). Dry in N₂ oven (120°C, 2 hours, <0.1 ppm O₂ atmosphere). Load into [quartz crucible](fused-quartz-crucible) (fused silica SiO₂, 22-30 inch diameter for 300mm wafer production, wall thickness 8-12mm, optical grade purity). Crucible preparation: pre-bake at 1,000°C in Ar atmosphere (removes adsorbed water, organics), coat inner surface with barium or strontium silicate (getters impurities, reduces oxygen dissolution).

**Step 16-35: [Crystal Grower](crystal-grower) Setup and Melt-Down**
[Czochralski puller](crystal-grower): vacuum chamber (316L stainless steel, 1.5-3m diameter, 3-5m tall), load crucible into graphite susceptor (holds crucible, induction-heated). Graphite heater: cylindrical coil around crucible, 50-150 kW RF induction power (200-400 kHz). Insulation: graphite felt or rigid graphite foam (minimizes heat loss, stabilizes melt temperature). Pull mechanism: precision servo motor + worm gear (rotation 5-30 rpm, pull rate 0.2-3 mm/min, accuracy ±0.01mm/min). Weighing system: load cell measures crystal weight (feedback control pull rate). Evacaute chamber: roughing pump (10⁻³ mbar), backfill with [argon](argon-gas) (high-purity 6N, 50-200 mbar positive pressure, inert atmosphere prevents Si oxidation, sweeps away SiO vapor). Heat crucible: ramp power 1,000-1,400°C over 2-4 hours (melting point Si 1,414°C). Monitor temperature: optical pyrometer (1,420-1,450°C melt temperature, ±2°C control, homogenize melt by crucible rotation 5-15 rpm). Doping: add [dopant](boron-dopant) chunks to melt. P-type (boron: 10¹⁵-10¹⁹ atoms/cm³ for 0.001-100 Ω·cm resistivity), N-type (phosphorus or arsenic: similar concentrations). Dopant distributes by convection, diffusion (30-60 minutes stirring for uniformity).

**Step 36-58: Seed Crystal Dipping and Necking**
[Seed crystal](silicon-seed): <100> or <111> orientation single crystal rod (6-12mm diameter, 100-200mm long, cleaved from previous ingot, etched, cleaned). Orientation determined by X-ray diffraction or laser scattering. Lower seed slowly into melt (dip rate 1-5 mm/min). Seed melts slightly (2-10mm tip dissolves, removes damaged surface layer, ensures good contact). Thermal shock management: preheat seed with radiant heaters (reduce thermal gradient ΔT <50°C/cm prevents cracking). **Necking (Dash technique):** After seed contact, rapidly pull at 3-5 mm/min while reducing power (creates thin "neck" 3-5mm diameter, 50-150mm long). Rapid pulling prevents dislocations from propagating from seed (thermal stress dislocates seed crystal, but dislocations cannot climb narrow neck, terminate at free surface). Neck takes 20-60 minutes. X-ray camera monitors neck formation (detect if polycrystalline, abort run). Perfect dislocation-free neck required (zero dislocation crystal, ZDC).

**Step 59-82: Shoulder Formation and Body Growth**
**Crown/shoulder:** After neck, slowly reduce pull rate to 0.5-1.5 mm/min and increase power slightly (diameter expands from 3-5mm neck to target diameter 200-450mm). Cone angle: 30-60° (gradual expansion prevents dislocations, thermal stress <50 MPa). Shoulder length: 50-150mm, takes 1-3 hours. Diameter control: optical diameter measurement (camera + image processing measures crystal diameter real-time, PID control adjusts pull rate and heater power to maintain target ±0.5mm). **Body (straight section):** Pull at constant diameter. Pull rate: 0.3-1.2 mm/min for 200-300mm diameter, 0.2-0.8 mm/min for 450mm (slower for larger diameter - heat extraction limited, too fast → thermal stress → dislocations). Crystal length: 1.5-3 meters for 300mm, 1-2m for 450mm (limited by crucible capacity, thermal gradient management). Growth time: 24-72 hours continuous. Rotation: crystal 5-20 rpm (enhance mixing in melt boundary layer, uniform dopant incorporation, symmetrical crystal). Crucible rotation: opposite direction to crystal, 5-15 rpm (melt convection, temperature uniformity). Crucible lift: slowly raise crucible 0.1-0.5 mm/min as melt depletes (maintains melt surface position, constant thermal environment for crystal). Magnetic field (optional, for 300mm+): apply axial or transverse magnetic field 0.1-0.5 Tesla (Lorentz force suppresses turbulent convection, stabilizes melt flow, reduces oxygen and dopant striations).

**Step 83-105: Tail-Off and Cool-Down**
When ~95% of silicon crystallized (5% melt remains, crucible nearly empty), begin tail-off. Gradually increase pull rate to 3-10 mm/min and reduce power (taper crystal to point, cone angle 60-90°, 50-100mm tail length, 30-60 minutes). Tail detaches crystal from melt (clean separation, no residual liquid). Lift crystal completely out of hot zone (above heater, into cooler upper chamber). Cool-down: critical for minimizing thermal stress (prevents slip - plastic deformation along {111} planes, creates dislocations, ruins crystal). Anneal in hot zone: hold crystal at 1,000-1,200°C for 1-4 hours (reduces thermal gradients to <10°C/cm, allows point defects - vacancies and interstitials - to recombine or agglomerate). Slow cool: 20-50°C/hour ramp to 500°C over 10-20 hours. Below 500°C, cool faster (thermal stress negligible). Argon purge continues (prevent oxidation). Total cool-down: 15-30 hours.

**Step 106-125: Crystal Quality Parameters**
**Dislocation density:** Zero (CZ method via Dash neck technique achieves dislocation-free crystals, required for device fabrication - dislocations cause leakage, shorts, degraded device performance). Verify by X-ray topography (Lang camera, shows dislocation lines) or etch-pit density (Wright etch - HF:HNO₃:CrO₃, reveals etch pits at dislocation intersections, <1/cm² spec, typically 0/cm²). **Oxygen content:** 10-18 ppma (parts per million atomic, 5×10¹⁷ - 9×10¹⁷ atoms/cm³). Oxygen from quartz crucible (SiO₂ + Si → SiO ↑, SiO dissolves in melt, incorporates in crystal). Benefits: internal gettering (nucleates SiO₂ precipitates at 900-1,100°C, trap metallic impurities during wafer processing, improves device yield), mechanical strength (larger oxygen increases yield strength 30%, reduces warpage). Drawbacks: thermal donors (oxygen complexes create shallow donors at 450°C, unintended doping), bulk stacking faults (oxygen precipitates nucleate defects if concentration too high >20 ppma). Control oxygen: adjust Ar flow (high flow sweeps SiO vapor away, reduces oxygen), magnetic field (reduces convection, less crucible dissolution), crucible rotation rate. Axial variation: oxygen decreases along ingot (early growth high oxygen, crucible dissolves; late growth low oxygen, SiO₂ depleted). Radial variation: ±10% from center to edge (controlled by pulling/rotation rates).

**Step 126-145: Point Defects and Crystal Perfection**
Silicon crystal contains intrinsic point defects: vacancies (V, missing Si atom, forms at high temperature, freezes in during solidification) and self-interstitials (I, extra Si atom in interstitial site). Concentrations at melting point: 10¹⁴/cm³ each, equilibrate during growth. Freeze-in: above 1,100°C, defects mobile (diffuse, recombine, agglomerate), below 1,100°C, immobile (concentration frozen). **Vacancy-rich (V) crystal:** Slow pull rate → excess vacancies (V > I). Vacancies aggregate → voids (octahedral cavities 50-200nm, COP: crystal-originated particles, seen by laser scattering, cause gate oxide defects). **Interstitial-rich (I) crystal:** Fast pull rate → excess interstitials (I > V). Interstitials aggregate → dislocation loops (punch-out dislocations, A-swirl defects, B-swirl defects). **Perfect crystal region:** V/G ratio (pull rate / thermal gradient) = 0.13-0.18 mm²/min·K. In this narrow window, V and I recombine nearly completely (no aggregates, defect-free crystal). 300mm wafers: pull at 0.4-0.6 mm/min, thermal gradient 60-80 K/cm → V/G = 0.14-0.16 (perfect region). Difficult for 450mm (slower pull, larger hot zone, gradient <40 K/cm, challenging to maintain V/G ratio).

**Step 146-165: Post-Growth Processing**
Remove crystal from puller (open chamber, crane lifts ingot + seed cable, 200-500 kg total). Visual inspection: surface quality (no cracks, severe striations, polycrystalline regions - discard if found). **Diameter grinding:** Mount ingot on centerless grinder (rotating abrasive wheel), grind outer surface to precise diameter (200.0±0.2mm for 200mm, 300.0±0.2mm for 300mm, remove saw damage, achieve cylindrical shape <0.1mm roundness). Diamond grinding wheel (150-250 µm grit), coolant flood (prevent thermal damage). **Orientation flat or notch:** Grind flat along specific crystal plane (primary flat: <110> direction for <100> crystal, 32-58mm length for 200mm wafer) or notch (V-shaped, 450mm wafers use notch instead of flat). Purpose: orient wafer during lithography (align to crystal planes), identify dopant type (flat length codes p-type vs n-type). **End cropping:** Saw off seed end (50-150mm, cone), tail end (50-100mm, cone), discard (non-usable, wrong diameter). Diamond wire saw or ID saw (inner-diameter blade). Coolant: DI water or glycol. **Crystal slicing preview:** X-ray diffraction verifies <100> orientation (<0.5° miscut tolerance), resistivity test (four-point probe on polished ends, 0.1-100 Ω·cm depending on doping), interstitial oxygen measurement (FTIR: Fourier transform infrared spectroscopy, 1,106 cm⁻¹ absorption peak, calibrate to ASTM F121).

**Step 166-180: Quality Assurance and Yield**
**Ingot yield:** 60-80% of poly charge becomes usable wafers. Losses: crucible/heater reactions (5-10%), top cone, bottom tail, end crops (15-20%), grinding (2-5%), slice kerf loss (30-40% in wire sawing). **Test wafers:** Slice sample wafers from ingot ends, polish, test. Resistivity map (spreading resistance or four-point probe, ±5-10% spec across wafer, ±20% along ingot). Minority carrier lifetime (μs, measure recombination rate, >100 μs for device-quality, >1,000 μs for high-efficiency solar). Oxygen and carbon content (FTIR, secondary ion mass spectrometry SIMS for low concentrations). Metallic impurities (TXRF: total-reflection X-ray fluorescence, ICPMS, detect Fe, Cu, Ni, Cr, Zn at 10⁹-10¹¹ atoms/cm² surface, <10¹⁰ spec). Microdefects: optical microscopy (after Wright etch), laser scattering (COP voids >50nm), TEM cross-sections (dislocation loops). **Certify:** Ingot passes QC → slice into 100-200 wafers (200mm ingot 1.5m long → 150-200 wafers at 725 µm slice + 150 µm kerf). Reject ingots: dislocations present (scrap, recharge in next run), wrong resistivity (dopant error, recharge with compensation doping), high metallic contamination (trace if source, improve cleanliness, recharge). Crystal grower yield: 85-95% of runs produce spec ingots (5-15% scrap rate due to dislocations, polycrystalline growth, equipment malfunction, power outages causing thermal shock).

**Step 181-195: Market, Specifications, and Economics**
Global silicon wafer market: 13-14 billion wafers/year (2023, mostly 300mm, some 200mm legacy, pilot 450mm). Ingot production: 8,000-10,000 ingots/year for 300mm (each ingot → 100-150 wafers, 1-1.5 million wafers/year per ingot plant). **Suppliers:** Shin-Etsu (Japan, 30% market share), Sumco (Japan, 25%), GlobalWafers (Taiwan, 17%), Siltronic (Germany, 13%), SK Siltron (Korea, 10%), others 5%. Integrated operations: polysilicon → ingot → wafer slicing/polishing (vertical integration reduces cost, quality control). **Pricing:** 200mm ingot: $1,000-2,000 (diameter 200mm, length 1.5m, 60 kg, p-type <100>, 1-10 Ω·cm). 300mm ingot: $4,000-8,000 (diameter 300mm, length 2m, 200 kg). Prime polished wafer equivalent: $50-150 per 300mm wafer (ingot cost $25-40, slicing $5-10, polishing $15-30, testing/handling $5-10, overhead/margin $10-30). Reclaim wafers: $15-40 (test wafers repolished, reused). **Cycle time:** Poly loading to ingot removal: 3-5 days (2-3 days growth, 1-2 days cool-down, <1 day setup/teardown). Grinder + testing: 1-2 days. Slicing: 1 day. Total ingot-to-wafer: 5-8 days. **Capital:** CZ puller: $3-10M (300mm), $15-25M (450mm prototype). Facility: cleanroom Class 1,000-10,000 (less stringent than wafer fab), DI water, gases, power (400-800 kW per puller). **Consumables:** Quartz crucible (1 per ingot, $1,500-5,000 for 300mm, single use - reacts with Si, dissolves, cracks after growth). Graphite parts (heater, susceptor, insulation, $5,000-15,000 per run, use 3-10 runs before replacement). Argon: 10-50 kg per ingot (purge, $2-10). Seed crystal: $50-200 (reuse from previous ingots, etch and regrind).

Price: $30 represents cost allocation for single-crystal ingot entering wafer slicing. Actual ingot prices $4,000-8,000 (300mm) spread over 100-150 wafers = $30-75 per wafer in ingot cost. This ingot is further processed (slicing, polishing) before becoming finished wafer ready for chip fabrication.
