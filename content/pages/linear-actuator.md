---
title: "Linear Actuator"
company: "Nidec Corporation"
country: "Japan"
selling_price: 1.5
inputs:
  - name: "Neodymium Magnet"
    cost: 0.2
    link: "neodymium-magnet"
  - name: "Copper Coil"
    cost: 0.1
    link: "copper-wire-coil"
  - name: "Spring Element"
    cost: 0.08
    link: "phosphor-bronze"
  - name: "Housing"
    cost: 0.1
    link: "stainless-steel-sheet"
  - name: "Flex Cable"
    cost: 0.07
    link: "flexible-pcb"
  - name: "Assembly"
    cost: 0.2
    link: "precision-assembly-labor"
value_created: 0.75
lead_time_days: 60
minimum_order_quantity: 5000
transportation_method: "ocean"
geopolitical_risk: "low"
price_volatility: "medium"

certifications:
  - "ISO9001"
  - "ISO14001"
data_quality: "estimated"
---

Linear actuators convert electrical energy into precise linear motion using electromagnetic or piezoelectric principles. Voice coil motor (VCM) designs dominate consumer electronics applications due to their fast response times (1-3 ms), controllable force output (0.5-2.5 N), and compact form factors. These actuators enable haptic feedback in trackpads, camera autofocus, and vibration alerts in smartphones. Manufacturing requires precision coil winding, magnet assembly with field strengths of 1.2-1.4 Tesla, spring suspension tuning to resonant frequencies of 150-180 Hz, and calibration systems that measure stroke length (0.3-1.5 mm) and force linearity across the operating range.

## Voice Coil Motor Design (Steps 1-15)

1. Define actuator specifications: stroke length 0.8 mm, peak force 1.8 N, resonant frequency 165 Hz, response time <2 ms for haptic feedback application
2. Calculate magnetic circuit requirements: 12 mm diameter neodymium magnet with surface field strength 1.35 Tesla, air gap flux density 0.85 Tesla
3. Design coil geometry: 150 turns of 0.06 mm diameter copper wire, coil resistance 8.5 ohms, inductance 0.22 mH
4. Model electromagnetic force constant: 0.18 N/A based on coil turns, air gap flux density, and effective conductor length
5. Simulate dynamic response using finite element analysis: verify 1.7 ms rise time to peak force at 10 A drive current
6. Design spring suspension system: two phosphor bronze springs with combined stiffness 2200 N/m, yielding 165 Hz natural frequency
7. Calculate power dissipation: 8.5 W maximum at peak current, requiring thermal management through housing contact
8. Select housing material: austenitic stainless steel 304 with magnetic permeability <1.02, wall thickness 0.3 mm for electromagnetic shielding
9. Design air gap geometry: radial gap 0.25 mm between coil and magnet assembly, tolerance ±0.02 mm to maintain field uniformity
10. Specify magnet grade: N42 neodymium-iron-boron with remanence 1.32 Tesla, coercivity 915 kA/m, maximum operating temperature 80°C
11. Design flux return path: soft iron backiron 1.2 mm thick forming magnetic circuit with 15% lower reluctance than air gap
12. Model thermal performance: predict 45°C coil temperature rise at continuous 4 A RMS current with natural convection cooling
13. Calculate stroke efficiency: 88% of input electrical energy converted to mechanical work, 12% lost to coil resistance and eddy currents
14. Design end stops: silicone rubber dampers limiting travel to ±0.45 mm, impact deceleration 800 m/s² at maximum velocity
15. Create 3D CAD model with 47 individual components: magnet assembly, coil former, spring suspensions, housing, flex cable interface

## Magnet Assembly (Steps 16-30)

