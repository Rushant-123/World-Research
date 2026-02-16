---
title: "Two-Part Dispensing System"
company: "Nordson EFD"
country: "United States"
selling_price: 12.0
inputs:
  - name: "Metering Pumps"
    cost: 2.0
    link: "vacuum-pump"
  - name: "Static Mixer"
    cost: 0.5
    link: "cnc-machine"
  - name: "Control System"
    cost: 1.5
    link: "machine-controller"
  - name: "Dispensing Valves"
    cost: 1.0
    link: "cnc-machine"
  - name: "Pressure Vessels"
    cost: 0.8
    link: "stainless-steel-sheet"
  - name: "Assembly"
    cost: 1.0
    link: "machinist-labor"
value_created: 5.2
---

Two-part dispensing systems provide precision metering, mixing, and application of multi-component reactive materials including epoxies, urethanes, silicones, and acrylics. These automated systems ensure accurate ratio control, consistent mixing, and repeatable dispensing for industrial assembly applications.

## Positive Displacement Pump Design

1. Machine hardened steel pump barrels with internal diameter tolerance of ±0.0005 inches for consistent volumetric displacement per stroke.

2. Install precision-ground piston rods with surface finish of 8 micro-inch Ra to minimize friction and ensure smooth operation.

3. Incorporate spring-loaded check valves at pump inlet with cracking pressure of 2-5 psi to prevent backflow during fill cycle.

4. Machine outlet check valves with 15-20 psi cracking pressure to maintain line pressure and prevent material drool between dispense cycles.

5. Select piston seal materials compatible with dispensed chemicals: PTFE for solvents, UHMW-PE for abrasives, Buna-N for general epoxies.

6. Design pump displacement volumes ranging from 0.5cc to 30cc per stroke depending on application throughput requirements.

7. Specify pneumatic drive cylinders with bore sizes from 1.5 to 4 inches providing stroke forces of 200-2000 lbf for high-viscosity materials.

8. Install linear position transducers with 0.001-inch resolution to monitor piston position and verify complete stroke execution.

9. Incorporate air bleed ports at pump high points to facilitate initial priming and prevent air entrapment in material chambers.

10. Machine cartridge-style pump assemblies for quick changeout when switching materials or for preventive maintenance every 1-2 million cycles.

## Ratio Control Systems (1:1 to 10:1)

11. Calculate gear ratio or piston diameter ratio to achieve desired mix ratio with accuracy of ±2% across operating range.

12. For 1:1 ratio systems, use identical pump sizes with synchronized drive to ensure equal displacement of Part A and Part B.

13. For 2:1 ratios, employ pump with 2:1 displacement ratio or use 2:1 gear reduction between synchronized drive shafts.

14. Implement 4:1 mix ratios using pump barrels with 2:1 diameter ratio, providing 4:1 volumetric displacement per equal stroke length.

15. Design 10:1 ratio systems with significantly different pump sizes or multiple strokes of smaller pump for each large pump cycle.

16. Install flow meters on each material line with ±1% accuracy to continuously monitor actual dispensed volumes and verify ratio accuracy.

17. Incorporate ratio monitoring software that compares real-time flow data and alerts operator when ratio deviates beyond ±3% tolerance.

18. Calibrate ratio accuracy by dispensing test shots into graduated containers and measuring actual volumes dispensed over 10 consecutive cycles.

19. Adjust pump stroke length using threaded stroke limiters with 0.010-inch increments to fine-tune mix ratio within specification.

20. Implement closed-loop ratio control using flow meter feedback to automatically adjust pump stroke length maintaining ratio within ±1%.

## Static Mixing Technology

21. Select static mixer with appropriate number of elements: 12-16 elements for 95% mixing, 20-24 elements for 99% mixing uniformity.

22. Calculate mixer length-to-diameter ratio of 12:1 to 24:1 depending on viscosity differential between Part A and Part B components.

23. Choose mixer element geometry: helical for low viscosity (<5000 cps), rhomboid for medium viscosity, high-efficiency for viscous materials.

24. Specify mixer housing material: polypropylene for room temperature, nylon for elevated temperature, stainless steel for aggressive chemicals.

25. Size mixer inner diameter based on flow rate: 3mm ID for 0.1-1 cc/sec, 6mm ID for 1-5 cc/sec, 12mm ID for 5-20 cc/sec.

