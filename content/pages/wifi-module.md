---
title: "WiFi Module Assembly"
company: "Murata Manufacturing"
country: "Japan"
selling_price: 12.0
inputs:
  - name: "WiFi Chipset"
    cost: 5.0
    link: "wifi-chipset"
  - name: "RF Frontend"
    cost: 2.5
    link: "rf-frontend"
  - name: "Antenna"
    cost: 1.5
    link: "pcb-antenna"
  - name: "Module PCB"
    cost: 2.0
    link: "rf-pcb"
value_created: 1.0
---

# WiFi Module Assembly Process

This document details the comprehensive 195-step process for assembling WiFi 6E (802.11ax) and Bluetooth 5.3 modules for Mac computers, as performed by Murata Manufacturing in Japan.

## Phase 1: Design and Preparation (Steps 1-25)

### Step 1: Module Specification Review
Review complete module specifications including WiFi 6E tri-band support (2.4GHz, 5GHz, 6GHz), Bluetooth 5.3 requirements, target output power levels, and Mac compatibility requirements.

### Step 2: RF Design Validation
Validate RF circuit design using electromagnetic simulation tools to ensure proper impedance matching and signal integrity across all frequency bands.

### Step 3: PCB Stackup Verification
Verify the multi-layer PCB stackup configuration with controlled impedance layers, ground planes, and RF signal routing requirements for minimal loss.

### Step 4: Component Selection Audit
Audit all component selections including the WiFi chipset, RF frontend components, passive components, and antenna specifications for compliance with design requirements.

### Step 5: Bill of Materials (BOM) Verification
Verify complete BOM including part numbers, manufacturers, quantities, and alternative components for supply chain resilience.

### Step 6: Manufacturing Flow Planning
Plan the complete manufacturing flow including SMT assembly, RF testing, shielding installation, and final testing sequences.

### Step 7: Tooling Preparation
Prepare all manufacturing tooling including SMT stencils, pick-and-place programming, test fixtures, and shielding installation tools.

### Step 8: Clean Room Setup
Establish Class 10,000 clean room environment with controlled temperature (22±2°C), humidity (45±5% RH), and ESD protection measures.

### Step 9: Material Receiving Inspection
Inspect all incoming materials including PCBs, components, and shielding cans for quality and compliance with specifications.

### Step 10: PCB Incoming Quality Control
Perform incoming quality control on module PCBs including dimensional checks, surface finish inspection, and electrical continuity testing.

### Step 11: Component Storage Conditioning
Store moisture-sensitive components in dry cabinets with humidity monitoring and perform baking cycles per MSL (Moisture Sensitivity Level) requirements.

### Step 12: Solder Paste Qualification
Qualify solder paste type (SAC305 lead-free alloy), particle size, and storage conditions for RF assembly requirements.

### Step 13: Stencil Design Verification
Verify stencil design including aperture sizes, thickness (typically 100-125μm), and nano-coating for optimal solder paste release.

### Step 14: SMT Line Configuration
Configure SMT assembly line with solder paste printer, pick-and-place machines, reflow oven, and automated optical inspection (AOI) systems.

### Step 15: Reflow Profile Development
Develop precise reflow profile with controlled ramp rates, peak temperature (245-250°C), and time above liquidus for RF component integrity.

### Step 16: Test Equipment Calibration
Calibrate all test equipment including vector network analyzers, spectrum analyzers, power meters, and RF test fixtures to NIST-traceable standards.

### Step 17: Programming Station Setup
Set up programming stations for WiFi chipset firmware, calibration data, and MAC address assignment systems.

### Step 18: ESD Protection Implementation
Implement comprehensive ESD protection including wrist straps, ionizers, conductive flooring, and grounded workstations throughout the facility.

### Step 19: Traceability System Configuration
Configure manufacturing execution system (MES) for complete unit-level traceability including serial numbers and test data logging.

### Step 20: Quality Control Plan Review
Review quality control plan including in-process inspection points, sampling plans, and acceptance criteria for each manufacturing step.

### Step 21: First Article Inspection Preparation
Prepare for first article inspection including measurement equipment, inspection procedures, and documentation requirements.

### Step 22: Supplier Quality Assurance
Conduct supplier quality assurance audits for critical components including WiFi chipsets and RF frontend devices.

