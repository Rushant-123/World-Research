---
title: "Brushless DC Motor"
company: "Nidec Corporation"
country: "Japan"
selling_price: 4.0
inputs:
  - name: "Neodymium Magnets"
    cost: 0.5
    link: "neodymium-magnet"
  - name: "Copper Wire"
    cost: 0.3
    link: "copper-wire"
  - name: "Steel Laminations"
    cost: 0.25
    link: "electrical-steel"
  - name: "Motor Controller IC"
    cost: 0.3
    link: "analog-asic"
  - name: "Ball Bearings"
    cost: 0.2
    link: "ball-bearings"
  - name: "Assembly"
    cost: 0.3
    link: "machinist-labor"
value_created: 2.15
lead_time_days: 60
minimum_order_quantity: 5000
transportation_method: "ocean"
geopolitical_risk: "low"
price_volatility: "medium"

certifications:
  - "ISO9001"
  - "ISO14001"
data_quality: "estimated"
---

Brushless DC (BLDC) motors represent a significant advancement over traditional brushed motors, eliminating mechanical commutators and carbon brushes in favor of electronic commutation. These motors offer superior efficiency (85-95%), longer lifespan (10,000-50,000 hours), reduced electromagnetic interference, and precise speed control. BLDC motors are ubiquitous in modern electronics, powering computer fans, hard disk drives, electric vehicles, drones, industrial automation, and HVAC systems. Their construction features permanent magnet rotors (typically neodymium-iron-boron magnets) and copper-wound stators with electronic controllers managing phase switching.

## Manufacturing Process

### Stator Core Preparation

1. Receive electrical steel coils in 0.35mm or 0.5mm thickness for motor-grade laminations
2. Inspect steel surface for silicon content (3-4%) ensuring low core loss and high permeability
3. Measure steel resistivity (45-55 microohm-cm) to minimize eddy current losses
4. Verify insulation coating thickness (0.5-2 microns) on lamination surfaces
5. Load steel coil onto progressive stamping die feeder system
6. Align steel strip with precision guides (±0.02mm tolerance) for accurate stamping
7. Activate high-speed stamping press operating at 200-400 strokes per minute
8. Stamp individual lamination layers with stator slots (typically 9, 12, 18, or 24 slots)
9. Cut ventilation holes or mounting features into each lamination during stamping
10. Inspect stamped laminations for burr-free edges (burr height <10 microns)
11. Apply thin adhesive coating (epoxy or phenolic resin) to lamination surfaces
12. Stack laminations in precision alignment fixture maintaining ±0.05mm concentricity
13. Build stator stack to target height (15-40mm depending on power rating)
14. Apply hydraulic pressure (50-150 bar) to compress lamination stack
15. Cure adhesive bonding at 150-180°C for 30-60 minutes in thermal oven

### Stator Winding Preparation

16. Select copper magnet wire in appropriate gauge (AWG 22-30 for small motors)
17. Verify wire insulation type (polyurethane, polyester-imide, or polyamide-imide)
18. Measure wire diameter with micrometer (±2 microns accuracy) ensuring specification compliance
19. Test insulation breakdown voltage (minimum 2000V for Grade 2 wire)
20. Load wire spools onto automated winding machine tension control system
21. Set wire tension to 50-150 grams depending on wire diameter
22. Program winding pattern for concentrated or distributed winding configuration
23. Position stator stack in winding machine chuck with precise centering
24. Insert wire end into first stator slot using needle insertion tool
25. Begin automated winding process filling slots with coil turns
26. Maintain winding density at 60-75% slot fill factor for optimal performance
27. Apply wire turns in neat layers avoiding crossovers and air gaps
28. Complete winding for first phase coil (typically 50-200 turns per coil)
29. Transition wire to next slot position for series or parallel connection
30. Wind second and third phase coils following symmetrical slot pattern

### Winding Completion and Insulation

