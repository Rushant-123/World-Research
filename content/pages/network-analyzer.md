---
title: "Vector Network Analyzer"
company: "Keysight Technologies"
country: "United States"
selling_price: 45.0
inputs:
  - name: "RF Signal Source"
    cost: 6.0
    link: "signal-integrity-tester"
  - name: "Precision Receivers"
    cost: 5.0
    link: "signal-integrity-tester"
  - name: "Directional Couplers"
    cost: 3.0
    link: "rf-components"
  - name: "Digital Processing"
    cost: 4.0
    link: "machine-controller"
  - name: "Calibration Kit"
    cost: 3.0
    link: "measurement-tools"
  - name: "Chassis and Display"
    cost: 4.0
    link: "electronics-factory"
value_created: 20.0
---

# Manufacturing Process: Vector Network Analyzer

**Market Leader:** [Keysight Technologies](/companies/keysight-technologies)



## 1. Broadband Signal Source Design (Steps 1-25)

1. Design frequency synthesizer architecture for 10 MHz to 67 GHz frequency range with phase-locked loop topology
2. Select YIG-tuned oscillators for broadband coverage with <-110 dBc/Hz phase noise at 10 kHz offset
3. Design fractional-N PLL frequency synthesizer with 1 Hz frequency resolution and <50 μs switching time
4. Implement direct digital synthesis (DDS) for fine frequency control with 48-bit phase accumulator
5. Design low-noise voltage-controlled oscillator (VCO) array covering octave-band frequency ranges
6. Fabricate ultra-low phase noise crystal reference oscillator at 10 MHz with ±0.1 ppm stability
7. Design temperature-compensated crystal oscillator (TCXO) with oven control for ±0.05 ppm accuracy
8. Implement frequency multiplier chain using step recovery diodes for millimeter-wave generation
9. Design broadband power dividers using Wilkinson topology with 15 dB isolation across frequency range
10. Fabricate precision frequency dividers using emitter-coupled logic (ECL) with <2 ps jitter
11. Design automatic level control (ALC) loop for ±0.2 dB output power flatness across frequency
12. Implement programmable attenuators using PIN diode switches with 0.1 dB step resolution
13. Design broadband amplifier chain with 40 dB gain and ±1 dB flatness from DC to 67 GHz
14. Fabricate coaxial switching matrix using electromechanical relays with >5 million cycle life
15. Design pulse modulation circuitry for pulsed RF measurements with <10 ns rise/fall times
16. Implement frequency offset mode for mixer and converter measurements with ±500 MHz range
17. Design power monitoring circuitry using thermal power sensors with 0.02 dB accuracy
18. Fabricate harmonic filter bank with >40 dB rejection of spurious harmonics up to 10th order
19. Design phase-lock detection circuitry with <100 ns lock time and ±1° phase accuracy
20. Implement swept frequency mode with linear or logarithmic sweep patterns, 1 Hz to 10 MHz/s rates
21. Design frequency hopping mode for EMI reduction with pseudo-random frequency patterns
22. Fabricate precision RF connectors (3.5mm, 2.4mm, 1.85mm) with VSWR <1.15:1 to 67 GHz
23. Design output power leveling system maintaining ±0.1 dB accuracy from -55 to +10 dBm
24. Implement intermodulation distortion correction algorithms achieving <-65 dBc non-linearity
25. Test signal source for frequency accuracy (±1 ppm), phase noise, and harmonic suppression

## 2. Directional Coupler Fabrication (Steps 26-45)

