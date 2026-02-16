---
title: "Network Interface Card"
company: "Intel/Broadcom"
country: "USA"
selling_price: 45.0
inputs:
  - name: "Network ASIC"
    cost: 15.0
    link: "network-asic"
  - name: "PCB Board"
    cost: 6.0
    link: "printed-circuit-board"
  - name: "RJ45 Connector"
    cost: 2.0
    link: "connector-assembly"
  - name: "LED Indicators"
    cost: 1.0
    link: "backlight-leds"
  - name: "Metal Bracket"
    cost: 2.0
    link: "metal-brackets"
  - name: "Assembly Labor"
    cost: 4.0
    link: "assembly-labor"
value_created: 15.0
---

# Manufacturing Process for Network Interface Card

## PCB Fabrication and Preparation

1. Receive 6-layer FR-4 PCB substrate with controlled impedance specification of 50 ohms for differential pairs and 75 ohms for single-ended traces, thickness 1.6mm.

2. Inspect PCB for copper thickness uniformity using X-ray fluorescence spectroscopy, verifying 1oz copper weight on outer layers and 0.5oz on inner layers.

3. Verify PCB dimensional accuracy using optical coordinate measuring machine, checking length 120.02mm ±0.1mm and width 68.9mm ±0.1mm for PCIe standard compliance.

4. Test impedance control using time domain reflectometry on designated test coupons, ensuring all high-speed differential pairs meet 100 ohm ±10% specification.

5. Clean PCB surfaces in automated aqueous cleaning system with deionized water at 60°C for 8 minutes to remove manufacturing residues and oxidation.

6. Apply solder mask inspection using automated optical inspection system, verifying no bridging, voids, or contamination on 1,247 component pads.

7. Measure PCB flatness using laser profilometry, confirming warpage less than 0.7mm across entire board surface for reliable component placement.

8. Verify via reliability through cross-sectional microscopy of sample boards, checking for minimum 25μm copper plating thickness in through-holes.

9. Conduct electrical continuity testing on all 892 nets using flying probe tester, identifying any open circuits or short circuits before assembly.

10. Bake PCB in convection oven at 125°C for 4 hours to remove moisture absorption, reducing risk of delamination during reflow soldering.

## Solder Paste Application

11. Program stencil printer with board-specific parameters: 0.125mm thick laser-cut stainless steel stencil with electropolished apertures for 0402 components.

12. Align PCB to stencil using fiducial marks with optical vision system achieving ±25μm positioning accuracy.

13. Apply no-clean SAC305 solder paste (96.5% tin, 3.0% silver, 0.5% copper) using metal squeegee at 45° angle with 2.5kg downward pressure.

14. Verify solder paste deposit volume using 3D solder paste inspection system, checking 127 critical pads meet 80-120% target volume specification.

15. Inspect paste print quality for bridging between fine-pitch pads on 0.5mm pitch network ASIC footprint using 50x magnification.

16. Measure paste height uniformity across board, confirming 100-125μm thickness with less than 15μm variation for optimal component standoff.

## Surface Mount Component Placement

17. Load component feeders into high-speed pick-and-place machine: 147 unique component types including resistors, capacitors, inductors, and ICs.

18. Calibrate machine vision system using known-good reference board, achieving component placement accuracy of ±40μm at 3-sigma.

19. Place 0402 size SMD resistors (24 pieces) for termination networks, applying 150-200 gram placement force to ensure proper paste wetting.

20. Mount 0402 size MLCC capacitors (38 pieces) for power supply decoupling with X7R dielectric, positioned within 3mm of network ASIC power pins.

21. Install 0603 size ferrite beads (8 pieces) on power rails for high-frequency noise suppression above 100MHz.

22. Place network ASIC controller chip (256-pin BGA, 17x17mm body) using precision vacuum nozzle, aligning to ±30μm tolerance using corner fiducials.

23. Verify ASIC placement using post-placement inspection camera system, checking for component shift, tilt (max 5°), or rotation (max 3°) errors.

24. Mount Ethernet PHY transceiver chip (64-pin QFN package) with exposed thermal pad, ensuring complete paste coverage on 9x9mm thermal pad.