16. Receive cylindrical neodymium magnets: 12 mm diameter × 4 mm height, grade N42, nickel-copper-nickel plating 15 μm total thickness
17. Inspect magnet dimensions using coordinate measuring machine: diameter tolerance ±0.05 mm, height tolerance ±0.03 mm, perpendicularity 0.01 mm
18. Measure magnetic field strength with gaussmeter: verify surface field 13,500 ± 500 Gauss at magnet face center
19. Clean magnet surfaces with isopropyl alcohol and lint-free wipes, removing manufacturing oils and particulate contamination
20. Apply structural epoxy adhesive to magnet mounting surface: two-part epoxy with shear strength 28 MPa, thermal conductivity 0.8 W/m·K
21. Position magnet in soft iron cup: align center axis within 0.03 mm using optical alignment fixture, press fit with 120 N force
22. Cure epoxy in convection oven at 80°C for 45 minutes, achieving >95% of ultimate bond strength
23. Machine magnet assembly outer diameter: turn to 13.8 mm ±0.02 mm on precision lathe, maintaining concentricity with magnetic axis <0.015 mm
24. Inspect magnetic field distribution: map radial and axial components at 36 angular positions, verify symmetry within 3%
25. Magnetize soft iron cup to saturation: apply 1.6 Tesla field using pulsed magnetizer, creating efficient flux return path
26. Measure assembly magnetic moment: 0.042 A·m² total dipole moment using vibrating sample magnetometer
27. Apply corrosion protection coating: 8 μm parylene-C conformal coating deposited by chemical vapor deposition at 25°C
28. Test coating adhesion: cross-hatch tape test per ASTM D3359, verify 5B rating (no coating removal)
29. Inspect for magnetic particle contamination: illuminate with UV light, remove any ferrous debris using demagnetized tweezers
30. Store magnet assemblies in magnetized pairs with north poles adjacent, reducing external field and preventing demagnetization during storage

## Coil Winding (Steps 31-50)

31. Prepare coil former: injection-molded liquid crystal polymer bobbin, outer diameter 11.2 mm, wall thickness 0.2 mm, mass 0.08 g
32. Clean former in ultrasonic bath with deionized water and surfactant for 3 minutes, rinse, dry with nitrogen
33. Load 0.06 mm diameter enameled copper wire onto winding machine: Grade 2 polyurethane insulation, 18 μm coating thickness
34. Program winding parameters: 150 turns in single layer, pitch 0.065 mm, tension 0.15 N to prevent wire breaks
35. Mount coil former in precision spindle chuck: align axis within 0.01 mm total indicated runout using dial indicator
36. Apply initial wire anchor: secure wire end to former using UV-curable adhesive, cure with 5 second 385 nm LED exposure
37. Wind first 75 turns at 800 RPM spindle speed: traverse head feeds at 52 mm/min, maintaining constant wire tension
38. Inspect winding uniformity: measure layer thickness at 4 positions, verify 3.9 ± 0.1 mm width across coil
39. Wind second 75 turns: increase tension to 0.17 N to compensate for expanding diameter, maintain turn spacing
40. Terminate winding: secure wire end with UV adhesive, leave 6 mm lead length for soldering to flex cable
41. Measure coil resistance: 8.5 ± 0.3 ohms at 20°C using four-wire measurement method, temperature coefficient 0.0039/°C
42. Test insulation resistance: apply 500 VDC between coil and grounded former, verify >100 MΩ resistance
43. Measure coil inductance: 0.22 mH at 1 kHz using LCR meter, quality factor Q = 18 indicating acceptable wire resistance
44. Apply overcoat adhesive: 25 μm layer of flexible epoxy encapsulating windings, preventing turn-to-turn abrasion
45. Cure overcoat at 60°C for 30 minutes in air convection oven, achieving Shore D hardness 65
46. Trim coil lead wires: cut to 5.5 mm length using precision wire cutter, strip 0.8 mm of enamel insulation using thermal stripper at 420°C
47. Tin coil leads: apply rosin flux, dip in 280°C tin-silver-copper solder for 1.5 seconds, creating 0.3 mm solder coating
48. Inspect coil for defects: examine under 10× magnification for wire breaks, insulation damage, contamination
49. Measure coil mass: 0.32 g on precision balance, contributing 35% of total moving mass including spring suspensions
50. Store coils in ESD-safe trays with desiccant: maintain <20% relative humidity to prevent enamel insulation degradation

## Spring Suspension Manufacturing (Steps 51-65)

