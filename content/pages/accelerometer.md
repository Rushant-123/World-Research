---
title: "MEMS Accelerometer"
company: "STMicroelectronics"
country: "Switzerland"
selling_price: 1.2
inputs:
  - name: "Silicon Wafer"
    cost: 0.3
    link: "silicon-wafer"
  - name: "MEMS Process"
    cost: 0.4
    link: "mems-process"
  - name: "ASIC"
    cost: 0.3
    link: "sensor-asic"
  - name: "Package"
    cost: 0.15
    link: "mems-package"
value_created: 0.05
---

# MEMS Accelerometer Manufacturing Process

**Market Leader:** [STMicroelectronics](/companies/stmicroelectronics)



## Silicon Wafer Preparation

1. Select high-purity single-crystal silicon wafer with (100) orientation for optimal mechanical properties
2. Inspect incoming wafer for defects using automated optical inspection systems
3. Measure wafer thickness uniformity using non-contact capacitive sensors
4. Clean wafer surface using RCA cleaning process to remove organic and metallic contaminants
5. Perform piranha clean (H2SO4:H2O2) to eliminate residual organic materials
6. Rinse wafer thoroughly with deionized water achieving 18 megohm-cm resistivity
7. Spin-dry wafer at controlled rotation speed to prevent water marks
8. Measure wafer flatness and total thickness variation using interferometry
9. Verify crystal orientation using X-ray diffraction analysis
10. Store cleaned wafers in nitrogen-purged storage cassettes

## Device Layer Definition

11. Apply hexamethyldisilazane (HMDS) primer to improve photoresist adhesion
12. Spin-coat positive photoresist at 3000 RPM for uniform 1.5 micron thickness
13. Soft bake photoresist at 95 degrees Celsius for 90 seconds on vacuum hotplate
14. Align wafer to mask defining proof mass and spring structures using stepper lithography
15. Expose photoresist to 365nm UV light through chrome-on-quartz mask
16. Post-exposure bake at 110 degrees Celsius to enhance pattern resolution
17. Develop exposed photoresist using tetramethylammonium hydroxide (TMAH) solution
18. Hard bake patterned photoresist at 120 degrees Celsius for enhanced etch resistance
19. Inspect developed patterns using optical microscopy for critical dimension verification
20. Measure line width and spacing using scanning electron microscopy

## Deep Reactive Ion Etching (DRIE)

21. Load patterned wafer into DRIE chamber and evacuate to high vacuum
22. Introduce SF6 plasma for silicon etching step in Bosch process
23. Etch silicon anisotropically for 10 seconds creating vertical sidewalls
24. Switch to C4F8 plasma for passivation step depositing fluorocarbon polymer
25. Alternate between etch and passivation cycles for 200 iterations
26. Monitor etch depth in-situ using laser interferometry
27. Achieve 50 micron deep trenches defining proof mass geometry
28. Maintain aspect ratio greater than 10:1 for vertical sidewalls
29. Control scalloping amplitude to less than 100 nanometers
30. Remove photoresist mask using oxygen plasma ashing

## Capacitive Sensing Electrode Formation

31. Clean wafer surface after DRIE using oxygen plasma and wet chemistry
32. Deposit 500 nanometer thick silicon dioxide layer using PECVD
33. Apply photoresist and pattern electrode locations using photolithography
34. Etch oxide layer using reactive ion etching with CHF3/O2 chemistry
35. Strip photoresist and clean wafer thoroughly
36. Sputter deposit 20 nanometer titanium adhesion layer
37. Sputter deposit 200 nanometer platinum electrode layer
38. Pattern metal electrodes using lift-off or wet etching process
39. Verify electrode thickness uniformity using profilometry
40. Measure electrode resistance using four-point probe method

## Spring Suspension Structure

41. Design folded beam springs for low lateral stiffness
42. Calculate spring constant to achieve desired resonant frequency around 5 kHz
43. Pattern spring structures using second DRIE process
44. Etch through device layer creating suspended proof mass
45. Optimize spring width to 3 microns for mechanical compliance
46. Create anchor points connecting springs to substrate
47. Verify spring dimensions using critical dimension SEM
48. Calculate theoretical sensitivity based on spring constant
49. Model mechanical behavior using finite element analysis
50. Ensure spring linearity over full measurement range

