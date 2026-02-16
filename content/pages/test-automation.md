---
title: "Test Automation Software"
company: "National Instruments"
country: "United States"
selling_price: 10.0
inputs:
  - name: "Software Engineers"
    cost: 2.5
    link: "software-developers"
  - name: "LabVIEW Platform"
    cost: 1.0
    link: "software-licenses"
  - name: "Test Executive"
    cost: 1.0
    link: "software-licenses"
  - name: "Instrument Drivers"
    cost: 0.5
    link: "software-developers"
  - name: "Database"
    cost: 0.5
    link: "database-server"
  - name: "CI/CD"
    cost: 0.3
    link: "ci-cd-systems"
value_created: 4.2
---

## Requirements Analysis Phase

1. Meet with test engineering team to define Device Under Test (DUT) specifications and test coverage requirements for production validation
2. Document electrical, mechanical, and functional test parameters with acceptance criteria based on design specifications and industry standards
3. Analyze product datasheet to extract critical performance metrics: voltage ranges, current limits, timing specifications, and environmental conditions
4. Review failure modes and effects analysis (FMEA) to prioritize critical test points and identify potential defect escape scenarios
5. Define test throughput requirements: target 120-300 DUTs per hour depending on complexity, with cycle time targets of 12-30 seconds per unit
6. Establish measurement uncertainty budgets for each test parameter, targeting 10:1 test-to-tolerance ratios for production testing (4:1 minimum acceptable)
7. Identify required test equipment: digital multimeters (±0.015% accuracy), oscilloscopes (500 MHz bandwidth), power supplies (±0.02% regulation), function generators
8. Document data logging requirements: test results, environmental conditions, calibration status, operator ID, serial numbers, timestamp resolution to milliseconds
9. Create test specification document detailing pass/fail limits, guard bands (typically 10-20% tighter than product specs), and measurement methods
10. Define regulatory compliance requirements: safety testing (IEC 61010), EMC testing (FCC Part 15, CE marking), environmental standards

## Test Architecture Design

11. Design modular test framework with separation of concerns: test sequencing, instrument control, data management, user interface, reporting
12. Create instrument abstraction layer to decouple test logic from hardware-specific drivers, enabling equipment substitution without sequence changes
13. Define test station architecture: single DUT sequential testing vs. parallel multi-DUT testing (2-16 sites typical for high-volume production)
14. Design DUT interface fixture specifications: pogo pin contact resistance <50 mΩ, mechanical alignment ±0.1mm, pneumatic actuation for consistent contact force
15. Establish software architecture: TestStand sequence engine, LabVIEW instrument drivers, .NET data management, web-based reporting dashboard
16. Create calibration tracking system integrated with test software: automatic checks before testing, calibration due date warnings, out-of-cal lockout
17. Design test limits database schema: parametric limits by product model, revision, and test station, with engineering change order (ECO) traceability
18. Implement version control strategy: Git repositories for all test code, branching strategy for development/validation/production releases
19. Define test result data schema: JSON or XML format with test sequence hierarchy, individual step results, raw measurements, timestamps
20. Design fail mode categorization system: electrical opens/shorts, parametric failures, functional failures, communication errors, fixture issues

## LabVIEW Driver Development

21. Install NI-VISA for instrument communication via GPIB, USB, Ethernet, serial interfaces with standardized API for all instrument types
22. Develop LabVIEW instrument driver for digital multimeter with functions: DC voltage/current measurement, resistance, continuity, frequency
23. Implement SCPI command parsing and response validation with error checking: query error queue, verify command completion, timeout handling (5s typical)
24. Create power supply driver VI with functions: voltage/current programming, output enable/disable, OVP/OCP settings, measurement readback verification
25. Develop oscilloscope driver for waveform capture: timebase setup, trigger configuration, acquisition control, waveform transfer and analysis
26. Implement function generator driver: sine/square/ramp waveform generation, frequency/amplitude/offset control, burst and sweep modes
27. Create digital I/O driver for relay control, DUT power switching, and status indication using NI DAQ hardware (USB-6501 or PXI digital modules)
28. Develop temperature chamber driver for environmental testing: setpoint programming, ramp rate control, stability monitoring (±0.5°C), door interlock
29. Implement barcode scanner driver for serial number capture: USB HID interface, data validation (checksum verification), duplicate serial number detection
30. Create calibration verification VI: automated self-test routines, comparison to known reference standards, uncertainty calculation, pass/fail determination