26. Calculate pressure drop across static mixer: ΔP = K × μ × Q / D^4, where K depends on element count and geometry.

27. Install pressure transducers before and after mixer to monitor pressure drop and detect mixer clogging or material curing issues.

28. Design mixer mounting system with quick-disconnect couplings for rapid mixer replacement when material begins to cure in mixer.

29. Specify disposable mixers for materials with pot life under 10 minutes to prevent waste of expensive mixer assemblies.

30. Calculate mixer efficiency by sampling mixed material at outlet and measuring component distribution using spectroscopy or chemical analysis.

## Dynamic Mixing Systems

31. Design dynamic mixer with rotating impeller driven by pneumatic or electric motor at 500-3000 RPM depending on viscosity.

32. Machine mixer chamber with internal volume of 5-50cc providing residence time of 2-10 seconds for complete homogenization.

33. Install shaft seals rated for pressure up to 500 psi and compatible with mixed chemicals to prevent leakage at rotating shaft.

34. Incorporate carbide or ceramic bearings for extended life when mixing abrasive materials like filled epoxies or thermal compounds.

35. Design impeller geometry with multiple blade angles to create turbulent flow and shear forces breaking up component streams.

36. Calculate mixing energy input of 5-20 watts per cc of mixer volume for thorough blending of high-viscosity materials.

37. Install torque sensor on mixer drive shaft to monitor mixing resistance and detect changes in material viscosity or curing.

38. Implement variable speed control to adjust mixing intensity based on material properties: lower speed for shear-sensitive materials.

39. Design mixer purge system with solvent flush capability to clean mixer chamber between production runs or at end of shift.

40. Install heating elements in mixer housing to maintain temperature of 25-50°C for temperature-sensitive materials requiring heated dispensing.

## Dispensing Valve Technology

41. Select pneumatic spray valve for fast on/off action with response time under 5 milliseconds for high-speed dot dispensing.

42. Specify needle displacement of 0.010-0.050 inches controlled by adjustable stroke limiter for precise shot size repeatability.

43. Machine valve seat from hardened stainless steel with surface finish of 4 micro-inch Ra for leak-tight shutoff at pressures up to 500 psi.

44. Choose needle tip geometry: sharp point for thin materials, ball tip for filled pastes, flat tip for accurate bead cutoff.

45. Install spring return mechanism providing needle closing force of 5-20 lbf to ensure positive shutoff and prevent stringing.

46. Incorporate adjustable air pressure regulator controlling valve actuation force from 40-100 psi for different material viscosities.

47. Design valve body with heated jacket capability maintaining temperature of 30-80°C for dispensing temperature-sensitive materials.

48. Machine nozzle adapters for quick-change tips from 0.010 to 0.125 inch ID allowing rapid changeover for different bead sizes.

49. Install proximity sensor to verify valve needle position confirming valve open and closed states for each dispense cycle.

50. Specify valve cycle life of minimum 10 million actuations with maintenance intervals every 2-5 million cycles depending on material abrasiveness.

## Shot Size Control Systems

51. Implement time-based dispensing where shot size is controlled by valve open duration typically ranging from 0.01 to 2.0 seconds.

52. Calibrate time-pressure relationship by dispensing 20 test shots and weighing each to determine coefficient of variation (CV target <3%).

53. Program controller with shot time resolution of 0.001 seconds allowing fine adjustment of dispensed volume in 0.5-1% increments.

54. Specify supply pressure regulation within ±0.5 psi using precision electronic regulator for consistent shot-to-shot repeatability.

55. Account for pressure decay during continuous dispensing by implementing pressure feedback control maintaining constant driving force.

56. Use positive displacement dispensing for absolute shot size control with accuracy of ±1% independent of material viscosity changes.

57. Calculate shot volume from pump displacement: V = (π × D^2 / 4) × L, where D is piston diameter and L is stroke length.

58. Install servo motors with encoder feedback providing stroke length resolution of 0.0001 inches for ultra-precise volumetric control.

59. Implement shot weight verification using inline scales measuring each dispensed amount with ±0.01 gram accuracy for quality monitoring.

60. Program automatic shot size compensation adjusting for material temperature changes affecting viscosity by ±5-20% over shift.

