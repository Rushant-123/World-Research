---
title: "Fan Housing"
company: "Delta Electronics"
country: "Taiwan"
selling_price: 0.6
inputs:
  - name: "PBT Resin"
    cost: 0.08
    link: "thermoplastic-resin"
  - name: "Injection Mold"
    cost: 0.04
    link: "injection-mold"
  - name: "Injection Machine"
    cost: 0.06
    link: "injection-molding-machine"
  - name: "Metal Inserts"
    cost: 0.03
    link: "stamping-press"
  - name: "Assembly Hardware"
    cost: 0.02
    link: "metal-fasteners"
  - name: "Quality Testing"
    cost: 0.03
    link: "optical-inspection"
value_created: 0.34
---

Fan housings are precision-molded enclosures that direct airflow, reduce noise, and provide structural mounting for cooling fans in computers, servers, and electronics. These components combine aerodynamic design with mechanical engineering to optimize thermal performance while maintaining acoustic comfort and structural integrity.

## Manufacturing Process

### Housing Design and Engineering (Steps 1-25)

1. Review thermal requirements: power dissipation 5-150W, target airflow 10-200 CFM
2. Define fan specifications: diameter 40-120mm, thickness 10-38mm, voltage 5-12V
3. Select housing type: axial flow (straight-through) or centrifugal (volute with 90° redirect)
4. Establish acoustic targets: noise level 15-35 dBA at 1 meter distance
5. Determine mounting method: screw holes, snap clips, or sliding rails
6. Calculate housing wall thickness: 1.2-2.0mm for structural rigidity
7. Design inlet bell mouth: radius 2-4mm to minimize turbulence and intake losses
8. Configure outlet grille: open area 65-75% for minimal flow restriction
9. Create 3D CAD model in SolidWorks with parametric dimensions
10. Design mounting bosses: 4-6 locations with M3 or M4 threaded inserts
11. Add alignment features: locating pins, chamfers, and registration surfaces
12. Incorporate cable management: wire channels, tie-down points, strain relief
13. Design snap-fit features: cantilever hooks with 0.5-1.0mm undercut
14. Add vibration isolation: rubber feet pockets, compliant mounting tabs
15. Create fan blade clearance: 0.5-1.0mm radial gap, 0.3-0.5mm axial gap
16. Design connector cavity: space for 2-4 pin wire harness connector
17. Add labeling surfaces: flat areas for specs, warnings, certifications
18. Create airflow straightening vanes: 4-8 ribs to reduce swirl and noise
19. Design corner radii: 0.5-1.5mm for stress distribution and mold release
20. Add drain holes: 1-2mm diameter for moisture escape in humid environments
21. Incorporate EMI shielding features: grounding tabs, conductive gasket channels
22. Design tool access: clearance for assembly screws, snap-fit release
23. Add draft angles: 1-3° for mold release without surface damage
24. Create parting line location: minimize flash on critical surfaces
25. Complete detailed drawing package: dimensions, tolerances, surface finishes

### CFD Airflow Optimization (Steps 26-45)

26. Import 3D CAD geometry into ANSYS Fluent or Siemens StarCCM+ software
27. Define fluid domain: air at 20-40°C, 1 atm pressure, density 1.2 kg/m³
28. Set boundary conditions: inlet velocity 2-15 m/s, outlet pressure ambient
29. Create computational mesh: 500K-2M tetrahedral elements, refined near walls
30. Apply wall functions: smooth plastic surface roughness 0.1-0.5 µm Ra
31. Set turbulence model: k-epsilon or k-omega SST for rotating fan interaction
32. Define rotating reference frame: fan blade region 1000-3000 RPM
33. Run steady-state simulation: convergence criteria residuals < 1e-4
34. Analyze velocity field: identify separation zones, recirculation, dead spots
35. Calculate pressure drop: housing contributes 5-15% of total system resistance
36. Evaluate flow uniformity: velocity variation < 20% across outlet area
37. Identify noise sources: vortex shedding at grille bars, inlet turbulence
38. Optimize inlet bell mouth radius: maximize flow coefficient, minimize losses
39. Adjust outlet grille geometry: bar thickness 1-2mm, spacing 3-6mm
40. Refine internal vanes: angle, length, thickness to straighten flow
41. Modify corner radii: smooth transitions to prevent flow separation
42. Verify fan blade clearance: adequate gap without excessive bypass leakage
43. Run transient simulation: capture blade passing frequency noise (BPF)
44. Calculate acoustic metrics: sound pressure level, frequency spectrum 100-10k Hz
45. Document optimized design: airflow improvement 10-25%, noise reduction 2-5 dBA

