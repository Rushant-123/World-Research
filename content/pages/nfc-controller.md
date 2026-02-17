---
title: "NFC Controller Chip"
company: "NXP Semiconductors"
country: "Netherlands"
selling_price: 3.0
inputs:
  - name: "Silicon Wafer"
    cost: 0.8
    link: "silicon-wafer"
  - name: "RF Frontend"
    cost: 1.0
    link: "rf-frontend"
  - name: "Secure Element"
    cost: 0.8
    link: "secure-element"
value_created: 0.4
---

# NFC Controller Chip Manufacturing Process

**Top Market Leaders:**
- [Tsmc](/companies/tsmc)
- [Samsung Electronics](/companies/samsung-electronics)
- [Intel](/companies/intel)



## Phase 1: Design and Architecture (Steps 1-25)

### ISO 14443 Protocol Implementation
1. Define NFC controller architecture supporting ISO 14443 Type A and Type B protocols
2. Design digital baseband processor with 13.56 MHz carrier frequency support
3. Implement modulation schemes: ASK (Amplitude Shift Keying) for Type A
4. Design Miller encoding circuitry for Type A communication
5. Implement NRZ (Non-Return to Zero) encoding for Type B protocol
6. Design frame format handlers for both Type A and Type B standards
7. Create collision detection and anticollision algorithms (ISO 14443-3)
8. Implement bit-oriented anticollision protocol with cascade levels
9. Design CRC calculation units (CRC-A for Type A, CRC-B for Type B)
10. Create protocol state machines for initialization and data exchange

### Communication Layer Design
11. Design Application Protocol Data Unit (APDU) command processor
12. Implement ISO 7816-4 command set for smart card emulation
13. Create data framing and error detection mechanisms
14. Design timeout and retry logic for reliable communication
15. Implement data rate negotiation (106, 212, 424, 848 kbps)
16. Create buffer management system for transmit and receive data
17. Design interrupt controller for event handling
18. Implement DMA channels for efficient data transfer
19. Create register map for host interface configuration
20. Design power management controller with multiple power states

### Operating Modes Architecture
21. Design reader/writer mode circuitry for active RF field generation
22. Implement card emulation mode with passive load modulation
23. Create peer-to-peer mode supporting NFCIP-1 (ISO 18092)
24. Design mode switching logic with seamless transitions
25. Implement host controller interface (HCI) for mode management

## Phase 2: RF Subsystem Design (Steps 26-50)

### 13.56 MHz RF Frontend Integration
26. Design RF transmitter with 13.56 MHz carrier generation
27. Implement phase-locked loop (PLL) for frequency stability
28. Create crystal oscillator interface for reference clock
29. Design power amplifier for RF field generation (up to 200 mA)
30. Implement amplitude modulation control for Type A communication
31. Design load modulation detector for card responses
32. Create RF receiver with envelope detection
33. Implement automatic gain control (AGC) for varying field strengths
34. Design analog-to-digital converters (ADC) for signal processing
35. Create digital filters for noise reduction and signal extraction

### Antenna Interface Design
36. Design antenna driver with impedance matching network
37. Implement antenna tuning capacitor array (variable capacitance)
38. Create antenna resonance detection circuitry
39. Design Q-factor measurement system for antenna optimization
40. Implement automatic antenna tuning algorithms
41. Create overvoltage protection for antenna pins
42. Design electrostatic discharge (ESD) protection circuits
43. Implement electromagnetic compatibility (EMC) filtering
44. Create field strength monitoring and regulation
45. Design proximity detection using field loading analysis

### Signal Processing Design
46. Implement correlators for signal synchronization
47. Design bit clock recovery circuits
48. Create demodulation chains for ASK and BPSK signals
49. Implement subcarrier demodulation for Type A (847.5 kHz)
50. Design signal quality metrics and monitoring

## Phase 3: Secure Element Integration (Steps 51-75)

### Secure Communication Interface
51. Design secure SPI or I2C interface to secure element
52. Implement Single Wire Protocol (SWP) for integrated SE connection
53. Create host controller interface for SE management
54. Design command routing between host and secure element
55. Implement APDU encapsulation and transport protocols
56. Create secure channel establishment mechanisms
57. Design authentication protocols for SE access
58. Implement encrypted communication channels
59. Create session key management system
60. Design access control lists for SE resources

