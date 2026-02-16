---
title: "Compressed Air System"
company: "Atlas Copco"
country: "Sweden"
selling_price: 20.0
inputs:
  - name: "Air Compressor"
    cost: 4.0
    link: "industrial-compressor"
  - name: "Air Dryer"
    cost: 2.0
    link: "heat-treatment"
  - name: "Receiver Tank"
    cost: 1.0
    link: "steel-fabrication"
  - name: "Piping"
    cost: 1.5
    link: "copper-tube"
  - name: "Filtration"
    cost: 0.8
    link: "polishing-equipment"
  - name: "Control System"
    cost: 1.2
    link: "machine-controller"
value_created: 9.5
---

# Compressed Air System Manufacturing Process

## System Design and Specification

1. Assess facility compressed air demand through comprehensive load analysis across all production shifts and seasonal variations
2. Calculate total CFM requirements by summing all pneumatic equipment consumption rates plus 20-30% safety margin for future expansion
3. Determine required system pressure (typically 90-150 PSI for industrial applications, 175 PSI for heavy manufacturing)
4. Specify air quality requirements per ISO 8573-1 standards for particulate, water, and oil contamination levels
5. Select Class 1 air quality (0.1 µm particle filtration, -70°F pressure dew point) for instrumentation and pharmaceutical applications
6. Select Class 2-3 air quality (1 µm filtration, -40°F dew point) for general manufacturing and assembly operations
7. Design system for minimum 0.1 mg/m³ total oil content meeting ISO 8573-1 Class 1 oil aerosol specifications
8. Calculate compressed air consumption for each end-use category: pneumatic tools, cylinders, controls, and process applications
9. Develop load profile showing peak demand periods versus continuous base load requirements throughout 24-hour cycle
10. Size compressor capacity for 70-80% average loading to optimize efficiency while meeting peak demands

## Rotary Screw Compressor Selection

11. Select oil-injected rotary screw compressor design for 100-500 HP industrial applications with 90-110 PSI output
12. Specify twin-screw rotor configuration with 4/6 lobe male/female profile for optimal compression efficiency
13. Choose rotor diameter and length ratio (L/D = 1.4-1.6) for balanced volumetric efficiency and pressure capability
14. Apply asymmetric rotor profile design to minimize internal leakage and maximize isentropic efficiency (85-90%)
15. Select nodular cast iron rotors machined to 0.0005-inch profile accuracy for tight clearances and long service life
16. Apply proprietary coating to rotor surfaces reducing friction and improving wear resistance over 60,000-hour design life
17. Size rotor bearings for 100,000-hour L10 life using cylindrical roller bearings on drive end, ball bearings on non-drive end
18. Install precision angular contact ball bearings handling axial thrust loads from compression pressure differential
19. Design rotor clearances of 0.003-0.005 inches for thermal expansion while minimizing internal leakage paths
20. Select synthetic PAO compressor oil (ISO VG 46) for rotor lubrication, sealing, and heat removal from compression process

## Variable Speed Drive Integration

21. Install variable frequency drive (VFD) system controlling motor speed from 30% to 100% rated capacity
22. Integrate pressure transducer providing 4-20 mA feedback signal to VFD controller for closed-loop pressure regulation
23. Program VFD to maintain system pressure setpoint ±2 PSI by modulating compressor speed in real-time
24. Configure VFD ramp rates limiting acceleration to 10 seconds and deceleration to 15 seconds preventing mechanical shock
25. Install sine wave filter on VFD output reducing total harmonic distortion (THD) below 5% protecting motor windings
26. Apply VFD to achieve 35% energy savings compared to load/unload control during partial load operation
27. Select premium efficiency IE4 motor (96.2% efficiency at 100 HP) for VFD-driven compressor applications
28. Design VFD cooling system with forced air circulation maintaining semiconductor junction temperatures below 85°C
29. Install VFD harmonic mitigation using DC bus chokes or active front end converters meeting IEEE 519 standards
30. Program VFD sleep mode shutting down compressor when system pressure maintained by storage for 10+ minutes

## Intake Air Filtration System