31. Verify turn count accuracy using automated counter integrated into winding machine
32. Trim wire ends leaving 15-25mm leads for termination connections
33. Apply slot liner insulation (Nomex paper or polyester film) protecting wire from lamination edges
34. Insert wedge insulators securing coil wires within stator slots
35. Arrange phase lead wires for star (wye) or delta connection configuration
36. Strip insulation from wire ends using thermal or mechanical stripping method
37. Tin wire ends with lead-free solder ensuring clean electrical connection
38. Connect phase wires to terminal pins or PCB connection points
39. Apply strain relief to lead wires preventing mechanical stress on connections
40. Coat winding end-turns with varnish or resin impregnation compound
41. Place stator assembly in vacuum impregnation chamber
42. Draw vacuum to -0.9 bar removing air from between wire turns
43. Introduce liquid epoxy resin flooding winding voids completely
44. Release vacuum allowing atmospheric pressure to force resin penetration
45. Drain excess resin collecting for reuse in next impregnation cycle

### Winding Curing and Testing

46. Transfer impregnated stator to curing oven at 130-160°C
47. Cure resin for 2-4 hours creating rigid mechanically stable winding structure
48. Cool stator to room temperature over 1-2 hours preventing thermal shock
49. Measure winding resistance using precision milliohm meter (±0.1% accuracy)
50. Verify phase-to-phase resistance balance within ±3% tolerance
51. Perform insulation resistance test applying 500V DC for 60 seconds
52. Confirm insulation resistance >100 megohms at room temperature
53. Conduct high-potential (hipot) test applying 1500-2000V AC for 1 second
54. Verify no breakdown or leakage current >0.5mA during hipot test
55. Test inductance of each phase winding using LCR meter at 1 kHz
56. Measure phase inductance typically 0.5-5mH depending on motor design
57. Verify inductance balance between phases within ±5% tolerance
58. Record electrical parameters in quality control database for traceability
59. Apply identification label or laser marking indicating winding specifications
60. Store completed stator in ESD-protective environment awaiting rotor assembly

### Rotor Shaft Machining

61. Select steel shaft material (typically 1045 carbon steel or stainless steel)
62. Load steel rod stock into CNC turning center chuck
63. Face shaft end ensuring perpendicularity within 0.01mm total indicator runout (TIR)
64. Turn shaft outer diameter to specification (typical 3-10mm) with ±0.01mm tolerance
65. Machine bearing journal surfaces to precise diameter and finish (Ra 0.4-0.8 microns)
66. Cut keyway or flat surface for magnet rotor mounting and torque transmission
67. Machine thread or groove for shaft retention nut or circlip
68. Drill center hole if hollow shaft design required for cable routing
69. Apply surface grinding to bearing journals achieving 0.005mm TIR or better
70. Measure shaft dimensions using coordinate measuring machine (CMM) verification
71. Inspect surface finish using profilometer confirming smooth bearing contact surfaces
72. Clean shaft removing machining oils and metal particles using solvent wash
73. Apply corrosion protection coating (zinc plating or passivation) if required
74. Inspect shaft straightness using dial indicator (maximum 0.01mm runout over length)
75. Package shafts in protective tubes preventing surface damage during handling

### Magnet Rotor Assembly

76. Receive sintered neodymium-iron-boron magnets in arc segment or ring geometry
77. Verify magnet grade (N35-N52) and surface field strength (3000-4500 Gauss)
78. Measure magnet dimensions using calipers (±0.05mm tolerance critical for air gap)
79. Clean magnet surfaces removing dust or particles with dry air blast
80. Apply structural adhesive (epoxy or cyanoacrylate) to magnet backing surface
81. Position magnets on rotor hub or directly on shaft maintaining pole spacing
82. Arrange magnets in alternating north-south pole configuration (typically 4-16 poles)
83. Use alignment fixture ensuring equal air gap (0.3-0.8mm) around stator bore
84. Apply compression pressure during adhesive curing preventing magnet movement
85. Cure adhesive at room temperature for 24 hours or accelerate at 60°C for 2 hours
86. Measure magnetic flux distribution using gaussmeter probe scanning rotor surface
87. Verify pole-to-pole flux symmetry within ±5% ensuring balanced operation
88. Apply protective coating (epoxy or nickel plating) over magnets preventing corrosion
89. Balance rotor assembly on dynamic balancing machine to <0.5 gram-millimeter residual unbalance
90. Add or remove balancing material (drilling or adding weights) achieving specification

