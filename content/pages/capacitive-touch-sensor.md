---
title: "Capacitive Touch Sensor"
company: "Synaptics Inc."
country: "United States"
selling_price: 3.0
inputs:
  - name: "ITO Glass"
    cost: 0.5
    link: "ito-glass"
  - name: "Touch Controller IC"
    cost: 0.4
    link: "touch-controller-ic"
  - name: "Flexible PCB"
    cost: 0.2
    link: "flexible-pcb"
  - name: "Adhesive Layer"
    cost: 0.1
    link: "adhesive-tape"
  - name: "Sputtering Equipment"
    cost: 0.3
    link: "sputter-coater"
  - name: "Assembly Labor"
    cost: 0.3
    link: "precision-assembly-labor"
value_created: 1.2
---

1. Receive ITO-coated glass substrate with sheet resistance of 100-300 ohms/square
2. Inspect substrate for uniformity using four-point probe measurements
3. Verify ITO thickness of 20-30nm using ellipsometry
4. Clean substrate in ultrasonic bath with deionized water for 10 minutes
5. Dry substrate in nitrogen atmosphere to prevent oxidation
6. Load substrate into cleanroom environment (Class 1000 or better)
7. Apply positive photoresist coating via spin coating at 3000 RPM
8. Soft bake photoresist at 95°C for 90 seconds on hotplate
9. Align substrate with photomask containing electrode pattern design
10. Expose photoresist to UV light (365nm wavelength) for 8 seconds
11. Develop exposed photoresist in alkaline developer solution for 60 seconds
12. Rinse developed substrate with deionized water spray
13. Hard bake patterned photoresist at 120°C for 3 minutes
14. Inspect pattern quality under optical microscope for defects
15. Etch exposed ITO using hydrochloric acid solution (5% concentration)
16. Monitor etch rate of approximately 10nm per minute
17. Stop etch when transparent electrode pattern is fully defined
18. Strip remaining photoresist using acetone solvent
19. Clean substrate again in ultrasonic deionized water bath
20. Dry substrate with nitrogen gas blow-off system
21. Design diamond-pattern electrode grid with 4mm pitch spacing
22. Create drive electrode rows using 50-micron wide ITO traces
23. Create sense electrode columns perpendicular to drive electrodes
24. Route traces to edge connector area with minimal crossing points
25. Implement mutual capacitance design for multi-touch detection
26. Calculate baseline capacitance of 1-5 picofarads per node intersection
27. Design trace geometry to minimize parasitic capacitance
28. Add ground shielding layer to reduce electromagnetic interference
29. Pattern ITO into mesh structure with 90% optical transparency
30. Create connection pads for controller IC interface
31. Apply second ITO layer if using dual-layer design
32. Deposit insulating dielectric layer between electrode layers
33. Use silicon dioxide or silicon nitride as interlayer dielectric
34. Control dielectric thickness to 500nm for proper isolation
35. Pattern second electrode layer perpendicular to first layer
36. Align second layer with ±5 micron accuracy to first layer
37. Create vias through dielectric to connect traces to pads
38. Fill vias with conductive silver paste or ITO
39. Cure via connections at 150°C for 30 minutes
40. Test electrical continuity of all electrode traces
41. Measure resistance of longest traces (should be under 1 kiloohm)
42. Verify no short circuits between adjacent electrodes
43. Apply protective overcoat layer to prevent ITO oxidation
44. Use 50nm silicon dioxide coating deposited by PECVD
45. Ensure overcoat maintains transparency above 85%
46. Prepare flexible PCB with controller IC mounting area
47. Design flexible PCB with fine-pitch connector (0.3mm pitch)
48. Route signal traces from connector to controller IC pads
49. Add bypass capacitors near controller IC power pins
50. Include 0.1 microfarad and 10 microfarad decoupling capacitors
51. Mount touch controller IC using chip-on-flex technology
52. Apply thermally conductive adhesive under controller die
53. Cure adhesive at 120°C for 20 minutes under pressure
54. Wire bond controller IC pads to flexible PCB traces
55. Use 25-micron diameter gold wire for bond connections
56. Make first bond on IC pad with 60-gram bond force
57. Make second bond on PCB pad with 40-gram bond force
58. Inspect all wire bonds under microscope for proper formation
59. Test wire bond pull strength (should exceed 5 grams)
60. Apply glob-top encapsulation over wire bonds and die
61. Use epoxy resin with low coefficient of thermal expansion
62. Cure glob-top at 150°C for 60 minutes
63. Verify glob-top coverage protects all wire bonds
64. Connect flexible PCB to ITO sensor using anisotropic conductive film
65. Align PCB connector precisely with ITO contact pads
66. Apply heat and pressure to bond ACF (180°C, 3 MPa, 10 seconds)
67. Verify electrical connection of all channels after ACF bonding
68. Measure contact resistance of each connection (under 1 ohm)
69. Apply adhesive layer to back of touch sensor assembly
70. Use optically clear adhesive (OCA) for display applications
71. Ensure adhesive thickness uniformity within ±5 microns
72. Apply protective film over sensor surface during handling
73. Program controller IC with firmware via JTAG interface
74. Load capacitance scanning algorithm into controller memory
75. Configure scan rate of 100-200 Hz for responsive touch detection
76. Set up mutual capacitance measurement mode
77. Apply drive signal (50-200 kHz square wave) to row electrodes
78. Measure induced current on column electrodes during drive pulse
79. Convert current measurement to capacitance value using transimpedance amplifier
80. Establish baseline capacitance map of all node intersections
81. Store baseline values in controller non-volatile memory
82. Set touch detection threshold at 15-25% capacitance change
83. Configure noise filtering using median filter (5-sample window)
84. Implement infinite impulse response (IIR) filter for signal smoothing
85. Set IIR filter coefficient alpha to 0.3 for balanced response
86. Enable baseline tracking to adapt to temperature changes
87. Configure baseline update rate of 1 Hz during no-touch periods
88. Implement large object detection for palm rejection
89. Set palm rejection threshold at 20mm diameter or larger
90. Configure palm detection algorithm to ignore large contact areas
91. Enable water rejection mode for wet finger operation
92. Adjust sensitivity dynamically when water droplets detected
93. Use frequency hopping to avoid electromagnetic interference
94. Scan at multiple drive frequencies (50, 100, 150 kHz)
95. Select frequency with lowest noise level for each scan cycle
96. Implement spread spectrum frequency modulation to reduce EMI
97. Configure multi-touch tracking for simultaneous finger detection
98. Support up to 10 concurrent touch points
99. Assign unique identifiers to each tracked touch point
100. Calculate centroid position of each touch using weighted average
101. Achieve position resolution of 0.1mm through interpolation
102. Implement predictive tracking to reduce latency
103. Use Kalman filter to predict next touch position
104. Reduce reported latency to under 10 milliseconds
105. Configure touch size reporting based on capacitance magnitude
106. Estimate contact area from number of active nodes
107. Calculate touch pressure approximation from signal strength
108. Report touch coordinates in absolute coordinate system
109. Calibrate coordinate mapping to display panel dimensions
110. Implement edge compensation for reduced sensitivity at borders
111. Increase gain for edge nodes to match center sensitivity
112. Configure hover detection for proximity sensing
113. Detect finger approach at 5-10mm distance above sensor
114. Reduce threshold for hover mode to 5% capacitance change
115. Implement gesture recognition in controller firmware
116. Detect single-finger swipe gestures in four directions
117. Recognize pinch and zoom two-finger gestures
118. Calculate gesture velocity from position change over time
119. Report gesture events through I2C or SPI interface
120. Configure communication protocol with host processor
121. Set I2C clock speed to 400 kHz for fast data transfer
122. Implement interrupt signal to alert host of touch events
123. Configure interrupt polarity and drive strength
124. Set up circular buffer for touch event queue
125. Store up to 32 touch events before host reads data
126. Implement power management modes for battery efficiency
127. Enter sleep mode after 100ms of no touch activity
128. Reduce scan rate to 10 Hz in sleep mode
129. Wake immediately when touch detected in sleep mode
130. Configure doze mode with 1 Hz scan rate for deep sleep
131. Measure idle power consumption under 100 microwatts
132. Measure active power consumption around 10 milliwatts
133. Apply EMI shielding layer beneath touch sensor
134. Use grounded copper film or conductive mesh for shield
135. Ensure shield connects to system ground through low impedance path
136. Test EMI immunity to 3V/m electric field at 1 GHz
137. Verify operation near cellular phone transmitting at full power
138. Test immunity to LCD display switching noise
139. Characterize signal-to-noise ratio across entire sensor area
140. Achieve SNR of 40 dB or better for reliable touch detection
141. Measure self-capacitance of each electrode for diagnostic purposes
142. Verify electrode capacitance stability over temperature range
143. Test sensor operation from -20°C to +70°C ambient temperature
144. Verify sensitivity remains within ±10% across temperature range
145. Implement temperature compensation in firmware algorithm
146. Adjust detection thresholds based on temperature sensor reading
147. Test sensor with various finger sizes and skin conditions
148. Verify detection with dry, wet, and moisturized fingers
149. Test with bare fingers, gloved hands (thin cotton gloves)
150. Measure sensor linearity across entire active area
151. Verify reported position accuracy within ±0.5mm of actual position
152. Test multi-touch accuracy with two simultaneous touches
153. Verify no ghosting or phantom touches reported
154. Configure grounding requirements for proper operation
155. Require device chassis ground or user body ground for capacitive coupling
156. Test sensor on insulated surface versus grounded surface
157. Apply antistatic coating to sensor surface for ESD protection
158. Achieve ESD immunity to ±8kV contact discharge per IEC 61000-4-2
159. Test ESD immunity to ±15kV air discharge
160. Verify sensor recovers immediately after ESD event
161. Implement stuck button detection and recovery
162. Clear false touch if detected for more than 10 seconds continuously
163. Reset baseline map if persistent touch indicated
164. Configure panel check function to detect sensor damage
165. Monitor for open circuit traces or shorted electrodes
166. Report diagnostic error codes through status register
167. Implement firmware update capability through I2C interface
168. Support field updates for algorithm improvements
169. Validate firmware checksum before accepting update
170. Store calibration data in one-time programmable memory
171. Record manufacturing calibration values at factory
172. Lock calibration area to prevent accidental modification
173. Apply final protective cover lens over sensor assembly
174. Use chemically strengthened glass with 0.5-1.0mm thickness
175. Ensure cover lens maintains capacitive coupling to sensor
176. Verify touch sensitivity through cover lens material
177. Test sensor sensitivity degradation with thicker cover glass
178. Optimize controller gain settings for final cover lens thickness
179. Perform final electrical functional test of completed assembly
180. Scan entire sensor area with automated probe system
181. Verify all nodes respond to simulated touch stimulus
182. Test communication interface with host system
183. Verify interrupt signal timing and polarity
184. Read device identification registers for correct values
185. Test gesture recognition accuracy with automated test fixtures
186. Verify multi-touch tracking with simulated simultaneous touches
187. Measure touch response time from contact to interrupt assertion
188. Verify response time under 10ms for single touch
189. Test maximum touch reporting rate (over 100 Hz)
190. Apply serial number label to assembly for traceability
191. Package sensor with protective film and ESD bag
192. Include technical specification sheet with electrical parameters
193. Perform final visual inspection for cosmetic defects
194. Verify no scratches, contamination, or damage to sensor surface
195. Ship completed capacitive touch sensor to device manufacturer
