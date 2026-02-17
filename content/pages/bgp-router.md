---
title: "BGP Router"
company: "Cisco / Juniper / Huawei"
country: "USA / China"
selling_price: 250000
inputs:
  - name: "Router Hardware"
    cost: 150000
    link: "routing-hardware"
  - name: "ASICs"
    cost: 40000
    link: "network-asic"
  - name: "Software License"
    cost: 30000
    link: "routing-software"
  - name: "Power Supply"
    cost: 8000
    link: "power-supply-unit"
  - name: "Cooling System"
    cost: 12000
    link: "cooling-system"
  - name: "Optical Transceivers"
    cost: 6000
    link: "optical-transceiver"
  - name: "Network Engineers"
    cost: 4000
    link: "network-engineers"
value_created: 0
---

# How to Make a BGP Router

**Top Market Leaders:**
- [Cisco](/companies/cisco)
- [Juniper](/companies/juniper)
- [Huawei](/companies/huawei)



Border Gateway Protocol (BGP) routers are specialized networking devices that exchange routing information between autonomous systems (AS) - independent networks operated by ISPs, cloud providers, enterprises, or governments. BGP is the protocol that makes the Internet work as a network of networks, routing traffic between 75,000+ autonomous systems globally. Each BGP router maintains a routing table of 900,000+ prefixes (IP address blocks), updates continuously, and selects optimal paths based on policy and path attributes.

## What is it?

A high-performance router running BGP-4 (Border Gateway Protocol version 4, RFC 4271), connecting autonomous systems at Internet Exchange Points (IXPs), data center edges, or ISP boundaries. Capacity: 100 Gbps to 400 Gbps per port, 1.6-25.6 Tbps total switching capacity. Hardware: custom ASICs for packet forwarding (NPU - Network Processing Unit or merchant silicon like Broadcom Trident/Jericho), CPU for control plane (x86 multi-core), RAM for routing tables (32-256 GB), TCAM (Ternary Content Addressable Memory) for fast lookups (4-32 MB). Price: $50K for edge router to $2M+ for core carrier-class systems. Vendors: Cisco (CRS, ASR, NCS series), Juniper (MX, PTX series), Huawei (NE series), Nokia, Arista.

## Steps to Make:

**Step 1-15: BGP Protocol Fundamentals**

1. BGP (Border Gateway Protocol): path-vector routing protocol, exchanges reachability information for IP prefixes
2. Unlike interior protocols (OSPF, ISIS within AS), BGP designed for inter-AS routing
3. Policy-based routing: ASes control traffic based on business relationships, not just shortest path
4. TCP-based: BGP sessions run over TCP port 179 (reliable transport)
5. Each autonomous system has unique ASN (Autonomous System Number): 16-bit (1-65,535, mostly exhausted) or 32-bit (up to 4.2 billion)
6. Public ASNs allocated by regional registries: ARIN (North America), RIPE (Europe), APNIC (Asia-Pacific), LACNIC (Latin America), AFRINIC (Africa)
7. Private ASNs: 64,512-65,534 (16-bit) and 4,200,000,000-4,294,967,294 (32-bit), not routable on Internet
8. BGP peer relationships: eBGP (external, between different ASes) and iBGP (internal, within same AS)
9. eBGP: peers must be directly connected or have static route, TTL=1 default
10. iBGP: peers within AS, TTL=255, requires full mesh or route reflectors
11. BGP session establishment: TCP handshake → OPEN message (exchange ASN, router ID, capabilities) → KEEPALIVE every 60s → UPDATE messages
12. Hold timer: 180s default, peer declared dead if no KEEPALIVE/UPDATE received
13. BGP finite state machine: Idle → Connect → OpenSent → OpenConfirm → Established
14. Session parameters: router ID (unique IPv4 address, typically loopback), local ASN, peer ASN, peer IP
15. BGP message types: OPEN (establish session), UPDATE (advertise/withdraw routes), KEEPALIVE (maintain session), NOTIFICATION (error, close session)

**Step 16-35: Route Advertisement and Path Attributes**

