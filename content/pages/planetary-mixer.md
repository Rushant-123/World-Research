---
title: "Planetary Mixer"
company: "Charles Ross & Son"
country: "United States"
selling_price: 25.0
inputs:
  - name: "Stainless Steel Vessel"
    cost: 3.0
    link: "stainless-steel-sheet"
  - name: "Drive System"
    cost: 4.0
    link: "bldc-motor"
  - name: "Mixing Blades"
    cost: 2.0
    link: "cnc-machine"
  - name: "Control System"
    cost: 3.0
    link: "machine-controller"
  - name: "Vacuum System"
    cost: 2.0
    link: "vacuum-pump"
  - name: "Assembly"
    cost: 2.0
    link: "machinist-labor"
value_created: 9.0
lead_time_days: 33
minimum_order_quantity: 1000
transportation_method: "truck"
geopolitical_risk: "medium"
price_volatility: "medium"

certifications:
  - "ISO9001"
  - "ISO14001"
data_quality: "estimated"
---

## Manufacturing Process

### Vessel Fabrication
1. Select 316L stainless steel sheet material, 8mm thickness for corrosion resistance and structural integrity
2. Cut cylindrical vessel shell sections using CNC plasma cutter with 0.1mm positioning accuracy
3. Roll shell sections using three-roll plate bending machine to achieve 500mm internal diameter
4. TIG weld longitudinal seam with full penetration, argon back-purging at 15 L/min flow rate
5. Radiograph weld seam using X-ray inspection to verify 100% penetration, no porosity
6. Machine bottom dish head from 12mm stainless plate using CNC lathe with torispherical profile
7. Fit bottom head to vessel shell with alignment fixtures maintaining concentricity within 0.5mm
8. TIG weld bottom head circumferential seam with multi-pass technique, 3 passes minimum
9. Dye penetrant test all welds to detect surface-breaking defects, acceptance per ASME standards
10. Machine top flange from 20mm stainless plate with bolt hole pattern, 24 holes on 550mm PCD
11. Machine mating surface of top flange flat within 0.05mm over entire diameter
12. Weld top flange to vessel shell using submerged arc welding for deep penetration
13. Post-weld heat treat entire vessel assembly at 1050°C for stress relief, hold 1 hour
14. Machining internal surface to Ra 0.8 micron finish using internal boring tool
15. Polish internal surface to 150 grit finish for easy cleaning and prevent material buildup

### Heating/Cooling Jacket Design
16. Design dimpled jacket configuration with 15mm gap between inner vessel and outer shell
17. Calculate heat transfer area of 2.5 m² for thermal capacity of 15 kW heating/cooling
18. Form outer jacket shell from 5mm stainless steel, 520mm internal diameter
19. Weld jacket shell sections with continuous seams, leak testing at 10 bar pressure
20. Install jacket inlet/outlet ports with 1.5" NPT threads for thermal fluid connections
21. Pressure test jacket at 15 bar with water, hold 30 minutes, check for leaks
22. Insulate jacket exterior with 50mm mineral wool blanket, thermal conductivity 0.035 W/mK
23. Fabricate stainless steel cladding for insulation protection and aesthetic appearance
24. Install thermocouples at jacket inlet and outlet for temperature monitoring
25. Connect thermal fluid circulation system capable of -20°C to +200°C operating range

### Discharge Valve System
26. Machine discharge port opening in vessel bottom, 100mm diameter for viscous material flow
27. Select butterfly valve with pneumatic actuator for discharge control, 4" size
28. Machine valve seat interface with smooth transition to minimize dead zones
29. Install PTFE seals in valve assembly for chemical compatibility with various compounds
30. Connect pneumatic actuator to compressed air supply at 6 bar operating pressure
31. Install proximity switches on actuator for valve position feedback (open/closed)
32. Design discharge chute with angled surface (45° slope) to direct material flow
33. Polish discharge chute interior to mirror finish (Ra 0.2 micron) for complete evacuation
34. Install quick-disconnect clamp on discharge for easy container attachment
35. Test valve cycling 1000 times with viscous paste (50,000 cP) to verify reliability