## Instrument Abstraction Layer

31. Design hardware abstraction layer (HAL) interface class defining standard methods: Initialize, Configure, Measure, Close, GetError, Reset
32. Implement factory pattern for instrument instantiation: runtime selection of specific instrument based on configuration file without code changes
33. Create instrument simulation mode for development and debugging: generates realistic measurement data with configurable noise and drift
34. Develop instrument resource manager: connection pooling, exclusive access control, automatic reconnection on communication errors, timeout management
35. Implement measurement caching mechanism: reduce redundant instrument queries, configurable cache expiration (100-500ms typical), invalidation on configuration changes
36. Create standardized error handling: instrument-specific error codes mapped to common test failure categories, error logging with full context
37. Develop instrument capability discovery: query instrument options and features at runtime, adapt test sequence based on available capabilities
38. Implement measurement units management: automatic unit conversion (V to mV, A to µA), dimensional analysis validation, display formatting
39. Create instrument synchronization mechanisms: trigger routing between instruments, hardware timing coordination for sub-microsecond alignment
40. Develop instrument health monitoring: communication error tracking, response time monitoring, automatic flagging of degraded performance

## TestStand Sequence Development

41. Create TestStand project structure: separate sequence files for different test phases (incoming inspection, functional test, final verification)
42. Develop MainSequence with test flow: Setup, PreTest Checks, Main Test Body, Cleanup, reporting, with error handling at each stage
43. Implement Setup callback: instrument initialization, calibration verification, fixture self-test, DUT power-up sequencing with inrush current limiting
44. Create test step template: parameter input specification, limit checking, measurement uncertainty contribution, step execution timeout
45. Develop parametric test steps using LabVIEW action VIs: voltage measurement at test points, current consumption verification, frequency accuracy check
46. Implement functional test steps: communication protocol verification (UART, SPI, I2C, USB), memory read/write testing, firmware version readback
47. Create conditional test branching: skip steps based on product variant, execute extended tests on first article or failure analysis units
48. Implement test step synchronization for parallel testing: barrier synchronization across multiple test sites, shared resource management (chamber, RF shielding)
49. Develop data logging configuration: specify which parameters to log, sampling rate for continuous monitoring, storage format and compression
50. Create test sequence version control integration: embed Git commit hash in test results, automatic tagging of production releases

## Test Limits Management

51. Design limits database schema: product_model, test_parameter, low_limit, high_limit, units, guard_band_percentage, effective_date
52. Implement limits editor GUI: spreadsheet-like interface for engineering limits entry, data validation, change tracking, approval workflow
53. Create limits import/export functionality: Excel import for bulk limits entry, export for documentation and archival purposes
54. Develop limits versioning system: track all changes with timestamp, user ID, reason for change, approval status, rollback capability
55. Implement guard band management: automatically apply configurable guard bands (10-20%) tighter than product specification for manufacturing margin
56. Create limits variation by product revision: support A0, A1, B0 silicon revisions with different specifications, automatic selection based on DUT marking
57. Develop statistical process control (SPC) integration: calculate Cp/Cpk based on test data vs. limits, alert when process capability degrades
58. Implement dynamic limits adjustment: automatically tighten limits based on historical yield data, widen limits for early production ramp
59. Create limits conflict detection: identify contradictory limits between related parameters, flag unrealistic combinations, suggest corrections
60. Develop limits documentation generator: automatically create test procedure documents with current limits, parameter descriptions, measurement methods

