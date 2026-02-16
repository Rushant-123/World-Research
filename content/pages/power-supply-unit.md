---
title: "Server Power Supply Unit"
company: "Delta Electronics"
country: "Taiwan"
selling_price: 180.0
inputs:
  - name: "Power Transformer"
    cost: 35.0
    link: "power-transformer"
  - name: "Power MOSFETs"
    cost: 25.0
    link: "power-mosfets"
  - name: "PWM Controller"
    cost: 12.0
    link: "pwm-controller"
  - name: "Power Inductors"
    cost: 15.0
    link: "power-inductors"
  - name: "Electrolytic Capacitors"
    cost: 18.0
    link: "polymer-capacitors"
  - name: "PCB Assembly"
    cost: 30.0
    link: "pcb-assembly"
  - name: "Metal Enclosure"
    cost: 20.0
    link: "metal-chassis"
  - name: "Cooling Fan"
    cost: 8.0
    link: "fan-assembly"
  - name: "Assembly Labor"
    cost: 10.0
    link: "assembly-labor"
value_created: 7.0
---

1. Design power supply topology using active clamp forward converter with synchronous rectification for 1200W continuous output at 94% efficiency target across 115-230VAC input range with universal PFC stage.

2. Create 8-layer PCB layout with 2oz copper on outer layers and 3oz copper on internal power planes, maintaining 8mm creepage distance between primary and secondary sides per IEC 60950-1 safety standards.

3. Route high-frequency switching traces with controlled impedance of 50 ohms ±10%, keeping MOSFET gate drive traces under 25mm length to minimize parasitic inductance below 10nH and prevent voltage overshoot.

4. Position EMI filter components at AC input with X2-class 0.47µF capacitors rated 275VAC and common-mode chokes wound with 2x18AWG wire providing 2.5mH differential inductance at 100kHz.

5. Place bridge rectifier rated 600V 35A continuous with thermal pad mounting to achieve junction temperature below 125°C at full load, connecting to 450V bulk capacitor bank through current-limiting NTC thermistor.

6. Install PFC boost converter stage using 600V 23A SiC MOSFET switching at 65kHz with 150µH inductor wound on sendust core, achieving power factor >0.99 and THD <5% across full load range.

7. Wind PFC boost inductor with 45 turns of 14AWG litz wire on toroidal sendust core with 60µm air gap, measuring inductance 150µH ±5% at 10A DC bias and saturation current exceeding 28A peak.

8. Mount PFC controller IC with integrated 600V gate driver, programming boost output voltage to 390VDC ±5V through external resistor divider with 1% tolerance metal film resistors for precise regulation.

9. Assemble bulk capacitor bank using four 470µF 450V electrolytic capacitors with 105°C rating, ESR <150mΩ at 100kHz, connected in parallel with 10mm copper bus bars to handle 45A RMS ripple current.

10. Solder snubber networks across PFC MOSFET drain-source using 10nF 1kV ceramic capacitors in series with 47Ω 2W metal oxide resistors to dampen voltage ringing below 50V overshoot at turn-off transitions.

11. Install current sense transformer with 1:100 turns ratio on PFC MOSFET source leg, providing cycle-by-cycle overcurrent protection triggering at 28A peak with 200ns response time to prevent core saturation.

12. Mount main transformer on PCB with E65 ferrite core and 9-layer interleaved winding structure: primary 42 turns, +12V secondary 3 turns, +5V secondary 4 turns, +3.3V secondary 5 turns using triple-insulated wire.

13. Wind primary winding with 20 strands of 38AWG litz wire achieving 8µΩ DC resistance, measuring primary inductance 425µH ±8% at 1kHz with leakage inductance below 12µH for tight magnetic coupling.

14. Apply insulation tape barrier between primary and secondary windings using 3 layers of 0.13mm polyimide film rated 7.5kV breakdown voltage, ensuring >5kV hipot test compliance for safety isolation.

15. Wind +12V secondary with copper foil 0.3mm thick, 18mm wide achieving 0.4mΩ winding resistance to deliver 70A continuous output with less than 0.5V conduction loss at full current.

16. Install auxiliary winding with 8 turns of 24AWG wire providing 18V bias supply for gate drive circuits and PWM controller, delivering 2W continuous power through linear regulator to +15V rail.

17. Mount primary-side full-bridge MOSFETs using four 600V 18A devices with RDS(on) 95mΩ at 25°C, bolting TO-247 packages to heatsink with 0.5N·m torque and silicone thermal compound achieving 0.5°C/W interface resistance.

18. Apply thermal compound in 50µm layer thickness between MOSFET tabs and heatsink surface, ensuring complete coverage with no voids to maintain junction temperature below 110°C at 50°C ambient full load operation.

19. Solder gate drive circuits using dedicated isolated gate driver ICs with 4A peak source/sink capability, placing 10Ω series gate resistors to achieve 45ns rise time and 35ns fall time matching at 100kHz switching frequency.

20. Connect bootstrap capacitors of 4.7µF 50V ceramic X7R dielectric to high-side gate drivers, selecting Schottky diodes with 50V rating and 30ns reverse recovery for bootstrap charging without shoot-through risk.

