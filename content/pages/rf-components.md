---
title: "RF Passive Components"
company: "Murata Manufacturing"
country: "Japan"
selling_price: 0.8
inputs:
  - name: "LTCC Ceramic"
    cost: 0.1
    link: "ceramic-filler"
  - name: "Silver Paste"
    cost: 0.05
    link: "silver-powder"
  - name: "Sintering Furnace"
    cost: 0.05
    link: "heat-treatment"
  - name: "Plating"
    cost: 0.04
    link: "electroplating-gold"
  - name: "RF Testing"
    cost: 0.1
    link: "signal-integrity-tester"
  - name: "Assembly"
    cost: 0.06
    link: "precision-assembly-labor"
value_created: 0.4
---

RF passive components form the critical signal conditioning infrastructure for wireless communication systems, providing frequency filtering, impedance matching, and balanced-to-unbalanced signal conversion. These miniaturized ceramic devices employ Low Temperature Co-fired Ceramic (LTCC) technology to integrate complex three-dimensional conductor patterns within multilayer dielectric structures, achieving high performance in packages measuring 1.0 x 0.5 x 0.5 mm. A typical RF front-end module for a smartphone contains 15-20 filters operating across frequency bands from 600 MHz to 6 GHz, with insertion losses below 1.5 dB and rejection exceeding 40 dB in stopbands. The manufacturing process combines precision ceramic tape casting, photolithographic patterning, high-temperature co-firing, and rigorous RF characterization to produce components meeting stringent specifications for bandwidth, impedance matching, power handling, and temperature stability.

## Manufacturing Process

### LTCC Tape Preparation

1. Mix barium-strontium-titanate ceramic powder with dielectric constant εr = 7.8 in planetary ball mill for 4 hours
2. Add organic binder system containing polyvinyl butyral (12% by weight) and plasticizer (6% diethyl phthalate)
3. Incorporate dispersant (0.8% fish oil) to prevent particle agglomeration during tape casting
4. Add toluene and ethanol solvents to achieve slurry viscosity of 3,500 cP at 25°C for tape casting
5. Degas ceramic slurry under vacuum at 50 mbar for 45 minutes to remove entrapped air bubbles
6. Cast slurry onto silicone-coated polyester carrier film using doctor blade with gap height 250 μm
7. Dry green tape in conveyor oven at 60°C for 15 minutes to evaporate solvents, achieving 50% solids content
8. Wind dried tape onto rolls, achieving final tape thickness of 50 μm after solvent removal
9. Age tape rolls at 23°C and 45% relative humidity for 48 hours to stabilize mechanical properties
10. Measure tape thickness variation across roll width using laser profilometer, confirming ±2 μm uniformity
11. Test tape mechanical strength, verifying green strength of 2.5 MPa for handling during processing
12. Evaluate tape shrinkage characteristics by firing test samples, confirming 15% linear shrinkage
13. Prepare low-εr tape with alumina-glass composition (εr = 5.2) for lower loss tangent applications
14. Create high-εr tape with barium titanate composition (εr = 25) for high capacitance structures
15. Batch test dielectric properties of each tape lot using impedance analyzer at 1 MHz

### Via Formation and Registration

16. Cut tape sheets to 150 x 150 mm panels using precision shear with registration pin holes
17. Mount tape panels on UV-transparent glass plate with vacuum hold-down for via punching
18. Program CNC via puncher with via pattern for specific filter design, typically 200-500 vias per panel
19. Punch vias using tungsten carbide needle with 75 μm diameter at rate of 150 vias per second
20. Image via pattern using machine vision system to verify via position accuracy within ±10 μm
21. Clean punched panels with compressed air to remove ceramic debris from via punching
22. Inspect via quality under microscope, confirming clean edges without tearing or delamination
23. Apply UV tack coating to improve tape adhesion during subsequent screen printing operations
24. Create via patterns for ground connections, signal routing, and interlayer coupling structures
25. Punch blind vias that connect selected layers rather than all layers for complex 3D routing
26. Generate alternative via patterns for different product variants using CAD/CAM system
27. Verify via punch needle wear every 50,000 vias, replacing needles when diameter exceeds 77 μm
28. Maintain punch tooling in climate-controlled room at 23°C to prevent thermal expansion errors

