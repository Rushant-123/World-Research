# Supply Chain of Technology - Design Document

**Date:** 2026-02-11
**Project:** World Research - Supply Chain Documentation Website

## Overview

A Wikipedia-style website that documents how everything in our technological world is made, tracing products down through their supply chains to raw natural resources. The site is self-referential - it documents its own creation as the first example.

## Purpose

Educational tool for understanding civilization's complexity. A new human can explore from "Claude Code AI assistant" down through computers, chips, silicon, and sand mining to understand the interconnected web of economic activities that enable modern technology.

## Core Concept

Each page answers: "How do you make THIS?" with:
- The immediate inputs required (one level down)
- Step-by-step instructions (understandable by a 15-year-old)
- Economic value created at this step
- The company/entity that performs this work

Navigation is through hyperlinks - click any input to see how THAT is made. Continue clicking until you reach natural resources (ores, sand, trees, crude oil, water).

## Page Structure

Each page is a markdown file with YAML frontmatter:

```markdown
---
title: Mac Computer
company: Apple
country: United States
selling_price: 2000
inputs:
  - name: M3 Chip
    cost: 300
    link: m3-chip
  - name: Logic Board
    cost: 120
    link: logic-board
  - name: Display Panel
    cost: 150
    link: display-panel
  - name: Display Cable
    cost: 5
    link: display-cable
  - name: Aluminum Chassis
    cost: 80
    link: aluminum-chassis
  - name: Lithium Battery
    cost: 50
    link: lithium-battery
  - name: Power Cables
    cost: 3
    link: power-cables
  - name: Speakers
    cost: 15
    link: speakers
  - name: Camera Module
    cost: 20
    link: camera-module
  - name: USB-C Ports
    cost: 8
    link: usb-c-ports
  - name: Screws & Fasteners
    cost: 2
    link: metal-fasteners
  - name: Thermal Paste
    cost: 1
    link: thermal-paste
  - name: Assembly Labor
    cost: 220
    link: electronics-assembly
  - name: macOS Software
    cost: 26
    link: macos
value_created: 1200
---

# How to Make a Mac Computer

A Mac is a personal computer that runs macOS. Apple designs the computer and assembles it from components made by suppliers worldwide.

## Steps to Make:

1. Obtain an M3 chip from TSMC (see [M3 Chip](m3-chip))
2. Get a logic board designed for the M3 architecture (see [Logic Board](logic-board))
3. Get a Retina display panel (see [Display Panel](display-panel))
4. Source display cables to connect the panel (see [Display Cable](display-cable))
5. Machine an aluminum chassis (see [Aluminum Chassis](aluminum-chassis))
6. Source a lithium-ion battery (see [Lithium Battery](lithium-battery))
7. Get power cables for internal connections (see [Power Cables](power-cables))
8. Source speakers for audio output (see [Speakers](speakers))
9. Install camera module for video calls (see [Camera Module](camera-module))
10. Get USB-C ports for connectivity (see [USB-C Ports](usb-c-ports))
11. Gather screws and fasteners (see [Screws & Fasteners](metal-fasteners))
12. Obtain thermal paste for heat management (see [Thermal Paste](thermal-paste))
13. In a clean assembly facility, have trained workers mount the M3 chip to the logic board (see [Assembly Labor](electronics-assembly))
14. Apply thermal paste to the chip
15. Connect the display cable to the logic board
16. Install the battery and connect power cables
17. Mount speakers and camera module
18. Install USB-C ports
19. Mount everything inside the aluminum chassis using screws
20. Seal the chassis (may require special tools - ask an adult)
21. Install macOS operating system (see [macOS](macos))
22. Test all functions before packaging
```

## Key Design Principles

### Complete Input Tracking
Every component mentioned in the "How to Make" steps MUST appear in the inputs list with cost and hyperlink. No exceptions. This ensures complete traceability.

