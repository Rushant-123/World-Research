---
title: "IC Package Substrate"
company: "Ibiden"
country: "Japan"
selling_price: 5.0
inputs:
  - name: "Core Material"
    cost: 0.8
    link: "core-material"
  - name: "Copper Foil"
    cost: 1.2
    link: "copper-foil"
  - name: "Prepreg"
    cost: 0.6
    link: "prepreg"
  - name: "Solder Mask"
    cost: 0.4
    link: "solder-mask"
  - name: "Electroplating Chemistry"
    cost: 0.8
    link: "electroplating-chemistry"
value_created: 1.2
---

## Manufacturing Process

### Phase 1: Core Material Preparation (Steps 1-15)

1. Receive and inspect core material sheets (glass-reinforced epoxy composite)
2. Verify core material specifications: thickness (0.2-0.8mm), dielectric constant, CTE
3. Store core material in climate-controlled environment (23°C, 50% RH)
4. Cut core material sheets to panel size using precision shearing equipment
5. Clean core material surfaces with alkaline cleaner to remove contaminants
6. Rinse core panels with deionized water in multiple stages
7. Dry core panels in convection oven at 120°C for 30 minutes
8. Inspect core surface for defects, scratches, or contamination
9. Measure core thickness at multiple points using micrometer (tolerance ±10μm)
10. Apply coupling agent to core surfaces for improved adhesion
11. Bake cores at 80°C to activate coupling agent
12. Receive copper foil rolls and verify specifications (12-35μm thickness)
13. Inspect copper foil for surface roughness and oxidation
14. Cut copper foil to match core panel dimensions
15. Store prepared cores and copper foil in controlled atmosphere until lamination

### Phase 2: Core Lamination (Steps 16-30)

16. Prepare lamination stack: copper foil / prepreg / core / prepreg / copper foil
17. Position alignment pins for accurate layer registration
18. Load stack into vacuum lamination press
19. Apply vacuum to remove air between layers (pressure <10 mbar)
20. Heat press platens to 180°C while maintaining vacuum
21. Gradually increase pressure to 20 kg/cm² over 30 minutes
22. Hold lamination at 180°C and full pressure for 90 minutes
23. Monitor resin flow and ensure complete prepreg cure
24. Cool lamination slowly at controlled rate (2-3°C/min) to prevent warpage
25. Remove laminated panel from press when temperature reaches 80°C
26. Inspect laminated core for voids, delamination, or wrinkles
27. Measure final core thickness and verify against specifications
28. Check for copper-to-core adhesion using peel strength test
29. Trim panel edges to remove excess material and resin bleed
30. Mark panel identification and track in manufacturing database

### Phase 3: Drilling Preparation (Steps 31-40)

31. Generate drilling program from CAD design files
32. Optimize drilling sequence to minimize tool wear and cycle time
33. Load laminated panels onto drilling machine table
34. Stack multiple panels with entry/backup materials for drilling
35. Align panels using optical registration system
36. Secure panel stack with vacuum hold-down or pin fixturing
37. Load appropriate drill bits for through-hole vias (0.1-0.3mm diameter)
38. Set drilling machine parameters: speed (100,000-150,000 RPM), feed rate
39. Verify drill bit condition and replace worn tools
40. Initialize drilling machine coordinate system and reference points

### Phase 4: Mechanical Via Drilling (Steps 41-55)

41. Begin drilling cycle for through-hole vias following programmed pattern
42. Monitor drill bit temperature to prevent overheating
43. Apply air cooling to drilling zone for chip evacuation
44. Drill first via pattern across panel with precise positioning (±25μm)
45. Automatically index to next drilling position
46. Continue drilling with periodic drill bit inspection every 500 holes
47. Replace drill bits at predetermined hit count to maintain quality
48. Complete all mechanical drilling operations for through-vias
49. Remove panels from drilling machine and separate from stack
50. Inspect drilled holes using automated optical inspection (AOI)
51. Measure hole diameter using optical measurement system
52. Check for drill breakage, burrs, or wall roughness
53. Remove drilling debris and dust using vacuum cleaning
54. Desmear drilled holes using chemical treatment to remove resin smear
55. Prepare panels for laser via drilling of blind/buried vias

