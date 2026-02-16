---
title: "X-Ray Inspection System"
company: "Nordson DAGE"
country: "United Kingdom"
selling_price: 4.5
inputs:
  - name: "X-Ray Tube"
    cost: 1.5
    link: "xray-tube"
  - name: "Detector Panel"
    cost: 1.2
    link: "xray-detector"
  - name: "Radiation Shielding"
    cost: 0.8
    link: "lead-shielding"
  - name: "Motion Control"
    cost: 0.6
    link: "motion-control"
  - name: "Image Analysis Software"
    cost: 0.3
    link: "xray-software"
value_created: 0.1
---

## X-Ray Inspection System Manufacturing Process

### Phase 1: System Design and Specification (Steps 1-15)

1. Define X-ray inspection system requirements based on target component types and defect detection needs
2. Specify X-ray tube voltage range (typically 20-160kV for electronics inspection)
3. Determine required tube current capabilities for adequate image brightness
4. Select microfocus or nanofocus tube based on resolution requirements (1-5 micron spot size)
5. Specify detector type (flat panel, image intensifier, or linear array)
6. Define detector resolution requirements (pixel pitch typically 50-200 microns)
7. Calculate required detector frame rate for throughput targets (1-30 fps)
8. Design radiation safety enclosure with appropriate lead shielding thickness (3-10mm)
9. Specify motion control axes (typically 5-axis: X, Y, Z, tilt, rotation)
10. Define geometric magnification range (5x to 1000x or higher)
11. Calculate working distance and detector distance for optimal magnification
12. Design vacuum chamber for detector cooling and noise reduction
13. Specify oblique viewing angles for BGA inspection (0-60 degrees typical)
14. Plan CT reconstruction capability for 3D defect analysis
15. Define throughput requirements based on production volume (boards per hour)

### Phase 2: X-Ray Generation System (Steps 16-35)

16. Install microfocus X-ray tube with tungsten or molybdenum target
17. Configure tube housing with beryllium window for X-ray transmission
18. Install high voltage power supply (60-160kV range) with stability control
19. Connect tube current control system (0.1-1000 microamps)
20. Install tube cooling system (water or forced air) to dissipate heat
21. Mount X-ray tube on precision positioning stage
22. Install focal spot size control electronics for microfocus operation
23. Configure tube warm-up sequence to prevent filament damage
24. Install tube life monitoring system tracking filament hours
25. Set up automatic tube conditioning cycles for optimal performance
26. Configure X-ray beam collimation system to control irradiated area
27. Install beam filtration (aluminum, copper) to optimize spectrum
28. Set up tube voltage stabilization to prevent image artifacts
29. Configure pulse mode operation for reduced radiation exposure
30. Install interlock system preventing tube operation when enclosure open
31. Set up automatic tube shutdown on over-temperature conditions
32. Configure focal spot position verification and adjustment
33. Install tube current feedback control for consistent output
34. Set up X-ray intensity monitoring and calibration
35. Verify tube output uniformity across entire operating range

### Phase 3: X-Ray Detection System (Steps 36-60)

36. Install flat panel detector with scintillator layer (CsI or GOS)
37. Mount detector on vibration-isolated mounting system
38. Configure detector cooling system to reduce dark current noise
39. Connect detector electronics to high-speed data acquisition computer
40. Install detector gain and offset calibration system
41. Configure pixel defect mapping and correction algorithms
42. Set up detector lag correction for improved image quality
43. Install detector protective window against mechanical damage
44. Configure detector readout modes (continuous, triggered, pulsed)
45. Set up detector binning options (1x1, 2x2, 4x4) for speed/resolution tradeoff
46. Install detector frame averaging capability for noise reduction
47. Configure detector gain calibration using reference images
48. Set up flat field correction to compensate for non-uniform illumination
49. Install detector bad pixel interpolation algorithms
50. Configure detector dynamic range optimization (typically 14-16 bit)
51. Set up detector linearity calibration across intensity range
52. Install detector MTF (modulation transfer function) characterization
53. Configure detector DQE (detective quantum efficiency) optimization
54. Set up detector ghosting reduction algorithms
55. Install detector temperature monitoring and control
56. Configure detector shutter or beam blanking for dark image acquisition
57. Set up detector exposure time control (microseconds to seconds)
58. Install detector saturation detection and warning system
59. Configure detector region-of-interest readout for increased frame rate
60. Verify detector spatial resolution and contrast sensitivity

### Phase 4: Radiation Shielding and Safety (Steps 61-80)

