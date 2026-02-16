---
title: "EDA Software (Electronic Design Automation)"
company: "Synopsys / Cadence / Siemens (Mentor)"
country: "USA"
selling_price: 30
inputs:
  - name: "Computer Science Education"
    cost: 13.5
    link: "computer-science-education"
  - name: "Algorithm Development"
    cost: 8
    link: "research-development"
  - name: "Server Hardware"
    cost: 1.5
    link: "server-hardware"
  - name: "Electricity"
    cost: 1.2
    link: "electricity"
  - name: "Software Licenses"
    cost: 2
    link: "compiler-tools"
  - name: "Verification Hardware"
    cost: 2
    link: "emulation-hardware"
value_created: 1.8
---

# How to Make EDA Software (Electronic Design Automation)

Software tools for designing integrated circuits. Transform high-level descriptions into physical chip layouts. Critical for modern chip design - manually designing billions of transistors impossible. Tools: RTL synthesis, place-and-route, timing analysis, verification, DRC/LVS. Industry: $12 billion, duopoly (Synopsys ~32%, Cadence ~28% market share).

**Step 1-12: RTL Synthesis Tool Development**
Register Transfer Level (RTL) synthesis: converts HDL code (Verilog, VHDL) into gate-level netlist (AND, OR, NOT gates, flip-flops). Core algorithms: (1) Parsing: lex/yacc parsers convert HDL text into abstract syntax tree (AST). (2) Elaboration: resolve hierarchies, parameters, generate statements. (3) Logic optimization: boolean minimization (Quine-McCluskey, Espresso), factorization, constant propagation, dead code elimination. (4) Technology mapping: map optimized logic to standard cell library (pattern matching, tree covering algorithms). (5) Timing-driven optimization: insert buffers, size gates, restructure logic to meet timing constraints. [Software engineers](software-developers) implement in C++ (performance critical - large designs have 100M+ gates). Development: 50-100 engineer-years. Code base: 2-5 million lines of code.

**Step 13-28: Place-and-Route (P&R) Tool Development**
Physical design: place standard cells, route metal wires. Inputs: gate-level netlist, cell library (LEF/DEF files), design constraints (SDC file). Algorithms: (1) Floorplanning: partition design into blocks, assign to chip areas (min-cut, simulated annealing). (2) Placement: assign each cell to specific location (quadratic placement, force-directed, analytic methods). Timing-driven: minimize critical path delay. Congestion-driven: avoid routing hotspots. Legalizer: snap cells to rows, eliminate overlaps. (3) Clock tree synthesis (CTS): build hierarchical tree distributing clock to all flip-flops (minimize skew <10 ps, balance loads). (4) Routing: global routing (coarse, assign nets to routing regions), detailed routing (fine, assign to specific tracks/layers, Manhattan or X routing). Maze routing (Lee algorithm, A* search), channel routing (left-edge, dogleg). Design rule checking during routing (DRC-aware). Timing optimization: buffer insertion, gate sizing, layer assignment. Computational complexity: NP-complete problems (approximation algorithms, heuristics). Development: 100-150 engineer-years. Code: 3-7 million lines.

**Step 29-42: Static Timing Analysis (STA) Tool**
Verify timing without simulation. Path-based analysis: enumerate all timing paths (start: input or flip-flop, end: output or flip-flop), calculate delay, compare to constraints. Algorithms: (1) Graph representation: circuit as directed acyclic graph (DAG), gates=nodes, nets=edges. (2) Levelization: topological sort (order nodes by logic depth). (3) Delay calculation: gate delay + wire delay. Gate delay from liberty (.lib) file - lookup tables (function of input slew, output load). Wire delay: Elmore delay model (RC tree), SPICE simulation (accurate but slow). (4) Static timing analysis: forward propagation (arrival times), backward propagation (required times), slack = required - arrival (positive slack OK, negative slack timing violation). Clock domain crossing checks, multi-cycle paths, false paths. Corner analysis: fast/slow process, high/low voltage, high/low temperature (125 corners typical). Statistical STA (SSTA): variation-aware, models process variation as distributions. Development: 30-50 engineer-years. Code: 1-2 million lines.