25. Place serial EEPROM memory chip (8-pin SOIC) for MAC address and configuration storage, oriented per polarity markings.

26. Install 25MHz crystal oscillator (4-pad SMD package) for PHY clock generation, positioning within 10mm of PHY chip to minimize trace length.

27. Mount voltage regulator ICs (3 pieces) for generating 1.0V core, 1.8V I/O, and 3.3V analog supply rails from 12V PCIe input.

28. Place TVS diode arrays (8 channels) near RJ45 connector for ESD protection, rated for ±15kV contact discharge per IEC 61000-4-2.

29. Install common-mode chokes (4 pieces) in differential signal paths for EMI suppression without affecting signal integrity.

30. Mount LED driver ICs (2 pieces) for link/activity indicators with programmable current settings from 2-20mA.

31. Place precision 1% tolerance resistors (12 pieces) for current sensing and voltage reference circuits requiring ±0.5% accuracy.

32. Install high-Q inductors (6 pieces) for power supply filtering, rated for 3A saturation current with DCR less than 50mΩ.

33. Mount tantalum capacitors (4 pieces, 22μF each) for bulk power supply decoupling, voltage rated at 16V with 20% tolerance.

34. Verify all 147 components placed using automated optical inspection with algorithmic pattern matching, achieving 99.8% defect detection rate.

## Reflow Soldering Process

35. Program 10-zone reflow oven with SAC305-specific temperature profile: preheat 150-180°C for 90 seconds, soak 180-200°C for 60 seconds.

36. Set peak reflow temperature to 245°C ±5°C with dwell time above 230°C for 40-60 seconds to ensure complete solder melting.

37. Transport PCB through reflow oven on mesh conveyor belt at 1.2 meters per minute, maintaining nitrogen atmosphere below 500ppm oxygen.

38. Monitor reflow profile using attached thermocouple on test board, recording temperature at 8 locations including under BGA and QFN packages.

39. Control cooling rate at 2-3°C per second to minimize thermal stress and prevent solder joint cracking or component damage.

40. Extract board from oven at 50°C exit temperature, allowing controlled ambient cooling to room temperature over 5 minutes.

41. Inspect solder joints using automated X-ray inspection system with 5μm resolution, examining all 256 BGA balls on network ASIC for voids and bridging.

42. Verify QFN thermal pad solder coverage achieving minimum 80% voiding specification using X-ray void analysis software.

43. Conduct automated optical inspection of all solder fillets, detecting tombstoning, insufficient solder, bridging, or missing components.

44. Perform visual inspection under 10x magnification of critical solder joints on fine-pitch components, checking for solder balling or flux residue.

## Through-Hole Component Installation

45. Insert RJ45 modular jack connector with integrated magnetics (8-position, shielded) into PCB through-holes with 0.3mm pin diameter.

46. Verify connector seating height of 13.2mm ±0.2mm from PCB surface using go/no-go gauge to ensure proper panel mounting clearance.

47. Apply selective wave soldering to RJ45 connector pins using SAC305 solder at 260°C with nitrogen atmosphere and flux spray pre-treatment.

48. Inspect wave solder joints for complete barrel fill and proper fillet formation on all 20 connector pins plus 4 shield ground tabs.

49. Install metal shield can over network ASIC area using automated press with 15kg force, securing spring tabs into PCB slots for EMI containment.

50. Solder shield can tabs using localized hot bar soldering at 320°C for 3 seconds, achieving gas-tight seal around ASIC perimeter.

51. Mount metal PCIe bracket using two M2.5 screws torqued to 0.4 N⋅m, positioning bracket flush with PCB edge for slot alignment.

52. Install LED light pipes (2 pieces, amber and green) into panel cutouts on metal bracket, ensuring proper seating and optical alignment.

## Network ASIC Programming and Configuration

53. Connect card to programming station via JTAG interface using spring-loaded pogo pins contacting test pads on PCB.

54. Verify JTAG chain integrity by reading IDCODE register from network ASIC, confirming correct device identification.

55. Erase factory-default ASIC configuration using bulk erase command, preparing flash memory for custom firmware.

56. Program network controller firmware version 3.2.14 (2.4MB binary image) into internal flash memory at 1MHz JTAG clock frequency.

