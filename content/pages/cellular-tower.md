---
title: "Cellular Tower"
company: "American Tower, Crown Castle, SBA Communications"
country: "United States"
selling_price: 250000
inputs:
  - name: "Steel Tower Structure"
    cost: 45000
    link: "steel-tower"
  - name: "Base Station Equipment"
    cost: 85000
    link: "base-station"
  - name: "Antennas (Cellular)"
    cost: 28000
    link: "cell-antenna"
  - name: "Fiber Optic Backhaul"
    cost: 35000
    link: "fiber-cable"
  - name: "Power System & Backup"
    cost: 18000
    link: "backup-generator"
  - name: "Concrete Foundation"
    cost: 15000
    link: "concrete-base"
  - name: "Coax & Cables"
    cost: 12000
    link: "rf-cable"
  - name: "Site Construction"
    cost: 12000
    link: "site-work"
value_created: 0
lead_time_days: 43
minimum_order_quantity: 1
transportation_method: "air"
geopolitical_risk: "medium"
price_volatility: "medium"

certifications:
  - "ISO9001"
  - "ISO14001"
data_quality: "estimated"
---

# How to Make a Cellular Tower

**Market Leader:** [American Tower, Crown Castle, SBA Communications](/companies/american-tower-crown-castle-sba-communications)



A cellular tower (cell site or base station) provides wireless connectivity for mobile phones and devices. It consists of a tall structure (tower, monopole, or rooftop installation) supporting antennas, a base station with radio equipment that communicates with mobile devices, fiber optic backhaul connecting to the mobile network core, and power systems including backup generators.

## What is it?

A radio access network (RAN) site that serves 500-5,000 simultaneous users within a coverage radius of 0.5-30 kilometers depending on frequency, terrain, and power. Operates on licensed spectrum bands (600 MHz to 39 GHz for 5G), with multiple sectors (typically 3) providing 360-degree coverage, each sector handling 100-1,000 Mbps of aggregate throughput.

## Steps to Make:

**Site Selection and Planning:**
1. Identify coverage gaps in existing cellular network
2. RF (radio frequency) planning: model coverage and capacity
3. Tools: attenuation models (Okumura-Hata, COST 231), terrain databases
4. Consider: population density, traffic demand, competitor sites, terrain
5. Target coverage radius: 0.5-2 km urban (high density), 5-30 km rural (low density)
6. Higher frequencies (2.5 GHz, 3.5 GHz, 28 GHz) have shorter range than low band (600 MHz, 800 MHz)
7. Search for suitable site: existing tower, building rooftop, new tower location
8. Negotiate lease with property owner (20-30 year lease typical)
9. Zoning approval from local government (can take 6-24 months)
10. Environmental review: assess impact on wildlife, migratory birds, aesthetics
11. FAA clearance if tower >200 feet (61 meters) or near airport
12. FCC approval for radio frequency emissions
13. Neighbor opposition common due to aesthetics, perceived health concerns (unfounded)

**Tower Structure Types:**
14. **Monopole:** Single steel pole, 30-60m height, least visual impact, lower capacity
15. **Lattice tower:** Three or four-legged truss structure, 30-100m, high capacity, most visible
16. **Guyed tower:** Tall mast with guy wires, 60-150m, covers large rural areas, requires large site
17. **Rooftop:** Antennas on building, no dedicated tower, urban/dense areas
18. **Stealth designs:** fake trees (pine, palm), church steeples, flagpoles, water towers
19. Stealth designs more expensive ($50,000-150,000 extra) but reduce visual impact
20. Tower must support: antennas, radios, cables, ice loading (cold climates), wind loading

