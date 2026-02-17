---
title: "MEMS Gyroscope"
company: "Bosch Sensortec"
country: "Germany"
selling_price: 1.5
inputs:
  - name: "Silicon Wafer"
    cost: 0.4
    link: "silicon-wafer"
  - name: "MEMS Process"
    cost: 0.5
    link: "mems-process"
  - name: "ASIC"
    cost: 0.35
    link: "sensor-asic"
  - name: "Vacuum Package"
    cost: 0.2
    link: "vacuum-package"
value_created: 0.05
---

# MEMS Gyroscope Manufacturing Process

**Market Leader:** [Bosch Sensortec](/companies/bosch-sensortec)



## Introduction to MEMS Gyroscopes

1. MEMS gyroscopes measure angular velocity using the Coriolis effect in microscopic mechanical structures
2. These sensors enable Mac devices to detect rotation in three-dimensional space
3. Gyroscopes complement accelerometers in inertial measurement units for complete motion tracking
4. Modern MEMS gyros achieve sensitivity of 0.01 degrees per second or better
5. The devices operate by detecting Coriolis forces on vibrating proof masses
6. Typical gyroscope die sizes range from 2mm x 2mm to 4mm x 4mm
7. Manufacturing requires specialized MEMS foundries with deep reactive ion etching capabilities
8. Bosch Sensortec pioneered consumer-grade MEMS gyroscopes for mobile applications
9. Gyroscopes enable screen rotation, motion gaming, and camera stabilization features
10. The technology combines mechanical resonators with capacitive sensing electronics

## Coriolis Effect Fundamentals

11. The Coriolis effect causes moving objects to deflect when rotating reference frames change
12. In gyroscopes, a vibrating mass experiences perpendicular forces during device rotation
13. The Coriolis force magnitude equals 2 times mass times velocity times angular rate
14. This force is proportional to both the drive velocity and the rotation rate being measured
15. The effect only manifests when both oscillation and rotation occur simultaneously
16. Drive oscillation typically operates at resonant frequencies between 10-30 kHz
17. Sense mode detects deflections perpendicular to both drive motion and rotation axis
18. The Coriolis acceleration is typically very small, requiring high-Q resonators for detection
19. Quality factor (Q) values above 10,000 are desirable for maximum sensitivity
20. Vacuum packaging maintains high Q by minimizing air damping on moving structures

## Silicon Wafer Preparation

21. MEMS gyroscopes begin with high-purity single-crystal silicon wafers
22. Wafers are typically 200mm or 300mm diameter with <100> crystal orientation
23. Silicon thickness ranges from 400-600 micrometers for structural applications
24. Wafers undergo initial cleaning using RCA clean process to remove contaminants
25. Surface roughness must be below 0.5nm RMS for subsequent processing
26. Silicon-on-insulator (SOI) wafers provide embedded etch-stop layers
27. The device layer thickness (10-100 micrometers) determines mechanical properties
28. Buried oxide layer thickness is typically 1-2 micrometers
29. Handle wafer provides mechanical support during processing and in final device
30. Wafer flats or notches enable crystallographic alignment for anisotropic etching

## Initial Lithography and Doping

31. First photolithography step defines doping regions for electrical connections
32. Positive photoresist is spin-coated to 1-2 micrometer thickness
33. UV exposure through chrome-on-quartz masks patterns the resist
34. Development removes exposed (positive resist) or unexposed (negative resist) regions
35. Ion implantation introduces phosphorus or boron dopants for n-type or p-type regions
36. Implant energies of 50-200 keV control dopant penetration depth
37. Doses of 1e15 to 1e16 atoms per square centimeter create conductive regions
38. Thermal annealing at 900-1100 degrees Celsius activates dopants and repairs lattice damage
39. Doped regions form electrical routing and contact pads on the silicon surface
40. Multiple doping steps create both heavily doped contacts and lightly doped regions

## Isolation and Insulation Layers

