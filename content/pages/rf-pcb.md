---
title: "RF Circuit Board"
company: "TTM Technologies"
country: "United States"
selling_price: 2.0
inputs:
  - name: "High-Frequency Laminate"
    cost: 0.3
    link: "pcb-substrate"
  - name: "Copper Foil"
    cost: 0.1
    link: "copper-foil"
  - name: "Plating Chemicals"
    cost: 0.08
    link: "electroplating-gold"
  - name: "Solder Mask"
    cost: 0.05
    link: "photoresist"
  - name: "Drilling"
    cost: 0.07
    link: "diamond-saw"
  - name: "RF Testing"
    cost: 0.15
    link: "signal-integrity-tester"
value_created: 1.25
---

RF circuit boards are specialized high-frequency printed circuit boards designed for wireless communication applications operating from MHz to GHz ranges. These boards use low-loss dielectric materials with controlled dielectric constant (Dk) and dissipation factor (Df) to maintain signal integrity at radio frequencies. TTM Technologies produces RF PCBs for WiFi modules (2.4-6 GHz), Bluetooth transceivers (2.4 GHz), cellular radios (600 MHz-6 GHz), and GPS receivers (1.575 GHz). The manufacturing process requires precise impedance control, minimal signal loss, excellent ground plane design, and specialized materials like Rogers RO4003C or Teflon-based laminates.

## Manufacturing Process

**Material Selection and Inspection**

1. Receive Rogers RO4003C laminate panels (24" x 18") with Dk = 3.38 ± 0.05 at 10 GHz
2. Verify laminate thickness of 0.008" (8 mil) core with ±0.0008" tolerance
3. Measure dissipation factor (Df) of 0.0027 at 10 GHz using split post dielectric resonator
4. Check thermal coefficient of dielectric constant: +40 ppm/°C maximum
5. Inspect copper foil cladding: 0.5 oz (17 μm) electrodeposited high-frequency copper
6. Verify copper surface roughness: Ra < 2.0 μm for minimal skin effect loss
7. Measure laminate CTE (coefficient of thermal expansion): 11 ppm/°C in X-Y plane
8. Check moisture absorption: < 0.06% per IPC-4101 specification
9. Store laminates in climate-controlled room at 21°C, 45% RH
10. Inspect for delamination, wrinkles, or surface contamination under 300 lux lighting

**Layer Stack Design and Impedance Calculation**

11. Design 4-layer stack: Signal-Ground-Power-Signal for optimal RF performance
12. Calculate 50-ohm microstrip impedance: trace width 0.015" over 0.008" dielectric
13. Design 100-ohm differential pairs: 0.008" traces with 0.008" spacing
14. Plan ground plane coverage: >95% continuous pour with minimal voids
15. Position power plane 0.004" from ground plane for decoupling capacitance
16. Calculate insertion loss budget: <0.5 dB at 6 GHz for 2" trace length
17. Design via fencing: rows of grounded vias spaced 0.050" (λ/20 at 6 GHz)
18. Plan RF connector launch with 50-ohm transition geometry
19. Create keep-out zones: 3x trace width spacing around RF transmission lines
20. Design electromagnetic simulation model using HFSS software

**Circuit Pattern Generation**

21. Export Gerber files with 0.0001" resolution for RF layer precision
22. Generate drill files withvia coordinates accurate to ±0.002"
23. Create impedance-controlled trace artwork with width tolerance ±0.001"
24. Prepare solder mask artwork with RF via openings and antenna clearances
25. Output legend layer with component designators and impedance labels
26. Generate fabrication drawing with impedance callouts and stackup details
27. Create photomasks using laser direct imaging (LDI) at 1 μm resolution
28. Verify CAM data with electrical rule checking for RF design violations
29. Inspect phototools for defects, pinholes, or registration errors
30. Store photomasks in sealed containers to prevent dust contamination

**Inner Layer Imaging**