### Conductor Paste Formulation

29. Prepare silver paste using 85% silver powder with particle size distribution 0.3-0.8 μm
30. Mix silver powder with organic vehicle containing ethyl cellulose binder and terpineol solvent
31. Add glass frit (3% by weight) to promote adhesion between silver conductors and ceramic tape
32. Three-roll mill paste to achieve particle dispersion and viscosity of 150 Pa·s at shear rate 4 s⁻¹
33. Test paste rheology using cone-and-plate rheometer to confirm shear-thinning behavior for printing
34. Measure paste solids content (82%) and adjust if necessary to achieve proper printing characteristics
35. Formulate copper paste as lower-cost alternative for non-critical internal conductors
36. Prepare resistor paste containing ruthenium oxide for integrated termination resistors in baluns
37. Create high-conductivity paste with silver-palladium alloy for low-loss RF transmission lines
38. Age paste at room temperature for 24 hours before use to allow vehicle components to homogenize
39. Filter paste through 325 mesh screen before use to remove agglomerated particles
40. Monitor paste shelf life, using material within 3 months of manufacture to ensure consistent properties

### Screen Printing of Conductors

41. Fabricate stainless steel screens with 325 mesh count and emulsion thickness 15 μm for fine features
42. Pattern screen using photolithographic process to create conductor pattern openings
43. Design conductor patterns with line width 50 μm and spacing 50 μm for RF transmission lines
44. Mount tape panel on vacuum chuck of screen printer with precision alignment to registration pins
45. Align screen to via pattern using fiducial marks, achieving registration accuracy ±15 μm
46. Load silver paste onto screen and squeegee paste through pattern openings onto tape surface
47. Use 70 durometer polyurethane squeegee with angle 60° and print speed 50 mm/s
48. Apply squeegee pressure 2.5 kg to force paste through screen mesh onto ceramic tape
49. Snap-off screen from tape surface immediately after squeegee pass to prevent pattern smearing
50. Inspect printed pattern under microscope for line width accuracy, edge definition, and via filling
51. Dry printed tape in conveyor oven at 80°C for 10 minutes to evaporate paste solvents
52. Measure conductor thickness using non-contact profilometer, confirming 10 μm wet thickness
53. Print second conductor pattern on reverse side of tape for double-sided circuits
54. Create inductor coils by printing spiral patterns with 3.5 turns and outer diameter 600 μm
55. Print capacitor plates with overlapping area 0.25 mm² separated by single dielectric tape layer
56. Form transmission line structures with characteristic impedance Z₀ = 50Ω through controlled width
57. Print ground planes with coverage >90% to provide RF shielding and current return paths
58. Create resonator structures with quarter-wave transmission line sections for filter design
59. Print coupling structures that link adjacent resonators through capacitive or inductive coupling
60. Form balun transformer windings with bifilar spiral patterns on multiple tape layers

### Layer Stacking and Lamination

61. Cut printed tape layers to match panel size using precision die cutter with registration features
62. Clean lamination tooling with isopropyl alcohol to prevent contamination between ceramic layers
63. Stack first ground plane layer onto lamination base plate with alignment to tooling pins
64. Add dielectric spacer layer to provide separation between ground plane and first circuit layer
65. Stack first circuit layer containing resonator patterns, aligning to registration marks
66. Add coupling layer that provides interstage impedance matching between resonators
67. Continue stacking sequence according to filter design, typically 8-15 layers total thickness 400 μm
68. Insert high-εr layers in capacitor regions to increase capacitance density for compact designs
69. Position low-loss layers in critical RF signal paths to minimize insertion loss through structure
70. Verify layer alignment using magnified inspection of registration marks through stack
71. Place release film on top of layer stack to prevent adhesion to lamination platen
72. Load stacked panel into isostatic lamination press with heated platens
73. Apply lamination pressure 3,000 psi at temperature 70°C for 15 minutes under vacuum
74. Heat ceramic stack above glass transition temperature of binder to promote layer bonding
75. Cool laminated panel gradually to 25°C over 30 minute period to prevent thermal stress
76. Remove laminated panel from press and inspect for delamination or layer misalignment
77. Measure panel thickness using micrometer, confirming thickness matches design specification ±5%
78. Test laminate mechanical strength by attempting manual flexing, confirming adequate layer adhesion