**Step 43-56: Verification Tools**
Functional verification: ensure design behaves correctly before fabrication (>50% of project effort). Tools: (1) Simulators: event-driven (Verilog/VHDL simulation, cycle-accurate). Three/four-state logic (0, 1, X unknown, Z high-impedance). Compiled simulation (compile HDL to C++, 10-100× faster). Hardware acceleration: custom FPGAs. [Emulation hardware](emulation-hardware): Veloce, Palladium, ZeBu (compile design into millions of FPGAs, run at MHz rates, 1,000-10,000× faster than software simulation). (2) Formal verification: mathematical proof of correctness. Equivalence checking (synthesized netlist matches RTL). Model checking (finite state machine verification, properties in temporal logic - LTL, CTL). SAT/SMT solvers (boolean satisfiability, constraint solving). (3) Assertion-based verification: embed properties in RTL (SystemVerilog Assertions, PSL). (4) Coverage analysis: track which code executed, states reached (line coverage, branch coverage, FSM coverage, toggle coverage). Target: >95% functional coverage. Development: 80-120 engineer-years across tool suite.

**Step 57-70: Physical Verification (DRC/LVS)**
Design Rule Checking (DRC): verify layout obeys foundry design rules (min width, spacing, enclosure, density). Rule deck: 3,000-10,000 rules for advanced nodes. Rules in SVRF or Calibre format. Algorithm: geometric operations on polygons (boolean AND, OR, NOT, sizing, overlap detection). Hierarchical checking (exploit design hierarchy, check cell once, instance many times - 100-1,000× speedup). Layout vs Schematic (LVS): verify layout matches circuit netlist. Extract netlist from layout (recognize transistors, resistors, capacitors from shapes), compare to schematic. Hierarchical extraction and comparison. Parasitic extraction (RC extraction): extract resistance and capacitance from interconnect. Resistance: sheet resistance × length/width. Capacitance: parallel plate (area), fringe (perimeter), coupling (adjacent wires). Output: SPEF or DSPF file for timing analysis. Field solver for accurate extraction (2.5D or 3D). Development: 40-70 engineer-years. Code: 2-4 million lines.

**Step 71-82: Analog/Custom Design Tools**
Mixed-signal chips require analog design (custom layout). Tools: (1) Schematic capture: draw circuits (transistors, resistors, capacitors). Spectre, HSPICE netlist generation. (2) SPICE simulator: circuit-level simulation (solve KCL/KVL, nonlinear differential equations). Transient analysis, AC analysis, DC operating point, noise analysis. Newton-Raphson iteration, numerical integration (backward Euler, trapezoidal). Device models: BSIM (Berkeley Short-channel IGFET Model) for MOSFETs, Gummel-Poon for BJTs. (3) Custom layout editor: polygon editing (rectangles, paths, polygons). Design rules: real-time DRC. Parameterized cells (PCells - scriptable layouts, Skill or Python). (4) Layout-versus-schematic (LVS): extract and compare. (5) Post-layout simulation: back-annotate parasitics into schematic, re-simulate (verify performance after layout). Development: 50-80 engineer-years.

