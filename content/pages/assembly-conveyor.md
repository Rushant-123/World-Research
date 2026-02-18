---
title: "Assembly Line Conveyor"
company: "Bosch Rexroth"
country: "Germany"
selling_price: 15.0
inputs:
  - name: "Aluminum Extrusion"
    cost: 2.0
    link: "aluminum-billet"
  - name: "Belt Material"
    cost: 1.0
    link: "synthetic-rubber"
  - name: "Drive Motors"
    cost: 1.5
    link: "bldc-motor"
  - name: "Sensors"
    cost: 0.8
    link: "proximity-sensor"
  - name: "Control System"
    cost: 1.5
    link: "machine-controller"
  - name: "Assembly"
    cost: 1.5
    link: "machinist-labor"
value_created: 6.7
lead_time_days: 44
minimum_order_quantity: 1000
transportation_method: "ocean"
geopolitical_risk: "low"
price_volatility: "medium"

certifications:
  - "ISO9001"
  - "ISO14001"
data_quality: "estimated"
---

## System Requirements Definition

1. Define conveyor application requirements: electronics assembly, final product packaging, or component staging with throughput targets of 30-120 units per minute.
2. Specify payload capacity: 0.5-50 kg per workpiece depending on product weight (PCBs 0.5 kg, laptops 2 kg, monitors 8 kg, servers 20 kg).
3. Determine line length: 5-50 meter modular sections with expansion capability for future production increases.
4. Calculate accumulation requirements: buffer capacity of 10-50 units to prevent line starvation during temporary workstation stops.
5. Define positional accuracy: ±2 mm for automated assembly stations, ±5 mm for manual workstations, ±0.5 mm for vision-guided operations.
6. Specify speed range: 5-60 meters per minute continuously variable with acceleration rates of 0.2-0.8 m/s² for smooth product handling.
7. Establish noise limits: <70 dBA in assembly areas per occupational health standards for 8-hour worker exposure.
8. Define cleanroom compatibility: ISO Class 6-8 materials (stainless steel, anodized aluminum) with low particle generation for sensitive electronics.
9. Specify ESD protection requirements: surface resistivity of 10⁴-10⁶ ohms/square for static-sensitive component handling.
10. Determine environmental conditions: operating temperature 15-35°C, humidity 30-70% RH, minimal dust and chemical exposure.

## Modular Frame Design

11. Select aluminum profile system: 40x40 mm or 45x45 mm T-slot extrusion with 8 mm slots for modular accessory mounting.
12. Design base frame structure: longitudinal beams every 1000 mm with cross-members every 500 mm for rigidity and minimal deflection (<1 mm at center).
13. Calculate frame loading: support distributed loads of 50-200 kg/meter plus concentrated loads at workstation positions.
14. Specify profile material: 6063-T5 aluminum alloy with anodized finish providing corrosion resistance and 190 MPa tensile strength.
15. Design leveling foot assemblies: M12 or M16 threaded adjusters with 50-80 mm height adjustment range and locknut stabilization.
16. Select T-slot fasteners: drop-in nuts, hammer nuts, or roll-in spring nuts rated for 500-1500 N holding force depending on joint.
17. Design corner brackets: die-cast zinc or machined aluminum plates with 90° reinforcement preventing frame racking under lateral loads.
18. Specify profile cutting: precision saw cutting to ±0.5 mm tolerance with deburred edges and clean T-slots for assembly.
19. Apply surface treatment: anodize aluminum profiles to 10-15 micron thickness (clear or black) providing wear resistance and ESD properties.
20. Design access panels: removable side panels at 1000 mm intervals allowing maintenance access to drive mechanisms and electrical components.

## Belt Transport System Design

21. Select belt type for light loads: thermoplastic polyurethane (TPU) or polyvinyl chloride (PVC) belts 1-3 mm thick for products <5 kg.
22. Choose belt width: 100-800 mm based on product dimensions with 50 mm clearance on each side for stability during transport.
23. Specify belt surface: smooth for flat-bottom products, textured for grip on inclines, or perforated for vacuum hold-down applications.
24. Calculate belt tension: 50-150 N initial tension maintaining contact with drive pulley and preventing slippage under load.
25. Design drive pulley: 50-100 mm diameter aluminum drum with crowned surface (1-2° taper) centering belt during operation.
26. Select tail pulley configuration: adjustable tensioning mechanism with spring-loaded or screw adjustment providing 25-50 mm belt take-up.
27. Specify belt splice method: hot vulcanized joint for endless belts or mechanical fasteners (Flexco, Clipper) for rapid field replacement.
28. Design support bed: low-friction UHMW polyethylene strips or aluminum wear strips every 150-300 mm supporting belt underside.
29. Calculate belt speed: 5-60 m/min variable speed providing throughput of 30-120 units/minute based on product spacing.
30. Select belt material for ESD: conductive TPU with carbon black additive achieving surface resistivity of 10⁴-10⁶ ohms/square.

