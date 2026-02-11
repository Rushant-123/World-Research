---
title: "Chip Design Files"
company: "Apple (Internal Design Team)"
country: "United States"
selling_price: 100
inputs:
  - name: "EDA Software"
    cost: 30
    link: "design-automation-tools"
  - name: "Design Engineers"
    cost: 50
    link: "chip-designers"
  - name: "Simulation Tools"
    cost: 15
    link: "verification-software"
  - name: "Design Libraries"
    cost: 5
    link: "cell-libraries"
value_created: 0
---

# How to Make Chip Design Files

Complete circuit layout for M3 chip. 3-5 years development, 1000+ engineers, $1-3 billion cost. GDSII format files defining every transistor, wire, via.

[Chip Designers](chip-designers) use [EDA Software](design-automation-tools) (Cadence, Synopsys, Mentor). RTL design → synthesis → place & route → verification. [Simulation Tools](verification-software) verify functionality, timing, power. [Design Libraries](cell-libraries) provide standard cells (AND, OR, flip-flops). Result: GDSII files + verification reports. Files: 100-500 GB. Contains 20-50 billion transistors for M3. Tape-out: final design sent to TSMC.

Design reuse critical - CPU cores, GPU, Neural Engine blocks developed over years. New chip: integrate blocks, add new features, optimize for new process node.
