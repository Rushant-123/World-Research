---
title: "Wireless Charging Module"
company: "IDT"
country: "United States"
selling_price: 8.0
inputs:
  - name: "Transmit Coil"
    cost: 2.0
    link: "charging-coil"
  - name: "Power IC"
    cost: 3.0
    link: "wireless-power-ic"
  - name: "Ferrite Shield"
    cost: 1.5
    link: "ferrite-shield"
  - name: "NFC Antenna"
    cost: 0.8
    link: "nfc-coil"
value_created: 0.7
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

# Wireless Charging Module Manufacturing Process

**Market Leader:** [IDT](/companies/idt)



## Overview of Qi Standard Wireless Charging

1. Understand the Qi wireless power transfer standard developed by the Wireless Power Consortium (WPC).
2. Review the Qi specification for 15W power delivery requirements and compliance testing.
3. Study the inductive coupling principle where energy transfers between transmitter and receiver coils.
4. Learn about the resonant frequency range of 110-205 kHz used in Qi charging systems.
5. Understand power classes: Basic Power Profile (up to 5W), Extended Power Profile (up to 15W).
6. Review electromagnetic field safety standards and specific absorption rate (SAR) limits.
7. Study the communication protocol between transmitter and receiver using load modulation.
8. Understand the packet structure for power control, identification, and configuration messages.
9. Learn about foreign object detection (FOD) requirements to prevent heating of metallic objects.
10. Review certification requirements and WPC compliance testing procedures.

## Coil Design and Engineering

11. Design the transmit coil with optimal geometry for maximum coupling coefficient.
12. Calculate the inductance requirements based on target resonant frequency (typically 110-205 kHz).
13. Select litz wire with appropriate strand count and gauge for minimal skin effect losses.
14. Determine the coil diameter, typically 40-50mm for smartphone applications.
15. Calculate the number of turns needed to achieve target inductance (typically 6-15 µH).
16. Design the winding pattern for uniform magnetic field distribution.
17. Optimize coil spacing to balance coupling strength and tolerance to misalignment.
18. Model the coil's AC resistance at operating frequency using finite element analysis.
19. Calculate the quality factor (Q-factor) of the coil, targeting Q > 100 for efficiency.
20. Design the coil substrate using flexible PCB or wire winding on ferrite backing.

## Ferrite Shield Integration

21. Select high-permeability ferrite material (typically Ni-Zn ferrite with µr > 100).
22. Design ferrite sheet dimensions to match or exceed coil diameter.
23. Calculate optimal ferrite thickness (typically 0.15-0.3mm) for shielding effectiveness.
24. Model the magnetic flux concentration effect of the ferrite backing.
25. Verify that ferrite shield reduces eddy current losses in nearby metal components.
26. Test temperature stability of ferrite material across operating range (-20°C to 60°C).
27. Apply adhesive backing to ferrite sheet for secure attachment to coil assembly.
28. Cut ferrite sheet to precise dimensions using laser or mechanical cutting.
29. Inspect ferrite for cracks, chips, or surface defects that could affect performance.
30. Bond ferrite shield to the back of transmit coil using pressure-sensitive adhesive.

## Power IC Selection and Configuration

31. Select wireless power transmitter IC (e.g., IDT P9242, P9415) supporting 15W output.
32. Review IC specifications including efficiency, thermal performance, and protection features.
33. Design the power stage with half-bridge or full-bridge MOSFET configuration.
34. Calculate gate drive requirements for optimal switching performance.
35. Select external MOSFETs with low RDS(on) for minimal conduction losses.
36. Design the resonant tank circuit with series or parallel resonance topology.
37. Calculate resonant capacitor value to achieve target frequency with coil inductance.
38. Select capacitors with low ESR and high current rating (C0G/NP0 dielectric).
39. Design the input filter to minimize conducted EMI on the DC supply line.
40. Configure the control loop for power regulation and fast transient response.

