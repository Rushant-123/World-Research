---
title: "Wire Bonder"
company: "Kulicke & Soffa"
country: "Singapore"
selling_price: 2.0
inputs:
  - name: "Ultrasonic Transducer"
    cost: 0.4
    link: "ultrasonic-transducer"
  - name: "Bonding Capillary"
    cost: 0.1
    link: "bonding-capillary"
  - name: "Gold Wire Spool"
    cost: 0.5
    link: "gold-wire"
  - name: "XYZ Stage"
    cost: 0.35
    link: "xyz-stage"
  - name: "Vision System"
    cost: 0.3
    link: "machine-vision"
value_created: 0.35
---

# Wire Bonder Manufacturing Process

## System Architecture and Platform Setup

### 1-5: Base Platform Construction
1. Cast precision granite base structure weighing 500-800 kg for vibration isolation and thermal stability
2. Machine mounting surface flatness to within 2 microns across entire platform area
3. Install three-point kinematic mounting system for thermal expansion compensation
4. Integrate active pneumatic vibration isolation system with sub-micron damping capability
5. Apply thermal barrier coating to base structure for temperature gradient minimization

### 6-10: Motion Control Framework
6. Install high-precision linear motor XYZ stage with 0.1 micron positioning accuracy
7. Mount encoder systems providing 10 nanometer resolution feedback for all motion axes
8. Integrate air bearing rotary stage for theta axis with 0.0001 degree angular resolution
9. Install servo motor drive systems with microsecond-level response time for trajectory control
10. Calibrate motion system using laser interferometer for absolute position accuracy verification

### 11-15: Thermal Management System
11. Install bond head heating system with ceramic heater capable of 300°C operation
12. Integrate substrate heating stage with multi-zone temperature control spanning 25-300°C
13. Mount thermocouple sensors with 0.1°C accuracy at critical measurement points
14. Install PID temperature control loops with 0.5°C stability for all heated zones
15. Integrate thermal imaging camera for real-time temperature distribution monitoring

## Ultrasonic Transducer Integration

### 16-20: Transducer Assembly
16. Mount piezoelectric ultrasonic transducer operating at 60-140 kHz resonant frequency
17. Install titanium or aluminum horn amplifier for ultrasonic energy concentration
18. Integrate force sensor with 0.01 gram resolution for bond force measurement
19. Attach bonding capillary holder with precision collet mechanism for tool mounting
20. Install ultrasonic amplitude measurement system using laser Doppler vibrometry

### 21-25: Ultrasonic System Calibration
21. Perform resonance frequency sweep to identify optimal transducer operating point
22. Calibrate ultrasonic power output across 0-100% range using calorimetric method
23. Measure impedance characteristics of transducer assembly to verify electrical matching
24. Test ultrasonic amplitude uniformity across bond force range of 10-100 grams
25. Verify ultrasonic energy coupling efficiency through thermal dissipation analysis

### 26-30: Energy Control System
26. Install digital ultrasonic generator with frequency tracking and amplitude control
27. Integrate power amplifier delivering 50-200 watts to transducer with minimal distortion
28. Mount current and voltage sensors for real-time ultrasonic power monitoring
29. Implement feedback control loop maintaining constant ultrasonic amplitude during bonding
30. Install protection circuitry preventing transducer damage from overcurrent or overheating

## Bonding Capillary System

### 31-35: Capillary Installation
31. Select ceramic capillary with appropriate hole diameter for wire size (18-25 micron typical)
32. Polish capillary tip face angle to 8-12 degrees for optimal ball formation
33. Inspect capillary chamfer radius under microscope ensuring 2-4 wire diameter specification
34. Mount capillary in holder using precision collet with 1 micron runout tolerance
35. Verify capillary alignment to motion axis within 0.5 degree angular tolerance

### 36-40: Capillary Characterization
36. Measure capillary hole diameter using air gauge or optical measurement system
37. Inspect inner hole surface finish for smoothness preventing wire scratching
38. Verify capillary tip planarity ensuring uniform contact across bond interface
39. Check capillary material hardness and wear resistance using micro-indentation
40. Document capillary geometry parameters including outer diameter and total length

