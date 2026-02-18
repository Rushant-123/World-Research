---
title: "Logic Board (Motherboard)"
company: "Foxconn / Pegatron / Quanta"
country: "Taiwan / China"
selling_price: 120
inputs:
  - name: "PCB Substrate"
    cost: 25
    link: "multilayer-pcb"
  - name: "M3 Chip"
    cost: 300
    link: "m3-chip"
  - name: "Power Management IC"
    cost: 8
    link: "pmic-chip"
  - name: "Audio Codec"
    cost: 3
    link: "audio-chip"
  - name: "Thunderbolt Controller"
    cost: 12
    link: "thunderbolt-chip"
  - name: "SSD Controller"
    cost: 6
    link: "storage-controller"
  - name: "Capacitors"
    cost: 5
    link: "mlcc-capacitors"
  - name: "Resistors"
    cost: 2
    link: "smd-resistors"
  - name: "Inductors"
    cost: 3
    link: "smd-inductors"
  - name: "Connectors"
    cost: 8
    link: "board-connectors"
  - name: "Voltage Regulators"
    cost: 10
    link: "voltage-regulator"
  - name: "Crystals/Oscillators"
    cost: 2
    link: "quartz-oscillator"
  - name: "SMT Equipment"
    cost: 15
    link: "smt-line"
  - name: "Reflow Oven"
    cost: 3
    link: "reflow-oven"
  - name: "AOI System"
    cost: 2
    link: "optical-inspection"
  - name: "X-Ray Inspection"
    cost: 2
    link: "xray-inspection"
  - name: "Functional Tester"
    cost: 5
    link: "board-tester"
  - name: "Solder Paste"
    cost: 1
    link: "solder-paste"
  - name: "Electricity"
    cost: 2
    link: "electricity"
  - name: "Assembly Workers"
    cost: 10
    link: "electronics-assembly"
value_created: -302
lead_time_days: 60
minimum_order_quantity: 100
transportation_method: "ocean"
geopolitical_risk: "low"
price_volatility: "medium"

certifications:
  - "ISO9001"
  - "ISO14001"
data_quality: "estimated"
---

# How to Make a Logic Board

**Top Market Leaders:**
- [Foxconn](/companies/foxconn)
- [Pegatron](/companies/pegatron)
- [Quanta](/companies/quanta)



A logic board (motherboard) is the main circuit board in a computer, connecting all components. Contains the processor, memory, power management, I/O controllers, and hundreds of support components. Apple calls it the "logic board" while most others call it the "motherboard".

## What is it?

A multilayer printed circuit board (8-12 layers) with the M3 chip, power delivery system, storage controller, Thunderbolt ports, audio system, and hundreds of passive components. The logic board is custom-designed by Apple with extremely dense component placement to fit in thin laptop chassis.

## Steps to Make:

**PCB Design:**
1. Apple engineers design logic board using EDA (electronic design automation) software
2. Define board size: typically 200mm × 150mm for 13" MacBook
3. Design power delivery: multiple voltage rails (1.0V for CPU cores, 3.3V, 5V, 12V, etc.)
4. Route high-speed signals: PCIe lanes, LPDDR5 memory traces, Thunderbolt
5. Place M3 chip location and fan-out BGA connections through vias
6. Design requires 8-12 copper layers for routing complexity
7. Outer layers: component mounting and power planes
8. Inner layers: signal routing, ground planes
9. Ensure signal integrity: controlled impedance traces, length matching for differential pairs
10. Simulate thermal performance - M3 chip generates 25-40W heat
11. Place thermal vias under M3 to conduct heat to chassis
12. Design takes 6-12 months with iterations

