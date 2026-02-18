---
title: "Touch Controller IC"
company: "Broadcom Inc."
country: "United States"
selling_price: 2.5
inputs:
  - name: "Silicon Wafer"
    cost: 0.3
    link: "silicon-wafer"
  - name: "Photolithography"
    cost: 0.4
    link: "photolithography-equipment"
  - name: "IC Packaging"
    cost: 0.2
    link: "package-substrate"
  - name: "Firmware Development"
    cost: 0.3
    link: "software-developers"
  - name: "Testing"
    cost: 0.15
    link: "board-tester"
  - name: "Wire Bonding"
    cost: 0.1
    link: "wire-bonder"
value_created: 1.05
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

Manufacturing a touch controller IC requires designing sophisticated analog front-end circuits, implementing capacitance sensing with sub-femtofarad resolution, developing multi-touch tracking algorithms, and fabricating using advanced CMOS processes. The controller must scan at rates exceeding 120Hz, achieve signal-to-noise ratios above 50dB, reject electromagnetic interference, and consume less than 10mW during active scanning while tracking up to 10 simultaneous touch points with sub-millimeter accuracy.

## Design Phase

1. Define system requirements: 120Hz minimum scan rate, 10-point multi-touch, <10mW active power, 50dB SNR, 0.5mm position accuracy
2. Select CMOS process node: 65nm or 40nm for balance of analog performance and digital logic density
3. Partition architecture: analog front-end, ADC array, digital signal processor, state machine, host interface
4. Design mutual capacitance sensing matrix: drive electrodes create electric field measured by receive electrodes
5. Calculate capacitance budget: baseline 10-15pF, touch event adds 0.2-2pF depending on finger coupling
6. Specify charge amplifier sensitivity: 1mV/fF resolution to detect femtofarad-level capacitance changes
7. Design integrating charge amplifier with reset switch and feedback capacitor (50-100fF)
8. Add programmable gain stage: 1x to 16x to accommodate different sensor sizes and panel thicknesses
9. Design correlated double sampling circuit to eliminate reset noise and 1/f noise from charge amplifier
10. Implement baseline tracking: continuously monitor untouched capacitance to compensate for temperature and humidity drift

## Analog Front-End Design

11. Design transmit driver: square wave output, 100-500kHz carrier frequency, 3-5V amplitude, <5ns edge rates
12. Add slew rate control to transmit drivers to reduce electromagnetic emissions while maintaining signal quality
13. Design receiver input protection: ESD diodes, clamping circuits to prevent damage from static discharge events
14. Implement receive buffer amplifier: high input impedance (>1GΩ), low input capacitance (<1pF), wide bandwidth
15. Design anti-aliasing filter: 4th order low-pass, cutoff at 2-3x carrier frequency to prevent aliasing in ADC
16. Add programmable capacitance cancellation: DAC-controlled capacitor array subtracts baseline capacitance
17. Implement synchronous demodulator: multiplies received signal by transmit reference to extract amplitude
18. Design low-pass filter after demodulation: extracts DC component representing capacitance magnitude
19. Add offset correction DAC: 8-10 bits, compensates for channel-to-channel baseline variations
20. Implement calibration storage: on-chip EEPROM or OTP memory stores per-channel correction coefficients

## ADC Architecture

21. Select ADC type: successive approximation (SAR) for power efficiency, 12-14 bit resolution
22. Design SAR logic: binary search algorithm, capacitor array switching, comparator with <1mV offset
23. Implement differential architecture: reduces common-mode noise, doubles signal swing
24. Add chopping or auto-zeroing to comparator: eliminates offset drift over temperature
25. Design reference voltage generator: bandgap circuit provides 1.2V reference, <10ppm/°C temperature coefficient
26. Implement reference buffer: low output impedance drives capacitor array switching transients
27. Add input multiplexer: routes multiple receive channels to single ADC, minimizes die area
28. Design sampling clock generator: phase-locked loop synchronizes sampling to transmit frequency
29. Implement oversampling and decimation: 4-8x oversampling improves effective SNR by 6-12dB
30. Add digital calibration: compensates for capacitor mismatch in SAR array, improves linearity

## Digital Signal Processor

31. Design fixed-point DSP core: 16-24 bit datapath, multiply-accumulate unit, optimized for filter operations
32. Implement RAM blocks: store raw ADC samples, filter coefficients, baseline values, touch coordinates
33. Add DMA controller: transfers data between processing stages without CPU intervention
34. Design instruction ROM: stores signal processing firmware, finite state machine code
35. Implement finite impulse response (FIR) filters: remove high-frequency noise, improve SNR to >50dB
36. Add infinite impulse response (IIR) filters: baseline tracking with time constants of 100ms-1s
37. Design frequency hopping algorithm: cycles between 3-5 carrier frequencies to avoid narrow-band interference
38. Implement spread-spectrum modulation: pseudo-random frequency modulation reduces EMI by 10-15dB
39. Add adaptive filtering: monitors noise floor, adjusts filter parameters for optimal SNR vs response time
40. Design median filter: removes impulse noise from charger interference, display noise

