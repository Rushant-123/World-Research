# Homepage Visualizations Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Transform the minimal homepage into a five-section scrolling experience with animated force graph, 3D globe, sunburst chart, Sankey cost flow, and searchable explorer.

**Architecture:** Hugo generates a JSON data file at build time from page frontmatter. The homepage loads this JSON and feeds it to five independent visualization modules (D3.js + Three.js). Each section uses IntersectionObserver to animate on scroll. Dark theme throughout.

**Tech Stack:** Hugo templates, D3.js v7 (CDN), Three.js r160 (CDN), d3-sankey plugin, vanilla JS, CSS custom properties for theming.

---

### Task 1: Generate Graph JSON Data at Build Time

**Files:**
- Create: `layouts/_default/index.json` (Hugo template that outputs JSON)
- Modify: `hugo.toml` (add JSON output format)
- Modify: `analyze-dependencies.js` (enhance to output full graph data with titles, countries, prices)

**Step 1: Update `hugo.toml` to support JSON output**

Add to `hugo.toml`:
```toml
[outputs]
  home = ["HTML", "JSON"]

[outputFormats.JSON]
  baseName = "index"
  mediaType = "application/json"
```

**Step 2: Create `layouts/_default/index.json`**

This Hugo template iterates all pages in `content/pages/` and outputs a JSON graph:

```json-template
{{- $nodes := slice -}}
{{- $edges := slice -}}
{{- $countries := dict -}}
{{- range where .Site.RegularPages "Section" "pages" -}}
  {{- $slug := .File.ContentBaseName -}}
  {{- $node := dict "id" $slug "title" .Title "company" (.Params.company | default "") "country" (.Params.country | default "") "price" (.Params.selling_price | default 0) -}}
  {{- $nodes = $nodes | append $node -}}
  {{- range .Params.inputs -}}
    {{- $edge := dict "source" $slug "target" .link "cost" (.cost | default 0) "name" .name -}}
    {{- $edges = $edges | append $edge -}}
  {{- end -}}
{{- end -}}
{{- dict "nodes" $nodes "edges" $edges | jsonify -}}
```

**Step 3: Run `hugo` and verify `public/index.json` is generated**

Run: `hugo --quiet && cat public/index.json | python3 -m json.tool | head -30`
Expected: Valid JSON with `nodes` array and `edges` array.

**Step 4: Create enhanced data generator script**

Create `scripts/build-graph-data.js` — a Node.js script that reads all pages and outputs a richer JSON file with pre-computed distances, stats, and country aggregations. This runs as a pre-build step and writes to `static/data/graph.json`:

```js
// Reads all content/pages/*.md files
// Parses YAML frontmatter (title, company, country, selling_price, inputs)
// Runs BFS from claude-code to compute distances
// Outputs: { nodes: [...], edges: [...], stats: {...}, countries: {...} }
```

Fields per node: `id, title, company, country, price, distance, inputCount`
Fields per edge: `source, target, cost, name`
Stats: `totalNodes, totalEdges, countryCount, maxPrice, minPrice, distanceCounts`
Countries: `{ "USA": { count: 250, totalValue: ... }, ... }`

**Step 5: Run script and verify output**

Run: `node scripts/build-graph-data.js && cat static/data/graph.json | python3 -m json.tool | head -50`
Expected: JSON file with all nodes, edges, stats, countries.

**Step 6: Commit**

```bash
git add hugo.toml layouts/_default/index.json scripts/build-graph-data.js static/data/graph.json
git commit -m "feat: add build-time JSON data generation for visualizations"
```

---

### Task 2: Dark Theme CSS + Homepage Layout Scaffold

**Files:**
- Modify: `static/css/style.css` (add dark theme for homepage, keep light theme for single pages)
- Modify: `layouts/index.html` (new five-section structure)

**Step 1: Add homepage dark theme CSS to `static/css/style.css`**

Add new CSS at the end of the existing file. The homepage uses a completely different layout from single pages. Key styles:

