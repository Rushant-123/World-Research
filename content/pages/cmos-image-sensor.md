---
title: "CMOS Image Sensor"
company: "Sony Semiconductor Solutions"
country: "Japan"
selling_price: 8.5
inputs:
  - name: "Silicon Wafer"
    cost: 1.2
    link: "silicon-wafer"
  - name: "Photolithography"
    cost: 1.5
    link: "photolithography-equipment"
  - name: "Color Filter Array"
    cost: 0.8
    link: "rgb-color-filter"
  - name: "Microlens Array"
    cost: 0.6
    link: "optical-film"
  - name: "Wire Bonding"
    cost: 0.4
    link: "wire-bonder"
  - name: "Package Substrate"
    cost: 0.5
    link: "package-substrate"
value_created: 3.5
---

A CMOS image sensor is a semiconductor device that converts photons into electrical signals for digital imaging. Modern CMOS sensors use backside illumination (BSI) technology with pixel pitches as small as 0.7 micrometers, achieving quantum efficiency above 80% and readout noise below 1.5 electrons RMS. These sensors integrate photodiode arrays, pixel transistors, analog-to-digital converters, and image signal processors on a single silicon die manufactured using advanced 45nm to 90nm process nodes.

## Manufacturing Process

### Wafer Preparation and Substrate Selection

1. Receive 300mm diameter high-resistivity silicon wafers with crystal orientation <100> and resistivity 1000-5000 ohm-cm for optimal photodiode performance
2. Inspect incoming wafers for surface defects using automated optical inspection systems with detection limits below 0.1 micrometers
3. Clean wafers in sulfuric acid-hydrogen peroxide mixture (SPM) at 120°C for 10 minutes to remove organic contamination
4. Rinse wafers with deionized water having resistivity above 18 megohm-cm and spin dry in nitrogen atmosphere
5. Measure wafer thickness using capacitance gauges, verifying 775 micrometers ±2 micrometers specification for subsequent thinning calculations
6. Perform low-temperature oxidation at 800°C in dry oxygen to grow 10nm sacrificial oxide layer for surface passivation
7. Strip sacrificial oxide in buffered hydrofluoric acid (BHF) solution for 60 seconds to create pristine silicon surface
8. Load cleaned wafers into LPCVD chamber for pad oxide deposition at 700°C using dichlorosilane and nitrous oxide precursors

### Deep Trench Isolation Formation

9. Deposit 100nm pad oxide layer followed by 200nm silicon nitride hard mask using low-pressure chemical vapor deposition
10. Coat wafers with 400nm photoresist using spin coating at 3000 RPM for precise thickness control
11. Perform photolithography using 193nm ArF excimer laser scanner with numerical aperture 1.35 to pattern trench locations
12. Develop resist in tetramethylammonium hydroxide (TMAH) solution for 60 seconds and inspect pattern fidelity
13. Etch silicon nitride hard mask using CF4/CHF3 plasma in reactive ion etching (RIE) chamber with endpoint detection
14. Strip photoresist in oxygen plasma asher at 300°C followed by wet cleaning to remove residues
15. Perform deep trench etch using Bosch process alternating SF6 etch and C4F8 passivation cycles to reach 3-5 micrometer depth
16. Clean trenches with dilute hydrofluoric acid to remove polymer residues from trench sidewalls
17. Grow 20nm thermal oxide liner inside trenches at 1000°C in steam ambient for electrical isolation
18. Deposit polysilicon fill material using LPCVD at 620°C with in-situ phosphorus doping to 1×10^19 atoms/cm³
19. Perform chemical mechanical planarization (CMP) to remove excess polysilicon and planarize surface to within 5nm uniformity
20. Strip silicon nitride hard mask using hot phosphoric acid at 165°C for 30 minutes
21. Strip pad oxide in dilute HF and perform RCA clean sequence to prepare for well implantation

### Photodiode Array Fabrication

