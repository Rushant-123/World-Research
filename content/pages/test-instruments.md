---
title: "Electronic Test Instruments"
company: "Keysight Technologies"
country: "United States"
selling_price: 15.0
inputs:
  - name: "ADC/DAC Components"
    cost: 2.0
    link: "analog-asic"
  - name: "Signal Processing"
    cost: 1.5
    link: "printed-circuit-board"
  - name: "Display"
    cost: 0.8
    link: "microled-display"
  - name: "Power Supply"
    cost: 0.6
    link: "power-ic"
  - name: "Chassis"
    cost: 0.8
    link: "steel-fabrication"
  - name: "Firmware"
    cost: 1.5
    link: "software-developers"
value_created: 7.8
---

1. Source specifications from customer requirements and IEEE standards for test instrument accuracy and bandwidth
2. Design oscilloscope architecture with 1 GHz to 100 GHz bandwidth depending on model tier
3. Select high-speed ADC chips with 10-80 GSPS (gigasamples per second) sample rates for real-time acquisition
4. Design front-end attenuator network with 1 MΩ input impedance and 1:1, 10:1, 100:1 probe compensation
5. Implement bandwidth limiting filters at 20 MHz, 200 MHz steps to reduce noise in measurements
6. Design trigger circuitry with edge, pulse width, runt, setup/hold, and pattern trigger modes
7. Specify vertical resolution of 8-bit standard, 12-bit high-resolution, or 16-bit precision modes
8. Design acquisition memory with 10 Mpts to 1 Gpts depth for long capture windows
9. Implement equivalent-time sampling for bandwidths exceeding real-time ADC rates, achieving 200 GSPS equivalent
10. Design time base accuracy of ±1 ppm with temperature-compensated crystal oscillator (TCXO)
11. Source analog front-end ASICs providing variable gain amplifiers with 50 dB dynamic range
12. Design input protection circuits withstanding ±400V overvoltage without damage
13. Implement offset compensation allowing ±10V DC offset on 1 mV/div sensitivity ranges
14. Design digital signal processing FPGA for waveform averaging, peak detection, and FFT analysis
15. Specify FFT analysis with 1 million points and spectral resolution to 0.0001 Hz
16. Source high-speed digital multimeter ADC with 22-bit to 24-bit resolution for precision measurements
17. Design DMM input stage with 10 GΩ input impedance on voltage ranges above 100V
18. Implement true RMS conversion for AC measurements from 3 Hz to 300 kHz frequency range
19. Design current shunt resistors with 0.01% tolerance and 2 ppm/°C temperature coefficient
20. Specify DMM accuracy of ±0.0035% for DC voltage, ±0.06% for AC voltage measurements
21. Design resistance measurement using 4-wire Kelvin sensing eliminating lead resistance errors
22. Implement continuity testing with adjustable threshold from 1Ω to 1000Ω and audible beeper
23. Design capacitance measurement from 1 nF to 100 mF using charge/discharge timing methods
24. Source precision voltage reference with 0.5 ppm/°C stability for DMM calibration standards
25. Design function generator using direct digital synthesis (DDS) with 14-bit to 16-bit DAC resolution
26. Specify function generator frequency range from 1 μHz to 500 MHz covering DC to RF applications
27. Implement arbitrary waveform generation with 1 GSa/s output rate and 16 Mpts waveform memory
28. Design output amplifier with 10 Vpp into 50Ω load, 20 Vpp into high impedance
29. Specify waveform library including sine, square, triangle, pulse, ramp, noise, and arbitrary shapes
30. Implement frequency modulation (FM), amplitude modulation (AM), and phase modulation (PM) capabilities
31. Design pulse generator with rise/fall times under 5 ns and pulse width from 10 ns to 1000 s
32. Source low-jitter clock generator with <1 ps RMS jitter for timing-critical applications
33. Design sweep function covering linear, logarithmic frequency sweeps from 1 mHz to full bandwidth
34. Implement burst mode generating 1 to 1 million cycles triggered internally or externally
35. Design output impedance switching between 50Ω and high-Z with automatic amplitude compensation
36. Source logic analyzer acquisition system with 34 to 136 digital channels depending on model
37. Design logic analyzer with 4 GSa/s to 10 GSa/s sampling on timing analysis
38. Implement state analysis at 500 MHz to 2 GHz clock rates for synchronous digital systems
39. Design threshold voltage adjustable from -6V to +6V with 10 mV resolution per channel
40. Specify trigger capability on complex digital patterns including setup/hold violations and glitches
41. Design deep memory storage of 128 Mpts to 4 Gpts for capturing long protocol transactions
42. Implement protocol decode for I2C, SPI, UART, CAN, LIN, USB, Ethernet, PCIe standards
43. Design mixed-signal oscilloscope combining 4 analog channels with 16 digital timing channels
44. Source high-impedance active probes with 10 MΩ, 10 pF input loading and 1 GHz bandwidth
45. Design differential probes with 50 dB common-mode rejection ratio (CMRR) at 100 MHz
46. Implement current probes using Hall effect sensors measuring 1 mA to 3000 A ranges
47. Design RF power meter covering -70 dBm to +44 dBm with ±0.02 dB accuracy
48. Source diode sensors, thermocouple sensors for average, peak, and pulsed RF power measurement
49. Design spectrum analyzer with frequency range from 9 kHz to 26.5 GHz or 50 GHz
50. Specify spectrum analyzer resolution bandwidth (RBW) filters from 1 Hz to 10 MHz in 1-3-10 steps
51. Implement spectrum analyzer noise floor of -165 dBm/Hz with preamplifier enabled
52. Design swept superheterodyne architecture with YIG-tuned or PLL local oscillators for low phase noise
53. Implement real-time spectrum analysis (RTSA) with 100% probability of intercept for transient signals
54. Design vector signal analyzer for I/Q demodulation analyzing digital modulation schemes
55. Source vector network analyzer (VNA) covering 10 MHz to 67 GHz for S-parameter measurements
56. Design VNA with 4-port, 8-port, or 16-port configuration for multi-port device characterization
57. Specify VNA dynamic range exceeding 120 dB and trace noise floor below -110 dBm
58. Implement time-domain reflectometry (TDR) and time-domain transmission (TDT) for impedance analysis
59. Design calibration kits with open, short, load, through (OSLT) standards traceable to SI units
60. Source precision impedance analyzer measuring |Z| from 40 μΩ to 100 MΩ, frequency 1 mHz to 120 MHz
61. Design LCR meter with 0.05% basic accuracy for inductance, capacitance, resistance measurements
62. Implement impedance analyzer test fixtures with Kelvin connections and guard shielding
63. Design DC power supply with voltage ranges 0-6V, 0-20V, 0-60V, 0-600V depending on model
64. Specify power supply current capability from 100 mA to 100 A with constant current/constant voltage modes
65. Implement power supply output regulation of 0.01% load regulation and 0.01% line regulation
66. Design low-noise power supply with <1 mVpp ripple and <50 μVrms noise on DC outputs
67. Source programmable electronic loads for battery testing, power supply characterization applications
68. Design electronic load with constant current, constant voltage, constant resistance, constant power modes
69. Implement electronic load sinking 0-120V, 0-240A with power dissipation to 2400W per channel
70. Design oscilloscope chassis using aluminum extrusion with EMI shielding and ventilation channels
71. Specify instrument enclosure dimensions complying with 19-inch rack-mount standards (1U to 6U height)
72. Machine front panel from anodized aluminum with cutouts for display, connectors, and controls
73. Design thermal management with forced-air cooling using variable-speed fans maintaining <40°C junction temperature
74. Implement internal power supply with switching regulators providing +3.3V, +5V, ±12V rails
75. Design linear post-regulators for analog circuits requiring <10 μVrms noise on supply rails
76. Source 10.4-inch to 15.6-inch TFT LCD or OLED display with 1920x1080 resolution and touchscreen
77. Design display interface using HDMI, DisplayPort for external monitor output capability
78. Implement capacitive touchscreen with multi-touch gesture support for zoom, pan, measurement operations
79. Design rotary encoder knobs with detents and push-button function for menu navigation
80. Source illuminated pushbutton switches with LED indicators for function selection and trigger control
81. Design BNC connectors with 75Ω or 50Ω characteristic impedance for oscilloscope and signal inputs
82. Implement front-panel USB ports (USB-A, USB-C) for firmware updates and data transfer
83. Design rear-panel GPIB (IEEE-488.2) interface for legacy test system integration
84. Source LAN (Ethernet) interface supporting LXI (LAN eXtensions for Instrumentation) Class C compliance
85. Implement USB-TMC (Test and Measurement Class) for direct PC control without drivers
86. Design SCPI (Standard Commands for Programmable Instruments) command parser in firmware
87. Specify remote programming interfaces supporting MATLAB, Python, LabVIEW, C/C++ client libraries
88. Implement web server embedded in instrument allowing browser-based control and monitoring
89. Design VNC or RDP server for full remote desktop access to instrument display
90. Source solid-state drive (SSD) with 128 GB to 1 TB capacity for waveform, screenshot storage
91. Design file system supporting USB flash drive formatting (FAT32, exFAT) for easy data exchange
92. Implement screenshot capture saving to PNG, BMP formats with timestamped filenames
93. Design waveform export to CSV, binary formats compatible with MATLAB, Excel analysis tools
94. Specify firmware operating system based on embedded Linux or real-time OS (RTOS)
95. Design application software architecture separating measurement engine, user interface, communication layers
96. Implement measurement algorithms for rise time, fall time, frequency, period, duty cycle, amplitude
97. Design advanced measurements: overshoot, preshoot, jitter, eye diagram analysis, mask testing
98. Source FPGA for real-time trigger decision logic processing at full ADC sample rate
99. Design histogram analysis showing distribution of voltage, time measurements over acquisition window
100. Implement persistence display modes showing signal stability, glitches with intensity grading
101. Design math functions including add, subtract, multiply, divide, integrate, differentiate waveforms
102. Implement FFT windowing functions: rectangular, Hamming, Hann, Blackman-Harris for spectral analysis
103. Design automatic measurement statistics: mean, min, max, standard deviation, count over multiple acquisitions
104. Specify limit testing comparing measurements against user-defined pass/fail criteria with beeper alert
105. Implement sequence mode capturing multiple triggered events storing 10 to 10,000 individual waveforms
106. Design segmented memory mode efficiently storing repetitive signals with dead time between events
107. Source calibration reference standards traceable to NIST (National Institute of Standards and Technology)
108. Design automated self-calibration routine adjusting gain, offset, timebase at power-on or user command
109. Implement temperature sensors monitoring critical components triggering fan speed adjustment
110. Design full factory calibration procedure executed at 23°C ±1°C in controlled metrology laboratory
111. Specify calibration interval recommendation of 12 months maintaining published accuracy specifications
112. Source precision DC voltage calibrator outputting 0V, 1V, 10V, 100V with 10 ppm uncertainty
113. Design AC voltage calibrator providing 1 kHz, 10 kHz sine waves with 0.02% amplitude uncertainty
114. Implement time interval calibrator using GPS-disciplined oscillator with 10 ps timing uncertainty
115. Design RF signal generator with phase-locked output at 50 MHz, 1 GHz for spectrum analyzer calibration
116. Source frequency counter with 12-digit resolution and 100 ps single-shot time interval capability
117. Design gain calibration adjusting ADC transfer function linearity to ±0.5% over full scale
118. Implement offset calibration nulling input amplifier DC errors to <50 μV
119. Design bandwidth calibration verifying -3 dB frequency point within ±3% of specification
120. Specify flatness calibration ensuring amplitude response within ±1 dB from DC to 0.8× bandwidth
121. Implement timebase calibration locking internal oscillator to external 10 MHz reference
122. Design trigger level calibration adjusting comparator thresholds to ±1% of setting
123. Source DMM calibration using Josephson voltage standard providing 1.018 V with 0.001 ppm uncertainty
124. Implement resistance calibration using temperature-controlled standard resistors (100Ω, 10 kΩ, 1 MΩ)
125. Design capacitance calibration employing standard capacitors with 0.01% tolerance
126. Specify oscilloscope probe compensation adjustment generating 1 kHz square wave for user probe calibration
127. Implement automatic probe recognition detecting probe attenuation factor (1×, 10×, 100×) via coding resistor
128. Design probe calibration signal output providing 1 kHz, 1 Vpp square wave for 10× probe adjustment
129. Source environmental test chamber performing temperature testing from -20°C to +60°C operating range
130. Design burn-in testing running instruments at 50°C ambient for 48 hours detecting infant mortality failures
131. Implement thermal shock testing cycling between -40°C and +70°C verifying solder joint reliability
132. Design vibration testing per MIL-STD-810 simulating transportation and operational vibration environments
133. Specify EMI/EMC testing in anechoic chamber verifying compliance with FCC Part 15, CISPR 11 standards
134. Implement ESD testing per IEC 61000-4-2 applying ±8 kV contact discharge, ±15 kV air discharge
135. Design safety testing verifying compliance with IEC 61010-1 for electrical test equipment safety
136. Source power line disturbance testing with voltage dips, surges, interruptions per IEC 61000-4-11
137. Implement RF immunity testing exposing instrument to 10 V/m field strength 80 MHz to 6 GHz
138. Design conducted immunity testing injecting RF currents on power and signal cables per IEC 61000-4-6
139. Specify accuracy verification testing comparing measurements against transfer standards with known values
140. Implement linearity testing verifying ADC integral nonlinearity (INL) and differential nonlinearity (DNL) <0.5 LSB
141. Design noise floor measurement confirming input-referred noise below specification across all gain settings
142. Source automated test equipment (ATE) for production testing 100% of manufactured instruments
143. Design production test fixtures with pogo pins connecting to instrument test points
144. Implement boundary scan testing using JTAG interface verifying FPGA, microprocessor functionality
145. Design functional testing exercising all modes: acquisition, triggering, measurements, math functions
146. Specify performance testing measuring key specifications: bandwidth, sample rate, accuracy, noise floor
147. Implement calibration data storage in non-volatile EEPROM recording calibration constants and dates
148. Design traceability database linking each instrument serial number to calibration certificates and test results
149. Source metrology software managing calibration schedules, uncertainty budgets, measurement traceability
150. Implement ISO/IEC 17025 accredited calibration laboratory for internal calibration services
151. Design measurement uncertainty analysis calculating Type A, Type B uncertainty components per GUM
152. Specify calibration certificates documenting measurement results, uncertainties, standards used, technician identification
153. Implement adjustment procedures iterating calibration measurements and adjustments converging to specification limits
154. Design verification-only calibration documenting instrument performance without making adjustments
155. Source guard banding where instrument specifications are tighter than published ensuring compliance over calibration interval
156. Implement drift analysis tracking instrument performance over time predicting optimal calibration intervals
157. Design firmware self-test routines executed at power-on checking RAM, ROM, FPGA configuration
158. Specify built-in test (BIT) procedures verifying ADC, DAC, trigger circuits without external equipment
159. Implement loopback testing routing internal signals through front-end circuits verifying signal path integrity
160. Design diagnostic menus displaying internal voltages, temperatures, FPGA status for troubleshooting
161. Source firmware update mechanism using USB flash drive or network download with rollback capability
162. Implement secure boot verifying firmware integrity using cryptographic signatures preventing malware
163. Design modular architecture allowing field replacement of analog boards, digital boards, power supplies
164. Specify calibration constants stored redundantly in multiple locations preventing data loss
165. Implement battery backup for real-time clock maintaining time/date during power-off periods
166. Design option licensing system enabling software features (bandwidth, memory depth, protocols) via license keys
167. Source software options for advanced triggering, serial protocol decode, power analysis, jitter analysis
168. Implement trial licenses allowing temporary evaluation of premium features for 30-day periods
169. Design cloud connectivity uploading measurements to vendor cloud for remote monitoring and data analysis
170. Specify API access allowing third-party applications to control instruments and retrieve measurement data
171. Implement data logging recording measurements at defined intervals storing up to 1 million data points
172. Design alarm functions triggering outputs, emails, or alerts when measurements exceed defined limits
173. Source training materials including user manuals, quick-start guides, video tutorials for customer education
174. Implement context-sensitive help system displaying information relevant to current instrument mode or menu
175. Design simulation modes allowing students to learn instrument operation without physical hardware
176. Specify accessory catalog including probes, adapters, calibration fixtures, rack-mount kits, carrying cases
177. Implement probe degaussing function for current probes removing residual magnetization before measurements
178. Design battery-powered portable oscilloscope models with 4-8 hour runtime for field service applications
179. Source rechargeable lithium-ion battery packs with charge management circuits and fuel gauge indicators
180. Implement power-saving modes dimming display, reducing sample rates during idle periods extending battery life
181. Design handheld DMM form factor with rugged case, rubber holster, IP54 ingress protection rating
182. Specify clamp meter design integrating current transformer into hinged jaw measuring conductors without breaking circuit
183. Implement data hold function freezing display allowing technician to view reading after removing test leads
184. Design min/max recording capturing highest and lowest readings over measurement session
185. Source automotive multimeter with duty cycle measurement, dwell angle, RPM functions for vehicle diagnostics
186. Implement diode test applying constant current (typically 1 mA) measuring forward voltage drop
187. Design continuity test with fast response time (<1 ms) suitable for testing switches, relays, connectors
188. Specify non-contact voltage detector indicating presence of AC voltage without electrical contact
189. Implement flashlight or worklight integrated into meter housing illuminating test points in dark enclosures
190. Design magnet holder or stand allowing hands-free operation suspending meter in convenient viewing position
191. Source benchtop power supply with master/slave tracking mode paralleling outputs for higher current
192. Implement output sequencing controlling turn-on/turn-off order preventing latch-up in multi-rail systems
193. Design arbitrary waveform power supply generating complex voltage/current profiles for battery simulation
194. Specify list mode stepping through programmed voltage/current settings for automated test sequences
195. Implement GPIB, USB, LAN remote interfaces allowing automated test system integration with SCPI command compatibility
