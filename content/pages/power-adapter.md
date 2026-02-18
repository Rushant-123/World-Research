---
title: "USB-C Power Adapter"
company: "Flextronics"
country: "Singapore"
selling_price: 25.0
inputs:
  - name: "AC-DC Converter"
    cost: 8.0
    link: "ac-dc-converter"
  - name: "PD Controller"
    cost: 3.0
    link: "pd-controller"
  - name: "Transformer"
    cost: 4.0
    link: "hf-transformer"
  - name: "Enclosure"
    cost: 2.5
    link: "adapter-enclosure"
value_created: 7.5
lead_time_days: 44
minimum_order_quantity: 1000
transportation_method: "ocean"
geopolitical_risk: "low"
price_volatility: "medium"

certifications:
  - "ISO9001"
  - "ISO14001"
data_quality: "estimated"
---

# How to Make a USB-C Power Adapter

**Market Leader:** [Flextronics](/companies/flextronics)



A high-efficiency USB-C power adapter using flyback topology, GaN FETs, and USB PD 3.1 protocol supporting up to 140W output with >94% efficiency, advanced thermal management, and comprehensive safety certifications.

## Step 1: Design Power Architecture
Select flyback topology for compact size and cost-effectiveness in 25-140W range.

## Step 2: Choose GaN FET Technology
Select gallium nitride FETs for higher switching frequency and efficiency vs silicon MOSFETs.

## Step 3: Define Input Specifications
Design for universal AC input: 100-240V AC, 50/60Hz, with wide voltage tolerance.

## Step 4: Define Output Specifications
Support USB PD 3.1 output profiles: 5V/3A, 9V/3A, 15V/3A, 20V/5A, 28V/5A (140W max).

## Step 5: Select Primary Controller IC
Choose integrated flyback controller with PFC and synchronous rectification support.

## Step 6: Design EMI Input Filter
Add common-mode and differential-mode filter stages at AC input for EMI compliance.

## Step 7: Add Bridge Rectifier
Use high-voltage bridge rectifier (600V+ rating) to convert AC to pulsed DC.

## Step 8: Design Bulk Capacitor Stage
Select electrolytic capacitors (400V, low ESR) for input voltage smoothing.

## Step 9: Implement PFC Stage
Design active power factor correction stage to achieve PF >0.95 for regulatory compliance.

## Step 10: Select PFC Controller IC
Choose critical conduction mode (CRM) or continuous conduction mode (CCM) PFC controller.

## Step 11: Design PFC Inductor
Calculate inductance value for desired switching frequency and ripple current specifications.

## Step 12: Add PFC Switch
Use high-voltage GaN FET (650V) as PFC boost switch for efficiency.

## Step 13: Design PFC Diode Stage
Select fast-recovery diode or SiC Schottky for PFC output rectification.

## Step 14: Add PFC Output Capacitor
Use high-voltage film capacitor (450V) for stable DC bus voltage (~400V).

## Step 15: Design Flyback Transformer
Calculate turns ratio for desired output voltage and galvanic isolation requirements.

## Step 16: Select Core Material
Choose ferrite core material (3C95, 3F4) for high-frequency operation and low losses.

## Step 17: Calculate Primary Turns
Determine primary winding turns based on maximum duty cycle and switching frequency.

## Step 18: Calculate Secondary Turns
Design secondary turns for each output voltage level with regulation margin.

## Step 19: Design Auxiliary Winding
Add auxiliary winding for controller IC self-supply and synchronous timing.

## Step 20: Wind Transformer
Layer primary, insulation tape, secondary with proper spacing for safety clearance.

## Step 21: Test Transformer Leakage
Measure leakage inductance to ensure it meets flyback topology requirements (<5% typical).

## Step 22: Apply Transformer Insulation
Add triple-insulated wire or reinforced insulation for safety certification compliance.

## Step 23: Select Primary GaN FET
Choose 650V GaN transistor with low RDS(on) and fast switching characteristics.

## Step 24: Design Gate Drive Circuit
Implement isolated gate driver with optimal gate resistance for GaN switching speed.

## Step 25: Add Primary Snubber
Design RCD snubber network to clamp voltage spikes and protect primary switch.

