---
title: "Standard Cell Libraries"
company: "ARM / Synopsys / Cadence / TSMC"
country: "UK / USA / Taiwan"
selling_price: 5
inputs:
  - name: "Transistor Layout"
    cost: 1.5
    link: "layout-design"
  - name: "SPICE Characterization"
    cost: 1.2
    link: "circuit-simulation"
  - name: "Library Development"
    cost: 1
    link: "cell-design"
  - name: "Process Design Kit"
    cost: 0.8
    link: "foundry-pdk"
  - name: "Verification Tools"
    cost: 0.5
    link: "lib-validation"
value_created: 0
---

# How to Make Standard Cell Libraries

Pre-designed, pre-characterized circuit building blocks for digital chip design. Standard cells: logic gates (AND, OR, NAND, NOR, XOR, INV), flip-flops, latches, buffers, multiplexers, adders. Fixed height (typically 6-12 tracks), variable width. Abutted in rows during place-and-route. Library contains: layouts (GDSII), timing models (Liberty .lib), power models, physical abstractions (LEF).

**Step 1-12: Cell Selection and Architecture**
Define cell portfolio for library. Basic library: 100-300 cells. Comprehensive library: 500-1,500 cells. Categories: (1) Combinational logic: INV (inverter), NAND2-4, NOR2-4, AND2-4, OR2-4, XOR2, AOI (and-or-invert), OAI (or-and-invert), MUX2-4. (2) Sequential: DFF (D flip-flop), DFFR (with reset), DFFS (with set), DFFSR (set/reset), scan flip-flops (DFT), latches. (3) Buffers: BUF, delay cells (DELAY1-8), clock buffers (high drive). (4) Special: tie cells (TIEH, TIEL connect to power/ground), filler cells (fill empty spaces, well continuity), decap cells (decoupling capacitance). Drive strengths: X1, X2, X4, X8, X16 (2× drive = 2× transistor width, 2× area, 2× current). Example: NAND2_X1, NAND2_X2, NAND2_X4. High-threshold (HVT), standard (SVT), low-threshold (LVT) versions (trade speed vs leakage).

**Step 13-28: [Transistor-Level Design](layout-design)**
Schematic capture: draw transistors, connect to form logic function. NAND2: two PMOS in parallel (pull-up network), two NMOS in series (pull-down network). Size transistors: PMOS width 2-3× NMOS width (compensate for lower hole mobility, balance rise/fall times). Typical: NMOS W=0.5-1 µm (minimum geometry), L=channel length (3nm at 3nm node). PMOS W=1-2 µm. For X2 drive strength: double widths. For X4: quadruple. Transistor count optimization: minimize parasitic capacitance, area. Use transmission gates (NMOS+PMOS in parallel) for efficient multiplexers. Euler path optimization: order transistor connections to minimize diffusion breaks (reduces area). Simulate schematic in SPICE: verify DC functionality (truth table), check noise margins (>0.3V for VDD=0.7V), leakage current (<1 nA per gate at SVT).

**Step 29-45: [Physical Layout](custom-layout) in PDK**
Layout using [foundry PDK](foundry-pdk) (Process Design Kit): design rules, device models, layers. Cell height: fixed (e.g., 0.48 µm for 3nm node = 6 metal tracks @ 0.08 µm pitch). Width: variable (snap to routing grid, e.g., 0.06 µm). Rails: VDD at top, VSS at bottom of cell (continuous across row). Power strap width: 0.12-0.18 µm. Internal routing: Metal 1 (M1), Metal 2 (M2). Minimize M2 usage (reserve for signal routing over cells). Input/output pins: on M2 at standard positions (routing grid). Well taps: every 10-20 cells (connect N-well to VDD, P-substrate to VSS, prevent latchup). Transistor placement: abut diffusion regions (share source/drain), minimize poly spacing. Dummy poly: fill edges (lithography uniformity). Layout vs schematic: extract netlist from layout (parasitic R, C), compare to schematic (LVS check). Design rule check (DRC): verify all foundry rules (min width, spacing, enclosure, density). Clean DRC required. Layout takes 2-5 days per cell (experienced layout designer).

