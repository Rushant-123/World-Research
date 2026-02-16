---
title: "Ambient Light Sensor"
company: "ams OSRAM"
country: "Austria"
selling_price: 0.8
inputs:
  - name: "Silicon Photodiode"
    cost: 0.3
    link: "photodiode"
  - name: "ASIC"
    cost: 0.25
    link: "sensor-asic"
  - name: "IR Filter"
    cost: 0.15
    link: "ir-filter"
  - name: "Package"
    cost: 0.08
    link: "sensor-package"
value_created: 0.02
---

# Ambient Light Sensor Manufacturing Process

## Photodiode Array Design and Fabrication

### Step 1: Silicon Wafer Selection
Select high-purity silicon wafers (>99.9999%) with specific crystal orientation and resistivity for optimal photodiode performance.

### Step 2: Wafer Cleaning
Clean silicon wafers using RCA cleaning process to remove organic contaminants, particles, and native oxide layers.

### Step 3: Initial Oxidation
Grow thin silicon dioxide layer on wafer surface at 1000°C in oxygen atmosphere for isolation purposes.

### Step 4: Photoresist Application
Spin-coat photoresist onto oxidized wafer at 3000 RPM to achieve uniform thickness of 1.5 micrometers.

### Step 5: Soft Bake
Bake photoresist-coated wafer at 95°C for 60 seconds to remove solvents and improve adhesion.

### Step 6: Mask Alignment
Align photomask containing photodiode array pattern with wafer using precision alignment marks and microscopy.

### Step 7: UV Exposure
Expose photoresist through mask using 365nm UV light with precise dose control for pattern transfer.

### Step 8: Post-Exposure Bake
Heat exposed wafer to 110°C for 90 seconds to complete photochemical reactions in resist.

### Step 9: Development
Immerse wafer in developer solution to dissolve exposed photoresist areas, revealing oxide underneath.

### Step 10: Hard Bake
Bake developed pattern at 120°C for 30 minutes to harden remaining photoresist for etch resistance.

### Step 11: Oxide Etching
Etch exposed silicon dioxide using buffered hydrofluoric acid to create windows for ion implantation.

### Step 12: Photoresist Stripping
Remove hardened photoresist using oxygen plasma ashing and wet chemical cleaning processes.

### Step 13: N-Type Implantation
Implant phosphorus ions at 80 keV with dose of 1×10^15 atoms/cm² to create n-type regions.

### Step 14: Drive-In Diffusion
Heat wafer to 1100°C in nitrogen atmosphere to drive implanted dopants deeper and activate them.

### Step 15: P-Type Well Formation
Implant boron ions at 120 keV to create p-type well regions for photodiode junctions.

### Step 16: Annealing
Perform rapid thermal anneal at 1050°C for 30 seconds to repair crystal damage from implantation.

### Step 17: Field Oxide Growth
Grow thick field oxide (500nm) between devices for electrical isolation using wet oxidation.

### Step 18: Gate Oxide Formation
Grow thin gate oxide layer (10nm) for any transistor structures needed in sensor array.

### Step 19: Polysilicon Deposition
Deposit polycrystalline silicon layer using LPCVD at 620°C for gate electrodes and interconnects.

### Step 20: Polysilicon Doping
Dope polysilicon with phosphorus using POCl3 diffusion to reduce resistivity for better conductivity.

### Step 21: Polysilicon Patterning
Pattern and etch polysilicon layer using photolithography and plasma etching to define structures.

### Step 22: Sidewall Spacer Formation
Deposit silicon nitride and anisotropically etch to create spacers on polysilicon gate sidewalls.

### Step 23: Source/Drain Implantation
Implant arsenic for n+ source/drain regions and BF2 for p+ regions in transistor structures.

### Step 24: Contact Metallization Barrier
Deposit titanium layer as barrier between silicon and aluminum for reliable ohmic contacts.

### Step 25: Contact Silicidation
React titanium with silicon at 650°C to form low-resistance titanium silicide at contacts.