41. Thermal oxidation grows silicon dioxide layers for electrical isolation
42. Dry oxidation at 1000-1100 degrees Celsius produces dense, high-quality oxide
43. Oxide thickness of 0.5-1.0 micrometers provides adequate dielectric isolation
44. LPCVD (low-pressure chemical vapor deposition) deposits additional nitride layers
45. Silicon nitride serves as etch mask and passivation layer
46. Nitride deposition occurs at 700-800 degrees Celsius using dichlorosilane and ammonia
47. Layer thickness of 200-500 nanometers provides mechanical protection
48. These layers protect underlying structures during subsequent etching processes
49. Patterned oxide and nitride define regions for later structural release
50. Multiple dielectric layers create complex 3D electrical isolation schemes

## Drive Electrode Formation

51. Second lithography level defines drive electrodes for electrostatic actuation
52. Deep reactive ion etching (DRIE) creates high-aspect-ratio trenches in silicon
53. The Bosch process alternates between etching and passivation cycles
54. Etch depths of 20-100 micrometers create the drive comb finger structures
55. Sidewall verticality is maintained within 1-2 degrees from vertical
56. Drive combs interdigitate with fixed stator electrodes for capacitive actuation
57. Finger widths of 2-5 micrometers and gaps of 1-3 micrometers are typical
58. Hundreds of comb finger pairs maximize drive force and minimize voltage requirements
59. Resonator design targets specific frequencies matching mechanical natural modes
60. Symmetry in comb design minimizes unwanted coupling to sense modes

## Sense Electrode Fabrication

61. Third lithography step patterns sense electrodes for Coriolis force detection
62. Sense electrodes are oriented perpendicular to drive motion direction
63. Parallel plate capacitors are formed between moving proof mass and fixed electrodes
64. Capacitance changes of femtofarads (1e-15 F) must be detected reliably
65. Electrode spacing of 1-2 micrometers provides optimal sensitivity versus stability
66. Multiple sense electrode pairs enable differential measurement for noise rejection
67. DRIE etching creates sense electrode structures with same depth as drive elements
68. Electrode area optimization balances sensitivity against mechanical stiffness
69. Sense capacitance typically ranges from 100-500 femtofarads at rest
70. Guard electrodes surround sense elements to shield from electromagnetic interference

## Proof Mass and Spring System

71. Fourth lithography level defines the central proof mass structure
72. Proof mass size (100-500 micrometers) determines sensitivity and bandwidth
73. Silicon DRIE creates the suspended mass anchored by flexure springs
74. Spring design determines resonant frequency, Q-factor, and stress isolation
75. Serpentine or folded spring geometries provide compliant motion in sense direction
76. Springs must be stiff in drive direction while compliant in sense direction
77. Typical spring widths of 2-5 micrometers allow micrometer-scale deflections
78. Spring length of 50-200 micrometers provides required compliance
79. Multiple spring systems decouple drive, sense, and out-of-plane motions
80. Finite element analysis optimizes spring geometry for minimal cross-axis sensitivity

## Three-Axis Gyroscope Configuration

81. Complete 3-axis gyroscopes require three separate sense mechanisms
82. X-axis gyro detects rotation around the device's width dimension
83. Y-axis gyro detects rotation around the device's length dimension
84. Z-axis gyro detects rotation around the axis perpendicular to the chip surface
85. Each axis typically uses dedicated proof masses or shared resonators with multiple sense modes
86. Z-axis detection often requires different mechanical designs than in-plane axes
87. Tuning fork configurations enable z-axis sensitivity in planar MEMS processes
88. All three gyroscopes must be closely matched in sensitivity and bandwidth
89. Temperature coefficients must track across all axes for consistent performance
90. Die area optimization places all three sensing elements on single silicon chip

## Deep Reactive Ion Etching (DRIE)

