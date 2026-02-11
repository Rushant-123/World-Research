---
title: "Trackpad (Force Touch)"
company: "Cirque / Synaptics / TPK"
country: "USA / Taiwan"
selling_price: 25
inputs:
  - name: "Glass Surface"
    cost: 5
    link: "chemically-strengthened-glass"
  - name: "Capacitive Sensor"
    cost: 8
    link: "capacitive-touch-sensor"
  - name: "Haptic Engine"
    cost: 6
    link: "linear-actuator"
  - name: "Force Sensors"
    cost: 3
    link: "strain-gauge"
  - name: "Controller IC"
    cost: 2
    link: "touch-controller"
  - name: "Flex Cable"
    cost: 0.5
    link: "flexible-pcb"
  - name: "Adhesive"
    cost: 0.3
    link: "structural-adhesive"
  - name: "Assembly Labor"
    cost: 0.2
    link: "electronics-assembly"
value_created: 0
---

# How to Make a Trackpad (Force Touch)

A Force Touch trackpad is a precision input device that detects finger position, pressure, and gestures. Unlike traditional trackpads with physical click mechanisms, Force Touch uses haptic feedback to simulate clicks, enabling pressure-sensitive input and haptic responses.

## What is it?

A large glass surface (13-16 cm wide) with capacitive touch sensors detecting finger position at 90-120 Hz. Four force sensors at corners measure pressure. A linear actuator (Taptic Engine) provides haptic feedback, simulating clicks without physical movement. Supports multi-touch gestures (pinch, zoom, rotate, swipe) and Force Touch gestures (variable pressure).

## Steps to Make:

**Glass Surface Manufacturing:**
1. Start with [Glass Surface](chemically-strengthened-glass) - alkali-aluminosilicate glass
2. Similar to phone screen glass (Gorilla Glass)
3. Cut glass sheet to trackpad dimensions: 130mm × 90mm for 13" MacBook
4. Thickness: 0.7-1.1mm
5. Chemically strengthen through ion exchange process:
   - Immerse in molten potassium salt bath at 400°C
   - Potassium ions replace sodium ions on surface
   - Creates compressive stress layer (makes glass 3-5× stronger)
   - Treatment takes 8-16 hours
6. Polish edges to prevent cracking
7. Apply oleophobic coating (resists fingerprints)
8. Coating: fluoropolymer, 20-30 nanometers thick
9. Coating lasts 6-18 months with normal use
10. Clean glass surface in ultrasonic bath

**Capacitive Sensor Array:**
11. Create [Capacitive Sensor](capacitive-touch-sensor) using ITO (indium tin oxide) on glass or film
12. ITO is transparent conductive coating
13. Pattern ITO into diamond grid or row/column matrix
14. Rows (X-axis) and columns (Y-axis) form sensing electrodes
15. Resolution: 0.5-1mm per sensing point
16. Mutual capacitance sensing: transmit signal on rows, receive on columns
17. When finger approaches, capacitance between row/column changes
18. Finger is grounded conductor, increases capacitance
19. Precision: detect finger position to ±0.5mm
20. Multi-touch: detect up to 10 simultaneous touches
21. Deposit ITO using sputtering or printing
22. Laser pattern ITO into electrode grid
23. Laminate ITO layer to underside of glass

**Force Sensing:**
24. Install four [Force Sensors](strain-gauge) at trackpad corners
25. Strain gauges: thin metal foil that changes resistance when stressed
26. When glass flexes from finger pressure, strain gauges detect deformation
27. Gauge sensitivity: detect 5-10 grams force minimum
28. Maximum force: 400-500 grams (hard press)
29. Combine readings from 4 sensors to determine:
    - Total pressure
    - Location of pressure (which corner flexes most)
30. Mount strain gauges on flexible PCB or directly on glass underside
31. Wheatstone bridge circuit converts resistance change to voltage
32. ADC (analog-to-digital converter) digitizes force measurements

**Haptic Engine (Taptic Engine):**
33. [Haptic Engine](linear-actuator) provides tactile feedback
34. Linear resonant actuator (LRA): moving magnet + stationary coil
35. Permanent magnet attached to spring-mounted mass
36. Coil generates magnetic field when current applied
37. Magnet oscillates along axis at resonant frequency (~170 Hz)
38. Resonance amplitude: 0.1-0.5mm displacement
39. Creates vibration felt as "click"
40. Two click strengths: light click (50% power) and firm click (100% power)
41. Actuator response time: <10 ms (feels instantaneous)
42. Mount actuator under center of trackpad
43. Mass: 3-5 grams moving mass
44. Power consumption: 50-200 mW per click

**Controller Integration:**
45. [Controller IC](touch-controller) processes all sensor data
46. IC functions:
    - Scan capacitive sensor grid at 90-120 Hz
    - Read force sensor ADCs
    - Detect touch events: finger down/up/move
    - Recognize gestures: tap, double-tap, scroll, pinch, zoom
    - Trigger haptic engine at appropriate times
    - Send USB HID reports to computer