26. Design broadband directional couplers using microstrip branch-line topology for 20 dB coupling
27. Select low-loss RF substrate material (Rogers RO4003C) with εr = 3.55 and tan δ = 0.0027
28. Calculate microstrip transmission line dimensions for 50Ω impedance across frequency range
29. Design multi-section coupler for octave bandwidth with Chebyshev impedance transformation
30. Fabricate copper traces using photolithography with 5 μm line width tolerance
31. Apply electroplated gold finish (0.5 μm) over nickel barrier layer for corrosion resistance
32. Design compensated directional couplers with >25 dB directivity from 300 kHz to 67 GHz
33. Implement broadband resistive terminations using thin-film resistors with <0.1% tolerance
34. Fabricate coupled-line couplers using stripline construction for improved isolation
35. Design tapered transitions between coupler sections for VSWR <1.2:1 across full bandwidth
36. Mount couplers in precision-machined aluminum housing with μm-level flatness tolerance
37. Implement temperature compensation using matched substrate materials with TCF <50 ppm/°C
38. Design dual-directional couplers for simultaneous forward and reverse power measurement
39. Fabricate quarter-wave coupled sections with coupling coefficient tolerance ±0.3 dB
40. Implement broadband matching networks using lumped LC elements for sub-GHz operation
41. Design waveguide directional couplers for millimeter-wave bands (50-110 GHz) using multi-hole coupling
42. Machine waveguide couplers from brass stock with ±5 μm dimensional tolerance
43. Gold-plate waveguide interiors to 2.5 μm thickness for conductivity >90% of bulk gold
44. Test directional couplers for coupling factor (20 ±0.5 dB), directivity (>25 dB), and insertion loss
45. Calibrate coupler frequency response using VNA reference standards traceable to NIST

## 3. Precision Receiver Assembly (Steps 46-70)

46. Design superheterodyne receiver architecture with 3-stage downconversion to 375 MHz IF
47. Select low-noise amplifier (LNA) with <2 dB noise figure and +20 dBm IP3 for first stage
48. Design image-reject mixer topology with >40 dB image rejection using quadrature LO signals
49. Implement automatic gain control (AGC) with 100 dB dynamic range and <1 μs response time
50. Fabricate precision IF filters using crystal or SAW technology with 3 MHz bandwidth and >70 dB rejection
51. Design synchronous detector using I/Q demodulation for magnitude and phase measurement
52. Implement digital IF processing using quadrature sampling at 1 GSPS rate
53. Design reference receiver channel with identical signal path for ratiometric measurements
54. Fabricate low-phase noise local oscillator distribution network with <0.5° phase matching
55. Implement receiver protection circuits using PIN diode limiters for +27 dBm maximum input
56. Design precision RF attenuators with 0.1 dB steps and >80 dB range for signal conditioning
57. Fabricate receiver frontend using GaAs or GaN MMIC technology for wideband operation
58. Design temperature-stabilized receiver enclosure maintaining ±1°C for drift <0.01 dB/°C
59. Implement noise source switching for noise figure measurements from 0.5 to 30 dB range
60. Design bias tee networks for supplying DC power to active devices under test (DUT)
61. Fabricate shielded receiver compartments with >100 dB isolation between measurement channels
62. Implement receiver calibration using known reference signals for gain and phase correction
63. Design automatic offset nulling for DC drift compensation achieving <10 μV offset
64. Fabricate precision voltage dividers for receiver gain ranging with 0.01 dB accuracy
65. Implement coherent signal detection using phase-locked sampling synchronized to source
66. Design pulse profile analysis mode for characterizing pulsed RF signals with <1 ns resolution
67. Fabricate low-noise power supplies with <10 μVrms ripple for receiver bias circuitry
68. Implement digital filtering with programmable bandwidth from 1 Hz to 3 MHz for noise reduction
69. Design automatic receiver ranging to optimize measurement speed and dynamic range
70. Test receiver performance for noise figure, linearity, group delay, and frequency response

## 4. ADC Integration and Digital Signal Path (Steps 71-85)