22. Implant n-type buried layer using phosphorus ions at 400 keV energy and 1×10^13 ions/cm² dose for charge collection region
23. Activate dopants with rapid thermal anneal at 1000°C for 10 seconds in nitrogen atmosphere
24. Grow 15nm screen oxide at 850°C to protect surface during subsequent implantations
25. Pattern p-well regions using photolithography with 0.8 micrometer pixel pitch alignment tolerances below 10nm
26. Implant boron ions at 180 keV and 2×10^13 ions/cm² to form p-type photodiode regions with junction depth 2-3 micrometers
27. Perform blanket n+ implant using arsenic at 50 keV and 5×10^15 ions/cm² to create surface pinned photodiode structure
28. Drive-in and activate implants using furnace anneal at 900°C for 30 minutes in nitrogen with controlled ramp rates
29. Strip screen oxide and grow 8nm gate oxide at 800°C in ultra-dry oxygen ambient for transfer gate transistors
30. Deposit 200nm polysilicon gate electrode material using LPCVD at 620°C with uniform thickness across wafer
31. Dope polysilicon using POCl3 diffusion at 850°C to achieve sheet resistance below 10 ohms/square
32. Pattern transfer gate structures using 193nm lithography with critical dimension control to 0.25 micrometers ±5nm

### Pixel Transistor Formation

33. Etch polysilicon gates using chlorine-based plasma with high selectivity to underlying gate oxide
34. Perform lightly-doped drain (LDD) implant using phosphorus at 15 keV to reduce hot carrier effects in source/drain regions
35. Deposit 100nm silicon nitride spacer layer using plasma-enhanced CVD at 400°C
36. Anisotropically etch spacers using CF4/O2 plasma to form sidewall spacers on transfer gate structures
37. Implant heavily-doped source/drain regions using arsenic at 40 keV and 3×10^15 ions/cm² for low contact resistance
38. Create floating diffusion nodes with precision phosphorus implant at 30 keV and 1×10^13 ions/cm² for charge-to-voltage conversion
39. Activate source/drain dopants using spike anneal at 1050°C for 1 second to minimize dopant diffusion
40. Deposit 50nm cobalt layer using physical vapor deposition for silicide formation
41. Perform rapid thermal anneal at 550°C to form low-resistance CoSi2 contacts on polysilicon gates and source/drain regions
42. Strip unreacted cobalt using sulfuric acid-hydrogen peroxide mixture selective to silicide
43. Deposit 500nm silicon dioxide pre-metal dielectric (PMD) using plasma-enhanced tetraethyl orthosilicate (PETEOS) CVD
44. Planarize PMD layer using CMP to within 10nm flatness for subsequent metallization
45. Pattern contact holes using photolithography and etch using CHF3/CF4 plasma with high aspect ratio capability
46. Clean contact holes with dilute HF dip and sputter-clean in argon plasma before barrier deposition

### Analog Signal Processing Circuit Integration

47. Deposit 20nm titanium adhesion layer followed by 50nm titanium nitride diffusion barrier using physical vapor deposition
48. Fill contact holes with tungsten using CVD at 400°C with WF6 and hydrogen precursors
49. Perform CMP to remove excess tungsten and planarize contacts flush with PMD surface
50. Sputter deposit 500nm aluminum-copper (0.5% Cu) metal-1 layer for pixel-level interconnections
51. Pattern metal-1 using photolithography and etch using chlorine-based plasma with endpoint detection
52. Deposit 800nm silicon dioxide inter-metal dielectric (IMD-1) using PETEOS CVD at 400°C
53. Planarize IMD-1 using CMP to prepare flat surface for via formation
54. Pattern and etch via-1 openings using photolithography and RIE with high selectivity to aluminum
55. Deposit barrier and fill vias with tungsten using identical process to contact formation
56. Sputter deposit 600nm aluminum-copper metal-2 layer for column-level signal routing
57. Pattern metal-2 to create column amplifier connections and sample-and-hold capacitor plates
58. Integrate correlated double sampling (CDS) circuits at column level to subtract reset noise and achieve readout noise below 2 electrons
59. Deposit 800nm IMD-2 oxide layer and planarize using CMP
60. Form via-2 connections and deposit 800nm metal-3 layer for power distribution and global routing
61. Pattern metal-3 to create low-resistance power grids with IR drop below 50mV across array
62. Deposit 1 micrometer IMD-3 oxide layer as final inter-metal dielectric

### On-Chip ADC and Image Signal Processor Integration