### Step 23: Process FMEA Review
Review Failure Mode and Effects Analysis (FMEA) for the assembly process to identify and mitigate potential failure modes.

### Step 24: Operator Training Certification
Certify all operators on RF module assembly procedures, ESD handling, and quality requirements specific to WiFi/Bluetooth modules.

### Step 25: Production Schedule Optimization
Optimize production schedule considering component lead times, batch sizes, and testing capacity for efficient throughput.

## Phase 2: PCB Preparation and SMT Assembly (Steps 26-60)

### Step 26: PCB Pre-Bake Process
Pre-bake module PCBs at 120°C for 4 hours to remove absorbed moisture and prevent popcorning during reflow.

### Step 27: PCB Panel Loading
Load PCB panels into SMT line with proper orientation and fiducial alignment for automated assembly.

### Step 28: Solder Paste Printing
Print solder paste onto PCB pads using precision stencil printer with vision alignment and automated paste height inspection.

### Step 29: Solder Paste Inspection (SPI)
Perform 3D solder paste inspection measuring paste volume, height, and position for all pads with statistical process control.

### Step 30: WiFi Chipset Placement
Place WiFi 6E chipset IC onto PCB with high-precision placement (±25μm accuracy) ensuring proper ball grid array (BGA) alignment.

### Step 31: RF Frontend Component Placement
Place RF frontend components including power amplifiers, low-noise amplifiers, and RF switches with precise positioning for impedance matching.

### Step 32: Matching Network Assembly
Assemble RF matching network components including inductors, capacitors, and transmission line elements for optimal power transfer.

### Step 33: Crystal Oscillator Placement
Place high-precision crystal oscillator for WiFi/Bluetooth timing reference with attention to orientation and grounding.

### Step 34: Power Management IC Placement
Place power management ICs including voltage regulators, DC-DC converters, and LDOs for chipset power delivery.

### Step 35: Passive Component Placement
Place all passive components including resistors, capacitors, and inductors using high-speed pick-and-place machines with vision verification.

### Step 36: Filtering Component Installation
Install filtering components including SAW filters, BAW filters, and duplexers for channel selectivity and interference rejection.

### Step 37: ESD Protection Diode Placement
Place ESD protection diodes on antenna feeds and data lines to protect against electrostatic discharge events.

### Step 38: Connector Assembly
Assemble board-to-board connectors or cable connectors for host interface (typically PCIe or SDIO) with proper alignment.

### Step 39: Pre-Reflow Inspection
Perform automated optical inspection (AOI) before reflow to verify component placement, orientation, and presence.

### Step 40: Reflow Soldering Process
Execute reflow soldering with precision temperature control through preheat, soak, reflow, and cooling zones in nitrogen atmosphere.

### Step 41: Reflow Profile Monitoring
Monitor reflow profile using thermocouple probes to verify time-temperature exposure and prevent component damage.

### Step 42: Post-Reflow Cooling
Control cooling rate after reflow to prevent thermal shock and minimize residual stress in BGA solder joints.

### Step 43: Post-Reflow AOI
Perform post-reflow automated optical inspection to detect solder defects, tombstoning, bridging, and component shift.

### Step 44: X-Ray Inspection of BGAs
Conduct X-ray inspection of WiFi chipset BGA and other hidden solder joints to verify voiding, wetting, and alignment.

### Step 45: Selective Soldering Preparation
Prepare through-hole components or special connectors for selective wave soldering if required by design.

### Step 46: Flux Application for Selective Soldering
Apply flux to selective soldering areas with precision dispensing to ensure proper wetting without contamination.

### Step 47: Selective Wave Soldering
Perform selective wave soldering for through-hole components with controlled temperature, immersion time, and nitrogen atmosphere.

### Step 48: Post-Soldering Cleaning
Clean assembled PCBs using aqueous or semi-aqueous cleaning process to remove flux residues that could affect RF performance.

### Step 49: Cleanliness Verification
Verify PCB cleanliness using ionic contamination testing or ion chromatography to meet IPC-A-610 Class 3 requirements.

### Step 50: Visual Inspection After Cleaning
Perform visual inspection after cleaning to verify component integrity, solder joint quality, and absence of residues.

### Step 51: Rework Station Preparation
Prepare rework stations with BGA rework equipment, hot air stations, and microscopes for defect correction.

