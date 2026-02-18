---
title: "Wireless System-on-Chip"
company: "Broadcom Inc."
country: "United States"
selling_price: 6.0
inputs:
  - name: "Silicon Wafer"
    cost: 0.5
    link: "silicon-wafer"
  - name: "Advanced Lithography"
    cost: 1.0
    link: "photolithography-equipment"
  - name: "RF Design IP"
    cost: 0.5
    link: "chip-design"
  - name: "IC Packaging"
    cost: 0.4
    link: "package-substrate"
  - name: "Testing"
    cost: 0.3
    link: "board-tester"
  - name: "Firmware"
    cost: 0.3
    link: "software-developers"
value_created: 3.0
lead_time_days: 33
minimum_order_quantity: 5000
transportation_method: "truck"
geopolitical_risk: "medium"
price_volatility: "medium"

certifications:
  - "ISO9001"
  - "ISO14001"
data_quality: "estimated"
---

## Manufacturing Process (195 Steps)

### RF Architecture Design & Specification (Steps 1-15)

1. Define wireless SoC specifications: WiFi 6E (802.11ax), Bluetooth 5.3, 2x2 MIMO, 1.2 Gbps peak throughput
2. Design RF architecture supporting 2.4 GHz (2400-2483.5 MHz), 5 GHz (5150-5850 MHz), and 6 GHz (5925-7125 MHz) bands
3. Specify dual-band power amplifiers: 2.4 GHz PA with +20 dBm output, 5/6 GHz PA with +18 dBm output
4. Design low-noise amplifiers with noise figure targets: 2.4 GHz LNA <2.5 dB, 5/6 GHz LNA <3.0 dB
5. Architect transceiver signal chain: antenna switch, LNA, mixer, baseband filter, ADC/DAC at 160 MHz bandwidth
6. Design integrated Bluetooth subsystem: separate 2.4 GHz path, +10 dBm output power, -94 dBm sensitivity
7. Specify frequency synthesizer PLL with <1 ps RMS jitter, 10 MHz reference, fractional-N architecture
8. Design baseband processor: quad-core ARM Cortex-A53 at 1.5 GHz for MAC/PHY processing
9. Integrate SRAM: 2 MB for packet buffers, WiFi queues, and firmware execution
10. Design power management unit: 5 voltage domains (RF 1.8V, digital core 0.8V, I/O 3.3V, PA 3.6V, SRAM 0.9V)
11. Specify PCIe Gen 3 x1 interface for host connection, USB 3.0 alternative interface
12. Design clock architecture: 40 MHz crystal oscillator input, PLL-generated 480/800/1200 MHz internal clocks
13. Plan thermal management: junction temperature limit 105°C, thermal pad for 2W dissipation
14. Design antenna diversity switching: SP4T switch with <0.4 dB insertion loss, >25 dB isolation
15. Complete RF simulation: EVM targets -40 dB for 64-QAM, -32 dB for 256-QAM, -28 dB for 1024-QAM modulation

### RF Transceiver Circuit Design (Steps 16-30)

16. Design 2.4 GHz LNA: cascode topology, 15 dB gain, 2.2 dB noise figure, +5 dBm input P1dB
17. Design 2.4 GHz mixer: Gilbert cell double-balanced, 10 dB conversion gain, +15 dBm IIP3
18. Design 2.4 GHz power amplifier: class AB configuration, 23 dB gain, 38% PAE at +20 dBm output
19. Design 5/6 GHz LNA: inductively degenerated common-source, 14 dB gain, 2.8 dB NF, wideband matching
20. Design 5/6 GHz mixer: passive switching mixer, 8 dB conversion gain, +18 dBm IIP3, low LO leakage
21. Design 5/6 GHz power amplifier: differential topology, 22 dB gain, 32% PAE at +18 dBm, VSWR protection
22. Design transmit chain: digital predistortion for PA linearization, improving EVM by 5 dB
23. Design receive chain: programmable gain control, 70 dB dynamic range, AGC settling time <10 μs
24. Design I/Q modulator: 160 MHz bandwidth, >40 dB image rejection, <1° phase imbalance
25. Design I/Q demodulator: quadrature accuracy <0.5°, gain matching <0.3 dB, DC offset cancellation
26. Design baseband filters: 7th-order Chebyshev, programmable bandwidth 20/40/80/160 MHz
27. Design ADCs: dual 10-bit 320 MSPS for I/Q channels, ENOB >9.2 bits, power 45 mW per ADC
28. Design DACs: dual 10-bit 320 MSPS for I/Q channels, SFDR >60 dB, THD <-55 dB
29. Design automatic gain control loops: RF AGC with 5-bit control, baseband AGC with 7-bit control
30. Design DC offset cancellation: analog feedback loop, residual offset <2 mV, settling time <5 μs

