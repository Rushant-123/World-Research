#!/usr/bin/env python3
"""
Generate detailed manufacturing content for Distance 4 pages.
"""

def generate_chemical_liquid_steps(page_id, title):
    """Generate steps for solvents and liquid chemicals."""
    steps = []

    # Determine if it's organic solvent or acid
    is_acid = 'acid' in page_id.lower()
    is_solvent = 'solvent' in page_id.lower()

    if is_solvent:
        # Organic solvent production
        steps.extend([
            f"1. Source petroleum crude oil feedstock at 42° API gravity containing aromatic and aliphatic hydrocarbon fractions for {title} production.",
            "2. Transport crude oil via pipeline to refinery facility equipped with atmospheric and vacuum distillation columns.",
            "3. Pre-heat crude oil to 350°C in fired heater using natural gas burners achieving 85% thermal efficiency.",
            "4. Feed heated crude into atmospheric distillation tower operating at 1 atm pressure with 40 theoretical trays.",
            "5. Separate crude into fractions: light naphtha (30-90°C), heavy naphtha (90-200°C), kerosene, diesel, and residue.",
            "6. Collect naphtha fraction containing C5-C10 hydrocarbons as feedstock for solvent extraction process.",
            "7. Transfer naphtha to hydrotreating unit to remove sulfur, nitrogen, and oxygen impurities via catalytic hydrogenation.",
            "8. Heat naphtha to 340°C and mix with hydrogen gas at 35 bar pressure over CoMo/Al2O3 catalyst bed.",
            "9. Convert sulfur compounds to H2S and nitrogen to NH3, removing to <0.5 ppm sulfur in treated naphtha.",
            "10. Cool hydrotreated naphtha and separate hydrogen for recycling using pressure swing adsorption unit.",
        ])

        steps.extend([
            "11. Pump desulfurized naphtha to fractionation column for precise boiling point separation.",
            "12. Operate fractionation tower with 60 trays maintaining reflux ratio of 5:1 for high purity separation.",
            "13. Extract specific boiling range fraction matching solvent requirements (e.g., 100-140°C for specific solvent).",
            f"14. Achieve 99.5% purity {title} by controlling cut points within ±2°C temperature tolerance.",
            "15. Analyze distillate using gas chromatography-mass spectrometry verifying chemical composition and impurity profile.",
            "16. Test evaporation rate, kauri-butanol value, and solvency parameters confirming solvent performance specifications.",
            "17. Measure water content using Karl Fischer titration ensuring <100 ppm moisture for anhydrous applications.",
            "18. Check acidity by pH measurement or acid number titration verifying neutral pH 6-8 range.",
            "19. Determine flash point using Pensky-Martens closed cup method confirming safety rating above 23°C.",
            "20. Measure density at 20°C using Anton Paar densitometer recording 0.750-0.850 g/mL typical for organic solvents.",
        ])

        steps.extend([
            "21. Test aromatic content using ASTM D1319 fluorescent indicator adsorption method.",
            "22. Measure refractive index at 20°C verifying optical properties for quality control.",
            "23. Perform color assessment using APHA/Hazen scale targeting <10 color units for high-purity solvent.",
            "24. Analyze residue after evaporation by heating sample to dryness measuring <5 mg/L non-volatile matter.",
            "25. Check for peroxide formation in ether-type solvents using potassium iodide test ensuring storage stability.",
            "26. Conduct solvent extractiontest measuring ability to dissolve target polymers, resins, or compounds.",
            "27. Verify regulatory compliance testing for VOC content, toxicity, and environmental parameters.",
            "28. Filter solvent through 5-micron cartridge filter removing particulate contamination.",
            "29. Dehydrate solvent using molecular sieve 3A or 4A desiccant columns achieving <50 ppm water content.",
            "30. Regenerate molecular sieve beds by heating to 250°C under nitrogen purge for 4 hours.",
        ])

        steps.extend([
            "31. Transfer purified solvent to stainless steel storage tanks with nitrogen blanketing preventing oxidation.",
            "32. Maintain storage temperature at 15-25°C in temperature-controlled tank farm with spill containment.",
            "33. Install explosion-proof electrical systems and grounding throughout solvent handling areas.",
            "34. Implement vapor recovery system capturing solvent vapors during tank filling operations reducing emissions by 98%.",
            "35. Monitor tank farm with continuous gas detection systems alarm at 10% lower explosive limit.",
            "36. Pump solvent through stainless steel piping with welded connections eliminating leak points.",
            "37. Install flame arrestors on tank vents preventing external ignition sources from entering vapor space.",
            "38. Sample stored solvent monthly testing stability and verifying no degradation during storage.",
            "39. Package solvent in UN-rated steel drums (200 L capacity) or IBC totes (1000 L) for distribution.",
            "40. Clean containers with solvent rinse before filling ensuring no cross-contamination from previous contents.",
        ])

        steps.extend([
            "41. Fill containers using bottom-loading system minimizing static electricity generation and vapor release.",
            "42. Leave 5% headspace in containers for thermal expansion during transportation.",
            "43. Seal containers with bung caps featuring gaskets resistant to solvent permeation.",
            "44. Label containers with GHS hazard pictograms: flame symbol and health hazard warnings.",
            "45. Apply product identification labels showing chemical name, CAS number, lot number, and fill date.",
            "46. Attach safety data sheet (SDS) to each shipment providing emergency response information.",
            "47. Mark containers with UN number (e.g., UN1173, UN1993) and proper shipping name per DOT regulations.",
            "48. Stage packaged solvent in flammable liquid storage warehouse with fire suppression systems.",
            "49. Load drums onto pallets using stretch wrap for stabilization during transport.",
            "50. Shroud pallets with polyethylene film protecting labels and preventing environmental exposure.",
        ])

    elif is_acid:
        # Acid production process
        steps.extend([
            f"1. Design chemical production facility for manufacturing {title} with acid-resistant materials and safety systems.",
            "2. Install glass-lined or Hastelloy reactors capable of withstanding highly corrosive acid environments.",
            "3. Source raw material feedstock chemicals required for acid synthesis reaction.",
            "4. Receive concentrated reagents in specialized tanker trucks with corrosion-resistant linings.",
            "5. Pump reagents to storage tanks made from fiberglass-reinforced plastic or PTFE-lined steel.",
            "6. Implement secondary containment around acid storage areas capturing 110% of tank volume.",
            "7. Charge reactor with reactant chemicals in stoichiometric ratios calculated from reaction equation.",
            "8. Add catalyst (if required) to accelerate reaction and improve yield.",
            "9. Control reaction temperature using jacketed reactor with chilled water or steam heating.",
            "10. Monitor reaction progress by measuring pH, temperature, and pressure every 15 minutes.",
        ])

        steps.extend([
            "11. Allow reaction to proceed until conversion reaches >98% based on titration analysis.",
            "12. Cool reaction mixture to 40°C preparing for product separation and purification.",
            "13. Transfer crude acid product to separation equipment for removal of byproducts and unreacted materials.",
            "14. Employ distillation, crystallization, or extraction techniques depending on acid properties.",
            "15. Distill volatile acid compounds under vacuum conditions reducing decomposition at high temperatures.",
            "16. Condense purified acid vapors using Teflon-coated heat exchangers preventing corrosion.",
            "17. Collect distilled acid in receiving tanks achieving 95-99% purity after single distillation pass.",
            "18. Perform additional purification steps if semiconductor-grade or electronic-grade purity required (99.999%).",
            "19. Filter acid through PTFE membrane filters removing particulate contamination to <1 μm.",
            "20. Analyze acid concentration using titration with standardized base solution (e.g., NaOH).",
        ])

        steps.extend([
            "21. Measure trace metal impurities using ICP-MS detecting ppb levels of Fe, Ni, Cr, Cu contaminants.",
            "22. Check for organic impurities using TOC (total organic carbon) analyzer ensuring <10 ppm for high purity.",
            "23. Verify acid strength by measuring specific gravity using hydrometer or densitometer.",
            "24. Test electrical conductivity confirming ionic strength appropriate for acid concentration.",
            "25. Perform boiling point measurement validating purity and concentration of acid product.",
            "26. Blend acid to target concentration by diluting with deionized water if required by specifications.",
            "27. Mix diluted acid thoroughly using Teflon-coated impellers ensuring homogeneous concentration.",
            "28. Re-test concentration after dilution verifying accuracy within ±0.5% of target value.",
            "29. Transfer finished acid to HDPE or glass storage bottles for smaller volumes (<20 L).",
            "30. Fill large volume containers (drums, totes) using PTFE or PVDF pumps and piping systems.",
        ])

        steps.extend([
            "31. Purge container headspace with nitrogen for acids sensitive to moisture or oxygen.",
            "32. Seal containers with chemically resistant closures preventing vapor escape and contamination ingress.",
            "33. Label containers with GHS corrosive symbol and appropriate hazard statements (H314, H335, etc.).",
            "34. Package containers in overpack boxes with absorbent material for spill containment during shipping.",
            "35. Store packaged acid in segregated corrosive materials warehouse separated from bases and oxidizers.",
            "36. Maintain warehouse ventilation with 10 air changes per hour removing acid vapors.",
            "37. Install acid neutralization system for emergency spill response using sodium carbonate or lime.",
            "38. Conduct routine inspections of containers checking for leaks, corrosion, or degradation.",
            "39. Implement inventory tracking system recording production date, lot number, and shelf life.",
            "40. Prepare shipping documentation including SDS, commercial invoice, and hazmat paperwork.",
        ])

        steps.extend([
            f"41. Load {title} onto trucks with hazmat placards following DOT/IMDG dangerous goods regulations.",
            "42. Provide driver with emergency response procedures and 24-hour emergency contact number.",
            "43. Ship acid to semiconductor fabs, metal surface treatment facilities, and chemical manufacturers.",
            "44. Ensure compliance with transportation regulations including proper placarding and documentation.",
            "45. Track shipments using GPS monitoring providing real-time location visibility.",
            "46. Deliver product with chain-of-custody documentation ensuring traceability from production to end-use.",
            "47. Collect customer feedback on acid performance, purity, and packaging suitability.",
            "48. Maintain technical support team providing application guidance and troubleshooting assistance.",
            "49. Conduct annual customer audits ensuring proper handling, storage, and safety procedures followed.",
            "50. Archive production batch records for 10 years enabling traceability and quality investigations.",
        ])

    return steps

def save_page(page_id, title, company, country, price, inputs, steps):
    """Save generated page content to markdown file."""

    # Create frontmatter
    frontmatter = f"""---
title: "{title}"
company: "{company}"
country: "{country}"
selling_price: {price:.2f}"""

    if inputs:
        frontmatter += "\ninputs:"
        for inp in inputs:
            frontmatter += f"\n  - name: \"{inp['name']}\""
            frontmatter += f"\n    cost: {inp['cost']:.2f}"
            frontmatter += f"\n    link: \"{inp['link']}\""

        total_input_cost = sum(inp['cost'] for inp in inputs)
        value_created = price - total_input_cost
        frontmatter += f"\nvalue_created: {value_created:.2f}"
    else:
        frontmatter += f"\nvalue_created: {price:.2f}"

    frontmatter += "\n---\n\n"

    # Combine frontmatter and steps
    content = frontmatter + "\n".join(steps)

    # Save to file
    filepath = f"./content/pages/{page_id}.md"
    with open(filepath, 'w') as f:
        f.write(content)

    return filepath

# Export functions
__all__ = ['generate_chemical_liquid_steps', 'save_page']
