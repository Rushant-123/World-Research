---
title: "Submarine Cable"
company: "SubCom, Alcatel Submarine Networks, NEC"
country: "United States, France, Japan"
selling_price: 350000000
inputs:
  - name: "Optical Fiber Strands"
    cost: 8500000
    link: "optical-fiber"
  - name: "Copper Power Conductor"
    cost: 45000000
    link: "copper-conductor"
  - name: "Steel Armor Wire"
    cost: 28000000
    link: "steel-wire"
  - name: "Polyethylene Sheathing"
    cost: 15000000
    link: "polyethylene"
  - name: "Optical Repeaters"
    cost: 120000000
    link: "submarine-repeater"
  - name: "Shore Landing Equipment"
    cost: 25000000
    link: "landing-station"
  - name: "Cable Laying Ship"
    cost: 95000000
    link: "cable-ship"
  - name: "Route Survey"
    cost: 13500000
    link: "marine-survey"
value_created: 0
---

# How to Make a Submarine Cable

A submarine telecommunications cable is a fiber optic cable laid on the ocean floor to carry data between continents. These cables form the backbone of the global Internet, carrying 99% of intercontinental traffic. A typical transoceanic system spans 5,000-15,000 km, contains 6-24 fiber pairs, achieves 200-400 Gbps per fiber pair (total capacity 1-10 Tbps), and includes optical repeaters every 50-100 km to amplify signals.

## What is it?

An undersea fiber optic cable system with total capacity of 350-500 Terabits per second for modern cables. Contains: single-mode optical fibers for data transmission, copper conductor (10 kV DC) powering repeaters, steel armoring for protection, polyethylene jacket for water impermeability. Latency: 60-120 ms transatlantic, 100-180 ms transpacific. Lifespan: 25 years. Cost: $200-500 million for transoceanic system.

## Steps to Make:

**System Planning:**
1. Consortium of companies (Google, Facebook, Microsoft, telecom carriers) plan new cable
2. Identify need: existing cable capacity saturated, new route for redundancy
3. Select landing points: typically major cities with existing telecom infrastructure
4. Example route: New York → Cornwall UK → France (6,600 km transatlantic)
5. Pacific route: Los Angeles → Hawaii → Guam → Japan → Singapore (15,000+ km)
6. Consider: distance, water depth, political stability, permits, competition
7. Obtain permits from every country's territorial waters
8. EEZ (Exclusive Economic Zone) extends 200 nautical miles from coast
9. International waters (high seas) have no ownership but require coordination
10. Submarine cable laying rights negotiated with coastal nations

**Route Survey:**
11. Conduct [Route Survey](marine-survey) using survey ships
12. Survey scope: bathymetry (depth), seabed composition, hazards, existing cables
13. Multibeam sonar maps seafloor topography (accurate to 1-5 meters)
14. Side-scan sonar detects obstacles: rocks, shipwrecks, old cables
15. Sub-bottom profiler penetrates sediment to identify burial suitability
16. Water depth ranges: continental shelf 0-200m, slope 200-2,000m, abyssal plain 3,000-6,000m
17. Marianas Trench deepest point: 10,994 meters (cables avoid extreme depths)
18. Identify: rocky areas (cable on surface), sandy areas (cable buried), coral reefs (avoid)
19. Mark locations of existing submarine cables (avoid crossing or damaging)
20. Survey duration: 2-6 months depending on route length
21. Survey cost: $5-15 million

**Fiber Optic Core Design:**
22. Select [Optical Fiber Strands](optical-fiber) - the data transmission medium
23. Single-mode fiber: 9-micron core, 125-micron cladding, transmits 1310nm or 1550nm light
24. Low-loss fiber: <0.16 dB/km attenuation at 1550nm (vs. 0.2-0.3 dB/km for terrestrial)
25. Cable contains 6-24 fiber pairs (12-48 individual fibers)
26. Fiber pair: one fiber for transmit, one for receive (or bidirectional on single fiber with WDM)
27. WDM (Wavelength Division Multiplexing): 80-200 wavelengths per fiber
28. DWDM (Dense WDM) spacing: 50 GHz or 100 GHz channel spacing
29. Each wavelength: 100-400 Gbps using coherent modulation (QPSK, 16-QAM)
30. Total capacity per fiber pair: 80 wavelengths × 200 Gbps = 16 Tbps
31. Modern cables: 350-500 Tbps total capacity (all fiber pairs)
32. Fibers organized in bundle, optical buffer tubes protect fibers

