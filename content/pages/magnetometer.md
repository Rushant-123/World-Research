---
title: "Magnetometer Sensor"
company: "Asahi Kasei Microdevices"
country: "Japan"
selling_price: 1.0
inputs:
  - name: "Hall Sensor"
    cost: 0.35
    link: "hall-sensor"
  - name: "ASIC"
    cost: 0.3
    link: "sensor-asic"
  - name: "Flux Concentrator"
    cost: 0.2
    link: "flux-concentrator"
  - name: "Package"
    cost: 0.12
    link: "sensor-package"
value_created: 0.03
---

# Magnetometer Sensor Manufacturing Process

**Market Leader:** [Asahi Kasei Microdevices](/companies/asahi-kasei-microdevices)



## Phase 1: Hall Sensor Element Fabrication (Steps 1-35)

### 1. Silicon Wafer Preparation
Start with high-purity 200mm silicon wafers with <100> crystal orientation for optimal Hall effect response.

### 2. Wafer Cleaning
Perform RCA cleaning sequence to remove organic contaminants, particles, and native oxide layers.

### 3. Initial Oxidation
Grow 500nm thermal oxide layer at 1000°C in oxygen atmosphere for electrical isolation.

### 4. N-Well Photolithography
Apply photoresist and pattern n-well regions where Hall plates will be formed using 248nm DUV lithography.

### 5. N-Well Ion Implantation
Implant phosphorus ions at 180 keV with dose of 5×10^13 cm^-2 to create n-type wells.

### 6. N-Well Drive-In
Perform thermal diffusion at 1100°C for 4 hours to drive dopants deeper and activate them.

### 7. Active Area Definition
Pattern and etch field oxide regions using LOCOS process for device isolation.

### 8. Hall Plate Photolithography
Define precise Hall plate geometries using high-resolution photomask with alignment marks.

### 9. Hall Plate Doping
Implant additional phosphorus to achieve optimal carrier concentration of 1×10^16 cm^-3 for sensitivity.

### 10. Contact Window Opening
Pattern and etch oxide to expose four contact regions at corners of square Hall plate.

### 11. Contact Metal Deposition
Sputter 500nm aluminum-silicon alloy for low-resistance electrical contacts.

### 12. Metal Patterning
Pattern and etch metal to form contact pads and interconnect traces.

### 13. Passivation Layer
Deposit 1μm silicon nitride for protection against moisture and contamination.

### 14. Contact Pad Opening
Open windows in passivation over bonding pad areas using plasma etching.

### 15. X-Axis Hall Sensor Array
Fabricate array of 4 matched Hall plates oriented for X-axis magnetic field detection.

### 16. Y-Axis Hall Sensor Array
Create identical array rotated 90° for Y-axis field measurement with matching characteristics.

### 17. Z-Axis Hall Sensor Array
Implement vertical Hall sensors with current flow perpendicular to wafer surface for Z-axis sensing.

### 18. Flux Concentrator Anchor Points
Create raised silicon pedestals or recessed regions for precise flux concentrator alignment.

### 19. Temperature Sensor Integration
Fabricate on-chip diode or resistive temperature sensor for compensation algorithms.

### 20. Reference Voltage Circuitry
Build bandgap reference circuit providing stable 1.2V independent of temperature variations.

### 21. Self-Test Coil Formation
Pattern metal coils around Hall sensors for generating calibration magnetic fields.

### 22. Electromagnetic Shielding
Add grounded metal shield layers to reduce electromagnetic interference from digital circuits.

### 23. Stress Relief Structures
Design and implement expansion joints to minimize package-induced mechanical stress effects.

### 24. Wafer Thinning
Back-grind wafer to 300μm thickness for reduced package height and improved thermal performance.

### 25. Backside Metallization
Deposit titanium-nickel-silver stack on wafer backside for die attach and thermal conduction.

### 26. Hall Sensor Characterization
Test Hall voltage response, sensitivity (80-120 mV/V/T), and offset at wafer level.

