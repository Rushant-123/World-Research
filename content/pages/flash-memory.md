---
title: "Flash Memory Module"
company: "Winbond Electronics"
country: "Taiwan"
selling_price: 1.5
inputs:
  - name: "Silicon Wafer"
    cost: 0.2
    link: "silicon-wafer"
  - name: "Lithography"
    cost: 0.2
    link: "photolithography-equipment"
  - name: "IC Packaging"
    cost: 0.1
    link: "package-substrate"
  - name: "Testing"
    cost: 0.08
    link: "board-tester"
  - name: "Wire Bonding"
    cost: 0.05
    link: "wire-bonder"
  - name: "Programming"
    cost: 0.05
    link: "device-programmer"
value_created: 0.82
---

Flash memory manufacturing combines advanced CMOS processing with specialized floating gate structures to create non-volatile memory cells capable of storing data for 20+ years while enduring 100,000+ program/erase cycles.

## Design Phase (Steps 1-15)

1. Define memory architecture: 128Mb NOR flash with 16MB capacity organized as 8M x 16-bit configuration
2. Design memory array layout with 4096 sectors of 4KB each for flexible erase granularity
3. Specify floating gate cell dimensions: 90nm technology node with 0.15μm² cell size
4. Design tunnel oxide stack: 9nm high-quality oxide for Fowler-Nordheim tunneling during programming
5. Engineer floating gate structure: 100nm thick polysilicon layer to store approximately 100 electrons per cell
6. Design control gate architecture: second polysilicon layer with 150nm thickness for capacitive coupling
7. Create interpoly dielectric stack: ONO (oxide-nitride-oxide) with 15nm equivalent oxide thickness
8. Design source/drain implant profiles: N+ regions with 1e20/cm³ peak doping for low contact resistance
9. Engineer charge pump circuitry: on-chip voltage multiplier generating 9V for programming and -9V for erasing
10. Design sense amplifier array: differential amplifiers detecting 100μA current differences between programmed/erased cells
11. Create address decoder logic: row and column decoders supporting sequential and random access patterns
12. Design SPI interface controller: supporting clock speeds up to 104MHz for fast serial access
13. Engineer QSPI enhancement: quad-SPI mode enabling 416Mbps throughput using four data lines
14. Create embedded ECC engine: BCH code correcting 4-bit errors per 512-byte page
15. Design testability features: built-in self-test (BIST) circuits and IEEE 1149.1 boundary scan

## Wafer Preparation (Steps 16-25)

16. Receive 300mm P-type silicon wafers with <100> crystal orientation and 10-20 Ω-cm resistivity
17. Perform incoming wafer inspection: automated optical inspection detecting particles >50nm and surface defects
18. Clean wafers using RCA process: SC-1 (APM) solution removing organic contaminants at 75°C for 10 minutes
19. Apply SC-2 (HPM) clean: removing metallic ions with HCl:H2O2:H2O solution at 75°C
20. Perform hydrogen termination: dipping in dilute HF to create hydrophobic surface and remove native oxide
21. Grow initial pad oxide: 10nm thermal oxide at 900°C in dry O2 ambient providing stress relief layer
22. Deposit pad nitride: 100nm Si3N4 via LPCVD at 780°C serving as polish stop and oxidation mask
23. Apply photoresist for STI (shallow trench isolation): spin coating 200nm-thick i-line resist at 3000 RPM
24. Pattern active area mask: exposing resist with 248nm DUV stepper achieving 100nm minimum feature size
25. Develop resist and descum: TMAH developer followed by oxygen plasma removing residual polymer

## Shallow Trench Isolation (Steps 26-35)

