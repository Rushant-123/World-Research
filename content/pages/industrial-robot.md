---
title: "Industrial Robot"
company: "FANUC Corporation"
country: "Japan"
selling_price: 35.0
inputs:
  - name: "Servo Motors"
    cost: 5.0
    link: "bldc-motor"
  - name: "Harmonic Drives"
    cost: 4.0
    link: "cnc-machine"
  - name: "Cast Arm Sections"
    cost: 3.0
    link: "steel-fabrication"
  - name: "Robot Controller"
    cost: 4.0
    link: "machine-controller"
  - name: "Wiring Harness"
    cost: 1.0
    link: "copper-wire"
  - name: "Assembly"
    cost: 3.0
    link: "machinist-labor"
value_created: 15.0
lead_time_days: 60
minimum_order_quantity: 1000
transportation_method: "ocean"
geopolitical_risk: "low"
price_volatility: "medium"

certifications:
  - "ISO9001"
  - "ISO14001"
data_quality: "estimated"
---

## Manufacturing Process for 6-Axis Articulated Industrial Robot

### Base and Arm Casting Preparation (Steps 1-15)

1. Receive aluminum alloy castings for robot base structure from foundry supplier
2. Inspect castings for porosity defects using ultrasonic testing equipment
3. Machine base mounting surface on 5-axis CNC mill to flatness tolerance of 0.01mm
4. Drill and tap M12 bolt holes for floor mounting with precise bolt circle diameter
5. Machine internal bearing housing bores in base to H7 tolerance for rotation axis
6. Apply deburring process to all cast surfaces using vibratory finishing equipment
7. Receive cast aluminum arm sections for J2 (shoulder) joint assembly
8. Machine precision bearing seats in shoulder casting using horizontal boring mill
9. Face mill top and bottom surfaces of shoulder casting for parallelism within 0.02mm
10. Drill cable routing channels through interior of shoulder casting structure
11. Receive cast arm section for J3 (elbow) joint with integrated motor mounting boss
12. Machine elbow joint pivot axis bore to receive harmonic drive reducer assembly
13. Mill flat mounting surfaces for servo motor attachment with perpendicularity control
14. Tap threaded holes for motor mounting bolts using rigid tapping cycle
15. Apply protective anodizing coating to all aluminum arm castings for corrosion resistance

### Harmonic Drive Reducer Assembly (Steps 16-30)

16. Receive precision harmonic drive strain wave gear reducers with 100:1 ratio from supplier
17. Inspect wave generator bearing for smooth rotation without binding or roughness
18. Measure flexspline tooth profile accuracy using gear measuring machine
19. Verify circular spline tooth spacing meets DIN 3960 accuracy grade 5 specification
20. Apply specified lubrication grease to wave generator bearing assembly
21. Install wave generator into flexspline with careful alignment of elliptical profile
22. Mount circular spline housing with precision torque on mounting bolts
23. Perform break-in rotation cycle running reducer at low speed for 2 hours
24. Measure backlash in assembled harmonic drive using dial indicator (target <1 arcmin)
25. Test gear efficiency by measuring input/output torque ratio under load
26. Install input shaft coupling for servo motor connection with key and setscrew
27. Mount output flange with dowel pins for precise angular positioning
28. Apply thread locker to all fasteners in harmonic drive assembly
29. Seal reducer housing with O-rings to prevent lubricant leakage
30. Label each harmonic drive unit with reduction ratio and serial number for traceability

### Servo Motor Integration (Steps 31-45)

31. Receive 400W AC servo motors with 3000 rpm rated speed and 1.3 Nm torque
32. Inspect motor shaft runout using dial indicator (must be within 0.01mm TIR)
33. Mount 20-bit absolute encoder to motor rear shaft for position feedback
34. Calibrate encoder zero position using optical alignment fixture
35. Install motor cooling fan and verify airflow direction for optimal heat dissipation
36. Connect motor power leads to rated cable (shielded 4-conductor for noise immunity)
37. Mount brake assembly to motor rear housing (holding torque 3 Nm minimum)
38. Test electromagnetic brake engagement and release timing (under 30ms)
39. Attach motor to harmonic drive input shaft using flexible coupling
40. Align motor and reducer axes within 0.05mm offset and 0.1 degree angular error
41. Torque motor mounting bolts to specified value using calibrated torque wrench
42. Install motor thermal sensor (PTC thermistor) for overheat protection
43. Route encoder cable through cable carrier system with minimum bend radius 10x diameter
44. Test motor rotation in both directions verifying smooth operation without vibration
45. Record motor serial numbers and encoder calibration data in manufacturing database