### 27. Offset Trimming
Perform laser trimming of integrated resistors to null out inherent Hall plate offset voltage.

### 28. Sensitivity Calibration
Measure and record sensitivity coefficients for each sensor axis in known magnetic field.

### 29. Temperature Coefficient Mapping
Characterize sensitivity and offset drift across -40°C to +85°C operating range.

### 30. Linearity Verification
Verify linear response from -1000 μT to +1000 μT field strength for compass applications.

### 31. Cross-Axis Sensitivity
Measure orthogonality errors between axes (specification: <2% cross-axis sensitivity).

### 32. Noise Floor Assessment
Characterize 1/f noise and white noise to verify <100 nT/√Hz noise density specification.

### 33. Wafer Dicing
Singulate die using precision diamond saw with 50μm street width.

### 34. Die Visual Inspection
Automated optical inspection for cracks, chipping, contamination, or metallization defects.

### 35. Known Good Die Selection
Sort die based on electrical test results and visual inspection for next assembly stage.

## Phase 2: Flux Concentrator Manufacturing (Steps 36-60)

### 36. Permalloy Material Selection
Source nickel-iron alloy (78% Ni, 22% Fe) with maximum permeability >100,000 for field concentration.

### 37. Permalloy Sheet Preparation
Cold-roll permalloy to 50-100μm thickness with tight thickness tolerance of ±5μm.

### 38. Stress Relief Annealing
Heat treat at 900°C in hydrogen atmosphere to achieve optimal magnetic softness.

### 39. Surface Cleaning
Remove oxide layer and contaminants using acid pickling and ultrasonic cleaning.

### 40. Photoresist Application
Coat with thick photoresist suitable for electroplating process (25-50μm thickness).

### 41. Flux Concentrator Patterning
Expose C-shaped or ring-shaped concentrator patterns aligned to Hall sensor locations.

### 42. Resist Development
Develop exposed photoresist to create plating molds for flux concentrator structures.

### 43. Electroplating Setup
Prepare nickel-iron plating bath with precise composition control for consistent permeability.

### 44. Permalloy Electroplating
Electroplate permalloy to 30-50μm thickness at controlled current density of 2-5 mA/cm^2.

### 45. Plating Thickness Measurement
Monitor thickness using contact profilometry to ensure uniformity across wafer.

### 46. Post-Plating Anneal
Perform magnetic annealing at 300°C in 1 Tesla field to set easy axis magnetization direction.

### 47. Photoresist Stripping
Remove photoresist using oxygen plasma or chemical strippers without damaging permalloy.

### 48. Flux Concentrator Inspection
Verify dimensions, thickness uniformity, and absence of voids or delamination.

### 49. Magnetic Property Testing
Characterize permeability, coercivity (<4 A/m), and saturation magnetization of concentrators.

### 50. Concentration Factor Measurement
Verify 5-10× magnetic flux amplification at Hall sensor location versus bare sensor.

### 51. X-Axis Concentrator Assembly
Position and align flux concentrators for X-axis sensors with <10μm placement accuracy.

### 52. Y-Axis Concentrator Assembly
Install Y-axis concentrators perpendicular to X-axis with matched concentration characteristics.

### 53. Adhesive Bonding
Attach concentrators using non-magnetic epoxy with low outgassing and high temperature stability.

### 54. Cure Process
Thermal cure at 150°C for 2 hours to fully polymerize adhesive and maximize bond strength.

### 55. Concentrator-to-Sensor Gap Control
Maintain 20-50μm air gap between concentrator and Hall plate for optimal field shaping.

### 56. Concentrator Symmetry Verification
Check that concentrators are centered on sensors to minimize offset and cross-axis errors.

### 57. Magnetic Cleanliness Testing
Verify no ferromagnetic contamination on concentrators using SQUID magnetometry.

### 58. Assembly Yield Check
Inspect for concentrator misalignment, adhesive overflow, or damage from handling.

### 59. Rework and Repair
Remove and replace any misaligned or defective concentrators identified in inspection.