## Bead Dispensing Technology

61. Specify continuous bead dispensing with valve held open while dispense head moves along programmed path at 10-500 mm/second.

62. Calculate bead width from nozzle diameter and dispensing height: W = D + 2 × H × tan(θ), where θ is material spread angle.

63. Control bead height by adjusting flow rate and travel speed maintaining volume per length constant: V/L = (π × d^2 / 4) × h.

64. Implement lead-in and lead-out routines to prevent start/stop defects: accelerate flow before motion start, decelerate before stop.

65. Program dispensing height of 0.5-2.0mm above substrate using laser height sensor maintaining consistent standoff throughout path.

66. Design path planning software accounting for corner slowdown to prevent bead thinning during direction changes on complex patterns.

67. Specify bead width tolerance of ±10% across entire dispensed length requiring careful control of pressure, speed, and height.

68. Install vision system to inspect bead continuity detecting skips, voids, or width variations exceeding ±15% from nominal specification.

69. Calibrate bead profile by cross-sectioning samples and measuring width, height, and contact angle using optical microscopy.

70. Implement multi-axis motion control with XYZ positioning accuracy of ±0.025mm and path following accuracy of ±0.050mm for complex 3D beads.

## Dot Dispensing Operations

71. Program dot dispensing with rapid valve actuation: open for 0.010-0.100 seconds, then close before moving to next location.

72. Calculate dot diameter from dispensed volume assuming hemispherical shape: D = (6V/π)^(1/3) × 2^(1/3).

73. Control dot height-to-diameter ratio by adjusting dispensing height: lower height (0.5mm) gives wider flatter dots, higher (2mm) gives taller narrower dots.

74. Specify dot placement accuracy of ±0.1mm in XY plane using high-speed linear motors with encoder feedback and look-ahead path planning.

75. Implement dot inspection using vision system measuring diameter, circularity, and position with pass/fail criteria programmed for each parameter.

76. Program array dispensing with optimized path to minimize non-productive travel time between dots while maintaining placement accuracy.

77. Calibrate dot volume consistency by dispensing 50 dots onto pre-weighed substrates and measuring weight variation (target CV <2%).

78. Design dot dispensing for high-speed assembly: cycle rate of 0.5-2.0 seconds per dot including move time, dispense time, and settle time.

79. Implement z-axis withdrawal routine lifting dispense head 1-5mm after each dot to prevent stringing and ensure clean separation.

80. Program synchronized multi-head dispensing placing multiple dots simultaneously to increase throughput on large parts or panels.

## Volumetric Dispensing Methods

81. Design positive displacement system where shot volume depends only on mechanical displacement independent of material properties or pressure.

82. Calculate volumetric accuracy of ±0.5% based on pump machining tolerances and temperature-induced dimensional changes of pump components.

83. Implement progressive cavity pumps for continuous volumetric dispensing of shear-sensitive materials at flow rates from 1-1000 cc/min.

84. Specify gear pumps with precision-machined gears providing pulsation-free flow for applications requiring constant bead width and height.

85. Install piston pumps with ball check valves for high-pressure dispensing up to 1000 psi required for forcing viscous materials through small nozzles.

86. Design rotary vane pumps for low-viscosity materials (<1000 cps) providing smooth flow at rates from 10-500 cc/min with <1% variation.

87. Calibrate volumetric output by dispensing known number of pump rotations or strokes and measuring total volume with ±0.1cc accuracy.

88. Account for material compressibility in volumetric calculations: apparent volume error of 1-3% for air-entrained or compliant materials.

89. Implement temperature compensation in volumetric control software adjusting for pump thermal expansion of ±0.1% per 10°C temperature change.

90. Verify volumetric accuracy using graduated cylinders or precision scales: measure 10 consecutive shots and calculate mean and standard deviation.

## Time-Pressure Dispensing

91. Specify regulated air pressure from 10-100 psi supplied to material reservoir driving material through valve for time-controlled dispensing.

92. Calculate flow rate from Hagen-Poiseuille equation: Q = (π × ΔP × D^4) / (128 × μ × L) for laminar flow through cylindrical nozzle.

93. Characterize viscosity-pressure-flow relationship by dispensing at multiple pressures and measuring resulting flow rates at each setting.

