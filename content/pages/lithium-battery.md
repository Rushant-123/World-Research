---
title: "Lithium-Ion Battery"
company: "CATL / LG Energy / Samsung SDI"
country: "China / South Korea"
selling_price: 50
inputs:
  - name: "Cathode Material"
    cost: 15
    link: "cathode-material"
  - name: "Anode Material"
    cost: 8
    link: "graphite-anode"
  - name: "Electrolyte Solution"
    cost: 5
    link: "battery-electrolyte"
  - name: "Separator Membrane"
    cost: 3
    link: "battery-separator"
  - name: "Copper Foil"
    cost: 4
    link: "copper-foil"
  - name: "Aluminum Foil"
    cost: 3
    link: "aluminum-foil"
  - name: "Battery Case"
    cost: 4
    link: "aluminum-pouch"
  - name: "BMS Circuit"
    cost: 5
    link: "battery-management-system"
  - name: "Coating Equipment"
    cost: 1
    link: "slot-die-coater"
  - name: "Drying Oven"
    cost: 0.5
    link: "vacuum-oven"
  - name: "Assembly Line"
    cost: 0.5
    link: "battery-assembly-line"
  - name: "Dry Room"
    cost: 1
    link: "dehumidified-room"
  - name: "Electricity"
    cost: 0.5
    link: "electricity"
  - name: "Battery Workers"
    cost: 3
    link: "battery-technicians"
value_created: 3.5
---

# How to Make a Lithium-Ion Battery

**Top Market Leaders:**
- [Catl](/companies/catl)
- [Lg Energy](/companies/lg-energy)
- [Panasonic](/companies/panasonic)



A lithium-ion battery stores electrical energy through reversible electrochemical reactions. Lithium ions move between anode and cathode during charge/discharge cycles. Used in laptops, phones, and electric vehicles.

## What is it?

A rechargeable battery using lithium cobalt oxide (or similar) cathode, graphite anode, and lithium-salt electrolyte. Voltage per cell: 3.6-3.7V nominal, 4.2V fully charged, 3.0V discharged. Energy density: 150-270 Wh/kg. Typical laptop battery: 50-70 watt-hours, multiple cells in series/parallel configuration.

## Steps to Make:

**Cathode Preparation:**
1. Mix [Cathode Material](cathode-material) powder (LiCoO₂, NMC, or LFP) with conductive carbon black and PVDF binder
2. Common cathode: NCM 811 (80% nickel, 10% cobalt, 10% manganese)
3. Mix in planetary mixer to form slurry - consistency like thick paint
4. Add NMP (N-Methyl-2-pyrrolidone) solvent to adjust viscosity
5. Mix ratio: 94% active material, 3% carbon black, 3% binder
6. [Battery Workers](battery-technicians) prepare slurry in controlled atmosphere
7. Unroll [Aluminum Foil](aluminum-foil) (15-20 microns thick) as current collector
8. Feed foil through [Coating Equipment](slot-die-coater) - precision coating machine
9. Slot die applies uniform layer of cathode slurry onto both sides of aluminum foil
10. Coating thickness: 50-80 microns (wet), leaves 2cm uncoated strip for tab
11. Feed coated foil through [Drying Oven](vacuum-oven) at 120-150°C
12. Solvent evaporates, leaving solid cathode coating bonded to foil
13. Roll up dried cathode sheet
14. Use calendar rollers to compress coating to target density (3.6-3.9 g/cm³)
15. Compression improves electrical contact between particles
16. Slit wide cathode roll into narrow strips (width matches cell design)

**Anode Preparation:**
17. Mix [Anode Material](graphite-anode) powder (synthetic or natural graphite) with binder
18. Graphite particle size: 10-20 microns
19. Add CMC (carboxymethyl cellulose) and SBR (styrene-butadiene rubber) binders
20. Mix with water to form slurry
21. Unroll [Copper Foil](copper-foil) (8-10 microns thick) as anode current collector
22. Coat both sides with anode slurry using slot die coater
23. Coating thickness: 60-90 microns (wet)
24. Dry at 100-120°C in vacuum oven
25. Calendar to target density (1.5-1.7 g/cm³)
26. Slit into strips matching cathode dimensions

**Electrode Cutting:**
27. Transfer to [Dry Room](dehumidified-room) with <1% humidity (dew point -40°C)
28. Low humidity prevents moisture contamination which damages battery performance
29. Use laser cutting or die cutting to cut electrodes into precise shapes
30. Cathode slightly smaller than anode to prevent lithium plating at edges
31. Typical shapes: rectangular for pouch cells, strips for cylindrical cells
32. Weld metal tabs to uncoated areas of foil for external connections
33. Cathode tab: aluminum, Anode tab: nickel or copper

**Separator Preparation:**
34. Unroll [Separator Membrane](battery-separator) - polyethylene or polypropylene film
35. Separator thickness: 16-25 microns, covered with ceramic coating
36. Microscopic pores (0.05 micron) allow lithium ions to pass but prevent electron flow
37. Prevents cathode and anode from touching (would cause short circuit)
38. Cut separator to size slightly larger than electrodes

