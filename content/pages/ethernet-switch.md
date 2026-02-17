---
title: "Ethernet Switch"
company: "Cisco, Juniper, Arista, HP/Aruba"
country: "United States, China"
selling_price: 2500
inputs:
  - name: "Switch ASIC Chip"
    cost: 450
    link: "switching-asic"
  - name: "DRAM Memory"
    cost: 80
    link: "dram-module"
  - name: "Flash Storage"
    cost: 40
    link: "flash-memory"
  - name: "Ethernet PHY Chips"
    cost: 380
    link: "ethernet-phy"
  - name: "Power Supply Unit"
    cost: 180
    link: "psu-module"
  - name: "Metal Chassis"
    cost: 220
    link: "switch-chassis"
  - name: "PCB Assembly"
    cost: 950
    link: "pcb-board"
  - name: "Switch OS Software"
    cost: 200
    link: "switch-software"
value_created: 0
---

# How to Make an Ethernet Switch

**Top Market Leaders:**
- [Cisco, Juniper, Arista, HP](/companies/cisco-juniper-arista-hp)
- [Aruba](/companies/aruba)



An Ethernet switch connects multiple devices on a local network, forwarding frames based on MAC addresses. Switches learn which devices are on which ports, maintain MAC address tables, support VLANs for network segmentation, provide Power over Ethernet (PoE) to connected devices, and operate at Layer 2 (data link layer) of the OSI model.

## What is it?

A multi-port network bridge with 8-48 ports for enterprise access switches, or 48-128 ports for data center switches. Operates at wire speed (line rate): 1 Gbps, 10 Gbps, 25 Gbps, or 100 Gbps per port. Contains custom ASIC for hardware-accelerated forwarding, CAM (Content-Addressable Memory) for MAC table lookups in nanoseconds, and supports features like Spanning Tree, VLANs, Link Aggregation, and QoS.

## Steps to Make:

**Switch Architecture Overview:**
1. Ethernet switch operates at OSI Layer 2 (data link layer)
2. Forwards frames based on destination MAC address (not IP address)
3. Learns MAC addresses by examining source MAC of incoming frames
4. Stores MAC addresses in CAM (Content-Addressable Memory) table
5. CAM table maps: MAC address → port number
6. Lookup happens in parallel across all entries (single clock cycle)
7. Unknown destination: flood frame to all ports except source (broadcasting)
8. Known destination: forward only to destination port (unicast)
9. Multicast frames: forward to multiple ports based on multicast group

**Switch ASIC Design:**
10. Design or select [Switch ASIC Chip](switching-asic) - the packet forwarding engine
11. ASIC = Application-Specific Integrated Circuit optimized for Ethernet switching
12. Integrates: packet parser, MAC table lookup, VLAN processing, QoS queuing
13. Built on 7nm to 28nm process depending on performance tier
14. Contains 1-50 billion transistors depending on port count and speed
15. Packet pipeline processes frame in 200-500 nanoseconds
16. Major vendors: Broadcom (Trident, Tomahawk), Intel (Tofino), Innovium (TERALYNX)
17. Merchant silicon (Broadcom) used in most switches for cost efficiency
18. Custom ASICs (Cisco, Arista) for differentiation and advanced features
19. ASIC has integrated packet buffer memory (on-chip SRAM, 16-64 MB)

**CAM Table and MAC Learning:**
20. CAM (Content-Addressable Memory) stores MAC address table
21. Also called TCAM (Ternary CAM) when supporting wildcards
22. Entry format: MAC address (48 bits), VLAN ID (12 bits), port number, timestamp
23. CAM size: 8,000-128,000 entries depending on switch model
24. Lookup all entries in parallel in 1-2 nanoseconds
25. Frame arrives on port → extract source MAC → add to CAM table for that port
26. CAM entry aged out after 300 seconds (5 minutes) of inactivity
27. Prevents table from filling with stale entries
28. If table full, switch operates in fail-open mode (floods all frames)
29. CAM table separate per VLAN (same MAC can appear in multiple VLANs)