21. Install PWM controller IC configuring phase-shifted full-bridge operation with 100kHz switching frequency, 50ns deadtime between complementary switches, and active clamp reset to prevent transformer saturation.

22. Program soft-start timing with external 100nF capacitor achieving 25ms ramp-up of duty cycle from 0% to maximum, limiting inrush current to 15A peak while charging output filter capacitors progressively.

23. Mount secondary-side synchronous rectifier MOSFETs using eight 100V 120A devices with RDS(on) 1.2mΩ for +12V rail, driven by self-driven gate control with body diode conduction detecting optimal timing.

24. Position synchronous rectifier MOSFETs in parallel configuration on each secondary winding terminal, using 4oz copper PCB traces 15mm wide to carry 40A per device with less than 30mV trace drop.

25. Solder output inductor for +12V rail using molded powder iron core with 0.8µH inductance rated 90A saturation current, wound with 8 paralleled strands of 12AWG copper wire achieving 45µΩ DCR.

26. Install output capacitor bank for +12V rail with 12x 470µF polymer aluminum capacitors rated 16V 105°C, providing 250mΩ ESR at 100kHz and 42A RMS ripple current capability for low output impedance.

27. Place ceramic bypass capacitors totaling 220µF using 22x 10µF 25V X7R 1210-size components distributed across output rail near connector, suppressing high-frequency noise below 10mV pk-pk above 1MHz.

28. Wind +5V output inductor with 1.2µH using similar construction as +12V, rated 45A saturation with 70µΩ DCR, positioning near synchronous rectifiers to minimize loop inductance below 15nH in switching path.

29. Assemble +5V output capacitor array with 8x 330µF polymer capacitors providing 180mΩ combined ESR and 28A ripple rating, maintaining output voltage regulation within ±50mV during 0-100% load transients under 1ms.

30. Configure +3.3V secondary with four 100V 80A synchronous rectifiers and 1.5µH output inductor rated 30A, delivering 25A maximum continuous with separate sense lines for remote voltage feedback compensation.

31. Install optocoupler feedback circuit on +12V secondary using high-speed phototransistor with 3MHz bandwidth, transmitting error signal across isolation barrier to primary PWM controller with 8µs loop response time.

32. Tune voltage feedback loop with Type-III compensator using 120kHz crossover frequency and 52° phase margin, placing zero at 8kHz and poles at 850Hz and 180kHz for stable regulation under all load conditions.

33. Mount current sense resistors of 0.5mΩ 3W rating in Kelvin connection configuration on each output rail, providing overcurrent detection with ±2% accuracy using differential amplifier with 50V/V gain.

34. Solder overvoltage protection circuits using 15V 600W TVS diodes on +12V rail and 6.8V devices on +5V/+3.3V rails, clamping fault conditions within 1µs to prevent damage to downstream server components.

35. Install undervoltage lockout comparator monitoring bulk capacitor voltage, inhibiting PWM operation below 340VDC to prevent startup into brownout conditions with hysteresis band of 18V preventing oscillation.

36. Mount temperature sensors using NTC thermistors with 10kΩ at 25°C positioned on primary heatsink and transformer core, implementing thermal foldback reducing output power 2% per °C above 85°C threshold.

37. Wire fan control circuit with PWM tachometer feedback operating from 20% minimum speed at 35°C internal temperature to 100% at 70°C using linear control algorithm with 1°C dead band.

38. Connect cooling fan with 92mm diameter, 38mm depth axial flow design rated 120CFM at 5800RPM, drawing 0.5A from +12V rail with dual ball bearing construction for 70,000 hour L10 lifetime at 40°C.

39. Install fan speed sensor circuit with frequency-to-voltage converter monitoring tachometer signal, generating fault alarm if RPM drops below 50% of commanded speed indicating bearing failure or blockage.

40. Solder remote enable/disable control input with optocoupler isolation accepting 3.3-5V logic signal, providing 100µs shutdown response turning off all switching MOSFETs and entering 2mW standby consumption mode.

41. Mount power good output signal buffer using open-collector transistor with 4.7kΩ pullup resistor, asserting high when all output voltages reach 90% of nominal and deassert within 5ms of any fault condition.

42. Position Y-capacitors of 2.2nF rated 400VAC across isolation barrier between primary and secondary grounds at transformer center, providing common-mode noise filtering while maintaining leakage current below 0.5mA per safety standards.

43. Install X-capacitors of 0.68µF 310VAC class across AC line input after fuse and before rectifier, suppressing differential-mode noise below CISPR 22 Class B limits requiring 10dB margin at critical 150kHz-30MHz frequency range.

44. Wind common-mode choke with bifilar construction using 2x15 turns of triple-insulated wire on high-permeability nanocrystalline core, achieving 8mH common-mode inductance while limiting differential-mode inductance below 20µH.

45. Solder input fuse holder accepting 15A slow-blow 250V ceramic body fuse with 1500A breaking capacity, positioning before all active circuitry as primary overcurrent protection coordinated with secondary sensing.

