---
title: "Cooling Fan Assembly"
company: "Nidec"
country: "Japan"
selling_price: 4.0
inputs:
  - name: "Copper Ore"
    cost: 0.52
    link: "copper-ore"
  - name: "Iron Ore"
    cost: 0.36
    link: "iron-ore"
  - name: "Impeller"
    cost: 0.8
    link: "fan-impeller"
  - name: "Aluminum Ingot"
    cost: 0.48
    link: "aluminum-ingot"
  - name: "Motor Driver"
    cost: 0.8
    link: "motor-driver"
value_created: 1.04
---

# Cooling Fan Assembly Manufacturing Process

## Phase 1: Pre-Assembly Preparation and Component Inspection

1. Receive incoming shipment of brushless DC motors from motor manufacturing facility
2. Inspect motor shipping containers for damage or environmental exposure
3. Verify motor batch numbers against purchase orders and quality certifications
4. Unpack motors in ESD-protected cleanroom environment (Class 10,000)
5. Conduct visual inspection of motor housings for physical defects or corrosion
6. Check motor shaft runout using dial indicator (tolerance: ±0.01mm)
7. Verify motor winding resistance using precision multimeter (expected: 8-12 ohms)
8. Test motor insulation resistance at 500V DC (minimum: 100 megohms)
9. Measure motor shaft diameter with micrometer (specification: 2.00mm ±0.005mm)
10. Inspect motor shaft surface finish for scratches or roughness
11. Verify motor mounting hole positions using coordinate measuring machine (CMM)
12. Check motor electrical connector integrity and pin alignment
13. Test motor Hall effect sensor functionality with oscilloscope
14. Measure motor back-EMF constant by manual rotation
15. Record all motor inspection data in manufacturing execution system (MES)
16. Receive impeller components from injection molding facility
17. Inspect impeller packaging for contamination or moisture exposure
18. Verify impeller part numbers and revision codes match assembly requirements
19. Conduct visual inspection for molding defects, flash, or sink marks
20. Measure impeller hub inner diameter using pin gauge set (2.00mm +0.010/-0.000mm)
21. Check impeller blade count and verify against engineering drawings (7 blades)
22. Inspect blade leading and trailing edges for sharpness or burrs
23. Measure blade pitch angle at hub, mid-span, and tip locations using protractor
24. Verify impeller outer diameter using calipers (specification: 40.0mm ±0.2mm)
25. Check impeller blade thickness at multiple radial stations
26. Inspect impeller surface finish and verify Ra value (maximum: 1.6 μm)
27. Conduct dimensional verification of impeller hub length
28. Verify impeller material composition using material certification documents
29. Check impeller mass on precision balance (specification: 2.8g ±0.1g)
30. Perform static balance test on impeller using balance machine
31. Record impeller imbalance magnitude and angular position
32. Calculate required correction weight for balancing operation
33. Receive fan housing components from die casting or stamping operations
34. Inspect housing for dimensional accuracy using CMM
35. Verify housing inlet diameter (38mm ±0.3mm) and outlet dimensions
36. Check housing wall thickness at multiple locations using ultrasonic gauge
37. Inspect housing for surface defects, porosity, or rough edges
38. Verify housing mounting hole positions and thread quality (M3 x 0.5)
39. Check housing flatness at motor mounting interface using surface plate
40. Inspect housing for proper anodizing or coating finish
41. Verify housing grounding provisions and electrical continuity
42. Measure housing resonant frequencies using modal analysis equipment
43. Receive motor driver circuit boards from electronics assembly
44. Inspect PCB for solder joint quality using automated optical inspection (AOI)
45. Verify component placement and orientation on driver board
46. Check for solder bridges, cold joints, or insufficient solder
47. Test driver board electrical functionality using automated test equipment
48. Verify input voltage range (5V to 12V DC) and current limits
49. Test PWM input signal response across frequency range (20Hz to 25kHz)
50. Verify tachometer output signal characteristics (open collector, 2 pulses/revolution)

## Phase 2: BLDC Motor Preparation and Testing