57. Verify firmware programming by reading back entire memory contents and computing CRC32 checksum matching golden reference.

58. Configure ASIC registers for Gigabit Ethernet operation: auto-negotiation enabled, full-duplex mode, flow control supported.

59. Set PCIe configuration parameters: Gen2 x1 operation, 5.0 GT/s signaling rate, 128-byte maximum read request size.

60. Program power management settings: PCIe ASPM L0s and L1 states enabled, 10μs L0s exit latency, 64μs L1 exit latency.

61. Configure interrupt handling: MSI-X enabled with 4 interrupt vectors for transmit, receive, link status, and error conditions.

62. Set MAC address from organizationally unique identifier assigned to manufacturer, programming into ASIC internal registers.

63. Verify MAC address readback through software register access, confirming correct 48-bit value stored in non-volatile memory.

64. Configure VLAN tagging support: 802.1Q hardware offload enabled, 4096 VLAN ID filter table programmed.

65. Set receive filter parameters: perfect match for programmed MAC address, multicast hash table size 4096 entries.

66. Program transmit queue priorities: 8 hardware queues supporting strict priority and weighted round-robin arbitration.

67. Configure checksum offload capabilities: IPv4/IPv6 header checksum, TCP/UDP checksum calculation offloaded to hardware.

68. Set jumbo frame support: maximum transmission unit 9018 bytes including VLAN tags and CRC.

## Serial EEPROM Programming

69. Connect external I2C programmer to EEPROM using test point contacts on PCB, operating at 100kHz clock frequency.

70. Read EEPROM device identification byte confirming 24C64 type with 8KB capacity organized as 256 pages of 32 bytes.

71. Erase EEPROM contents by writing 0xFF to all 8192 bytes, preparing memory for configuration data storage.

72. Program PCIe configuration space parameters: vendor ID 0x8086 (Intel), device ID 0x15B8, subsystem vendor and device IDs.

73. Write MAC address into EEPROM offset 0x0000-0x0005, storing unique 48-bit hardware address assigned during manufacturing.

74. Program EEPROM with PHY configuration parameters: MDI/MDI-X auto-crossover enabled, energy-efficient Ethernet (EEE) settings.

75. Store wake-on-LAN configuration: magic packet detection enabled, link status change wake enabled, flexible filter patterns.

76. Write checksum value at EEPROM end address to validate configuration data integrity during boot process.

77. Verify EEPROM programming by reading back entire contents and comparing against expected binary image byte-by-byte.

78. Test EEPROM retention by power cycling card 10 times and verifying MAC address and configuration remain stable.

## PHY Chip Configuration

79. Establish MDIO management interface connection from network ASIC to PHY chip, configuring 2.5MHz MDC clock frequency.

80. Read PHY chip identifier registers (offset 0x02 and 0x03) confirming correct Broadcom BCM5461 device detection.

81. Issue soft reset command to PHY via MDIO register 0x00 bit 15, waiting 100ms for reset completion.

82. Configure PHY for Gigabit Ethernet operation: 1000BASE-T full-duplex, auto-negotiation enabled, master/slave auto-config.

83. Set PHY advertised capabilities: 10BASE-T half/full, 100BASE-TX half/full, 1000BASE-T full-duplex only.

84. Enable auto-MDI/MDI-X crossover detection to automatically detect and correct cable wiring without manual configuration.

85. Configure energy-efficient Ethernet (EEE) for 802.3az low power idle: 1.6μs Tw_sys wake time, 4.48μs minimum LPI interval.

86. Set PHY LED behavior: LED0 for link status (solid when linked), LED1 for activity (blink on transmit/receive traffic).

87. Program LED blink rate to 84ms on/off period for activity indication visible to human eye but not distracting.

88. Configure cable diagnostic features: TDR (time domain reflectometry) for cable length and fault detection.

89. Set PHY loopback modes for manufacturing test: near-end digital loopback, far-end analog loopback capabilities.

90. Program interrupt mask registers to generate hardware interrupt on link status change or auto-negotiation completion.

91. Verify PHY register programming by reading back all configured values and comparing against expected settings.

## Transformer and Magnetics Integration