### Binder Burnout Process

79. Load laminated panels onto setter plates made of high-purity alumina for furnace processing
80. Space panels 10 mm apart on setter to allow air circulation during binder removal
81. Place loaded setters into debinding furnace with programmable temperature and atmosphere control
82. Begin burnout cycle by heating at 1°C/min from 25°C to 200°C in air atmosphere
83. Hold at 200°C for 2 hours to allow polyvinyl butyral binder to begin thermal decomposition
84. Continue heating at 0.5°C/min from 200°C to 450°C to slowly oxidize organic materials
85. Maintain 450°C for 4 hours to complete binder removal, ensuring all carbon is oxidized to CO₂
86. Monitor furnace exhaust for organic vapors using flame ionization detector during burnout
87. Control heating rate to prevent rapid gas evolution that could cause bloating or delamination
88. Maintain oxidizing atmosphere (air) throughout burnout to ensure complete organic removal
89. Cool furnace at 2°C/min to 250°C, then allow natural cooling to room temperature
90. Inspect debound panels for cracks, warpage, or surface defects from burnout process
91. Measure panel shrinkage, confirming approximately 2-3% linear shrinkage from organic removal
92. Handle debound parts carefully as they have reduced mechanical strength before sintering
93. Store debound panels in clean environment before sintering to prevent contamination

### Co-firing and Sintering

94. Load debound panels onto high-purity alumina setter plates in co-firing furnace
95. Position setters with 15 mm spacing to ensure uniform temperature distribution in furnace chamber
96. Begin co-firing cycle by heating at 5°C/min from 25°C to 850°C in air atmosphere
97. Control atmosphere to maintain slight oxidizing conditions preventing silver conductor oxidation
98. Reach peak sintering temperature 850°C, which is below melting point of silver (962°C)
99. Hold at 850°C for 30 minutes to allow ceramic densification and silver conductor consolidation
100. Observe ceramic particle necking and grain boundary diffusion that densifies ceramic structure
101. Allow silver paste glass frit to soften and promote bonding between conductor and ceramic
102. Achieve final ceramic density >95% of theoretical density through solid-state sintering
103. Shrink ceramic panels by 12-15% in X-Y plane during co-firing due to densification
104. Experience 15-20% Z-axis shrinkage perpendicular to tape layers during sintering
105. Control cooling rate at 3°C/min from 850°C to 500°C to prevent thermal shock cracking
106. Allow furnace to cool naturally from 500°C to room temperature over 6 hour period
107. Remove sintered panels and inspect for warpage, cracks, or dimensional distortion
108. Measure panel dimensions using coordinate measuring machine, confirming shrinkage uniformity
109. Test ceramic density using Archimedes method with water immersion
110. Verify silver conductor continuity using resistance measurement between test points
111. Inspect co-fired panels using X-ray imaging to detect internal voids or delaminations
112. Confirm ceramic dielectric constant by measuring capacitance of test structures
113. Polish cross-section samples and examine under microscope to verify layer registration
114. Measure conductor thickness in sintered parts, typically 7-8 μm after firing shrinkage

### Singulation and Dicing

