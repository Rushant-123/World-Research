---
title: "Electrical Distribution System"
company: "Schneider Electric"
country: "France"
selling_price: 60.0
inputs:
  - name: "Switchgear"
    cost: 8.0
    link: "power-transformer"
  - name: "Transformers"
    cost: 6.0
    link: "power-transformer"
  - name: "Cable and Busway"
    cost: 5.0
    link: "copper-wire"
  - name: "Circuit Breakers"
    cost: 4.0
    link: "power-ic"
  - name: "UPS Systems"
    cost: 5.0
    link: "ups-systems"
  - name: "Installation Labor"
    cost: 8.0
    link: "machinist-labor"
value_created: 24.0
---

## Manufacturing Process

### Utility Service Entrance Design (Steps 1-15)

1. Conduct electrical load analysis of entire manufacturing facility calculating peak demand in kVA
2. Determine utility service voltage level selection between 13.8kV, 34.5kV, or 115kV medium voltage
3. Calculate fault current available from utility using network impedance data (typically 25-65 kA)
4. Design utility metering section with revenue-grade meters meeting ANSI C12.20 accuracy class 0.2
5. Select incoming service cable size based on load current plus 25% growth factor
6. Specify medium voltage switchgear rated for system voltage with 63 kA interrupting capacity
7. Install pad-mounted transformer yard with concrete foundations rated for transformer weight plus seismic loads
8. Position utility-owned transformers maintaining 10-foot clearances per NEC Article 110
9. Install primary metering cabinet with voltage transformers (120V secondary) and current transformers
10. Wire utility revenue meters with dual element metering for demand and energy measurement
11. Install main service disconnect rated for calculated fault current interrupting duty
12. Provision lightning arresters (metal oxide varistors) rated for system MCOV voltage
13. Ground utility entrance equipment to building ground grid with 250 kcmil bare copper
14. Install arc flash hazard labels indicating incident energy levels in cal/cm² at working distance
15. Commission utility service with power quality analyzer verifying voltage regulation within ±5%

### Main Switchgear Assembly (Steps 16-30)

16. Fabricate metal-clad switchgear lineup using 12-gauge steel enclosures with IP54 rating
17. Install vacuum circuit breakers rated 38 kV, 2000A continuous, 40 kA interrupting capacity
18. Wire circuit breaker control circuits with 125V DC station battery backup system
19. Install switchgear bus system using silver-plated copper bus bars rated for 3000A
20. Provision current transformers (CT) on each feeder circuit with 2000:5A ratios
21. Mount protective relays providing overcurrent, ground fault, and differential protection
22. Install switchgear interlocking mechanisms preventing unsafe circuit breaker operations
23. Wire draw-out circuit breaker mechanisms with position indication switches
24. Install arc flash mitigation system with optical and pressure sensors for rapid detection
25. Provision switchgear ventilation system maintaining ambient temperature below 40°C
26. Install insulated bus supports rated for 2.5× continuous current thermal duty
27. Bond all switchgear sections to ground bus with minimum 4/0 AWG copper
28. Install fiber optic current sensors for digital protection relay interface
29. Commission switchgear using primary injection testing verifying relay coordination
30. Apply thermographic inspection identifying hot spots exceeding 10°C temperature rise

### Step-Down Transformer Installation (Steps 31-45)

31. Install primary distribution transformers stepping 13.8kV down to 480V three-phase
32. Select transformer capacity based on connected load with 1.25× safety factor per NEC 450.3
33. Specify transformer impedance between 5.5-6.5% for optimal fault current limitation
34. Install dry-type transformers in electrical room with ventilation per NEMA TP1 standards
35. Position transformers maintaining 36-inch working clearance on front, 12-inch on sides
36. Wire primary connections using 15kV-rated cable with cold shrink terminations
37. Install secondary bushings rated for calculated fault current (50 kA available at 480V)
38. Ground transformer neutral to building electrode system per NEC Article 250
39. Install transformer temperature monitoring with winding RTD sensors and alarm contacts
40. Wire transformer protection relays including sudden pressure, over-temperature, and differential
41. Provision transformer core ground connection limiting circulating currents during unbalance
42. Install noise attenuation enclosure achieving 55 dBA sound level at 10 feet distance
43. Commission transformer with turns ratio testing verifying 28.75:1 transformation accuracy
44. Perform no-load and load loss testing documenting efficiency meeting DOE 2016 standards
45. Apply partial discharge testing ensuring corona-free operation below 10 pC discharge magnitude

