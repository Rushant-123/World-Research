---
title: "PCB Assembly"
company: "Jabil"
country: "United States"
selling_price: 50.00
inputs:
  - name: "Printed Circuit Board"
    cost: 8.00
    link: "printed-circuit-board"
  - name: "SMT Equipment"
    cost: 5.00
    link: "smt-equipment"
  - name: "Solder Paste"
    cost: 1.00
    link: "solder-paste"
  - name: "Manufacturing Labor"
    cost: 10.00
    link: "manufacturing-labor"
value_created: 26.00
---

1. Receive bare printed circuit boards from PCB fabrication facility with copper traces and pads ready for component mounting
2. Inspect incoming PCBs under magnification for manufacturing defects including trace breaks, pad damage, or laminate delamination
3. Verify PCB thickness meets specification of 1.6mm for standard networking equipment boards with controlled impedance traces
4. Check panel size matches assembly line requirements, typically 18x24 inch panels containing multiple individual board designs
5. Scan PCB barcode to load correct assembly program into manufacturing execution system (MES) for traceability
6. Load PCB panel onto automated solder paste printing machine with vacuum hold-down to prevent movement during printing
7. Position laser-cut stainless steel stencil over PCB panel, aligning fiducial marks with camera vision system to 25 micron accuracy
8. Lower stencil onto PCB surface with controlled pressure to ensure intimate contact between stencil apertures and copper pads
9. Dispense Type 3 solder paste (25-45 micron particle size) onto stencil surface using pneumatic dispenser with 60-80 PSI pressure
10. Position metal squeegee blade at 60-degree angle to stencil surface for optimal paste release from apertures
11. Execute print stroke at 50mm/second speed, applying 10-15 pounds downward pressure to force paste through stencil apertures
12. Lift stencil vertically away from PCB at 0.5mm/second separation speed to prevent paste bridging or smearing
13. Inspect solder paste deposits using automated optical inspection (AOI) system with 5-megapixel cameras and LED lighting
14. Measure paste deposit height with laser profilometry, verifying 100-150 micron thickness above PCB pad surface
15. Check paste volume matches target within 20% tolerance, rejecting boards with excessive or insufficient deposits
16. Verify paste edge definition shows clean aperture replication without slumping or spreading beyond pad boundaries
17. Monitor paste coalescence where deposits should show cohesive structure without granular separation or voiding
18. Transfer printed PCB to pick-and-place machine loading station via automated conveyor with ESD-safe belt material
19. Index PCB panel into pick-and-place work area using mechanical edge sensors and vision alignment on fiducial marks
20. Load component feeders into machine banks, accommodating 0201-size chip components (0.024x0.012 inch) up to 40mm square BGAs
21. Verify component reel orientation matches feeder pocket design for correct pick angle and component polarity
22. Program machine head to pick first component type, typically starting with smallest passive components for optimal placement
23. Position vacuum nozzle over component pocket in tape feeder, selecting 0.5mm nozzle diameter for 0402 resistors and capacitors
24. Apply vacuum pressure of 15-20 inches water column to lift component from carrier tape pocket
25. Detect successful component pick using vacuum pressure sensor, rejecting empty picks or double-picked parts
26. Rotate component while in flight to match required orientation based on PCB pad pattern and component polarity
27. Image component from below using high-speed camera to verify correct part type and measure actual component dimensions
28. Calculate component center position relative to vacuum nozzle centerline with 10 micron measurement accuracy
29. Adjust placement position to compensate for component centering offset and PCB fiducial alignment correction
30. Lower component at controlled Z-axis speed to prevent paste disturbance, stopping 0.1mm above PCB surface
31. Release vacuum while applying slight downward pressure to embed component leads into solder paste deposits
32. Withdraw nozzle vertically to avoid dragging component sideways through paste or causing tombstoning defects
33. Place 220-ohm 0402 resistors on power supply filtering circuits with 18,000 components per hour placement rate
34. Mount 10uF 0603 ceramic capacitors on processor power delivery network requiring ultra-low ESR characteristics
35. Position 100nF 0402 decoupling capacitors immediately adjacent to IC power pins for high-frequency noise suppression
36. Place surface-mount LEDs with correct polarity orientation indicated by cathode marking on component body
37. Mount Ethernet magnetics transformers for signal isolation, handling 15x20mm components with center tap connections
38. Place USB Type-C connector receptacles with 24-pin configuration and integrated EMI shielding structure
39. Position crystal oscillator in metal package for processor clock generation, verifying pin-1 orientation marker alignment
40. Mount HDMI connector receptacles with 19-pin high-speed differential pair routing to video controller IC
41. Place voltage regulator ICs in 8-pin SOIC packages for converting 12V input to 3.3V and 1.8V rails
42. Position power MOSFET transistors in DPAK packages for switching power supply output stage with thermal pad down
43. Mount 256-pin BGA processor IC using high-accuracy head with 25 micron placement tolerance specification
44. Image BGA component from four sides to measure ball array position relative to package body edges
45. Lower BGA onto PCB pads with vision-guided correction to align 0.5mm pitch ball array within 50 micron accuracy
46. Place 100-pin TQFP Ethernet controller IC, verifying corner pin alignment through vision inspection before final placement
47. Mount LPDDR4 memory ICs in 180-ball FBGA packages adjacent to processor for minimal trace length and optimal signal integrity
48. Position PMU power management IC in 48-pin QFN package with exposed thermal pad requiring paste-filled center region
49. Place RF front-end module for WiFi 6E operation in 6GHz band with integrated power amplifier and antenna switch
50. Mount SAW filters for cellular band isolation in ultra-small 1.4x1.1mm packages requiring 20 micron placement accuracy
51. Position temperature sensor IC in SOT-23 package for thermal monitoring and fan control algorithm input
52. Place current sense resistors in 2512 package size for power supply feedback and over-current protection circuits
53. Mount TVS diode arrays for ESD protection on USB and Ethernet interfaces, handling 15kV contact discharge events
54. Position RTC battery holder for coin cell backup power to maintain clock and BIOS settings during AC power loss
55. Place ferrite bead inductors in 0603 packages for power supply noise filtering and conducted EMI reduction
56. Mount antenna connectors with U.FL snap-on interface for WiFi and Bluetooth module RF connections
57. Position fiber optic transceiver cage with integrated heat sink structure for 10Gbps SFP+ module insertion
58. Place temperature-compensated crystal oscillator (TCXO) for GPS receiver requiring 2.5 PPM frequency stability
59. Mount accelerometer IC in 3x3mm LGA package for device orientation detection and motion sensing applications
60. Position gyroscope sensor IC adjacent to accelerometer for 6-axis inertial measurement unit functionality
61. Place magnetometer IC for compass heading determination in navigation and augmented reality applications
62. Mount ambient light sensor IC behind clear window area for automatic display brightness adjustment
63. Position proximity sensor using infrared LED and detector pair for detecting nearby objects without physical contact
64. Place barometric pressure sensor IC in LGA package for altitude determination and weather monitoring
65. Mount humidity sensor IC with exposed polymer film element requiring careful handling to prevent contamination
66. Position microphone IC with MEMS element and integrated analog-to-digital converter for audio capture
67. Place speaker amplifier IC in 16-pin QFN package capable of 3W per channel output power into 4-ohm loads
68. Mount USB hub controller IC for expanding single upstream port to four downstream Type-A receptacles
69. Position DisplayPort redriver IC for signal conditioning and equalization on high-resolution video interfaces
70. Place PCIe clock generator IC providing differential clock pairs to multiple expansion card slots
71. Mount SATA controller IC for connecting rotating hard drives and solid-state storage devices
72. Position SPI flash memory IC in 8-pin SOIC package for BIOS firmware storage and boot code execution
73. Place I2C EEPROM IC for storing configuration data, MAC addresses, and product identification information
74. Mount GPIO expander IC for providing additional input/output pins beyond processor native capability
75. Position level shifter IC for translating 3.3V logic signals to 1.8V domain required by newer memory interfaces
76. Place analog multiplexer IC for routing sensor signals to shared ADC input under software control
77. Mount operational amplifier IC in quad configuration for signal conditioning on analog sensor inputs
78. Position voltage reference IC providing stable 2.5V output for ADC reference input with 25 PPM/degree-C drift
79. Place comparator IC for threshold detection on battery voltage monitoring and under-voltage lockout circuits
80. Complete component placement for 847 unique parts across PCB panel containing four networking router boards
81. Verify placement completion through machine cycle counter showing 3,388 successful component placements
82. Inspect assembled PCB using post-placement AOI system before reflow to detect missing, wrong, or misaligned components
83. Capture top-down images of entire PCB at 20-micron pixel resolution, creating 2-gigabyte image dataset per panel
84. Compare captured images to golden reference template using pattern matching algorithms with 99.5% correlation threshold
85. Flag components showing greater than 25% offset from nominal position for manual inspection or auto-rejection
86. Detect missing components through comparison of expected versus actual part presence at each designated location
87. Identify wrong components by measuring actual part dimensions against expected footprint size from CAD database
88. Verify component polarity markings match design requirements, checking cathode indicators on diodes and LED components
89. Inspect BGA alignment by measuring package body position relative to pad pattern, flagging deviations exceeding 50 microns
90. Generate inspection report documenting 12 flagged defects requiring manual review before reflow processing
91. Route flagged PCB panel to manual rework station where technician inspects suspect components under stereo microscope
92. Correct component position errors by lifting part with vacuum pencil and repositioning within paste working life window
93. Replace wrong component value detected on power supply filter capacitor, updating MES system with rework action taken
94. Return corrected PCB panel to production flow, clearing inspection holds and enabling progression to reflow stage
95. Transfer assembled PCB panel to reflow oven loading conveyor operating at 1 meter per minute travel speed
96. Index PCB into reflow oven chamber through edge clamps or conveyor rails maintaining flat orientation
97. Enter first preheat zone where forced convection heating brings PCB temperature from ambient to 150 degrees Celsius
98. Control preheat ramp rate at 2 degrees Celsius per second to prevent thermal shock on ceramic components
99. Hold PCB temperature in 150-180 degree Celsius range for 90 seconds to activate solder paste flux and volatilize solvents
100. Allow flux to chemically reduce copper oxide from pad surfaces, preparing metallurgically clean interface for solder wetting
101. Progress PCB through second preheat zone ramping temperature from 180 to 210 degrees Celsius over 40 seconds
102. Equalize thermal mass differences between large components and small parts to prevent temperature gradients exceeding 10 degrees
103. Enter third zone where top and bottom heating elements bring PCB above solder paste liquidus temperature of 217 degrees Celsius
104. Peak PCB temperature at 245 degrees Celsius for 30 seconds time-above-liquidus to ensure complete solder melting and alloy formation
105. Monitor actual component body temperature using thermocouples attached to representative parts with thermal epoxy
106. Control oven zones through closed-loop PID algorithms maintaining setpoint within plus/minus 3 degrees Celsius
107. Observe solder paste melt progression through oven viewport showing transition from granular paste to liquid metal
108. Allow surface tension forces to self-center components on pads as molten solder pulls parts into optimal alignment
109. Enable solder wetting to progress across pad surfaces, spreading under component terminations through capillary action
110. Form intermetallic compound layer between copper pad and tin-based solder alloy through diffusion at interface
111. Enter cooling zone where forced air convection reduces PCB temperature from peak to 180 degrees Celsius
112. Control cooling ramp rate at 3 degrees Celsius per second to promote fine grain structure in solidified solder joints
113. Continue cooling to 100 degrees Celsius before PCB exits oven onto unload conveyor at safe handling temperature
114. Complete reflow thermal profile requiring 8 minutes total time from entry to exit of 8-zone convection oven
115. Extract PCB panel from reflow oven and allow further cooling to 50 degrees Celsius in ambient air
116. Transfer cooled PCB to post-reflow AOI station for solder joint quality inspection and defect detection
117. Image all solder joints from top and oblique angles using multi-camera system with structured lighting
118. Analyze joint fillet shape showing concave meniscus indicating proper wetting and adequate solder volume
119. Measure solder joint height at component terminations, verifying 50-150 micron fillet above pad surface
120. Detect solder bridging defects where excess paste has flowed between adjacent pads creating electrical short circuits
121. Identify insufficient solder defects showing inadequate fillet formation or missing wetting on component leads
122. Flag tombstone defects where unequal heating has caused chip component to stand vertical on one end pad
123. Detect component shift where part has moved beyond position tolerance during reflow surface tension forces
124. Identify solder balls where paste spatter has formed small spheres on solder mask surface creating short-circuit risk
125. Measure BGA void percentage through X-ray imaging, rejecting parts showing greater than 25% void area in ball connections
126. Generate post-reflow inspection report documenting 8 defects requiring rework before functional testing proceeds
127. Route defective PCB panel to manual rework station equipped with hot air rework system and soldering irons
128. Remove bridged solder using solder wick braid to absorb excess material through capillary action into copper mesh
129. Reflow insufficient solder joints by applying flux and adding 0.3mm diameter solder wire while heating with iron tip
130. Remove tombstoned component by reflowing both pads simultaneously with hot air nozzle and repositioning part correctly
131. Replace shifted BGA component by heating from below with infrared preheater while applying top-side hot air
132. Lift BGA component once solder balls melt, clean pads with wick, apply fresh paste, and place new component
133. Reflow replacement BGA using localized heating profile maintaining adjacent components below damage threshold temperature
134. Clean reworked areas with isopropyl alcohol to remove flux residue and prepare surface for inspection verification
135. Re-inspect reworked joints under microscope to verify repair quality meets original workmanship standards
136. Update MES system with rework details including defect type, repair action, and technician identification
137. Return repaired PCB panel to production flow for depanelization into individual router board assemblies
138. Load PCB panel into automated depanelization router using vacuum table to secure panel during cutting
139. Program router path to follow v-groove score lines or route around board perimeter leaving 1mm clearance
140. Execute cutting operation using 1.6mm diameter carbide endmill at 30,000 RPM spindle speed
141. Apply dust extraction vacuum at cutting point to remove PCB dust and debris preventing contamination
142. Complete routing operation separating four individual router boards from common panel structure
143. Deburr board edges using fine abrasive pad to remove rough edges and prevent handling injuries
144. Clean separated boards using aqueous wash system with heated deionized water and mild detergent solution
145. Spray boards from multiple angles using 40 PSI water jets to remove flux residue and particle contamination
146. Rinse boards with deionized water spray to eliminate detergent residue that could cause corrosion or leakage paths
147. Dry boards in convection oven at 85 degrees Celsius for 30 minutes to eliminate moisture from between components
148. Verify board cleanliness through ionic contamination testing showing less than 10 micrograms per square centimeter
149. Transfer cleaned boards to in-circuit test (ICT) station for electrical verification of component values and connections
150. Load board into ICT fixture containing bed-of-nails test points contacting designated pads on PCB
151. Apply power to board through fixture connections providing 12V input at current-limited 3A maximum
152. Measure resistance values on installed resistors using 4-wire Kelvin connection for 0.1% measurement accuracy
153. Verify capacitor values through AC impedance measurement at 1kHz test frequency comparing to nominal specifications
154. Test diode forward voltage drop measuring 0.6-0.7V for silicon junction devices indicating correct component installation
155. Verify voltage regulator output at 3.3V and 1.8V rails within 2% tolerance under no-load conditions
156. Apply varying loads to power supplies while monitoring output voltage regulation and ripple characteristics
157. Measure power supply efficiency at 50% and 100% load conditions verifying greater than 85% energy conversion
158. Test Ethernet interface continuity through transformer windings and termination resistor networks
159. Verify USB data line impedance at 90 ohms differential with less than 10% variation across connector pins
160. Measure processor crystal oscillator startup behavior showing stable 25 MHz output within 100 milliseconds
161. Test memory interface signals using boundary scan (JTAG) to verify connectivity without requiring processor operation
162. Verify PCIe clock signals show 100 MHz differential output with less than 5 picoseconds period jitter
163. Test GPIO pins by toggling outputs high and low while monitoring voltage levels at 3.3V and 0V respectively
164. Measure analog sensor inputs showing proper bias voltages and noise levels below 10 millivolts peak-to-peak
165. Complete ICT sequence in 90 seconds testing 247 nets and 168 component values across router board assembly
166. Generate test report documenting 100% pass rate with all measurements within specification limits
167. Transfer boards passing ICT to functional test station for operational verification under simulated usage conditions
168. Insert board into functional test fixture providing power, network connections, and debug interface access
169. Apply 12V power through locking barrel connector while monitoring inrush current below 5A limit
170. Download functional test firmware to board via JTAG interface programming processor flash memory
171. Monitor serial console output showing boot sequence messages and self-test progress indicators
172. Verify processor boots successfully reaching command prompt within 15 seconds of power application
173. Test DDR4 memory interface by writing and reading test patterns to all installed memory capacity
174. Execute memory stress test writing pseudo-random data and verifying readback over 100,000 access cycles
175. Verify all four Ethernet ports link at gigabit speed when connected to test traffic generator
176. Generate bidirectional traffic at 950 Mbps sustained throughput on each port simultaneously
177. Measure packet loss showing zero dropped frames over 60-second test duration at maximum traffic load
178. Test WiFi interface connecting to test access point and transferring 1GB file in both directions
179. Measure WiFi throughput achieving greater than 600 Mbps on 802.11ax connection in controlled RF chamber
180. Test USB ports by connecting test devices and verifying enumeration and data transfer capability
181. Verify USB ports deliver required 900mA current capacity for high-power device charging
182. Test status LEDs showing correct illumination color and intensity for power, activity, and error conditions
183. Verify fan control functionality by measuring PWM duty cycle variation in response to temperature sensor input
184. Test firmware update process by downloading new image and verifying successful programming and boot
185. Measure board power consumption under idle, typical, and maximum load conditions recording 8W, 15W, and 28W respectively
186. Verify thermal performance by monitoring critical component temperatures remaining below 85 degrees Celsius at full load
187. Test reset button functionality by triggering board reboot and verifying clean shutdown and restart sequence
188. Execute 10-minute burn-in period with all interfaces active and maximum traffic load applied
189. Complete functional test sequence in 18 minutes verifying all board capabilities meet design specifications
190. Generate test record with unique serial number, timestamp, and pass/fail status uploaded to manufacturing database
191. Apply serialization label to board with QR code encoding unique identifier, MAC address, and production date
192. Perform final visual inspection under magnified lighting checking for physical damage, contamination, or assembly defects
193. Package completed board in anti-static bag with desiccant packet to control moisture during storage and shipping
194. Place bagged board in custom foam insert preventing mechanical shock and vibration damage during transit
195. Box multiple board assemblies with printed documentation and accessories preparing for shipment to customer facility
