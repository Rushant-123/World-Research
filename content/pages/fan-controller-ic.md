---
title: "Fan Controller IC"
company: "Microchip Technology"
country: "United States"
selling_price: 1.0
inputs:
  - name: "Silicon Wafer"
    cost: 0.1
    link: "silicon-wafer"
  - name: "Lithography"
    cost: 0.15
    link: "photolithography-equipment"
  - name: "IC Packaging"
    cost: 0.1
    link: "package-substrate"
  - name: "Testing"
    cost: 0.08
    link: "board-tester"
  - name: "Wire Bonding"
    cost: 0.05
    link: "wire-bonder"
  - name: "Firmware"
    cost: 0.07
    link: "software-developers"
value_created: 0.45
---

Fan controller ICs are specialized mixed-signal integrated circuits designed to intelligently regulate cooling fan speed based on temperature measurements, optimizing thermal management while minimizing acoustic noise and power consumption in electronic systems.

## Manufacturing Process

### Temperature Sensor ADC Design (Steps 1-25)

1. Define temperature sensing requirements: -40°C to +125°C operating range with ±1°C accuracy
2. Design multi-channel analog multiplexer for 4-8 temperature sensor inputs
3. Create precision voltage reference circuit using bandgap reference (1.25V nominal)
4. Design programmable gain amplifier (PGA) with gains from 1x to 128x
5. Implement differential input stage with CMRR >80dB for noise rejection
6. Design low-pass anti-aliasing filter with 100Hz cutoff frequency
7. Create 12-bit successive approximation ADC with 10μs conversion time
8. Implement sample-and-hold circuit with 0.5μs acquisition time
9. Design bias current generator with <50ppm/°C temperature coefficient
10. Create comparator array for SAR ADC with <2mV offset voltage
11. Implement capacitor DAC with binary-weighted array (4096 elements)
12. Design timing controller for ADC conversion sequence
13. Create calibration registers for offset and gain correction
14. Implement digital filter for sensor averaging (16-sample moving average)
15. Design temperature-to-digital conversion lookup tables
16. Create thermistor linearization circuits for NTC/PTC sensors
17. Implement remote diode temperature sensing for CPU monitoring
18. Design current source (10μA to 100μA) for diode forward voltage measurement
19. Create beta compensation circuit for transistor temperature sensing
20. Implement multi-point calibration storage (3-point calibration typical)
21. Design over-temperature detection comparators with 5°C hysteresis
22. Create thermal alarm output with programmable thresholds
23. Implement sensor fault detection (open/short circuit detection)
24. Design ADC self-test mode with internal reference measurement
25. Verify ADC linearity to ±0.5 LSB integral nonlinearity

### PWM Output Generator Design (Steps 26-50)

26. Design 4-channel PWM generator with independent control
27. Create 16-bit timer/counter for high-resolution PWM (0.015% steps)
28. Implement programmable PWM frequency: 20Hz to 30kHz range
29. Design dead-time insertion circuit for complementary outputs
30. Create phase-shifted PWM for multi-fan acoustic optimization
31. Implement minimum duty cycle limiter (5% typical for fan startup)
32. Design maximum duty cycle clamp (95% for overvoltage protection)
33. Create soft-start ramping circuit: 0-100% in programmable 0.1-10 seconds
34. Implement emergency full-speed mode (100% duty cycle) on over-temperature
35. Design PWM frequency dithering for EMI reduction (±5% frequency spread)
36. Create output driver stage with 1A peak current capability
37. Implement open-drain MOSFET drivers with 50mΩ on-resistance
38. Design edge rate control for reduced EMI (<10ns rise/fall times)
39. Create PWM output filtering for smooth fan control response
40. Implement locked rotor detection via tachometer feedback
41. Design automatic retry mechanism after fan stall (3 attempts, 1s interval)
42. Create PWM polarity configuration (active-high or active-low)
43. Implement synchronized PWM switching to reduce peak supply current
44. Design thermal foldback protection (reduce PWM if IC overheats >100°C)
45. Create PWM output disable mode for fan-off capability
46. Implement glitch-free PWM updates during duty cycle changes
47. Design level-shifting circuit for 5V/12V fan compatibility
48. Create short-circuit protection with 2A current limit
49. Implement over-voltage protection (>15V input detection)
50. Design PWM output status reporting via I2C interface

### Tachometer Input Processing (Steps 51-70)

