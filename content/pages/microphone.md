---
title: "MEMS Microphone"
company: "Knowles / AAC Technologies / Goertek"
country: "USA / China"
selling_price: 2
inputs:
  - name: "Silicon Wafer"
    cost: 0.3
    link: "silicon-wafer"
  - name: "ASIC Chip"
    cost: 0.5
    link: "analog-asic"
  - name: "Metal Can Package"
    cost: 0.2
    link: "stainless-steel-can"
  - name: "Solder Paste"
    cost: 0.05
    link: "solder-paste"
  - name: "Acoustic Port"
    cost: 0.1
    link: "laser-drilled-port"
  - name: "Silicon Die Bond"
    cost: 0.05
    link: "die-attach-adhesive"
  - name: "Wire Bonding"
    cost: 0.1
    link: "gold-wire"
  - name: "Assembly Labor"
    cost: 0.7
    link: "mems-assembly-labor"
value_created: 0
---

# How to Make a MEMS Microphone

**Top Market Leaders:**
- [Knowles](/companies/knowles)
- [AAC Technologies](/companies/aac-technologies)
- [Goertek](/companies/goertek)



A micro-electro-mechanical systems (MEMS) microphone converts sound waves into electrical signals using a silicon diaphragm and capacitive sensing. Modern MacBooks use 3-4 MEMS microphones for voice input, noise cancellation, and beamforming. Typical sensitivity: -38 dBV, SNR: 64 dB, size: 3.76×2.95×1.0mm.

## What is it?

A miniature microphone fabricated using semiconductor manufacturing processes. Contains a movable silicon diaphragm (membrane) suspended over a fixed backplate electrode, forming a variable capacitor. Sound pressure deflects the diaphragm (nanometer scale), changing capacitance. An integrated ASIC amplifies and converts the signal to digital output. Package includes acoustic port (sound inlet), internal cavity, and electromagnetic shielding. Digital output types: PDM (pulse density modulation) or I²S (inter-IC sound).

## Steps to Make:

**MEMS Die Fabrication - Wafer Preparation:**
1. Start with 6-inch or 8-inch [Silicon Wafer](silicon-wafer)
2. P-type silicon, <100> crystal orientation
3. Wafer thickness: 500-725 microns
4. Polish both sides to mirror finish
5. Clean wafer in piranha solution (H2SO4 + H2O2)
6. Rinse in cascading de-ionized water baths
7. Spin-dry in centrifuge at 3000 RPM
8. Inspect for particles and contamination
9. Load wafers into oxidation furnace

**Thermal Oxidation - Sacrificial Layer:**
10. Grow thermal oxide layer at 1050°C in wet oxygen
11. Oxide thickness: 0.5-1.0 microns
12. Serves as sacrificial layer for membrane release
13. Growth rate: 0.2-0.4 microns per hour
14. Cool slowly to prevent thermal stress
15. Measure oxide thickness with ellipsometer
16. Target uniformity: ±3% across wafer

**Backplate Formation - Silicon Nitride Deposition:**
17. Deposit low-stress silicon nitride by LPCVD (low-pressure chemical vapor deposition)
18. Temperature: 800°C, pressure: 200 mTorr
19. Precursors: dichlorosilane (SiH2Cl2) and ammonia (NH3)
20. Nitride thickness: 0.6-1.0 microns
21. Low-stress formulation prevents warping
22. Intrinsic stress: <100 MPa tensile
23. Deposition rate: 5-10 nm per minute
24. Deposition time: 100-200 minutes

**Backplate Perforation - Photolithography:**
25. Apply photoresist coating by spin-coating
26. Positive photoresist thickness: 1.2 microns
27. Spin speed: 3000 RPM for 30 seconds
28. Soft bake at 95°C for 90 seconds
29. Align wafer to photomask in mask aligner
30. Expose with UV light (365 nm i-line)
31. Exposure dose: 150-200 mJ/cm²
32. Develop in TMAH developer solution
33. Hard bake at 120°C for 120 seconds
34. Inspect pattern under microscope
35. Pattern: array of holes (acoustic perforations)

**Backplate Perforation - Etching:**
36. Etch silicon nitride using RIE (reactive ion etching)
37. Etchant gas: CF4 + O2 plasma
38. Etch rate: 50-80 nm per minute
39. Etch time: 8-12 minutes
40. Creates perforations through nitride layer
41. Perforation diameter: 3-5 microns
42. Perforation density: 10-20% open area
43. Perforations allow air pressure equalization
44. Strip photoresist in oxygen plasma asher
45. Clean wafer in solvent baths