## Step 26: Implement Current Sensing
Add current sense resistor or transformer for cycle-by-cycle overcurrent protection.

## Step 27: Design Secondary Rectification
Use synchronous rectification with low-voltage GaN FETs for high efficiency (>94%).

## Step 28: Select Secondary SR FETs
Choose 100V GaN FETs with ultra-low RDS(on) for minimal conduction losses.

## Step 29: Add SR Controller
Implement synchronous rectification controller for optimal timing and efficiency.

## Step 30: Design Output Capacitors
Select low-ESR ceramic and polymer capacitors for minimal output ripple (<50mV).

## Step 31: Add Output Inductor
Include small LC filter for additional ripple reduction and EMI suppression.

## Step 32: Implement Voltage Feedback
Design optocoupler-based feedback loop for tight output voltage regulation (±1%).

## Step 33: Add Compensation Network
Tune feedback compensation for stable loop response across load range.

## Step 34: Design USB PD Controller
Integrate USB PD 3.1 controller IC with CC line communication capability.

## Step 35: Add USB-C Connector
Mount USB-C receptacle with proper PCB footprint and mechanical reinforcement.

## Step 36: Configure PD Voltage Profiles
Program controller with supported voltage/current profiles per USB PD 3.1 spec.

## Step 37: Design CC Line Circuit
Add CC pull-up resistors and communication circuitry for PD negotiation.

## Step 38: Implement E-Marker Support
Add support for electronically marked cables (>60W) via cable detection.

## Step 39: Add VBUS Switch
Use load switch or MOSFET for controlled VBUS connection during negotiation.

## Step 40: Design Overcurrent Protection
Implement fast-acting OCP with hiccup mode restart for short circuit protection.

## Step 41: Add Overvoltage Protection
Design OVP circuit to shut down if output exceeds safe voltage threshold.

## Step 42: Implement Overtemperature Protection
Add NTC thermistor near hottest components for thermal shutdown protection.

## Step 43: Design Soft-Start Circuit
Implement gradual power-up to limit inrush current and stress on components.

## Step 44: Add No-Load Operation
Optimize controller for ultra-low standby power (<75mW) per efficiency standards.

## Step 45: Design Primary PCB Layout
Layout high-current traces with minimum impedance and proper thermal vias.

## Step 46: Optimize GaN FET Layout
Minimize gate loop inductance for fast switching and reduced ringing.

## Step 47: Route High-Frequency Paths
Keep switching node traces short and direct to minimize EMI and losses.

## Step 48: Add Ground Planes
Implement solid ground plane with separate analog and power grounds.

## Step 49: Design Thermal Management
Add copper pour and thermal vias under hot components (GaN FETs, transformer).

## Step 50: Route Feedback Traces
Keep feedback traces away from noisy switching nodes for stable regulation.

## Step 51: Add Safety Clearances
Maintain >6mm creepage and >4mm clearance between primary and secondary.

## Step 52: Design Secondary PCB Layout
Layout output stage with low-impedance paths for minimal voltage drop.

## Step 53: Optimize SR FET Placement
Place synchronous rectification FETs close to transformer for efficiency.

## Step 54: Route USB-C Connections
Design USB-C connector footprint with proper VBUS current capability (5A).

## Step 55: Add Decoupling Capacitors
Place ceramic caps close to IC power pins for stable operation.

## Step 56: Design EMI Containment
Use ground plane shielding and proper trace routing for EMI reduction.

## Step 57: Select PCB Material
Use FR-4 material with thermal rating >130°C for reliable operation.

## Step 58: Specify PCB Thickness
Choose 1.6mm thickness for mechanical strength and thermal performance.

## Step 59: Define Copper Weight
Use 2oz copper on power layers for high current handling capability.

## Step 60: Add Solder Mask
Apply solder mask with high dielectric strength for safety compliance.

## Step 61: Design Silkscreen Layer
Add component designators and safety markings for assembly and servicing.

## Step 62: Generate Gerber Files
Export PCB manufacturing files with proper layer stackup documentation.

## Step 63: Order PCB Fabrication
Source PCBs from certified manufacturer with quality control processes.

## Step 64: Procure GaN FETs
Order primary and secondary GaN transistors from qualified suppliers.