63. Create metal-4 layer with 1 micrometer thick aluminum-copper for high-current power delivery to ADC circuits
64. Integrate column-parallel single-slope ADC circuits achieving 10-12 bit resolution at 100 megapixels per second throughput
65. Design ramp generator circuits with linearity better than 0.5 LSB across full ADC range
66. Implement comparator arrays with offset cancellation achieving input-referred offset below 1mV
67. Create gray code counters for each column operating at 100 MHz clock frequency
68. Route digital outputs using metal-5 layer with 800nm line width for signal integrity
69. Integrate row decoder circuits using standard cell library optimized for low power consumption
70. Implement timing generator circuits with phase-locked loop for precise pixel readout sequencing
71. Design on-chip voltage regulators generating 1.2V, 1.8V, 2.8V rails from 3.3V supply with ripple below 10mV
72. Create temperature sensor circuits for thermal management and dark current compensation
73. Integrate digital image signal processor (ISP) performing defect correction, lens shading correction, and noise reduction
74. Implement line memory buffers capable of storing 16 rows at 4000 pixels per row for real-time processing
75. Design output interface circuits supporting MIPI CSI-2 protocol at 2.5 Gbps per lane with 4-lane configuration

### Passivation and Backside Illumination Preparation

76. Deposit 1 micrometer silicon dioxide passivation layer using PECVD at 350°C for mechanical protection
77. Pattern bond pad openings using photolithography and etch through passivation to expose aluminum pads
78. Deposit 500nm silicon nitride final passivation layer for moisture barrier and scratch protection
79. Pattern and etch openings over bond pads ensuring clean aluminum surface for wire bonding
80. Perform wafer-level optical inspection to identify frontend processing defects before backside processing
81. Mount processed wafer face-down on temporary glass carrier using thermal release adhesive
82. Grind wafer backside from 775 micrometers to 5-7 micrometers using multiple-step grinding process
83. Polish thinned wafer using chemical mechanical polishing to achieve surface roughness below 0.5nm RMS
84. Inspect thinned wafer for remaining thickness uniformity within ±0.3 micrometers across wafer
85. Clean polished backside using RCA cleaning sequence to remove particles and organic contamination
86. Deposit 100nm high-k dielectric layer (hafnium oxide or aluminum oxide) on backside for surface passivation
87. Anneal passivation layer at 400°C in forming gas (5% H2 in N2) to reduce interface trap density below 1×10^10 cm^-2
88. Measure quantum efficiency achieving 80-85% peak response at 550nm wavelength after backside optimization

### Color Filter Array Integration

89. Coat backside with 2 micrometer thick negative photoresist designed for color filter application
90. Pattern red color filter elements using i-line (365nm) photolithography with pixel-level alignment accuracy
91. Develop resist and cure red color pigment at 230°C for 30 minutes to achieve optical density above 3.0
92. Measure red filter transmission spectrum confirming peak at 630nm with full-width half-maximum 80nm
93. Apply green color filter layer using same photolithography process with alignment to previous red pattern
94. Cure green filter at 230°C achieving peak transmission at 530nm for Bayer pattern color response
95. Apply blue color filter layer completing RGB Bayer pattern with blue peak transmission at 470nm
96. Overcoat color filter array with 500nm planarizing layer to create flat surface for microlens formation
97. Cure planarizing layer at 200°C and verify surface flatness within 50nm across pixel array
98. Measure color filter crosstalk between adjacent pixels confirming below 3% for high color accuracy

### Microlens Array Formation

99. Coat planarized color filter with photosensitive polymer designed for microlens reflow process
100. Pattern lens positions using grayscale lithography or binary pattern with subsequent thermal reflow
101. Develop lens patterns creating cylindrical resist posts at each pixel location with diameter 0.65 micrometers
102. Perform thermal reflow at 150°C causing resist posts to form hemispherical microlens shapes
103. Measure lens height achieving 0.4-0.5 micrometers for optimal light focusing into photodiodes
104. Calculate lens focusing properties confirming 90% of incident light concentrated within photodiode area
105. Cure microlenses at 180°C to stabilize shape and improve mechanical durability
106. Apply anti-reflection coating on microlens surface using 80nm silicon oxynitride deposited by PECVD
107. Optimize anti-reflection coating thickness for minimum reflection at 550nm wavelength
108. Measure sensor quantum efficiency with complete optical stack achieving 82% peak and 75% average across spectrum