### Step 26: Interlayer Dielectric Deposition
Deposit silicon dioxide layer using PECVD as insulator between metal layers and active regions.

### Step 27: Contact Via Patterning
Pattern and etch contact vias through interlayer dielectric to expose contact areas below.

### Step 28: Metal 1 Deposition
Sputter deposit aluminum-copper alloy (0.5% Cu) as first metal layer for interconnections.

### Step 29: Metal 1 Patterning
Pattern and plasma etch Metal 1 to create interconnect wiring between photodiodes and circuitry.

### Step 30: Passivation Layer Deposition
Deposit silicon nitride passivation layer to protect devices from moisture and contamination.

## ASIC Integration

### Step 31: ASIC Wafer Preparation
Prepare separate CMOS wafer with integrated circuits for signal processing and I2C interface.

### Step 32: Analog Front-End Design
Design transimpedance amplifier circuits to convert photodiode current to measurable voltage signals.

### Step 33: ADC Circuit Layout
Layout 16-bit sigma-delta analog-to-digital converter for high-resolution light measurements.

### Step 34: I2C Interface Logic
Design I2C slave interface circuitry with 7-bit addressing and standard/fast mode support.

### Step 35: Register Bank Implementation
Implement configuration and data registers accessible via I2C for sensor control and readout.

### Step 36: Gain Control Circuitry
Design programmable gain amplifier stages with gains from 1x to 128x for wide dynamic range.

### Step 37: Integration Time Control
Implement programmable integration time control from 2.7ms to 711ms for different light conditions.

### Step 38: Interrupt Logic
Design interrupt controller to generate alerts when measurements exceed programmed thresholds.

### Step 39: Power Management Unit
Implement power gating and clock gating for ultra-low power consumption in sleep modes.

### Step 40: Temperature Sensor Integration
Include on-chip temperature sensor for temperature compensation of photodiode characteristics.

### Step 41: ASIC Wafer Fabrication
Fabricate ASIC using 180nm CMOS process with mixed-signal capabilities for analog and digital.

### Step 42: ASIC Testing
Perform wafer-level testing of ASIC functionality including I2C communication and ADC linearity.

### Step 43: ASIC Die Separation
Dice ASIC wafer into individual chips using precision diamond blade dicing saw.

### Step 44: Known Good Die Selection
Select only fully functional ASIC dies based on wafer test results for assembly.

## IR Filter Fabrication

### Step 45: Glass Substrate Selection
Select high-quality optical glass substrate with excellent transmittance in visible spectrum.

### Step 46: Substrate Cleaning
Clean glass substrates using ultrasonic cleaning in detergent, DI water, and isopropanol.

### Step 47: Vacuum Chamber Loading
Load cleaned substrates into vacuum deposition chamber and pump down to <10^-6 torr.

### Step 48: First Dielectric Layer
Deposit titanium dioxide (TiO2) layer as high refractive index material using electron beam evaporation.

### Step 49: Second Dielectric Layer
Deposit silicon dioxide (SiO2) layer as low refractive index material alternating with TiO2.

### Step 50: Multi-Layer Stack Building
Continue alternating TiO2 and SiO2 layers to build interference filter stack (typically 25-35 layers).

### Step 51: Layer Thickness Control
Monitor each layer thickness in-situ using optical monitoring to achieve precise quarter-wave thicknesses.

### Step 52: Filter Annealing
Anneal completed filter stack at 300°C to stabilize layers and improve adhesion between films.

### Step 53: Spectral Testing
Measure spectral transmittance from 300nm to 1100nm to verify IR blocking performance.

### Step 54: Filter Dicing
Dice large filter substrates into individual small filters matching sensor package dimensions.

### Step 55: Edge Cleaning
Clean diced filter edges to remove debris and particles from dicing process.

## Package Assembly

### Step 56: Lead Frame Preparation
Stamp or etch lead frames from copper alloy strip with appropriate plating thickness.

### Step 57: Lead Frame Cleaning
Clean lead frames using alkaline cleaning and DI water rinse to remove oils and oxides.

