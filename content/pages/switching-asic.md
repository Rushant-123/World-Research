---
title: "Switching ASIC"
company: "Marvell Technology"
country: "United States"
selling_price: 200.00
inputs:
  - name: "Silicon Wafer"
    cost: 20.00
    link: "silicon-wafer"
  - name: "Photomask Set"
    cost: 30.00
    link: "photomask-set"
  - name: "Package Substrate"
    cost: 15.00
    link: "package-substrate"
  - name: "Bond Wire"
    cost: 5.00
    link: "bond-wire"
value_created: 130.00
---

1. Define switching ASIC specifications targeting 48-port gigabit Ethernet plus 4x10GbE uplink ports with full Layer 2/3 capabilities and hardware forwarding.
2. Establish switching capacity requirements at 128 Gbps non-blocking throughput with wire-speed performance across all ports simultaneously.
3. Set packet forwarding rate target of 95.2 million packets per second (Mpps) to handle minimum-sized 64-byte Ethernet frames at line rate.
4. Specify MAC address table capacity of 32,000 entries with binary CAM (content-addressable memory) architecture for fast lookups.
5. Define VLAN support for 4,096 simultaneous VLANs with 802.1Q tagging and port-based VLAN assignment capabilities.
6. Establish cut-through switching latency target of 1.2 microseconds port-to-port for minimum frame size to minimize network delay.
7. Specify Quality of Service (QoS) requirements including 8 priority queues per port with strict priority and weighted round-robin scheduling.
8. Define power budget of 18 watts maximum TDP for enterprise switch deployment with active cooling solutions.
9. Establish process node at 28nm CMOS technology balancing performance, power efficiency, and manufacturing cost for networking applications.
10. Create high-level architecture diagram showing packet processing pipeline, buffer memory, switching fabric, and port interfaces.
11. Design packet ingress pipeline with parsing engine to extract Layer 2-4 headers including MAC addresses, VLAN tags, IP addresses, and TCP/UDP ports.
12. Implement header parser state machine supporting Ethernet II, 802.3, IPv4, IPv6, MPLS, and tunneling protocols (VXLAN, GRE).
13. Design forwarding lookup engine with MAC address table using hash-based CAM for Layer 2 switching decisions at wire speed.
14. Implement longest prefix match (LPM) engine for IPv4/IPv6 routing with Trie-based algorithm supporting 8,000 route entries.
15. Design access control list (ACL) engine with ternary CAM (TCAM) storing 2,000 rules for packet filtering based on multiple header fields.
16. Create policy-based routing engine allowing traffic steering based on source/destination addresses, ports, protocols, and VLAN membership.
17. Implement ingress QoS classification engine mapping packets to 8 priority levels based on 802.1p, DSCP, or port trust settings.
18. Design ingress policing mechanisms with token bucket algorithm supporting per-port and per-flow rate limiting from 1 Mbps to 10 Gbps.
19. Create packet buffer management system with 12 MB on-chip SRAM providing dynamic buffer allocation across ports and queues.
20. Implement buffer admission control preventing head-of-line blocking using virtual output queuing and credit-based flow control.
21. Design crossbar switching fabric with 256 Gbps internal bandwidth providing non-blocking connectivity between ingress and egress ports.
22. Create fabric scheduler implementing weighted fair queuing ensuring bandwidth guarantees and preventing starvation across traffic classes.
23. Implement multicast replication engine supporting up to 256 multicast groups with efficient packet duplication to multiple egress ports.
24. Design egress queue management with per-port buffering, tail drop, weighted random early detection (WRED) for congestion avoidance.
25. Create egress QoS scheduler supporting strict priority, weighted round-robin (WRR), and deficit weighted round-robin (DWRR) algorithms.
26. Implement traffic shaping with hierarchical token buckets enabling per-port, per-queue, and per-flow rate control with 1% granularity.
27. Design packet rewrite engine modifying headers for VLAN tag insertion/removal, MPLS label push/pop, and TTL decrement operations.
28. Create statistics collection subsystem tracking per-port counters for packets, bytes, errors, discards, and queue occupancy.
29. Implement timestamping logic supporting IEEE 1588 Precision Time Protocol (PTP) with nanosecond accuracy for synchronization applications.
30. Design CPU interface using PCIe Gen3 x4 providing 32 Gbps bandwidth for management plane communication and exception packet handling.
31. Create management packet path directing control frames (LACP, STP, LLDP, ARP) to CPU while hardware-forwarding data plane traffic.
32. Implement learning engine updating MAC address table based on source MAC addresses in received frames with aging timers.
33. Design spanning tree protocol (STP) hardware acceleration supporting rapid STP (RSTP) and multiple spanning tree (MSTP) variants.
34. Create link aggregation (LAG) engine supporting 802.3ad LACP with up to 8 ports per trunk group and load balancing algorithms.
35. Implement storm control mechanisms detecting and rate-limiting broadcast, multicast, and unknown unicast flooding to prevent network disruption.
36. Design port mirroring capabilities supporting SPAN and RSPAN for traffic monitoring with ingress/egress direction selection.
37. Create Energy Efficient Ethernet (EEE) 802.3az implementation reducing power consumption during low-traffic periods with low-power idle mode.
38. Implement security features including MAC address filtering, IP source guard, dynamic ARP inspection, and DHCP snooping hardware offload.
39. Design SerDes (serializer/deserializer) interfaces for 48x 1GbE ports using SGMII protocol at 1.25 Gbps line rate per channel.
40. Create high-speed SerDes for 4x 10GbE uplinks using XFI protocol at 10.3125 Gbps supporting SFP+ optical transceivers.
41. Implement SerDes equalization and pre-emphasis circuits compensating for PCB trace losses up to 20 dB at Nyquist frequency.
42. Design clock generation and distribution network using phase-locked loops (PLLs) providing low-jitter clocks for SerDes and digital logic.
43. Create IEEE 1588 PTP clock servo with hardware-based timestamp capture accuracy within 8 nanoseconds for time synchronization.
44. Implement link training and auto-negotiation state machines for 1GbE ports supporting speed/duplex detection and flow control advertisement.
45. Design forward error correction (FEC) for 10GbE links using Reed-Solomon encoding to improve bit error rate over optical fiber.
46. Create built-in self-test (BIST) engines for memory arrays including MBIST for SRAM and TCAM integrity verification during manufacturing.
47. Implement scan chain insertion for stuck-at fault testing with IEEE 1149.1 JTAG boundary scan for board-level diagnostics.
48. Design debug and trace interfaces including internal logic analyzer capturing packet headers and state machine transitions for silicon debug.
49. Create power management unit with dynamic voltage and frequency scaling (DVFS) adjusting operating points based on traffic load.
50. Implement power gating for unused port blocks reducing leakage current when ports are administratively disabled or unplugged.
51. Design temperature sensor with on-die thermal diode providing temperature monitoring for thermal management and overheat protection.
52. Create register interface with memory-mapped configuration space accessible via CPU interface for software-based management.
53. Implement interrupt controller generating PCIe interrupts for link state changes, packet arrival, buffer thresholds, and error conditions.
54. Design boot ROM storing initialization code and SerDes calibration parameters loaded during power-on sequence.
55. Create RTL coding in SystemVerilog following coding standards for synthesizability including synchronous design methodology and clock domain crossing protocols.
56. Implement parameterized design allowing configuration of port counts, buffer sizes, and table depths for product variants.
57. Create comprehensive testbench using UVM (Universal Verification Methodology) with constrained-random stimulus generation and functional coverage.
58. Develop reference models in C++ or SystemC predicting expected packet forwarding behavior for self-checking testbench comparison.
59. Implement protocol checkers verifying compliance with Ethernet, IPv4, IPv6, and switching protocol specifications during simulation.
60. Create functional coverage model ensuring all features including VLAN operations, routing, ACLs, and QoS are exercised in verification.
61. Perform block-level verification for each major subsystem including parser, lookup engines, buffer manager, and scheduler independently.
62. Execute chip-level integration testing with full packet flows from ingress through switching fabric to egress ports.
63. Run regression testing suite with thousands of directed and random test cases achieving 98% code coverage and 95% functional coverage.
64. Perform formal verification on critical control logic including buffer pointers, arbitration, and state machines to prove absence of deadlocks.
65. Conduct gate-level simulation with back-annotated timing to verify functionality with realistic delays and ensure no timing-related issues.
66. Execute power-aware simulation estimating switching activity and dynamic power consumption under representative traffic patterns.
67. Synthesize RTL code using Synopsys Design Compiler targeting 28nm CMOS standard cell library with low-power high-threshold voltage cells.
68. Apply synthesis constraints including 500 MHz target clock frequency for core logic and multi-cycle paths for slow control registers.
69. Optimize area by enabling resource sharing, retiming registers across combinational logic, and ungrouping hierarchies for better QoR.
70. Perform multi-corner multi-mode (MCMM) synthesis analyzing timing across process corners (SS, TT, FF) and voltage/temperature ranges.
71. Generate synthesized netlist with 8.5 million gate equivalents representing logic complexity of switching ASIC functionality.
72. Create clock tree synthesis specification defining 28 clock domains for core, SerDes, DDR interface, and asynchronous clock crossings.
73. Implement clock domain crossing (CDC) verification using Synopsys SpyGlass identifying potential metastability issues in asynchronous interfaces.
74. Perform lint checking and design rule verification ensuring coding style compliance and absence of simulation/synthesis mismatches.
75. Import synthesized netlist into Cadence Innovus physical design tool for place-and-route using 28nm process design kit (PDK).
76. Create floorplan for 15mm x 15mm die size with area allocation for digital logic, SRAM blocks, SerDes, and I/O ring.
77. Place hard macros including 12 MB SRAM buffers, TCAM arrays, and SerDes lanes in optimal locations minimizing interconnect distance.
78. Define power grid structure with multiple VDD/VSS mesh layers using top metal layers for low-resistance distribution across entire die.
79. Create power domains for core logic (0.9V), I/O (1.8V), and SerDes (1.0V analog) with level shifters at domain boundaries.
80. Place standard cells using timing-driven placement algorithm minimizing wirelength for critical paths and balancing cell density.
81. Optimize placement for 75% average utilization providing sufficient routing resources while minimizing die area and cost.
82. Perform clock tree synthesis building balanced distribution networks achieving 50 picosecond maximum skew across 500 MHz clock domain.
83. Insert clock gating cells reducing dynamic power by disabling clocks to idle logic blocks saving estimated 30% switching power.
84. Route global nets including clocks, resets, and scan chains using dedicated routing resources and shielding for noise immunity.
85. Execute detailed routing using seven copper metal layers with M1-M4 for signal routing and M5-M7 for power distribution.
86. Apply advanced routing techniques including double via insertion, non-default routing rules for critical nets, and antenna diode insertion.
87. Optimize routing congestion in high-density regions by cell spreading, buffer insertion, and metal layer assignment adjustments.
88. Perform timing optimization adding buffers and upsizing gates on critical paths to meet 500 MHz setup and hold requirements.
89. Conduct static timing analysis using Synopsys PrimeTime across all process corners verifying positive slack on all 2.8 million timing paths.
90. Analyze clock domain crossings verifying proper synchronizer insertion and metastability MTBF exceeding 1000 years of operation.
91. Perform IR drop analysis ensuring voltage drop across power grid remains below 50 millivolts preventing timing degradation.
92. Execute electromigration (EM) analysis verifying metal interconnect current density below 1 mA/micron to ensure 10-year device lifetime.
93. Conduct signal integrity analysis checking crosstalk noise on critical nets and ensuring victim nets maintain adequate noise margins.
94. Perform power analysis estimating 16.5 watts typical power consumption at 500 MHz with realistic switching activity factors.
95. Run design rule checking (DRC) verifying compliance with 28nm foundry rules including minimum spacing, width, and enclosure requirements.
96. Execute layout versus schematic (LVS) checking confirming physical layout matches synthesized netlist with all connections verified.
97. Perform antenna rule checking preventing gate oxide damage during plasma etching by inserting protection diodes where needed.
98. Conduct optical proximity correction (OPC) preparing layout for lithography distortion compensation improving pattern fidelity.
99. Generate GDSII database containing final physical layout with 34 mask layers representing transistors, interconnects, and vias.
100. Create manufacturing test patterns including scan chains, memory BIST, and boundary scan for post-fabrication testing.
101. Develop automated test pattern generation (ATPG) creating test vectors achieving 98.5% stuck-at fault coverage and 95% transition coverage.
102. Implement design-for-test (DFT) structures including scan insertion with 450 scan chains each containing 12,000 flip-flops.
103. Create production test program defining test sequences, voltage/frequency conditions, and pass/fail criteria for wafer and package testing.
104. Generate timing models in Liberty format (.lib files) characterizing cell delays for downstream physical design of customer boards.
105. Create behavioral simulation models in Verilog for fast system-level simulation of switching ASIC in complete switch design.
106. Develop hardware abstraction layer (HAL) software providing register-level API for switch management software and SDK.
107. Ship GDSII database and process specifications to TSMC foundry for 28nm CMOS wafer fabrication starting with 300mm silicon wafers.
108. Clean incoming silicon wafers using RCA process with sulfuric acid/hydrogen peroxide followed by hydrofluoric acid removing native oxide.
109. Grow 10nm thermal gate oxide in oxygen atmosphere at 900 degrees Celsius providing high-quality insulator for transistor gates.
110. Deposit 100nm polysilicon gate electrode using low-pressure chemical vapor deposition (LPCVD) at 620 degrees Celsius.
111. Pattern polysilicon gates using deep-ultraviolet (DUV) lithography at 193nm wavelength with optical proximity correction for critical dimensions.
112. Etch polysilicon using reactive ion etching with chlorine chemistry achieving 28nm gate length critical dimension control within 2nm tolerance.
113. Implant n-type source/drain regions with phosphorus and arsenic ions at energies 5-50 keV forming shallow junctions for NMOS transistors.
114. Implant p-type source/drain regions with boron ions creating PMOS transistors in n-well regions for complementary CMOS logic.
115. Perform rapid thermal annealing (RTA) at 1050 degrees Celsius for 5 seconds activating dopants while minimizing diffusion.
116. Grow 5nm sacrificial oxide and deposit 80nm silicon nitride forming sidewall spacers through anisotropic etching defining extension regions.
117. Perform halo implants with tilted angles creating asymmetric doping profiles that reduce short-channel effects in 28nm transistors.
118. Silicide source/drain contacts using nickel silicide (NiSi) self-aligned process achieving low contact resistance below 5 ohm-micrometer.
119. Deposit 500nm pre-metal dielectric (PMD) using high-density plasma oxide providing planarized surface for first metal layer.
120. Create tungsten contact plugs using chemical mechanical polishing (CMP) connecting silicided transistor terminals to metal interconnects.
121. Deposit 300nm copper metal layer M1 using electroplating into damascene trenches patterned by dual-damascene lithography process.
122. Pattern M1 metal using 193nm immersion lithography with resolution enhancement techniques achieving 70nm minimum pitch.
123. Etch via openings and metal trenches simultaneously in dual-damascene process reducing process steps and improving alignment.
124. Deposit tantalum/tantalum nitride (Ta/TaN) barrier preventing copper diffusion into surrounding dielectric maintaining device reliability.
125. Electroplate copper filling trenches and vias using acid copper sulfate electrolyte with additives controlling grain structure.
126. Polish copper using CMP with slurry containing alumina abrasives removing overburden and achieving 5nm surface roughness.
127. Deposit 50nm silicon carbide (SiC) etch stop layer providing selectivity for via etching in subsequent metal layers.
128. Deposit 400nm low-k dielectric (k=2.7) inter-metal dielectric using carbon-doped oxide reducing parasitic capacitance between metal layers.
129. Repeat dual-damascene process for metal layers M2 through M4 with increasing thickness (300nm to 450nm) for higher current capacity.
130. Create thick metal layers M5-M7 (800nm to 2000nm thickness) for power distribution using wider design rules and relaxed pitch.
131. Fabricate MIM (metal-insulator-metal) capacitors between metal layers providing 2 fF/square-micron decoupling capacitance density.
132. Deposit final passivation layers including silicon nitride and polyimide protecting chip surface from moisture and mechanical damage.
133. Open bond pad windows in passivation using plasma etching exposing aluminum pads for wire bonding.
134. Apply 3-micron thick aluminum pad metallization with titanium barrier ensuring reliable wire bond adhesion and electrical contact.
135. Deposit anti-reflective coating (ARC) reducing light interference during final optical inspection of completed wafers.
136. Perform wafer-level electrical testing using automated probe equipment contacting test pads and executing manufacturing test program.
137. Test core digital logic functionality through scan chain shifting applying ATPG patterns and comparing captured responses.
138. Execute memory BIST patterns verifying 12 MB SRAM buffer integrity testing all address locations with march algorithms.
139. Test SerDes functionality at reduced speed using DC parametric tests and basic loopback verification at wafer probe.
140. Measure leakage current at standby voltage verifying IMOS specifications below 500 milliamps indicating no shorts or process defects.
141. Test functionality at multiple voltage corners (0.81V, 0.9V, 0.99V) and temperature (25C) ensuring robust operation across process variation.
142. Map failing die locations using automated test equipment (ATE) achieving 75% wafer yield with defect density 0.3 defects/square-centimeter.
143. Mark passing die with ink dots and create wafer map database for die picking during package assembly.
144. Thin wafer backside using grinding reducing thickness from 775 microns to 250 microns for flip-chip package compatibility.
145. Mount thinned wafer on dicing tape stretched over metal frame providing support during singulation process.
146. Dice wafer using diamond blade saw cutting along scribe lines separating individual 15mm x 15mm die.
147. Inspect die edges under microscope verifying no chipping or cracks that could compromise reliability.
148. Pick known-good die (KGD) from dicing tape using vacuum collet based on wafer map placing into waffle pack carriers.
149. Receive package substrates manufactured separately with buildup layers providing routing between die and BGA balls.
150. Inspect package substrate using automated optical inspection (AOI) verifying trace continuity and absence of shorts.
151. Apply flux to substrate die attach area promoting adhesion and wetting during thermal compression bonding.
152. Place ASIC die face-down on substrate using flip-chip bonding aligning 1,200 copper pillar bumps with substrate pads.
153. Perform thermal compression bonding at 260 degrees Celsius with 5 MPa pressure creating metallurgical bonds between bumps and pads.
154. Underfill gap between die and substrate with epoxy resin using capillary action preventing stress concentration and improving reliability.
155. Cure underfill epoxy at 165 degrees Celsius for 90 minutes achieving full cross-linking and mechanical rigidity.
156. Attach heat spreader lid to die backside using thermal interface material (TIM) providing thermal path for heat dissipation.
157. Attach BGA balls to substrate bottom side using solder ball placement and reflow creating 676-ball array with 1.0mm pitch.
158. Reflow BGA balls at 250 degrees Celsius peak temperature using nitrogen atmosphere preventing oxidation and ensuring spherical ball shape.
159. Clean package removing flux residues using ultrasonic cleaning in deionized water with mild surfactants.
160. Perform X-ray inspection verifying BGA ball attachment quality and checking for voids exceeding 25% ball volume.
161. Bake packages at 125 degrees Celsius for 24 hours removing moisture absorbed during assembly preventing popcorn cracking.
162. Program device identification and serialization into one-time programmable (OTP) fuses creating unique device IDs.
163. Execute final test on packaged devices using automated test equipment at full operating frequency and voltage.
164. Test all SerDes channels at full 1.25 Gbps and 10.3125 Gbps data rates using PRBS31 patterns measuring bit error rates.
165. Verify packet forwarding functionality sending test frames through all ports and checking forwarding latency below 1.5 microseconds.
166. Test MAC address learning and aging by transmitting frames with various source MACs and verifying table updates.
167. Verify VLAN tagging inserting 802.1Q headers and checking correct VLAN ID propagation through switching fabric.
168. Test QoS functionality sending mixed priority traffic and verifying strict priority and WRR scheduling behavior.
169. Verify ACL filtering programming rules and sending matching/non-matching packets confirming permit/deny actions.
170. Test multicast replication transmitting IGMP join messages and verifying packet duplication to multicast group members.
171. Verify link aggregation configuring LAG groups and confirming load balancing across member ports.
172. Test flow control sending pause frames and verifying transmit pausing behavior prevents buffer overflow.
173. Verify jumbo frame support transmitting 9,000-byte frames and confirming successful switching without fragmentation.
174. Test PTP timestamping comparing hardware timestamps against reference clock verifying accuracy within 10 nanoseconds.
175. Measure power consumption at various traffic loads confirming typical power below 18 watts at full line-rate forwarding.
176. Test thermal performance running sustained traffic and monitoring die temperature remains below 85 degrees Celsius junction temperature.
177. Perform AC timing characterization measuring setup and hold margins across voltage and temperature corners.
178. Execute burn-in testing at 125 degrees Celsius junction temperature for 48 hours identifying early-life failures.
179. Conduct high-temperature operating life (HTOL) stress testing on sample units at 125C for 1000 hours verifying reliability.
180. Perform temperature cycling between -40C and 125C for 500 cycles checking for solder joint failures or die cracking.
181. Execute highly accelerated stress test (HAST) at 130C/85% RH for 96 hours verifying moisture resistance.
182. Test electrostatic discharge (ESD) robustness applying Human Body Model (HBM) pulses up to 2000V on all pins.
183. Bin devices based on maximum operating frequency separating parts rated for 400 MHz, 450 MHz, and 500 MHz operation.
184. Laser mark package top surface with part number, date code, lot code, and country of origin for traceability.
185. Perform final visual inspection checking for package damage, marking legibility, and ball coplanarity within 100 microns.
186. Program manufacturing traceability data into non-volatile memory including wafer lot, assembly site, and test date.
187. Package finished units in anti-static trays with moisture barrier bags and humidity indicator cards for shipping.
188. Generate test data reports documenting parametric measurements, functional test results, and quality metrics for each lot.
189. Perform outgoing quality assurance (OQA) sampling testing random units from each lot verifying continued compliance.
190. Create certificate of conformance documenting RoHS compliance, moisture sensitivity level (MSL-3), and quality standards.
191. Ship finished switching ASICs to switch manufacturers like Cisco, Arista, Juniper for integration into managed Ethernet switches.
192. Provide reference designs including schematics, PCB layout guidelines, and signal integrity simulation models.
193. Deliver software development kit (SDK) with driver code, configuration utilities, and API documentation for switch operating systems.
194. Offer technical support including applications engineering assistance for customer board design and system integration.
195. Monitor field returns analyzing failure modes and implementing continuous improvement to manufacturing process and design.
