---
title: "Network Interface Card"
company: "Mellanox Technologies"
country: "Israel"
selling_price: 450.00
inputs:
  - name: "Multilayer PCB"
    cost: 40.00
    link: "multilayer-pcb"
  - name: "Ethernet PHY"
    cost: 60.00
    link: "ethernet-phy"
  - name: "DRAM Chip"
    cost: 20.00
    link: "dram-chip"
  - name: "SMT Equipment"
    cost: 30.00
    link: "smt-equipment"
  - name: "Board Connectors"
    cost: 25.00
    link: "board-connectors"
value_created: 275.00
---

1. Receive multilayer PCB substrates with 10-layer construction and impedance-controlled traces for high-speed differential signaling.
2. Inspect PCB surface for defects using automated optical inspection (AOI) at 20-micron resolution.
3. Verify PCB thickness at 1.6mm with tolerance of plus/minus 0.1mm across the board surface.
4. Check trace impedance on critical signal paths targeting 85-ohm differential pairs for 25GbE lanes.
5. Clean PCB surfaces with isopropyl alcohol solution to remove oxidation and handling residues.
6. Apply solder paste to component pads using stencil printer with 4-mil aperture stencils.
7. Verify solder paste thickness at 125 microns using laser-based solder paste inspection (SPI) system.
8. Load PCB onto SMT line conveyor system with board support fixtures to prevent warping.
9. Place network controller ASIC at board center using high-precision pick-and-place equipment with 10-micron accuracy.
10. Position ASIC with 1156-pin ball grid array (BGA) package measuring 42.5mm x 42.5mm.
11. Verify ASIC placement using vision system checking X-Y position within 25-micron tolerance.
12. Place Ethernet PHY chips near board edge for direct connection to SFP28/QSFP28 cage assemblies.
13. Mount two 4GB DDR4-2666 DRAM chips adjacent to network controller for packet buffer memory.
14. Position DRAM chips with 78-ball FBGA packages ensuring proper orientation for address/data routing.
15. Place PCIe Gen4 x16 edge connector components including shield contacts and retention brackets.
16. Mount power management ICs including multi-phase buck converters for ASIC core voltage regulation.
17. Position voltage regulator controllers targeting 0.85V core voltage with 50A current capability.
18. Place series termination resistors on high-speed differential pairs measuring 49.9-ohm 0402 packages.
19. Mount AC coupling capacitors on Ethernet SerDes lanes using 0.1uF 0201 packages rated for 50V.
20. Position pull-up and pull-down resistors for PCIe configuration strapping pins at board edge.
21. Place oscillator module providing 156.25MHz reference clock for 25GbE SerDes operation.
22. Mount temperature sensor IC near ASIC for thermal monitoring and fan control feedback.
23. Position EEPROM chip for MAC address storage and firmware boot configuration data.
24. Place I2C bus buffer ICs for communication with pluggable optics modules and system management.
25. Mount LED driver chips to control status indicators for link activity and speed indication.
26. Position current sense resistors on power rails for telemetry and power consumption monitoring.
27. Place bypass capacitors adjacent to ASIC power pins including 470uF, 10uF, 1uF, and 0.1uF values.
28. Mount ferrite bead inductors on power supply lines for high-frequency noise filtering.
29. Position ESD protection diodes on all external-facing signal connections and connector pins.
30. Place SFP28/QSFP28 cage assemblies with integrated EMI shielding and heat dissipation features.
31. Verify all component placements using post-placement AOI system checking rotation and position.
32. Transport PCB assembly through reflow oven with seven temperature zones spanning 4.5 meters.
33. Preheat PCB to 150C over 90 seconds to activate flux and begin solder paste melting.
34. Ramp temperature to 183C soak zone maintaining thermal equilibrium across board mass.
35. Increase temperature to 245C peak reflow for 60 seconds ensuring complete solder joint formation.
36. Cool assembly at controlled rate of 3C per second to prevent thermal shock and joint cracking.
37. Extract reflowed PCB from oven and allow ambient cooling to below 40C before handling.
38. Inspect solder joints using automated X-ray inspection (AXI) system with laminography capability.
39. Verify BGA void percentage below 25% on ASIC package and below 15% on memory chips.
40. Check for solder bridges on fine-pitch components at 0.4mm pad spacing on controller ASIC.
41. Inspect tombstoning defects on small passive components due to uneven heating or placement issues.
42. Review X-ray images for insufficient solder on high-current power pins requiring robust mechanical connection.
43. Route defective boards to rework station for component removal using hot air and IR heating.
44. Clean flux residues from PCB surface using aqueous wash system with deionized water and saponifiers.
45. Dry PCB in forced-air oven at 80C for 15 minutes removing moisture from under components.
46. Apply thermal interface material to ASIC top surface using automated dispenser with 0.2mm layer thickness.
47. Position aluminum heatsink assembly with copper base plate and nickel-plated finish over ASIC package.
48. Secure heatsink using four spring-loaded screws providing even pressure distribution across die area.
49. Torque heatsink screws to 6 inch-pounds in cross-pattern sequence ensuring co-planar mounting.
50. Install metal retention bracket for PCIe edge connector providing mechanical support during insertion.
51. Attach low-profile bracket for standard PCIe slot installation in 2U and higher server chassis.
52. Mount full-height bracket option for tower servers and workstation installations requiring different form factors.
53. Apply conformal coating to PCB bottom side protecting against humidity and corrosive environments in datacenters.
54. Cure conformal coating using UV exposure for 45 seconds achieving tack-free surface finish.
55. Program EEPROM with unique MAC address range allocated to manufacturer by IEEE registration authority.
56. Write firmware image to onboard flash memory using JTAG programming interface and boundary scan.
57. Load base firmware version supporting PCIe initialization, memory training, and SerDes calibration routines.
58. Program device identification strings including vendor ID, device ID, subsystem ID, and revision codes.
59. Write manufacturing test firmware enabling loopback modes and diagnostic register access for validation.
60. Install PCB assembly into functional test fixture with PCIe Gen4 x16 connection to test server.
61. Power on NIC through fixture providing 12V and 3.3V auxiliary power per PCIe specification requirements.
62. Verify PCIe enumeration at Gen4 speed using 16 lanes achieving 31.5GB/s bidirectional bandwidth.
63. Check PCIe link training status confirming successful completion of Gen1, Gen2, Gen3, and Gen4 speeds.
64. Read device configuration space registers verifying correct PCI vendor/device IDs and capability pointers.
65. Test PCIe memory-mapped I/O access latency measuring sub-microsecond register read response times.
66. Verify PCIe Message Signaled Interrupts (MSI-X) functionality with 64 interrupt vector allocation.
67. Insert SFP28 loopback module into port 0 cage providing TX-to-RX connection for self-test.
68. Configure port 0 for 25GbE operation with auto-negotiation disabled and forced speed setting.
69. Transmit test patterns including PRBS31 pseudo-random sequences at line rate for BER testing.
70. Verify received signal quality with bit error rate below 10^-12 indicating proper SerDes operation.
71. Check signal integrity measurements including eye diagram height above 150mV and width above 0.6 unit intervals.
72. Test forward error correction (FEC) functionality using RS-FEC encoding on 25GbE links reducing error rates.
73. Verify link layer credits and flow control mechanisms preventing packet drops under congestion conditions.
74. Insert QSFP28 loopback module into dual-port NIC models providing 100GbE 4x25G breakout testing.
75. Configure QSFP28 port for 100GbE operation aggregating four 25GbE lanes into single logical interface.
76. Test lane distribution and skew compensation ensuring all four lanes operate within 20-nanosecond alignment window.
77. Verify QSFP28 module identification using I2C reads of EEPROM containing SFF-8636 management data.
78. Test thermal management reading QSFP28 temperature sensors and implementing tx-disable on overtemperature conditions.
79. Configure maximum transmission unit (MTU) at 9000 bytes enabling jumbo frame support for storage protocols.
80. Transmit jumbo frames at line rate verifying proper packet segmentation and reassembly without corruption.
81. Test packet buffer memory capacity filling transmit and receive queues with maximum descriptor counts.
82. Verify DRAM memory training results checking timing margins on DDR4 interface exceeding specification minimums.
83. Test DRAM error correction code (ECC) functionality injecting single-bit errors and verifying correction.
84. Configure receive-side scaling (RSS) distributing incoming packets across multiple CPU cores using hash functions.
85. Test RSS hash distribution uniformity ensuring even load balancing across 16 receive queues.
86. Verify RSS indirection table programming allowing dynamic queue assignment changes during operation.
87. Configure virtual LANs (VLANs) inserting 802.1Q tags on transmit and filtering on receive paths.
88. Test VLAN priority code point (PCP) handling for quality of service (QoS) traffic classification.
89. Enable SR-IOV creating 64 virtual functions (VFs) for direct assignment to virtual machines.
90. Verify VF isolation ensuring packets directed to one VF cannot be observed by other VFs.
91. Test VF spoof checking preventing MAC address spoofing by validating source addresses against assignments.
92. Configure VF rate limiting implementing per-VF bandwidth controls at 1Gbps minimum and 25Gbps maximum.
93. Test VF migration support using live migration protocols transferring state between physical hosts.
94. Verify VF link state control allowing hypervisor to disable VF links for administrative purposes.
95. Enable Data Center Bridging (DCB) protocols including priority-based flow control (PFC) for lossless operation.
96. Configure eight traffic classes with bandwidth allocation and strict priority scheduling algorithms.
97. Test PFC pause frame generation and reception preventing packet drops on congested traffic classes.
98. Verify enhanced transmission selection (ETS) algorithm distributing bandwidth according to configured weights.
99. Enable Remote Direct Memory Access (RDMA) over Converged Ethernet (RoCE) v2 protocol support.
100. Configure RDMA queue pairs (QPs) establishing reliable connection transport types for storage traffic.
101. Test RDMA write operations achieving sub-5 microsecond latency for 4KB transfers within datacenter network.
102. Verify RDMA read operations with selective acknowledgment ensuring data consistency without CPU involvement.
103. Test RDMA send/receive operations supporting message-oriented communication patterns for MPI workloads.
104. Enable transport layer security (TLS) offload accelerating encrypted connections using on-NIC crypto engines.
105. Verify TLS 1.3 handshake offload reducing CPU utilization during connection establishment phases.
106. Test symmetric cipher operations including AES-GCM-256 achieving line-rate encryption throughput at 25Gbps.
107. Configure IPsec offload for VPN acceleration supporting both tunnel and transport mode operations.
108. Verify IPsec ESP packet processing with authentication using HMAC-SHA256 and encryption using AES-CBC.
109. Test tunnel overlay protocols including VXLAN encapsulation and decapsulation at hardware acceleration rates.
110. Configure Geneve tunnel format supporting extended metadata fields for network virtualization platforms.
111. Verify tunnel checksum offload calculating outer and inner packet checksums without CPU involvement.
112. Test stateless offloads including TCP checksum calculation, UDP checksum, and IP header checksum generation.
113. Verify large send offload (LSO) segmenting packets up to 64KB into MTU-sized frames reducing CPU overhead.
114. Test large receive offload (LRO) coalescing received packets into larger buffers before delivery to host.
115. Configure receive packet steering directing flows to specific CPU cores based on application affinity requirements.
116. Verify timestamp insertion on transmit packets supporting IEEE 1588 Precision Time Protocol (PTP) synchronization.
117. Test PTP hardware timestamping achieving sub-microsecond time synchronization accuracy across datacenter infrastructure.
118. Configure link aggregation (LACP) bonding multiple ports into single logical interface for redundancy.
119. Test active-backup failover modes ensuring sub-second convergence times during link failure events.
120. Verify transmit load balancing across bonded interfaces using layer 3+4 hash distribution algorithms.
121. Enable packet capture capabilities directing mirrored traffic to monitoring tools for network diagnostics.
122. Test flow steering rules using hardware flow director matching packet headers and directing to specific queues.
123. Configure perfect match filters supporting 8192 simultaneous rules for connection-specific processing paths.
124. Verify application device queues (ADQ) dedicating hardware resources to specific application workloads.
125. Test geneve offload combined with overlay network processing for containerized application deployments.
126. Enable MPLS label processing supporting software-defined WAN deployments in edge computing environments.
127. Verify multicast packet replication distributing packets to multiple receive queues simultaneously.
128. Test broadcast storm control rate-limiting broadcast packets to prevent network congestion conditions.
129. Configure Wake-on-LAN functionality enabling remote system power-on through magic packet reception.
130. Verify NIC partitioning creating multiple independent physical functions for multi-tenant server deployments.
131. Test adaptive interrupt moderation dynamically adjusting interrupt rates based on traffic patterns and latency requirements.
132. Configure interrupt coalescing parameters balancing CPU utilization against packet processing latency constraints.
133. Verify MSI-X affinity binding interrupts to specific CPU cores matching application thread placement.
134. Test power management states including D0 (active), D3hot (sleep), and D3cold (off) transitions.
135. Enable PCIe Active State Power Management (ASPM) L1 state reducing power consumption during idle periods.
136. Verify dynamic voltage and frequency scaling (DVFS) reducing ASIC power draw during low traffic conditions.
137. Test thermal throttling mechanisms reducing link speed from 25GbE to 10GbE under sustained thermal stress.
138. Configure fan speed control using PWM signals derived from on-NIC temperature sensor readings.
139. Verify firmware update procedures using in-band update mechanisms without requiring system reboot.
140. Test firmware rollback capability restoring previous version after failed update or compatibility issues.
141. Enable secure boot functionality validating firmware signatures using embedded cryptographic keys.
142. Verify firmware crash dump collection capturing diagnostic information for post-mortem failure analysis.
143. Test hardware health monitoring including voltage rail monitoring and current consumption telemetry reporting.
144. Configure LED indicators showing link status, speed indication, and activity patterns for visual diagnostics.
145. Verify SFP28 module digital diagnostics reading temperature, voltage, TX power, and RX power parameters.
146. Test optical module alarm thresholds triggering warnings on degraded signal quality or power levels.
147. Enable cable diagnostics detecting and reporting cable length, impedance mismatches, and fault locations.
148. Verify link flap detection counting rapid up/down transitions indicating physical layer instability.
149. Test error counters including CRC errors, symbol errors, and alignment errors for link quality assessment.
150. Configure packet drop counters separating hardware drops from software drops for troubleshooting analysis.
151. Verify queue depth monitoring tracking buffer utilization across transmit and receive descriptor rings.
152. Test DMA engine performance measuring memory bandwidth utilization during sustained packet transfers.
153. Configure interrupt storm protection preventing excessive interrupt generation from overwhelming host CPU.
154. Verify buffer management algorithms preventing head-of-line blocking in multi-queue architectures.
155. Test quality of service (QoS) enforcement verifying bandwidth limits and priority scheduling under congestion.
156. Enable network boot functionality supporting PXE boot and iSCSI boot for diskless server deployments.
157. Verify option ROM execution during BIOS post providing boot services before OS driver loading.
158. Test UEFI driver integration supporting modern boot architectures and secure boot requirements.
159. Configure static MAC address assignment overriding factory-programmed address for network administration purposes.
160. Verify MAC address filtering implementing allowlist or denylist rules at hardware level.
161. Test promiscuous mode operation receiving all packets regardless of destination MAC address.
162. Enable NCSI interface supporting out-of-band management connectivity through shared NIC port.
163. Verify RMII/RGMII sideband interface connecting to baseboard management controller (BMC) for remote management.
164. Test virtual console redirection through NIC supporting remote server management and troubleshooting.
165. Configure firmware-based management agent responding to inventory queries and configuration requests.
166. Verify SNMP MIB support reporting interface statistics and configuration through network management systems.
167. Test Redfish API integration enabling RESTful management interface for modern datacenter orchestration.
168. Enable attestation mechanisms providing cryptographic proof of firmware version and configuration state.
169. Verify supply chain security features validating component authenticity using hardware root of trust.
170. Test side-channel attack mitigations including constant-time cryptographic implementations in firmware.
171. Configure ingress packet rate limiting preventing denial-of-service attacks saturating network resources.
172. Verify egress shaping enforcing traffic policing policies at line rate without CPU intervention.
173. Test access control lists (ACLs) filtering packets based on layer 2/3/4 header fields in hardware.
174. Enable MACsec 802.1AE link-layer encryption providing hop-by-hop security between trusted network devices.
175. Verify MACsec key rotation procedures implementing periodic rekeying without traffic interruption.
176. Test packet buffer memory stress conditions filling queues to capacity and verifying graceful degradation.
177. Configure back-pressure mechanisms signaling congestion to upstream devices through pause frame generation.
178. Verify priority flow control interoperability with switches supporting data center bridging protocols.
179. Test cable diagnostics on copper connections detecting opens, shorts, and impedance mismatches.
180. Enable port mirroring directing copies of traffic to monitoring ports for intrusion detection systems.
181. Verify sampling mechanisms capturing statistical traffic samples for network telemetry and analytics platforms.
182. Test performance monitoring counters tracking bytes, packets, errors, and discards per interface and queue.
183. Configure burst absorption capabilities handling traffic microbursts without packet loss up to buffer capacity limits.
184. Verify clock recovery circuits maintaining bit synchronization during extended runs of identical bits.
185. Test signal equalization adapting to cable losses on longer copper connections at 25GbE speeds.
186. Remove NIC from test fixture after successful completion of all functional validation sequences.
187. Apply serialized asset label with barcode containing manufacturing date, lot number, and unit identifier.
188. Package NIC in anti-static bag with desiccant packet protecting against humidity during storage and shipment.
189. Include driver installation media containing Windows, Linux, VMware ESXi, and FreeBSD driver packages.
190. Pack installation documentation covering hardware installation, driver installation, and configuration procedures.
191. Add low-profile bracket accessory for installation in compact 1U server chassis configurations.
192. Include SFP28 to SFP28 DAC cable sample demonstrating direct-attach copper connectivity option.
193. Place packaged NIC into carton with foam inserts preventing mechanical damage during transportation.
194. Seal carton with tamper-evident tape indicating unauthorized opening or product substitution attempts.
195. Store completed units in climate-controlled warehouse maintaining 20C temperature and 45% relative humidity until shipment.