### Step 58: Die Attach Adhesive Application
Dispense silver-filled epoxy onto lead frame die attach pad with precise volume control.

### Step 59: Photodiode Die Placement
Pick and place photodiode die onto adhesive with sub-micron alignment accuracy using vision system.

### Step 60: Die Attach Cure
Cure die attach adhesive at 175°C for 60 minutes to achieve full polymerization and bond strength.

### Step 61: ASIC Die Placement
Mount ASIC die adjacent to photodiode die on same lead frame using similar die attach process.

### Step 62: Wire Bond Preparation
Plasma clean die surfaces to remove organic contamination for reliable wire bonding.

### Step 63: Photodiode Wire Bonding
Bond 25-micron gold wires from photodiode pads to lead frame using thermosonic ball bonding.

### Step 64: ASIC Wire Bonding
Bond gold wires from ASIC I/O pads to lead frame pins for external connections.

### Step 65: Inter-Die Connection
Bond wires directly between photodiode and ASIC for internal signal connections.

### Step 66: Bond Inspection
Inspect all wire bonds using automated optical inspection for heel cracks and proper ball formation.

### Step 67: IR Filter Adhesive Application
Apply UV-curable optical adhesive to package cavity rim for filter attachment.

### Step 68: IR Filter Placement
Position IR filter precisely over sensor dies with controlled adhesive thickness for optical path.

### Step 69: UV Curing
Expose filter adhesive to UV light for 30 seconds to cure adhesive and secure filter.

### Step 70: Mold Compound Preparation
Mix epoxy mold compound with silica filler and black pigment for package encapsulation.

### Step 71: Transfer Molding
Encapsulate assembled device using transfer molding at 175°C with 6.9 MPa pressure.

### Step 72: Post-Mold Cure
Cure molded packages at 175°C for 4 hours to complete epoxy polymerization.

### Step 73: Deflashing
Remove excess mold compound flash from packages using chemical deflash or media blasting.

### Step 74: Lead Trim and Form
Trim leads from lead frame and form to required shape for surface mount configuration.

### Step 75: Lead Plating
Plate formed leads with tin or tin-lead solder for improved solderability.

## Lux Measurement Calibration

### Step 76: Reference Light Source Setup
Set up NIST-traceable calibrated tungsten halogen lamp as reference illumination source.

### Step 77: Integrating Sphere Configuration
Configure 12-inch integrating sphere with uniform illumination for calibration measurements.

### Step 78: Reference Photometer Placement
Position calibrated reference photometer at measurement port to establish true lux values.

### Step 79: Sensor Test Socket Installation
Install custom test socket at adjacent port for device under test measurement.

### Step 80: Light Level Programming
Program integrating sphere to produce illumination levels from 0.01 to 100,000 lux in steps.

### Step 81: Low Light Calibration
Measure sensor output at low light levels (0.01 to 1 lux) and record ADC counts.

### Step 82: Mid-Range Calibration
Measure sensor response from 1 to 1,000 lux across typical indoor lighting conditions.

### Step 83: High Light Calibration
Measure sensor response from 1,000 to 100,000 lux for outdoor sunlight conditions.

### Step 84: Calibration Coefficient Calculation
Calculate gain and offset coefficients to convert ADC counts to lux values accurately.

### Step 85: Non-Linearity Correction
Characterize and correct for any non-linearity in photodiode and amplifier response curves.

### Step 86: OTP Programming Setup
Connect sensor to one-time programmable memory programming equipment for coefficient storage.

### Step 87: Coefficient Writing
Program calculated calibration coefficients into on-chip OTP memory for permanent storage.

### Step 88: Calibration Verification
Re-measure sensor at multiple light levels to verify calibration accuracy within ±5% specification.

### Step 89: Temperature Compensation
Measure sensor response at -40°C, 25°C, and 85°C to characterize temperature coefficients.

### Step 90: Temperature Coefficient Storage
Program temperature compensation coefficients into OTP memory for automatic correction.

## Human Eye Response Matching

### Step 91: Spectral Response Measurement
Measure sensor spectral response from 380nm to 780nm using monochromator setup.

