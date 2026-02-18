# World Research - Supply Chain Database

A comprehensive visualization of the supply chain needed to build a modern website, spanning 6 distance levels from website to raw ore extraction.

## Statistics

- **1,413 products** documented with detailed manufacturing processes
- **6,532 supply chain connections** between products
- **50 countries** involved in production
- **6 distance levels**: Website → Utilities → Infrastructure → Components → Materials → Raw Ores → Mining Equipment

## Data Quality

This database uses a **hybrid approach** to ensure both breadth and accuracy:

### Verified Data
- **Top 100 critical companies**: Real data gathered from verified sources including:
  - Company annual reports and investor relations
  - Industry databases and trade publications
  - Official company websites and press releases
  - Government regulatory filings
- Marked with ✓ **Verified** badge (green)
- Includes `last_verified` date
- Sources documented in `data/real-data-sources.json`

### Estimated Data
- **Remaining entities**: Plausible estimates based on industry standards and heuristics
- Marked with ~ **Estimated** badge (orange)
- Generated using our [transparent estimation methodology](/docs/estimation-methods.md)
- Subject to replacement as real data becomes available

### How to Identify Data Quality

Every product and company page displays a data quality badge:
- ✓ **Verified** (green) = Real data from documented sources
- ~ **Estimated** (orange) = Calculated using industry-standard algorithms

### Our Commitment to Transparency

We believe transparency is essential for data integrity:
- All estimation rules are documented and publicly available
- Sources for verified data are cited and dated
- Methodology is open for review and improvement
- Users can identify data quality at a glance

### Progressive Enhancement Strategy

We continuously improve data quality by:
1. **Prioritizing critical nodes**: Top 100 companies by market impact get verified data first
2. **Replacing estimates**: As we research entities, estimates are upgraded to verified data
3. **Regular updates**: Quarterly reviews ensure data remains current
4. **Community input**: User corrections help improve accuracy

### Using This Data

**For general exploration**: Both verified and estimated data provide valuable insights into supply chain complexity.

**For business decisions**: Always verify critical data points independently. Use estimated data as directional guidance, not precise values.

**For research**: Consult the [estimation methodology documentation](/docs/estimation-methods.md) to understand assumptions and limitations.

### Learn More

- [Estimation Methodology](/docs/estimation-methods.md) - Detailed explanation of how estimates are calculated
- [Research Workflow](/docs/research-workflow.md) - Process for gathering verified data
- [Data Sources](/data/real-data-sources.json) - Citations for verified information

## Overview

A Wikipedia-style website that traces how everything in our technological world is made, from finished products down through their supply chains to raw natural resources.

## Concept

Each page answers: **"How do you make THIS?"**

- Lists the immediate inputs required (one level deep)
- Shows step-by-step instructions for assembly/manufacturing
- Displays economic value created at each step
- Links to pages for each input component

Navigate by clicking hyperlinks to explore deeper. Start with a familiar product and follow the chain down to natural resources like sand, ores, and trees.

## Features

- **Interactive Force Graph**: Animated visualization showing the full supply chain network
- **Sunburst Diagram**: Radial hierarchy of all 1,407 interconnected products across 6 distance levels
- **Sankey Flow Diagram**: Cost flows through 6 supply chain levels
- **Search & Browse**: Explore all products with detailed manufacturing steps
- **Live Statistics**: Track products, connections, countries, and price ranges

## Example Chain

This Website → Claude Code → Mac Computer → M3 Chip → Silicon Wafer → Purified Silicon → Quartzite Sand

## Structure

- **Homepage**: Introduction and starting point
- **Content**: Individual pages for each product/component/material
- **Format**: Markdown files with YAML frontmatter
- **Output**: Static HTML site built with Hugo

## Running Locally

```bash
# Install Hugo
brew install hugo

# Start development server
hugo server

# Build static site
hugo
```

Visit `http://localhost:1313` to explore the supply chain.

## Deployment

The site is deployed on Vercel with automatic deployments from GitHub:

1. Push code to GitHub repository
2. Connect repository to Vercel
3. Vercel automatically detects Hugo and builds the site
4. Each push triggers a new deployment

Configuration is in `vercel.json` (Hugo 0.155.3, build command, output directory).

## Content Format

Each page includes:
- Title and manufacturer info
- Complete list of inputs with costs
- Value created (selling price - input costs)
- "How to Make" instructions written for clarity
- Hyperlinks to all component pages

## Goal

Help people understand the complexity of modern civilization by showing the interconnected web of economic activities that create everyday technology.
