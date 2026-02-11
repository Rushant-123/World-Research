---
title: "Keyboard Assembly"
company: "Sunrex / Darfon / Chicony"
country: "Taiwan / China"
selling_price: 30
inputs:
  - name: "Keycaps"
    cost: 8
    link: "abs-keycaps"
  - name: "Scissor Switches"
    cost: 12
    link: "scissor-mechanism"
  - name: "Membrane Layer"
    cost: 3
    link: "keyboard-membrane"
  - name: "Backlight LEDs"
    cost: 4
    link: "keyboard-leds"
  - name: "Flex PCB"
    cost: 2
    link: "flexible-pcb"
  - name: "Controller IC"
    cost: 0.5
    link: "keyboard-controller"
  - name: "Metal Backplate"
    cost: 0.3
    link: "steel-backplate"
  - name: "Adhesive"
    cost: 0.1
    link: "adhesive-tape"
  - name: "Assembly Labor"
    cost: 0.1
    link: "electronics-assembly"
value_created: 0
---

# How to Make a Keyboard Assembly

A laptop keyboard assembly consists of keycaps, scissor-switch mechanisms, backlighting, membrane layers, and controller circuitry. Modern MacBooks use butterfly mechanisms (2015-2019) or improved scissor switches (2020+) with individual key backlighting and precise tactile feedback.

## What is it?

An ultra-thin keyboard mechanism designed to fit in laptop chassis <20mm thick. Uses scissor switches (two crossing plastic pieces that stabilize key travel), membrane layers with printed circuits, and white LED backlighting. Key travel: 1.0-1.5mm. Force required: 60-65 grams. Typical laptop keyboard: 78-84 keys depending on layout.

## Steps to Make:

**Keycap Manufacturing:**
1. Injection mold [Keycaps](abs-keycaps) from ABS plastic
2. Create steel molds with key shapes (dome top, slight concave)
3. Inject molten ABS (Acrylonitrile Butadiene Styrene) at 200-250°C
4. Cool in mold for 10-15 seconds
5. Eject keycaps from mold
6. For backlit keys: two-shot molding process
   - First shot: transparent polycarbonate for letter
   - Second shot: opaque black ABS around letter
   - Light shines through transparent letter only
7. Alternative: laser etching removes black coating to reveal white plastic underneath
8. Print legends (key labels) using pad printing or sublimation
9. Apply coating for durability and feel
10. Typical keycap: 12-15mm square, 2mm thick, weighs 0.3-0.5 grams

**Scissor Switch Manufacturing:**
11. Injection mold [Scissor Switches](scissor-mechanism) from POM plastic (polyoxymethylene)
12. Each switch has two crossing arms that pivot in middle
13. Scissor provides stability and even key travel
14. Mold spring clips that attach to top and bottom housings
15. Mold rubber dome (silicone) that provides tactile bump and restoring force
16. Assemble: bottom housing + scissor arms + rubber dome + top housing
17. Test compression: should require 60-65g force, travel 1.0-1.5mm
18. Yield: 99.5%+ (reject if uneven travel or weak spring)

**Membrane Layer Preparation:**
19. [Membrane Layer](keyboard-membrane) consists of 3-5 polyester films
20. Bottom layer: printed with conductive traces (carbon or silver ink)
21. Middle layer: spacer with holes at key locations
22. Top layer: printed with contact pads
23. When key pressed: top and bottom layers contact through spacer hole
24. This completes circuit, detected by controller
25. Screen print conductive ink onto polyester films
26. Cure ink at 100-150°C
27. Die-cut films to keyboard shape
28. Align and laminate layers with precise registration (±0.1mm)
29. Adhesive between layers prevents separation

**Backlight Layer:**
30. Create light guide plate from acrylic or polycarbonate (0.5mm thick)
31. Laser etch patterns on backside to diffuse light
32. Mount [Backlight LEDs](keyboard-leds) along edges or under each key
33. For per-key RGB: place LED under each key (78-84 LEDs total)
34. For white backlight: edge-lit design with 3-6 LEDs
35. LEDs: SMD (surface mount) 0603 or 0402 size, white or RGB
36. Solder LEDs to flex PCB
37. Add diffuser layer above LEDs to prevent hot spots

**Flex PCB Assembly:**
38. [Flex PCB](flexible-pcb) connects membrane to controller
39. 1-2 layer flexible circuit board (polyimide base)
40. Pattern includes: LED power traces, membrane connector, controller IC
41. Mount [Controller IC](keyboard-controller) on flex PCB
42. Controller scans keyboard matrix, detects key presses, sends USB HID reports
43. IC: typically 8-bit microcontroller with USB interface
44. Solder connector for ribbon cable to main logic board