26. Etch nitride layer: reactive ion etching with CHF3/O2 plasma removing nitride in field regions
27. Etch silicon trenches: deep RIE with HBr/Cl2 chemistry creating 400nm deep isolation trenches
28. Clean trench sidewalls: dilute HF dip followed by SC-1 clean removing etch residues and polymers
29. Grow trench liner oxide: 10nm thermal oxide at 950°C improving interface quality and reducing defects
30. Deposit trench fill oxide: high-density plasma CVD depositing 600nm TEOS oxide at 400°C
31. Perform CMP planarization: chemical-mechanical polishing stopping on nitride layer with <5nm non-uniformity
32. Strip pad nitride: hot phosphoric acid at 160°C selectively removing Si3N4 without attacking oxide
33. Remove pad oxide: dilute HF dip exposing clean silicon surface in active regions
34. Perform sacrificial oxidation: growing 5nm oxide and stripping to remove surface damage from CMP
35. Clean and prepare surface: RCA clean sequence followed by hydrogen bake at 900°C in H2 ambient

## Well Formation and Channel Implants (Steps 36-45)

36. Grow screening oxide: 15nm thermal oxide protecting silicon surface during high-energy implants
37. Pattern N-well mask: coating photoresist and exposing regions requiring N-type well implants
38. Implant N-well: phosphorus at 400keV and 3e13/cm² dose creating deep wells for PMOS transistors
39. Pattern P-well mask: defining regions for P-type wells used under NMOS devices
40. Implant P-well: boron at 300keV and 3e13/cm² dose establishing proper substrate doping
41. Strip well photoresist: oxygen plasma ashing followed by solvent clean removing all organic residues
42. Perform well drive-in: 1100°C anneal for 4 hours activating dopants and creating 2μm deep wells
43. Pattern threshold adjust mask: preparing for channel implant determining transistor threshold voltages
44. Implant NMOS VT adjust: boron at 30keV and 5e12/cm² tuning threshold to 0.7V for memory array
45. Implant PMOS VT adjust: BF2 at 50keV and 3e12/cm² setting PMOS threshold for peripheral circuits

## Tunnel Oxide Formation (Steps 46-55)

46. Strip screening oxide: HF dip removing sacrificial oxide and exposing pristine silicon surface
47. Perform pre-gate clean: industry-standard RCA process achieving <1e10/cm² surface metallic contamination
48. Load wafers into oxidation furnace: ultra-clean vertical furnace with <1ppb metallic contamination
49. Perform hydrogen bake: 900°C in H2 for 30 minutes removing native oxide and creating atomically smooth surface
50. Grow tunnel oxide: 9nm thermal oxide at 850°C in dry O2 with 50ppm HCl for gettering
51. Control oxidation kinetics: 45-minute process achieving ±0.2nm thickness uniformity across wafer
52. Perform post-oxidation anneal: 950°C in N2 for 30 minutes densifying oxide and reducing trap density
53. Measure tunnel oxide thickness: spectroscopic ellipsometry mapping thickness at 49 points per wafer
54. Verify oxide quality: time-dependent dielectric breakdown testing on monitor wafers ensuring >10 years reliability
55. Perform electrical characterization: C-V measurements confirming interface trap density <1e10/cm²-eV

## Floating Gate Formation (Steps 56-65)

56. Deposit floating gate polysilicon: LPCVD at 620°C using silane creating 100nm undoped poly layer
57. Control deposition uniformity: <2% thickness variation across wafer ensuring consistent coupling ratios
58. Perform in-situ phosphorus doping: POCl3 diffusion doping polysilicon to 1e20/cm³ for conductivity
59. Anneal floating gate: 900°C for 30 minutes activating dopants and reducing grain boundary defects
60. Pattern floating gate mask: applying chemically amplified resist and exposing with 193nm ArF scanner
61. Develop floating gate pattern: using 0.26N TMAH developer with critical dimension <80nm
62. Etch floating gate polysilicon: high-density plasma RIE with HBr/Cl2/O2 achieving vertical sidewalls
63. Implement etch endpoint detection: optical emission spectroscopy monitoring detecting tunnel oxide exposure
64. Clean post-etch residues: oxygen plasma descum followed by dilute HF dip removing polymers
65. Inspect floating gate structures: top-down SEM measuring critical dimensions with <3nm 3-sigma variation

## Interpoly Dielectric (Steps 66-75)

