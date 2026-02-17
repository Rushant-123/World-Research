---
title: "Real-Time Clock Module"
company: "Maxim Integrated"
country: "United States"
selling_price: 0.5
inputs:
  - name: "Crystal Oscillator"
    cost: 0.15
    link: "crystal-oscillator"
  - name: "RTC IC"
    cost: 0.2
    link: "rtc-ic"
  - name: "Battery Backup"
    cost: 0.1
    link: "coin-battery"
value_created: 0.05
---

# Manufacturing Process: Real-Time Clock Module

**Market Leader:** [Maxim Integrated](/companies/maxim-integrated)



## Section 1: 32.768 kHz Crystal Oscillator Setup (Steps 1-35)

1. Source 32.768 kHz tuning fork crystal with ±20ppm initial accuracy
2. Verify crystal load capacitance specification (typically 12.5pF)
3. Inspect crystal package for physical damage or contamination
4. Measure crystal series resistance (ESR) using impedance analyzer
5. Confirm ESR below 50kΩ for reliable oscillation startup
6. Test crystal frequency deviation across temperature range (-40°C to +85°C)
7. Calculate required load capacitors using formula: CL = 2(C1×C2)/(C1+C2) + Cstray
8. Select high-stability NPO/COG ceramic capacitors for load network
9. Verify capacitor tolerance of ±5% or better for frequency accuracy
10. Measure actual capacitance values with precision LCR meter
11. Calculate total parasitic capacitance from PCB traces and IC pins
12. Adjust load capacitor values to compensate for Cstray (typically 2-5pF)
13. Design PCB layout with crystal traces as short as possible (<10mm)
14. Position crystal within 5mm of RTC IC oscillator pins
15. Create ground guard ring around crystal oscillator circuit
16. Connect guard ring to analog ground plane with multiple vias
17. Route crystal traces on same PCB layer without vias
18. Maintain 50Ω trace impedance for oscillator feedback path
19. Keep crystal traces away from switching power supplies (>20mm clearance)
20. Avoid routing high-speed digital signals near oscillator circuit
21. Place series resistor (typically 10MΩ) in feedback path if required
22. Install load capacitors C1 and C2 symmetrically on both crystal pins
23. Add optional amplitude limiting resistor (100kΩ-1MΩ) if IC lacks internal limiting
24. Solder crystal using low-temperature profile to avoid thermal shock
25. Keep peak reflow temperature below 260°C for 10 seconds maximum
26. Allow crystal to stabilize for 24 hours after soldering before testing
27. Measure oscillator startup time using oscilloscope (should be <1 second)
28. Verify oscillation amplitude between 0.3V and 1.0V peak-to-peak
29. Check for stable oscillation without intermittent stops over 30-minute period
30. Measure frequency using frequency counter with 0.1ppm resolution
31. Calculate initial frequency error: Error(ppm) = (Measured - 32768)/32768 × 10^6
32. Verify negative resistance margin >5× critical transconductance
33. Test oscillator immunity to external vibration and shock
34. Measure power consumption of oscillator circuit (typically 1-2μA)
35. Document crystal parameters and PCB layout for traceability

## Section 2: Frequency Compensation Techniques (Steps 36-65)

36. Characterize crystal temperature coefficient (typically -0.04ppm/°C²)
37. Measure frequency drift from -40°C to +85°C in thermal chamber
38. Plot frequency vs. temperature curve (parabolic characteristic)
39. Identify turnover temperature (typically +25°C for AT-cut crystals)
40. Calculate temperature coefficient: TC = Δf/(f₀×ΔT)
41. Determine if analog or digital compensation is required for target accuracy
42. For analog compensation: select thermistor with matching temperature curve
43. Calculate thermistor resistance network for voltage-variable capacitor
44. Install varactor diode in parallel with load capacitor if using analog trim
45. Design compensation voltage generator using thermistor divider
46. Calibrate compensation network at three temperatures: -40°C, +25°C, +85°C
47. Adjust trim potentiometer to minimize frequency error across range
48. For digital compensation: program temperature lookup table in RTC IC
49. Enable internal temperature sensor if available in RTC chip
50. Measure temperature sensor accuracy (typically ±3°C)
51. Create compensation algorithm: f_corrected = f_nominal × (1 + k×T²)
52. Store compensation coefficients in non-volatile memory
53. Implement automatic compensation routine executed every 10 minutes
54. Calculate aging offset compensation (typically +2 to +5ppm per year)
55. Program initial aging rate based on crystal datasheet specifications
56. Design calibration routine using external frequency reference
57. Implement automatic calibration at factory using GPS 1PPS signal
58. Program trim register to correct initial frequency offset
59. Calculate trim resolution: typical 0.12ppm per LSB for ±20ppm range
60. Verify frequency accuracy after compensation: target ±2ppm or better
61. Test long-term stability over 1000-hour burn-in period
62. Monitor frequency drift using time-interval counter
63. Adjust aging compensation factor based on observed drift
64. Implement self-learning algorithm to track aging over product lifetime
65. Document compensation parameters for each production unit