### Frequency Synthesis & Clock Generation (Steps 31-45)

31. Design main PLL: fractional-N sigma-delta modulator, 24-bit resolution, 2.4-7.2 GHz VCO range
32. Design VCO: LC-tank oscillator, 3.6 GHz center frequency, switched capacitor tuning, phase noise -125 dBc/Hz at 1 MHz
33. Design PLL loop filter: third-order passive, 200 kHz bandwidth, 50° phase margin
34. Design charge pump: 500 μA current, <2% mismatch, low reference spur injection
35. Design frequency dividers: programmable ÷2-÷4 prescaler, ÷4-÷256 main divider for channel selection
36. Design 40 MHz crystal oscillator driver: Pierce configuration, <2 ppm frequency stability, 10 pF load
37. Design sigma-delta modulator: 3rd-order MASH, 200 MHz clock, -70 dB fractional spur level
38. Design PLL calibration: automatic VCO band selection, 16 sub-bands, <100 μs settling time
39. Design transmit LO distribution: differential buffers, quadrature generation with polyphase filter
40. Design receive LO distribution: separate quadrature paths, controlled phase matching <1°
41. Design Bluetooth LO generation: shared VCO, separate divider chain for 2.402-2.480 GHz channels
42. Design reference clock distribution: low-skew buffer tree, <50 ps jitter to all PLL blocks
43. Design clock gating: dynamic power management, gating unused WiFi/Bluetooth blocks saves 40% power
44. Design spread spectrum clocking: triangular modulation, ±0.5% deviation, reduces EMI by 8 dB
45. Complete PLL phase noise budget: integrated jitter 0.8 ps RMS, EVM contribution <-45 dB

### Digital Baseband Processor Design (Steps 46-60)

46. Design OFDM modulator: 256/512/1024/2048-point FFT/IFFT, 20/40/80/160 MHz bandwidth support
47. Design WiFi 6E PHY: 1024-QAM constellation mapping, LDPC encoder/decoder, rate 5/6 coding
48. Design MIMO spatial processing: 2x2 beamforming, maximal ratio combining, zero-forcing equalizer
49. Design channel estimation: long training field correlator, pilot tracking, 52/108/234/468 subcarriers
50. Design time/frequency synchronization: packet detection, AGC training, carrier frequency offset correction ±40 ppm
51. Design MAC controller: A-MPDU aggregation up to 256 frames, block ACK, MU-MIMO scheduling
52. Design DMA engines: 8-channel scatter-gather, PCIe interface, 2 GB/s peak throughput
53. Design security engine: AES-128/256 encryption, 800 Mbps throughput, WPA3-SAE authentication
54. Design Bluetooth baseband: GFSK/π/4-DQPSK modulation, adaptive frequency hopping, 79 channels
55. Design Bluetooth link controller: LE 2M PHY, LE coded PHY (S=2, S=8), connection intervals 7.5-4000 ms
56. Design packet RAM: dual-port SRAM, 8 transmit queues, 4 receive queues, 2048-byte max packet size
57. Design interrupt controller: 64 interrupt sources, priority-based arbitration, MSI-X support
58. Design register interface: APB bus, memory-mapped configuration, 4 KB register space
59. Design debug subsystem: JTAG interface, trace capture, real-time spectrum analyzer mode
60. Integrate ARM cores: instruction/data caches (32 KB each), floating-point unit, NEON SIMD