31. Clean laminate surface with alkaline cleaner to remove oxidation and oils
32. Rinse with deionized water (18 MΩ·cm resistivity) and dry with forced air
33. Apply positive photoresist by roller coating to 2.0 μm ±0.2 μm thickness
34. Soft bake photoresist at 85°C for 12 minutes to evaporate solvents
35. Align photomask to laminate fiducials with ±0.001" registration accuracy
36. Expose photoresist with 350 nm UV light at 120 mJ/cm² dose
37. Post-exposure bake at 95°C for 15 minutes to crosslink resist
38. Develop photoresist in 1.0% sodium carbonate solution for 45 seconds
39. Inspect developed pattern under microscope for trace continuity and width
40. Hard bake at 120°C for 30 minutes to improve etch resistance

**Copper Etching**

41. Etch exposed copper in alkaline cupric chloride solution at 48°C
42. Monitor etch rate: 25 μm/minute with solution maintained at 135 g/L Cu
43. Control undercut factor: <1.5:1 ratio for precise trace width control
44. Rinse etched panels in deionized water spray at 3 GPM flow rate
45. Inspect trace width with optical comparator: 0.015" ±0.001" tolerance
46. Measure trace-to-trace spacing: 0.008" minimum with no copper bridges
47. Strip photoresist in 3.5% sodium hydroxide solution at 55°C
48. Perform micro-etch to roughen copper surface for oxide bonding
49. Apply black oxide treatment to promote laminate adhesion
50. Dry panels in convection oven at 105°C for 20 minutes

**Layer Alignment and Lamination**

51. Punch tooling holes in inner layers and prepreg with ±0.001" accuracy
52. Cut prepreg sheets (1080 glass fabric with RO4003C resin) to panel size
53. Inspect prepreg for resin content: 68 ±2% by weight
54. Stack layers on tooling pins: Foil-Prepreg-Core-Prepreg-Foil
55. Place caul plates and release films around stack assembly
56. Load stack into vacuum lamination press with heated platens
57. Apply vacuum: <5 torr absolute pressure to remove trapped air
58. Heat platens to 200°C at 3°C/minute ramp rate
59. Apply pressure: 300 PSI when resin reaches flow temperature (180°C)
60. Hold lamination cycle for 90 minutes at full pressure and temperature
61. Cool under pressure at 2°C/minute to prevent warpage
62. Remove laminated panel at <50°C and inspect for voids or delamination
63. X-ray panel to verify internal layer registration: ±0.003" tolerance
64. Measure final thickness: 0.062" ±0.006" per design specification

**Drilling Operations**

65. Load laminated panel onto CNC drilling machine with vision registration
66. Use 0.012" carbide micro-drill bits for RF signal vias
67. Drill at 120,000 RPM spindle speed with 80 IPM feed rate
68. Apply vacuum hold-down: 15 in-Hg to prevent laminate lifting
69. Use entry and backing material to minimize burrs and breakout
70. Drill ground via fence holes: 0.016" diameter on 0.050" centers
71. Drill RF connector mounting holes: 0.040" diameter with ±0.002" tolerance
72. Implement pecking cycle for deep holes to clear chips and cool bit
73. Monitor drill bit wear: replace after 3,000 hits or 0.002" size increase
74. Deburr holes mechanically with rotating nylon brush wheels

**Via Preparation and Plating**

75. Desmear drilled holes using permanganate solution at 75°C for 15 minutes
76. Rinse thoroughly to remove all etchant residues and glass fibers
77. Condition panel surface with palladium catalyst for electroless copper
78. Apply electroless copper plating: 30-40 micro-inches in chemical bath
79. Activate surface with sulfuric acid micro-etch before electrolytic plating
80. Electroplate copper in acid copper sulfate bath at 2.5 A/ft² current density
81. Plate to 1.0 mil (25 μm) copper thickness in barrel of vias
82. Agitate bath with air sparging to ensure uniform plating distribution
83. Maintain bath temperature at 22°C and pH at 0.5 for optimal throwing power
84. Rinse panels in deionized water cascade to prevent dragout contamination
85. Measure via resistance: <10 mΩ per via connection
86. Inspect barrel walls with cross-sectioning for void-free copper fill