## Proof Mass Fabrication

51. Design rectangular proof mass with optimized mass-to-area ratio
52. Calculate seismic mass to achieve sub-milligravity resolution
53. Create proof mass using through-wafer DRIE process
54. Achieve mass of approximately 2 micrograms for mobile applications
55. Pattern comb finger structures around proof mass perimeter
56. Create 2 micron gaps between fixed and movable comb fingers
57. Maximize number of sensing electrodes to increase capacitance change
58. Design asymmetric finger lengths for differential sensing
59. Etch release holes in proof mass to facilitate later release
60. Verify proof mass planarity and perpendicularity

## Handle Wafer Preparation

61. Process separate handle wafer with recessed cavities
62. Pattern cavity locations matching proof mass positions on device wafer
63. Perform wet etching using KOH solution to create cavities
64. Control cavity depth to provide 5 micron clearance for proof mass motion
65. Create smooth cavity surfaces to prevent stiction
66. Deposit oxide layer on handle wafer surface
67. Pattern and etch anchor contact regions
68. Clean handle wafer thoroughly before bonding
69. Inspect cavity dimensions using white light interferometry
70. Measure surface roughness to ensure bonding compatibility

## Wafer Bonding Process

71. Clean both device and handle wafers using Piranha and RCA processes
72. Activate wafer surfaces using oxygen plasma treatment
73. Align device wafer to handle wafer with sub-micron precision
74. Bring wafers into contact in clean room environment
75. Initiate room temperature silicon fusion bonding at contact points
76. Apply uniform pressure to propagate bonding front across wafer
77. Anneal bonded wafer stack at 1000 degrees Celsius
78. Strengthen Si-O-Si bonds through thermal treatment
79. Verify bond quality using infrared transmission imaging
80. Test bond strength using standardized pull tests

## Device Layer Thinning

81. Mount bonded wafer stack on grinding chuck
82. Perform back-grinding to remove bulk of device wafer
83. Reduce device layer thickness to approximately 60 microns
84. Polish back surface using chemical mechanical polishing
85. Achieve final device layer thickness of 50 microns
86. Measure thickness uniformity across wafer
87. Inspect for grinding damage using optical microscopy
88. Clean post-CMP residues and particles
89. Verify device layer thickness using ellipsometry
90. Ensure thickness uniformity within 1 micron across wafer

## Proof Mass Release

91. Pattern backside photoresist to protect non-release areas
92. Etch through remaining device layer using DRIE
93. Expose release holes and trenches around proof mass
94. Remove sacrificial oxide using vapor HF etching
95. Release proof mass from handle wafer in controlled manner
96. Monitor release process using capacitance measurements
97. Prevent stiction during drying using critical point drying
98. Verify proof mass mobility using electrical testing
99. Check for residual stress and warping
100. Ensure full travel range of 2 microns in each direction

## ASIC Integration Preparation

101. Design custom ASIC for capacitance-to-voltage conversion
102. Integrate charge amplifier circuits for high sensitivity
103. Implement sigma-delta analog-to-digital converter
104. Create digital signal processing blocks for filtering
105. Design low-noise front-end amplifiers with sub-femtofarad resolution
106. Implement temperature compensation circuits
107. Create digital interface supporting I2C and SPI protocols
108. Integrate self-test functionality using electrostatic actuation
109. Design power management for ultra-low power operation
110. Fabricate ASIC using standard CMOS process

## ASIC Die Preparation

111. Receive fabricated ASIC wafers from foundry
112. Perform wafer-level testing of ASIC functionality
113. Map good dies across ASIC wafer
114. Saw ASIC wafer into individual dies
115. Clean dies to remove sawing debris
116. Inspect die edges for chipping or damage
117. Sort dies by performance bins
118. Prepare dies for die attach process
119. Apply back-grinding if needed for thickness matching
120. Store prepared ASIC dies in controlled environment

## Three-Axis Sensor Architecture

121. Design independent sensing structures for X, Y, and Z axes
122. Create in-plane sensing for X and Y acceleration
123. Implement out-of-plane sensing for Z-axis acceleration
124. Use differential capacitive sensing for all axes
125. Design orthogonal spring systems for axis isolation
126. Minimize cross-axis sensitivity below 2 percent
127. Create separate proof masses for each axis option
128. Implement shared proof mass with multi-axis sensing
129. Design electrode patterns for simultaneous three-axis measurement
130. Optimize layout for compact die size under 2mm x 2mm

