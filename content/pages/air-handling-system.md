---
title: "Air Handling Unit"
company: "Carrier Global"
country: "United States"
selling_price: 40.0
inputs:
  - name: "Sheet Metal Housing"
    cost: 5.0
    link: "stainless-steel-sheet"
  - name: "Blower Assembly"
    cost: 4.0
    link: "bldc-motor"
  - name: "Cooling Coils"
    cost: 3.0
    link: "copper-tube"
  - name: "HEPA Filters"
    cost: 3.0
    link: "polyester-film"
  - name: "Control System"
    cost: 4.0
    link: "machine-controller"
  - name: "Assembly"
    cost: 3.0
    link: "machinist-labor"
value_created: 18.0
---

## 195 Steps to Manufacture an Air Handling Unit

### Phase 1: Housing Fabrication (Steps 1-25)

1. Review AHU specifications: 10,000-50,000 CFM capacity, cleanroom ISO Class 5-8 compliance requirements
2. Select 304 stainless steel sheet metal 14-16 gauge for corrosion resistance and structural integrity
3. Program CNC plasma cutter to cut housing panels: base, top, side walls, access doors
4. Cut base panel 96" x 48" x 0.075" with mounting hole patterns on 24" centers
5. Cut four side wall panels 96" x 72" for standard commercial AHU configuration
6. Cut top panel with reinforcement ribs to support filter bank weight (500-800 lbs)
7. Form 90-degree bends on panel edges using hydraulic press brake with 10-ton force
8. Create hemmed edges on access panels for safety and structural rigidity
9. Punch mounting holes for filter tracks, fan mounts, and coil supports using turret punch
10. Deburr all cut edges with rotary deburring tool to prevent injury and improve sealing
11. Clean panels with alkaline cleaner to remove cutting oils and metal particles
12. Apply zinc-rich primer to interior surfaces for corrosion protection in humid environments
13. Weld corner joints using TIG welding with ER308L filler rod for clean, strong welds
14. Grind weld seams flush to eliminate potential particle generation sites
15. Seal all seams with silicone caulk rated for -40°F to 400°F temperature range
16. Install 2" thick polyurethane foam insulation panels on interior walls (R-13 rating)
17. Secure insulation with mechanical fasteners and adhesive to prevent sagging over time
18. Install stainless steel liner panels over insulation to create smooth, cleanable interior
19. Fabricate removable access doors 24" x 36" with piano hinges and compression latches
20. Install EPDM gaskets on all access doors to maintain pressure differential (±0.5" W.C.)
21. Mount vibration isolation rails on base panel using spring isolators rated for 500 lbs each
22. Install condensate drain pan at lowest point with 1/4" per foot slope to drain
23. Fabricate duct connection flanges 24" diameter with bolt hole pattern per SMACNA standards
24. Weld supply and return air flanges to housing with proper orientation and alignment
25. Pressure test completed housing to 2.0" W.C. for 10 minutes, leak rate <3% per ASHRAE 111

### Phase 2: Blower and Fan Assembly (Steps 26-45)

26. Select backward-curved centrifugal fan for efficiency: 10,000 CFM at 4" static pressure
27. Specify fan with aluminum airfoil blades for low noise (<75 dBA at 3 feet)
28. Choose direct-drive BLDC motor 15 HP, 1750 RPM, 460V 3-phase for variable speed control
29. Mount motor on adjustable slide rails for belt tension adjustment (if belt-drive configuration)
30. Install motor base isolators: neoprene pads with 90% vibration isolation at operating frequency
31. Position fan housing inlet 12" from AHU wall to allow proper air distribution
32. Secure fan assembly to structural steel frame using 1/2" grade 8 bolts with lock washers
33. Install fan inlet cone with 15-degree taper to reduce turbulence and improve efficiency
34. Connect motor electrical leads to VFD output terminals with properly sized conductors (12 AWG)
35. Install motor thermal overload protection set at 115% of full load amperage
36. Mount vibration sensors on fan bearings to enable condition-based maintenance monitoring
37. Lubricate fan bearings with high-temperature grease (NLGI Grade 2) per manufacturer schedule
38. Balance fan assembly dynamically to <0.1 in/sec vibration velocity per ISO 10816
39. Install fan discharge diffuser to convert velocity pressure to static pressure efficiently
40. Fabricate and install fan access door with clear polycarbonate window for visual inspection
41. Install airflow measurement station 4 duct diameters downstream of fan with pitot tube array
42. Connect differential pressure transmitter 0-5" W.C. range with 4-20mA output signal
43. Install fan inlet guard screen 1/2" mesh to prevent debris entry and personnel safety
44. Route motor power cables through flexible conduit to prevent electrical interference
45. Test fan performance: verify 10,000 CFM at 4" S.P. draws 12.5 kW (83% total efficiency)

### Phase 3: Variable Frequency Drive Installation (Steps 46-60)

46. Mount VFD in NEMA 12 enclosure separate from AHU to minimize heat and vibration exposure
47. Select VFD rated 125% of motor full load current with built-in harmonic filtering
48. Install VFD 20 HP, 460V 3-phase input, with sensorless vector control for precise speed regulation
49. Connect input power through 30A circuit breaker and disconnect switch for safety isolation
50. Install line reactor on VFD input to reduce harmonic distortion to <5% THD per IEEE 519
51. Route motor leads through shielded VFD cable to minimize electromagnetic interference (EMI)
52. Ground VFD chassis and motor frame to building ground with <5 ohm resistance
53. Program VFD parameters: minimum speed 30% (300 CFM/HP), maximum speed 100%
54. Set acceleration ramp to 30 seconds to prevent motor inrush current and mechanical shock
55. Set deceleration ramp to 60 seconds to avoid negative pressure surge in ductwork
56. Configure PID control loop: proportional gain 0.5, integral time 120 seconds, derivative 0
57. Set VFD to maintain constant static pressure at 2.5" W.C. in supply duct under varying loads
58. Install regenerative braking resistor to dissipate energy during fan deceleration cycles
59. Connect VFD fault output to building management system for remote alarm monitoring
60. Test VFD operation: verify smooth speed changes from 30% to 100% without motor stall

### Phase 4: Cooling Coil Installation (Steps 61-80)

61. Select chilled water cooling coil 8 rows deep, 10 fins per inch for 300 tons cooling capacity
62. Specify copper tubes 5/8" OD with 0.025" wall thickness, aluminum fins for corrosion resistance
63. Order coil with 1.5" IETC (inlet-entering tube connections) for 60°F chilled water supply
64. Fabricate coil support frame from structural steel angle iron 2" x 2" x 1/4" wall
65. Position coil at 30-degree angle to promote condensate drainage and prevent water carryover
66. Install coil in AHU with airflow direction perpendicular to tube orientation for maximum efficiency
67. Connect supply water piping 3" copper with brazed joints and type L wall thickness
68. Install water inlet header with balancing valves on each circuit for uniform water distribution
69. Connect return water piping with P-trap to maintain water seal under negative pressure
70. Install automatic air vents at high points in coil to prevent air binding and reduced capacity
71. Mount coil leaving air temperature sensor 12" downstream in center of air stream
72. Install condensate drain pan under coil with minimum 1/2" depth to catch 10 GPM condensate
73. Slope drain pan 1/4" per foot toward drain outlet to prevent standing water and microbial growth
74. Connect drain line 2" PVC schedule 40 with P-trap to prevent odor transmission
75. Install thermostatic expansion valve (if DX coil) sized for 30 tons with R-410A refrigerant
76. Insulate all cold water piping with 1" thick elastomeric foam (K-factor 0.27) to prevent condensation
77. Install vibration isolation connectors on water lines to prevent pipe movement transmission
78. Pressure test water coil to 150 PSI for 4 hours, no visible leaks or pressure drop
79. Flush coil with clean water at 5 FPS velocity to remove manufacturing debris and flux residue
80. Verify coil capacity: 300 tons cooling at 10°F temperature difference, 60 GPM water flow

### Phase 5: Heating Coil Integration (Steps 81-95)

81. Select hot water heating coil 4 rows deep, 8 fins per inch for 150 kW heating capacity
82. Specify steam coil alternative: 15 PSI saturated steam, 2000 lbs/hr for 100°F temperature rise
83. Position heating coil downstream of cooling coil to provide sequential temperature control
84. Install heating coil with horizontal tube orientation for proper steam condensate drainage
85. Connect steam supply line 2" schedule 40 steel pipe with threaded unions for maintenance
86. Install steam pressure reducing valve to maintain 10 PSI coil inlet pressure
87. Mount steam trap (inverted bucket type) at coil outlet to remove condensate continuously
88. Install vacuum breaker on coil to prevent negative pressure during steam condensation
89. Connect condensate return line with pitch toward steam trap (minimum 1" per 10 feet)
90. Install modulating steam control valve with electric actuator (24V, 0-10V control signal)
91. Mount discharge air temperature sensor in mixed air stream 24" downstream of coil
92. Install high-limit safety thermostat set at 120°F to prevent overheating and downstream damage
93. Insulate steam piping with 2" calcium silicate insulation and aluminum jacket
94. Pressure test steam system to 25 PSI with compressed air, soap bubble leak detection
95. Commission heating system: verify 100°F temperature rise at design airflow 10,000 CFM

### Phase 6: HEPA/ULPA Filter Bank Installation (Steps 96-115)

96. Design filter bank for ISO Class 5 cleanroom: 99.999% efficiency at 0.1-0.3 micron particles
97. Select HEPA filters 24" x 24" x 12" deep with gel-seal gaskets for zero bypass leakage
98. Calculate required filter quantity: 16 filters for 10,000 CFM at 500 FPM face velocity
99. Fabricate filter housing from 304 stainless steel with clamping frame for each filter
100. Install filter tracks with spring-loaded clamps to maintain 50 lbs compression on gaskets
101. Position filters in 4x4 array configuration with structural support every 4 feet
102. Install pre-filter bank upstream: MERV 14 filters to extend HEPA filter life to 2-3 years
103. Mount magnehelic differential pressure gauges 0-2" W.C. across filter banks
104. Install photohelic switches to alarm at 1.5" W.C. filter pressure drop (filter change required)
105. Fabricate gel seal channel around filter opening to ensure knife-edge seal integrity
106. Apply silicone gel sealant in continuous bead around perimeter of each filter frame
107. Insert HEPA filters into housing and engage clamping mechanism with 200 lbs force
108. Perform DOP aerosol challenge test at 99.999% efficiency using 0.3 micron particles
109. Scan filter face and frame perimeter with photometer probe to detect leaks >0.001%
110. Seal any detected leaks with additional silicone gel compound and re-test
111. Install final HEPA filter bank at ceiling level in cleanroom for laminar downflow
112. Verify laminar airflow velocity 90 FPM ±20% uniformity across cleanroom work surface
113. Install particle counter sampling ports downstream of filters at 4 locations
114. Conduct particle count test: <3520 particles ≥0.5 micron per cubic meter (ISO Class 5)
115. Document filter serial numbers, installation date, and initial pressure drop in maintenance log

### Phase 7: Mixing Box and Damper Installation (Steps 116-130)

116. Fabricate mixing box section 48" x 48" x 60" long to blend outdoor air and return air
117. Install outdoor air intake damper 24" x 48" with opposed blade design for linear control
118. Select damper with extruded aluminum blades and stainless steel linkage (corrosion resistant)
119. Mount return air damper 24" x 48" in parallel configuration for economizer operation
120. Install exhaust air damper 18" x 36" to maintain building pressure during economizer mode
121. Connect dampers to electric actuators (24V, 0-10V control) with 90-second stroke time
122. Install outdoor air temperature sensor (RTD Pt1000) in weatherproof enclosure
123. Mount return air temperature sensor 12" upstream of mixing box in center of duct
124. Install enthalpy sensors in outdoor and return air streams for economizer control optimization
125. Position mixed air temperature sensor 24" downstream of mixing box for stable reading
126. Install minimum outdoor air flow station with airflow sensor to maintain ASHRAE 62.1 ventilation
127. Program minimum outdoor air damper position at 20% (2,000 CFM) for code compliance
128. Install damper end switches to confirm full open/closed positions for safety interlocks
129. Test damper operation: verify smooth modulation from 0-100% without binding or noise
130. Commission economizer sequence: free cooling when OAT <65°F and enthalpy favorable

### Phase 8: Humidification System (Steps 131-145)

131. Select ultrasonic humidifier with 50 lbs/hr capacity to maintain 45% ±5% relative humidity
132. Alternative: install steam injection humidifier with dispersion tube manifold in duct
133. Position humidifier downstream of heating coil to prevent moisture condensation on cold surfaces
134. Install RO water supply line 1/2" copper with pressure regulator set at 60 PSI
135. Mount humidistat controller with ±2% RH accuracy in representative zone location
136. Install duct-mounted humidity sensor (capacitive type) with ±3% accuracy at 20-80% RH
137. Connect steam dispersion manifold 2" stainless steel with 12 orifices evenly spaced
138. Install high-limit humidistat set at 60% RH to prevent over-humidification and condensation
139. Mount condensate drain pan 24" downstream of dispersion tube to catch unevaporated moisture
140. Install humidifier control valve (electric modulating) with 0-10V control signal from BMS
141. Insulate steam supply line to humidifier with 1" fiberglass wrap to prevent heat loss
142. Install water quality sensor to monitor TDS (total dissolved solids) <50 PPM for ultrasonic type
143. Program humidifier staging: 0-100% modulation based on space humidity deviation from setpoint
144. Install drain line flush valve to prevent mineral buildup in humidifier sump (ultrasonic)
145. Test humidification system: verify 45% RH maintained with ±5% deviation under varying loads

### Phase 9: Control System and BMS Integration (Steps 146-165)

146. Install programmable logic controller (PLC) in NEMA 12 enclosure with Ethernet communication
147. Select PLC with 32 digital inputs, 24 digital outputs, 16 analog inputs (4-20mA), 8 analog outputs
148. Wire all temperature sensors to PLC analog inputs using shielded twisted pair cable
149. Connect humidity sensors, pressure sensors, and airflow sensors to remaining analog inputs
150. Wire VFD speed control output from PLC analog output (0-10V DC signal)
151. Connect damper actuator control signals from PLC analog outputs (0-10V for modulation)
152. Wire valve actuators for cooling, heating, and humidification to PLC analog outputs
153. Connect fan status, VFD fault, filter alarms to PLC digital inputs for monitoring
154. Wire safety interlocks: smoke detector, freeze stat, high-limit thermostat to emergency shutdown input
155. Install touchscreen HMI (human-machine interface) 10" color display for local control
156. Program PID control loops for space temperature, humidity, and static pressure control
157. Configure supply air temperature reset based on outdoor air temperature (65°F at 70°F OAT)
158. Set up demand-controlled ventilation based on CO2 sensor reading (maintain <1000 PPM)
159. Program night setback schedule: reduce airflow to 30% minimum during unoccupied hours
160. Install BACnet/IP gateway to integrate AHU controls with building management system
161. Map all sensor points, alarms, and control outputs to BACnet objects for remote monitoring
162. Configure trending for key parameters: supply temp, space temp, humidity, static pressure, VFD speed
163. Set up email/SMS alarm notifications for critical faults: fan failure, filter alarm, freeze condition
164. Program optimal start algorithm to precondition space before occupancy based on outside temp
165. Test BMS integration: verify all points readable and writable from central operator workstation

### Phase 10: Ductwork Design and Fabrication (Steps 166-175)

166. Design supply duct system using equal friction method: 0.1" W.C. per 100 feet at 2000 FPM
167. Size main supply duct 36" x 24" rectangular to deliver 10,000 CFM at design velocity
168. Fabricate ductwork from 22-gauge galvanized steel per SMACNA standards
169. Install turning vanes in all elbows to reduce pressure loss by 50% and improve airflow distribution
170. Mount duct supports every 10 feet using adjustable steel trapeze hangers
171. Seal all longitudinal and transverse joints with mastic sealant per SMACNA Seal Class A
172. Install flexible duct connectors 6" long at AHU connections to isolate vibration transmission
173. Insulate supply ductwork with 2" thick fiberglass duct wrap (R-8) with vapor barrier jacket
174. Install volume dampers in branch ducts for air balancing at each zone
175. Fabricate supply diffusers with perforated face for low velocity discharge (<500 FPM)

### Phase 11: Air Balancing and Commissioning (Steps 176-185)

176. Install calibrated pitot tube traverse in main supply duct to measure total airflow
177. Measure static pressure at fan discharge: verify 4.0" W.C. at design airflow 10,000 CFM
178. Traverse main duct at 16 measurement points: calculate average velocity 2000 FPM
179. Measure airflow at each supply diffuser using flow hood: verify within ±10% of design
180. Adjust volume dampers in branch ducts to achieve design airflow distribution
181. Measure return airflow using flow hood at grilles: verify total matches supply within 5%
182. Check building pressure with digital manometer: maintain +0.05" W.C. relative to outside
183. Verify outdoor air intake: measure minimum 2,000 CFM (20% of total) at all operating conditions
184. Test static pressure control: verify VFD modulates fan speed to maintain 2.5" W.C. setpoint
185. Balance exhaust airflow to maintain building pressure during economizer mode operation

### Phase 12: Temperature and Humidity Control Verification (Steps 186-195)

186. Set space temperature setpoint to 72°F: verify control system maintains ±1°F deviation
187. Introduce step change in cooling load: verify system returns to setpoint within 15 minutes
188. Test heating mode: verify discharge air temperature rises to 95°F with outdoor air at 0°F
189. Test cooling mode: verify discharge air temperature drops to 55°F with outdoor air at 95°F
190. Set humidity setpoint to 45% RH: verify control system maintains ±5% deviation over 24 hours
191. Test humidification capacity: verify system can raise space RH from 30% to 45% within 2 hours
192. Test dehumidification: verify cooling coil removes moisture to maintain 45% RH at high latent loads
193. Conduct particle count test at design airflow: verify ISO Class 5 compliance (<3520 particles/m³)
194. Perform 24-hour continuous operation test: monitor all parameters for stability and alarm conditions
195. Document as-built performance data and create maintenance schedule for filters (quarterly), coils (annually), bearings (semi-annually)