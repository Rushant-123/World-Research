---
title: "Plastic Fan Impeller"
company: "Delta Electronics"
country: "Taiwan"
selling_price: 0.5
inputs:
  - name: "PBT Resin"
    cost: 0.06
    link: "thermoplastic-resin"
  - name: "Glass Fiber"
    cost: 0.02
    link: "ceramic-filler"
  - name: "Injection Mold"
    cost: 0.04
    link: "injection-mold"
  - name: "Injection Machine"
    cost: 0.05
    link: "injection-molding-machine"
  - name: "Balancing Equipment"
    cost: 0.03
    link: "measurement-tools"
  - name: "Testing"
    cost: 0.03
    link: "measurement-tools"
value_created: 0.27
---

1. Review customer specifications for 80mm axial flow cooling fan impeller with airflow requirement of 45 CFM at 2800 RPM
2. Analyze thermal management requirements for electronics cooling application with maximum ambient temperature of 85°C
3. Establish target static pressure of 0.18 inches H2O at maximum airflow condition
4. Define acoustic performance target of maximum 32 dBA at 1 meter distance
5. Set vibration limits to ISO G2.5 balance grade for precision electronics cooling
6. Determine blade count of 7 blades for optimal balance between airflow and noise
7. Calculate blade outer diameter of 79.5mm with 0.3mm clearance tolerance for 80mm housing
8. Design hub diameter of 28mm to accommodate brushless DC motor mounting interface
9. Establish blade height of 12mm for structural rigidity and aerodynamic performance
10. Perform computational fluid dynamics analysis using ANSYS Fluent with k-epsilon turbulence model
11. Model airflow domain with 500,000 tetrahedral mesh elements for blade passage resolution
12. Set boundary conditions with inlet static pressure 0 Pa and outlet mass flow rate corresponding to 45 CFM
13. Apply rotating reference frame with 2800 RPM angular velocity for impeller domain
14. Run steady-state CFD simulation with convergence criteria of 1e-5 for residuals
15. Analyze pressure distribution across blade surfaces showing suction side low pressure region
16. Evaluate velocity streamlines confirming attached flow without separation up to 85% span
17. Calculate blade loading coefficient of 0.42 within optimal range for axial fans
18. Design blade camber angle of 28° at hub increasing to 35° at tip for optimal flow turning
19. Establish blade chord length of 18mm at hub tapering to 14mm at tip
20. Set blade stagger angle of 52° measured from axial direction at mid-span
21. Create blade twist distribution with 12° variation from hub to tip for uniform loading
22. Design blade leading edge with elliptical profile having 0.8mm radius for smooth inlet flow
23. Shape blade trailing edge with 0.3mm thickness to minimize wake formation
24. Apply NACA 65-series airfoil profile modified for low Reynolds number operation (Re = 35,000)
25. Calculate blade solidity of 1.2 for efficient energy transfer while maintaining noise control
26. Design blade root fillet radius of 2.5mm for stress concentration reduction
27. Model blade tip clearance sensitivity showing 5% airflow reduction per 0.1mm clearance increase
28. Perform structural FEA analysis using ANSYS Mechanical with centrifugal loading at 3500 RPM (125% overspeed)
29. Apply material properties for PBT+30% glass fiber: Young's modulus 8.5 GPa, Poisson's ratio 0.38
30. Calculate maximum stress of 12.8 MPa at blade root under centrifugal loading (safety factor 6.5)
31. Analyze blade natural frequencies showing first mode at 185 Hz (avoid motor electrical frequency)
32. Design hub geometry with 6.2mm diameter center bore for motor shaft mounting
33. Create hub rear face with 0.5mm depth counterbore for magnet ring seating
34. Model hub front face with raised boss of 1.2mm height for axial thrust bearing surface
35. Design 6-point mounting interface with 60° angular spacing for motor rotor attachment
36. Create gate location analysis for injection molding using Moldflow plastic advisor software
37. Position primary gate at hub center on rear face for balanced radial flow distribution
38. Design gate diameter of 3.5mm for adequate fill rate while minimizing gate vestige
39. Establish mold cavity orientation with parting line at mid-plane of impeller
40. Design core geometry for blade suction side with 2° draft angle for ejection
41. Create cavity geometry for blade pressure side with matching 2° draft angle
42. Model side-action cores for blade undercut regions using hydraulic actuators
43. Calculate side-action stroke of 8mm for complete blade undercut clearance
44. Design core interlock features with 0.02mm tolerance for cavity alignment
45. Create venting channels at blade tips with 0.03mm depth to prevent air entrapment
46. Position ejector pins at 8 locations on hub rear face for balanced ejection force
47. Design ejector pin diameter of 3mm with 0.01mm clearance in mold plate
48. Calculate total ejection force of 420 N required at 50 mm/s ejection velocity
49. Create cooling channels with 8mm diameter following blade contours at 12mm depth
50. Design cooling circuit with series flow through 8 channels for uniform temperature control
51. Calculate cooling channel Reynolds number of 8500 for turbulent heat transfer (Nu = 45)
52. Model mold thermal analysis showing cavity surface temperature of 65°C at steady state
53. Analyze cooling time of 12 seconds for part centerline to reach 95°C ejection temperature
54. Design sprue with 5° taper and 6mm diameter for main runner connection
55. Create runner system with 5mm diameter maintaining melt temperature distribution
56. Position cold slug well opposite sprue for contamination capture
57. Design mold base using standard DME stack with dimensions 400mm × 350mm × 380mm
58. Select P20 tool steel for cavity and core blocks with hardness 30-32 HRC
59. Specify cavity surface finish of Ra 0.2 μm for blade aerodynamic surfaces
60. Design mold alignment with 4 guide pins and bushings having 0.015mm clearance
61. Create mold mounting clamp slots for 4-point fixturing on injection molding machine
62. Receive PBT (polybutylene terephthalate) resin pellets in 25 kg moisture-barrier bags
63. Verify resin grade FR430NC from Changchun with 30% glass fiber reinforcement
64. Inspect certificate of analysis confirming melt flow index 19 g/10min at 250°C/2.16kg
65. Measure moisture content using infrared analyzer confirming <0.02% before drying
66. Load resin pellets into desiccant hopper dryer with capacity 80 kg
67. Set drying temperature to 120°C with dew point of -40°C for 4 hours minimum
68. Recirculate hot dry air through resin bed at flow rate of 0.08 m³/min per kg
69. Monitor outlet air dew point continuously confirming below -30°C during drying
70. Transfer dried resin to molding machine hopper using vacuum conveying system
71. Purge conveying lines with nitrogen to prevent moisture re-absorption
72. Load mold assembly onto Engel 150-ton injection molding machine platen
73. Install mold with 4-point clamping and torque bolts to 180 N⋅m specification
74. Connect cooling water supply lines to mold with flow rate 8 L/min at 20°C inlet
75. Attach hydraulic lines to side-action cores with pressure setting 180 bar
76. Configure machine controller for sequential valve gate operation if multi-cavity
77. Set barrel temperature profile: Zone 1 (feed) 240°C, Zone 2: 255°C, Zone 3: 265°C, Zone 4 (nozzle): 260°C
78. Allow barrel to heat for 45 minutes with three purge cycles using natural PP resin
79. Adjust back pressure to 8 bar for consistent melt density and fiber orientation
80. Set screw rotation speed to 85 RPM for gradual fiber length degradation control
81. Program injection speed profile: Phase 1: 40 mm/s (0-30% fill), Phase 2: 80 mm/s (30-95% fill), Phase 3: 20 mm/s (95-100% fill)
82. Calculate shot size of 18 grams including part, runner, and sprue mass
83. Set maximum injection pressure limit to 1400 bar for material and mold protection
84. Program velocity-to-pressure switchover at 95% cavity fill (screw position 42mm)
85. Set packing pressure to 750 bar (55% of peak injection pressure) for 8 seconds
86. Program packing pressure decay profile: 750 bar for 3s, 600 bar for 3s, 450 bar for 2s
87. Set cooling time to 15 seconds for part temperature to reach 110°C at ejection
88. Program mold opening sequence: side-action retraction 0.5s, then main parting 2s stroke
89. Set ejection parameters: forward stroke 25mm at 50mm/s, dwell 1s, return stroke 100mm/s
90. Initiate automatic cycling with 28-second total cycle time target
91. Monitor melt temperature using infrared pyrometer at nozzle confirming 262°C ±3°C
92. Verify cavity fill balance using short-shot analysis showing simultaneous blade tip filling
93. Check part weight consistency with acceptable range 12.8g ±0.15g for process stability
94. Inspect first article part dimensions using optical comparator for blade profile accuracy
95. Measure hub bore diameter 6.18mm confirming within tolerance 6.15-6.25mm
96. Verify blade outer diameter 79.48mm within specification 79.40-79.60mm
97. Check blade thickness at mid-span measuring 1.42mm against nominal 1.45mm ±0.08mm
98. Inspect for surface defects including short shots, flash, flow marks, and weld lines
99. Examine blade leading edges under magnification for completeness and sharpness
100. Verify gate vestige location and size <0.3mm protrusion after automatic degating
101. Eject molded impeller with runner system attached onto inspection conveyor
102. Separate impeller from runner system using pneumatic degating press with 150N force
103. Collect gate vestige at hub center requiring secondary trimming operation
104. Trim gate vestige using precision cutting tool with carbide blade at 0.2mm depth
105. Deburr gate area using rotating abrasive brush with 320-grit silicon carbide bristles
106. Inspect degated hub surface confirming flatness within 0.05mm for magnet seating
107. Tumble batch of 50 impellers in vibratory finisher with plastic media for 5 minutes
108. Remove any sharp edges or flash from blade tips and fillets
109. Clean impellers using ultrasonic cleaner with aqueous detergent solution at 50°C for 3 minutes
110. Rinse parts with deionized water spray at 60°C for 1 minute
111. Dry impellers in forced-air oven at 80°C for 10 minutes
112. Perform visual inspection under 4x magnification for cosmetic defects and contamination
113. Transport impellers to static balancing station using ESD-safe trays with cavity inserts
114. Mount impeller on precision mandrel with 6.2mm diameter shaft (+0.00/-0.01mm tolerance)
115. Secure impeller on mandrel using collet fixture with 30N axial clamping force
116. Place mandrel assembly on knife-edge static balance ways with sensitivity 0.05 g⋅mm
117. Allow impeller to settle in free rotation identifying heavy point orientation
118. Measure static unbalance using electronic sensor indicating 2.8 g⋅mm at 142° position
119. Calculate required material removal of 0.024 grams at maximum radius (39.75mm)
120. Mark removal location on blade pressure side at identified angular position
121. Remove material using precision micro-mill with 1.2mm end mill cutter
122. Create pocket 1.5mm diameter × 0.8mm depth on blade pressure side at 35mm radius
123. Recheck static balance confirming residual unbalance <0.5 g⋅mm (ISO G6.3 grade)
124. Transfer impeller to dynamic balancing machine (Schenck model with 2-plane correction)
125. Mount impeller on precision spindle with air bearing support for frictionless rotation
126. Accelerate spindle to test speed of 2800 RPM using variable frequency drive
127. Measure vibration using piezoelectric accelerometers at bearing locations in X and Y axes
128. Acquire vibration data with 24-bit ADC at 25.6 kHz sampling rate for 5 seconds
129. Perform FFT analysis identifying synchronous (1X) vibration amplitude and phase
130. Calculate unbalance in plane 1 (front): 0.18 g⋅mm at 87° and plane 2 (rear): 0.22 g⋅mm at 254°
131. Display correction mass and angular positions on machine operator interface
132. Decelerate spindle and remove impeller for correction procedure
133. Apply correction in plane 1 by drilling 0.8mm diameter × 0.5mm depth pocket on blade at 87°
134. Apply correction in plane 2 by drilling 0.8mm diameter × 0.6mm depth pocket on adjacent blade at 254°
135. Remount impeller and spin to 2800 RPM for verification run
136. Measure residual vibration velocity of 0.8 mm/s RMS confirming ISO G2.5 balance grade
137. Verify residual unbalance magnitude <0.15 g⋅mm per plane (target for precision fans)
138. Record balancing data including correction locations and final vibration levels in quality database
139. Mark impeller with green UV-fluorescent dot indicating balanced and inspected status
140. Measure hub bore diameter using pin gauge confirming 6.20mm ±0.03mm for motor shaft fit
141. Check hub bore perpendicularity to rear face using dial indicator showing 0.02mm TIR
142. Inspect hub rear face flatness using optical flat confirming <0.03mm deviation
143. Insert neodymium magnet ring into hub counterbore with 10.5mm outer diameter press fit
144. Orient magnet ring with 4-pole pattern aligned to balance correction angular reference
145. Apply cyanoacrylate adhesive (0.01g) to magnet ring perimeter for retention security
146. Verify magnet ring seating depth of 0.48mm ±0.05mm from hub rear face
147. Measure magnetic flux density using gaussmeter confirming 2400 Gauss at 0.5mm distance
148. Check magnet pole orientation using Hall-effect sensor confirming correct N-S-N-S pattern
149. Transport assembled impellers to airflow testing laboratory with controlled environment
150. Condition test chamber to 25°C ±2°C and 50% ±5% relative humidity for 1 hour
151. Install impeller in standardized test fixture with calibrated BLDC motor (AMCA 210 standard)
152. Mount fixture in airflow measurement chamber with inlet bell mouth and outlet restriction damper
153. Connect motor controller to DC power supply set at 12V for rated voltage operation
154. Install pitot tube array at outlet measuring total and static pressure across 5 radial positions
155. Connect pressure transducers with ±0.25 Pa accuracy to data acquisition system
156. Position hot-wire anemometer at outlet centerline for velocity profile measurement
157. Adjust outlet damper to fully open position for maximum airflow free-delivery test
158. Start motor controller ramping to 2800 RPM target speed with closed-loop tachometer control
159. Allow 60 seconds for airflow and thermal stabilization before data acquisition
160. Measure motor speed using optical tachometer confirming 2798 RPM ±15 RPM
161. Record pressure readings from 5 pitot tubes and calculate area-weighted average velocity
162. Calculate volumetric airflow rate of 46.2 CFM (1.31 m³/min) at zero static pressure
163. Measure static pressure rise of 0.02 inches H2O at free delivery condition
164. Incrementally close outlet damper in 7 steps to map complete fan performance curve
165. At each operating point, record static pressure, airflow, motor current, and speed
166. Measure maximum static pressure of 0.19 inches H2O at shutoff condition (zero airflow)
167. Calculate fan efficiency at 45 CFM operating point: η = (Q × ΔP) / (V × I × ω) = 28%
168. Plot fan curve showing airflow vs static pressure with linear regression fit R² = 0.998
169. Verify performance meets specification: 45 CFM ±5% at 0.18 inches H2O ±10%
170. Transfer impeller assembly to acoustic anechoic chamber with background noise <15 dBA
171. Mount fan assembly in test fixture with vibration isolation mounting per ISO 3745
172. Position microphone at 1-meter distance on-axis from fan outlet at 0° angle
173. Use precision condenser microphone with frequency response 20 Hz to 20 kHz ±1 dB
174. Operate fan at rated speed 2800 RPM with outlet damper set for 45 CFM airflow
175. Record sound pressure level with A-weighting filter for 30 seconds using 125ms integration time
176. Measure overall A-weighted sound level of 31.8 dBA meeting <32 dBA specification
177. Perform FFT analysis identifying blade pass frequency tone at 327 Hz (7 blades × 2800 RPM ÷ 60)
178. Measure blade pass frequency amplitude of 26 dBA with broadband background of 28 dBA
179. Verify no prominent tonal components above 1 kHz indicating aerodynamic cleanliness
180. Calculate specific sound power level Ls = 58 dB re 1 pW normalized to 1 m³/s airflow
181. Conduct vibration testing on electromagnetic shaker with triaxial accelerometer mounting
182. Subject impeller to random vibration spectrum 5-500 Hz at 1.5 Grms for 30 minutes per axis
183. Inspect for damage including blade cracks, hub deformation, or magnet dislodgement
184. Perform temperature cycling test from -20°C to +85°C with 30-minute dwells for 10 cycles
185. Verify dimensional stability measuring blade diameter change <0.15mm after thermal cycling
186. Conduct overspeed test running impeller at 3500 RPM (125% rated speed) for 2 hours
187. Inspect for creep deformation or blade deflection using optical comparator post-test
188. Apply UV exposure test using 340nm wavelength at 0.8 W/m² for 500 hours accelerated aging
189. Assess color change using spectrophotometer confirming ΔE < 3 (minimal discoloration)
190. Perform life test running impeller continuously at rated conditions for 2000 hours
191. Monitor performance degradation measuring airflow decrease <8% over life test duration
192. Final inspection verifying all critical dimensions, balance marks, and magnet installation
193. Package impellers in anti-static tray with 50-piece capacity and protective cover
194. Apply product label with part number, lot code, date code, and balance grade marking
195. Store finished impellers in climate-controlled warehouse at 20°C and 40% RH until shipment