### Mold Design and Fabrication (Steps 46-65)

46. Select mold material: P20 or H13 tool steel for 500K-1M shot life
47. Design mold base: two-plate or three-plate with hot runner system
48. Determine parting line: bisect housing at maximum cross-section
49. Create core and cavity: CNC machining from solid steel blocks
50. Design gate location: side gate or pin gate at non-visible thick section
51. Calculate gate size: diameter 0.8-1.5mm for balanced fill, minimal witness
52. Add runner system: cold runner 6-10mm diameter or hot runner manifold
53. Design cooling channels: 8-12mm diameter, 30-50mm spacing, conformal layout
54. Incorporate ejector pins: 10-20 locations at non-cosmetic surfaces
55. Add alignment system: leader pins, bushings, interlocks for core registry
56. Create mold inserts: replaceable sections for mounting bosses, labels
57. Machine EDM features: deep ribs, undercuts, text engraving
58. Design slide cores: for side holes, undercuts exceeding 1mm depth
59. Add lifter mechanisms: angled pins to release undercut snap features
60. Create venting: 0.02-0.05mm deep, 5-10mm wide at parting line
61. Polish cavity surfaces: Ra 0.1-0.4 µm for cosmetic appearance
62. Apply mold coating: TiN, CrN, or DLC for wear resistance, release
63. Install hot runner: multi-zone temperature control 240-280°C
64. Conduct mold trial: 50-100 shots for process optimization
65. Validate dimensions: CMM inspection, verify gate location and venting

### Material Preparation (Steps 66-75)

66. Select PBT resin grade: Valox 310 or similar, 30% glass fiber reinforced
67. Verify material properties: tensile strength 110 MPa, flexural modulus 7 GPa
68. Confirm heat resistance: deflection temperature 215°C at 1.8 MPa load
69. Check flame rating: UL 94 V-0 for electronics safety compliance
70. Measure moisture content: should be < 0.02% for quality molding
71. Pre-dry PBT resin: desiccant hopper dryer at 120°C for 3-4 hours
72. Load material into hopper: 50-100 kg capacity with desiccant air
73. Add colorant or masterbatch: black, gray, or beige 2-5% concentration
74. Verify melt flow rate: 10-20 g/10min at 250°C, 2.16 kg load
75. Purge previous material: run 2-3 kg through barrel to prevent contamination

### Insert Preparation (Steps 76-85)

76. Receive metal inserts: brass or steel threaded M3/M4, knurled OD 4-6mm
77. Inspect insert dimensions: length ±0.1mm, thread quality, knurl pattern
78. Clean inserts: ultrasonic wash in alkaline solution to remove oils, debris
79. Dry inserts: hot air oven at 80°C for 30 minutes
80. Load inserts into feeder bowl: vibratory or centrifugal orientation system
81. Transfer to insert magazines: linear arrays for automated pick and place
82. Program robot placement: 4-6 inserts positioned in mold before injection
83. Set insert temperature: preheat to 100-150°C for better encapsulation
84. Verify insert orientation: threads perpendicular to parting line
85. Test retention force: inserts should withstand 200-400N pull-out force

### Injection Molding Process (Steps 86-110)

86. Mount mold in 80-150 ton clamping force injection molding machine
87. Connect cooling lines: inlet/outlet manifolds with 15-25°C water circulation
88. Set barrel temperatures: feed zone 230°C, compression 250°C, nozzle 260°C
89. Set mold temperature: 80-100°C for balanced crystallization and cycle time
90. Program injection parameters: pressure 80-120 MPa, velocity 50-100 mm/s
91. Set holding pressure: 50-70% of injection pressure for 10-20 seconds
92. Configure cooling time: 15-30 seconds depending on wall thickness
93. Run automatic cycle: clamp close, insert load, inject, pack, cool, eject
94. Position metal inserts: robot picks from magazine, places in core cavities
95. Verify insert seating: vision system confirms location before mold close
96. Close mold: 2000-3000 kN force, platens parallel within 0.05mm
97. Inject PBT melt: 15-30 gram shot, fill time 0.5-1.5 seconds
98. Switch to holding pressure: maintain cavity pressure during solidification
99. Allow cooling: heat extraction 20-40 kJ, temperature drop to 100°C
100. Open mold: ejector plate advances, pins push housing from core
101. Remove housing: robot gripper or operator picks part from mold
102. Check cycle time: total 30-50 seconds for balanced productivity and quality
103. Inspect first article: dimensions, insert position, surface defects
104. Monitor process stability: cavity pressure sensor, shot weight ±2%
105. Adjust parameters: compensate for melt viscosity changes, wear
106. Run production lot: 1000-5000 pieces per mold, 20-40 cavities
107. Collect molded housings: conveyor to inspection and packaging area
108. Log process data: temperature, pressure, cycle time for traceability
109. Perform periodic sampling: 1 in 100 parts for detailed measurement
110. Clean mold: remove flash, deposits every 10K-50K shots

