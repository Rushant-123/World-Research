---
title: "SMT Component Placement"
company: "Celestica Inc."
country: "Canada"
selling_price: 3.0
inputs:
  - name: "Placement Machine"
    cost: 0.4
    link: "smt-equipment"
  - name: "Component Feeders"
    cost: 0.2
    link: "assembly-automation"
  - name: "Solder Paste"
    cost: 0.15
    link: "solder-paste"
  - name: "Inspection"
    cost: 0.2
    link: "optical-inspection"
  - name: "Operators"
    cost: 0.3
    link: "assembly-labor"
  - name: "Programming"
    cost: 0.15
    link: "software-developers"
value_created: 1.6
lead_time_days: 33
minimum_order_quantity: 5000
transportation_method: "truck"
geopolitical_risk: "medium"
price_volatility: "medium"

certifications:
  - "ISO9001"
  - "ISO14001"
data_quality: "estimated"
---

## Manufacturing Process

### Pre-Production Planning (Steps 1-20)

1. Receive PCB design files (Gerber, ODB++, IPC-2581 formats)
2. Import Bill of Materials (BOM) with 500+ component entries
3. Cross-reference component package types against machine capabilities
4. Verify component availability in warehouse inventory system
5. Generate placement sequence optimization using route algorithms
6. Calculate total placement time (target: 15,000-25,000 CPH for chip shooters)
7. Identify fine-pitch components requiring high-precision heads
8. Map component reel positions to feeder cart locations
9. Create feeder setup documentation with slot assignments
10. Program vision system for 47 different component packages
11. Define fiducial mark locations (minimum 3 per board)
12. Set placement accuracy requirements (±25μm for 0201, ±40μm for 0402)
13. Configure nozzle selection matrix (12 nozzle types available)
14. Establish vacuum pressure profiles (200-500 mmH2O range)
15. Program Z-axis touchdown force (10-150 gf depending on component)
16. Create tooling fixture design for board support
17. Generate stencil alignment marks for paste inspection
18. Define bad board handling procedures and reject criteria
19. Set up traceability system linking board serial to placement data
20. Conduct design for manufacturability (DFM) review with customer

### Machine Setup and Calibration (Steps 21-40)

21. Power up Fuji NXT-III high-speed placement system
22. Verify machine leveling using precision bubble levels (±0.1mm)
23. Run daily XY calibration routine using glass calibration plate
24. Calibrate upward-looking camera for component recognition
25. Clean camera lenses with lint-free optical cloths
26. Adjust lighting intensity for optimal vision contrast
27. Load feeder carts into machine slots (front and rear banks)
28. Scan component barcodes into machine inventory database
29. Verify reel orientation (sprocket holes on correct side)
30. Set tape peel-off tension (80-120 gf standard)
31. Load nozzle library into placement head array
32. Perform nozzle vacuum leak test (< 10% pressure drop)
33. Clean nozzle tips using automated cleaning station
34. Install board support pins matching PCB outline
35. Set conveyor width to board dimensions plus 2mm clearance
36. Adjust edge clamps for secure board hold (5-15N force)
37. Program board thickness value (0.4mm to 3.2mm range)
38. Set downward-looking camera focal height
39. Run system health diagnostic checking all axes
40. Confirm placement head rotation accuracy (±0.1 degree)

### Feeder Loading and Verification (Steps 41-55)

41. Mount 8mm tape feeders for passive components (0201-0805 sizes)
42. Install 12mm feeders for larger passives and small ICs
43. Load 16mm feeders for SOIC and TSSOP packages
44. Set up 24mm feeders for QFP and larger packages
45. Install 32mm feeders for BGA and high pin-count devices
46. Configure matrix tray feeders for odd-form components
47. Set tape advance speed (50-200mm/s based on component size)
48. Verify component presence using feeder sensors
49. Check component orientation in tape pockets
50. Measure component height using laser sensor (±0.05mm accuracy)
51. Test pick-and-place cycle for each feeder position
52. Verify vacuum pickup force (200-800 mmH2O range)
53. Adjust feeder pitch to match component centerline spacing
54. Confirm splice detection for continuous production
55. Set low-component warnings at 20% remaining threshold

### Solder Paste Inspection (Steps 56-65)