### Joint Bearing Installation (Steps 46-60)

46. Clean bearing housing bores in arm castings using lint-free solvent wipes
47. Measure bearing bore diameter with inside micrometer (tolerance H7 for press fit)
48. Heat arm casting to 80°C using induction heater to expand bearing bore
49. Press cross-roller bearing into heated bore using arbor press with even force
50. Allow casting to cool naturally ensuring bearing seats firmly without gaps
51. Install bearing inner race with light interference fit on joint shaft
52. Apply precision spacer rings to set bearing preload for optimal stiffness
53. Torque bearing retaining nuts to specified value creating 20 micron preload
54. Measure bearing friction torque using spring scale (target 0.5-1.5 Nm)
55. Install lip seals on both sides of bearing to prevent contamination ingress
56. Fill bearing cavity with specified long-life grease (lithium complex EP grade)
57. Mount encoder ring gear to joint shaft for absolute position measurement
58. Install magnetic or optical encoder read head with precise air gap setting
59. Verify encoder signal quality on oscilloscope (clean sinusoidal waveforms)
60. Lock all bearing components with thread locker and safety wire as required

### Arm Mechanical Assembly (Steps 61-75)

61. Mount J1 (base rotation) servo motor and harmonic drive assembly to base casting
62. Connect J1 joint shaft to base harmonic drive output flange with dowel pins
63. Install J2 (shoulder) arm section to base using large diameter cross-roller bearing
64. Torque J2 joint fasteners to specified value in star pattern for even clamping
65. Attach J2 servo motor and harmonic drive to shoulder casting mounting boss
66. Install upper arm linkage connecting J2 output to J3 (elbow) input shaft
67. Mount J3 elbow joint assembly with counterbalance spring to offset arm weight
68. Adjust counterbalance spring tension so arm holds position without motor power
69. Connect J3 servo motor and harmonic drive reducer to elbow joint axis
70. Install forearm tube section from elbow joint to wrist assembly mounting flange
71. Route pneumatic lines through forearm tube for end effector actuation
72. Mount J4 (wrist roll) servo motor inside forearm with compact harmonic drive
73. Connect J4 drive shaft to wrist mounting plate with precision coupling
74. Install J5 (wrist pitch) and J6 (wrist roll) motors in compact wrist mechanism
75. Verify full range of motion for all 6 axes without mechanical interference

### Wrist Mechanism Assembly (Steps 76-90)

76. Receive precision machined wrist casting with integrated bearing housings
77. Press miniature cross-roller bearings into J5 and J6 pivot axis bores
78. Install compact harmonic drive reducers (50:1 ratio) in wrist housing cavities
79. Mount low-inertia servo motors (200W) for J5 and J6 wrist axes
80. Connect wrist motors to harmonic drives using lightweight bellows couplings
81. Install hollow wrist shaft for routing pneumatic and electrical lines to tool flange
82. Mount ISO 9409-1-50-4-M6 standard tool mounting flange on J6 output
83. Drill and tap mounting holes in tool flange for customer end effector attachment
84. Install quick-disconnect air coupling in center of tool flange for gripper supply
85. Route electrical pass-through wires (8 conductors) through hollow wrist shaft
86. Install slip ring assembly at J4 axis for continuous rotation capability
87. Test slip ring contact resistance (under 50 milliohms per circuit)
88. Mount strain gauge sensor in J6 flange for force/torque sensing (optional)
89. Calibrate force sensor zero point with no payload attached to flange
90. Apply protective bellows covers to J5 and J6 axes for dust protection

### Cable Routing and Dress Package (Steps 91-105)

91. Install segmented cable carrier on J2 shoulder axis for motor cable protection
92. Route J2 and J3 motor power cables through carrier with service loop allowance
93. Separate encoder signal cables from power cables to minimize EMI interference
94. Install spiral cable wrap on J3 forearm section for flexible cable management
95. Route J4, J5, J6 motor cables through spiral wrap to wrist assembly
96. Install cable glands at each joint axis for strain relief and protection
97. Label all cables with permanent markers indicating axis and cable type
98. Connect motor power leads to distribution terminal block in base casting
99. Install ferrite cores on motor power cables near motors to suppress noise
100. Route encoder cables through separate carrier path from power cables
101. Connect encoder signals to shielded terminal blocks with proper grounding
102. Install pneumatic quick-disconnect fittings for compressed air supply
103. Route pneumatic tubing through cable carrier alongside electrical cables
104. Install air flow control valves for each pneumatic circuit in end effector
105. Test all cable routing through full range of motion without snagging or excessive tension

