---
title: "Bench Power Supply"
company: "Rigol Technologies"
country: "China"
selling_price: 3.0
inputs:
  - name: "Transformer"
    cost: 0.4
    link: "power-transformer"
  - name: "Regulation Circuit"
    cost: 0.3
    link: "power-ic"
  - name: "Display"
    cost: 0.2
    link: "microled-display"
  - name: "PCB"
    cost: 0.2
    link: "printed-circuit-board"
  - name: "Chassis"
    cost: 0.2
    link: "steel-fabrication"
  - name: "Assembly"
    cost: 0.2
    link: "assembly-labor"
value_created: 1.5
---

## Design Specifications

1. Define voltage range: 0-30V DC continuously adjustable output capability
2. Establish current range: 0-5A continuous current delivery with overload capability
3. Set load regulation specification: <0.01% voltage change from no-load to full-load
4. Define line regulation: <0.01% voltage change for 10% AC input variation
5. Specify ripple and noise: <1mVrms at full load, <500µVp-p residual ripple
6. Set voltage resolution: 10mV minimum adjustment increment via front panel controls
7. Define current resolution: 1mA minimum adjustment capability for precision work
8. Establish settling time: <50ms for output to reach steady state after load change
9. Set temperature coefficient: <50ppm/°C for voltage reference stability
10. Define output impedance: <10mΩ in constant voltage mode for tight regulation

## Transformer Design and Winding

11. Calculate transformer VA rating: 200VA minimum for 30V × 5A plus losses
12. Select core material: grain-oriented silicon steel laminations for low core loss
13. Design primary winding: 264 turns of 0.8mm enameled copper wire for 120V input
14. Calculate secondary voltage: 24V AC RMS center-tapped for ±28V rectified output
15. Wind secondary coils: 53 turns per side of 1.5mm wire rated for 6A continuous
16. Layer insulation: polyester film between primary and secondary for 4kV isolation
17. Interleave windings: sandwich primary between secondary halves for reduced leakage
18. Apply impregnation varnish: vacuum impregnation with thermal class H resin
19. Mount lamination stack: E-I core assembly with bolt-through construction
20. Install thermal protector: 120°C thermal cutout embedded in primary winding

## Bridge Rectifier Circuit

21. Select rectifier diodes: 35V 10A Schottky barrier diodes for low forward drop
22. Mount on heatsink: 15°C/W thermal resistance interface to chassis for cooling
23. Configure full-wave bridge: four diodes in classic bridge topology for bipolar AC
24. Add snubber networks: 47Ω + 100nF RC snubbers across each diode for EMI control
25. Install filter capacitors: 10,000µF 50V electrolytic capacitors in parallel
26. Add ESR optimization: film capacitors in parallel to reduce equivalent series resistance
27. Design ripple current capability: capacitors rated for 3A RMS ripple at 120Hz
28. Mount safety discharge: 100kΩ bleeder resistors across main filter capacitors
29. Implement soft-start circuit: NTC thermistor limits inrush current to 15A peak
30. Add fusing protection: 3A slow-blow fuse in primary circuit for overcurrent safety

## Series Pass Regulation Stage

31. Select pass transistors: matched pair of 2N3055 NPN power transistors in parallel
32. Mount on main heatsink: thermal compound interface, 1°C/W junction-to-case
33. Install base drive circuit: PNP pre-driver transistors for adequate base current
34. Add thermal compensation: diodes in base circuit track temperature for stability
35. Implement current sharing: 0.1Ω emitter ballast resistors equalize transistor currents
36. Design error amplifier: high-gain op-amp compares output to reference voltage
37. Select voltage reference: precision 10V bandgap reference with 5ppm/°C stability
38. Add reference buffer: low-offset op-amp provides high-impedance buffering
39. Design feedback divider: precision 0.1% resistors create voltage sampling network
40. Implement remote sensing: Kelvin connection to output terminals compensates lead drop

## Voltage Control and Adjustment