### 60. Flux Concentrator Assembly Qualification
Perform final electrical test to confirm sensitivity improvement and offset stability.

## Phase 3: ASIC Design and Fabrication (Steps 61-95)

### 61. ASIC Architecture Definition
Define mixed-signal ASIC integrating analog front-end, ADC, digital signal processor, and I2C interface.

### 62. Analog Front-End Design
Design low-noise instrumentation amplifiers with programmable gain (20-100×) for Hall signals.

### 63. Chopper Stabilization Circuit
Implement spinning current technique to cancel 1/f noise and Hall plate offset voltage.

### 64. Anti-Aliasing Filter
Design 4th-order Butterworth low-pass filter with 1 kHz cutoff for ADC input conditioning.

### 65. Sigma-Delta ADC Design
Create 16-bit sigma-delta converter operating at 20 kHz sampling rate for high resolution.

### 66. Digital Signal Processing Core
Implement 16-bit processor for offset cancellation, temperature compensation, and calibration.

### 67. Offset Cancellation Algorithm
Code firmware to measure and subtract residual offsets using self-test coil excitation.

### 68. Temperature Compensation Logic
Implement polynomial correction for sensitivity and offset temperature coefficients.

### 69. Hard Iron Compensation
Design algorithm to subtract constant magnetic field from ferromagnetic device components.

### 70. Soft Iron Compensation Matrix
Implement 3×3 correction matrix for distortion from magnetically soft materials nearby.

### 71. Heading Calculation Engine
Code CORDIC algorithm for fast arctangent computation converting X/Y to heading angle.

### 72. I2C Interface Controller
Design I2C slave interface supporting standard (100 kHz) and fast mode (400 kHz) operation.

### 73. Register Map Definition
Define configuration registers, data registers, and control registers for host interface.

### 74. Power Management Unit
Design voltage regulators, power sequencing, and low-power sleep modes (<10 μA standby current).

### 75. Clock Generation
Implement PLL generating 20 MHz system clock from external 32 kHz crystal reference.

### 76. Interrupt Logic
Design programmable interrupt generation for data ready, threshold crossing, and error conditions.

### 77. Built-In Self-Test
Implement BIST circuitry to verify analog and digital function without external equipment.

### 78. ASIC Layout
Perform physical layout in 180nm CMOS process with careful analog-digital isolation.

### 79. Analog Block Placement
Position sensitive analog circuits away from switching digital logic to minimize noise coupling.

### 80. Power Supply Routing
Create separate power domains for analog (AVDD) and digital (DVDD) with star grounding.

### 81. Signal Integrity Verification
Simulate crosstalk, power supply noise, and ground bounce using extraction tools.

### 82. Design Rule Check
Verify layout meets all foundry design rules for manufacturability and reliability.

### 83. Layout Versus Schematic
Confirm extracted netlist matches schematic design with no errors or warnings.

### 84. Wafer Fabrication
Manufacture ASIC wafers using 180nm CMOS process (6 metal layers, MIM capacitors).

### 85. Wafer-Level Testing
Test ASIC functionality, parametrics, and DC specifications at probe station.

### 86. Wafer Sort and Binning
Separate die into performance bins based on noise, linearity, and power consumption.

### 87. ASIC Die Preparation
Back-grind, backside metal deposition, and dicing similar to Hall sensor wafers.

### 88. ASIC Characterization
Measure offset drift (<40 μT over temperature), noise (<1 μT RMS), and resolution.

### 89. ADC Performance Testing
Verify 16-bit ENOB, DNL <0.5 LSB, INL <2 LSB, and no missing codes.

### 90. DSP Algorithm Validation
Test offset cancellation achieving <10 μT residual offset after compensation.

### 91. Interface Protocol Testing
Verify I2C timing, clock stretching, multi-master support, and register access.

### 92. Power Consumption Measurement
Confirm <500 μA active current at 3.3V and <10 μA in standby mode.