### Robot Controller Hardware Assembly (Steps 106-120)

106. Receive industrial PC controller with real-time operating system and motion cards
107. Install 4-axis servo amplifier modules in controller cabinet (1500W per axis)
108. Mount regenerative braking resistor bank (200W continuous rating) on heatsink
109. Connect DC bus links between servo amplifiers for energy sharing during deceleration
110. Install 24VDC power supply (10A) for logic circuits and I/O modules
111. Mount emergency stop relay with safety-rated contacts for immediate power cutoff
112. Install digital I/O cards (32 inputs, 32 outputs) for sensor and actuator control
113. Connect encoder feedback cables from robot joints to servo amplifier inputs
114. Install analog input card for force sensor and external sensor integration
115. Mount Ethernet communication module for industrial network connectivity
116. Install safety PLC module for collaborative robot safety monitoring functions
117. Connect safety-rated laser scanner input for work envelope protection
118. Wire enable switch and deadman switch circuits through safety relay logic
119. Install controller cooling fan with automatic temperature-based speed control
120. Connect teach pendant cable (10 meter) to controller USB port for programming

### Teach Pendant Assembly (Steps 121-135)

121. Receive handheld teach pendant with 7-inch color touchscreen display
122. Install membrane keypad with dedicated axis jog buttons and emergency stop
123. Mount 3-position enable switch on rear of pendant for operator safety control
124. Connect emergency stop button through safety circuit for immediate robot halt
125. Install USB port on pendant for program backup and firmware updates
126. Load teach pendant graphical user interface software with icon-based menus
127. Configure display brightness and contrast for visibility in factory lighting
128. Test all physical buttons for proper tactile feedback and electrical continuity
129. Install coiled cable with strain relief for pendant connection to controller
130. Program default jog speeds (1%, 5%, 25%, 100% options) for axis movement
131. Configure coordinate system display (joint, world, tool, user frames)
132. Install LED indicators for robot mode (auto, manual, error) on pendant face
133. Test emergency stop function from pendant verifying immediate servo power cutoff
134. Load context-sensitive help screens for operator training and reference
135. Apply protective rubber boot over pendant for impact and splash protection

### Motion Planning Software Configuration (Steps 136-150)

136. Install real-time Linux operating system on controller industrial PC
137. Load proprietary robot control software with trajectory planning algorithms
138. Configure kinematic parameters (DH parameters) for 6-axis arm geometry
139. Input link lengths, joint offsets, and mounting dimensions for forward kinematics
140. Calculate inverse kinematics solution algorithms for Cartesian path planning
141. Configure velocity profile generation with trapezoidal acceleration limits
142. Set maximum joint velocities (J1: 170°/s, J2: 170°/s, J3: 175°/s)
143. Set maximum joint accelerations to limit mechanical stress on gearboxes
144. Configure look-ahead path blending for smooth motion through waypoints
145. Install collision detection algorithms using sphere and cylinder model primitives
146. Define safety zones and restricted work envelope boundaries in software
147. Configure external axis support for 7th axis positioner or track integration
148. Install vision system interface drivers for camera-guided pick and place
149. Configure force control algorithms for compliant assembly operations
150. Load standard robot programming languages (KAREL, TP, Python interface)

### TCP Calibration (Steps 151-165)

151. Mount calibration cone tool to robot flange with precisely known dimensions
152. Jog robot to touch calibration pin from multiple approach angles
153. Record encoder positions at each touch point in joint coordinate space
154. Calculate tool center point offset using least-squares sphere fitting algorithm
155. Measure TCP offset error (target accuracy better than 0.5mm in all axes)
156. Store TCP calibration data in controller permanent memory with tool ID number
157. Mount sample end effector (gripper) to robot flange using tool mounting bolts
158. Measure gripper TCP position using 3D coordinate measuring machine
159. Input measured TCP coordinates (X, Y, Z offsets) into robot controller
160. Calculate tool orientation angles (Euler angles or quaternions) for wrist alignment
161. Test TCP accuracy by touching reference pin and comparing to known position
162. Adjust TCP calibration iteratively until position error is minimized
163. Configure multiple tool frames for automatic tool changer applications
164. Store up to 16 tool definitions in controller memory with instant selection
165. Verify TCP calibration by executing circular path and measuring circularity error

### Joint Mastering (Steps 166-180)

