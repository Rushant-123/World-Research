---
title: "SMT Assembly Service"
company: "Jabil Inc."
country: "United States"
selling_price: 5.0
inputs:
  - name: "SMT Placement Machine"
    cost: 0.8
    link: "smt-line"
  - name: "Solder Paste"
    cost: 0.2
    link: "solder-paste"
  - name: "Reflow Oven"
    cost: 0.3
    link: "reflow-oven"
  - name: "Stencil Printer"
    cost: 0.15
    link: "smt-line"
  - name: "Inspection Equipment"
    cost: 0.3
    link: "optical-inspection"
  - name: "Assembly Technicians"
    cost: 0.5
    link: "assembly-labor"
value_created: 2.75
---

## Manufacturing Process

### Stencil Design and Fabrication (Steps 1-15)

1. Import PCB Gerber files and solder mask data into stencil design software
2. Extract pad geometry from solder paste layer (typically cream layer in CAD)
3. Analyze component types: 0201, 0402, 0603, QFN, BGA, fine-pitch connectors
4. Calculate aperture size reduction: typically 10-15% smaller than pad for small components
5. Design aperture shapes: rectangular for most pads, home-plate for QFNs
6. Add aperture modifications for thermal reliefs on large ground pads
7. Create stepped stencils for mixed component heights (standard + thick areas)
8. Select stencil thickness: 4 mil (0.1mm) for fine pitch, 5 mil for standard, 6-8 mil for power
9. Choose stencil material: laser-cut stainless steel for production volumes
10. Add fiducial openings matching PCB fiducial locations (3 minimum)
11. Design stencil frame attachment points and tooling holes
12. Generate CNC laser cutting program from aperture data
13. Laser cut stencil from 301 stainless steel sheet with 25-micron precision
14. Electropolish stencil surfaces to remove burrs and improve paste release
15. Perform stencil quality inspection: measure aperture dimensions with microscope

### Pre-Production Setup (Steps 16-30)

16. Receive incoming PCB panels with barcodes for traceability
17. Inspect bare PCBs for warpage using flatness gauge (max 0.5mm deviation)
18. Check PCB fiducials are visible and not obscured by solder mask
19. Verify PCB thickness matches specification (typically 1.6mm +/- 0.15mm)
20. Store PCBs in climate-controlled area at 22C, 45-55% relative humidity
21. Load assembly program into SMT line control system
22. Import pick-and-place coordinate file from PCB design software
23. Calibrate vision system on stencil printer using reference target
24. Mount stencil into printer frame with proper tension (30-40 N/cm)
25. Load PCB support tooling into conveyor system
26. Program conveyor width for panel size (match PCB dimensions exactly)
27. Set conveyor speed to 800mm/min for standard throughput
28. Perform printer calibration: check squeegee pressure, speed, and angle
29. Run golden board through line to verify program accuracy
30. Adjust component placement offsets based on golden board measurements

### Solder Paste Printing (Steps 31-45)

31. Remove solder paste from refrigerator (storage at 2-8C required)
32. Allow paste to reach room temperature for 4 hours minimum
33. Check paste expiration date and lot number for traceability
34. Knead solder paste container for 2 minutes to ensure homogeneity
35. Measure paste viscosity with viscometer: target 180-220 Pa·s
36. Load solder paste onto stencil printer (Type 3 or Type 4 powder size)
37. Install metal or polyurethane squeegee blades at 60-degree angle
38. Set squeegee speed to 30-50 mm/sec for consistent printing
39. Set squeegee pressure to 5-7 kg force (varies by paste and stencil)
40. Program print separation speed: 0.5-1.0 mm/sec to prevent bridging
41. Load first PCB panel into printer and align to stencil using fiducials
42. Execute print stroke: squeegee rolls paste across stencil apertures
43. Stencil separates from PCB at controlled speed (paste releases from apertures)
44. Verify solder paste deposits visually before moving to inspection
45. Clean stencil underside every 10-15 prints using automated wiper or vacuum