**Cell Assembly (Pouch Cell):**
39. Work continues in dry room (<1% humidity)
40. Lay first separator on assembly table
41. Place cathode on separator
42. Add another separator layer
43. Place anode on second separator
44. Repeat stacking: separator-cathode-separator-anode...
45. Typical laptop cell: 10-15 layers
46. Ensure perfect alignment - misalignment reduces performance or causes shorts
47. Automated [Assembly Line](battery-assembly-line) stacks with vision guidance
48. Fold assembly into Z-fold or jelly-roll configuration
49. Insert stack into [Battery Case](aluminum-pouch) - flexible aluminum-polymer laminate pouch
50. Leave tabs protruding from one edge
51. Seal three sides of pouch using heat sealing machine
52. Leave one edge open for electrolyte filling

**Electrolyte Filling:**
53. Prepare [Electrolyte Solution](battery-electrolyte) - lithium hexafluorophosphate (LiPF₆) dissolved in organic carbonates
54. Typical: 1M LiPF₆ in EC:DMC:EMC (ethylene/dimethyl/ethyl methyl carbonate mix)
55. Electrolyte must be extremely pure (moisture < 20 ppm)
56. Use vacuum filling system in dry room
57. Evacuate air from pouch cell
58. Inject precise amount of electrolyte (5-10ml per cell)
59. Electrolyte soaks into electrode pores and separator
60. Wait 12-24 hours for complete wetting

**Sealing:**
61. Vacuum seal final edge of pouch while removing excess air
62. Any air inside causes side reactions and degradation
63. Seal creates hermetic enclosure
64. Inspect seal integrity

**Formation (First Charge):**
65. Connect cell to charging equipment
66. Perform initial charge at very low current (C/20 rate)
67. This first charge forms SEI (solid electrolyte interphase) layer on anode
68. SEI is critical - it's a thin passivation layer that stabilizes the anode
69. Charge to 4.2V over 20-30 hours
70. SEI formation consumes some lithium irreversibly (capacity loss 5-10%)
71. Monitor voltage, current, and temperature during formation
72. Cells must be held at constant temperature (25°C ±2°C)

**Degassing:**
73. During formation, gases (CO₂, CO, H₂) are produced from electrolyte decomposition
74. Open a small corner of pouch seal in dry room
75. Press pouch to expel gases
76. Reseal immediately
77. Vacuum seal again to remove any remaining air

**Aging:**
78. Store cells at room temperature for 7-14 days
79. This allows SEI to stabilize and internal chemistry to equilibrate
80. Measure self-discharge rate - good cells lose <3% capacity per month
81. Reject cells with high self-discharge (indicates internal shorts)

**Grading and Testing:**
82. Charge and discharge each cell 2-3 times to measure capacity
83. Measure internal resistance using AC impedance
84. Test at various temperatures (-20°C, 25°C, 45°C)
85. Grade cells by capacity: A-grade (±1%), B-grade (±2%), C-grade (±3%)
86. Match cells with similar capacity for multi-cell packs
87. Perform safety tests on sample cells: nail penetration, crush, overcharge, short circuit

**BMS Integration:**
88. Solder tabs from battery cells to [BMS Circuit](battery-management-system) board
89. BMS monitors voltage of each cell, temperature, and current
90. BMS prevents overcharge (stops at 4.2V per cell)
91. BMS prevents over-discharge (stops at 3.0V per cell)
92. BMS balances cells during charging (ensures equal voltage)
93. BMS cuts off current if temperature exceeds 60°C

**Final Assembly:**
94. Encapsulate cell + BMS in plastic housing
95. Add thermistor (temperature sensor)
96. Add fuse or PTC (positive temperature coefficient) device for safety
97. Seal housing
98. Attach connector for laptop connection
99. Print label with capacity, voltage, safety warnings, serial number

**Final Testing:**
100. Charge battery to 100%
101. Test capacity by discharging at constant current
102. Verify BMS functions (cutoff voltages, temperature protection)
103. Check connector pins and resistance
104. Package in anti-static bag
105. Ship to laptop assembly facility

**Battery Specifications (typical 50Wh laptop battery):**
- Configuration: 6 cells in series (6S1P) or 4 cells in series, 2 in parallel (4S2P)
- Voltage: 11.4V or 14.8V nominal
- Capacity: 4000-5000 mAh
- Energy: 50-70 Wh
- Charge time: 2-3 hours (fast charge)
- Cycle life: 500-1000 cycles to 80% capacity
- Weight: 200-300 grams
- Cost: $50-80 depending on capacity

**Production requires [Electricity](electricity) throughout all heating, coating, and assembly steps.**

Manufacturing lithium-ion batteries is complex because moisture, contamination, or process variations significantly affect performance and safety. The dry room (<1% humidity) is essential - moisture causes electrolyte decomposition and capacity loss. Quality control is rigorous because battery failures can cause fires.