61. Construct main inspection chamber with 5-10mm lead-lined walls
62. Install lead-lined door with multi-point safety interlock system
63. Configure door position sensors preventing X-ray emission when open
64. Install radiation monitoring sensors inside and outside enclosure
65. Set up visual and audible warning system when X-rays active
66. Install emergency stop buttons at multiple accessible locations
67. Configure automatic X-ray shutdown on safety interlock breach
68. Install radiation level display showing real-time exposure rates
69. Set up lead glass viewing window for operator observation
70. Configure cabinet air ventilation system for ozone removal
71. Install conveyor opening with radiation labyrinth design
72. Set up lead curtains at conveyor entrance and exit
73. Configure light curtain safety system at access points
74. Install key-switch or password protection for system operation
75. Set up radiation survey and leak testing procedures
76. Configure operator training and certification tracking
77. Install dosimeter badge holder location for personnel monitoring
78. Set up periodic radiation safety audits and documentation
79. Configure compliance with radiation safety regulations (FDA, EU directives)
80. Verify radiation levels below regulatory limits (typically <1 microSv/hr at 5cm)

### Phase 5: Motion Control System (Steps 81-100)

81. Install high-precision X-axis linear stage (travel typically 300-600mm)
82. Mount Y-axis linear stage with crossed-roller bearings for rigidity
83. Configure Z-axis vertical stage for focus adjustment (100-500mm travel)
84. Install rotary stage for 360-degree sample rotation (0.001 degree resolution)
85. Mount tilt stage for oblique viewing (0-60 degree range typical)
86. Connect servo motors with encoder feedback to motion controller
87. Configure motion controller software with coordinated multi-axis moves
88. Set up sample loading/unloading automation or manual positioning
89. Install precision position encoders (linear and rotary) for feedback
90. Configure homing sequences and limit switches for each axis
91. Set up collision detection and prevention algorithms
92. Install vibration isolation for motion stages to prevent image blur
93. Configure acceleration and deceleration profiles for smooth motion
94. Set up programmable motion recipes for different inspection types
95. Install joystick or manual control for operator positioning
96. Configure automatic geometric calibration and distortion correction
97. Set up repeatability verification (typically +/- 5 microns)
98. Install sample fixture mounting system (custom or universal)
99. Configure CT scan motion sequences (continuous rotation with imaging)
100. Verify positioning accuracy using precision calibration artifacts

### Phase 6: Image Acquisition and Processing (Steps 101-125)

101. Install high-performance image acquisition computer (GPU-accelerated)
102. Configure real-time image capture software with live preview
103. Set up image enhancement algorithms (contrast, brightness, gamma)
104. Install noise reduction filters (median, Gaussian, bilateral)
105. Configure edge enhancement and sharpening algorithms
106. Set up automatic brightness and contrast adjustment
107. Install image rotation and geometric correction
108. Configure digital zoom and pan functionality
109. Set up image annotation tools (measurements, markers, text)
110. Install image archiving system with database integration
111. Configure JPEG, TIFF, BMP export formats with compression options
112. Set up comparison mode showing before/after or reference images
113. Install pseudo-color mapping for enhanced defect visualization
114. Configure window/level adjustment for optimal contrast viewing
115. Set up histogram equalization for dynamic range optimization
116. Install image stitching for large area inspection beyond single field
117. Configure 3D reconstruction from multiple oblique views
118. Set up CT reconstruction algorithms (filtered back-projection, iterative)
119. Install volume rendering for 3D visualization of internal structures
120. Configure slice extraction at arbitrary planes through CT volume
121. Set up maximum intensity projection (MIP) for void visualization
122. Install virtual slicing capability for layer-by-layer analysis
123. Configure automatic defect detection algorithms using AI/ML
124. Set up defect classification (voids, cracks, insufficient solder, etc.)
125. Install statistical process control (SPC) charting and trending

### Phase 7: BGA Inspection Capabilities (Steps 126-150)

126. Configure BGA-specific inspection programs with solder ball detection
127. Set up oblique viewing angle optimization (typically 30-45 degrees)
128. Install solder ball void analysis with percentage calculation
129. Configure void size measurement and classification (small, medium, large)
130. Set up solder ball wetting analysis on component and pad sides
131. Install bridge detection between adjacent solder balls
132. Configure open/missing solder ball detection algorithms
133. Set up solder ball diameter and coplanarity measurement
134. Install head-in-pillow defect detection using multi-angle viewing
135. Configure non-wet open (NWO) defect identification
136. Set up solder volume estimation using grayscale analysis
137. Install pad-to-ball alignment verification
138. Configure solder ball collapse or squash measurement
139. Set up voiding acceptance criteria based on IPC-A-610 standards
140. Install multiple component inspection in single image
141. Configure component rotation compensation for misaligned parts
142. Set up reference image comparison for pass/fail determination
143. Install golden unit teach mode for creating reference standards
144. Configure tolerance settings for each defect type
145. Set up defect reporting with component location and type
146. Install statistics tracking (yield, defect pareto, trend analysis)
147. Configure automatic component library with CAD import
148. Set up fiducial recognition for board alignment
149. Install multi-site inspection for repeated component patterns
150. Configure barcode or 2D code reading for traceability