## NFC Antenna Integration

41. Understand NFC (Near Field Communication) operating at 13.56 MHz frequency.
42. Design NFC antenna coil with inductance typically 1-3 µH for proper tuning.
43. Position NFC antenna to avoid interference with wireless charging coil.
44. Calculate separation distance between charging coil and NFC antenna (typically > 5mm).
45. Model electromagnetic coupling between 13.56 MHz NFC and 110-205 kHz charging fields.
46. Design matching network for NFC antenna to achieve proper impedance matching.
47. Select tuning capacitor for NFC resonant circuit at 13.56 MHz.
48. Test NFC read range and verify compliance with ISO 14443 or ISO 15693 standards.
49. Integrate NFC controller IC with proper filtering and ESD protection.
50. Verify simultaneous operation of wireless charging and NFC functions.

## PCB Design and Layout

51. Design multi-layer PCB with dedicated power and ground planes for low impedance.
52. Route high-current traces with minimum width of 2-3mm for power delivery paths.
53. Implement star grounding topology to minimize ground loop interference.
54. Place power IC, MOSFETs, and resonant components close together for minimal parasitic inductance.
55. Design thermal vias under power components for heat dissipation to ground plane.
56. Route gate drive signals as differential pairs with controlled impedance.
57. Add guard rings around sensitive analog circuitry for noise immunity.
58. Implement proper clearance (> 3mm) between high-voltage nodes and grounded elements.
59. Design test points for critical signals: coil voltage, current sense, temperature.
60. Add mounting holes and mechanical alignment features for assembly.

## Component Sourcing and Inspection

61. Source transmit coil from qualified supplier with Qi certification.
62. Verify coil inductance measurement at 100 kHz using LCR meter (tolerance ±5%).
63. Measure coil DC resistance and verify against specification (typically 0.2-0.5Ω).
64. Inspect coil winding for proper tension, spacing, and termination quality.
65. Source power IC from authorized distributor with traceability documentation.
66. Verify IC markings and authenticate using manufacturer's verification methods.
67. Source ferrite shield with specified permeability and loss characteristics.
68. Test ferrite material properties using impedance analyzer across frequency range.
69. Source NFC antenna with certified performance at 13.56 MHz.
70. Procure resonant capacitors with X7R or C0G dielectric for temperature stability.

## PCB Assembly Process

71. Apply solder paste to PCB using laser-cut stainless steel stencil (thickness 0.125mm).
72. Inspect solder paste deposition using automated optical inspection (AOI) system.
73. Place power IC using high-precision pick-and-place machine (placement accuracy ±25µm).
74. Place MOSFETs with proper orientation, ensuring drain pad alignment with thermal vias.
75. Place resonant capacitors and inductors with correct polarity and orientation.
76. Place small signal components (resistors, capacitors, ferrite beads) using automated placement.
77. Verify component placement using vision system before reflow soldering.
78. Reflow solder using controlled temperature profile: preheat, soak, reflow, cooling.
79. Monitor peak temperature (240-260°C) and time above liquidus (60-90 seconds).
80. Inspect solder joints using AOI for bridges, insufficient solder, or tombstoning defects.

## Coil Assembly and Attachment

81. Clean PCB surface where coil will be attached using isopropyl alcohol.
82. Apply alignment jig to ensure precise coil positioning on PCB.
83. Dispense thermally conductive adhesive or use pressure-sensitive adhesive tape.
84. Place transmit coil with ferrite backing onto designated PCB area.
85. Apply controlled pressure to ensure full contact and uniform bond line.
86. Cure adhesive according to manufacturer specifications (time and temperature).
87. Solder coil terminals to PCB pads using soldering iron at 350°C.
88. Inspect solder joints for proper wetting, fillet formation, and mechanical strength.
89. Verify coil alignment using mechanical gauge or vision system.
90. Test continuity and inductance of assembled coil on PCB.

## NFC Antenna Installation