51. Design 4-channel tachometer input with Schmitt trigger buffers
52. Create input protection: ESD diodes rated to ±8kV contact discharge
53. Implement pull-up resistors: 10kΩ typical, programmable 2kΩ to 100kΩ
54. Design input voltage threshold: 0.8V (low) and 2.0V (high) for 5V logic
55. Create digital noise filter: 3-pulse glitch rejection at 100kHz
56. Implement 16-bit edge counter with overflow detection
57. Design measurement window timer: 1 second typical integration time
58. Create RPM calculation circuit: RPM = (pulses × 60) / (poles × time)
59. Implement 2-pole and 4-pole fan configuration settings
60. Design minimum speed detection threshold: 500 RPM typical
61. Create fan stall detection timer: 5 second timeout period
62. Implement speed error calculation: target RPM vs actual RPM
63. Design tachometer failure detection (no pulses within timeout)
64. Create RPM averaging filter: 4-sample exponential moving average
65. Implement speed range limits: 0 to 15,000 RPM measurement capability
66. Design high-speed capture mode for accuracy at >10,000 RPM
67. Create pulse width measurement for diagnostic purposes
68. Implement tachometer signal integrity monitoring
69. Design frequency-to-digital conversion with 1 RPM resolution
70. Create tachometer interrupt generation on speed threshold crossing

### PID Control Loop Implementation (Steps 71-95)

71. Design proportional gain controller: Kp range 0.1 to 10.0
72. Create integral gain controller: Ki range 0.01 to 1.0
73. Implement derivative gain controller: Kd range 0.001 to 0.5
74. Design 32-bit fixed-point arithmetic unit for PID calculations
75. Create error calculation: e(t) = target_temp - measured_temp
76. Implement proportional term: P = Kp × e(t)
77. Design integral term with anti-windup: I = I_prev + Ki × e(t) × dt
78. Create derivative term with filtering: D = Kd × (e(t) - e(t-1)) / dt
79. Implement PID output summation: output = P + I + D
80. Design output saturation limits: 0% to 100% PWM duty cycle
81. Create integral windup prevention (clamp integral when saturated)
82. Implement bumpless transfer when changing PID parameters
83. Design setpoint ramping for smooth temperature transitions
84. Create multi-zone control: different PID parameters per temperature range
85. Implement adaptive gain scheduling based on error magnitude
86. Design feedforward control for predictive temperature management
87. Create PID loop execution rate: 1Hz to 10Hz configurable
88. Implement derivative kick prevention during setpoint changes
89. Design proportional-on-measurement to reduce overshoot
90. Create dead-band zone: ±2°C where no control action taken
91. Implement hysteresis control mode as alternative to PID
92. Design fuzzy logic control option for nonlinear fan response
93. Create acoustic optimization mode (slower response, quieter operation)
94. Implement performance mode (faster response, higher noise acceptable)
95. Design custom lookup table control curves as PID alternative

### I2C/SMBus Interface Design (Steps 96-115)

96. Implement I2C slave interface compatible with specification v3.0
97. Design 7-bit addressing: default address 0x4C, programmable via pins
98. Create support for standard mode (100 kbit/s) and fast mode (400 kbit/s)
99. Implement clock stretching for slow ADC conversions
100. Design 256-byte register map for configuration and monitoring
101. Create auto-increment addressing for burst read/write operations
102. Implement write protection for critical configuration registers
103. Design SMBus packet error checking (PEC) with CRC-8 calculation
104. Create alert response address (ARA) protocol support
105. Implement SMBus timeout detection: 35ms typical
106. Design GPIO interrupt output (open-drain, active-low)
107. Create interrupt status register with individual flag bits
108. Implement interrupt mask register for selective event reporting
109. Design command register for one-shot conversions and self-test
110. Create device identification registers (manufacturer ID, device ID, revision)
111. Implement configuration lock mechanism to prevent accidental changes
112. Design shadow registers for atomic multi-byte updates
113. Create EEPROM interface for storing user calibration data
114. Implement power-on defaults loaded from internal ROM
115. Design I2C bus recovery mechanism for stuck-low conditions

### Over-Temperature Protection (Steps 116-130)

116. Design multi-level temperature warning system (85°C, 95°C, 105°C)
117. Create hardware over-temperature shutdown at 125°C junction temperature
118. Implement thermal shutdown hysteresis: 15°C typical
119. Design independent comparator for failsafe OTP detection
120. Create automatic PWM boost on critical temperature detection
121. Implement progressive fan speed increase as temperature rises
122. Design temperature-to-PWM lookup table with 16 breakpoints
123. Create emergency cooling mode: 100% fan speed override
124. Implement system shutdown signal output for extreme over-temperature
125. Design adjustable temperature thresholds via I2C programming
126. Create temperature rate-of-change detection (°C per second monitoring)
127. Implement predictive over-temperature algorithm based on temperature slope
128. Design separate die temperature monitoring for IC self-protection
129. Create thermal mass compensation for different heatsink configurations
130. Implement logged over-temperature event counter for diagnostics

### CMOS Fabrication Process (Steps 131-155)