### 41-45: Wire Threading System
41. Install automatic wire threading mechanism using vacuum or mechanical clamping
42. Thread wire through capillary hole ensuring smooth passage without damage
43. Adjust wire clamp position 5-10 mm above capillary tip for optimal control
44. Set wire tail length extending below capillary to 1-2 mm for initial ball formation
45. Verify wire centerline alignment with capillary hole using lateral microscopy

## Electronic Flame-Off (EFO) System

### 46-50: EFO Wand Installation
46. Mount EFO electrode wand adjacent to capillary with 1-2 mm gap spacing
47. Install high-voltage pulse generator delivering 2-5 kV for spark ignition
48. Integrate current limiting resistor preventing excessive discharge energy
49. Position EFO wand at optimal angle for consistent spark formation
50. Install protective grounding to prevent electrostatic discharge to sensitive components

### 51-55: Ball Formation Parameters
51. Set EFO pulse duration to 0.5-2 milliseconds for controlled ball melting
52. Adjust EFO voltage to achieve consistent ball diameter of 1.5-2.5x wire diameter
53. Optimize EFO current limiting to prevent wire vaporization or splashing
54. Control ambient atmosphere using nitrogen or forming gas to minimize oxidation
55. Calibrate EFO timing relative to wire clamp release for reproducible ball formation

### 56-60: Ball Quality Control
56. Inspect ball roundness using vision system ensuring sphericity within 5% tolerance
57. Measure ball diameter consistency achieving coefficient of variation below 3%
58. Verify ball surface smoothness without pitting, voids, or irregular protrusions
59. Check ball centering on wire ensuring concentric alignment within 10% offset
60. Monitor ball tail formation preventing wire necking or irregular attachment

## Vision System Integration

### 61-65: Optical Hardware
61. Install high-resolution CCD or CMOS camera with 2-5 megapixel sensor
62. Mount precision microscope objective providing 100-500x magnification range
63. Integrate coaxial LED illumination system with adjustable intensity control
64. Install ring light providing uniform diffuse illumination for bond inspection
65. Mount laser height sensor for non-contact substrate topography measurement

### 66-70: Pattern Recognition Algorithms
66. Implement die corner detection algorithm using edge finding and corner matching
67. Develop bond pad recognition system identifying target locations within 2 micron accuracy
68. Integrate fiducial mark alignment using correlation-based template matching
69. Deploy ball bond inspection algorithm measuring ball size and placement accuracy
70. Implement wire loop profile extraction using image processing and curve fitting

### 71-75: Vision System Calibration
71. Calibrate pixel-to-micron conversion factor using precision reference standards
72. Perform lens distortion correction using polynomial or rational function models
73. Verify measurement accuracy across full field of view maintaining 1 micron tolerance
74. Calibrate height measurement system using step height standards
75. Test pattern recognition repeatability achieving sub-micron position variation

## Wire Feeding and Clamping

### 76-80: Wire Spool System
76. Mount wire spool on precision bearing system for smooth rotation with minimal friction
77. Install wire tension sensor monitoring pull force between 2-10 grams during feeding
78. Integrate automatic wire feeding mechanism maintaining consistent supply to capillary
79. Install wire break detection sensor triggering machine stop upon wire failure
80. Implement wire usage monitoring system tracking consumption for inventory management

### 81-85: Wire Clamp Mechanism
81. Install pneumatic or piezoelectric wire clamp with microsecond response time
82. Adjust clamp force to secure wire without deformation maintaining 10-50 gram range
83. Verify clamp jaw alignment ensuring parallel contact across wire diameter
84. Test clamp repeatability positioning wire within 0.5 micron tolerance
85. Integrate clamp position sensor confirming open/closed state for safety interlocks

### 86-90: Wire Selection and Preparation
86. Select gold wire diameter based on application requirements (15-50 micron typical range)
87. Verify wire purity meeting 4N or 5N grade specifications for reliable bonding
88. Inspect wire surface for contamination, oxidation, or mechanical damage
89. Measure wire tensile strength ensuring minimum 10-15 grams for 25 micron diameter
90. Test wire elongation characteristics verifying 1-3% break elongation specification

## Thermosonic Ball Bonding Process

