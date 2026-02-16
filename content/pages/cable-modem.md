---
title: "Cable Modem"
company: "ARRIS, Motorola, Netgear, TP-Link"
country: "United States, China"
selling_price: 120
inputs:
  - name: "Cable Modem SoC"
    cost: 18
    link: "docsis-chip"
  - name: "RF Tuner Chip"
    cost: 8
    link: "rf-tuner"
  - name: "DRAM Memory"
    cost: 6
    link: "dram-chip"
  - name: "Flash Memory"
    cost: 4
    link: "nand-flash"
  - name: "Ethernet PHY Chip"
    cost: 5
    link: "ethernet-phy"
  - name: "Power Supply"
    cost: 12
    link: "ac-adapter"
  - name: "Coax Connector"
    cost: 3
    link: "f-connector"
  - name: "PCB and Assembly"
    cost: 64
    link: "pcb-assembly"
value_created: 0
---

# How to Make a Cable Modem

A cable modem connects your home to the Internet over the same coaxial cable that delivers cable TV. It modulates digital data onto radio frequencies (5-42 MHz upstream, 54-1002 MHz downstream), communicates with the cable company's CMTS (Cable Modem Termination System), and provides Ethernet connectivity to your home network.

## What is it?

A device implementing DOCSIS 3.1 (Data Over Cable Service Interface Specification) protocol, capable of 1-10 Gbps download and 1-2 Gbps upload. Uses QAM (Quadrature Amplitude Modulation) to encode data onto RF carriers, OFDM (Orthogonal Frequency Division Multiplexing) for efficient spectrum use, and channel bonding to combine multiple channels for higher bandwidth.

## Steps to Make:

**DOCSIS System Overview:**
1. Cable modem connects home network to cable TV infrastructure
2. Same coax cable carries TV channels (54-1002 MHz) and Internet data
3. Cable company operates CMTS at headend facility
4. CMTS = Cable Modem Termination System (router + cable modem for ISP side)
5. HFC (Hybrid Fiber-Coax) network: fiber to neighborhood, coax to homes
6. Fiber node serves 250-2000 homes on shared coax segment
7. Bandwidth shared among active users (oversubscription 20:1 to 50:1)
8. DOCSIS versions: 1.0 (1997), 2.0 (2002), 3.0 (2006), 3.1 (2013), 4.0 (2017)