## Section 3: Battery Backup System (Steps 66-95)

66. Select lithium coin cell battery (CR2032 or similar) for backup power
67. Verify battery capacity sufficient for 10-year backup operation
68. Calculate backup current requirement: I_backup = I_RTC + I_oscillator + I_leakage
69. Typical backup current target: <1μA for 10-year life from 220mAh battery
70. Design battery holder with low contact resistance (<100mΩ)
71. Use gold-plated contacts to prevent corrosion over product lifetime
72. Add reverse battery protection diode or MOSFET in series with battery
73. Select Schottky diode with low forward voltage drop (<200mV)
74. Calculate power loss in protection diode: P = V_f × I_backup
75. Alternatively, use P-channel MOSFET with body diode for protection
76. Design automatic switchover circuit between main power and battery
77. Implement diode-OR configuration for simple switchover
78. Use comparator-controlled MOSFET switch for zero-voltage-drop switchover
79. Set switchover threshold at 2.5V to ensure smooth transition
80. Add hysteresis (typically 100mV) to prevent oscillation during switchover
81. Test switchover timing: should be <10μs to prevent timekeeping loss
82. Verify no glitches on VCC during power transitions
83. Add decoupling capacitor (1-10μF) on battery supply line
84. Implement trickle charge circuit if using rechargeable battery
85. Calculate trickle charge current: I_trickle = C_battery/10 (for 10-hour charge)
86. Add current-limiting resistor: R = (V_supply - V_battery)/I_trickle
87. Install blocking diode to prevent battery discharge through charge circuit
88. Test battery charging profile to avoid overcharge damage
89. Monitor battery voltage using ADC to detect low battery condition
90. Set low battery threshold at 2.0V for CR2032 lithium cell
91. Generate low battery warning interrupt when threshold crossed
92. Implement battery test function to measure open-circuit voltage
93. Calculate remaining battery capacity based on voltage curve
94. Add battery enable/disable control for shipping mode
95. Test backup operation by removing main power for extended period

## Section 4: I2C Interface Implementation (Steps 96-125)

96. Configure RTC IC for I2C communication mode (typically default)
97. Set I2C slave address according to datasheet (commonly 0x68 or 0xD0)
98. Verify address doesn't conflict with other devices on same bus
99. Connect SDA and SCL lines to microcontroller I2C pins
100. Add external pull-up resistors to SDA and SCL lines
101. Calculate pull-up resistance: R_pullup = (V_DD - 0.4V)/(3mA)
102. Typical pull-up values: 2.2kΩ to 10kΩ depending on bus capacitance
103. Verify rise time meets I2C specification: t_r < 1000ns for standard mode
104. Measure fall time: t_f < 300ns for standard mode (100kHz)
105. Test I2C bus capacitance: should be <400pF for reliable operation
106. Configure I2C clock frequency: 100kHz (standard) or 400kHz (fast mode)
107. Verify minimum clock low period: t_LOW > 4.7μs (standard mode)
108. Verify minimum clock high period: t_HIGH > 4.0μs (standard mode)
109. Test setup time for start condition: t_SU:STA > 4.7μs
110. Test hold time for start condition: t_HD:STA > 4.0μs
111. Verify data setup time: t_SU:DAT > 250ns
112. Verify data hold time: t_HD:DAT > 0ns (typically 300ns minimum)
113. Test setup time for stop condition: t_SU:STO > 4.0μs
114. Implement I2C write sequence for setting time/date registers
115. Send start condition, slave address with write bit (0)
116. Write register address pointer (typically 0x00 for seconds register)
117. Write time data in BCD or binary format as per datasheet
118. Send stop condition to complete write transaction
119. Implement I2C read sequence for reading time/date registers
120. Send start condition, slave address with write bit
121. Write register address pointer to start of time registers
122. Send repeated start condition
123. Send slave address with read bit (1)
124. Read time data bytes with ACK after each byte except last
125. Send NACK and stop condition after final byte

## Section 5: Calendar Functions (Steps 126-155)

