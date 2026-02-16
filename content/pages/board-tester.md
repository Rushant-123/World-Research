---
title: "PCB Board Tester"
company: "Teradyne"
country: "United States"
selling_price: 8.0
inputs:
  - name: "Test Fixture"
    cost: 2.5
    link: "test-fixture"
  - name: "Flying Probe System"
    cost: 2.0
    link: "flying-probe"
  - name: "Digital Multimeter"
    cost: 1.0
    link: "digital-multimeter"
  - name: "Signal Generator"
    cost: 1.2
    link: "signal-generator"
  - name: "Test Software"
    cost: 0.8
    link: "test-software"
value_created: 0.5
---

# PCB Board Tester Manufacturing Process

## Stage 1: Pre-Test Setup and Fixture Design (Steps 1-25)

1. Review PCB design files including Gerber data, BOM, and CAD layouts
2. Analyze net list to identify all electrical connections requiring testing
3. Identify critical test points on both sides of the logic board
4. Map component locations and pin-out configurations for test access
5. Determine test coverage requirements based on component density
6. Select appropriate test fixture type (bed-of-nails vs flying probe)
7. Design custom test fixture base plate with precise mechanical tolerances
8. Calculate probe spacing and positioning for optimal contact points
9. Select spring-loaded test probes with appropriate travel distance
10. Design probe receptacles and mounting hardware for fixture
11. Create fixture wiring diagram connecting probes to test interface
12. Machine fixture base plate from FR4 or phenolic material
13. Drill precision holes for probe mounting at exact coordinates
14. Install probe receptacles into machined fixture base
15. Insert spring-loaded probes with gold-plated contacts
16. Wire probes to fixture interface connector using controlled impedance cable
17. Install board alignment pins and registration features
18. Add vacuum hold-down system for board stabilization during test
19. Integrate pneumatic actuator for fixture closure mechanism
20. Install safety interlocks and fixture closed detection sensors
21. Connect fixture to ICT test head interface cables
22. Program fixture pin mapping into test system software
23. Perform fixture continuity check on all probe connections
24. Calibrate probe contact resistance and verify specifications
25. Create fixture documentation including probe map and maintenance schedule

## Stage 2: In-Circuit Test System Configuration (Steps 26-50)

26. Power on Teradyne ICT test system and initialize hardware
27. Load test executive software and system diagnostics
28. Verify test head power supplies output correct voltages
29. Calibrate digital multimeter measurement circuits
30. Calibrate signal generator output levels and frequencies
31. Test analog measurement channels for accuracy
32. Configure digital I/O channels for boundary scan interface
33. Set up guarding circuits to isolate powered vs unpowered nets
34. Program current limiting thresholds for component protection
35. Configure parametric measurement units (PMU) for precision testing
36. Install board-specific test program from development database
37. Load component library with measurement specifications
38. Import net list and component placement data
39. Verify test program matches current board revision
40. Configure test sequence and execution order
41. Set pass/fail limits for each test measurement
42. Program test abort conditions for catastrophic failures
43. Configure data logging and statistical process control
44. Set up board serial number tracking and traceability
45. Integrate with manufacturing execution system (MES)
46. Configure automatic result upload to quality database
47. Set up failure diagnosis and repair guidance system
48. Program re-test and board disposition logic
49. Verify test program syntax and compile for execution
50. Run test program validation with known-good golden board

## Stage 3: Continuity and Opens Testing (Steps 51-65)

51. Load Mac logic board onto test fixture alignment pins
52. Activate vacuum system to secure board against fixture
53. Close pneumatic actuator to bring probes into contact
54. Verify all probes make contact with specified resistance
55. Initiate test sequence with powered-off continuity tests
56. Apply low voltage test signal to first net connection
57. Measure resistance between all nodes on same net
58. Verify all connections show less than 5 ohm resistance
59. Test for open circuits indicating missing or lifted traces
60. Check solder joint integrity on BGA and QFN components
61. Test via connections between board layers
62. Verify ground plane continuity across entire board
63. Test power plane segmentation and isolation
64. Check for cold solder joints on surface mount components
65. Log any opens or high resistance connections for repair