166. Remove all external loads from robot arm to minimize gravitational torque
167. Manually position robot to mechanical reference position using alignment jigs
168. Insert precision dowel pins through reference holes in each joint assembly
169. Zero all encoder counts in controller software at mechanical reference position
170. Remove alignment pins and verify encoder counts remain at zero position
171. Calculate encoder offset values to compensate for mounting variations
172. Store encoder offset values in non-volatile memory for power-cycle persistence
173. Test mastering accuracy by returning to reference position using program command
174. Measure repeatability of return to reference (target within 0.05mm)
175. Perform mastering procedure for all 6 axes sequentially from base to wrist
176. Verify joint software limits match mechanical hard stops with safety margin
177. Configure positive and negative software travel limits for each axis
178. Test software limits by jogging to limit and verifying smooth deceleration stop
179. Create backup file of calibration data on USB drive for disaster recovery
180. Document mastering procedure and calibration values in robot service manual

### Payload Testing (Steps 181-195)

181. Mount calibrated test masses to tool flange (5kg, 10kg, 15kg, 20kg options)
182. Execute standard test motion profile at 100% speed with maximum payload
183. Monitor servo amplifier current draw during acceleration and deceleration
184. Verify motor torque remains below 80% of rated continuous torque rating
185. Check regenerative braking resistor temperature during repetitive motion cycles
186. Test maximum payload capacity at full reach (20kg at 1.8m reach specification)
187. Verify reduced payload capacity at extended reach positions per load curve
188. Execute oscillating motion pattern to test dynamic stability under inertial loads
189. Measure TCP position error during motion using laser tracker system
190. Verify path accuracy remains within ±0.5mm at rated speeds with full payload
191. Test repeatability by returning to fixed position 100 times measuring deviation
192. Calculate repeatability statistics (target ±0.02mm per ISO 9283 standard)
193. Perform point-to-point motion tests measuring cycle time and settling time
194. Execute continuous path welding motion with consistent velocity along curve
195. Conduct final acceptance testing demonstrating all performance specifications met

## Technical Specifications

**Robot Model:** FANUC M-20iA/20M
**Payload Capacity:** 20 kg maximum at wrist flange
**Reach:** 1813 mm horizontal reach from base center
**Repeatability:** ±0.02 mm per ISO 9283 standard
**Axes:** 6-axis articulated arm configuration

**Joint Ranges of Motion:**
- J1 (Base Rotation): ±170°
- J2 (Shoulder): -90° to +145°
- J3 (Elbow): -110° to +250°
- J4 (Wrist Roll): ±360°
- J5 (Wrist Pitch): ±125°
- J6 (Wrist Roll): ±360°

**Maximum Joint Speeds:**
- J1: 170°/s
- J2: 170°/s
- J3: 175°/s
- J4: 360°/s
- J5: 360°/s
- J6: 550°/s

**Performance Specifications:**
- Maximum TCP Speed: 2000 mm/s linear velocity
- Path Accuracy: ±0.5 mm during motion
- Settling Time: 0.1 seconds at target position
- Weight: 135 kg robot arm assembly
- Protection Rating: IP67 with optional sealed covers

**Safety Features:**
- Dual-channel safety-rated position monitoring
- Configurable safety zones with automatic speed reduction
- Collaborative mode with force-limiting (optional)
- Emergency stop response time: under 50ms
- Safety-rated encoder position verification
- Collision detection through current monitoring
- Safe reduced speed mode: 250 mm/s maximum TCP speed

**Controller Specifications:**
- Processor: Multi-core industrial PC (Intel i7)
- Memory: 8 GB RAM, 128 GB SSD storage
- Real-time Cycle: 1 ms servo update rate
- Communication: EtherNet/IP, Profinet, Modbus TCP
- Programming: Teach pendant, offline simulation, Python API
- I/O Capacity: 2048 digital I/O points expandable

**Environmental Ratings:**
- Operating Temperature: 0°C to 45°C ambient
- Storage Temperature: -20°C to 60°C
- Humidity: 20% to 80% RH non-condensing
- Vibration: 0.5G maximum per IEC 60068-2-6
- Acoustic Noise: under 70 dBA at 1 meter distance

**Power Requirements:**
- Input Voltage: 200-230 VAC, 3-phase, 50/60 Hz
- Power Consumption: 3.5 kW maximum during motion
- Standby Power: 200W with servos enabled
- Compressed Air: 0.5-0.7 MPa, 30 L/min for end effector

**Certifications:**
- CE marking for European machinery directive
- UL/CSA certification for North American installations
- ISO 10218-1 robot safety standard compliance
- ANSI/RIA R15.06 industrial robot safety
- TÜV certification for collaborative operation mode