92. Verify integrated magnetics transformer inside RJ45 connector: 1:1 turns ratio, 350μH ±20% inductance per winding.

93. Measure transformer primary-to-secondary isolation resistance using megohmmeter, confirming >100MΩ at 500V DC test voltage.

94. Test transformer insertion loss at 100MHz using network analyzer, verifying <1.0dB loss for minimal signal attenuation.

95. Measure common-mode rejection ratio of transformer at 100MHz, achieving >40dB suppression of noise on differential pairs.

96. Verify transformer center-tap connection to chassis ground through 75Ω resistor and 1000pF capacitor for EMI filtering.

97. Test transformer impulse withstand capability using 1.2/50μs voltage pulse per IEEE 802.3, surviving 1500V without breakdown.

98. Measure transformer coupling capacitance between primary and secondary windings, confirming <50pF for proper isolation.

99. Verify integrated TVS diode protection inside RJ45 connector: 6V clamping voltage at 1A surge current per IEC 61000-4-5.

100. Test Bob Smith termination network connecting transformer center-taps to chassis ground: 75Ω resistor in parallel with 1000pF capacitor.

## Signal Integrity Testing

101. Connect card to high-speed oscilloscope via SMA test points on PCB, probing differential transmit signal pairs (TD+/TD-).

102. Measure transmit eye diagram at 1.25 Gbaud (Gigabit Ethernet line rate) using 20 GHz oscilloscope with 80 GS/s sampling.

103. Verify eye height exceeds 400mV differential peak-to-peak per IEEE 802.3 template, with less than 100mV noise margin intrusion.

104. Measure eye width exceeds 0.5 UI (unit interval) at 10^-12 bit error rate crossing point using statistical eye analysis.

105. Test transmit jitter using phase noise analysis: total jitter <0.35 UI at 10^-12 BER, random jitter <15ps RMS.

106. Measure deterministic jitter components: duty cycle distortion <0.05 UI, intersymbol interference <0.10 UI peak-to-peak.

107. Verify transmit rise/fall time between 3-5 nanoseconds measured at 20%-80% amplitude points on differential waveform.

108. Test differential-to-common mode conversion <-30dB across 1MHz-100MHz frequency range using vector network analyzer.

109. Measure transmit signal return loss >10dB at all frequencies up to 625MHz (half Nyquist frequency) using TDR instrument.

110. Probe receive signal path at PHY input pins, measuring input sensitivity <15mV differential amplitude at 10^-10 BER.

111. Verify receive equalization compensates for cable insertion loss: proper eye opening maintained with 100m Cat5e cable.

112. Test PCIe interface signal integrity: transmit eye diagram at 5.0 GT/s meets PCIe Gen2 electrical specifications.

113. Measure PCIe differential impedance 85Ω ±15% using TDR, verifying controlled impedance routing on PCB.

114. Verify PCIe transmit de-emphasis setting -3.5dB at half Nyquist frequency to compensate for channel loss.

## Performance Validation Testing

115. Install card into PCIe Gen2 x1 slot in test motherboard system with Intel Core i7 processor and 16GB RAM.

116. Boot system and verify PCIe link training completes successfully, establishing 5.0 GT/s Gen2 speed operation.

117. Load network interface driver software version 25.3.0 compatible with Windows 11 and Linux kernel 5.15 operating systems.

118. Verify device enumeration in operating system: correct vendor/device ID, interrupt assignment, memory-mapped I/O base address.

119. Connect card to Gigabit Ethernet switch using Cat6 cable, verifying link LED illuminates indicating successful link establishment.

120. Run auto-negotiation test confirming card and switch partner agree on 1000BASE-T full-duplex operation within 3 seconds.

121. Measure transmit throughput using iperf3 network testing tool: achieve >940 Mbps TCP throughput with default settings.

122. Test receive throughput with multiple parallel TCP streams: verify >950 Mbps aggregate throughput utilizing full Gigabit bandwidth.

123. Measure UDP throughput at maximum line rate: achieve 1000 Mbps (wire speed) with <0.01% packet loss.

124. Verify jumbo frame support by transmitting 9000-byte frames at full line rate without errors or fragmentation.