126. Program seconds register (0-59) in BCD or binary format
127. Program minutes register (0-59) with proper encoding
128. Program hours register supporting both 12-hour and 24-hour formats
129. Implement AM/PM bit for 12-hour mode (bit 5 or 6 depending on IC)
130. Program day-of-week register (1-7, where 1=Sunday or Monday)
131. Program date register (1-31) with automatic month-end handling
132. Program month register (1-12) including century bit if available
133. Program year register (00-99) with century overflow detection
134. Implement leap year calculation algorithm in RTC hardware
135. Verify leap year logic: year divisible by 4, except century years not divisible by 400
136. Test February 29th rollover in leap years (2024, 2028, etc.)
137. Test February 28th to March 1st rollover in non-leap years
138. Verify automatic day-of-month correction for 30-day months
139. Test April 30th to May 1st transition
140. Test all month-end boundaries (28/29/30/31 days)
141. Implement century bit toggle on year 2099 to 2100 transition
142. Enable square wave output for timekeeping verification
143. Configure square wave frequency: 1Hz, 1024Hz, 4096Hz, or 8192Hz
144. Test square wave duty cycle: should be 50% ±5%
145. Verify square wave operates during battery backup mode
146. Implement oscillator stop flag to detect timekeeping loss
147. Check oscillator stop flag after power-up or battery insertion
148. Clear oscillator stop flag after valid time is programmed
149. Generate interrupt on oscillator stop condition if supported
150. Test timekeeping accuracy over 24-hour period using reference clock
151. Measure accumulated error: target <2 seconds per day after compensation
152. Implement software correction for systematic errors
153. Store last known good time in backup register for recovery
154. Add checksum or CRC to validate stored time data integrity
155. Test calendar rollover at midnight (23:59:59 to 00:00:00)

## Section 6: Alarm Functions (Steps 156-175)

156. Program alarm 1 registers: seconds, minutes, hours, day/date
157. Configure alarm 1 match conditions using mask bits
158. Set up alarm for specific second, minute, hour, or day
159. Enable per-second alarm (match on seconds only)
160. Enable per-minute alarm (match on minutes and seconds)
161. Enable per-hour alarm (match on hours, minutes, seconds)
162. Enable per-day alarm (match on day/date, hours, minutes, seconds)
163. Program alarm 2 registers: minutes, hours, day/date (no seconds)
164. Configure alarm 2 match conditions using mask bits
165. Enable alarm interrupt output (typically on INT/SQW pin)
166. Configure interrupt polarity: active-low or active-high
167. Test alarm trigger at programmed time
168. Verify interrupt signal assertion when alarm condition met
169. Read alarm flag in status register to confirm alarm event
170. Clear alarm flag by writing 0 to flag bit
171. Verify interrupt signal deasserts after flag cleared
172. Test multiple alarm conditions simultaneously if supported
173. Implement alarm persistence across power cycles using battery backup
174. Test alarm during battery backup operation
175. Implement snooze function by reprogramming alarm time

## Section 7: Power Consumption Optimization (Steps 176-195)

176. Measure total current consumption in active mode (typically 2-5μA)
177. Measure battery backup current with main power removed (target <1μA)
178. Identify current consumption breakdown: oscillator, logic, I/O, leakage
179. Disable unused features to minimize power: square wave output, alarms
180. Configure I2C pins as inputs with pull-ups disabled during backup
181. Measure oscillator current separately (typically 0.5-1.5μA)
182. Reduce oscillator drive current if crystal allows (check startup reliability)
183. Verify temperature sensor disabled during backup to save power
184. Test power consumption across temperature range (-40°C to +85°C)
185. Measure leakage current through protection diodes and MOSFETs
186. Select components with ultra-low leakage: <10nA per device
187. Implement power gating for non-critical functions during backup
188. Add enable control for external circuits powered from RTC supply
189. Measure power consumption of complete module including PCB leakage
190. Calculate battery life: Life(years) = Battery_capacity(mAh) / (I_backup(μA) × 8.76)
191. Verify 10-year battery life with margin (target 0.8μA for 220mAh battery)
192. Test module in low-power mode for extended period (1000+ hours)
193. Monitor battery voltage decay rate to validate power consumption
194. Optimize PCB layout to minimize leakage paths and parasitic capacitance
195. Perform final power consumption verification and document results

## Quality Control and Testing

All manufactured RTC modules undergo comprehensive testing including:
- Frequency accuracy verification at multiple temperatures
- Battery backup operation for minimum 72 hours
- I2C communication stress testing with various bus conditions
- Calendar function validation across all month boundaries
- Alarm timing accuracy verification
- Power consumption measurement in all operating modes
- Long-term reliability testing with accelerated aging

## Technical Specifications

- **Timekeeping Accuracy**: ±2ppm after compensation (±5 seconds/month)
- **Operating Voltage**: 2.0V to 5.5V (main supply)
- **Backup Voltage**: 2.0V to 3.5V (battery)
- **Active Current**: 2-5μA at 3.3V
- **Backup Current**: <1μA at 3.0V
- **Battery Life**: >10 years with CR2032 (220mAh)
- **Operating Temperature**: -40°C to +85°C
- **I2C Speed**: Up to 400kHz (fast mode)
- **Calendar Range**: Year 2000 to 2099 (or 2199 with century bit)
- **Alarm Channels**: 2 independent programmable alarms
- **Oscillator**: 32.768 kHz tuning fork crystal