**Assembly Process:**
45. [Assembly Labor](electronics-assembly) works in clean facility
46. Start with [Metal Backplate](steel-backplate) for structural rigidity
47. Backplate: stamped stainless steel, 0.2-0.3mm thick
48. Apply [Adhesive](adhesive-tape) to backplate
49. Laminate membrane layers to backplate
50. Align mounting holes precisely with CNC fixture
51. Place scissor switches into membrane at each key location
52. Switches snap into place through membrane
53. Apply adhesive to switch perimeter
54. Place keycaps onto switches (press-fit, snap locks)
55. Test each key: press to verify travel and tactile feel
56. Mount backlight layer beneath membrane
57. Route LED wires through cutouts
58. Attach flex PCB with controller
59. Solder connections between membrane, LEDs, and controller
60. Apply protective film over entire assembly

**Programming:**
61. Connect keyboard to programming station
62. Flash firmware to controller IC
63. Firmware contains: key mapping, LED control, macro support
64. Program keyboard layout (ANSI, ISO, JIS, etc.)
65. Set default backlight brightness

**Testing:**
66. Automated tester presses each key 100 times
67. Verify key code sent correctly via USB
68. Test all modifiers: Shift, Control, Command, Option
69. Test key rollover: press multiple keys simultaneously (should register all)
70. Test backlighting: each LED must illuminate
71. Test brightness levels (typically 16 levels)
72. Measure key force with precision scale
73. Measure key travel with dial indicator
74. Test for stuck keys (keys that don't return)
75. Test for dead keys (keys that don't register)
76. Reject if >1 defect

**Lifespan Testing (Sample):**
77. Subject sample keyboards to life cycle testing
78. Automated machine presses keys millions of times
79. Target: 1-5 million actuations per key
80. Apple spec: typically 1 million actuations minimum
81. Gaming keyboards: 50-100 million actuations
82. Monitor for: switch failure, keycap wear, membrane damage
83. High-wear keys: E, A, S, D, Space, Enter

**Environmental Testing:**
84. Temperature cycling: -10°C to 60°C
85. Humidity testing: 90% RH at 40°C
86. Verify no condensation, corrosion, or adhesive failure
87. Drop test: withstand 1-meter drop without damage
88. Liquid resistance: light spills should not cause shorts
89. Some keyboards have drain holes or sealed membrane

**Quality Control:**
90. Visual inspection under magnification
91. Check keycap alignment (should be uniform)
92. Check for scratches, dents, or discoloration
93. Verify backlight uniformity (no dark spots or hot spots)
94. Test cable connections (pull test)
95. Check for foreign material (dust, fibers)

**Packaging:**
96. Place keyboard in anti-static bag
97. Protect with foam padding
98. Package in cardboard tray
99. Ship to laptop assembly facility
100. Keyboards integrated into Mac during final assembly

**Keyboard Types:**
- Scissor switch: most laptops, 1.0-1.5mm travel, 60-65g force
- Butterfly mechanism: MacBook 2015-2019, 0.5-0.7mm travel (prone to failure)
- Mechanical: desktop keyboards, 3-4mm travel, 45-80g force, more durable
- Membrane: budget laptops, mushy feel, lower cost

**Key Specifications (MacBook keyboard):**
- Key pitch: 19mm (center to center)
- Key travel: 1.0mm (2020+ models)
- Actuation force: 60-65 grams
- Tactile feedback: yes (rubber dome)
- Key rollover: 6KRO (6-key rollover) or NKRO (n-key rollover)
- Polling rate: 125-1000 Hz
- Response time: <10 ms
- Backlight: white LED, 16 brightness levels
- Power consumption: 0.5-1.5W with backlight on

**Manufacturing Challenges:**
- Key uniformity: all keys must feel identical
- Dust ingress: tiny particles can block switch mechanism
- Backlighting: LED color/brightness must be uniform
- Membrane alignment: misalignment causes missed key presses
- Adhesive curing: insufficient curing causes keys to fall off
- Cost pressure: keyboard is <2% of laptop cost but highly visible quality indicator

**Butterfly Keyboard Issues (2015-2019 MacBooks):**
- Ultra-low travel (0.5mm) made typing difficult
- Dust/debris caused keys to stick or double-press
- Fragile mechanism prone to breakage
- Apple issued multiple repair programs
- Replaced with redesigned scissor switches in 2020

Keyboard manufacturing requires precision assembly of hundreds of components. Each keycap must align within 0.2mm, backlighting must be uniform, and every key must provide consistent tactile feedback. Despite seeming simple, laptop keyboards are surprisingly complex assemblies combining injection molding, electronics, and precision mechanical engineering.
