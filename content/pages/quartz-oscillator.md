---
title: "Quartz Crystal Oscillator"
company: "Seiko Epson"
country: "Japan"
selling_price: 0.3
inputs:
  - name: "Quartz Crystal Blank"
    cost: 0.08
    link: "quartz-crystal-blank"
  - name: "Metal Electrodes"
    cost: 0.04
    link: "metal-electrodes"
  - name: "Ceramic Package"
    cost: 0.06
    link: "ceramic-package"
  - name: "Oscillator IC"
    cost: 0.05
    link: "oscillator-ic"
value_created: 0.07
lead_time_days: 60
minimum_order_quantity: 10000
transportation_method: "ocean"
geopolitical_risk: "low"
price_volatility: "medium"

certifications:
  - "ISO9001"
  - "ISO14001"
data_quality: "estimated"
---

## Quartz Crystal Growth and Preparation

1. Source high-purity natural quartz or synthetic quartz seed crystals with minimal impurities.
2. Prepare autoclave equipment for hydrothermal synthesis at temperatures of 350-400°C.
3. Load autoclave with quartz nutrient material and alkaline solution (typically sodium hydroxide).
4. Place seed crystals on racks within the autoclave in specific crystallographic orientations.
5. Seal autoclave and pressurize to 1000-1500 bar to enable quartz dissolution and recrystallization.
6. Maintain temperature gradient between dissolution zone (bottom) and growth zone (top).
7. Monitor crystal growth rate of approximately 0.5-1.5 mm per day for synthetic quartz.
8. Continue growth process for 40-90 days to produce large quartz crystals of 50-100 mm length.
9. Cool autoclave slowly over several days to prevent thermal shock and crystal cracking.
10. Extract grown synthetic quartz crystals and perform visual inspection for inclusions.
11. Use X-ray diffraction to verify crystallographic orientation and quality of grown crystals.
12. Measure electrical properties including Q-factor to assess crystal quality.
13. Clean crystals using ultrasonic bath with deionized water and cleaning solvents.
14. Perform etching in hydrofluoric acid solution to remove surface damage layers.
15. Inspect crystals under polarized light microscopy to identify internal stress patterns.

## AT-Cut Crystal Blank Preparation

16. Determine precise AT-cut angle of 35°15' from the Z-axis in the YZ plane.
17. Set up precision cutting saw with diamond-impregnated wire or blade.
18. Mount quartz crystal in orientation jig with angular accuracy of ±1 arc minute.
19. Perform first cut to create AT-cut wafer with thickness determining base frequency.
20. For 32.768 kHz crystals, cut wafer to approximately 2.0-2.5 mm thickness.
21. For higher frequency crystals (10-50 MHz), cut wafer to 0.05-0.2 mm thickness.
22. Use precision measurement equipment to verify cut angle accuracy.
23. Lap crystal wafer using fine abrasive slurry to achieve uniform thickness.
24. Polish wafer surfaces using progressively finer polishing compounds.
25. Achieve surface roughness of Ra < 1 nm for optimal electrode adhesion.
26. Clean polished wafer in multi-stage ultrasonic cleaning process.
27. Use piranha solution (sulfuric acid and hydrogen peroxide) for organic contamination removal.
28. Rinse wafers thoroughly in cascading deionized water baths.
29. Dry wafers in nitrogen atmosphere to prevent water spotting.
30. Measure thickness uniformity across wafer using non-contact optical methods.
31. Perform X-ray orientation verification to confirm AT-cut angle accuracy.
32. Calculate theoretical resonant frequency based on thickness and cut angle.
33. Sort wafers by thickness into frequency bins for subsequent processing.
34. Store prepared wafers in clean room environment with controlled humidity.
35. Implement contamination control protocols with Class 100 clean room standards.

## Electrode Design and Deposition

