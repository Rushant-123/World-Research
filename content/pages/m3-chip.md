---
title: "M3 Chip"
company: "TSMC"
country: "Taiwan"
selling_price: 300
inputs:
  - name: "Silicon Wafer"
    cost: 50
    link: "silicon-wafer"
  - name: "Chip Design Files"
    cost: 100
    link: "chip-design"
  - name: "Photomask Set"
    cost: 80
    link: "photomask"
  - name: "EUV Lithography Machine"
    cost: 15
    link: "euv-lithography"
  - name: "Photoresist Chemicals"
    cost: 8
    link: "photoresist"
  - name: "Developer Chemicals"
    cost: 3
    link: "developer-chemicals"
  - name: "Ultra-Pure Water"
    cost: 5
    link: "ultra-pure-water"
  - name: "Plasma Etching Machine"
    cost: 12
    link: "plasma-etcher"
  - name: "Chemical Etchants"
    cost: 4
    link: "chemical-etchants"
  - name: "Ion Implanter"
    cost: 10
    link: "ion-implanter"
  - name: "Boron Dopant"
    cost: 1
    link: "boron-dopant"
  - name: "Phosphorus Dopant"
    cost: 1
    link: "phosphorus-dopant"
  - name: "Arsenic Dopant"
    cost: 1
    link: "arsenic-dopant"
  - name: "Oxidation Furnace"
    cost: 8
    link: "oxidation-furnace"
  - name: "Oxygen Gas"
    cost: 2
    link: "oxygen-gas"
  - name: "CVD Machine"
    cost: 10
    link: "cvd-machine"
  - name: "Copper Metal"
    cost: 6
    link: "copper-metal"
  - name: "Aluminum Metal"
    cost: 2
    link: "aluminum-metal"
  - name: "Tungsten Metal"
    cost: 2
    link: "tungsten-metal"
  - name: "CMP Equipment"
    cost: 8
    link: "cmp-equipment"
  - name: "Polishing Slurry"
    cost: 3
    link: "polishing-slurry"
  - name: "Rapid Thermal Annealer"
    cost: 5
    link: "thermal-annealer"
  - name: "Metrology Tools"
    cost: 7
    link: "metrology-equipment"
  - name: "Wafer Inspection System"
    cost: 6
    link: "wafer-inspection"
  - name: "Diamond Wafer Saw"
    cost: 4
    link: "diamond-saw"
  - name: "Die Attach Equipment"
    cost: 3
    link: "die-attach"
  - name: "Wire Bonding Machine"
    cost: 4
    link: "wire-bonder"
  - name: "Gold Wire"
    cost: 2
    link: "gold-wire"
  - name: "Package Substrate"
    cost: 8
    link: "package-substrate"
  - name: "Molding Compound"
    cost: 2
    link: "molding-compound"
  - name: "Cleanroom Facility"
    cost: 80
    link: "cleanroom-facility"
  - name: "Nitrogen Gas"
    cost: 3
    link: "nitrogen-gas"
  - name: "Electricity"
    cost: 25
    link: "electricity"
  - name: "Automated Handling Systems"
    cost: 12
    link: "wafer-handling"
  - name: "Testing Equipment"
    cost: 10
    link: "testing-equipment"
  - name: "Fab Workers"
    cost: 40
    link: "semiconductor-labor"
value_created: -341
---

# How to Make an M3 Chip

**Top Market Leaders:**
- [Tsmc](/companies/tsmc)
- [Samsung Electronics](/companies/samsung-electronics)
- [Intel](/companies/intel)



The M3 chip is Apple's custom-designed processor manufactured by TSMC (Taiwan Semiconductor Manufacturing Company) using advanced 3-nanometer process technology. It combines CPU, GPU, and Neural Engine on a single piece of silicon.

## What is it?

A system-on-a-chip (SoC) containing billions of transistors packed into a tiny area. It handles all computing tasks for Mac computers including processing, graphics, machine learning, and power management. Designed by Apple in California, manufactured by TSMC in Taiwan.

## Steps to Make:

**Preparation Phase:**
1. Receive [Chip Design Files](chip-design) from Apple containing the complete circuit layout
2. Create a [Photomask Set](photomask) - glass plates with chrome patterns that define each layer of the chip (requires 50-100 different masks for all layers)
3. Obtain pristine 300mm [Silicon Wafer](silicon-wafer) with perfectly flat, mirror-polished surface
4. Transport wafer into [Cleanroom Facility](cleanroom-facility) with Class 1 air quality (less than 1 particle per cubic foot)
5. [Fab Workers](semiconductor-labor) wear full cleanroom suits (bunny suits) to prevent contamination
6. Use [Automated Handling Systems](wafer-handling) robots to move wafers between tools
7. All equipment powered by [Electricity](electricity) with precise voltage control