### Step 52: Defect Rework Process
Rework any identified defects using controlled heating, component removal, pad cleaning, and component replacement procedures.

### Step 53: Post-Rework Inspection
Inspect reworked areas to verify proper solder joint formation and absence of damage to surrounding components.

### Step 54: Conformal Coating Preparation
Prepare for selective conformal coating application on critical areas to protect against moisture and contamination.

### Step 55: Selective Conformal Coating
Apply selective conformal coating avoiding antenna pads, test points, and connector areas using precision dispensing.

### Step 56: Coating Cure Process
Cure conformal coating using UV or thermal curing process per manufacturer specifications ensuring complete polymerization.

### Step 57: Coating Inspection
Inspect conformal coating for proper coverage, thickness, and absence of defects using UV light and visual inspection.

### Step 58: Panel Depaneling
Separate individual modules from PCB panels using router depaneling or laser cutting with controlled edge quality.

### Step 59: Edge Deburring
Remove burrs from depaneled module edges using tumbling or manual deburring to prevent handling damage and shorts.

### Step 60: Post-Depanel Cleaning
Clean modules after depaneling to remove dust and debris generated during separation process.

## Phase 3: RF Matching and Tuning (Steps 61-90)

### Step 61: RF Test Fixture Preparation
Prepare RF test fixtures with calibrated connectors, impedance-matched transmission lines, and proper grounding for accurate measurements.

### Step 62: Vector Network Analyzer Setup
Set up vector network analyzer (VNA) with appropriate frequency range (2-7 GHz), power levels, and calibration standards.

### Step 63: VNA Calibration Process
Perform full 2-port VNA calibration using SOLT (Short-Open-Load-Thru) standards to de-embed fixture effects and ensure measurement accuracy.

### Step 64: S-Parameter Measurement Setup
Configure S-parameter measurements for return loss, insertion loss, and isolation across WiFi 6E and Bluetooth frequency bands.

### Step 65: 2.4 GHz Path Characterization
Measure S-parameters of 2.4 GHz WiFi/Bluetooth path including return loss (S11), insertion loss (S21), and impedance matching.

### Step 66: 5 GHz Path Characterization
Measure S-parameters of 5 GHz WiFi path across all UNII bands (UNII-1 through UNII-4) for return loss and insertion loss.

### Step 67: 6 GHz Path Characterization
Measure S-parameters of 6 GHz WiFi 6E path (UNII-5 through UNII-8) ensuring proper matching in the new spectrum.

### Step 68: Impedance Matching Analysis
Analyze measured impedance data on Smith chart to identify matching network optimization requirements for each band.

### Step 69: Matching Component Selection
Select optimal matching component values (inductors, capacitors) based on measured data and RF simulation results.

### Step 70: Component Value Database Update
Update matching component value database with optimal values for each frequency band and production lot.

### Step 71: Automated Tuning Algorithm
Execute automated tuning algorithm that selects best matching components from available value sets for each unit.

### Step 72: TX Path Power Measurement
Measure transmit path output power across all channels using calibrated power meter and spectrum analyzer.

### Step 73: RX Path Sensitivity Measurement
Measure receive path sensitivity using signal generator with calibrated output power and bit error rate testing.

### Step 74: TX Power Flatness Optimization
Optimize transmit power flatness across frequency bands by adjusting matching networks and power amplifier settings.

### Step 75: Harmonic Distortion Measurement
Measure harmonic distortion and spurious emissions to ensure compliance with FCC and CE regulatory limits.

### Step 76: Intermodulation Distortion Testing
Test intermodulation distortion (IMD) performance using two-tone testing to characterize linearity of RF frontend.

### Step 77: TX/RX Isolation Measurement
Measure isolation between transmit and receive paths to ensure adequate separation and prevent desensitization.

### Step 78: WiFi/Bluetooth Coexistence Testing
Test coexistence between WiFi and Bluetooth radios measuring interference and isolation between concurrent operations.

### Step 79: Group Delay Measurement
Measure group delay across frequency bands to ensure phase linearity for proper demodulation of OFDM signals.

### Step 80: Frequency Error Calibration
Calibrate frequency error by measuring crystal oscillator frequency and programming correction values into chipset.

### Step 81: TX Power Calibration
Calibrate transmit power levels across all channels storing calibration data in module non-volatile memory.