**Step 83-95: [Algorithm Development](research-development) and Research**
EDA algorithms based on operations research, graph theory, computational geometry, machine learning. Research areas: (1) Partitioning: KL algorithm (Kernighan-Lin), FM algorithm (Fiduccia-Mattheyses), spectral methods. (2) Placement: quadratic placement (minimize wirelength as QP problem), simulated annealing (Metropolis algorithm, accept worse solutions probabilistically, escape local minima). (3) Routing: Steiner tree (minimum-length tree connecting pins), A* search, maze routing, negotiation-based (rip-up and reroute). (4) Timing optimization: logic restructuring, buffer insertion (van Ginneken algorithm), gate sizing (Lagrangian relaxation). (5) Machine learning: prediction models (timing, power, routability from partial data), reinforcement learning for placement (Google's RL-based chip placement, 2020). Collaborate with universities - Berkeley (SPICE, Magic), CMU, Stanford, MIT. Publish at conferences: DAC, ICCAD, DATE, ISPD.

**Step 96-108: Software Architecture and Performance**
Large designs: 20-50 billion transistors (M3 chip), 100-500 GB data. Performance critical: multi-threading (place-and-route 100+ cores), distributed computing (LSF or SGE job scheduler, run 1,000+ jobs across cluster). Memory: 256 GB to 1 TB RAM per job. Database: hierarchical design database (HDB), incremental updates. File formats: LEF/DEF (physical layout), Verilog/VHDL (RTL), Liberty (.lib, timing), SPEF (parasitics), GDSII (final layout), OASIS (compressed GDSII). Interoperability: tools from different vendors work together (Cadence+Synopsys hybrid flows common). APIs: TCL scripting, Python bindings. Licensing: FlexLM (floating licenses, concurrent users), node-locked. Security: encryption (protect IP), obfuscation (prevent reverse engineering).

**Step 109-118: Quality Assurance and [Validation](validation-testing)**
Test suite: thousands of designs (small test cases, full chips, corner cases). Regression testing: nightly builds, run test suite, compare results (golden reference). Continuous integration (Jenkins, GitLab CI). Bug tracking: Jira, internal systems. Benchmarks: ISPD placement contest, ICCAD routing contest (compare algorithms against competitors). Tapeout validation: design real chips using tool, fabricate, test silicon (ultimate validation - tool bugs cause silicon failures, extremely expensive). Beta testing: partnership with lead customers (Apple, Qualcomm, NVIDIA design early chips with pre-release tools, report bugs). Release cycle: major version annually, patches quarterly. Backward compatibility: support 3-5 prior versions.

**Step 119-130: [Computing Infrastructure](data-center) and IT**
On-premise servers or cloud (AWS, Azure, GCP). CPU requirements: high core count (AMD EPYC 64-128 cores, Intel Xeon 56-96 cores). Memory: 256 GB to 2 TB per server. Storage: NFS or parallel filesystems (Lustre, GPFS), 1-10 PB total. Network: InfiniBand or 100 GbE (low-latency, high-bandwidth). Workload management: LSF, SGE, Slurm (batch schedulers). Peak usage: tape-out crunch (100-500 servers × 2 weeks). Amortized: 50-100 servers steady-state. Cost: $10-50M capex, $2-5M/year opex. Tool runtime: synthesis 4-12 hours, place-and-route 12-48 hours, parasitic extraction 6-24 hours, DRC 4-12 hours, LVS 2-8 hours (for large SoC). Total: 50-100 CPU-years for one tapeout.

**Step 131-140: Licensing and Business Model**
Subscription model: annual license fees. Prices (2020s): (1) Synthesis (Design Compiler): $300K-500K/year per seat. (2) Place-and-route (ICC2, Innovus): $500K-1M/year. (3) Simulation (VCS, Xcelium): $200K-400K/year. (4) Formal verification (Formality, JasperGold): $150K-300K/year. (5) Analog (Virtuoso, Custom Compiler): $100K-200K/year. Full suite (all tools for complete SoC design): $5-15M/year for large company (10-50 seats, various tools). Maintenance: 15-20% of license fee/year (updates, support). Perpetual licenses rare (vendors prefer recurring revenue). Node licensing: per-core or per-CPU. Compliance audits: vendors check license usage (over-deployment heavily penalized). Academic licenses: free or deeply discounted for universities (build mindshare, train future engineers). Open-source EDA: emerging (OpenROAD, Qflow, Magic, KLayout) but far behind commercial quality.

Development: 5-10 years to build competitive toolset from scratch. Ongoing: 500-2,000 engineers total (large EDA company). Acquisition-driven consolidation: Synopsys acquired 15+ EDA companies 2010-2020, Cadence 10+. Barriers to entry: decade of algorithm development, extensive validation, foundry partnerships (PDKs), customer relationships. Three-player market: Synopsys #1, Cadence #2, Siemens #3. Niche players: Ansys (electromagnetic simulation), Keysight (RF design), Silvaco (TCAD). Price: Tools sold by annual subscription, not per-unit. $30 cost in M3 chip context represents allocated tool cost per chip designed (amortize $10M tool cost over 300K chips designed per product generation).