## Capacitance Sensing Matrix Control

41. Implement scanning state machine: sequentially drives transmit electrodes, reads corresponding receive channels
42. Add multi-frequency scanning: uses different frequencies for different electrodes to enable simultaneous scanning
43. Design timing controller: generates precise timing for drive pulses, ADC sampling, demodulation
44. Implement integration time control: adjusts measurement duration for SNR vs scan rate tradeoff
45. Add burst mode: sends multiple pulses per measurement, averages results for improved noise immunity
46. Design mutual capacitance calculation: subtracts baseline, applies gain correction, outputs calibrated values
47. Implement self-capacitance mode: measures absolute capacitance of each electrode, used for hover detection
48. Add waterproofing mode: increases sensitivity and adjusts thresholds to detect touches through water layer
49. Design palm rejection sensing: identifies large contact areas vs fingertips based on capacitance pattern
50. Implement force sensing: correlates contact area with applied pressure for pressure-sensitive input

## Noise Filtering and Signal Processing

51. Design Kalman filter: optimal state estimation tracks touch position with prediction and measurement update
52. Implement median of 5 filter: robust outlier rejection for each channel before processing
53. Add boxcar averaging: sliding window average over 2-4 samples smooths jitter
54. Design notch filters: removes 50/60Hz power line interference and harmonics up to 10th harmonic
55. Implement adaptive notch filter: automatically detects and removes narrow-band interference sources
56. Add charge pump noise rejection: identifies switching frequency from DC-DC converters, creates notch filter
57. Design display noise blanking: synchronizes with display refresh, ignores samples during high-noise periods
58. Implement frequency domain analysis: FFT identifies dominant noise sources for dynamic filter configuration
59. Add signal-to-noise ratio monitoring: continuously measures SNR, triggers sensitivity adjustments
60. Design grounding path analysis: monitors common-mode noise level, adjusts sensing thresholds

## Multi-Touch Detection Algorithm

61. Implement image formation: converts 1D electrode measurements into 2D capacitance image array
62. Design background subtraction: subtracts idle baseline image from current frame
63. Add spatial filtering: 2D convolution with Gaussian kernel smooths image, reduces sensor granularity
64. Implement gradient calculation: computes partial derivatives in X and Y to find edges of touch regions
65. Design threshold detection: identifies pixels above noise floor as potential touch candidates
66. Add hysteresis thresholding: separate thresholds for touch detection and touch release prevents oscillation
67. Implement connected component labeling: groups adjacent pixels into distinct touch regions (blobs)
68. Design centroid calculation: weighted average of pixel positions within each blob finds touch center
69. Add subpixel interpolation: parabolic or sinc interpolation achieves <0.5mm position resolution
70. Implement touch classification: distinguishes fingers, palms, water drops based on size and shape

## Touch Tracking Engine

71. Design touch event state machine: tracks states NEW, MOVING, STATIONARY, RELEASED for each touch point
72. Implement motion prediction: linear or quadratic extrapolation predicts next position for fast-moving touches
73. Add velocity calculation: computes instantaneous velocity from position deltas, filters for smooth output
74. Design acceleration calculation: second derivative of position enables gesture detection
75. Implement touch matching algorithm: associates detected touches with existing tracks using nearest-neighbor
76. Add Hungarian algorithm: optimal assignment for ambiguous cases with multiple nearby touches
77. Design confidence scoring: rates quality of each touch based on SNR, size consistency, motion smoothness
78. Implement touch ID assignment: maintains persistent IDs as touches move, enables multi-touch gestures
79. Add ghost touch rejection: identifies and suppresses false touches from matrix scanning artifacts
80. Design linearity compensation: corrects for position-dependent sensing errors near edges and corners

## Gesture Recognition

81. Implement single-tap detection: touch duration <200ms, minimal motion, validates as intentional input
82. Design double-tap detection: two taps within 300ms, <5mm apart, common zoom or select gesture
83. Add long-press detection: touch held >500ms without movement, often used for context menus
84. Implement swipe gesture: rapid linear motion >30mm in <500ms, tracks direction and velocity
85. Design pinch-to-zoom: monitors distance between two touches, outputs scale factor
86. Add rotation gesture: calculates angle between two touches, tracks angular velocity
87. Implement three-finger swipe: detects coordinated motion of three touches for app switching
88. Design four-finger swipe: less common gesture for advanced navigation
89. Add edge swipes: detects swipes starting from screen edge, used for system-level gestures
90. Implement custom gesture recognition: state machine allows programming device-specific gestures