### Bearing Installation

91. Select precision ball bearings (typically 608, 6800, or miniature series)
92. Verify bearing internal clearance (C2, C0, or C3 class) appropriate for application
93. Inspect bearing races for surface defects using magnification and lighting
94. Measure bearing bore and outer diameter confirming fit specifications
95. Clean bearings using isopropyl alcohol removing preservative oil
96. Apply thin film of grease lubricant (lithium, PFPE, or synthetic oil-based)
97. Chill shaft or heat bearing using controlled thermal method (±5°C accuracy)
98. Press bearing onto shaft journal using arbor press with controlled force
99. Verify bearing seating against shaft shoulder using feeler gauge (no gap)
100. Install bearing retaining circlip or thread retention nut securing axial position
101. Insert shaft-rotor assembly into stator bore checking free rotation
102. Install second bearing into motor housing or end cap assembly
103. Verify bearing alignment ensuring shaft concentricity within stator bore (±0.05mm)
104. Measure shaft end play (axial clearance) confirming 0.05-0.3mm specification
105. Test bearing friction by manually rotating shaft (smooth consistent resistance)

### Hall Sensor Installation

106. Select Hall effect sensors appropriate for motor pole count and speed range
107. Position Hall sensors at 120° electrical spacing for three-phase commutation
108. Mount sensors on PCB or flex circuit aligned with rotor magnetic transitions
109. Set air gap between Hall sensor and magnet rotor (typically 0.5-2mm)
110. Connect Hall sensor outputs to motor controller signal conditioning circuit
111. Apply power to Hall sensors (typically 5V DC) and verify output voltage swing
112. Rotate rotor manually observing Hall sensor state transitions on oscilloscope
113. Verify proper commutation sequence (six-step pattern for trapezoidal drive)
114. Adjust sensor position if transitions not aligned with optimal commutation points
115. Secure sensors with adhesive or mechanical fasteners preventing movement

### Motor Controller Integration

116. Install motor controller IC on PCB with gate drivers and power MOSFETs
117. Connect stator phase leads to MOSFET half-bridge outputs (U, V, W phases)
118. Route Hall sensor signals to controller input pins with proper filtering
119. Add bypass capacitors near IC power pins (0.1uF ceramic and 10uF electrolytic)
120. Install current sensing resistors (typically 0.01-0.1 ohm, 1% tolerance)
121. Connect DC power input terminals with bulk capacitors (100-1000uF minimum)
122. Apply thermal interface material between MOSFETs and heat sink surface
123. Mount heat sink ensuring adequate thermal conductivity (0.5-1°C/W thermal resistance)
124. Program controller with commutation timing and PWM frequency (15-50 kHz typical)
125. Configure speed control parameters (proportional-integral gains and limits)

### Initial Electrical Testing

126. Connect motor to benchtop power supply with current limiting (0.5-5A range)
127. Apply low voltage (3-6V) verifying motor starts and rotates in correct direction
128. Monitor phase currents using clamp-on current probes or oscilloscope measurements
129. Verify balanced three-phase current waveforms (amplitude match within ±10%)
130. Measure back-EMF voltage by spinning motor and observing phase terminal voltages
131. Calculate motor voltage constant Kv (RPM per volt) from back-EMF measurement
132. Typical Kv values range from 500-5000 RPM/V depending on winding turns
133. Measure motor torque constant Kt (Newton-meters per ampere) using load cell
134. Verify relationship Kt = 60/(2π × Kv) confirming motor physics consistency
135. Test motor at various speed setpoints from 1000-15000 RPM verifying control response

### Speed-Torque Characterization