47. Advanced algorithms:
    - Palm rejection: ignore palm resting on trackpad
    - Accidental touch rejection: ignore brief touches
    - Edge rejection: ignore touches near edges
    - Pressure curve: map force to click stages
48. Mount controller IC on [Flex Cable](flexible-pcb)

**Assembly:**
49. [Assembly Labor](electronics-assembly) in clean facility
50. Attach ITO sensor layer to glass underside with optical adhesive
51. Cure adhesive with UV light
52. Mount strain gauges at four corners with epoxy
53. Cure epoxy at 80°C for 1 hour
54. Attach haptic engine to glass with double-sided tape
55. Engine must be centered for uniform haptic feedback
56. Apply [Adhesive](structural-adhesive) to flex PCB
57. Laminate flex PCB to glass backside
58. Route flex cable to connector location
59. Apply EMI shielding tape (copper or aluminum)
60. Shields against electromagnetic interference

**Calibration:**
61. Connect trackpad to calibration station
62. Map capacitive sensor baseline (with no touch)
63. Baseline varies with temperature and humidity
64. Press known weights on force sensors
65. Calibrate force thresholds:
    - Light click: 150-180 grams
    - Force Touch (firm click): 300-350 grams
66. Store calibration data in controller EEPROM
67. Test haptic engine: send click command, verify vibration amplitude
68. Adjust drive voltage if needed (120-150V peak for strong clicks)

**Testing:**
69. Automated tester touches trackpad at 100+ locations
70. Verify position accuracy (±0.5mm)
71. Test multi-touch: place robotic fingers at multiple points
72. Test force response: apply calibrated pressures
73. Verify click thresholds consistent across surface
74. Test gestures: pinch, zoom, rotate, three-finger swipe
75. Test palm rejection: place palm + finger, should ignore palm
76. Test edge rejection: touch near edges, should not trigger false clicks
77. Measure latency: time from touch to cursor movement (<10 ms)
78. Test haptic feedback: should feel consistent and crisp
79. Life cycle test (sample): 1 million clicks, 5 million touches

**Firmware:**
80. Flash firmware to controller IC
81. Firmware includes:
    - Gesture recognition algorithms
    - Filter algorithms (smoothing, prediction)
    - Haptic waveform patterns
    - USB HID protocol implementation
82. Customizable parameters:
    - Tracking speed
    - Scroll acceleration
    - Click pressure threshold
    - Haptic intensity

**Quality Control:**
90. Visual inspection: glass must be scratch-free
91. Backlight test: shine light through sensor layer, check for defects
92. Uniformity test: pressure response must be uniform across surface
93. Durability test: flex glass 10,000 times, verify no cracks
94. Temperature test: -10°C to 60°C operation
95. Humidity test: 90% RH, no condensation or corrosion

**Packaging:**
96. Apply protective film to glass surface
97. Place in anti-static bag
98. Package with foam protection
99. Ship to laptop assembly facility
100. Integrated into Mac chassis with screws and connector

**Force Touch Features:**
- Pressure sensitivity: 256 levels
- Variable click strength: adjustable in software
- Silent clicking: no mechanical noise
- Haptic patterns: different vibrations for different actions
- Force gestures:
  - Light press: preview (Quick Look)
  - Firm press: contextual actions
  - Variable pressure: drawing apps (like pen pressure)

**Trackpad Specifications (MacBook):**
- Active area: 13.2 cm × 9.0 cm (13" model), 16.0 cm × 10.5 cm (16" model)
- Resolution: 1000-1200 DPI equivalent
- Touch sampling rate: 90-120 Hz
- Latency: 8-12 ms
- Multi-touch points: 10 simultaneous
- Force range: 0-500 grams
- Force resolution: 256 levels
- Haptic frequency: ~170 Hz
- Haptic response time: <10 ms
- Surface coating: oleophobic (fingerprint resistant)
- Lifespan: 1 million clicks, 5 million touches
- Power consumption: 10-50 mW idle, 100-300 mW active

**Advantages over Mechanical Trackpad:**
- No moving parts (more reliable)
- Entire surface is clickable (mechanical has click zone at bottom)
- Pressure sensitivity enables new interactions
- Haptic feedback can be customized
- Thinner design (no click mechanism underneath)
- Silent operation
- Sealed design (better liquid resistance)

**Manufacturing Challenges:**
- Glass must be perfectly flat (warping affects force sensing)
- Haptic engine must be precisely centered
- Force sensor calibration must account for temperature drift
- Capacitive sensing affected by moisture and humidity
- Oleophobic coating wears over time
- Haptic engine requires high voltage driver (120-150V)
- EMI shielding critical (trackpad is large antenna)

Force Touch trackpad cost ~2-3× more than mechanical trackpads but provides superior user experience. The technology enables pressure-sensitive input, silent operation, and consistent feel across entire surface. Apple was first to ship Force Touch in 2015 MacBook. Now used across all Mac laptops. Windows PCs still primarily use mechanical trackpads with physical click mechanisms.