**Well Formation (Creating Transistor Regions):**
8. Clean wafer with [Ultra-Pure Water](ultra-pure-water) and chemicals to remove any particles
9. Place wafer in [Oxidation Furnace](oxidation-furnace) at 1000°C with [Oxygen Gas](oxygen-gas) flowing
10. Grow a thin silicon dioxide (SiO2) layer on the wafer surface (10-100 nanometers thick)
11. Spin-coat [Photoresist Chemicals](photoresist) onto the wafer - a light-sensitive polymer
12. Bake the photoresist at 90-130°C to harden it
13. Load the first [Photomask](photomask) into the [EUV Lithography Machine](euv-lithography)
14. Align the mask to nanometer precision using laser interferometry
15. Expose the wafer with extreme ultraviolet light (13.5nm wavelength) for a few seconds
16. The light passes through the mask, exposing specific areas of photoresist
17. Use [Developer Chemicals](developer-chemicals) to dissolve the exposed photoresist
18. Rinse with ultra-pure water and dry with [Nitrogen Gas](nitrogen-gas)
19. Inspect the pattern with [Metrology Tools](metrology-equipment) to verify precision
20. Load wafer into [Plasma Etching Machine](plasma-etcher)
21. Use reactive plasma to etch away exposed oxide, creating trenches in specific areas
22. Strip remaining photoresist with oxygen plasma
23. Use [Ion Implanter](ion-implanter) to shoot [Boron Dopant](boron-dopant) ions into specific regions at high energy
24. This creates P-type semiconductor regions for PMOS transistors
25. Repeat photolithography process (steps 11-22) with different mask
26. Implant [Phosphorus Dopant](phosphorus-dopant) or [Arsenic Dopant](arsenic-dopant) to create N-type regions for NMOS transistors
27. Place wafer in [Rapid Thermal Annealer](thermal-annealer) at 1000°C for seconds to activate dopants

**Gate Formation (Transistor Control):**
28. Grow ultra-thin gate oxide layer (just a few atoms thick) in oxidation furnace
29. Deposit polysilicon or metal gate material using [CVD Machine](cvd-machine)
30. Use photolithography to pattern the gate structures
31. Etch the gate material with precision plasma etching
32. Implant additional dopants near the gates (source and drain regions)
33. Grow spacer oxide on the sides of gates for isolation
34. Use [Wafer Inspection System](wafer-inspection) to check for defects at nanometer scale

**Metal Interconnect Layers (Wiring the Transistors):**
35. Deposit insulating dielectric layer across entire wafer using CVD
36. Use [CMP Equipment](cmp-equipment) with [Polishing Slurry](polishing-slurry) to flatten the surface
37. Pattern the dielectric with photolithography to create holes (vias) where connections are needed
38. Etch vias down to the transistor contacts
39. Deposit thin barrier metal (titanium or tantalum) to prevent [Copper Metal](copper-metal) diffusion
40. Electroplate copper into the vias and trenches
41. Polish away excess copper with CMP until only filled vias remain
42. Repeat steps 35-41 for each metal layer (typically 10-15 layers for advanced chips)
43. Use [Aluminum Metal](aluminum-metal) for top-level connections and pads
44. Use [Tungsten Metal](tungsten-metal) for vertical connections between layers
45. Each layer must be precisely aligned to layers below (within nanometers)
46. Use metrology tools after each layer to verify alignment and dimensions
47. Ask an adult to help with chemical handling as [Chemical Etchants](chemical-etchants) are hazardous

**Final Processing:**
48. Deposit final protective layer (passivation) over the entire chip
49. Open bond pad areas with photolithography and etching
50. Inspect every chip on the wafer with automated optical inspection
51. Perform electrical probe testing - tiny needles touch bond pads to test functionality
52. Mark defective chips with ink dot so they'll be discarded later
53. The entire front-end process takes 3-4 months with 700-1000 individual steps

**Packaging (Back-End):**
54. Mount wafer on adhesive film
55. Use [Diamond Wafer Saw](diamond-saw) to cut between chips (dicing)
56. Each wafer yields 500-1000 individual chips depending on size
57. Use [Die Attach Equipment](die-attach) to pick good chips and mount on [Package Substrate](package-substrate)
58. The substrate has copper traces and connections
59. Use [Wire Bonding Machine](wire-bonder) to attach ultra-thin [Gold Wire](gold-wire) from chip pads to package
60. Alternatively, use flip-chip bonding with solder bumps for higher performance
61. Inject [Molding Compound](molding-compound) (epoxy resin) to encapsulate the chip
62. Cure the molding compound at 175°C for several hours
63. Mark the package with chip information using laser etching
64. Trim and form the package leads

**Testing:**
65. Use [Testing Equipment](testing-equipment) to run comprehensive electrical tests
66. Test at different voltages and temperatures (-40°C to 125°C)
67. Run built-in self-test (BIST) patterns to verify all circuits
68. Test CPU cores, GPU cores, memory controllers, and Neural Engine
69. Measure power consumption and maximum clock speed
70. Sort chips by performance: regular M3, M3 Pro, or M3 Max bins
71. Chips that don't meet full specs may be sold as lower-end variants
72. Reject chips that fail critical tests

**Final Steps:**
73. Package working chips in anti-static trays
74. Seal in moisture barrier bags with desiccant
75. Ship to Apple assembly facilities in China
76. Total process from wafer start to packaged chip: 3-5 months
77. Yield is typically 70-90% (defects from particles, process variations, or design issues)

The M3 chip fabrication represents the pinnacle of human manufacturing precision - creating billions of transistors with features smaller than a virus, where every step must be controlled to atomic-level precision. The [Cleanroom Facility](cleanroom-facility) is 10,000 times cleaner than a hospital operating room, and the entire process requires hundreds of precisely calibrated machines working 24/7.
