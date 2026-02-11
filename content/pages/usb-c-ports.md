---
title: "USB-C Ports"
company: "JAE / Amphenol / Molex"
country: "Japan / USA"
selling_price: 8
inputs:
  - name: "Connector Housing"
    cost: 2
    link: "injection-molded-housing"
  - name: "Contact Pins"
    cost: 3
    link: "brass-pins"
  - name: "PCB Module"
    cost: 1.5
    link: "connector-pcb"
  - name: "Metal Shield"
    cost: 0.8
    link: "stainless-steel-shield"
  - name: "Mounting Brackets"
    cost: 0.3
    link: "metal-brackets"
  - name: "Gold Plating"
    cost: 0.3
    link: "electroplating-gold"
  - name: "Assembly Labor"
    cost: 0.1
    link: "connector-assembly"
value_created: 0
---

# How to Make USB-C Ports

USB-C (USB Type-C) is a reversible connector standard for data, video, and power delivery. Supports: USB 2.0, USB 3.2 (10-20 Gbps), Thunderbolt 3/4 (40 Gbps), DisplayPort, and USB Power Delivery (up to 240W). Compact 24-pin connector with identical top/bottom insertion.

## What is it?

A compact connector (8.4mm × 2.6mm) with 24 pins in dual-sided configuration allowing reversible insertion. Pins carry: USB 2.0 (D+/D-), USB 3.2 SuperSpeed lanes (4 differential pairs), sideband signals (CC, SBU), and power (VBUS/GND supporting 5-48V). MacBook USB-C ports support Thunderbolt 4 (40 Gbps), DisplayPort 1.4, and USB-PD (100W charging).

## Steps to Make:

**Contact Pin Manufacturing:**
1. Start with brass strip ([Brass Pins](brass-pins)) - copper-zinc alloy
2. Brass: 65% copper, 35% zinc (C26000 alloy)
3. Strip thickness: 0.15-0.25mm, width: 50-100mm
4. Feed brass strip through progressive stamping die
5. Progressive die: multi-stage tool that stamps features sequentially
6. Stage 1: Pierce pilot holes for registration
7. Stage 2: Blank pin outline
8. Stage 3: Form spring beam (provides contact force)
9. Stage 4: Form contact tip (curved for reliable mating)
10. Stage 5: Form solder tail
11. Each stroke produces one pin, 200-600 strokes per minute
12. Pins remain on carrier strip until final stage

**Gold Plating:**
13. [Gold Plating](electroplating-gold) on contact areas
14. Clean pins in alkaline solution to remove oils
15. Rinse with deionized water
16. Electroplate nickel undercoat (1-2 microns)
17. Nickel provides barrier, prevents copper migration
18. Electroplate gold over nickel (0.05-0.5 microns)
19. Gold thickness depends on duty: 0.05µm light duty, 0.5µm heavy duty
20. Gold provides: low contact resistance, corrosion resistance, durability
21. Soft gold (99.7% pure) for low insertion force
22. Hard gold (cobalt-hardened) for durability (10,000+ insertions)
23. MacBook USB-C: typically 0.3µm gold (30 micro-inches)
24. Rinse and dry pins

**Housing Molding:**
25. Injection mold [Connector Housing](injection-molded-housing)
26. Material: high-temperature thermoplastic (LCP - liquid crystal polymer)
27. LCP properties: high strength, dimensional stability, heat resistance (260°C)
28. Create steel mold with pin cavities (24 positions)
29. Inject molten LCP at 320-360°C
30. Mold pressure: 100-150 MPa
31. Hold time: 5-10 seconds
32. Cool and eject housing
33. Housing dimensions: 8.34mm × 2.56mm external
34. Internal cavities for pins: ±20 micron tolerance
35. Tongue thickness: 0.65mm (must fit in receptacle)

**Shield Stamping:**
36. Stamp [Metal Shield](stainless-steel-shield) from stainless steel sheet
37. Thickness: 0.15-0.2mm
38. Progressive die forms: outer shell, mounting tabs, ground clips
39. Shield encloses housing for EMI protection
40. Ground clips contact mating connector shield

**Pin Insertion:**
41. [Assembly Labor](connector-assembly) in automated facility
42. Automated insertion machine picks pins from carrier strip
43. Singulate pins from carrier (cut from strip)
44. Insert pins into housing cavities
45. Insertion force: 50-100N (controlled by press)
46. Pin barbs lock into housing
47. Verify pin position: optical inspection
48. Insert 24 pins sequentially (A1-A12, B1-B12)
49. Pin layout (receptacle):
    - A1/B1, A12/B12: GND
    - A4/B4, A9/B9: VBUS (power)
    - A5/B5: CC (configuration channel)
    - A6/B6: D+ (USB 2.0)
    - A7/B7: D- (USB 2.0)
    - A2/A3/A10/A11, B2/B3/B10/B11: SuperSpeed TX/RX (USB 3.x/Thunderbolt)
    - A8/B8: SBU (sideband use)

**Shield Assembly:**
52. Place metal shield over housing
53. Crimp or solder shield to housing
54. Shield tabs bent inward to grip housing
55. Ensure shield does not short to signal pins

**PCB Module (for receptacle):**
56. Mount assembled connector to [PCB Module](connector-pcb)
57. PCB: 4-8 layer, controlled impedance for high-speed signals
58. Reflow solder connector pins to PCB pads
59. PCB contains: ESD protection diodes, termination resistors, ferrite beads
60. Through-holes allow connector to solder to main logic board

