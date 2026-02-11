---
title: "Metal Interconnect Layers"
company: "Material Suppliers"
country: "Various"
selling_price: 10
inputs:
  - name: "Copper Metal"
    cost: 6
    link: "copper-metal"
  - name: "Aluminum Metal"
    cost: 2
    link: "aluminum-metal"
  - name: "Tungsten Metal"
    cost: 2
    link: "tungsten-metal"
value_created: 0
---

# How to Make Metal Interconnect Layers

Multi-level wiring connecting billions of transistors. Modern chips: 10-15 metal layers. Lower layers (M1-M3): fine pitch (40-100nm), local connections. Upper layers (M10-M15): coarse pitch (200-1000nm), global power/signals.

**[Copper](copper-metal):** Main interconnect metal. Low resistivity (1.7 µΩ·cm). Deposited by electroplating. Dual-damascene process: etch trenches/vias, fill with copper, CMP polish.

**[Aluminum](aluminum-metal):** Used in older processes and top metal. Deposited by sputtering. Patterned by etch.

**[Tungsten](tungsten-metal):** Via plugs between metal layers. Deposited by CVD from WF₆.

Stack: M1 (40nm wide) → via → M2 (50nm) → ... → M15 (1µm). Total metal thickness: 5-10µm. Resistance and capacitance of wires limit chip speed - RC delay. Advanced nodes use low-k dielectrics (reduce capacitance) and copper (reduce resistance).