### Solder Paste Inspection (Steps 46-55)

46. Transport PCB to 3D solder paste inspection (SPI) system
47. Align PCB using fiducial recognition with 5-micron accuracy
48. Project structured light patterns onto solder paste deposits
49. Capture height profile of every paste deposit using phase shift measurement
50. Measure paste volume: target 50-80% of stencil aperture volume
51. Check paste height: typically 100-125 microns for 5 mil stencil
52. Measure X-Y position offset: acceptable range +/- 25% of pad size
53. Detect bridging between adjacent pads (reject if paste connects pads)
54. Identify insufficient paste deposits (reject if <50% target volume)
55. Generate pass/fail decision: reject PCBs with defects exceeding threshold (typically >5 defects)

### Component Placement - Chip Shooter (Steps 56-75)

57. Transport approved PCBs to high-speed chip shooter placement machine
58. Load component reels onto feeder stations (8mm tape for 0402, 16mm for larger)
59. Verify component part numbers match feeder assignments using barcode scanner
60. Calibrate feeder pick heights for each component package type
61. Set vacuum nozzle pressure: -70 to -80 kPa for reliable pickup
62. Program chip shooter for passive components: resistors, capacitors, inductors
63. Begin placement cycle: gantry moves to first feeder location
64. Pick nozzle descends and vacuum captures component from tape pocket
65. Component travels to vision inspection station at high speed
66. Downward-looking camera captures component image during flight
67. Vision system measures component dimensions and orientation
68. Calculate placement correction for component rotation and centering
69. Gantry moves to PCB target location using corrected coordinates
70. Nozzle descends to programmed placement height (typically 0.2mm above paste)
71. Vacuum releases and component settles into solder paste
72. Placement speed: 25,000-40,000 components per hour for chip shooter
73. Place all 0201, 0402, 0603, 0805 resistors and capacitors (typically 200-400 per board)
74. Monitor feeder status for empty reels and trigger automatic splice detection
75. Record placement statistics: pickup rate, vision rejects, placement cycle time

### Component Placement - Fine Pitch (Steps 76-95)

76. Transport PCB to flexible placement machine for complex components
77. Load component trays, tubes, and specialized feeders for ICs
78. Install multi-nozzle head capable of parallel component pickup
79. Program placement sequence for QFNs, BGAs, and fine-pitch connectors
80. Begin QFN placement: 0.5mm pitch quad flat no-lead packages
81. Use upward-looking camera to inspect QFN bottom side during pickup
82. Verify all leads are coplanar and package is not damaged
83. Align QFN to PCB pads using fiducial-based coordinate transformation
84. Place QFN with 20-micron accuracy (critical for 0.5mm pitch)
85. Continue with BGA components: 0.8mm, 1.0mm, or 1.27mm ball pitch
86. Pick BGA from tray using vacuum nozzle with proper cup size
87. Inspect BGA balls using bottom-side vision: verify all balls present
88. Place BGA centered on pad array (no visual verification possible after placement)
89. Place fine-pitch connectors: 0.5mm pitch USB-C, board-to-board connectors
90. Use split-beam laser to measure connector pin coplanarity before placement
91. Place shielded RF modules and high-pin-count processors
92. Install mechanical components: switches, buttons, SD card slots
93. Place polarized components: tantalum capacitors, diodes, LEDs
94. Verify polarity marks align with PCB silkscreen indicators
95. Flexible machine placement rate: 8,000-15,000 components per hour

### Reflow Soldering - Preheat Zone (Steps 96-105)

96. Transport fully-populated PCB to reflow oven via conveyor
97. Enter PCB into first heating zone at 180C ambient temperature
98. Begin gradual temperature ramp: 1-3C per second rise rate
99. Flux activators in solder paste begin evaporating at 150-160C
100. Solvents vaporize from paste, reducing volume by 50%
101. Flux residues clean oxide layers from component leads and PCB pads
102. Monitor PCB temperature using thermocouples attached to test board
103. Maintain preheat zone for 60-90 seconds total dwell time
104. Target temperature at end of preheat: 150-180C (below melting point)
105. Ensure even heating across PCB to prevent thermal shock and warpage