### Bus Duct Distribution System (Steps 46-60)

46. Install aluminum bus duct rated 480V, 4000A continuous current capacity
47. Fabricate bus duct sections with silver-plated aluminum conductors for low resistance joints
48. Assemble plug-in bus duct allowing tap-off connections every 24 inches along length
49. Install bus duct support hangers rated for 5× bus weight seismic loading
50. Maintain 48-inch phase spacing in bus duct for 480V system voltage
51. Install bus duct end caps with insulation rated for 1.6× system voltage
52. Provision expansion joints in bus duct accommodating thermal expansion 0.0128 inches/10°F per 100 feet
53. Wire bus duct ground conductor with minimum 33% of phase conductor ampacity
54. Install plug-in circuit breaker units rated from 100A to 800A for equipment connection
55. Seal bus duct penetrations through fire-rated walls maintaining 2-hour fire rating
56. Provision current monitoring on bus duct measuring phase current imbalance
57. Install temperature sensors in bus duct junction boxes monitoring hot spot temperatures
58. Test bus duct insulation resistance achieving minimum 100 megohms at 1000V DC
59. Verify bus duct voltage drop not exceeding 3% at full load per NEC 210.19(A)
60. Commission bus duct system with infrared thermography identifying connection resistance issues

### Distribution Panel Boards (Steps 61-75)

61. Install 480V distribution panelboards with main lugs rated for feeder breaker size
62. Provision panelboards with copper bus bars rated 600A continuous current
63. Install bolt-on circuit breakers from 20A to 400A frame sizes with thermal-magnetic trip
64. Wire panelboard with phase identification: A-phase (brown), B-phase (orange), C-phase (yellow)
65. Install ground bars bonded to panelboard enclosure with minimum #6 AWG copper
66. Provision isolated ground bar for sensitive electronic equipment circuits per NEC 250.146(D)
67. Install panelboard in electrical room maintaining 36-inch working clearance
68. Wire branch circuits using THHN/THWN copper conductors rated 75°C wet locations
69. Label all circuit breakers identifying connected load and circuit number
70. Install panelboard directory holder with typed circuit schedule behind clear cover
71. Provision surge protective device (SPD) rated 40kA surge current, 1.2/50µs waveform
72. Install panelboard main ground fault protection rated 100mA trip for equipment protection
73. Test panelboard breaker trip characteristics verifying coordination with upstream protection
74. Measure panelboard voltage at full load documenting all phase-to-phase voltages within ±10V
75. Apply arc flash labels calculating incident energy using IEEE 1584 fault current calculations

### Motor Control Centers (Steps 76-90)

76. Assemble motor control center (MCC) lineup with 480V three-phase bus rated 2500A
77. Install combination motor starters with circuit breaker, contactor, and overload relay
78. Wire motor starters with control transformers providing 120V control circuits
79. Provision MCC with draw-out starter units allowing replacement without circuit interruption
80. Install motor overload relays with Class 10 trip characteristics for standard motors
81. Wire motor circuits using copper conductors sized for 125% of motor nameplate FLA
82. Install disconnect switches on each motor feeder rated for horsepower and voltage
83. Provision motor soft starters for motors above 50 HP limiting inrush to 300% FLA
84. Wire variable frequency drives (VFDs) for motors requiring speed control 10-100% rated speed
85. Install VFD harmonic filters limiting total harmonic distortion below 5% IEEE 519 standard
86. Provision motor space heaters preventing condensation during shutdown periods
87. Wire motor thermal sensors (RTD or thermocouple) to protection relay inputs
88. Install motor control pilot devices (start/stop pushbuttons, selector switches, indicator lights)
89. Commission motors with rotation verification and no-load current measurement
90. Test motor protection relay trip times at 125%, 200%, and 600% rated current

### UPS Systems Integration (Steps 91-105)