**Outer Layer Imaging**

87. Clean outer copper surface with pumice scrubbing to remove oxides
88. Dry-film photoresist lamination at 110°C with 3 meter/minute speed
89. Verify dry-film thickness: 1.5 mil (38 μm) for adequate plating resist
90. Align outer layer artwork to inner layer fiducials using X-ray vision
91. Expose dry-film with 365 nm UV light at 140 mJ/cm² exposure energy
92. Develop in 1.0% sodium carbonate spray developer for 60 seconds
93. Inspect developed pattern: all traces and pads clearly defined
94. Post-develop bake at 65°C for 15 minutes to improve adhesion
95. Perform electrical continuity test on all signal traces
96. Touch-up any minor defects with photo-imageable ink

**Pattern Plating**

97. Electroplate copper in acid bath to 1.2 mil (30 μm) additional thickness
98. Control current density: 20-25 A/ft² for uniform trace buildup
99. Monitor plating thickness with X-ray fluorescence gauge
100. Maintain trace height uniformity: ±10% across panel area
101. Rinse and prepare surface for ENIG (Electroless Nickel Immersion Gold)
102. Micro-etch copper to clean surface and promote nickel adhesion
103. Electroless nickel plating: 120-180 micro-inches thickness at 85°C
104. Control nickel bath pH at 4.7 and phosphorus content at 7-9%
105. Immersion gold plating: 2-4 micro-inches over nickel layer
106. Gold bath temperature: 65°C with pH 4.5 for optimal deposition
107. Rinse thoroughly to prevent gold contamination of subsequent processes
108. Measure ENIG thickness with XRF: nickel 5.0 ±0.5 μm, gold 0.08 ±0.02 μm

**Etch Resist Strip and Final Etch**

109. Strip dry-film photoresist in 3.5% sodium hydroxide at 55°C
110. Etch unwanted copper using alkaline etchant with spray nozzles
111. Monitor etch progress to prevent undercutting of plated features
112. Rinse panels immediately after etch completion to stop process
113. Inspect trace definition: clean edges with minimal roughness
114. Measure final trace width: 0.015" ±0.0005" for 50-ohm impedance
115. Check differential pair geometry: 0.008" traces, 0.008" spacing ±0.001"
116. Strip ENIG from areas to be covered by solder mask
117. Clean panel surface with alkaline cleaner and DI water rinse
118. Dry panels in forced-air oven at 105°C for 15 minutes

**Solder Mask Application**

119. Abrade panel surface lightly to improve solder mask adhesion
120. Apply liquid photoimageable solder mask (LPI) by curtain coating
121. Coat thickness: 1.0 mil (25 μm) over traces, 0.7 mil in bare areas
122. Tack dry solder mask at 75°C for 15 minutes to remove solvents
123. Align solder mask artwork with via and pad locations
124. Expose through phototool with UV light at 150 mJ/cm² energy
125. Develop unexposed solder mask in 1.0% sodium carbonate spray
126. Open windows over RF connector pads, antenna areas, and test points
127. Maintain solder mask clearance: 0.004" from pad edges
128. Final cure solder mask at 150°C for 60 minutes in convection oven
129. Measure cured thickness: 1.2 mil over copper features
130. Inspect for complete coverage with no pinholes or voids

**Legend Printing and Surface Finishing**

131. Screen print white epoxy legend ink for component designators
132. Print "50Ω" labels on impedance-controlled traces
133. Add company logo, date code, and revision markings
134. Cure legend ink at 150°C for 30 minutes
135. Apply conformal coating to non-RF areas if specified (optional)
136. Mask RF transmission lines and connector areas during coating
137. Verify surface cleanliness with ionograph: <1.56 μg/cm² NaCl equivalent
138. Perform solvent extract test for ionic contamination
139. Bake panels at 120°C for 2 hours to remove absorbed moisture
140. Cool panels in desiccator cabinet to prevent moisture reabsorption