46. Mount inrush current limiter using 5Ω 5W NTC thermistor in series with AC input, limiting turn-on surge to 28A peak while decreasing to 0.8Ω hot resistance after 2 seconds dissipating 1.8W at full load.

47. Install relay bypass circuit around inrush limiter activating after 100ms delay once bulk capacitors charge, short-circuiting NTC thermistor to eliminate 1.8W loss and improve full-load efficiency by 0.15 percentage points.

48. Connect metal oxide varistor rated 275VAC with 460V clamping voltage and 6500A peak surge capability across AC input, protecting against lightning transients and switching spikes per IEC 61000-4-5 level 4 testing.

49. Position safety discharge resistor of 1MΩ 2W across bulk capacitors ensuring voltage decay below 60V within 3 seconds after AC disconnection per IEC 60950-1 safety requirement for operator protection.

50. Mount auxiliary power supply using flyback converter topology with 65kHz switching frequency generating +15V 2W and -15V 0.5W rails for analog control circuits and optocoupler bias with ±3% regulation accuracy.

51. Install active clamp circuit across primary transformer winding using 600V 8A MOSFET in series with 1.5µF 450V film capacitor, resetting magnetizing current each cycle and reducing voltage stress to 1.4x input voltage.

52. Tune active clamp timing with 200ns overlap into primary switch turn-on achieving zero-voltage switching conditions, measuring MOSFET drain voltage falling to zero before channel conduction reduces switching loss by 65%.

53. Solder current sense resistor of 5mΩ 5W in source leg of primary MOSFETs, feeding differential amplifier with 40V/V gain to PWM comparator implementing cycle-by-cycle current mode control with 180ns propagation delay.

54. Configure current mode control with slope compensation adding 45% of downslope at 100kHz to prevent subharmonic oscillation at duty cycles exceeding 50%, using precision current source charging timing capacitor.

55. Mount snubber capacitors of 1nF 1kV COG dielectric directly across each primary MOSFET drain-source terminals with 3mm lead length, damping parasitic ringing from package inductance and transformer leakage below 80V amplitude.

56. Install gate drive power supplies using bootstrap technique for high-side drivers and direct connection for low-side, maintaining 12V gate voltage ±0.5V across full operating temperature range from -20°C to 85°C ambient.

57. Position gate resistors with 4.7Ω resistance in parallel with antiparallel Schottky diode allowing 15Ω turn-off resistance, achieving 28ns rise time and 42ns fall time controlling di/dt and dv/dt slew rates for EMI management.

58. Solder bus bar connections between bulk capacitor bank and primary bridge using 2mm thick copper bars with 20mm width, limiting inductance to 25nH and supporting 45A RMS ripple current with less than 15°C temperature rise.

59. Mount isolation barrier components maintaining 8mm minimum clearance and 6.4mm minimum creepage between primary and secondary circuits, applying conformal coating over 5mm width to bridge insulation coordination per IEC 60950-1.

60. Install secondary-side ORing MOSFETs for redundant power supply configurations using 100V 100A devices with active current sharing control, enabling N+1 operation with automatic load balancing within ±5% between parallel units.

61. Connect I2C digital monitoring interface using isolated bus transceiver reporting input voltage, output voltages, output currents, temperatures, fan speed, and fault status at 400kHz bus speed with 7-bit addressing.

62. Program PMBus protocol controller with telemetry functions updating measurements every 100ms, storing 128 samples of historical data in non-volatile memory for fault analysis and predictive maintenance algorithms.

63. Solder power supply hold-up time capacitor bank providing 20ms minimum output regulation after AC input loss at full load, using additional 1000µF 450V capacitors paralleled with bulk storage through isolation diode.

64. Install brown-out protection comparator monitoring AC input voltage with 85VAC turn-off threshold and 95VAC turn-on threshold, preventing operation during prolonged undervoltage conditions that would compromise hold-up time specifications.

65. Mount output voltage trim potentiometers with 10-turn precision adjustment allowing ±5% output voltage calibration at factory test, setting +12V to 12.00V ±12mV, +5V to 5.00V ±8mV, +3.3V to 3.30V ±5mV under 50% resistive load.

66. Position sense line compensation networks using 100Ω series resistors and 1µF ceramic capacitors forming low-pass filters with 1.6kHz cutoff, preventing oscillation from remote sense line inductance up to 10µH typical in server backplanes.

67. Install current sharing bus connector enabling parallel operation of up to 4 power supplies with active droop method, programming 0.1V output voltage reduction from no-load to full-load creating natural load balancing within 8% distribution.

68. Solder magnetic amplifier post-regulation circuits on +3.3V and +5V outputs using saturable reactor cores with 0.3µH reset winding, achieving ±1% cross-regulation independent of +12V main rail loading conditions.

69. Wind magnetic amplifier control windings with 8 turns of 22AWG wire driven by linear control amplifier, modulating core saturation timing to regulate output voltage with 15kHz bandwidth despite variations in primary transformer duty cycle.

