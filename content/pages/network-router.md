---
title: "Network Router"
company: "Cisco, Juniper, Arista, Huawei"
country: "United States, China"
selling_price: 15000
inputs:
  - name: "Network ASIC Chip"
    cost: 3500
    link: "network-asic"
  - name: "DRAM Memory"
    cost: 800
    link: "dram-module"
  - name: "Flash Storage"
    cost: 400
    link: "nand-flash"
  - name: "Power Supply Unit"
    cost: 600
    link: "psu-unit"
  - name: "Optical Transceivers"
    cost: 4200
    link: "sfp-transceiver"
  - name: "Chassis & Cooling"
    cost: 1800
    link: "metal-chassis"
  - name: "PCB Assembly"
    cost: 2400
    link: "pcb-board"
  - name: "Router OS Software"
    cost: 1300
    link: "router-software"
value_created: 0
---

# How to Make a Network Router

An enterprise network router is a specialized computer that forwards data packets between networks based on IP addresses. Routers form the backbone of the Internet, making routing decisions using complex algorithms, maintaining routing tables with millions of entries, and processing packets at wire speed using custom silicon ASICs.

## What is it?

A high-performance packet forwarding device handling 100 Gbps to 400 Gbps per port, with 4-144 ports. Contains custom network processor ASICs that perform forwarding lookups in nanoseconds, TCAM (ternary content-addressable memory) for fast table lookups, and runs routing protocols like BGP, OSPF, and MPLS. Core routers move terabits per second of traffic.

## Steps to Make:

**Network ASIC Design:**
1. Design custom [Network ASIC Chip](network-asic) - the heart of the router
2. ASIC = Application-Specific Integrated Circuit optimized for packet processing
3. Contains packet parser, forwarding engine, traffic manager, scheduler
4. Built on 7nm or 5nm process node for power efficiency
5. Integrates 12-50 billion transistors
6. Packet parser extracts: source/destination IP, ports, protocol, VLAN tags
7. Forwarding engine performs longest-prefix match on destination IP
8. Uses TCAM (Ternary Content-Addressable Memory) for parallel lookups
9. TCAM searches entire routing table in single clock cycle (2-5 ns)
10. Traffic manager handles QoS (Quality of Service), packet buffering
11. Scheduler decides which packet to transmit next based on priority
12. ASIC processes packets at line rate: 100 Gbps = 148 million packets/second
13. Each packet processed in <100 nanoseconds
14. Examples: Broadcom Tomahawk, Cisco Silicon One, Innovium TERALYNX

**Memory Subsystem:**
15. Install [DRAM Memory](dram-module) for routing tables and packet buffers
16. Routing table stores: destination networks, next-hop routers, metrics
17. BGP routers need 16-64 GB RAM for full Internet routing table
18. Internet routing table has 950,000+ IPv4 prefixes, 180,000+ IPv6 prefixes
19. Each entry: IP prefix, subnet mask, next hop, AS path, metrics
20. Packet buffers temporarily store packets during congestion
21. Buffer size: 16-64 MB per port for 100G ports
22. Larger buffers reduce packet loss but increase latency
23. DDR4 memory at 2400-3200 MHz
24. ECC (Error-Correcting Code) memory to prevent data corruption

**Flash Storage:**
25. Install [Flash Storage](nand-flash) for router operating system and configuration
26. NOR flash (128-256 MB) stores bootloader and emergency OS
27. NAND flash (4-32 GB) stores full OS, logs, configurations
28. Router OS examples: Cisco IOS-XR, Juniper Junos, Arista EOS
29. Configuration files stored as text (CLI commands) or structured data
30. Firmware updates downloaded and installed to flash
31. Dual flash banks for failover: primary and backup OS images
32. Can boot from backup if primary corrupted

**Routing Table Construction:**
33. Install [Router OS Software](router-software) that builds routing tables
34. Three types of routing: static, dynamic, default
35. Static routes: manually configured by network engineer
36. Dynamic routing protocols automatically discover and share routes
37. OSPF (Open Shortest Path First) for intradomain routing
38. BGP (Border Gateway Protocol) for interdomain routing between ISPs
39. OSPF routers exchange link-state advertisements (LSAs)
40. Each router builds complete topology map of network
41. Runs Dijkstra's shortest-path algorithm to compute best routes
42. OSPF converges in seconds after topology change
43. BGP routers exchange path vectors (AS paths)
44. BGP uses policy-based routing: prefer routes from certain neighbors
45. BGP convergence takes minutes (stability preferred over speed)