**PCB Manufacturing:**
13. Send design files (Gerber format) to PCB fabricator
14. Fabricator creates [PCB Substrate](multilayer-pcb) with 8-12 copper layers
15. Process: layer up core materials, laminate with copper, photoimage, etch, drill vias, plate, repeat
16. Micro-vias connect adjacent layers (laser-drilled, 100 micron diameter)
17. Through-holes connect all layers (mechanical drill, 200-300 micron)
18. Surface finish: ENIG or ENEPIG for reliable BGA mounting
19. Apply solder mask (green, black, or blue coating)
20. Silkscreen component designators
21. PCB fabrication takes 2-3 weeks
22. Bare board cost: $25-40 for this complexity

**Component Procurement:**
23. Order all components months in advance
24. [M3 Chip](m3-chip) from TSMC - lead time 3-4 months
25. [Power Management IC](pmic-chip) - manages all voltage rails
26. [Audio Codec](audio-chip) - converts digital to analog for speakers/headphones
27. [Thunderbolt Controller](thunderbolt-chip) - handles Thunderbolt 4 protocol
28. [SSD Controller](storage-controller) - manages soldered-down NAND flash
29. [Voltage Regulators](voltage-regulator) - buck converters for each power rail (10-20 regulators)
30. [Capacitors](mlcc-capacitors) - 200-500 MLCC (multilayer ceramic capacitors) for power filtering
31. [Resistors](smd-resistors) - 300-600 resistors for pull-ups, current sensing, voltage dividers
32. [Inductors](smd-inductors) - 30-50 inductors for power supplies
33. [Connectors](board-connectors) - battery connector, display connector, keyboard, trackpad, etc.
34. [Crystals/Oscillators](quartz-oscillator) - clock sources for various subsystems
35. Typical logic board: 800-1,500 individual components

**Solder Paste Application:**
36. [Assembly Workers](electronics-assembly) load bare PCB into SMT line
37. Powered by [Electricity](electricity) throughout process
38. Stencil printer applies [Solder Paste](solder-paste) to pads
39. Stencil is stainless steel sheet with laser-cut openings matching pad locations
40. Squeegee pushes solder paste through openings onto pads
41. Paste thickness: 100-150 microns
42. Solder paste contains tiny solder spheres (25-45 micron) in flux
43. AOI (automated optical inspection) checks paste deposition quality

**Component Placement:**
44. PCB moves to [SMT Equipment](smt-line) pick-and-place machines
45. Machine 1 places small passive components (resistors, capacitors)
46. Vacuum nozzles pick components from tape reels
47. Vision system aligns component to pad (accuracy ±25 microns)
48. Place 10,000-30,000 components per hour
49. Machine 2 places medium components (inductors, smaller ICs)
50. Machine 3 places large components (BGA packages, connectors)
51. [M3 Chip](m3-chip) placement requires high precision - BGA has 1,000+ balls on 0.4mm pitch
52. Vision system uses fiducial marks on PCB and chip for alignment
53. Gently place chip onto solder paste
54. Total placement time: 5-10 minutes for entire board

**Reflow Soldering:**
55. Loaded PCB enters [Reflow Oven](reflow-oven) - conveyor oven with multiple zones
56. Preheat zone: slowly warm to 150-180°C over 60-90 seconds
57. Thermal soak zone: hold 150-180°C for 60-120 seconds
58. Flux activates, cleans pad surfaces
59. Ramp to peak temperature: 220-250°C (lead-free solder)
60. Peak zone: hold 230-250°C for 30-60 seconds
61. Solder paste melts, solder spheres coalesce
62. Surface tension pulls components into alignment (self-centering)
63. Cooling zone: controlled cool-down to solidify solder
64. Total reflow time: 4-6 minutes
65. Exit oven, visually inspect for obvious defects

**Inspection - Top Side:**
66. [AOI System](optical-inspection) captures high-resolution images
67. Software compares to golden reference image
68. Detects: missing components, misaligned components, solder bridges, insufficient solder
69. Inspection takes 30-60 seconds
70. Flag defects for manual review

**Flip and Repeat for Bottom Side:**
71. If components on both sides, flip board
72. Solder paste on top side has solidified, components won't fall off
73. Repeat paste, placement, reflow for bottom side

