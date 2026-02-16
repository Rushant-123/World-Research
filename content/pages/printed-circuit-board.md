---
title: "Printed Circuit Board"
company: "Unimicron Technology"
country: "Taiwan"
selling_price: 8.0
inputs:
  - name: "PCB Substrate"
    cost: 1.0
    link: "pcb-substrate"
  - name: "Copper Foil"
    cost: 0.5
    link: "copper-foil"
  - name: "Photoresist"
    cost: 0.3
    link: "photoresist"
  - name: "Plating Chemicals"
    cost: 0.4
    link: "electroplating-gold"
  - name: "Drilling Equipment"
    cost: 0.3
    link: "diamond-saw"
  - name: "Testing"
    cost: 0.3
    link: "board-tester"
value_created: 5.2
---

Multi-layer printed circuit boards (PCBs) manufactured by Unimicron Technology in Taiwan represent the interconnection backbone of modern computing systems. These precision-engineered boards contain 8 to 16 copper layers separated by insulating substrates, with trace widths down to 75 micrometers and controlled impedances of 50 ohms (single-ended) or 90-100 ohms (differential pairs). The manufacturing process combines photolithographic patterning, chemical etching, precision drilling, electroplating, and rigorous electrical testing to create boards capable of supporting high-speed digital signals, power distribution, and complex component interconnections in servers, workstations, and high-performance computers.

## Manufacturing Steps

### Inner Layer Preparation (Layers 2-15)

1. Receive FR-4 substrate core panels (prepreg-clad copper, typically 18-35 μm copper thickness) in cleanroom environment with Class 10,000 air filtration
2. Inspect incoming substrate panels for delamination, copper thickness uniformity (±10%), and dimensional accuracy using automated optical inspection
3. Clean substrate surfaces with alkaline cleaner at 55°C to remove oxidation and organic contaminants
4. Rinse panels with deionized water cascade (conductivity <1 μS/cm) for 90 seconds
5. Micro-etch copper surface with sodium persulfate solution to create roughness profile (Ra 2-4 μm) for photoresist adhesion
6. Dry panels in forced-air oven at 80°C for 5 minutes
7. Apply negative-tone dry film photoresist (25-50 μm thickness) using heated lamination rollers at 105°C and 0.4 MPa pressure
8. Trim photoresist edges and inspect for bubbles, wrinkles, or contamination defects
9. Align photomask (chrome-on-quartz, containing circuit pattern for specific layer) to panel using optical alignment marks with ±25 μm registration accuracy
10. Expose photoresist to UV light (350-405 nm wavelength) at 120 mJ/cm² exposure dose using contact or projection lithography
11. Remove photomask and allow photoresist to stabilize for 10 minutes in dark environment
12. Develop exposed photoresist in sodium carbonate solution (1% concentration) at 30°C for 60 seconds, removing unexposed areas
13. Spray rinse developed panel with deionized water at 2 bar pressure
14. Inspect developed pattern using automated optical inspection (AOI) system, checking for bridging, opens, line width (target ±10%), and registration accuracy
15. Repair minor defects using laser ablation or manual touch-up with photoresist pen
16. Bake developed panel at 80°C for 20 minutes to harden photoresist and improve etch resistance

### Inner Layer Etching

17. Etch exposed copper using cupric chloride or alkaline ammonia etchant at 45°C, removing copper not protected by photoresist
18. Monitor etch rate (typically 25-40 μm/min) and uniformity across panel using in-line sensors
19. Control etchant concentration (copper content <150 g/L) and pH (8.0-8.5 for alkaline) for consistent undercutting (target 15-25 μm)
20. Rinse etched panel thoroughly with deionized water spray to stop etching reaction
21. Strip photoresist using sodium hydroxide solution (3% concentration) at 55°C for 90 seconds
22. Rinse stripped panel with deionized water cascade
23. Micro-etch surface lightly to remove photoresist residue and oxidation
24. Inspect etched circuit pattern using AOI system, measuring trace width (target: 75-150 μm, tolerance ±15 μm), spacing (target ≥75 μm), and isolation resistance
25. Measure copper thickness of traces using X-ray fluorescence (XRF) spectroscopy (target: 15-33 μm remaining after etch)
26. Dry panel at 80°C for 10 minutes

