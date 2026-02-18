---
title: "Automated Optical Inspection"
company: "Koh Young Technology"
country: "South Korea"
selling_price: 3.0
inputs:
  - name: "3D Camera System"
    cost: 1.0
    link: "3d-camera"
  - name: "LED Lighting"
    cost: 0.3
    link: "led-lighting"
  - name: "Image Processing"
    cost: 0.8
    link: "image-processing"
  - name: "XY Stage"
    cost: 0.5
    link: "xy-stage"
  - name: "Software Algorithms"
    cost: 0.2
    link: "inspection-software"
value_created: 0.2
lead_time_days: 60
minimum_order_quantity: 5000
transportation_method: "ocean"
geopolitical_risk: "low"
price_volatility: "medium"

certifications:
  - "ISO9001"
  - "ISO14001"
data_quality: "estimated"
---

## System Architecture and Hardware Setup

1. Install the AOI system frame on a vibration-dampened foundation
2. Mount the high-resolution 3D camera system on the precision Z-axis gantry
3. Connect the structured light projection unit for 3D imaging
4. Install RGB cameras for color-based defect detection
5. Position multi-angle LED lighting arrays around the inspection area
6. Configure diffuse white LED lighting for consistent illumination
7. Mount directional red, green, and blue LED banks for contrast enhancement
8. Install the high-precision XY motorized stage with linear encoders
9. Calibrate the XY stage positioning accuracy to ±5 microns
10. Connect servo motors with closed-loop feedback control
11. Install vacuum conveyors for PCB transport and handling
12. Mount edge clamps and support pins for board stabilization
13. Install width-adjustable board guides for various PCB sizes
14. Connect the barcode/QR code reader for board identification
15. Install SMEMA interface for line integration and handshaking

## 3D Solder Paste Inspection (SPI) Configuration

16. Configure the 3D camera system for solder paste height measurement
17. Set up shadow moiré phase-shift imaging technique
18. Calibrate the projection patterns with 7-phase shift algorithm
19. Define the Z-axis measurement range from 0 to 500 microns
20. Set height resolution to 0.1 micron precision
21. Configure area measurement algorithms for paste volume calculation
22. Set up X and Y dimensional measurement parameters
23. Define solder paste inspection zones on the PCB layout
24. Import CAD gerber files for pad location reference
25. Create inspection programs for different PCB assemblies
26. Define solder paste volume thresholds (±25% typical)
27. Set height uniformity limits across paste deposits
28. Configure area coverage percentage limits (>80% typical)
29. Define bridge detection algorithms between adjacent pads
30. Set insufficient paste volume alarm thresholds
31. Configure excessive paste height warning limits
32. Set up paste offset measurement from pad centers
33. Define shape quality metrics for paste deposits
34. Configure inspection skip zones for non-critical areas
35. Set up statistical process control (SPC) charts for paste volume

## Pre-Reflow Component Inspection

36. Configure 2D imaging mode for component presence verification
37. Set up component polarity detection algorithms
38. Define correct orientation checks for polarized components
39. Configure tombstone prediction based on paste imbalance
40. Set up component position offset measurement
41. Define acceptable component placement tolerance (±0.1mm)
42. Configure component rotation angle measurement
43. Set rotation tolerance limits (±5 degrees typical)
44. Set up component body height verification
45. Configure lead coplanarity measurement for leaded parts
46. Define bill of materials (BOM) verification checks
47. Set up wrong component detection algorithms
48. Configure missing component detection sensitivity
49. Define component marking and polarity verification
50. Set up IC pin-1 orientation verification
51. Configure capacitor, diode, and LED polarity checks
52. Define component value verification from markings
53. Set up package size verification against design data
54. Configure component damage detection algorithms
55. Define cracked component body detection parameters

## Post-Reflow Solder Joint Inspection

56. Configure 3D imaging for post-reflow solder joint analysis
57. Set up solder fillet height measurement algorithms
58. Define minimum and maximum fillet height thresholds
59. Configure solder volume calculation for each joint
60. Set up wetting angle measurement for solder quality
61. Define acceptable wetting patterns on pads and leads
62. Configure solder bridge detection between adjacent pins
63. Set bridge detection sensitivity for fine-pitch components
64. Define minimum spacing thresholds for bridge detection
65. Set up open solder joint detection algorithms
66. Configure insufficient solder volume warnings
67. Define cold solder joint detection based on texture
68. Set up solder ball detection on PCB surface
69. Configure excess solder detection algorithms
70. Define solder bead and splash detection parameters
71. Set up lifted lead detection for through-hole components
72. Configure tilted component detection algorithms
73. Define acceptable tilt angles for various components
74. Set up billboard effect detection for chip components
75. Configure tombstone defect detection algorithms

## Advanced Defect Detection Algorithms

76. Implement machine learning algorithms for defect classification
77. Train neural networks on thousands of defect images
78. Configure convolutional neural networks (CNN) for pattern recognition
79. Set up deep learning models for complex defect types
80. Define feature extraction algorithms for solder characteristics
81. Configure edge detection for component and pad boundaries
82. Set up blob analysis for solder volume estimation
83. Implement grayscale analysis for solder texture evaluation
84. Configure color space analysis (RGB, HSV) for oxidation detection
85. Set up template matching for component verification
86. Define correlation algorithms for pattern comparison
87. Configure adaptive thresholding for varying lighting conditions
88. Set up histogram equalization for image enhancement
89. Implement morphological operations for noise reduction
90. Configure median filtering for image smoothing
91. Set up Gaussian blur for edge enhancement
92. Define Sobel operators for edge gradient calculation
93. Configure Canny edge detection parameters
94. Set up Hough transform for line and circle detection
95. Implement watershed segmentation for overlapping features