### Planetary Gear Train Design
36. Design planetary gear system with sun gear (central), planet gears (orbital), and ring gear
37. Calculate gear ratios: planet rotation 3:1, revolution around vessel 1:1 for optimal mixing
38. Select gear materials: 4340 alloy steel, heat treated to 58 HRC for wear resistance
39. Machine sun gear from solid billet using gear hobbing process, 48 teeth, module 4
40. Machine three planet gears with 24 teeth each, balanced within 0.05g for vibration control
41. Fabricate planet carrier from high-strength aluminum alloy, 7075-T6 specification
42. Machine bearing seats in planet carrier with H7 tolerance for precision fit
43. Install sealed ball bearings in planet carriers, rated for 5000 hour L10 life at operating speed
44. Machine internal ring gear into vessel cover with gear teeth facing downward
45. Perform gear mesh analysis ensuring backlash of 0.15-0.25mm for smooth operation

### Drive System Integration
46. Select servo motor rated 5.5 kW with variable frequency drive for speed control 0-200 RPM
47. Design reduction gearbox with 10:1 ratio to achieve high torque output (2000 Nm)
48. Mount gearbox to heavy-duty support frame with vibration isolation mounts
49. Machine drive shaft from 17-4 PH stainless steel, 60mm diameter, hardened to 40 HRC
50. Install mechanical seal at shaft penetration point, silicon carbide faces for wear resistance
51. Connect shaft coupling between gearbox and planetary gear assembly with misalignment compensation
52. Install shaft encoder for precise speed feedback, 2048 pulses per revolution resolution
53. Design bearing housing for main drive shaft using tapered roller bearings
54. Calculate bearing life ensuring minimum 20,000 hours L10 life at maximum load
55. Install torque sensor in drive train measuring 0-2500 Nm with 0.1% accuracy

### Blade Design - HV (High Viscosity) Configuration
56. Design HV blade with helical sweep angle of 45° for axial and radial flow patterns
57. Calculate blade tip speed of 3.5 m/s at 100 RPM for viscosity range 50,000-500,000 cP
58. Machine HV blade from solid stainless steel bar stock using 5-axis CNC milling
59. Profile blade edge with rectangular cross-section, 15mm wide, 6mm thick
60. Design blade attachment system using quick-change mechanism, tool-less removal in 30 seconds
61. Balance blade assembly statically and dynamically to within 5g-mm residual unbalance
62. Install PTFE scraper edge on blade trailing edge for wall cleaning action
63. Design adjustable blade clearance system allowing 1-3mm gap from vessel wall
64. Fabricate two HV blades at 180° opposing positions for balanced loading
65. Electropolish blade surfaces to Ra 0.3 micron finish reducing particle generation

### Blade Design - Helical Configuration
66. Design helical blade with continuous spiral form, 360° twist over blade length
67. Calculate pitch of helix at 200mm for optimal vertical material transport
68. Machine helical blade using CNC wire EDM from 8mm stainless steel plate
69. Design blade width tapering from 40mm at base to 20mm at tip for flow optimization
70. Install blade at 15° angle from vertical for enhanced bottom-sweeping action
71. Perform CFD analysis of helical blade showing 95% vessel volume turnover per revolution
72. Design helical blade mounting hub with splined connection for torque transfer
73. Install four helical blades at 90° spacing around planetary orbit
74. Verify helical blade clearance maintains 2mm gap during full planetary motion
75. Load test helical blade configuration with 200 kg batch of adhesive paste (100,000 cP)

### Blade Design - Sigma Configuration
76. Design sigma blade with characteristic S-shape profile for high-shear kneading action
77. Calculate sigma blade overlap creating 0.5mm minimum gap at closest approach point
78. Machine two sigma blades as mirror images for counter-rotating operation
79. Design sigma blade tip geometry with 5mm radius to prevent material cutting
80. Fabricate sigma blades from tool steel, H13 grade, hardened to 52 HRC
81. Install hardened wear surfaces on blade edges using tungsten carbide coating
82. Design sigma blade drive system with synchronized counter-rotation at 2:3 speed ratio
83. Balance sigma blade pair to minimize vibration at operating speed up to 60 RPM
84. Test sigma blade configuration with 300 kg batch of dough-like compound (500,000 cP)
85. Measure power consumption of sigma configuration: 4.2 kW at full load, 40 RPM