31. Install intake air filter housing with replaceable panel filter elements rated 99% efficiency at 3 microns
32. Design intake filter for maximum 0.5 PSI pressure drop when clean, 2 PSI maximum before filter replacement required
33. Mount intake filter outdoors in shaded location accessing coolest ambient air (each 5°F reduction improves efficiency 1%)
34. Install filter differential pressure gauge with 2 PSI replacement indicator alerting operators to maintenance needs
35. Select polyester media intake filters withstanding 200°F temperature surges and resistant to moisture collapse
36. Size intake filter area for maximum 500 feet/minute face velocity preventing filter media damage from high airflow
37. Install weather hood and drain on intake filter preventing rain ingestion while allowing unrestricted airflow
38. Apply antimicrobial treatment to intake filter media preventing biological growth in humid operating environments
39. Design intake ducting with smooth bends (R/D ≥ 2) and maximum 15 feet/second velocity minimizing pressure losses
40. Install intake silencer reducing compressor noise by 15-20 dB(A) to achieve 70-75 dB(A) at 3 feet per OSHA requirements

## First Stage Compression

41. Route filtered intake air through inlet valve assembly controlling compressor loading via modulating butterfly valve
42. Accelerate inlet air from 0 to 150 feet/second as it enters rotating screw cavity between male and female rotors
43. Trap air volume in compression pocket as rotors mesh, progressively reducing volume as pocket moves toward discharge
44. Inject atomized lubricating oil at 15-20 gallons/minute into compression chamber for sealing, lubrication, and cooling
45. Compress air through 8-10 individual compression pockets formed by rotor lobes during each shaft revolution
46. Achieve built-in compression ratio of 3.5:1 (14.7 PSIA to 51.5 PSIA) in first compression stage
47. Maintain compression chamber temperature at 180-200°F through oil cooling of compression process (oil-flooded design)
48. Rotate male rotor at 3,000-3,600 RPM directly coupled to motor, female rotor driven by male through meshing action
49. Control tip speed at rotor diameter to 150-180 feet/second optimizing efficiency without excessive noise generation
50. Generate 100 CFM compressed air output per 20 HP motor input at standard atmospheric conditions (14.7 PSIA, 68°F)

## Second Stage Compression and Oil Injection

51. Continue compression in second half of rotor length as trapped air volume progressively decreases
52. Inject additional cooling oil maintaining compression temperature below 220°F preventing carbonization and wear
53. Achieve final compression ratio of 7-9:1 (14.7 PSIA to 105-130 PSIA absolute) at discharge port
54. Design discharge port timing for optimal built-in pressure ratio matching system requirements (minimizing over/under compression)
55. Mix compressed air with injected oil creating air/oil mixture at 30-50% oil content by volume at compressor discharge
56. Route hot air/oil mixture through discharge check valve preventing reverse rotation during shutdown
57. Measure discharge temperature with RTD sensor triggering high temperature shutdown at 230°F protecting compressor
58. Direct air/oil mixture into integrated separator tank at 4-6 feet/second velocity for initial bulk separation
59. Remove 95% of injected oil through gravity separation as air velocity reduces and oil droplets coalesce
60. Collect separated bulk oil in separator tank sump returning to oil cooling circuit via scavenge line

## Oil Separation and Filtration

61. Pass air stream through primary separator element removing oil droplets down to 10 micron size
62. Route air through high-efficiency coalescing separator removing 99.9% of remaining oil aerosols
63. Achieve oil carryover of less than 3 PPM in compressed air stream using multi-stage separator elements
64. Design separator elements with borosilicate glass fiber media capturing submicron oil droplets
65. Configure separator flow path forcing air through tortuous path where oil droplets coalesce on fiber surfaces
66. Drain coalesced oil from separator element bottom returning to oil reservoir through automatic float drain
67. Monitor separator differential pressure (clean: 2-3 PSI, replace at 10 PSI) indicating element saturation
68. Replace oil separator elements every 8,000 operating hours or when differential pressure exceeds specification
69. Install separator bypass safety valve opening at 15 PSI differential preventing element rupture during filter plugging
70. Apply anti-static treatment to separator media preventing spark generation from friction of high-velocity air flow

## Oil Cooling and Temperature Control