## Chain and Pallet Conveyor Design

31. Design pallet system for heavy products: individual carriers (150x200 mm to 400x600 mm) riding on dual-strand roller chain.
32. Select chain type: ANSI 40, 50, or 60 roller chain with stainless steel or zinc-plated construction for corrosion resistance.
33. Calculate chain pitch: 12.7 mm (ANSI 40), 15.875 mm (ANSI 50), or 19.05 mm (ANSI 60) based on load and speed requirements.
34. Design pallet construction: machined aluminum plate 10-15 mm thick with dowel pin or fixture mounting holes for product nesting.
35. Specify chain guides: UHMW polyethylene wear strips or stainless steel angle guides maintaining chain alignment through curves and transfers.
36. Calculate chain tension: minimum 10% of breaking strength (typically 200-500 N) preventing chain sagging between support points.
37. Design chain take-up: screw or spring-loaded tensioner providing 50-100 mm adjustment range compensating for chain stretch over time.
38. Select chain lubrication: dry-film lubricant or oil-impregnated bushings minimizing contamination in clean assembly environments.
39. Specify pallet spacing: 500-1500 mm center-to-center providing 10-30 second work cycle time at manual assembly stations.
40. Design pallet return system: dual-level configuration with product-carrying upper strand and empty pallet return underneath reducing floor space.

## Drive Motor Selection and Sizing

41. Calculate drive power requirements: P = (F × v) / η where F is belt/chain tension (N), v is speed (m/s), η is efficiency (0.85-0.92).
42. Select motor type: brushless DC (BLDC) motors 0.2-2.0 kW providing precise speed control and maintenance-free operation.
43. Specify gear reduction: inline planetary or helical gearboxes with 10:1 to 50:1 ratios reducing motor speed to optimal conveyor range.
44. Calculate drive torque: T = (F × D) / 2 where F is belt tension (N) and D is pulley diameter (m), typical values 5-50 Nm.
45. Design belt drive transmission: toothed timing belt (HTD 5M or 8M pitch) connecting motor to drive pulley with zero-backlash synchronization.
46. Select motor mounting: NEMA frame adapter plates or IEC flange mounting with anti-rotation torque arms preventing motor rotation.
47. Specify motor brake: DC-injected holding brake or permanent magnet brake providing 5-20 Nm holding torque for emergency stops.
48. Calculate motor inertia ratio: load inertia to motor inertia ratio <10:1 for optimal acceleration and positioning performance.
49. Design drive location: head-drive (end mounted) for simple installations, center-drive for longer conveyors reducing belt tension.
50. Specify motor protection: IP54 or IP65 rating protecting against dust and water spray in industrial assembly environments.

## Speed Control System

51. Select variable frequency drive (VFD): 230V single-phase or 400V three-phase input, 0.2-2.0 kW output matching motor rating.
52. Program speed range: 0-100% continuously variable with 0.1 Hz resolution providing precise throughput control.
53. Specify acceleration ramps: 1-5 second ramp-up and ramp-down preventing product tipping and minimizing mechanical shock.
54. Design control interface: analog 0-10V or 4-20 mA speed reference input from PLC or potentiometer for operator adjustment.
55. Implement PID speed regulation: closed-loop control using encoder feedback maintaining ±0.5% speed accuracy under varying loads.
56. Select speed feedback device: incremental encoder 1000-2500 pulses per revolution mounted on motor shaft or drive pulley.
57. Program multi-speed presets: 3-8 stored speed settings (jog, slow, medium, fast) selectable via digital inputs or HMI.
58. Specify emergency stop response: motor brake engages and drive output disables within 200 milliseconds of E-stop activation.
59. Implement soft-start function: gradual voltage/frequency increase preventing mechanical shock and extending motor life by 2-3x.
60. Design overload protection: current monitoring with 120-150% trip threshold protecting motor and gearbox from jam conditions.