### Power Management & Analog Blocks (Steps 61-75)

61. Design main LDO regulators: 1.8V RF LDO with 300 mA capability, 0.8V digital core LDO with 1.2A capability
62. Design PA supply regulator: envelope tracking boost converter, 2.5-3.8V dynamic range, 20 MHz bandwidth
63. Design bias generation: bandgap reference, 1.25V output, <50 ppm/°C temperature coefficient
64. Design current references: 10 μA master reference, mirrored to LNA, mixer, PA bias circuits
65. Design temperature sensor: PTAT/CTAT structure, 0.5°C resolution, -40°C to +125°C range
66. Design battery monitor: 12-bit ADC, measures supply voltage, triggers brownout warning at 3.0V
67. Design power-on reset: monitors all supply domains, 100 ms assertion time, glitch-free release
68. Design power sequencing: core power first, RF power second, PA power last, 50 μs ramp times
69. Design sleep mode control: PCIe wake-on-wireless, <5 mW standby power, <1 ms wake latency
70. Design voltage level shifters: 3.3V I/O to 0.8V core translation, 500 MHz operation
71. Design ESD protection: dual-diode clamps on all pins, 2 kV HBM, 200V CDM targets
72. Design substrate noise isolation: deep n-wells for RF blocks, guard rings, separate VDD/VSS domains
73. Design decoupling capacitors: on-die MIM caps, 20 nF total, placed near PA, LNA, PLL blocks
74. Design thermal shutdown: 115°C threshold, hysteresis to 105°C, automatic transmit power reduction
75. Complete power budget: 1.8W peak (2x2 transmit), 900 mW receive, 450 mW idle, 4 mW deep sleep

### Physical Design & Layout (Steps 76-90)

76. Create floorplan: 6x6 mm die size on 16nm FinFET process, RF blocks in upper-left quadrant
77. Place RF components: LNA/PA near bond pads, minimize trace length to antenna pins (<200 μm)
78. Place analog blocks: PLL and VCO in shielded region, distance from digital switching >500 μm
79. Place digital logic: ARM cores in center, packet buffers in lower region, I/O ring around perimeter
80. Route RF signals: coplanar waveguide transmission lines, 50Ω impedance, ground shielding
81. Route LO distribution: differential striplines, matched lengths ±10 μm, >30 dB coupling isolation
82. Route power grid: 10 μm wide VDD/VSS rails, multiple IR drop analysis, <50 mV drop at 1.2A
83. Route clock tree: H-tree structure, balanced buffers, clock skew <20 ps across die
84. Place substrate contacts: tie-down every 50 μm in digital regions, every 20 μm in RF regions
85. Add metal fill: dummy metal for CMP uniformity, 30% density in RF areas, 60% in digital areas
86. Create bond pad ring: 120 pads total (40 signal, 30 power, 30 ground, 20 I/O), 80 μm pitch
87. Design package substrate interface: flip-chip bumps, 200 μm pitch, controlled impedance traces
88. Run LVS verification: extract parasitic capacitances, verify all connections match schematic
89. Run DRC verification: check 16nm design rules, spacing, width, density requirements
90. Run EM/IR simulation: verify current density <1 mA/μm, temperature hot spots <95°C

### Wafer Fabrication - Front End (Steps 91-110)