71. Circulate separated oil through oil cooler maintaining 140-160°F oil injection temperature for optimal viscosity
72. Install air-cooled oil cooler with aluminum plate-fin design transferring 2,500 BTU/minute heat rejection
73. Control oil cooler fan with thermostatic valve modulating airflow to maintain stable oil temperature year-round
74. Size oil cooler for 95°F ambient temperature with 20°F approach temperature difference at full load
75. Alternative: Install water-cooled shell-and-tube oil cooler for facilities with available cooling water infrastructure
76. Design water-cooled system for 85°F inlet water temperature with 15°F temperature rise at 10 GPM flow rate
77. Install oil filter (10 micron absolute) in oil circulation circuit removing contaminants and wear particles
78. Replace spin-on oil filter every 2,000 hours preventing restriction and ensuring clean oil injection
79. Monitor oil level with sight glass maintaining proper oil volume (30-50 gallons) for cooling capacity
80. Install oil reservoir heater (500W) maintaining minimum oil temperature above 40°F for cold climate startups

## Aftercooler Design and Installation

81. Route compressed air immediately to aftercooler reducing discharge temperature to within 15°F of ambient conditions
82. Install air-cooled aftercooler with aluminum air-to-air heat exchanger rejecting 2,000-3,000 BTU/minute heat load
83. Design aftercooler for 10-15 PSI maximum pressure drop preventing excessive system pressure loss
84. Configure aftercooler with turbulent flow passages enhancing heat transfer coefficient to 15-20 BTU/hr-ft²-°F
85. Cool compressed air from 200°F discharge to 95-105°F after cooling condensing 70-80% of water vapor
86. Calculate moisture removal: 1,000 CFM compressor at 80°F, 60% RH removes 50-70 gallons/day water through aftercooling
87. Mount aftercooler vertically with bottom outlet allowing condensed water to drain by gravity
88. Install automatic condensate drain (zero-loss type) removing water without releasing compressed air
89. Size aftercooler surface area (150-200 ft²) for complete heat rejection at worst-case ambient temperature
90. Apply epoxy coating to aftercooler internals preventing corrosion from acidic condensate (pH 4-5)

## Moisture Separator Installation

91. Install moisture separator immediately downstream of aftercooler capturing condensed water droplets
92. Design centrifugal separator inducing rotational flow removing 99% of free liquid water from air stream
93. Size separator for maximum 5 PSI pressure drop at rated flow velocity of 20-25 feet/second
94. Configure separator with baffle plates creating turbulent flow patterns promoting droplet coalescence
95. Install automatic float drain valve discharging condensate while preventing compressed air loss
96. Collect 40-60 gallons/day condensate from typical 100 HP compressor operating at humid conditions
97. Route condensate through oil/water separator before disposal meeting EPA effluent discharge limits
98. Monitor separator drain function with condensate level switch providing alarm for drain malfunction
99. Install manual drain valve for backup drainage during automatic drain maintenance or failure
100. Maintain separator bowl cleanliness inspecting quarterly and cleaning if sludge accumulation observed

## Receiver Tank Sizing and Function

101. Install vertical or horizontal receiver tank (260-500 gallon capacity) for compressed air storage and stabilization
102. Size receiver for 2-3 gallons storage per CFM compressor output providing volume buffer for demand fluctuations
103. Design receiver for ASME Section VIII Division 1 pressure vessel code rated 200 PSI working pressure
104. Apply post-weld heat treatment to receiver welds stress-relieving welded joints per ASME requirements
105. Install receiver safety relief valve set at 10% above maximum working pressure (150 PSI system = 165 PSI relief)
106. Mount pressure gauge, temperature gauge, and drain valve on receiver per ASME code requirements
107. Locate receiver downstream of aftercooler/separator providing additional residence time for moisture dropout
108. Configure receiver internals with baffle promoting rotational flow and additional water separation
109. Install automatic condensate drain on receiver removing accumulated water from velocity reduction and cooling
110. Inspect receiver annually per jurisdiction requirements including ultrasonic thickness testing after 15 years service

## Refrigerated Air Dryer System

111. Install refrigerated air dryer downstream of receiver providing 35-40°F pressure dew point dried air
112. Route compressed air through refrigerant-cooled heat exchanger removing additional moisture through cooling
113. Configure dryer with air-to-air precooler transferring cold from dried air to incoming wet air (energy recovery)
114. Size refrigerated dryer for pressure dew point specification at worst-case inlet conditions (100°F air, 100% RH)
115. Install hermetic refrigeration compressor (R134a or R407C refrigerant) providing 18,000-36,000 BTU/hour cooling
116. Design evaporator coil preventing ice formation through cycling defrost or hot gas bypass control
117. Control refrigeration system maintaining 35-38°F evaporator temperature (above freezing to prevent ice blockage)
118. Remove additional 10-20 gallons/day condensate through refrigerated dryer cooling process
119. Achieve pressure dew point suitable for general manufacturing, pneumatic tools, and non-critical applications
120. Monitor dryer performance with dewpoint sensor or manual dew point meter verifying specification compliance