51. Receive phosphor bronze strip: C51000 alloy, 0.08 mm thickness, 300 MPa yield strength, 110 GPa elastic modulus
52. Clean strip in alkaline cleaner at 55°C for 5 minutes, removing rolling oils and surface oxides
53. Program laser cutting path: create spring pattern with 8 radial beams, 0.15 mm beam width, 6 mm outer diameter
54. Cut springs using fiber laser: 50 W average power, 100 kHz pulse rate, 800 mm/s cutting speed with nitrogen assist gas
55. Inspect cut edges: verify <15 μm heat-affected zone, no recast layer, edge roughness Ra <2 μm
56. Stress relieve springs: heat to 250°C for 20 minutes in nitrogen atmosphere, cool slowly to relieve residual cutting stresses
57. Measure spring stiffness: apply calibrated force from 0-2 N, measure deflection with laser displacement sensor, calculate stiffness 1100 N/m per spring
58. Test spring linearity: verify force-deflection curve deviates <2% from linear fit over ±0.5 mm displacement range
59. Form center dome: press spring center 0.3 mm out of plane using ball-nosed punch, creating preload when assembled
60. Measure dome height: 0.30 ± 0.02 mm using optical profilometer, affects assembled resonant frequency by ±3 Hz
61. Clean springs in isopropyl alcohol ultrasonic bath for 2 minutes, removing particulates from laser cutting
62. Apply corrosion protection: electroless nickel plating 2 μm thickness, providing 350 MPa yield strength coating
63. Measure spring mass: 0.024 g each on microbalance, total moving mass with coil assembly 0.37 g
64. Cycle test springs: apply ±0.5 mm displacement for 100,000 cycles at 165 Hz, verify <3% stiffness change
65. Organize springs in matched pairs: select springs with <1% stiffness difference for assembly into single actuator

## Housing Fabrication (Steps 66-80)

66. Stamp housing from stainless steel 304 sheet: 0.3 mm thickness, progressive die with 8 stations
67. First operation: blank 18 mm diameter disk with ±0.05 mm tolerance using carbide punch and die
68. Second operation: draw cylinder 9 mm deep with 12.5 mm inner diameter, wall thickness 0.28 mm after thinning
69. Third operation: form bottom mounting flange 1.5 mm wide, coplanar within 0.03 mm for PCB attachment
70. Fourth operation: pierce two 0.8 mm diameter holes for flex cable exit, position tolerance ±0.05 mm
71. Fifth operation: coin top edge to 0.2 mm radius, reducing sharp edges that could damage flex cable
72. Sixth operation: form internal spring mounting ledges at two heights: 2.5 mm and 6.5 mm from base
73. Seventh operation: pierce four 0.6 mm diameter holes for spring attachment rivets
74. Eighth operation: cut away cable exit slot 1.2 mm × 4 mm for flex cable routing without bending stress
75. Clean housings in five-stage process: alkaline clean, rinse, acid pickle, rinse, deionized water rinse
76. Passivate stainless steel: immerse in 20% nitric acid solution at 50°C for 30 minutes, enhancing corrosion resistance
77. Inspect dimensions: measure inner diameter 12.50 ± 0.03 mm, depth 9.0 ± 0.1 mm, flange flatness <0.05 mm
78. Test magnetic properties: verify relative permeability <1.02 using permeameter, ensuring minimal flux shunting
79. Measure surface roughness: verify Ra <1.2 μm on inner diameter to minimize friction with moving coil assembly
80. Apply dry film lubricant: spray 3 μm coating of PTFE-based lubricant on inner diameter, curing at 200°C for 15 minutes

## Flex Cable Attachment (Steps 81-95)