### Oxide Treatment (Inner Layers)

27. Clean inner layer panels with acid dip (10% sulfuric acid) to remove surface oxidation
28. Rinse with deionized water spray for 60 seconds
29. Apply black oxide or brown oxide chemical treatment to create micro-rough surface (increases adhesion to prepreg by 300%)
30. Immerse panels in oxidizing solution containing sodium chlorite and sodium hydroxide at 85°C for 3-5 minutes
31. Rinse oxidized panels with deionized water cascade
32. Apply anti-tarnish coating to prevent oxidation before lamination
33. Dry panels at 80°C for 10 minutes in low-humidity environment (<30% RH)
34. Inspect oxide layer thickness (target: 0.5-2.0 μm) using cross-section microscopy on test coupons
35. Measure surface roughness (Ra) using profilometry (target: 3-6 μm for optimal prepreg adhesion)
36. Store oxide-treated panels in sealed bags with desiccant, limiting shelf life to 7 days before lamination

### Layer Stackup Design and Preparation

37. Retrieve layer stackup design from CAD/CAM system specifying layer arrangement, prepreg types, core thicknesses, and copper weights for target board thickness and impedance
38. Select prepreg sheets (fiberglass fabric impregnated with partially cured epoxy resin) with appropriate resin content (40-60%) and thickness (50-200 μm per sheet)
39. Cut prepreg sheets to panel size plus 10 mm edge allowance using programmable shear cutter
40. Retrieve inner layer cores (previously etched and oxide-treated) from storage
41. Clean lamination press plates with alcohol to remove residue from previous cycle
42. Apply release film (Teflon or polyimide) to press plates
43. Preheat lamination press to 180°C chamber temperature
44. Stack layers in specified order on lower press plate: release film, copper foil (for outer layer), prepreg sheets, inner layer 2 (oxide side up), prepreg sheets, inner layer 3, prepreg sheets, continuing pattern through all inner layers (typically 6-14 inner layers)
45. Align all layers using tooling pins inserted through pre-drilled holes with ±50 μm accuracy
46. Place final prepreg sheets and outer copper foil on top of stackup
47. Cover stackup with upper release film and steel caul plate
48. Insert thermocouples between layers to monitor temperature profile during lamination

### Lamination Process

49. Close lamination press and initiate vacuum evacuation to <10 mbar to remove trapped air and volatiles
50. Apply initial pressure of 0.5 MPa while maintaining vacuum for 10 minutes
51. Begin heating cycle, ramping temperature at 2-4°C/min to 170°C (below epoxy gel point)
52. Hold at 170°C for 30 minutes while maintaining vacuum to allow resin flow and air escape
53. Release vacuum and increase pressure to 2.5 MPa as epoxy resin begins to cure
54. Ramp temperature to 185°C at 2°C/min, continuing pressure hold
55. Maintain lamination conditions (185°C, 2.5 MPa) for 90-120 minutes to fully cure epoxy resin and bond all layers
56. Monitor resin cure using embedded sensors tracking resin viscosity and cross-linking progress
57. Begin controlled cooling at 2-3°C/min while maintaining pressure to prevent delamination and warpage
58. Release pressure when temperature drops below 100°C
59. Remove laminated panel from press when temperature reaches 60°C
60. Trim panel edges using routing machine to remove excess material and reveal layer alignment
61. Inspect laminated panel for delamination using C-mode scanning acoustic microscopy (C-SAM) detecting air gaps >100 μm
62. Measure panel thickness using micrometer at 9 points (target thickness: 1.6 mm ± 0.1 mm for typical 12-layer board)
63. Check panel flatness/warpage using optical coordinate measuring machine (target: <0.7% bow and twist)
64. Cut test coupons from panel edges for destructive testing (cross-section analysis, peel strength, thermal stress)

