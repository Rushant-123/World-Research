---
title: "DOCSIS Chip"
company: "Broadcom"
country: "United States"
selling_price: 15.00
inputs:
  - name: "Silicon Wafer"
    cost: 2.00
    link: "silicon-wafer"
  - name: "Photomask Set"
    cost: 2.50
    link: "photomask-set"
  - name: "Package Substrate"
    cost: 1.50
    link: "package-substrate"
  - name: "Bond Wire"
    cost: 0.30
    link: "bond-wire"
value_created: 8.70
---

1. Design DOCSIS 3.1 specification architecture supporting 32 downstream OFDM channels and 8 upstream OFDMA channels with full-duplex capability.
2. Create mixed-signal IC design partitioning digital baseband processor, analog RF front-end, and MAC layer controller into functional blocks.
3. Design digital baseband using 28nm CMOS process node to support 10 Gbps downstream and 1 Gbps upstream data rates.
4. Architect ARM Cortex-A53 dual-core processor running at 1.5 GHz for packet processing and protocol stack execution.
5. Design OFDM demodulator supporting 4K FFT with carrier frequencies from 54 MHz to 1218 MHz for downstream reception.
6. Create OFDMA modulator for upstream transmission supporting 64-QAM to 4096-QAM modulation schemes with adaptive coding.
7. Design forward error correction engine implementing LDPC and BCH codes with decoding throughput of 12 Gbps.
8. Architect DMA engine with 8 channels supporting scatter-gather operations for efficient data movement between processor and peripherals.
9. Design PCIe Gen 3.0 interface with 4 lanes providing 32 Gbps bidirectional bandwidth to host system.
10. Create Ethernet MAC supporting 10GBASE-T with full IEEE 802.3 compliance and hardware checksum offload.
11. Design RF tuner covering 54-1218 MHz with integrated LNA providing 15 dB gain and 3 dB noise figure.
12. Create programmable gain amplifier with 60 dB dynamic range controlled by 12-bit DAC for input signal conditioning.
13. Design 12-bit ADC running at 204.8 MSPS for downstream signal digitization with ENOB of 10.5 bits.
14. Architect 14-bit DAC running at 204.8 MSPS for upstream signal generation with SFDR exceeding 75 dBc.
15. Design analog mixer with integrated local oscillator PLL covering 950-2450 MHz for frequency conversion.
16. Create clock generation system using 25 MHz reference crystal with multiple PLLs generating processor, DDR, and sampling clocks.
17. Design DDR4 memory controller supporting 2400 MT/s operation with dual channels and ECC support.
18. Architect power management unit with 5 independent voltage domains using integrated DC-DC converters and LDO regulators.
19. Design thermal monitoring system with 8 distributed temperature sensors reporting to central management controller.
20. Create security engine implementing AES-256, 3DES, and RSA-4096 encryption with hardware key storage.
21. Design OTP memory block storing 16 KB of configuration data, MAC addresses, and cryptographic keys.
22. Architect GPIO controller with 32 programmable pins supporting interrupt generation and hardware debouncing.
23. Design SPI master controller supporting quad-SPI mode for external flash memory interface at 104 MHz.
24. Create I2C master/slave controller supporting standard, fast, and high-speed modes for peripheral communication.
25. Design UART controller with 16-byte FIFO supporting baud rates up to 3 Mbps for debug console.
26. Architect interrupt controller supporting 256 interrupt sources with programmable priority levels and vectoring.
27. Design watchdog timer with 32-bit counter and configurable timeout for system reliability.
28. Create RTC module with battery backup support maintaining time across power cycles.
29. Design JTAG boundary scan controller implementing IEEE 1149.1 standard for manufacturing test.
30. Perform RTL coding in SystemVerilog for all digital logic blocks with clock domain crossing verification.
31. Create comprehensive testbenches using UVM methodology simulating DOCSIS protocol transactions.
32. Run functional simulation using VCS simulator with code coverage exceeding 98% for all modules.
33. Perform static timing analysis using PrimeTime ensuring setup and hold margins exceed 100 ps at all corners.
34. Execute formal verification using JasperGold proving protocol FSM correctness and deadlock freedom.
35. Run power analysis using PrimePower estimating dynamic power at 3.8W and leakage at 450 mW.
36. Perform synthesis using Design Compiler targeting 28nm CMOS library with 0.9V core voltage.
37. Optimize logic for area achieving 85% cell utilization while meeting timing constraints.
38. Run DFT insertion adding scan chains, MBIST for memories, and ATPG patterns achieving 99.5% fault coverage.
39. Perform place and route using ICC2 tool creating 12-layer metal stack with copper interconnects.
40. Create power grid using top two metal layers with 2.5 um wide straps providing 50 mA/um current density.
41. Place decoupling capacitors totaling 15 nF across die surface for power supply stabilization.
42. Route clock trees using H-tree structure achieving 15 ps skew across all 450,000 flip-flops.
43. Perform signal integrity analysis verifying crosstalk noise below 50 mV on critical nets.
44. Run IR drop analysis ensuring worst-case voltage drop below 50 mV across entire power network.
45. Execute electromigration analysis verifying all metal segments operate below 50% of EM limits.
46. Perform antenna rule checking and fix violations using diode insertion on long routing paths.
47. Run LVS verification using Calibre comparing extracted layout netlist against golden RTL netlist.
48. Execute DRC checking verifying compliance with foundry design rules for 28nm process.
49. Perform ERC checking validating proper connectivity of power, ground, and substrate contacts.
50. Extract parasitic capacitance and resistance using StarRC for post-layout timing analysis.
51. Run post-layout timing analysis with extracted parasitics verifying timing closure at all PVT corners.
52. Perform mixed-signal simulation using AMS designer co-simulating digital and analog blocks.
53. Create GDSII database with 145 mask layers including optical proximity correction features.
54. Generate fabrication data including layer mapping, fill pattern specifications, and process parameters.
55. Order silicon wafer batch from foundry specifying 28nm CMOS technology with 300mm wafer size.
56. Clean wafers using RCA process with SC-1 and SC-2 solutions removing organic and metallic contaminants.
57. Grow 8nm gate oxide layer using thermal oxidation at 850C in ultra-pure oxygen ambient.
58. Deposit high-k dielectric hafnium oxide layer using ALD process to 2.5nm thickness.
59. Sputter deposit titanium nitride work function metal at 4nm thickness for NMOS and PMOS gates.
60. Deposit polysilicon gate electrode using LPCVD at 100nm thickness with in-situ phosphorus doping.
61. Pattern gate structures using 193nm immersion lithography with OPC and double patterning.
62. Etch polysilicon gates using plasma RIE with BCl3/Cl2 chemistry achieving 85-degree sidewall angle.
63. Implant source/drain extension regions using arsenic at 5 keV energy and 2e14/cm2 dose for NMOS.
64. Implant source/drain extensions using boron at 3 keV energy and 3e14/cm2 dose for PMOS.
65. Deposit silicon nitride spacer layer at 20nm thickness using PECVD process.
66. Anisotropically etch spacers using CHF3 plasma creating 15nm sidewall spacer width.
67. Implant deep source/drain regions using phosphorus at 15 keV and 5e15/cm2 dose for NMOS.
68. Implant deep source/drain regions using BF2 at 20 keV and 4e15/cm2 dose for PMOS.
69. Perform rapid thermal anneal at 1050C for 5 seconds activating dopants and repairing crystal damage.
70. Deposit silicide-blocking nitride layer and pattern to protect gate resistors in analog circuits.
71. Clean wafer surface using dilute HF removing native oxide before silicidation.
72. Sputter deposit 8nm cobalt layer for self-aligned silicide formation on gates and source/drains.
73. Anneal at 450C for 30 seconds forming cobalt silicide with sheet resistance below 5 ohm/square.
74. Strip unreacted cobalt using sulfuric acid and peroxide mixture.
75. Anneal at 650C for 30 seconds converting cobalt silicide to low-resistance phase.
76. Deposit pre-metal dielectric using PECVD silicon dioxide to 200nm thickness.
77. Planarize surface using CMP achieving 50nm total thickness variation across wafer.
78. Pattern contact holes using 193nm lithography and oxide etch exposing silicide contacts.
79. Clean contact holes using dilute HF removing residual oxide and contaminants.
80. Sputter deposit 20nm titanium barrier layer followed by 30nm titanium nitride adhesion layer.
81. Fill contacts using CVD tungsten deposition to 300nm thickness with excellent gap-fill properties.
82. Perform CMP planarization removing excess tungsten and stopping on nitride barrier layer.
83. Deposit first metal layer using PVD aluminum-copper alloy to 200nm thickness.
84. Pattern metal-1 using 193nm lithography and aluminum etch defining local interconnects.
85. Deposit inter-layer dielectric using low-k carbon-doped oxide with k-value of 2.8.
86. Planarize ILD using CMP preparing surface for via formation.
87. Pattern and etch via-1 openings using dual-damascene process for copper metallization.
88. Deposit tantalum nitride barrier layer at 5nm thickness using PVD process.
89. Seed copper layer at 50nm thickness using PVD for electroplating nucleation.
90. Electroplate copper filling vias and trenches to 400nm thickness with superfill chemistry.
91. Anneal copper at 250C improving grain structure and reducing resistivity to 1.8 uohm-cm.
92. Perform CMP planarization removing excess copper and barrier layer exposing ILD surface.
93. Repeat ILD deposition, via patterning, barrier deposition, and copper damascene for metal-2 layer.
94. Continue building metal stack repeating process for metal-3 through metal-10 layers.
95. Create thicker metal-11 and metal-12 layers at 2 um thickness for power distribution.
96. Deposit final passivation layer using silicon nitride at 800nm thickness for moisture protection.
97. Pattern pad openings exposing bond pad metal for wire bonding.
98. Deposit aluminum pad metal at 1.5 um thickness with barrier layers.
99. Perform final passivation using polyimide layer at 5 um thickness for mechanical protection.
100. Pattern polyimide openings aligned to bond pads for wire bonding access.
101. Test wafer using automated prober measuring critical parameters on each die.
102. Measure RF performance testing tuner noise figure, gain, and frequency response on test structures.
103. Test ADC measuring DNL, INL, SNR, and SFDR performance across full input range.
104. Test DAC measuring static and dynamic linearity specifications.
105. Verify PLL performance measuring phase noise, lock time, and jitter specifications.
106. Test digital logic using functional patterns verifying processor, memory, and peripheral operation.
107. Measure leakage current verifying IDDQ below 50 mA at nominal voltage and temperature.
108. Test high-speed interfaces measuring eye diagrams for PCIe and DDR4 signals.
109. Bin dies based on test results sorting into speed grades and quality levels.
110. Ink dies failing critical tests for rejection during assembly.
111. Thin wafer backside using grinding process reducing thickness from 775 um to 350 um.
112. Apply backside coating protecting active surface during dicing.
113. Mount wafer on dicing tape stretched over metal frame.
114. Dice wafer using diamond blade saw cutting along scribe lines at 30mm/s speed.
115. Expand dicing tape separating dies by 2mm spacing for pick-and-place operation.
116. Inspect dies using automated optical inspection rejecting dies with edge chips or cracks.
117. Pick known-good dies using vacuum collet and transfer to packaging station.
118. Prepare package substrate with 324-pin BGA configuration and 0.8mm ball pitch.
119. Apply die attach adhesive using precision dispenser depositing 0.5 mg of silver-filled epoxy.
120. Place die onto substrate die pad with 25 um placement accuracy using vision alignment.
121. Cure die attach adhesive at 175C for 60 minutes in nitrogen atmosphere.
122. Inspect die placement verifying centering and tilt within specifications.
123. Load substrate into wire bonder machine with 12-station carousel.
124. Thread 25 um diameter gold wire through capillary tool with 50 um inner diameter.
125. Bond first wire from die pad to substrate pad using thermosonic ball bonding.
126. Apply 40 gram force and 150C temperature forming 50 um ball diameter.
127. Route wire in optimized path avoiding crossovers and maintaining 100 um minimum spacing.
128. Bond second end to substrate pad using crescent bond with 80 gram force.
129. Cut wire and form new ball for next bond using electronic flame-off discharge.
130. Continue bonding all 324 signal and power connections with 99.99% first-pass yield.
131. Inspect wire bonds using automated optical inspection checking ball size, placement, and loop height.
132. Encapsulate die and wire bonds using transfer molding with epoxy molding compound.
133. Preheat substrate to 175C before molding compound injection.
134. Inject molding compound at 70 bar pressure filling mold cavity in 8 seconds.
135. Cure molding compound at 175C for 90 seconds achieving full cross-linking.
136. Remove substrate from mold after cooling to 60C to prevent thermal shock.
137. Deflash package removing excess molding compound using media blasting.
138. Mark package using laser marking system writing part number, date code, and traceability information.
139. Trim substrate cutting away tie bars and separating individual packages.
140. Clean package using plasma treatment removing organic residues and flux.
141. Apply solder balls to BGA pads using flux-assisted ball placement.
142. Reflow solder balls at 245C peak temperature with controlled ramp rates.
143. Clean flux residue using aqueous wash process with DI water rinse.
144. Perform X-ray inspection verifying solder ball attachment and checking for voids.
145. Bake packages at 125C for 24 hours removing absorbed moisture before testing.
146. Load packages into automated test handler with temperature control from -40C to 125C.
147. Socket package onto test board with high-speed probe interface.
148. Apply power sequencing bringing up 0.9V core, 1.8V IO, and 3.3V analog supplies.
149. Measure power supply current verifying quiescent current below 100 mA.
150. Download test firmware through JTAG interface initializing processor and peripherals.
151. Test internal oscillators measuring frequency accuracy within 50 ppm at 25C.
152. Calibrate PLLs measuring VCO frequency range and programming calibration values to OTP.
153. Test DDR4 interface running memory training sequences and testing all 64 data bits.
154. Execute MBIST patterns testing internal SRAM and cache memories for stuck-at faults.
155. Test PCIe interface performing link training and measuring TX/RX eye diagrams.
156. Verify Ethernet MAC operation using loopback testing at all supported speeds.
157. Test RF tuner sweeping across frequency range and measuring gain flatness within 2 dB.
158. Calibrate ADC measuring offset and gain error then programming correction coefficients to registers.
159. Test ADC dynamic performance measuring SNR exceeding 65 dB and SFDR exceeding 75 dBc.
160. Calibrate DAC measuring DNL and INL across full range programming trim values.
161. Test DAC dynamic performance measuring SFDR exceeding 75 dBc across Nyquist bandwidth.
162. Test upstream modulator generating 64-QAM signal and measuring EVM below -40 dB.
163. Test downstream demodulator receiving OFDM signal and measuring BER below 1e-9.
164. Verify FEC engine performance measuring decoding throughput and error correction capability.
165. Test AES encryption engine verifying correctness against NIST test vectors.
166. Program unique MAC address and device certificate into OTP memory.
167. Test temperature sensors verifying accuracy within 3C across operating range.
168. Measure thermal shutdown trigger temperature verifying threshold at 125C.
169. Test power management verifying proper sequencing and voltage regulation under load.
170. Execute functional test suite running DOCSIS protocol transactions end-to-end.
171. Generate upstream traffic testing symbol timing, frequency accuracy, and power control.
172. Receive downstream traffic verifying channel bonding and packet reassembly functions.
173. Test ranging procedure verifying proper timing offset adjustment and power leveling.
174. Test BPI+ security negotiating encryption keys and establishing secure channel.
175. Measure packet processing throughput achieving 10 Gbps downstream line rate.
176. Test CPU performance running Dhrystone benchmark achieving 5000 DMIPS.
177. Verify GPIO functionality testing all pins for proper drive strength and pull resistors.
178. Test SPI interface programming external flash memory at 104 MHz clock rate.
179. Test I2C interface communicating with peripheral devices at 400 kHz fast mode.
180. Verify interrupt controller handling simultaneous interrupts with correct priority.
181. Test watchdog timer verifying proper reset generation on timeout.
182. Measure power consumption verifying typical operation at 3.5W and idle at 800 mW.
183. Perform temperature cycling testing 100 packages from -40C to 125C for 500 cycles.
184. Execute high temperature operating life test running packages at 125C for 1000 hours.
185. Perform humidity test storing packages at 85C and 85% RH for 168 hours.
186. Conduct mechanical shock testing dropping packages on hard surface from 1 meter height.
187. Perform vibration testing subjecting packages to 20G acceleration across 10-2000 Hz range.
188. Measure ESD robustness using HBM model verifying 2 kV protection on all pins.
189. Test latch-up immunity injecting 100 mA current on all IO pins with no SCR triggering.
190. Perform DOCSIS 3.1 certification testing at CableLabs using reference CMTS equipment.
191. Verify spectral mask compliance measuring out-of-band emissions below -55 dBc limit.
192. Test adaptive equalization compensating for cable impairments across 100m RG6 cable.
193. Measure upstream burst timing accuracy verifying symbol timing within 0.5 us requirement.
194. Program final firmware version including DOCSIS MAC layer software and PHY configuration.
195. Perform final QA audit sampling 0.1% of production lot for comprehensive electrical and DOCSIS compliance testing before shipping to cable modem manufacturers.