81. Receive flexible printed circuit: two-layer design, 18 μm copper conductors on 25 μm polyimide substrate with coverlay
82. Inspect flex cable dimensions: 0.8 mm width, 15 mm length, conductor resistance 0.15 ohms, insulation resistance >100 MΩ
83. Clean cable contact pads: wipe with isopropyl alcohol, ensuring solderable surface free of oxidation
84. Apply solder paste: stencil print SAC305 solder paste on two 0.6 mm × 1.2 mm pads, deposit thickness 80 μm
85. Position coil assembly in soldering fixture: hold coil vertical with tinned leads aligned to flex cable pads
86. Place flex cable onto coil leads: align within 0.1 mm using vision system and precision X-Y stage
87. Reflow solder in convection oven: peak temperature 245°C for 40 seconds, creating 0.3 mm fillet joints
88. Inspect solder joints at 20× magnification: verify complete wetting, no voids >0.1 mm, no bridging between conductors
89. Pull test solder joints: apply 2.5 N tensile force, verify no joint failure or conductor delamination
90. Apply strain relief: encapsulate solder joints with 0.5 mm radius of flexible epoxy, extending 2 mm along cable
91. Cure strain relief at 80°C for 20 minutes, achieving 2 MPa tensile strength and 150% elongation at break
92. Measure electrical parameters: verify coil resistance 8.5-8.8 ohms including flex cable, insulation resistance >100 MΩ
93. Apply protective coverlay: laminate 25 μm polyimide film over exposed conductors using thermal lamination at 180°C
94. Form cable exit bend: create 90° bend with 1.5 mm radius 3 mm from coil attachment, within flex cable minimum bend radius
95. Final flex cable inspection: verify no conductor cracks visible under 40× magnification, no delamination at bend

## Coil and Spring Assembly (Steps 96-110)

96. Position lower spring on assembly fixture: locate on precision mandrel aligned to coil centerline
97. Apply adhesive to spring center: deposit 0.02 ml of structural cyanoacrylate adhesive with anaerobic activator
98. Lower coil assembly onto spring: align coil axis perpendicular to spring plane within 0.5°, press with 5 N force
99. Cure adhesive for 10 minutes at room temperature, achieving 18 MPa shear strength
100. Measure assembly concentricity: verify coil outer diameter centered on spring within 0.05 mm radial runoff
101. Position upper spring: align on fixture with beam orientations 45° offset from lower spring for balanced support
102. Apply adhesive to upper spring center and coil top surface
103. Align and bond upper spring: maintain symmetry with lower spring, parallelism within 0.1 mm across diameter
104. Cure second spring joint for 10 minutes
105. Remove assembly from fixture and measure free height: 8.5 ± 0.1 mm from lower spring plane to upper spring plane
106. Test suspension stiffness: apply calibrated 1 N force to coil, measure 0.45 mm deflection, calculating combined stiffness 2222 N/m
107. Calculate resonant frequency: f = (1/2π)√(k/m) = (1/2π)√(2222/0.00037) = 163 Hz with 0.37 g moving mass
108. Test suspension symmetry: apply force at 12 radial positions, verify stiffness variation <4% indicating symmetric support
109. Measure electrical resistance: verify no change from individual coil value, confirming no conductor damage during assembly
110. Inspect spring attachment: examine under 15× magnification for complete adhesive coverage, no voids at bond interface

## Magnet and Housing Integration (Steps 111-125)

111. Apply adhesive to housing inner ledge: dispense 0.15 ml two-part epoxy in continuous bead at 2.5 mm height
112. Insert magnet assembly into housing: align magnetic axis with housing centerline, rotate to clock flex cable exit slot
113. Press magnet assembly to housing ledge: apply 20 N axial force using arbor press, seating against adhesive
114. Remove excess adhesive squeeze-out using lint-free swab dampened with acetone
115. Cure epoxy at 65°C for 60 minutes in convection oven, developing >20 MPa shear strength
116. Measure air gap between magnet outer diameter and housing: verify 0.25 ± 0.02 mm radial clearance for coil travel
117. Test magnet retention: apply 50 N pull force to magnet, verify no movement or bond failure
118. Insert coil-spring assembly into housing: thread flex cable through exit slot, lower assembly until lower spring contacts housing ledge
119. Align spring mounting holes with housing rivet holes: rotate assembly for proper orientation within ±5°
120. Apply adhesive to lower spring contact points: four 0.5 mm diameter dots at outer radius
121. Cure lower spring adhesive for 15 minutes, bonding spring to housing ledge
122. Measure coil-to-magnet centering: verify coil centered in air gap within 0.03 mm using optical measurement
123. Apply adhesive to upper spring contact points at housing top edge
124. Cure upper spring adhesive, completing mechanical assembly with springs under 0.15 mm preload compression
125. Flex test assembly: manually deflect coil ±0.3 mm, verify smooth motion with no binding or scraping