### Drilling - Mechanical Through-Holes

65. Load laminated panels onto CNC drilling machine table with vacuum hold-down
66. Install entry and backup materials (aluminum sheets) above and below panel to prevent burrs and tear-out
67. Load drill program from CAD/CAM system specifying X-Y coordinates of all holes (typical board contains 500-5,000 holes)
68. Install carbide drill bits (diameters: 0.2-6.5 mm) in automated tool changer, with typical via drill size of 0.3 mm
69. Calibrate drill spindle runout (<5 μm) and Z-axis zero point using touch-off probe
70. Begin drilling operation at 80,000-150,000 RPM spindle speed (higher speed for smaller diameters)
71. Drill through-holes using pecking cycle (drill-retract-drill) to clear chips and prevent clogging
72. Apply coolant/lubrication during drilling to control temperature and remove debris
73. Monitor drill bit wear using automated vision system, replacing bits after 2,000-5,000 hits depending on diameter
74. Measure hole position accuracy using optical inspection (target: ±75 μm from design location)
75. Inspect hole quality for smearing (resin residue), burrs, and breakout using microscopy on sample holes
76. Deburr holes if necessary using mechanical or chemical methods
77. Remove entry and backup materials from panel

### Drilling - Laser Microvias (HDI Boards)

78. Load panel onto laser drilling system for high-density interconnect (HDI) designs requiring microvias (blind/buried vias connecting adjacent layers only)
79. Calibrate CO2 or UV laser beam focus and power (typically 5-20 watts) using test substrates
80. Program laser drill coordinates for microvias (typical size: 75-150 μm diameter)
81. Execute laser drilling using multiple pulses per via (3-10 pulses) to ablate through copper and prepreg to reach target layer
82. Use real-time depth monitoring (optical or acoustic) to stop drilling at precise layer depth
83. Inspect microvia formation using optical microscopy, measuring diameter (target ±10 μm), taper angle (target <15°), and bottom copper exposure
84. Clean laser-drilled microvias using plasma desmear to remove residual resin and char

### Desmear and Hole Cleaning

85. Load drilled panels onto desmear line racks in vertical orientation
86. Degrease panels in alkaline cleaner at 60°C for 5 minutes to remove drilling oil and organic contaminants
87. Rinse with deionized water spray for 90 seconds
88. Etch smear (resin residue coating hole walls) using permanganate-based solution at 80°C for 10-20 minutes, oxidizing epoxy resin
89. Monitor desmear effectiveness using visual inspection (hole walls should show clean copper exposure and glass fiber texture)
90. Neutralize permanganate residue with hydroxylamine hydrochloride solution at 40°C for 5 minutes
91. Rinse thoroughly with deionized water cascade to remove all chemical residues
92. Apply plasma desmear treatment using oxygen or CF4 plasma (optional, for high-reliability applications) at 300-500 watts for 5-15 minutes to remove final traces of resin and improve hole wall cleanliness
93. Inspect hole cleanliness using cross-section microscopy on test coupons (target: no visible smear, clean copper exposure)

### Electroless Copper Deposition

94. Pre-activate hole walls with catalyst solution containing palladium-tin colloid at room temperature for 3 minutes, depositing palladium nucleation sites
95. Rinse panels with deionized water to remove excess catalyst
96. Accelerate catalyst by removing tin layer using acidic solution, leaving pure palladium particles
97. Rinse with deionized water spray for 60 seconds
98. Immerse panels in electroless copper plating bath at 45°C containing copper sulfate, formaldehyde (reducing agent), EDTA (complexing agent), and stabilizers
99. Deposit 0.3-1.0 μm electroless copper layer on hole walls and exposed surfaces through autocatalytic chemical reduction (typical deposition rate: 3-5 μm/hour)
100. Monitor electroless copper uniformity and thickness using cross-section analysis of test coupons
101. Rinse panels with deionized water cascade
102. Dry panels in forced-air oven at 80°C for 10 minutes
103. Inspect electroless copper coverage using visual inspection and resistance testing between layers (target: continuous conductive layer on all hole walls)