### Phase 5: Laser Via Drilling (Steps 56-70)

56. Load panels into CO2 laser drilling system for blind vias
57. Align panels using fiducial marks and vision system
58. Program laser parameters: power (5-20W), pulse duration, repetition rate
59. Focus laser beam to achieve precise spot size (25-75μm)
60. Drill blind vias from outer copper layer to internal pad
61. Use confocal imaging to verify via depth in real-time
62. Control laser energy to stop at copper pad without overburn
63. Drill micro-vias with high aspect ratio (0.8:1 to 1:1)
64. Pattern arrays of laser vias for high-density interconnect (HDI)
65. Monitor via quality through inline inspection cameras
66. Complete laser drilling for first layer blind vias
67. Clean panels to remove laser ablation debris and carbon residue
68. Inspect laser vias using cross-sectional analysis samples
69. Measure via diameter, taper angle, and depth accuracy
70. Verify via bottom copper pad exposure and cleanliness

### Phase 6: Desmear and Conditioning (Steps 71-85)

71. Load drilled panels into desmear processing line
72. Apply permanganate solution to oxidize and remove epoxy resin smear
73. Maintain desmear chemistry at 80°C for 5-10 minutes
74. Agitate solution for uniform treatment across panel
75. Rinse panels thoroughly with deionized water
76. Neutralize permanganate residue using reducing agent
77. Apply etchback process to slightly recess resin from hole walls
78. Create roughened copper surface for improved plating adhesion
79. Clean via walls using plasma treatment to remove organic residues
80. Apply alkaline conditioning to enhance copper surface
81. Rinse and dry panels after desmear processing
82. Inspect via walls using microscopic cross-section samples
83. Verify resin recession (2-5μm) and copper exposure
84. Check for remaining smear or contamination
85. Prepare panels for electroless copper deposition

### Phase 7: Electroless Copper Plating (Steps 86-100)

86. Pre-treat panels in acidic cleaner to activate copper surfaces
87. Rinse with deionized water to remove cleaner residue
88. Micro-etch copper surface to ensure cleanliness and texture
89. Apply catalyst (palladium) to non-conductive via walls
90. Rinse excess catalyst and apply accelerator solution
91. Immerse panels in electroless copper plating bath
92. Deposit thin copper seed layer (0.2-0.5μm) on all surfaces including via walls
93. Maintain bath temperature at 35-40°C during deposition
94. Control pH and chemical concentration for uniform plating
95. Monitor plating rate and thickness uniformly across panel
96. Complete electroless copper deposition to metallize all holes
97. Rinse panels with deionized water to stop plating reaction
98. Dry panels in warm air convection dryer
99. Inspect seed layer coverage using resistance measurement
100. Verify via wall metallization using cross-sectional microscopy

### Phase 8: Photoresist Application (Steps 101-115)

101. Clean panel surfaces to prepare for photoresist coating
102. Apply liquid photoresist using curtain coating or spray method
103. Coat both sides of panel with uniform resist thickness (15-30μm)
104. Pre-bake photoresist at 80°C to remove solvents
105. Verify resist thickness uniformity using film thickness gauge
106. Align photomask artwork with panel fiducial marks
107. Position photomask in contact with resist-coated panel
108. Expose photoresist using UV light source (350-450nm wavelength)
109. Control exposure dose for complete resist polymerization
110. Repeat exposure process for second side of panel
111. Develop exposed photoresist using alkaline developer solution
112. Spray developer uniformly across panel surface for 60-90 seconds
113. Rinse developed panel with deionized water
114. Inspect photoresist pattern using AOI system
115. Verify circuit pattern registration and line resolution

### Phase 9: Electrolytic Copper Plating (Steps 116-130)

116. Load panels into electrolytic copper plating bath
117. Connect panels as cathodes in plating circuit
118. Prepare copper sulfate plating solution with additives
119. Set current density (2-4 A/dm²) for controlled plating rate
120. Begin copper electroplating to build conductor thickness
121. Monitor plating current and voltage continuously
122. Agitate plating solution for uniform metal distribution
123. Maintain bath temperature at 25°C for optimal deposit quality
124. Plate copper to target thickness (15-25μm) over seed layer
125. Rotate panel orientation periodically for uniform coverage
126. Fill via holes completely with copper plating
127. Ensure planar surface over vias without voids or dimples
128. Continue plating for 60-90 minutes to achieve target thickness
129. Remove panels from plating bath and rinse thoroughly
130. Measure copper thickness using X-ray fluorescence (XRF) analyzer