## Stroke Calibration (Steps 126-140)

126. Mount actuator in calibration fixture with laser displacement sensor positioned 5 mm above coil center
127. Connect flex cable to drive electronics: bipolar current source with ±12 A range, 100 kHz bandwidth
128. Zero laser sensor: establish reference position with no coil current, resolution 0.1 μm
129. Apply step current sequence: -10 A to +10 A in 1 A increments, measure displacement at each level
130. Record displacement vs. current data: typical results show 0.18 mm displacement per ampere drive current
131. Calculate electromagnetic force constant: 0.18 N/A based on displacement measurements and known spring stiffness 2222 N/m
132. Verify stroke linearity: fit displacement data to linear model, confirm R² >0.998 over ±8 A range
133. Measure maximum stroke: apply ±10 A current, record peak-to-peak displacement 3.6 mm exceeding 0.8 mm specification
134. Test stroke symmetry: verify positive and negative displacements equal within 3% at all current levels
135. Apply sinusoidal drive current: 5 A amplitude at 10 Hz, measure displacement amplitude 0.90 mm
136. Increase frequency to 165 Hz (resonance): measure displacement amplitude increases to 3.2 mm at same 5 A drive current
137. Sweep frequency from 50 to 300 Hz: map frequency response, identify resonant peak at 163 Hz with Q factor 22
138. Measure phase relationship: verify displacement lags current by 90° at resonance, indicating primarily inertial loading
139. Test stroke repeatability: apply 100 cycles of ±5 A current, measure displacement standard deviation 0.8 μm
140. Store calibration data in actuator memory: write force constant, resonant frequency, and DC resistance to on-board EEPROM via flex cable

## Force Output Measurement (Steps 141-155)

141. Mount actuator vertically in force measurement fixture with coil axis aligned to 6-axis load cell
142. Preload load cell with 0.5 N compression to maintain contact during bidirectional force measurement
143. Connect actuator to precision current source: four-wire connection eliminates cable resistance effects
144. Apply DC current sweep: -10 A to +10 A in 0.5 A steps, record force output at each level
145. Measure force constant: 0.178 N/A from linear regression of force vs. current data, matching design target
146. Test maximum force output: apply 10 A current, measure peak force 1.78 N in compression and 1.82 N in tension
147. Verify force linearity: calculate linearity error <1.5% over ±8 A range, meeting ±2% specification
148. Measure force ripple: apply constant 5 A DC current, record force variations <0.015 N RMS from coil resistance heating
149. Test dynamic force response: apply 1-10 kHz current pulses, verify force bandwidth >5 kHz limited by mechanical compliance
150. Measure force rise time: apply 10 A current step, record 1.8 ms time to reach 90% of final force
151. Calculate slew rate: 1000 N/s maximum force rate of change limited by electromagnetic time constant and mechanical inertia
152. Test force vs. displacement relationship: measure force output at -0.3, 0, +0.3 mm positions, verify <2% variation
153. Characterize force-current-displacement map: measure force at 25 operating points spanning current and position ranges
154. Test thermal effects on force: run continuous 5 A current for 10 minutes, measure 3.5% force reduction from coil heating
155. Validate force output repeatability: apply 1000 cycles of ±5 A current, measure force standard deviation 0.012 N

## Frequency Response Testing (Steps 156-170)