## Test Sequence Programming

61. Implement DC power-up sequence: apply voltages in specific order (IO supply before core supply), verify current consumption at each step
62. Create voltage margining tests: sweep supply voltage ±10% of nominal, verify DUT functionality across full range, measure critical parameters
63. Develop continuity testing: verify ground connections <1Ω, detect opens in signal paths, check power distribution resistance
64. Implement leakage current measurement: apply voltage, disable outputs, measure current <1µA, detect shorts to adjacent pins
65. Create digital I/O testing: write/read patterns to GPIO pins (walking ones, walking zeros, checkerboard), verify logic levels and drive strength
66. Develop analog measurement tests: ADC linearity (measure known voltages), DAC accuracy (generate voltages, verify with DMM to ±0.1% accuracy)
67. Implement frequency measurements: measure clock outputs with frequency counter, verify crystal oscillator accuracy (±50 ppm typical), jitter analysis
68. Create communication protocol tests: UART loopback (transmit test patterns, verify reception), SPI register read/write, I2C address scan
69. Develop timing verification: measure setup/hold times, propagation delays, rise/fall times using oscilloscope with 1ns resolution
70. Implement thermal testing: heat DUT to maximum operating temperature, verify functionality, measure parameter drift vs. temperature

## Data Acquisition and Logging

71. Configure TestStand database logging: connect to PostgreSQL or SQL Server, define result schema, enable transaction-based writes for data integrity
72. Implement test result caching: buffer results in memory during test execution, batch write to database at test completion for performance
73. Create real-time data visualization: live plotting of parametric measurements during test execution, trend analysis across sequential DUTs
74. Develop data compression for waveform storage: save oscilloscope captures as compressed binary (HDF5 format), reduce storage from 10MB to 500KB per waveform
75. Implement selective data logging: log all parameters for failed units, log summary statistics only for passing units to reduce database size
76. Create data retention policies: archive detailed test data after 90 days, maintain summary statistics for 7 years, automatic purging of obsolete data
77. Develop data export utilities: extract test data for specific serial numbers, date ranges, or failure modes, export to CSV for external analysis
78. Implement real-time backup: replicate test database to secondary server with <1 minute lag, automatic failover on primary database failure
79. Create data anonymization for external sharing: remove proprietary product details, replace serial numbers with hashed IDs, aggregate statistics
80. Develop audit trail logging: track all database modifications (who changed what and when), tamper-evident logging for regulatory compliance

## Statistical Analysis

81. Implement real-time Cp/Cpk calculation: calculate process capability indices for each test parameter, update after every 25-50 units tested
82. Create control charts (X-bar and R charts): monitor test parameter means and ranges, detect process shifts, configurable control limits at ±3σ
83. Develop automated outlier detection: identify measurements >3σ from mean, flag for review, distinguish between true outliers and specification violations
84. Implement correlation analysis: identify related parameters (e.g., current vs. voltage), detect unexpected correlations indicating systemic issues
85. Create histogram generation: visualize parameter distributions, overlay specification limits, identify centering and spread issues
86. Develop trend analysis: detect parameter drift over time, extrapolate to predict when limits will be exceeded, trigger preventive maintenance
87. Implement multi-variate analysis: principal component analysis (PCA) to identify root causes of failures, reduce dimensionality of test data
88. Create yield prediction models: machine learning models (random forest, neural networks) to predict yield based on early test parameters
89. Develop Pareto analysis: rank failure modes by frequency and impact, guide improvement efforts to highest-impact issues (80/20 rule)
90. Implement gauge repeatability and reproducibility (GR&R) studies: measure test system variation, ensure measurement uncertainty is <10% of tolerance

## Report Generation