### Snap-Fit Feature Formation (Steps 111-120)

111. Verify cantilever hook geometry: 15-25mm length, 0.8-1.2mm thickness
112. Check undercut dimension: 0.5-1.0mm for secure latch, easy release
113. Measure hook deflection: 5-10 mm insertion stroke without plastic deformation
114. Test insertion force: 10-30N for assembly, 5-15N for removal
115. Validate retention strength: 50-100N pull force before release
116. Inspect for stress whitening: surface crazing indicates over-stress
117. Verify mating part clearance: 0.1-0.3mm for smooth engagement
118. Check hook angle: 25-45° lead-in taper for guided assembly
119. Test cyclic durability: 10-50 insertion/removal cycles without failure
120. Document snap-fit performance: force-deflection curves, retention limits

### Vibration Dampening Features (Steps 121-130)

121. Mold rubber foot pockets: 4-6 locations at corners, 8-12mm diameter
122. Measure pocket depth: 2-4mm for secure rubber insert retention
123. Press-fit rubber feet: Shore A 40-60 durometer silicone or EPDM
124. Verify rubber compression: 10-30% under fan weight for isolation
125. Test transmissibility: vibration reduction 50-80% at 50-500 Hz
126. Check resonance frequencies: avoid structural modes 100-300 Hz
127. Measure contact area: rubber foot 30-60 mm² for load distribution
128. Verify adhesion: rubber should not separate under 10G shock
129. Test temperature stability: rubber maintains properties -20 to +80°C
130. Validate slip resistance: coefficient of friction > 0.5 on smooth surfaces

### Connector Integration (Steps 131-140)

131. Create connector cavity: 10x8x6mm for 3-4 pin housing, polarized
132. Mold wire channels: 2-3mm wide, 1.5-2mm deep for cable routing
133. Add strain relief: cable exit with 3-5mm radius, reduces wire fatigue
134. Design locking tabs: 0.5mm undercut to secure mating connector
135. Verify pin clearance: 0.3-0.5mm around 0.64mm square pins
136. Test connector retention: 20-40N insertion force, 10-20N extraction
137. Check cable bend radius: > 3x cable diameter to prevent conductor damage
138. Measure contact resistance: < 10 milliohms per pin at rated current
139. Verify IP rating: if required, add gasket groove for moisture seal
140. Test connector durability: 50-100 mating cycles without degradation

### Dimensional Inspection (Steps 141-155)

141. Transfer housings to quality control area: batch of 50-100 parts
142. Select sampling plan: AQL 1.0, 5-10 parts per lot for full inspection
143. Clean parts: compressed air, lint-free wipe to remove dust, oils
144. Measure overall dimensions: length/width/height ±0.2mm using calipers
145. Check wall thickness: ultrasonic gauge 1.2-2.0mm ±0.15mm
146. Verify mounting hole locations: CMM measurement, position ±0.15mm
147. Measure hole diameters: pin gauge or CMM, 3.0-4.2mm ±0.05mm
148. Check boss height: micrometer or CMM, ±0.1mm for mating clearance
149. Measure snap-fit dimensions: hook length, undercut depth ±0.05mm
150. Verify inlet/outlet openings: diameter or area ±0.3mm for airflow spec
151. Check draft angles: digital protractor, verify 1-3° for mold release
152. Measure corner radii: radius gauge or optical comparator 0.5-1.5mm
153. Inspect parting line flash: should be < 0.1mm, easily removed
154. Check surface finish: roughness tester Ra 0.4-1.6 µm on visible surfaces
155. Document measurements: SPC charts, Cpk > 1.33 for critical dimensions

### Fitment Testing (Steps 156-165)

156. Obtain mating fan components: motor, impeller, mounting frame
157. Assemble housing to fan motor: align mounting holes, insert screws
158. Verify screw engagement: 3-5 full threads in metal insert, torque 0.4-0.8 Nm
159. Check axial clearance: fan blade to housing 0.3-0.5mm, no contact
160. Measure radial clearance: blade tip to housing ID 0.5-1.0mm uniform
161. Test snap-fit assembly: engage housing to frame, verify latch click
162. Measure assembly force: 15-40N for complete engagement
163. Check for interference: visual inspection, blade rotation by hand
164. Verify alignment: housing perpendicular to motor axis ±1°
165. Test disassembly: snap-fit releases without tool, screws accessible