### Panel Plating (Copper Thickening)

104. Load panels onto rack for electroplating, ensuring electrical contact to copper surface
105. Immerse panels in sulfuric acid dip (10% concentration) for 30 seconds to remove oxidation and improve plating adhesion
106. Transfer panels to electrolytic copper plating tank containing copper sulfate (200 g/L) and sulfuric acid (50 g/L) at 25°C
107. Apply cathodic current at 2-4 A/dm² current density, plating copper onto panel surface and hole walls
108. Plate copper to 20-25 μm thickness on panel surfaces and hole walls (plating time: 60-90 minutes)
109. Use periodic reverse current pulses to improve throwing power (copper distribution into high-aspect-ratio holes with depth:diameter ratio up to 12:1)
110. Monitor plating thickness uniformity across panel using ultrasonic thickness gauge (target uniformity: ±10%)
111. Rinse plated panels with deionized water spray for 90 seconds
112. Dry panels at 80°C for 10 minutes
113. Measure copper thickness on panel surface and in via holes using cross-section microscopy on test coupons (target: 25 μm ± 5 μm)

### Outer Layer Photolithography

114. Micro-etch plated copper surface with sodium persulfate to create roughness profile for photoresist adhesion (remove 1-2 μm copper)
115. Rinse and dry panels in preparation for photoresist application
116. Apply negative-tone dry film photoresist (38-50 μm thickness) using lamination rollers at 105°C and 0.4 MPa pressure
117. Trim photoresist and inspect for defects
118. Align outer layer photomask (containing circuit pattern, pads, and traces) to panel using fiducial marks with ±25 μm registration accuracy to inner layers
119. Expose photoresist to UV light at 120 mJ/cm² dose
120. Develop exposed photoresist in sodium carbonate solution at 30°C, removing unexposed areas and exposing copper to be etched
121. Rinse developed panel with deionized water
122. Inspect developed pattern using AOI system for bridging, opens, and registration to inner layers (critical for via landing accuracy)
123. Bake panel at 80°C for 20 minutes to harden photoresist for pattern plating

### Pattern Plating (Copper and Tin)

124. Immerse panels in electrolytic copper plating bath
125. Apply cathodic current at 2-3 A/dm² to plate additional 15-20 μm copper onto exposed areas (future circuit traces and pads) while photoresist protects areas to be etched
126. Rinse panels with deionized water
127. Transfer panels to tin plating bath (or tin-lead for HASL finish applications)
128. Plate 5-10 μm tin layer onto copper pattern to serve as etch resist for next step
129. Rinse and dry panels
130. Measure plated copper and tin thickness using XRF spectroscopy at multiple points (target copper: 15-20 μm, tin: 5-10 μm)

### Outer Layer Etching

131. Strip photoresist using sodium hydroxide solution at 55°C, exposing background copper (not protected by plated tin)
132. Rinse stripped panels with deionized water
133. Etch exposed copper using cupric chloride or alkaline etchant at 45°C, removing copper not protected by tin, creating final circuit pattern on outer layers
134. Monitor etch rate and uniformity to achieve target trace dimensions (typical outer layer trace width: 100-150 μm with ±15 μm tolerance)
135. Rinse etched panels thoroughly to stop etching reaction
136. Strip tin etch resist using nitric acid solution or alkaline tin stripper at 40°C
137. Rinse and dry panels
138. Inspect outer layer circuit pattern using AOI system, measuring trace width, spacing, pad size, and annular ring (copper around via on outer layer, target minimum 75 μm)
139. Verify no shorts or opens using electrical continuity tester