```css
/* === HOMEPAGE DARK THEME === */
body.homepage-body {
  background: #0a0a1a;
  color: #e0e0e0;
  padding: 0;
  margin: 0;
  overflow-x: hidden;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif;
}

body.homepage-body .container { /* override */ }

.viz-section {
  width: 100vw;
  min-height: 100vh;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.section-title {
  position: absolute;
  top: 40px;
  left: 50%;
  transform: translateX(-50%);
  font-size: 1.2rem;
  text-transform: uppercase;
  letter-spacing: 0.3em;
  color: #ffffff40;
  z-index: 10;
  pointer-events: none;
}

/* Stats bar */
.stats-bar { ... }

/* Section-specific containers */
#hero-canvas { width: 100%; height: 100%; }
#globe-container { width: 100%; height: 100%; }
#sunburst-container { width: 80%; max-width: 900px; }
#sankey-container { width: 90%; max-width: 1200px; height: 80vh; }
#explorer-container { width: 90%; max-width: 1200px; padding: 60px 0; }

/* Explorer search + cards */
.explorer-search { ... }
.explorer-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 16px; }
.explorer-card { background: #12122a; border: 1px solid #ffffff15; border-radius: 8px; padding: 20px; }
.explorer-card:hover { border-color: #00d4ff40; }

/* Tooltip */
.viz-tooltip { position: fixed; background: #1a1a2e; border: 1px solid #00d4ff40; ... }

/* Color palette as CSS vars */
:root {
  --viz-bg: #0a0a1a;
  --viz-accent: #00d4ff;
  --viz-warm: #ff6b35;
  --viz-text: #e0e0e0;
  --viz-muted: #ffffff40;
  --dist-0: #ffd700;
  --dist-1: #ff6b35;
  --dist-2: #00d4ff;
  --dist-3: #7b68ee;
  --dist-4: #4a4a8a;
}
```

**Step 2: Update `layouts/index.html` with five-section scaffold**

Replace current content with:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{{ .Site.Title }}</title>
    <link rel="stylesheet" href="/css/style.css">
</head>
<body class="homepage-body">

    <!-- Sticky Stats Bar -->
    <div class="stats-bar" id="stats-bar">
        <span id="stat-pages">0 products</span>
        <span class="stats-divider">|</span>
        <span id="stat-edges">0 connections</span>
        <span class="stats-divider">|</span>
        <span id="stat-countries">0 countries</span>
        <span class="stats-divider">|</span>
        <span id="stat-price-range">$0 – $0</span>
    </div>

    <!-- Section 1: Force Graph Hero -->
    <section class="viz-section" id="section-hero">
        <div class="section-title">The Supply Chain of Everything</div>
        <canvas id="hero-canvas"></canvas>
        <div class="hero-counter" id="hero-counter"></div>
    </section>

    <!-- Section 2: Globe -->
    <section class="viz-section" id="section-globe">
        <div class="section-title">Where It All Comes From</div>
        <div id="globe-container"></div>
    </section>

    <!-- Section 3: Sunburst -->
    <section class="viz-section" id="section-sunburst">
        <div class="section-title">Layers of Complexity</div>
        <div id="sunburst-container"></div>
    </section>

    <!-- Section 4: Sankey -->
    <section class="viz-section" id="section-sankey">
        <div class="section-title">Follow the Money</div>
        <div id="sankey-container"></div>
    </section>

    <!-- Section 5: Explorer -->
    <section class="viz-section viz-section--tall" id="section-explorer">
        <div id="explorer-container">
            <h2 class="explorer-heading">Explore All Products</h2>
            <div class="explorer-controls">
                <input type="text" id="explorer-search" placeholder="Search 633 products..." />
                <select id="explorer-distance-filter">
                    <option value="">All distances</option>
                </select>
                <select id="explorer-country-filter">
                    <option value="">All countries</option>
                </select>
                <select id="explorer-sort">
                    <option value="name">Sort by name</option>
                    <option value="price-desc">Price (high to low)</option>
                    <option value="price-asc">Price (low to high)</option>
                    <option value="inputs">Most dependencies</option>
                    <option value="distance">Distance</option>
                </select>
            </div>
            <div class="explorer-grid" id="explorer-grid"></div>
        </div>
    </section>

    <!-- Shared tooltip -->
    <div class="viz-tooltip" id="viz-tooltip" style="display:none;"></div>

    <!-- CDN Libraries -->
    <script src="https://cdn.jsdelivr.net/npm/d3@7/dist/d3.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/d3-sankey@0.12/dist/d3-sankey.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/three@0.160.0/build/three.min.js"></script>

    <!-- App Scripts -->
    <script src="/js/data-loader.js"></script>
    <script src="/js/hero-graph.js"></script>
    <script src="/js/globe.js"></script>
    <script src="/js/sunburst.js"></script>
    <script src="/js/sankey.js"></script>
    <script src="/js/explorer.js"></script>
    <script src="/js/main.js"></script>