## Desiccant Dryer Configuration

121. Install dual-tower desiccant dryer for applications requiring -40°F to -100°F pressure dew point
122. Fill towers with activated alumina desiccant (350-450 lbs per tower) for general industrial drying applications
123. Alternative: Use molecular sieve desiccant for -100°F pressure dew point required for instrument air or critical processes
124. Configure heatless regenerated dryer using 15-20% of dried compressed air for desiccant regeneration
125. Alternate drying and regeneration cycles every 4 minutes (drying tower online while regeneration tower offline)
126. Route compressed air upward through online desiccant tower bed at velocity below 50 feet/minute
127. Adsorb water vapor onto desiccant surface reducing moisture content to -40°F or -100°F pressure dew point
128. Depressurize offline tower to atmospheric pressure preparing for regeneration purge cycle
129. Route portion of dried air downward through offline tower purging adsorbed moisture to atmosphere
130. Maintain desiccant bed depth of 4-6 feet ensuring adequate contact time for complete moisture adsorption

## Advanced Desiccant Dryer Options

131. Optional: Install blower-purge desiccant dryer using external blower for regeneration reducing purge air from 15% to 7%
132. Optional: Configure heated purge dryer with electric heaters accelerating regeneration reducing purge air to 3-5%
133. Apply heat-of-compression (HOC) dryer design using compressor discharge heat for zero-purge air regeneration
134. Install dewpoint sensor on dryer outlet monitoring performance and triggering alarms for dewpoint excursions
135. Configure dewpoint dependent switching controlling tower cycling based on actual performance versus fixed timers
136. Replace desiccant every 3-5 years as adsorption capacity degrades from contamination and attrition
137. Inspect desiccant for oil contamination (hard clumps, dark color) requiring dryer teardown and desiccant replacement
138. Install pre-filters upstream of desiccant dryer protecting desiccant from oil and particulate contamination
139. Monitor desiccant dryer pressure drop (clean: 3-5 PSI, service needed above 8 PSI) indicating bed fouling
140. Test outlet dewpoint monthly using chilled mirror dewpoint meter verifying specification compliance

## Distribution System Design

141. Design compressed air distribution system using aluminum piping or copper tubing for corrosion resistance
142. Size main distribution headers for maximum 10 PSI pressure drop from compressor room to furthest point of use
143. Calculate pipe sizing using 20 feet/second maximum velocity criterion preventing excessive friction losses
144. Install 2-inch main header for 100 CFM flow, 3-inch for 300 CFM, 4-inch for 600 CFM at 100 PSI
145. Slope distribution piping 1/2 inch per 10 feet toward drain legs removing condensate from piping system
146. Install drip legs with automatic drains at low points, dead ends, and before point-of-use drops every 75-100 feet
147. Design distribution as loop system providing redundant air supply paths and reducing pressure variations
148. Take point-of-use drop connections from top of horizontal header preventing condensate from entering equipment
149. Install isolation valves throughout distribution enabling section isolation for maintenance without full system shutdown
150. Apply pipe identification per ANSI/ASME A13.1 (yellow background, black letters) labeling compressed air piping

## Point-of-Use Treatment and Regulation

151. Install point-of-use filter-regulator-lubricator (FRL) combinations at each equipment connection
152. Configure 5-micron particulate filter removing pipe scale, rust, and desiccant dust from air supply
153. Install precision regulator maintaining equipment supply pressure ±1 PSI regardless of line pressure variations
154. Size regulator one size larger than line size (3/4-inch regulator for 1/2-inch line) minimizing pressure drop
155. Add lubricator for pneumatic tools injecting ISO VG 32 oil at 1 drop per 3 CFM for tool lubrication
156. Install coalescing filter (0.01 micron) for sensitive applications requiring oil-free air for painting or instrumentation
157. Configure differential pressure gauges on filters indicating replacement requirements at 15 PSI drop
158. Install quick-disconnect couplings enabling rapid tool changes while minimizing air losses during connection
159. Apply thread sealant (PTFE tape or pipe dope) to all threaded connections preventing leaks
160. Pressure test all new piping installations at 150% working pressure (150 PSI system tested at 225 PSI) for 24 hours