41. Install coarse adjustment: 10-turn precision potentiometer for 0-30V range
42. Add fine adjustment: single-turn potentiometer provides 0-3V vernier control
43. Mount voltage dial: laser-engraved panel with 0.1V graduation markings
44. Design summing circuit: op-amp combines coarse and fine control voltages
45. Add voltage limiting: protection clamps prevent adjustment beyond 32V maximum
46. Implement digital readout: 4.5-digit ADC samples output voltage continuously
47. Calibrate voltage scale: trim potentiometers adjust gain and offset for accuracy
48. Add voltage preset: memory circuit stores three user-programmable voltage settings
49. Install tracking mode: link multiple supplies for positive/negative rail generation
50. Design voltage ramp: controlled slew rate limiting prevents output step changes

## Current Control and Limiting

51. Install current shunt: 0.01Ω 5W precision resistor in output return path
52. Add shunt amplifier: precision instrumentation amplifier measures voltage drop
53. Design current comparator: compares shunt voltage to current control setting
54. Implement crossover circuit: smooth transition between CV and CC regulation modes
55. Install current adjustment: 10-turn potentiometer sets maximum output current
56. Add current limiting LED: indicates when supply enters constant-current mode
57. Mount current dial: graduated scale shows current limit setting 0-5A
58. Design foldback protection: current limit reduces at low voltages to protect output
59. Add current preset memory: stores three programmable current limit values
60. Implement pulsed load capability: output handles 10A peaks for <100ms duration

## Display System Integration

61. Mount microLED display: 0.8-inch high brightness seven-segment modules
62. Install voltage display: three digits plus decimal show output voltage reading
63. Add current display: three digits show actual output current draw or limit setting
64. Design multiplexing circuit: time-division multiplexing updates both displays at 100Hz
65. Implement display driver: MAX7219 or similar LED driver IC controls segments
66. Add brightness control: photoresistor adjusts display intensity for ambient light
67. Install display mode switch: toggles between measured values and set values
68. Design peak hold function: captures and displays maximum voltage or current
69. Add display calibration: trim adjustments correct for ADC and amplifier errors
70. Implement display blanking: leading zero suppression for professional appearance

## Binding Post Terminals

71. Select terminal posts: 4mm banana jack binding posts rated for 30A continuous
72. Install positive terminal: red anodized brass post with M4 threaded insert
73. Mount negative terminal: black anodized post with identical specifications
74. Add earth ground terminal: green/yellow striped post connects to chassis
75. Design terminal insulation: phenolic insulators provide 1500V isolation to panel
76. Install terminal covers: clear plastic safety covers prevent accidental shorts
77. Add binding post caps: stackable banana plugs accept standard test leads
78. Mount sense terminals: separate Kelvin terminals for remote voltage sensing
79. Implement terminal protection: TVS diodes clamp reverse voltage to safe levels
80. Design current path: heavy copper bus bars minimize resistance from shunt to posts

## Overload Protection Circuits

81. Implement overcurrent detection: comparator monitors shunt voltage continuously
82. Design shutdown circuit: disables pass transistors when current exceeds 6A
83. Add overvoltage protection: crowbar SCR shorts output if voltage exceeds 35V
84. Install crowbar fuse: fast-acting fuse opens to protect SCR after triggering
85. Design overtemperature protection: thermistor on heatsink triggers shutdown at 85°C
86. Add short circuit protection: foldback limiting reduces current to 500mA in dead short
87. Implement reverse polarity protection: diodes prevent damage from reversed connections
88. Design transient suppression: MOV and TVS diodes clamp input and output spikes
89. Add power-on delay: prevents output energization until supplies stabilize
90. Install protective relay: isolates output during fault conditions or power-up

## Ripple Reduction and Filtering

