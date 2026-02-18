---
title: "MicroLED Display"
company: "Apple"
country: "United States"
selling_price: 150.0
inputs:
  - name: "MicroLED Dies"
    cost: 60.0
    link: "microled-dies"
  - name: "Mass Transfer"
    cost: 40.0
    link: "mass-transfer"
  - name: "Backplane"
    cost: 35.0
    link: "cmos-backplane"
value_created: 15.0
lead_time_days: 33
minimum_order_quantity: 100
transportation_method: "truck"
geopolitical_risk: "medium"
price_volatility: "medium"

certifications:
  - "ISO9001"
  - "ISO14001"
data_quality: "estimated"
---

# Manufacturing Process: MicroLED Display

**Top Market Leaders:**
- [Samsung Electronics](/companies/samsung-electronics)
- [Lg Display](/companies/lg-display)
- [Boe](/companies/boe)



## Substrate Preparation

1. Receive CMOS backplane substrate with pixel driver circuits pre-fabricated
2. Inspect backplane for surface defects using automated optical inspection
3. Clean backplane surface using megasonic cleaning with deionized water
4. Apply piranha cleaning solution to remove organic contaminants
5. Rinse substrate thoroughly with cascading DI water rinses
6. Dry substrate using nitrogen gas knife system
7. Measure substrate flatness using laser interferometry to ensure <1μm variation
8. Apply adhesion promotion layer via vapor deposition
9. Cure adhesion layer at 120°C for 30 minutes in nitrogen atmosphere
10. Verify surface roughness is <5nm RMS using atomic force microscopy

## Contact Pad Preparation

11. Deposit titanium adhesion layer (10nm) on pixel contact areas via sputtering
12. Deposit gold contact layer (100nm) for bonding compatibility
13. Pattern contact pads using photolithography with submicron alignment
14. Etch excess metal using wet chemical etching
15. Clean residual photoresist using plasma ashing
16. Inspect contact pad dimensions using scanning electron microscopy
17. Verify pad planarity to ensure proper die bonding
18. Apply anti-oxidation coating to preserve contact integrity
19. Measure contact resistance using four-point probe testing
20. Map all contact locations for transfer alignment reference

## MicroLED Die Reception

21. Receive MicroLED dies on carrier wafer from die manufacturing
22. Inspect die quality under high-magnification optical microscopy
23. Verify die dimensions are <50μm in both lateral dimensions
24. Test sample dies for luminous efficiency and wavelength
25. Check die height uniformity across the carrier wafer
26. Measure die thickness to ensure compatibility with transfer process
27. Verify die bonding pad metallization quality
28. Test electrical characteristics of sample dies
29. Document die yield statistics from carrier wafer
30. Store carrier wafer in controlled humidity environment

## Mass Transfer Alignment

31. Load backplane substrate onto precision transfer stage
32. Load MicroLED carrier wafer onto donor stage
33. Initialize vision system for die-to-pad alignment
34. Perform global alignment using fiducial marks on both substrates
35. Calculate transform matrix for position correction
36. Scan entire transfer area to create alignment map
37. Identify all target pixel locations on backplane
38. Verify alignment accuracy is <0.5μm using test patterns
39. Compensate for thermal expansion coefficients
40. Lock alignment system before transfer initiation

## Elastomer Stamp Preparation

41. Select PDMS elastomer stamp compatible with die size
42. Clean stamp surface using IPA and nitrogen blow-off
43. Treat stamp surface with oxygen plasma for 60 seconds
44. Apply controlled adhesion modulation coating
45. Cure stamp coating at specified temperature profile
46. Inspect stamp surface for defects or contamination
47. Measure stamp compliance and adhesion characteristics
48. Mount stamp onto kinematic transfer head
49. Calibrate stamp pressure controls for uniform contact
50. Verify stamp parallelism to substrate within 0.1°

## First Transfer Cycle - Red Dies

51. Position stamp over red microLED dies on carrier wafer
52. Lower stamp to contact dies with controlled force
53. Apply optimized pressure (50-200kPa) for adhesion
54. Hold contact for dwell time to ensure die pickup
55. Increase stamp adhesion using Van der Waals forces
56. Lift stamp vertically to pick up red die array
57. Verify all target dies adhered to stamp using vision inspection
58. Transport stamp to backplane substrate position
59. Align stamp-held dies to target red pixel locations
60. Fine-tune alignment with nanometer precision actuators

## Red Die Bonding

61. Lower stamp to bring dies into contact with backplane pads
62. Apply controlled bonding pressure to establish metal contact
63. Reduce stamp adhesion by heating or mechanical means
64. Transfer dies from stamp to substrate through adhesion modulation
65. Retract stamp vertically to release dies
66. Verify dies remain bonded to correct positions
67. Inspect bond quality using automated optical inspection
68. Check for die position accuracy within tolerance
69. Document any missing or misplaced dies
70. Repeat transfer cycle for remaining red die sections

## Green Die Transfer

71. Clean elastomer stamp for next transfer cycle
72. Reposition carrier wafer to green die section
73. Align stamp to green microLED die array
74. Execute pickup sequence for green dies
75. Verify green die adhesion to stamp
76. Transport stamp to backplane green pixel positions
77. Align green dies to target subpixel locations
78. Bond green dies to backplane contact pads
79. Release dies through adhesion switching
80. Inspect green die placement accuracy

## Blue Die Transfer