**Power Conductor:**
33. Install [Copper Power Conductor](copper-conductor) at cable center
34. Powers optical repeaters along cable route
35. Copper conductor: 5-20 mm diameter depending on current requirements
36. Voltage: 10,000-15,000 volts DC from shore-based power feed equipment (PFE)
37. Current: 1-2 amperes flowing through conductor
38. Power dissipation: 15-20 kilowatts total for entire cable system
39. Repeaters operate at 12-18 volts locally (DC-DC converters step down voltage)
40. Return path: seawater and shore earth ground complete circuit
41. Electrodes at shore stations inject/extract current to/from seawater

**Repeater Design:**
44. Design [Optical Repeaters](submarine-repeater) to amplify signals every 50-100 km
45. Repeater spacing limited by fiber loss: 50 km × 0.16 dB/km = 8 dB loss
46. Optical amplifier: EDFA (Erbium-Doped Fiber Amplifier)
47. EDFA pumped by 980nm or 1480nm laser diodes
48. Gain: 15-25 dB per amplifier (compensates for fiber loss)
49. Each repeater contains: amplifiers for all fibers, DC-DC power converters, housing
50. Repeater housing: titanium cylinder, 1-2 meters long, 20-30 cm diameter
51. Pressure-resistant to 8,000 meters depth (800 atmospheres = 11,600 psi)
52. Hermetically sealed with beryllium-copper connectors
53. Expected lifetime: 25 years with no maintenance (no access after deployment)
54. Repeater cost: $500,000-1,000,000 each
55. 100 repeaters on 10,000 km cable = $50-100 million just for repeaters

**Cable Construction - Deep Water Section:**
56. Deep water cable (>2,000m depth) has lightweight design
57. Core: fiber bundle + copper conductor
58. Surround core with steel wire tensile member (handles tension during laying)
59. Steel wires: 3-6 mm diameter, high-strength steel (1,800-2,200 MPa)
60. Outer layer: [Polyethylene Sheathing](polyethylene) for waterproofing
61. Polyethylene: 15-25 mm thick, high-density PE (HDPE) or linear low-density (LLDPE)
62. Total diameter: 21-25 mm (similar thickness to garden hose)
63. Weight: 2-3 kg per meter in air, near-neutral buoyancy in water
64. Breaking strength: 60-100 kN (13,000-22,000 pounds force)

**Cable Construction - Shallow Water Section:**
65. Shallow water cable (<2,000m depth) needs [Steel Armor Wire](steel-wire) protection
66. Additional armor layers protect from: fishing nets, anchors, trawling, abrasion
67. Single armor: one layer of steel wires, 3-6 mm diameter, helically wound
68. Double armor: two counter-wound layers (inner right-hand lay, outer left-hand lay)
69. Counter-wound layers prevent cable from twisting under tension
70. Armor coating: galvanized (zinc) or copper-clad steel (better conductivity)
71. Outer jacket: polyethylene or polypropylene, 30-50 mm thick
72. Shallow water cable diameter: 50-150 mm
73. Weight: 30-80 kg per meter (heavy to resist trawling damage)
74. Armored cable used from shore to 2,000m depth (continental shelf and slope)
75. Transition splice from armored to lightweight cable at 1,000-2,000m depth

**Cable Manufacturing:**
76. Fiber production: fiber drawn from preform at 2,000°C, coated with acrylate
77. Fibers tested for: attenuation, dispersion, polarization mode dispersion (PMD)
78. Only lowest-loss fibers selected for submarine cables
79. Fibers bundled and installed in steel tube with copper conductor
80. Stranding machine helically winds steel wires around core
81. Extrusion machine applies polyethylene jacket (continuous extrusion)
82. Cable manufactured in 50-150 km continuous lengths (longest single piece possible)
83. Spooled onto 3,000-5,000 tonne capacity tanks on cable ship
84. Manufacturing rate: 50-150 km per week
85. Quality testing: cable subjected to 8,000m pressure test, tensile test, electrical test

