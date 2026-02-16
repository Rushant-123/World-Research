---
title: "Network ASIC"
company: "Broadcom"
country: "United States"
selling_price: 500.00
inputs:
  - name: "Silicon Wafer"
    cost: 50.00
    link: "silicon-wafer"
  - name: "Photomask Set"
    cost: 80.00
    link: "photomask-set"
  - name: "Package Substrate"
    cost: 40.00
    link: "package-substrate"
  - name: "Bond Wire"
    cost: 10.00
    link: "bond-wire"
  - name: "Molding Compound"
    cost: 5.00
    link: "molding-compound"
value_created: 315.00
---

1. Define network ASIC architecture requirements with target 12.8 Tbps switching capacity for high-end datacenter applications.
2. Specify 64 ports of 200G SerDes lanes with PAM4 modulation for maximum bandwidth density.
3. Design packet processing pipeline supporting 5-stage ingress and 5-stage egress pipeline architecture.
4. Allocate 32 MB on-chip SRAM for packet buffering with 25 ns access latency.
5. Integrate 4 MB ternary content-addressable memory (TCAM) for ACL and routing table lookups.
6. Design 256-bit wide packet parser capable of identifying 128 different protocol headers.
7. Specify traffic manager supporting 16K queues with hierarchical QoS scheduling.
8. Create forwarding engine with 1 million MAC address table capacity.
9. Design 512K IPv4 routing table entries with longest prefix match acceleration.
10. Integrate 128K IPv6 routing table entries with compressed trie data structure.
11. Specify multicast replication engine supporting 64K groups with 256 replicas per group.
12. Design load balancing engine with ECMP supporting 128-way equal cost paths.
13. Create access control engine processing 8K ACL rules with priority-based matching.
14. Integrate telemetry engine with INT (In-band Network Telemetry) support for flow monitoring.
15. Design congestion management with ECN marking and RED/WRED queue algorithms.
16. Specify power management with dynamic voltage and frequency scaling for 150W TDP target.
17. Create RTL architecture in SystemVerilog with 45 million logic gates estimated.
18. Design clock distribution network with 156.25 MHz reference and 1.5 GHz core frequency.
19. Implement SerDes PHY blocks with 56 Gbps PAM4 signaling per lane.
20. Create PLL circuits generating 64 phase-locked clock domains for SerDes channels.
21. Design high-speed serializer circuits with 8-bit to 1-bit parallel-to-serial conversion.
22. Implement deserializer circuits with CDR (clock data recovery) for each receive lane.
23. Create equalizer circuits with FFE and DFE for signal integrity across PCB traces.
24. Design FEC (forward error correction) engines using RS(544,514) code for error resilience.
25. Implement link training state machines for auto-negotiation and adaptation.
26. Create PRBS generators for built-in self-test of SerDes channels at full rate.
27. Design ingress packet buffer with 64 KB per port using flip-flop based SRAM.
28. Implement cut-through switching logic with 200 ns store-and-forward fallback.
29. Create header extraction logic parsing L2/L3/L4 headers in 3 clock cycles.
30. Design hash function generators using CRC32 polynomial for load balancing.
31. Implement TCAM search engine completing lookups in 5 ns per query.
32. Create priority encoder circuits for selecting highest priority ACL match.
33. Design range checker circuits for L4 port range matching in ACL rules.
34. Implement metering circuits with dual-token bucket algorithm for rate limiting.
35. Create statistics counters with 64-bit width preventing overflow for long-term monitoring.
36. Design timestamp insertion logic with IEEE 1588v2 PTP precision.
37. Implement VLAN tag manipulation supporting Q-in-Q double tagging operations.
38. Create MPLS label stack processing supporting 8-deep label hierarchies.
39. Design VxLAN encapsulation/decapsulation for network virtualization overlays.
40. Implement tunnel processing for GRE, IPinIP, and GENEVE protocols.
41. Create NAT translation tables supporting 128K simultaneous sessions.
42. Design IPsec processing offload with AES-256-GCM encryption at line rate.
43. Implement MACsec encryption with 128-bit and 256-bit key lengths.
44. Create egress traffic shaper with 1 Gbps minimum guaranteed rate granularity.
45. Design DWRR (Deficit Weighted Round Robin) scheduler for fair queueing.
46. Implement strict priority scheduler for low-latency traffic classes.
47. Create DCQCN congestion control for RDMA over Converged Ethernet.
48. Design PFC (Priority Flow Control) generation and response mechanisms.
49. Implement buffer occupancy monitors triggering flow control at 80% threshold.
50. Create credit-based flow control for lossless Ethernet operation.
51. Design packet rewrite engine modifying 256 bytes of header per packet.
52. Implement checksum recalculation for modified IP and TCP/UDP headers.
53. Create TTL decrement logic with exception handling for expired packets.
54. Design mirroring engine replicating packets to monitoring ports at 10 Gbps.
55. Implement sFlow sampling with configurable 1-in-N packet sampling rates.
56. Create DMA engines for CPU packet injection and reception at 40 Gbps.
57. Design embedded processor subsystem with quad-core ARM Cortex-A72 at 2 GHz.
58. Implement 2 GB DDR4 memory interface for external packet buffering.
59. Create PCIe Gen4 x16 interface for host communication at 32 GB/s.
60. Design management interface with MDIO, I2C, and SPI peripheral controllers.
61. Complete RTL coding with 2.8 million lines of SystemVerilog across 450 modules.
62. Run RTL simulation with 50 billion cycle testbench covering standard protocols.
63. Verify forwarding correctness with 10K test vectors across all pipeline stages.
64. Execute power analysis estimating 140W typical operation at full traffic load.
65. Perform logic synthesis targeting 5nm FinFET process technology node.
66. Optimize timing paths to achieve 1.5 GHz frequency with 15% timing margin.
67. Reduce gate count to 42 million cells through aggressive optimization.
68. Partition design into 16 physical hierarchies for parallel placement.
69. Run floorplanning creating 24mm x 24mm die size layout.
70. Place SRAM compiler macros in center regions minimizing wire lengths.
71. Position SerDes blocks on die periphery with dedicated power domains.
72. Allocate TCAM arrays near packet processing engine reducing lookup latency.
73. Create power grid with 0.75V core supply and 0.9V I/O supply rails.
74. Design 12-layer metal stack with top layers for global routing.
75. Route clock distribution using H-tree topology with buffer insertion.
76. Implement clock gating cells reducing dynamic power by 30%.
77. Create power domains with retention registers for state preservation.
78. Route signal paths with 1000 iterations achieving 99.7% routing completion.
79. Insert 850K buffer cells for long-distance signal integrity.
80. Add 1.2 million decoupling capacitors for power supply stabilization.
81. Run DRC (design rule check) verifying 2.4 billion polygon compliance.
82. Execute LVS (layout versus schematic) with 42 million device cross-reference.
83. Perform antenna rule checking preventing oxide damage during fabrication.
84. Run electrical rule checking verifying power/ground connectivity.
85. Extract parasitic resistance and capacitance from layout geometries.
86. Re-simulate timing with extracted parasitics confirming 1.5 GHz operation.
87. Generate 68 reticle layers for photomask set fabrication.
88. Perform OPC (optical proximity correction) on critical dimension features.
89. Add SRAF (sub-resolution assist features) improving lithography resolution.
90. Generate GDSII stream file containing 18 GB of layout data.
91. Run final verification with 72-hour compute farm simulation.
92. Complete tape-out sending design to foundry for mask fabrication.
93. Fabricate chrome-on-quartz photomasks with 193nm ArF immersion lithography.
94. Receive 300mm silicon wafers with <100> crystal orientation.
95. Clean wafer surfaces using RCA process removing organic and metallic contaminants.
96. Grow 5nm thermal oxide as pad layer for stress relief.
97. Deposit 150nm silicon nitride as hard mask using LPCVD.
98. Spin coat 90nm EUV photoresist for first patterning layer.
99. Perform EUV lithography at 13.5nm wavelength with 0.33 NA optics.
100. Develop resist creating 18nm minimum feature patterns.
101. Etch silicon nitride using CF4/CHF3 plasma with 50:1 selectivity.
102. Strip photoresist using O2 plasma ash followed by wet clean.
103. Implant p-well regions with boron at 180 keV and 3e13 atoms/cm2 dose.
104. Implant n-well regions with phosphorus at 320 keV and 4e13 atoms/cm2 dose.
105. Perform well drive-in anneal at 1000C for 30 minutes activating dopants.
106. Grow 0.8nm gate oxide using rapid thermal oxidation at 950C.
107. Deposit 50nm TiN metal gate using ALD for work function tuning.
108. Pattern gate electrodes with multi-patterning creating 18nm gate lengths.
109. Etch high-k dielectric and metal gate stack with chlorine-based plasma.
110. Implant source/drain extension regions with arsenic at 1 keV for NMOS.
111. Implant source/drain extensions with BF2 at 0.5 keV for PMOS.
112. Deposit 8nm silicon nitride spacer using conformal ALD.
113. Etch spacer anisotropically creating self-aligned source/drain masks.
114. Implant deep source/drain with arsenic at 15 keV and 5e15 atoms/cm2 for NMOS.
115. Implant deep source/drain with boron at 5 keV and 4e15 atoms/cm2 for PMOS.
116. Perform rapid thermal anneal at 1050C for 1 second activating dopants.
117. Deposit 400nm silicon dioxide using PECVD for pre-metal dielectric.
118. Planarize oxide using CMP achieving 2nm surface roughness.
119. Etch contact holes with 30nm diameter using reactive ion etching.
120. Deposit 5nm TiN barrier layer lining contact holes.
121. Fill contacts with tungsten using CVD with bottom-up fill profile.
122. Polish tungsten flush with oxide surface using CMP.
123. Deposit 200nm copper seed layer using PVD sputtering.
124. Pattern Metal 1 trenches with 24nm minimum pitch using dual damascene.
125. Electroplate copper filling trenches to 150nm thickness.
126. Anneal copper at 250C improving grain size and conductivity.
127. Polish copper and barrier layers using CMP exposing oxide surface.
128. Deposit 50nm low-k dielectric with k=2.5 for inter-metal dielectric.
129. Pattern via holes connecting Metal 1 to Metal 2 layer.
130. Repeat dual damascene process for Metal 2 through Metal 8 layers.
131. Create thicker Metal 9 through Metal 12 for power distribution with 300nm copper.
132. Deposit 1um silicon dioxide final passivation layer.
133. Pattern pad openings exposing aluminum bond pads.
134. Deposit 500nm aluminum pad metal using sputtering.
135. Pattern and etch aluminum pads creating 2048 I/O connections.
136. Deposit 2um polyimide protective overcoat.
137. Pattern polyimide openings above bond pads using laser ablation.
138. Perform final metallization inspection verifying pad planarity.
139. Execute wafer-level electrical test using automated probe station.
140. Test 128 dies per wafer with parallel testing reducing test time.
141. Measure SerDes eye diagrams confirming 56 Gbps signaling margins.
142. Verify JTAG scan chain integrity on all functional blocks.
143. Run BIST (built-in self-test) on SRAM and TCAM arrays detecting faults.
144. Measure supply current at 0.75V confirming <140W power consumption.
145. Test high-speed I/O buffers at 200G data rates per port.
146. Bin dies into speed grades based on maximum operating frequency.
147. Achieve 65% yield with Grade-1 dies meeting full 12.8 Tbps specification.
148. Apply wafer backgrind reducing thickness from 775um to 250um.
149. Mount wafer on adhesive tape for dicing operation.
150. Dice wafer using diamond blade creating 24mm x 24mm dies.
151. Inspect die edges for chipping damage using optical microscopy.
152. Transfer known-good dies to shipping gel-pak for assembly.
153. Receive multi-layer organic package substrate with 12 routing layers.
154. Inspect substrate with automated optical inspection detecting defects.
155. Apply flux to substrate die attach area.
156. Place die onto substrate using pick-and-place with 10um accuracy.
157. Cure die attach adhesive at 180C for 2 hours achieving 25 MPa bond strength.
158. Load substrate into wire bonding machine with dual-head capability.
159. Bond first wire from die pad to substrate using 25um gold wire.
160. Create wire bonds with 60 grams force and 200ms ultrasonic energy.
161. Complete 2048 wire bonds with 99.98% first-pass yield.
162. Inspect wire bonds using automated vision system detecting loop height variations.
163. Pre-heat substrate to 150C for molding preparation.
164. Inject epoxy molding compound at 175C and 8 MPa pressure.
165. Fill mold cavity encapsulating die and wires with 2mm compound thickness.
166. Cure molding compound at 175C for 180 seconds achieving full polymerization.
167. Remove excess mold flash using mechanical deflashing.
168. Laser mark package with part number and date code on top surface.
169. Trim and form package leads using progressive die stamping.
170. Singulate packages from substrate strip using precision sawing.
171. Bake packages at 125C for 24 hours removing moisture to <0.1% by weight.
172. Test packages in automated handler with thermal chamber at 85C.
173. Apply test vectors to all 64 ports simultaneously measuring throughput.
174. Verify packet forwarding at 12.8 Tbps aggregate bandwidth.
175. Test TCAM lookup performance achieving <5ns access time.
176. Measure packet buffer memory with error correction code validation.
177. Execute SerDes loopback tests at 56 Gbps per lane verifying BER <1e-15.
178. Test PCIe interface at Gen4 x16 speeds measuring 31.5 GB/s throughput.
179. Verify thermal performance with junction temperature <105C at full load.
180. Run accelerated life test on sample units at 125C for 1000 hours.
181. Perform package moisture sensitivity level testing qualifying MSL-3 rating.
182. Execute drop test simulating shipping impact qualifying to JEDEC standards.
183. Test electrical overstress protection on all I/O pins to 2 kV HBM.
184. Measure jitter on SerDes outputs confirming <200 fs RMS total jitter.
185. Validate PTP timestamp accuracy within 8ns of external reference.
186. Test power sequencing with 0.75V core ramping before 1.8V I/O.
187. Verify brownout protection circuitry at 0.68V threshold.
188. Program device-unique MAC addresses into one-time programmable fuses.
189. Load production firmware into embedded processor flash memory.
190. Execute final functional test verifying all features operational.
191. Program serialization data into secure EEPROM for supply chain tracking.
192. Perform final visual inspection detecting cosmetic defects.
193. Pack tested units into anti-static trays with 48 devices per tray.
194. Seal trays in moisture barrier bags with desiccant and humidity indicator.
195. Box finished Network ASICs for shipment to networking equipment manufacturers achieving 500 USD selling price per unit enabling high-performance datacenter switching infrastructure.
