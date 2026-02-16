---
title: "Server PSU"
company: "Delta Electronics"
country: "Taiwan"
selling_price: 350.00
inputs:
  - name: "Power Transformer"
    cost: 40.00
    link: "power-transformer"
  - name: "Multilayer PCB"
    cost: 25.00
    link: "multilayer-pcb"
  - name: "Power IC"
    cost: 30.00
    link: "power-ic"
  - name: "MLCC Capacitors"
    cost: 15.00
    link: "mlcc-capacitors"
  - name: "Fan Assembly"
    cost: 20.00
    link: "fan-assembly"
value_created: 220.00
---

1. Receive 8-layer multilayer PCB designed for 1600W redundant server power supply unit with ATX12V specifications.
2. Inspect PCB for copper thickness verification, ensuring 4oz copper on power planes for high current handling.
3. Perform automated optical inspection (AOI) to detect any manufacturing defects or layer misalignment.
4. Clean PCB surfaces using isopropyl alcohol to remove protective coatings and manufacturing residue.
5. Apply solder paste to PCB pads using precision stencil printer with 0.125mm aperture accuracy.
6. Place bulk input capacitors (450V 680μF electrolytic) at AC input stage for power factor correction.
7. Mount bridge rectifier module (1600V 35A rating) onto PCB with thermal interface material pre-applied.
8. Position active power factor correction (PFC) controller IC near the PFC MOSFET section.
9. Install PFC MOSFET (600V 60A) with integrated heat spreader for efficiency optimization.
10. Place PFC boost diode (600V ultrafast recovery) adjacent to PFC inductor mounting location.
11. Mount inductor for PFC stage (330μH, 20A saturation current) with secure mechanical fastening.
12. Install high-frequency switching MOSFETs (primary side, 650V GaN devices) for improved efficiency.
13. Position resonant capacitors near switching MOSFETs to minimize parasitic inductance loops.
14. Mount power transformer (custom toroidal design, 1:4 turns ratio) onto PCB with vibration dampening.
15. Install secondary side synchronous rectification MOSFETs (100V 200A rating) for 12V rail.
16. Place secondary side Schottky diodes for auxiliary voltage rails (+5V standby, +3.3V).
17. Mount output filter inductors (2.2μH, 100A rated) for each major voltage rail.
18. Install bulk output capacitors (polymer aluminum, 16V 2200μF) with ultra-low ESR characteristics.
19. Position ceramic MLCC capacitors (0805 size, X7R dielectric, 10μF) throughout the PCB for decoupling.
20. Mount voltage reference ICs for precise output voltage regulation and load line calibration.
21. Install current sensing resistors (0.5mΩ, 1% tolerance) in series with each output rail.
22. Place PWM controller IC (digital control, 500kHz switching frequency) in control section.
23. Mount isolated feedback optocouplers for closed-loop voltage regulation across isolation barrier.
24. Install gate driver ICs for MOSFET control with integrated shoot-through protection.
25. Position temperature sensor ICs near critical heat-generating components for thermal monitoring.
26. Mount fan control IC with PWM output and tachometer feedback input capability.
27. Install microcontroller unit (MCU) for PMBus communication and power supply management.
28. Place I2C EEPROM for storing calibration data, serial numbers, and configuration parameters.
29. Mount LED driver circuits for status indication (power good, fault, standby).
30. Install auxiliary power supply components for self-powered control circuitry (+12V AUX, +5V AUX).
31. Position EMI filter components at AC input (common mode chokes, X2/Y2 capacitors).
32. Mount varistor (metal oxide, 275V AC rating) for overvoltage transient protection.
33. Install NTC thermistor (10Ω at 25°C) for inrush current limiting at power-on.
34. Place relay or MOSFET switch to bypass NTC thermistor after initial charging.
35. Mount AC input fuse holder and 20A slow-blow fuse for overcurrent protection.
36. Run PCB through reflow oven with precise temperature profile: 150°C preheat, 230°C peak, 60 seconds above liquidus.
37. Allow PCB to cool gradually to room temperature to prevent thermal stress on components.
38. Perform automated optical inspection (AOI) post-reflow to verify solder joint quality.
39. Identify any solder bridges, cold joints, or tombstoned components for rework.
40. Manually solder through-hole components including AC input connector and large inductors.
41. Apply conformal coating to high-voltage sections for moisture protection and creepage enhancement.
42. Install power transformer into designated PCB location with mechanical fasteners.
43. Solder transformer primary windings to high-voltage switching section pads.
44. Solder transformer secondary windings to synchronous rectification MOSFET section.
45. Install output terminal blocks for 12V main power distribution (+12V1 through +12V6 rails).
46. Mount hot-swap connector interface (proprietary 12-pin design) at rear of PCB assembly.
47. Install hot-swap control circuitry including pre-charge resistors and bypass relays.
48. Position current sharing bus connectors for redundant PSU parallel operation.
49. Mount sense lines for remote voltage sensing at server motherboard load points.
50. Install overvoltage protection crowbar circuits (SCR-based, 13.5V trip point) on 12V rails.
51. Place undervoltage lockout circuitry to prevent operation below safe input voltage threshold.
52. Mount short circuit protection foldback circuits for each output rail.
53. Install overtemperature protection thermostats (normally closed, 85°C trip) near critical areas.
54. Position indicator LEDs on PCB edge for easy visibility when installed in server rack.
55. Fabricate aluminum heat sink with high fin density (12 fins per inch) for primary power stage.
56. Machine heat sink base to mirror finish (Ra < 0.8μm) for optimal thermal interface contact.
57. Apply thermal interface material (3.0 W/mK thermal conductivity, 0.2mm bond line) to heat sink.
58. Mount primary switching MOSFETs to heat sink with TO-247 package orientation.
59. Secure MOSFETs with M3 screws torqued to 0.8 Nm for consistent thermal contact.
60. Install thermal pads (3.0mm thick, 5.0 W/mK conductivity) on secondary rectification MOSFETs.
61. Position secondary heat sink (extruded aluminum, black anodized) over secondary power stage.
62. Fabricate heat sink for bridge rectifier module with dedicated airflow channel.
63. Mount bridge rectifier to heat sink with silicone thermal compound interface.
64. Install heat sink mounting brackets to PCB using threaded standoffs.
65. Verify thermal contact quality using thermal imaging during initial power-up testing.
66. Fabricate stamped steel chassis with ventilation perforation pattern (40% open area).
67. Apply powder coat finish to chassis in light gray color for professional appearance.
68. Install EMI gasket material around chassis seams for electromagnetic compatibility.
69. Mount PCB assembly into chassis using insulated standoffs (M3 size, 10mm height).
70. Connect AC input wiring from chassis input connector to PCB input terminals.
71. Install chassis-mounted AC inlet connector with integrated IEC C14 receptacle and fuse holder.
72. Route high-current output wiring from PCB to hot-swap connector interface.
73. Use 14 AWG copper wire (105°C rated) for 12V main power distribution.
74. Crimp wire terminals with hydraulic crimper (2000 PSI pressure) for reliable connections.
75. Apply wire markers and cable ties for organized wire routing and serviceability.
76. Install grounding straps from chassis to PCB ground plane with star grounding topology.
77. Mount fan assembly (80mm diameter, 12V DC, 4-wire PWM control) at rear of chassis.
78. Position fan for optimal airflow across heat sinks and high-temperature components.
79. Connect fan power and tachometer wires to PCB fan control circuit.
80. Install fan guard and finger protection grill at chassis exhaust opening.
81. Fabricate hot-swap handle mechanism with locking latch and ejection spring.
82. Machine handle from die-cast zinc alloy with ergonomic grip profile.
83. Install handle pivot points on chassis side panels with stainless steel pins.
84. Integrate handle position sensor (microswitch) to detect insertion/removal state.
85. Wire handle sensor to hot-swap control circuitry for pre-charge sequence initiation.
86. Install hot-swap connector alignment guides on chassis rear panel.
87. Mount connector retention clips to prevent vibration-induced disconnection.
88. Fabricate top cover with ventilation slots and product identification label area.
89. Install cover mounting screws with captive design to prevent loss during service.
90. Apply product label with model number (DPS-1600AB-1), serial number, and safety certifications.
91. Attach barcode label for inventory tracking and traceability throughout product lifecycle.
92. Transport assembled PSU to electrical testing station in ESD-safe container.
93. Connect PSU to automated test equipment (ATE) with programmable AC source and electronic loads.
94. Apply 90V AC input at 60Hz to verify low-line operation and startup characteristics.
95. Monitor inrush current limiting, ensuring peak current below 60A during cold start.
96. Verify auxiliary power supply outputs (+12V AUX, +5V standby) are within ±5% tolerance.
97. Test power good signal assertion timing after output voltages stabilize.
98. Apply 264V AC input at 50Hz to verify high-line operation and voltage stress margins.
99. Load all output rails to 20% rated current and verify voltage regulation within ±3%.
100. Increase load to 50% rated current and monitor efficiency (target: 94% at 50% load).
101. Apply full rated load (1600W output) and verify sustained operation without thermal shutdown.
102. Measure efficiency at full load (target: 91% minimum for 80 Plus Titanium certification).
103. Test efficiency at 10% load to verify light-load optimization (target: 90% minimum).
104. Calculate weighted average efficiency across 20%, 50%, and 100% load points.
105. Verify 80 Plus Titanium certification criteria met: 96% at 50% load, 115V AC input.
106. Measure power factor at full load (target: >0.99) to verify active PFC performance.
107. Test dynamic load transient response using 25% to 75% load step at 1A/μs slew rate.
108. Verify output voltage deviation remains within ±5% during load transients.
109. Monitor voltage recovery time, ensuring return to regulation within 50μs.
110. Test cross-regulation between multiple 12V rails under asymmetric loading conditions.
111. Apply overload condition at 120% rated power and verify current limit activation.
112. Confirm PSU enters hiccup mode or continuous current limit without damage.
113. Test short circuit protection by directly shorting each output rail sequentially.
114. Verify PSU shuts down within 10ms and enters auto-restart mode after fault removal.
115. Apply overvoltage condition at AC input (300V AC) and verify varistor clamping.
116. Test undervoltage lockout by gradually reducing input voltage below 90V AC.
117. Verify PSU shuts down gracefully and restarts when input voltage recovers.
118. Test brownout ride-through capability with 50ms input dropout at full load.
119. Verify hold-up time specification (minimum 16ms at full load, 115V AC input).
120. Connect PMBus interface to test computer and verify I2C communication protocol.
121. Read voltage, current, and power telemetry from PSU via PMBus commands.
122. Write fan speed control commands and verify PWM duty cycle adjustment.
123. Test fault status register reporting for various fault conditions.
124. Verify PSU responds to ON/OFF remote control commands via PMBus.
125. Test current sharing functionality by paralleling two PSUs with current share bus.
126. Verify load current distributes evenly (within ±10%) between redundant PSUs.
127. Disconnect one PSU and verify seamless load transfer to remaining unit without glitch.
128. Test hot-swap insertion sequence with pre-charge current limiting.
129. Monitor hot-swap connector pin sequencing: ground first, power pins last.
130. Verify pre-charge resistors limit inrush current below 5A during insertion.
131. Test hot-swap removal under full load condition without disrupting system operation.
132. Measure acoustic noise level at 1 meter distance (target: <40 dBA at 50% load).
133. Test fan speed modulation based on internal temperature sensor feedback.
134. Verify fan ramps to maximum speed when internal temperature exceeds 70°C.
135. Test overtemperature protection shutdown at 85°C thermostat trip point.
136. Perform EMI testing in semi-anechoic chamber per CISPR 32 Class B limits.
137. Measure conducted emissions on AC input lines from 150kHz to 30MHz.
138. Verify radiated emissions from 30MHz to 1GHz comply with regulatory limits.
139. Test ESD immunity per IEC 61000-4-2 (contact discharge: ±6kV, air discharge: ±8kV).
140. Apply electrical fast transient bursts per IEC 61000-4-4 (±2kV, 5kHz repetition).
141. Test surge immunity per IEC 61000-4-5 (line-to-line: ±2kV, line-to-ground: ±4kV).
142. Verify PSU continues operation without interruption during all immunity tests.
143. Perform safety testing per IEC 62368-1 for IT equipment power supplies.
144. Measure leakage current at AC input (maximum allowed: 3.5mA for Class I equipment).
145. Test ground continuity resistance between chassis and AC ground pin (<0.1Ω required).
146. Apply high-voltage dielectric withstand test (3000V AC, 60 seconds) between primary and secondary.
147. Verify no arcing or insulation breakdown occurs during hipot testing.
148. Test isolation resistance between primary and secondary circuits (minimum 10MΩ at 500V DC).
149. Perform touch current testing on exposed metal surfaces under normal and fault conditions.
150. Verify all clearances and creepage distances meet IEC 62368-1 requirements.
151. Test flammability of plastic components per UL 94 rating (minimum V-1 required).
152. Apply thermal cycling stress test: -40°C to +85°C, 100 cycles, 30-minute dwell.
153. Verify PSU functionality after thermal cycling without performance degradation.
154. Perform vibration testing per IEC 60068-2-64 (10-500Hz sweep, 1.0G acceleration).
155. Test shock resistance per IEC 60068-2-27 (30G peak, 11ms half-sine pulse).
156. Verify no mechanical damage or component displacement after shock testing.
157. Conduct accelerated life testing at elevated temperature (50°C ambient, full load, 1000 hours).
158. Monitor output voltage drift, efficiency degradation, and component wear-out indicators.
159. Test MTBF calculation validation through statistical analysis of field return data.
160. Perform failure mode and effects analysis (FMEA) for critical component failures.
161. Verify redundant protection circuits ensure safe shutdown under all failure scenarios.
162. Test PSU operation at altitude extremes (up to 10,000 feet) for data center deployment.
163. Verify derating curves for operation at high altitude with reduced cooling effectiveness.
164. Conduct humidity testing (85% RH, 40°C, 96 hours) per IEC 60068-2-78.
165. Verify no condensation or corrosion occurs on PCB or metal components.
166. Test output ripple and noise on all rails using 20MHz bandwidth oscilloscope.
167. Verify 12V rail ripple <120mVpp and noise <50mVrms per ATX12V specification.
168. Measure switching frequency jitter and verify spread spectrum modulation if implemented.
169. Test input current harmonic content per IEC 61000-3-2 Class A limits.
170. Verify total harmonic distortion (THD) of input current <5% at full load.
171. Measure power line flicker per IEC 61000-3-3 for lighting compatibility.
172. Test output voltage accuracy using precision 6.5-digit multimeter (±0.01% accuracy).
173. Calibrate voltage trim adjustments to achieve ±1% output voltage accuracy.
174. Write calibration data to EEPROM including voltage offsets and current sense gains.
175. Program unique serial number and manufacturing date code into EEPROM.
176. Apply firmware updates to MCU if newer version available with enhanced features.
177. Verify firmware version number matches production release documentation.
178. Perform final functional test sequence verifying all features and protection modes.
179. Generate test report with pass/fail status and measurement data for quality records.
180. Apply tamper-evident warranty seal over chassis screws to indicate unauthorized opening.
181. Package PSU in anti-static bag with desiccant packet for moisture protection.
182. Insert PSU and accessories (mounting screws, cable ties) into custom-fit foam insert.
183. Place foam insert into corrugated cardboard box with reinforced corners.
184. Include printed quick start guide and safety information sheet in multiple languages.
185. Add regulatory compliance documentation and warranty card to package.
186. Seal box with tamper-evident tape and apply shipping label with handling instructions.
187. Apply "This Side Up" and "Fragile - Electronic Equipment" labels to box exterior.
188. Scan barcode for inventory system entry and shipment tracking activation.
189. Palletize boxed PSUs in stable configuration (48 units per pallet, 6 layers).
190. Secure pallet load with stretch wrap and corner protectors for safe transport.
191. Store palletized inventory in climate-controlled warehouse (15-25°C, <60% RH).
192. Perform random sampling quality audit (1% of production lot) for statistical process control.
193. Ship PSUs to server manufacturers, data centers, and distribution channels via freight carrier.
194. Provide technical documentation including service manual, PMBus command reference, and 3D CAD models.
195. Maintain traceability database linking serial numbers to component lot codes for field reliability tracking.
