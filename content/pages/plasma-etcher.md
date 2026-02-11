---
title: "Plasma Etching Machine"
company: "Lam Research / Tokyo Electron / Applied Materials"
country: "USA / Japan"
selling_price: 12
inputs:
  - name: "RF Power Supply"
    cost: 3
    link: "rf-generator"
  - name: "Process Chamber"
    cost: 4
    link: "aluminum-chamber"
  - name: "Gas Delivery System"
    cost: 2
    link: "mass-flow-controllers"
  - name: "Vacuum Pumps"
    cost: 2
    link: "turbomolecular-pump"
  - name: "Wafer Chuck"
    cost: 1
    link: "electrostatic-chuck"
value_created: 0
---

# How to Make Plasma Etching Machine

Semiconductor tool using reactive plasma to etch silicon, oxides, and metals. Creates trenches, vias, and patterns with sub-10nm resolution. Two types: RIE (reactive ion etching) and ICP (inductively coupled plasma).

## Components:
[Process Chamber](aluminum-chamber) (aluminum or anodized). [RF Power Supply](rf-generator) (13.56 MHz or 2-27 MHz) creates plasma. [Gas Delivery](mass-flow-controllers): CF₄, CHF₃, Cl₂, BCl₃, etc. [Vacuum Pumps](turbomolecular-pump) maintain 1-100 mTorr. [Electrostatic Chuck](electrostatic-chuck) holds wafer, controls temperature.

**Process:** Feed etch gases. RF power ionizes gas → plasma. Ions accelerated toward wafer. Chemical reaction + physical sputtering removes material. Selectivity: etch one material 100× faster than another. Anisotropy: vertical etch (high ion energy) vs isotropic (chemical only).

Cost: $5-10 million. Critical for all chip patterning. Etch selectivity and profile control determine device performance.