## Accumulation Zone Design

61. Define accumulation strategy: zero-pressure accumulation preventing product damage during temporary line stops at downstream stations.
62. Design pneumatic lift gates: air cylinders raising 50-100 mm sections of belt creating product staging areas without back-pressure.
63. Calculate accumulation capacity: buffer 10-50 units per zone providing 20-60 seconds of production time during workstation pauses.
64. Select photoeye sensors: diffuse or retroreflective photoelectric sensors with 50-300 mm range detecting product presence at zone boundaries.
65. Program zone logic: upstream zone stops when downstream zone is full, releases products as downstream clears maintaining continuous flow.
66. Design slug-release mode: release 1, 2, or 3 products simultaneously optimizing workstation loading and minimizing wait times.
67. Specify lift gate construction: lightweight aluminum or composite frames minimizing inertia and achieving 0.3-0.5 second actuation time.
68. Calculate pneumatic pressure: 4-6 bar (60-90 PSI) providing sufficient lift force (100-500 N) while minimizing air consumption.
69. Design gate timing: 50-100 millisecond sensor debounce delay preventing false triggers from product vibration or reflections.
70. Implement bypass mode: disable accumulation zones during setup or maintenance allowing continuous conveyor operation for testing.

## Workstation Stop Positioning

71. Design pneumatic stop blades: air cylinder-actuated pins or blades rising 20-50 mm above belt surface halting product at precise location.
72. Calculate stop force: 10-50 N gentle contact force preventing product damage while reliably stopping loads up to maximum capacity.
73. Specify stop blade material: anodized aluminum or polyurethane-coated steel providing wear resistance and minimizing product marking.
74. Select stop cylinder: 16-32 mm bore compact cylinders with 25-50 mm stroke and adjustable cushioning for soft engagement.
75. Design repeatability: ±1 mm stop position accuracy achieved through machined mounting blocks and rigid cylinder support.
76. Program stop logic: product detection via photoeye triggers stop engagement, workstation completion signal retracts stop and releases product.
77. Implement time-out protection: automatic product release after 30-120 seconds preventing line blockage if operator misses cycle completion.
78. Design dual-stop configuration: leading and trailing stops defining precise work envelope for robotic pick-and-place operations.
79. Specify stop actuation time: <0.2 seconds engagement/retraction maintaining high throughput at stations with short cycle times.
80. Calculate stop spacing: 500-2000 mm between stations based on manual work cycle time (15-60 seconds) and optimal line balancing.

## Pallet Transfer Mechanisms

81. Design lift-and-transfer units: servo-driven or pneumatic lifts raising pallets 50-100 mm for lateral push transfer to parallel lines.
82. Calculate transfer time: complete lift, push, lower cycle in 1-3 seconds maintaining line throughput and minimizing station dwell time.
83. Select transfer actuator: pneumatic rodless cylinder or electric linear actuator with 200-500 mm stroke traversing pallet between conveyors.
84. Specify transfer guide rails: precision-machined aluminum channels with low-friction inserts ensuring smooth pallet transition without binding.
85. Design pallet registration: mechanical locators or proximity sensors confirming pallet position before transfer sequence initiation.
86. Program transfer interlock: ensure receiving conveyor is clear and lift mechanism is fully retracted before releasing upstream product.
87. Implement 90-degree turn tables: rotating platforms transferring pallets between perpendicular conveyor sections in 2-4 seconds.
88. Calculate turntable load capacity: 50-200 kg accommodating heaviest pallet plus product with 2:1 safety factor.
89. Design turntable drive: servo motor or pneumatic rotary actuator with precision indexing to ±0.5° accuracy for downstream alignment.
90. Specify turntable diameter: 500-1200 mm accommodating largest pallet dimension plus 100 mm clearance for smooth rotation.

## Lift-and-Locate Precision Positioning