91. Design test report template: company logo, product identification, test date/time, pass/fail status, operator ID, station ID
92. Implement parametric results table: list all measured parameters with values, limits, units, pass/fail status, color-coded for readability
93. Create visual trend plots: embed charts showing parameter values vs. specification limits, historical trends for this product serial number
94. Develop failure mode summary: categorize and count failures by type, highlight critical failures requiring immediate action
95. Implement automatic report generation: PDF creation at test completion, saved to network location organized by date and product, emailed to stakeholders
96. Create summary dashboard: web-based real-time display of test metrics (yield, throughput, top failures), accessible from any browser
97. Develop batch reporting: end-of-shift reports summarizing all units tested, yield by product model, equipment utilization, operator performance
98. Implement certificate of conformance (CoC) generation: formal document certifying product meets specifications, includes test data, signed approval
99. Create failure analysis reports: detailed capture of failure symptoms, measurements at failure, waveforms, photographs, recommended corrective actions
100. Develop compliance reports: format test data for regulatory submissions (FDA, FCC, CE), include measurement uncertainty statements, traceability

## Parallel Testing Implementation

101. Design multi-site test architecture: TestStand process models supporting 2-16 simultaneous test sites with independent sequencing
102. Implement site-specific resource allocation: assign dedicated instruments to each test site, prevent resource conflicts, load balancing
103. Create barrier synchronization: coordinate test sites when shared resource access required (environmental chamber, RF shielded box)
104. Develop site failure handling: continue testing good sites when one site fails, automatic site disabling on repeated failures, rebalancing
105. Implement independent data logging: parallel database writes from all sites, transaction isolation to prevent data corruption
106. Create site status visualization: real-time display showing each site's current test step, progress bar, pass/fail count, site health
107. Develop site calibration management: track calibration status independently per site, prevent testing on out-of-calibration sites
108. Implement load balancing algorithms: dynamically assign DUTs to fastest-available site, minimize idle time, maximize throughput
109. Create site-to-site measurement correlation tracking: detect if one site consistently measures differently, flag calibration or fixture issues
110. Develop graceful degradation: operate with reduced site count when hardware failures occur, maintain testing capability with degraded throughput

## Test Time Optimization

111. Analyze test time breakdown: measure time spent in each test step, identify longest steps (typically settling time, communication overhead)
112. Implement concurrent measurement techniques: trigger multiple instruments simultaneously, overlap settling times, parallel execution where possible
113. Optimize instrument settings: reduce measurement integration time (from 100ms to 10ms) for faster measurements with acceptable noise, faster triggering
114. Create intelligent test sequencing: perform fast tests first to quickly identify gross failures, skip remaining tests on early failure detection
115. Implement adaptive testing: reduce measurement iterations on passing units (single measurement), increase iterations on marginal measurements (average 10 samples)
116. Develop test coverage optimization: use design of experiments (DOE) to reduce test points while maintaining fault coverage (from 500 to 200 tests)
117. Create instrument command batching: send multiple SCPI commands in single transaction, reduce communication overhead from 50ms to 5ms per command
118. Implement predictive test skipping: machine learning model predicts which tests will pass based on early results, skip redundant tests (with human approval)
119. Optimize data transfer: compress data before network transmission, use binary formats instead of ASCII, batch database writes
120. Develop parallel DUT operations: apply stimulus to one DUT while measuring another, overlap mechanical handling time with electrical testing

## DUT Interface Design Integration

121. Define electrical interface requirements: signal count (10-200 signals typical), current capacity per pin (100mA-5A), voltage levels (1.8V-48V)
122. Specify mechanical interface: pogo pin fixture with spring-loaded contacts (100-200g contact force), alignment features for ±0.1mm repeatability
123. Implement fixture self-test sequence: verify all pins connected (continuity check), measure contact resistance <50mΩ, detect damaged pins
124. Create fixture identification: RFID tag on each fixture, automatic detection of fixture serial number, load fixture-specific calibration data
125. Develop fixture usage tracking: count actuation cycles, predict maintenance needs (typical pogo pin life: 100,000-1,000,000 cycles)
126. Implement fixture wear compensation: measure contact resistance over time, alert when degradation detected, schedule preventive maintenance
127. Create fixture calibration procedures: short/open compensation for accurate low-resistance measurements, offset nulling for voltage measurements
128. Develop fixture simulator: electronic load simulating DUT electrical characteristics for test system validation without physical DUT
129. Implement vacuum/pressure control: integrate pneumatic fixture actuation, pressure monitoring (80-100 psi typical), interlock with test sequence
130. Create fixture safety features: current limiting to protect DUT (500mA fast-blow fuses per supply), overvoltage protection crowbars, emergency stop integration