115. Mount sintered ceramic panels onto dicing tape with UV-release adhesive for sawing
116. Load taped panel onto dicing saw vacuum chuck with precise X-Y positioning
117. Install diamond-impregnated blade with thickness 50 μm for narrow kerf width
118. Program dicing saw with street coordinates to separate individual component die
119. Fill dicing saw coolant reservoir with deionized water for blade cooling and debris removal
120. Set blade rotation speed to 30,000 RPM and feed rate 3 mm/s for clean cuts
121. Dice first set of parallel streets across panel, cutting completely through ceramic substrate
122. Index panel 90° and dice perpendicular streets to separate individual RF components
123. Inspect diced edges under microscope for chipping, confirming edge quality <10 μm chips
124. Wash diced panel with deionized water spray to remove ceramic debris from dicing process
125. Dry panel using compressed nitrogen gas to prevent water spots on ceramic surfaces
126. Expose dicing tape to UV light to reduce adhesive strength for die release
127. Pick individual components from tape using vacuum collet on die bonding equipment
128. Inspect component dimensions using automated vision system, confirming ±25 μm tolerance
129. Sort components by size variation to enable tighter performance binning in testing

### External Termination Plating

130. Load singulated components into barrel plater drum with controlled tumbling action
131. Clean component surfaces with mild alkaline detergent solution at 60°C for 5 minutes
132. Rinse thoroughly with deionized water to remove all detergent residue
133. Immerse components in nickel plating bath containing nickel sulfate and hypophosphite
134. Apply electroless nickel plating to end terminations, depositing 2 μm thick barrier layer
135. Control bath temperature at 85°C and pH 4.8 for optimal nickel deposition rate 3 μm/hour
136. Rinse components in deionized water cascade to remove plating chemistry
137. Transfer components to gold plating bath containing gold cyanide solution
138. Deposit 0.05 μm flash gold layer over nickel to provide oxidation resistance and solderability
139. Use electroless gold plating process that deposits uniformly on all exposed surfaces
140. Control gold bath temperature at 70°C for deposition rate 0.1 μm/hour
141. Rinse plated components thoroughly with deionized water to remove cyanide chemistry
142. Dry components in oven at 120°C for 30 minutes to remove all moisture
143. Inspect termination plating quality using X-ray fluorescence to measure metal thickness
144. Test plating adhesion by tape test, confirming no metal removal from terminations
145. Verify solderability by wetting balance test with Sn-Ag-Cu solder at 245°C

### SAW Filter Fabrication Elements

146. Select lithium niobate (LiNbO₃) substrate with Y-cut crystallographic orientation for SAW devices
147. Clean substrate using RCA process with SC-1 and SC-2 solutions to remove organic and ionic contamination
148. Deposit 120 nm aluminum film using DC sputtering for interdigital transducer (IDT) electrodes
149. Apply photoresist and expose using i-line stepper with 365 nm wavelength to pattern IDT
150. Design IDT with finger period λ = 4 μm for center frequency f₀ = 900 MHz operation
151. Calculate IDT finger width as λ/4 = 1 μm for maximum electroacoustic conversion efficiency
152. Etch aluminum using phosphoric acid wet chemistry to define IDT finger pattern
153. Create input IDT with 50 finger pairs for bandwidth control and impedance matching
154. Form output IDT with same periodicity as input, positioned at acoustic wavelength spacing
155. Design multistrip coupler (MSC) reflectors on both sides of IDT for resonator configuration
156. Pattern reflector gratings with 200 metal strips to provide high acoustic reflectivity
157. Calculate reflector period slightly different from IDT period for temperature compensation
158. Dice LiNbO₃ wafer into individual SAW die using diamond blade with water cooling
159. Bond SAW die into ceramic package with conductive epoxy to ground substrate backside
160. Wire bond IDT pads to package leads using 25 μm gold wire with thermosonic bonding
161. Seal package with metal lid using seam welding in dry nitrogen atmosphere
162. Test SAW filter S-parameters using vector network analyzer from 800-1000 MHz
163. Measure insertion loss typically 1.5-2.5 dB at center frequency for two-port SAW filter
164. Verify rejection >40 dB at frequencies ±50 MHz from passband edges
165. Confirm 3 dB bandwidth matches design specification, typically 25 MHz for 900 MHz filter