71. Select high-speed analog-to-digital converters with 16-bit resolution and 500 MSPS sampling rate
72. Design anti-aliasing filters with 80 dB stopband rejection and linear phase response
73. Implement quadrature sampling architecture for complex signal representation (I/Q data)
74. Design sample clock distribution network with <500 fs RMS jitter using low-jitter PLLs
75. Fabricate differential input buffer amplifiers with >80 dB CMRR and 2 GHz bandwidth
76. Implement ADC calibration routines correcting for offset, gain, and non-linearity errors
77. Design digital downconversion (DDC) using CORDIC algorithms for baseband translation
78. Implement configurable decimation filters with programmable rates from 1x to 1024x
79. Design FPGA-based signal processing pipeline with parallel processing for real-time analysis
80. Implement fast Fourier transform (FFT) engine with up to 100,001 frequency points
81. Design windowing functions (Hanning, Kaiser, Flat-top) for spectral leakage reduction
82. Implement vector error correction algorithms applying calibration coefficients in real-time
83. Design data streaming interface using PCIe Gen 3 x8 for >6 GB/s data throughput
84. Implement measurement averaging with selectable averaging factor from 1 to 999,999
85. Test ADC performance for ENOB (effective number of bits), THD, and SFDR specifications

## 5. DSP Firmware and Measurement Algorithms (Steps 86-110)

86. Develop firmware architecture supporting modular measurement personalities (S-parameter, gain-compression)
87. Implement S-parameter calculation engine computing S11, S21, S12, S22 from raw receiver data
88. Design error correction algorithms applying 12-term error model for systematic error removal
89. Implement de-embedding algorithms for fixture and cable loss compensation in measurements
90. Design port extension algorithm for electrical delay compensation achieving <1° phase accuracy
91. Implement time-domain transformation using inverse FFT with time windowing (gating)
92. Design smoothing and averaging algorithms with adjustable bandwidth for noise reduction
93. Implement limit testing with user-defined pass/fail boundaries for production testing
94. Design trace math functions including addition, subtraction, multiplication, and division
95. Implement format conversions between log magnitude, linear magnitude, phase, group delay, VSWR
96. Design marker functions with peak search, bandwidth measurement, and delta markers
97. Implement electrical delay measurement calculating group delay from phase slope
98. Design fixture simulation capabilities modeling de-embedding networks as 2-port S-parameters
99. Implement balanced device measurements for differential components using 4-port VNA configuration
100. Design uncertainty analysis calculating measurement confidence bounds from calibration data
101. Implement ripple limit testing for detecting periodic variations in frequency response
102. Design frequency translation mode for measuring mixers and frequency converters
103. Implement compression point search automatically finding 1-dB gain compression frequency
104. Design intermodulation distortion measurements using two-tone stimulus with variable spacing
105. Implement noise figure measurement using cold-source technique and Y-factor method
106. Design harmonic measurements displaying fundamental through 10th harmonic with markers
107. Implement mixer conversion loss measurements accounting for LO and IF port characteristics
108. Design fault location using time-domain reflectometry (TDR) with <1 mm distance resolution
109. Implement eye diagram and constellation analysis for digital modulation characterization
110. Test firmware for measurement accuracy, repeatability, and compliance with IEEE standards

## 6. Calibration Algorithms - SOLT Method (Steps 111-125)

111. Implement Short-Open-Load-Thru (SOLT) calibration algorithm for 2-port error correction
112. Design calibration data acquisition measuring all four error terms at each frequency point
113. Implement Short standard model with offset delay and residual inductance correction
114. Design Open standard model accounting for fringing capacitance at connector interface
115. Implement Load standard model with frequency-dependent impedance characteristics
116. Design Thru standard measurement for transmission tracking and crosstalk determination
117. Implement 12-term error model separating directivity, source match, and reflection tracking
118. Design isolation measurement between VNA ports using terminated opposite port
119. Implement automatic load standard detection verifying 50Ω termination within tolerance
120. Design calibration coefficient calculation using matrix algebra on raw measurement data
121. Implement calibration verification using check standards (quarter-wave short, airline)
122. Design calibration interpolation for measurements between calibrated frequency points
123. Implement calibration extrapolation with warnings for out-of-range measurements
124. Design calibration kit definition editor for custom or third-party calibration standards
125. Test SOLT calibration achieving <0.02 dB magnitude and <0.5° phase accuracy to 50 GHz