### Process Authenticity
The "How to Make" section describes what that company/entity actually does in the real supply chain:
- Apple: Assembly steps
- TSMC: Chip fabrication process (photolithography, etching, doping)
- Mining company: Extraction process (drilling, blasting, hauling)
- Software company: Development and testing steps

### Educational Clarity
Instructions should be understandable by a 15-year-old. When dangerous processes are involved (soldering, high voltage, chemical handling), include "Ask an adult to help with this step."

### Economic Transparency
Each page shows:
- Selling price (what this outputs)
- Total input costs (sum of all inputs)
- Value created (selling price - input costs)

This can be negative (hobby projects, subsidized goods) or positive (value-added manufacturing/services).

### Natural Resource Endpoints
Supply chains terminate at naturally occurring resources:
- Ores (iron ore, bauxite, copper ore)
- Sand/silicon dioxide
- Crude oil
- Trees/wood
- Water
- Coal
- Natural gas

Tools to extract these resources (drills, trucks) themselves trace back to ores, creating circularity, but the true leaf nodes are what's extracted from nature.

## Technical Architecture

### Static Site Generator
**Hugo** - Fast, simple, works well with markdown + frontmatter

### Project Structure
```
world-research/
├── content/
│   └── pages/
│       ├── this-website.md
│       ├── claude-code.md
│       ├── mac.md
│       ├── m3-chip.md
│       ├── silicon-wafer.md
│       ├── sand-mining.md
│       └── ...
├── layouts/
│   ├── _default/
│   │   ├── single.html      # Template for individual pages
│   │   └── list.html        # Template for index/search
│   └── index.html           # Homepage
├── static/
│   ├── css/
│   │   └── style.css
│   └── js/
│       └── search.js
├── config.toml              # Hugo configuration
├── docs/
│   └── plans/
│       └── [this file]
└── README.md
```

### File Organization
Flat structure - all pages in `content/pages/` directory. No folders or categories. Items like "Nickel" appear at different depths depending on the path taken (Battery → Nickel vs Electric Car → Battery → Nickel), so folder hierarchy doesn't make sense.

### Page Template Layout
```
┌─────────────────────────────────────┐
│ [Home] [Search]    Supply Chain of Technology │
├─────────────────────────────────────┤
│                                     │
│ # Mac Computer                      │
│ Made by: Apple (United States)      │
│                                     │
│ ┌─────────────────────────────┐   │
│ │ Inputs Required             │   │
│ │ • M3 Chip - $300            │   │
│ │ • Logic Board - $120        │   │
│ │ • Display Panel - $150      │   │
│ │ • ...                       │   │
│ │ Total Input Cost: $800      │   │
│ └─────────────────────────────┘   │
│                                     │
│ ┌─────────────────────────────┐   │
│ │ Value Created: $1,200       │   │
│ │ Selling Price: $2,000       │   │
│ │ Input Cost: $800            │   │
│ └─────────────────────────────┘   │
│                                     │
│ ## How to Make a Mac Computer       │
│                                     │
│ A Mac is a personal computer...    │
│                                     │
│ ### Steps to Make:                  │
│ 1. Obtain an M3 chip from TSMC...  │
│ 2. Get a Retina display panel...   │
│ ...                                 │
└─────────────────────────────────────┘
```

### Visual Design
- Clean, minimal, Wikipedia-like aesthetic
- Blue underlined hyperlinks (classic web)
- Box highlights for inputs and value created
- Mobile responsive
- Sans-serif font, good readability

## Site Structure

### Homepage
- **Title:** "Supply Chain of Technology"
- **Explanation:** Brief description of the project's purpose
- **Main Call-to-Action:** "How was I built?" button
- **First Link:** "This Website" - the site documents its own creation