### Solder Mask Application

140. Clean panel surface with acid dip and micro-etch to remove oxidation and improve solder mask adhesion
141. Rinse and dry panels thoroughly
142. Apply liquid photoimageable solder mask (LPI) using curtain coating or screen printing to 15-30 μm wet thickness (green, blue, red, or other colors available)
143. Pre-bake solder mask at 80°C for 20 minutes to evaporate solvents and tack surface
144. Align solder mask photomask (containing clear areas where copper should be exposed: pads, test points, edge connectors) to panel with ±50 μm accuracy
145. Expose solder mask to UV light at 150-250 mJ/cm² to crosslink polymer in exposed areas
146. Develop solder mask in sodium carbonate solution at 30°C for 90-120 seconds, removing unexposed areas and revealing copper pads
147. Rinse developed panels with high-pressure deionized water spray (3-5 bar) to ensure complete removal of uncured mask from openings
148. Inspect solder mask openings using AOI system, measuring opening size and position accuracy relative to copper pads (target: opening 100-150 μm larger than pad for assembly clearance)
149. Final cure solder mask in convection oven with temperature profile: ramp to 150°C over 30 minutes, hold at 150°C for 60 minutes to fully crosslink polymer and achieve chemical/thermal resistance
150. Cool panels to room temperature gradually to prevent thermal stress

### Silkscreen Printing (Legend)

151. Clean solder mask surface with isopropyl alcohol to remove dust and oils
152. Prepare silkscreen stencil with component designators (R1, C5, U3), polarity marks, pin-1 indicators, company logos, and test point labels
153. Align screen to panel using fiducial marks
154. Apply epoxy-based white ink (or yellow for dark-colored solder masks) through screen using squeegee pressure
155. Dry printed legend at 80°C for 15 minutes to tack ink
156. Cure legend ink at 150°C for 30 minutes to achieve permanent adhesion and abrasion resistance
157. Inspect legend print quality using optical inspection for readability, position accuracy (±0.2 mm), and ink coverage

### Surface Finish - ENIG (Electroless Nickel Immersion Gold)

158. Load panels onto vertical racks for ENIG processing line
159. Clean panels with acid dip (10% sulfuric acid) at room temperature for 2 minutes to remove oxidation from exposed copper pads
160. Rinse with deionized water cascade for 90 seconds
161. Micro-etch copper surface with sodium persulfate to remove 0.5-1.0 μm copper and create active surface
162. Apply pre-activation treatment to enhance nickel deposition
163. Rinse thoroughly with deionized water
164. Immerse panels in electroless nickel plating bath at 85°C containing nickel sulfate, sodium hypophosphite (reducing agent), and complexing agents
165. Deposit 3-6 μm nickel layer on exposed copper pads through autocatalytic reduction (typical rate: 10-15 μm/hour)
166. Monitor nickel thickness using XRF spectroscopy on test pads (target: 5 μm ± 1 μm)
167. Rinse panels with deionized water to remove nickel bath residues
168. Immerse panels in immersion gold bath at 65°C containing gold potassium cyanide and reducing agents
169. Deposit 0.05-0.15 μm gold layer on nickel through displacement reaction (gold replaces surface nickel atoms)
170. Monitor gold thickness using XRF spectroscopy (target: 0.08 μm ± 0.03 μm)
171. Rinse panels thoroughly with deionized water cascade
172. Dry panels in forced-air oven at 80°C for 10 minutes
173. Inspect ENIG finish for uniformity, discoloration, and contamination using optical microscopy and SEM analysis on test coupons

### Routing and Profiling