### BAW Filter Integration

166. Grow 3 μm silicon dioxide insulating layer on silicon substrate for acoustic isolation
167. Deposit 200 nm molybdenum bottom electrode using DC magnetron sputtering
168. Pattern bottom electrode using photolithography and dry etching with SF₆ plasma
169. Sputter 1.2 μm aluminum nitride (AlN) piezoelectric layer with c-axis orientation
170. Control AlN sputtering at 350°C substrate temperature for optimal crystal quality
171. Achieve AlN film with rocking curve FWHM <2° for high piezoelectric coupling coefficient
172. Deposit 150 nm molybdenum top electrode layer to complete BAW resonator stack
173. Pattern top electrode to define active resonator area, typically 100 x 100 μm for 2.5 GHz
174. Calculate resonance frequency from stack thickness: f₀ = v/2t where v = 10,000 m/s in AlN
175. Etch acoustic Bragg reflector using alternating SiO₂/W layers beneath resonator for isolation
176. Create ladder filter topology by connecting series and shunt resonators in alternating pattern
177. Design series resonators with slightly higher frequency than shunt resonators for bandwidth control
178. Pattern metal interconnects between resonators using aluminum deposition and wet etching
179. Passivate completed filter with 200 nm silicon nitride layer for environmental protection
180. Dice wafer into individual BAW filter die and package using flip-chip bonding to substrate

### Balun Design and Implementation

181. Create Marchand balun using coupled transmission line sections on LTCC substrate
182. Design two quarter-wave coupled line sections with even-mode impedance Z₀ₑ = 120Ω
183. Calculate odd-mode impedance Z₀ₒ = 20Ω to achieve impedance transformation ratio 6:1
184. Print coupled lines on adjacent LTCC layers with broadside coupling for tight coupling coefficient
185. Space coupled lines with single 50 μm dielectric layer for coupling coefficient k = 0.8
186. Form input port at unbalanced end with 50Ω impedance matching to antenna
187. Create two balanced output ports with 100Ω differential impedance for PA input
188. Measure balun amplitude balance typically <0.5 dB difference between balanced ports
189. Verify phase balance <5° from ideal 180° phase difference at center frequency
190. Test common-mode rejection ratio >25 dB at operating frequency
191. Confirm insertion loss <1.0 dB from input to balanced outputs over frequency band

### S-Parameter Characterization and Testing

192. Mount RF component on test fixture using solder reflow at 245°C peak temperature
193. Connect test fixture to vector network analyzer (VNA) with 3.5 mm coaxial cables
194. Calibrate VNA using SOLT (short-open-load-thru) standards at component reference planes
195. Measure S-parameters from 10 MHz to 8 GHz with 1601 frequency points for detailed response
196. Extract insertion loss S₂₁ at center frequency, confirming <1.5 dB for bandpass filter
197. Measure return loss S₁₁ at both ports, verifying >15 dB match at center frequency
198. Calculate stopband rejection by measuring S₂₁ at frequencies ±100 MHz from passband
199. Verify rejection >40 dB in transmit band for receive filter in diplexer application
200. Test third-order intercept point (IP3) by applying two-tone signal at input
201. Measure power handling capability, confirming no performance degradation at +30 dBm input
202. Test temperature stability by measuring S-parameters from -40°C to +85°C in chamber
203. Confirm center frequency drift <±2 MHz over operating temperature range
204. Measure group delay variation across passband, verifying <10 ns ripple for linear phase
205. Test component-to-component variation by measuring 30 samples from production lot
206. Calculate yield by counting devices meeting all specifications, typically >95% for mature process
207. Tape components onto carrier reel using pick-and-place machine for SMT assembly
208. Label reel with part number, lot code, quantity, and electrical specifications
209. Package reels in moisture barrier bags with desiccant for shipment to customers
210. Maintain traceability database linking S-parameter data to individual component serial numbers