**Diaphragm Spacer - Oxide Deposition:**
46. Deposit second sacrificial oxide layer by PECVD
47. Plasma-enhanced CVD at 300-400°C
48. Precursors: TEOS (tetraethyl orthosilicate) + O2
49. Oxide thickness: 1.5-2.5 microns
50. Defines air gap between backplate and diaphragm
51. Deposition uniformity: ±5% across wafer
52. Deposition rate: 100-200 nm per minute

**Diaphragm Formation - Polysilicon Deposition:**
53. Deposit polycrystalline silicon by LPCVD
54. Temperature: 620°C, pressure: 250 mTorr
55. Precursor: silane (SiH4) gas
56. Polysilicon thickness: 0.8-1.5 microns
57. Deposition rate: 8-15 nm per minute
58. Amorphous silicon initially, crystallizes during deposition
59. Grain size: 30-80 nm
60. Dope with phosphorus for conductivity
61. POCl3 diffusion at 900°C
62. Sheet resistance: 20-50 ohms per square

**Stress Control - Annealing:**
63. Anneal polysilicon at 950°C for 30 minutes
64. Reduces intrinsic stress in diaphragm
65. Prevents warping and buckling
66. Target residual stress: 10-50 MPa tensile
67. Nitrogen ambient to prevent oxidation
68. Ramp rate: 5°C per minute up and down
69. Measure stress by wafer curvature method

**Diaphragm Patterning - Lithography:**
70. Spin-coat photoresist on polysilicon
71. Expose diaphragm pattern with stepper
72. Circular or rectangular membrane shape
73. Diaphragm diameter: 0.5-1.0 mm
74. Develop and hard bake photoresist
75. Etch polysilicon by DRIE (deep reactive ion etching)
76. Bosch process: alternating SF6 etch and C4F8 passivation
77. Etch rate: 2-4 microns per minute
78. Etch stops on oxide layer
79. Sidewall profile: vertical (90° angle)
80. Strip photoresist in oxygen plasma

**Release Etch - Membrane Liberation:**
81. Etch sacrificial oxide in HF (hydrofluoric acid) vapor
82. HF vapor phase etch avoids stiction problems
83. HF concentration: 49% solution heated to 35°C
84. Etch time: 20-40 minutes
85. Removes oxide under diaphragm and around backplate
86. Creates suspended membrane over air cavity
87. Undercut distance: 100-500 microns
88. Rinse in DI water and methanol
89. Critical point drying to prevent collapse
90. CO2 critical point: 31°C, 73 atm

**Backside Cavity Etch - DRIE:**
91. Protect front side with protective tape
92. Pattern backside with photolithography
93. Define acoustic cavity opening
94. DRIE etch through silicon wafer from backside
95. Bosch process with SF6/C4F8 cycling
96. Etch depth: 400-600 microns (almost through wafer)
97. Etch rate: 3-5 microns per minute
98. Etch time: 2-3 hours
99. Stops on oxide layer (etch stop)
100. Cavity diameter: 0.8-1.5 mm
101. Creates back volume for acoustic compliance

**Metallization - Electrode Formation:**
102. Sputter deposit titanium adhesion layer
103. Titanium thickness: 20-50 nm
104. Sputter deposit aluminum conductor layer
105. Aluminum thickness: 0.5-1.0 microns
106. Pattern metal by photolithography
107. Wet etch aluminum in phosphoric acid solution
108. Creates electrical contacts and bond pads
109. Bond pad size: 80×80 microns
110. Aluminum routing connects diaphragm and backplate

**Passivation - Protection Layer:**
111. Deposit silicon nitride passivation layer by PECVD
112. Nitride thickness: 0.3-0.5 microns
113. Protects metal from corrosion and moisture
114. Pattern nitride over bond pads
115. Open windows for wire bonding
116. Plasma etch nitride in CF4/O2

**Wafer Testing - Electrical Probing:**
117. Load wafer on probe station
118. Lower probe needles onto bond pads
119. Apply DC bias voltage between electrodes
120. Measure capacitance at 1 kHz test frequency
121. Typical capacitance: 2-5 picofarads
122. Check for shorts and open circuits
123. Map functional dies across wafer
124. Typical yield: 85-95% at wafer level

**Wafer Dicing - Die Separation:**
125. Mount wafer on dicing tape (UV release)
126. Load into automated dicing saw
127. Diamond blade thickness: 30 microns
128. Blade speed: 30,000 RPM
129. Cut speed: 10-20 mm per second
130. Water cooling during cutting
131. Die size: 1.5×1.2 mm typical
132. Dice into individual MEMS dies
133. Inspect for chipping and cracks
134. Expose tape to UV light to reduce adhesion
135. Pick and place dies into waffle pack