### Wafer-Level Testing and Known-Good-Die Identification

109. Remove wafer from temporary carrier by heating to 150°C to release thermal adhesive
110. Clean wafer frontside to remove adhesive residues using solvent cleaning and plasma ashing
111. Mount wafer on probe card interface with electrical connections to all power, ground, and signal pads
112. Apply power to sensor and verify current consumption within specification (typically 200-400mW active power)
113. Illuminate sensor with calibrated light source at 2800K color temperature and 1000 lux intensity
114. Capture test images and analyze for pixel defects including dead pixels, hot pixels, and stuck pixels
115. Perform dark current measurement at 60°C ambient temperature confirming below 10 electrons per second per pixel
116. Measure readout noise by capturing multiple dark frames and calculating temporal noise achieving 1.2-1.5 electrons RMS
117. Characterize conversion gain by photon transfer method determining 50-100 microvolts per electron
118. Measure full well capacity exceeding 8000 electrons for 0.8 micrometer pixels with 12-bit dynamic range
119. Test column fixed pattern noise achieving below 0.3% of signal level after calibration
120. Verify row fixed pattern noise below 0.2% through multiple frame averaging
121. Measure photo response non-uniformity (PRNU) across pixel array confirming below 2% variation
122. Test temporal dark current noise at room temperature achieving below 0.5 electrons RMS
123. Characterize quantum efficiency versus wavelength from 400nm to 700nm using monochromatic illumination
124. Measure angular response confirming chief ray angle acceptance up to 35 degrees from normal
125. Test frame rate capability verifying 60 fps at full resolution (12 megapixels) and 240 fps at reduced resolution
126. Perform output interface testing confirming MIPI CSI-2 compliance and error-free data transmission
127. Test on-chip ISP functions including defect correction with correction rate above 99.9%
128. Verify lens shading correction accuracy reducing corner illumination falloff from 40% to below 5%
129. Test analog-to-digital converter linearity achieving integral non-linearity (INL) below 1 LSB
130. Measure ADC differential non-linearity (DNL) confirming no missing codes across full 12-bit range
131. Characterize power supply rejection ratio (PSRR) for analog circuits achieving above 60dB at 1 MHz
132. Test temperature sensor accuracy within ±2°C across -20°C to +85°C operating range
133. Verify voltage regulator output stability with load regulation below 1% across full current range
134. Perform burn-in testing at elevated temperature (125°C) for 48 hours to screen early failures
135. Re-test sensors after burn-in confirming stable performance parameters
136. Create wafer map identifying known-good-die (KGD) with yield typically 85-95% depending on pixel size
137. Apply inking to failed die locations for visual identification during die saw process

### Wafer Dicing and Die Preparation

138. Mount tested wafer on blue tape dicing frame with adhesive strength optimized for clean die release
139. Align wafer to dicing saw using infrared alignment marks visible through thinned silicon
140. Program dicing saw with street width 50 micrometers and blade thickness 30 micrometers
141. Perform first pass dicing cutting halfway through wafer thickness to reduce chipping risk
142. Execute second pass dicing cutting through remaining silicon and into tape for complete die separation
143. Inspect diced wafer for die edge quality using automated optical inspection confirming no chips larger than 10 micrometers
144. Clean diced wafer with deionized water spray to remove silicon particles from dicing process
145. Expand dicing tape to create spacing between individual die for pick-and-place operations
146. Transfer known-good-die to waffle pack using automated pick-and-place system with vision alignment
147. Bake die at 125°C for 8 hours to remove moisture before packaging

### Package Substrate Preparation

148. Receive ceramic or organic package substrates with pre-formed die cavity and bond finger layout
149. Inspect substrates for co-planarity confirming flatness within 25 micrometers for die attach process
150. Clean substrate cavities using plasma cleaning to improve die attach adhesive bonding
151. Dispense silver-filled epoxy adhesive in die cavity using precision dispensing with volume control ±5%
152. Place die into cavity with vision-guided placement accuracy ±10 micrometers using collet pick-and-place
153. Cure die attach adhesive at 175°C for 2 hours achieving bond strength above 5 kg force
154. Inspect die attach for voids using acoustic microscopy confirming void area below 10% of total interface