### Card Emulation Mode with SE
61. Implement SE-based card emulation architecture
62. Design routing tables for APDU commands to SE
63. Create virtual card management system
64. Implement application identifier (AID) routing
65. Design protocol activation for SE applications
66. Create RF field detection and SE power management
67. Implement card emulation event notifications
68. Design transaction logging and monitoring
69. Create SE applet lifecycle management
70. Implement GlobalPlatform compliance for SE management

### Security Features
71. Design hardware cryptographic accelerators (AES, DES, RSA)
72. Implement secure boot mechanism for firmware
73. Create secure firmware update protocols
74. Design tamper detection and response mechanisms
75. Implement side-channel attack countermeasures

## Phase 4: Apple Pay and Payment Support (Steps 76-100)

### EMV Payment Protocol Implementation
76. Implement EMVCo contactless specifications (EMV Level 1)
77. Design kernel support for Visa payWave
78. Implement Mastercard PayPass kernel
79. Create American Express ExpressPay support
80. Design Discover D-PAS protocol implementation
81. Implement EMV data object handling
82. Create transaction flow state machines
83. Design cardholder verification methods (CVM) support
84. Implement online and offline PIN handling
85. Create cryptogram generation for secure transactions

### Apple Pay Specific Features
86. Design Apple VAS (Value Added Services) protocol support
87. Implement pass data exchange for Apple Wallet
88. Create enhanced contactless polling (ECP) support
89. Design background tag reading for iOS integration
90. Implement Apple-specific AID routing
91. Create proprietary command support for Apple devices
92. Design power management for background NFC operation
93. Implement field detect optimization for quick response
94. Create Apple Pay transaction event handling
95. Design certification test mode for Apple compliance

### Mobile Payment Ecosystem
96. Implement Google Pay HCE (Host Card Emulation) support
97. Design Samsung Pay MST/NFC hybrid support
98. Create transit payment protocol support (CIPURSE, Calypso)
99. Implement loyalty card and ticketing protocols
100. Design multi-application payment environment

## Phase 5: Silicon Wafer Processing (Steps 101-125)

### Wafer Preparation and Fabrication
101. Receive 300mm silicon wafer from supplier
102. Perform incoming wafer inspection and quality verification
103. Apply photoresist coating for first lithography layer
104. Expose wafer using deep ultraviolet (DUV) lithography (28nm process)
105. Develop photoresist to create circuit patterns
106. Etch silicon dioxide and silicon nitride layers
107. Perform ion implantation for NMOS transistor regions
108. Create PMOS transistor regions with opposite dopants
109. Apply gate oxide layer with high-k dielectric materials
110. Deposit polysilicon for gate electrodes
111. Pattern and etch gate structures
112. Create source and drain regions with precision doping
113. Deposit interlayer dielectric (ILD) material
114. Perform chemical mechanical polishing (CMP) for planarization
115. Create contact holes using reactive ion etching

### Interconnect Formation
116. Deposit barrier layers (titanium nitride) for metal adhesion
117. Fill vias with tungsten using chemical vapor deposition
118. Create first metal layer (copper) using damascene process
119. Pattern metal traces for internal signal routing
120. Deposit additional ILD layers for multi-level metallization
121. Create subsequent metal layers (up to 8 layers for complex design)
122. Form global interconnects for power distribution
123. Create RF shield layers to isolate analog and digital sections
124. Implement ground planes for noise reduction
125. Apply final passivation layer for die protection

## Phase 6: RF Frontend and Analog Integration (Steps 126-145)

### RF Component Integration
126. Integrate RF frontend die onto NFC controller substrate
127. Create bond wire connections for RF signal paths
128. Implement impedance-controlled transmission lines
129. Design on-chip balun for single-ended to differential conversion
130. Integrate power amplifier with thermal management
131. Create low-noise amplifier (LNA) for receiver sensitivity
132. Implement transmit/receive switch (T/R switch)
133. Design harmonic filters for spectral purity
134. Create matching networks for 50-ohm antenna interface
135. Implement DC blocking capacitors in RF path