81. Prepare stamp for blue die transfer cycle
82. Access blue microLED die area on carrier wafer
83. Pick up blue die array with optimized parameters
84. Verify blue die retention on stamp
85. Move stamp to backplane blue pixel locations
86. Perform fine alignment for blue subpixels
87. Bond blue dies to designated contact positions
88. Release dies and retract stamp
89. Inspect blue die transfer completion
90. Assess overall RGB die placement quality

## Post-Transfer Inspection

91. Scan entire display area using automated optical inspection
92. Identify any missing dies (null pixels)
93. Detect misaligned dies exceeding position tolerance
94. Map die placement errors for repair planning
95. Count total transferred dies versus target count
96. Calculate transfer yield percentage for each color
97. Image all dies using high-resolution microscopy
98. Verify no dies are overlapping or tilted
99. Check for adhesion-related defects
100. Generate defect map for repair operations

## Thermocompression Bonding

101. Load substrate into thermocompression bonding chamber
102. Align bonding head to substrate reference marks
103. Apply uniform pressure across display area
104. Heat substrate to bonding temperature (250-300°C)
105. Hold temperature and pressure for bonding duration
106. Allow metal interdiffusion at die-to-pad interface
107. Form robust electrical and mechanical connection
108. Cool substrate gradually to prevent thermal stress
109. Unload substrate from bonding chamber
110. Verify bonding integrity through pull tests on sample dies

## Electrical Testing - Initial

111. Connect substrate to automated test equipment
112. Apply power to CMOS backplane circuits
113. Address individual pixels sequentially
114. Test each red die for electrical continuity
115. Test each green die for electrical response
116. Test each blue die for electrical connection
117. Measure forward voltage of each microLED die
118. Identify electrically dead or open-circuit dies
119. Map all electrically defective pixels
120. Calculate electrical yield percentage

## Defect Repair - Mechanical

121. Position substrate under repair station
122. Navigate to first defective die location
123. Approach die with micro-manipulation probe
124. Remove misaligned or defective die using laser ablation
125. Clean contact pad area with solvent
126. Select replacement die from repair stock
127. Pick up replacement die with precision tool
128. Align replacement die to target position
129. Bond replacement die using localized heating
130. Verify replacement die position and bonding

## Defect Repair - Electrical

131. Identify electrically dead pixels from test data
132. Determine if defect is die-related or backplane-related
133. Remove defective die if die is cause
134. Clean and prepare contact area
135. Install redundant die from repair inventory
136. Test replacement die electrical functionality
137. Repeat repair process for all critical defects
138. Achieve target yield threshold (>99.9%)
139. Document all repair actions
140. Re-test repaired pixels to confirm functionality

## Color Conversion Layer Application

141. Prepare quantum dot solution for color conversion
142. Spin-coat red quantum dot layer over blue microLEDs for red pixels
143. Control layer thickness to achieve desired color conversion
144. Cure red quantum dot layer using UV exposure
145. Apply green quantum dot layer over designated blue dies
146. Optimize green layer thickness for color accuracy
147. Cure green quantum dot layer
148. Leave native blue dies without conversion layer
149. Inspect color conversion layer uniformity
150. Measure optical transmission and conversion efficiency

## Encapsulation Layer Deposition

151. Deposit thin-film encapsulation layer via atomic layer deposition
152. Apply alternating organic-inorganic multilayer stack
153. Build up encapsulation thickness to 500nm total
154. Ensure complete coverage of all microLED dies
155. Protect dies from moisture and oxygen ingress
156. Verify layer conformality over die topography
157. Test encapsulation barrier properties
158. Apply top organic planarization layer
159. Cure planarization layer
160. Inspect for encapsulation defects or pinholes

## Optical Structure Integration

161. Deposit high-refractive-index material for light extraction
162. Pattern micro-lens array over each pixel location
163. Optimize lens curvature for beam shaping
164. Apply anti-reflection coating to reduce Fresnel losses
165. Deposit color filter layer for color purity enhancement
166. Align color filters precisely to RGB subpixels
167. Apply black matrix material between pixels to block crosstalk
168. Pattern polarization control structures if needed
169. Verify optical stack transmittance
170. Measure light extraction efficiency improvement

## Display Testing - Optical

171. Mount display in optical characterization setup
172. Power up display with calibrated current sources
173. Drive all pixels to maximum brightness
174. Measure luminous intensity for each color
175. Verify brightness exceeds 1,000,000 nits for peak HDR
176. Measure color gamut and compare to target (>100% DCI-P3)
177. Test individual pixel brightness uniformity
178. Measure pixel-to-pixel variation (<5%)
179. Characterize viewing angle response
180. Verify contrast ratio exceeds 1,000,000:1

## Display Testing - Electrical

181. Perform pixel addressing speed tests
182. Verify microsecond-level response time
183. Test individual pixel control accuracy
184. Measure power consumption at various brightness levels
185. Verify efficient power delivery from CMOS backplane
186. Test for crosstalk between adjacent pixels
187. Characterize drive current stability
188. Verify thermal performance under sustained operation
189. Test display lifetime acceleration test samples
190. Confirm electrical specifications meet design targets

## Final Assembly Preparation

191. Apply protective cover layer over display surface
192. Integrate flexible printed circuit for external connections
193. Attach driver IC and power management circuits
194. Bond touch sensor layer if required for product
195. Perform final quality inspection and package display for integration into Apple Watch Ultra or other product

## Process Complete

The MicroLED display is now complete with individual addressable pixels featuring sub-50μm LED dies, integrated color conversion, and ultra-high brightness capability. The display achieves superior power efficiency, instant response time, and exceptional contrast ratio compared to OLED technology, suitable for next-generation premium devices.