174. Load panels onto CNC routing machine table with vacuum hold-down
175. Install carbide routing bits (typically 2.0-3.175 mm diameter) in automatic tool changer
176. Load routing program from CAD/CAM system defining board outline, breakaway tabs, and tooling hole removal
177. Route panel to separate individual PCBs following programmed path at 24,000-30,000 RPM spindle speed and 2-4 m/min feed rate
178. Use down-cut spiral bits to prevent solder mask chipping and delamination
179. Apply dust extraction during routing to remove fiberglass particles and copper dust
180. Deburr routed edges using light sanding or tumbling process
181. Break individual boards from panel if using breakaway tabs
182. Inspect routed board dimensions using coordinate measuring machine (target: ±0.15 mm from design dimensions)
183. Verify board edge quality for smooth finish without delamination or copper burrs

### Electrical Testing - Continuity and Isolation

184. Load individual PCBs onto flying probe tester or bed-of-nails fixture for electrical testing
185. Import netlist from PCB design file specifying all electrical connections (nets) and isolated regions
186. Test continuity of all nets by applying test voltage and measuring resistance between designated test points (target: <1 ohm for continuous nets)
187. Identify opens (discontinuous traces or vias) if resistance exceeds threshold
188. Test isolation between all adjacent nets by measuring resistance (target: >100 Mohm for proper isolation)
189. Identify shorts if isolation resistance falls below threshold
190. Mark boards with opens or shorts as rejects for failure analysis
191. Store test results in database with serial number traceability for each board

### Impedance Testing

192. Identify impedance-controlled traces on test coupons at panel edge (typically 50-ohm single-ended or 90/100-ohm differential pairs for high-speed signals)
193. Load test coupon onto time-domain reflectometry (TDR) test equipment
194. Apply fast-rise-time pulse to impedance test traces and measure reflected waveform
195. Calculate characteristic impedance from TDR waveform analysis (target: 50 ohm ± 5 ohm for single-ended, 90-100 ohm ± 10% for differential pairs)
196. Verify impedance consistency along trace length (target variation: <±2 ohms)
197. Store impedance test data with panel lot number for process control feedback
198. Adjust lamination parameters (prepreg thickness, resin content) for future panels if impedance deviates from target specifications

### Final Inspection and Quality Control

199. Perform visual inspection of each board under magnification, checking for solder mask defects, exposed copper, scratches, dents, and contamination
200. Verify fiducial mark quality and position for SMT assembly machine recognition
201. Inspect solder mask dam integrity between adjacent pads (minimum 100 μm web for 0.5 mm pitch components)
202. Check ENIG finish for discoloration, organic contamination, or black pad defects using optical microscopy
203. Measure board thickness at multiple points using micrometer (target: 1.6 mm ± 0.1 mm)
204. Verify board flatness within specification (<0.7% bow and twist) for automated assembly compatibility
205. Perform ionic cleanliness testing on sample boards using resistivity of solvent extract (ROSE) test (target: <1.56 μg/cm² NaCl equivalent)
206. Conduct thermal stress testing (solder float or thermal cycling) on sample boards to verify reliability and absence of delamination
207. Perform cross-section analysis on destructive test coupons, examining via plating quality (no voids), layer registration (target: ±100 μm between layers), resin fill, and copper thickness distribution
208. Apply final protective coating or packaging (vacuum-sealed bags with desiccant and humidity indicator card)
209. Apply serial number label or laser marking for traceability
210. Generate Certificate of Compliance documenting IPC-6012 Class 2 or Class 3 qualification testing results
211. Package qualified PCBs in ESD-protective containers (20-50 boards per box) with foam separators
212. Store finished goods in controlled environment (20-25°C, 30-50% RH) awaiting shipment
213. Ship PCBs to electronics assembly facility for component mounting and soldering

The completed PCBs meet IPC-6012 Class 2 or Class 3 standards for commercial or high-reliability applications, featuring controlled impedance for high-speed signals (PCIe, DDR, USB), fine-pitch component support (down to 0.4 mm BGA pitch), and thermal management capabilities through buried copper planes. Quality metrics include >99% first-pass electrical yield, <50 ppm field failure rate, and traceability to raw material lots through serialization systems.