### 93. Thermal Performance
Characterize operation from -40°C to +85°C with <±0.1 μT/°C offset drift.

### 94. Reliability Screening
Perform burn-in at 125°C for 168 hours and verify parametric stability.

### 95. ASIC Quality Release
Release known good die to assembly with full traceability and test data.

## Phase 4: Package Design and Preparation (Steps 96-115)

### 96. Package Type Selection
Select 3mm × 3mm × 0.9mm LGA (Land Grid Array) package for low profile and small footprint.

### 97. Lead Frame Design
Design copper lead frame with 12 connection pads for power, ground, I2C, and interrupt signals.

### 98. Lead Frame Stamping
Stamp lead frame patterns from copper alloy sheet with 50μm feature accuracy.

### 99. Lead Frame Plating
Apply nickel-palladium-gold plating for corrosion resistance and solderability.

### 100. Die Paddle Design
Create recessed die paddle for Z-height control and thermal performance enhancement.

### 101. Non-Magnetic Material Verification
Confirm all package materials (copper alloy, mold compound) have minimal magnetic signature.

### 102. Mold Compound Selection
Select epoxy mold compound with low moisture absorption, CTE matching silicon, and low stress.

### 103. Mold Compound Magnetic Testing
Verify mold compound contains no ferromagnetic fillers that would create offset errors.

### 104. Package Thermal Simulation
Model heat dissipation and verify junction temperature stays below 125°C maximum rating.

### 105. Package Stress Simulation
FEA analysis of package-induced stress on Hall sensors and prediction of offset shift.

### 106. Magnetic Field Simulation
Model magnetic field distribution inside package to optimize sensor and concentrator placement.

### 107. Lead Frame Tape Preparation
Mount lead frames on carrier tape for automated assembly process.

### 108. Die Attach Adhesive Selection
Choose non-magnetic silver-filled epoxy with thermal conductivity >3 W/mK.

### 109. Wire Bond Pad Design
Design bond pad layout for 25μm diameter gold wire with 50μm pitch capability.

### 110. Package Marking Specification
Define laser marking location for date code, lot number, and part number identification.

### 111. Moisture Sensitivity Level
Target MSL 3 rating allowing 168 hours floor life after bag opening before reflow.

### 112. Drop Test Qualification
Verify package survives JEDEC drop test (1500g, 0.5ms, half-sine pulse) without damage.

### 113. Solder Joint Reliability
Perform thermal cycling (-40°C to +125°C, 1000 cycles) to verify solder joint integrity.

### 114. Package Cleanliness
Ensure no ionic contamination or flux residues that could affect magnetic performance.

### 115. Package Material Qualification
Complete full material characterization and reliability testing per JEDEC standards.

## Phase 5: Assembly and Integration (Steps 116-145)

### 116. Die Attach Process Setup
Configure automated die bonder with pattern recognition and precision placement (±10μm).

### 117. Hall Sensor Die Placement
Pick and place Hall sensor die onto lead frame die paddle with vacuum collet.

### 118. Die Attach Adhesive Dispensing
Dispense precise amount of silver epoxy (2-5mg) onto die paddle using pneumatic dispenser.

### 119. Die Bond Force Control
Apply 50-100g bonding force to achieve uniform 10-20μm adhesive bond line thickness.

### 120. Die Attach Cure
Cure silver epoxy at 175°C for 60 minutes to achieve full cross-linking and conductivity.

### 121. Pre-Bond Inspection
Verify die placement accuracy, adhesive coverage, and absence of voids using X-ray.

### 122. ASIC Die Stacking
Place ASIC die adjacent to or stacked on Hall sensor die for shortest interconnect.

### 123. Wire Bonding Preparation
Load assembly into wire bonder and align using fiducial marks on die and lead frame.

### 124. Ball Formation
Create initial gold ball using electronic flame-off (EFO) spark in forming gas.

### 125. First Bond - Ball Bond
Press gold ball onto die bond pad with ultrasonic energy and 30-50g bonding force.