91. Position NFC antenna on PCB according to design specifications.
92. Ensure minimum separation distance from wireless charging coil is maintained.
93. Apply adhesive backing to secure NFC antenna to PCB or enclosure.
94. Solder NFC antenna terminals to PCB connection points.
95. Verify NFC antenna inductance and resonant frequency using network analyzer.
96. Test NFC antenna performance with standard test card at various distances.
97. Shield NFC antenna if necessary to prevent interference from charging field.
98. Apply ferrite sheet between NFC and charging coils if isolation is insufficient.
99. Verify NFC communication during wireless charging operation.
100. Measure NFC antenna Q-factor and ensure adequate bandwidth for 13.56 MHz operation.

## Power IC Programming and Configuration

101. Connect programming interface (I2C, SPI, or UART) to power IC.
102. Load firmware or configuration parameters into IC's non-volatile memory.
103. Configure power delivery profile (5W, 7.5W, 10W, or 15W modes).
104. Set overcurrent protection threshold based on maximum load requirements.
105. Configure overvoltage protection settings to prevent damage during faults.
106. Set thermal shutdown threshold (typically 125-150°C junction temperature).
107. Enable foreign object detection (FOD) algorithm with appropriate sensitivity.
108. Configure communication protocol parameters for Qi compatibility.
109. Set ping frequency and power for device detection phase.
110. Program manufacturer identification code for Qi certification compliance.

## Resonant Frequency Tuning

111. Measure the transmit coil inductance on assembled PCB using precision LCR meter.
112. Calculate required capacitance for target resonant frequency (110-205 kHz range).
113. Select capacitor value from standard E12 or E24 series closest to calculated value.
114. Install resonant capacitor in circuit and measure actual resonant frequency.
115. Use network analyzer to measure impedance vs. frequency characteristic.
116. Identify resonant peak and verify it falls within Qi specification range.
117. Adjust capacitor value if needed by paralleling or substituting components.
118. Measure Q-factor at resonance and ensure it exceeds minimum requirement (Q > 50).
119. Verify frequency stability across temperature range (-20°C to 60°C).
120. Document final resonant frequency and component values for production records.

## Foreign Object Detection (FOD) Calibration

121. Understand FOD principle: detecting power loss from metallic objects in charging field.
122. Perform baseline power loss measurement with no foreign objects present.
123. Measure transmitter input power using precision power analyzer.
124. Measure receiver output power reported through communication protocol.
125. Calculate power transfer efficiency and establish baseline reference.
126. Place standard FOD test objects (e.g., aluminum disc, steel washer) on charging surface.
127. Measure power loss increase due to eddy currents in foreign objects.
128. Calibrate FOD threshold to detect objects causing > 250mW power loss.
129. Test FOD detection sensitivity across entire charging surface area.
130. Verify FOD triggers power reduction or shutdown within required time (< 1 second).

## Efficiency Optimization

131. Measure end-to-end power transfer efficiency from DC input to receiver output.
132. Target minimum efficiency of 80% at 15W power level per Qi specification.
133. Analyze power losses in each stage: MOSFET switching, coil resistance, core losses.
134. Optimize MOSFET gate drive voltage for lowest switching and conduction losses.
135. Adjust dead-time between high-side and low-side MOSFET switching (typically 50-100ns).
136. Minimize PCB trace resistance in high-current paths using wide copper traces.
137. Reduce AC resistance in transmit coil by using litz wire with adequate strand count.
138. Optimize coil-to-coil coupling by adjusting spacing and alignment tolerance.
139. Select ferrite material with low loss tangent at operating frequency.
140. Measure efficiency at various power levels (5W, 10W, 15W) and load conditions.

## Thermal Management Design

