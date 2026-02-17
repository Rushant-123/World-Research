---
title: "Test Fixture"
company: "Everett Charles Technologies"
country: "United States"
selling_price: 5.0
inputs:
  - name: "Spring-Loaded Probes"
    cost: 0.8
    link: "phosphor-bronze"
  - name: "Fixture Plate"
    cost: 0.5
    link: "cnc-machine"
  - name: "Wiring Harness"
    cost: 0.4
    link: "copper-wire"
  - name: "Alignment Pins"
    cost: 0.1
    link: "stainless-steel-wire"
  - name: "PCB Interface"
    cost: 0.3
    link: "printed-circuit-board"
  - name: "Assembly"
    cost: 0.4
    link: "machinist-labor"
value_created: 2.5
---

# Test Fixture Manufacturing Process

**Market Leader:** [Everett Charles Technologies](/companies/everett-charles-technologies)



## Design and Engineering Phase

1. Receive PCB CAD files (Gerber RS-274X, ODB++, or IPC-2581 formats) from customer design team for fixture layout planning
2. Import PCB netlist and test point coordinates into fixture design software (TestWay, FixtureFab, or Takaya CAD)
3. Analyze PCB test requirements: 450-2800 test points typical, access from top/bottom sides, component keep-out zones
4. Select probe pitch based on test point density: 100mil (2.54mm), 75mil (1.91mm), 50mil (1.27mm), or 35mil (0.89mm) spacing
5. Determine probe type requirements: standard pogo pins, crown tip probes, serrated probes, or coaxial RF probes based on signal types
6. Calculate required probe count: 85-95% of test points accessible, with consideration for component shadowing and clearance
7. Design fixture plate outline with mounting holes for tester interface (flying probe, bed-of-nails, or in-circuit test system)
8. Create probe pattern layout with X-Y coordinate mapping, ensuring minimum 0.050" (1.27mm) probe-to-probe clearance
9. Plan wire routing strategy: direct wiring for <500 probes, receiver board architecture for 500-2000 probes, matrix switching for >2000 probes
10. Design vacuum hold-down pattern with 6-12 vacuum zones for PCB flatness control (±0.002" across 12" span)
11. Engineer alignment mechanism: tooling pins, edge locators, or vision alignment system with ±0.001" (0.025mm) repeatability
12. Specify fixture plate material: phenolic resin (FR-4) for standard use, acrylic for visual inspection, or epoxy-glass for high-temperature applications
13. Design pneumatic actuation system if required: top-side probing pressure 50-500 grams per probe, air cylinder or cam-driven mechanism
14. Create electrical test interface connector layout: D-sub, SCSI, or custom high-density connectors rated for 1M+ insertion cycles
15. Plan grounding strategy: common ground plane, guard traces for sensitive signals, coaxial probe grounding for RF test points

## Fixture Plate CNC Machining

16. Select base fixture plate material: 0.5-1.5" thick phenolic laminate (G-10/FR-4) with 3x10^16 ohm-cm volume resistivity
17. Cut raw plate stock to fixture dimensions plus 0.5" machining allowance using CNC panel saw or waterjet cutter
18. Mount plate blank on CNC machining center (Haas VF-2, Fadal VMC, or similar 3-axis mill) with vacuum table or fixture clamps
19. Face mill top surface to achieve 32 microinch (0.8 μm) surface finish for probe mounting interface flatness
20. Drill mounting holes for tester interface: typically 0.250" diameter holes on 1.0" grid pattern, ±0.002" positional tolerance
21. Machine vacuum channel network: 0.125" wide × 0.100" deep grooves connecting to vacuum zones, feed rate 15-25 IPM
22. Create vacuum zone pockets: 0.050" deep recesses with 0.015" gasket groove for O-ring or foam tape seal
23. Drill probe mounting holes using carbide drill bits: 0.098" (2.49mm) for 100mil probes, 0.073" (1.85mm) for 75mil probes
24. Maintain drilling accuracy ±0.001" (0.025mm) positional tolerance across entire probe field using precision CNC control
25. Implement progressive drill strategy: pilot hole 0.060" diameter, then final diameter to minimize phenolic delamination
26. Use carbide compression bits (up-cut/down-cut combination) to achieve clean entry and exit holes without fraying
27. Machine alignment pin receptacles: 0.1250" +0.0002/-0.0000 reamed holes for precision dowel pins, 0.0001" perpendicularity
28. Create wire routing channels on bottom surface: 0.200" wide × 0.150" deep channels for wire harness organization
29. Mill connector mounting pockets: precise depth control ±0.005" for flush-mount D-sub or SCSI connectors
30. Drill wiring access holes: 0.156" diameter holes connecting top probe field to bottom wiring channels
31. Machine edge guide features: vertical walls or adjustable guide blocks for PCB alignment, 90° ±0.1° squareness
32. Apply chamfers to all edges: 0.030" × 45° chamfer to prevent phenolic chipping and operator injury
33. Vacuum clean all drilled holes to remove phenolic dust and debris (critical for electrical insulation)
34. Perform dimensional inspection: CMM verification of probe hole positions, ±0.0005" tolerance for critical features
35. Surface treat probe mounting face: light bead blast or abrasive pad cleaning for probe adhesive bonding surface preparation