## False Call Reduction Strategies

96. Configure golden board learning from known good assemblies
97. Set up statistical baseline from production samples
98. Define accept/reject thresholds based on production data
99. Implement adaptive learning from operator verify stations
100. Configure automatic threshold adjustment algorithms
101. Set up multi-image capture for verification of marginal calls
102. Define re-inspection protocols for borderline defects
103. Configure confidence scoring for each inspection result
104. Set up second-look algorithms for low-confidence calls
105. Implement voting schemes from multiple inspection angles
106. Configure lighting variation techniques for ambiguous features
107. Set up focus stacking for improved depth of field
108. Define region-of-interest (ROI) refinement for critical areas
109. Configure component-specific inspection parameters
110. Set up material-specific thresholds (e.g., gold vs. silver finish)
111. Implement temperature compensation for thermal expansion
112. Configure board warpage correction algorithms
113. Set up perspective correction for angled surfaces
114. Define background subtraction for consistent feature extraction
115. Configure noise filtering in high-frequency image components

## Component-Specific Inspection Parameters

116. Configure fine-pitch QFP inspection (0.4mm pitch capability)
117. Set up BGA inspection with X-ray correlation capability
118. Define CSP (Chip Scale Package) inspection parameters
119. Configure μBGA inspection for ultra-fine pitch devices
120. Set up LGA (Land Grid Array) inspection algorithms
121. Define QFN (Quad Flat No-lead) inspection parameters
122. Configure 0201 and 01005 chip component inspection
123. Set up connector inspection for proper seating
124. Define through-hole component solder fillet inspection
125. Configure odd-form component inspection parameters
126. Set up shielding can placement verification
127. Define heat sink attachment inspection
128. Configure flex circuit solder joint inspection
129. Set up board-to-board connector alignment verification
130. Define stiffener attachment inspection parameters

## Traceability and Data Management

131. Configure automatic board serial number reading and logging
132. Set up database integration for traceability records
133. Define inspection image archiving protocols
134. Configure defect image capture and storage
135. Set up Manufacturing Execution System (MES) integration
136. Define data export formats (CSV, XML, JSON)
137. Configure real-time SPC charting and trending
138. Set up Cpk calculation for process capability analysis
139. Define yield reporting by defect type and location
140. Configure Pareto analysis for top defect identification
141. Set up defect density mapping across PCB surface
142. Define component supplier traceability linking
143. Configure rework tracking and re-inspection logging
144. Set up shift and operator performance reporting
145. Define maintenance alert logging and tracking

## Machine Learning and AI Integration

146. Implement supervised learning from operator classifications
147. Configure reinforcement learning for threshold optimization
148. Set up unsupervised clustering for defect categorization
149. Define anomaly detection algorithms for novel defects
150. Configure transfer learning from pre-trained models
151. Set up ensemble methods combining multiple classifiers
152. Define active learning for efficient model training
153. Configure data augmentation for training set expansion
154. Set up cross-validation protocols for model evaluation
155. Define confusion matrix analysis for classification accuracy
156. Configure precision and recall optimization
157. Set up F1-score maximization for balanced performance
158. Define ROC curve analysis for threshold selection
159. Configure model versioning and rollback capabilities
160. Set up A/B testing for algorithm comparison

## Software Interface and Programming

161. Launch the AOI programming software interface
162. Import CAD gerber and pick-and-place data files
163. Auto-generate fiducial alignment points from CAD
164. Define global fiducial search windows
165. Configure local fiducial refinement for panel accuracy
166. Set up component library with package dimensions
167. Define inspection windows for each component type
168. Configure automatic window size calculation from CAD
169. Set up inspection sequence optimization for speed
170. Define skip inspection zones (tooling holes, labels)
171. Configure multi-panel inspection for array PCBs
172. Set up board outline detection and verification
173. Define edge clearance inspection parameters
174. Configure component clearance verification
175. Set up height profile inspection for enclosure fit

## Calibration and Maintenance Procedures

176. Perform daily camera focus verification with test target
177. Execute weekly lighting uniformity calibration
178. Conduct monthly XY stage accuracy verification
179. Perform quarterly 3D height calibration with gauge blocks
180. Execute semi-annual camera sensor cleaning
181. Conduct annual complete system calibration
182. Verify lighting intensity and spectrum consistency
183. Check and clean optical windows and lens surfaces
184. Calibrate barcode reader with test patterns
185. Verify conveyor belt alignment and tension
186. Check vacuum pressure for board hold-down
187. Inspect and clean structured light projector optics
188. Verify servo motor encoder accuracy
189. Check emergency stop functionality
190. Update software and algorithm packages

## Quality Assurance and Validation

191. Execute golden board verification runs
192. Perform gauge repeatability and reproducibility (GR&R) studies
193. Conduct correlation studies with X-ray inspection
194. Validate inspection accuracy with seeded defect boards
195. Generate capability reports for customer audits