66. Grow bottom ONO oxide: thermal oxidation at 900°C creating 4nm SiO2 on floating gate surface
67. Deposit ONO nitride: LPCVD Si3N4 at 780°C with 6nm thickness providing high dielectric constant
68. Grow top ONO oxide: thermal oxidation at 900°C creating 5nm SiO2 completing ONO stack
69. Verify ONO quality: measure 15nm equivalent oxide thickness with leakage current <1e-9 A/cm²
70. Perform ONO densification: 1000°C anneal in N2O ambient improving breakdown strength
71. Test interpoly breakdown: applying ramped voltage on test structures ensuring >12V breakdown voltage
72. Measure coupling ratio: C-V testing confirming 0.6 capacitive coupling between control and floating gates
73. Clean ONO surface: piranha solution (H2SO4:H2O2) removing organic contaminants before control gate
74. Perform pre-deposition clean: SC-1 and SC-2 sequence achieving ultra-clean surface
75. Hydrogen bake: 800°C in forming gas improving ONO/polysilicon interface quality

## Control Gate Formation (Steps 76-85)

76. Deposit control gate polysilicon: LPCVD at 620°C creating 150nm second poly layer
77. In-situ doping: phosphorus doping during deposition achieving 5e19/cm³ sheet resistance <10 Ω/square
78. Deposit tungsten silicide: 100nm WSi2 via sputtering reducing control gate resistance to <5 Ω/square
79. Pattern polycide stack: applying resist and exposing control gate wordline mask
80. Etch polycide: plasma etch with Cl2/CF4 chemistry creating self-aligned gate structures
81. Stop on ONO layer: precise endpoint detection preventing damage to interpoly dielectric
82. Create stacked gate structure: resulting in floating gate completely surrounded by dielectric except channel
83. Implement sidewall oxidation: growing 5nm oxide on poly sidewalls for electrical isolation
84. Measure wordline resistance: four-point probe confirming <100Ω resistance across 10mm wordline length
85. Inspect gate stack profile: cross-sectional SEM verifying vertical profiles and proper layer thicknesses

## Source/Drain Formation (Steps 86-95)

86. Deposit sidewall spacer oxide: PECVD TEOS at 400°C creating 50nm conformal coating
87. Anisotropic spacer etch: RIE with CHF3/CF4 leaving spacers on gate sidewalls for LDD offset
88. Pattern LDD implant mask: photolithography defining lightly-doped drain regions
89. Implant LDD regions: arsenic at 40keV and 5e13/cm² creating graded source/drain junctions
90. Deposit main spacer nitride: 80nm Si3N4 via PECVD providing thicker offset for deep S/D implants
91. Etch spacer nitride: anisotropic RIE creating 120nm total spacer width on gate sidewalls
92. Pattern source/drain mask: protecting areas not requiring heavy N+ implant
93. Implant deep source/drain: arsenic at 80keV and 5e15/cm² creating 150nm deep junctions
94. Activate source/drain: rapid thermal anneal at 1000°C for 10 seconds minimizing dopant diffusion
95. Measure junction depth: SIMS profiling confirming 150nm junction depth with abrupt profiles

## Metallization Preparation (Steps 96-105)

96. Deposit pre-metal dielectric: 500nm BPSG (borophosphosilicate glass) via PECVD at 450°C
97. Perform BPSG reflow: 850°C anneal in N2 flowing glass for planarization and doping activation
98. Pattern contact mask: photolithography opening contact holes to source/drain and gate structures
99. Etch contact vias: high aspect ratio RIE with CHF3/CF4 stopping on silicon with minimal overetch
100. Clean contact holes: wet HF dip removing native oxide followed by SC-1 organic clean
101. Perform pre-silicide clean: SC-2 clean followed by dilute HF dip immediately before metal deposition
102. Sputter titanium: 30nm Ti layer via PVD at room temperature for silicide formation
103. Form titanium silicide: rapid thermal anneal at 650°C creating low-resistance C49-TiSi2 phase
104. Strip unreacted titanium: piranha solution selectively removing Ti from oxide while preserving TiSi2
105. Anneal silicide: 850°C RTA converting C49 to lower-resistance C54-TiSi2 phase with <5 Ω/square

## First Metal Layer (Steps 106-115)