91. Install output capacitor: 1000µF low-ESR electrolytic directly at output terminals
92. Add ceramic bypass: 1µF X7R ceramic in parallel for high-frequency filtering
93. Design LC filter: optional 100µH inductor plus capacitor for <100µV ripple
94. Implement active ripple cancellation: op-amp injects anti-phase ripple signal
95. Add common-mode choke: ferrite toroid reduces radiated and conducted EMI
96. Install input filtering: C-L-C Pi-filter on AC input for conducted noise reduction
97. Design shielding: continuous metal chassis provides Faraday cage for noise immunity
98. Add ground plane: solid copper ground plane in PCB for low-impedance return path
99. Implement star grounding: single-point ground prevents ground loops and noise coupling
100. Install EMI gaskets: conductive gaskets seal panel joints for RF containment

## Ripple Measurement and Testing

101. Connect differential probe: 10:1 probe with ground spring for low-inductance connection
102. Set oscilloscope coupling: AC coupling with 20MHz bandwidth limit for noise rejection
103. Measure no-load ripple: verify <300µVp-p at 0A output with 50Ω scope input
104. Test half-load ripple: confirm <600µVp-p at 2.5A into resistive load
105. Measure full-load ripple: verify <1mVp-p at 5A continuous current
106. Check ripple frequency: confirm 120Hz fundamental with harmonics <20% amplitude
107. Test transient response: apply 0-5A load step, measure overshoot and settling
108. Measure recovery time: verify output returns to regulation within 50ms
109. Check noise spectrum: FFT analysis confirms no spurious oscillations above 120Hz
110. Document ripple performance: record waveforms at multiple load points for QC records

## Load Regulation Testing

111. Connect electronic load: programmable DC load capable of 0-5A constant current
112. Set no-load voltage: adjust output to exactly 10.000V with DMM measurement
113. Apply full load: program load to draw 5.000A, measure voltage change
114. Calculate load regulation: verify voltage change <0.01% (1mV at 10V)
115. Test at multiple voltages: repeat measurements at 5V, 15V, 20V, and 30V outputs
116. Measure output resistance: calculate from voltage change and current change
117. Verify Kelvin compensation: test with and without remote sense connections
118. Test dynamic load: apply 1Hz square wave load, measure peak voltage deviation
119. Check current limit accuracy: verify current limiting activates at set point ±2%
120. Document regulation curves: plot voltage vs. current for constant voltage mode

## Line Regulation Testing

121. Install variable AC source: programmable AC supply for input voltage variation
122. Set nominal input: adjust AC source to 120V RMS, set output to 10V DC
123. Measure low-line regulation: reduce input to 108V (90%), measure output change
124. Test high-line regulation: increase input to 132V (110%), verify output stability
125. Calculate line regulation: confirm <0.01% output change for 10% input variation
126. Test brownout performance: reduce input to 85V, verify regulation or shutdown
127. Check voltage dropout: measure minimum input voltage for full output and current
128. Test input surge immunity: apply 1kV surge per IEC 61000-4-5, verify survival
129. Measure input current: verify power factor and harmonic content per IEC 61000-3-2
130. Document line performance: create input voltage vs. output voltage curves

## Thermal Management Design

131. Size main heatsink: calculate thermal resistance for 75°C junction at 150W dissipation
132. Select heatsink profile: extruded aluminum with vertical fins for natural convection
133. Apply thermal compound: thin layer of silicone compound for optimal heat transfer
134. Mount cooling fan: 80mm 12V fan provides forced air cooling for high-power operation
135. Install temperature sensor: thermistor monitors heatsink temperature continuously
136. Design fan control: thermostatic control activates fan when heatsink exceeds 50°C
137. Add thermal shutdown: protection circuit disables output if heatsink reaches 85°C
138. Mount transformer away from electronics: physical separation prevents heat coupling
139. Design ventilation: perforated chassis panels allow airflow across critical components
140. Measure thermal rise: verify junction temperature <125°C at full load, 40°C ambient

## PCB Layout and Design