</body>
</html>
```

**Step 3: Verify Hugo builds**

Run: `hugo --quiet`
Expected: No errors.

**Step 4: Commit**

```bash
git add static/css/style.css layouts/index.html
git commit -m "feat: homepage dark theme and five-section layout scaffold"
```

---

### Task 3: Data Loader Module

**Files:**
- Create: `static/js/data-loader.js`

**Step 1: Write data-loader.js**

This module fetches `/data/graph.json`, computes distances via BFS, and exposes a global `window.graphData` object for all visualizations:

```js
// Fetches /data/graph.json
// Builds adjacency map from edges
// Runs BFS from "claude-code" to assign distances
// Normalizes country names (USA/United States -> USA, etc.)
// Computes stats: totalNodes, totalEdges, countryCount, priceRange, distanceCounts
// Exposes: window.graphData = { nodes, edges, nodeMap, stats, countries, distanceLevels }
// Fires custom event "graphDataReady" on document when done
```

Key data structures:
- `nodeMap`: Map from slug -> node object (for O(1) lookup)
- `distanceLevels`: Map from distance -> array of node slugs
- `countries`: Map from normalized country -> { count, nodes }

**Step 2: Verify it loads**

Add temporary `console.log(window.graphData.stats)` and check browser console.

**Step 3: Commit**

```bash
git add static/js/data-loader.js
git commit -m "feat: add data loader module for graph JSON"
```

---

### Task 4: Hero Force Graph (Section 1)

**Files:**
- Create: `static/js/hero-graph.js`

This is the most complex visualization. It renders a D3 force-directed graph on a `<canvas>` element with staged animation.

**Step 1: Write hero-graph.js with basic force layout**

Core structure:
```js
// HeroGraph class
// - constructor(canvasId, graphData)
// - init(): sets up canvas, creates D3 force simulation
// - animate(): staged reveal — Distance 0 first, then 1, 2, 3 with delays
// - render(): draws nodes and edges on canvas each frame
// - setupInteraction(): mouse hover (quadtree lookup), click, drag, zoom
// - pause()/resume(): stop/start simulation when off-screen

// Force simulation config:
// - forceLink: edges, distance based on distance level
// - forceManyBody: charge -30 (repulsion)
// - forceCenter: canvas center
// - forceCollide: radius based on node size
// - alphaDecay: 0.01 (slow settle for dramatic effect)

// Node rendering:
// - Circle with glow effect (shadowBlur on canvas)
// - Color by distance: gold(0) -> orange(1) -> cyan(2) -> purple(3) -> grey(4+)
// - Radius: max(3, 2 + log10(price + 1))
// - Labels shown on hover only (to avoid clutter)

// Edge rendering:
// - Thin lines with low opacity (#ffffff10)
// - Highlighted edge turns bright when hovering connected node

// Staged animation:
// 1. Frame 0: Show only claude-code node, pulsing gold
// 2. After 1.5s: Fly in Distance-1 nodes with spring animation
// 3. After 3s: Fly in Distance-2 nodes
// 4. After 4.5s: Flood in Distance-3 nodes
// 5. Counter ticks up in sync: "1... 8... 86... 549 things"

// Hover interaction:
// - Build quadtree from node positions each frame
// - On mousemove: find nearest node within 20px
// - Show tooltip div positioned at mouse
// - Highlight node + connected edges

// Click: window.location.href = `/pages/${node.id}/`
```

**Step 2: Wire up the counter overlay**

The `#hero-counter` div shows animated count. Use CSS for positioning (bottom-left, large monospace font). JS updates the number with a counting animation (requestAnimationFrame interpolation).

**Step 3: Test in browser**

Run: `hugo server`
Open: http://localhost:1313
Expected: Force graph animates on page load. Nodes appear in stages. Hover shows tooltips. Click navigates.

**Step 4: Commit**

```bash
git add static/js/hero-graph.js
git commit -m "feat: add animated force-directed graph hero section"
```

---

### Task 5: 3D Globe (Section 2)

**Files:**
- Create: `static/js/globe.js`

**Step 1: Write globe.js**

