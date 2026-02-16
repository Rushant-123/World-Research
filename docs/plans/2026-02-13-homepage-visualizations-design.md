# Homepage Visualizations Design

## Context

The World-Research site has **633 pages** documenting the supply chain of Claude Code, tracing from software down to raw materials. The data includes:
- **3,416 dependency edges** across 6 distance levels
- **~30 countries** (USA 40%, Japan 10%, Taiwan 5%, China 4%, Germany 4%)
- **Price range spanning 11 orders of magnitude** ($0.001 to $800M)
- Root node: Claude Code -> Mac/AWS/Electricity -> chips/displays/batteries -> raw materials

The current homepage is plain HTML with intro text and a single CTA link.

## Design: Five-Section Scrolling Experience

The homepage becomes a full-screen scrolling experience. Each section is viewport-height. Sections animate in as you scroll into them.

---

### Section 1: "The Big Bang" — Force-Directed Graph Hero

**What:** Full-viewport animated force graph. On load, a single glowing node ("Claude Code") appears center-screen. After 1 second, it explodes — its 7 direct inputs fly outward and connect with glowing edges. Then those 7 explode into 78 nodes (Distance 2). Then Distance 3 floods in (463 nodes). The graph settles into a living, breathing network.

**Counter overlay:** As nodes appear, a counter ticks up in the corner: "1 product... 8 inputs... 86 dependencies... 549 things needed to build Claude Code"

**Interaction:**
- Hover any node: tooltip shows name, company, country, price
- Click any node: navigates to that page
- Drag nodes to rearrange
- Mouse wheel zooms
- Nodes colored by distance level (bright center, cooler edges)
- Node size proportional to log(selling_price + 1)

**Tech:** D3.js force simulation rendered to `<canvas>` for performance. WebGL fallback not needed — canvas handles 600 nodes fine. Tooltips via an overlay HTML div positioned on hover.

**Data source:** Hugo generates a JSON file at build time (`/data/graph.json`) containing all nodes and edges extracted from page frontmatter.

**Performance:** Canvas rendering, quadtree for hover detection, force simulation with alpha decay. Lazy-load Distance 3+ nodes after initial animation completes.

---

### Section 2: "Where It All Comes From" — 3D Globe

**What:** A slowly auto-rotating 3D globe. As you scroll into view, glowing arcs shoot from the USA outward to every country in the supply chain. Each arc's brightness/thickness proportional to the number of products from that country. Country labels appear on hover.

**Data points:**
- USA: ~250 products (brightest)
- Japan: 63 products
- Taiwan: 30
- China: 24
- Germany: 23
- South Korea: 14
- France: 11
- + 20 more countries

**Interaction:**
- Drag to rotate globe
- Hover on a country arc: shows "Japan: 63 products" with top examples
- Click: filters the explorer (Section 5) to that country

**Tech:** Three.js with a simple earth texture (or stylized wireframe globe). Arcs as THREE.CubicBezierCurve3 with animated particles traveling along them. Minimal — no heavy textures, just clean geometric globe with glowing connections.

---

### Section 3: "Layers of Complexity" — Sunburst Chart

**What:** A radial sunburst/partition chart. Center ring = Claude Code. Second ring = 7 Distance-1 inputs. Third ring = 78 Distance-2 inputs. Fourth ring = 463 Distance-3 inputs. Each segment sized by the number of its own dependencies (fan-out). Color-coded by rough category.

**Categories (derived from page names/content):**
- Blue: Software & Computing
- Green: Raw Materials & Mining
- Orange: Electronics & Semiconductors
- Red: Energy & Power
- Purple: Manufacturing & Labor
- Teal: Networking & Infrastructure