## Step 65: Source Controller ICs
Procure flyback controller, PFC controller, and USB PD controller chips.

## Step 66: Order Transformer
Custom order flyback transformer per design specifications from magnetics vendor.

## Step 67: Procure Capacitors
Source electrolytic, film, and ceramic capacitors with proper voltage ratings.

## Step 68: Order Diodes
Purchase fast-recovery and Schottky diodes for rectification stages.

## Step 69: Source Resistors
Order metal film resistors with appropriate power ratings and tolerances.

## Step 70: Procure Optocouplers
Source high-speed optocouplers for feedback and isolation requirements.

## Step 71: Order USB-C Connector
Purchase compliant USB-C receptacle with proper current rating (5A).

## Step 72: Source Thermistors
Order NTC thermistors for inrush limiting and temperature monitoring.

## Step 73: Procure Inductors
Source PFC inductor and output filter inductors per design specs.

## Step 74: Order Enclosure
Custom plastic housing with proper ventilation and safety approvals.

## Step 75: Source AC Pins
Order foldable or fixed AC prong set with regional compliance.

## Step 76: Prepare SMT Assembly
Program pick-and-place machine with component placement coordinates.

## Step 77: Apply Solder Paste
Use stencil to apply solder paste to PCB pads with proper thickness.

## Step 78: Place Components
Automated placement of SMD components with vision system alignment.

## Step 79: Reflow Primary Side
Reflow solder using temperature profile optimized for lead-free solder.

## Step 80: Inspect Primary Assembly
Automated optical inspection (AOI) to verify component placement and solder joints.

## Step 81: Assemble Secondary Side
Repeat SMT process for secondary side components if double-sided design.

## Step 82: Mount Through-Hole Parts
Hand-insert or wave-solder through-hole components (transformer, large caps).

## Step 83: Install Transformer
Mount flyback transformer with proper orientation and secure mounting.

## Step 84: Solder Transformer Pins
Hand-solder transformer pins ensuring good electrical and mechanical connection.

## Step 85: Add Heat Sinks
Attach heat sinks to GaN FETs with thermal interface material.

## Step 86: Apply Thermal Compound
Use high-performance thermal paste between FETs and heat sinks.

## Step 87: Install USB-C Connector
Mount and solder USB-C receptacle with mechanical reinforcement.

## Step 88: Add Safety Insulation
Apply insulation barriers between primary and secondary circuits.

## Step 89: Clean PCB Assembly
Remove flux residue using ultrasonic cleaning or approved solvents.

## Step 90: Inspect Solder Joints
Visual and X-ray inspection of critical solder connections.

## Step 91: Test Continuity
Perform continuity checks on power rails and signal traces.

## Step 92: Program Controller
Flash firmware to USB PD controller with voltage profile configuration.

## Step 93: Calibrate Voltage Output
Trim output voltage using calibration resistors for accurate regulation.

## Step 94: Perform Initial Power-Up
Apply AC input with current limiting for safe first power-on test.

## Step 95: Measure Input Current
Verify input current draw and power factor correction operation.

## Step 96: Check Output Voltage
Measure output voltage accuracy across all USB PD profiles.

## Step 97: Test PD Negotiation
Verify USB PD communication and voltage switching functionality.

## Step 98: Load Testing
Apply resistive loads at different power levels to verify performance.

## Step 99: Measure Efficiency
Test efficiency at 25%, 50%, 75%, and 100% load conditions (target >94%).

## Step 100: Check Ripple and Noise
Measure output ripple with oscilloscope (target <50mV peak-to-peak).

## Step 101: Test Transient Response
Apply load steps and verify output voltage recovery time (<50ms).

## Step 102: Verify OCP Function
Test overcurrent protection triggers at specified threshold.

## Step 103: Test OVP Function
Verify overvoltage protection prevents output from exceeding safe limits.

## Step 104: Check Thermal Performance
Run thermal imaging to identify hot spots and verify temperature limits.

## Step 105: Test OTP Function
Verify overtemperature protection shuts down adapter at safe threshold.

## Step 106: Measure Standby Power
Confirm no-load power consumption meets energy efficiency requirements (<75mW).

## Step 107: Test Line Regulation
Verify output stability across 100-240V AC input range (±1%).