91. Start with 300 mm silicon wafer, <100> orientation, p-type, 10 Ω-cm resistivity
92. Grow 5 nm gate oxide by rapid thermal oxidation at 1000°C in O₂ ambient
93. Deposit 100 nm polysilicon gate by LPCVD at 620°C, dope with phosphorus to 1×10²⁰ cm⁻³
94. Pattern gate structures using EUV lithography: 16 nm minimum gate length, 13.5 nm wavelength
95. Etch polysilicon gates using Cl₂/HBr plasma, aspect ratio 8:1, sidewall angle 88°
96. Form FinFET structures: etch silicon fins, 8 nm width, 42 nm height, 48 nm pitch
97. Grow 3 nm fin sidewall oxide for isolation and interface quality
98. Deposit high-k dielectric: 2 nm HfO₂ by atomic layer deposition at 300°C
99. Deposit metal gate: 5 nm TiN work function layer, 60 nm tungsten fill
100. Ion implant source/drain: arsenic 5×10¹⁵ cm⁻² at 20 keV for NMOS, BF₂ 3×10¹⁵ cm⁻² for PMOS
101. Activate dopants: rapid thermal anneal at 1050°C for 1 second, forming 15 nm junction depth
102. Deposit 200 nm silicon nitride spacers by PECVD, anisotropic etch to define spacer width 12 nm
103. Form raised source/drain: selective epitaxial growth of Si:P (NMOS) and SiGe:B (PMOS), 40 nm height
104. Silicide contacts: deposit 15 nm nickel, anneal at 450°C forming NiSi, etch unreacted Ni
105. Deposit pre-metal dielectric: 500 nm SiO₂ by PECVD, CMP to planarize within 10 nm
106. Pattern contact vias using 193 nm immersion lithography, 40 nm diameter, aspect ratio 12:1
107. Etch contacts using C₄F₈/CO plasma, achieve 89° sidewall profile, <5% CD variation
108. Fill contacts with tungsten CVD: TiN barrier 5 nm, W plug 35 nm diameter
109. CMP tungsten layer: remove overburden, dishing <8 nm, within-wafer uniformity 4%
110. Verify front-end devices: measure NMOS threshold voltage 0.42V, PMOS -0.38V, gate leakage <1 nA/μm

### Wafer Fabrication - Back End Metallization (Steps 111-125)

111. Deposit Metal 1 layer: 200 nm copper by electroplating, dual-damascene process
112. Pattern Metal 1: lithography and RIE etch of dielectric, line width 28 nm, space 28 nm
113. Deposit copper barrier: 3 nm Ta, 5 nm TaN by PVD sputtering
114. Electroplate copper: 220 nm thickness, fill trenches, seed layer from PVD Cu 20 nm
115. CMP Metal 1: remove excess copper, dishing <15 nm, erosion <10 nm, surface roughness <2 nm
116. Deposit inter-layer dielectric: 150 nm low-k SiCOH, k=2.7, PECVD at 400°C
117. Deposit and pattern Metal 2-7 layers: identical copper dual-damascene, increasing pitch to 56 nm
118. Create MIM capacitors in Metal 4: 20 nm SiN dielectric, 8 fF/μm² capacitance density
119. Deposit thick Metal 8-9 layers: 400 nm copper thickness for power routing, 200 nm pitch
120. Create RF inductors in top metal: 2 μm thick copper, 5-turn spirals, 1-10 nH range, Q=15-25
121. Deposit final passivation: 1 μm SiN by PECVD, moisture barrier, scratch protection
122. Pattern bond pad openings: 70x70 μm pads exposed, Al pad metal 1 μm thick
123. Deposit UBM for flip-chip: 500 nm Al, 1 μm Ni, 100 nm Au by sputtering
124. Backside grind wafer: reduce from 775 μm to 100 μm thickness for thermal performance
125. Complete wafer fabrication: 450 dice per wafer, 9-week cycle time, 16nm FinFET node

### Wafer Test & Probe (Steps 126-140)

