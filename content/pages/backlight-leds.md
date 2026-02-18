---
title: "Keyboard Backlight LEDs"
company: "Nichia Corporation"
country: "Japan"
selling_price: 0.5
inputs:
  - name: "LED Chip (InGaN)"
    cost: 0.08
    link: "led-backlight"
  - name: "Phosphor Coating"
    cost: 0.04
    link: "quantum-dots"
  - name: "Lead Frame"
    cost: 0.03
    link: "copper-foil"
  - name: "Encapsulant"
    cost: 0.02
    link: "molding-compound"
  - name: "Wire Bonding"
    cost: 0.03
    link: "wire-bonder"
  - name: "Testing"
    cost: 0.05
    link: "board-tester"
value_created: 0.25
lead_time_days: 60
minimum_order_quantity: 10000
transportation_method: "ocean"
geopolitical_risk: "low"
price_volatility: "medium"

certifications:
  - "ISO9001"
  - "ISO14001"
data_quality: "estimated"
---

1. Source high-purity sapphire wafers (2-inch diameter, c-plane orientation, 430 μm thickness) from Crystal Systems as substrate material for InGaN LED epitaxy
2. Clean sapphire wafers in ultrasonic baths with acetone, isopropanol, and deionized water to remove organic contaminants and particles
3. Load sapphire wafers into MOCVD (Metal-Organic Chemical Vapor Deposition) reactor chamber at atmospheric pressure
4. Heat sapphire wafers to 1050°C in hydrogen ambient for 10 minutes to remove residual surface contamination and improve surface quality
5. Nucleate GaN buffer layer at 550°C using trimethylgallium (TMGa) and ammonia (NH3) precursors at low growth rate of 0.2 μm/hour
6. Grow 30 nm thick low-temperature GaN nucleation layer to accommodate lattice mismatch between sapphire (a=4.758 Å) and GaN (a=3.189 Å)
7. Increase reactor temperature to 1050°C and anneal nucleation layer for 5 minutes to improve crystallinity
8. Deposit 2 μm thick undoped GaN buffer layer at 1050°C using TMGa and NH3 at growth rate of 1.5 μm/hour
9. Cool reactor to 1030°C and grow 3 μm thick n-type GaN layer doped with silicon using silane (SiH4) to achieve carrier concentration of 5×10^18 cm^-3
10. Reduce temperature to 780°C for InGaN/GaN multiple quantum well (MQW) active region growth
11. Grow first 3 nm thick In0.15Ga0.85N quantum well layer using TMGa, trimethylindium (TMIn), and NH3 with indium composition controlled for 450 nm blue emission
12. Grow first 12 nm thick GaN barrier layer at 880°C to prevent indium desorption and maintain quantum well quality
13. Repeat quantum well and barrier layer growth sequence five times to create 5-period MQW structure with total active region thickness of 75 nm
14. Monitor MQW growth with in-situ optical reflectometry to ensure uniform layer thickness across wafer with ±0.3 nm precision
15. Grow 20 nm thick p-type AlGaN electron blocking layer with 18% aluminum composition at 950°C to prevent electron overflow
16. Deposit 150 nm thick p-type GaN layer doped with magnesium using bis-cyclopentadienyl magnesium (Cp2Mg) to achieve hole concentration of 3×10^17 cm^-3
17. Cool reactor slowly at 5°C/minute to room temperature in nitrogen ambient to prevent thermal stress and wafer cracking
18. Unload epitaxial wafers from MOCVD chamber and inspect for surface defects, discoloration, or non-uniformity using optical microscopy
19. Perform rapid thermal annealing at 750°C for 45 seconds in nitrogen ambient to activate magnesium acceptors in p-GaN layer
20. Measure photoluminescence (PL) spectrum across wafer using 405 nm laser excitation to verify 450 nm peak emission wavelength with ±5 nm uniformity
21. Map wafer-level emission intensity using automated PL mapping system with 2 mm spatial resolution to identify high-quality regions
22. Coat wafer with 1.2 μm thick positive photoresist (Shipley S1813) using spin coater at 4000 rpm for 30 seconds
23. Soft bake photoresist at 115°C for 90 seconds on hotplate to evaporate solvents and improve adhesion
24. Align wafer in contact mask aligner with mesa isolation pattern (250×500 μm rectangular mesas with 50 μm spacing)
25. Expose photoresist to 365 nm UV light at 120 mJ/cm² dose through chrome-on-glass photomask for 8 seconds
26. Develop exposed photoresist in MF-319 developer solution for 60 seconds with gentle agitation to reveal mesa pattern
27. Hard bake patterned photoresist at 125°C for 2 minutes to improve etch resistance during plasma processing
28. Load wafer into inductively coupled plasma (ICP) etcher with BCl3/Cl2 gas mixture for mesa definition
29. Etch through p-GaN, p-AlGaN, and MQW layers to n-GaN depth of 1.5 μm using ICP power of 500 W and chamber pressure of 5 mTorr
30. Monitor etch depth using laser interferometry in real-time with endpoint detection when n-GaN is exposed
31. Strip photoresist in oxygen plasma asher at 300 W for 5 minutes followed by solvent cleaning in acetone and IPA
32. Clean etched wafer in piranha solution (3:1 H2SO4:H2O2) at 120°C for 10 minutes to remove polymer residue and organic contamination
33. Deposit 200 nm thick SiO2 passivation layer using plasma-enhanced chemical vapor deposition (PECVD) at 300°C
34. Spin coat photoresist and pattern contact window openings on p-GaN mesa tops (200×450 μm) and n-GaN exposed regions
35. Etch SiO2 contact windows using reactive ion etching with CHF3/O2 plasma chemistry for 4 minutes
36. Remove photoresist and prepare wafer for metallization by dipping in buffered HF solution for 30 seconds
37. Load wafer into electron-beam evaporator for p-contact metal deposition in high vacuum (2×10^-7 Torr)
38. Deposit semi-transparent p-contact stack consisting of 2 nm nickel and 2 nm gold layers at 0.2 nm/second rate
39. Pattern p-contact metal using lift-off photolithography with 1.8 μm thick photoresist and metal deposition
40. Anneal p-contacts at 550°C for 5 minutes in oxygen ambient to form NiO and improve contact resistance to <5×10^-4 Ω·cm²
41. Deposit thick p-pad metal stack (20 nm titanium / 100 nm aluminum / 50 nm nickel / 200 nm gold) by evaporation
42. Pattern p-pad metal using wet chemical etching with gold etchant, nickel etchant, and aluminum etchant in sequence
43. Deposit n-contact metal stack (20 nm titanium / 200 nm aluminum / 50 nm titanium / 200 nm gold) on exposed n-GaN regions
44. Pattern n-contact metal using lift-off process and anneal at 450°C for 60 seconds in nitrogen to achieve contact resistance <1×10^-3 Ω·cm²
45. Measure contact resistance using transmission line method (TLM) test structures with varying contact spacing from 5 to 50 μm
46. Deposit 300 nm thick SiO2 protective layer over entire wafer except final bond pad regions using PECVD
47. Pattern bond pad openings (100×200 μm) in SiO2 using photolithography and CHF3 plasma etching
48. Inspect completed wafer using optical microscopy to verify metal alignment, pattern quality, and surface cleanliness
49. Perform electrical probe testing on 25 randomly selected dies per wafer to verify forward voltage <3.2 V at 20 mA
50. Mount wafer on dicing tape (Nitto Denko Revalpha) stretched over metal frame for mechanical support during singulation
51. Load wafer into precision dicing saw (Disco DAD3350) with diamond blade (thickness 30 μm, grit size 3000 mesh)
52. Program dicing saw with street coordinates (300 μm wide streets between 250×500 μm dies) and blade depth of 450 μm
53. Dice wafer along horizontal streets at blade speed of 30,000 rpm and feed rate of 10 mm/second with water cooling
54. Rotate wafer 90 degrees and dice along vertical streets to singulate individual LED dies with final size 250×500×100 μm
55. Inspect diced wafer under microscope to verify clean cuts with minimal chipping (<5 μm edge damage) and no missing dies
56. Clean diced dies on tape by spraying deionized water to remove silicon debris and dicing slurry particles
57. Detach individual dies from dicing tape using automated die picker with vacuum pickup tool and transfer to waffle pack
58. Perform automatic optical inspection (AOI) of singulated dies to identify defects, cracks, or contamination (target yield >95%)
59. Store qualified LED dies in sealed nitrogen-purged containers with humidity <5% RH to prevent oxidation before packaging
60. Source copper lead frames from Dai Nippon Printing with pre-plated silver finish for improved reflectivity and wire bonding
61. Receive lead frames in strip format (35 mm wide tape, 500 mm length, 150 LED cavities per strip) with 2.8×2.0×0.6 mm package footprint
62. Inspect lead frames for plating defects, burrs, or dimensional variations using automated vision system (acceptance rate >99%)
63. Dispense 2 mg of thermally conductive silver epoxy (Ablestik 84-1LMISR4) into each lead frame die pad using automated dispenser
64. Control dispense parameters: 0.3 mm needle diameter, 50 psi pressure, 200 ms dispense time for consistent dot diameter of 0.8 mm
65. Pick LED die from waffle pack using die bonder collet with 15 gf pickup force
66. Align die p-contact side up on lead frame die pad using pattern recognition camera with ±10 μm placement accuracy
67. Place die onto silver epoxy with 50 gf bond force and hold for 2 seconds to ensure good contact
68. Process entire lead frame strip with 150 dies mounted in 45 seconds using high-speed die bonder (ASM AD830)
69. Cure silver epoxy at 150°C for 60 minutes in convection oven to achieve full polymerization and >20 MPa die shear strength
70. Transfer lead frame strips to wire bonding station (Kulicke & Soffa 8028) with 25 μm diameter gold wire
71. Program wire bonder with bond locations: n-pad on die to lead frame cathode finger, p-pad on die to anode pad
72. Perform ultrasonic wire bonding with ball bond on die pad (60 gf force, 80 mW power, 40 ms time) and wedge bond on lead frame
73. Bond first wire from die n-pad to cathode lead frame finger with wire loop height of 180 μm and loop length of 1.2 mm
74. Bond second wire from die p-pad to anode contact on lead frame with similar loop profile
75. Inspect wire bonds using automated camera system to verify ball diameter 45-55 μm, no wire sag, and proper loop shape
76. Test wire bond pull strength on sample units (>8 gf minimum) and shear strength (>20 gf minimum) to ensure reliability
77. Reject any units with wire bond defects including lifted bonds, wire breakage, or poor ball formation (typical reject rate <0.5%)
78. Prepare YAG:Ce phosphor suspension by mixing 12% by weight Ce-doped Y3Al5O12 powder in silicone resin (Dow Corning OE-6550)
79. Mill phosphor suspension using planetary ball mill with zirconia beads for 4 hours to achieve particle size distribution 8-15 μm
80. Adjust phosphor concentration to achieve target correlated color temperature (CCT) of 6500K for neutral white light
81. Degas phosphor suspension in vacuum chamber at 50 mTorr for 20 minutes to remove trapped air bubbles
82. Dispense 1.5 mg of phosphor-silicone suspension into each LED cavity using precision needle dispensing system
83. Control dispense parameters to achieve uniform phosphor layer covering die with thickness 120-150 μm after curing
84. Program dispenser to apply material in circular pattern starting from die edges moving inward to prevent air entrapment
85. Verify dispensed phosphor amount using automated vision system measuring deposit diameter and height (±0.1 mg tolerance)
86. Pre-cure phosphor layer at 100°C for 15 minutes on hotplate to increase viscosity and prevent flowing during handling
87. Load lead frame strips into curing oven and cure phosphor-silicone at 150°C for 90 minutes to fully crosslink polymer
88. Cool lead frames slowly to room temperature over 30 minutes to minimize thermal stress on wire bonds and die attach
89. Prepare clear silicone encapsulant (Momentive SilGel 612) with refractive index 1.52 for hemispherical lens molding
90. Degas clear silicone in vacuum chamber at 30 mTorr for 15 minutes to eliminate bubbles that would create optical defects
91. Load lead frame strips into compression molding press with multi-cavity mold (150 cavities matching lead frame pitch)
92. Preheat mold to 170°C and apply mold release agent (fluoropolymer coating) to ensure clean lens release
93. Position lead frame strip in mold cavity and dispense 3 mg clear silicone into each LED position
94. Close mold with 50 kN clamping force and hold at 170°C for 8 minutes to cure silicone and form hemispherical lens
95. Monitor mold temperature and pressure in real-time to ensure uniform curing across all 150 cavities
96. Cool mold to 80°C and open to release molded lead frame strip with formed lenses (diameter 1.8 mm, height 0.9 mm)
97. Inspect molded lenses for defects including bubbles, incomplete fill, flash, or surface contamination using backlight inspection
98. Post-cure molded units at 150°C for 2 hours in nitrogen oven to complete silicone crosslinking and stabilize optical properties
99. Perform initial electrical test by applying 20 mA forward current to each LED and measuring forward voltage (Vf)
100. Record forward voltage distribution (typical Vf = 2.85-3.15 V at 20 mA) and reject units outside specification window
101. Measure luminous flux using integrating sphere photometer (Instrument Systems ISP-500) at 20 mA drive current
102. Capture optical spectrum from 380-780 nm wavelength range with 1 nm resolution using calibrated spectrometer
103. Calculate photometric parameters including luminous flux (target 4.5-5.5 lumens at 20 mA), dominant wavelength, and peak wavelength
104. Measure correlated color temperature (CCT) from spectrum and CIE 1931 chromaticity coordinates (x,y)
105. Verify CCT in range 6000-7000K with target of 6500K ±500K for neutral white backlighting application
106. Calculate color rendering index (CRI) from measured spectrum (typical Ra = 70-75 for YAG:Ce phosphor conversion)
107. Measure angular emission pattern using goniophotometer from -90° to +90° in 1° increments
108. Verify Lambertian emission pattern with viewing half-angle of 120° at 50% intensity points
109. Electrically bin LEDs into forward voltage groups: VF1 (2.80-2.90V), VF2 (2.90-3.00V), VF3 (3.00-3.10V), VF4 (3.10-3.20V)
110. Optically bin LEDs into luminous flux groups: E1 (4.5-5.0 lm), E2 (5.0-5.5 lm), E3 (5.5-6.0 lm)
111. Color bin LEDs into CCT groups: WW (2700-3500K), NW (3500-5000K), CW (5000-7000K) with sub-bins every 500K
112. Further classify color into ANSI C78.377 standard chromaticity bins for consistent appearance matching
113. Apply bin code labels to lead frame strips using laser marking system with human-readable and machine-readable codes
114. Singulate individual LEDs from lead frame strip using precision punch press or shearing die
115. Inspect singulated LEDs for mechanical damage including cracked lenses, broken wire bonds, or lead frame deformation
116. Clean singulated LEDs by wiping with isopropanol-dampened cleanroom wipes to remove fingerprints and particles
117. Select sample units from each bin group for detailed reliability and performance characterization testing
118. Mount sample LEDs on TO-style test headers with wire bond connections for accelerated life testing
119. Load 50 sample units into burn-in chamber and operate at 60 mA forward current (3× rated current) at 85°C ambient
120. Monitor forward voltage drift and luminous flux degradation every 100 hours for 1000-hour accelerated aging test
121. Calculate projected L70 lifetime (time to 70% luminous flux) using exponential decay model from burn-in data
122. Verify L70 lifetime exceeds 30,000 hours at rated conditions (20 mA, 25°C) based on Arrhenius acceleration factor
123. Perform thermal shock testing by cycling sample units between -40°C and 125°C with 15-minute dwell times for 500 cycles
124. Conduct high-temperature storage test at 125°C for 1000 hours without electrical bias to assess package degradation
125. Perform moisture sensitivity level (MSL) testing per JEDEC J-STD-020 with 85°C/85% RH exposure followed by reflow simulation
126. Subject sample units to three 260°C peak temperature reflow profiles and verify no optical or electrical degradation
127. Conduct ESD testing per JEDEC JS-001 human body model with discharge voltages up to 2000V to verify >1000V rating
128. Perform electrical overstress testing by applying reverse voltage up to 10V and verifying no breakdown or damage
129. Test forward current overdrive by pulsing at 200 mA (10× rated) for 100,000 cycles with 1% duty cycle
130. Verify solderability of lead frame terminations using wetting balance test per J-STD-002 with Sn63/Pb37 solder at 245°C
131. Measure thermal resistance junction-to-case (Rθ-JC) using forward voltage temperature coefficient method
132. Determine Rθ-JC typically 18-22 K/W for 2.8×2.0 mm package size with copper lead frame heat spreading
133. Generate thermal model showing junction temperature rise of 20-25°C at 20 mA on standard FR-4 PCB with minimal copper
134. Create electrical model including 2.9V forward voltage source with 25Ω series resistance for circuit simulation
135. Develop optical model using ray-tracing software (Zemax or LightTools) to predict light distribution on keyboard surface
136. Validate models against measured LED performance data with correlation better than ±5% for flux and ±0.1V for voltage
137. Program automated test handler (Cohu LS-4000) to perform final electrical and optical testing at production speed
138. Set test handler index time to 0.6 seconds per LED for throughput of 6000 units per hour
139. Configure test contact system with kelvin probing for accurate forward voltage measurement (±10 mV resolution)
140. Integrate integrating sphere and spectrometer for real-time luminous flux and color measurement during handling
141. Establish test limits in handler software: Vf 2.80-3.20V, flux 4.5-6.0 lm, CCT 6000-7000K, pass rate target >98%
142. Load singulated LEDs into vibratory bowl feeder that orients parts cathode-down for pick-and-place handling
143. Transfer oriented LEDs to test socket using vacuum nozzle with gentle 5 gf placement force
144. Apply 20 mA constant current from precision source measurement unit (Keithley 2400) with 0.1% accuracy
145. Measure forward voltage after 100 ms stabilization time using four-wire sensing to eliminate contact resistance
146. Trigger photodetector in integrating sphere to measure luminous flux with integration time of 50 ms
147. Capture optical spectrum with array spectrometer (Ocean Optics USB2000+) using 20 ms integration time
148. Transfer passed LEDs from test socket to tape carrier (8 mm wide paper tape with 4 mm pitch pockets)
149. Vacuum-seal LEDs in embossed plastic pockets (2.9×2.1×1.0 mm cavity size) formed in carrier tape
150. Apply pressure-sensitive cover tape (polyester film) over loaded pockets to prevent LED ejection during handling
151. Wind loaded carrier tape onto 7-inch diameter plastic reels with 2000 LEDs per reel
152. Program tape-and-reel equipment to maintain proper tension (100-150 gf) to prevent pocket deformation or tape breakage
153. Apply reel labels with full traceability information: part number, bin code, quantity, date code, lot number
154. Scan reel barcode and update manufacturing execution system (MES) with inventory and test data
155. Insert desiccant packet (5 gram silica gel) and humidity indicator card in moisture barrier bag with LED reel
156. Vacuum-seal moisture barrier bag (aluminum-polyethylene laminate) and verify seal integrity with leak detection
157. Apply external label to sealed bag with handling precautions, MSL rating, and baking instructions if required
158. Perform incoming inspection sampling at customer facility by testing 13 units per lot per AQL 1.0 standard
159. Verify product marking matches purchase order specifications for bin code, forward voltage, and color temperature
160. Inspect physical dimensions using calibrated microscope with micrometer stage (±10 μm measurement uncertainty)
161. Confirm package body dimensions 2.8±0.1 mm × 2.0±0.1 mm × 0.8±0.1 mm height match drawing specifications
162. Measure lead coplanarity using precision height gauge to verify <0.1 mm maximum deviation between leads
163. Check lens concentricity with LED die position by X-ray imaging to ensure optical symmetry (±50 μm tolerance)
164. Verify electrical performance matches datasheet specifications through sample testing of 30 units per lot
165. Measure forward voltage distribution and confirm mean value within ±50 mV of bin code specification
166. Test luminous flux uniformity with standard deviation <5% within single reel to ensure consistent keyboard brightness
167. Verify color temperature consistency with ±300K variation across production lot for uniform white appearance
168. Assess optical spectrum shape and verify absence of secondary emission peaks that could indicate phosphor degradation
169. Test reverse leakage current at 5V reverse bias to verify <10 μA maximum per device specification
170. Perform optical alignment test by mounting LEDs on keyboard PCB in cross-section pattern and measuring uniformity
171. Measure center-to-key brightness variation to ensure <15% deviation for uniform backlighting across keyboard
172. Verify proper light diffusion through keycap material (translucent ABS or PBT plastic with laser-etched legends)
173. Test LED viewing angle and confirm adequate brightness at off-axis angles for visibility from different user positions
174. Conduct color mixing evaluation for white light quality by analyzing spectrum under CIE standard illuminant conditions
175. Document any color shift or tint when viewed from different angles due to phosphor scattering characteristics
176. Implement statistical process control (SPC) with real-time monitoring of forward voltage and luminous flux distributions
177. Calculate Cpk process capability indices targeting >1.33 for critical parameters to ensure robust manufacturing
178. Establish control charts with ±3 sigma limits and trigger investigation when trends approach control boundaries
179. Perform correlation analysis between epitaxial wafer parameters and final LED performance to optimize upstream processes
180. Track yield and reliability data by wafer lot, die position, and assembly line to identify systematic issues
181. Implement automated defect classification system using machine learning to categorize and trend failure modes
182. Conduct failure analysis on returned units using cross-sectioning, SEM imaging, and energy dispersive X-ray spectroscopy
183. Document common failure mechanisms including wire bond fatigue, die attach delamination, and phosphor degradation
184. Develop corrective actions for identified failures such as wire bond process optimization or encapsulant material changes
185. Qualify alternative materials and processes through design of experiments (DOE) with full reliability testing
186. Update product datasheet with typical performance curves showing flux vs. current, flux vs. temperature, and spectral distribution
187. Provide application notes for keyboard designers covering LED spacing, diffuser design, and PWM dimming recommendations
188. Specify PWM dimming frequency >200 Hz to avoid visible flicker with recommended range 500-2000 Hz
189. Recommend current derating for extended lifetime operation, suggesting 15-18 mA drive instead of 20 mA maximum
190. Provide thermal design guidelines showing junction temperature should be maintained <85°C for 50,000+ hour lifetime
191. Document ESD handling precautions and recommend wrist straps and ESD mats during assembly operations
192. Offer custom binning options for large-volume customers requiring tighter color tolerance (±200K CCT) for premium keyboards
193. Provide qualification report demonstrating compliance with automotive AEC-Q102 standard for harsh environment applications
194. Supply photometric data files in IES format for LED optical modeling in keyboard lighting simulation software
195. Maintain full supply chain transparency and conflict minerals compliance per Dodd-Frank Act Section 1502 requirements
