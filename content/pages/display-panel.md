---
title: "Display Panel (LCD/OLED)"
company: "Samsung Display / LG Display / BOE"
country: "South Korea / China"
selling_price: 150
inputs:
  - name: "Glass Substrate"
    cost: 20
    link: "display-glass"
  - name: "TFT Array"
    cost: 35
    link: "tft-backplane"
  - name: "Liquid Crystal Material"
    cost: 8
    link: "liquid-crystal"
  - name: "Color Filter"
    cost: 15
    link: "rgb-color-filter"
  - name: "Polarizer Film"
    cost: 10
    link: "polarizer-film"
  - name: "Backlight Unit"
    cost: 25
    link: "led-backlight"
  - name: "Driver IC"
    cost: 12
    link: "display-driver-ic"
  - name: "Flex Cable"
    cost: 3
    link: "flexible-pcb"
  - name: "Cleanroom"
    cost: 8
    link: "cleanroom-facility"
  - name: "Photolithography"
    cost: 5
    link: "display-lithography"
  - name: "Sputtering Equipment"
    cost: 3
    link: "sputter-coater"
  - name: "Plasma Etching"
    cost: 2
    link: "plasma-etcher"
  - name: "Electricity"
    cost: 2
    link: "electricity"
  - name: "Display Workers"
    cost: 2
    link: "display-technicians"
value_created: 0
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

# How to Make a Display Panel

**Top Market Leaders:**
- [Samsung Electronics](/companies/samsung-electronics)
- [Lg Display](/companies/lg-display)
- [Boe](/companies/boe)



A laptop display panel is typically an LCD (liquid crystal display) or OLED (organic LED) panel. Modern MacBooks use mini-LED or OLED technology for improved brightness and contrast. This page covers LCD manufacturing, the most common type.

## What is it?

A thin-film transistor liquid crystal display (TFT-LCD) consisting of millions of pixels, each with red, green, and blue sub-pixels. Each pixel is controlled by transistors deposited on glass. Typical laptop display: 13-16 inches diagonal, 2560×1600 to 3456×2234 resolution, 400-1000 nits brightness.

## Steps to Make:

**TFT Backplane Fabrication:**
1. Start with ultra-clean [Glass Substrate](display-glass) - 0.5-0.7mm thick, 2-3 square meters
2. This large sheet ("mother glass") will yield multiple display panels
3. Clean glass in ultrasonic bath with detergents
4. Rinse with ultra-pure water, dry with nitrogen
5. Work in [Cleanroom](cleanroom-facility) (Class 1000 or better)
6. [Display Workers](display-technicians) wear full bunny suits
7. Powered by [Electricity](electricity) throughout process

**Layer 1 - Gate Metal:**
8. Use [Sputtering Equipment](sputter-coater) to deposit thin aluminum or molybdenum layer (200nm)
9. Apply photoresist
10. Use [Photolithography](display-lithography) to pattern gate electrode lines
11. Expose with UV light through photomask
12. Develop and etch metal layer with [Plasma Etching](plasma-etcher)
13. Strip remaining photoresist
14. Result: thousands of parallel gate lines

**Layer 2 - Gate Insulator:**
15. Deposit silicon nitride (SiNx) layer using PECVD (200-400nm thick)
16. This insulates gate from semiconductor layer

**Layer 3 - Semiconductor:**
17. Deposit amorphous silicon (a-Si) layer (50-200nm)
18. Some panels use LTPS (low-temperature polysilicon) or IGZO (indium-gallium-zinc-oxide) for better performance
19. Pattern semiconductor layer with photolithography and etching
20. Create source and drain regions by doping with phosphorus

**Layer 4 - Source/Drain Metal:**
21. Deposit molybdenum or aluminum layer (200-300nm)
22. Pattern to form source/drain contacts and data lines (perpendicular to gate lines)
23. Data lines run vertically while gate lines run horizontally
24. At each intersection is one TFT (thin-film transistor)

**Passivation Layer:**
25. Deposit silicon nitride passivation layer to protect TFTs
26. Etch contact holes over source electrodes

**Pixel Electrode:**
27. Deposit transparent ITO (indium tin oxide) layer (50-100nm)
28. ITO is conductive but transparent
29. Pattern into individual pixel electrodes
30. Each pixel electrode connects to one TFT source
31. For 2560×1600 display: 4.096 million pixels = 12.288 million sub-pixels

**[TFT Array](tft-backplane) Complete:**
32. Inspect array for defects using automated optical inspection
33. Test TFTs for proper switching
34. Typical defect rate: <10 defects per million pixels
35. The [TFT Array](tft-backplane) manufacturing takes 10-15 days with 5-10 masking layers

**Color Filter Fabrication (separate glass):**
36. Take second [Glass Substrate](display-glass) of equal size
37. Deposit black matrix using photolithography - opaque grid separating pixels
38. Black matrix prevents light leakage between pixels
39. Coat with red photoresist containing red pigment
40. Expose through mask - red sub-pixels
41. Develop and cure - red filters remain
42. Repeat for green and blue filters
43. Each pixel now has R, G, B sub-pixels in stripe or delta arrangement
44. Deposit ITO common electrode over entire [Color Filter](rgb-color-filter) glass
45. Color filter fabrication takes 5-7 days

