---
title: "Programmable Power Supply"
company: "Keithley Instruments"
country: "United States"
selling_price: 5.0
inputs:
  - name: "Power Transformer"
    cost: 0.5
    link: "power-transformer"
  - name: "MOSFET Switches"
    cost: 0.3
    link: "power-ic"
  - name: "Control Board"
    cost: 0.5
    link: "printed-circuit-board"
  - name: "DAC/ADC"
    cost: 0.3
    link: "analog-asic"
  - name: "Chassis"
    cost: 0.3
    link: "steel-fabrication"
  - name: "Firmware"
    cost: 0.4
    link: "software-developers"
value_created: 2.7
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

## Switch-Mode Topology Design (Steps 1-25)

1. Design full-bridge LLC resonant converter topology for high efficiency (>90% at full load)
2. Select primary-side power MOSFETs (600V, 20A, <50mΩ RDS(on))
3. Design resonant tank circuit with inductor (47µH), capacitor (220nF), and magnetizing inductance
4. Calculate resonant frequency at 100kHz for optimal zero-voltage switching
5. Design high-frequency transformer with Litz wire (50:1 turns ratio for 0-60V output)
6. Implement synchronous rectification using low-side MOSFETs (100V, 60A, <5mΩ RDS(on))
7. Add SR controller IC for adaptive gate drive timing
8. Design output inductor (10µH, 50A saturation current) with powdered iron core
9. Select output capacitor bank (1000µF polymer, 100V, <10mΩ ESR)
10. Implement multi-phase interleaved design for ripple cancellation
11. Add active clamp circuit for primary-side voltage spike suppression
12. Design snubber networks across switching nodes (RC: 10Ω, 1nF, 2W)
13. Calculate thermal resistance of power stage (<0.5°C/W junction-to-case)
14. Select gate drivers with 4A peak current, <20ns propagation delay
15. Design power stage PCB with 4oz copper, 8-layer stackup for low impedance
16. Route high-current paths with 200mil width, minimal vias
17. Add input EMI filter (common-mode choke, X2/Y2 capacitors)
18. Implement active power factor correction (PFC) stage (>0.99 PF, <5% THD)
19. Design PFC boost converter (400V output, 50kHz switching)
20. Select PFC controller IC with continuous conduction mode operation
21. Add inrush current limiter (NTC thermistor, 10Ω cold, 0.5Ω hot)
22. Design bulk capacitor bank (680µF, 450V electrolytic, 105°C rated)
23. Implement soft-start circuit with 50ms ramp time
24. Add auxiliary power supply (15V, 1A) for control circuits using flyback converter
25. Design isolated feedback using optocouplers (>1MHz bandwidth)

## Linear Post-Regulation Stage (Steps 26-45)

26. Add linear post-regulator using series-pass transistors (bipolar or MOSFET)
27. Select high-power Darlington transistors (150V, 30A, 200W dissipation)
28. Design pre-regulator stage to maintain 5-10V headroom above output
29. Implement current-sharing circuit for parallel pass transistors
30. Add thermal coupling between transistors using shared heatsink
31. Design compound feedback loop with 100kHz crossover frequency
32. Implement lead-lag compensation network (pole at 10kHz, zero at 1kHz)
33. Add feed-forward path to improve transient response (<50µs settling time)
34. Design ultra-low-noise voltage reference (LTZ1000, <0.1ppm/°C drift)
35. Bury reference in temperature-controlled oven (50°C ±0.01°C)
36. Use precision resistor network for reference scaling (0.01% tolerance, <1ppm/°C)
37. Implement Kelvin connections for all critical reference nodes
38. Add buffer amplifiers (OPA140) with <1µV/°C offset drift
39. Design error amplifier with >120dB open-loop gain at DC
40. Implement dual-loop control (voltage loop, current loop)
41. Add ripple rejection filter (LC: 100µH, 220µF, -60dB at 100kHz)
42. Design output capacitor multiplier circuit for low-frequency ripple
43. Implement active ripple cancellation using auxiliary winding
44. Add guard rings around sensitive analog nodes on PCB
45. Shield entire linear stage with grounded copper enclosure

## Voltage/Current Programming (Steps 46-65)

46. Design 20-bit DAC interface for voltage programming (0-60V, 57µV resolution)
47. Implement 20-bit DAC for current programming (0-20A, 19µA resolution)
48. Add DAC reference buffer with <0.5ppm/°C stability
49. Design DAC output scaling network with laser-trimmed resistors
50. Implement temperature compensation circuit for DAC drift
51. Add digital potentiometers for gain and offset calibration
52. Design microcontroller interface (ARM Cortex-M7, 400MHz)
53. Implement 16-bit ADC for voltage readback (<10ppm INL, <2ppm noise)
54. Add 16-bit ADC for current readback with current-sense amplifier
55. Design high-side current sensing using Hall-effect sensor
56. Implement four-wire Kelvin sensing for output voltage measurement
57. Add sense lead compensation for up to 1V drop per lead
58. Design input protection for sense leads (±100V, 10kΩ series resistor)
59. Implement auto-ranging for current measurement (20mA/200mA/2A/20A ranges)
60. Add low-current shunt (0.1Ω) and high-current shunt (0.01Ω) with relay switching
61. Design shunt temperature compensation using matched thermistor
62. Implement remote programming input (0-10V analog, isolated)
63. Add front-panel controls with rotary encoder (100 detents/revolution)
64. Design digital display interface (7-inch color TFT, 1024x600 pixels)
65. Implement graphical user interface with real-time waveform display