**Branching Units:**
86. Branching unit (BU) allows cable to split to multiple landing points
87. Example: main cable + branch to secondary landing point
88. BU contains optical switches and power distribution
89. Housed in large pressure vessel (2-3 meters long, 500 kg-1 tonne)
90. Remotely configurable to route traffic to different branches
91. BU cost: $2-5 million each

**Cable Ship Preparation:**
92. Charter specialized [Cable Laying Ship](cable-ship) for installation
93. Major ships: CS Dependable, Ile de Brehat, KDDI Cable Infinity, Nexans Skagerrak
94. Ship features: dynamic positioning (DP), cable tanks, laying machinery, ROVs
95. Cable tanks: 3-5 tanks, 5,000-9,000 tonne total capacity
96. One transoceanic cable (10,000 km × 3 kg/m = 30,000 tonnes) requires multiple loads
97. Cable loaded onto ship at manufacturing facility
98. Coiled into tanks in figure-8 pattern to prevent twists
99. Repeaters pre-spliced into cable at factory (fusion splicing, <0.01 dB loss per splice)
100. Ship mobilization: 2-4 weeks preparing for laying operation

**Shore Landing Installation:**
101. Install shore end at each landing point first
102. Shore cable: heavily armored (100-200 mm diameter, 80-150 kg/m)
103. Dig trench from beach through surf zone (0-100m offshore, 2-3m deep)
104. Horizontal directional drilling under beach alternative (avoids open trench)
105. Pull cable through conduit or bury in trench
106. Cable enters beach manhole (BMH) or chamber
107. Route cable through ducts to cable landing station (CLS)
108. CLS: secure facility housing transmission equipment, power feed equipment
109. Distance from beach to CLS: 100m-5km depending on available land

**Cable Laying - Deep Water:**
110. Cable ship departs from shore, pays out cable as it moves
111. Cable exits ship over stern sheave (large wheel guiding cable)
112. Cable laying engine controls payout speed with precise tension control
113. Payout speed: 5-10 km/hour in deep water
114. Slack: cable paid out 1-2% longer than straight-line distance
115. Slack allows cable to lay naturally on seafloor contours
116. Too little slack: cable suspended, may break under own weight
117. Too much slack: cable loops, may be damaged by currents or future cables
118. Dynamic positioning system maintains ship on planned route (±5-10 meters)
119. DP uses GPS, gyroscopes, and thrusters (no anchors - anchoring impossible in deep water)
120. Real-time cable position monitored using transponders on cable
121. Adjust payout speed and ship speed based on: depth, slope, current

**Cable Laying - Shallow Water:**
122. Armored cable laid from shore to 1,000-2,000m depth
123. Slower laying speed: 1-3 km/hour (heavier cable, need more precision)
124. ROV (remotely operated vehicle) monitors cable as it reaches seafloor
125. ROV cameras verify cable position and condition
126. Transition splice: lightweight deep-sea cable spliced to armored cable
127. Splice performed on ship, splice housed in splice box (pressure-resistant)
128. Splice lowered to seafloor in controlled descent

**Cable Burial:**
129. Burial required in shallow water (<1,500m) to protect from human activity
130. ROV or submersible plow trenches seafloor and buries cable
131. Burial depth: 0.5-2 meters below seafloor depending on seabed type
132. Water jetting: high-pressure jets fluidize sand, cable sinks into trench
133. Mechanical plowing: blade cuts trench, cable guided into trench
134. Sandy seabed: easy burial with jetting
135. Rocky seabed: cable left on surface (burial impossible), add extra armor
136. Burial speed: 0.5-2 km/hour (slower than laying)
137. Burial may occur during laying (simultaneous lay-and-bury) or after (post-lay burial)