16. UPDATE message contains: NLRI (Network Layer Reachability Information = IP prefixes), path attributes, withdrawn routes
17. NLRI format: prefix length + IP address, e.g., 192.0.2.0/24 (256 addresses)
18. AS_PATH attribute: sequence of ASNs traversed, prevents loops (discard if own ASN in path)
19. AS_PATH types: AS_SEQUENCE (ordered list) and AS_SET (unordered, from aggregation)
20. NEXT_HOP attribute: IP address of next router toward destination
21. eBGP: NEXT_HOP set to advertising router's interface IP
22. iBGP: NEXT_HOP unchanged (must have IGP route to NEXT_HOP within AS)
23. LOCAL_PREF attribute: prefer routes within AS (higher = more preferred, 0-4,294,967,295, default 100)
24. Used for traffic engineering: set LOCAL_PREF on ingress routes to control outbound traffic
25. MULTI_EXIT_DISC (MED): suggest entry point to neighboring AS (lower = more preferred)
26. Only compared between routes from same AS, non-transitive
27. ORIGIN attribute: IGP (route from interior protocol), EGP (historical), Incomplete (redistributed)
28. COMMUNITY attribute: tag routes for policy (e.g., no-export, no-advertise, custom values)
29. Well-known communities: NO_EXPORT (0xFFFFFF01, don't advertise to eBGP), NO_ADVERTISE (0xFFFFFF02, don't advertise to any peer)
30. Extended communities: 64-bit values, used for VPNs, route targets, traffic engineering
31. ATOMIC_AGGREGATE: route was aggregated, may not be best path to all destinations
32. AGGREGATOR: ASN and router ID that performed aggregation
33. Path attributes classified: well-known mandatory (must be in all UPDATEs: ORIGIN, AS_PATH, NEXT_HOP), well-known discretionary (recognized but optional: LOCAL_PREF, ATOMIC_AGGREGATE), optional transitive (propagated if not recognized: COMMUNITY), optional non-transitive (dropped if not recognized: MED)
34. Capability negotiation: 4-byte ASN support, route refresh, graceful restart, ADD-PATH (multiple paths per prefix)
35. BGP extended message support: UPDATE messages >4,096 bytes for large prefix sets

**Step 36-60: Best Path Selection Algorithm**

36. BGP router may receive multiple paths for same prefix, must select single best path
37. Best path selection (Cisco tiebreaker order, others similar):
38. Step 1: Prefer highest WEIGHT (Cisco proprietary, local to router, 0-65,535, not propagated)
39. Step 2: Prefer highest LOCAL_PREF (prefer within AS, 0-4,294,967,295, default 100)
40. Step 3: Prefer locally originated routes (network statement or redistribution)
41. Step 4: Prefer shortest AS_PATH (fewest ASN hops)
42. Step 5: Prefer lowest ORIGIN (IGP < EGP < Incomplete)
43. Step 6: Prefer lowest MED (if from same neighbor AS)
44. Step 7: Prefer eBGP over iBGP routes
45. Step 8: Prefer lowest IGP metric to NEXT_HOP (interior cost to exit point)
46. Step 9: Prefer oldest route (stability, avoid flapping)
47. Step 10: Prefer lowest router ID (tiebreaker, IPv4 address format)
48. Step 11: Prefer lowest neighbor IP address (final tiebreaker)
49. Result: single best path installed in routing table, advertised to peers
50. Multipath BGP: install multiple equal-cost paths (if AS_PATH, NEXT_HOP differ but other attributes match)
51. Enables load balancing across multiple links (typically 2-8 paths)
52. BGP table vs. routing table: BGP table holds all received paths, routing table (RIB) holds only best paths
53. Forwarding table (FIB): subset of routing table, pushed to ASICs for hardware forwarding
54. Route reflection: avoid full iBGP mesh (N routers need N*(N-1)/2 sessions), use route reflector (RR)
55. RR clients: peer with RR only, RR reflects routes between clients
56. Confederation: split large AS into sub-ASes, reduces iBGP complexity
57. BGP policy implementation: route-maps (if-then statements), prefix-lists (match prefixes), AS-path filters, community lists
58. Inbound policy: filter/modify routes received from neighbor (set LOCAL_PREF, add COMMUNITY, filter prefixes)
59. Outbound policy: filter/modify routes advertised to neighbor (set MED, prepend AS_PATH, filter sensitive prefixes)
60. AS_PATH prepending: artificially lengthen path to make route less preferred (add own ASN multiple times)