125. Test VLAN tagging functionality: verify proper insertion/removal of 802.1Q tags with no throughput impact.

126. Measure TCP/UDP checksum offload performance: CPU utilization reduced by 15% compared to software checksum calculation.

127. Verify interrupt coalescing reduces interrupt rate to <8000 interrupts/sec at full Gigabit throughput, lowering CPU overhead.

128. Test multiple transmit queue operation: verify proper traffic prioritization using strict priority scheduling algorithm.

129. Measure latency using precision timestamp hardware: achieve <5μs transmit latency from application buffer to wire.

130. Verify receive-side scaling (RSS) distributes incoming packets across 4 CPU cores for improved multiprocessor performance.

## Thermal Testing

131. Install card in thermal chamber at 25°C ambient temperature, operating at maximum throughput for steady-state thermal measurement.

132. Attach thermocouples to network ASIC package surface, PHY chip, voltage regulators, and RJ45 connector body.

133. Run bidirectional Gigabit traffic for 30 minutes until thermal equilibrium reached with all temperatures stable ±1°C.

134. Measure network ASIC temperature 62°C at case, verifying <85°C maximum junction temperature specification with margin.

135. Record PHY chip temperature 58°C, confirming adequate cooling without requiring heatsink or forced airflow.

136. Monitor voltage regulator temperatures: 1.0V core regulator 71°C, 1.8V I/O regulator 54°C, 3.3V analog regulator 49°C.

137. Measure RJ45 connector temperature 41°C, ensuring safe touch temperature <60°C per UL requirements.

138. Increase chamber temperature to 55°C simulating worst-case server room environment, continuing full throughput operation.

139. Verify all component temperatures remain within absolute maximum ratings: ASIC junction <110°C, PHY <100°C, regulators <125°C.

140. Test thermal shutdown protection by gradually increasing ambient temperature until ASIC thermal sensor triggers throttling at 95°C junction.

141. Verify proper thermal recovery: card resumes full operation when junction temperature drops below 85°C hysteresis point.

142. Run thermal cycling test: -40°C to +85°C, 100 cycles, 30-minute dwell per extreme, verifying no solder joint failures.

143. Inspect card after thermal cycling using X-ray inspection, confirming no BGA ball cracking or QFN pad delamination.

## MAC Address Programming Verification

144. Read MAC address from EEPROM via I2C interface, confirming 48-bit address matches manufacturing database assignment.

145. Verify MAC address OUI (organizationally unique identifier) first 3 bytes 0x00-0x1B-0x21 match Intel allocation.

146. Test MAC address uniqueness by comparing against production database ensuring no duplicate addresses assigned.

147. Verify network ASIC loads MAC address from EEPROM during initialization without requiring driver software intervention.

148. Program MAC address into device firmware in two locations (primary and backup) for redundancy.

149. Test MAC address filtering: verify card receives frames addressed to programmed unicast MAC and broadcast address FF:FF:FF:FF:FF:FF.

150. Configure multicast address filtering: program sample IPv6 multicast address and verify reception of matching frames.

151. Test promiscuous mode operation: verify card receives all frames regardless of destination MAC when mode enabled.

152. Verify MAC address reported correctly through driver software to operating system network stack configuration.

## Firmware Flashing and Boot Testing

153. Connect JTAG debugger to card and halt network ASIC processor core for firmware update procedure.

154. Erase bootloader region in flash memory (128KB starting at 0x00000000) preparing for new bootloader version.

155. Program primary bootloader code into flash memory, implementing initial hardware configuration and firmware validation.

156. Write firmware image header containing version number, build timestamp, CRC32 checksum, and digital signature.

157. Program main firmware application code (2.1MB) into flash starting at offset 0x20000, including network protocol stack.

158. Program backup firmware copy into secondary flash partition at offset 0x400000 for automatic failover capability.

159. Write firmware configuration data including default register settings, capability flags, and feature enable bits.

160. Calculate SHA-256 cryptographic hash of firmware image and store in flash for boot-time integrity verification.

161. Program firmware version string into human-readable ASCII format for driver software and diagnostic tool reporting.

162. Release ASIC processor from halt state and monitor UART console output during firmware boot sequence.

