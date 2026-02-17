---
title: "Touch Controller IC"
company: "Synaptics"
country: "United States"
selling_price: 5.0
inputs:
  - name: "Quartzite Sand"
    cost: 0.45
    link: "quartzite-sand"
  - name: "Silicon Metal"
    cost: 0.9
    link: "silicon-metal"
  - name: "Mixed-Signal Process"
    cost: 1.8
    link: "mixed-signal-process"
  - name: "ADC Array"
    cost: 0.8
    link: "adc-array"
  - name: "DSP Core"
    cost: 0.6
    link: "dsp-core"
value_created: 0.45
---

# Touch Controller IC Manufacturing Process

**Market Leader:** [Synaptics](/companies/synaptics)



## Wafer Preparation and Base Processing

1. Receive 300mm silicon wafer with specified crystal orientation for touch controller fabrication
2. Perform incoming wafer inspection using optical microscopy to verify surface quality
3. Clean wafer using RCA standard clean process to remove organic and metallic contaminants
4. Apply initial thermal oxidation at 1000°C to grow 10nm pad oxide layer
5. Deposit 200nm silicon nitride layer using LPCVD for stress relief
6. Pattern photoresist for shallow trench isolation (STI) regions using 193nm lithography
7. Etch trenches 400nm deep using reactive ion etching with CF4/O2 plasma
8. Strip photoresist using oxygen plasma ashing followed by wet clean
9. Deposit oxide fill material using high-density plasma CVD
10. Perform chemical mechanical polishing (CMP) to planarize STI structures
11. Strip nitride layer using hot phosphoric acid at 165°C
12. Remove pad oxide with dilute HF solution
13. Grow 5nm gate oxide using rapid thermal oxidation at 950°C
14. Deposit 150nm polysilicon gate material using LPCVD at 620°C
15. Dope polysilicon with phosphorus using POCl3 diffusion for low resistivity

## N-Well and P-Well Formation

16. Apply photoresist and pattern n-well implant regions using mask alignment
17. Implant phosphorus at 400keV with dose of 3e13 cm⁻² for deep n-wells
18. Strip photoresist and clean wafer surface
19. Apply new photoresist layer for p-well definition
20. Implant boron at 200keV with dose of 2e13 cm⁻² for p-well formation
21. Strip photoresist using solvent and plasma clean
22. Perform twin-well drive-in anneal at 1050°C for 2 hours in nitrogen ambient
23. Grow 20nm sacrificial oxide during well anneal process
24. Strip sacrificial oxide to remove implant damage
25. Verify well junction depths using spreading resistance profiling

## Threshold Voltage Adjustment

26. Apply photoresist for NMOS threshold voltage implant areas
27. Implant boron at 50keV with dose of 5e12 cm⁻² for Vt adjustment
28. Strip photoresist and perform surface clean
29. Apply photoresist for PMOS threshold voltage implant regions
30. Implant phosphorus at 80keV with dose of 4e12 cm⁻² for PMOS Vt tuning
31. Strip photoresist and verify surface cleanliness
32. Perform rapid thermal anneal at 1000°C for 30 seconds to activate dopants
33. Grow fresh 5nm gate oxide using dry oxygen at 900°C
34. Measure gate oxide thickness using ellipsometry across wafer
35. Verify oxide electrical properties using C-V characterization

## Gate Stack Formation

36. Deposit 180nm polysilicon layer for gate electrodes using LPCVD
37. Dope polysilicon with POCl3 at 900°C to achieve sheet resistance under 10 ohm/sq
38. Deposit 100nm silicon nitride as hard mask using PECVD
39. Apply anti-reflective coating (ARC) for lithography optimization
40. Coat wafer with deep-UV photoresist at 2000 RPM
41. Expose gate pattern using 193nm ArF scanner with OPC mask
42. Develop photoresist in TMAH-based developer for 60 seconds
43. Etch nitride hard mask using CHF3/O2 plasma in reactive ion etcher
44. Strip photoresist and ARC layers using oxygen plasma
45. Etch polysilicon gates using HBr/Cl2/O2 chemistry with endpoint detection
46. Strip nitride hard mask with hot phosphoric acid
47. Clean wafer to remove etch residues and polymer formation
48. Inspect gate critical dimensions using CD-SEM, targeting 65nm linewidth
49. Perform gate reoxidation at 850°C to round gate corners and improve reliability
50. Measure gate oxide integrity using time-dependent dielectric breakdown testing

## Lightly Doped Drain (LDD) Formation