**Step 61-80: Internet Routing Table and Prefix Management**

61. Global BGP table (DFZ - Default-Free Zone): 950,000+ prefixes (IPv4, as of 2025)
62. Growth: 500K prefixes (2014) → 700K (2018) → 900K (2023) → 950K+ (2025)
63. IPv6 table: 180,000+ prefixes (slower growth, less fragmentation)
64. Prefix size distribution: /24 most common (256 addresses, 60% of table), followed by /22, /23, /21
65. Minimum prefix length: /24 for IPv4 (many providers filter longer), /48 for IPv6 (recommended, /56 or /64 also common)
66. Bogon prefixes: unallocated, reserved, or invalid address space (0.0.0.0/8, 10.0.0.0/8 private, 127.0.0.0/8 loopback, 192.168.0.0/16 private)
67. Bogon filtering: drop routes for private/reserved space at AS borders
68. Route aggregation: combine adjacent prefixes into summary (e.g., 192.0.2.0/25 + 192.0.2.128/25 → 192.0.2.0/24)
69. Reduces table size, improves convergence, but loses path specificity
70. Deaggregation: advertise more-specific prefixes for traffic engineering or multihoming
71. More-specific match wins: /24 preferred over /22 if both exist (longest prefix match)
72. Route hijacking: malicious or accidental advertisement of prefixes not owned
73. Famous incident: Pakistan Telecom hijacked YouTube 208.65.153.0/24 (2008), caused global outage
74. ROA (Route Origin Authorization): cryptographic attestation that AS is authorized to originate prefix
75. RPKI (Resource Public Key Infrastructure): hierarchical PKI for ROAs, certificates issued by RIRs
76. ROV (Route Origin Validation): routers validate BGP routes against ROAs, drop invalid routes
77. RPKI adoption: ~45% of IPv4 prefixes have ROAs (2025), ~30% of ASes validate
78. IRR (Internet Routing Registry): databases recording AS and prefix ownership (RADB, RIPE, etc.)
79. Less secure than RPKI (no cryptographic validation), but widely used
80. BGP communities for prefix filtering: customers tag routes, providers filter based on tags (e.g., 1299:5000 = blackhole traffic)

**Step 82-105: Hardware Architecture of BGP Router**

81. Router architecture: control plane (CPU, runs BGP protocol, computes routes) and data plane (ASICs, forwards packets at line rate)
82. Control plane: x86 CPU (Intel Xeon 8-core to 32-core, 2-3 GHz)
83. Runs BGP daemon (BIRD, Quagga/FRR open-source, or vendor proprietary)
84. Memory: 32-256 GB RAM (BGP table ~1 GB per million routes, full table 1-2 GB, plus OS, buffers)
85. Storage: SSD 128-512 GB (OS, configuration, logs)
86. Data plane: custom NPU (Network Processing Unit) or merchant silicon ASIC
87. Broadcom Trident series: 1.6-12.8 Tbps switching capacity (Trident 4: 25.6 Tbps, 32×400G ports)
88. Broadcom Jericho series: carrier-class, deep buffers, advanced QoS
89. Cisco proprietary: Silicon One (up to 25.6 Tbps), CRS fabric ASICs (multi-chassis)
90. Juniper Trio: programmable NPU, packet processing pipeline
91. TCAM (Ternary Content Addressable Memory): parallel lookup hardware for prefix matching
92. Stores FIB (Forwarding Information Base), matches destination IP in 1 clock cycle
93. TCAM size: 4-32 MB (500K-4M entries at /24 equivalent, limited resource)
94. TCAM challenges: IPv4+IPv6 dual-stack requires 2× capacity, power-hungry (5-15W), expensive
95. LPM (Longest Prefix Match): algorithm for prefix lookup, TCAM or hash-based
96. Packet buffer: DRAM 4-32 GB, absorb bursts, support deep queues
97. Line cards: modular interface cards, 10G/40G/100G/400G ports
98. Typical configuration: 24×100G or 8×400G per line card, 4-16 line cards per chassis
99. Optics: QSFP28 (100G), QSFP-DD (400G), pluggable transceivers
100. Fiber types: single-mode (long distance, 10-80 km), multi-mode (short distance, 100-300m)
101. Power consumption: 500W-5,000W per chassis (1U edge router: 200-400W, multi-chassis core: 10-20 kW)
102. Cooling: front-to-back airflow, fans 40-80mm, hot-swappable
103. Redundancy: dual control modules, dual power supplies (AC or -48V DC), hitless failover
104. Management: console port (serial), out-of-band management (GigE port), in-band (SSH/NETCONF)
105. Chassis types: 1U/2U pizza box (edge), 5U-21U chassis (aggregation/core), multi-chassis fabric (data center spine)