131. Start with 200mm or 300mm p-type silicon wafer, <100> orientation
132. Grow 500nm field oxide using LOCOS process at 1000°C
133. Deposit 100nm silicon nitride mask layer via LPCVD
134. Pattern active areas using photolithography (0.35μm process node)
135. Etch field oxide regions using reactive ion etching
136. Implant n-well regions: phosphorus at 3×10^12 cm^-2, 400keV energy
137. Implant p-well regions: boron at 2×10^12 cm^-2, 200keV energy
138. Drive-in diffusion at 1100°C for 4 hours to form deep wells
139. Grow 8nm gate oxide using dry oxidation at 900°C
140. Deposit 200nm polysilicon gate material via LPCVD at 620°C
141. Dope polysilicon with phosphorus for low resistivity (10-20 Ω/square)
142. Pattern and etch polysilicon gates using plasma etching
143. Implant NMOS source/drain: arsenic at 5×10^15 cm^-2, 60keV
144. Implant PMOS source/drain: boron at 3×10^15 cm^-2, 30keV
145. Rapid thermal anneal at 1050°C for 10 seconds to activate dopants
146. Deposit 500nm BPSG (borophosphosilicate glass) for insulation
147. Reflow BPSG at 900°C to smooth surface topography
148. Etch contact vias using CHF3/O2 plasma chemistry
149. Deposit 500nm aluminum-copper metallization (0.5% Cu) via sputtering
150. Pattern and etch metal layer 1 using chlorine-based plasma
151. Deposit 800nm intermetal dielectric (silicon dioxide)
152. Etch vias for second metal layer interconnects
153. Deposit and pattern metal layer 2 (aluminum-copper, 700nm thick)
154. Deposit 1μm passivation layer (silicon nitride/oxide stack)
155. Open bond pad areas using final mask step

### Wafer Testing and Characterization (Steps 156-170)

156. Perform visual inspection using automated optical inspection (AOI)
157. Measure sheet resistance: target 20 Ω/square for polysilicon gates
158. Test transistor threshold voltage: 0.5V ±0.1V for NMOS, -0.6V ±0.1V for PMOS
159. Measure leakage current: <1nA per transistor at room temperature
160. Verify contact resistance: <5Ω per contact via
161. Test line-to-line capacitance: <0.2pF/mm for adjacent metal traces
162. Perform parametric test on process control monitors (PCM)
163. Probe die-level DC characteristics: supply current <5mA at 5V
164. Test ADC linearity using voltage ramp stimulus
165. Verify PWM output rise/fall times: 5ns to 20ns range
166. Measure bandgap reference voltage: 1.250V ±10mV
167. Test temperature coefficient: <50ppm/°C across -40°C to +125°C
168. Verify I2C communication at 100kHz and 400kHz speeds
169. Perform functional test: temperature sensing, PWM generation, tachometer input
170. Map wafer yield: typical 85-95% known good die

### IC Packaging Process (Steps 171-183)

171. Backgrind wafer to 250μm thickness for thermal performance
172. Apply 75μm blue tape for die protection during sawing
173. Dice wafer using 30μm diamond blade, 50μm kerf width
174. Mount die into SOIC-16 or QFN-24 package using silver-filled epoxy
175. Cure die attach adhesive at 175°C for 60 minutes
176. Perform wire bonding: 25μm gold wire, ball-wedge technique
177. Bond power pins first using 50μm aluminum wire for higher current
178. Complete signal pin bonding: 16-24 bonds per device
179. Inspect wire bonds using automated vision system (all bonds, no defects)
180. Mold package using epoxy molding compound at 175°C, 100 bar pressure
181. Cure molded package at 175°C for 4 hours post-mold bake
182. Deflash package to remove excess molding compound
183. Trim and form SOIC leads or singulate QFN packages

### Final Testing and Calibration (Steps 184-195)

184. Perform package-level continuity test to verify all pin connections
185. Test supply voltage range: 3.0V to 5.5V operation verified
186. Measure quiescent current: <3mA typical at 5V supply
187. Calibrate temperature sensors using 3-point calibration: 0°C, 25°C, 85°C
188. Program calibration coefficients into internal EEPROM/OTP memory
189. Test PWM output accuracy: ±1% duty cycle across full range
190. Verify tachometer input frequency response: 10Hz to 10kHz
191. Perform thermal cycling: -40°C to +125°C, 10 cycles for reliability screening
192. Test EMC compliance: ESD immunity ±8kV contact, ±15kV air discharge
193. Verify EMI emissions: CISPR 22 Class B limits for conducted/radiated emissions
194. Perform final functional test: all features exercised, 100% test coverage
195. Laser mark package with part number, date code, and lot traceability information

## Technical Specifications

- **Supply Voltage**: 3.0V to 5.5V, <3mA operating current
- **Temperature Range**: -40°C to +125°C sensing, ±1°C accuracy
- **PWM Frequency**: 20Hz to 30kHz, 16-bit resolution (0.015% steps)
- **PWM Outputs**: 4 channels, 1A peak current, 50mΩ on-resistance
- **Tachometer Inputs**: 4 channels, 0-15,000 RPM measurement
- **Interface**: I2C/SMBus up to 400 kbit/s
- **Power Consumption**: 15mW typical at 5V, <1μW shutdown mode
- **Package Options**: SOIC-16, QFN-24 (4mm × 4mm), TSSOP-20