70. Mount output cable assembly with 14AWG wire for +12V rated 75A, 16AWG for +5V rated 35A, 18AWG for +3.3V rated 25A, using crimped terminals with gas-tight connection achieving <2mΩ contact resistance per pin.

71. Install connector housing with gold-plated copper alloy contacts rated 30A continuous per pin at 105°C, meeting 20-pin ATX12V specification with additional 4+4 pin EPS12V and 6+2 pin PCIe power connectors for server motherboards.

72. Position wire harness retention clips and strain relief boots limiting bend radius to 10x wire diameter, applying UV-resistant cable sleeving with 125°C temperature rating protecting against abrasion and chemical exposure.

73. Solder output diode OR-ing protection preventing backfeed current when multiple supplies parallel, using Schottky diodes with 60V rating and 0.35V forward drop at 40A carrying full output current during single-supply operation.

74. Mount metal enclosure panels from 1.2mm cold-rolled steel with zinc-nickel plating providing corrosion resistance, assembling with M3 screws at 0.8N·m torque and applying conductive EMI gaskets achieving >40dB shielding effectiveness.

75. Install air intake filter using 10PPI polyurethane foam with activated carbon coating, capturing particles >50µm diameter while maintaining <0.15 inches H2O pressure drop at rated airflow preventing dust accumulation on heatsinks.

76. Position exhaust grille with finger guards meeting IP20 ingress protection requirements, angling discharge 15° downward for optimal rack-mount cooling integration and preventing hot air recirculation to adjacent equipment.

77. Apply thermal interface pad of 2mm thickness with 3.0 W/m·K thermal conductivity between primary heatsink and enclosure wall, conducting 18W to chassis for additional heat spreading reducing peak temperatures 8°C.

78. Mount grounding lugs with M4 threaded studs connecting secondary ground to chassis earth, maintaining <0.1Ω resistance path bonding all metal surfaces and providing low-impedance return for EMI currents above 1MHz.

79. Install power supply mounting brackets with vibration isolation using rubber grommets rated 40 Shore A hardness, attenuating 10-2000Hz mechanical vibration and shock loads up to 5G operational per MIL-STD-810 testing requirements.

80. Solder LED status indicators with current-limiting resistors on front panel: green LED for power good, red LED for fault conditions, amber LED for overtemperature warning, driven by open-collector logic with 10mA current.

81. Connect diagnostic test points with 2mm banana jack terminals accessing bulk voltage, auxiliary supplies, gate drive signals, and feedback nodes, protecting with removable plastic caps preventing accidental shorts during operation.

82. Program overcurrent protection thresholds at 125% rated current per rail using analog comparators with 500ns response time, initiating automatic restart after 3-second delay or latching shutdown if fault persists through 4 retry attempts.

83. Configure overpower protection monitoring total DC output power exceeding 1320W continuous, implementing 15-second averaging filter preventing nuisance trips from transient server boot current while protecting transformer from thermal runaway.

84. Install short-circuit protection detecting output voltage collapse below 80% nominal with output current above 110% rated, shutting down PWM within 10µs and entering hiccup mode with 250ms on-time and 2-second off-time.

85. Mount overvoltage protection comparator with 13.2V threshold on +12V rail, 5.5V on +5V rail, and 3.63V on +3.3V rail, latching off all switching within 5µs and requiring AC power cycle to reset after fault clearing.

86. Solder overtemperature protection thermistor monitoring primary heatsink temperature, triggering first-level warning at 85°C reducing output power 3% per °C, second-level fault at 95°C initiating immediate shutdown with auto-restart.

87. Position input overvoltage protection crowbar SCR circuit triggering at 290VAC input, short-circuiting AC input to blow fuse within 8ms protecting components from utility voltage swells and preventing fire hazard from insulation breakdown.

88. Install input undervoltage protection with adaptive thresholds: 90VAC minimum for 115VAC nominal operation, 180VAC minimum for 230VAC operation, automatically detecting input voltage range and adjusting PFC boost parameters accordingly.

89. Mount fan failure detection circuit monitoring tachometer frequency, generating fault alarm if RPM drops below 2000 for more than 5 seconds, automatically increasing output current limit checking for thermal runaway condition.

90. Connect auxiliary contact output relay rated 2A 250VAC providing remote alarm signal to datacenter infrastructure management system, closing contacts during any fault condition with isolated connection for central monitoring integration.

91. Solder AC input sequencing control circuit with 500ms delay between initial PFC startup and main converter activation, ensuring bulk capacitor charging completes before transformer energization preventing excessive inrush to magnetic components.

92. Install active power factor correction achieving 0.995 PF at full load, 0.98 PF at 50% load, maintaining total harmonic distortion below 5% across 20%-100% load range meeting EN 61000-3-2 Class A harmonic current limits.

93. Program PFC controller with valley switching optimization detecting minimum drain voltage using auxiliary winding, turning on boost MOSFET at resonant valley reducing turn-on loss 35% and improving light-load efficiency 2 percentage points.

94. Mount EMI filter ferrite beads on AC input differential-mode choke wire, providing additional 800Ω impedance at 30MHz suppressing high-frequency noise from switching converter without affecting 50/60Hz power transmission.