## Version Control and Configuration Management

131. Initialize Git repository for test software: separate repos for TestStand sequences, LabVIEW VIs, limit files, configuration files, documentation
132. Implement branching strategy: development branch for new features, release branches for production-validated code, hotfix branches for urgent corrections
133. Create commit message standards: include ticket number, brief description, affected test steps, validation status (e.g., "JIRA-1234: Fix DMM timeout in Step 45")
134. Develop code review process: require peer review before merging to main branch, automated checks for coding standards, TestStand sequence validation
135. Implement continuous integration: Jenkins pipeline automatically runs on each commit, executes unit tests, validates sequences, reports errors
136. Create automated build system: compile LabVIEW VIs to executables, package TestStand deployment with all dependencies, generate installer
137. Develop version numbering: semantic versioning (major.minor.patch), embed version in test results, automatic version increment on release
138. Implement configuration management database (CMDB): track relationships between software versions, instrument firmware, calibration data, test station IDs
139. Create release notes automation: extract commit messages and JIRA tickets, generate formatted release notes documenting changes and fixes
140. Develop rollback procedures: maintain previous 3 software versions on test stations, one-click rollback capability if issues discovered post-deployment

## Instrument Driver Updates

141. Check for NI driver updates quarterly: visit ni.com/downloads, download latest VISA drivers, instrument-specific ICD drivers, test platform updates
142. Validate driver updates in test environment: install on development station, verify compatibility with existing sequences, regression test critical functionality
143. Update oscilloscope driver for new features: add segmented memory acquisition for faster waveform capture, implement hardware-accelerated FFT
144. Enhance DMM driver for improved throughput: implement binary data transfer (5x faster than ASCII), add multi-point measurement buffer
145. Update power supply driver for new models: add support for higher-power supplies (1000W vs 300W), implement source-measure unit (SMU) capability
146. Implement firmware version checking: query instrument firmware at initialization, warn if outdated version detected, log firmware version with test results
147. Create driver performance profiling: measure API call execution time, identify bottlenecks, optimize slow functions (target <10ms per call)
148. Develop driver error injection for testing: simulate communication failures, timeout conditions, instrument errors to validate error handling robustness
149. Implement driver backward compatibility: maintain support for legacy instruments while adding new features, version detection and feature adaptation
150. Create driver documentation: API reference with usage examples, timing diagrams, performance characteristics, supported instrument models and firmware versions

## Database Integration

151. Design normalized database schema: tables for test_results, products, test_limits, instruments, calibrations, operators, stations
152. Implement database connection pooling: maintain pool of 5-10 connections, reuse connections to reduce overhead (connection establishment takes 100-500ms)
153. Create stored procedures for common queries: get_limits_by_product, insert_test_result, update_yield_statistics for improved performance and security
154. Develop database indexing strategy: index on serial_number, test_date, product_model, station_id for fast query response (<100ms for typical queries)
155. Implement database transaction management: wrap test result insertion in transaction, rollback on error to maintain data consistency
156. Create database backup automation: nightly full backup, hourly incremental backup, offsite replication for disaster recovery (RPO <1 hour, RTO <4 hours)
157. Develop database performance monitoring: track query execution time, identify slow queries (>1s), optimize with query plan analysis
158. Implement database partitioning: partition test_results table by date (monthly partitions), improve query performance for recent data, simplify archival
159. Create database views for reporting: pre-joined views combining related tables, simplify query development for report generation and dashboards
160. Develop database migration scripts: version-controlled schema changes, forward and backward migration support, automatic execution during deployment