### Wire Bonding and Electrical Interconnection

155. Program wire bonder with bond pad locations from CAD database with coordinate accuracy ±2 micrometers
156. Load 25 micrometer diameter gold wire for power and ground connections providing low resistance
157. Load 18 micrometer diameter gold wire for signal connections enabling fine pitch bonding
158. Perform ball bonding from die pads to substrate fingers using 90°C substrate heating
159. Optimize bonding parameters (force, time, ultrasonic power) achieving bond strength above 8 grams per wire
160. Bond power supply connections first using multiple parallel wires to reduce inductance and resistance
161. Bond ground connections with multiple wires creating low-impedance return path for high-frequency signals
162. Bond digital output signals using controlled impedance wire loops for signal integrity
163. Complete all wire bonds typically 40-80 wires depending on sensor interface configuration
164. Inspect wire bonds using automated optical inspection for bond pad coverage and loop height uniformity
165. Perform wire pull testing on sample units confirming pull strength above specification
166. Conduct electrical continuity testing verifying all bonds have resistance below 100 milliohms

### Package Encapsulation and Optical Window Integration

167. Clean wire bonded package using nitrogen blow-off to remove particles before encapsulation
168. Position infrared-transparent optical window over die cavity with precision alignment
169. Select window material (glass or sapphire) with transmission above 90% from 400nm to 1000nm
170. Apply UV-curable adhesive around window perimeter for hermetic seal formation
171. Place window onto package ensuring no contact with wire bonds and uniform adhesive contact
172. Cure window adhesive using UV exposure for 30 seconds followed by thermal cure at 150°C for 1 hour
173. Inspect sealed package for adhesive uniformity and absence of voids using x-ray imaging
174. Apply anti-reflection coating to external window surface reducing reflection below 0.5%
175. Measure window transmission spectrum confirming no absorption bands in visible range

### Final Package Testing and Optical Characterization

176. Perform visual inspection of completed packages checking for cosmetic defects and proper assembly
177. Mark packages with date code, lot number, and part number using laser marking system
178. Mount packages in test socket with spring-loaded pins contacting substrate pads
179. Apply power and initialize sensor through I2C interface programming operating registers
180. Illuminate sensor with calibrated LED array at multiple color temperatures (2800K, 4500K, 6500K)
181. Capture test images and analyze for image quality metrics including sharpness, color accuracy, and dynamic range
182. Measure modulation transfer function (MTF) at Nyquist frequency achieving above 40% response
183. Test low-light sensitivity capturing images at 1 lux illumination with acceptable signal-to-noise ratio above 10:1
184. Characterize high dynamic range (HDR) performance using multiple exposure capture achieving 90dB dynamic range
185. Test autofocus and autoexposure feedback signals verifying correct integration with external processors
186. Measure power consumption in various operating modes including active, standby, and power-down states
187. Verify power-down current below 1 microampere for battery-powered mobile applications
188. Test sensor over temperature range -20°C to +85°C confirming stable operation across specification
189. Perform accelerated life testing at 125°C and 85% relative humidity for 1000 hours on sample units
190. Conduct mechanical shock and vibration testing per JEDEC standards confirming package reliability

### Quality Control and Final Packaging

191. Bin tested sensors into performance grades based on noise, sensitivity, and defect count specifications
192. Program one-time-programmable memory with calibration data including gain coefficients and defect map
193. Package sensors in tape-and-reel with anti-static protection for automated assembly equipment
194. Label reels with part number, lot number, quantity, and manufacturing date information
195. Store completed sensors in moisture barrier bags with desiccant maintaining below 10% relative humidity until customer shipment, with final electrical test data confirming 48-megapixel sensors achieve 0.7 micrometer pixel pitch, 1.0 electron readout noise, 83% peak quantum efficiency at 550nm, and full-well capacity of 10,000 electrons enabling 14-bit dynamic range for flagship smartphone cameras and professional imaging applications.
