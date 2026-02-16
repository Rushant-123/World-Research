# World Research - Supply Chain Database

A comprehensive visualization of the supply chain needed to build a modern website, spanning 6 distance levels from website to raw ore extraction.

## Statistics

- **1,413 products** documented with detailed manufacturing processes
- **6,532 supply chain connections** between products
- **50 countries** involved in production
- **6 distance levels**: Website → Utilities → Infrastructure → Components → Materials → Raw Ores → Mining Equipment

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
