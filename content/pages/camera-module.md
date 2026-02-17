---
title: "Camera Module Assembly"
company: "LG Innotek"
country: "South Korea"
selling_price: 8.0
inputs:
  - name: "Image Sensor"
    cost: 3.5
    link: "cmos-image-sensor"
  - name: "Lens Assembly"
    cost: 2.0
    link: "camera-lens"
  - name: "Voice Coil Motor"
    cost: 1.2
    link: "vcm-actuator"
  - name: "PCB"
    cost: 0.8
    link: "camera-pcb"
value_created: 0.5
---

# Camera Module Assembly Process for Mac FaceTime Camera

**Market Leader:** [LG Innotek](/companies/lg-innotek)



## Pre-Assembly Preparation (Steps 1-20)

1. Receive incoming materials from qualified suppliers with certificates of conformance
2. Verify material lot numbers and traceability documentation
3. Inspect image sensor shipment for physical damage or moisture exposure
4. Check lens assembly optical quality reports and MTF test data
5. Verify VCM actuator specifications including stroke range and linearity
6. Inspect PCB substrate for dimensional accuracy and surface defects
7. Store all components in controlled humidity environment at 45% RH ± 5%
8. Maintain cleanroom temperature at 22°C ± 2°C for thermal stability
9. Verify cleanroom meets ISO Class 6 (Class 1000) particle count specification
10. Check HEPA filter efficiency at 99.99% for 0.3 micron particles
11. Perform real-time particle count monitoring in critical assembly zones
12. Calibrate environmental monitoring systems for temperature, humidity, and pressure
13. Prepare electrostatic discharge (ESD) workstations with grounded mats and wrist straps
14. Verify ESD grounding system resistance between 1-10 megohms
15. Issue cleanroom garments including coveralls, hoods, boots, and gloves
16. Train operators on gowning procedures and contamination control protocols
17. Set up automated pick-and-place equipment with vision guidance systems
18. Calibrate machine vision cameras for component recognition and alignment
19. Load component feeders with image sensors in gel-pak trays
20. Load lens assembly magazines into robotic dispensing carousel

## Image Sensor Preparation (Steps 21-40)

21. Transfer image sensors from shipping gel-paks to processing carrier waffle packs
22. Perform incoming visual inspection under 20x stereo microscope
23. Check pixel array surface for scratches, stains, or particle contamination
24. Verify wire bond integrity with no lifted bonds or ball deformation
25. Clean sensor surface using ionized nitrogen blow-off at 20 psi pressure
26. Remove any residual packaging particles or handling marks
27. Inspect sensor flatness using non-contact laser profilometry
28. Measure sensor package thickness with digital micrometer (±2 microns)
29. Check electrical pad continuity with four-point probe measurement
30. Verify sensor orientation and locate pin-1 marking for proper alignment
31. Apply UV-traceable identification marking using automated laser system
32. Pre-bake sensors at 80°C for 2 hours in nitrogen-purged oven
33. Drive off absorbed moisture to prevent reflow defects and delamination
34. Cool sensors gradually in low-humidity desiccator cabinet (<5% RH)
35. Perform electrical function test on statistical sample (5 units per lot)
36. Verify pixel response uniformity across entire active array
37. Check dark current levels are below 50 e-/s/pixel specification
38. Test sensor I2C communication interface at 400 kHz clock speed
39. Validate sensor readout timing and frame rate specifications
40. Store prepared sensors in nitrogen-purged storage cabinet until assembly

## PCB Substrate Preparation (Steps 41-60)

41. Load camera PCB substrates into automated handling system
42. Inspect PCB for copper trace defects using automated optical inspection (AOI)
43. Verify PCB thickness of 0.4mm ± 0.05mm with micrometer measurement
44. Check via hole quality for proper plating and no voids using X-ray
45. Clean PCB surface with isopropyl alcohol spray in ultrasonic bath
46. Rinse thoroughly with deionized water at 18 megohm-cm resistivity
47. Dry PCB with filtered compressed air at 0.1 micron filtration
48. Apply oxygen plasma surface treatment at 100W for 30 seconds
49. Verify surface energy increase using contact angle measurement (<30 degrees)
50. Inspect connector gold-plated pads for oxidation or contamination
51. Apply solder paste to sensor mounting pads using stencil printer
52. Use type 4 solder paste with particle size 20-38 microns
53. Inspect solder paste height of 100 microns ± 20 microns
54. Verify paste deposition alignment within ±50 micron tolerance
55. Apply underfill adhesive dispensing pattern around sensor footprint
56. Control adhesive bead width at 0.3mm with automated dispenser
57. Partially cure adhesive at 80°C for 5 minutes for tack bonding
58. Prepare thermal interface material application if heat spreader used
59. Apply conductive silver epoxy to EMI grounding areas
60. Stage prepared PCB in processing queue for sensor attachment

