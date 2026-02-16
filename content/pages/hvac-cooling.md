---
title: "HVAC Cooling"
company: "Schneider Electric"
country: "France"
selling_price: 150000.00
inputs:
  - name: "Heat Exchanger"
    cost: 25000.00
    link: "heat-exchanger"
  - name: "BLDC Motor"
    cost: 5000.00
    link: "bldc-motor"
  - name: "Copper Tube"
    cost: 8000.00
    link: "copper-tube"
  - name: "Power Transformer"
    cost: 10000.00
    link: "power-transformer"
  - name: "Automation Software"
    cost: 15000.00
    link: "automation-software"
value_created: 87000.00
---

1. Receive data center specifications including square footage (typically 5,000-50,000 sq ft), rack density (5-20 kW per rack), and total heat load requirements (500-5,000 kW)
2. Analyze ambient climate conditions at data center location including outdoor design temperatures ranging from -20°F to 115°F depending on geographic region
3. Calculate total cooling capacity requirements based on IT equipment heat output, typically requiring 1.2-1.5 tons of cooling per kW of IT load including PUE overhead
4. Design HVAC system architecture selecting between air-cooled chillers (95-110°F condensing temperature) or water-cooled chillers (85-95°F condensing temperature)
5. Specify chiller plant capacity with N+1 or 2N redundancy, each chiller unit providing 200-500 tons of cooling capacity at 44°F chilled water supply temperature
6. Engineer chilled water distribution system with primary-secondary pumping configuration, supply temperature 44-48°F, return temperature 54-58°F, 10°F delta-T
7. Design cooling tower system for water-cooled configurations with approach temperature 7-10°F, providing condenser water at 75-85°F supply temperature
8. Calculate chilled water flow rates using formula GPM = (Tons × 24) / (Delta-T × 500), typically 2.4 GPM per ton at 10°F delta-T
9. Size primary chilled water pumps for 60-100 feet of head pressure, flow rate 500-2,000 GPM per pump, pump efficiency 85-90%
10. Design secondary chilled water distribution pumps with variable frequency drives (VFDs) for flow modulation between 30-100% capacity based on cooling demand
11. Engineer pipe sizing for chilled water system: 6-12 inch diameter mains, 3-6 inch branch lines, maintaining flow velocity 4-8 feet per second
12. Specify pipe insulation thickness 1.5-2.0 inches of closed-cell elastomeric foam with vapor barrier jacket, preventing condensation at 55°F pipe surface temperature
13. Design computer room air handler (CRAH) units with capacity 50-150 tons each, supply air temperature 55-60°F, airflow 15,000-50,000 CFM per unit
14. Position CRAH units in hot aisle/cold aisle configuration with cold aisle width 4-6 feet, hot aisle width 4-6 feet for optimal airflow management
15. Engineer raised floor plenum height 24-36 inches providing static pressure 0.05-0.15 inches water column (iwc) for underfloor air distribution
16. Design perforated floor tile placement with 25-60% open area tiles in cold aisles, delivering 200-400 CFM per tile at 0.05 iwc plenum pressure
17. Calculate sensible heat ratio (SHR) for data center cooling at 0.95-1.0 since latent cooling load is minimal with sealed building envelope
18. Size CRAH unit fan motors at 15-40 HP with EC (electronically commutated) or BLDC motor technology achieving 85-92% motor efficiency
19. Integrate VFDs on all CRAH fans enabling speed modulation 30-100% based on supply air temperature or pressure setpoint control
20. Design hot aisle containment systems with polycarbonate or vinyl curtains/doors creating sealed 80-95°F hot aisle return air pathway
21. Engineer cold aisle containment with rigid door systems maintaining 65-75°F cold aisle temperature and positive pressurization 0.02-0.05 iwc
22. Install overhead return air plenum or ducted return paths collecting hot aisle exhaust air at 80-95°F for return to CRAH units
23. Design economizer system utilizing outside air cooling when outdoor temperature drops below 55°F dry bulb or 45°F wet bulb temperature
24. Engineer airside economizer with motorized dampers, mixing outdoor air with return air to achieve 55-60°F supply air temperature setpoint
25. Size economizer outdoor air intake louvers for 100% outdoor air flow at peak economizer operation, typically 150,000-500,000 CFM for large facilities
26. Install air filtration system with MERV 13-14 filters removing particles 0.3-1.0 microns, pressure drop 0.3-0.6 iwc when clean
27. Design waterside economizer using cooling tower water directly through plate-and-frame heat exchangers when outdoor wet bulb temperature below 40°F
28. Engineer free cooling heat exchangers with approach temperature 5-8°F, capacity matching full chiller plant output for maximum economizer hours
29. Calculate annual economizer operating hours based on climate data, achieving 2,000-6,000 hours per year depending on location
30. Design building management system (BMS) integration using BACnet or Modbus protocols for centralized monitoring and control
31. Program chiller sequencing control algorithms to stage chillers on/off based on load profile maintaining 50-90% individual chiller loading for efficiency
32. Configure supply air temperature reset schedule raising setpoint from 55°F to 68°F as outdoor temperature decreases, reducing cooling energy
33. Implement chilled water temperature reset increasing supply temperature from 44°F to 52°F based on cooling load reduction below 70% capacity
34. Engineer differential pressure control in raised floor plenum maintaining 0.08-0.12 iwc static pressure by modulating CRAH fan speeds
35. Design redundant cooling architecture with N+1 configuration ensuring 100% cooling capacity available with any single CRAH unit failure
36. Specify glycol addition to chilled water system (15-30% ethylene or propylene glycol) for outdoor installations subject to freezing temperatures
37. Calculate glycol concentration required for freeze protection: 25% glycol protects to 15°F, 30% protects to 5°F, 35% protects to -5°F
38. Engineer expansion tank sizing for chilled water system: tank volume = 5-10% of total system water volume accommodating thermal expansion
39. Design buffer tank capacity 500-2,000 gallons providing thermal mass to stabilize chilled water temperature during load fluctuations
40. Install pressure relief valves on all chilled water loops set at 125-150 PSI protecting system from overpressure conditions
41. Size makeup water connections and automatic fill valves maintaining system pressure 15-25 PSI when system is cold and depressurized
42. Engineer water treatment system with chemical feed pumps dosing corrosion inhibitors, scale inhibitors, and biocides to protect piping and heat exchangers
43. Specify water quality parameters: pH 7.5-9.0, conductivity 500-1,500 microsiemens, dissolved oxygen below 0.5 ppm, maintaining system cleanliness
44. Design condensate drain system for CRAH units with trapped drains preventing air infiltration, draining to floor drains or condensate pumps
45. Install vibration isolation for all rotating equipment using spring isolators or neoprene pads reducing transmitted vibration to 90-95% isolation efficiency
46. Engineer acoustic treatment with sound attenuators in ductwork and equipment enclosures maintaining data center noise level below 70 dBA
47. Design electrical power distribution for HVAC equipment with dedicated 480V 3-phase circuits, circuit breakers sized at 125% of full load amperage
48. Calculate electrical load for chiller plant: chillers 0.5-0.7 kW per ton, pumps 0.02-0.04 kW per ton, cooling towers 0.03-0.05 kW per ton
49. Size emergency generator capacity including HVAC loads ensuring minimum 50% cooling capacity available during utility power failure
50. Engineer automatic transfer switches (ATS) for critical HVAC components with transfer time under 10 seconds maintaining continuous cooling operation
51. Design uninterruptible power supply (UPS) for BMS and control systems providing 30-60 minutes backup power for monitoring and control functions
52. Install liquid detection sensors in raised floor plenum at 20-30 foot spacing detecting water leaks from piping or equipment failures
53. Position temperature sensors throughout data center at supply air, return air, and ambient locations with accuracy ±1°F monitoring thermal conditions
54. Install humidity sensors measuring relative humidity 35-55% RH with accuracy ±2% RH preventing static discharge and condensation issues
55. Mount differential pressure sensors across air filters, heat exchangers, and in plenums with range 0-1.0 iwc and accuracy ±0.01 iwc
56. Engineer flow measurement for chilled water circuits using ultrasonic or magnetic flow meters with accuracy ±1% of reading
57. Install pressure transducers on chilled water supply and return measuring 0-100 PSI with 4-20mA output signals to BMS
58. Position air velocity sensors in critical airflow paths measuring 200-2,000 FPM with hot wire anemometer technology
59. Design smoke detection system with aspirating smoke detectors (ASD) providing very early warning at 0.001-0.02% obscuration per foot
60. Receive heat exchanger units fabricated from copper tubes and aluminum fins, rated for 500-2,000 MBH capacity at specified air and water flows
61. Inspect heat exchanger construction verifying tube-to-header joints are properly brazed, fin spacing 8-14 fins per inch, and coil face area 20-60 square feet
62. Pressure test heat exchangers to 300 PSI air pressure with soap solution leak detection ensuring zero leakage from tubes or headers
63. Install heat exchangers in CRAH unit chassis with rubber gaskets sealing coil perimeter preventing air bypass around coil edges
64. Connect chilled water supply and return piping to heat exchanger headers using grooved couplings or flanged connections rated 150 PSI
65. Install manual air vent valves at high points of heat exchanger coils purging trapped air that reduces heat transfer efficiency by 10-30%
66. Mount thermostatic control valves on chilled water supply modulating water flow 0-100% based on supply air temperature sensor feedback
67. Receive BLDC motors manufactured with neodymium permanent magnets, rated 15-40 HP, efficiency 90-94%, power factor 0.95-0.98
68. Inspect motor shaft runout measuring less than 0.002 inches total indicator reading (TIR) ensuring vibration-free operation
69. Mount motors on CRAH fan assemblies using flexible couplings or direct-drive fan wheels rated for continuous duty operation
70. Install motor shaft seals preventing moisture ingress, IP54 or IP55 enclosure rating protecting against dust and water spray
71. Connect motor power wiring with appropriately sized conductors: #6 AWG for 15 HP, #4 AWG for 20 HP, #2 AWG for 30 HP motors
72. Configure motor protection relays monitoring phase imbalance (max 2%), overload (105-120% FLA trip), and ground fault protection
73. Program motor VFD parameters including acceleration time 10-30 seconds, deceleration time 10-30 seconds, minimum speed 30%, maximum speed 100%
74. Receive copper tube manufactured to ASTM B88 Type L specifications, diameter 5/8 inch to 4 inch, wall thickness 0.040-0.280 inches
75. Inspect copper tubing for straightness, cleanliness, and absence of dents or kinks that would restrict flow or create turbulence
76. Cut copper tube to required lengths using tubing cutters creating square, burr-free ends preventing turbulence and pressure drop
77. Deburr cut tube ends with reaming tool removing internal and external burrs that could cause flow restriction or leaks at joints
78. Clean tube ends with emery cloth and approved flux removing oxidation and preparing surfaces for brazing operations
79. Assemble tube joints using wrought copper fittings: elbows, tees, reducers, couplings rated for 250-400 PSI working pressure
80. Braze copper joints using 15% silver brazing alloy (BCuP-3 or BCuP-5) with melting temperature 1,190-1,500°F creating leak-free joints
81. Heat joints with oxy-acetylene torch to cherry-red color (1,400-1,500°F) drawing brazing alloy into joint by capillary action
82. Inspect brazed joints verifying complete fillet around joint circumference indicating proper brazing alloy penetration and joint strength
83. Pressure test completed copper piping to 1.5× working pressure (typically 225 PSI) for 24 hours verifying zero pressure drop indicating no leaks
84. Insulate copper chilled water piping with closed-cell elastomeric foam preventing condensation: 1.5 inch thick for 2 inch and smaller pipe, 2.0 inch for larger
85. Receive power transformers rated 75-500 kVA stepping down 480V to 208V 3-phase for HVAC control circuits and small equipment
86. Inspect transformer construction verifying nameplate data: kVA rating, voltage ratio, impedance 3-6%, temperature rise 80-115°C
87. Perform insulation resistance test on transformer windings using megohmmeter, measuring greater than 1,000 megohms to ground
88. Install transformer in electrical room on vibration isolation pads with minimum clearances: 3 feet front access, 1 foot side access, 3 feet top clearance
89. Connect primary power to transformer high voltage terminals using appropriately sized conductors and torquing to manufacturer specifications (typically 30-50 ft-lbs)
90. Install overcurrent protection on transformer primary with fused disconnect or circuit breaker sized at 125% of transformer full load amperage
91. Connect transformer secondary to distribution panel feeding HVAC control circuits with neutral and ground bonded at transformer location only
92. Mount voltage monitoring relays detecting overvoltage (110-120% nominal), undervoltage (85-90% nominal), and phase loss conditions
93. Receive automation software package including graphical user interface, database management, trending, alarming, and scheduling functions
94. Install software on dedicated BMS server hardware with specifications: Intel Xeon processor, 16-32 GB RAM, 1-2 TB storage, Windows Server OS
95. Configure network infrastructure with managed Ethernet switches supporting BACnet/IP, Modbus TCP, or proprietary protocols at 100 Mbps or 1 Gbps
96. Install BMS controllers throughout facility: central plant controllers, CRAH unit controllers, and standalone I/O modules for sensors
97. Wire sensor inputs to controllers using shielded twisted pair cable preventing electromagnetic interference from power circuits
98. Configure sensor scaling in software converting 4-20mA or 0-10VDC signals to engineering units: degrees F, PSI, GPM, CFM, kW
99. Program control loops with PID (proportional-integral-derivative) algorithms tuning parameters: proportional gain 0.5-2.0, integral time 30-300 seconds, derivative time 0-60 seconds
100. Create graphical displays showing real-time data center layout, equipment status, temperature maps, and alarm conditions
101. Configure alarm setpoints for critical parameters: supply air temperature 50-65°F, chilled water supply temperature 40-50°F, differential pressure 0.05-0.20 iwc
102. Program email and SMS notification for alarm conditions sending alerts to facilities staff and on-call technicians
103. Design trending database storing historical data at 1-minute intervals for critical parameters, 5-minute intervals for non-critical, with 1-year retention
104. Coordinate with electrical contractor for installation of 480V 3-phase power circuits to chiller plant equipment
105. Verify electrical circuit sizing: chiller compressor circuits #1/0-500 MCM conductors, pump circuits #8-#2 conductors, CRAH circuits #6-#1 conductors
106. Inspect circuit breaker installations verifying proper breaker type (thermal-magnetic or electronic trip), ampere rating, and interrupt rating 25-42 kA
107. Perform insulation resistance testing on all power wiring measuring greater than 100 megohms phase-to-phase and phase-to-ground
108. Coordinate rigging and placement of chiller units weighing 5,000-25,000 lbs requiring forklift, crane, or air skate moving equipment
109. Position chillers on concrete equipment pads with structural capacity 250-500 PSF supporting full equipment weight plus vibration loads
110. Install seismic restraints on chillers per IBC seismic design category including base anchors, snubbers, and bracing resisting 0.3-1.5g lateral acceleration
111. Connect chilled water supply and return piping to chiller evaporator using flanged connections with gaskets torqued to 30-60 ft-lbs
112. Install isolation valves on chiller water connections enabling equipment removal for service without draining entire piping system
113. Connect condenser water supply and return piping to water-cooled chillers or refrigerant lines to air-cooled condenser units
114. Install vibration isolation on chiller mounting using spring isolators with deflection 1.0-2.0 inches providing 90-95% vibration isolation
115. Position cooling tower on rooftop or grade-level location with clear air intake (no recirculation) and adequate drainage
116. Connect cooling tower basin to condenser water pumps with 6-12 inch diameter suction piping maintaining flow velocity 3-7 feet per second
117. Install strainers in cooling tower basin suction line removing debris particles greater than 1/8 inch protecting pumps and heat exchangers
118. Connect makeup water supply to cooling tower with automatic fill valve maintaining basin water level and float switch for level alarm
119. Install overflow drain on cooling tower basin piped to sanitary drain preventing flooding from failed fill valve
120. Position CRAH units in data center white space on raised floor support pedestals or concrete pads with seismic restraint per local codes
121. Connect chilled water supply and return piping to CRAH heat exchangers verifying correct supply (cold) and return (warm) connections
122. Install balancing valves on each CRAH chilled water circuit enabling flow adjustment to achieve design flow rate ±10%
123. Mount CRAH fan assemblies in unit chassis with flexible connections isolating fan vibration from unit structure
124. Install backdraft dampers on CRAH units preventing reverse airflow through idle units when operating in N+1 redundant mode
125. Fabricate and install return air ductwork from hot aisles to CRAH unit return air inlets using galvanized steel duct rated for 2,000-6,000 FPM velocity
126. Seal all duct joints with mastic and fiberglass mesh tape achieving leakage class 3 or better (max 3 CFM per 100 sq ft duct surface at 1 iwc)
127. Install economizer outdoor air intake louvers with bird screen, insect screen, and weather protection preventing rain and snow entry
128. Mount motorized dampers in economizer system with actuators providing 2-position or modulating control and spring return to closed position
129. Install mixing plenum for economizer combining outdoor air and return air streams with baffles preventing stratification and ensuring uniform mixed air temperature
130. Position air filters in filter racks with gaskets sealing filter perimeter preventing bypass airflow around filter edges
131. Install differential pressure switches across filters alarming when pressure drop reaches 0.8-1.0 iwc indicating filter replacement required
132. Fabricate and install chilled water piping distribution using Schedule 40 steel pipe for 3 inch and larger or copper tube for 2.5 inch and smaller
133. Install pipe hangers at 8-12 foot spacing for horizontal runs supporting pipe weight and preventing sagging
134. Use pipe guides and anchors controlling thermal expansion movement: 0.75 inch per 100 feet of pipe for 50°F temperature change
135. Install expansion loops or flexible hoses accommodating thermal expansion without inducing stress on equipment connections
136. Pressure test chilled water piping to 150 PSI hydrostatic pressure for 4 hours verifying zero leakage from joints and fittings
137. Flush chilled water system with high-velocity water flow (4-6 feet per second) removing construction debris, welding slag, and pipe scale
138. Fill chilled water system with treated water adding glycol (if required) and corrosion inhibitors per manufacturer specifications
139. Vent trapped air from all high points in piping system using manual or automatic air vents ensuring system is completely filled with water
140. Commission chiller startup verifying refrigerant charge, compressor oil level, and control system operation per manufacturer procedures
141. Start chiller and verify discharge pressure 150-250 PSIG, suction pressure 40-70 PSIG (depending on refrigerant type R-134a, R-410A, or R-513A)
142. Monitor chiller approach temperature (difference between leaving chilled water temperature and refrigerant evaporating temperature) maintaining 2-5°F
143. Verify chiller capacity control operation as load varies, compressor unloading 25-50-75-100% capacity steps or variable speed compressor modulation
144. Commission chilled water pumps verifying rotation direction, flow rate within ±10% of design, and amperage draw within nameplate rating
145. Measure pump differential pressure across pump discharge and suction verifying head 60-100 feet as designed
146. Balance chilled water flow to each CRAH unit using balancing valves and flow meter achieving design flow rate ±10%
147. Commission CRAH units verifying supply air temperature 55-60°F, airflow 15,000-50,000 CFM per manufacturer specifications
148. Measure supply air velocity at perforated floor tiles using calibrated anemometer verifying 200-400 CFM per tile
149. Map data center temperature field using 50-100 temperature sensors on rack fronts recording temperature distribution 65-80°F
150. Verify hot aisle containment integrity measuring hot aisle temperature 80-95°F and cold aisle temperature 65-75°F with differential 15-20°F
151. Commission economizer operation testing outdoor air dampers opening when outdoor temperature below economizer setpoint 45-55°F
152. Verify waterside economizer operation when outdoor wet bulb temperature below 40°F, chilled water temperature 40-45°F without chiller operation
153. Commission BMS control sequences testing chiller staging, pump staging, and CRAH fan speed modulation under varying load conditions
154. Test supply air temperature reset schedule verifying setpoint increases from 55°F to 68°F as outdoor temperature decreases
155. Test chilled water temperature reset verifying setpoint increases from 44°F to 52°F as cooling load decreases below 70% capacity
156. Commission differential pressure control in raised floor plenum maintaining setpoint 0.10 iwc by modulating CRAH fan speeds
157. Test redundancy operation simulating CRAH unit failure and verifying remaining units increase capacity to maintain design conditions
158. Commission fire alarm interface with HVAC system testing smoke detector activation shuts down air handlers preventing smoke circulation
159. Test water leak detection system verifying liquid sensors alarm and trigger automated response shutting off chilled water to affected area
160. Calibrate all temperature sensors against reference thermometer with accuracy ±0.5°F ensuring accurate monitoring and control
161. Calibrate pressure sensors and transmitters using deadweight tester or pressure calibrator achieving accuracy ±1% of span
162. Calibrate flow meters using portable ultrasonic flow meter as reference verifying accuracy ±2% of reading
163. Document final control setpoints, alarm limits, and sequence of operations in operations and maintenance manual
164. Conduct 24-hour continuous monitoring test recording all parameters at 5-minute intervals verifying stable operation
165. Perform full-load testing operating all IT equipment at peak capacity and verifying HVAC system maintains design conditions
166. Measure power consumption of chiller plant, pumps, and CRAH units calculating cooling system PUE (power usage effectiveness) target 1.15-1.30
167. Calculate chiller plant efficiency measuring kW per ton operating range 0.45-0.70 kW/ton depending on load and outdoor temperature
168. Verify economizer operating hours by analyzing BMS trend data showing outdoor air damper position and chilled water temperature
169. Train facility operations staff on BMS operation, alarm response procedures, and routine maintenance tasks
170. Demonstrate emergency procedures including chiller plant shutdown, switchover to backup cooling, and response to cooling failure alarms
171. Establish preventive maintenance schedule for air filter replacement every 3-6 months based on differential pressure monitoring
172. Schedule quarterly inspections of chilled water chemical treatment testing pH, conductivity, inhibitor concentration, and biological growth
173. Plan annual chiller maintenance including refrigerant leak testing, compressor oil analysis, and heat exchanger tube cleaning
174. Establish semi-annual cooling tower maintenance including fill media cleaning, drift eliminator inspection, and basin cleaning
175. Schedule monthly CRAH unit inspection checking fan bearing condition, belt tension (if applicable), and coil cleanliness
176. Monitor chiller performance trending kW per ton efficiency and investigating increases above 0.70 kW/ton indicating fouling or refrigerant issues
177. Analyze supply air temperature trends identifying rack hot spots above 80°F requiring airflow rebalancing or containment improvements
178. Review chilled water supply and return temperature trends verifying 10°F delta-T maintained indicating proper flow balance
179. Monitor raised floor plenum static pressure trends maintaining setpoint ±0.02 iwc indicating consistent airflow distribution
180. Analyze economizer operating hours quarterly comparing actual operation to theoretical maximum for climate zone
181. Implement continuous commissioning program with monthly performance reviews identifying optimization opportunities
182. Optimize chiller staging reducing number of operating chillers during low load periods improving efficiency from 0.65 to 0.50 kW/ton
183. Adjust chilled water temperature reset schedule extending range to 56°F supply temperature during low loads achieving 15-25% energy savings
184. Optimize CRAH fan speed setpoints reducing plenum pressure from 0.12 to 0.08 iwc when IT load below 70% capacity saving 20-30% fan energy
185. Implement demand-based cooling control adjusting supply air temperature based on rack inlet temperature rather than fixed setpoint
186. Configure predictive maintenance analytics monitoring vibration, temperature, and power consumption detecting equipment degradation before failure
187. Analyze utility rate structures implementing load shedding during peak demand periods reducing demand charges by 10-20%
188. Optimize economizer control algorithms extending economizer operation to 60°F outdoor temperature using higher chilled water temperatures
189. Implement aisle containment in additional data center zones reducing cooling load by 20-30% and allowing higher supply air temperatures
190. Monitor and report monthly cooling system metrics including PUE, kW per ton, uptime percentage, and maintenance costs
191. Calculate total cost of ownership including capital cost ($500-$1,500 per ton), energy cost ($5,000-$20,000 per year per 100 tons), and maintenance cost
192. Document all system modifications and control changes in as-built drawings and sequence of operations documentation
193. Conduct annual performance verification comparing actual cooling capacity to design capacity identifying any system degradation
194. Review and update emergency response procedures annually including 24/7 on-call schedule and spare parts inventory requirements
195. Plan capacity expansion projects when IT load approaches 80% of cooling capacity adding CRAH units or increasing chiller plant capacity maintaining N+1 redundancy