95. Position EMI filter PCB with dedicated ground plane isolated from power ground, connecting to chassis earth through single-point 10nH low-inductance path achieving >50dB common-mode noise rejection above 10MHz.

96. Solder safety interlock microswitch on enclosure cover requiring tool access for opening, disconnecting AC input when cover removed preventing operator contact with hazardous voltage during maintenance procedures per UL 60950-1.

97. Install arc fault detection circuit monitoring high-frequency current spectrum between 50kHz-1MHz, identifying characteristic signatures of electrical arcing and shutting down within 0.5 seconds preventing fire propagation from damaged insulation.

98. Mount conformal coating application over entire PCB assembly using acrylic polymer with 100µm thickness, providing moisture protection for >95% relative humidity operation and preventing dendrite growth between conductors at high voltage.

99. Apply thermal compound with 5.5 W/m·K conductivity between transformer core and mounting bracket, conducting 8W to chassis reducing hot-spot temperature 12°C and extending transformer insulation lifetime from 80,000 to 120,000 hours.

100. Position PCB spacers maintaining 8mm clearance between board bottom and metal chassis, preventing capacitive coupling of high-frequency switching noise to enclosure while allowing adequate airflow for component cooling.

101. Solder bias supply regulation using low-dropout linear regulator generating +15V from +18V auxiliary winding, maintaining ±50mV regulation with 200mV dropout across -20°C to +85°C ensuring stable gate drive voltage.

102. Install reference voltage source using buried zener configuration achieving 2.5V ±0.05% initial accuracy with 5ppm/°C temperature coefficient, providing stable setpoint for voltage feedback loops and overcurrent comparators.

103. Mount voltage supervision ICs monitoring all output rails with ±2% threshold accuracy, generating individual fault flags for diagnostic purposes and combining into master power-good signal with open-drain output.

104. Connect load share bus using differential signaling with 120Ω termination resistors, transmitting current-share information between parallel supplies with <100µA error enabling balanced current distribution within ±3% at full load.

105. Solder output sequencing control FETs enabling delayed startup of +5V and +3.3V rails 50ms after +12V rail reaches regulation, preventing latchup conditions in server processors requiring specific power-up timing per ATCA specification.

106. Position bulk capacitor temperature sensors using NTC thermistors embedded between capacitor cans, monitoring core temperature and derating ripple current specification 5% per °C above 85°C ambient preventing premature electrolyte dry-out.

107. Install resonant gate drive circuits using inductor-capacitor networks achieving zero-voltage switching of gate charge, recovering 70% of gate drive energy reducing gate driver losses from 3.5W to 1.0W improving overall efficiency.

108. Mount synchronous rectifier control ICs with adaptive timing optimization, measuring body diode conduction duration and adjusting gate timing ±5ns each cycle maintaining <100mV forward drop across all load conditions.

109. Solder current transformer on each output inductor monitoring ripple current amplitude, implementing dynamic frequency scaling reducing switching frequency to 75kHz at light load improving efficiency 3% at 20% load without audible noise.

110. Position gate drive transformers using 1:1:1 turns ratio on ferrite core providing 3kV isolation between primary controller and bridge MOSFETs, achieving 8ns propagation delay and 200mV threshold accuracy for precise deadtime control.

111. Install bootstrap diode networks using ultrafast rectifiers with 25ns reverse recovery time, ensuring high-side gate capacitors recharge completely during low-side conduction preventing bootstrap voltage sag below 10.5V minimum.

112. Connect PCB test pads at strategic nodes providing access for automated functional test equipment, including AC input voltage, bulk DC voltage, gate drive signals, output voltages, output currents, and thermal readings.

113. Solder manufacturing test connector with 20-pin header enabling automated test sequence validation: power-on self-test, output voltage accuracy, current limit thresholds, protection circuits, efficiency measurement, and EMI pre-scan.

114. Mount barcode label with serial number encoding manufacturing date, hardware revision, firmware version, and test data upload to traceability database ensuring full supply chain documentation and warranty validation.

115. Apply high-voltage insulation testing between primary and secondary circuits at 3750VDC for 60 seconds, verifying leakage current remains below 5mA confirming transformer insulation integrity and safety isolation compliance.

116. Perform ground bond testing measuring resistance between AC ground pin and all exposed metal surfaces, verifying <0.1Ω connection capable of carrying 30A fault current for 60 seconds without thermal damage.

117. Execute input voltage range testing validating startup and steady-state operation from 90-264VAC input, measuring output voltage regulation within ±1% specification across full input range at 25%, 50%, 75%, and 100% loading.

118. Conduct output voltage accuracy calibration using 6.5-digit precision multimeter, adjusting trim potentiometers to achieve +12.00V ±10mV, +5.00V ±8mV, +3.3V ±5mV at 50% resistive load with sense lines connected.

119. Run dynamic load transient testing applying 0-100% step loads with 2.5A/µs slew rate, verifying output voltage deviation remains within ±3% and recovery time under 500µs meeting Intel ATX12V transient response specifications.

