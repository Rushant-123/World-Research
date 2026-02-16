---
title: "PD Controller"
company: "Cypress Semiconductor"
country: "United States"
selling_price: 2.80
inputs:
  - name: "Silicon Wafer"
    cost: 0.40
    link: "silicon-wafer"
  - name: "Photomask Set"
    cost: 0.30
    link: "photomask-set"
  - name: "Package Substrate"
    cost: 0.35
    link: "package-substrate"
  - name: "Bond Wire"
    cost: 0.15
    link: "bond-wire"
  - name: "Molding Compound"
    cost: 0.10
    link: "molding-compound"
value_created: 1.50
---

1. Receive 200mm diameter Czochralski-grown silicon wafer with <100> crystal orientation and p-type background doping at 1e15 atoms/cm3
2. Inspect incoming wafer for surface defects using brightfield optical microscopy at 200x magnification
3. Measure wafer thickness using capacitance gauge to verify 725 micrometers plus/minus 10 micrometers
4. Load wafer into RCA cleaning station for initial contamination removal
5. Immerse wafer in SC-1 solution (NH4OH:H2O2:H2O at 1:1:5 ratio) heated to 75 degrees Celsius for 10 minutes to remove organic contaminants
6. Rinse wafer with deionized water cascade for 3 minutes achieving 18.2 megohm-cm resistivity
7. Immerse wafer in dilute HF solution (50:1 H2O:HF) for 30 seconds to strip native oxide layer
8. Rinse wafer with deionized water for 2 minutes
9. Immerse wafer in SC-2 solution (HCl:H2O2:H2O at 1:1:6 ratio) at 75 degrees Celsius for 10 minutes to remove metallic contaminants
10. Perform final deionized water rinse for 3 minutes
11. Spin-dry wafer at 2000 RPM for 60 seconds in nitrogen ambient
12. Load wafer into thermal oxidation furnace preheated to 1000 degrees Celsius
13. Flow oxygen gas at 5 liters per minute through furnace tube for 45 minutes
14. Grow 500 angstrom thick pad oxide layer on wafer surface to serve as stress relief buffer
15. Cool furnace to 800 degrees Celsius over 30 minute period to prevent thermal shock
16. Remove wafer and measure oxide thickness using ellipsometry at multiple points
17. Load wafer into LPCVD reactor for nitride deposition
18. Heat chamber to 780 degrees Celsius under vacuum at 200 millitorr pressure
19. Flow dichlorosilane at 60 sccm and ammonia at 160 sccm for 25 minutes
20. Deposit 1500 angstrom silicon nitride layer to serve as hard mask for shallow trench isolation
21. Cool chamber and remove wafer
22. Apply positive photoresist S1813 by spin coating at 3000 RPM for 30 seconds achieving 1.3 micrometer thickness
23. Soft bake photoresist on hotplate at 115 degrees Celsius for 90 seconds
24. Load wafer into i-line stepper lithography system with 365nm wavelength
25. Align first photomask defining shallow trench isolation pattern with alignment marks
26. Expose photoresist with 120 millijoules/cm2 dose using 0.35 micrometer resolution optics
27. Post-exposure bake wafer at 115 degrees Celsius for 60 seconds
28. Develop photoresist in MF-319 developer for 60 seconds with puddle method
29. Rinse wafer with deionized water and spin dry
30. Inspect photoresist pattern using optical microscope to verify critical dimensions
31. Load wafer into plasma etcher for nitride etch
32. Strike CHF3/O2 plasma at 50 mTorr pressure with 800 watts RF power
33. Etch silicon nitride layer for 4 minutes with 300 angstroms/minute rate
34. Use laser interferometry endpoint detection to stop at pad oxide layer
35. Ash remaining photoresist in oxygen plasma at 300 watts for 5 minutes
36. Load wafer into inductively coupled plasma reactive ion etcher for silicon trench etch
37. Etch silicon using HBr/Cl2/O2 chemistry at 10 mTorr pressure with 1200 watts source power
38. Etch 350 nanometer deep trenches into silicon with 80 degree sidewall angle
39. Monitor etch depth using optical emission spectroscopy
40. Clean wafer in dilute HF to remove etch residues
41. Load wafer into thermal oxidation furnace for trench liner oxide
42. Grow 100 angstrom conformal oxide at 900 degrees Celsius in dry oxygen
43. Load wafer into LPCVD reactor for trench fill
44. Deposit silicon dioxide using TEOS precursor at 650 degrees Celsius
45. Fill trenches completely and deposit 200 nanometer overburden
46. Anneal oxide at 1000 degrees Celsius for 30 minutes to densify and reduce voids
47. Load wafer into chemical mechanical polishing tool
48. Polish wafer using silica slurry with pH 10.5 at 5 PSI downforce
49. Remove oxide overburden and stop on nitride hard mask layer
50. Clean wafer in SC-1 solution to remove polishing residues
51. Strip nitride hard mask in hot phosphoric acid at 165 degrees Celsius for 15 minutes
52. Strip pad oxide in dilute HF solution for 1 minute
53. Perform RCA clean sequence to prepare surface for well implantation
54. Apply photoresist and pattern N-well regions using second photomask
55. Load wafer into ion implanter for N-well formation
56. Implant phosphorus ions at 350 keV energy with dose of 3e13 atoms/cm2
57. Strip photoresist in oxygen plasma asher
58. Apply photoresist and pattern P-well regions using third photomask
59. Implant boron ions at 180 keV energy with dose of 2.5e13 atoms/cm2
60. Strip photoresist in oxygen plasma
61. Load wafer into rapid thermal annealer for well drive-in
62. Ramp temperature to 1050 degrees Celsius in 30 seconds under nitrogen
63. Hold at temperature for 20 seconds to drive wells to 2.5 micrometer depth
64. Rapidly cool to 600 degrees Celsius to minimize dopant diffusion
65. Grow 80 angstrom sacrificial oxide at 850 degrees Celsius in dry oxygen
66. Strip sacrificial oxide in HF to remove implant damage and contaminants
67. Grow 90 angstrom high-quality gate oxide at 850 degrees Celsius in dry O2 with TCA additive
68. Measure gate oxide thickness using ellipsometry to verify uniformity within 2 angstroms
69. Load wafer into LPCVD reactor for polysilicon gate deposition
70. Deposit 2000 angstrom undoped polycrystalline silicon at 620 degrees Celsius using silane gas
71. Load wafer into diffusion furnace for polysilicon doping
72. Dope polysilicon with phosphorus using POCl3 source at 900 degrees Celsius for 30 minutes
73. Achieve polysilicon sheet resistance of 20 ohms/square
74. Apply photoresist and pattern gate electrodes using fourth photomask
75. Etch polysilicon gates using Cl2/HBr plasma chemistry in ICP etcher
76. Etch with high anisotropy to achieve vertical sidewalls on 0.25 micrometer gates
77. Strip photoresist in oxygen plasma
78. Apply photoresist and pattern P-channel MOSFET source/drain extension regions
79. Implant boron fluoride at 15 keV with dose of 3e14 atoms/cm2 for shallow junctions
80. Strip photoresist
81. Apply photoresist and pattern N-channel MOSFET source/drain extension regions
82. Implant arsenic at 25 keV with dose of 4e14 atoms/cm2
83. Strip photoresist in oxygen plasma asher
84. Deposit 800 angstrom conformal silicon nitride by LPCVD for spacer formation
85. Anisotropically etch nitride using CHF3/O2 plasma to form sidewall spacers on gates
86. Leave 60 nanometer wide spacers adjacent to gate edges
87. Apply photoresist and pattern P-channel source/drain deep implant regions
88. Implant boron at 40 keV with dose of 4e15 atoms/cm2
89. Strip photoresist
90. Apply photoresist and pattern N-channel source/drain deep implant regions
91. Implant phosphorus at 60 keV with dose of 5e15 atoms/cm2
92. Strip photoresist in oxygen plasma
93. Load wafer into rapid thermal annealer for source/drain activation
94. Heat to 1000 degrees Celsius for 10 seconds to activate dopants while minimizing lateral diffusion
95. Grow 200 angstrom stress relief oxide at 800 degrees Celsius
96. Deposit 500 nanometer pre-metal dielectric using plasma-enhanced CVD of silicon dioxide
97. Deposit from TEOS precursor at 400 degrees Celsius with oxygen plasma
98. Anneal PMD layer at 850 degrees Celsius for 30 minutes to densify
99. Apply photoresist and pattern contact holes using fifth photomask
100. Etch contact holes through PMD and stress oxide using CHF3/CF4 plasma
101. Use high selectivity chemistry to stop on silicon and polysilicon surfaces
102. Etch approximately 150 contact holes with 0.3 micrometer diameter
103. Strip photoresist and clean contacts in dilute HF
104. Sputter clean contact surfaces with argon plasma at 250 watts for 20 seconds
105. Load wafer into PVD sputtering system for barrier layer
106. Sputter 100 angstrom titanium layer at room temperature
107. Heat wafer to 650 degrees Celsius in nitrogen for 30 seconds to form TiSi2 at contact bottoms
108. Sputter 500 angstrom titanium nitride barrier layer to prevent aluminum spiking
109. Load wafer into aluminum sputtering chamber
110. Sputter 5000 angstrom aluminum-copper alloy (0.5% copper) at 200 degrees Celsius
111. Apply photoresist and pattern metal 1 interconnect layer using sixth photomask
112. Etch aluminum stack using Cl2/BCl3 plasma at 60 degrees Celsius
113. Pattern power distribution buses, local interconnects, and routing traces
114. Strip photoresist in oxygen plasma
115. Deposit 800 nanometer inter-metal dielectric using PECVD silicon dioxide
116. Planarize IMD surface using chemical mechanical polishing
117. Polish to 600 nanometer remaining thickness
118. Apply photoresist and pattern via holes to metal 1 using seventh photomask
119. Etch vias through IMD using CHF3/CF4 plasma chemistry
120. Etch approximately 80 via holes with 0.35 micrometer diameter
121. Strip photoresist and clean vias
122. Sputter 100 angstrom titanium and 500 angstrom titanium nitride barrier layers
123. Sputter 6000 angstrom aluminum-copper metal 2 layer
124. Apply photoresist and pattern metal 2 layer using eighth photomask
125. Etch aluminum stack to form top-level interconnects and bond pads
126. Strip photoresist in oxygen plasma asher
127. Deposit 1 micrometer passivation layer using PECVD silicon nitride
128. Apply photoresist and pattern pad openings using ninth photomask
129. Etch nitride using SF6/O2 plasma to expose bond pads
130. Strip photoresist
131. Anneal wafer at 400 degrees Celsius in forming gas (95% N2, 5% H2) for 30 minutes
132. Reduce interface trap density and improve contact resistance
133. Perform wafer-level electrical parametric testing
134. Measure sheet resistances of polysilicon and metal layers at test structures
135. Measure transistor threshold voltages on NMOS and PMOS test devices
136. Verify gate oxide integrity with time-dependent dielectric breakdown testing
137. Apply photoresist and expose scribe line streets using dicing photomask
138. Mount wafer on blue UV-release tape on metal frame
139. Load wafer into diamond saw dicing tool
140. Dice wafer into individual 4mm x 4mm die using 20 micrometer wide saw blade
141. Saw through streets at 30000 RPM spindle speed with 5mm/second feed rate
142. Rinse diced wafer with deionized water to remove debris
143. Expose tape to UV light to release adhesive
144. Pick individual die from tape using vacuum collet
145. Inspect die visually for chipping and contamination
146. Place known-good die into waffle pack carriers
147. Perform electrical probe testing on die to verify basic functionality
148. Test power-on-reset circuit, internal voltage references, and GPIO operation
149. Sort die into bins based on performance characteristics and speed grades
150. Load package substrates into die attach station
151. Apply silver-filled epoxy die attach adhesive to substrate paddle using dispensing needle
152. Pick die from waffle pack with vacuum collet
153. Place die onto substrate paddle with proper orientation alignment
154. Cure die attach epoxy at 150 degrees Celsius for 60 minutes in convection oven
155. Load packages into wire bonder tool
156. Thread 25 micrometer diameter gold wire through capillary
157. Form first bond on die pad using thermosonic ball bonding
158. Apply 25 grams force, 150 degrees Celsius temperature, and ultrasonic energy
159. Create 50 micrometer diameter ball bond
160. Loop wire to corresponding substrate lead with 200 micrometer loop height
161. Form second bond using crescent wedge bond on substrate
162. Break wire and move to next pad position
163. Bond all 32 I/O connections plus power and ground pads
164. Inspect wire bonds using automated optical inspection system
165. Verify bond placement within 10 micrometers and loop clearance
166. Load packages into transfer molding press
167. Preheat epoxy molding compound pellets to 80 degrees Celsius
168. Clamp packages in mold cavity with proper orientation
169. Heat mold to 175 degrees Celsius
170. Inject molding compound at 100 PSI pressure
171. Fill cavity and encapsulate die and wire bonds
172. Cure epoxy at 175 degrees Celsius for 90 seconds
173. Cool mold and eject molded packages
174. Post-cure packages at 175 degrees Celsius for 4 hours in oven
175. Singulate individual packages from lead frame strips using trim and form tool
176. Trim support tabs and form leads to TSSOP-32 configuration
177. Electroplate package leads with 100 microinch nickel underplate
178. Electroplate 8 microinch palladium intermediate layer
179. Electroplate 4 microinch gold surface finish for solderability
180. Bake packages at 150 degrees Celsius for 6 hours to remove moisture
181. Load packages into programming socket on automated handler
182. Apply power and establish JTAG communication interface
183. Erase embedded flash memory array using 12 volt charge pump
184. Program USB PD controller firmware into 64 kilobyte flash memory
185. Write configuration registers for default voltage and current profiles
186. Program device identification codes and manufacturing lot traceability
187. Verify programmed data by reading back and comparing checksums
188. Execute functional test vectors through automated test equipment
189. Apply 5 volt supply and verify quiescent current under 50 microamps
190. Test USB-C CC pin detection circuitry with pullup and pulldown resistors
191. Verify BMC encoding and decoding of power delivery messages
192. Test voltage negotiation from 5V to 20V in 1V increments
193. Verify current limiting and overcurrent protection circuits
194. Test thermal shutdown at 150 degrees Celsius junction temperature
195. Mark passing units with date code and lot number using laser marking system