94. Implement electronic pressure regulator with ±0.1 psi accuracy and 50 millisecond response time for rapid pressure adjustments.

95. Program valve open time from 0.010 to 5.0 seconds depending on desired shot size, with longer times for larger volumes.

96. Account for viscosity changes affecting flow rate: 10°C temperature increase typically reduces viscosity by 20-40% increasing dispensed volume proportionally.

97. Implement first-shot compensation adding 10-30% additional time to first dispense after idle period to account for material relaxation.

98. Design pressure decay compensation monitoring reservoir pressure and adjusting set point to maintain constant driving force as material depletes.

99. Calibrate shot size versus time relationship for each material and pressure setting by dispensing and weighing minimum 20 test shots.

100. Specify time-pressure dispensing repeatability of ±3-5% CV compared to ±1-2% for volumetric methods due to viscosity sensitivity.

## Purge System Design

101. Install three-way purge valves on each material line allowing diversion of material flow to waste container during purge cycles.

102. Design purge routine dispensing 5-10cc of material from each pump to flush air, contamination, or partially cured material from lines.

103. Implement automatic purge-on-startup sequence running for 10-30 seconds to clear material that may have begun curing overnight.

104. Program periodic purge intervals every 15-30 minutes during production to prevent material buildup or curing in static mixer.

105. Install solvent flush capability with dedicated pump and valves for cleaning material lines at end of production run or shift.

106. Specify solvent compatible with dispensed materials: acetone for epoxies, isopropanol for acrylics, MEK for urethanes, checking MSDS for compatibility.

107. Design flush sequence with forward and reverse flow cycles to dislodge stubborn material deposits from mixer elements and valve seat.

108. Calculate flush volume of 3-5 times the total system volume (pumps + lines + mixer + valve) to ensure complete material removal.

109. Implement compressed air purge blowing residual solvent from lines after flush cycle to prevent contamination of next material batch.

110. Install waste collection system with appropriate chemical resistance and venting to safely contain purged material and solvents.

## Material Compatibility Engineering

111. Select pump seal materials based on chemical compatibility charts: PTFE seals for aggressive solvents, EPDM for acids, Viton for hydrocarbons.

112. Specify stainless steel 316L for wetted components in contact with corrosive materials providing resistance to pH 2-12 solutions.

113. Use aluminum wetted components for non-corrosive materials offering lower cost and lighter weight than stainless steel equivalents.

114. Implement heated material storage tanks maintaining temperature of 25-50°C to reduce viscosity of thick pastes improving pumpability.

115. Install agitator in material tanks with 50-200 RPM paddle mixer to prevent settling of filled materials and maintain uniform composition.

116. Design material feed system with pressure pots pressurized to 5-15 psi ensuring positive pressure to pump inlets preventing cavitation.

117. Specify material filters with 100-200 mesh (75-150 micron) filtration to remove contamination that could clog small dispensing nozzles.

118. Implement moisture control for hygroscopic materials using desiccant dryers maintaining dewpoint below -40°C in material storage area.

119. Install inline degassing chambers applying vacuum of 20-28 inches Hg to remove entrained air preventing voids in dispensed material.

120. Specify material shelf life and pot life tracking in control software alerting operator when material approaches expiration date.

## System Calibration Procedures

121. Perform initial ratio calibration by simultaneously dispensing Part A and Part B into separate graduated containers for 30 seconds.

122. Measure volumes with ±0.5cc accuracy, calculate ratio error, and adjust pump stroke lengths to achieve target ratio within ±2%.

123. Verify mix quality by dispensing samples and testing mechanical properties: shore hardness, tensile strength, comparing to datasheet values.

124. Calibrate shot weight by dispensing 20 consecutive shots onto precision scale recording weight of each shot with ±0.01 gram resolution.

125. Calculate shot weight mean and standard deviation: target mean within ±5% of specification and CV less than 3% for acceptable performance.

126. Adjust shot time or stroke length in 1-2% increments to correct mean shot weight while minimizing increase in standard deviation.

127. Perform daily ratio verification dispensing test shots and measuring refractive index, color, or density to confirm correct component mixing.

128. Calibrate pressure regulators using reference pressure gauge with NIST traceable calibration and ±0.25% full scale accuracy.

