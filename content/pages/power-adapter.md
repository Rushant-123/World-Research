---
title: "Power Adapter (Charger)"
company: "Flextronics / Delta / Salcomp"
country: "China / Taiwan / Finland"
selling_price: 25
inputs:
  - name: "AC-DC Converter IC"
    cost: 3
    link: "power-ic"
  - name: "Transformer"
    cost: 4
    link: "high-frequency-transformer"
  - name: "Rectifier Diodes"
    cost: 1
    link: "schottky-diodes"
  - name: "MOSFETs"
    cost: 2
    link: "power-mosfets"
  - name: "Capacitors"
    cost: 2
    link: "electrolytic-capacitors"
  - name: "PCB"
    cost: 2.5
    link: "power-supply-pcb"
  - name: "Plastic Housing"
    cost: 3
    link: "adapter-housing"
  - name: "USB-C Cable"
    cost: 4
    link: "usb-cable"
  - name: "AC Plug"
    cost: 1.5
    link: "ac-plug"
  - name: "Assembly"
    cost: 2
    link: "adapter-assembly"
value_created: 0
---

# How to Make a Power Adapter

A switching power supply that converts AC mains (110-240V) to DC voltage (5-20V) for laptop charging. Modern MacBook adapters: 30-140W output via USB-C with Power Delivery protocol. Compact design using high-frequency switching (50-150 kHz) and GaN (gallium nitride) transistors for efficiency.

## What is it?

Switch-mode power supply (SMPS) in compact housing. Converts 100-240V AC 50/60Hz to regulated DC output. Uses flyback or LLC resonant topology. Efficiency: 88-94%. Power Factor Correction (PFC) stage improves AC input quality. USB Power Delivery controller negotiates voltage/current with laptop. Safety features: overvoltage, overcurrent, overtemperature protection. UL/CE/FCC certified.

## Key Components and Process (see inputs for details):
- Rectifies AC to high voltage DC (~400V)
- High-frequency switching (50-150 kHz) steps down voltage efficiently
- Output rectification and filtering to clean DC
- Feedback loop maintains stable output voltage (±1%)
- USB-PD IC communicates with laptop via CC wire
- Thermal management: heat dissipation through case
- EMI filtering prevents electrical noise on AC line

Manufacturing involves SMT assembly of power electronics, potting with thermally conductive epoxy, housing assembly, high-voltage testing (3 kV hipot test), and load testing at full power.