```js
// Globe class
// - constructor(containerId, graphData)
// - init(): creates Three.js scene, camera, renderer, globe mesh
// - addArcs(): for each country, create a bezier arc from USA to that country
// - animate(): rotation + arc particle animation
// - setupInteraction(): drag to rotate, hover for country info

// Globe setup:
// - SphereGeometry(1, 64, 64) with wireframe material (#ffffff08)
// - Second sphere slightly larger with solid dark material for depth
// - OrbitControls for drag rotation (or manual rotation on scroll)
// - Auto-rotate at 0.001 rad/frame

// Country coordinates (hardcoded lat/lng for ~30 countries):
// USA: [40, -100], Japan: [36, 140], Taiwan: [23, 121], China: [35, 105], etc.

// Arc creation:
// - For each country: create CubicBezierCurve3 from USA to country
// - Control points elevated above globe surface for visible arc
// - Line material: color intensity based on product count
// - Animated particles (small spheres) traveling along arcs

// Scroll trigger: IntersectionObserver starts animation when section visible

// Mobile: fall back to a static SVG world map with highlighted countries
```

**Step 2: Test globe renders and rotates**

Run: `hugo server`, scroll to Section 2.
Expected: Wireframe globe with glowing arcs. Auto-rotates. Drag to control.

**Step 3: Commit**

```bash
git add static/js/globe.js
git commit -m "feat: add 3D globe visualization showing country connections"
```

---

### Task 6: Sunburst Chart (Section 3)

**Files:**
- Create: `static/js/sunburst.js`

**Step 1: Write sunburst.js**

```js
// Sunburst class
// - constructor(containerId, graphData)
// - init(): builds hierarchical data from graph, creates D3 partition layout
// - render(): draws SVG arcs for each segment
// - setupInteraction(): hover highlights, click to zoom

// Data transformation:
// - Build tree rooted at "claude-code"
// - Each node's "value" = number of descendants (fan-out)
// - d3.hierarchy() + d3.partition()

// Rendering:
// - SVG with viewBox for responsive sizing
// - Each arc colored by distance (same palette as hero)
// - Inner arcs thicker, outer arcs thinner
// - Opacity gradient: inner bright, outer faded

// Interaction:
// - Hover: tooltip with name, price, # dependencies
// - Click: zoom into that subtree (animated transition)
// - Center text shows current root node name
// - Breadcrumb trail for navigation back

// Scroll trigger: IntersectionObserver
```

**Step 2: Test sunburst renders**

Expected: Radial chart with 4 rings. Hover shows info. Click zooms.

**Step 3: Commit**

```bash
git add static/js/sunburst.js
git commit -m "feat: add sunburst chart showing dependency depth layers"
```

---

### Task 7: Sankey Cost Flow (Section 4)

**Files:**
- Create: `static/js/sankey.js`

**Step 1: Write sankey.js**

```js
// Sankey class
// - constructor(containerId, graphData)
// - init(): select top ~50 most interesting paths, build sankey layout
// - render(): draw SVG sankey + canvas particle overlay
// - setupInteraction(): hover highlights full path

// Path selection (to avoid overwhelming 3416 edges):
// - Take the top 8-10 Distance-1 nodes
// - For each, take top 3-5 Distance-2 inputs by cost
// - For each of those, take top 2-3 Distance-3 inputs by cost
// - Result: ~50-80 visible flows showing the most expensive paths

// Layout:
// - 4 columns: Distance 3 (left) -> Distance 2 -> Distance 1 -> Claude Code (right)
// - d3.sankey() for node positioning and link paths
// - Node height proportional to total cost flowing through

// Particle animation:
// - Canvas overlay on top of SVG sankey
// - Small glowing dots travel along link paths left-to-right
// - Speed proportional to cost (more money = more particles)
// - Color matches the source node's distance color

// Interaction:
// - Hover link: highlight full path, show cost breakdown
// - Hover node: highlight all connected links
// - Click node: navigate to page
```

**Step 2: Test sankey renders**

Expected: Horizontal flow diagram with animated particles. Top cost paths visible.

**Step 3: Commit**

```bash
git add static/js/sankey.js
git commit -m "feat: add Sankey cost flow diagram with animated particles"
```

---

### Task 8: Explorer Search & Filter (Section 5)

**Files:**
- Create: `static/js/explorer.js`

**Step 1: Write explorer.js**

```js
// Explorer class
// - constructor(containerId, graphData)
// - init(): populate filter dropdowns, render initial card grid
// - renderCards(filteredNodes): generates card HTML for grid
// - setupSearch(): instant fuzzy search on input
// - setupFilters(): distance, country, sort dropdowns
// - filterAndSort(): combines all filters, sorts, re-renders

// Card HTML template:
// <div class="explorer-card" onclick="location.href='/pages/{id}/'">
//   <div class="card-distance" style="background: {distColor}">D{distance}</div>
//   <h3 class="card-title">{title}</h3>
//   <p class="card-company">{company}</p>
//   <p class="card-country">{country}</p>
//   <div class="card-meta">
//     <span class="card-price">${price}</span>
//     <span class="card-inputs">{inputCount} inputs</span>
//   </div>
// </div>

// Search: simple substring match on title + company + country (case-insensitive)
// Debounce input at 150ms

// Pagination: render first 60 cards, add "Load more" button (or infinite scroll)
```