### 126. Wire Loop Formation
Control wire trajectory to achieve 150-200μm loop height avoiding adjacent die.

### 127. Second Bond - Stitch Bond
Form crescent bond on lead frame finger with optimized ultrasonic parameters.

### 128. Tail Break
Break wire tail cleanly without generating wire stubs or damaging adjacent bonds.

### 129. X-Axis Signal Wire Bonding
Connect three Hall sensor outputs (V+, V-, bias) for X-axis to ASIC input pins.

### 130. Y-Axis Signal Wire Bonding
Bond Y-axis Hall sensor signals maintaining symmetry with X-axis connections.

### 131. Z-Axis Signal Wire Bonding
Connect Z-axis vertical Hall sensors to remaining ASIC analog input channels.

### 132. Power and Ground Bonding
Use dual or triple wire bonds for power and ground to reduce resistance and inductance.

### 133. Interface Signal Bonding
Connect I2C SDA, SCL, interrupt, and address select signals from ASIC to package pins.

### 134. Self-Test Coil Connection
Bond self-test coil terminals to ASIC control outputs for offset calibration.

### 135. Wire Bond Inspection
Automated optical inspection of all wire bonds checking for shorts, opens, and non-sticks.

### 136. Wire Bond Pull Test
Destructive sampling: verify bond strength exceeds 8g for 25μm gold wire.

### 137. Pre-Mold Electrical Test
Perform continuity and basic functional test before molding to catch assembly defects.

### 138. Mold Compound Preparation
Degas and pre-heat mold compound pellets to remove moisture and volatiles.

### 139. Transfer Molding
Encapsulate assembly in mold compound at 175°C, 6.8MPa pressure, 90 second cure.

### 140. Post-Mold Cure
Secondary cure at 175°C for 4 hours to fully cross-link resin and relieve molding stress.

### 141. Deflashing
Remove excess mold compound flash from package edges and bottom surface.

### 142. Package Singulation
Separate individual packages from lead frame strip using precision cutting or punching.

### 143. Laser Marking
Mark package top surface with part number, date code, and traceability information.

### 144. Post-Mold Inspection
Visual and automated optical inspection for voids, wire sweep, paddle shift, and cracks.

### 145. Package Dimension Verification
Measure package length, width, height, and coplanarity meeting ±0.05mm tolerances.

## Phase 6: Electrical Testing and Calibration (Steps 146-175)

### 146. Test Handler Setup
Load packaged units into automated test handler with thermal control capability.

### 147. Contact Verification
Verify electrical contact quality on all package pins before applying power.

### 148. Power-Up Sequence
Apply power supplies in correct sequence (AVDD first, DVDD second) monitoring current.

### 149. Supply Current Test
Verify analog and digital supply currents within specification limits at nominal voltage.

### 150. Digital Interface Test
Check I2C communication by reading device ID register and configuration registers.

### 151. Self-Test Execution
Trigger on-chip BIST and verify all subsystems (ADC, DSP, interface) pass functional tests.

### 152. Raw Sensor Output Test
Read ADC values with zero external field and verify proper data format and range.

### 153. Zero-Field Offset Measurement
Measure X, Y, Z axis offsets in magnetically shielded chamber (<10 μT residual field).

### 154. Offset Drift Test
Measure offset change across temperature range -40°C to +85°C in shielded chamber.

### 155. Helmholtz Coil Calibration
Place device in calibrated 3-axis Helmholtz coil system for sensitivity measurement.

### 156. X-Axis Sensitivity Calibration
Apply known field (-500 to +500 μT) along X-axis and measure output response.

### 157. X-Axis Linearity Test
Verify linearity error <±0.5% of full scale across entire measurement range.

### 158. Y-Axis Sensitivity Calibration
Rotate device 90° and repeat sensitivity measurement for Y-axis with same accuracy.

### 159. Y-Axis Linearity Test
Confirm Y-axis maintains same linearity specification as X-axis for heading accuracy.