91. DRIE defines the final 3D mechanical structure of the gyroscope
92. The Bosch process uses SF6 for silicon etching and C4F8 for sidewall passivation
93. Etch cycles last 5-15 seconds at pressures of 10-50 mTorr
94. Passivation cycles last 2-5 seconds to deposit protective polymer
95. Alternating cycles create slight sidewall ripples (scalloping) of 50-200 nanometers
96. Etch rates of 2-5 micrometers per minute achieve required depths
97. Selectivity to photoresist mask exceeds 100:1 for accurate pattern transfer
98. Temperature control at 10-20 degrees Celsius prevents excessive sidewall roughness
99. Endpoint detection using optical emission spectroscopy determines etch completion
100. Final structures exhibit aspect ratios exceeding 20:1 for deep, narrow features

## Structural Release Process

101. Release etching removes sacrificial material to free movable structures
102. For SOI wafers, the buried oxide layer is etched using hydrofluoric acid (HF)
103. Vapor HF or anhydrous HF minimizes stiction problems during drying
104. Etch time is carefully controlled to remove oxide under proof mass while preserving anchors
105. Critical point drying or freeze drying prevents capillary forces from collapsing structures
106. Released structures must move freely with gaps of 1-3 micrometers all around
107. Anti-stiction coatings like self-assembled monolayers reduce surface adhesion
108. Testing with probe stations verifies mechanical resonance before further processing
109. Typical resonant frequencies range from 10-30 kHz depending on design
110. Quality factors in atmospheric pressure may be only 10-100 before vacuum packaging

## Quadrature Error and Compensation

111. Quadrature error arises from imperfect orthogonality between drive and sense motions
112. Manufacturing variations cause small drive motion components in sense direction
113. Quadrature signals appear 90 degrees out of phase with true Coriolis signals
114. Uncompensated quadrature can be 100-1000 times larger than rotation signals
115. Electrostatic quadrature compensation applies DC voltages to correction electrodes
116. Compensation voltages null out the in-phase component of sense motion
117. Digital compensation algorithms in the ASIC also help reject quadrature errors
118. Symmetric design and precise fabrication minimize initial quadrature magnitudes
119. Temperature variations can change quadrature errors requiring adaptive compensation
120. Advanced designs incorporate dedicated quadrature cancellation comb structures

## Vacuum Packaging Preparation

121. Gyroscopes require vacuum packaging to achieve high quality factors
122. A second wafer (cap wafer) is prepared with matching recess cavities
123. Cap wafer etching creates cavities 20-50 micrometers deep for clearance
124. Getter materials are deposited inside cavities to absorb residual gases
125. Metal bonding frames (gold or aluminum) are deposited around cavity perimeter
126. Feedthrough vias in cap wafer provide electrical connections to device
127. Via metallization requires multi-layer deposition and planarization
128. Through-silicon vias (TSVs) may extend through entire cap wafer thickness
129. Anti-reflection coatings prevent optical interference if laser testing is needed
130. Cap wafer surface flatness must match device wafer to within 1 micrometer

## Wafer-Level Vacuum Bonding

131. Device and cap wafers are aligned with precision better than 5 micrometers
132. Bonding occurs in vacuum chambers at pressures below 0.1 Pascal
133. Thermocompression bonding uses temperature (300-400 degrees Celsius) and pressure
134. Gold-to-gold bonding creates hermetic seals through atomic diffusion
135. Eutectic bonding (gold-tin or aluminum-germanium) offers lower temperature alternatives
136. Bonding time of 30-60 minutes ensures complete seal formation
137. Internal cavity pressure after sealing should be below 1 Pascal
138. Getter activation occurs during bonding to absorb any residual moisture or oxygen
139. Sealed cavities maintain vacuum for device lifetime exceeding 10 years
140. Post-bond inspection uses acoustic microscopy to verify seal integrity

## Quality Factor Enhancement