**BGA X-Ray Inspection:**
74. [X-Ray Inspection](xray-inspection) system checks BGA solder joints
75. X-ray penetrates chip package, reveals solder balls underneath
76. Critical for M3 chip - cannot visually inspect hidden connections
77. Verify all balls wetted properly, no voids, no bridges
78. Automated X-ray inspection takes 2-3 minutes per board

**Through-Hole Components (if any):**
79. Some connectors are through-hole (pins go through PCB)
80. Insert components manually or with automated insertion
81. Wave soldering or selective soldering for through-hole
82. Or hand soldering with soldering iron

**Cleaning:**
83. Wash board to remove flux residue
84. Use ultrasonic cleaner with DI water or cleaning solution
85. Dry in oven or with compressed air
86. Clean boards prevent corrosion and improve reliability

**Functional Testing:**
87. Connect board to [Functional Tester](board-tester) fixture
88. Tester has pogo pins that contact test points on PCB
89. Apply power to board
90. Download test firmware to M3 chip
91. Test firmware exercises all functions:
    - Power rails: verify all voltages present and within tolerance
    - M3 chip: verify boot, CPU cores functional, GPU functional
    - Memory: test soldered LPDDR5 RAM chips
    - Thunderbolt ports: loopback test
    - Audio codec: generate and capture test tones
    - Sensors: temperature, accelerometer
92. Test takes 5-15 minutes per board
93. Yield at this stage: typically 95-98%

**Debug and Rework:**
94. Failed boards go to debug station
95. Technicians use oscilloscope, multimeter, thermal camera to diagnose
96. Common failures: solder bridges (shorts), cold solder joints (intermittent opens), damaged components
97. Rework: remove defective component with hot air station, clean pads, place new component, reflow
98. Some defects are unrepairable (damaged PCB traces) - board is scrapped

**Programming:**
99. Flash firmware to various chips (PMIC, Thunderbolt controller, etc.)
100. Program serial number and hardware identifiers
101. Lock down security fuses

**Burn-In Testing:**
102. Power on boards and run at elevated temperature (45-55°C) for 24-48 hours
103. This accelerates infant mortality failures
104. Failed boards removed before shipping to customer
105. Burn-in reduces field failure rate

**Final QC:**
106. Visual inspection under magnification
107. Check for cosmetic defects: scratches, discoloration
108. Verify all components present and correct orientation
109. Check for contamination or foreign material
110. Scan barcode/serial number into tracking system

**Packaging:**
111. Place board in anti-static tray
112. Seal in moisture barrier bag with desiccant
113. Humidity indicator card shows if exposure to moisture
114. Package in cardboard box
115. Ship to laptop assembly facility

**Logic Board Specifications (typical MacBook):**
- Layers: 8-12 copper layers
- Thickness: 1.0-1.6mm
- Components: 800-1,500 parts
- BGA packages: 5-15 (M3, PMIC, NAND, controllers)
- Passive components: 700-1,400 (resistors, capacitors, inductors)
- Connectors: 15-30
- Power rails: 10-20 different voltages
- Highest current rail: 1.0V CPU core, 50-100A peak
- PCB copper weight: 1-2 oz/ft² outer layers, 0.5 oz inner layers
- Smallest component: 0201 size (0.6mm × 0.3mm)
- Largest component: M3 chip (10-15mm square)

**Manufacturing Metrics:**
- SMT line speed: 500-1,000 boards per day per line
- Defect rate (post-SMT): 2-5%
- Yield (post-test): 95-98%
- Overall yield: 93-96%
- Assembly cost: $30-50 (labor + overhead)
- Total BOM (bill of materials) cost: $150-200
- Selling price to Apple: $120 (this is the final board cost, M3 chip cost shown separately in Mac assembly)

The logic board is the most complex component in the laptop besides the processor itself. Design requires balancing electrical performance, thermal management, size constraints, and manufacturability. Modern logic boards achieve incredible component density - 800+ parts on a board the size of a paperback book.
