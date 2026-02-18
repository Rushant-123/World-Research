---
title: "Analog ASIC"
company: "Analog Devices"
country: "United States"
selling_price: 4.0
inputs:
  - name: "Silicon Wafer"
    cost: 1.0
    link: "silicon-wafer"
  - name: "BiCMOS Process"
    cost: 1.5
    link: "bicmos-process"
  - name: "Precision Resistors"
    cost: 0.5
    link: "thin-film-resistors"
  - name: "MIM Capacitors"
    cost: 0.4
    link: "mim-capacitors"
value_created: 0.6
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

# Analog ASIC Manufacturing Process

**Market Leader:** [Analog Devices](/companies/analog-devices)



## Design Specification Phase

1. Define sensor interface requirements and performance specifications
2. Establish input signal range and sensor compatibility constraints
3. Specify required analog-to-digital conversion resolution (12-16 bits)
4. Determine power supply voltage range and power consumption budget
5. Set noise floor targets for sensor signal integrity
6. Define temperature operating range (-40°C to +125°C)
7. Establish supply voltage rejection ratio (SVBR) requirements
8. Specify input offset voltage and drift specifications
9. Define common-mode rejection ratio (CMRR) targets
10. Set bandwidth and settling time requirements for sensor channels

## Architecture Design

11. Develop analog front-end architecture for multi-sensor interface
12. Design signal chain topology: amplification, filtering, and conversion
13. Select appropriate ADC architecture (SAR, Delta-Sigma, or Pipeline)
14. Design DAC architecture for calibration and actuator control
15. Plan voltage reference distribution network
16. Architect bias current generation and distribution system
17. Design clock generation and distribution for mixed-signal operation
18. Develop power management architecture with multiple voltage domains
19. Plan analog-digital isolation and grounding strategy
20. Create block diagram with power budget allocation

## Voltage Reference Design

21. Design bandgap reference core circuit topology
22. Select curvature correction technique for temperature compensation
23. Design startup circuit for bandgap reference
24. Calculate temperature coefficient target (<10 ppm/°C)
25. Design pre-regulator for line regulation improvement
26. Implement trim circuit for voltage reference adjustment
27. Design buffer amplifier for reference voltage distribution
28. Add over-temperature protection circuitry
29. Simulate reference voltage across temperature and supply variations
30. Verify PSRR performance of voltage reference (>80 dB)

## Operational Amplifier Design

31. Design input differential pair with optimal sizing
32. Select input device type (PMOS, NMOS, or bipolar) for noise
33. Design tail current source with high output impedance
34. Implement cascoded gain stage for high open-loop gain
35. Design frequency compensation network (Miller or nested)
36. Create output stage with class-AB operation for efficiency
37. Design bias circuit with PTAT current generation
38. Implement common-mode feedback for fully-differential amplifiers
39. Add slew rate enhancement circuitry
40. Simulate op-amp gain, phase margin, and stability

## Low Noise Amplifier Design

41. Calculate input-referred noise targets for sensor interface
42. Design low-frequency noise reduction techniques (chopping/auto-zeroing)
43. Optimize device sizing for minimum thermal noise
44. Design switched-capacitor correlated double sampling circuit
45. Implement ripple reduction circuitry for chopper amplifiers
46. Design input bias current cancellation network
47. Add RFI filtering at amplifier inputs
48. Simulate integrated noise from 0.1 Hz to signal bandwidth
49. Verify noise spectral density meets sensor requirements
50. Design ESD protection without compromising noise performance

## Analog-to-Digital Converter Design

51. Design successive approximation register (SAR) logic
52. Create capacitive DAC array with binary-weighted capacitors
53. Implement split-capacitor architecture for area efficiency
54. Design high-speed comparator with low offset
55. Add dynamic latch comparator for low power operation
56. Implement bootstrap switch for full-scale sampling
57. Design sampling clock generation with low jitter
58. Create digital error correction logic for ADC linearity
59. Implement dither circuit for improved ENOB
60. Design reference buffering for capacitive DAC

## Digital-to-Analog Converter Design

61. Design resistor-string DAC for high monotonicity
62. Implement segmented current-steering DAC architecture
63. Design current source array with cascode transistors
64. Add dynamic element matching for improved linearity
65. Design output buffer amplifier with low distortion
66. Implement glitch reduction circuitry
67. Design digital interface and input register
68. Add temperature drift compensation for current sources
69. Simulate DAC INL and DNL across full scale
70. Verify DAC settling time and output impedance

## Bias and Current Reference Design

71. Design proportional-to-absolute-temperature (PTAT) current source
72. Create complementary-to-absolute-temperature (CTAT) current source
73. Implement temperature-independent bias current generator
74. Design current mirror circuits with high matching
75. Add startup circuit for bias current generator
76. Design wide-swing cascode current mirrors
77. Implement bias current distribution network
78. Add trim capability for bias current adjustment
79. Simulate bias current variation across corners
80. Verify supply independence of bias currents

## Precision Resistor Integration

81. Place thin-film precision resistors for critical matching
82. Design resistor layout with dummy elements for matching
83. Implement resistor trimming network using laser or e-fuse
84. Design temperature coefficient compensation network
85. Create resistor ratio matching for gain accuracy
86. Add ESD protection for external resistor connections
87. Design voltage coefficient compensation techniques
88. Implement common-centroid layout for matched resistors
89. Simulate resistor mismatch effects on circuit performance
90. Verify resistor voltage coefficient impact