### Vacuum System Integration
86. Design vacuum chamber by sealing top cover with silicone gasket, shore A 60 hardness
87. Machine vacuum port in top cover, 2" diameter for vacuum line connection
88. Select rotary vane vacuum pump rated 100 m³/h capacity achieving 1 mbar ultimate pressure
89. Install vacuum gauge on chamber measuring 1000 to 0.1 mbar range with digital display
90. Design vacuum release valve for controlled venting at end of degassing cycle
91. Install cold trap between mixer and vacuum pump to condense volatile solvents
92. Size vacuum line at 50mm (2") diameter to minimize pressure drop at high flow rates
93. Install vacuum-rated sight glass in top cover for visual observation during mixing
94. Design vacuum interlock preventing discharge valve operation under vacuum conditions
95. Test vacuum system achieving 5 mbar absolute pressure in 3 minutes with empty vessel

### Vacuum Seal Design
96. Machine seal groove in top flange with trapezoidal profile for O-ring retention
97. Select Viton O-ring for high temperature resistance (-20°C to +200°C range)
98. Calculate O-ring compression at 15-20% squeeze for optimal sealing performance
99. Design shaft penetration seal with double lip configuration for redundant sealing
100. Install spring-energized PTFE seal at rotating shaft for vacuum service
101. Design purge gas system for shaft seal with nitrogen at 0.5 bar pressure
102. Machine smooth seal mating surfaces with Ra 0.4 micron finish maximum
103. Install quick-clamp closure system on top cover allowing 30-second opening/closing
104. Test seal integrity by helium leak detection achieving leak rate < 1×10⁻⁶ mbar·L/s
105. Verify seal maintains vacuum during mixing operation with material batch loaded

### Control System Architecture
106. Design PLC-based control system using Allen-Bradley CompactLogix processor
107. Program ladder logic for sequential operation: load, mix, vacuum, discharge cycles
108. Install 10" color touchscreen HMI for operator interface with recipe management
109. Create recipe database storing 100 recipes with parameters: speed, time, temperature, vacuum
110. Implement PID control loops for temperature regulation, setpoint accuracy ±1°C
111. Program speed ramping function with adjustable acceleration rate 0-100 RPM in 10 seconds
112. Install emergency stop circuit with dual-channel safety relay meeting Category 3 standards
113. Design interlock logic preventing cover opening while mixer is in motion
114. Install audible alarm and beacon light for fault conditions and cycle completion
115. Implement data logging system recording all process parameters at 1-second intervals

### Torque Monitoring System
116. Install strain gauge torque sensor on main drive shaft with wireless signal transmission
117. Calibrate torque sensor using deadweight loading to NIST-traceable standard
118. Program torque display on HMI showing real-time value and trend graph
119. Set torque alarm thresholds at 80% and 90% of motor rated capacity
120. Implement torque-based mixing endpoint detection using derivative algorithm
121. Design torque overload protection automatically reducing speed when limit exceeded
122. Log torque data versus time for batch documentation and quality records
123. Correlate torque readings with material viscosity for rheological characterization
124. Install torque limiter in drive train preventing mechanical damage, set at 2200 Nm
125. Verify torque measurement accuracy at ±2% of reading across full scale range

### Speed Control System
126. Install variable frequency drive (VFD) controlling motor speed 0-1800 RPM
127. Program VFD parameters: acceleration time 10s, deceleration time 15s, current limit 125%
128. Design multi-speed operation with three preset speeds: 30, 60, 100 RPM
129. Implement speed feedback loop using encoder maintaining setpoint within ±0.5 RPM
130. Create slow-speed jog mode at 5 RPM for material loading and blade positioning
131. Program speed profiling capability for time-based speed changes during mix cycle
132. Install speed display on HMI showing actual RPM versus setpoint
133. Design speed limiting function preventing operation above rated maximum (200 RPM)
134. Implement soft start function gradually ramping speed to prevent material splashing
135. Test speed regulation under varying load conditions maintaining ±1% accuracy

### Viscosity Measurement Integration
136. Install in-line viscosity sensor in discharge line measuring 100 to 1,000,000 cP range
137. Design viscosity sensor mounting with sanitary tri-clamp connection for easy removal
138. Calibrate viscosity sensor using certified reference fluids at multiple viscosity points
139. Program viscosity display on HMI with engineering units (cP or Pa·s)
140. Implement viscosity-based process control adjusting mixing time automatically
141. Design viscosity alarm function alerting operator when value exceeds specification
142. Log viscosity data throughout mixing cycle for quality documentation
143. Correlate viscosity with torque readings to validate measurement accuracy
144. Install temperature compensation in viscosity calculation for accurate results
145. Verify viscosity measurement accuracy at ±5% of reading against laboratory rheometer

### CIP (Clean-in-Place) System
146. Design spray ball assembly with 8 nozzles providing 360° coverage of vessel interior
147. Calculate CIP flow rate requirement of 150 L/min for effective surface wetting
148. Install dedicated CIP pump rated 5 bar pressure, 200 L/min capacity
149. Design CIP solution heating system maintaining 80°C temperature for cleaning effectiveness
150. Program CIP sequence: pre-rinse (5 min), caustic wash (20 min), rinse (10 min), acid wash (15 min), final rinse (10 min)
151. Install conductivity sensor in CIP return line verifying complete rinse (< 50 μS/cm)
152. Design CIP solution tank capacity of 500 liters for complete cleaning cycle
153. Install automatic divert valve directing CIP return to drain or recirculation
154. Implement CIP validation protocol documenting temperature, concentration, and duration
155. Test CIP effectiveness by swab sampling achieving <10 μg/cm² residue level

### Explosion-Proof Configuration (Optional)
156. Select Class I, Division 1, Group D explosion-proof motor for hazardous environments
157. Install intrinsically safe barriers for all instrumentation signals entering hazardous area
158. Design purged and pressurized control panel maintaining positive pressure with inert gas
159. Select explosion-proof pushbuttons and pilot lights rated for Class I, Division 1
160. Install flame arrestor on vacuum system vent preventing ignition source propagation
161. Design bonding and grounding system with resistance < 10 ohms to earth
162. Install explosion-proof lighting inside vessel rated for Class I, Division 1
163. Implement nitrogen blanket system maintaining inert atmosphere in vessel headspace
164. Install static electricity dissipation system on all non-conductive components
165. Certify installation by third-party inspection meeting NEC Article 500 requirements

### Instrumentation and Sensors
166. Install RTD temperature sensors (PT100) in vessel wall with 0.1°C resolution
167. Design pressure transducer for vacuum measurement with 4-20mA output signal
168. Install level sensor detecting minimum batch size for safe mixer operation
169. Design vibration sensor on bearing housing for predictive maintenance monitoring
170. Install power meter measuring motor current and power consumption
171. Implement batch weight system using load cells under mixer base, 1000 kg capacity
172. Design material flow meter on discharge line measuring volumetric flow rate
173. Install humidity sensor in control panel preventing condensation damage
174. Design tank high-level alarm preventing overfilling during material loading
175. Install proximity switches on all safety interlocks for positive position indication

### Frame and Support Structure
176. Design heavy-duty support frame from structural steel, I-beam construction
177. Calculate frame loading for 800 kg total weight (mixer + batch + dynamic forces)
178. Fabricate frame from A36 carbon steel with welded construction
179. Design adjustable feet with leveling pads for installation on uneven floors
180. Install vibration isolation pads under frame feet reducing transmission to building
181. Apply industrial epoxy coating to frame for corrosion protection
182. Design access platform with handrails for operator access to top cover
183. Fabricate ladder meeting OSHA standards with slip-resistant treads
184. Install equipment guards around rotating components per ANSI B11.19
185. Design lifting lugs on mixer body rated for 1500 kg safe working load

### Final Assembly and Testing
186. Assemble planetary gear train to vessel cover verifying smooth rotation by hand
187. Install drive motor and gearbox aligning coupling within 0.1mm parallel and angular misalignment
188. Connect all electrical wiring per schematic using color-coded wires and numbered terminals
189. Install pneumatic tubing for discharge valve using 8mm polyurethane tubing
190. Perform bump test of motor verifying correct rotation direction (counterclockwise viewed from top)
191. Commission control system executing all functions: start, stop, speed change, emergency stop
192. Conduct mechanical run-in test operating mixer empty for 4 hours at 50% speed
193. Perform performance acceptance test with water batch measuring power and temperature
194. Conduct production trial with actual customer material verifying mixing performance
195. Create final documentation package including drawings, manual, spare parts list, and test reports

## Technical Specifications

**Batch Capacity:** 50-300 liters working volume (400 liter total vessel capacity)

**Viscosity Range:** 50 cP to 6,000,000 cP (depending on blade configuration)

**Speed Range:** 5-200 RPM (variable frequency drive)

**Tip Speed:** 0.2-4.5 m/s (configuration dependent)

**Vacuum Level:** Ultimate vacuum 1 mbar absolute pressure

**Temperature Range:** -20°C to +200°C (with heating/cooling jacket)

**Power Requirements:** 5.5 kW motor, 480V 3-phase 60Hz

**Discharge Height:** 900mm above floor level

**Mixing Patterns:** Planetary motion provides complex 3D flow with blade revolution and rotation

**Material Contact:** 316L stainless steel, electropolished to Ra 0.4 micron finish

