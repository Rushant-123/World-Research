---
title: "Intel Corporation"
type: "companies"
industry: "Semiconductors"
country: "USA"
founded: 1968
revenue: 54200000000
market_cap: 195000000000
employees: 124800

products:
  - name: "CPU"
    link: "cpu"
    market_share: 68
  - name: "Server Processors"
    link: "server-cpu"
    market_share: 72
  - name: "Data Center Chips"
    link: "datacenter-chip"
    market_share: 75

financials:
  revenue_breakdown:
    - category: "Client Computing (PC CPUs)"
      amount: 24900000000
      percentage: 46
    - category: "Data Center & AI"
      amount: 15000000000
      percentage: 28
    - category: "Network & Edge"
      amount: 7600000000
      percentage: 14
    - category: "Foundry Services"
      amount: 3800000000
      percentage: 7
    - category: "Other (Mobileye, Altera)"
      amount: 2900000000
      percentage: 5

  cost_breakdown:
    - category: "Manufacturing & Fab Operations"
      amount: 20500000000
      percentage: 38
      details: "14 fabs globally, EUV equipment, cleanroom operations, yield management"
    - category: "Research & Development"
      amount: 15400000000
      percentage: 28
      details: "Process node development (Intel 4, Intel 3, Intel 20A), new architectures"
    - category: "Materials & Wafers"
      amount: 7100000000
      percentage: 13
      details: "300mm silicon wafers, photoresists, gases, metals for interconnects"
    - category: "Equipment & Tooling"
      amount: 4900000000
      percentage: 9
      details: "Lithography steppers, deposition tools, etching equipment, metrology"
    - category: "Labor & Operations"
      amount: 3800000000
      percentage: 7
      details: "124,800 employees, engineers, fab operators, corporate staff"
    - category: "Energy & Utilities"
      amount: 2500000000
      percentage: 5
      details: "Massive electricity for fabs, ultrapure water, facility operations"

  profit_margin: 6.3
  operating_margin: 12.1
---

# Intel Corporation - The x86 Legacy Leader

Intel dominated the PC and server CPU markets for decades through its x86 architecture monopoly, but faces existential challenges from ARM competitors and its own manufacturing struggles.

## Business Model

Intel is an Integrated Device Manufacturer (IDM) - they design AND manufacture their own chips in their own fabs. This vertical integration was their advantage for 30 years, but became a liability when manufacturing fell behind TSMC.

## Market Position

**Still dominant in traditional computing:**
- **68% of PC CPU market** (2024) - down from 85% in 2019
- **72% of server CPU market** - down from 98% in 2017
- **Legacy x86 moat** - decades of software compatibility, entire industry built around Intel

**Losing ground rapidly:**
- **AMD taking share** - 32% PC, 28% server (up from 5-15% in 2017)
- **ARM threatening** - Apple M-series proving ARM can match x86 performance
- **Manufacturing crisis** - 4+ years behind TSMC in process technology

## Revenue Drivers

### Client Computing (46% - $24.9B)

Desktop and laptop processors, still Intel's core business:

**Core i-series (mainstream):**
- Core i3/i5/i7/i9 - $150-600 per CPU
- 150-200M units/year
- OEM partners: Dell, HP, Lenovo (70% of sales)
- DIY/retail: 30% of sales

**Performance gaps:**
- Single-thread: Still competitive with AMD
- Multi-thread: AMD Ryzen beats Intel 20-40% at same price
- Power efficiency: Intel draws 50-100W more than AMD/Apple for same performance

**Declining ASPs:**
- Average selling price down from $250 to $180 (2019-2024)
- Forced to cut prices to compete with AMD
- Losing high-end gaming/workstation to AMD Threadripper

### Data Center & AI (28% - $15B)

Server processors, historically Intel's cash cow:

**Xeon Scalable (mainstream):**
- $1,000-10,000 per CPU
- Cloud providers: AWS, Azure, Google Cloud (40% of sales)
- Enterprise: Traditional data centers (35%)
- HPC/supercomputing: Research labs, government (25%)

**Crisis points:**
- **AMD EPYC taking share** - 28% market share, up from 5% in 2019
- **128 cores vs Intel's 60** - AMD offers 2x cores at same power
- **Cloud defection** - AWS Graviton (ARM), Google Axion (ARM) replacing Xeon
- **AI displacement** - Nvidia GPUs doing inference, Intel losing to specialized chips