### Step 82: RX Gain Calibration
Calibrate receive path gain and RSSI (Received Signal Strength Indicator) accuracy across frequency range.

### Step 83: Temperature Compensation Data
Measure RF performance across temperature range (-20°C to +85°C) to generate temperature compensation coefficients.

### Step 84: Antenna Impedance Measurement
Measure antenna impedance at module antenna port verifying 50-ohm match across operational bands.

### Step 85: Antenna VSWR Characterization
Characterize antenna VSWR (Voltage Standing Wave Ratio) ensuring less than 2:1 across all WiFi and Bluetooth bands.

### Step 86: Antenna Efficiency Measurement
Measure antenna radiation efficiency in anechoic chamber or using cavity-based measurement system.

### Step 87: Antenna Pattern Verification
Verify antenna radiation pattern in azimuth and elevation planes ensuring omnidirectional coverage requirements.

### Step 88: Diversity Antenna Tuning
Tune diversity antenna paths if present for MIMO operation ensuring balanced performance across spatial streams.

### Step 89: Production Test Data Logging
Log all RF test data including S-parameters, power levels, and calibration values to manufacturing database with unit serial number.

### Step 90: RF Performance Statistical Analysis
Perform statistical analysis on RF test data to monitor process capability (Cpk) and identify yield improvement opportunities.

## Phase 4: Antenna Integration and Shielding (Steps 91-115)

### Step 91: Antenna Attachment Preparation
Prepare antenna attachment area by cleaning PCB contact pads and verifying proper surface finish.

### Step 92: Antenna Alignment Fixture Setup
Set up precision alignment fixture to ensure accurate antenna positioning relative to RF feed point.

### Step 93: Conductive Adhesive Application
Apply conductive adhesive or solder paste to antenna connection points ensuring proper quantity and placement.

### Step 94: Antenna Component Placement
Place antenna component (ceramic, PCB, or stamped metal) with precision alignment to mounting features.

### Step 95: Antenna Bonding Process
Bond antenna using reflow, hot bar soldering, or adhesive curing process with controlled temperature and pressure.

### Step 96: Antenna Connection Verification
Verify antenna electrical connection using resistance measurement or low-frequency continuity testing.

### Step 97: Post-Antenna RF Testing
Re-test RF parameters after antenna attachment to verify proper impedance matching and return loss.

### Step 98: Antenna Co-Design Verification
Verify antenna performance on module substrate considering ground plane effects and nearby component interactions.

### Step 99: Shielding Can Preparation
Prepare shielding cans (typically tin-plated steel or copper-nickel) for installation over RF circuitry.

### Step 100: Ground Pad Cleaning
Clean PCB ground pads where shielding can will be soldered ensuring proper surface preparation for good electrical contact.

### Step 101: Shielding Can Solder Application
Apply solder paste or flux to shielding can mounting pads using stencil or dispensing method.

### Step 102: Shielding Can Placement
Place shielding can over module RF section with precise alignment to mounting pads and clearance verification.

### Step 103: Shielding Can Reflow
Reflow shielding can using vapor phase, selective reflow, or hot bar soldering ensuring complete solder wetting around perimeter.

### Step 104: Shield Grounding Verification
Verify shielding can grounding using resistance measurement ensuring less than 10 milliohms to ground plane.

### Step 105: Shield Effectiveness Testing
Test shield effectiveness by measuring RF leakage and isolation improvement provided by shielding can.

### Step 106: Compartment Isolation Verification
Verify isolation between shielded compartments if module uses multi-compartment shielding design.

### Step 107: Shield Partition Installation
Install internal shield partitions if required to separate WiFi and Bluetooth sections or different frequency bands.

### Step 108: Thermal Interface Material Application
Apply thermal interface material (TIM) between chipset and shielding can if shield provides heat spreading function.

### Step 109: Shield Vent Design Verification
Verify shield vent design if present ensuring RF containment while allowing air circulation for cooling.

### Step 110: Post-Shield RF Testing
Perform complete RF testing after shield installation to verify performance is maintained or improved with shielding.

### Step 111: EMI/EMC Pre-Screening
Conduct EMI/EMC pre-screening tests to identify potential radiated or conducted emissions issues before final testing.

### Step 112: Shield Modification for Issues
Modify shielding design if pre-screening reveals issues including adding ferrites, changing partition locations, or adjusting grounding.