## Step 108: Check Load Regulation
Test output voltage stability from no-load to full load (±2%).

## Step 109: EMI Pre-Compliance Testing
Perform preliminary EMI scan to identify potential compliance issues.

## Step 110: Test ESD Immunity
Apply electrostatic discharge per IEC 61000-4-2 (contact and air discharge).

## Step 111: Verify Short Circuit Protection
Test short circuit on output with automatic recovery after fault removal.

## Step 112: Check Cable Detection
Verify E-marker cable detection for >60W power delivery.

## Step 113: Test Multiple Devices
Verify compatibility with various USB PD devices (phones, laptops, tablets).

## Step 114: Burn-In Testing
Run adapters at full load and elevated temperature for 24-48 hours.

## Step 115: Install in Enclosure
Mount PCB assembly into plastic housing with proper fitment.

## Step 116: Add Thermal Interface
Apply thermal pad between PCB and enclosure for heat dissipation.

## Step 117: Route USB-C Cable
Position USB-C connector in housing opening with strain relief.

## Step 118: Install AC Prongs
Mount AC plug assembly with mechanical locking mechanism.

## Step 119: Add Label
Apply regulatory labels (UL, CE, CCC, power ratings) to housing.

## Step 120: Seal Enclosure
Ultrasonic weld or snap-fit assembly of housing halves.

## Step 121: Apply Tamper-Evident Seal
Add security label or design to prevent unauthorized opening.

## Step 122: Final Visual Inspection
Check for proper assembly, label placement, and cosmetic defects.

## Step 123: Hi-Pot Testing
Apply 3000V AC between primary and secondary for 1 second (safety test).

## Step 124: Ground Continuity Test
Verify proper grounding connection with low-resistance measurement.

## Step 125: Polarity Check
Confirm correct output voltage polarity and USB-C pin assignment.

## Step 126: Final Functional Test
Complete power-up and load test to verify all specifications.

## Step 127: Package Unit
Place adapter in retail packaging with documentation and certifications.

## Step 128: UL Certification Process
Submit samples for UL 60950-1 or UL 62368-1 safety certification testing.

## Step 129: UL Construction Review
Undergo review of materials, spacings, and construction methods.

## Step 130: UL Flammability Testing
Test plastic housing for flammability rating (typically 5VA or V-0).

## Step 131: UL Temperature Testing
Verify component temperatures stay within rated limits under worst-case conditions.

## Step 132: UL Dielectric Testing
Pass voltage withstand tests between primary-secondary and line-ground.

## Step 133: CE Marking Process
Prepare technical documentation for CE compliance (Low Voltage Directive).

## Step 134: EMC Testing for CE
Perform EMI emissions and immunity testing per EN 55032 and EN 55035.

## Step 135: CE LVD Testing
Safety testing per EN 62368-1 for European market compliance.

## Step 136: CE Declaration
Issue Declaration of Conformity for CE marking authorization.

## Step 137: CCC Certification
Submit for China Compulsory Certification (GB 4943.1 safety standard).

## Step 138: CCC Factory Inspection
Undergo factory audit for CCC certification maintenance.

## Step 139: FCC Compliance
Test conducted and radiated emissions per FCC Part 15 Class B limits.

## Step 140: Energy Star Qualification
Verify efficiency levels meet Energy Star external power supply requirements.

## Step 141: DOE Level VI Compliance
Test average efficiency meets Department of Energy Level VI standards.

## Step 142: USB-IF Certification
Submit for USB Power Delivery certification and compliance testing.

## Step 143: USB PD Protocol Testing
Verify all PD communication sequences and state machines.

## Step 144: USB-IF TID Assignment
Obtain Test ID for compliant USB PD implementation.

## Step 145: RoHS Compliance
Verify all materials meet RoHS restrictions on hazardous substances.

## Step 146: REACH Compliance
Ensure materials comply with REACH regulations for SVHCs.

## Step 147: Optimize Switching Frequency
Fine-tune switching frequency for optimal efficiency-EMI tradeoff (50-150kHz).

## Step 148: Adjust Dead Time
Optimize dead time in synchronous rectification for minimal body diode conduction.