### Reflow Soldering - Soak Zone (Steps 106-115)

106. PCB enters thermal soak zone at stable 150-180C temperature
107. Extend soak time to 60-120 seconds for thermal equalization
108. Smaller components heat faster than large BGAs or connectors
109. Soak allows entire assembly to reach uniform temperature
110. Flux continues activating and removing oxides from metal surfaces
111. Monitor temperature profile to prevent premature solder melting
112. Soak zone prevents thermal shock to sensitive components
113. Moisture in substrate or components evaporates during soak (prevents popcorning)
114. Temperature uniformity across PCB reaches +/- 5C by end of soak
115. Prepare assembly for rapid temperature rise into reflow zone

### Reflow Soldering - Reflow Zone (Steps 116-125)

126. PCB enters reflow zone where temperature ramps rapidly
127. Temperature rises to peak reflow: 240-250C for SAC305 lead-free solder
128. Solder paste reaches liquidus temperature at 217C and melts completely
129. Molten solder wets component leads and PCB pad metallization
130. Surface tension pulls components into alignment with pads (self-centering)
131. Intermetallic compounds form at solder/copper interface (IMC layer 1-3 microns)
132. Time above liquidus (TAL): 40-70 seconds typical for lead-free
133. Peak temperature maintained for 10-20 seconds to ensure all joints reflow
134. Avoid exceeding component maximum ratings (typically 260C for 10 seconds)
135. Monitor profile with thermocouples: track critical components like BGAs

### Reflow Soldering - Cooling Zone (Steps 126-135)

136. PCB exits reflow zone and enters forced-air cooling section
137. Temperature drops at controlled rate: 2-4C per second
138. Rapid cooling creates fine grain structure in solder for mechanical strength
139. Solder solidifies at 217C and forms strong metallurgical bonds
140. Continue cooling to safe handling temperature below 50C
141. Prevent thermal shock by controlling cooling rate (not too fast)
142. Fans blow ambient or chilled air across PCB surface
143. Cooling time typically 60-90 seconds from peak to safe handling
144. Solder joints develop characteristic shiny or matte finish depending on profile
145. PCB exits reflow oven for post-reflow inspection

### Automated Optical Inspection (Steps 136-150)

146. Transport cooled PCBs to AOI (automated optical inspection) system
147. Load PCB into inspection area and clamp in precise position
148. Calibrate AOI using fiducial marks for coordinate alignment
149. Scan PCB using high-resolution cameras (5-10 megapixel CCD sensors)
150. Capture images under multiple lighting angles: bright field, dark field, side illumination
151. Image processing algorithms detect component presence and correct placement
152. Measure component position accuracy: flag components offset >50% pad size
153. Detect missing components by comparing expected vs. actual component count
154. Identify wrong components using shape recognition and polarity marks
155. Detect solder bridges between adjacent pins or pads (critical defect)
156. Measure solder fillet quality: height, wetting angle, completeness
157. Identify insufficient solder (weak joints) by measuring fillet size
158. Flag tombstoned components (standing vertical due to uneven heating)
159. Detect billboarded components (rotated during reflow)
160. Generate defect report with images and coordinates for each defect
161. Pass boards with zero critical defects to next process
162. Route defective boards to rework station with defect map

### X-Ray Inspection (Steps 151-165)