## Power Management

91. Design multiple power domains: analog front-end, ADC, DSP core, memory, I/O independently controlled
92. Implement idle mode: stops scanning, retains configuration, <100μW power consumption
93. Add doze mode: scans at reduced rate (10-20Hz), wakes to full speed when touch detected
94. Design proximity detection: monitors self-capacitance at low rate to detect approaching hand
95. Implement scan rate scaling: adjusts scan rate based on touch activity (60Hz idle, 120-240Hz active)
96. Add partial scanning: only scans region around active touches, reduces power by 40-60%
97. Design voltage scaling: reduces supply voltage during light loads, improves efficiency
98. Implement clock gating: stops clocks to unused modules, reduces dynamic power
99. Add power state machine: coordinates transitions between sleep, idle, doze, active modes
100. Design wake latency optimization: resumes full scanning within 10-20ms of touch detection

## Firmware Architecture

101. Develop initialization routine: configures registers, loads calibration data, sets default parameters
102. Implement scanning loop: triggers measurements, reads ADC results, stores to buffer
103. Design interrupt handling: processes ADC complete, scan complete, buffer full events
104. Add signal processing pipeline: chains filters, baseline updates, touch detection sequentially
105. Implement touch report generation: formats position, ID, confidence data for host interface
106. Design configuration interface: allows host to adjust sensitivity, scan rate, gesture settings
107. Add calibration routine: measures baseline, computes correction coefficients, stores to non-volatile memory
108. Implement diagnostics mode: outputs raw data, SNR measurements, noise statistics for debug
109. Design firmware update mechanism: allows in-field updates via host interface or dedicated bootloader
110. Add error handling: detects anomalies, resets state machines, logs errors for host

## Noise Mitigation Strategies

111. Implement charger noise detection: identifies characteristic patterns of switching power supplies
112. Design charger armor mode: increases robustness at cost of sensitivity when charger connected
113. Add LCD noise detection: recognizes display refresh patterns, adjusts sensing timing
114. Implement burst frequency cycling: changes frequency every burst to average out narrow-band interference
115. Design guard electrodes: driven shields reduce coupling from noisy components on PCB
116. Add shielding validation: monitors guard electrode integrity, detects broken shield connections
117. Implement common-mode rejection: differential sensing cancels uniform noise across all channels
118. Design ground reference monitoring: measures ground potential, adjusts sensing thresholds
119. Add interference frequency scanning: sweeps carrier frequency, selects cleanest band for operation
120. Implement SNR-based rejection: ignores touch detections when instantaneous SNR drops below threshold

## Wafer Fabrication

121. Start with 200mm or 300mm silicon wafer, <100> crystal orientation, p-type doping
122. Grow initial oxide: 10nm thermal oxide, forms gate dielectric for transistors
123. Deposit polysilicon: 100nm LPCVD polysilicon, will form gate electrodes
124. Pattern poly: photolithography and etch define transistor gates for analog and digital circuits
125. Implant source/drain regions: phosphorus for NMOS (10^19 cm^-3), boron for PMOS (10^19 cm^-3)
126. Activate dopants: rapid thermal anneal at 1000°C for 10 seconds
127. Deposit interlayer dielectric: 500nm PECVD oxide isolates transistors from metal layers
128. CMP planarization: chemical-mechanical polishing creates flat surface for metal deposition
129. Pattern contact vias: photolithography and etch open holes to source/drain/gate regions
130. Deposit barrier metal: titanium nitride prevents metal diffusion into silicon

## Analog Component Fabrication

131. Sputter aluminum: 500nm metal layer forms local interconnects and bottom capacitor plates
132. Pattern first metal: defines charge amplifier capacitors, resistors, local routing
133. Deposit inter-metal dielectric: 1μm oxide separates metal layers
134. Fabricate precision capacitors: metal-insulator-metal structure with SiN dielectric, 1% matching
135. Form precision resistors: polysilicon or metal thin film, laser-trimmed for 0.1% tolerance
136. Pattern second metal: 1μm aluminum for signal routing, power distribution
137. Add third metal: thick copper (2μm) for low-resistance power and ground planes
138. Implement shielding layers: metal planes between analog and digital sections reduce crosstalk
139. Form pad capacitors: large-area caps (1-10nF) for power supply decoupling
140. Add ESD protection structures: diode clamps and resistors on all I/O pins

## Final Processing

