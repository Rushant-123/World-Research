# Supply Chain of Technology

A Wikipedia-style website that traces how everything in our technological world is made, from finished products down through their supply chains to raw natural resources.

## Concept

Each page answers: **"How do you make THIS?"**

- Lists the immediate inputs required (one level deep)
- Shows step-by-step instructions for assembly/manufacturing
- Displays economic value created at each step
- Links to pages for each input component

Navigate by clicking hyperlinks to explore deeper. Start with a familiar product and follow the chain down to natural resources like sand, ores, and trees.

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

## Content Format

Each page includes:
- Title and manufacturer info
- Complete list of inputs with costs
- Value created (selling price - input costs)
- "How to Make" instructions written for clarity
- Hyperlinks to all component pages

## Goal

Help people understand the complexity of modern civilization by showing the interconnected web of economic activities that create everyday technology.