**Frame Processing Pipeline:**
30. Frame arrives on Ethernet port via [Ethernet PHY Chip](ethernet-phy)
31. PHY converts electrical signals (1000BASE-T) or optical (1000BASE-SX) to digital bits
32. Preamble and start-of-frame delimiter (SFD) indicate frame start
33. Extract destination MAC (6 bytes), source MAC (6 bytes), EtherType (2 bytes)
34. If 802.1Q VLAN tag present, extract VLAN ID (12 bits) and priority (3 bits)
35. Check FCS (frame check sequence, 32-bit CRC) for errors
36. If CRC fails, drop frame and increment error counter
37. Learn source MAC: add (source MAC, source port, VLAN) to CAM table
38. Look up destination MAC in CAM table
39. If found: forward to specific port (unicast)
40. If not found: flood to all ports in VLAN except source port (unknown unicast)
41. If destination MAC is broadcast (FF:FF:FF:FF:FF:FF): flood to all ports in VLAN
42. If destination MAC is multicast (01:xx:xx:xx:xx:xx): flood or use IGMP snooping

**VLAN Implementation:**
43. VLAN (Virtual LAN) segments network into isolated broadcast domains
44. Each VLAN is separate Layer 2 network
45. Devices in VLAN 10 cannot communicate with devices in VLAN 20 without router
46. VLAN tag: 4 bytes inserted after source MAC, before EtherType
47. 802.1Q standard: 16-bit TPID (0x8100) + 16-bit TCI (VLAN ID + priority)
48. VLAN ID range: 1-4094 (0 and 4095 reserved)
49. Access port: untagged, belongs to single VLAN
50. Trunk port: tagged, carries multiple VLANs (switch-to-switch or switch-to-router)
51. Native VLAN: untagged frames on trunk port assigned to this VLAN
52. Switch maintains per-port VLAN configuration
53. Ingress: add VLAN tag to untagged frames on access port
54. Egress: remove VLAN tag when forwarding to access port

**Spanning Tree Protocol (STP):**
55. STP prevents Layer 2 loops in redundant network topologies
56. Without STP, loops cause broadcast storms (frames endlessly circulated)
57. Broadcast storm consumes all bandwidth, crashes switches
58. STP elects root bridge (switch with lowest bridge ID)
59. Each switch calculates shortest path to root
60. Blocks redundant ports to eliminate loops
61. Blocked ports in "blocking" state: don't forward frames, but listen for BPDUs
62. BPDU (Bridge Protocol Data Unit) exchanged every 2 seconds
63. Root bridge sends BPDUs, other switches forward BPDUs downstream
64. Port states: blocking, listening, learning, forwarding, disabled
65. Convergence time: 30-50 seconds after topology change
66. RSTP (Rapid Spanning Tree): converges in 1-6 seconds
67. MSTP (Multiple Spanning Tree): separate spanning trees per VLAN

**Link Aggregation (LAG):**
68. LAG (Link Aggregation Group) bundles multiple physical links into single logical link
69. Also called EtherChannel (Cisco), Port Channel, or 802.3ad
70. Increases bandwidth: 4×10G links = 40 Gbps aggregate
71. Provides redundancy: if one link fails, others continue
72. LACP (Link Aggregation Control Protocol) negotiates LAG between switches
73. LACP PDUs exchanged every second verify link health
74. Hash algorithm distributes flows across member links
75. Hash typically on: source/destination MAC, source/destination IP, source/destination port
76. All frames of single flow use same link (preserves ordering)
77. LAG balances at flow level, not packet level