## Measurement Uncertainty Analysis

161. Identify uncertainty contributors for each measurement: instrument accuracy, resolution, temperature coefficient, calibration uncertainty, DUT loading effects
162. Calculate Type A uncertainties: statistical analysis of repeated measurements, standard deviation of mean (σ/√n), typically requires 10-30 measurements
163. Determine Type B uncertainties: from instrument specifications (accuracy ±0.015% of reading ±0.003% of range), assume rectangular distribution (divide by √3)
164. Implement combined uncertainty calculation: root-sum-square of all uncertainty components, expressed as expanded uncertainty (k=2 for 95% confidence)
165. Create uncertainty budget spreadsheets: list all contributors, magnitude, sensitivity coefficient, combined uncertainty for each test parameter
166. Develop guard band calculation: set test limits to accommodate measurement uncertainty, ensure 95% confidence that passing units meet specification
167. Implement test uncertainty ratio (TUR) monitoring: calculate TUR = tolerance / (2 × expanded uncertainty), target TUR ≥ 4:1, preferably 10:1
168. Create uncertainty visualization: display uncertainty bands on test reports and control charts, clearly communicate measurement confidence
169. Develop uncertainty-aware pass/fail decisions: implement "accept" / "reject" / "retest" zones based on measurement uncertainty
170. Implement periodic uncertainty validation: perform measurement system analysis (MSA) annually, verify actual uncertainty matches predictions

## Calibration Integration

171. Create calibration schedule database: track calibration due dates for all instruments, alert 30 days before expiration, prevent use of expired equipment
172. Implement pre-test calibration verification: automatic execution of self-test or abbreviated calibration check before testing, lockout if verification fails
173. Develop calibration certificate management: scan and store PDF certificates, link to instrument serial numbers, searchable database of calibration history
174. Create calibration reminder system: automated email notifications to metrology lab 45 days before due date, escalating reminders at 30/15/7 days
175. Implement calibration status indicators: visual display on test station (green=current, yellow=<30 days, red=expired), LED indicators on instrument rack
176. Develop calibration trending: plot instrument performance over multiple calibration cycles, detect drift trends, predict future behavior
177. Create as-found/as-left reporting: record instrument performance before and after calibration, track adjustment history, identify problematic instruments
178. Implement calibration procedure automation: automated execution of calibration steps where possible, reduce calibration time from 4 hours to 1 hour per station
179. Develop calibration-aware measurement corrections: apply correction factors from calibration certificates, improve measurement accuracy by 2-3x
180. Create calibration documentation generator: automatically generate calibration procedures, record forms, and traceability documentation

## User Interface Development

181. Design TestStand operator interface: simplified view showing current test step, progress bar, pass/fail indication, minimal operator input required
182. Implement barcode scanning workflow: scan DUT serial number, automatically load product configuration, verify serial number format (regex validation)
183. Create fixture closed detection: integrate limit switch or proximity sensor, prevent test start until fixture properly closed, safety interlock
184. Develop visual pass/fail indication: large green/red display visible from 5 meters, audible beep patterns (1 beep=pass, 3 beeps=fail), status light tower
185. Implement operator authentication: badge scan or PIN entry, track which operator tested each unit, restrict access to configuration changes
186. Create error message system: user-friendly error descriptions replacing technical error codes, suggest corrective actions ("Check fixture alignment")
187. Develop test history display: show last 10 units tested with pass/fail status, quick identification of yield trends during shift
188. Implement station status dashboard: web-based display showing all test stations (20-50 stations typical), real-time status, throughput, yield percentage
189. Create help system integration: context-sensitive help accessible from any screen, troubleshooting flowcharts, video demonstrations of common procedures
190. Develop accessibility features: high-contrast mode for operators with visual impairments, configurable font sizes, multi-language support (English, Spanish, Chinese)