163. Verify bootloader executes POST (power-on self-test) checking DRAM, flash memory, PCIe interface, and PHY chip.

164. Confirm firmware validates digital signature using public key certificate, ensuring only authenticated firmware executes.

165. Monitor firmware initialization sequence: PHY reset, register configuration, DMA engine setup, interrupt controller programming.

166. Verify firmware detects PCIe link width and speed, reporting Gen2 x1 operation through management registers.

167. Test firmware watchdog timer functionality: verify automatic reset if firmware hangs or becomes unresponsive.

168. Confirm firmware loads and applies configuration from EEPROM: MAC address, PCIe settings, power management parameters.

## EMI Compliance Testing

169. Place card in GTEM (gigahertz transverse electromagnetic) cell for radiated emissions testing per FCC Part 15 Class B.

170. Operate card at maximum throughput while measuring radiated emissions from 30 MHz to 6 GHz using spectrum analyzer.

171. Verify radiated emissions <40 dBμV/m at 3m distance for frequencies 30-88 MHz, meeting FCC Class B quasi-peak limits.

172. Confirm emissions <46 dBμV/m for 88-216 MHz and <54 dBμV/m for 216 MHz-6 GHz frequency ranges.

173. Test conducted emissions on 12V power input using LISN (line impedance stabilization network) from 150 kHz to 30 MHz.

174. Verify conducted emissions <56 dBμV quasi-peak and <46 dBμV average for 0.15-0.5 MHz range per CISPR 22 Class B.

175. Confirm conducted emissions <60 dBμV quasi-peak and <50 dBμV average for 0.5-30 MHz frequency range.

176. Perform ESD immunity testing: apply ±8kV contact discharge and ±15kV air discharge per IEC 61000-4-2 Level 4.

177. Verify card continues operation without errors or link loss during ESD stress applied to RJ45 connector shield.

178. Test radiated RF immunity: expose card to 10V/m field strength from 80 MHz to 6 GHz modulated at 80% AM 1kHz.

179. Confirm card maintains Gigabit link and error-free packet transmission during RF immunity test per IEC 61000-4-3.

180. Apply electrical fast transient burst: ±2kV pulses at 5kHz repetition rate per IEC 61000-4-4 on power and data lines.

181. Verify card recovers from transient burst within 3 seconds without requiring system reboot or manual intervention.

182. Test surge immunity: apply 1kV line-to-line and 2kV line-to-ground surge per IEC 61000-4-5 on RJ45 data pairs.

183. Confirm TVS protection clamps surge voltage below 10V at ASIC pins, preventing damage to sensitive circuitry.

## Cable Compatibility Testing

184. Test card operation with Cat5e cable at maximum 100-meter length, verifying Gigabit link establishment and error-free operation.

185. Measure bit error rate <10^-12 over 24-hour continuous operation period with Cat5e cable at full throughput.

186. Test with Cat6 cable: verify proper operation at 1000BASE-T with improved margin on eye diagram measurements.

187. Connect to Cat6A cable: confirm backward compatibility maintaining Gigabit operation despite cable designed for 10GBASE-T.

188. Test MDI/MDI-X auto-crossover with straight-through and crossover cables, verifying link establishment regardless of cable type.

189. Apply cable diagnostics using TDR feature: measure cable length 87 meters with ±5 meter accuracy.

190. Inject cable faults (open circuit at 25m) and verify TDR diagnostic correctly reports fault type and location.

191. Test with shielded Cat6A cable: verify EMI emissions further reduced by 6-10dB compared to unshielded cable.

192. Connect card to PoE+ (Power over Ethernet) switch and verify card operation not affected by 54V DC power on unused pairs.

## Final Assembly and Inspection

193. Apply conformal coating to PCB bottom side using selective spray coating, protecting solder joints from moisture and contamination while avoiding connector contacts.

194. Mount metal PCIe bracket to card using two M2.5 screws torqued to 0.4 N⋅m with threadlocker applied, verifying bracket alignment flush with PCB edge for proper slot insertion.

195. Perform final visual inspection under magnification: verify component placement, solder joint quality, no foreign material, connector alignment, LED light pipe installation, and apply serialized QR code label containing MAC address, manufacturing date, and test status for traceability.