**Mid-Ocean Cable Laying:**
138. Abyssal plain: flat seafloor at 3,000-6,000m depth
139. Featureless terrain allows fast, efficient laying
140. Mid-ocean ridges: undersea mountain ranges (e.g., Mid-Atlantic Ridge)
141. Cable follows contours over ridges (up to 2,000m elevation change)
142. Trenches avoided when possible (complicated recovery if repair needed)
143. Weather window: laying requires calm seas (wave height <3-4 meters)
144. Storm delays: cable ship must heave-to (stop laying), resume when weather clears
145. Cable protected during storm by increasing depth (more weight reduces surge)

**Repeater Deployment:**
146. Repeater pre-installed in cable at factory
147. As repeater section passes over stern, ship pauses briefly
148. Crew guides repeater over sheave carefully (heavy, rigid section)
149. Repeater lowers to seafloor like rest of cable
150. Repeaters installed every 50-100 km along entire route
151. Powered up after both ends of cable connected to shore power
152. Power-on sequence: gradually increase voltage to avoid transients

**Cable Joining and Testing:**
153. Cable sections spliced at sea (if cable laid in multiple segments)
154. Splice point: cable ends brought aboard, fibers fusion-spliced in clean environment
155. Test splice loss: <0.01 dB per fiber
156. Splice protected with rigid splice box (titanium housing)
157. Lowered back to seafloor
158. After entire cable laid, perform end-to-end optical testing
159. OTDR (Optical Time-Domain Reflectometer) measures fiber loss, identifies faults
160. Target: <0.16 dB/km average loss across all fibers
161. Electrical test: verify power conductor continuity and insulation

**Power Feed Equipment:**
162. Install [Shore Landing Equipment](landing-station) including PFE at each shore end
163. PFE (Power Feed Equipment) generates 10-15 kV DC
164. High voltage reduces current (P=VI), minimizing I²R losses in copper conductor
165. Example: 20 kW at 10 kV = 2 amps (vs. 2,000 amps if only 10V)
166. Current fed into cable center conductor at one shore
167. Returns via seawater and earth ground at other shore
168. Electrodes (copper or platinum) inject/extract current to seawater
169. Electrodes located 100-500m offshore to avoid beach erosion
170. PFE monitored and controlled remotely, can shut down if cable damaged

**Transmission Equipment:**
171. SLTE (Submarine Line Terminal Equipment) at each cable landing station
172. SLTE consists of: transponders, ROADMs, mux/demux, monitoring
173. Transponders convert client signals (100G Ethernet) to WDM wavelengths
174. Coherent optics: dual-polarization QPSK or 16-QAM at 32-64 Gbaud
175. Transmit power: 0-5 dBm per wavelength at cable input
176. ROADM (Reconfigurable Optical Add-Drop Multiplexer) routes wavelengths
177. Allows wavelength to be added/dropped at intermediate landing points
178. Network management system monitors: optical power, BER, alarms
179. Software-defined networking (SDN) allows remote reconfiguration

**Cable System Activation:**
180. System acceptance testing (SAT) before handover to customers
181. Measure latency: time for light to traverse cable
182. Transatlantic: 60-75 ms (speed of light in fiber is 2/3 of speed in vacuum)
183. Transpacific: 100-150 ms depending on route
184. Measure capacity: test all wavelengths at full data rate
185. Reliability testing: verify system remains operational with one repeater failed
186. BER (bit error rate) testing: target <10^-15 (virtually error-free)
187. Provision initial customer circuits (wavelength leases or capacity)
188. Launch commercially: customers begin using cable

**Cable Protection Zones:**
189. Submarine cable protection zones established near shore
190. Fishing and anchoring prohibited or restricted within zone
191. Enforced by: coast guard, maritime law, international treaties
192. Cable route marked on nautical charts
193. Signage and buoys at beach landing warning of cable presence
194. Fines for damage: $millions if cable cut by ship anchor or fishing gear

**Monitoring and Maintenance:**
195. 24/7 monitoring from network operations center (NOC)
196. Telemetry from repeaters: optical power, pump laser currents, temperature
197. Alarms: fiber cut, repeater failure, power feed failure
198. Mean time between failures (MTBF): 10-20 years for modern cables
199. Failures caused by: ship anchors (60%), fishing gear (20%), earthquakes (10%), equipment (10%)
200. If cable cut, repair ship dispatched (can take weeks to arrive)