### Phase 10: Tin Plating and Resist Stripping (Steps 131-145)

131. Transfer panels to tin plating bath for etch resist
132. Electroplate tin layer (2-3μm) over copper pattern
133. Maintain tin bath chemistry and temperature (25°C)
134. Complete tin plating to protect copper during etching
135. Rinse panels after tin plating
136. Strip photoresist using alkaline resist stripper
137. Dissolve photoresist completely to expose underlying copper
138. Rinse stripped panels with deionized water
139. Inspect tin-plated circuit pattern for completeness
140. Verify resist removal and surface cleanliness
141. Prepare copper etchant solution (alkaline or acidic)
142. Etch exposed copper areas not protected by tin
143. Spray etchant uniformly to remove unwanted copper
144. Monitor etch rate to achieve complete copper removal
145. Rinse panels after etching and verify pattern quality

### Phase 11: Tin Stripping and Surface Preparation (Steps 146-155)

146. Remove tin etch resist using acid tin stripper
147. Dissolve tin layer completely while preserving copper circuits
148. Rinse panels thoroughly after tin stripping
149. Inspect copper circuit integrity and line width accuracy
150. Measure conductor thickness and verify specifications
151. Clean panel surfaces using mild alkaline cleaner
152. Apply brown oxide treatment to copper for next layer adhesion
153. Create micro-rough copper surface for buildup layer bonding
154. Rinse and dry panels after oxide treatment
155. Inspect oxide coating uniformity and color

### Phase 12: Buildup Layer Lamination (Steps 156-170)

156. Prepare resin-coated copper (RCC) films for buildup layers
157. Position RCC film over core substrate with alignment marks
158. Stack multiple buildup layers for HDI structure
159. Load stack into vacuum lamination press
160. Apply heat and pressure for RCC layer bonding
161. Laminate at 180-200°C with pressure ramping profile
162. Cure dielectric resin completely during lamination cycle
163. Cool panels slowly to minimize warpage and stress
164. Remove laminated panels and inspect for defects
165. Measure total substrate thickness after buildup addition
166. Repeat laser drilling process for next layer blind vias
167. Apply desmear and metallization for new vias
168. Pattern second buildup layer using photolithography
169. Plate copper for second layer circuits and vias
170. Continue buildup process for additional layers (up to 4-6 layers per side)

### Phase 13: Solder Mask Application (Steps 171-180)

171. Clean outer surfaces of completed circuitry
172. Apply liquid photoimageable solder mask (LPSM) by screen printing
173. Coat both sides with 15-30μm solder mask thickness
174. Pre-bake solder mask at 80°C to tack cure
175. Align solder mask photomask over pad opening areas
176. Expose solder mask to UV light through photomask
177. Develop unexposed solder mask to open pad windows
178. Rinse away unexposed solder mask material
179. Final cure solder mask at 150°C for complete polymerization
180. Inspect solder mask for openings accuracy and registration

### Phase 14: Surface Finish Application (Steps 181-190)

181. Clean exposed copper pads in solder mask openings
182. Apply electroless nickel immersion gold (ENIG) surface finish
183. Deposit nickel layer (3-6μm) on exposed copper pads
184. Immerse in gold plating solution for thin gold layer (0.05-0.1μm)
185. Rinse panels after ENIG processing
186. Inspect surface finish uniformity and thickness
187. Verify solderability using wetting balance test
188. Apply legend printing with component identifiers
189. Cure legend ink at appropriate temperature
190. Perform final cleaning and preparation for testing

### Phase 15: Testing and Finishing (Steps 191-195)

191. Conduct electrical continuity testing using flying probe or fixture
192. Perform insulation resistance testing between circuits
193. Test via chain resistance to verify plating quality
194. Inspect final dimensions and warpage using optical coordinate measurement
195. Singulate individual substrates from panel using routing or scoring, perform final inspection, and package for shipment to customer