**Step 106-130: BGP Configuration and Peering**

106. Basic BGP configuration (Cisco IOS-XR syntax):
107. `router bgp 65001` - enable BGP, specify local ASN
108. `bgp router-id 10.0.0.1` - set router ID (must be unique)
109. `address-family ipv4 unicast` - enable IPv4 routing
110. `neighbor 192.0.2.2 remote-as 65002` - configure eBGP peer
111. `neighbor 192.0.2.2 address-family ipv4 unicast` - activate neighbor for IPv4
112. `network 203.0.113.0/24` - originate prefix (must exist in routing table)
113. Route-map application: `neighbor 192.0.2.2 route-policy INBOUND in` - apply policy to received routes
114. MD5 authentication: `neighbor 192.0.2.2 password SECRET` - secure BGP session (HMAC-MD5)
115. TCP-AO (Authentication Option): stronger than MD5, modern replacement
116. BFD (Bidirectional Forwarding Detection): fast failure detection (50-250ms vs. 60-180s BGP hold timer)
117. Graceful restart: preserve forwarding during control plane restart, avoid blackhole (180s grace period)
118. NSR (Non-Stop Routing): stateful failover between redundant control modules, no session flap
119. Peering types: (1) Transit: customer pays provider for global connectivity
120. (2) Peer: settlement-free exchange of traffic between similar networks (cost reduction)
121. (3) Paid peer: smaller network pays larger for peering (e.g., content provider → eyeball ISP)
122. Peering at IXP (Internet Exchange Point): colocation facility with shared switching fabric
123. Major IXPs: DE-CIX Frankfurt (10+ Tbps), AMS-IX Amsterdam (12 Tbps), LINX London (6 Tbps), Equinix (multiple global sites)
124. IXP connection: cross-connect fiber from router to IXP switch, BGP peer with 100-500+ members
125. Route server: IXP-operated BGP speaker, distributes routes among members (avoids N² peering sessions)
126. PNI (Private Network Interconnect): direct fiber between two networks' routers, higher capacity than IXP
127. Colocation: rent space in carrier-neutral data center (Equinix, CoreSite, Digital Realty)
128. Cross-connect fee: $200-1,000/month for fiber between cages
129. BGP security: (1) Prefix filtering (accept only expected prefixes from customer), (2) AS-path filtering (drop routes with bogus AS_PATH), (3) Max-prefix limit (protect against route leaks, terminate session if exceeded), (4) GTSM (Generalized TTL Security Mechanism): verify eBGP packets have TTL=255 (prevent spoofing from non-adjacent routers)
130. Looking glass: public web interface to query BGP table (route-views.org, Hurricane Electric), useful for troubleshooting

**Step 131-155: Route Convergence and Stability**