## Stage 4: Shorts and Isolation Testing (Steps 66-80)

66. Initiate isolation testing between independent nets
67. Apply test voltage to first net while monitoring adjacent nets
68. Measure leakage current to verify isolation exceeds 10 megohm
69. Test for shorts between power and ground planes
70. Check for solder bridges between fine-pitch component pins
71. Test isolation between differential signal pairs
72. Verify no shorts exist between adjacent BGA balls
73. Test isolation on high-speed serial interfaces
74. Check for contamination or flux residue causing leakage
75. Test capacitive coupling between high-frequency traces
76. Verify proper isolation on impedance controlled traces
77. Test shielding effectiveness on sensitive analog circuits
78. Check for shorts caused by manufacturing debris
79. Verify isolation between board layers at via locations
80. Document all short circuit failures with net names and locations

## Stage 5: Passive Component Testing (Steps 81-100)

81. Begin resistor measurement sequence with DMM circuits
82. Apply four-wire Kelvin measurement to precision resistors
83. Measure resistance value and compare to specified tolerance
84. Test power resistors for proper heat dissipation ratings
85. Verify termination resistors on high-speed interfaces
86. Check pull-up and pull-down resistors on logic signals
87. Begin capacitor testing with AC impedance measurement
88. Apply test frequency and measure capacitive reactance
89. Calculate capacitance value from impedance measurement
90. Verify capacitor ESR (equivalent series resistance) within limits
91. Test decoupling capacitors on power distribution network
92. Check bulk capacitors for proper capacitance and polarity
93. Test ceramic capacitors for voltage coefficient effects
94. Verify tantalum capacitors show correct polarity marking
95. Begin inductor testing with impedance analysis
96. Measure inductor DC resistance and AC impedance
97. Calculate inductance value from frequency response
98. Test power inductors for saturation current rating
99. Verify common mode chokes on USB and Ethernet interfaces
100. Check ferrite beads for proper high-frequency impedance

## Stage 6: Diode and Transistor Testing (Steps 101-120)

101. Initiate diode forward voltage drop measurement
102. Apply forward bias current and measure voltage across diode
103. Verify forward voltage matches component specification
104. Test reverse bias leakage current below maximum rating
105. Check Schottky diodes for low forward voltage drop
106. Verify ESD protection diodes on I/O interfaces
107. Test TVS diodes for proper clamping voltage
108. Check LED polarity and forward voltage characteristics
109. Begin bipolar transistor testing with curve tracer
110. Measure transistor base-emitter forward voltage
111. Test collector-emitter saturation voltage
112. Verify transistor current gain (hFE) within specification
113. Check for transistor leakage currents in cutoff mode
114. Begin MOSFET testing with gate threshold measurement
115. Apply gate voltage and measure threshold voltage point
116. Test MOSFET on-resistance at specified gate voltage
117. Verify drain-source leakage current in off state
118. Check gate oxide integrity with high voltage stress test
119. Test body diode forward voltage and reverse recovery
120. Verify all discrete semiconductors match BOM specifications

## Stage 7: Integrated Circuit Power and Ground Testing (Steps 121-135)

121. Begin powered testing with current-limited power supply
122. Apply 3.3V rail with 100mA current limit for initial test
123. Monitor total board current consumption during power-up
124. Verify current draw within expected range for unprogrammed state
125. Check for excessive current indicating short circuits
126. Measure voltage at each IC power pin with PMU channels
127. Verify voltage regulators output correct voltages
128. Test voltage regulator load regulation under varying current
129. Check power sequencing timing for multi-rail designs
130. Verify power-on reset circuits assert correctly
131. Test brown-out detection circuits at threshold voltage
132. Measure power supply ripple and noise on critical rails
133. Check decoupling capacitor effectiveness at IC power pins
134. Verify ground pin connectivity on all integrated circuits
135. Test power distribution network impedance at high frequency