### Step 92: CIE Photopic Curve Analysis
Compare measured spectral response to CIE 1931 photopic luminosity function standard.

### Step 93: Response Deviation Calculation
Calculate f1' color error metric quantifying deviation from ideal photopic response.

### Step 94: Digital Filter Design
Design digital compensation filter to correct spectral response toward photopic function.

### Step 95: Filter Coefficient Generation
Generate FIR filter coefficients for implementation in ASIC digital signal processing.

### Step 96: ASIC Filter Implementation
Program or permanently configure compensation filter in ASIC signal processing chain.

### Step 97: Multi-Channel Balancing
If using multiple photodiodes, balance their contributions for optimal photopic matching.

### Step 98: UV Sensitivity Verification
Verify sensor has minimal response to UV radiation below 380nm wavelength.

### Step 99: Near-IR Sensitivity Check
Confirm IR filter effectively blocks wavelengths above 780nm with <0.1% transmittance.

### Step 100: CIE Compliance Testing
Test final sensor against various light sources (tungsten, LED, fluorescent) for consistent lux readings.

## IR Rejection Optimization

### Step 101: IR Filter Thickness Verification
Measure IR filter thickness using optical profilometry to verify manufacturing tolerances.

### Step 102: Incandescent Light Testing
Test sensor response to 60W incandescent bulb to verify proper handling of IR content.

### Step 103: LED Light Testing
Test response to various LED sources (2700K-6500K) with minimal IR content for comparison.

### Step 104: Sunlight Simulation
Test sensor under solar simulator with full spectrum including IR to verify rejection.

### Step 105: IR LED Interference Test
Expose sensor to 850nm and 940nm IR LEDs at high power to verify blocking effectiveness.

### Step 106: IR Rejection Ratio Calculation
Calculate ratio of visible to IR sensitivity, target >100:1 rejection in IR wavelengths.

### Step 107: Filter Alignment Verification
Verify IR filter is properly centered over photodiode array for uniform filtering.

### Step 108: Angle of Incidence Testing
Test sensor at various angles (0° to 60°) to verify filter maintains performance off-axis.

### Step 109: Mixed Lighting Testing
Test under mixed lighting (fluorescent + incandescent) for accurate lux measurement consistency.

### Step 110: Remote Control Immunity
Verify sensor ignores pulsed IR from remote controls (38kHz modulated IR) in environment.

## Gain Control Programming

### Step 111: Gain Stage Architecture
Implement four programmable gain stages: 1x, 2x, 8x, and 128x for 18-bit dynamic range.

### Step 112: Auto-Gain Algorithm
Program automatic gain switching algorithm to optimize resolution across full lux range.

### Step 113: Gain Switching Threshold
Set gain switching thresholds to avoid saturation while maintaining maximum resolution.

### Step 114: Hysteresis Implementation
Implement hysteresis in gain switching to prevent oscillation at threshold boundaries.

### Step 115: Gain Change Blanking
Blank output data during gain transitions to avoid reporting transient incorrect values.

### Step 116: Low Light Gain Setting
Configure maximum 128x gain for measurements below 10 lux for optimal sensitivity.

### Step 117: Medium Light Gain Setting
Use 8x gain for typical indoor lighting from 10 to 1,000 lux range.

### Step 118: High Light Gain Setting
Switch to 1x or 2x gain for outdoor conditions above 1,000 lux to prevent saturation.

### Step 119: Manual Gain Override
Implement manual gain control option via I2C registers for special applications.

### Step 120: Gain Linearity Testing
Test linearity of measurements across gain transitions to ensure seamless operation.

## Integration Time Control

### Step 121: Integration Time Options
Program selectable integration times: 2.7ms, 27ms, 101ms, 175ms, 402ms, 711ms options.

### Step 122: Short Integration for Bright Light
Use 2.7ms integration time for bright outdoor conditions to prevent saturation.

### Step 123: Long Integration for Low Light
Use 711ms integration time for very low light conditions for noise reduction.

### Step 124: Auto-Integration Algorithm
Implement automatic integration time adjustment based on signal level optimization.