## Overvoltage/Overcurrent Protection (Steps 66-80)

66. Design hardware overvoltage protection (OVP) with comparator trip point
67. Set OVP threshold at 105% of maximum voltage (63V for 60V supply)
68. Implement crowbar circuit using high-current SCR (100A surge rating)
69. Add series fuse (30A, fast-acting) to clear crowbar fault
70. Design electronic fuse using MOSFET in series with output
71. Implement overcurrent protection (OCP) with programmable threshold
72. Add current-limit foldback circuit to reduce power dissipation
73. Design constant-current crossover for seamless CV/CC transition
74. Implement overtemperature protection with multiple sensors
75. Add heatsink temperature sensor (NTC, 10kΩ at 25°C)
76. Monitor pass transistor junction temperature using thermal diode
77. Design three-stage thermal response (fan speed, power limit, shutdown)
78. Set thermal shutdown threshold at 85°C heatsink temperature
79. Implement output reverse polarity protection using series diode
80. Add input overvoltage/undervoltage lockout circuit

## Sequencing and Control (Steps 81-95)

81. Design power-on sequencing controller with state machine
82. Implement soft-start with exponential voltage ramp (100ms duration)
83. Add output enable/disable with <1ms transition time
84. Design sequencing for multiple output channels with programmable order
85. Implement master/slave configuration for series/parallel operation
86. Add analog sum bus for parallel current sharing (<1% imbalance)
87. Design digital communication bus for multi-unit control
88. Implement programmable output rise/fall slew rate (0.1-1000V/s)
89. Add triggered output pulsing with <100µs timing resolution
90. Design arbitrary waveform generation (up to 1kHz, 1000 points)
91. Implement list mode for sequential output stepping
92. Add data logging with 100k samples/second acquisition rate
93. Design trigger input/output with TTL/CMOS compatibility
94. Implement external analog control loop for fast feedback
95. Add analog monitor outputs (voltage, current scaled to 0-10V)

## Sense Lead Compensation (Steps 96-105)

96. Design four-wire Kelvin sensing with separate voltage sense leads
97. Implement differential amplifier for sense lead inputs (INA128, G=1)
98. Add common-mode rejection of >100dB for sense leads
99. Design guard shield around sense lead wiring driven at mid-potential
100. Implement sense lead resistance measurement during calibration
101. Add automatic compensation for up to 2Ω sense lead resistance
102. Design sense lead integrity check with continuity detection
103. Implement local/remote sensing mode selection
104. Add front-panel binding posts for remote sense connections
105. Design sense lead low-pass filter (100kHz cutoff) for noise rejection

## Ripple Filtering (Steps 106-120)

106. Measure output ripple with oscilloscope (20MHz bandwidth limit)
107. Target <1mVrms ripple at full load for voltage mode
108. Design multi-stage LC filtering (100µH + 220µF, then 47µH + 100µF)
109. Select capacitors with ultra-low ESR (<5mΩ polymer capacitors)
110. Add parallel ceramic capacitors (10µF, X7R) for high-frequency bypass
111. Implement active ripple cancellation by injecting anti-phase signal
112. Design ripple injection circuit using auxiliary transformer winding
113. Add synchronous detection of switching frequency components
114. Implement adaptive filter with DSP algorithm
115. Design PCB layout with star-ground topology for output return
116. Separate analog ground and power ground with single-point connection
117. Add ground plane splits to isolate noisy digital sections
118. Implement shielded output cables with triaxial construction
119. Design output connector with separate force and sense terminals
120. Test ripple and noise across frequency spectrum (10Hz-100MHz)

## SCPI Command Interface (Steps 121-135)

121. Implement Standard Commands for Programmable Instruments (SCPI) protocol
122. Design command parser with hierarchical structure
123. Add voltage programming commands (VOLT, VOLT?, VOLT:PROT)
124. Implement current programming commands (CURR, CURR?, CURR:PROT)
125. Design output control commands (OUTP ON, OUTP OFF, OUTP?)
126. Add measurement query commands (MEAS:VOLT?, MEAS:CURR?, MEAS:POW?)
127. Implement system commands (SYST:ERR?, SYST:VERS?, *IDN?)
128. Design calibration commands (CAL:VOLT, CAL:CURR, CAL:SAVE)
129. Add trigger commands (TRIG:SOUR, INIT, *TRG)
130. Implement status reporting system (STATus:OPERation, STATus:QUEStionable)
131. Design error queue with 256-entry depth
132. Add command execution time logging for performance monitoring
133. Implement macro storage with 10 programmable sequences
134. Design remote/local lockout control
135. Add SCPI compliance testing against IVI Foundation specification

## Communication Interfaces (Steps 136-150)