## Deployment and Validation

191. Create deployment package: installer bundle containing TestStand sequences, LabVIEW runtime, instrument drivers, database schema, configuration files
192. Develop installation validation protocol (IQ): verify all software components installed correctly, check file versions, validate database connectivity
193. Implement operational qualification (OQ): execute test sequences with known-good and known-bad DUTs, verify correct pass/fail decisions, measurement accuracy validation
194. Create performance qualification (PQ): run production volume (100-1000 units), verify throughput meets requirements, validate data logging, generate statistical reports
195. Develop deployment checklist: 50-item checklist covering software installation, instrument verification, calibration checks, operator training, final signoff approval

## Technical Specifications

**Test Throughput Performance:**
- Single-site sequential testing: 120-180 DUTs per hour (20-30 second cycle time)
- Quad-site parallel testing: 400-600 DUTs per hour (15-20 second cycle time per site)
- Octal-site parallel testing: 750-1000 DUTs per hour (12-15 second cycle time per site)
- Test time breakdown: 40% measurement time, 30% settling/stabilization, 20% data logging, 10% mechanical handling
- Throughput efficiency: >85% (accounting for fixture loading, DUT changeover, station idle time)

**Measurement Uncertainties:**
- DC voltage measurements: ±0.02% of reading ± 5mV (using 6.5-digit DMM with 1-year calibration interval)
- DC current measurements: ±0.05% of reading ± 10µA for <1A range, ±0.1% ± 100µA for 1-10A range
- Resistance measurements: ±0.03% ± 0.1Ω for 4-wire measurements, ±0.1% ± 1Ω for 2-wire measurements
- Frequency measurements: ±10 ppm using frequency counter with TCXO timebase (±0.5 ppm with OCXO timebase)
- Time interval measurements: ±100ps resolution + 50ppm of reading using high-speed digitizer
- Temperature measurements: ±0.5°C using calibrated thermocouples or RTDs with cold junction compensation
- Test uncertainty ratio (TUR): 10:1 for critical parameters, minimum 4:1 for all production tests
- Expanded uncertainty (k=2): <5% of tolerance for parametric tests, <10% for functional tests

**Data Management Specifications:**
- Database write latency: <50ms per test result (typical 20-30ms with optimized stored procedures and indexing)
- Data retention: detailed results for 90 days (5GB per 1M units), summary statistics for 7 years (500MB per 1M units)
- Database size: approximately 50KB per DUT for detailed results including waveforms, 5KB per DUT for parametric data only
- Query performance: <100ms for serial number lookup, <5s for complex yield analysis across 1M records
- Backup schedule: full backup nightly (2-4 hours), incremental backup hourly (5-15 minutes), real-time replication to standby server
- Data integrity: ACID-compliant transactions, foreign key constraints, checksum validation on waveform data
- Concurrent users: support 50-100 simultaneous test stations writing data, 20-50 concurrent report/dashboard users
- Network bandwidth: 1Mbps per test station average (peaks to 10Mbps during waveform logging), Gigabit Ethernet recommended

**Software Architecture:**
- Development environment: LabVIEW 2021 or later, TestStand 2021 or later, .NET Framework 4.8, Visual Studio 2019/2022
- Database: PostgreSQL 13+ or SQL Server 2019+, supports JSON data types for flexible schema
- Programming languages: LabVIEW G code (80%), C# for database access (15%), Python for data analysis (5%)
- Code organization: 200-500 LabVIEW VIs (20,000-50,000 lines of G code equivalent), 50-100 TestStand sequences
- Version control: Git with LFS for binary LabVIEW files, branching strategy with development/staging/production branches
- Configuration management: YAML or JSON configuration files for site-specific settings (instrument addresses, limits, station ID)
- Deployment: automated installer using NI Application Builder, InstallShield, or NSIS, supports silent installation for IT deployment
- Documentation: API documentation using VI Documentation Tool, test procedure documents auto-generated from TestStand sequences