### Step 113: Label Attachment Area Preparation
Prepare label attachment area on shielding can ensuring clean, flat surface for regulatory and identification labels.

### Step 114: Module Serial Number Programming
Program unique serial number into module non-volatile memory for traceability and warranty management.

### Step 115: Barcode Label Application
Apply barcode label containing serial number, part number, and manufacturing date to module for tracking.

## Phase 5: Functional and Performance Testing (Steps 116-150)

### Step 116: Functional Test Fixture Setup
Set up functional test fixture with host interface connection, power supply, and RF test ports.

### Step 117: Power-On Self-Test Execution
Execute power-on self-test (POST) verifying chipset initialization, memory integrity, and firmware boot sequence.

### Step 118: Firmware Version Verification
Verify correct firmware version is loaded into WiFi chipset and matches requirements for target Mac platform.

### Step 119: Host Interface Testing
Test host interface (PCIe or SDIO) communication including enumeration, data transfer rates, and command/response sequences.

### Step 120: Power Consumption Measurement
Measure power consumption in various operating modes including idle, receive, transmit, and sleep states.

### Step 121: 802.11ax Feature Verification
Verify WiFi 6E features including OFDMA, MU-MIMO, 1024-QAM, TWT (Target Wake Time), and BSS coloring.

### Step 122: 2.4 GHz Band TX Testing
Test 2.4 GHz transmit performance on all channels measuring output power, EVM (Error Vector Magnitude), and spectral mask.

### Step 123: 5 GHz Band TX Testing
Test 5 GHz transmit performance across all UNII bands with channel-by-channel power and modulation accuracy verification.

### Step 124: 6 GHz Band TX Testing
Test 6 GHz WiFi 6E transmit performance on all new 6 GHz channels ensuring compliance with regulatory power limits.

### Step 125: MCS Rate Testing
Test all MCS (Modulation and Coding Scheme) rates from MCS0 through MCS11 verifying EVM and throughput performance.

### Step 126: Channel Bandwidth Testing
Test all supported channel bandwidths (20 MHz, 40 MHz, 80 MHz, 160 MHz) ensuring proper operation and performance.

### Step 127: Spatial Stream Testing
Test MIMO spatial stream configurations (1x1, 2x2, or higher) verifying independent stream operation and combining gain.

### Step 128: Receive Sensitivity Testing
Test receive sensitivity on all channels measuring minimum detectable signal level for each MCS rate.

### Step 129: PER vs. Power Testing
Measure Packet Error Rate (PER) versus input power curves to characterize receiver dynamic range and sensitivity.

### Step 130: Adjacent Channel Rejection
Test adjacent channel rejection capability ensuring receiver can operate with strong interferers in nearby channels.

### Step 131: Bluetooth 5.3 Testing
Test Bluetooth 5.3 functionality including classic Bluetooth and Bluetooth Low Energy (BLE) modes.

### Step 132: Bluetooth TX Power Testing
Measure Bluetooth transmit power ensuring compliance with Class 1 or Class 2 power specifications.

### Step 133: Bluetooth RX Sensitivity Testing
Test Bluetooth receiver sensitivity for both classic and BLE modes across advertising and data channels.

### Step 134: Bluetooth Modulation Testing
Verify Bluetooth modulation characteristics including frequency deviation, symbol timing, and carrier frequency stability.

### Step 135: Bluetooth Coexistence Testing
Test WiFi and Bluetooth coexistence using concurrent traffic scenarios verifying proper time-division multiplexing.

### Step 136: Data Throughput Testing
Measure actual data throughput using IPerf or similar tools across different MCS rates and channel conditions.

### Step 137: Roaming Performance Testing
Test roaming performance including scan time, association time, and seamless handoff between access points.

### Step 138: Security Protocol Testing
Test security protocols including WPA3, WPA2, 802.11w (Protected Management Frames), and encryption throughput.

### Step 139: Power Management Testing
Test power management features including ASPM (Active State Power Management), dynamic power scaling, and wake-on-WLAN.

### Step 140: Thermal Performance Testing
Test module thermal performance under maximum TX power conditions ensuring temperature limits are not exceeded.

### Step 141: Temperature Cycling Test
Perform temperature cycling test operating module through temperature extremes verifying functionality at temperature limits.