### Step 125: Integration Time Register
Create I2C-accessible register allowing software control of integration time selection.

### Step 126: Conversion Ready Interrupt
Generate interrupt signal when integration complete and data ready for reading.

### Step 127: Synchronization Mode
Implement synchronized measurement mode where integration starts on I2C command.

### Step 128: Continuous Mode
Implement continuous measurement mode with back-to-back integrations for streaming data.

### Step 129: Power Optimization
Optimize power consumption by adjusting integration time based on required update rate.

### Step 130: Dark Current Compensation
Measure and subtract dark current during each integration for improved accuracy.

## I2C Interface Implementation

### Step 131: I2C Address Configuration
Set default 7-bit I2C slave address to 0x10 with optional alternative address 0x29.

### Step 132: Address Pin Strapping
Implement address selection via external pin level allowing multiple sensors on one bus.

### Step 133: Standard Mode Support
Support I2C standard mode operation at 100 kHz clock frequency with proper timing.

### Step 134: Fast Mode Support
Support I2C fast mode operation at 400 kHz for faster data communication.

### Step 135: Start Condition Detection
Implement logic to detect I2C start condition (SDA falling while SCL high) reliably.

### Step 136: Stop Condition Detection
Implement logic to detect I2C stop condition (SDA rising while SCL high) for transaction end.

### Step 137: Acknowledge Generation
Generate ACK bit after each received byte by pulling SDA low during 9th clock.

### Step 138: NACK Detection
Detect NACK from master (SDA high during 9th clock) to terminate transmission.

### Step 139: Register Address Auto-Increment
Support auto-increment of register address pointer for burst read operations.

### Step 140: Write Protection
Implement write protection on critical registers to prevent accidental misconfiguration.

### Step 141: I2C Timing Verification
Verify all I2C timing parameters (setup, hold, rise time) meet specification at 400 kHz.

### Step 142: Clock Stretching
Implement clock stretching capability to hold SCL low if device needs more processing time.

### Step 143: Bus Arbitration
Implement proper bus arbitration if sensor could be master (not typical for this device).

### Step 144: SMBus Compatibility
Ensure I2C interface is compatible with SMBus protocol used in some PC systems.

### Step 145: I2C Pull-Up Verification
Test with various pull-up resistor values (1k to 10k ohms) for compatibility.

## Register Map Configuration

### Step 146: Control Register Design
Design control register at 0x00 for power mode, gain, and integration time settings.

### Step 147: Configuration Register
Implement configuration register for interrupt modes, polarity, and persistence settings.

### Step 148: Data Registers
Allocate registers 0x14-0x17 for 16-bit lux data in both visible and IR channels.

### Step 149: Threshold Registers
Implement high and low threshold registers for programmable interrupt generation.

### Step 150: Interrupt Status Register
Create status register showing interrupt reasons and data ready flags with read-clear behavior.

### Step 151: Device ID Register
Implement read-only device ID register returning 0x50 for sensor identification.

### Step 152: Manufacturer ID Register
Add manufacturer ID register returning ams OSRAM identification code for verification.

### Step 153: Revision Register
Include silicon revision register for tracking different chip versions in field.

### Step 154: Reserved Register Handling
Ensure reads from reserved register addresses return 0x00 and writes are ignored.

### Step 155: Register Default Values
Program appropriate power-on default values for all configuration registers.

## Interrupt Configuration

### Step 156: Interrupt Pin Configuration
Configure open-drain interrupt output pin compatible with 1.8V to 3.6V logic levels.

### Step 157: Interrupt Threshold Programming
Allow programming of upper and lower lux thresholds for window comparator interrupt.

### Step 158: Interrupt Persistence
Implement persistence counter requiring multiple consecutive threshold crossings before interrupt.

### Step 159: Interrupt Polarity
Make interrupt polarity configurable (active high or active low) via register bit.

### Step 160: Interrupt Mode Selection
Support interrupt modes: every conversion, threshold detection, or disabled via configuration.