51. Transfer inspected motors to motor testing station
52. Install motor in test fixture with alignment pins and clamps
53. Connect motor electrical leads to automated test controller
54. Apply rated voltage to motor windings (12V DC)
55. Measure no-load current consumption (typical: 40-60mA)
56. Monitor motor startup behavior and acceleration profile
57. Measure motor speed using optical tachometer at various voltages
58. Record motor speed-voltage characteristics for quality records
59. Apply varying PWM duty cycles and measure speed response
60. Verify motor direction of rotation (counterclockwise when viewed from shaft end)
61. Test motor thermal performance by running at full load for 30 minutes
62. Monitor motor winding temperature using embedded thermistor
63. Measure motor case temperature with infrared thermometer
64. Verify motor does not exceed maximum temperature rating (85°C)
65. Test motor commutation smoothness using current probe and oscilloscope
66. Analyze motor current waveforms for anomalies or irregularities
67. Measure motor torque ripple using dynamometer test setup
68. Verify motor meets torque specifications (minimum: 0.5 mNm)
69. Test motor efficiency at rated operating point (target: >60%)
70. Conduct motor vibration analysis using accelerometer
71. Measure motor acoustic noise level in anechoic chamber
72. Verify motor noise does not exceed specification (maximum: 25 dBA at 1m)
73. Test motor performance at temperature extremes (-10°C to 70°C)
74. Verify motor operation at voltage extremes (4.5V to 13.2V)
75. Conduct motor endurance test by running 1000 start-stop cycles
76. Apply motor acceptance sticker with test date and operator ID
77. Transfer accepted motors to motor prep station
78. Clean motor shaft with isopropyl alcohol to remove oils
79. Apply thin layer of retaining compound to motor shaft press-fit zone
80. Verify retaining compound cure time requirements (10 minutes minimum)

## Phase 3: Impeller Balancing and Preparation

81. Transfer impellers to dynamic balancing workstation
82. Install impeller on precision balancing mandrel
83. Secure impeller with calibrated clamping fixture
84. Load impeller assembly into computer-controlled balancing machine
85. Initiate automatic balancing cycle with 3000 RPM test speed
86. Measure initial impeller imbalance in two planes
87. Calculate correction weight and angular position using balancing software
88. Mark correction locations on impeller hub with UV marker
89. Remove impeller from balancing machine
90. Install impeller in precision milling fixture
91. Use micro-milling tool to remove material at correction locations
92. Remove calculated material volume (typically 5-50 mg)
93. Clean impeller to remove milling debris
94. Reinstall impeller on balancing mandrel for verification
95. Conduct final balance measurement
96. Verify residual imbalance is below specification (maximum: 0.5 g·mm)
97. Apply balance acceptance mark on impeller hub
98. Inspect impeller blades for any damage during balancing process
99. Clean impeller thoroughly with compressed air and antistatic brush
100. Apply thin coating of dry lubricant to impeller hub bore

## Phase 4: Motor Driver Integration and Programming

101. Transfer motor driver boards to programming station
102. Install driver board in programming fixture with pogo pin contacts
103. Connect programming interface to driver microcontroller
104. Load firmware binary file from secure server
105. Verify firmware version and checksum before programming
106. Initiate firmware programming sequence
107. Verify successful programming with readback verification
108. Program unique serial number into driver EEPROM
109. Configure PWM frequency setting (25 kHz default for Mac applications)
110. Set motor speed control parameters (PID gains, limits)
111. Configure thermal protection thresholds (shutdown at 95°C)
112. Program tachometer output settings (2 pulses per revolution)
113. Set motor startup parameters (soft-start ramp time: 500ms)
114. Configure stall detection and protection algorithms
115. Program acoustic optimization parameters for noise reduction
116. Set motor commutation advance angle for efficiency
117. Configure undervoltage lockout threshold (4.0V)
118. Program overvoltage protection threshold (13.5V)
119. Set overcurrent protection limit (800mA)
120. Save all configuration parameters to non-volatile memory

## Phase 5: Fan Assembly Process