**Step 2: Test explorer works**

Expected: Grid of cards. Search filters instantly. Dropdowns filter by distance/country. Sorting works. Click navigates.

**Step 3: Commit**

```bash
git add static/js/explorer.js
git commit -m "feat: add searchable product explorer with filtering and sorting"
```

---

### Task 9: Main Controller + IntersectionObserver

**Files:**
- Create: `static/js/main.js`

**Step 1: Write main.js**

```js
// Main controller that:
// 1. Waits for "graphDataReady" event
// 2. Initializes all 5 visualizations
// 3. Sets up IntersectionObserver for each section
// 4. Manages stats bar visibility and content
// 5. Handles window resize for all visualizations

// IntersectionObserver setup:
// - Each section observed with threshold: [0, 0.3]
// - When section enters viewport (0.3 threshold): trigger its animation
// - When section leaves: pause expensive animations (force sim, globe rotation)

// Stats bar:
// - Hidden initially (opacity 0, translateY -100%)
// - Appears after scrolling past hero section
// - Populated from graphData.stats

// Resize handler:
// - Debounced at 250ms
// - Each viz class has a resize() method that recomputes dimensions

// Error handling:
// - If Three.js fails to load (mobile/old browser), skip globe section
// - If canvas not supported, show static fallback image
```

**Step 2: Test full scroll experience**

Run: `hugo server`
Expected: Full scrolling experience. Sections animate in. Stats bar appears. All 5 sections work.

**Step 3: Commit**

```bash
git add static/js/main.js
git commit -m "feat: add main controller with scroll-triggered animations"
```

---

### Task 10: Polish CSS + Mobile Responsiveness

**Files:**
- Modify: `static/css/style.css`

**Step 1: Add complete homepage styles**

Finalize all CSS including:
- Stats bar styling (glassmorphism: `backdrop-filter: blur(10px)`, semi-transparent bg)
- Hero counter animation (fade in, count up)
- Tooltip styling (dark glass, border glow, shadow)
- Explorer card hover effects (border glow, slight lift)
- Search input styling (dark theme, focus glow)
- Smooth scroll: `html { scroll-behavior: smooth; }`
- Section transitions (fade in on scroll)
- Loading states (subtle pulsing placeholder)

**Step 2: Add mobile responsive styles**

```css
@media (max-width: 768px) {
  .viz-section { min-height: 80vh; }
  .section-title { font-size: 0.9rem; letter-spacing: 0.15em; }
  #sunburst-container { width: 95%; }
  #sankey-container { width: 95%; }
  .explorer-grid { grid-template-columns: 1fr; }
  .explorer-controls { flex-direction: column; }
  .stats-bar { font-size: 0.75rem; }
}
```

**Step 3: Test on mobile viewport**

Use browser DevTools responsive mode at 375px width.
Expected: All sections readable. Cards single-column. Controls stack vertically.

**Step 4: Commit**

```bash
git add static/css/style.css
git commit -m "feat: polish homepage CSS with mobile responsiveness"
```

---

### Task 11: Final Integration Test + Hugo Build Verification

**Step 1: Run full Hugo build**

Run: `hugo --quiet`
Expected: No errors. `public/` directory has index.html, data/graph.json, all JS/CSS files.

**Step 2: Verify all pages still work**

Run: `hugo server` and spot-check 3-4 single pages (e.g., `/pages/claude-code/`, `/pages/mac/`, `/pages/silicon-wafer/`).
Expected: Single pages still use light theme, inputs section works, links work.

**Step 3: Test homepage end-to-end**

Open homepage. Verify:
- [ ] Force graph animates on load
- [ ] Counter ticks up
- [ ] Globe renders and rotates
- [ ] Sunburst shows 4 rings
- [ ] Sankey shows cost flows with particles
- [ ] Explorer search works
- [ ] Stats bar appears on scroll
- [ ] Clicking nodes navigates to pages
- [ ] Back button from page returns to homepage

**Step 4: Commit all remaining changes**

```bash
git add -A
git commit -m "feat: complete homepage visualizations with 5 interactive sections"
```