### 91-95: First Bond - Ball Formation
91. Position capillary above bond location with 100 micron clearance height
92. Generate ball using EFO system creating sphere 1.8-2.2x wire diameter
93. Lower capillary bringing ball into contact with bond pad at controlled velocity
94. Apply initial contact force ramping from 0 to target value over 1-5 milliseconds
95. Set bond force in range of 30-80 grams depending on wire size and pad metallization

### 96-100: First Bond - Ultrasonic Energy Application
96. Activate ultrasonic energy at 60-120 kHz frequency with amplitude control
97. Apply ultrasonic power for duration of 8-20 milliseconds depending on material system
98. Monitor bond interface temperature rise to 150-300°C from friction and substrate heating
99. Control ultrasonic amplitude between 0.5-2.5 microns peak-to-peak at capillary tip
100. Terminate ultrasonic energy while maintaining bond force for 1-3 milliseconds

### 101-105: First Bond - Metallurgical Formation
101. Create intermetallic compound layer at bond interface through solid-state diffusion
102. Form gold-aluminum intermetallic typically 0.1-0.5 micron thickness for reliable bond
103. Achieve atomic-level bonding through removal of surface oxides and contaminants
104. Generate bond deformation with ball diameter increasing to 2.5-3.5x wire diameter
105. Verify bond coverage area exceeding minimum specification of 60-70% of deformed ball

### 106-110: Wire Loop Formation
106. Raise capillary from first bond following programmed trajectory for loop formation
107. Control loop height to specification ranging from 50-200 microns above substrate
108. Adjust loop shape using multi-segment trajectory with kink height and position control
109. Maintain wire tension during loop formation preventing slack or excessive stretching
110. Optimize loop profile for electrical performance and mechanical reliability

### 111-115: Second Bond - Wedge Bond Formation
111. Position capillary at second bond location typically on substrate or leadframe
112. Lower capillary bringing wire into contact with bonding surface at controlled angle
113. Apply bond force in range of 20-60 grams for wedge bond formation
114. Activate ultrasonic energy for 5-15 milliseconds creating wedge-shaped deformation
115. Form metallurgical bond through ultrasonic scrubbing and thermal diffusion

### 116-120: Wire Separation
116. Raise capillary while clamping wire above bond interface
117. Apply upward motion creating tensile stress concentrated at wedge bond heel
118. Separate wire through controlled fracture at bond interface or wire breakage
119. Verify clean wire tear-off without pad lifting or wire stub formation
120. Inspect remaining wire tail length ensuring adequate length for next bond cycle

## Wedge Bonding Process

### 121-125: Wedge Bonding Setup
121. Install wedge bonding tool with flat or grooved tip geometry for wire deformation
122. Orient wedge tool at 30-60 degree angle relative to bond direction
123. Adjust tool height ensuring proper wire feeding through wedge face opening
124. Set bond force range of 40-120 grams depending on wire size and substrate
125. Configure ultrasonic parameters optimized for wedge bonding mode operation

### 126-130: First Wedge Bond
126. Feed wire through wedge tool maintaining appropriate tail length
127. Position wedge tool at first bond location with precise angular orientation
128. Apply bond force while activating ultrasonic energy for 10-25 milliseconds
129. Create deformed wedge shape with length 2-4x wire diameter
130. Verify bond adhesion without wire slippage or pad damage

### 131-135: Reverse Motion and Loop
131. Raise wedge tool vertically clearing bond surface by 50-100 microns
132. Execute reverse motion moving tool opposite to bond direction
133. Form wire loop with controlled height and shape following programmed trajectory
134. Maintain consistent wire tension preventing loop collapse or excessive bowing
135. Control loop trajectory avoiding contact with die surface or adjacent wires

### 136-140: Second Wedge Bond
136. Position wedge tool at second bond location maintaining angular alignment
137. Apply bond force and ultrasonic energy for second wedge formation
138. Create metallurgical bond at wire-substrate interface through thermosonic process
139. Verify bond strength and deformation meeting quality specifications
140. Complete bonding cycle with consistent parameters across all wire connections

## Wire Material Systems

### 141-145: Gold Wire Bonding
141. Process 99.99% purity gold wire standard for high-reliability applications
142. Utilize wire hardness in range of 60-90 HV for optimal bonding characteristics
143. Achieve excellent corrosion resistance and long-term stability in harsh environments
144. Form reliable gold-aluminum intermetallic bonds at substrate interface
145. Monitor for Kirkendall voiding in intermetallic layer over extended thermal aging