91. Install three-phase uninterruptible power supply rated 500 kVA, 480/208Y120V output
92. Select UPS topology using double-conversion (online) design for zero transfer time
93. Install VRLA battery strings providing 15-minute backup at full load capacity
94. Calculate battery size using 1.67 W/cell discharge rate to 1.75V end voltage
95. Assemble battery racks maintaining 1-inch spacing between cells for cooling airflow
96. Wire battery strings in series achieving 480V DC nominal voltage (400 cells × 1.2V)
97. Install battery monitoring system measuring individual cell voltage and temperature
98. Provision battery room ventilation exhausting hydrogen gas at 0.1 CFM per Ah capacity
99. Wire UPS input from normal and emergency distribution achieving dual-feed reliability
100. Install UPS output distribution panel with sub-feed breakers for critical loads
101. Provision UPS maintenance bypass allowing service without load interruption
102. Install UPS power module redundancy (N+1 configuration) maintaining 100% capacity with one failure
103. Wire UPS communication interfaces to building management system via Modbus TCP/IP
104. Commission UPS with battery discharge testing verifying 15-minute runtime at 100% load
105. Test UPS transfer time confirming zero interruption during utility loss events

### Emergency Generator Installation (Steps 106-120)

106. Install diesel generator rated 2000 kW, 2500 kVA at 0.8 power factor, 480V output
107. Select generator with 1800 RPM speed providing optimum fuel efficiency and noise levels
108. Mount generator on spring isolation pads reducing vibration transmission to 0.1 inch/sec
109. Install generator fuel system with 1000-gallon diesel tank providing 24-hour runtime
110. Provision fuel day tank with automatic transfer pump maintaining 4-hour supply minimum
111. Wire generator control system with automatic start sequence upon utility failure detection
112. Install generator radiator cooling system rejecting heat load at 40°C ambient temperature
113. Provision generator exhaust system with critical-grade silencer achieving 65 dBA at 23 feet
114. Wire generator battery charger maintaining starting batteries at 13.8V float voltage
115. Install generator output circuit breaker rated 4000A frame with electronic trip unit
116. Provision generator paralleling gear enabling multiple generators to share load
117. Wire generator protective relays including reverse power, over/under voltage, over/under frequency
118. Install generator annunciator panel displaying alarm conditions and operating parameters
119. Commission generator with load bank testing at 25%, 50%, 75%, and 100% rated capacity
120. Test generator automatic start verifying 10-second start time and 30-second stabilization period

### Automatic Transfer Switch Installation (Steps 121-135)

121. Install automatic transfer switches (ATS) rated 3000A, 480V three-phase service
122. Select ATS with closed transition transfer capability enabling momentary paralleling during switching
123. Wire ATS control circuits monitoring utility and generator voltage, frequency, and phase sequence
124. Program ATS time delay settings: 1-second utility failure detection, 30-second generator stabilization
125. Install ATS with four-pole switching providing neutral switching for separately derived systems
126. Provision ATS with adjustable voltage pickup setting between 85-95% of nominal voltage
127. Wire ATS with retransfer controls returning to utility after 30-minute stabilization period
128. Install ATS bypass isolation switches allowing maintenance without system shutdown
129. Provision ATS with infrared viewing windows for energized equipment inspection
130. Wire ATS position indication contacts to building management system for remote monitoring
131. Install ATS in-phase monitor preventing transfer during out-of-phase conditions exceeding 5 degrees
132. Commission ATS with simulated utility failure testing automatic and manual transfer operations
133. Test ATS transfer time documenting typical 100-millisecond switching duration
134. Verify ATS neutral-to-ground bond configured correctly for separately derived system requirements
135. Apply ATS exercise timer initiating weekly generator start sequence maintaining readiness

### Power Factor Correction (Steps 136-150)

136. Install automatic power factor correction system achieving 0.95 power factor at service entrance
137. Calculate capacitor bank size compensating inductive reactive power (kVAR) from motor loads
138. Assemble capacitor bank with six stages allowing 50 kVAR steps from 0-300 kVAR total
139. Install power factor controller measuring system power factor with 0.5-second response time
140. Wire capacitor contactors with pre-insertion resistors limiting inrush to 10× steady-state current
141. Install series reactors in capacitor circuits providing 7% impedance for harmonic filtering
142. Provision capacitor bank discharge resistors reducing residual voltage to 50V within 60 seconds
143. Wire current transformers and voltage transformers for power factor controller inputs
144. Install capacitor protection fuses rated for 1.65× capacitor nominal current
145. Provision capacitor bank with temperature monitoring preventing operation above 55°C ambient
146. Test capacitor bank operation verifying power factor improvement from 0.75 to 0.95 measured
147. Measure harmonic currents ensuring capacitor resonance not amplifying 5th or 7th harmonics
148. Commission automatic control verifying capacitor stage switching maintains target power factor
149. Calculate utility demand charge savings from improved power factor reducing reactive power penalties
150. Apply thermographic inspection to capacitor connections ensuring temperature rise below 15°C