126. Mount wafer on probe station: temperature-controlled chuck at 25°C, planarity within 10 μm
127. Perform DC parametric test: measure leakage current on all power domains, <10 μA per die
128. Test digital logic: scan chain test patterns, 95% stuck-at fault coverage, clock frequency to 1.5 GHz
129. Test ARM cores: execute BIST routines, verify caches, FPU, interrupt controller functionality
130. Test SRAM: march algorithm patterns, detect stuck bits, coupling faults, retention at 0.7V
131. Measure PLL performance: lock time <50 μs, phase noise -122 dBc/Hz at 1 MHz offset
132. Test ADCs: DNL <0.5 LSB, INL <1.0 LSB, ENOB 9.3 bits at 320 MSPS, SNDR 57 dB
133. Test DACs: DNL <0.4 LSB, INL <0.8 LSB, SFDR 62 dB, THD -58 dB at 160 MHz output
134. Measure LNA performance: forward gain 15 dB at 2.4 GHz, 14 dB at 5.5 GHz, return loss >12 dB
135. Measure PA performance: output power +20 dBm at 2.4 GHz, +18 dBm at 5.5 GHz, gain compression
136. Test frequency synthesizer: verify all WiFi channels 1-13 (2.4 GHz), 36-165 (5 GHz), 1-233 (6 GHz)
137. Measure RX sensitivity: -85 dBm for 1024-QAM, -90 dBm for 64-QAM, -95 dBm for BPSK
138. Measure TX EVM: -38 dB for 64-QAM, -30 dB for 256-QAM, -26 dB for 1024-QAM at +10 dBm output
139. Bin dice by performance: Grade A (all specs), Grade B (reduced power/frequency), fail (yield 82%)
140. Ink wafer map: mark failing dice with black dot, create electronic bin map for assembly

### Packaging & Assembly (Steps 141-155)

141. Saw wafer into individual dice: diamond blade, 30 μm kerf width, 15 μm/s feed rate
142. Inspect die edges: check for chipping <5 μm, cracks, delamination using optical microscope
143. Pick and place die onto package substrate: flip-chip orientation, 6x6 mm FCBGA package
144. Align die bumps to substrate pads: vision system with ±5 μm accuracy, 200 μm pitch
145. Reflow solder bumps: 260°C peak temperature, 90 seconds above 220°C, nitrogen atmosphere
146. Underfill die: capillary flow of epoxy resin, 50 μm gap fill, cure at 165°C for 1 hour
147. Attach thermal spreader: copper slug 0.5 mm thick, thermal interface material, compression to 50 psi
148. Mold package: epoxy molding compound, transfer molding at 175°C, 6.5x6.5x0.9 mm final size
149. Laser mark package: product code, date code, lot traceability, 2D barcode on top surface
150. Solder ball attach: 0.4 mm diameter SAC305 balls, 169-ball grid array, 0.65 mm pitch
151. Reflow solder balls: peak 250°C, form metallurgical bond to substrate pads
152. Trim package edges: remove excess mold flash, singulation to final dimensions
153. Bake package: 125°C for 24 hours to remove moisture, prevent popcorning during reflow
154. Inspect package: X-ray inspection for void analysis, visual inspection for cracks, dimensions
155. Complete packaging: unit cost $0.40, 10,000 units per day throughput, QFN alternative package option

### RF Calibration & Testing (Steps 156-175)