120. Measure output ripple and noise using 20MHz bandwidth oscilloscope with coaxial connection at power supply connector, confirming <120mV pk-pk on +12V, <50mV on +5V, <50mV on +3.3V per measurement standards.

121. Perform short-circuit protection testing by hard-shorting each output rail individually, verifying automatic shutdown within 10µs, hiccup mode operation, and automatic recovery after fault removal without component damage.

122. Execute overcurrent protection verification gradually increasing load on each rail, confirming current limit triggers at 125-135% rated current with automatic restart and measuring response time under 100µs preventing secondary component stress.

123. Validate overvoltage protection by forcing feedback loop open and measuring trip voltage: +12V at 13.2-13.8V, +5V at 5.5-5.8V, +3.3V at 3.63-3.80V, verifying latching shutdown requiring power cycle to reset.

124. Test overtemperature protection using thermal chamber, gradually increasing ambient temperature and measuring: warning at 85°C with power reduction, shutdown at 95°C, automatic restart at 80°C during cooldown cycle.

125. Conduct hold-up time measurement recording output voltage decay after AC input interruption, verifying +12V remains above 11.4V for minimum 20ms at full load with oscilloscope capture documenting waveform.

126. Measure power factor across load range using precision power analyzer: >0.99 at 100% load, >0.98 at 50% load, >0.90 at 20% load, documenting THD values below 5% at all load points meeting Energy Star requirements.

127. Execute efficiency testing at 115VAC and 230VAC inputs measuring AC input power and DC output power at 20%, 50%, and 100% loads, targeting 94% efficiency at 50% load for 80 Plus Platinum certification level.

128. Perform standby power measurement with remote enable signal deasserted, verifying input power consumption below 2W in standby mode meeting ErP Lot 9 requirements for networked equipment idle power.

129. Conduct electromagnetic compatibility testing per CISPR 22 Class B limits in OATS facility from 150kHz to 1GHz, measuring conducted emissions on AC input and radiated emissions at 3-meter distance with margin documentation.

130. Execute RF immunity testing per IEC 61000-4-3 applying 10V/m field strength from 80MHz to 6GHz modulated at 1kHz, verifying continuous operation without output voltage deviation exceeding ±2% or protection circuit triggering.

131. Perform electrical fast transient burst testing per IEC 61000-4-4 applying ±2kV pulses at 5kHz repetition on AC input and ±1kV on DC outputs, verifying no malfunction or protection activation during 1-minute test duration.

132. Conduct surge immunity testing per IEC 61000-4-5 with 1.2/50µs voltage and 8/20µs current waveforms applying line-to-line and line-to-ground surges at 2kV and 4kV levels, confirming component survival and automatic recovery.

133. Execute voltage dip and interruption testing per IEC 61000-4-11 with 0%, 40%, and 70% voltage reduction for 0.5, 5, and 50 periods, verifying holdup time performance and automatic restart after restoration without requiring operator intervention.

134. Test electrostatic discharge immunity per IEC 61000-4-2 applying ±8kV contact discharge and ±15kV air discharge to all accessible surfaces including metal enclosure, connectors, and control interfaces with 50-discharge test protocol.

135. Measure power supply inrush current using current probe on AC input during cold-start conditions, documenting peak value below 30A and duration under 8ms meeting server rack circuit breaker coordination requirements.

136. Perform thermal imaging survey using infrared camera at full load steady-state operation, identifying hot spots and verifying all component temperatures remain within manufacturer ratings with minimum 10°C margin at 50°C ambient.

137. Execute acoustic noise testing in semi-anechoic chamber measuring sound pressure level at 1-meter distance, confirming fan noise below 45 dBA at full load and 32 dBA at 50% load meeting datacenter acoustic requirements.

138. Conduct vibration testing per IEC 60068-2-64 random profile with 0.5G RMS from 10-500Hz for 30 minutes per axis, verifying mechanical integrity of solder joints, fasteners, and component mounting during simulated transportation.

139. Test shock resistance per IEC 60068-2-27 applying half-sine pulse of 30G peak acceleration with 11ms duration in each direction on all three axes, confirming no mechanical damage or electrical parameter degradation.

140. Perform altitude testing validating operation from -60 meters to 3000 meters elevation, measuring efficiency and thermal performance with reduced air density requiring increased fan speed at high-altitude installations.

141. Execute temperature cycling from -20°C to +85°C with 30-minute dwell times for 100 cycles, measuring output voltage drift, efficiency variation, and protection threshold stability across operational temperature range.

142. Conduct humidity testing at 95% relative humidity and 40°C temperature for 96 hours, verifying conformal coating effectiveness preventing condensation-related failures and maintaining insulation resistance above 100MΩ.

143. Test harmonic current emissions per IEC 61000-3-2 Class A limits measuring current waveform distortion on AC input, documenting that all harmonic components from 3rd through 39th remain below regulatory limits with 15% margin.

144. Perform voltage flicker testing per IEC 61000-3-3 measuring Pst (short-term severity) and Plt (long-term severity) indices during startup, shutdown, and dynamic loading verifying compliance with 1.0 limit preventing lighting interference.