**Cell Assembly:**
46. Print spacer balls (3-5 microns diameter) on TFT glass
47. Spacers maintain precise gap between glass plates
48. Print sealant around perimeter of one glass substrate
49. Sealant contains gap spacers and has opening for liquid crystal filling
50. Align TFT glass and color filter glass with micron precision
51. TFT electrodes must align exactly with color filters
52. Press glasses together, cure sealant with UV light
53. Now have empty cell with 3-5 micron gap

**Liquid Crystal Injection:**
54. Place cell in vacuum chamber
55. Lower pressure to remove air from cell
56. Insert filling opening into [Liquid Crystal Material](liquid-crystal) bath
57. Release vacuum - atmospheric pressure pushes LC into cell
58. LC fills by capillary action, takes 30-60 minutes
59. Seal filling port with UV-curable resin
60. Heat cell to isotropic temperature (90°C) then slow cool
61. This aligns LC molecules uniformly

**Polarizer Attachment:**
62. Apply [Polarizer Film](polarizer-film) to outer surface of each glass
63. Front polarizer at 0°, rear polarizer at 90° (crossed polarizers)
64. Polarizers are thin plastic films that only pass light vibrating in one direction
65. Without voltage, LC rotates light 90° so it passes through both polarizers (white)
66. With voltage, LC doesn't rotate light, blocked by crossed polarizers (black)
67. Use lamination rollers to attach polarizers bubble-free

**Cutting:**
68. Large mother glass with multiple panels is scribed and broken into individual panels
69. Use diamond scribe or laser to score glass
70. Break along score lines
71. Polish edges to prevent cracking

**Driver IC Attachment:**
72. Use COF (chip-on-film) or COG (chip-on-glass) bonding
73. [Driver IC](display-driver-ic) chips convert digital signals to analog voltages for rows/columns
74. Typical display needs 1-4 gate drivers, 6-12 source drivers
75. Use ACF (anisotropic conductive film) bonding
76. Heat and pressure connect IC pads to glass pads through conductive particles in ACF
77. Attach [Flex Cable](flexible-pcb) for connection to laptop motherboard

**Backlight Unit Assembly:**
78. [Backlight Unit](led-backlight) provides illumination from behind LCD
79. Edge-lit design: LEDs on edges, light guide plate distributes light
80. Direct-lit design: LED array behind panel (brighter, better uniformity)
81. Mini-LED: thousands of small LEDs for local dimming (better contrast)
82. Stack layers: LED → light guide → diffuser → brightness enhancement films
83. Attach backlight to rear of LCD panel
84. Connect backlight power cable

**Final Assembly:**
85. Mount panel in metal frame for structural support
86. Attach mounting brackets for hinge connection
87. Install protective films on front and back
88. Connect all cables

**Testing:**
89. Power on panel and backlight
90. Display test patterns: white, black, red, green, blue, grey scales
91. Check for dead pixels (stuck on or off)
92. Measure brightness uniformity across screen
93. Measure color gamut and accuracy
94. Check viewing angles
95. Test for image retention or burn-in
96. Acceptable defect levels: 0-3 dead pixels for consumer displays
97. Cycle panel on/off 1000+ times
98. Stress test at temperature extremes

**Grading:**
99. Grade panels: A+ (zero defects), A (1-2 defects), B (3-5 defects)
100. Apple typically uses only A+ grade panels
101. Lower grades sold to other manufacturers or as replacement parts

**Packaging:**
102. Place panel in protective foam tray
103. Seal in moisture barrier bag with desiccant
104. Package in cardboard box
105. Ship to laptop assembly facility

**Display Specifications (typical high-end laptop):**
- Size: 13.3-16.2 inches diagonal
- Resolution: 2560×1600 to 3456×2234 pixels
- Pixel density: 220-250 PPI
- Brightness: 400-1000 nits
- Contrast ratio: 1000:1 (LCD) to 1,000,000:1 (OLED)
- Color gamut: 99% sRGB, 80-100% DCI-P3
- Response time: 10-30ms
- Refresh rate: 60-120 Hz
- Viewing angle: 178° (IPS panels)
- Weight: 200-400 grams
- Power consumption: 2-8 watts typical

**Manufacturing Scale:**
- Gen 6 fab: 1.5m × 1.85m mother glass → 15 laptop panels
- Gen 8.5 fab: 2.2m × 2.5m mother glass → 30-40 laptop panels
- Production time: 3-4 weeks from glass to finished panel
- Equipment cost: $3-5 billion for complete fab
- Cleanroom: 10,000+ square meters

LCD manufacturing requires extreme precision and cleanliness. A single dust particle can cause a visible defect. The TFT fabrication uses semiconductor processes similar to chip making but on much larger glass substrates. Modern displays are engineering marvels with millions of transistors controlling billions of color transitions per second.