56. Receive board from upstream stencil printer
57. Transfer board to SPI (Solder Paste Inspection) system
58. Scan fiducials to establish board coordinate system
59. Measure paste volume on 100% of pads using laser scanning
60. Check paste height (target: 100-150μm for standard pads)
61. Verify paste width coverage (80-100% of pad area)
62. Measure paste offset from pad center (tolerance: ±25% pad size)
63. Detect bridging between adjacent pads (reject if > 25μm)
64. Identify missing paste deposits (auto-reject board)
65. Transfer board to placement machine if SPI pass criteria met

### Board Loading and Alignment (Steps 66-80)

66. Accept board from conveyor into machine work area
67. Clamp board edges using pneumatic actuators
68. Activate vacuum support pins (500+ pins for large boards)
69. Scan board barcode for traceability tracking
70. Capture downward camera image of fiducial mark 1
71. Perform pattern recognition matching (sub-pixel accuracy)
72. Calculate fiducial 1 position (X, Y, theta coordinates)
73. Move to fiducial mark 2 location
74. Capture and analyze second fiducial image
75. Compute board rotation angle (typical range: ±2 degrees)
76. Calculate board scaling factor (account for thermal expansion)
77. Transform all component coordinates to actual board position
78. Verify fiducial quality score (> 90% match required)
79. Check board warpage using laser height sensors
80. Adjust Z-axis compensation map for warped boards (±0.3mm typical)

### Passive Component Placement (Steps 81-100)

81. Begin placement sequence with smallest components (0201 resistors)
82. Select 0.4mm diameter nozzle for 0201 package (0.6x0.3mm size)
83. Move placement head to first component feeder
84. Apply vacuum to nozzle (300 mmH2O for 0201)
85. Pick component from tape pocket at 50mm/s speed
86. Lift component and move to upward-looking camera
87. Capture component image during flight (20μs exposure)
88. Perform real-time image analysis (component present, centered, rotation)
89. Calculate angular correction (±180 degree range for non-polarized parts)
90. Rotate placement head to correct component orientation
91. Move to board position at 800mm/s traverse speed
92. Descend Z-axis at controlled rate (10mm/s final approach)
93. Place component onto solder paste with 20 gf force
94. Release vacuum and verify component adhesion
95. Retract nozzle at 50mm/s speed
96. Advance to next 0201 component (15,000+ placements per hour)
97. Switch to 0402 components using 0.6mm nozzle
98. Place 0402 resistors and capacitors (25,000 CPH rate)
99. Progress to 0603 components with 0.8mm nozzle
100. Complete all passive components (0201 through 2512 sizes)

### Fine-Pitch IC Placement (Steps 101-125)

101. Switch to high-precision placement head for fine-pitch devices
102. Select 3.0mm nozzle for TSSOP-20 package
103. Pick IC from 16mm tape feeder (vacuum: 450 mmH2O)
104. Capture component with upward camera (5μm pixel resolution)
105. Measure pin pitch accuracy (verify 0.5mm spacing ±10μm)
106. Detect bent or missing leads (auto-reject if found)
107. Calculate component centroid and rotation angle
108. Correct angular misalignment (±0.05 degree accuracy)
109. Verify component polarity using pin 1 marking
110. Move to board location at reduced speed (400mm/s)
111. Align to pad pattern using real-time vision feedback
112. Descend with 50 gf touchdown force
113. Place TSSOP maintaining ±40μm positional accuracy
114. Proceed to QFP-64 package (0.5mm pitch, 10x10mm body)
115. Use 5.0mm nozzle with large vacuum cup
116. Verify all 64 leads present and coplanar
117. Check lead coplanarity (< 0.1mm variation required)
118. Place QFP with ±50μm accuracy on all sides
119. Handle QFP-100 (0.4mm pitch) with enhanced precision
120. Achieve ±35μm placement accuracy for 0.4mm pitch
121. Place multiple QFN packages (no-lead packages)
122. Ensure thermal pad alignment within ±60μm
123. Install LQFP packages with corner lead verification
124. Complete all fine-pitch ICs with 5,000-8,000 CPH throughput
125. Log placement quality data for each fine-pitch component

### BGA Component Placement (Steps 126-145)