141. Create main control board: double-sided PCB with plated through-holes
142. Design power routing: 2oz copper weight for low resistance in current paths
143. Layout ground plane: solid bottom-side pour for stable reference and shielding
144. Route sensitive signals: differential pairs for voltage sensing, guard rings around reference
145. Add thermal relief: spoke connections for ease of soldering while maintaining conductivity
146. Design mounting holes: four corner holes for secure mechanical attachment
147. Install edge connectors: friction-fit connectors for transformer and panel connections
148. Add test points: easily accessible points for calibration and troubleshooting
149. Apply solder mask: green LPI mask for protection and professional appearance
150. Create silkscreen: component designators and polarity markings for assembly guidance

## Component Sourcing and Quality

151. Select precision resistors: 0.1% tolerance metal film resistors for critical circuits
152. Source low-drift capacitors: polypropylene film caps for timing and voltage references
153. Choose rated inductors: ferrite-core inductors rated for DC bias current
154. Verify transistor matching: select pass transistors with matched hFE and VBE
155. Acquire certified reference: purchase precision voltage reference with calibration certificate
156. Source industrial connectors: UL-recognized terminal blocks and power connectors
157. Select safety-rated fuses: UL/CSA approved fuses for primary and output protection
158. Choose quality potentiometers: cermet or conductive plastic for long life and reliability
159. Acquire military-spec wire: UL1015 stranded wire for internal connections
160. Source thermal materials: UL-rated thermal compound and insulating washers

## Assembly Process

161. Prepare PCB: inspect for defects, verify correct revision and part number
162. Apply solder paste: stencil application for surface-mount components if present
163. Place components: automated or manual placement following assembly drawing
164. Solder through-hole parts: wave soldering or hand soldering per IPC-A-610 standards
165. Install heatsink hardware: insulating washers and bushings for transistor isolation
166. Apply thermal compound: measured amount applied to clean transistor surfaces
167. Mount power components: torque fasteners to specification for proper thermal contact
168. Wire transformer: solder connections with strain relief and proper lead dress
169. Install chassis components: binding posts, switches, and potentiometers to front panel
170. Connect internal wiring: point-to-point wiring following color code and routing diagram

## Calibration Procedures

171. Connect precision DMM: 6.5-digit multimeter for voltage and current measurement
172. Apply calibration input: precision DC source provides known voltage reference
173. Adjust voltage offset: trim pot sets zero point with adjustment controls at minimum
174. Calibrate voltage span: trim pot adjusted so full-scale reading matches 30.000V
175. Set current shunt gain: adjust amplifier gain so 5.000A reads correctly on display
176. Calibrate current offset: zero adjustment with no load current flowing
177. Adjust voltage display: correct ADC gain and offset for accurate readout
178. Calibrate current display: trim display scaling to match actual current
179. Set current limit threshold: adjust comparator reference for precise limit activation
180. Verify remote sense: test Kelvin compensation with known lead resistance

## Safety Certification Testing

181. Perform dielectric withstand: 1500V AC for 60 seconds between primary and secondary
182. Measure leakage current: verify <0.5mA at 264V AC input per UL 61010-1
183. Test ground continuity: <0.1Ω resistance from chassis to ground pin
184. Check enclosure integrity: verify no accessible live parts per finger probe test
185. Perform drop test: 1-meter drop onto concrete verifies mechanical integrity
186. Test thermal protection: verify shutdown occurs before components exceed ratings
187. Check marking compliance: verify all required UL/CE markings present and legible
188. Perform EMC testing: verify compliance with FCC Part 15 Class B and EN 55011
189. Test ESD immunity: 8kV contact discharge per IEC 61000-4-2 without malfunction
190. Verify documentation: instruction manual includes all required safety warnings

## Production Testing and QC

191. Perform incoming inspection: verify transformer winding resistance and turns ratio
192. Test power-on sequence: verify soft-start operation and absence of inrush current spikes
193. Measure output voltage accuracy: test at 5V, 10V, 20V, and 30V set points
194. Verify current limiting: test constant-current operation from 1A to 5A settings
195. Conduct burn-in test: operate at full load for 4 hours, verify no drift or failure