### 160. Z-Axis Sensitivity Calibration
Orient device vertically and calibrate Z-axis sensitivity (typically 20% lower than X/Y).

### 161. Cross-Axis Measurement
Apply field along one axis and measure response on orthogonal axes (spec: <2% coupling).

### 162. Orthogonality Error Correction
Calculate and store 3×3 correction matrix to compensate for axis misalignment.

### 163. Sensitivity Temperature Coefficient
Measure sensitivity change across temperature and calculate temperature coefficient (±0.3%/°C).

### 164. Offset Temperature Coefficient
Characterize offset drift and program compensation coefficients into ASIC EEPROM.

### 165. Bandwidth Measurement
Apply AC magnetic field and verify -3dB bandwidth >100 Hz for dynamic applications.

### 166. Noise Measurement
Capture time-series data in zero field and calculate RMS noise (<1 μT specification).

### 167. Resolution Verification
Verify minimum detectable field change <0.15 μT by small signal testing.

### 168. Saturation Test
Apply strong field (±2000 μT) and verify no permanent offset shift after removal.

### 169. Heading Accuracy Test
Rotate device through 360° in Earth's field and measure heading error (<1° specification).

### 170. Hard Iron Calibration Data
Record 3-axis offsets from hard iron sources and program into calibration registers.

### 171. Soft Iron Calibration Matrix
Measure field distortion pattern and calculate 3×3 soft iron correction coefficients.

### 172. Self-Test Coil Verification
Activate self-test coil and verify expected field strength at sensor location.

### 173. Interrupt Function Test
Program threshold and verify interrupt pin toggles when magnetic field exceeds limit.

### 174. Power Mode Testing
Verify current consumption in active, standby, and sleep modes meets specifications.

### 175. Final Electrical Test
Comprehensive test of all parameters at 25°C and store calibration data in device.

## Phase 7: Final Inspection and Reliability (Steps 176-195)

### 176. Visual Inspection
100% automated optical inspection for package defects, marking legibility, and contamination.

### 177. X-Ray Inspection
Sample X-ray inspection to verify wire bonds, die attach void-free, and no hidden defects.

### 178. Acoustic Microscopy
CSAM scanning to detect delamination at die-adhesive or adhesive-package interfaces.

### 179. External Visual Criteria
Check for cracks, chips, contamination, mold compound voids, or discoloration.

### 180. Solderability Test
Pre-condition and perform wetting balance test on sample units per JEDEC J-STD-002.

### 181. Magnetic Cleanliness Verification
Test random samples in magnetometer to verify package has no unexpected magnetic signature.

### 182. Tape and Reel Packaging
Load tested devices into tape pockets with anti-static protection and cover seal.

### 183. Reel Labeling
Apply barcode labels with part number, quantity, lot number, and MSL rating.

### 184. Moisture Bake
Bake reels at 125°C for 24 hours to remove absorbed moisture before vacuum sealing.

### 185. Vacuum Sealing
Seal reels in moisture barrier bag with desiccant and humidity indicator card.

### 186. Carton Packing
Pack sealed bags in cartons with protective foam and shock indicators.

### 187. Quality Documentation
Generate certificate of compliance, test data summary, and material declaration.

### 188. Reliability Monitoring
Ongoing reliability testing: HTOL (1000h, 125°C), temperature cycling, HAST.

### 189. Failure Analysis Capability
Maintain FA lab for analyzing field returns and process excursions.

### 190. Traceability System
Database linking every device to wafer lot, assembly lot, test data, and calibration.

### 191. Statistical Process Control
Monitor key parameters (offset, sensitivity, noise) using control charts and Cpk analysis.

### 192. Yield Analysis
Track yield losses by failure mode and implement corrective actions for improvement.

### 193. Magnetic Performance Audit
Quarterly audit of magnetic specifications to ensure long-term calibration stability.

### 194. Customer Qualification Support
Provide engineering samples and characterization data for customer design validation.

### 195. Final Quality Release
Approve shipment after verifying all quality checks passed and documentation complete.