36. Design electrode pattern for desired resonant mode (typically fundamental or third overtone).
37. Calculate electrode diameter-to-crystal-diameter ratio for optimal energy trapping.
38. For circular electrodes, maintain diameter ratio of 0.4-0.7 for fundamental mode.
39. Create photomask patterns for electrode deposition using CAD software.
40. Prepare substrate holders for vacuum deposition process.
41. Load crystal blanks into electron-beam evaporation or sputtering system.
42. Achieve base vacuum pressure of 10^-6 to 10^-7 Torr before deposition.
43. Heat substrate holder to 100-200°C to improve electrode adhesion.
44. Deposit chromium or titanium adhesion layer of 5-20 nm thickness first.
45. Monitor deposition rate using quartz crystal microbalance in real-time.
46. Deposit primary gold electrode layer to thickness of 100-200 nm.
47. For silver electrodes, deposit 80-150 nm layer with controlled rate.
48. Maintain deposition rate of 0.1-0.5 nm/s for uniform film formation.
49. Use rotating substrate holder to ensure uniform electrode thickness distribution.
50. Apply shadow mask or photolithographic patterning for precise electrode geometry.
51. For photolithography, spin-coat photoresist at 3000-5000 RPM.
52. Soft bake photoresist at 90-110°C for 60-90 seconds.
53. Expose photoresist through photomask using UV light source.
54. Develop exposed photoresist in appropriate developer solution.
55. Hard bake patterned photoresist at 120-150°C for pattern stabilization.
56. Etch exposed electrode material using wet chemical or plasma etching.
57. Strip remaining photoresist using acetone or specialized stripping solution.
58. Inspect electrode pattern under microscope for defects and dimensional accuracy.
59. Measure electrode thickness using profilometer or ellipsometry.
60. Verify electrode adhesion through tape test or other mechanical testing.
61. Clean electroded crystals to remove any processing residues.
62. Perform electrical continuity testing on deposited electrodes.

## Frequency Adjustment and Trimming

63. Mount electroded crystal blank in test fixture with spring-loaded contacts.
64. Connect to network analyzer or frequency counter for resonance measurement.
65. Apply small AC voltage (typically 1-10 mV) to avoid overdriving crystal.
66. Measure series resonant frequency (fs) and parallel resonant frequency (fp).
67. Calculate motional parameters: motional resistance R1, inductance L1, capacitance C1.
68. Determine shunt capacitance C0 from impedance measurements.
69. Calculate quality factor Q = 2πfsL1/R1 for crystal performance assessment.
70. Compare measured frequency to target specification (typically ±20 ppm initial tolerance).
71. Calculate required frequency adjustment based on measured deviation.
72. Use mass loading technique for coarse frequency adjustment if needed.
73. Load crystal into laser trimming system for fine frequency adjustment.
74. Use pulsed YAG laser or femtosecond laser for electrode material removal.
75. Position laser beam at electrode edge for maximum frequency change per pulse.
76. Fire laser pulses in controlled sequence while monitoring frequency in real-time.
77. Achieve frequency pulling rate of 0.1-1 ppm per laser pulse.
78. Trim frequency to within ±2 to ±5 ppm of target specification.
79. For very tight tolerances, perform trimming in temperature-controlled environment.
80. Allow crystal to stabilize thermally between laser pulses.
81. Verify that Q-factor remains high (> 50,000) after trimming process.
82. Check for unwanted spurious resonances near main resonance frequency.
83. Perform aging simulation by brief thermal cycling to predict long-term stability.
84. Record all trimming parameters and final frequency for traceability.
85. Clean crystals after laser trimming to remove any debris particles.

## Crystal Encapsulation and Packaging