**Power over Ethernet (PoE):**
78. PoE delivers DC power over Ethernet cable to connected devices
79. PoE standards: 802.3af (15.4W), 802.3at (30W), 802.3bt (60-100W)
80. Powers: IP phones, Wi-Fi access points, security cameras, IoT devices
81. PSE (Power Sourcing Equipment) = PoE switch
82. PD (Powered Device) = device receiving power
83. Power delivered on unused pairs (10/100BASE-T) or phantom power (1000BASE-T)
84. Phantom power uses center tap on data transformers (doesn't interfere with data)
85. Voltage: 48-57V DC (nominal 48V)
86. PSE detects PD via signature resistance (23.75-26.25 kΩ)
87. Classification phase determines PD power requirements
88. Allocation phase: PSE provides requested power
89. Continuous monitoring: if PD disconnected, PSE cuts power
90. [Power Supply Unit](psu-module) must provide extra capacity for PoE
91. 48-port PoE switch: 740W for PoE + 200W for switch = 940W PSU

**Quality of Service (QoS):**
92. QoS prioritizes critical traffic during congestion
93. 802.1p priority field in VLAN tag (3 bits = 8 priority levels)
94. Priority 0 (best effort) to 7 (highest priority)
95. Common mapping: 7 = network control, 6 = voice, 5 = video, 4 = controlled load, 0-3 = best effort
96. Switch classifies frames into queues based on priority
97. 4-8 queues per port (one per priority level or coalesced)
98. Strict priority scheduling: always service highest-priority queue first
99. Weighted round-robin: service queues proportionally to weights
100. Traffic shaping limits bandwidth per port or per flow
101. Rate limiting prevents one device from monopolizing bandwidth
102. Policing drops or marks frames exceeding configured rate

**Storm Control:**
103. Storm control limits broadcast, multicast, or unknown unicast traffic
104. Prevents broadcast storms from misconfigured devices or attacks
105. Configure threshold: if broadcast rate exceeds X% of link bandwidth, drop frames
106. Typical threshold: 5-10% of port bandwidth
107. Protects switch CPU from excessive traffic
108. Can shut down port if storm persists

**Port Security:**
109. Restricts which MAC addresses allowed on each port
110. Static configuration: manually specify allowed MACs
111. Dynamic learning: allow first N MACs learned, then lock port
112. Sticky learning: dynamically learn MACs, save to configuration
113. Violation action: drop frames, send SNMP trap, or shut down port
114. Prevents MAC spoofing and unauthorized device connections
115. Common in enterprise environments for security

**IGMP Snooping:**
116. IGMP (Internet Group Management Protocol) manages multicast group membership
117. Without snooping: multicast flooded to all ports (wastes bandwidth)
118. With snooping: switch listens to IGMP messages between hosts and routers
119. Builds multicast forwarding table: multicast group → list of ports with interested hosts
120. Forward multicast only to ports with group members
121. Reduces unnecessary multicast traffic
122. Important for IPTV, video conferencing, and multicast routing

**Memory and Storage:**
123. Install [DRAM Memory](dram-module) for packet buffers and MAC table
124. DDR3 or DDR4 SDRAM, 512 MB to 8 GB depending on switch class
125. Packet buffers store frames during output port congestion
126. Buffer size affects: latency, jitter, queue depth
127. Shallow buffers (1-10 MB): low latency, packet drops during microburst
128. Deep buffers (16-64 MB): absorb traffic bursts, higher latency
129. Install [Flash Storage](flash-memory) for switch OS and configuration
130. 256 MB to 8 GB flash for firmware, boot image, config files, logs
131. Switch boots from flash, loads OS into DRAM
132. Configuration stored as text file or binary format

**Switch Operating System:**
133. Install [Switch OS Software](switch-software) for control plane
134. Examples: Cisco IOS, Juniper Junos, Arista EOS, Cumulus Linux
135. Many modern switches run Linux with proprietary forwarding daemons
136. Control plane handles: CLI, SNMP, STP, LACP, LLDP, DHCP snooping
137. Data plane (ASIC) handles: packet forwarding, CAM lookups, VLAN tagging
138. Separation of control and data plane allows control plane restarts without packet loss
139. Management interface: console (RS-232), Telnet, SSH, HTTP, HTTPS
140. SNMP (Simple Network Management Protocol) for remote monitoring
141. Syslog for logging events, errors, configuration changes

**Physical Construction:**
142. Install ASIC, memory, PHY chips on [PCB Assembly](pcb-board)
143. High-speed PCB design: 8-12 layers, controlled impedance
144. SerDes (serializer-deserializer) lanes at 10-56 Gbps require careful layout
145. Differential pairs routed with tight tolerances (±5 mils length matching)
146. Ground and power planes for low impedance and EMI reduction
147. Mount components via SMT (surface-mount technology) reflow soldering
148. Install in [Metal Chassis](switch-chassis) enclosure
149. 1U (1.75 inches) or 2U rack-mountable form factor
150. Front panel: Ethernet ports (RJ45 or SFP/QSFP cages), status LEDs
151. Rear: power supplies, cooling fans, console port

**Thermal Management:**
152. Switch ASIC dissipates 20-150W depending on port count and speed
153. Heatsink or cold plate attached to ASIC
154. Front-to-back or back-to-front airflow
155. Hot-swappable cooling fans (3-6 fans per 1U switch)
156. Fans operate at variable speed based on temperature sensors
157. Redundant fans (N+1): if one fails, others increase speed
158. Temperature sensors on ASIC, ports, power supplies
159. Overtemperature protection shuts down switch if cooling fails

**Power Supply:**
160. Install [Power Supply Unit](psu-module) for AC-DC or DC-DC conversion
161. Input: 100-240V AC or -48V DC (telecom)
162. Output voltages: 12V, 5V, 3.3V, 1.2V, 0.9V rails
163. Redundant PSUs (1+1 or N+1) for high availability
164. Hot-swappable PSUs allow replacement without shutting down switch
165. High-efficiency PSU (90-95% efficiency) reduces power and cooling costs
166. 48-port 1G switch: 100-300W without PoE, 500-1200W with full PoE
167. 48-port 10G switch: 300-800W
168. 32-port 100G data center switch: 800-1500W

**Ethernet PHY and Optics:**
169. Install [Ethernet PHY Chips](ethernet-phy) for each port
170. PHY handles physical layer signaling (encoding, scrambling, clock recovery)
171. 10/100/1000BASE-T (copper): RJ45 jack, 100m max distance
172. 1000BASE-T uses 4 pairs, 250 Mbps per pair, 125 MHz signaling
173. 10GBASE-T (copper): RJ45, 100m, CAT6a cable required
174. SFP (Small Form-Factor Pluggable) cages for optical modules
175. SFP: 1 Gbps, SFP+: 10 Gbps, SFP28: 25 Gbps
176. QSFP (Quad SFP): 40 Gbps (4×10G), QSFP28: 100 Gbps (4×25G), QSFP-DD: 400 Gbps (8×50G)
177. Optical modules contain laser and photodetector
178. Wavelengths: 850nm (multimode), 1310nm (single-mode short), 1550nm (single-mode long)
179. SR (short reach): 850nm, multimode fiber, 300m
180. LR (long reach): 1310nm, single-mode fiber, 10km
181. ER (extended reach): 1550nm, single-mode fiber, 40km

**Port LEDs and Status:**
182. LEDs indicate link status, speed, activity for each port
183. Green: link up, 1000 Mbps
184. Amber: link up, 10/100 Mbps or fault condition
185. Blinking: activity (transmitting/receiving frames)
186. Off: no link
187. Additional LEDs: system status, power, fan, PoE
188. LCD display on high-end switches shows: IP address, temperature, alerts

**LLDP (Link Layer Discovery Protocol):**
189. LLDP allows switches to advertise their identity and capabilities to neighbors
190. TLV (Type-Length-Value) format carries: chassis ID, port ID, system name, capabilities
191. LLDP frames sent every 30 seconds
192. Neighbor information stored in MIB, accessible via SNMP or CLI
193. Network management tools use LLDP to auto-discover topology
194. LLDP-MED (Media Endpoint Discovery) extension for VoIP phones

**Stacking:**
195. Stacking connects multiple switches into single logical switch
196. Dedicated stack cables (high-speed backplane interconnect)
197. Stack bandwidth: 40-480 Gbps depending on technology
198. All switches share MAC address table and configuration
199. Managed as single unit with single IP address
200. Master switch handles control plane, elections if master fails
201. Stack members can be added/removed without full stack reboot
202. Alternative: chassis-based switches with line card slots (more expensive but more modular)

**Switch Management:**
203. CLI (command-line interface) via console or SSH
204. Web GUI for configuration and monitoring
205. SNMP for integration with network management systems
206. RMON (Remote Monitoring) for detailed traffic statistics
207. Syslog for centralized logging
208. TACACS+/RADIUS for authentication and authorization
209. Configuration file backup to TFTP or SCP server
210. Firmware upgrades via TFTP, HTTP, or USB

**Layer 3 Features (L3 Switches):**
211. L3 switches combine Layer 2 switching and Layer 3 routing
212. Support inter-VLAN routing without external router
213. Static routes and dynamic routing protocols (OSPF, BGP)
214. Route table in TCAM for hardware-accelerated IP forwarding
215. SVI (Switch Virtual Interface): IP interface for each VLAN
216. L3 switch performs IP routing at line rate (wire speed)
217. Used as distribution or core switches in enterprise networks

**Testing and Burn-In:**
218. Factory testing: verify all ports link up at advertised speeds
219. Loopback test: send frames, verify received correctly
220. Throughput test: verify wire-speed forwarding (zero packet loss)
221. RFC 2544 benchmarking: throughput, latency, frame loss, back-to-back
222. Burn-in test: run at full load for 24-72 hours to catch early failures
223. MTBF (mean time between failures): 200,000-500,000 hours

**Switch Types and Applications:**
- **Unmanaged Switch:** Fixed config, no CLI, cheap, home/small office (8-24 ports, $20-100)
- **Managed Switch:** Full features (VLANs, QoS, SNMP), enterprise (24-48 ports, $500-5,000)
- **PoE Switch:** Powers IP phones, cameras, APs (24-48 ports with PoE, $800-3,000)
- **Core Switch:** High capacity, L3 routing, redundant (96-128 ports, 10G/40G/100G, $20,000-200,000)
- **Data Center Switch:** Ultra-low latency, 10/25/100G, VXLAN, $10,000-100,000

**Costs:**
- 8-port unmanaged gigabit: $20-50
- 24-port managed gigabit: $300-800
- 48-port gigabit PoE+ (802.3at): $800-2,000
- 48-port 10G L3 switch: $10,000-30,000
- 32-port 100G data center switch: $50,000-150,000

**Performance Metrics:**
- Throughput: 1 Gbps to 100 Gbps per port, aggregate 1-25 Tbps
- Latency: 1-10 microseconds port-to-port (store-and-forward)
- Cut-through latency: <1 microsecond (forwards before receiving full frame)
- MAC address table: 8,000-128,000 entries
- Packet forwarding rate: 1.488 Mpps per 1G port, 148.8 Mpps per 10G port
- PoE budget: 370W (802.3at) to 1440W (802.3bt) total per switch

Ethernet switches are the workhorses of local networks, connecting devices within buildings, campuses, and data centers. Unlike hubs (which broadcast all frames to all ports), switches intelligently forward frames only to the destination port, dramatically improving network efficiency and security. Modern switches operate at wire speed with zero packet loss even at full load, thanks to custom ASICs that perform MAC lookups in nanoseconds. The evolution from 10 Mbps hubs to 400 Gbps switches represents a 40,000× increase in per-port speed over 30 years.