**ASIC Fabrication - Amplifier Chip:**
136. [ASIC Chip](analog-asic) fabricated on separate wafer
137. 0.18-0.35 micron CMOS process
138. Analog front end: charge amplifier
139. Converts capacitance change to voltage
140. High input impedance: >1 GΩ
141. Low noise: <1 µV input-referred noise
142. Analog-to-digital converter: sigma-delta type
143. ADC resolution: 16-18 bits
144. Sampling rate: 64-128 kHz oversample
145. Digital decimation filter
146. PDM or I²S digital output interface
147. Power management: 1.8V or 3.3V supply
148. Die size: 1.0×1.0 mm
149. Wafer test and dicing

**Package Substrate Preparation:**
150. [Metal Can Package](stainless-steel-can) fabricated
151. Stainless steel can: 3.76×2.95×1.0 mm
152. Laser drill [Acoustic Port](laser-drilled-port) in package lid
153. Port diameter: 0.3-0.6 mm
154. Port location: top or bottom firing
155. Substrate: ceramic or laminate PCB
156. Substrate thickness: 0.4-0.6 mm
157. Gold-plated pads for die attachment
158. Solder balls on bottom for SMT mounting

**Die Attachment - MEMS and ASIC:**
159. Dispense [Die Attach Adhesive](die-attach-adhesive) on substrate
160. Epoxy adhesive with silver filler
161. Adhesive thickness: 10-20 microns
162. Pick MEMS die with vacuum collet
163. Place MEMS die on substrate with flip-chip bonder
164. Placement accuracy: ±5 microns
165. Cure adhesive at 150°C for 30 minutes
166. Inspect die placement and adhesive fillet
167. Place ASIC die adjacent to MEMS die
168. Similar bonding process
169. Both dies co-planar on substrate

**Wire Bonding - Electrical Interconnect:**
170. Ball-wedge wire bonding process
171. [Gold Wire](gold-wire) diameter: 18-25 microns
172. Bond from MEMS pad to substrate pad
173. Bond from ASIC pad to substrate pad
174. Interconnect wires between MEMS and ASIC
175. Ball bond on die pad (sphere formation)
176. Wedge bond on substrate pad (crescent shape)
177. Wire loop height: 100-150 microns
178. Bonding force: 30-50 grams
179. Ultrasonic energy: 40-80 mW
180. Temperature: 150-200°C substrate heating
181. Typical package: 8-12 wire bonds
182. Pull test: minimum 4 grams per wire

**Package Sealing - Hermetic or Non-Hermetic:**
183. Position metal lid over substrate
184. Align acoustic port with MEMS diaphragm
185. Laser weld lid to substrate frame
186. Weld power: 150-250 watts
187. Weld speed: 100-200 mm per second
188. Creates hermetic seal (moisture barrier)
189. Alternatively: adhesive seal for non-hermetic
190. Leave acoustic port open for sound entry
191. Internal volume: acoustic back chamber
192. Chamber volume affects low-frequency response

**Solder Ball Attachment:**
193. Apply [Solder Paste](solder-paste) to package bottom pads
194. Stencil print or dispense method
195. Place solder balls (300-400 micron diameter)
196. Reflow in oven at 260°C peak temperature
197. Time above liquidus: 60-90 seconds
198. Cooling rate: 2-3°C per second
199. Solder alloy: SAC305 (Sn96.5Ag3.0Cu0.5)
200. Ball height: 250-350 microns after reflow
201. Coplanarity: ±50 microns across all balls

**Electrical Testing - Functional Test:**
202. Place microphone in automated test socket
203. Apply power: 1.8V or 3.3V supply
204. Measure quiescent current: 100-200 µA typical
205. Apply acoustic stimulus: 94 dB SPL at 1 kHz
206. Measure output signal amplitude
207. Calculate sensitivity: -38 dBV typical
208. Tolerance: ±1 dB unit-to-unit
209. Measure frequency response: 100 Hz to 10 kHz
210. Flatness: ±3 dB across voice band
211. Measure signal-to-noise ratio (SNR)
212. Target: 64 dB SNR or higher
213. Measure total harmonic distortion (THD)
214. THD <1% at 94 dB SPL input
215. Test maximum acoustic input: 120 dB SPL
216. Test power supply rejection: >50 dB

**Acoustic Testing - Anechoic Chamber:**
217. Place microphone in acoustic test chamber
218. Sound-absorbing walls eliminate reflections
219. Calibrated reference microphone
220. Speaker driven by precision signal generator
221. Sweep frequency from 20 Hz to 20 kHz
222. Measure response at each frequency
223. Plot frequency response curve
224. Check for resonance peaks or dips
225. Measure directional sensitivity (polar pattern)
226. Most MEMS microphones are omnidirectional
227. Variation: <3 dB across all angles