91. Design servo lift module: electric linear actuator or ballscrew mechanism raising product 100-200 mm for precision work operations.
92. Specify lift positioning accuracy: ±0.1 mm repeatability achieved through servo control and high-resolution encoder feedback (0.01 mm resolution).
93. Calculate lift force: 200-2000 N capacity supporting product weight plus upward force from automated assembly tools (screwdrivers, presses).
94. Design mechanical locators: conical pins or v-blocks engaging product features achieving ±0.5 mm X-Y positional accuracy.
95. Select servo actuator: 200-400W servo motor with planetary gearbox providing 500-2000 N thrust and 50-200 mm/s lift speed.
96. Program lift sequence: rapid approach to 10 mm above product, slow precision engagement at 5 mm/s, hold position during work cycle.
97. Implement force sensing: load cell or current monitoring detecting part contact and preventing over-compression of delicate products.
98. Design nest plates: precision-machined aluminum fixtures with product-specific contours maintaining orientation during lift and work operations.
99. Calculate cycle time: complete lift-work-lower sequence in 3-8 seconds enabling throughput of 450-1200 units per hour per station.
100. Specify nest changeover: quick-change mounting system allowing fixture swap in <5 minutes for product changeovers or new model introduction.

## ESD-Safe Belting and Components

101. Select ESD belt material: conductive thermoplastic polyurethane (TPU) with carbon black filler achieving 10⁴-10⁶ ohms/square surface resistivity.
102. Specify belt grounding: copper ground strap or conductive roller contacting belt underside every 1-2 meters ensuring electrical continuity.
103. Design frame grounding: ground wire connecting aluminum extrusion frame to facility ground preventing static accumulation on structure.
104. Select ESD-safe support materials: conductive UHMW polyethylene or static-dissipative acetal wear strips supporting belt underside.
105. Implement ionization: overhead ionizing bars neutralizing static charges on products and packaging as they travel through assembly zones.
106. Specify pallet materials: black conductive acetal or carbon-filled ABS plastic pallets with 10⁴-10⁶ ohms/square resistivity.
107. Test ESD properties: verify surface resistivity quarterly using ANSI/ESD S4.1 test methods ensuring compliance with JEDEC standards.
108. Design operator ground points: wrist strap connection jacks at each workstation grounding operators through 1 MΩ resistor.
109. Specify belt cleaning: conductive cleaning brushes or ionizing air knives removing dust and contaminants maintaining ESD properties.
110. Document ESD compliance: maintain certification records per ANSI/ESD S20.20 for electronics manufacturing traceability and audits.

## Sensor Integration Architecture

111. Select product detection sensors: retroreflective photoelectric sensors with 1-5 meter range and 1-5 millisecond response time.
112. Specify sensor mounting: adjustable brackets on T-slot frame allowing ±50 mm X-Y positioning and ±30° angular adjustment.
113. Design sensor spacing: position sensors 100-200 mm upstream of stop blades compensating for stopping distance at maximum speed.
114. Implement sensor diagnostics: LED indicators and alarm outputs signaling dirty lenses, misalignment, or electrical faults.
115. Select presence verification: dual redundant sensors at critical stations with AND logic preventing false releases from single sensor failure.
116. Design encoder integration: mount rotary encoder on drive pulley measuring actual belt distance traveled for precise product tracking.
117. Calculate encoder resolution: 1000-2500 PPR providing 0.5-2 mm position measurement accuracy at belt speeds up to 60 m/min.
118. Specify barcode readers: fixed-mount laser or vision scanners reading 1D/2D codes at 30-100 scans per second for product traceability.
119. Implement weight verification: load cells or weight platforms at QC stations detecting missing components (±5 gram accuracy).
120. Design vision guidance: overhead cameras with 1-5 megapixel resolution providing ±0.2 mm position feedback for robotic operations.

## SMEMA Interface Protocol

121. Implement SMEMA standard: universal electrical interface enabling communication between conveyors, placement machines, and inspection equipment.
122. Design board available signal: downstream machine asserts logic high (24VDC) when ready to receive product from upstream conveyor.
123. Program board transfer logic: conveyor advances product when receiving "board available" and asserts "board transfer" during handoff.
124. Specify connector type: 14-pin AMP connector or terminal blocks providing standardized wiring between production equipment.
125. Implement handshake timing: 100-500 millisecond delays between signal transitions ensuring reliable communication without product jams.
126. Design width adjustment signals: mechanical switch outputs indicating conveyor width setting enabling automatic downstream equipment adjustment.
127. Program bad board rejection: reject signal from inspection equipment triggering conveyor divert mechanism removing defective units.
128. Specify signal voltages: 24VDC logic levels with NPN or PNP output configurations compatible with various equipment manufacturers.
129. Implement bypass mode: manual switches overriding SMEMA interlocks for equipment setup, testing, or offline operation.
130. Document signal mapping: create wiring diagrams defining pin assignments and timing sequences for integration with customer's existing equipment.