156. Socket device in RF test fixture: controlled impedance PCB, SMA connectors for antenna ports
157. Program calibration firmware: load via JTAG, initialize register configuration, enable test modes
158. Calibrate DC offsets: I/Q channel offsets at baseband, store correction values in OTP memory
159. Calibrate IQ imbalance: measure gain/phase mismatch, compute correction coefficients, <0.3 dB, <0.5°
160. Calibrate receiver gain: measure AGC lookup table, 1 dB steps, 70 dB range, ±0.5 dB accuracy
161. Calibrate transmitter power: measure output power, create PA bias table, ±0.8 dB accuracy across range
162. Calibrate frequency error: measure crystal oscillator offset, store PPM correction, <±2 ppm accuracy
163. Calibrate RSSI: receive signal strength indicator, compare to calibrated power meter, ±2 dB accuracy
164. Perform 2.4 GHz transmit test: measure channel 1/6/11, power +20/+10/0 dBm, all data rates
165. Measure 2.4 GHz TX spectrum mask: OFDM spectral emissions, -20 dB at ±11 MHz, -28 dB at ±22 MHz
166. Measure 2.4 GHz TX EVM: 1024-QAM -28 dB, 256-QAM -32 dB, 64-QAM -38 dB, 16-QAM -42 dB
167. Perform 5 GHz transmit test: measure channels 36/100/149, power +18/+8/-2 dBm, 80 MHz bandwidth
168. Measure 5 GHz TX spectrum mask: -20 dB at ±40 MHz, -28 dB at ±80 MHz, comply with FCC 15.407
169. Measure 5 GHz TX EVM: HE160 1024-QAM -26 dB, HE80 256-QAM -30 dB, meets WiFi 6E requirements
170. Perform 6 GHz transmit test: channels 1-233, standard/low-power/very-low-power modes
171. Measure 6 GHz TX spectrum: -20 dBr at ±80 MHz for 160 MHz channels, FCC UNII-5 to UNII-8 compliance
172. Test receiver sensitivity: 2.4 GHz -82 dBm (HE20 MCS11), 5 GHz -79 dBm (HE80 MCS11), packet error rate <10%
173. Test receiver selectivity: adjacent channel rejection >16 dB, alternate channel rejection >32 dB
174. Measure receiver maximum input: -10 dBm without desensitization, -30 dBm without saturation
175. Perform Bluetooth RF test: TX power +8 dBm, RX sensitivity -94 dBm, frequency error <±20 kHz

### Protocol Testing & Qualification (Steps 176-190)

176. Configure WiFi 6E test: associate with test AP, establish HE160 link, enable 1024-QAM modulation
177. Test throughput performance: TCP/IP stack, measure 1147 Mbps peak (160 MHz, 2x2, MCS11), 950 Mbps sustained
178. Test OFDMA efficiency: multi-user allocations, 9 RUs per channel, latency reduction vs. OFDM
179. Test target wake time: scheduled access, power save efficiency, 15 mW average in TWT mode
180. Test MU-MIMO: 2-user simultaneous transmission, beamforming, 85% efficiency vs. single-user
181. Test WPA3 security: SAE handshake, PMF (protected management frames), encryption throughput 800 Mbps
182. Test roaming performance: 802.11k/v/r fast BSS transition, <50 ms handoff latency, no packet loss
183. Perform WiFi Alliance certification: WFA certification lab, WiFi 6E certificate, interoperability testing
184. Test Bluetooth Low Energy: advertising, scanning, connection, data transfer up to 1.4 Mbps (2M PHY)
185. Test Bluetooth Classic: A2DP audio streaming, HFP voice calls, SPP data transfer, coexistence with WiFi
186. Test coexistence: simultaneous WiFi and Bluetooth operation, PTA (packet traffic arbitration), throughput impact <15%
187. Test antenna diversity: switching algorithm, RSSI comparison, 3 dB gain over single antenna
188. Test power management: measure deep sleep 4 mW, light sleep 45 mW, RX 900 mW, TX 1.8W
189. Test temperature range: -40°C to +85°C operation, calibration table interpolation, <1 dB power variation
190. Test EMI compliance: radiated emissions <40 dBμV/m at 3m, conducted emissions on DC supply

### Final Testing & Regulatory (Steps 191-195)

191. Perform FCC Part 15 testing: intentional radiator, Section 15.247 (2.4 GHz), 15.407 (5/6 GHz), max EIRP +30 dBm
192. Perform CE RED testing: ETSI EN 301 893 (5 GHz), EN 303 687 (6 GHz), EN 300 328 (2.4 GHz), harmonized standards
193. Perform IC RSS testing: Canada ISED, RSS-247 (WiFi), RSS-130 (Bluetooth), DFS radar detection
194. Test DFS compliance: radar detection and avoidance, 5250-5725 MHz bands, channel vacation time <10 seconds
195. Perform final quality audit: 1000-unit sample, AQL 0.65, electrical test pass rate >99.5%, ship to WiFi module manufacturers