86. Select appropriate package type: HC-49/U, SMD ceramic, or metal can package.
87. For Mac logic board applications, typically use SMD ceramic packages (2.5x2.0 mm or smaller).
88. Prepare package base by cleaning and inspecting for defects.
89. Apply conductive epoxy dots to package electrode pads.
90. Use automated die bonder to place crystal blank onto package base.
91. Align crystal electrodes with package electrodes to within ±10 micrometers.
92. Apply controlled pressure during epoxy curing to ensure good electrical contact.
93. Cure conductive epoxy at 150-180°C for 30-60 minutes in nitrogen atmosphere.
94. Verify electrical continuity between crystal and package terminals.
95. Measure frequency in package to account for mounting effects.
96. Perform fine frequency adjustment if mounting shifted resonant frequency.
97. Clean package interior using plasma cleaning or solvent vapor.
98. Place package assembly in vacuum sealing chamber.
99. Evacuate chamber to pressure below 10^-3 Torr for high vacuum packaging.
100. For nitrogen backfill, introduce ultra-pure nitrogen at 0.5-1.0 atmosphere pressure.
101. Position package lid with integrated seal (kovar, ceramic, or metal).
102. Use resistance welding or laser welding to seal package hermetically.
103. For glass-sealed packages, perform sealing at 400-450°C in controlled atmosphere.
104. Monitor seal temperature profile to prevent thermal damage to crystal.
105. Cool sealed package slowly to room temperature over 1-2 hours.
106. Perform gross leak test using helium leak detector (leak rate < 10^-8 atm-cc/s).
107. Conduct fine leak test using radioactive tracer or moisture indicator.
108. Test package hermetic seal integrity per MIL-STD-883 standards.
109. Verify package marking and orientation indicators are correctly applied.

## Oscillator Circuit Integration

110. Design oscillator circuit topology: Pierce, Colpitts, or Butler configuration.
111. For Mac logic boards, Pierce oscillator configuration is most common.
112. Select oscillator IC with appropriate drive level (typically 10-100 microwatts).
113. Calculate load capacitance required to achieve target frequency (typically 8-18 pF).
114. Design load capacitor network with temperature coefficient matching.
115. Use NPO/C0G ceramic capacitors for minimal temperature dependency.
116. Calculate optimal capacitor values: CL = (C1 × C2)/(C1 + C2) + Cstray.
117. Include series resistor (typically 100-500 ohms) to limit drive level.
118. Design feedback resistor (1-10 megohms) for bias point establishment.
119. Prepare PCB or hybrid substrate with controlled impedance traces.
120. Apply solder paste to component pads using precision stencil printing.
121. Place quartz crystal package using automated pick-and-place equipment.
122. Position placement accuracy to within ±50 micrometers for SMD components.
123. Place oscillator IC and passive components adjacent to crystal.
124. Use reflow soldering with carefully controlled temperature profile.
125. Peak reflow temperature: 240-260°C for lead-free solder.
126. Time above liquidus temperature: 30-90 seconds to ensure proper wetting.
127. Cool assembly at controlled rate to minimize thermal stress.
128. Inspect solder joints using automated optical inspection (AOI) system.
129. Verify component placement and solder fillet quality under microscope.
130. Perform electrical testing of assembled oscillator circuit.
131. Power oscillator and measure start-up time (typically < 5 ms).
132. Verify output frequency matches specification at room temperature.
133. Measure output signal amplitude and rise/fall times.
134. Check for proper square wave or sine wave output as designed.
135. Measure current consumption to ensure low power operation (< 1 mA typical).

## Temperature Compensation (TCXO Implementation)