## Sensor-to-PCB Assembly (Steps 61-90)

61. Load prepared image sensor into vacuum pick-and-place nozzle
62. Apply controlled vacuum suction at -80 kPa pressure
63. Transport sensor to top-view alignment vision station
64. Illuminate sensor with coaxial LED lighting for fiducial detection
65. Capture high-resolution image of sensor fiducial marks
66. Process image to determine sensor centroid position
67. Calculate placement correction offsets in X, Y, and theta
68. Move sensor over PCB landing location with XYZ gantry
69. Capture bottom-view image of PCB fiducial marks through glass stage
70. Perform real-time alignment calculation with sub-pixel accuracy
71. Achieve placement accuracy specification of ±10 microns (3-sigma)
72. Lower sensor onto solder paste pads with controlled Z-axis motion
73. Apply calibrated placement force of 50-100 grams
74. Hold placement force for 1 second to ensure contact
75. Release vacuum gradually to prevent sensor movement
76. Retract placement head and verify no sensor pickup
77. Inspect sensor position with post-placement verification camera
78. Measure actual placement offset and log for SPC monitoring
79. Check for sensor tilting or height variation across corners
80. Pass assembled PCB through eight-zone reflow oven
81. Execute nitrogen atmosphere reflow with oxygen level <100 ppm
82. Ramp temperature at 1-3°C per second to preheat zone
83. Soak at 150-180°C for 60-120 seconds to activate flux
84. Ramp to peak temperature of 245°C for SAC305 lead-free solder
85. Maintain peak temperature for 40-80 seconds above liquidus
86. Cool at controlled rate of 2-4°C per second to prevent thermal shock
87. Inspect solder joint quality with automated X-ray inspection system
88. Check for voids (acceptable <25%), bridging, or insufficient wetting
89. Verify electrical continuity of all sensor pad connections with flying probe
90. Perform basic sensor communication test to confirm I2C functionality

## Underfill and Cleaning (Steps 91-100)

91. Apply capillary underfill material along sensor perimeter edges
92. Use dispensing needle with 0.2mm inner diameter for precision
93. Allow capillary action to draw underfill under sensor package
94. Control underfill flow time to complete filling in 10-20 seconds
95. Inspect underfill fillet formation around all four sensor edges
96. Cure underfill in convection oven at 150°C for 30 minutes
97. Monitor cure with in-situ temperature sensors on PCB
98. Inspect cured underfill for voids or incomplete filling using ultrasonic scan
99. Clean flux residues using isopropyl alcohol with soft brush
100. Rinse and dry assembly thoroughly before next operation

## IR Filter Installation (Steps 101-120)

101. Retrieve IR cut filter from automated storage magazine
102. Handle filter by edges only using vacuum tweezers
103. Inspect filter under oblique lighting for scratches or coating defects
104. Check filter optical density at 850nm wavelength (OD >3.0 required)
105. Verify filter transmission in visible spectrum (>90% at 550nm)
106. Clean filter surfaces using lens tissue with methanol solvent
107. Wipe with controlled pressure and linear motion to prevent scratches
108. Blow off residual particles with ionized nitrogen
109. Apply UV-curing adhesive to filter mounting ring in PCB assembly
110. Use precision dispenser to create uniform adhesive bead
111. Control adhesive bead width at 0.4mm and height at 0.1mm
112. Pick and place filter over sensor active area with robotic system
113. Align filter parallel to sensor surface within 0.1 degree tolerance
114. Control filter-to-sensor spacing at 0.4mm ± 0.05mm (critical for focal plane)
115. Hold filter in position with vacuum fixture during cure
116. Expose adhesive to UV light at 365nm wavelength
117. Apply calibrated UV dose of 1500 mJ/cm² for complete cure
118. Monitor adhesive cure state with in-line UV sensor
119. Release vacuum fixture and verify filter adhesion strength
120. Inspect for adhesive overflow onto optical aperture (reject if present)

## Lens Assembly Integration - Active Alignment (Steps 121-165)