## Capacitance Sensing Circuit Design

131. Implement differential sensing to reject common-mode noise
132. Use AC excitation signals at 100 kHz for capacitance measurement
133. Design synchronous demodulation for signal recovery
134. Create feedback loops for proof mass position control
135. Implement continuous-time sensing for fast response
136. Use chopper stabilization to reduce 1/f noise
137. Design anti-aliasing filters before ADC
138. Achieve capacitance resolution below 1 attofarad
139. Implement offset cancellation schemes
140. Create programmable gain stages for range selection

## Package Substrate Preparation

141. Select ceramic or laminate substrate material
142. Design cavity in substrate for MEMS die placement
143. Create bond pads and routing on substrate
144. Apply Ni/Au plating to bond pads for wire bonding
145. Inspect substrate for defects and contamination
146. Measure cavity depth and dimensions
147. Verify electrical continuity of substrate traces
148. Clean substrate before assembly
149. Bake substrate to remove moisture
150. Prepare substrate for die attach

## Die Attachment Process

151. Dispense silver-filled epoxy onto substrate cavity floor
152. Use precision pick-and-place tool to position MEMS die
153. Achieve placement accuracy within 20 microns
154. Apply controlled pressure to set die in epoxy
155. Inspect die position and tilt using automated vision
156. Cure epoxy at 150 degrees Celsius for 2 hours
157. Verify die attach quality using acoustic microscopy
158. Check for voids in epoxy layer
159. Measure die height and coplanarity
160. Attach ASIC die adjacent to MEMS die in package

## Wire Bonding Interconnection

161. Program wire bonder with bond pad coordinates
162. Use 25 micron diameter gold wire for interconnections
163. Perform ball bonding from MEMS die to substrate
164. Create wedge bonds on substrate pads
165. Bond ASIC connections to substrate and MEMS die
166. Maintain loop height below 300 microns
167. Inspect all wire bonds using optical microscopy
168. Test bond strength using destructive pull tests on samples
169. Verify electrical continuity of all connections
170. Check for wire sagging or shorting risks

## Hermetic Sealing and Packaging

171. Select appropriate package type for application requirements
172. Use LGA (Land Grid Array) package for surface mount
173. Prepare metal or ceramic lid with getter material
174. Attach lid using seam welding or eutectic bonding
175. Perform sealing in controlled atmosphere
176. Use nitrogen ambient to prevent damping
177. Maintain internal pressure at atmospheric level
178. Verify hermetic seal using helium leak testing
179. Achieve leak rate below 5x10^-9 atm-cc/sec
180. Mark package with identification and traceability codes

## Calibration and Testing

181. Mount packaged accelerometer on precision motion table
182. Apply known accelerations using shake table or centrifuge
183. Measure output response at multiple acceleration levels
184. Characterize sensitivity in each of three axes
185. Determine zero-g offset and temperature dependence
186. Test frequency response from DC to 1000 Hz
187. Measure noise floor and resolution
188. Characterize cross-axis sensitivity matrix
189. Program calibration coefficients into non-volatile memory
190. Verify self-test functionality using electrostatic actuation

## Final Quality Control

191. Perform automated electrical testing of all units
192. Screen for mechanical defects using shock testing
193. Conduct temperature cycling from -40 to +85 degrees Celsius
194. Verify power consumption within specifications
195. Package tested units for shipment with full traceability documentation

## Operating Principle

The MEMS accelerometer operates on the principle of capacitive sensing of inertial mass displacement. When the device experiences acceleration, the suspended proof mass moves relative to the fixed frame due to its inertia. This displacement changes the capacitance between the movable comb fingers attached to the proof mass and the fixed comb fingers anchored to the substrate. The ASIC converts these tiny capacitance changes (on the order of femtofarads) into digital output values proportional to acceleration. Differential sensing, where capacitance increases on one side while decreasing on the other, provides enhanced sensitivity and noise rejection. The spring suspension system determines the mechanical sensitivity and frequency response, while the ASIC's signal processing provides the electrical sensitivity and digital interface required for integration into Mac computers for motion sensing applications such as sudden motion sensor for hard drive protection, screen rotation detection, and gesture recognition.
