---
title: "Server Motherboard"
company: "Supermicro"
country: "United States"
selling_price: 800.00
inputs:
  - name: "Multilayer PCB"
    cost: 120.00
    link: "multilayer-pcb"
  - name: "MLCC Capacitors"
    cost: 40.00
    link: "mlcc-capacitors"
  - name: "Voltage Regulator"
    cost: 60.00
    link: "voltage-regulator"
  - name: "SMT Equipment"
    cost: 80.00
    link: "smt-equipment"
  - name: "Board Connectors"
    cost: 50.00
    link: "board-connectors"
value_created: 450.00
---

1. Receive 12-layer PCB blanks with ATX-E-ATX dimensions of 305mm x 330mm from PCB fabrication facility
2. Inspect PCB for warpage using coordinate measuring machine with tolerance of 0.5mm maximum deviation
3. Verify copper layer thickness at 2oz (70 micrometers) for power planes and 1oz (35 micrometers) for signal layers
4. Check impedance control on critical traces using time-domain reflectometer, targeting 50 ohms for single-ended and 100 ohms for differential pairs
5. Confirm via quality through X-ray inspection, checking for proper barrel formation and fill on all 8,400+ vias
6. Apply conformal coating to PCB edges to prevent delamination during handling
7. Load PCB into automated optical inspection system to verify pad dimensions and registration marks
8. Position PCB on conveyor belt feeding into solder paste printing station
9. Align laser-cut stainless steel stencil with thickness of 150 micrometers over PCB using fiducial marks
10. Dispense type-3 SAC305 lead-free solder paste onto stencil at controlled room temperature of 22-25 degrees Celsius
11. Execute squeegee stroke at 45-degree angle with pressure of 8-10 kg and speed of 40mm per second
12. Lift stencil vertically at 1mm per second to prevent paste smearing on fine-pitch pads
13. Inspect solder paste deposits using 3D solder paste inspection system, measuring height at 100-140 micrometers
14. Verify paste volume on each pad meets 80-120% of target specification
15. Check for bridging between adjacent pads on 0.5mm pitch BGA footprints
16. Load component reels into high-speed pick-and-place machine with 48 feeder slots
17. Calibrate machine vision system using precision reference targets to achieve placement accuracy of 25 micrometers
18. Place 0402-size resistors for termination networks at rate of 25,000 components per hour
19. Mount 0603-size MLCC capacitors rated at 10 microfarads 16V for power supply decoupling
20. Position 0805-size capacitors rated at 47 microfarads 25V near voltage regulator modules
21. Install surface-mount ceramic capacitors totaling over 800 units across entire board
22. Place 0603-size resistor arrays for pull-up and pull-down networks on memory channels
23. Mount ferrite beads for EMI suppression on power rails, rated at 600 ohms at 100 MHz
24. Install surface-mount inductors rated at 1 microhenry for LC filtering circuits
25. Place tantalum polymer capacitors rated at 220 microfarads for bulk power supply capacitance
26. Position SMD LEDs for power and diagnostic indicators with current-limiting resistors
27. Install small-outline transistors for power sequencing and control circuits
28. Mount voltage supervisor ICs in SOT-23 packages for monitoring multiple power rails
29. Place temperature sensors in SOT-23 packages for thermal management system
30. Install clock generator IC in TSSOP-48 package providing differential clocks up to 200 MHz
31. Position real-time clock module with integrated crystal in 8-pin package
32. Mount baseboard management controller in LQFP-176 package for out-of-band management
33. Install dedicated Ethernet PHY for BMC connectivity in QFN-64 package
34. Place serial EEPROM chips in SOIC-8 packages for MAC address and configuration storage
35. Mount TPM 2.0 security chip in LGA-28 package for hardware-based encryption
36. Position PCH (Platform Controller Hub) in FCBGA-1344 package at center-left of board
37. Apply specialized flux to PCH landing pads before component placement
38. Use precision pick-and-place head to align PCH with tolerance of 15 micrometers on X-Y axes
39. Install voltage regulator controllers in QFN-40 packages for CPU power delivery
40. Mount DrMOS power stage modules combining driver, high-side and low-side MOSFETs in 5x6mm packages
41. Place 16 DrMOS stages per CPU socket for 8-phase power delivery topology
42. Install input bulk capacitors rated at 470 microfarads 25V aluminum polymer type
43. Position output filter capacitors totaling 2000 microfarads per CPU socket
44. Mount current sense resistors rated at 0.5 milliohms 1% tolerance for telemetry
45. Install PWM controllers in QFN-48 packages for phase-shifted multiphase regulation
46. Place memory power management ICs controlling DDR5 voltage rails at 1.1V and 1.8V
47. Mount voltage reference ICs providing 0.6V precision reference for power calibration
48. Install I2C multiplexer chips in TSSOP-24 packages for sensor network expansion
49. Position GPIO expander ICs for additional control signals in TSSOP-28 packages
50. Mount level shifter ICs for voltage translation between 3.3V and 1.8V domains
51. Install PCIe clock buffer ICs providing 16 differential clock pairs in BGA-100 packages
52. Place PCIe redriver ICs in flip-chip BGA packages for signal integrity on long traces
53. Mount active PCIe switches in FCBGA-676 packages for slot bifurcation capability
54. Install SAS/SATA controller chips in BGA-324 packages supporting 12 Gb/s transfer rates
55. Position M.2 connector retiming ICs for NVMe storage connectivity
56. Mount USB 3.2 Gen 2 hub controller in BGA-121 package providing 8 downstream ports
57. Install dedicated LAN controller chips in BGA-196 packages for dual 10 Gigabit Ethernet
58. Place PHY transceivers for BASE-T Ethernet with integrated magnetics
59. Mount aspeed AST2600 BMC processor in FCBGA-720 package for remote management
60. Install dedicated graphics processor in BGA-256 package for BMC video output
61. Position DDR4 memory buffer for BMC in BGA-96 package supporting 16-bit interface
62. Mount 32 GB eMMC flash storage for BMC operating system in BGA-153 package
63. Complete first-pass SMT placement with over 3,200 passive and active components
64. Perform post-placement inspection using automated optical inspection system
65. Check component presence, polarity, and alignment on all placed parts
66. Verify component rotation within 2 degrees of nominal orientation
67. Flag any placement defects for manual correction before reflow
68. Transport board through infrared preheating zone at 150 degrees Celsius for 60 seconds
69. Continue through thermal soak zone at 180 degrees Celsius for 90 seconds
70. Ramp temperature at 2 degrees per second to peak reflow temperature
71. Maintain peak temperature of 245 degrees Celsius for 60 seconds above liquidus
72. Profile reflow curve according to SAC305 alloy requirements with total time of 8 minutes
73. Monitor thermal profile using thermocouples attached to board at 6 locations
74. Cool board gradually at rate not exceeding 3 degrees per second to prevent thermal shock
75. Unload board from reflow oven at temperature below 50 degrees Celsius
76. Allow board to stabilize at room temperature for 15 minutes
77. Perform automated X-ray inspection of all BGA components checking for voids and bridges
78. Verify solder ball collapse and wetting on PCH with 1,344 balls at 0.8mm pitch
79. Inspect BMC processor BGA joints checking void percentage below 25% threshold
80. Examine voltage regulator BGA packages for proper joint formation
81. Prepare board for second-pass component placement of through-hole and large components
82. Apply additional solder paste to pads for memory DIMM slots using precision dispenser
83. Position first CPU socket (LGA-4677) with 4,677 pins at 1.0mm pitch using alignment fixture
84. Secure socket to board with mounting clips and screws torqued to 8 inch-pounds
85. Solder socket pins using selective soldering system with nitrogen atmosphere
86. Apply flux to socket perimeter pins before wave contact
87. Execute soldering at 260 degrees Celsius with dwell time of 3 seconds per pin group
88. Install second CPU socket using identical process with alignment tolerance of 50 micrometers
89. Mount 8 DDR5 DIMM slots per CPU socket in daisy-chain topology
90. Solder DIMM slot pins using selective wave soldering with lead-free alloy
91. Verify continuity on all 288 pins per DIMM slot using flying probe tester
92. Install 7 PCIe x16 slots with open-ended design supporting various card lengths
93. Solder PCIe slot contacts using drag soldering technique at 270 degrees Celsius
94. Mount 2 PCIe x8 slots dedicated for NVMe U.2 drive connectivity
95. Install M.2 sockets supporting 22110 form factor for NVMe storage
96. Solder M.2 socket pins and mounting posts with precision temperature control
97. Mount SATA connectors providing 8 ports for legacy storage devices
98. Install right-angle SFF-8643 connectors for mini-SAS HD connectivity
99. Solder USB 3.0 headers with 20-pin configuration for front panel connectivity
100. Mount USB 2.0 headers for keyboard, mouse, and legacy device support
101. Install front panel header with pins for power switch, reset, and status LEDs
102. Mount COM port header for serial console access during POST
103. Install TPM header for discrete TPM module installation option
104. Mount I2C header for external sensor connectivity and debugging
105. Install chassis intrusion header with detection circuit
106. Position rear I/O shield mounting brackets with press-fit standoffs
107. Install dual RJ-45 connectors with integrated magnetics and LEDs for 10GbE ports
108. Mount 4 additional RJ-45 connectors for 1 Gigabit Ethernet connections
109. Install 4 USB 3.2 Gen 2 Type-A ports on rear I/O panel
110. Mount 2 USB 2.0 Type-A ports for legacy device support
111. Install VGA connector for BMC graphics output supporting 1920x1200 resolution
112. Mount dedicated RJ-45 connector for BMC management network
113. Install 4 fan headers with 4-pin PWM control supporting up to 2 amperes
114. Mount CPU fan headers with high-current capability up to 3 amperes each
115. Install auxiliary power connectors including 24-pin ATX and dual 8-pin EPS12V
116. Mount 4-pin Molex connectors for peripheral power distribution
117. Install SATA power connectors for onboard storage backplane
118. Position battery holder for CR2032 coin cell maintaining CMOS memory
119. Mount electromechanical buzzer for POST code beeps and system alerts
120. Install jumper blocks for configuration settings including CMOS clear and recovery mode
121. Mount DIP switches for boot options and BMC configuration
122. Position mounting holes with metal standoffs accepting 6-32 screws
123. Apply thermal interface material to voltage regulator heatsink mounting areas
124. Install aluminum heatsinks on DrMOS power stages with thermal adhesive
125. Mount PCH heatsink with spring-loaded retention mechanism
126. Secure heatsink with compression of 40 pounds per square inch
127. Install BMC processor heatsink with dedicated 40mm cooling fan
128. Apply thermal pads to memory power management ICs
129. Mount thermal sensors adjacent to critical heat-generating components
130. Route and dress internal cables for storage and front panel connectivity
131. Secure cables with adhesive tie-mounts to prevent interference with airflow
132. Apply conformal coating to sensitive areas prone to moisture and contamination
133. Clean flux residue from board using isopropyl alcohol and ultrasonic cleaning
134. Rinse board with deionized water to remove any ionic contamination
135. Dry board in convection oven at 60 degrees Celsius for 30 minutes
136. Perform visual inspection under magnification checking for solder defects
137. Examine all solder joints for proper fillet formation and wetting
138. Check for solder bridges, insufficient solder, or cold joints
139. Inspect component alignment and verify no tombstoning or Manhattan effects
140. Connect board to automated test equipment via bed-of-nails fixture
141. Apply power sequencing through programmable power supplies
142. Monitor current draw on 12V, 5V, and 3.3V rails during power-up
143. Verify standby power rail at 3.3V providing 3 amperes for BMC
144. Test power-good signals and sequencing delays between rail activations
145. Measure voltage regulator output for CPU VCore at 1.8V no-load condition
146. Check memory voltage rails at 1.1V for VDDQ and 1.8V for VPP
147. Verify PCIe auxiliary power rails at 12V with current limit testing
148. Test all GPIO signals using boundary scan techniques via JTAG interface
149. Execute JTAG chain test verifying connectivity to PCH, BMC, and voltage controllers
150. Program BMC firmware via dedicated SPI flash programmer
151. Load UEFI BIOS image into dual SPI flash chips via in-system programming
152. Verify BIOS chip redundancy and failover mechanism
153. Program MAC addresses into EEPROM for all network interfaces
154. Write board serial number and manufacturing data to FRU information storage
155. Load BMC with OpenBMC or vendor-specific management firmware
156. Configure BMC network settings for factory default state
157. Program TPM endorsement keys and certificates
158. Test BMC network connectivity through dedicated management port
159. Verify BMC can enumerate sensors including temperature, voltage, and fan speed
160. Test IPMI interface responding to standard commands over LAN
161. Verify SOL (Serial Over LAN) functionality for remote console access
162. Test BMC virtual media capability for remote OS installation
163. Check BMC firmware update mechanism via web interface and command line
164. Install first CPU into socket with alignment notch and load plate mechanism
165. Apply thermal paste to CPU integrated heat spreader
166. Mount CPU heatsink with torque-controlled fasteners at 20 inch-pounds
167. Install memory modules in slots 1, 3, 5, 7 for first channel population
168. Verify memory detection through BMC sensor readings
169. Connect ATX power supply providing 1600 watts with 80 PLUS Platinum efficiency
170. Connect display to VGA port for POST observation
171. Press power button and monitor POST sequence through speaker beep codes
172. Observe BIOS splash screen and memory training process
173. Verify memory initialization completes with all installed capacity detected
174. Check CPU identification shows correct model and core count
175. Enter BIOS setup utility and verify all configuration options accessible
176. Test navigation through BIOS menus including Advanced, Security, and Boot sections
177. Verify PCIe slot detection shows all slots available
178. Check storage controller detection shows SATA and NVMe interfaces
179. Test USB port functionality by connecting keyboard and verifying input
180. Check network interface detection shows all Ethernet ports
181. Run memory test patterns including walking ones, checkerboard, and random
182. Execute CPU stress test at 100% utilization for 10 minutes
183. Monitor CPU temperatures remaining below 85 degrees Celsius under load
184. Verify voltage regulator temperatures below 100 degrees Celsius
185. Test fan control responds to temperature changes with PWM adjustment
186. Execute PCIe compliance testing on all slots verifying Gen 4 link training
187. Test storage interfaces with known-good NVMe and SATA drives
188. Verify network interfaces achieve link at expected speeds with loopback testing
189. Run comprehensive diagnostic suite testing all subsystems
190. Burn-in test board at full load for 4 hours monitoring for failures
191. Power cycle board 10 times verifying consistent POST behavior
192. Log all test results and sensor data to manufacturing execution system
193. Apply QC passed label with serial number and date code
194. Package board in anti-static bag with desiccant packet
195. Place board in custom foam insert within corrugated shipping box with accessories including I/O shield, manual, and driver disc