**Cable Modem SoC Selection:**
9. Choose [Cable Modem SoC](docsis-chip) chip that implements DOCSIS protocol
10. SoC = System-on-Chip integrating: CPU core, MAC layer, PHY layer, encryption
11. Major vendors: Broadcom, MaxLinear (acquired Intel's cable modem business)
12. Examples: Broadcom BCM3390 (DOCSIS 3.1), MaxLinear MaxQ616 (DOCSIS 3.1)
13. SoC fabricated on 28nm or 16nm CMOS process
14. Contains ARM or MIPS CPU core (500-1500 MHz) for control plane
15. Hardware accelerators for: AES encryption, forward error correction, QAM modulation
16. Integrated MAC (Media Access Control) implements DOCSIS framing
17. PHY (Physical layer) performs modulation/demodulation

**RF Tuner Design:**
18. Install [RF Tuner Chip](rf-tuner) to select downstream channels
19. Downstream: 54-1002 MHz (DOCSIS 3.1 extends to 1.8 GHz)
20. Upstream: 5-42 MHz (DOCSIS 3.1 extends to 204 MHz)
21. Each DOCSIS 3.0 downstream channel: 6 MHz wide (North America) or 8 MHz (Europe)
22. DOCSIS 3.0 uses 64-QAM or 256-QAM modulation
23. 256-QAM encodes 8 bits per symbol (higher capacity, needs better signal quality)
24. DOCSIS 3.1 downstream: OFDM across 24-192 MHz bandwidth
25. OFDM divides spectrum into thousands of subcarriers (25 kHz or 50 kHz spacing)
26. Each subcarrier independently modulated (adaptive: QPSK to 4096-QAM)
27. Tuner downconverts RF to baseband (near DC)
28. ADC (analog-to-digital converter) samples baseband signal at 200-400 MSPS
29. Tuner must handle signal levels from -15 dBmV to +15 dBmV

**Downstream Signal Processing:**
30. Digital signal from ADC sent to SoC's PHY
31. OFDM demodulation extracts data from each subcarrier
32. FFT (Fast Fourier Transform) converts time-domain signal to frequency-domain
33. Channel estimation determines complex gain and phase for each subcarrier
34. Adaptive equalizer compensates for amplitude and phase distortion
35. QAM demodulation converts symbols to bit patterns
36. Forward error correction (FEC): LDPC (Low-Density Parity-Check) codes
37. LDPC corrects burst errors and bit errors from noise
38. Code rate 0.7-0.95 (70-95% data, 5-30% parity)
39. After FEC, data frames extracted
40. MAC layer parses DOCSIS frames
41. Each frame has: preamble, header (destination MAC, QoS), payload, CRC

**Upstream Transmission:**
42. Upstream uses 5-42 MHz (DOCSIS 3.1: up to 204 MHz)
43. DOCSIS 3.0 upstream: QPSK, 16-QAM, 64-QAM, channel width 1.6-6.4 MHz
44. DOCSIS 3.1 upstream: OFDMA (Orthogonal Frequency Division Multiple Access)
45. OFDMA allows multiple modems to transmit on different subcarriers simultaneously
46. Time-division multiplexing: CMTS grants time slots to each modem
47. Modem requests bandwidth via ranging/bandwidth request messages
48. CMTS responds with upstream bandwidth grants (MAP messages)
49. Modem buffers data and transmits during assigned time slots
50. Power control: modem adjusts transmit power per CMTS instructions
51. Typical TX power: 35-55 dBmV (3-30 watts RF output)
52. Pre-equalization: modem pre-distorts signal to compensate for cable impairments
53. CMTS measures received signal quality, sends equalizer coefficients to modem

**Channel Bonding:**
54. DOCSIS 3.0 bonds multiple 6 MHz channels for higher throughput
55. Downstream: bond 4, 8, 16, 24, or 32 channels
56. 32 downstream channels × 38 Mbps per channel = 1.2 Gbps theoretical max
57. Upstream: bond 4 or 8 channels
58. 8 upstream channels × 30 Mbps per channel = 240 Mbps theoretical max
59. Practical speeds lower due to: overhead, shared bandwidth, network congestion
60. DOCSIS 3.1 doesn't bond discrete channels, uses wide OFDM blocks
61. DOCSIS 3.1 downstream: up to 10 Gbps per modem (rarely provisioned that high)
62. DOCSIS 3.1 upstream: up to 1-2 Gbps

**MAC Layer and Framing:**
63. DOCSIS MAC layer based on IEEE 802.14 (ATM-like)
64. Frames encapsulated in DOCSIS packets
65. Ethernet frame from computer → IP packet → DOCSIS frame → RF transmission
66. CMTS aggregates traffic from all modems
67. CMTS routes packets to Internet via fiber uplink
68. Downstream: CMTS broadcasts all data on coax
69. Each modem listens for frames addressed to its MAC address
70. Encryption ensures neighbors can't eavesdrop on your data

**Initialization and Registration:**
71. When powered on, modem scans downstream frequencies for CMTS signal
72. Locks onto downstream channel with valid DOCSIS signal
73. Synchronizes to CMTS's timing
74. Reads downstream channel descriptor from CMTS
75. Learns upstream channel frequencies from CMTS
76. Performs initial ranging: transmit on upstream, adjust timing and power
77. Ranging ensures all modems' signals arrive at CMTS time-aligned
78. Request IP address from CMTS via DHCP
79. Download configuration file from TFTP server
80. Configuration file specifies: max downstream/upstream speed, QoS settings
81. Configuration file digitally signed by cable operator
82. Modem authenticates using DOCSIS BPI+ (Baseline Privacy Plus Interface)
83. BPI+ establishes shared encryption keys via X.509 certificates
84. AES-128 encrypts downstream data, AES-256 for DOCSIS 3.1
85. Periodic key refresh (every few hours)
86. Modem sends registration request to CMTS
87. CMTS acknowledges, modem enters operational state

**Ethernet Interface:**
88. Install [Ethernet PHY Chip](ethernet-phy) for wired LAN connection
89. Gigabit Ethernet (1000BASE-T) on RJ45 jack
90. PHY chip implements physical signaling: 1000BASE-T uses 4 twisted pairs, 125 Mbps per pair
91. Auto-negotiation determines speed: 10/100/1000 Mbps
92. Auto MDI-X automatically crosses TX/RX pairs (no need for crossover cables)
93. Link layer provides Ethernet frames to/from DOCSIS SoC
94. Modem acts as Ethernet bridge: forwards frames between coax and Ethernet
95. Some modems include 4-port Ethernet switch
96. Switch chip allows multiple computers without separate router
97. Higher-end modems include Wi-Fi router functionality

**Memory Subsystem:**
98. Install [DRAM Memory](dram-chip) for packet buffers and firmware
99. DDR3 or DDR4 SDRAM, 128-512 MB capacity
100. Buffers packets during transmission and reception
101. Stores firmware image and runtime data
102. DOCSIS SoC DMA transfers packets between network interfaces and memory
103. Install [Flash Memory](nand-flash) for bootloader and configuration
104. NOR or NAND flash, 16-128 MB capacity
105. Non-volatile storage persists across power cycles
106. Bootloader initializes hardware and loads firmware
107. Firmware can be updated remotely by cable operator

**Power Supply Design:**
108. Install [Power Supply](ac-adapter) (wall adapter or internal)
109. Input: 100-240V AC, 50/60 Hz
110. Output: 12V DC at 1-2 amps (12-24 watts)
111. Switch-mode power supply for efficiency (>80%)
112. Modem consumes 5-15 watts typical
113. RF transmitter is power-hungry: 30-50 dBmV requires 3-10 watts RF output
114. Power amplifier efficiency 20-40%, so 10-25 watts input for transmitter alone
115. Battery backup optional for voice-over-cable (VoIP) service

**RF Components:**
116. Install [Coax Connector](f-connector) (F-type female, 75 ohm)
117. Coax cable standard: RG-6 or RG-11 (75 ohm impedance)
118. Diplexer separates upstream and downstream frequencies
119. Diplexer is bandpass filter: passes 5-42 MHz to upstream TX, 54-1002 MHz to downstream RX
120. Prevents upstream transmitter from overloading downstream receiver
121. Balun converts unbalanced coax (75 ohm) to balanced twisted-pair for Ethernet PHY
122. RF shield around tuner and modem to prevent interference

**PCB Design:**
123. Design and manufacture [PCB and Assembly](pcb-assembly)
124. 4-6 layer PCB with controlled impedance
125. Layer 1: component side (SoC, tuner, memory, connectors)
126. Layer 2: ground plane (RF shielding and current return)
127. Layer 3: power plane (distributes power to components)
128. Layer 4: component side or routing
129. RF traces must be impedance-matched (50 or 75 ohm)
130. High-speed digital traces (DDR memory) require length matching and controlled impedance
131. Via stitching connects ground planes to reduce EMI (electromagnetic interference)
132. Thermal vias under SoC transfer heat to ground plane or heatsink
133. Components placed via SMT (surface-mount technology)
134. Reflow soldering in oven at 240-260°C peak

**Thermal Management:**
135. SoC dissipates 3-8 watts
136. RF power amplifier dissipates 5-15 watts
137. Heatsink or thermal pad on SoC for cooling
138. Vented plastic enclosure allows convection cooling
139. No active cooling (no fans) in most cable modems
140. Operating temperature range: 0-40°C ambient

**Firmware Architecture:**
141. Bootloader (in flash) runs first on power-up
142. Initializes CPU, memory, peripherals
143. Loads main firmware image from flash to DRAM
144. Main firmware is embedded Linux or proprietary RTOS
145. Kernel drivers for: Ethernet, RF tuner, DOCSIS MAC/PHY
146. User-space daemons: DHCP client, SNMP agent, web server for management
147. DOCSIS protocol stack implements: MAC layer, security (BPI+), QoS, ranging
148. Firmware update via TFTP or HTTP from cable operator
149. Signed firmware prevents unauthorized modifications

**Quality of Service (QoS):**
150. DOCSIS supports multiple service flows with different priorities
151. Service flow = unidirectional traffic stream with QoS parameters
152. Parameters: minimum reserved rate, maximum sustained rate, peak rate, latency
153. Cable operator provisions QoS per customer subscription tier
154. Example: 1 Gbps download / 50 Mbps upload plan
155. High-priority service flow for VoIP (low latency, jitter)
156. Best-effort service flow for general Internet traffic
157. Modem marks Ethernet frames with 802.1p priority (VLAN tag)
158. CMTS schedules upstream grants based on priority
159. During congestion, high-priority traffic sent first
160. Low-priority traffic may be delayed or dropped

**Network Management:**
161. SNMP (Simple Network Management Protocol) for remote monitoring
162. Cable operator monitors: signal levels, errors, packet rates, online/offline status
163. MIB (Management Information Base) exposes modem parameters
164. Proactive network maintenance (PNM): detect issues before customer impact
165. Pre-equalization coefficients indicate cable impairments
166. High error rates indicate noise, low signal level, or damaged cable
167. Technician dispatched to repair or replace cable if needed

**Voice Services (Optional):**
168. Some modems include VoIP (Voice over IP) functionality
169. Analog telephone adapter (ATA) converts POTS phone to IP
170. RJ11 jacks for connecting analog phones
171. Codec: G.711 (64 kbps, toll quality) or G.729 (8 kbps, compressed)
172. SIP (Session Initiation Protocol) or MGCP (Media Gateway Control Protocol)
173. Battery backup (24-48 hours) for emergency calls during power outage
174. PacketCable 1.x or 2.0 standard for cable telephony

**Signal Quality Metrics:**
175. Downstream signal level: -15 to +15 dBmV optimal
176. Too low: modem can't lock on, packet loss
177. Too high: receiver saturation, distortion
178. SNR (signal-to-noise ratio): >30 dB for 256-QAM, >35 dB for DOCSIS 3.1 OFDM
179. MER (modulation error ratio): similar to SNR, >35 dB good
180. Uncorrectable codeword errors: should be zero or near-zero
181. Correctable errors: some okay, but high rate indicates marginal signal
182. Pre-FEC BER (bit error rate): 10^-5 to 10^-8 (many errors before correction)
183. Post-FEC BER: <10^-10 (FEC fixes nearly all errors)

**Troubleshooting Common Issues:**
184. Modem offline: no downstream signal detected
185. Check coax cable: loose connector, damaged cable, splitter loss
186. Intermittent connection: marginal signal quality, upstream noise
187. Slow speeds: network congestion, limited by service plan, Wi-Fi interference
188. T3 timeouts: modem can't maintain upstream ranging (power, timing)
189. T4 timeouts: no upstream bandwidth grants from CMTS
190. Cable operator can reset modem remotely (force re-initialization)
191. Tech may need to replace drop cable, adjust signal levels, or fix node issue

**DOCSIS 4.0 Future:**
192. DOCSIS 4.0 (released 2017, deployments starting 2023-2025)
193. Extended spectrum: downstream to 1.8 GHz, upstream to 684 MHz
194. Symmetrical speeds: 10 Gbps downstream and upstream
195. Full-duplex DOCSIS (FDX): transmit and receive on same frequencies simultaneously
196. Requires echo cancellation to separate TX from RX
197. Or frequency-division duplex (FDD) with high split (204 MHz upstream)

**Testing and Certification:**
198. CableLabs certifies DOCSIS modems for interoperability
199. Test: modulation quality, protocol compliance, security, performance
200. Tested with multiple CMTS vendors (Cisco, ARRIS, Casa Systems)
201. FCC Part 15 certification for RF emissions
202. UL/CSA safety certification for electrical safety

**Deployment:**
203. Self-install: customer connects modem, modem auto-provisions
204. Professional install: technician verifies signal quality, optimizes
205. Modem MAC address registered with cable operator
206. Operator provisions service level (speed tier) in CMTS
207. TFTP server provides configuration file based on MAC address
208. Firmware updates pushed automatically by operator

**Costs:**
- Consumer cable modem (DOCSIS 3.1): $80-200
- Business-class modem: $200-600
- Modem rental from cable company: $10-15/month (buy your own to save money)
- DOCSIS 4.0 modem: $300-500 (as of 2025)

**Performance:**
- DOCSIS 3.0 (24 channel bonding): 600-1000 Mbps down, 100-200 Mbps up
- DOCSIS 3.1 (OFDM): 1-2.5 Gbps down, 200-500 Mbps up (typical provisioning)
- DOCSIS 3.1 (max spec): 10 Gbps down, 1-2 Gbps up
- DOCSIS 4.0: 10 Gbps down, 6 Gbps up (symmetrical possible with FDX)
- Latency: 10-30 ms (modem + HFC network), lower with low-latency DOCSIS (LLD)

Cable modems enable broadband Internet over existing cable TV infrastructure without laying new fiber to every home. The technology has evolved from 1.5 Mbps (DOCSIS 1.0 in 1997) to multi-gigabit speeds (DOCSIS 3.1/4.0) through advanced modulation, channel bonding, and spectrum expansion. The shared-bandwidth nature of cable means your speed depends on how many neighbors are online, unlike fiber where each home has dedicated capacity. Modern DOCSIS 3.1 systems with proper network planning can deliver gigabit speeds reliably, competing with fiber-to-the-home services.