## Stage 8: Digital Logic and Boundary Scan Testing (Steps 136-155)

136. Initialize JTAG boundary scan interface circuits
137. Connect to test access port (TAP) through fixture probes
138. Scan JTAG chain to detect all boundary scan devices
139. Verify JTAG ID codes match expected device types
140. Read boundary scan description language (BSDL) files
141. Load test vectors for boundary scan testing
142. Apply digital test patterns through JTAG interface
143. Test interconnections between JTAG-capable devices
144. Verify FPGA or CPLD configuration interface integrity
145. Test DDR memory interface signals through boundary scan
146. Check PCI Express differential pair connections
147. Verify USB signal routing and termination
148. Test SATA interface connectivity to storage controller
149. Check Ethernet PHY connections to MAC controller
150. Verify GPIO signals route correctly to connectors
151. Test crystal oscillator connections to processor
152. Check clock distribution network integrity
153. Verify reset signal routing to all ICs
154. Test interrupt signal connections to processor
155. Document all boundary scan test coverage percentage

## Stage 9: Memory Testing and Programming (Steps 156-170)

156. Initialize flash memory programming interface
157. Verify flash memory device ID and manufacturer code
158. Erase flash memory blocks to prepare for programming
159. Program bootloader firmware into flash memory
160. Verify programmed data with readback comparison
161. Test flash memory access timing at maximum frequency
162. Verify flash memory addressing covers full capacity
163. Test NAND flash bad block management functionality
164. Program MAC address into designated flash location
165. Program board serial number and manufacturing data
166. Test EEPROM data retention with write-read cycles
167. Verify configuration data stored in EEPROM
168. Program calibration data for analog circuits
169. Test battery-backed SRAM data retention
170. Verify memory integrity with checksum calculation

## Stage 10: Flying Probe Supplemental Testing (Steps 171-185)

171. Transfer board to flying probe test system for hard-to-reach nodes
172. Load flying probe test program with probe movement coordinates
173. Initialize probe positioning system and home all axes
174. Move probes to first test coordinate on board surface
175. Lower probes to make contact with test pads
176. Perform two-wire resistance measurement at probe tips
177. Test components on board reverse side inaccessible to fixture
178. Verify BGA solder balls beneath package body
179. Test mid-chip connections not routed to test points
180. Check component values on densely populated board areas
181. Test shielded components under metal cans or covers
182. Verify connections on board edge connectors
183. Test fine-pitch components below fixture probe density
184. Check rework and repair areas for proper connectivity
185. Document flying probe test coverage and any failures found

## Stage 11: Functional Testing and Final Verification (Steps 186-195)

186. Transfer board to functional test station with interface adapter
187. Apply full operating power to all voltage rails
188. Monitor power consumption and thermal profile during boot
189. Verify processor executes boot sequence and POST diagnostics
190. Test all external interfaces with loopback or emulation
191. Run comprehensive functional diagnostic software suite
192. Verify all LEDs illuminate with correct colors and patterns
193. Test thermal sensors report accurate temperature readings
194. Program final production firmware and verify version
195. Generate test report with pass/fail status, serial number, and upload to MES database

## Test Coverage and Quality Metrics

The PCB board tester provides comprehensive verification of Mac logic board assemblies through multiple test methodologies. In-circuit testing validates individual component placement and values with coverage exceeding 95% of testable nodes. Boundary scan testing verifies digital interconnections between complex ICs without requiring physical test access. Flying probe systems supplement fixture-based testing for high-density areas and components on both board sides. Functional testing confirms the assembled board operates correctly as an integrated system.

Test data collection enables statistical process control and early detection of manufacturing defects. Boards failing ICT proceed to diagnostic analysis with guided repair instructions. The combination of structural testing (ICT) and functional testing ensures Mac logic boards meet Apple's stringent quality requirements before integration into final products.