### Step 161: Interrupt Latching
Implement latched interrupt that requires explicit clear via I2C register read.

### Step 162: Interrupt Clear Mechanism
Clear interrupt by reading interrupt status register or via special clear command.

### Step 163: Wake-on-Light Feature
Implement interrupt generation from sleep mode when light level changes significantly.

### Step 164: Hysteresis Configuration
Add configurable hysteresis to interrupt thresholds to prevent chattering at boundaries.

### Step 165: Test Mode Interrupt
Provide test mode for generating interrupt on command for system validation.

## Power Management

### Step 166: Active Mode Current
Optimize active mode current consumption to <300 μA during continuous measurements.

### Step 167: Sleep Mode Implementation
Implement deep sleep mode with <1 μA current consumption for battery-powered applications.

### Step 168: Power-On Reset Circuit
Include power-on reset circuit ensuring clean startup with registers in default state.

### Step 169: Brown-Out Detection
Implement brown-out detector preventing operation below minimum supply voltage of 1.7V.

### Step 170: Supply Voltage Range
Verify operation across full supply voltage range from 1.7V to 3.6V without recalibration.

### Step 171: Decoupling Capacitor Requirements
Specify 100nF ceramic capacitor placement close to VDD pin for supply noise filtering.

### Step 172: Sleep Entry Timing
Optimize sleep entry time to <10ms for fast power state transitions.

### Step 173: Wake-Up Timing
Minimize wake-up time from sleep to first valid measurement to <50ms.

### Step 174: Clock Gating
Implement fine-grained clock gating to disable unused circuits for power saving.

### Step 175: Analog Block Shutdown
Completely power down analog circuits in sleep mode to minimize leakage current.

## System Integration Testing

### Step 176: Mac Display Integration
Test sensor with macOS brightness control daemon for proper communication and response.

### Step 177: Brightness Response Curve
Verify display brightness follows appropriate logarithmic curve matching human perception.

### Step 178: Response Time Testing
Measure and optimize sensor response time to <200ms for smooth brightness transitions.

### Step 179: Glare Immunity
Test sensor placement to minimize false readings from screen reflection or direct glare.

### Step 180: Ambient Light Mapping
Characterize relationship between sensor lux reading and optimal display brightness setting.

### Step 181: Multi-Display Synchronization
Test correct operation when multiple displays each have their own ambient light sensors.

### Step 182: I2C Bus Sharing
Verify sensor operates correctly sharing I2C bus with other system sensors and peripherals.

### Step 183: SMC Integration
Test integration with System Management Controller (SMC) on Mac hardware platform.

### Step 184: macOS Sensor Framework
Verify compatibility with macOS IOKit sensor drivers and CoreBrightness framework.

### Step 185: Lid Angle Compensation
Implement compensation algorithm considering laptop lid angle affecting sensor orientation.

## Quality Assurance and Final Testing

### Step 186: Electrostatic Discharge Testing
Test sensor to meet ±2kV HBM and ±200V CDM ESD specifications on all pins.

### Step 187: Electromagnetic Compatibility
Verify sensor meets FCC and CE EMC requirements for conducted and radiated emissions.

### Step 188: Reliability Stress Testing
Perform HTOL (High Temperature Operating Life) testing at 125°C for 1000 hours.

### Step 189: Moisture Sensitivity Level
Test and classify package moisture sensitivity level for proper handling during assembly.

### Step 190: Drop and Shock Testing
Subject packaged sensors to drop and shock tests per JEDEC standards for reliability.

### Step 191: Lead-Free RoHS Compliance
Verify all materials meet RoHS and REACH regulations for hazardous substances.

### Step 192: Optical Window Durability
Test IR filter window for scratch resistance and transmittance stability over lifetime.

### Step 193: Long-Term Stability
Verify sensor calibration remains stable within ±5% over 10 years of operation.

### Step 194: Tape and Reel Packaging
Package tested sensors in tape and reel format per EIA-481 standard for automated assembly.

### Step 195: Final Shipment Inspection
Perform final visual inspection and electrical testing before shipment to customers.