### Step 142: Voltage Margining Testing
Test module operation at supply voltage extremes (±10%) ensuring functionality across voltage tolerance range.

### Step 143: Clock Accuracy Verification
Verify crystal oscillator accuracy and stability ensuring frequency error is within ±20 ppm specification.

### Step 144: NVRAM Data Verification
Verify non-volatile memory contains correct calibration data, MAC address, regulatory domain, and configuration parameters.

### Step 145: MAC Address Validation
Validate MAC address format and uniqueness checking against database to prevent duplicate assignments.

### Step 146: Regulatory Domain Setting
Program regulatory domain parameters ensuring module operates only on legal channels for target market (US, EU, Japan, etc.).

### Step 147: Test Data Logging
Log all functional test results to manufacturing database including pass/fail status, measured parameters, and timestamp.

### Step 148: Yield Analysis
Analyze test yield data identifying common failure modes and implementing corrective actions for improvement.

### Step 149: Failed Unit Diagnostics
Perform detailed diagnostics on failed units using debug interfaces and specialized test equipment to determine root cause.

### Step 150: Rework or Scrap Decision
Make rework or scrap decision for failed units based on failure mode analysis and economic rework feasibility.

## Phase 6: Regulatory Compliance Testing (Steps 151-175)

### Step 151: FCC Part 15C Test Setup
Set up FCC Part 15C compliance testing for WiFi 6E including conducted and radiated measurements in authorized test lab.

### Step 152: Conducted Power Measurement
Measure conducted output power on all channels ensuring compliance with FCC power limits including PSD (Power Spectral Density) for 6 GHz.

### Step 153: Occupied Bandwidth Testing
Measure occupied bandwidth ensuring 99% of transmitted power is contained within allowed channel bandwidth per FCC rules.

### Step 154: Power Spectral Density Testing
Measure power spectral density for 6 GHz operation ensuring compliance with -5 dBm/MHz PSD limit for indoor low-power devices.

### Step 155: Spurious Emissions Testing
Measure spurious emissions outside operational bands ensuring compliance with FCC Part 15 emission limits.

### Step 156: Transmitter Spectral Mask
Verify transmitter spectral mask compliance ensuring adequate attenuation in adjacent channels per 802.11ax requirements.

### Step 157: AFC System Verification
Verify Automated Frequency Coordination (AFC) system integration for 6 GHz standard power operation if applicable.

### Step 158: CE RED Compliance Testing
Perform CE Radio Equipment Directive (RED) compliance testing for European market including EN 301.893 and EN 300.328.

### Step 159: ETSI Harmonized Standards
Test against ETSI harmonized standards including transmit power, dynamic frequency selection (DFS), and transmit power control (TPC).

### Step 160: DFS Radar Detection Testing
Test Dynamic Frequency Selection (DFS) radar detection capability ensuring proper channel vacation and non-occupancy periods.

### Step 161: TPC Functionality Testing
Test Transmit Power Control (TPC) functionality ensuring module can reduce power in response to TPC requests.

### Step 162: Japan ARIB Compliance
Test compliance with Japan ARIB STD-T71 and STD-T66 for WiFi operation in Japanese market.

### Step 163: Canada IC RSS Compliance
Test compliance with Canadian Innovation, Science and Economic Development (ISED) RSS standards.

### Step 164: SAR Evaluation Preparation
Prepare for Specific Absorption Rate (SAR) evaluation if module will be used in portable devices near human body.

### Step 165: Bluetooth Regulatory Testing
Perform Bluetooth regulatory testing per FCC Part 15C and CE RED for 2.4 GHz ISM band operation.

### Step 166: Frequency Hopping Verification
Verify Bluetooth frequency hopping sequence randomness and channel utilization per regulatory requirements.

### Step 167: Carrier-to-Interference Testing
Measure carrier-to-interference ratios ensuring adequate protection from adjacent Bluetooth devices.

### Step 168: EMC Radiated Emissions
Test radiated electromagnetic emissions in semi-anechoic chamber per CISPR 32 Class B limits.

### Step 169: EMC Conducted Emissions
Test conducted emissions on power and interface lines ensuring compliance with CISPR 32 limits.

### Step 170: EMC Immunity Testing
Perform immunity testing including ESD, radiated immunity, conducted immunity, and burst immunity per IEC 61000 series.