**Foundation and Site Preparation:**
21. Survey land: topography, soil conditions, underground utilities
22. Geotechnical study: soil bearing capacity, groundwater, rock depth
23. Clear vegetation and level site (5,000-10,000 sq ft)
24. Excavate for foundation (10-20 feet deep, 10-30 feet diameter for monopole)
25. Pour [Concrete Foundation](concrete-base) (50-150 cubic yards concrete)
26. Foundation design depends on: tower height, soil conditions, wind/seismic loads
27. Embed anchor bolts (12-24 bolts, 2-4 inch diameter, 10-15 feet long)
28. Rebar cage reinforces concrete (Grade 60 steel, #8-#11 bars)
29. Concrete cures for 14-28 days before tower installation
30. Install grounding system: copper ground rods (8-10 feet deep), radial ground wires
31. Grounding protects equipment from lightning strikes

**Tower Erection:**
32. Transport [Steel Tower Structure](steel-tower) sections to site
33. Tower fabricated from galvanized steel (zinc coating prevents rust)
34. Monopole: welded steel pipe, 3-8 feet diameter at base, tapers to 1-3 feet at top
35. Lattice tower: bolted steel angle sections (L-shaped profiles)
36. Crane lifts tower sections into place
37. Large cranes required: 40-200 ton capacity depending on tower size
38. Bolt tower base to anchor bolts in foundation
39. For lattice tower, erect in sections (10-20 feet per section)
40. Install guy wires for guyed towers (attach at 1/3 and 2/3 height)
41. Install tower lighting (red strobe or steady red light) for aviation safety
42. FAA requires lighting for towers >200 feet or near airports
43. Install climbing ladder, safety cable, rest platforms (every 10-15 meters)
44. OSHA regulations require fall protection for tower climbers

**Antenna Installation:**
45. Install [Antennas (Cellular)](cell-antenna) on tower using mounting brackets
46. Typical configuration: 3 sectors, 120 degrees each, providing 360-degree coverage
47. Each sector: 2-6 antennas depending on technologies (2G/3G/4G/5G) and frequency bands
48. Antenna types: panel antennas (directional, 60-90 degree beamwidth)
49. Antenna dimensions: 1-2 meters tall, 0.3-0.5 meters wide
50. Omnidirectional antennas (360-degree coverage) used for 2G/3G in low-density areas
51. Antenna arrays for 5G: massive MIMO (64-256 antenna elements per panel)
52. Massive MIMO beamforms signals to individual users, increases capacity 5-10×
53. Antennas mounted 20-60 meters above ground (higher = better coverage, more cost)
54. Downtilt antennas 2-10 degrees to focus signal on ground, reduce interference to adjacent cells
55. Remote electrical tilt (RET) allows adjusting downtilt remotely via software
56. Azimuth alignment: point each sector in specific direction (0°, 120°, 240° typical)
57. Use compass and inclinometer for precise alignment (±1 degree accuracy)

**Base Station Equipment:**
58. Install equipment shelter at tower base
59. Shelter types: prefab metal cabinet (6×8 feet), small building (10×20 feet), or underground vault
60. Climate control: HVAC maintains 20-25°C (equipment sensitive to temperature)
61. Install [Base Station Equipment](base-station) inside shelter
62. Base station (eNodeB for LTE, gNB for 5G) consists of:
63. BBU (Baseband Unit): digital signal processing, protocol stack, interfaces to core network
64. RRU (Remote Radio Unit): RF transceiver, power amplifier, connects directly to antennas
65. Modern architecture: BBU in shelter, RRU mounted on tower near antennas
66. This reduces cable loss (coax loss is 3-5 dB per 100 feet at 2 GHz)
67. RRU and antenna connected by short coax jumpers (3-10 feet)
68. BBU and RRU connected by fiber optic cable (CPRI or eCPRI protocol)
69. Fiber has negligible loss compared to coax, allows RRU placement near antennas

**Radio Frequencies and Bands:**
70. Cellular operators use licensed spectrum from FCC auctions
71. Low band (600-900 MHz): wide coverage (10-30 km), deep building penetration, lower capacity
72. Mid band (1.7-2.5 GHz): balanced coverage (1-5 km) and capacity
73. High band (3.5 GHz, 24-39 GHz): short range (0.2-1 km), very high capacity, mmWave
74. Each carrier has 10-100 MHz of spectrum across multiple bands
75. Example: T-Mobile has 600 MHz, 1900 MHz, 2.5 GHz, 39 GHz in different markets
76. FDD (Frequency Division Duplex): separate uplink and downlink frequencies
77. TDD (Time Division Duplex): same frequency, alternate time slots for uplink/downlink
78. 5G NR (New Radio) supports both FDD and TDD

**RF Transmission Path:**
79. Install [Coax & Cables](rf-cable) from RRU to antennas
80. Coax cable: 7/8-inch or 1-1/4 inch diameter (larger = lower loss)
81. LDF-series (low-loss flexible) coax for cellular frequencies
82. Coax loss: 2-6 dB per 100 feet at 2 GHz (loss increases with frequency)
83. If RRU on ground and antennas at 150 feet, coax loss could be 9-18 dB
84. This is why RRUs are mounted on tower to minimize coax run
85. Install fiber optic cable from shelter to tower-mounted RRUs
86. Single-mode fiber, 6-12 strands per sector
87. CPRI (Common Public Radio Interface) carries digitized RF signals
88. CPRI data rate: 2.5-10 Gbps per sector depending on bandwidth and MIMO layers

**Power Amplifiers and Transmit Power:**
89. RRU contains power amplifier (PA) that boosts signal to antenna
90. Transmit power: 20-60 watts per carrier at antenna input
91. Effective radiated power (ERP): TX power + antenna gain - cable loss
92. Antenna gain: 15-21 dBi (directional focusing multiplies power in beam direction)
93. Example: 40W TX power (46 dBm) + 18 dBi antenna gain - 2 dB cable loss = 62 dBm ERP (1,585W equivalent isotropic)
94. FCC limits ERP to prevent interference and ensure public safety
95. Typical ERP: 1,000-5,000 watts for macro cell

**Backhaul Connection:**
96. Install [Fiber Optic Backhaul](fiber-cable) from tower to mobile network core
97. Backhaul carries all user traffic from cell site to Internet/core network
98. Fiber optic cable: 12-144 strands, single-mode
99. Capacity: 1-100 Gbps per site depending on user load
100. Fiber route: tower → nearest fiber point of presence (POP) → metro aggregation → core network
101. Fiber may be owned by carrier or leased from third party (Zayo, Crown Castle, electric utility)
102. Microwave backhaul alternative in areas without fiber
103. Microwave: point-to-point radio link, 6-42 GHz, 100 Mbps to 1 Gbps, 1-50 km range
104. Microwave requires line-of-sight, antenna dishes mounted on tower

**Power System:**
105. Install [Power System & Backup](backup-generator) for site reliability
106. Commercial power: 200-400 amp service, 240V single-phase or 480V three-phase
107. Power distribution: breaker panel, surge protection, UPS
108. Base station power consumption: 2-10 kW depending on configuration
109. Rectifier converts AC to -48V DC for base station equipment (telecom standard)
110. Battery backup: 4-8 hours runtime during power outage
111. Batteries: VRLA (valve-regulated lead-acid) or lithium-ion, 200-400 Ah at 48V
112. Diesel generator for extended outages: 20-50 kW, starts automatically
113. Generator fuel tank: 100-500 gallons (24-120 hours runtime at full load)
114. Generator tested monthly, maintained quarterly
115. Renewable energy: solar panels (5-10 kW) and wind turbines in remote sites

**Grounding and Lightning Protection:**
116. Lightning protection critical (towers are tall, exposed)
117. Grounding grid: buried copper cables, 8-10 foot ground rods
118. Grid resistance <5 ohms (measured with ground tester)
119. All equipment bonded to ground: tower, antennas, cables, shelter
120. Lightning arrestors on coax cables (grounds surge to earth)
121. Surge protectors on AC power and fiber (fiber can carry surge via metallic elements)
122. Tower top: lightning rod or air terminal (Franklin rod)
123. Direct strike conducts to ground via tower structure and ground system

**Base Station Software and Configuration:**
124. Commission base station with carrier's network management system
125. Configure: cell ID, frequency bands, power levels, neighbor cell list
126. Parameters: RSRP (reference signal received power), RSRQ (reference signal received quality)
127. Handover thresholds: when to hand device to adjacent cell
128. Load balancing: distribute users across frequency bands and cells
129. SON (Self-Organizing Network) algorithms auto-optimize parameters
130. Remote monitoring via SNMP, performance counters, alarms

**Frequency Planning and Coordination:**
131. Each cell assigned specific frequencies to avoid interference with adjacent cells
132. Frequency reuse pattern: typically 1/3 or 1/1 (same frequencies reused in every cell or every 3rd cell)
133. Adjacent sectors/cells use different frequencies
134. PCI (Physical Cell ID) planning: 504 unique PCIs in LTE, must avoid collisions
135. Interference mitigation: inter-cell interference coordination (ICIC)
136. eICIC (enhanced ICIC): time-domain muting in macro cells reduces interference to small cells

**Cell Sectoring and Coverage:**
137. 3-sector configuration most common: 3×120-degree sectors
138. Each sector serves 1/3 of coverage area
139. Sectors labeled: Alpha (0°), Beta (120°), Gamma (240°)
140. 6-sector configuration (6×60 degrees) doubles capacity in high-density areas
141. Omnidirectional cell: single 360-degree antenna, rural areas, lower capacity
142. Cell edge: signal strength drops, handover to adjacent cell
143. Coverage overlap: 10-20% overlap between cells for seamless handover

**Capacity Engineering:**
144. Design for peak hour traffic (busy hour, typically 7-9 PM)
145. Traffic per user: 2-10 GB/month average, but peak hour usage much higher
146. Capacity per sector: 50-200 Mbps aggregate (shared among active users)
147. 100 simultaneous users at 2 Mbps average = 200 Mbps required
148. Spectrum efficiency: 1-3 bps/Hz for LTE, 3-5 bps/Hz for 5G
149. 20 MHz channel at 2 bps/Hz = 40 Mbps
150. MIMO multiplies capacity: 2×2 MIMO = 2×, 4×4 MIMO = 4×
151. Massive MIMO (64T64R) can achieve 8-16× capacity gain
152. Carrier aggregation: combine multiple frequency bands for higher per-user speed

**5G Enhancements:**
153. 5G NR (New Radio) operates on sub-6 GHz and mmWave (24-39 GHz)
154. Sub-6 GHz (3.5 GHz): 100 MHz channels, 1-3 Gbps per sector
155. mmWave (28 GHz, 39 GHz): 400 MHz to 1 GHz channels, 5-10 Gbps per sector
156. mmWave range: 200-500 meters (much shorter than sub-6 GHz)
157. mmWave blocked by buildings, trees, even rain (20 dB/km rain attenuation)
158. Requires dense network: cells every 200-500 meters in urban areas
159. Beamforming essential for mmWave: focus narrow beam toward user
160. Beamforming compensates for high path loss (140 dB at 1 km for 28 GHz vs. 120 dB for 2 GHz)

**Small Cells and Heterogeneous Networks:**
161. Macro cell (tower): 10-30 km range, 500-5,000 users
162. Micro cell (low power): 1-2 km range, 100-500 users, installed on street light poles
163. Pico cell: 100-500 meters, 50-200 users, indoor or dense urban
164. Femto cell: home/enterprise, 10-50 meters, 4-16 users
165. Het-Net (heterogeneous network): mix of macro, micro, pico cells
166. Small cells fill coverage gaps, add capacity in high-traffic areas
167. Small cell: $5,000-20,000 vs. $250,000-500,000 for macro cell

**Network Architecture:**
168. Cell tower (eNodeB/gNB) connects to EPC (Evolved Packet Core) for LTE or 5GC (5G Core)
169. EPC functions: MME (mobility management), SGW (serving gateway), PGW (packet gateway)
170. 5GC: AMF (access & mobility), SMF (session management), UPF (user plane)
171. Backhaul protocol: S1 interface (LTE) or NG interface (5G)
172. User data path: phone → eNodeB → SGW → PGW → Internet
173. Control plane: phone → eNodeB → MME → HSS (home subscriber server)
174. HSS stores subscriber profiles, authentication keys, location

**Testing and Optimization:**
175. Drive testing: engineer drives with test phone, measures signal strength
176. Metrics: RSRP (signal level), RSRQ (signal quality), SINR (signal-to-interference-noise ratio)
177. Target: RSRP > -100 dBm (good), -100 to -110 dBm (fair), <-110 dBm (poor)
178. SINR > 10 dB good, 0-10 dB fair, <0 dB poor
179. Walk testing in buildings to verify indoor coverage
180. Throughput testing: upload and download speed tests
181. Handover testing: verify seamless handover between cells
182. Interference hunting: identify sources of interference (faulty equipment, adjacent cells)
183. Tilt and azimuth adjustments optimize coverage and minimize interference
184. Iterative optimization over weeks/months after initial launch

**Maintenance and Operations:**
185. Remote monitoring 24/7 from network operations center (NOC)
186. Alarms for: equipment failure, high temperature, power outage, low battery
187. Scheduled maintenance: quarterly site inspections
188. Tower climbers inspect: antennas, cables, mounting hardware, lighting
189. Replace failed equipment (mean time to repair: 4-24 hours)
190. Generator testing and refueling
191. Battery replacement every 3-5 years (VRLA) or 10+ years (lithium)
192. Software updates to base station (bug fixes, new features)
193. Carrier may add equipment to tower as technology evolves (2G → 3G → 4G → 5G)

**Co-location:**
194. Tower owners (American Tower, Crown Castle) lease space to multiple carriers
195. Typical tower hosts 2-4 carriers (AT&T, Verizon, T-Mobile, Dish)
196. Each carrier installs own antennas and base station equipment
197. Co-location maximizes tower utilization, reduces per-carrier cost
198. Lease rates: $1,500-3,000/month per carrier depending on location
199. Tower owner maintains tower structure, carriers maintain own equipment

**Costs:**
- Land lease: $1,000-2,500/month (20-30 year term)
- Monopole tower (40m): $30,000-60,000
- Lattice tower (60m): $60,000-120,000
- Guyed tower (100m): $100,000-200,000
- Stealth tower (fake tree): $100,000-250,000
- Foundation and site prep: $15,000-40,000
- Base station equipment (3-sector LTE): $60,000-100,000
- 5G equipment upgrade: $30,000-60,000 per site
- Fiber backhaul: $500-2,000/month leased or $20,000-100,000 to build
- Generator and battery backup: $15,000-30,000
- Installation labor: $20,000-50,000
- Zoning, permits, engineering: $10,000-30,000
- **Total macro cell site: $250,000-500,000**
- Annual operating cost: $30,000-60,000 (power, backhaul, maintenance)

**Coverage and Capacity:**
- Low-band (600 MHz): 10-30 km radius, 50-100 Mbps per sector
- Mid-band (1.9 GHz): 2-5 km radius, 100-200 Mbps per sector
- High-band (3.5 GHz): 1-3 km radius, 200-500 Mbps per sector
- mmWave (28 GHz): 0.2-0.5 km radius, 1-5 Gbps per sector
- Users per sector: 100-1,000 simultaneous, 5,000-20,000 total subscribers
- Typical US market: 1 macro cell per 2-10 square miles (rural to urban)

Cellular towers form the physical layer of mobile networks, connecting smartphones to the Internet and telephone network. The evolution from 2G (voice + SMS) to 5G (multi-Gbps data) required adding new spectrum bands and upgrading equipment at each site. Modern macro cells support 2G, 3G, 4G, and 5G simultaneously, with antennas for 5-10 different frequency bands on a single tower. The next frontier is densification: adding thousands of small cells to provide capacity in cities and mmWave coverage where needed, moving toward a ubiquitous gigabit network.