126. Switch to BGA-specific placement head with large nozzle
127. Select 8.0mm nozzle for 13x13mm BGA package
128. Retrieve BGA from 32mm tape feeder or matrix tray
129. Apply 600 mmH2O vacuum for secure hold
130. Capture high-resolution image of BGA body
131. Locate fiducial marks on BGA package substrate
132. Measure BGA rotation angle (±0.03 degree accuracy required)
133. Verify ball presence using X-ray imaging (for critical parts)
134. Check ball coplanarity ensuring uniform solder joint formation
135. Calculate precise centroid of BGA body outline
136. Move to board position at 300mm/s (slower for large components)
137. Use downward camera for final board fiducial check
138. Align BGA to pad array with ±75μm accuracy
139. Account for solder ball collapse during reflow (typically 30-50μm)
140. Descend Z-axis with precise height control
141. Contact BGA to paste with 80-120 gf force (distribute evenly)
142. Hold position for 200ms allowing paste adhesion
143. Release vacuum gradually preventing component shift
144. Verify BGA did not move during vacuum release
145. Place additional BGAs ranging from 0.4mm to 1.0mm ball pitch

### Complex Component Handling (Steps 146-160)

146. Handle connectors using custom nozzle adapters
147. Place multi-row pin headers with vacuum channels
148. Install shielded components requiring side-hold nozzles
149. Place components with height > 15mm using extended nozzles
150. Handle heavy components (> 5g) with increased vacuum
151. Place thermally sensitive parts with reduced nozzle contact time
152. Install moisture-sensitive devices fresh from bake-out oven
153. Handle electrostatic-sensitive devices with ionized air flow
154. Place optical components avoiding nozzle contact on lens areas
155. Install crystal oscillators with vibration-damped placement
156. Handle RF shields requiring precise z-height control
157. Place mechanical switches with tactile feedback verification
158. Install LEDs with polarity verification using vision system
159. Handle tantalum capacitors with correct polarity orientation
160. Place specialty components requiring custom fixtures

### Odd-Form and Through-Hole Components (Steps 161-170)

161. Insert radial leaded capacitors using odd-form placement head
162. Pre-form leads to match PCB hole spacing
163. Guide leads through PCB holes with ±0.2mm accuracy
164. Insert axial leaded components (resistors, diodes)
165. Place large electrolytic capacitors with polarity checks
166. Install through-hole connectors requiring high insertion force
167. Place transformers and inductors with core orientation
168. Insert pin headers ensuring perpendicularity to board
169. Install mechanical spacers and mounting hardware
170. Verify through-hole component seating using height sensors

### In-Process Inspection (Steps 171-180)

171. Perform mid-process inspection after first-side placement
172. Activate onboard 2D AOI (Automated Optical Inspection)
173. Capture high-resolution images of entire board surface
174. Analyze component presence/absence (target: 100% detection)
175. Verify component polarity for 200+ polarized parts
176. Check component rotation (tolerance: ±5 degrees for most parts)
177. Measure positional accuracy using pad-to-component offset
178. Detect tombstoning risk (components lifted on one end)
179. Identify solder paste contamination on component bodies
180. Generate defect report flagging 15+ defect types

### Reflow Preparation and Profiling (Steps 181-190)

181. Transfer completed board to reflow oven staging area
182. Attach thermocouples to board test points (6-8 locations)
183. Program reflow profile into oven controller
184. Set preheat zone to 150-180°C (ramp rate: 2-3°C/s)
185. Configure soak zone at 150-200°C for 60-120 seconds
186. Program peak reflow temperature 235-250°C (SAC305 solder)
187. Set time above liquidus (217°C) to 60-90 seconds
188. Configure cooling rate at 3-4°C/s to prevent thermal shock
189. Monitor conveyor speed (typically 30-60 inches/minute)
190. Validate profile using thermal profiler data logger

### Post-Reflow Inspection (Steps 191-195)

191. Perform 3D AOI inspection after reflow cycle completion
192. Scan 100% of solder joints using laser triangulation
193. Measure joint height, volume, and wetting angle for each connection
194. Run X-ray inspection on all BGA and QFN packages (hidden joints)
195. Verify void levels in BGA balls (< 25% void area acceptable), detect bridging between fine-pitch leads (0% tolerance), check for head-in-pillow defects on large BGAs, measure component coplanarity after reflow stress, generate comprehensive inspection report with defect coordinates, classify defects by severity (critical, major, minor categories), calculate first-pass yield (target: > 98% for mature products), identify systematic placement errors requiring program adjustment, route failing boards to rework station with defect map, upload quality data to MES system for continuous improvement tracking, analyze placement machine performance metrics and accuracy trends, optimize feeder positions based on pick error rates, update component library with new package dimension measurements, fine-tune vision algorithm parameters for improved recognition, and document process capability (Cpk > 1.67 target) for all critical placements.