106. Deposit barrier/adhesion layer: PVD TiN 50nm preventing aluminum-silicon interaction
107. Sputter aluminum-copper: 500nm Al(0.5%Cu) via PVD at 200°C for low-resistance interconnects
108. Deposit anti-reflection coating: 30nm TiN preventing reflections during metal patterning lithography
109. Pattern Metal-1 mask: applying thick resist for metal etch and exposing bitline routing
110. Etch metal stack: Cl2/BCl3 plasma removing TiN/AlCu/TiN stopping on underlying dielectric
111. Verify etch completion: optical endpoint detection monitoring aluminum emission lines
112. Strip metal resist: oxygen plasma ash followed by sulfuric acid clean removing residues
113. Measure metal linewidth: CD-SEM confirming 200nm minimum metal pitch meeting design rules
114. Test metal resistance: four-point probe sheet resistance measurement <0.03 Ω/square
115. Inspect metal integrity: automated optical inspection detecting shorts, opens, and bridging defects

## Interlayer Dielectric and Via (Steps 116-125)

116. Deposit ILD oxide: 800nm PECVD TEOS at 400°C insulating Metal-1 from Metal-2 layer
117. Planarize ILD: chemical-mechanical polish achieving <30nm surface roughness for next metal
118. Pattern via mask: photolithography defining inter-metal connections
119. Etch vias: RIE with CHF3/CF4 opening holes to underlying Metal-1 with 200nm diameter
120. Clean via holes: oxygen plasma descum followed by wet clean removing etch polymers
121. Sputter via barrier: 50nm TiN PVD preventing copper/aluminum diffusion
122. Fill vias with tungsten: CVD W using WF6 and H2 completely filling via holes
123. CMP tungsten: chemical-mechanical polish removing excess W and stopping on ILD oxide
124. Measure via resistance: kelvin test structures confirming <2Ω per via resistance
125. Test via integrity: scanning acoustic microscope detecting voids in tungsten fill

## Second Metal Layer (Steps 126-135)

126. Deposit Metal-2 barrier: 50nm TiN adhesion/barrier layer via PVD sputtering
127. Sputter Metal-2 aluminum: 700nm Al(0.5%Cu) for power distribution and wordline connections
128. Pattern Metal-2 mask: thick resist lithography for top metal layer routing
129. Etch Metal-2 stack: chlorine-based plasma etch with laser endpoint detection
130. Measure Metal-2 CD: automated metrology confirming 300nm minimum line/space dimensions
131. Deposit passivation oxide: 1μm PECVD oxide protecting underlying metal from moisture
132. Deposit passivation nitride: 500nm PECVD Si3N4 providing hermetic moisture barrier
133. Pattern pad opening mask: exposing bond pad areas for wire bonding
134. Etch pad openings: plasma etch removing nitride and oxide from bond pads
135. Clean and prepare pads: aluminum surface treatment ensuring wire bond adhesion

## Charge Pump and Peripheral Circuits (Steps 136-145)

136. Verify charge pump operation: testing on-chip generation of +9V programming voltage
137. Test negative pump: confirming -9V erase voltage generation with <100mV ripple
138. Characterize pump efficiency: measuring 70% power conversion efficiency at 100μA load
139. Test voltage regulators: verifying 1.8V and 3.3V internal supplies with <2% tolerance
140. Verify sense amplifiers: testing 100μA current sensing capability with 10ns response time
141. Test address decoders: confirming proper row/column selection across all 8M addresses
142. Characterize access time: measuring 70ns random access time from address to valid data
143. Test page buffer: verifying 256-byte buffer operation for fast sequential reads
144. Verify ECC engine: testing 4-bit error correction capability with hardware syndrome calculation
145. Test clock divider: confirming internal timing generation from SPI clock input up to 104MHz

## Array Programming and Testing (Steps 146-160)