121. Retrieve lens assembly from climate-controlled automated storage
122. Inspect lens barrel exterior for mechanical damage or deformation
123. Verify lens cleanliness by examining under high-intensity light
124. Check anti-reflective coating integrity for any scratches or delamination
125. Confirm lens focal length marking matches required specification
126. Test lens optical performance on off-line bench measurement system
127. Measure modulation transfer function (MTF) at multiple field positions
128. Verify lens meets minimum MTF specification before assembly
129. Apply precise amount of UV-curing adhesive to lens barrel threads
130. Control adhesive quantity to 2 microliters to prevent overflow into optical path
131. Load lens into precision alignment fixture with kinematic mounting
132. Transfer assembly to active alignment station with environmental control
133. Connect sensor PCB to test interface board with high-speed connectors
134. Apply regulated 2.8V power to image sensor and 1.8V to I/O
135. Initialize sensor registers via I2C protocol with configuration script
136. Verify sensor initialization success by reading back device ID register
137. Illuminate test chart using calibrated LED backlight at 1000 lux
138. Use ISO 12233 resolution test chart at 1x magnification distance
139. Set test chart distance for infinity focus (10x focal length minimum)
140. Capture initial raw Bayer image from sensor at full resolution
141. Process image in real-time using FPGA-based analysis engine
142. Calculate MTF values across entire field of view in <100ms
143. Display MTF map overlaid on live image for operator reference
144. Begin automated active alignment optimization routine
145. Thread lens onto mounting barrel using precision rotary stage
146. Monitor image sharpness metrics continuously during lens movement
147. Track MTF values at center, mid-field, and four corners simultaneously
148. Optimize lens Z-height (focus distance) using gradient descent algorithm
149. Achieve peak MTF at image center within ±10 microns of optimal focus
150. Fine-tune X-Y centering to minimize coma aberration and vignetting
151. Measure relative illumination (corner brightness vs center) >75% target
152. Monitor field curvature by comparing focus quality across field
153. Adjust lens tilt if corner MTF asymmetry detected
154. Achieve target MTF values: center >0.45, corners >0.35 at Nyquist frequency
155. Complete optimization cycle in 8-15 seconds typical time
156. Lock lens position when all image quality metrics within specification
157. Trigger UV light exposure to cure adhesive and permanently fix lens
158. Apply 360-degree UV exposure from ring light for uniform cure
159. Maintain 2000 mJ/cm² total dose over 3 second exposure
160. Monitor lens position stability during cure with optical encoder
161. Verify <2 micron position drift during adhesive polymerization
162. Wait 5 seconds for adhesive to fully harden before releasing fixtures
163. Re-capture image and verify MTF values maintained after cure
164. Confirm no degradation in image quality from curing stress or shrinkage
165. Clean any residual adhesive from lens surface using solvent swab

## VCM Autofocus Integration (Steps 166-185)

166. Retrieve voice coil motor (VCM) assembly from parts inventory
167. Inspect VCM mechanism for free mechanical movement without binding
168. Verify VCM spring suspension has proper tension and no deformation
169. Test VCM electrical parameters: coil resistance 15 ohms ± 2 ohms
170. Measure coil inductance: typically 0.1-0.2 mH at 1 kHz
171. Verify VCM stroke range meets specification of 0.4mm minimum travel
172. Test VCM linearity: position vs current within 5% deviation
173. Apply precision adhesive dots to four VCM mounting points
174. Use automated dispenser for 0.5mm diameter adhesive dots
175. Position VCM assembly over fixed lens assembly with pick-and-place
176. Ensure VCM optical axis aligned with lens optical axis (<0.1mm offset)
177. Use alignment jig to maintain concentricity during adhesive cure
178. Apply pressure to VCM mounting surface for consistent bond line
179. Cure adhesive with 120°C heat application for 60 seconds
180. Allow assembly to cool naturally to room temperature
181. Connect VCM driver circuit to camera module control board
182. Apply calibrated test current sweep from 0-100 mA to VCM coil
183. Measure VCM displacement vs current using laser displacement sensor
184. Verify linear actuator response with correlation coefficient >0.99
185. Test VCM response time: 50ms settling time to 1 micron accuracy

## VCM Calibration and Focus Testing (Steps 186-195)

186. Program VCM driver IC with initial control parameters
187. Capture images at 20 different VCM current values spanning full range
188. Analyze MTF at each position to determine focus quality vs position
189. Generate focus calibration curve relating VCM current to object distance
190. Test autofocus algorithm using contrast detection method
191. Place test targets at distances from 10cm to infinity
192. Measure focus acquisition time: <300ms typical for full range
193. Verify focus accuracy: <3% depth of field error across range
194. Test focus stability and repeatability over 100 focus cycles
195. Store VCM calibration coefficients in sensor OTP memory for permanent storage