136. Characterize crystal temperature-frequency characteristic over -40°C to +85°C range.
137. Measure frequency at multiple temperature points with 5°C increments.
138. Plot temperature-frequency curve showing parabolic AT-cut behavior.
139. Calculate turnover temperature where frequency is maximum (typically 25-30°C).
140. Determine frequency-temperature coefficients: α, β, γ in polynomial equation.
141. Design analog or digital compensation network to counteract temperature drift.
142. Use thermistor network for analog compensation in simple TCXO designs.
143. Select thermistor with appropriate temperature coefficient (-2 to -4%/°C).
144. Calculate voltage-variable capacitance (varactor) diode characteristics needed.
145. Design compensation curve to match inverse of crystal temperature behavior.
146. For digital TCXO, integrate temperature sensor with analog-to-digital converter.
147. Program microcontroller or ASIC with polynomial compensation coefficients.
148. Implement lookup table with temperature-to-correction voltage mapping.
149. Use digital-to-analog converter to apply correction voltage to varactor.
150. Calibrate TCXO by measuring frequency at multiple temperature points.
151. Adjust compensation parameters to achieve ±0.5 ppm stability over temperature range.
152. For high-performance applications, achieve ±0.1 ppm or better temperature stability.
153. Verify compensation effectiveness across full temperature range in thermal chamber.
154. Test temperature cycling rate effects on TCXO performance.
155. Measure warm-up time and frequency settling characteristics.

## Oven-Controlled Oscillator (OCXO) Implementation

156. For ultimate stability, design oven-controlled oscillator housing.
157. Select oven temperature setpoint above maximum ambient (typically 75-85°C).
158. Design proportional-integral-derivative (PID) temperature controller circuit.
159. Use precision temperature sensor (thermistor or RTD) with ±0.1°C accuracy.
160. Position heater element (thick-film resistor or Peltier device) near crystal.
161. Implement thermal insulation using low thermal conductivity materials.
162. Design multi-layer thermal enclosure with vacuum gaps for best insulation.
163. Calculate thermal time constant of oven assembly (typically 1-10 minutes).
164. Optimize PID controller parameters for fast warm-up and minimal overshoot.
165. Achieve oven temperature stability of ±0.001°C for high-stability OCXO.
166. Test oven control performance under varying ambient conditions.
167. Measure power consumption during warm-up (may be 1-3 watts) and steady-state.
168. Verify that crystal operates at optimal point on temperature-frequency curve.
169. Achieve frequency stability of ±0.01 ppm or better over temperature range.
170. Test aging characteristics of OCXO at elevated operating temperature.

## Aging Characteristics and Long-Term Stability

171. Understand that crystal aging is primarily due to stress relief and mass transfer.
172. Measure initial frequency immediately after packaging as reference point.
173. Perform accelerated aging test at elevated temperature (85-125°C) for 24-168 hours.
174. Monitor frequency change during aging test with sub-ppb resolution.
175. Observe typical aging behavior: rapid initial change followed by logarithmic decrease.
176. Calculate aging rate in ppb/day or ppm/year from test data.
177. Expect first-year aging of ±1 to ±5 ppm for standard crystals.
178. For high-stability crystals, achieve aging rate < ±0.5 ppm/year.
179. Implement aging pre-conditioning by operating at elevated temperature before shipment.
180. Test long-term frequency stability over weeks or months for critical applications.
181. Monitor effects of thermal cycling on aging acceleration.
182. Measure frequency vs. time at constant temperature to isolate aging effects.
183. Distinguish aging from temperature effects using controlled experiments.
184. Record manufacturing date and implement aging prediction models.

## Phase Noise and Short-Term Stability Testing

185. Set up phase noise measurement system using spectrum analyzer or dedicated test set.
186. Measure single-sideband phase noise L(f) at offset frequencies from 1 Hz to 1 MHz.
187. Verify phase noise performance: typically -140 to -160 dBc/Hz at 10 kHz offset.
188. Check for spurious peaks in phase noise spectrum indicating unwanted modes.
189. Measure Allan deviation for short-term stability characterization (1-100 seconds).
190. Achieve Allan deviation of 10^-11 to 10^-12 at 1 second averaging time for OCXO.
191. Test oscillator sensitivity to mechanical vibration and shock.
192. Perform random vibration testing per MIL-STD-883 or equivalent standards.
193. Verify frequency stability under vibration is within specification limits.
194. Conduct final electrical and environmental qualification testing per customer requirements.
195. Package finished quartz oscillator modules for integration into Mac logic boards with full traceability documentation.