131. BGP convergence: time to propagate route change across Internet
132. Convergence time: 30 seconds to 15 minutes (varies by distance, policies, timers)
133. Factors: (1) Detection time (hold timer 180s default, BFD reduces to <1s), (2) Propagation delay (UPDATE messages forwarded router-by-router, 100-500ms per hop), (3) Decision process time (recompute best path, 1-5s), (4) MRAI (Minimum Route Advertisement Interval): delay between sending UPDATEs for same prefix to same peer (30s default for eBGP), (5) Route flap damping
134. Route flap: route alternates available/unavailable rapidly (link instability, configuration errors)
135. Damping: suppress flapping routes (penalize each flap, suppress if penalty exceeds threshold, unsuppress after reuse timer)
136. Parameters: suppress threshold 3,000, reuse threshold 750, max penalty 12,000, half-life 15 min
137. Criticized: causes longer outages, disabled by many operators
138. BGP wedgie: persistent oscillation from conflicting policies, rare but possible
139. Delayed prefix convergence: some prefixes remain unreachable during convergence (inconsistent best path selection)
140. Prefix-independent convergence (PIC): hardware feature, precompute backup paths, switch instantly on failure (Cisco NSR, Juniper Unified ISSU)
141. BGP Add-Path: advertise multiple paths per prefix (RFC 7911), improves diversity and convergence
142. BGP path hunting: try multiple paths during convergence, generates extra UPDATEs
143. Optimal convergence: minimize MRAI, use BFD, prefix-independent convergence, careful policy design
144. Route reflector scalability: cluster design (hierarchical RRs), limit clients per RR (50-200)
145. BGP table churn: rate of route changes (10,000-50,000 UPDATEs/sec globally during major outage)
146. Steady-state churn: 100-500 UPDATEs/sec (normal Internet dynamics)
147. BGP monitoring: collect full-table feeds from routers worldwide (RouteViews, RIPE RIS)
148. Analyze: route leaks (misconfigured export policies), hijacks (invalid origin AS), instability (flapping)
149. ARTEMIS: real-time BGP hijack detection and mitigation system (MIT)
150. BGPStream: software framework for BGP data analysis (CAIDA)
151. BGPlay: visualize BGP routing changes over time (prefix-specific)
152. RIPEstat: statistics and tools for Internet resources (ASNs, prefixes, DNS)
153. Internet Health Report: global BGP and DNS monitoring (Internet Intelligence)
154. BGP anomalies: route leaks (e.g., Verizon leaked 20,000 routes via small ISP, 2019), prefix hijacks (e.g., Iran accidentally hijacked Google, 2018), fat-finger errors (typo in configuration, leak internal routes)
155. Defensive practices: strict prefix filters on customer links, RPKI ROV, IRR-based filtering, max-prefix limits, BGP community tagging

**Step 156-175: Traffic Engineering with BGP**

156. Traffic engineering: control traffic flow to optimize network utilization, cost, performance
157. Outbound traffic engineering (control where traffic exits your AS to reach destination):
158. Method: adjust LOCAL_PREF on received routes (higher LOCAL_PREF = more preferred)
159. Example: two ISP links (primary and backup), set primary's routes to LOCAL_PREF 200, backup to 100
160. Inbound traffic engineering (control where traffic enters your AS from Internet):
161. More difficult (you don't control other ASes' decisions), use: (1) AS_PATH prepending, (2) MED, (3) Selective advertisement
162. AS_PATH prepending: add your own ASN multiple times (e.g., 65001 65001 65001) to make path less attractive
163. Prepend to provider you want less traffic from, normal AS_PATH to preferred provider
164. MED: suggest preferred entry point when multiple connections to same AS (lower MED = more preferred)
165. Only works between routes from same neighbor AS, limited use
166. Selective advertisement: announce prefix to only preferred upstream, not to others
167. Forces traffic to enter via advertised path (but may reduce redundancy)
168. Load balancing: multipath BGP (install multiple equal-cost routes), hash traffic across paths
169. Hash algorithms: per-flow (5-tuple: src/dst IP, src/dst port, protocol), per-packet (rare, causes reordering)
170. Anycast: advertise same prefix from multiple locations, traffic goes to nearest (lowest AS_PATH or IGP cost)
171. Use cases: CDN (content delivery), DNS root servers (each letter server 13 IPs, hundreds of instances)
172. Remote-triggered blackhole (RTBH): drop DDoS traffic at ISP edge before reaches your network
173. Method: announce /32 host route with BGP community (no-export, blackhole), ISP forwards to null0
174. FlowSpec: BGP extension to distribute firewall/ACL rules (RFC 5575), match packets by 5-tuple + flags
175. Use cases: DDoS mitigation (drop or rate-limit specific flows), traffic shaping