### Phase 8: Hidden Solder Joint Inspection (Steps 151-170)

151. Configure inspection programs for QFN, DFN, and other leadless packages
152. Set up side-view inspection for through-hole solder joints
153. Install solder fillet profile analysis and measurement
154. Configure wetting angle measurement on lead and pad
155. Set up solder joint porosity and void detection
156. Install crack detection in solder joints using high magnification
157. Configure delamination detection between component and board
158. Set up cold solder joint identification using grayscale analysis
159. Install tombstone defect detection for chip components
160. Configure lifted lead detection on fine-pitch components
161. Set up solder balling and spatter detection
162. Install solder bridge detection between fine-pitch leads
163. Configure insufficient solder joint analysis
164. Set up excessive solder and icicle detection
165. Install copper dissolution and leaching analysis
166. Configure intermetallic layer thickness estimation
167. Set up wire bond inspection inside encapsulated packages
168. Install die attach void analysis for power semiconductors
169. Configure internal component feature verification
170. Set up counterfeit component detection using internal X-ray signature

### Phase 9: CT Reconstruction and 3D Analysis (Steps 171-185)

171. Configure CT scan parameters (number of projections, angular increment)
172. Set up sample rotation control synchronized with image acquisition
173. Install CT reconstruction software (FDK, iterative algorithms)
174. Configure reconstruction resolution and voxel size optimization
175. Set up beam hardening correction for improved CT quality
176. Install ring artifact reduction algorithms
177. Configure center of rotation calibration for CT accuracy
178. Set up 3D volume rendering with adjustable transparency
179. Install virtual slicing in XY, XZ, and YZ planes
180. Configure oblique slice extraction at arbitrary angles
181. Set up 3D measurement tools (distance, angle, volume)
182. Install 3D defect segmentation and quantification
183. Configure 3D void analysis with shape and connectivity measurement
184. Set up 3D registration for comparing multiple CT scans
185. Install 4D (time-lapse) CT for observing thermal cycling effects

### Phase 10: Calibration, Validation and Production (Steps 186-195)

186. Perform geometric calibration using precision sphere or grid phantom
187. Execute spatial resolution verification using line-pair gauges
188. Conduct contrast sensitivity testing with step wedge phantoms
189. Verify void detection capability using reference standards with known voids
190. Perform measurement accuracy verification on calibrated samples
191. Conduct system reproducibility testing with repeated measurements
192. Execute throughput validation meeting production requirements
193. Perform operator training on system operation and defect recognition
194. Conduct preventive maintenance schedule setup (tube replacement, calibration)
195. Execute final acceptance testing and production release for BGA and hidden joint inspection

## Quality Standards

- IPC-A-610: Acceptability of Electronic Assemblies (void limits, solder joint criteria)
- IPC-7095: BGA Design and Assembly Process Implementation
- IPC-A-600: Acceptability of Printed Boards
- ISO 9001: Quality Management Systems
- FDA 21 CFR 1020.40: Cabinet X-ray Systems (radiation safety)
- EU Medical Device Regulation (MDR) for medical electronics inspection
- JESD22-B117: Solder Ball Shear Test
- IPC-TM-650: Test Methods Manual (microsectioning validation)

## Key Performance Metrics

- Spatial Resolution: 1-5 microns (microfocus) to <1 micron (nanofocus)
- Geometric Magnification: 5x to 1000x or higher
- Void Detection Sensitivity: <50 microns diameter (system dependent)
- Inspection Throughput: 50-500 boards per hour (configuration dependent)
- CT Reconstruction Time: 5-60 minutes per sample (volume dependent)
- Positioning Repeatability: +/- 5 microns or better
- Radiation Safety: <1 microSv/hr at 5cm from cabinet surface
- Image Acquisition Rate: 1-30 frames per second
- Tube Life: 2000-5000 hours (usage pattern dependent)
- System Uptime: >95% with preventive maintenance

## Applications

- Ball Grid Array (BGA) void inspection and solder joint quality
- Quad Flat No-lead (QFN) and leadless package inspection
- Through-hole solder joint fillet analysis
- Fine-pitch component inspection (QFP, SOIC)
- Power semiconductor die attach void analysis
- Counterfeit component detection
- Wire bond inspection in encapsulated devices
- PCB internal trace and via inspection
- Connector solder joint quality verification
- Battery pack weld and connection inspection
- Automotive electronics reliability testing
- Aerospace electronics failure analysis
- Medical device assembly verification
- LED package void and die attach inspection
- 3D printed electronics quality control