129. Verify valve response time using high-speed camera capturing valve opening and closing at 1000 frames per second identifying mechanical delays.

130. Implement statistical process control charting shot weight data to detect process drift before parts are produced outside specification limits.

## Flow Rate Specifications

131. Specify flow rates for volumetric pump systems from 0.1 cc/min for micro-dispensing to 1000 cc/min for high-throughput assembly lines.

132. Calculate required pump displacement and cycle rate: flow rate Q = displacement volume × cycles per minute (e.g., 5cc × 20 cpm = 100 cc/min).

133. Design time-pressure systems for flow rates from 0.01 to 50 cc/sec depending on material viscosity, supply pressure, and nozzle diameter.

134. Measure flow rate using graduated cylinder and timer: collect dispensed material for 60 seconds and measure volume with ±1cc accuracy.

135. Implement flow meters with pulse output providing 0.01-0.1cc per pulse resolution for real-time flow rate monitoring and totalizing.

136. Specify maximum flow rate based on mixer performance: ensure residence time in mixer of minimum 1-2 seconds for complete homogenization.

137. Account for flow rate decrease over time as material reservoirs empty reducing hydrostatic head pressure by 0.5-2 psi per inch of level drop.

138. Design system for turndown ratio of 10:1 allowing flow rate adjustment from 10% to 100% of maximum while maintaining mix ratio accuracy.

139. Calculate pressure drop through system components: ΔP(total) = ΔP(lines) + ΔP(mixer) + ΔP(valve) + ΔP(nozzle), typically 50-200 psi total.

140. Verify flow rate stability by continuous dispensing for 5 minutes while monitoring outlet flow with ±2% tolerance from target rate.

## Mix Ratio Accuracy Requirements

141. Specify mix ratio tolerance based on material manufacturer recommendations: typically ±3% for forgiving systems, ±1% for critical formulations.

142. Understand ratio sensitivity: epoxies often tolerate ±5% deviation, urethanes require ±2%, and some silicones need ±1% for full cure.

143. Implement dual flow meters continuously monitoring each component flow with accuracy of ±1% reading providing real-time ratio calculation.

144. Calculate cumulative ratio error over dispensing cycle: integrate instantaneous ratio errors accounting for response time lag in control system.

145. Design alarm system alerting operator when cumulative ratio error exceeds ±2% of target requiring immediate corrective action or shutdown.

146. Verify ratio accuracy using material property testing: mix samples at target ratio and ±3% deviation, compare mechanical properties after cure.

147. Account for ratio shift during startup: first 2-5 dispense cycles may have 5-10% ratio error until material flow stabilizes in both lines.

148. Implement ratio lock-out preventing system operation if ratio calibration hasn't been performed within past 7 days or 10,000 cycles.

149. Design self-calibrating systems that automatically adjust pump strokes based on flow meter feedback maintaining ratio within ±0.5% continuously.

150. Document ratio verification procedures requiring daily checks at startup and every 4 hours during production with results logged electronically.

## Shot Size Tolerance Control

151. Specify shot weight tolerance of ±5% for general assembly applications, ±3% for precision bonding, ±1% for semiconductor packaging.

152. Implement statistical process control with control limits set at ±3 standard deviations capturing 99.7% of shots within tolerance band.

153. Calculate process capability index Cpk from shot weight data: Cpk = min[(USL-μ)/(3σ), (μ-LSL)/(3σ)], target Cpk > 1.33 for capable process.

154. Account for shot size drift due to temperature changes: material warming during shift increases flow rate by 2-5% per 10°C temperature rise.

155. Design thermal management system maintaining material temperature within ±2°C using recirculating chillers or temperature-controlled rooms.

156. Implement auto-teach function where system dispenses test shot, measures weight, and automatically adjusts parameters to achieve target weight.

157. Specify shot-to-shot repeatability of CV < 2% for volumetric systems and CV < 4% for time-pressure systems under stable conditions.

158. Account for first-shot variation: often 10-30% different from subsequent shots due to pressure buildup or relaxation in material lines.

159. Program first-shot compensation routine with different parameters for initial dispense after idle period returning to normal after shot 2 or 3.

160. Verify shot tolerance performance using gauge R&R study separating measurement variation from actual process variation in capability analysis.