### 146-150: Copper Wire Bonding
146. Process copper wire offering cost advantage over gold for high-volume production
147. Utilize forming gas atmosphere preventing copper oxidation during bonding
148. Apply palladium or gold coating on copper wire for enhanced bondability
149. Optimize ultrasonic parameters for copper's higher stiffness compared to gold
150. Manage copper-aluminum intermetallic growth rate through process control

### 151-155: Aluminum Wire Bonding
151. Process aluminum wire primarily for wedge bonding in power device applications
152. Utilize larger wire diameters typically 75-500 microns for high current carrying
153. Apply higher bond forces accommodating aluminum's mechanical properties
154. Optimize substrate temperature to 150-250°C enhancing aluminum bonding
155. Prevent aluminum wire corrosion through proper encapsulation and passivation

## Bond Quality and Testing

### 156-160: Bond Strength Evaluation
156. Perform wire pull test measuring minimum break force per wire diameter specification
157. Conduct ball shear test measuring force required to separate first bond from substrate
158. Execute ball bond pull test achieving 80-100% wire break at mid-span location
159. Perform destructive bond pull verifying break mode at wire rather than bond interface
160. Measure bond peel strength for wedge bonds ensuring adequate adhesion

### 161-165: Visual Inspection Criteria
161. Inspect bond deformation shape ensuring symmetric circular or elliptical geometry
162. Verify absence of cracks, voids, or delamination in deformed bond area
163. Check for proper centering of bond on pad with offset below 25% of pad dimension
164. Examine wire loop profile maintaining consistent height and smooth curvature
165. Inspect wire heel formation at wedge bond for proper tear-off characteristics

### 166-170: Non-Destructive Testing
166. Perform ultrasonic inspection detecting delamination or voids within bond interface
167. Execute acoustic emission monitoring during bonding detecting anomalous events
168. Implement electrical continuity testing verifying low-resistance wire connections
169. Apply thermal imaging identifying hot spots indicating poor bond quality
170. Conduct X-ray inspection for internal void detection in critical applications

## Process Optimization and Control

### 171-175: Parameter Development
171. Design experiment varying bond force, ultrasonic power, and time systematically
172. Optimize EFO parameters achieving target ball diameter with minimal variation
173. Adjust loop trajectory parameters balancing electrical performance and mechanical stress
174. Fine-tune substrate temperature based on pad metallization and wire material
175. Develop process window defining acceptable parameter ranges for robust bonding

### 176-180: Statistical Process Control
176. Monitor bond pull strength using control charts with established control limits
177. Track ball diameter consistency measuring standard deviation below 3% specification
178. Analyze capillary wear trends through periodic ball quality assessment
179. Implement automatic parameter adjustment compensating for tool wear and drift
180. Establish process capability indices (Cpk) exceeding 1.33 for critical parameters

### 181-185: Machine Maintenance
181. Schedule periodic capillary replacement based on wire length processed or quality degradation
182. Clean EFO electrode wand removing carbon deposits affecting spark formation
183. Calibrate vision system maintaining measurement accuracy within specification
184. Verify motion system accuracy using reference artifacts and recalibrate as needed
185. Inspect ultrasonic transducer resonance frequency confirming stable operation

## High-Speed Production Automation

### 186-190: Throughput Optimization
186. Implement high-speed motion profiles with acceleration exceeding 5 g for rapid positioning
187. Optimize wire loop trajectory minimizing cycle time while maintaining quality
188. Employ parallel processing bonding multiple dies or substrates simultaneously
189. Integrate automatic wire threading reducing downtime between wire spool changes
190. Deploy automatic vision alignment reducing setup time for new die configurations

### 191-195: Advanced Control Features
191. Implement adaptive process control adjusting parameters based on real-time feedback
192. Integrate machine learning algorithms predicting bond quality from process signatures
193. Deploy remote monitoring and diagnostics enabling predictive maintenance
194. Implement traceability system recording complete process data for each bond cycle
195. Integrate with factory automation system enabling lights-out manufacturing operation