### Acoustic Testing (Steps 166-175)

166. Install fan assembly in anechoic chamber: background noise < 10 dBA
167. Mount to standard test fixture: simulates application mounting
168. Power fan at nominal voltage: 5V, 12V, or 24V as specified
169. Allow thermal stabilization: run 10-15 minutes to reach steady state
170. Measure sound pressure level: calibrated microphone at 1 meter, A-weighted
171. Record dBA across speed range: 1000-3000 RPM, typical 18-35 dBA
172. Analyze frequency spectrum: FFT 20 Hz - 20 kHz, identify tonal peaks
173. Identify blade passing frequency: BPF = RPM/60 × blade count, typically 100-500 Hz
174. Measure harmonics: 2nd, 3rd order peaks indicate aerodynamic sources
175. Verify acoustic target: housing contributes < 2 dBA to overall fan noise

### Airflow Performance Testing (Steps 176-185)

176. Install fan in airflow test chamber: nozzle with flow meter, pressure taps
177. Measure free airflow: Q₀ = 15-200 CFM (25-340 m³/hr) at zero static pressure
178. Vary outlet restriction: damper to increase back pressure 0-2.5 inches H₂O
179. Record pressure-flow curve: 8-12 operating points from free air to stall
180. Measure peak static pressure: Pmax = 0.1-2.0 inches H₂O at zero flow
181. Calculate fan efficiency: (Q × P) / (V × I) typically 15-35%
182. Measure housing pressure drop: inlet to outlet, typically 5-15% of total
183. Verify airflow uniformity: hot wire anemometer at outlet, CV < 20%
184. Check for flow reversal: tufts or smoke visualization at inlet, outlet
185. Document performance curve: compare to CFD prediction, target specification

### Drop Testing (Steps 186-190)

186. Select sample housings: 3-5 units with representative manufacturing variation
187. Assemble to fan: complete unit as shipped to customer
188. Perform drop test: 0.5-1.0 meter onto concrete floor, 6 orientations
189. Inspect for damage: cracks, deformation, fastener loosening, insert pull-out
190. Verify functionality: fan runs at spec, no vibration or noise increase

### Environmental Testing (Steps 191-195)

191. Subject housings to thermal cycling: -20°C to +80°C, 10 cycles, 1 hr dwell
192. Inspect for warping: measure dimensions before/after, change < 0.3mm
193. Perform humidity exposure: 85% RH at 40°C for 168 hours
194. Check for water ingress: if sealed design, verify IP rating maintained
195. Conduct vibration test: 10-500 Hz sweep, 2G acceleration, 1 hour per axis

## Technical Specifications

**Housing Dimensions:**
- Fan sizes: 40mm, 60mm, 80mm, 92mm, 120mm square
- Wall thickness: 1.2-2.0mm
- Weight: 5-50 grams depending on size

**Material Properties (PBT+30% GF):**
- Tensile strength: 110 MPa
- Flexural modulus: 7 GPa
- Heat deflection: 215°C at 1.8 MPa
- Flame rating: UL 94 V-0

**Airflow Performance:**
- Inlet bell mouth radius: 2-4mm for low turbulence
- Outlet open area: 65-75% for minimal restriction
- Housing pressure drop: 5-15% of total system
- Flow uniformity: velocity variation < 20%

**Acoustic Performance:**
- Noise contribution: < 2 dBA added to fan baseline
- Blade passing frequency: 100-500 Hz depending on RPM
- Grille bar spacing: 3-6mm to minimize vortex shedding

**Mounting Specifications:**
- Mounting holes: 4 per housing, M3 or M4 threaded inserts
- Insert retention: > 200N pull-out force
- Screw torque: 0.4-0.8 Nm for assembly
- Vibration isolation: rubber feet with 50-80% transmissibility reduction

**Environmental Ratings:**
- Operating temperature: -20 to +80°C
- Humidity resistance: 85% RH non-condensing
- Shock resistance: 10G without damage
- Vibration: 10-500 Hz, 2G continuous

**Quality Standards:**
- Dimensional tolerance: ±0.2mm on critical features
- Surface finish: Ra 0.4-1.6 µm on visible surfaces
- Insert alignment: ±0.15mm position accuracy
- Cyclic durability: 50+ snap-fit engagement cycles