136. Design GPIB interface using TNT4882 controller IC
137. Implement IEEE-488.2 protocol with full handshaking
138. Add GPIB address selection (0-30 via DIP switches)
139. Design USB interface using FTDI FT232H (USB 2.0 High-Speed)
140. Implement USB CDC class for virtual COM port emulation
141. Add USB TMC class for Test & Measurement equipment
142. Design Ethernet LAN interface using Wiznet W5500 (10/100 Mbps)
143. Implement TCP/IP socket server on port 5025 for SCPI-over-LAN
144. Add VXI-11 protocol for instrument control
145. Design web server interface for browser-based control
146. Implement DHCP client for automatic IP address assignment
147. Add mDNS/Bonjour for zero-configuration discovery
148. Design RS-232 serial interface (9600-115200 baud, 8N1)
149. Implement all interfaces with identical SCPI command set
150. Add interface isolation using digital isolators (Si8641, 150Mbps)

## Calibration Procedures (Steps 151-170)

151. Design automated calibration system using external reference standards
152. Select calibration references (Fluke 732B voltage, Keithley 2182A nanovoltmeter)
153. Implement multi-point calibration (0%, 25%, 50%, 75%, 100% of range)
154. Design voltage calibration sequence with 5 points per range
155. Add current calibration sequence with 5 points per range
156. Implement gain and offset correction using 2-point calibration
157. Store calibration coefficients in non-volatile EEPROM
158. Design calibration date tracking and expiration warnings
159. Add temperature logging during calibration
160. Implement password protection for calibration mode
161. Design calibration verification procedure (compare to reference)
162. Add calibration report generation with uncertainty analysis
163. Calculate total measurement uncertainty (voltage: ±0.02%, current: ±0.05%)
164. Implement temperature coefficient characterization (-10°C to +50°C)
165. Design long-term stability testing (6-month drift <0.01%)
166. Add calibration interval recommendation (1 year typical)
167. Implement self-calibration routine using internal reference
168. Design built-in calibration check mode
169. Add calibration seal tamper detection
170. Generate calibration certificate with NIST-traceable chain

## Load Regulation Testing (Steps 171-185)

171. Design load regulation test fixture with programmable electronic load
172. Set up electronic load (Chroma 63206) with 0-60A range
173. Program voltage output to nominal value (30V for test)
174. Measure no-load voltage with 6.5-digit multimeter
175. Apply 10% load step and measure voltage change (<10mV)
176. Apply 25% load step and measure voltage change (<20mV)
177. Apply 50% load step and measure voltage change (<30mV)
178. Apply 75% load step and measure voltage change (<40mV)
179. Apply full load (20A) and measure voltage change (<50mV)
180. Calculate load regulation specification (<0.01% + 5mV)
181. Test current limit accuracy at multiple set points
182. Measure current limit threshold with ±0.5% tolerance
183. Test constant-current mode with resistive and electronic loads
184. Measure line regulation with input voltage variation (±10%)
185. Verify line regulation specification (<0.005% + 2mV)

## Transient Response Testing (Steps 186-195)

186. Set up transient load tester with MOSFET switching (1A/µs slew rate)
187. Program load step from 10% to 90% of full current (2A to 18A)
188. Measure output voltage deviation with oscilloscope (<100mV allowed)
189. Measure settling time to within 1% of final value (<50µs target)
190. Test load step from 90% to 10% and measure undershoot (<100mV)
191. Verify no oscillation or ringing in transient response
192. Test output capacitance with LCR meter (verify >1000µF effective)
193. Conduct production burn-in at full power for 48 hours
194. Monitor output voltage, current, and temperature during burn-in
195. Perform final functional test covering all specifications and features

## Specifications

### Output Ranges
- Voltage: 0-60V DC
- Current: 0-20A DC
- Power: 400W maximum

### Accuracy
- Voltage programming: ±(0.02% of setting + 5mV)
- Current programming: ±(0.05% of setting + 5mA)
- Voltage measurement: ±(0.01% of reading + 2mV)
- Current measurement: ±(0.03% of reading + 2mA)

### Regulation
- Load regulation: <0.01% + 5mV
- Line regulation: <0.005% + 2mV

### Ripple and Noise
- Normal mode: <1mVrms (20Hz-20MHz)
- Common mode: <50mVrms

### Transient Response
- Recovery time: <50µs to within 1% of final value
- Overshoot/undershoot: <100mV for 50% load step

### Programming Resolution
- Voltage: 1mV (16-bit DAC effective)
- Current: 1mA (16-bit DAC effective)

### Temperature Coefficient
- Voltage: <50ppm/°C
- Current: <100ppm/°C

### Protection
- Overvoltage protection: Adjustable, 0-66V
- Overcurrent protection: Adjustable, 0-22A
- Overtemperature protection: Automatic shutdown at 85°C

### Interfaces
- GPIB: IEEE-488.2 compliant
- USB: USB 2.0 High-Speed (TMC and CDC classes)
- LAN: 10/100 Mbps Ethernet (VXI-11, TCP/IP socket, web server)
- RS-232: 9600-115200 baud