**Step 46-62: [SPICE Characterization](circuit-simulation)**
Extract parasitics from layout: resistance of metal wires, capacitance (gate, diffusion, interconnect). Back-annotated netlist: includes R, C. SPICE simulation: FinFET models from foundry (BSIM-CMG, industry standard compact model). Characterization matrix: vary input slew (transition time, 10-100 ps), output load (1-50 fF). For each (slew, load) point: measure propagation delay (input 50% → output 50%), rise time, fall time, power consumption. Simulation corners: process (FF fast, TT typical, SS slow), voltage (±10%), temperature (-40°C to 125°C). 5 corners typical: FF_0.77V_-40C, TT_0.7V_25C, SS_0.63V_125C, etc. Simulate 10 slew values × 10 load values × 5 corners = 500 SPICE runs per output pin. Flip-flop: additional timing arcs (setup time, hold time, clock-to-Q delay). Setup time: minimum time data must be stable before clock edge (10-30 ps at 3nm). Hold time: after clock edge (5-15 ps). Characterization automation: Perl/Python scripts drive SPICE, parse output, generate timing tables. Compute farm: 100-500 CPUs, 1-3 days for full library characterization.

**Step 63-78: Liberty (.lib) File Generation**
Liberty format (IEEE 1801): industry-standard timing library. Text file, one per corner. Contents: (1) Cell definitions: name, area, pins. (2) Timing arcs: for each input→output path, lookup tables (LUT) for delay and slew vs input slew and output load. Table size: 7×7 or 5×5 (index: slew, load; value: delay). (3) Power: internal power (switching power during transition), leakage power (static current). (4) Constraints: setup, hold times (for sequential cells). (5) Function: boolean function (for each output). Example NAND2: `Y = !( A & B )`. Conditional arcs: output depends on side inputs (e.g., AND gate: if B=0, A transition doesn't affect Y). Table model: non-linear delay model (NLDM, most common) or composite current source (CCS, more accurate). Liberty file size: 1-10 MB per corner. Large library: 50-100 MB total (all corners, all cells). Validate Liberty: load into STA tool (PrimeTime), check syntax, timing sensibility.

**Step 79-92: LEF (Library Exchange Format) File**
Physical abstract for place-and-route tool. Hides internal layout details (IP protection, reduces data size). Contains: (1) Cell dimensions: bounding box (width, height). (2) Pin locations: center coordinates, layer (M2). (3) Obstructions (OBS): blocked areas inside cell (where router cannot place wires). (4) Symmetry: X, Y, XY (allows flipping during placement). (5) Class: CORE (standard cell), PAD (I/O cell), COVER (e.g., decap). (6) Site: placement grid (e.g., "core" site 0.06×0.48 µm). LEF also defines technology layers: metal layers (M1-M15), vias (V1-V14), minimum widths, spacing rules (subset of full PDK rules, sufficient for routing). LEF generation: automated from GDSII layout (tool: Cadence Abstract, Synopsys Lynx). Verify LEF: compare pin positions to layout, check OBS coverage. LEF file size: 10-50 KB per cell, 5-20 MB total library.

**Step 93-108: Power and Noise Characterization**
Switching power: P_switch = α × C_load × V_DD² × f. α = activity factor (average transitions per cycle). Characterize internal capacitance (input pin cap, clock pin cap). Energy per toggle: simulate, measure current integral. Leakage power: static current when cell idle. FinFETs: gate leakage negligible (good gate control), subthreshold leakage dominant. Leakage varies 100-1,000× across PVT corners (SS corner high leakage due to high temp). Multiple leakage states: input vector dependence (all-0 vs all-1 inputs can differ 2-5×). Liberty specifies leakage for each input combination. Power modeling: internal power (short-circuit + charging internal nodes), + leakage. Clock gating cells: special characterization (enable setup time relative to clock). Noise: output voltage when switching (SSN - simultaneous switching noise). IR drop: calculate maximum current draw, voltage drop on power rail (millivolts).

**Step 109-122: Signal Integrity and Advanced Models**
Crosstalk: coupling capacitance between adjacent wires causes noise. Aggressor (switching wire) induces voltage on victim (quiet wire). Liberty models: receiver capacitance vs driver resistance tables (for crosstalk delay calculation). CCS (Composite Current Source) model: current waveform vs time, voltage (more accurate than NLDM for advanced nodes). Increases liberty file size 5-10×. Electromigration (EM): maximum DC current through wire before metal migration causes failure. Calculate for power rails. Specify max current in LEF. OCV (On-Chip Variation): within-die delay variation. Modeled as percentage derating (±5-10%). AOCV (Advanced OCV): distance-based, location-dependent variation. LVF (Liberty Variation Format): statistical delay distributions. Required for statistical STA at <10nm nodes.

**Step 123-135: [Validation](lib-validation) and QA**
Functional validation: simulate every cell with all input combinations. Verify truth table matches specification. Formal equivalence checking: compare layout-extracted netlist to schematic (tool: Formality, LVS). Timing validation: test chips with ring oscillators (chains of inverters, measure frequency vs supply voltage). Silicon correlation: compare measured delays to Liberty models (should match within ±5%). Power validation: measure leakage on test chip, compare to models. Reliability testing: stress cells at high voltage/temperature (HTOL - high temp operating life), check for early failures. Electromigration testing: high current stress, measure time to failure. Radiation testing (for aerospace): total ionizing dose (TID), single-event upset (SEU). Document test results: characterization report (100-500 pages), specification sheet (10-30 pages).

**Step 136-145: Library Delivery and Licensing**
Package library: LEF, Liberty files (all corners), Verilog behavioral models (for simulation), GDSII (for full-custom integration or verification), documentation (datasheet, user guide). File formats: LEF 5.8 (latest), Liberty 2020.09, Verilog-2005. Compression: tar.gz or zip (100-500 MB compressed). Encryption: protect IP (Cadence OA libraries encrypted, Synopsys .db compiled liberty files). Licensing: foundry provides base libraries with PDK (included in tapeout fee). IP vendors sell enhanced libraries (ARM Artisan, Synopsys DesignWare, Cadence Virtuoso): low-power variants, high-density, ultra-fast. Price: $50K-500K per library depending on node and complexity. Per-tapeout license (pay per design) or perpetual (unlimited designs). Support: foundry or IP vendor provides application engineering support, bug fixes, characterization at new corners.

**Step 146-155: Advanced Libraries and Specialization**
Multi-voltage libraries: cells with level shifters, isolation cells (for power domains). Low-power libraries: high-Vt (HVT), super-high-Vt (SLVT), multi-Vt optimization. FinFET libraries: 2-fin, 3-fin, 4-fin devices (discrete widths, not continuous). GAA (gate-all-around) libraries emerging at 2nm. Ultra-high-density libraries: 4-5 track height (vs standard 6-7 track). Trade-off: routability reduced. High-speed libraries: minimum channel length, low-Vt, optimized for speed. Automotive-grade: extended temperature range (-40°C to 150°C), increased reliability specs. Rad-hard libraries: radiation-tolerant layouts (guard rings, edgeless transistors). Open-source libraries: SkyWater 130nm PDK (Google-funded), FreePDK45 (educational). Quality below commercial but free, useful for research/academia.

Development timeline: 12-18 months for complete library at new process node (from PDK availability to production-ready library). Team: 20-50 engineers (circuit designers, layout designers, characterization engineers, validation engineers, CAD). Cost: $5-20M (NRE, non-recurring engineering). Amortized across all designs using library. In chip design context: $5 allocation represents portion of library license and characterization cost per chip designed. Actual library cost: $200K-1M license + $5-20M development, amortized over 10,000-100,000 chips designed = $10-200 per chip. The $5 value is simplified allocation.