## Step 149: Tune Soft-Start Ramp
Adjust soft-start timing for optimal inrush current limiting.

## Step 150: Calibrate Current Limit
Set primary current limit for overcurrent protection at 110-120% rated output.

## Step 151: Optimize Light-Load Operation
Tune frequency foldback or burst mode for high efficiency at low loads.

## Step 152: Adjust Cable Compensation
Calibrate voltage output to compensate for cable drop at maximum current.

## Step 153: Thermal Optimization
Modify PCB layout or add thermal vias to improve heat dissipation.

## Step 154: EMI Filter Tuning
Adjust EMI filter component values to meet emissions margins.

## Step 155: Reduce Audible Noise
Modify switching frequency or control method to eliminate audible whine.

## Step 156: Cost Optimization
Evaluate alternative components for cost reduction while maintaining performance.

## Step 157: Reliability Testing
Perform accelerated life testing at elevated temperature and humidity.

## Step 158: MTBF Calculation
Calculate mean time between failures using component stress analysis.

## Step 159: Design for Manufacturing
Review design with manufacturing team for assembly optimization.

## Step 160: Create Manufacturing Fixtures
Design test fixtures and jigs for production line testing.

## Step 161: Develop Test Procedures
Write detailed test procedures for production line personnel.

## Step 162: Train Assembly Staff
Train operators on assembly procedures and quality requirements.

## Step 163: Establish Quality Metrics
Define acceptable quality levels and defect rate targets.

## Step 164: Production Line Setup
Configure SMT line with optimized settings for high yield.

## Step 165: First Article Inspection
Inspect first production units for conformance to specifications.

## Step 166: Process Control
Implement statistical process control for key manufacturing parameters.

## Step 167: In-Line Testing
Set up automated testing stations for 100% production testing.

## Step 168: Failure Analysis
Investigate any production defects and implement corrective actions.

## Step 169: Traceability System
Implement serial number tracking for warranty and recall management.

## Step 170: Supplier Quality
Audit component suppliers for quality and reliability standards.

## Step 171: Incoming Inspection
Test sample of incoming components for specification compliance.

## Step 172: Environmental Testing
Perform temperature cycling, humidity, and vibration testing.

## Step 173: Drop Test
Test packaged units for shipping durability per ISTA standards.

## Step 174: Customer Field Trials
Deploy pre-production units for real-world usage validation.

## Step 175: Compatibility Testing
Test with wide range of devices to ensure broad compatibility.

## Step 176: Regulatory Monitoring
Stay updated on changing safety and efficiency regulations.

## Step 177: Design Documentation
Create comprehensive design documentation for manufacturing and support.

## Step 178: User Manual Creation
Write user instructions with safety warnings and specifications.

## Step 179: Warranty Program
Establish warranty terms and repair/replacement procedures.

## Step 180: Spare Parts Management
Stock critical components for production and repair support.

## Step 181: Recycling Program
Develop end-of-life recycling process for environmental compliance.

## Step 182: Continuous Improvement
Implement feedback loop from field failures for design improvements.

## Step 183: Next Generation Planning
Begin development of next revision with improved features.

## Step 184: GaN Technology Updates
Monitor advances in GaN technology for future cost and performance gains.

## Step 185: USB PD 3.2 Support
Plan for future USB PD standard updates and higher power levels.

## Step 186: Wireless Charging Integration
Evaluate integration of Qi wireless charging into adapter design.

## Step 187: Multi-Port Design
Consider adding multiple USB-C ports with intelligent power sharing.

## Step 188: Smart Features
Explore IoT connectivity for remote monitoring and control.

## Step 189: Miniaturization
Continue reducing size while maintaining performance and safety.

## Step 190: Gallium Oxide FETs
Research ultra-wide bandgap semiconductors for next-generation efficiency.

## Step 191: Digital Control
Implement digital controller for adaptive optimization and diagnostics.

## Step 192: Predictive Maintenance
Add algorithms to predict component wear and failure.

## Step 193: Regional Variants
Develop regional SKUs with appropriate AC plugs and certifications.

## Step 194: Market Launch
Execute go-to-market strategy with sales and marketing teams.

## Step 195: Customer Support
Establish technical support infrastructure for customer inquiries and issues.