146. Perform initial erase: erasing entire memory array to "1" state via Fowler-Nordheim tunneling
147. Apply erase voltage: pulsing -9V on control gate while grounding source/drain and substrate
148. Verify erase state: checking all cells exceed 3.5V threshold voltage after erase operation
149. Program test patterns: writing alternating "0" and "1" patterns to verify cell programming
150. Apply program voltage: +9V on control gate with 6V on drain, 0V source injecting electrons into floating gate
151. Verify program state: confirming programmed cells below 1.5V threshold with >2V margin
152. Measure program time: verifying 20μs per byte programming with incremental step pulse algorithm
153. Test program verify: checking automatic program-verify loop ensures proper threshold voltage
154. Perform block erase: testing 4KB sector erase operation completing in <200ms
155. Verify erase uniformity: measuring threshold voltage distribution with <500mV sigma across sector
156. Test program disturb: verifying unselected cells maintain data during adjacent cell programming
157. Test erase disturb: confirming programmed cells retain data during sector erase operations
158. Measure retention: accelerated stress testing predicting >20 year data retention at 85°C
159. Test endurance: cycling cells through 100,000 program/erase cycles verifying functionality
160. Verify error rate: confirming raw bit error rate <1e-6 before ECC correction after endurance cycling

## SPI Interface Testing (Steps 161-170)

161. Test SPI commands: verifying read, write, erase, and status register operations
162. Verify chip select: testing CS# pin properly enables/disables device communication
163. Test clock polarity: confirming CPOL=0 and CPHA=0 SPI mode compatibility
164. Measure setup/hold times: verifying 5ns data setup and 5ns hold time margins
165. Test standard SPI read: confirming 13MHz single-bit read throughput (104Mbps clock ÷ 8)
166. Verify fast read command: testing 80MHz clock rate with dummy cycles for propagation delay
167. Test dual-SPI mode: verifying 2-bit parallel operation doubling throughput to 26MB/s
168. Verify quad-SPI mode: testing 4-bit QSPI achieving 52MB/s (416Mbps) maximum throughput
169. Test continuous read mode: verifying mode bits enabling command-less sequential reads
170. Measure SPI power: confirming <5mA active current at 104MHz and <1μA deep power-down current

## Electrical Characterization (Steps 171-180)

171. Measure supply current: testing active read current <10mA and standby current <50μA
172. Test voltage range: verifying operation across 2.7V to 3.6V supply voltage range
173. Characterize power-down: confirming <1μA current in deep power-down mode with data retention
174. Test I/O levels: verifying CMOS-compatible inputs with VIL<0.8V and VIH>2.0V at 3.3V VCC
175. Measure output drive: confirming ±8mA output current capability driving 30pF capacitive loads
176. Test input protection: verifying ESD protection >2000V HBM on all pins
177. Characterize temperature range: testing functionality from -40°C to +85°C industrial temperature range
178. Test automotive grade: extended qualification from -40°C to +125°C for automotive applications
179. Measure access time: verifying 55ns typical random access time at 85°C worst case
180. Test timing parameters: confirming all setup, hold, and propagation times meet datasheet specifications

## Wafer Sort and Probe (Steps 181-190)

181. Load wafer on probe station: automated wafer handler placing 300mm wafer on temperature-controlled chuck
182. Perform wafer alignment: optical recognition locating die positions with <10μm accuracy
183. Test first die: needle probe card contacting bond pads applying test vectors
184. Execute parametric tests: measuring supply current, programming voltage, and I/O levels
185. Run functional tests: writing/reading test patterns verifying memory array integrity
186. Test at speed: running tests at 104MHz maximum clock frequency ensuring AC performance
187. Apply ink mark: marking failing die with automated inking system for post-saw rejection
188. Record bin data: categorizing die by performance bins (speed grade, power consumption)
189. Create wafer map: generating visual representation showing good die yield typically >90%
190. Test redundancy: evaluating spare row/column usage and trimming fuse settings for yield recovery

## Packaging Process (Steps 191-210)