## MIM Capacitor Integration

91. Design metal-insulator-metal capacitor arrays
92. Implement capacitor matching layout with unit elements
93. Design capacitor trimming for precise ratios
94. Add bottom-plate sampling for reduced charge injection
95. Design capacitor placement to minimize parasitics
96. Implement shield layers to reduce substrate coupling
97. Design capacitor voltage coefficient compensation
98. Create fringe capacitance cancellation structures
99. Simulate capacitor mismatch impact on linearity
100. Verify capacitor stability across temperature

## Temperature Compensation Design

101. Design PTAT voltage generation circuit
102. Implement temperature coefficient trimming network
103. Design temperature sensor for on-chip monitoring
104. Create digital temperature compensation algorithm
105. Implement analog temperature compensation for offset
106. Design drift cancellation using trim DAC
107. Add periodic auto-calibration for drift compensation
108. Design temperature-stable clock oscillator
109. Simulate circuit performance across temperature range
110. Verify temperature coefficient of critical parameters

## Offset Trimming and Calibration

111. Design input offset storage using e-fuse array
112. Implement digital trim DAC for offset correction
113. Create auto-zeroing amplifier topology
114. Design chopper stabilization for DC offset removal
115. Implement foreground calibration routine
116. Design background calibration engine
117. Add trim value non-volatile storage interface
118. Design offset measurement and correction algorithm
119. Implement gain error trimming network
120. Simulate calibrated performance across process corners

## Noise Reduction Techniques

121. Design guard rings to isolate sensitive analog blocks
122. Implement separate analog and digital ground planes
123. Design substrate contact strategy for noise isolation
124. Add on-chip decoupling capacitors at critical nodes
125. Design star-point grounding for voltage references
126. Implement shielding for sensitive signal paths
127. Design differential signaling for noise immunity
128. Add RC filtering on sensitive bias lines
129. Design layout with minimum coupling between blocks
130. Simulate substrate noise injection impacts

## Power Supply Management

131. Design low-dropout regulator for analog supply
132. Implement power-on reset circuit with brown-out detection
133. Design supply sequencing control logic
134. Add under-voltage lockout protection
135. Design power-good flag generation
136. Implement soft-start circuit for inrush current control
137. Design band-gap based voltage supervisor
138. Add thermal shutdown protection circuit
139. Design sleep mode with ultra-low quiescent current
140. Simulate supply current across all operating modes

## Clock Generation and Distribution

141. Design on-chip oscillator with low jitter
142. Implement PLL for clock multiplication if required
143. Design clock buffer tree with balanced delays
144. Add programmable clock divider circuits
145. Design non-overlapping clock generator for switched-cap circuits
146. Implement clock gating for power savings
147. Design duty-cycle correction circuit
148. Add jitter reduction circuitry
149. Simulate clock phase noise and jitter
150. Verify clock distribution skew across die

## BiCMOS Process Integration

151. Select optimal device type (bipolar vs CMOS) per circuit block
152. Design bipolar input stages for low noise and high gm
153. Implement CMOS logic for low power digital control
154. Design level shifters between bipolar and CMOS domains
155. Add base current compensation for bipolar input stages
156. Design substrate isolation for bipolar devices
157. Implement deep n-well isolation for noise reduction
158. Design collector current density for optimal fT
159. Add emitter degeneration for improved linearity
160. Verify bipolar device reliability and safe operating area

## Layout Design

161. Create floorplan with analog-digital partitioning
162. Design critical analog blocks with common-centroid layout
163. Implement dummy devices for edge effect compensation
164. Design routing with shielded critical analog signals
165. Add substrate contacts at regular intervals
166. Design power bus sizing for IR drop minimization
167. Implement metal fill with careful analog considerations
168. Design via redundancy for reliability
169. Add ESD protection structures at all pads
170. Verify DRC and LVS for complete layout

## Parasitic Extraction and Post-Layout Simulation

171. Extract parasitic capacitances and resistances from layout
172. Perform post-layout simulation of critical analog circuits
173. Verify bandgap reference performance with parasitics
174. Simulate op-amp stability margins with layout parasitics
175. Verify ADC performance including parasitic effects
176. Simulate offset and gain errors with mismatch models
177. Verify clock distribution timing with extraction
178. Simulate power supply noise coupling effects
179. Verify temperature sensor accuracy post-layout
180. Generate final performance summary report

## Wafer Fabrication Integration

181. Receive processed BiCMOS wafers with precision layers
182. Verify thin-film resistor sheet resistance uniformity
183. Inspect MIM capacitor layer deposition quality
184. Perform electrical wafer sort testing
185. Test voltage reference output across wafer
186. Measure op-amp offset voltage distribution
187. Verify ADC DNL and INL on test structures
188. Characterize temperature coefficient of critical circuits
189. Test trim circuit functionality
190. Map wafer for yield and performance binning

## Testing and Characterization

191. Perform DC parametric testing on all analog specifications
192. Measure supply current in active and sleep modes
193. Characterize ADC and DAC performance metrics (SNR, THD, SFDR)
194. Test temperature coefficient across full operating range
195. Verify sensor interface performance with actual sensor loads