### Harmonic Filtering Systems (Steps 151-165)

151. Install active harmonic filter rated 300A harmonic current cancellation capacity
152. Measure baseline harmonic distortion using power quality analyzer per IEEE 519 standards
153. Document total harmonic distortion (THD) on voltage waveform not exceeding 5% IEEE limit
154. Install current transformers monitoring load current for harmonic analysis up to 50th order
155. Wire active filter control system with 50 kHz switching frequency for harmonic injection
156. Provision passive harmonic filters tuned to 5th (300 Hz) and 7th (420 Hz) harmonic frequencies
157. Calculate filter impedance providing series resonance at target harmonic frequency ±5%
158. Install filter reactors with air-core construction eliminating saturation during harmonic currents
159. Wire harmonic filter upstream of power factor correction preventing capacitor resonance
160. Install power quality meter with harmonic recording capability documenting THD trends
161. Measure individual harmonic voltage distortion ensuring each harmonic below 3% per IEEE 519
162. Test active filter performance verifying THD reduction from 15% to below 5% after installation
163. Commission filter controls with load tracking maintaining harmonic compensation during load variations
164. Document harmonic spectrum showing attenuation of dominant 5th and 7th harmonic components
165. Verify harmonic filter not creating resonance conditions with utility system impedance

### Grounding System Installation (Steps 166-180)

166. Install building ground electrode system using copper-clad ground rods driven 10 feet depth
167. Interconnect ground rods with 4/0 AWG bare copper conductor forming ground ring around building
168. Measure ground resistance using fall-of-potential method achieving less than 5 ohms resistance
169. Install concrete-encased electrode (Ufer ground) using 20 feet of #4 AWG copper in foundation
170. Bond structural steel to ground system with exothermic welded connections every 100 feet
171. Install equipment grounding system using insulated copper conductors per NEC Table 250.122
172. Provision isolated ground system for sensitive electronic equipment with separate ground conductor
173. Wire isolated grounds to single-point ground at service entrance avoiding ground loops
174. Install ground fault detection system monitoring ground continuity and fault currents
175. Bond all metal raceways and enclosures to equipment ground maintaining continuous path
176. Install lightning protection ground system with dedicated ground ring separate from power ground
177. Test ground grid using high-frequency ground impedance testing verifying low impedance at lightning frequencies
178. Measure step and touch potentials in ground grid area ensuring safe limits below 50V during faults
179. Document ground system with as-built drawings showing ground ring, electrode locations, and connections
180. Apply ground resistance testing annually verifying ground system resistance not exceeding 10 ohms

### Lightning Protection System (Steps 181-195)

181. Install lightning air terminals (rods) on building high points spaced 20 feet apart maximum
182. Mount air terminals minimum 12 inches above roof surface providing zone of protection
183. Calculate zone of protection using rolling sphere method with 150-foot sphere radius
184. Interconnect air terminals with 1/0 AWG copper down conductors routed to ground system
185. Install down conductors on building corners maintaining straight path to ground electrodes
186. Provision expansion joints in down conductors accommodating building movement without conductor stress
187. Bond down conductors to building steel structure at 200-foot intervals maximum
188. Install lightning surge protective devices (LSPD) at service entrance rated 50kA surge current
189. Wire LSPD in parallel with electrical service using shortest conductor length minimizing inductance
190. Install secondary LSPD at distribution panels protecting branch circuits with 20kA rating
191. Provision data/communication circuit protection using coaxial surge arresters for network connections
192. Test lightning protection system with continuity testing verifying continuous ground path
193. Measure LSPD clamping voltage ensuring voltage protection level below 1200V for 480V system
194. Commission lightning protection with surge generator testing at 6kV, 3kA combination wave
195. Document lightning protection system certification per NFPA 780 standard for structural protection