163. Select sample boards or all boards for X-ray inspection (based on yield data)
164. Load PCB into X-ray inspection system chamber
165. Position PCB so X-ray beam aligns perpendicular to board surface
166. Apply X-ray radiation: 20-160 kV energy for PCB inspection
167. X-rays penetrate PCB and components, absorbed differently by materials
168. Denser materials (solder, copper) appear darker in X-ray image
169. Capture X-ray image of BGA solder ball array from top view
170. Analyze ball pattern: verify all balls present and properly reflowed
171. Detect voids in solder balls: acceptable <25% void area per ball
172. Identify bridging between adjacent BGA balls (critical defect)
173. Measure ball collapse height: proper reflow shows 50-60% ball height
174. Inspect QFN solder joints: verify center thermal pad solder coverage
175. Check for voiding under QFN thermal pad (acceptable <50% total area)
176. Rotate PCB to inspection angle (oblique view) for 3D inspection
177. Generate X-ray report with void percentage and defect coordinates

### In-Circuit Testing (Steps 166-180)

178. Transport PCBs to ICT (in-circuit test) fixture area
179. Load test fixture with bed-of-nails probe design (one probe per test point)
180. Align PCB to fixture using tooling pins matching PCB mounting holes
181. Lower fixture lid: spring-loaded probes contact PCB test points
182. Apply pressure to ensure good electrical contact (typically 100-200g per probe)
183. Power up ICT system and load test program for this PCB design
184. Perform continuity test: verify all nets are electrically connected
185. Detect short circuits between adjacent nets (check all net combinations)
186. Measure resistor values using 4-wire Kelvin sensing for accuracy
187. Test capacitor values and detect open or shorted capacitors
188. Verify inductor values and detect short-circuit conditions
189. Test diodes: measure forward voltage drop (typically 0.6-0.7V)
190. Power components through fixture and measure operating voltages
191. Inject test signals and measure responses to verify active components
192. Test digital IC connectivity: verify power, ground, and signal pins
193. Measure analog circuit parameters: gain, offset, linearity
194. Record test results with pass/fail status for each component and net
195. Generate ICT report with detailed measurements and fault isolation data

### Functional Testing (Steps 181-195)

196. Design functional test fixture specific to product requirements
197. Create test adapter PCB with edge connector matching product connector
198. Program functional test sequence: power-up, initialization, operation tests
199. Load PCB into functional test fixture and connect all interfaces
200. Apply power via test fixture: monitor current draw during power-up
201. Verify power supply voltages on all rails (3.3V, 5V, 12V, etc.)
202. Download firmware or boot code into onboard processor via JTAG
203. Execute processor boot sequence and verify successful startup
204. Test communication interfaces: UART, SPI, I2C, USB, Ethernet
205. Verify wireless functionality: WiFi association, Bluetooth pairing, cellular connection
206. Test sensor inputs: accelerometer, gyroscope, temperature, pressure
207. Verify output functions: display, audio, motor control, indicator LEDs
208. Run stress test: cycle through all functions rapidly for 30-60 seconds
209. Measure performance parameters: processing speed, data throughput, latency
210. Record functional test results: pass/fail with specific failure modes
211. Program PCB serial number and calibration data into onboard memory
212. Label passing boards with test date and operator identification
213. Route failing boards to debug station with detailed failure analysis
214. Calculate functional test yield: passing units / total units tested
215. Update manufacturing execution system with test results and traceability data

### Rework Procedures (Steps 196-210)

216. Review AOI defect report to identify rework locations on PCB
217. Transfer defective PCB to rework station with ESD-safe workbench
218. Position PCB in fixture or holder for stable working surface
219. Identify defect type: bridge, insufficient solder, wrong component, missing component
220. For solder bridges: use fine-tip soldering iron with chisel tip
221. Apply flux to bridged area and heat both pads simultaneously
222. Draw solder iron tip between pads to separate molten solder
223. Use solder wick (desoldering braid) to absorb excess solder
224. Clean area with IPA (isopropyl alcohol) and inspect under microscope
225. For insufficient solder: apply flux pen to dry joint area
226. Touch soldering iron to joint and add small amount of solder wire
227. Allow solder to reflow and wet both component lead and pad
228. For component removal: use hot air rework station set to 320-350C
229. Apply flux around component to be removed (improves heat transfer)
230. Direct hot air nozzle onto component while gently lifting with tweezers
231. Remove component when solder melts (approximately 30-45 seconds)
232. Clean pads with solder wick to remove excess solder and leave flat surface
233. Apply fresh solder paste to cleaned pads using manual dispenser
234. Place correct component using vacuum pick-up tool
235. Reflow component using hot air station with localized heating profile
236. Inspect reworked joints under microscope: verify proper solder fillets
237. Perform X-ray inspection on reworked BGAs or QFNs if required
238. Retest reworked board through AOI to verify defect correction
239. Return passing boards to functional test for full verification
240. Document rework actions in manufacturing record for traceability