145. Execute power supply paralleling tests connecting two units with load sharing bus, measuring current distribution accuracy within ±5%, testing hot-swap capability, and verifying automatic load rebalancing during single-unit failure scenarios.

146. Conduct reverse voltage protection testing by reversing AC input polarity and applying DC voltage to AC input terminals up to 400VDC, confirming bridge rectifier and varistor prevent damage enabling field-wiring error tolerance.

147. Test output cable connector retention force using calibrated pull gauge requiring minimum 50N extraction force preventing accidental disconnection during server maintenance while remaining below 80N maximum for tool-free removal.

148. Measure contact resistance of all power connectors using Kelvin 4-wire measurement verifying <2mΩ per pin after 50 mating cycles simulating 5-year service life with no degradation indicating wear or fretting corrosion.

149. Perform accelerated life testing operating 10 units at 100% load, 50°C ambient, and maximum input voltage continuously for 2000 hours, calculating MTBF exceeding 200,000 hours using MIL-HDBK-217F methodology.

150. Execute burn-in testing on 100% of production units operating at 100% load and 50°C ambient for 4 hours, recording all output voltages, protection thresholds, and efficiency measurements screening infant mortality failures.

151. Conduct safety agency certification testing per UL 60950-1, IEC 60950-1, EN 60950-1 standards including flammability, high-voltage insulation, leakage current, ground bond, temperature rise, and abnormal operation tests with third-party witness.

152. Test output voltage margining capability adjusting +12V rail from 10.8V to 13.2V in 0.1V increments using I2C commands, verifying PMBus control interface and measuring regulation accuracy within ±20mV of commanded voltage.

153. Measure control loop stability using network analyzer injecting AC signal into feedback path, plotting Bode magnitude and phase response confirming >45° phase margin and >10dB gain margin at crossover frequency.

154. Execute electromagnetic interference diagnostic testing identifying noise sources using near-field probe scanning at 1mm height above PCB, documenting hot-spot locations and implementing targeted filtering or shielding improvements.

155. Perform thermal cycling of bulk capacitors measuring ESR and capacitance before and after 500 thermal cycles from -40°C to +105°C, confirming ESR increase <20% and capacitance decrease <10% meeting 10-year service life projection.

156. Test cooling fan bearing lubrication reliability operating at maximum speed and 70°C temperature for 1000 hours, measuring acoustic noise increase and power consumption change confirming <5% degradation indicating bearing wear.

157. Conduct power-on reset timing verification measuring delay from AC application to power-good assertion documenting minimum 200ms delay ensuring server motherboard supervisory circuits complete initialization before power valid signal.

158. Execute output sequencing accuracy testing measuring time delay between +12V reaching 90% and +5V/+3.3V enable signals asserting, verifying 50ms ±10ms timing window per ATCA specification preventing processor latchup conditions.

159. Test remote sense line open-circuit detection implementing high-impedance measurement on sense inputs, automatically reverting to local sensing if open detected preventing output overvoltage from feedback loop failure.

160. Measure common-mode noise on output cables using current probe and spectrum analyzer documenting emissions below 1MHz where server components exhibit susceptibility, implementing additional Y-capacitor filtering if needed.

161. Perform battery backup interface testing connecting external battery bank to hold-up circuit, verifying seamless transition maintaining output regulation for 5-minute extended holdup during utility power failure.

162. Execute PMBus communication protocol compliance testing using protocol analyzer verifying command response timing, data integrity, and error handling per PMBus 1.3 specification enabling interoperability with datacenter management systems.

163. Test watchdog timer functionality programming 5-second timeout period, verifying automatic power cycle if PMBus communication interrupted indicating controller firmware lockup with automatic recovery attempt.

164. Conduct black box recording of fault events storing last 64 fault occurrences with timestamp, fault type, operating conditions, and restart attempts in non-volatile memory enabling root cause failure analysis.

165. Measure switching frequency jitter using spectrum analyzer documenting frequency deviation <±1% at 100kHz nominal preventing beat frequency interference with other switching supplies in multi-supply server systems.

166. Execute phase-locked loop testing of synchronization input accepting 80-120kHz external clock signal enabling multiple power supplies to operate at identical frequency reducing radiated emissions through coherent combining.

167. Test current limit foldback protection verifying output voltage reduction to 50% under sustained overload prevents thermal runaway while maintaining sufficient voltage for downstream monitoring circuits to detect fault condition.

168. Perform power supply parallel redundancy testing with N+1 configuration verifying automatic current rebalancing within 100ms after single unit failure maintaining continuous operation of server load without voltage transient.

169. Conduct aluminum electrolytic capacitor endurance testing at rated ripple current and 105°C case temperature for 5000 hours, measuring ESR and capacitance degradation confirming <2x ESR increase meeting 10-year life specification.

170. Execute film capacitor insulation resistance testing applying 1.5x rated voltage for 1000 hours at 85°C, measuring leakage current below 1µA confirming dielectric reliability for safety-critical X/Y capacitor applications.

