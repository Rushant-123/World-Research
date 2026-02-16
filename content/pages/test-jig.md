---
title: "Production Test Jig"
company: "Agilent Technologies"
country: "United States"
selling_price: 4.0
inputs:
  - name: "Interface PCB"
    cost: 0.5
    link: "printed-circuit-board"
  - name: "Test Probes"
    cost: 0.4
    link: "phosphor-bronze"
  - name: "Fixture Plate"
    cost: 0.3
    link: "cnc-machine"
  - name: "Pneumatics"
    cost: 0.3
    link: "compressed-air"
  - name: "Wiring"
    cost: 0.2
    link: "copper-wire"
  - name: "Assembly"
    cost: 0.3
    link: "machinist-labor"
value_created: 2.0
---

## Steps

1. Review device under test (DUT) PCB design files including Gerber layers, netlist, and component placement drawings
2. Obtain mechanical CAD models of DUT showing exact board dimensions, component heights, and mounting hole locations
3. Analyze DUT electrical test specification defining all required measurements, functional tests, and pass/fail criteria
4. Identify all test points on DUT including dedicated pads, component pins, vias, and connector contacts requiring access
5. Calculate total probe count needed for test coverage typically ranging from 50 to 500 points depending on DUT complexity
6. Determine test access strategy using top-side probing, bottom-side probing, or dual-sided access based on component density
7. Select test probe type from spring-loaded pogo pins, serrated contact probes, or crown probes based on pad geometry
8. Specify probe specifications including barrel diameter (0.68mm to 2.36mm), travel distance (2mm to 6mm), and contact force
9. Choose contact force per probe typically 50g to 150g balancing reliable contact against pad damage concerns
10. Design bed-of-nails probe array layout positioning each probe to align with corresponding DUT test point within 0.05mm tolerance
11. Create probe retention plate with precision-drilled holes sized to secure probe barrels with press-fit or set-screw retention
12. Material selection for retention plate using phenolic laminate, acrylic, or FR4 providing electrical insulation and mechanical stability
13. Machine retention plate on CNC mill with hole positional accuracy of ±0.025mm to ensure probe alignment
14. Install probe barrels into retention plate verifying each probe seats fully and extends correct distance above surface
15. Apply thread-locking compound to set screws if used to prevent probe movement during repeated test cycles
16. Design interface PCB mounting below probe array to electrically connect all probes to test system instrumentation
17. Layout interface PCB with one pad per probe positioned to align with probe tips when PCB is secured beneath retention plate
18. Route interface PCB traces from probe pads to edge connector or header connecting to automatic test equipment (ATE)
19. Implement controlled impedance routing for high-speed signals maintaining 50Ω or 100Ω differential as required by DUT
20. Add ground plane coverage on interface PCB providing low-impedance return paths and electromagnetic shielding
21. Specify interface PCB stackup typically 4 to 8 layers accommodating dense routing while maintaining signal integrity
22. Include test point vias on interface PCB allowing verification of probe connections during jig qualification
23. Design fixture plate assembly providing mechanical structure to support DUT, probe array, and pneumatic actuation
24. Machine fixture base plate from aluminum alloy (6061-T6) sized typically 300mm x 400mm for standard PCB assemblies
25. Create precision pocket in base plate matching DUT outline providing repeatable board placement with ±0.1mm accuracy
26. Install locating pins in base plate aligning with DUT mounting holes or board edges ensuring consistent orientation
27. Machine actuation plate moving vertically to press DUT against probe array with controlled force application
28. Design linear guide system using precision ball-bearing slides providing smooth vertical motion with minimal side loading
29. Specify guide rail straightness tolerance of 0.01mm per 100mm ensuring actuation plate remains parallel to base
30. Install pneumatic cylinder driving actuation plate typically sized for 200N to 1000N total clamping force
31. Select pneumatic cylinder bore diameter based on required force and available shop air pressure (typically 5-7 bar)
32. Calculate total contact force as probe count multiplied by individual probe force plus DUT clamping requirement
33. Install pressure regulator controlling air supply to cylinder allowing adjustment of clamping force during setup
34. Add pressure gauge monitoring regulated air pressure providing visual confirmation of proper pneumatic settings
35. Implement dual-action cylinder control with separate extend and retract air lines for positive control both directions
36. Install flow control valves adjusting actuation speed preventing sudden impacts that could damage DUT or probes
37. Design operator interface panel positioned at front of fixture providing all controls within easy reach
38. Install momentary pushbutton initiating test cycle when operator presses after loading DUT into fixture
39. Add emergency stop button allowing immediate pneumatic release and test abort in case of problems
40. Include indicator lights showing fixture status: ready (green), testing (yellow), pass (green), fail (red)
41. Design DUT support surface on actuation plate using compliant material preventing component damage during clamping
42. Select support pad material from silicone rubber, neoprene foam, or polyurethane providing 1-2mm compliance
43. Machine recesses in support surface accommodating tall components on DUT bottom side (capacitors, connectors, shields)
44. Map all bottom-side component heights from DUT design files ensuring adequate clearance in support pad design
45. Create support pad pattern supporting PCB perimeter and between components while avoiding sensitive areas
46. Bond support pads to actuation plate using pressure-sensitive adhesive allowing replacement when worn
47. Design DUT alignment features guiding board into correct position as actuation plate descends
48. Install tapered guide pins or funnel features providing 5-10mm capture range compensating for operator placement variation
49. Add optical sensors detecting DUT presence before allowing test cycle to start preventing empty fixture actuation
50. Implement sensor logic requiring both DUT detection and operator button press before initiating test sequence
51. Design probe tip geometry matching DUT pad surface conditions (flat pads, HASL finish, ENIG, OSP coating)
52. Specify serrated crown probes for flat pads providing gas-tight contact breaking through oxidation layers
53. Select radius-tip probes for curved surfaces like component leads or connector pins minimizing damage
54. Choose probe tip radius typically 0.25mm to 0.76mm balancing contact area against pad stress concentration
55. Calculate maximum pad stress under probe contact verifying pressure remains below 200 MPa preventing permanent deformation
56. Design overtravel capability allowing probes to compress 1-2mm beyond initial contact accommodating DUT thickness variation
57. Specify probe spring constant (typically 5-20 N/mm) providing adequate force throughout travel range
58. Select probe materials including brass barrel, beryllium copper spring, and hardened steel tip for durability
59. Specify probe plating using gold (0.76-2.5µm over nickel) providing low contact resistance and corrosion protection
60. Calculate expected probe life typically 100,000 to 1,000,000 actuations depending on force and tip design
61. Design probe maintenance schedule based on manufacturer ratings and observed contact resistance degradation
62. Implement probe replacement procedure allowing individual probe changes without complete fixture disassembly
63. Create probe mapping document identifying each probe position, net name, and function in test program
64. Design power delivery architecture routing DC power from ATE to DUT through dedicated high-current probes
65. Specify power probe sizing for current capacity typically 3A to 10A per probe for main supply rails
66. Implement Kelvin (4-wire) sensing for power supplies measuring voltage at DUT using separate sense probes
67. Position sense probes immediately adjacent to power delivery probes minimizing voltage drop errors
68. Calculate maximum acceptable resistance in power delivery path typically <50mΩ including probes, traces, and connections
69. Design ground return system using multiple probes connected to common ground plane distributing return current
70. Specify minimum number of ground probes as 20% of total probe count ensuring adequate return path capacity
71. Distribute ground probes across DUT area providing low-inductance returns near high-speed signal areas
72. Design signal routing on interface PCB separating sensitive analog, high-speed digital, and power distribution
73. Implement guard traces around sensitive analog nodes carrying guard voltage to reduce parasitic coupling
74. Add series termination resistors on interface PCB for signals requiring impedance matching (typically 22-50Ω)
75. Position termination components close to probe connection points minimizing stub length effects
76. Design DC blocking capacitors in signal paths where ATE output offset differs from DUT requirements
77. Implement relay matrix on interface PCB allowing flexible connection of ATE resources to DUT nodes
78. Select reed relays for signal switching providing low contact resistance (<0.1Ω) and fast switching (<1ms)
79. Specify relay contact ratings exceeding maximum signal levels with 2x safety margin (voltage and current)
80. Design relay control circuits driven by ATE digital I/O or dedicated relay driver modules
81. Implement relay drive timing ensuring proper sequencing of signal connections before applying power
82. Add snubber circuits across relay coils suppressing inductive voltage spikes during turn-off
83. Design boundary scan access connecting to JTAG/IEEE 1149.1 test points on DUT if available
84. Route TAP signals (TCK, TMS, TDI, TDO, TRST) through dedicated probes to DUT boundary scan interface
85. Add series resistors (22-33Ω) in JTAG clock and data lines preventing signal integrity issues
86. Implement pull-up/pull-down resistors on JTAG signals matching DUT requirements (typically 4.7kΩ to 10kΩ)
87. Design scan chain verification test confirming JTAG connectivity before attempting boundary scan operations
88. Program boundary scan test patterns checking internal connections not accessible via functional test points
89. Design functional test point access for critical signals including clocks, resets, enables, and status lines
90. Probe clock signals using AC-coupled paths preserving signal integrity while allowing ATE frequency measurement
91. Install 100pF to 1nF coupling capacitors on clock probe paths blocking DC while passing AC content
92. Add 10MΩ resistors across coupling capacitors providing DC path preventing capacitor voltage drift
93. Design reset signal probing with ability to both monitor reset state and drive controlled reset sequences
94. Implement bi-directional buffering on reset lines protecting DUT from ATE drive conflicts
95. Probe enable and control signals allowing ATE to configure DUT operating modes during test sequence
96. Design status signal monitoring capturing DUT responses to applied stimuli verifying correct operation
97. Implement digital input buffering protecting ATE inputs from DUT overvoltage or ESD events
98. Add voltage clamp circuits limiting signal excursions to ATE input range (typically 0-5V or 0-3.3V)
99. Design RF signal routing for wireless DUT testing maintaining controlled impedance throughout path
100. Implement SMA or MCX connectors on fixture edge connecting RF probes to spectrum analyzer or signal generator
101. Specify RF coaxial cable assemblies with stable phase characteristics and low loss (<1dB) at operating frequency
102. Design RF probe interfaces using spring-loaded coaxial contacts maintaining 50Ω impedance through contact
103. Position RF probes to contact antenna feed points, RF module test pads, or dedicated RF connectors
104. Implement RF shielding enclosure around DUT during wireless testing preventing interference and ensuring repeatability
105. Design shield enclosure from copper-clad steel or aluminum providing >60dB attenuation at operating frequencies
106. Create hinged or removable shield cover allowing DUT loading while providing complete enclosure during test
107. Install conductive gasket material at shield seams ensuring continuous electrical contact around perimeter
108. Connect shield enclosure to fixture ground plane using multiple low-inductance bonds
109. Position RF absorber material inside shield enclosure reducing standing waves and reflection effects
110. Design antenna coupling fixtures inside shield providing consistent RF path to DUT antenna
111. Implement calibration procedure characterizing RF path loss allowing accurate power level compensation
112. Design thermal management system for DUT testing requiring elevated or controlled temperature
113. Install resistive heater elements in actuation plate raising DUT temperature to specified test conditions
114. Embed thermocouples in support surface monitoring DUT temperature during thermal testing
115. Implement PID temperature control maintaining setpoint within ±2°C during test execution
116. Add thermal insulation around heated zones preventing heat loss and protecting operator from burns
117. Design forced air cooling system for high-power DUT testing preventing thermal shutdown during test
118. Install cooling fans with ducting directing airflow across DUT hot spots (processors, power converters)
119. Monitor DUT power dissipation calculating expected temperature rise based on thermal resistance
120. Implement thermal soak delay allowing DUT to reach steady-state temperature before measurements begin
121. Design safety interlocks preventing test start if DUT temperature exceeds maximum ratings
122. Create thermal calibration procedure verifying temperature sensor accuracy across operating range
123. Design fixture wiring harness connecting interface PCB to edge connector interfacing with ATE
124. Select connector type matching ATE receiver cards (typically high-density D-sub, SCSI-style, or custom)
125. Specify wire gauge for harness conductors based on maximum current carrying requirements (typically 22-26 AWG)
126. Implement color-coded or numbered wire identification allowing troubleshooting and maintenance
127. Bundle harness wires in protective sleeve preventing chafing and mechanical damage
128. Secure harness routing using cable ties and mounting clips preventing wire movement during operation
129. Design strain relief at connector ends preventing wire fatigue from repeated flexing
130. Create harness continuity test procedure verifying all connections before fixture qualification
131. Document harness pinout in fixture manual showing connector pin assignments and corresponding net names
132. Design fixture self-test capability verifying jig integrity before attempting DUT testing
133. Implement short/open test checking interface PCB traces and probe connections for faults
134. Create known-good DUT board or simulator board for fixture verification during setup
135. Define fixture verification procedure testing all probes, relays, power delivery, and signal paths
136. Establish probe contact resistance specification (typically <1Ω) verified during fixture qualification
137. Measure each probe resistance using 4-wire technique eliminating test lead effects
138. Document probe resistance values creating baseline for future maintenance checks
139. Design probe cleaning procedure restoring low contact resistance when probes become contaminated
140. Implement automated probe cleaning using abrasive pad or wire brush activated periodically
141. Specify manual probe cleaning interval based on usage patterns (typically every 1000-5000 cycles)
142. Create probe replacement criteria defining when contact resistance exceeds acceptable limits
143. Design operator interface including touchscreen or PC display showing test progress and results
144. Implement test sequence visualization highlighting current test step and elapsed time
145. Display measured values in real-time allowing operator to monitor test execution
146. Show pass/fail results for each test step with failing measurements highlighted for diagnosis
147. Generate printed or electronic test report documenting DUT serial number, test results, and timestamp
148. Implement barcode or RFID reader capturing DUT serial number automatically at test start
149. Store test results in database allowing statistical analysis and failure mode tracking
150. Design data export function providing test data in standard formats (CSV, XML, JSON)
151. Create operator training materials including fixture operation, DUT loading, and safety procedures
152. Document fixture setup procedures for maintenance and calibration activities
153. Define fixture calibration schedule ensuring measurement accuracy over time (typically 3-12 months)
154. Implement calibration procedure verifying measurement paths using precision reference standards
155. Create troubleshooting guide for common fixture problems including probe failures and pneumatic issues
156. Design spare parts kit including replacement probes, support pads, and consumable components
157. Document fixture revision history tracking modifications and improvements over production life
158. Design power sequencing controller managing DUT power-up and power-down sequences
159. Implement programmable delay between supply rail activation preventing inrush current problems
160. Monitor supply voltage levels during sequencing verifying proper ramp rates and final voltages
161. Add current limiting protection preventing overcurrent damage during DUT shorts or failures
162. Design emergency power cutoff activated by E-stop button or detected fault conditions
163. Implement supply discharge circuit safely removing stored energy when test completes
164. Create power sequence verification procedure ensuring correct timing and voltage levels
165. Design fixture mechanical safety features preventing operator injury during operation
166. Install physical guards preventing hand access to actuation area during pneumatic operation
167. Implement two-hand control requiring both hands on buttons preventing hand-in-fixture situations
168. Add light curtain or proximity sensors detecting operator presence in hazard zone
169. Design slow actuation speed (typically 25-50mm/s) allowing operator reaction time if needed
170. Install over-travel limit switches preventing excessive force application
171. Implement force monitoring with automatic shutdown if clamping force exceeds setpoint by 20%
172. Create lockout/tagout procedure for fixture maintenance ensuring safe equipment state
173. Design acoustic enclosure reducing noise from pneumatic operation in production environment
174. Implement vibration isolation mounting fixture on rubber isolators preventing test signal noise
175. Add EMI filtering on power input lines preventing conducted emissions from affecting nearby equipment
176. Design fixture to meet applicable safety standards (CE, UL, local regulations)
177. Implement ESD protection throughout fixture protecting both DUT and ATE from static discharge
178. Ground fixture frame to facility earth ensuring safe discharge path for fault currents
179. Create fixture qualification plan verifying performance before production release
180. Define acceptance criteria including probe count, contact resistance, measurement accuracy, and throughput
181. Perform gauge R&R study characterizing fixture measurement repeatability and reproducibility
182. Test fixture with sample DUT population verifying adequate test coverage and yield correlation
183. Validate fixture against known-good and known-bad DUT samples confirming pass/fail discrimination
184. Measure fixture throughput documenting cycle time from DUT load through test completion
185. Optimize test sequence reducing execution time while maintaining complete test coverage
186. Implement parallel test execution where possible testing multiple DUT circuits simultaneously
187. Design fixture maintenance schedule based on usage patterns and observed wear rates
188. Create preventive maintenance checklist including probe inspection, pneumatic checks, and calibration
189. Establish fixture utilization tracking monitoring cycles performed and maintenance events
190. Design fixture upgrade path allowing incorporation of new test requirements without complete rebuild
191. Document fixture specifications including mechanical dimensions, electrical characteristics, and pneumatic requirements
192. Create fixture interface control document defining connections to ATE and facility resources
193. Specify facility requirements including compressed air pressure, electrical power, and environmental conditions
194. Design fixture packaging for storage or shipping protecting precision components during handling
195. Generate final fixture acceptance package including documentation, qualification data, and maintenance procedures