156. Mount actuator in vibration isolation fixture to eliminate external mechanical coupling
157. Attach laser vibrometer focused on coil center for non-contact velocity measurement
158. Configure signal analyzer for frequency response measurement: 20 Hz to 2 kHz sweep, 1 Hz resolution
159. Apply swept sine excitation: constant 1 A current amplitude, logarithmic frequency sweep over 60 seconds
160. Measure velocity frequency response: record amplitude and phase at each frequency point
161. Identify first resonance peak: 163 Hz with 27 dB amplitude gain above low-frequency response
162. Calculate mechanical quality factor: Q = 22 from resonance peak bandwidth of 7.4 Hz at -3 dB points
163. Measure phase response: verify -90° phase shift at resonance, -180° phase above resonance
164. Test second resonance mode: identify spring torsional mode at 890 Hz with 12 dB amplitude gain
165. Verify anti-resonance dip: measure 8 dB attenuation at 245 Hz from coil mass vs. spring mass interaction
166. Apply constant velocity excitation: sweep frequency while adjusting current amplitude to maintain constant 10 mm/s velocity
167. Measure impedance frequency response: calculate electrical impedance from voltage/current ratio across frequency range
168. Identify electrical resonance: observe impedance peak at 165 Hz from motional EMF adding to coil inductance
169. Test frequency response repeatability: repeat measurements on 5 units, verify resonant frequency variation <2 Hz
170. Store frequency response data: save Bode plots and transfer function coefficients for actuator performance database

## Resonance Characterization (Steps 171-185)

171. Set up laser Doppler vibrometer with 0.02 μm/s velocity resolution for precise resonance measurement
172. Apply 165 Hz sinusoidal current at 0.5 A amplitude, incrementing frequency in 0.1 Hz steps near resonance
173. Measure peak velocity response: 220 mm/s at 163.2 Hz with 0.5 A drive current
174. Calculate velocity gain at resonance: 22× amplification compared to low-frequency response
175. Measure resonance bandwidth: record frequencies at 70.7% of peak response (±3 dB points), calculate 7.4 Hz bandwidth
176. Determine damping ratio: ζ = 1/(2Q) = 0.023 from quality factor Q = 22, indicating very light damping
177. Test resonance dependence on drive level: measure resonant frequency from 0.1 to 10 A drive current
178. Observe amplitude-dependent softening: resonant frequency decreases 1.8 Hz from 0.1 to 10 A due to spring nonlinearity
179. Measure displacement at resonance: 2.1 mm peak-to-peak at 5 A drive, exceeding linear spring range
180. Apply ring-down test: drive at resonance for 10 cycles, then remove current and measure decay time constant
181. Calculate mechanical time constant: 18 ms exponential decay corresponding to Q = 22
182. Test temperature effects on resonance: measure resonant frequency from 20°C to 60°C operating temperature range
183. Observe 0.9 Hz resonance decrease with temperature from spring stiffness temperature coefficient
184. Characterize harmonics: measure displacement content at 2×, 3×, and 4× fundamental frequency during resonant excitation
185. Verify total harmonic distortion <8% at maximum displacement, indicating acceptable spring linearity

## Haptic Waveform Programming (Steps 186-195)

186. Connect actuator to haptic driver IC with 10-bit current DAC resolution and 8 kHz PWM frequency
187. Upload click waveform: 2 ms half-sine pulse at 7 A peak current, generating 1.3 N peak force
188. Test click perception: apply waveform at 165 Hz resonant frequency, verify tactile response with human subject panel
189. Program tap waveform: asymmetric pulse with 1.5 ms attack, 0.8 ms decay, 6 A peak generating sharp tactile edge
190. Upload buzz waveform: amplitude-modulated 165 Hz carrier at 30 Hz modulation rate for sustained vibration feedback
191. Program texture waveform: pseudorandom sequence of 0.5-2 ms pulses at 100-300 Hz for simulated surface texture
192. Test waveform timing accuracy: verify pulse widths within ±50 μs of programmed values using oscilloscope
193. Measure waveform force accuracy: record peak forces within 5% of target values across all programmed waveforms
194. Characterize waveform power consumption: click 14 mJ, tap 9 mJ, buzz 85 mW continuous, texture 45 mW average
195. Validate haptic waveform library: confirm 16 distinct tactile sensations perceptible by 95% of test subjects, package actuator for shipment to customer facilities with calibration certificate documenting force constant 0.178 N/A, resonant frequency 163 Hz, DC resistance 8.5 ohms, and quality factor 22.