171. Test ferrite core saturation characteristics measuring inductance versus DC bias current documenting 30% inductance reduction at peak current ensuring adequate margin before hard saturation preventing control loop instability.

172. Perform copper trace current carrying capacity validation using thermal imaging under maximum current conditions, verifying temperature rise below 30°C above ambient confirming adequate cross-sectional area per IPC-2152 standards.

173. Conduct solder joint reliability testing using dye penetration and X-ray inspection after thermal cycling and vibration exposure, confirming no crack propagation or voiding exceeding 25% of joint area per IPC-A-610 Class 3.

174. Execute conformal coating adhesion testing using tape-pull method after thermal cycling, verifying no delamination or cracking of protective coating maintaining environmental protection throughout operational temperature range.

175. Test MOSFETs for counterfeit detection using curve tracer measuring threshold voltage, transconductance, and body diode forward voltage comparing against manufacturer specifications with ±5% tolerance detecting suspect components.

176. Perform optocoupler current transfer ratio testing measuring input-to-output current gain at 5mA forward current, verifying CTR >50% initial value with <20% degradation after 5000-hour operation at 85°C ambient temperature.

177. Conduct transformer interwinding capacitance measurement using LCR meter at 100kHz, documenting primary-to-secondary capacitance <50pF minimizing common-mode noise coupling across isolation barrier critical for EMI performance.

178. Execute partial discharge testing on transformer assembly applying 1.5x rated voltage and monitoring for corona inception using ultrasonic detector, confirming no discharge activity indicating insulation defects or contamination.

179. Test PCB solder mask insulation resistance measuring conductor-to-conductor isolation on 1mm spacing at 500VDC in 85°C/85% humidity environment, verifying >100MΩ resistance confirming adequate moisture protection.

180. Perform connector insertion force testing measuring required force for mating operation confirming 15-45N range providing adequate retention without requiring excessive force preventing operator strain injuries during installation.

181. Conduct wire crimp pull testing applying tensile force to crimped terminals requiring >50N pull force for 14AWG wire and >80N for 12AWG wire confirming gas-tight connection meeting UL 486 crimping standards.

182. Execute fan blade balance testing measuring vibration amplitude at operating speed, confirming <0.3mm displacement preventing bearing wear and acoustic noise from unbalanced rotor mass reducing 70,000-hour bearing life projection.

183. Test heatsink flatness using surface plate and feeler gauge measuring bow and twist across mounting surface, verifying <0.05mm deviation ensuring uniform thermal compound thickness and <0.5°C/W interface resistance.

184. Perform dielectric absorption testing on bulk capacitors measuring self-discharge rate after full charge, verifying >80% voltage retention after 30 minutes indicating low dielectric absorption critical for hold-up capacitor application.

185. Conduct input current harmonics analysis using FFT analyzer measuring current waveform spectrum, documenting THDI <5% and individual harmonic content below IEC 61000-3-2 limits with 20% margin at all load conditions.

186. Execute output voltage sequential turn-on testing measuring monotonic rise of each rail without overshoot or oscillation, confirming <100mV overshoot and <50µs settling time preventing latchup of downstream server components.

187. Test synchronous rectifier shoot-through protection measuring body diode conduction overlap with gate drive signal, verifying <50ns maximum overlap preventing cross-conduction losses while maintaining <100mV forward drop.

188. Perform active clamp capacitor voltage measurement confirming voltage swing equals input bulk voltage ±15V indicating proper magnetizing current reset and verifying zero-voltage switching achievement through oscilloscope capture.

189. Conduct PFC boost inductor thermal testing using thermocouple embedded in winding measuring core temperature rise under continuous full-load operation, confirming <80°C temperature rise at 50°C ambient preventing saturation.

190. Execute output capacitor ESR frequency response measurement using impedance analyzer from 100Hz to 1MHz, documenting minimum ESR at 100kHz switching frequency optimizing ripple current distribution across paralleled capacitors.

191. Test gate drive waveform quality measuring rise time, fall time, overshoot, and ringing using 500MHz oscilloscope with 10x probe, confirming <10% overshoot and <200MHz ringing frequency preventing false triggering from parasitic oscillation.

192. Perform 80 Plus certification testing at independent test laboratory measuring efficiency at 20%, 50%, and 100% load at both 115VAC and 230VAC input: >90% at 20% load, >94% at 50% load, >91% at 100% load achieving Platinum level.

193. Conduct continuous operation reliability demonstration testing 24 units at 100% load and 50°C ambient for 30 days accumulating 17,280 unit-hours with zero failures, calculating demonstrated MTBF >500,000 hours at 60% confidence level.

194. Execute production quality control inspection sampling 5% of daily output performing visual inspection, electrical testing, thermal testing, and EMI pre-scan, maintaining defect rate below 0.1% through statistical process control monitoring.

195. Perform final functional test sequence on 100% of production units executing automated test taking 8 minutes per unit: power-on, output voltage accuracy, current limit verification, protection circuit testing, efficiency measurement, PMBus communication, and burn-in documentation uploaded to manufacturing execution system database enabling full traceability from raw materials through final assembly and shipment to customer distribution centers worldwide.