**Mounting Hardware:**
61. Attach [Mounting Brackets](metal-brackets) for chassis mounting
62. Brackets: stamped stainless steel or aluminum
63. Brackets provide mechanical strength for cable pull
64. USB-C spec: 10,000 insertion cycles without damage
65. Cable retention force: 8-20N (prevents accidental disconnect)

**Electrical Testing:**
66. Test pin-to-pin continuity (no shorts)
67. Test pin-to-shield isolation (>100 MΩ)
68. Test contact resistance (<30 milliohms per pin)
69. Test high-speed signal integrity:
    - Insert test plug
    - Send 10 Gbps signal through SuperSpeed lanes
    - Measure eye diagram with oscilloscope
    - Verify eye height and width meet spec
    - Impedance: 85Ω ±15% differential
    - Return loss: >10 dB up to 10 GHz
70. Test Power Delivery: apply 20V 5A (100W)
71. Measure voltage drop (<200mV)
72. Measure temperature rise (<30°C)

**Mechanical Testing:**
73. Insertion/extraction force test
    - Insertion force: <35N max
    - Extraction force: 8-20N
74. Durability test: 10,000 insertion/extraction cycles
75. Measure contact resistance before/after (should be stable)
76. Cable retention test: 80N pull force for 1 minute (no damage)
77. Drop test: connector should survive 1-meter drop

**Environmental Testing:**
78. Temperature cycling: -40°C to 85°C (storage), -10°C to 60°C (operation)
79. Thermal shock: rapid transitions between hot and cold
80. Humidity: 85% RH at 85°C for 168 hours
81. Salt spray: 5% NaCl solution for 48 hours (corrosion resistance)
82. Vibration: 10-500 Hz sweep, 5g acceleration

**Quality Control:**
89. 100% optical inspection: automated vision system
90. Check: pin alignment, gold plating coverage, housing defects
91. X-ray inspection: verify pin insertion depth
92. Sampling: destructive cross-section analysis
93. Cut connector in half, view under microscope
94. Verify: pin retention, plating thickness, no voids
95. Typical defect rate: <0.1% (1,000 PPM)

**Packaging:**
96. Place connector in embossed carrier tape
97. Carrier tape: plastic with pockets for each connector
98. Seal tape with cover film
99. Wind onto reel (1,000-5,000 pieces per reel)
100. Package in moisture barrier bag with desiccant
101. Label: part number, quantity, date code, lot number
102. Ship to electronics manufacturers

**USB-C Specifications:**
- Dimensions: 8.34mm × 2.56mm (plug), 8.4mm × 2.6mm (receptacle)
- Pins: 24 (12 on each side, mirrored)
- Insertion cycles: 10,000 minimum
- Contact resistance: <30 mΩ initial, <50 mΩ after 10,000 cycles
- Insulation resistance: >100 MΩ
- Dielectric withstanding voltage: 100V AC (50/60 Hz for 1 minute)
- Operating temperature: 0°C to 60°C
- Storage temperature: -40°C to 85°C

**USB-C Capabilities:**
- USB 2.0: 480 Mbps (uses D+/D- pins only)
- USB 3.2 Gen 1: 5 Gbps (uses 2 SuperSpeed lanes)
- USB 3.2 Gen 2: 10 Gbps (uses 2 SuperSpeed lanes)
- USB 3.2 Gen 2×2: 20 Gbps (uses 4 SuperSpeed lanes)
- Thunderbolt 3/4: 40 Gbps (uses 4 lanes)
- DisplayPort Alt Mode: 8.1 Gbps per lane (4K60 or 5K60)
- USB Power Delivery 3.1: 5-48V, 0-5A, up to 240W
- Audio Accessory Mode: analog audio over SBU pins

**Power Delivery Profiles:**
- 5V @ 3A = 15W (standard)
- 9V @ 3A = 27W (laptop charging)
- 15V @ 3A = 45W (laptop charging)
- 20V @ 3A = 60W (laptop charging)
- 20V @ 5A = 100W (high-power laptop)
- Extended: 28V, 36V, 48V @ 5A = 140W, 180W, 240W

**Configuration Channel (CC):**
- CC pin detects cable orientation and connection
- Plug has CC pin on one side only
- Receptacle has CC on both sides (mirrored)
- Pull-up/pull-down resistors negotiate: data role, power role, alternate modes
- BMC (Biphase Mark Code) communication for USB-PD
- Voltage signaling determines cable capability

**Manufacturing Challenges:**
- Pin alignment: 24 pins must align within ±50 microns
- Gold plating uniformity: thin plating (<0.3µm) requires precise control
- Shield grounding: must provide <10 milliohm ground path
- High-speed signals: impedance control critical for 40 Gbps
- Reversible design: pins must work in either orientation
- Compact size: 8.4mm width includes all 24 pins plus shield
- Thermal management: 100W power delivery generates heat

**Cost:**
- Low-cost USB-C jack (USB 2.0 only): $0.50-1.00
- Mid-range (USB 3.2, 10 Gbps): $2-4
- High-end (Thunderbolt 4, 40 Gbps): $6-12
- MacBook USB-C port (Thunderbolt 4): $8-10

USB-C is most complex consumer connector ever standardized. Single connector replaces: USB-A, USB-B, micro-USB, Mini-DisplayPort, and power jack. Backwards compatible with USB 2.0/3.x but requires active cables for Thunderbolt and long distances. Success driven by: reversible design (no more fumbling), universal adoption (phones, laptops, tablets, accessories), and power delivery (single cable for everything).