136. Mount motor in dynamometer test fixture with torque sensor coupling
137. Connect dynamometer load brake (magnetic, friction, or regenerative type)
138. Install tachometer or optical encoder measuring shaft speed (±1 RPM accuracy)
139. Apply rated voltage (12V, 24V, or 48V nominal) to motor controller
140. Run motor at no-load measuring idle speed and input current
141. Incrementally increase load torque recording speed and current at each point
142. Generate speed-torque curve showing linear relationship in normal operating range
143. Identify stall torque (maximum torque at zero speed) typically 10-100 mN-m
144. Measure no-load speed (maximum speed at zero torque) confirming Kv calculation
145. Calculate motor efficiency at each load point (output power / input power × 100%)
146. Peak efficiency typically occurs at 60-80% of stall torque loading
147. Verify efficiency >85% in operating range for quality BLDC motor design
148. Measure torque ripple (variation in torque during rotation) targeting <5% peak-to-peak
149. Record current ripple amplitude ensuring <20% for smooth operation
150. Test motor thermal rise at continuous rated load for 30-60 minutes

### Thermal Performance Testing

151. Install thermocouples on stator winding, bearing housing, and magnet rotor
152. Place motor in thermal chamber or operate in ambient conditions (25°C)
153. Apply rated continuous load and monitor temperature rise over time
154. Record temperatures at 5-minute intervals until thermal equilibrium reached
155. Typical winding temperature rise: 40-80°C above ambient at rated load
156. Verify winding temperature remains below insulation class rating (Class F: 155°C)
157. Check bearing temperature rise <50°C ensuring adequate lubrication
158. Measure magnet temperature confirming <80°C to prevent demagnetization
159. Calculate thermal resistance (°C per watt) from temperature rise and power loss
160. Test motor overload capability applying 150-200% rated current for short duration
161. Verify motor survives transient overload without damage or demagnetization
162. Cool motor and retest electrical parameters confirming no permanent changes
163. Document thermal performance curves for datasheet and application guidelines
164. Establish derating factors for operation at elevated ambient temperatures
165. Define maximum continuous and peak current ratings based on thermal limits

### Vibration and Acoustic Testing

166. Mount motor on vibration isolation platform with accelerometer attachment
167. Run motor through speed range measuring vibration amplitude in three axes
168. Typical vibration levels <0.5 mm/s RMS for precision balanced motors
169. Identify critical speeds where resonances amplify vibration levels
170. Perform additional balancing if vibration exceeds specification at any speed
171. Install motor in anechoic chamber for acoustic noise measurement
172. Measure sound pressure level (SPL) at 1 meter distance using calibrated microphone
173. Typical noise levels: 25-45 dBA depending on speed and load
174. Analyze frequency spectrum identifying tonal components from electromagnetic forces
175. Optimize commutation timing and PWM frequency reducing audible noise

### Reliability and Endurance Testing

176. Select sample motors for accelerated life testing under elevated stress
177. Operate motors at high temperature (85°C ambient) and full load continuously
178. Run endurance test for 1000-5000 hours simulating years of field operation
179. Monitor bearing noise and friction periodically checking for degradation
180. Measure winding resistance over time detecting insulation breakdown or corrosion
181. Retest speed-torque performance verifying no significant parameter drift
182. Inspect bearing grease condition checking for oxidation or separation
183. Examine magnet condition for corrosion, chipping, or flux loss
184. Calculate expected lifetime (MTTF) based on failure rate observed in testing
185. Quality BLDC motors achieve 20,000-50,000 hour operational lifetime

### Final Quality Control

186. Perform 100% functional testing of production motors at rated voltage
187. Measure input current at no-load and 50% load verifying within specification
188. Test starting torque ensuring motor accelerates under expected load inertia
189. Verify direction of rotation matching marking on motor housing
190. Conduct final electrical safety tests (insulation resistance and hipot)
191. Check mechanical dimensions and mounting features with go/no-go gauges
192. Apply product label with part number, electrical ratings, and manufacturing date
193. Package motor with protective cap or bag preventing contamination
194. Box motors in quantities of 50-500 with foam padding preventing shipping damage
195. Ship to customers with datasheet including performance curves and application notes