## Spring Probe Selection and Specification

36. Select probe stroke length based on PCB flatness variation: 0.100" stroke for standard PCBs, 0.150-0.200" for flex circuits
37. Choose probe tip style for test pad contact: crown tip (radius 0.015") for solder mask, serrated for bare copper
38. Specify probe barrel diameter: 0.092" (2.34mm) for 100mil pitch, 0.068" (1.73mm) for 75mil pitch probes
39. Determine spring force requirements: 25-50 grams for delicate flex circuits, 75-150 grams for standard PCBs, 200-350 grams for high-current testing
40. Calculate probe compression: operate at 50-70% of maximum stroke to maintain linear spring force curve
41. Select plunger material: beryllium copper for standard applications, gold-plated for low-resistance contact (<50 mΩ)
42. Choose barrel material: brass for structural integrity, beryllium copper for applications requiring full conductivity
43. Specify contact plating: gold over nickel (50-100 microinches) for low contact resistance and corrosion protection
44. Order probes with current rating: 1-3 amps continuous for power testing, 100mA for signal integrity testing
45. Select probe receptacle type: solder cup for direct attachment, wire wrap for prototyping, crimp socket for modular design
46. Verify probe temperature rating: 105°C minimum for standard fixtures, 125-150°C for high-temperature environmental testing
47. Check probe lifecycle specification: 100,000-500,000 actuations typical, 1M+ cycles for gold-on-gold contact materials
48. Order specialty probes as needed: coaxial probes (50Ω impedance) for RF testing, Kelvin probes for 4-wire resistance measurements
49. Specify probe retention method: press-fit (0.002-0.004" interference), epoxy bonding, or threaded mount for high-force applications
50. Calculate total probe cost: $0.50-$3.00 per probe depending on pitch, stroke, and current rating specifications

## Probe Pattern Layout and Installation

51. Print probe coordinate map from CAD system: X-Y positions with probe ID numbers for installation reference
52. Transfer probe layout to fixture plate using CNC drilling coordinates or drill template overlay verification
53. Sort probes by function: power/ground probes (high current), signal probes (standard), coaxial probes (RF), Kelvin probes (precision resistance)
54. Install alignment guide probes first: corner or edge probes for initial PCB positioning verification
55. Press-fit probe barrels into fixture plate: apply 10-20 pounds force using arbor press or pneumatic insertion tool
56. Maintain probe perpendicularity during insertion: ±1° maximum tilt to ensure proper contact with test pads
57. Check probe retention: pull test 5-10 pounds force, probe should not move or rotate in fixture plate
58. Install probes in logical groups: by circuit function, by connector group, or by wire harness bundle for systematic wiring
59. Verify probe height uniformity: measure probe tip heights with height gauge, ±0.005" variation acceptable before PCB contact
60. Apply thread-locking adhesive for threaded probes: medium-strength Loctite 242 or equivalent
61. Install coaxial probes with proper grounding: connect outer shield to ground plane, maintain 50Ω impedance to connector
62. Set up Kelvin probe pairs: force and sense probes within 0.100" spacing for accurate 4-wire resistance measurements
63. Install high-current power probes: larger diameter probes (0.125-0.156") with 5-10 amp current capacity
64. Mark probe locations on fixture underside: numbering system matching wiring diagram for efficient harness assembly
65. Photograph installed probe pattern: documentation for future fixture repairs or probe replacement reference

## Wiring and Routing

66. Plan wiring harness architecture: direct point-to-point for simple fixtures, receiver board for complex fixtures with >500 probes
67. Select wire gauge based on current requirements: 26 AWG for signals, 22-24 AWG for power, 18-20 AWG for high current (>3A)
68. Use color-coded wire: red for power, black for ground, white/yellow/green for signals, coaxial for RF (RG-174 or RG-316)
69. Cut wires to length with 2-4" service loop: prevents tension on probe connections during fixture handling
70. Strip wire ends: 0.125-0.187" for solder cup probes, 0.250" for wire wrap, sized for crimp terminals
71. Tin wire ends with 63/37 or SAC305 solder: improves connection reliability and prevents wire fraying
72. Solder wires to probe solder cups: 650-700°F iron temperature, 2-3 seconds dwell time, shiny fillet joint
73. Apply heat-shrink tubing to solder joints: 2:1 or 3:1 ratio tubing, 0.5" length, provides strain relief and insulation
74. Route wires through fixture channels: maintain organized bundles by function, secure with cable ties every 2-3 inches
75. Implement proper wire management: avoid crossing power and signal wires, maintain 0.125" separation for noise reduction
76. Create wire harness breakouts: group wires by destination connector (typically 25-68 wires per D-sub connector)
77. Label all wires at both ends: heat-shrink labels, wire markers, or laser-printed labels with probe ID numbers
78. Install wire harness anchors: adhesive cable mounts or screw-down clamps every 4-6" to prevent wire movement
79. Route high-current power wires separately: minimize voltage drop, use twisted pairs for supply and return
80. Install RF coaxial cables: maintain minimum bend radius (0.5" for RG-174), use right-angle connectors to save space
81. Ground RF cable shields at fixture end: prevents ground loops, connect shields to common ground plane
82. Implement Kelvin wiring: separate force and sense wires, route together as twisted pair to destination
83. Create wiring documentation: wire-from-to spreadsheet, probe number to connector pin assignment, schematic diagram
84. Perform continuity testing during harness assembly: verify each wire connection before bundling and securing
85. Apply final wire harness covering: braided sleeving, spiral wrap, or split loom tubing for mechanical protection

## Connector Installation and Interface

86. Select test system interface connectors: D-sub (9-78 pins), SCSI (50-68 pins), or custom high-density rectangular connectors
87. Calculate total pin count required: typical fixture uses 4-8 connectors for 500-2000 test points
88. Mount connectors in machined pockets: flush mounting for compact design, panel mounting for accessibility
89. Secure connectors with screws: 4-40 or M3 hardware, torque to 4-6 in-lbs, use locking washers
90. Assign pin functions: group by circuit type (power, ground, signals), document in pin assignment table
91. Solder or crimp wires to connector pins: solder for permanent connections, crimp contacts for modular design
92. Use connector pin insertion/extraction tools: specialized tools for D-sub or SCSI crimp contacts
93. Install connector backshells: strain relief for wire harness, EMI shielding if required (metal backshell)
94. Apply connector identification labels: numbering system (J1, J2, etc.), function labels (POWER, SIGNALS, RF)
95. Install keying features: asymmetric connectors or keyed backshells to prevent incorrect connection to test system
96. Create mating cable assemblies: matching connectors with color-coded cables to test system interface
97. Test connector contact resistance: <50 mΩ per pin, measure with precision milliohm meter
98. Verify connector pin assignment: continuity testing from probe tips through wiring to connector pins
99. Document connector pinout: detailed spreadsheet or schematic showing probe-to-pin mapping
100. Install interface board if used: receiver PCB with probe connections on one side, test system connectors on other side

## Vacuum Hold-Down System

101. Design vacuum manifold: central distribution block with ports for 6-12 vacuum zones
102. Machine vacuum manifold from aluminum block: 2" × 2" × 6" typical size, CNC milled ports and passages
103. Drill vacuum port threads: 1/8-27 NPT or 10-32 straight thread for vacuum fittings
104. Install vacuum solenoid valves: one per zone for independent control, 24VDC or 120VAC operation
105. Select vacuum generator: venturi vacuum pump (simple, no maintenance) or rotary vane pump (high flow capacity)
106. Size vacuum system: 2-5 CFM flow rate at -15 to -20 inHg vacuum level for typical fixture
107. Install vacuum gauge: analog or digital display, -30 to 0 inHg range, mounted on fixture or control panel
108. Route vacuum tubing: 1/4" or 3/8" OD polyurethane or nylon tubing from manifold to fixture zones
109. Install vacuum fittings in fixture plate: push-to-connect fittings (1/8 NPT to 1/4" tube) in each vacuum zone
110. Apply vacuum gasket material: closed-cell foam tape (1/8" thick) or silicone O-rings in gasket grooves
111. Test vacuum zone sealing: apply vacuum, check for leaks with soap solution or ultrasonic leak detector
112. Verify vacuum hold-down force: measure PCB pull-off force, should require 5-10 pounds force to overcome vacuum
113. Install vacuum release valve: manual or automatic exhaust valve for quick PCB release after testing
114. Implement vacuum sensing: pressure switches to verify adequate vacuum before test start, prevent false test failures
115. Create vacuum zone layout: zones correspond to PCB areas, prevent sagging in unsupported regions
116. Design vacuum port locations: avoid probe interference, provide uniform vacuum distribution across PCB
117. Test PCB flatness under vacuum: use dial indicator or laser displacement sensor, verify ±0.002" flatness specification
118. Document vacuum system settings: required vacuum level, zone activation sequence, maintenance procedures
119. Install vacuum filter: inline 40-micron filter to prevent debris from entering solenoid valves
120. Label vacuum zones: numbering system matching control software for troubleshooting and documentation

## Alignment Mechanism Design

121. Design primary alignment method: tooling holes in PCB (±0.005" tolerance) with precision dowel pins in fixture
122. Machine alignment pin holes in fixture: 0.1250" +0.0002/-0.0000" diameter, reamed for precision fit
123. Install alignment dowel pins: ground and hardened tool steel, 0.1250" -0.0001/-0.0003" diameter for slip fit
124. Set alignment pin height: protrude 0.200-0.400" above fixture surface, chamfered tip for easy PCB loading
125. Add secondary alignment features: edge guides, corner blocks, or adjustable stops for PCBs without tooling holes
126. Design edge guide rails: vertical walls or adjustable guide blocks, 0.010-0.020" clearance to PCB edge
127. Install adjustable alignment stops: set screws or cam-adjustable blocks for fine-tuning PCB position
128. Implement vision alignment system for high-accuracy fixtures: USB camera with fiducial recognition software
129. Create fiducial targets on fixture: precision-etched crosses or circles, ±0.0005" positional accuracy
130. Calibrate vision system: teach fiducial locations on fixture and PCB, calculate transformation matrix
131. Verify alignment repeatability: load and unload PCB 10 times, measure position variation with CMM or vision system
132. Design PCB support structure: fixture surface flatness, support rails, or adjustable height standoffs for warped PCBs
133. Add operator guidance features: PCB outline silkscreen, corner indicators, or laser positioning guide
134. Create loading fixtures for automation: pneumatic clamps, robotic grippers, or conveyor integration
135. Test alignment with first article PCB: verify probe contact on all test points, check for misalignment patterns

## Pneumatic Actuation System

136. Select actuation method based on probe count: manual lever for <200 probes, pneumatic cylinder for 200-2000 probes, cam-driven for >2000
137. Design top-side probe plate if required: mirror image of bottom fixture, probes contact PCB top surface
138. Machine top plate similar to bottom fixture: phenolic or acrylic material, probe pattern matches top-side test points
139. Install linear guide rails: precision ball bearing slides or hardened steel rails for smooth, aligned plate motion
140. Mount pneumatic actuator: double-acting air cylinder, 50-200 pounds force capacity based on total probe count
141. Calculate required actuation force: probe count × average spring force per probe (50-150 grams typical) × 1.5 safety factor
142. Install air pressure regulator: adjust actuation pressure 40-80 PSI, provides controlled probe contact force
143. Add flow control valves: meter-in and meter-out speed control for gentle probe engagement and retraction
144. Implement position sensors: proximity switches or reed switches detect full-up and full-down positions
145. Design force limiting mechanism: pressure regulator with gauge, prevents excessive probe force and PCB damage
146. Install shock absorbers: pneumatic cushioning or mechanical bumpers for smooth deceleration at end of stroke
147. Create electrical interlock system: vacuum must be present before actuation, prevents PCB movement during probe contact
148. Add manual override: mechanical release lever or manual air valve for fixture operation during setup
149. Test actuation force uniformity: measure contact force at multiple probe locations, verify ±10% variation across fixture
150. Implement probe height compensation: use compliant top plate mounting (spring-loaded) for PCBs with height variation

## Contact Resistance Verification

151. Design contact resistance test procedure: measure resistance from probe tip through wiring to connector pin
152. Use precision milliohm meter: 4-wire Kelvin measurement, 1 mΩ resolution (Keithley 2100, Fluke 8846, or equivalent)
153. Measure each probe contact resistance: acceptable range 10-100 mΩ depending on probe type and current requirements
154. Test probe-to-wire solder joint: verify <10 mΩ resistance, check for cold solder joints or fractured connections
155. Verify wire harness resistance: <5 mΩ per foot for 24 AWG, <3 mΩ per foot for 22 AWG copper wire
156. Check connector pin resistance: contact resistance <50 mΩ, inspect for bent or corroded pins
157. Measure total circuit resistance: probe tip to connector pin should be <150 mΩ for signal circuits
158. Test high-current paths separately: power and ground circuits should have <50 mΩ total resistance
159. Verify coaxial cable impedance: use TDR (time domain reflectometer) to confirm 50Ω ±2Ω impedance
160. Create contact resistance baseline documentation: record initial values for all critical circuits
161. Test probe contact force: use contact force gauge (0-500 gram range), verify meets probe specification
162. Measure contact force distribution: test multiple probes across fixture, ensure uniformity ±15%
163. Verify probe tip condition: inspect for damage, contamination, or wear using magnification (10-20×)
164. Test contact resistance with PCB under load: load PCB onto fixture, measure resistance to actual test pads
165. Document out-of-spec measurements: flag probes or circuits requiring rework or replacement

## First Article Correlation

166. Obtain first article PCB: known-good board with verified electrical characteristics from customer
167. Load PCB onto test fixture: align with dowel pins or edge guides, apply vacuum hold-down
168. Actuate probes and verify mechanical contact: visual inspection or continuity testing confirms all probes contact pads
169. Connect fixture to test system: in-circuit tester (ICT), flying probe system, or functional test equipment
170. Upload test program: developed based on PCB netlist, component values, and electrical specifications
171. Run initial electrical test: verify all test points accessible, check for opens or shorts in fixture wiring
172. Compare test results to reference data: correlation ±5% for analog measurements, 100% match for digital/continuity tests
173. Investigate any discrepancies: probe misalignment, incorrect wiring, probe contamination, or PCB defects
174. Perform probe contact verification: use continuity test or low-resistance measurement to confirm electrical contact
175. Check for false failures: inadequate probe force, oxidized test pads, or insufficient PCB flatness
176. Optimize probe contact parameters: adjust actuation force, vacuum level, or probe compression for reliable contact
177. Verify power supply connections: measure voltage at power probes during test, confirm adequate current capacity
178. Test analog measurement accuracy: compare fixture measurements to calibrated benchtop instruments (±2% agreement target)
179. Validate RF test points: verify impedance matching, minimize ground loop effects, check for signal degradation
180. Document first article correlation results: test report with pass/fail data, measurement comparisons, and corrective actions

## Probe Life Monitoring

181. Establish probe lifecycle tracking system: database recording probe actuation counts and replacement history
182. Install actuation counter: mechanical or electronic counter integrated with fixture control system
183. Set probe replacement intervals: typically 100,000-500,000 cycles depending on probe type and contact material
184. Monitor contact resistance trends: periodic testing (weekly or monthly) detects probe degradation before failure
185. Implement resistance threshold alerts: flag probes exceeding 150 mΩ or showing >50% increase from baseline
186. Inspect probe tips periodically: visual inspection every 10,000-25,000 cycles, look for wear, contamination, or damage
187. Test probe spring force degradation: measure contact force every 50,000 cycles, replace if force drops >20%
188. Track probe failure modes: document wear patterns (tip erosion, plating loss, spring fatigue, barrel cracking)
189. Create probe replacement schedule: preventive replacement before end-of-life reduces fixture downtime
190. Stock replacement probes: maintain inventory of critical probe types for quick replacement
191. Develop probe replacement procedure: documentation with photos showing removal and installation steps
192. Train fixture technicians: proper probe replacement techniques, force requirements, alignment verification
193. Record probe replacement history: date, probe location, reason for replacement, new probe specifications
194. Analyze probe life data: identify systematic issues (excessive force, contamination, incompatible materials)
195. Optimize probe selection: upgrade to longer-life probes in high-wear locations, adjust contact parameters to extend life

## Fixture Maintenance and Calibration

196. Create fixture maintenance schedule: daily cleaning, weekly inspection, monthly electrical verification, annual calibration
197. Develop cleaning procedure: isopropyl alcohol wipe-down of probe tips, compressed air cleaning of fixture channels
198. Inspect vacuum system: check for leaks, clean filters, verify vacuum levels meet specification
199. Verify alignment accuracy: test with reference PCB or CMM measurement, confirm ±0.002" repeatability
200. Calibrate electrical measurements: verify test system accuracy using precision resistor standards and voltage references
201. Update fixture documentation: wiring diagrams, probe replacement logs, correlation test results, maintenance history
202. Store fixture properly: climate-controlled environment, protective cover, avoid stacking or mechanical stress
203. Implement fixture revision control: track design changes, probe upgrades, wiring modifications for configuration management
204. Train operators on proper fixture use: loading procedures, actuation sequence, troubleshooting common issues
205. Establish fixture performance metrics: first-pass yield, false failure rate, mean time between maintenance, probe replacement frequency