**Acoustic Port Testing:**
228. Verify acoustic port not blocked
229. Test with positive and negative pressure pulses
230. Diaphragm should respond symmetrically
231. Check for acoustic resonances
232. Typical resonance: 20-30 kHz (above audio band)
233. Port design affects low-frequency rolloff

**Reliability Screening:**
234. Temperature cycling: -40°C to +85°C
235. Cycle duration: 30 minutes per extreme
236. Number of cycles: 10-20 cycles
237. Retest electrical parameters after cycling
238. Drift: <0.5 dB sensitivity change
239. Humidity testing: 85°C / 85% RH
240. Duration: 168-1000 hours
241. Check for corrosion and delamination

**Solderability Testing:**
242. Dip package in flux
243. Immerse in 260°C molten solder for 5 seconds
244. Inspect solder coverage on pads
245. Minimum: 95% solder coverage
246. Check for non-wetting or dewetting

**Particle Testing - Contamination:**
247. X-ray inspection for loose particles
248. Particles inside package can rattle
249. Shake test: mechanical vibration
250. Listen for rattling sounds
251. Reject units with internal particles

**Marking and Traceability:**
252. Laser mark package top with part number
253. Include date code and lot number
254. Mark size: 0.3-0.5 mm character height
255. Laser wavelength: 355 nm (UV) or 1064 nm (IR)
256. Marking depth: <10 microns
257. Does not damage internal components

**Tape and Reel Packaging:**
258. Load microphones into carrier tape
259. Tape width: 8 mm or 12 mm
260. Pocket depth: 1.2-1.5 mm
261. Pitch: 4 mm between pockets
262. Cover tape seals carrier tape
263. Peel strength: 50-150 grams per 25 mm width
264. Wind tape onto reel (7-inch or 13-inch diameter)
265. Typical reel capacity: 3000-5000 units
266. Anti-static tape material (surface resistivity: 10⁸-10¹¹ Ω)

**Moisture Sensitivity Level (MSL) Rating:**
267. MEMS microphones typically MSL 3
268. Bake parts at 125°C for 24 hours before sealing
269. Package in moisture barrier bag
270. Include desiccant packet and humidity indicator card
271. Vacuum seal bag
272. Label with MSL rating and bake-out date
273. Floor life after bag opening: 168 hours at <30°C / 60% RH

**Quality Control - Statistical Sampling:**
274. Sample 0.1-1% of production lot
275. Full acoustic and electrical characterization
276. Measure sensitivity, SNR, THD, frequency response
277. Calculate Cpk (process capability index)
278. Target: Cpk >1.33 for key parameters
279. Control charts track trends over time
280. Adjust process if drift detected

**Microphone Specifications (Typical Digital MEMS):**
- Sensitivity: -38 dBV (12.6 mV/Pa) at 94 dB SPL
- Frequency Range: 100 Hz to 10 kHz (voice optimized) or 20 Hz to 20 kHz (music)
- Signal-to-Noise Ratio: 64 dB A-weighted
- Total Harmonic Distortion: <1% at 94 dB SPL
- Maximum Acoustic Input: 120 dB SPL (before clipping)
- Dynamic Range: 64-70 dB
- Power Supply: 1.62-3.6V
- Current Consumption: 100-200 µA in active mode, <1 µA in sleep mode
- Digital Output: PDM (pulse density modulation) at 1-3 MHz clock
- Package Size: 3.76×2.95×1.0 mm (top port) or 4.72×3.76×1.0 mm (bottom port)
- Operating Temperature: -40°C to +85°C
- Direction: Omnidirectional (±2 dB variation)
- Acoustic Port: Top firing or bottom firing
- Reflow Profile: Lead-free compatible (260°C peak)

**Manufacturing Yield and Defects:**
- Wafer-level yield: 85-95%
- Package-level yield: 95-98%
- Overall yield: 80-90%
- Common defects: particles in acoustic cavity, wire bond failures, diaphragm stiction, sensitivity out-of-spec, high noise floor
- Root causes: contamination during MEMS fabrication, moisture absorption, mechanical shock during handling

**Application in MacBook:**
- MacBooks use 3 MEMS microphones in bezel above display
- Beamforming array for directional pickup
- Noise cancellation: subtracts ambient noise
- Voice pickup optimized for 50-100 cm speaking distance
- Software processing: echo cancellation, automatic gain control
- Connection: I²S bus to audio codec or direct to T2/M3 chip
- Mounting: adhesive or screw-mounted in plastic bracket
- Acoustic design: port faces speaker, foam windscreen blocks breath noise