## Pressure Vessel Design

161. Fabricate pressure vessels from 304 or 316 stainless steel with wall thickness calculated for working pressure of 60-100 psi with 4:1 safety factor.

162. Install pressure relief valves set at 125% of maximum operating pressure preventing over-pressurization due to regulator failure.

163. Design vessel capacity from 1 to 20 liters based on material consumption rate and desired refill frequency: target 1-2 refills per shift.

164. Incorporate sight tubes or level sensors providing visual or electronic indication of remaining material level for timely refill.

165. Install follower plates with O-ring seals that slide down inside vessel under air pressure preventing material contamination and oxidation.

166. Design quick-disconnect fittings for material cartridges allowing rapid material changeover in under 5 minutes without tools.

167. Implement vessel heating using silicone rubber heaters with PID temperature control maintaining material at 30-60°C for low-viscosity dispensing.

168. Specify vessel finish with electropolished interior (15 Ra or better) preventing material buildup and facilitating complete drainage and cleaning.

169. Install pressure transducers monitoring vessel pressure with ±1 psi accuracy providing feedback for closed-loop pressure control.

170. Design vented lids with desiccant filters preventing moisture ingress for hygroscopic materials while allowing pressure equalization during filling.

## Assembly Process Integration

171. Mount dispense system on rigid frame with vibration isolation minimizing transmitted vibration to dispensing head ensuring placement accuracy.

172. Install emergency stop buttons at operator stations and along conveyor line providing immediate system shutdown in case of malfunction.

173. Integrate barcode scanners reading part serial numbers and automatically loading correct dispense program from database of 100+ programs.

174. Implement PLC-based control system with Ethernet/IP or Profinet communication to factory MES system for production tracking and traceability.

175. Design user interface with touchscreen HMI displaying real-time process parameters: pressure, flow rate, ratio, shot weight, and alarm status.

176. Program automatic recipe management storing up to 500 dispense programs with parameters for different parts, materials, and processes.

177. Install material low-level sensors preventing dry running of pumps which can cause damage to seals and check valves within seconds.

178. Integrate vision inspection system capturing images of dispensed beads or dots and running analysis algorithms to verify quality before part exit.

179. Design workstation with ergonomic access for manual part loading and unloading maintaining operator comfort during 8-hour production shifts.

180. Implement interlocked safety guards preventing access to moving dispensing equipment during automated cycle execution meeting OSHA requirements.

## Preventive Maintenance

181. Schedule daily maintenance including purge cycle, visual inspection of material levels, and verification of pressure settings taking 10-15 minutes.

182. Perform weekly calibration checks dispensing and weighing test shots to verify shot weight and ratio accuracy remain within specifications.

183. Replace disposable static mixers daily or after 100-500 dispense cycles depending on material pot life and mixer clogging tendency.

184. Inspect valve seals and needle tips every 1 million cycles checking for wear, damage, or material buildup affecting shutoff or flow control.

185. Rebuild pumps every 2-5 million cycles replacing piston seals, check valves, and O-rings with OEM parts maintaining like-new performance.

186. Clean material lines and vessels weekly using appropriate solvents to remove cured material, contamination, or oxidized film from wetted surfaces.

187. Calibrate pressure regulators and transducers annually against NIST-traceable reference standards maintaining ±1% accuracy across operating range.

188. Replace flexible material hoses every 12 months or per manufacturer recommendations to prevent material contamination from degraded hose material.

189. Lubricate pump drive mechanisms and valve actuators monthly using approved lubricants compatible with dispensed materials and application environment.

190. Maintain service log documenting all maintenance activities, component replacements, calibration results, and system performance trends over time.

## Process Validation and Quality Control

191. Perform installation qualification verifying equipment installation per specifications including utilities, safety features, and environmental controls.

192. Execute operational qualification confirming system operates within specified parameters across full operating range for pressure, flow rate, and ratio.

193. Conduct performance qualification demonstrating system consistently produces parts meeting acceptance criteria over 30 consecutive production runs.

194. Implement in-process monitoring measuring shot weight, bead profile, and dot placement on statistical sample basis (minimum 5 parts per hour).

195. Establish control charts for critical process parameters trending data over time to detect process drift before out-of-specification parts are produced.