191. Saw wafer: diamond blade dicing separating individual die with <5μm dicing accuracy
192. Pick and place die: vacuum wand transferring known-good die to package lead frame
193. Apply die attach epoxy: silver-filled adhesive dispensed on die pad with 50μm thickness
194. Place die: precision placement achieving <25μm positional accuracy on lead frame
195. Cure die attach: 175°C thermal cure for 2 hours bonding die to lead frame
196. Wire bond connections: gold or copper wire bonding connecting die pads to package leads
197. Bond SPI interface pins: CS#, CLK, SI, SO, WP#, HOLD# connected with 25μm diameter wire
198. Bond power pins: VCC and GND using dual or triple bonds for low resistance <50mΩ
199. Inspect wire bonds: automated vision system checking bond placement and loop height
200. Mold package: transfer molding with epoxy molding compound encapsulating die and bonds
201. Cure mold compound: post-mold cure at 175°C for 4 hours fully crosslinking epoxy
202. Trim and form leads: singulating individual packages and forming leads for surface mount
203. Apply package marking: laser marking part number, date code, and lot traceability information
204. Inspect package: automated optical inspection checking dimensions, lead coplanarity <100μm
205. Bake packages: 125°C for 24 hours removing moisture before electrical test
206. Program device ID: fusing unique serial number and configuration bits for traceability
207. Perform electrical test: final test on automated handler verifying all functionality at speed
208. Test at temperature: hot (85°C) and cold (0°C) testing ensuring temperature margins
209. Burn-in screening: optional 125°C dynamic burn-in for 48 hours on high-reliability parts
210. Final quality audit: sampling packages for destructive physical analysis and reliability verification

## Memory Architecture and Performance

The 128Mb NOR flash features a 16-bit wide data bus organized as 8M x 16-bit configuration with 4096 individually erasable 4KB sectors. The memory array uses a NOR architecture where each cell connects directly to bitlines, enabling fast random access with 55ns typical access time. The floating gate stores approximately 100 electrons representing a programmed "0" state, while an erased cell with no stored charge represents a "1" state with >2V threshold voltage margin between states.

The SPI interface supports multiple modes: standard SPI at 104MHz providing 13MB/s throughput, dual-SPI at 26MB/s, and quad-SPI reaching 52MB/s for fast sequential reads. The device integrates a 256-byte page buffer enabling fast sequential access patterns common in code execution applications.

## Programming and Erase Mechanisms

Programming occurs through channel hot electron injection where high drain voltage (6V) and control gate voltage (9V) create energetic electrons that tunnel through the 9nm tunnel oxide into the floating gate. The incremental step pulse programming algorithm applies 20μs program pulses followed by verify reads, adjusting the pulse count until cells reach target threshold voltage with <100mV precision.

Erase operations use Fowler-Nordheim tunneling where -9V applied to control gate relative to grounded source/drain creates high electric fields (10MV/cm) across tunnel oxide, extracting electrons from floating gate back to substrate. Sector erase completes in <200ms, much faster than programming due to parallel operation on all cells within the 4KB sector.

## Reliability and Endurance

The device specifies 100,000 program/erase cycle endurance per sector with <1e-6 raw bit error rate after cycling when tested at 85°C. The integrated 4-bit ECC engine improves effective error rate to <1e-12 after correction. Data retention exceeds 20 years at 85°C storage temperature, validated through accelerated stress testing at 125°C and extrapolation using Arrhenius models.

The tunnel oxide quality directly determines both endurance and retention. The 9nm thermal oxide grown at 850°C achieves <1e10/cm²-eV interface trap density and >10 years time-dependent dielectric breakdown lifetime under programming stress. Trap generation during cycling eventually degrades the oxide, limiting endurance, while charge leakage through oxide defects limits data retention time.

## Quality and Specifications

Final devices meet JEDEC standards for NOR flash memory with full industrial temperature range operation (-40°C to +85°C) and automotive grade versions extending to +125°C. The quad-SPI interface provides compatibility with industry-standard command sets enabling drop-in replacement across multiple suppliers. ESD protection exceeds 2000V HBM on all pins meeting automotive requirements.

Manufacturing yields typically exceed 90% at probe and >98% after packaging, with defect densities <0.1 defects/cm². The 128Mb density provides optimal cost-performance for embedded applications including BIOS storage, firmware code storage, and data logging applications requiring fast random access and reliable non-volatile storage.