## 7. Calibration Algorithms - TRL Method (Steps 126-138)

126. Implement Thru-Reflect-Line (TRL) calibration for on-wafer and fixture measurements
127. Design Thru connection measurement establishing reference impedance plane
128. Implement Reflect measurement using unknown but identical reflection standards
129. Design Line standard measurement using transmission line with 20-160° electrical length
130. Implement automatic line length calculation from phase difference between Thru and Line
131. Design characteristic impedance determination from TRL calibration data
132. Implement multi-line TRL extending calibration bandwidth using multiple line lengths
133. Design automatic frequency range selection based on line electrical length validity
134. Implement reference impedance transformation converting measurements to 50Ω reference
135. Design TRL calibration for differential and common-mode measurements on balanced devices
136. Implement uncertainty analysis specific to TRL method showing frequency-dependent accuracy
137. Design automatic line standard verification checking for excessive loss or discontinuities
138. Test TRL calibration on coplanar waveguide structures achieving <0.03 dB accuracy

## 8. Advanced Calibration Methods (Steps 139-148)

139. Implement Line-Reflect-Match (LRM) calibration combining advantages of SOLT and TRL
140. Design Unknown Thru calibration for fixtures where Thru standard is not available
141. Implement electronic calibration (ECal) using programmable impedance modules
142. Design ECal module control interface via USB with automatic standard switching
143. Implement auto-calibration routine reducing calibration time to <30 seconds for 2-port
144. Design temperature-compensated calibration storing coefficients at multiple temperatures
145. Implement power calibration for accurate absolute power level measurements
146. Design receiver calibration isolating ADC and IF path errors from RF path errors
147. Implement user-defined calibration procedures for specialized measurement applications
148. Test calibration algorithm accuracy against NIST-traceable reference devices

## 9. Touchscreen Interface and User Experience (Steps 149-163)

149. Design 10.4-inch capacitive touchscreen display with 1024x768 resolution and 24-bit color
150. Implement responsive touch interface with gesture support (pinch-to-zoom, swipe)
151. Design multi-trace display showing up to 16 measurement traces simultaneously
152. Implement split-screen layouts with configurable window arrangements (2, 3, 4, 6, 9 views)
153. Design marker table displaying frequency, magnitude, phase for up to 10 markers per trace
154. Implement Smith chart display with impedance, admittance, and combined chart options
155. Design polar plot format for visualizing magnitude and phase on circular coordinates
156. Implement automatic scaling with manual override for magnitude and phase axes
157. Design color-coded trace identification with user-selectable color palette
158. Implement memory traces storing reference measurements for comparison
159. Design limit lines with independent upper and lower bounds for pass/fail testing
160. Implement screenshot capture saving display to USB drive in PNG or PDF format
161. Design measurement wizard guiding users through calibration and setup procedures
162. Implement soft key menus with context-sensitive options based on active measurement
163. Test user interface for responsiveness (<100 ms touch latency) and intuitive navigation

## 10. S-Parameter Measurement (Steps 164-173)

164. Implement full 2-port S-parameter measurement sweeping all four parameters (S11, S21, S12, S22)
165. Design fast sweep mode achieving >100 points/second measurement speed with averaging off
166. Implement segmented sweep with variable point density for efficient multi-band characterization
167. Design power sweep mode varying source power from -55 to +10 dBm at fixed frequency
168. Implement 4-port S-parameter measurements with automatic port switching and calibration
169. Design balanced S-parameter measurement deriving differential and common-mode parameters
170. Implement mixer S-parameter measurements with swept RF and fixed LO frequencies
171. Design active device measurements with bias control for transistors and amplifiers
172. Implement automatic fixture de-embedding removing test fixture effects from DUT measurement
173. Test S-parameter measurement accuracy: ±0.1 dB magnitude, ±1° phase to 50 GHz

## 11. Time-Domain Reflectometry (Steps 174-183)