## ISO 8573 Air Quality Classification

161. Classify compressed air quality per ISO 8573-1:2010 standard covering particles, water, and oil content
162. Define Class 1 particulate: Maximum 0.1 µm particle size, 0.1 mg/m³ concentration for pharmaceutical/electronics
163. Define Class 2 particulate: Maximum 1 µm particles, 1 mg/m³ concentration for instrumentation and control air
164. Define Class 3 particulate: Maximum 5 µm particles, 5 mg/m³ concentration for general manufacturing use
165. Specify Class 2 water content: Pressure dewpoint -40°C (-40°F) for outdoor installations preventing freeze-up
166. Specify Class 4 water content: Pressure dewpoint +3°C (37°F) for indoor applications without freezing risk
167. Define Class 1 oil content: Maximum 0.01 mg/m³ total oil (aerosol + vapor) for food, pharmaceutical applications
168. Define Class 2 oil content: Maximum 0.1 mg/m³ total oil for breathing air and sensitive instrumentation
169. Achieve ISO 8573-1 Class 1.2.1 air quality (best particulate/oil, -40°F dewpoint) for critical applications
170. Test air quality annually per ISO 8573 using certified measurement equipment verifying system performance

## Leak Detection and Prevention

171. Implement ultrasonic leak detection program identifying leaks above 3 CFM through characteristic high-frequency sound
172. Survey entire compressed air system quarterly using ultrasonic detector detecting leaks audible at 40 kHz frequency
173. Tag identified leaks with priority classification: Critical (>10 CFM), Major (3-10 CFM), Minor (<3 CFM)
174. Calculate leak cost: 10 CFM continuous leak wastes $1,500-2,500 annually in electrical energy at $0.10/kWh
175. Repair leaks immediately during production downtime prioritizing largest leaks for maximum energy savings
176. Install pressure decay test measuring overnight pressure drop in isolated system quantifying total system leakage
177. Target leak rate below 10% of compressor capacity (100 CFM system should have <10 CFM total leakage)
178. Apply leak sealant to threaded connections, replace worn quick-disconnects, and repair damaged hoses
179. Upgrade to push-to-connect fittings on flexible hoses eliminating threaded connection leak paths
180. Install automatic shut-off valves on equipment drops isolating non-operating equipment preventing continuous leaks

## Energy Auditing and Optimization

181. Measure compressed air system electrical consumption using power meter on compressor motor and auxiliaries
182. Calculate specific power consumption: 18-22 kW per 100 CFM for efficient systems at 100 PSI discharge pressure
183. Monitor compressor loading identifying excessive start/stop cycling or constant unloaded running indicating inefficiency
184. Implement pressure reduction strategy: Each 2 PSI reduction in system pressure saves 1% compressor energy
185. Lower distribution pressure from 110 PSI to 100 PSI saving 5% energy if equipment operates properly at lower pressure
186. Install flow meters on main header and major branches quantifying air consumption by production area
187. Conduct off-hours audit measuring air consumption during non-production identifying inappropriate uses and leaks
188. Calculate compressed air generation cost: $0.20-0.40 per 1,000 cubic feet including capital, energy, and maintenance
189. Identify artificial demand from pressure regulators set higher than equipment requirements wasting energy
190. Size storage capacity adequately eliminating rapid compressor cycling during minor demand fluctuations

## Predictive Maintenance Program

191. Monitor compressor oil analysis quarterly testing viscosity, contamination, and additive depletion predicting oil life
192. Track vibration signatures on compressor bearings using accelerometers detecting bearing wear before failure
193. Measure motor current draw comparing to baseline identifying efficiency losses from mechanical problems or voltage issues
194. Record compressor operating parameters daily: pressure, temperature, flow, runtime enabling trend analysis
195. Schedule maintenance based on operating hours rather than calendar time: Oil change 2,000 hours, separator 8,000 hours, optimize resource utilization while ensuring reliable system operation meeting production air quality and quantity requirements