141. Calculate expected power dissipation in power IC and MOSFETs at maximum load.
142. Design thermal interface using copper pour and thermal vias to spread heat.
143. Calculate thermal resistance from junction to ambient (θJA) for each component.
144. Estimate junction temperature under worst-case conditions (Tj = Ta + P × θJA).
145. Add heatsink or thermal pad if junction temperature exceeds safe limits (< 125°C).
146. Apply thermal compound between components and heatsink for improved heat transfer.
147. Design airflow path if active cooling (fan) is required for high-power operation.
148. Place temperature sensor near hottest component for real-time monitoring.
149. Implement thermal throttling algorithm to reduce power if temperature exceeds threshold.
150. Test thermal performance using thermal imaging camera under continuous 15W operation.

## Electrical Testing and Validation

151. Perform input voltage sweep test (5-20V) to verify operation across input range.
152. Measure quiescent current consumption in standby mode (typically < 10mA).
153. Verify power-up sequence and time from input application to ready state.
154. Test overcurrent protection by applying overload condition and verifying shutdown.
155. Test overvoltage protection by increasing input voltage beyond safe limit.
156. Verify under-voltage lockout (UVLO) threshold and hysteresis.
157. Measure output ripple and noise on coil voltage waveform using oscilloscope.
158. Test electromagnetic interference (EMI) emissions per FCC Part 15 or CISPR 11.
159. Conduct ESD testing per IEC 61000-4-2 (contact and air discharge, ±8kV).
160. Perform electrical fast transient (EFT) testing per IEC 61000-4-4.

## Qi Compliance Testing

161. Test with Qi-certified receiver at various power levels (5W, 7.5W, 10W, 15W).
162. Verify proper communication handshake and packet exchange with receiver.
163. Test power transfer efficiency meets Qi minimum requirements (> 70% average).
164. Verify FOD detection using standard test fixtures defined by WPC.
165. Test spatial freedom: device detection and charging across entire charging surface.
166. Verify operation with devices at various Z-heights (vertical distance from surface).
167. Test with multiple receiver sizes and coil configurations.
168. Verify proper handling of over-temperature conditions reported by receiver.
169. Test compatibility with Qi-certified smartphones, earbuds, and smartwatches.
170. Submit design to WPC for official Qi certification and logo licensing.

## Safety and Protection Features

171. Implement short-circuit protection on output with fast detection (< 10µs).
172. Add reverse polarity protection on DC input using series diode or MOSFET.
173. Implement over-temperature protection with automatic power reduction.
174. Add metal detection algorithm to complement FOD for enhanced safety.
175. Verify timeout protection if charging does not complete within expected time.
176. Implement ground fault detection for AC-powered transmitters.
177. Add input fuse or PTC resettable fuse for catastrophic failure protection.
178. Implement watchdog timer to detect controller lockup conditions.
179. Add visual indicators (LED) for charging status and fault conditions.
180. Test all protection features under fault conditions and verify recovery behavior.

## Final Assembly and Enclosure

181. Design plastic or metal enclosure with proper ventilation for heat dissipation.
182. Ensure enclosure material does not attenuate magnetic field (use non-conductive materials).
183. Add rubber feet or non-slip material to bottom surface for stability.
184. Install status LEDs visible through enclosure light pipes or transparent sections.
185. Secure PCB assembly inside enclosure using screws or snap-fit mounting posts.
186. Route input power cable through strain relief grommet.
187. Apply conformal coating to PCB if required for moisture and dust protection.
188. Assemble top and bottom enclosure halves using screws or ultrasonic welding.
189. Apply product labels with regulatory markings (CE, FCC, Qi logo) on bottom surface.
190. Perform final inspection for mechanical fit, finish, and cosmetic quality.

## Quality Control and Testing

191. Test 100% of units for basic functionality: power-up, device detection, charging.
192. Perform sample testing for efficiency, temperature, and EMI compliance.
193. Conduct burn-in testing on sample units (24-48 hours at elevated temperature).
194. Verify product markings, labels, and packaging contents match specification.
195. Package units with instruction manual, warranty card, and any required accessories.