**Impedance Testing**

141. Calibrate time-domain reflectometer (TDR) with 50-ohm reference standard
142. Connect TDR probe to impedance test coupon on panel edge
143. Measure microstrip impedance: target 50 ±5 ohms (±10% tolerance)
144. Record TDR waveform showing impedance profile along trace length
145. Test differential pair impedance: target 100 ±7 ohms
146. Verify impedance consistency: <2 ohm variation over 2" trace length
147. Check connector launch impedance: smooth 50-ohm transition
148. Measure via transition impedance: <3 ohm discontinuity
149. Test 10 coupons per panel for statistical process control
150. Calculate Cpk value: >1.33 for impedance control capability
151. Document all impedance measurements with serial number traceability
152. Adjust process parameters if impedance drifts outside tolerance

**Insertion Loss Measurement**

153. Set up vector network analyzer (VNA) with SOLT calibration to 10 GHz
154. Connect VNA to RF test coupon using precision coaxial connectors
155. Measure S21 (insertion loss) parameter from 1 GHz to 6 GHz
156. Verify insertion loss: <0.5 dB at 6 GHz for 2" trace length
157. Record loss at specific frequencies: 2.4 GHz (WiFi), 5.8 GHz (WiFi)
158. Measure return loss (S11): >15 dB indicating good impedance match
159. Test adjacent channel isolation: >30 dB crosstalk suppression
160. Verify group delay flatness: <50 ps variation across frequency band
161. Measure phase response for differential pairs: <5° imbalance
162. Document full 2-port S-parameters for design validation
163. Compare measured data to EM simulation predictions
164. Generate test report with frequency sweep plots and pass/fail criteria

**RF Connector Attachment**

165. Apply solder paste to connector pad locations using stencil
166. Use Type-3 or Type-4 paste for fine-pitch connector pins
167. Place U.FL or SMA connectors with pick-and-place machine
168. Verify connector alignment: ±0.002" position accuracy
169. Reflow solder in nitrogen atmosphere oven with controlled profile
170. Peak temperature: 245°C for 60 seconds above liquidus
171. Cool at controlled rate: 2-3°C/second to prevent thermal shock
172. Inspect solder joints for fillet formation and void content
173. X-ray inspection of ground pin solder joints: <25% voids acceptable
174. Test connector retention force: >20 N pull strength
175. Verify connector perpendicularity: <1° tilt from board surface
176. Clean flux residues with isopropyl alcohol or defluxing solvent

**Electrical Testing**

177. Program flying probe tester with netlist and test point coordinates
178. Perform continuity test on all signal traces: <1 ohm resistance
179. Test isolation between nets: >100 MΩ at 100V test voltage
180. Check ground plane continuity across via stitching network
181. Verify power plane resistance: <10 mΩ between test points
182. Test high-voltage isolation: 500V for 1 second with no breakdown
183. Measure capacitance between signal and ground: typical 2-5 pF/inch
184. Verify decoupling capacitor pad connectivity
185. Test all vias for open or high-resistance connections
186. Generate detailed test report with defect locations mapped

**Final Inspection and Quality Control**

187. Visual inspection under 10X magnification for workmanship defects
188. Check for solder mask registration: ±0.003" from pad edges
189. Inspect RF areas for solder mask voids or contamination
190. Verify legend print clarity and correct information
191. Measure board thickness at 9 points: 0.062" ±0.006" tolerance
192. Check bow and twist: <0.75% of diagonal dimension
193. Perform peel strength test on sample coupons: >6 lb/inch minimum
194. Thermal stress test: 6 cycles of 288°C solder float, no delamination
195. Package RF PCBs in anti-static bags with desiccant, document traceability to material lot, test data, and customer specifications for shipment to electronics assembly facility.