141. Vacuum packaging increases quality factor from ~100 to over 10,000
142. High Q-factor improves gyroscope sensitivity by amplifying Coriolis response
143. Reduced air damping allows proof mass to oscillate with minimal energy loss
144. Drive voltage requirements decrease by 10-100x with vacuum packaging
145. Narrow resonance peaks require precise drive frequency control
146. Phase-locked loop (PLL) circuits maintain drive at exact resonant frequency
147. Higher Q-factors also improve noise performance and reduce power consumption
148. Typical vacuum levels of 0.01-0.1 Pascal achieve optimal Q-factors
149. Over-vacuum can make devices too sensitive to temperature variations
150. Optimum pressure balances high Q-factor against temperature stability requirements

## ASIC Integration

151. Application-specific integrated circuits (ASICs) provide drive and sense electronics
152. Drive circuits include oscillators, automatic gain control, and PLL frequency tracking
153. Charge amplifiers convert tiny sense capacitance changes to measurable voltages
154. Transimpedance amplifiers with feedback capacitors of 100-500 femtofarads are used
155. Demodulation circuits extract Coriolis signals from carrier frequency
156. Quadrature rejection filters separate in-phase rotation signals from 90-degree error signals
157. Analog-to-digital converters with 16-24 bit resolution digitize sense signals
158. Digital signal processing performs filtering, calibration, and temperature compensation
159. Low-noise design achieves noise floors below 0.01 degrees per second per root Hertz
160. ASIC fabrication typically uses 180nm or 130nm CMOS process technology

## Wafer Dicing and Separation

161. After bonding and ASIC attachment, wafers are diced into individual chips
162. Diamond blade dicing saws cut through silicon and cap wafer layers
163. Blade thickness of 20-30 micrometers minimizes material loss between dies
164. Cutting speed of 10-30 millimeters per second prevents chipping
165. Water jet cooling removes silicon debris and prevents thermal damage
166. Die size including package is typically 3mm x 3mm x 1mm
167. Tape mount holds wafer during dicing and allows die pickup after cutting
168. Automated optical inspection identifies cracked or damaged dies before packaging
169. Dies are ejected from tape using pin pushers or UV tape release
170. Yield loss during dicing is typically 1-2% with optimized parameters

## Die Attach and Wire Bonding

171. Individual gyroscope dies are attached to substrate packages using epoxy or solder
172. Package substrates provide mechanical support and electrical routing
173. Die attach epoxy cures at 150-180 degrees Celsius for 30-60 minutes
174. Gold or aluminum wire bonds connect die pads to package pins
175. Wire bonding uses ultrasonic energy and pressure to form metallurgical bonds
176. Ball bonding on the die and wedge bonding on the substrate are typical
177. Wire diameters of 25 micrometers (1 mil) carry sensor signals
178. Bond pull strength must exceed 10 grams-force for reliability
179. Automated wire bonders place 10-20 wires per die in seconds
180. Visual and electrical inspection verifies wire bond quality before sealing

## Temperature Compensation

181. Silicon elastic modulus changes with temperature affecting resonant frequency
182. Temperature coefficients of -30 to -50 ppm per degree Celsius are typical
183. On-chip temperature sensors monitor die temperature with 0.1 degree resolution
184. Calibration at multiple temperatures maps temperature response curves
185. ASIC digital compensation adjusts sensitivity based on temperature measurements
186. First and second-order polynomial corrections account for nonlinear effects
187. Temperature coefficient matching between axes maintains consistent cross-axis rejection
188. Self-heating from drive electronics can raise die temperature by 1-5 degrees
189. Thermal time constants of seconds require settling time after power-on
190. Advanced designs use temperature-compensated oscillator (TCXO) references

## Testing, Calibration, and Integration

191. Rate tables provide precise rotation inputs for sensitivity calibration
192. Multi-axis calibration determines scale factors, bias offsets, and cross-axis sensitivities
193. Bias stability is measured over temperature with targets below 1 degree per hour
194. Noise spectral density testing characterizes random walk performance
195. Final packaged gyroscopes are integrated with accelerometers and magnetometers to form complete inertial measurement units (IMUs) for Mac devices providing full 9-axis motion tracking for orientation sensing, gesture recognition, and spatial audio applications