**Interaction:**
- Hover: highlight segment + show tooltip (name, cost, # dependencies)
- Click: zoom into that segment (it becomes the new center, showing its own dependency tree)
- Breadcrumb trail at top to navigate back

**Tech:** D3.js partition/sunburst layout. SVG for crisp rendering (segment count manageable). Animated transitions on zoom.

---

### Section 4: "Follow the Money" — Animated Cost Flow

**What:** A horizontal Sankey diagram showing how costs cascade. Left side: raw materials and their costs. Middle: intermediate manufacturing. Right: final products → Claude Code. Animated glowing particles flow left-to-right along the links, representing money flowing through the supply chain.

**Key flows to highlight:**
- $800M Offshore Platform → Oil → Plastics → Components → Mac → Claude Code
- $45M Turbine Generator → Electricity → AWS → Claude Code
- $0 (Open Source Software) → Python/PyTorch → Training → Claude Code

The contrast between the $800M physical infrastructure and $0 software is visually striking.

**Interaction:**
- Hover a flow: highlights the full path and shows total cost
- Click a node: navigates to that page

**Tech:** D3-sankey plugin for layout. Canvas overlay for animated particles. Show top ~50 most interesting paths (not all 3,416 edges — would be unreadable).

---

### Section 5: "Dive In" — Search & Explorer

**What:** A search bar at the top. Below it: a responsive grid of cards for all 633 pages. Each card shows:
- Product name
- Company & country flag emoji
- Selling price
- Number of inputs
- Distance from Claude Code (as a small badge)

**Filtering:**
- Search by name (fuzzy/instant)
- Filter by distance level (0-6)
- Filter by country
- Sort by: name, price (asc/desc), most dependencies, distance

**Tech:** Vanilla JS. Hugo generates a JSON index at build time. No framework needed — it's just filtering/sorting an array and rendering cards. CSS Grid for layout.

---

### Sticky Stats Bar

A thin bar fixed to the top (appears after scrolling past the hero):
- "633 products | 3,416 connections | 30+ countries | $0.001 to $800M"

---

## Data Pipeline

Hugo generates two JSON files at build time via custom templates in `layouts/`:

### `/data/graph.json`
```json
{
  "nodes": [
    {"id": "claude-code", "title": "Claude Code", "company": "Anthropic", "country": "USA", "price": 200, "distance": 0},
    ...
  ],
  "edges": [
    {"source": "this-website", "target": "claude-code", "cost": 20},
    ...
  ],
  "stats": {
    "totalPages": 633,
    "totalEdges": 3416,
    "countries": 30,
    "maxPrice": 800000000,
    "minPrice": 0.001
  }
}
```

### `/data/index.json`
Array of all pages with metadata for the explorer search/filter.

These are generated by Hugo templates (`layouts/_default/index.json`) that iterate over all pages.

## File Structure

```
static/
  js/
    graph-data.js      # Hugo-generated JSON embedded or fetched
    hero-graph.js      # D3 force simulation (Section 1)
    globe.js           # Three.js globe (Section 2)
    sunburst.js        # D3 sunburst (Section 3)
    sankey.js          # D3 sankey + particles (Section 4)
    explorer.js        # Search/filter/sort (Section 5)
  css/
    style.css          # Full site styles
layouts/
  index.html           # Updated homepage template
  _default/
    single.html        # Existing page template (minor updates)
    index.json         # Hugo template to generate JSON data
```

## External Dependencies (CDN)

- D3.js v7 (~90KB gzipped)
- Three.js r160 (~60KB gzipped, only core)
- d3-sankey plugin (~5KB)

All loaded from CDN with local fallbacks.

## Scroll Behavior

Each section is `100vh`. Sections use `IntersectionObserver` to trigger animations only when scrolled into view (no wasted computation). The force graph in Section 1 pauses simulation when scrolled away.

## Color Palette

Dark theme (dark navy/black background) to make the glowing visualizations pop:
- Background: `#0a0a1a`
- Node glow: distance-based gradient (gold → cyan → blue → purple)
- Text: `#e0e0e0`
- Accent: `#00d4ff` (electric cyan)
- Links: `#ff6b35` (warm orange)

## Mobile

- Section 1: Force graph with reduced node count (Distance 0-2 only), touch drag
- Section 2: Static globe image with animated arcs (no Three.js on mobile)
- Section 3: Sunburst works natively on touch
- Section 4: Simplified vertical flow instead of horizontal Sankey
- Section 5: Single-column card grid, sticky search bar

## Performance Budget

- First contentful paint: < 1.5s (hero graph starts with just 1 node)
- Time to interactive: < 3s
- Total JS bundle: ~200KB gzipped (D3 + Three.js + custom code)
- JSON data: ~80KB gzipped (633 nodes + 3,416 edges)