## Control System Architecture

131. Select PLC platform: Allen-Bradley CompactLogix, Siemens S7-1200, or Beckhoff CX5000 series with 16-32 I/O points and Ethernet connectivity.
132. Design distributed I/O: remote I/O blocks at each zone reducing wiring by 40-60% compared to centralized control cabinet architecture.
133. Specify communication protocol: EtherNet/IP, Profinet, or EtherCAT providing 1-10 millisecond update rates for coordinated multi-zone control.
134. Program zone control logic: independent zone controllers with peer-to-peer messaging enabling autonomous operation during network disruptions.
135. Implement HMI interface: 7-12 inch touchscreen displaying conveyor status, speed control, zone status, and alarm diagnostics.
136. Design operator controls: E-stop buttons every 3-4 meters, start/stop pushbuttons, and speed adjustment potentiometers at key locations.
137. Program alarm management: prioritize alarms by severity (critical/warning/info) with historical logging of all events with timestamps.
138. Specify safety integration: interface with safety PLC for emergency stop, light curtain, and gate interlock monitoring per ISO 13849.
139. Implement production tracking: count units per shift, calculate OEE (Overall Equipment Effectiveness), and log downtime events to database.
140. Design remote access: VPN or cloud connectivity enabling manufacturer technical support and predictive maintenance monitoring.

## Line Balancing and Optimization

141. Calculate takt time: available production time divided by customer demand (e.g., 28800 seconds/shift ÷ 1000 units = 28.8 seconds/unit).
142. Analyze workstation cycle times: measure actual assembly time at each station identifying bottlenecks limiting overall throughput.
143. Design work content distribution: balance tasks across stations achieving ±10% variation in cycle time maximizing line efficiency.
144. Calculate conveyor speed: set transport speed providing adequate buffer time between stations without excessive accumulation.
145. Implement dynamic speed control: adjust conveyor speed based on bottleneck station allowing faster stations to maintain productivity.
146. Design parallel processing: duplicate bottleneck stations allowing products to route to first available operator reducing wait time.
147. Calculate buffer sizing: position 5-10 unit accumulation zones before bottleneck stations preventing upstream starvation during variations.
148. Analyze product mix: calculate weighted average cycle time when line runs multiple product variants with different assembly requirements.
149. Implement changeover reduction: design quick-change nests and fixtures reducing product changeover time from 30 minutes to <5 minutes.
150. Optimize operator utilization: target 85-90% value-added work time with 10-15% allowance for breaks, restocking, and quality checks.

## Power Distribution and Safety

151. Design main electrical enclosure: NEMA 12 or IP54 cabinet housing VFD, PLC, power supplies, and terminal blocks.
152. Specify power requirements: 230V single-phase or 400V three-phase input with 16-32A branch circuit protection depending on motor loads.
153. Calculate power consumption: 0.5-3.0 kW typical running load for 10-meter conveyor section including motors, controls, and pneumatics.
154. Design branch circuits: separate 24VDC power supplies (5-10A) for control systems isolated from motor power preventing electrical noise.
155. Implement emergency stop circuit: hard-wired safety relay (Category 3 per ISO 13849) cutting power to all motion devices.
156. Specify cable management: wire duct along frame perimeter organizing power, signal, and pneumatic lines for neat installation and easy maintenance.
157. Design cable carriers: energy chains protecting cables in moving applications such as transfer units or adjustable width mechanisms.
158. Implement ground fault protection: RCD or GFCI protection on 230V circuits preventing shock hazards in wet or high-humidity environments.
159. Specify wire gauges: 1.5-4.0 mm² (14-10 AWG) for motor power, 0.75-1.0 mm² (18-16 AWG) for 24VDC control signals.
160. Design lockout/tagout: main disconnect switch with padlock provisions enabling safe maintenance per OSHA 1910.147 standards.

## Pneumatic System Design