**Step 176-195: Advanced BGP Topics and Deployment**

176. BGP-4: current version since 1994 (RFC 4271), extensions via capabilities
177. MP-BGP (Multiprotocol BGP): support non-IPv4 address families (IPv6, MPLS VPN, EVPN)
178. Address family: defines type of routes exchanged (ipv4 unicast, ipv6 unicast, vpnv4, l2vpn evpn)
179. MPLS L3VPN: use BGP to distribute VPN routes, label-switched paths for isolation
180. VPN route distinguisher (RD): make overlapping customer IPs unique (RD:IP), 64-bit value
181. Route target (RT): extended community, controls VPN route import/export between VRFs
182. EVPN (Ethernet VPN): BGP-based L2VPN, replace older LDP-based VPLS
183. Data center fabric: use BGP for underlay (IP connectivity between switches) and overlay (tenant routing)
184. BGP EVPN VXLAN: popular data center design (Cisco ACI, Arista CVX, Juniper Contrail)
185. BGP Unnumbered: peer using link-local IPv6 addresses, no need to assign IPv4 to every interface
186. Simplifies data center cabling (no IP planning), used with EBGP (each switch is AS)
187. BGP Dynamic Neighbors: auto-discover peers via subnet or listen range, reduce configuration
188. BGP Segment Routing: integrate with SR-MPLS or SRv6, source-routed paths with BGP signaling
189. SDN with BGP: centralized controller (OpenDaylight, ONOS) peers with routers, computes optimal paths
190. BGP-LS (Link-State): distribute IGP topology via BGP, enables traffic engineering and path computation
191. BGP Monitoring Protocol (BMP): stream BGP data to collector (real-time analysis), RFC 7854
192. OpenBGPD: open-source BGP daemon (OpenBSD), lightweight, secure
193. FRRouting (FRR): Linux routing stack (fork of Quagga), supports BGP, OSPF, ISIS, BFD
194. GoBGP: BGP implementation in Go, library and daemon, used in Kubernetes networking
195. Cloud BGP: AWS VPN/Direct Connect (ASN 64512-65534, iBGP within VPC), GCP Cloud Router (dynamic routing to on-prem), Azure ExpressRoute (BGP peering)

**Cost Breakdown:**

- Router hardware chassis and line cards: $150,000 (high-end aggregation/core router, multiple 100G/400G ports)
- ASICs (NPU, TCAM, forwarding engines): $40,000 (merchant silicon or custom)
- Software license and support: $30,000/year (vendor OS, BGP features, TAC support)
- Power supply units (redundant, AC or DC): $8,000
- Cooling system (fans, airflow management): $12,000
- Optical transceivers (QSFP28/QSFP-DD, 8-32 ports): $6,000 ($200-1,000 per optic)
- [Network Engineers](network-engineers): $4,000 (allocated configuration, deployment, ongoing management labor)

**Total selling price: $250,000** (edge/aggregation class, full-featured BGP). Core carrier routers: $500K-2M+. Edge routers: $50K-150K. Price scales with port count (32×100G vs. 128×100G), switching capacity (1.6 Tbps vs. 25.6 Tbps), and feature set (L2 switching vs. full BGP + MPLS + segment routing).

BGP routers are deployed at: (1) ISP borders (connect to transit providers, peers, customers), (2) IXP PoPs (connect to Internet Exchange fabric), (3) Data center edges (border leaf, DCI gateway), (4) Enterprise WAN edge (SD-WAN, MPLS PE), (5) Content delivery networks (anycast nodes). Global deployment: ~75,000 ASes × 5-50 BGP routers per AS = 500K-3M BGP routers worldwide. Critical infrastructure: BGP outage can isolate entire countries or regions (e.g., Pakistan outage 2025, misconfig disconnected 220M people for 30 minutes). BGP is Internet's foundation - decentralized, policy-based, remarkably resilient despite no central authority.