121. Transfer components to fan assembly workstation (ESD-protected)
122. Place motor in assembly fixture with shaft pointing upward
123. Verify motor orientation and alignment in fixture
124. Apply bonding agent to motor housing mounting surface
125. Position fan housing over motor with alignment features engaged
126. Press housing onto motor body with controlled force (50N)
127. Verify proper seating of housing against motor flange
128. Allow bonding agent to cure per manufacturer specifications (5 minutes)
129. Install mounting screws through housing into motor body
130. Torque screws to specification using calibrated torque driver (0.4 Nm)
131. Verify screw head height does not protrude above housing surface
132. Apply threadlocker to screw threads per assembly instructions
133. Connect motor driver board to motor electrical connector
134. Verify secure electrical connection and proper pin engagement
135. Route driver board wires through housing cable management features
136. Position driver board in mounting location within housing
137. Secure driver board with snap-fit retainers or adhesive mounting
138. Verify driver board does not interfere with impeller rotation path
139. Connect driver board input power cable (AWG 26, 100mm length)
140. Connect PWM control signal wire (AWG 28, 100mm length)
141. Connect tachometer output wire (AWG 28, 100mm length)
142. Install cable strain relief and secure with cable tie
143. Verify all electrical connections with continuity tester
144. Check for proper wire routing without pinch points or sharp bends
145. Apply conformal coating to exposed electrical connections if required
146. Retrieve balanced impeller from preparation area
147. Inspect impeller hub bore for cleanliness and damage
148. Align impeller hub bore with motor shaft
149. Press impeller onto motor shaft with hydraulic press
150. Apply controlled pressing force (100N) while monitoring displacement

## Phase 6: Final Assembly and Functional Testing

151. Verify impeller is fully seated on motor shaft (gap: 0mm)
152. Measure impeller press-fit retention force with pull tester (minimum: 20N)
153. Check impeller rotational freedom by manual spin test
154. Verify impeller does not contact housing during rotation
155. Measure axial clearance between impeller and housing (specification: 0.5-1.0mm)
156. Apply retaining compound to impeller-shaft interface if specified
157. Rotate fan assembly to inspect for wobble or runout
158. Measure total indicated runout at impeller tip (maximum: 0.2mm)
159. Transfer assembled fan to electrical test station
160. Connect fan to automated test equipment power supply
161. Apply rated voltage (12V DC) and observe startup behavior
162. Measure fan startup time from power application to stable speed
163. Verify fan rotates in correct direction (air exhaust from labeled side)
164. Measure fan speed using optical or magnetic tachometer (target: 4500 RPM)
165. Verify tachometer signal output frequency and amplitude
166. Test PWM speed control by applying duty cycle sweep (0-100%)
167. Record fan speed response curve versus PWM duty cycle
168. Verify minimum controllable speed (typically 20% PWM)
169. Measure fan current consumption at 25%, 50%, 75%, and 100% speed
170. Verify current consumption within specification limits
171. Monitor fan for abnormal vibration or noise during operation
172. Conduct acoustic noise test in semi-anechoic chamber
173. Measure A-weighted sound pressure level at 1 meter distance
174. Verify acoustic noise below specification (23 dBA maximum at 12V)
175. Analyze noise spectrum for tonal components or resonances
176. Test fan thermal performance by operating at maximum speed for 15 minutes
177. Measure fan housing temperature at multiple locations
178. Verify fan does not exceed maximum operating temperature
179. Conduct airflow performance test in standardized flow chamber
180. Measure fan static pressure capability using manometer
181. Record fan airflow rate using calibrated flow meter (target: 4.5 CFM)
182. Verify fan meets performance curve specifications
183. Test fan performance at system impedance points
184. Conduct fan reliability screening with thermal cycling
185. Apply voltage stress test at 110% rated voltage for 5 minutes
186. Verify fan operation after stress testing
187. Conduct final visual inspection for assembly defects
188. Verify all labels, markings, and identification are present
189. Apply fan serial number label with manufacturing date code
190. Scan fan barcode into traceability database
191. Package fan in ESD-protective bag with desiccant pack
192. Place packaged fan in shipping carton with foam cushioning
193. Apply shipping label with destination and handling instructions
194. Record final inspection results and test data in quality management system
195. Transfer completed fans to shipping staging area for distribution to Mac assembly facilities