141. Deposit passivation: 1μm silicon nitride protects circuits from moisture and contamination
142. Open bond pads: pattern and etch removes passivation over I/O pads for wire bonding
143. Deposit pad metal: aluminum or gold on pads improves wire bond reliability
144. Wafer thinning: backgrind to 100-200μm for thin package profiles
145. Apply backside coating: polymer or metal layer on backside
146. Wafer inspection: automated optical inspection identifies defects
147. Parametric testing: measures transistor parameters on test structures
148. Functional testing: applies test vectors to verify digital logic operation
149. Analog characterization: measures offset, gain, linearity of analog circuits
150. Wafer mapping: records die-level test results, marks failing dice

## Wafer-Level Testing

151. Design for test (DFT): include scan chains, built-in self-test (BIST) for digital logic
152. Implement analog BIST: self-test measures ADC linearity, amplifier offset, reference voltage
153. Probe card setup: aligns tungsten needles to bond pads, makes electrical contact
154. Apply power sequencing: ramps supplies in correct order to prevent latchup
155. Load test patterns: clock in vectors that exercise all logic paths
156. Measure DC parameters: supply current, leakage current, pin voltage levels
157. Test ADC performance: apply reference signals, measure INL/DNL, SNR, ENOB
158. Verify charge amplifier: inject known charge, measure output voltage and linearity
159. Test digital signal processor: run known algorithms, verify computation accuracy
160. Measure timing parameters: setup/hold times, clock-to-output delays, maximum frequency

## Packaging Process

161. Mount die to package substrate: adhesive die attach to BT resin substrate or lead frame
162. Cure die attach: 150°C for 1 hour hardens epoxy, ensures mechanical stability
163. Wire bonding: gold or copper wires connect die pads to package leads, 25μm diameter
164. Optimize bond schedule: 50-100 bonds, minimize loop inductance for high-frequency signals
165. Bond power and ground first: reduces supply impedance for subsequent signal bonds
166. Implement Kelvin connections: separate bond wires for analog supply and ground sense
167. Encapsulation: transfer mold with epoxy molding compound, protects die and bonds
168. Cure mold compound: 175°C for 4-6 hours, fully polymerizes epoxy
169. Deflash: removes excess mold compound from leads and package surfaces
170. Trim and form: singulates packages from strip, forms leads to final shape

## Package Options and Configurations

171. QFN package: quad flat no-lead, 5x5mm to 7x7mm, 32-56 pins, low profile, good thermal performance
172. WLCSP package: wafer-level chip-scale package, smallest form factor, direct solder to PCB
173. BGA package: ball grid array for high pin count applications (>60 I/Os), better signal integrity
174. Design thermal pad: exposed die attach pad on bottom of package improves heat dissipation
175. Add electromagnetic shielding: metal cap or coating reduces emissions, improves immunity
176. Implement package inductance optimization: ground pins adjacent to signal pins reduce loop area
177. Design power delivery network: low-inductance path from package pins to die power pads
178. Add on-package decoupling: embedded capacitors in substrate provide local charge storage
179. Verify package parasitics: measure lead inductance, capacitance, resistance for SI analysis
180. Qualify package reliability: thermal cycling, moisture sensitivity, drop testing per JEDEC standards

## Calibration and Characterization

181. Load firmware: program mask ROM or flash memory with production firmware
182. Apply factory calibration: measure each channel's baseline, gain, offset at controlled conditions
183. Store calibration coefficients: write to OTP memory or EEPROM for runtime use
184. Verify I2C interface: test register reads/writes at 100kHz and 400kHz speeds
185. Characterize scan rate: measure actual frame rate vs configuration settings (60/120/240Hz)
186. Test signal-to-noise ratio: apply reference capacitance, measure SNR (target >50dB)
187. Verify resolution: measure minimum detectable capacitance change (target <100aF)
188. Test linearity: apply varying capacitances, verify position accuracy <0.5mm
189. Measure power consumption: active scan <10mW, idle <100μW, sleep <10μW
190. Test multi-touch tracking: verify simultaneous 10-point detection without ghosts

## EMI Testing and Qualification

191. Conduct EMI emissions testing: radiated emissions per FCC Part 15 Class B or CISPR 22
192. Verify conducted emissions: measure noise on power supply and I/O lines
193. Test electromagnetic immunity: apply EFT bursts, ESD strikes while monitoring performance
194. Verify radiated immunity: expose to RF fields 1-6GHz, 3-10V/m field strength
195. Conduct final system validation: integrate with display panel, test across temperature -20°C to 70°C, humidity 5-95% RH, verify performance in presence of chargers, displays, and RF transmitters, qualify for production release with burn-in testing, reliability projections, and customer approval.