**AI accelerators (struggling):**
- Habana Gaudi AI chips - $5,000-15,000 per chip
- Competing against Nvidia H100 ($25,000-40,000)
- Minuscule market share (<2% vs Nvidia's 90%)

### Network & Edge (14% - $7.6B)

Networking chips, IoT, and edge computing:

- **5G infrastructure** - Base station processors
- **Network interface cards** - Data center networking
- **IoT/embedded** - Industrial, automotive, edge devices
- **Modest growth** - stable business, not strategic focus

### Foundry Services (7% - $3.8B)

Intel trying to become a foundry like TSMC:

**Intel Foundry Services (IFS):**
- Launched 2021, manufacturing chips for others
- Early customers: Qualcomm, Amazon, MediaTek
- **Problem:** Intel's process is inferior to TSMC
- **Why would anyone use Intel 4 when TSMC N3 is better?**

**Foundry economics:**
- Need $80-100B in orders to break even
- Currently have <$10B committed
- Massive capex sink with unclear path to profitability

## Cost Structure

### Manufacturing (38% - $20.5B)

Intel operates 14 fabs worldwide (the most of any chipmaker):

**Fab costs:**
- **Arizona, Oregon, New Mexico, Ireland, Israel**
- Each 300mm fab costs $10-20B to build
- Operating cost: $2-4B per fab per year
- **EUV lithography** - ASML machines $380M each, Intel has 30+
- **Yield challenges** - Intel 4 and Intel 3 nodes have low yields (60-70% vs TSMC's 90%+)

**Manufacturing disadvantage:**
- Intel's cost per wafer is 30-50% higher than TSMC
- Lower yields mean more waste
- Older equipment (10nm generation struggles)

### R&D (28% - $15.4B)

Highest R&D spending in semiconductors (even more than Samsung):

**Process technology:**
- **Intel 4** (7nm equivalent) - production 2024, yields improving
- **Intel 3** (5nm equivalent) - ramping 2024-2025
- **Intel 20A** (2nm, GAA transistors) - 2025 target
- **Intel 18A** (sub-2nm) - 2026 goal

**Problem:** Spending more on R&D but STILL behind TSMC

**Architecture development:**
- x86 core improvements (smaller gains each generation)
- GPU development - Arc graphics (competing with Nvidia/AMD)
- AI accelerator design - trying to catch Nvidia

### Equipment & Tooling (9% - $4.9B)

Constantly upgrading fabs with new equipment:

- **EUV lithography** - Adding more ASML EUV scanners ($380M each)
- **High-NA EUV** - Next-gen EUV ($400M+ per tool)
- **Deposition/etching** - Applied Materials, Lam Research tools
- **Metrology** - KLA inspection tools for quality control

**Capex crisis:**
- Intel spending $25-30B/year on capex
- TSMC spending $35-45B/year (outspending Intel)
- Intel can't keep up financially

## Strategic Crisis

Intel faces multiple existential threats:

### 1. Manufacturing Collapse

- **Lost leadership to TSMC** - 4 years behind in process technology
- Tried to catch up with Intel 4/3/20A/18A aggressive roadmap
- **Yields still poor** - 60-70% on Intel 4 vs 90%+ at TSMC
- **Cost disadvantage** - More expensive to make chips than TSMC

### 2. AMD Resurgence

- AMD + TSMC partnership devastating Intel
- AMD designs on TSMC 5nm/3nm outperform Intel's own-fab 10nm/7nm
- **Proof that fabless > IDM** in current era

### 3. ARM Invasion

- **Apple M-series** - Proved ARM can match x86 performance with 1/3 power
- **Qualcomm Snapdragon X** - Windows on ARM becoming viable
- **Cloud ARM** - AWS Graviton, Google Axion replacing Xeon
- x86 compatibility moat eroding

### 4. AI Displacement

- **Data centers buying Nvidia GPUs instead of Intel CPUs**
- AI workloads don't run on CPUs
- Intel's AI chips (Gaudi) have <2% market share
- Missing the biggest compute revolution in 20 years

### 5. Financial Strain

- Profit margins collapsed from 60% to 6%
- $25B annual capex burning cash
- Dividend cut, layoffs, cost reduction
- Can't afford to both catch up in manufacturing AND compete in design

## Attempted Turnaround (Pat Gelsinger, CEO since 2021)

**IDM 2.0 strategy:**
1. **Regain process leadership** - Intel 18A by 2026
2. **Become a foundry** - IFS to compete with TSMC
3. **Use external fabs** - TSMC for some Intel chips (admission of defeat)
4. **$100B US fab investment** - New Arizona, Ohio fabs with CHIPS Act subsidies

**Success probability: Low**

- Intel 18A delayed multiple times
- IFS has no major customers committed
- Using TSMC undermines own fabs
- Burning billions while still years behind

## Why Intel Matters (Despite Crisis)

- **x86 compatibility** - Decades of software, can't disappear overnight
- **National security** - US/EU want domestic chip manufacturing
- **Scale** - One of few companies that CAN build advanced fabs
- **Enterprise inertia** - IT departments won't switch overnight

But the trajectory is clear: Intel shrinking from monopoly to one player among many.

Intel's decline is a case study in how manufacturing advantage can erode, how fabless competitors can outmaneuver vertically integrated incumbents, and how architectural moats (x86) eventually crumble when performance gaps become too large.