51. Apply photoresist and pattern NMOS LDD implant regions
52. Implant arsenic at 5keV with dose of 8e14 cm⁻² for NMOS LDD
53. Strip photoresist and clean wafer surface
54. Apply photoresist for PMOS LDD regions
55. Implant boron difluoride at 3keV with dose of 6e14 cm⁻² for PMOS LDD
56. Strip photoresist using plasma ashing and wet clean
57. Deposit 80nm silicon nitride using LPCVD for spacer formation
58. Perform anisotropic plasma etch to form sidewall spacers on gates
59. Verify spacer width of 60nm using cross-sectional SEM
60. Perform light activation anneal at 900°C for 10 seconds using RTA

## Source/Drain Implantation

61. Apply thick photoresist for NMOS source/drain implant blocking
62. Implant arsenic at 40keV with dose of 4e15 cm⁻² for deep NMOS S/D
63. Tilt wafer 7 degrees and rotate for four quadrant implants to improve uniformity
64. Strip photoresist using oxygen plasma and sulfuric acid clean
65. Apply photoresist for PMOS source/drain regions
66. Implant boron at 15keV with dose of 3e15 cm⁻² for PMOS S/D
67. Perform quad implant with rotation for uniform doping profile
68. Strip photoresist and perform pre-anneal clean
69. Execute spike anneal at 1050°C for 1 second to activate dopants
70. Measure junction depth using secondary ion mass spectrometry (SIMS)
71. Verify sheet resistance of S/D regions using four-point probe
72. Check for junction leakage using electrical test structures

## Silicide Formation

73. Clean wafer surface using dilute HF dip to remove native oxide
74. Deposit 15nm cobalt layer using physical vapor deposition (sputtering)
75. Perform first rapid thermal anneal at 500°C to form CoSi phase
76. Selective etch unreacted cobalt using sulfuric acid and hydrogen peroxide mix
77. Perform second RTA at 700°C to convert to low-resistance CoSi2 phase
78. Measure silicide sheet resistance targeting 5-8 ohm/sq
79. Verify silicide thickness and uniformity using TEM cross-sections
80. Check for silicide bridging or agglomeration defects using SEM inspection
81. Perform electrical test on silicided contacts to verify low contact resistance

## Pre-Metal Dielectric (PMD) Formation

82. Deposit 500nm phosphosilicate glass (PSG) using PECVD at 400°C
83. Anneal PSG at 750°C to densify and outgas moisture
84. Deposit 300nm undoped silicate glass (USG) using high-density plasma CVD
85. Perform CMP to planarize surface for contact lithography
86. Measure post-CMP thickness uniformity across wafer
87. Clean wafer surface to remove CMP slurry particles
88. Apply photoresist and pattern contact holes using i-line stepper
89. Etch contact holes using CHF3/CF4 plasma chemistry with high selectivity to silicon
90. Overetch 20% to ensure contact opening at bottom
91. Strip photoresist using oxygen plasma ashing
92. Perform contact clean using dilute HF to remove native oxide in contacts
93. Inspect contact dimensions using top-down SEM, targeting 250nm diameter
94. Verify contact depth and profile using cross-sectional analysis

## Contact Metallization

95. Deposit 50nm titanium adhesion layer using PVD sputtering
96. Deposit 80nm titanium nitride barrier layer using reactive sputtering in nitrogen
97. Deposit 600nm tungsten plug fill using CVD with WF6 and H2 chemistry
98. Perform CMP to remove excess tungsten and planarize to nitride barrier
99. Measure tungsten plug resistance using Kelvin test structures
100. Verify plug fill quality and void-free structure using SEM inspection
101. Clean wafer surface post-CMP to prepare for metal layer
102. Perform electrical continuity test on contact chain structures

## Metal 1 Layer Formation

103. Deposit 50nm titanium nitride barrier layer using PVD
104. Deposit 500nm aluminum-copper alloy (0.5% Cu) using sputtering
105. Deposit 50nm titanium nitride capping layer as anti-reflective coating
106. Apply photoresist and pattern Metal 1 interconnects using i-line lithography
107. Etch metal stack using Cl2/BCl3 plasma chemistry with endpoint detection
108. Strip photoresist and clean wafer to remove etch residues
109. Measure Metal 1 linewidth and spacing using CD-SEM
110. Verify metal line resistance using sheet resistance measurements
111. Inspect for metal residues or bridging defects using optical inspection
112. Deposit 800nm silicon dioxide inter-layer dielectric (ILD1) using PECVD
113. Anneal ILD1 at 400°C to improve film density and stability
114. Perform CMP on ILD1 to create planar surface for via formation

## Via 1 and Metal 2 Formation