### Analog-to-Digital Interface
136. Integrate high-speed ADCs for I/Q signal sampling
137. Create digital-to-analog converters (DAC) for transmitter control
138. Design voltage references for precise analog operation
139. Implement temperature sensors for compensation algorithms
140. Create power supply regulators for clean analog supplies
141. Design clock distribution network with low jitter
142. Implement bias current generators for analog blocks
143. Create operational amplifiers for signal conditioning
144. Design comparators for threshold detection
145. Implement sample-and-hold circuits for ADC input

## Phase 7: Antenna Tuning and Matching (Steps 146-170)

### Antenna Interface Optimization
146. Design automatic antenna tuning (AAT) algorithm
147. Implement capacitor array with binary-weighted values
148. Create tuning range from 15pF to 50pF with fine steps
149. Design resistance and reactance measurement circuits
150. Implement Smith chart algorithm for impedance matching
151. Create frequency sweep capability for resonance detection
152. Design Q-factor optimization for maximum power transfer
153. Implement dynamic tuning during operation
154. Create calibration procedures for different antenna types
155. Design compensation for environmental changes (hand proximity)

### Load Modulation and Field Sensing
156. Implement precise field strength measurement (H-field)
157. Design overshoot and undershoot detection
158. Create adaptive power control for regulatory compliance
159. Implement load modulation depth optimization
160. Design subcarrier detection with narrow filters
161. Create phase detection for improved demodulation
162. Implement adaptive threshold algorithms
163. Design Manchester decoding with error correction
164. Create parity and CRC checking mechanisms
165. Implement bit timing recovery and synchronization

### Antenna Compatibility
166. Design support for loop antennas (standard smartphone design)
167. Implement matching for different antenna sizes (30-50mm)
168. Create flex PCB antenna support with varying impedance
169. Design ferrite sheet compensation algorithms
170. Implement multi-antenna switching for tablets

## Phase 8: Testing and Certification (Steps 171-195)

### Electrical Testing
171. Perform wafer-level probe testing of digital logic
172. Test RF parameters on automated test equipment (ATE)
173. Verify carrier frequency accuracy (13.56 MHz ± 7 kHz)
174. Measure modulation depth and quality
175. Test receiver sensitivity and selectivity
176. Verify power consumption in all operating modes
177. Test thermal performance under maximum load
178. Verify ESD protection levels (HBM and CDM)
179. Test electromagnetic interference (EMI) emissions
180. Verify power supply rejection ratio (PSRR)

### Protocol Compliance Testing
181. Verify ISO 14443-2 analog compliance (waveforms, timing)
182. Test ISO 14443-3 initialization and anticollision
183. Verify ISO 14443-4 data transmission protocol
184. Test EMVCo Level 1 analog and digital requirements
185. Verify NFC Forum Type 1-4 tag compatibility
186. Test NDEF (NFC Data Exchange Format) message handling
187. Verify peer-to-peer mode with LLCP protocol
188. Test card emulation with various card types
189. Verify Apple VAS protocol implementation
190. Test Google Smart Tap protocol support

### Final Quality Assurance
191. Perform temperature cycling tests (-40°C to +85°C)
192. Conduct accelerated life testing for reliability
193. Verify package integrity and bond wire strength
194. Test moisture sensitivity level (MSL rating)
195. Final packaging, marking, and tape-and-reel preparation for shipment

## Key Features and Specifications

**Operating Frequency:** 13.56 MHz (HF band)
**Supported Protocols:** ISO 14443 Type A/B, ISO 15693, ISO 18092 (NFCIP-1)
**Data Rates:** 106, 212, 424, 848 kbps
**Operating Modes:** Reader/Writer, Card Emulation, Peer-to-Peer
**Communication Range:** Up to 10 cm (typical)
**Host Interface:** SPI, I2C, UART
**Secure Element Interface:** SWP, I2C, SPI
**Power Supply:** 1.8V to 3.6V
**Power Consumption:**
  - Active mode: 150-300 mW
  - Card emulation: 5-15 mW
  - Standby: <100 µW
**Package:** QFN40, HVQFN32, or similar compact package
**Certifications:** EMVCo, NFC Forum, Apple Pay, Google Pay

The NFC controller chip represents sophisticated integration of RF engineering, secure element management, and mobile payment protocols, enabling seamless contactless transactions and data exchange in modern smartphones and payment terminals.