### Quality Control and Documentation (Steps 211-230)

241. Compile process control data from all SMT line stations
242. Monitor stencil printer: paste volume measurements, squeegee pressure trends
243. Track SPI results: calculate defect rate per million opportunities (DPMO)
244. Analyze placement machine statistics: pickup failures, vision rejects, placement accuracy
245. Review reflow oven temperature profiles: ensure all zones within specification
246. Calculate AOI defect density: defects per board and per 1000 components
247. Monitor X-ray inspection results: void trends, BGA quality metrics
248. Track ICT yield: percentage of boards passing electrical test
249. Monitor functional test yield and categorize failure modes
250. Calculate first-pass yield (FPY): percentage passing with no rework
251. Generate statistical process control (SPC) charts for key parameters
252. Identify process trends indicating tool drift or material issues
253. Perform root cause analysis on recurring defects
254. Implement corrective actions: adjust printer settings, reflow profile optimization
255. Calibrate measurement equipment weekly: SPI, AOI, X-ray systems
256. Maintain ISO 9001 quality management system documentation
257. Create work instructions for each SMT process with photos and parameters
258. Train operators on SMT equipment operation and quality standards
259. Conduct daily production meetings to review yield and quality metrics
260. Maintain material traceability: lot codes for PCBs, components, solder paste
261. Store production records for minimum 7 years per industry requirements
262. Generate certificate of conformance (C of C) for customer shipments
263. Perform periodic process audits to verify compliance with procedures
264. Maintain equipment maintenance logs: preventive maintenance schedules
265. Update assembly programs when PCB design revisions occur
266. Archive golden board samples for each product revision
267. Document process changes and obtain customer approval when required
268. Maintain supplier quality agreements for component and material sourcing
269. Track equipment utilization rates and plan capacity expansion
270. Generate monthly quality reports summarizing yield, defects, and improvement initiatives

## Technical Specifications

- Placement accuracy: +/- 20 microns (chip shooter), +/- 30 microns (flexible mounter)
- Placement speed: 25,000-40,000 CPH (chip shooter), 8,000-15,000 CPH (fine pitch)
- Component range: 0201 to 55mm square packages
- PCB size: 50mm x 50mm minimum to 510mm x 460mm maximum
- PCB thickness: 0.4mm to 5.0mm supported
- Reflow peak temperature: 240-250C for SAC305 lead-free solder
- Time above liquidus: 40-70 seconds typical
- SPI measurement accuracy: +/- 10 microns height, +/- 2% volume
- AOI resolution: 15-25 microns per pixel
- X-ray void detection: >5% void size detectable
- First-pass yield target: >98% for mature products
- Defect rate: <100 DPMO for SMT assembly process
- Line throughput: 60-120 boards per hour depending on complexity
- Cleanroom class: ISO Class 7 (Class 10,000) typical for SMT assembly
- ESD protection: wrist straps, ionizers, conductive flooring throughout facility

## Quality Standards

- IPC-A-610 Class 2 or Class 3 workmanship standards (customer specified)
- IPC-7711/7721 rework and repair standards
- J-STD-001 soldering requirements for electronic assemblies
- IPC-TM-650 test methods for printed boards
- ISO 9001:2015 quality management system certification
- ISO 13485 certification for medical device assembly
- IATF 16949 certification for automotive electronics
- AS9100 certification for aerospace and defense applications
- RoHS compliance: lead-free materials and processes required
- REACH compliance: restricted substances tracking and documentation