174. Implement time-domain transformation using inverse FFT of frequency-domain S11 data
175. Design windowing functions minimizing artifacts from finite frequency span
176. Implement step response calculation for cable fault location with <1 cm resolution
177. Design impulse response mode showing reflection coefficient versus distance
178. Implement time-domain gating for isolating specific discontinuities in transmission path
179. Design lowpass, highpass, bandpass time gates with adjustable span and shape
180. Implement gated frequency response transforming back to frequency domain after gating
181. Design distance-to-fault calculation accounting for velocity factor of transmission medium
182. Implement automatic impedance profile showing Z(t) versus distance along transmission line
183. Test TDR accuracy measuring calibrated airline standards with known discontinuities

## 12. Mixer and Frequency Converter Measurements (Steps 184-195)

184. Implement mixer conversion loss measurement sweeping RF with fixed LO frequency
185. Design swept LO mode for characterizing mixer performance versus local oscillator frequency
186. Implement port power calibration for accurate mixer stimulus power at RF and LO ports
187. Design image rejection measurement quantifying mixer suppression of image frequency
188. Implement IF bandwidth measurement characterizing mixer output versus IF frequency
189. Design LO-to-RF isolation measurement determining feedthrough from LO to RF port
190. Implement intermodulation distortion measurements using two-tone RF stimulus
191. Design swept power measurement for mixer compression point determination
192. Implement group delay measurement through mixer showing conversion delay versus frequency
193. Design automatic mixer test suite running full characterization with single setup
194. Implement frequency offset mode for amplifier measurements with input/output at different frequencies
195. Test mixer measurements validating conversion loss accuracy ±0.3 dB, group delay ±0.5 ns

# Technical Specifications

## Frequency Range
- Standard: 10 MHz to 67 GHz (depending on model configuration)
- Extended: 100 Hz to 110 GHz with external mixers and waveguide modules
- Frequency resolution: 1 Hz across entire frequency range

## Dynamic Range
- Standard: >120 dB at 10 Hz IF bandwidth (300 kHz to 3 GHz)
- High frequency: >100 dB at 10 Hz IF bandwidth (50 to 67 GHz)
- Receiver noise floor: <-115 dBm (10 Hz IF bandwidth, 50 GHz)

## Measurement Accuracy (After Calibration)
- Magnitude accuracy: ±0.1 dB (300 kHz to 3 GHz, 0 dB level)
- Phase accuracy: ±0.5° (300 kHz to 3 GHz, 0 dB level)
- Directivity: >40 dB (300 kHz to 50 GHz)
- Source match: >40 dB (300 kHz to 50 GHz)
- Load match: >40 dB (300 kHz to 50 GHz)

## Speed and Resolution
- Maximum sweep points: 100,001 per channel
- Maximum sweep speed: 175 μs per point (2-port, no averaging)
- IF bandwidth range: 1 Hz to 3 MHz (1-3-10 sequence)
- Measurement speed: >100 traces/second (401 points, 30 kHz IFBW)

## NIST-Traceable Calibration
- Factory calibration traceable to National Institute of Standards and Technology (NIST)
- Calibration interval: 12 months recommended for ±0.1 dB magnitude accuracy
- Calibration kit standards: Certified with uncertainty <0.02 dB magnitude, <0.3° phase
- Verification standards: Airline, precision terminations, phase-stable cables included

## Display and Interface
- 10.4-inch color capacitive touchscreen (1024 x 768 resolution)
- Display formats: Log magnitude, linear magnitude, phase, group delay, VSWR, Smith chart, polar
- Traces: Up to 16 measurement traces with independent scaling and formatting
- Remote interfaces: GPIB (IEEE-488.2), LAN (LXI Core), USB 3.0 for automation

## Physical and Environmental
- Dimensions: 426 mm (W) x 222 mm (H) x 505 mm (D), 17 kg typical weight
- Operating temperature: 0°C to 50°C with <0.01 dB/°C drift after 30-minute warmup
- Power consumption: 450W maximum, 200W typical during measurement
- Cooling: Forced-air convection with temperature-controlled variable-speed fans