### Step 171: ESD Immunity Testing
Test electrostatic discharge immunity per IEC 61000-4-2 ensuring module survives contact and air discharge events.

### Step 172: Test Report Generation
Generate comprehensive test reports documenting all regulatory compliance measurements and results.

### Step 173: Certification Filing Preparation
Prepare certification filings including test reports, technical documentation, and application forms for regulatory authorities.

### Step 174: FCC ID Assignment
Obtain FCC ID assignment for module enabling legal sale in United States market.

### Step 175: Declaration of Conformity
Prepare Declaration of Conformity documents for CE marking and other regulatory marks.

## Phase 7: Final Assembly and Quality Assurance (Steps 176-195)

### Step 176: Final Visual Inspection
Perform final visual inspection under magnification checking for workmanship defects, contamination, and component damage.

### Step 177: Dimensional Inspection
Verify module dimensions using calipers or coordinate measuring machine ensuring fit with Mac enclosure design.

### Step 178: Coplanarity Measurement
Measure connector coplanarity and module flatness ensuring proper mating with host PCB without stress.

### Step 179: Final RF Spot Check
Perform final RF spot check on sample units verifying key parameters are within specification.

### Step 180: Final Functional Test
Execute final functional test sequence verifying all features operate correctly after complete assembly.

### Step 181: Burn-In Testing
Perform accelerated life testing (burn-in) on sample units at elevated temperature under operating conditions.

### Step 182: HALT/HASS Testing
Conduct Highly Accelerated Life Testing (HALT) or Highly Accelerated Stress Screening (HASS) on engineering samples.

### Step 183: Reliability Data Analysis
Analyze reliability test data estimating MTTF (Mean Time To Failure) and failure rate for lifetime prediction.

### Step 184: Electrostatic Bag Packaging
Package modules in anti-static bags with desiccant and humidity indicator cards for moisture protection.

### Step 185: Module Tray Loading
Load packaged modules into ESD-safe trays with proper orientation and secure retention features.

### Step 186: Tray Labeling
Apply labels to trays indicating part number, quantity, manufacturing date, and lot number.

### Step 187: Carton Packing
Pack module trays into shipping cartons with cushioning material and seal for protection during transport.

### Step 188: Carton Labeling
Apply shipping labels with customer information, part number, quantity, and handling instructions.

### Step 189: Quality Documentation Package
Compile quality documentation package including Certificate of Conformance, test reports, and traceability data.

### Step 190: Final Quality Audit
Perform final quality audit sampling finished goods verifying packaging, labeling, and documentation accuracy.

### Step 191: Shipping Authorization
Authorize shipping after quality approval and customer acceptance releasing products to logistics.

### Step 192: Inventory Database Update
Update inventory management system with finished goods quantities and locations.

### Step 193: Customer Notification
Notify customer (Apple) of shipment details including quantity, tracking information, and expected delivery date.

### Step 194: Export Documentation
Prepare export documentation including commercial invoice, packing list, and certificate of origin for international shipment.

### Step 195: Continuous Improvement Review
Review manufacturing data identifying opportunities for yield improvement, cost reduction, and process optimization for future production runs.

## Quality Standards and Certifications

This WiFi module assembly process complies with:
- ISO 9001:2015 Quality Management Systems
- IATF 16949 Automotive Quality Standards (for automotive variants)
- IPC-A-610 Class 3 Acceptability of Electronic Assemblies
- IPC J-STD-001 Requirements for Soldered Electrical and Electronic Assemblies
- FCC Part 15C Radio Frequency Devices
- CE RED 2014/53/EU Radio Equipment Directive
- RoHS 2011/65/EU Restriction of Hazardous Substances
- REACH Regulation for chemical substances

## Key Performance Specifications

- WiFi 6E (802.11ax) tri-band operation: 2.4 GHz, 5 GHz, 6 GHz
- Bluetooth 5.3 with LE support
- Maximum PHY rate: 2400 Mbps (160 MHz, 2x2 MIMO)
- Transmit power: up to +20 dBm (adjustable per regulatory domain)
- Receive sensitivity: -92 dBm @ 6 Mbps OFDM
- Operating temperature: -20°C to +85°C
- Module dimensions: 12mm x 16mm x 2.5mm (typical)
- Host interface: PCIe Gen 3 x1 or SDIO 3.0
- Power consumption: <2W typical, <50μW sleep mode