161. Calculate compressed air requirements: 50-200 standard liters per minute (SLPM) per conveyor section operating cylinders, stops, and lift gates.
162. Specify supply pressure: 4-6 bar (60-90 PSI) regulated and filtered air with -20°C dewpoint preventing moisture condensation.
163. Design air distribution: aluminum or nylon tubing (6-10 mm OD) with push-to-connect fittings for rapid assembly and reconfiguration.
164. Select pneumatic valves: 5/2-way solenoid valves 1/8" or 1/4" port controlling stop cylinders, lift gates, and transfer mechanisms.
165. Implement flow control: meter-out flow controllers on cylinder exhaust ports adjusting actuation speed for smooth, quiet operation.
166. Design air preparation: filter-regulator-lubricator (FRL) unit at conveyor inlet removing particles >5 microns and maintaining consistent pressure.
167. Calculate cylinder sizing: 16-32 mm bore cylinders with 25-50 mm stroke providing 100-800 N force at 5 bar pressure.
168. Specify cylinder mounting: clevis, flange, or threaded mounting with anti-rotation guides preventing cylinder body rotation under load.
169. Implement pressure monitoring: pressure switches detecting low air pressure (<3 bar) and alerting operators before system performance degrades.
170. Design quick disconnects: self-sealing couplers at conveyor ends enabling module removal without shutting down entire factory air system.

## Mechanical Assembly Process

171. Prepare aluminum profiles: cut to length ±0.5 mm, deburr sharp edges, clean T-slots removing cutting oil and debris.
172. Assemble base frame: connect longitudinal and cross members using corner brackets and T-slot fasteners, square frame to ±1 mm diagonal tolerance.
173. Install leveling feet: thread M12 or M16 adjusters into profile ends, adjust for level surface (±0.5 mm per meter) using precision level.
174. Mount belt support bed: install UHMW wear strips or aluminum supports every 150-300 mm, align to ±0.5 mm straightness over full length.
175. Install drive pulley assembly: mount bearings, pulley, and motor/gearbox maintaining parallel alignment within 0.1 mm per 100 mm length.
176. Install tail pulley and tensioner: position adjustable pulley assembly providing 25-50 mm take-up range, align parallel to drive pulley.
177. Install conveyor belt: thread belt around pulleys, join ends using mechanical fasteners or vulcanized splice, tension to 50-150 N.
178. Install chain guides (if applicable): mount UHMW or steel guide rails maintaining chain alignment within ±0.5 mm lateral tolerance.
179. Mount pallets on chain: attach carriers at specified spacing using clevis pins or bolts, verify smooth travel through full circuit.
180. Install pneumatic cylinders: mount stop blades, lift gates, and transfer mechanisms, adjust stroke limits and cushioning for smooth operation.

## Electrical Installation and Commissioning

181. Install main electrical cabinet: mount NEMA enclosure near conveyor section, connect to facility power per local electrical codes.
182. Wire motor connections: route power cables through cable carriers or conduit, terminate in VFD output terminals per manufacturer wiring diagram.
183. Install encoder wiring: route shielded encoder cable separately from power cables, terminate at VFD or PLC encoder input module.
184. Wire sensor connections: install photoelectric sensors, connect to PLC input modules using shielded cable (4-wire DC or 2-wire AC types).
185. Wire pneumatic valves: connect solenoid coils to PLC output modules, verify valve voltage matches PLC output (typically 24VDC).
186. Install HMI panel: mount touchscreen at operator station, connect to PLC via Ethernet cable, configure IP address and device mapping.
187. Wire emergency stops: series-connect all E-stop buttons through safety relay, wire relay outputs to VFD safe torque-off (STO) input.
188. Connect SMEMA interface: wire board available, board transfer, and auxiliary signals per customer equipment specifications.
189. Label all wiring: apply cable markers and terminal labels documenting signal names, wire numbers, and destination per electrical drawings.
190. Perform electrical checkout: verify voltage levels, test E-stop operation, confirm sensor operation and PLC I/O mapping before motor power-up.

## Testing and Validation

191. Perform mechanical alignment checks: verify belt tracking, chain alignment, and pallet clearances through full travel range.
192. Test motor operation: jog drive motor at low speed verifying correct rotation direction and smooth acceleration/deceleration.
193. Calibrate speed control: verify actual belt speed matches setpoint using encoder feedback or optical tachometer (±1% accuracy).
194. Test accumulation zones: load products through all zones verifying zero-pressure accumulation and proper zone-to-zone handoff.
195. Validate throughput performance: run conveyor at production speed for 30 minutes confirming sustained throughput meets specification (30-120 units/minute) without jams, misfeeds, or positional errors.