**Cable Repair Process:**
201. Repair ship locates cable break using OTDR and GPS coordinates
202. Grapnel (large hook) dragged along seafloor to snag cable
203. Cable raised to surface (slow process: 100-500m per hour from deep water)
204. Cut cable at break point, remove damaged section
205. Splice in new cable section (50-100 km spare cable carried on repair ship)
206. Test splice, lower cable back to seafloor
207. Repeat for other end if cable broke in middle (need two splices)
208. Total repair time: 1-4 weeks depending on depth and weather
209. Repair cost: $1-5 million per event
210. During repair, traffic rerouted to redundant cables (if available)

**Cable Lifespan and Decommissioning:**
211. Design life: 25 years
212. Actual lifespan often longer: some cables operate 30-40 years
213. End of life: capacity obsolete, newer cables replace it
214. Decommissioning: cable powered down, transmission equipment removed
215. Cable typically left on seafloor (recovery cost-prohibitive, environmentally disruptive)
216. Becomes "out-of-service cable" marked on charts
217. Fibers dark but physical cable remains

**Major Submarine Cable Systems:**
- **TAT-14** (2001): 15,000 km, US-UK-France, 3.2 Tbps
- **MAREA** (2018): 6,600 km, US-Spain, 200 Tbps (Microsoft-Facebook-Telxius)
- **Dunant** (2020): 6,400 km, US-France, 250 Tbps (Google)
- **2Africa** (2024): 45,000 km, circles Africa, 180 Tbps (Meta-led consortium)
- **Grace Hopper** (2022): 6,300 km, US-UK-Spain, 340 Tbps (Google)

**Cable Laying Timeline:**
- Planning and permits: 2-3 years
- Route survey: 2-6 months
- Manufacturing: 6-12 months
- Installation: 2-6 months depending on length
- Testing and activation: 1-2 months
- **Total project: 3-5 years from concept to commercial operation**

**Costs:**
- Route survey: $5-15 million
- Cable manufacturing: $50-100 million (10,000 km)
- Repeaters: $50-100 million (100 repeaters)
- Cable ship charter: $150,000-300,000 per day × 60-120 days = $10-35 million
- Shore stations and transmission equipment: $30-60 million (both ends)
- Permits, legal, project management: $20-50 million
- **Total transoceanic system (10,000 km): $200-500 million**
- Per-km cost: $20,000-50,000/km
- Annual maintenance: $5-10 million (monitoring, potential repairs)

**Economics:**
- Wavelength lease: $50,000-500,000/year per 100G wavelength depending on route
- 80 wavelengths × $200,000 = $16 million per year per fiber pair
- 12 fiber pairs = $192 million per year potential revenue
- Payback period: 2-4 years
- Consortium ownership spreads cost and risk among multiple parties

**Technical Specifications:**
- Capacity: 350-500 Tbps total (state-of-art 2025)
- Fibers: 12-24 fiber pairs (24-48 individual fibers)
- Wavelengths: 80-200 per fiber
- Data rate per wavelength: 100-400 Gbps
- Total system length: 5,000-45,000 km
- Repeater spacing: 50-100 km
- Latency: 5-6 microseconds per km
- Power consumption: 15-25 kW total system
- Depth rating: 8,000 meters
- Weight: 2-3 kg/m (deep water), 30-80 kg/m (shallow water)
- Lifespan: 25 years design, 30-40 years actual

Submarine cables are the physical infrastructure of the global Internet. Over 500 cables totaling 1.4 million km connect every continent (except Antarctica). Modern cables carry 99% of intercontinental data traffic - far more than satellites, which have higher latency (500+ ms geostationary) and lower capacity. The next generation of cables will push toward 1 Petabit per second (1,000 Tbps) using space-division multiplexing (multi-core fibers) and advanced modulation formats. These cables are engineering marvels: a transoceanic system delivers higher bandwidth than 1,000 geostationary satellites combined, at 1/10th the latency and 1/100th the cost per bit.