### The First Page: This Website
```markdown
---
title: This Website
company: Rushant
country: United States
selling_price: 0
inputs:
  - name: Claude Code
    cost: 20
    link: claude-code
  - name: Mac Computer
    cost: 2000
    link: mac
  - name: Electricity
    cost: 2
    link: electricity
  - name: Internet Connection
    cost: 5
    link: internet-connection
  - name: Hugo Static Site Generator
    cost: 0
    link: hugo
  - name: GitHub Pages Hosting
    cost: 0
    link: github-pages
  - name: Domain Name
    cost: 12
    link: domain-registration
value_created: -2039
---

# How to Make This Website

This website documents supply chains from finished products down to raw materials. It's a static site built with Hugo and hosted on GitHub Pages.

## Steps to Make:

1. Use Claude Code to plan and design the site (see [Claude Code](claude-code))
2. Write content in markdown files on a Mac (see [Mac Computer](mac))
3. Install Hugo static site generator (see [Hugo](hugo))
4. Configure Hugo with templates and styles
5. Build the site with `hugo build` command
6. Create a GitHub repository
7. Push the site to GitHub (see [Internet Connection](internet-connection))
8. Enable GitHub Pages hosting (see [GitHub Pages](github-pages))
9. Configure custom domain (see [Domain Name](domain-registration))
10. Use electricity throughout the process (see [Electricity](electricity))
```

This self-referential starting point demonstrates the concept immediately.

## Navigation Features

### Basic Navigation
- Home button (return to homepage)
- Search bar (JavaScript-based, no backend needed)
- Browser back button

### Future Enhancements (Not MVP)
- Breadcrumb trails showing path taken
- "Used in" reverse links (what uses this component)
- Random page button
- Filter by country, company, or value range

## Content Strategy

### Phase 1: Single Complete Chain
Start with "This Website" and trace ONE complete path down to raw materials:
- This Website → Claude Code → Mac, AWS Bedrock → M3 Chip, Data Center → Silicon Wafer, Electricity → Sand Mining, Power Plant → Sand, Coal → ...

This creates one full demonstration of the concept from digital service to earth's crust.

### Phase 2: Branch Expansion
From the initial chain, add missing branches:
- Mac also needs Display, Battery, Aluminum
- Each of those branches out to their raw materials
- AWS Data Center needs Servers, Cooling, Building
- Continue branching

### Phase 3: Cross-Links
As more pages are created, many will share common inputs:
- Aluminum appears in Mac, iPhone, Cars, Aircraft
- Electricity appears in almost everything
- Silicon appears in all electronics

These create the web structure naturally.

### Content Accuracy Approach
- Costs are approximate/representative (exact prices vary by time and volume)
- Focus on educational clarity over precision
- Simplify complex processes while maintaining accuracy
- Can add optional sources/references section in footer

### Page Creation Workflow
1. Identify missing link (e.g., click on "M3 Chip" but page doesn't exist)
2. Research: Who makes it? What company/country? What are ALL the inputs? What's the actual manufacturing process?
3. Write markdown file with complete frontmatter
4. Write "How to Make" steps in simple language
5. Verify EVERY component in steps appears in inputs list
6. Estimate costs and calculate value created
7. Build site and verify links work

## Future Expansion (Post-MVP)

### Bidirectional Links
Add "Used to Make" section showing what each item creates/enables:
- Mac → This Website, iPhone Apps, Movies, Music, Video Games, etc.
- Each output becomes its own page linking back

This creates infinite exploration in both directions.

### Other Product Categories
- Other technology: iPhone, Tesla, Data Center
- Non-tech products: Coffee, T-shirt, Book, House
- Services: Education, Healthcare, Transportation

### Community Contributions
- Open source the content
- Accept pull requests for new pages
- Validation process for accuracy

## Success Metrics

The website succeeds if a curious person can:
1. Start with a familiar technology product
2. Navigate down through the supply chain
3. Reach raw natural resources
4. Understand the complexity and interconnection of modern civilization
5. Feel wonder at how many steps create everyday objects

## Next Steps

1. Initialize Hugo project
2. Create homepage and first page template
3. Write "This Website" page
4. Write 5-10 connected pages (Claude Code, Mac, basic components)
5. Deploy to GitHub Pages
6. Iterate and expand

---

*This design emphasizes simplicity, educational value, and complete traceability. Start small with one chain, prove the concept, then grow organically.*