115. Apply photoresist and pattern Via 1 openings using lithography
116. Etch vias through ILD1 using CHF3 plasma with high oxide selectivity
117. Strip photoresist and clean via bottoms using wet chemistry
118. Deposit titanium/titanium nitride barrier layer for via metallization
119. Deposit tungsten CVD fill for Via 1 plugs
120. CMP tungsten to planarize and remove excess metal
121. Deposit barrier and aluminum-copper alloy for Metal 2 layer (600nm)
122. Apply TiN capping layer on Metal 2
123. Pattern and etch Metal 2 using same process as Metal 1
124. Deposit ILD2 oxide layer (800nm) using PECVD
125. Planarize ILD2 using CMP process
126. Verify metal resistance and via chain continuity through electrical test

## Metal 3 and Upper Metal Layers

127. Form Via 2 openings using photolithography and plasma etch
128. Metallize Via 2 with barrier/tungsten process
129. Deposit and pattern Metal 3 layer (600nm aluminum-copper)
130. Deposit ILD3 and planarize using CMP
131. Form Via 3 and Metal 4 using same process sequence
132. Increase Metal 4 thickness to 800nm for lower resistance power routing
133. Verify inter-layer dielectric integrity using voltage ramp testing
134. Check for via voiding or incomplete fill using X-ray inspection
135. Measure cross-wafer resistance uniformity on test structures

## Passivation Layer Formation

136. Deposit 500nm silicon nitride passivation layer using PECVD
137. Deposit 500nm silicon dioxide final passivation using PECVD
138. Apply thick photoresist for pad opening lithography
139. Pattern bond pad openings in passivation stack
140. Etch passivation layers using fluorine-based plasma chemistry
141. Strip photoresist and clean wafer surface
142. Verify pad opening dimensions and alignment to metal pads
143. Inspect for passivation cracks or delamination defects
144. Measure passivation layer stress using wafer bow measurement

## Analog and Mixed-Signal Structures

145. Form high-precision capacitors using metal-insulator-metal (MIM) structures
146. Pattern bottom MIM plate using dedicated mask and metal layer
147. Deposit 50nm high-k dielectric for MIM capacitor using ALD
148. Pattern and etch top MIM plate with precise alignment
149. Verify MIM capacitor matching to within 0.1% across array
150. Form poly-poly capacitors for additional analog circuitry
151. Create high-value resistors using silicided polysilicon
152. Pattern precision resistors with laser trimming capability
153. Form deep trench capacitors for charge storage in sensing circuits
154. Implement guard rings and isolation structures for noise reduction
155. Create dedicated analog ground planes in metal layers
156. Verify analog component matching using parametric test structures

## ADC Array Integration

157. Integrate successive approximation register (SAR) ADC cells in array format
158. Form precision resistor ladder for ADC reference voltage generation
159. Implement capacitor DAC arrays for charge redistribution in ADCs
160. Create low-noise comparator circuits with offset cancellation
161. Route analog input signals from touch sensor electrodes to ADC inputs
162. Implement multiplexer circuits to scan multiple touch channels
163. Design anti-aliasing filters using on-chip RC networks
164. Add ESD protection circuits on all analog input pins
165. Verify ADC linearity and resolution through electrical characterization
166. Measure ADC sampling rate capability targeting 100kHz per channel
167. Test signal-to-noise ratio achieving minimum 60dB performance

## DSP Core Integration

168. Integrate 32-bit RISC processor core for signal processing algorithms
169. Implement dedicated hardware multipliers for fast convolution operations
170. Add SRAM arrays for touch data buffering (16KB capacity)
171. Create direct memory access (DMA) controller for efficient data transfer
172. Implement hardware accelerators for baseline tracking algorithms
173. Add filtering engines for noise rejection in frequency domain
174. Create interrupt controller for real-time touch event handling
175. Implement I2C and SPI interface controllers with configurable speed
176. Add GPIO pins for device configuration and status signaling
177. Integrate power management unit with multiple voltage domains
178. Create clock generation and distribution network using PLL
179. Verify DSP core functionality through functional test patterns

## I2C/SPI Interface Circuits

180. Design I2C slave interface supporting standard and fast modes (400kHz)
181. Implement I2C address recognition logic with configurable device address
182. Create register file for host communication and configuration access
183. Design SPI interface supporting modes 0 and 3 up to 10MHz
184. Implement chip select, clock, MOSI, and MISO signal logic
185. Add FIFO buffers for data streaming between host and touch controller
186. Create interrupt output pin with configurable polarity and trigger modes
187. Implement register map with touch coordinate reporting and gesture flags
188. Add firmware update mechanism through I2C/SPI bootloader
189. Design low-power sleep mode with I2C wake-up capability

## Final Testing and Packaging Preparation

190. Perform comprehensive wafer-level functional test using probe cards
191. Test all touch sensing channels for proper capacitance measurement
192. Verify multi-touch tracking up to 10 simultaneous touch points
193. Execute built-in self-test (BIST) routines for memory and logic verification
194. Sort wafers into bins based on performance grades and yield analysis
195. Prepare wafers for die separation and packaging with backgrind to 100um thickness