**BGP Protocol Implementation:**
46. BGP operates between autonomous systems (AS)
47. Each ISP/company has unique AS number (16-bit or 32-bit)
48. Router establishes TCP connection (port 179) with BGP neighbors
49. Exchanges full routing table at session start
50. Then sends incremental updates only
51. BGP attributes: AS_PATH (list of ASes), NEXT_HOP, LOCAL_PREF, MED
52. AS_PATH prevents routing loops (reject routes containing own AS)
53. Route selection: prefer highest LOCAL_PREF, then shortest AS_PATH, then lowest MED
54. BGP policies filter incoming and outgoing route advertisements
55. Can prepend own AS multiple times to make path less attractive
56. Route reflectors reduce full-mesh BGP session requirements
57. BGP table today: 950,000+ prefixes, 75,000+ autonomous systems

**Packet Forwarding Process:**
58. Packet arrives on input port via optical fiber
59. [Optical Transceiver](sfp-transceiver) converts light pulses to electrical signals
60. Transceiver form factors: SFP (10 Gbps), SFP+ (25 Gbps), QSFP28 (100 Gbps), QSFP-DD (400 Gbps)
61. Physical layer chip recovers clock and data from signal
62. Frame delineation: identify start and end of Ethernet frame
63. Extract Ethernet header: destination MAC, source MAC, EtherType
64. If EtherType = 0x0800, payload is IPv4 packet
65. Extract IP header: version, header length, TTL, protocol, source IP, destination IP
66. Verify header checksum (16-bit one's complement sum)
67. If checksum fails, drop packet
68. Decrement TTL (time to live) by 1
69. If TTL = 0, drop packet (prevents routing loops)

**Routing Table Lookup:**
70. Perform longest-prefix match on destination IP address
71. Example: packet to 192.168.5.17
72. Routing table entries: 192.168.0.0/16, 192.168.5.0/24, 0.0.0.0/0
73. Matches all three, but 192.168.5.0/24 is longest (most specific)
74. Select route with longest matching prefix
75. Lookup must complete in nanoseconds for line-rate forwarding
76. TCAM performs parallel comparison against all entries simultaneously
77. Returns next-hop IP address and egress interface
78. Alternative: multi-level hash table or trie structure in SRAM

**Packet Modification:**
79. Rewrite Ethernet header for next hop
80. Destination MAC = MAC of next-hop router (learned via ARP)
81. Source MAC = MAC of egress interface
82. Recalculate IP header checksum with decremented TTL
83. For MPLS networks, push/pop/swap MPLS labels
84. For VPNs, may encapsulate packet in MPLS or GRE tunnel
85. Update counters: packets forwarded, bytes forwarded per interface

**Quality of Service (QoS):**
86. Examine DSCP (Differentiated Services Code Point) field in IP header
87. DSCP values: EF (Expedited Forwarding) for VoIP, AF (Assured Forwarding) for video
88. Classify packet into priority queue: high, medium, low
89. High-priority queue: VoIP, video conferencing, DNS
90. Medium-priority queue: web browsing, video streaming
91. Low-priority queue: file downloads, bulk transfers, P2P
92. Scheduler services high-priority queue first
93. Weighted fair queuing ensures low-priority traffic isn't starved
94. Can drop low-priority packets during congestion (tail drop or RED)
95. Police traffic: limit bandwidth per flow or per customer
96. Token bucket algorithm: allow bursts up to bucket size, then rate-limit

**Access Control Lists (ACLs):**
97. Check packet against ACL rules before forwarding
98. ACL matches on: source IP, destination IP, protocol, ports
99. Action: permit or deny
100. Example: deny all traffic from 10.0.0.0/8 to 192.168.1.0/24
101. ACLs enforce security policies at network edge
102. Prevent spoofed source addresses, DDoS attacks, unauthorized access
103. ACL lookup uses TCAM for fast parallel matching
104. Stateful firewall tracks connection state (TCP SYN, ACK, FIN)

**Traffic Management:**
105. Packet buffering during output port congestion
106. Virtual output queues (VOQ) prevent head-of-line blocking
107. Each input port has separate queue for each output port
108. Crossbar switch fabric connects any input to any output
109. Fabric operates at 2-3× port speed for oversubscription
110. Example: 32×100G ports = 3.2 Tbps bandwidth
111. Fabric capacity: 6-10 Tbps for non-blocking switching
112. Credit-based flow control prevents buffer overflow
113. Output port sends credits to input port indicating free buffer space

**Physical Assembly:**
114. Install network ASIC and memory on main forwarding board
115. [PCB Assembly](pcb-board) with 10-20 layer PCB
116. High-speed SerDes (serializer-deserializer) traces at 25-56 Gbps per lane
117. Impedance-controlled traces (50 ohm or 100 ohm differential)
118. Multiple line cards (forwarding engines) plug into backplane
119. Backplane provides high-speed interconnect between cards
120. Midplane or orthogonal backplane for very high-density routers

**Chassis and Cooling:**
121. Install line cards in [Chassis & Cooling](metal-chassis) enclosure
122. 1U to 13U chassis depending on port count and capacity
123. Modular chassis allows hot-swappable line cards
124. Redundant power supplies and control modules for high availability
125. Front-to-back or back-to-front airflow
126. Hot-swap cooling fans (4-8 fans per chassis)
127. Fans operate at variable speed based on temperature sensors
128. ASICs generate 100-300W per chip
129. Total chassis power: 1-5 kW for access router, 10-50 kW for core router
130. Requires 200-240V AC or -48V DC power

**Power Supply:**
132. Install redundant [Power Supply Unit](psu-unit) modules (1+1 or N+1 redundancy)
133. AC-DC conversion to 12V, 5V, 3.3V, 1.2V, 0.9V rails
134. High-efficiency PSU (90-95% efficiency) reduces heat and operating cost
135. Power over Ethernet (PoE) capability for access routers
136. PoE delivers 15-90W per port to power IP phones, cameras, access points
137. Battery backup (UPS) for 5-15 minutes during power outage
138. Allows graceful shutdown or cutover to generator power

**Control Plane Software:**
139. Control plane CPU runs routing protocols and management
140. Separate control plane CPU (x86 or ARM) runs Linux or proprietary OS
141. Control plane manages: CLI, SNMP, routing protocols, configuration
142. CLI (command-line interface) for manual configuration
143. SNMP (Simple Network Management Protocol) for remote monitoring
144. NETCONF/YANG for programmatic configuration (network automation)
145. Control plane builds routing table, pushes entries to data plane ASICs
146. Slow path: packets destined to router CPU (routing protocol packets, management)
147. Fast path: packets forwarded by ASIC without CPU involvement
148. Control plane CPU is not involved in forwarding most packets

**Optical Transceivers:**
149. Install [Optical Transceivers](sfp-transceiver) for fiber connections
150. 10GBASE-SR: multimode fiber, 850nm laser, 300m reach
151. 10GBASE-LR: single-mode fiber, 1310nm laser, 10km reach
152. 10GBASE-ER: single-mode fiber, 1550nm laser, 40km reach
153. 100GBASE-LR4: 4×25G wavelengths (CWDM), 10km reach
154. 400GBASE-DR4: 4×100G wavelengths, 500m reach
155. Coherent optics for long-haul: 100-400 Gbps, 80-2000km with amplifiers
156. Digital Signal Processing (DSP) in transceiver corrects signal impairments
157. Forward error correction (FEC) recovers from bit errors
158. DOM (Digital Optical Monitoring) reports TX/RX power, temperature

**Routing Protocols - OSPF:**
159. OSPF creates link-state database (LSDB) of network topology
160. Each router floods LSAs to all routers in area
161. LSA types: Router-LSA (router's links), Network-LSA (broadcast networks)
162. SPF algorithm computes shortest path tree with root at self
163. Metrics: cost = 100 Mbps / link bandwidth (lower cost preferred)
164. OSPF areas reduce LSA flooding and routing table size
165. Area 0 is backbone; all other areas connect to backbone
166. ABRs (Area Border Routers) connect areas, summarize routes
167. OSPF hello packets every 10 seconds maintain neighbor relationships
168. Dead interval 40 seconds (4× hello) - neighbor declared dead if no hellos

**Routing Protocols - IS-IS:**
169. IS-IS (Intermediate System to Intermediate System) similar to OSPF
170. Used by large ISPs instead of OSPF
171. Advantage: runs directly on Layer 2, not dependent on IP
172. Level 1 routing within area, Level 2 routing between areas
173. Level 1/2 routers connect areas (like OSPF ABRs)
174. TLVs (Type-Length-Value) encoding allows extensibility
175. IS-IS simpler and more stable than OSPF at very large scale

**Multicast Routing:**
176. PIM (Protocol Independent Multicast) for efficient one-to-many delivery
177. PIM-SM (Sparse Mode): receivers explicitly join multicast groups
178. PIM-DM (Dense Mode): flood traffic everywhere, then prune
179. IGMP (Internet Group Management Protocol) for host-to-router signaling
180. Routers maintain (S,G) state: source and group
181. Build multicast distribution tree (source tree or shared tree)
182. Replicate packets only on branches with receivers
183. Multicast reduces bandwidth for live video, IPTV, software updates

**MPLS and Traffic Engineering:**
184. MPLS (Multiprotocol Label Switching) creates virtual circuits through network
185. Ingress router pushes MPLS label onto packet (20-bit label)
186. LSRs (Label Switch Routers) swap labels based on label table
187. Egress router pops label, delivers packet
188. Label switching faster than IP lookup (though less important with modern ASICs)
189. Traffic engineering: explicitly route traffic through specific paths
190. RSVP-TE signals label-switched paths (LSPs) with bandwidth reservations
191. Fast reroute (FRR): pre-computed backup paths activate in <50ms on failure
192. MPLS VPNs: separate routing tables per customer (VRF = VPN Routing and Forwarding)

**High Availability Features:**
193. Redundant control plane CPUs with stateful switchover
194. Graceful restart: data plane continues forwarding during control plane restart
195. NSF (Non-Stop Forwarding) and NSR (Non-Stop Routing)
196. Bidirectional Forwarding Detection (BFD) detects link failures in milliseconds
197. BFD runs at 50ms to 1-second intervals, faster than routing protocol hellos
198. LAG (Link Aggregation Group) bundles multiple links for bandwidth and redundancy
199. ECMP (Equal-Cost Multi-Path) load-balances across multiple equal-cost paths
200. Hashing on source/destination IP and ports distributes flows across paths

**Management and Monitoring:**
201. SNMP traps alert network operations center (NOC) of failures
202. Syslog messages for configuration changes, errors, events
203. Streaming telemetry pushes real-time metrics to monitoring system
204. Interface counters: bytes in/out, packets in/out, errors, drops
205. CPU and memory utilization monitoring
206. Route table size and BGP session state monitoring
207. NetFlow/sFlow/IPFIX export flow records for traffic analysis
208. Flow records include: 5-tuple (src/dst IP, src/dst port, protocol), bytes, packets, timestamps
209. Used for: traffic engineering, DDoS detection, capacity planning, billing

**Testing and Validation:**
210. RFC 2544 benchmarking tests: throughput, latency, frame loss, back-to-back frames
211. Throughput test: find maximum forwarding rate with zero packet loss
212. Latency test: measure forwarding delay (typically 5-100 microseconds)
213. Test with various frame sizes: 64, 128, 256, 512, 1024, 1518 bytes
214. 64-byte frames are hardest (highest packets per second)
215. BGP convergence testing: how fast does router adapt to topology changes?
216. Failover testing: pull cables, reboot modules, verify backup paths activate

**Router Types and Applications:**
- **Core Router:** Backbone of large networks, 10-100 Tbps capacity, 100G/400G ports
- **Edge Router (PE):** Customer edge, MPLS VPNs, 1-10 Tbps, traffic policing
- **Border Router:** Connects autonomous systems, full BGP table, DDoS mitigation
- **Access Router:** Connects customers, PoE, 100 Mbps to 10 Gbps ports
- **Virtual Router:** Software router in VM or container, 10-100 Gbps

**Costs:**
- Access router (24-48 ports 1G): $2,000-10,000
- Distribution router (24-48 ports 10G): $20,000-80,000
- Core router (4-32 ports 100G): $100,000-500,000
- High-end core (144 ports 400G): $1-5 million
- Optical transceivers: $100 (1G) to $10,000 (400G coherent)
- Annual support contract: 10-20% of purchase price

**Performance Metrics:**
- Throughput: 1-100 Tbps total switching capacity
- Latency: 5-100 microseconds port-to-port
- Packet rate: 1-10 billion packets per second
- Routing table: 1 million+ routes
- Power efficiency: 0.5-2 watts per Gbps
- MTBF (Mean Time Between Failures): 200,000-500,000 hours

Modern routers use merchant silicon ASICs (Broadcom, Innovium) or custom ASICs (Cisco, Juniper). Merchant silicon reduces development cost and time-to-market but offers less differentiation. Custom ASICs enable proprietary features, better telemetry, and power efficiency. The trend is toward disaggregation: separate hardware (white box) from software (open-source or commercial NOS), and separation of control plane (centralized SDN controller) from data plane (forwarding only). This enables more flexible, programmable networks.
