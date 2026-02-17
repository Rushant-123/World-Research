# Supply Chain Visualization - Remotion Marketing Video

**Date:** 2026-02-16
**Purpose:** Marketing video for X (Twitter)
**Duration:** 22 seconds
**Aspect Ratio:** 9:16 vertical

## Overview

Create a visually striking 22-second marketing video showcasing the World Research supply chain visualization project. The video leads with pure visual beauty (force graph network) before revealing the concept, designed to stop scrollers on X and drive traffic to the site.

## Design Approach

**Selected:** "Visual Beauty First" - Sleek & Minimal

Open with the mesmerizing force graph visualization filling the screen with no text or explanation. Let the beautiful network of 1,413 interconnected nodes animate for 3-4 seconds. Then minimal text fades in to explain the concept. Camera zooms to highlight one supply chain path (Website → Computer → Chip → Sand), then pulls back to show the full network. End with clean typography displaying stats and URL.

**Why this approach:**
- Stops scrollers immediately with pure visual appeal
- X rewards visual-first content
- The force graph is genuinely unique and beautiful
- Creates curiosity that drives clicks
- Feasible to execute beautifully in 22 seconds

## Scene Breakdown

### Scene 1: Opening (0-5 seconds)
- Pure force graph visualization filling vertical frame
- 1,413 nodes connected by 6,532 edges
- Gentle floating motion with subtle node pulsing
- No text, no UI - just the mesmerizing network
- Dark background (#0a0a1a) with glowing cyan nodes (#00fff5)

### Scene 2: Hook Text (5-10 seconds)
- Text fades in over the animating visualization:
  - "Every product you use..." (5-7s)
  - "...has a hidden supply chain" (7-10s)
- Typography: Darker Grotesque, large sizing, white with subtle shadow
- Smooth fade-in with slight scale animation (0.95 → 1.0)
- Force graph continues animating in background

### Scene 3: Journey Highlight (10-16 seconds)
- Yellow/gold line (#ffea00) traces through the network
- Camera smoothly follows the highlighted path
- Shows: Website → Computer → Chip → Sand
- Small label appears at each node as camera passes
- Spring-based camera easing for natural movement
- No additional text - visual storytelling only

### Scene 4: Pullback & CTA (16-22 seconds)
- Camera zooms back out to show full network
- End card text appears:
  - "1,413 products"
  - "6,532 connections"
  - "worldresearch.com"
  - Optional: "Explore the full supply chain ↗"
- Text uses JetBrains Mono for stats, Darker Grotesque for URL
- Clean, confident typography layout

## Visual Design Specifications

### Color Palette
- **Background:** Deep dark blue/black (#0a0a1a)
- **Nodes:** Electric cyan (#00fff5) with glow effects
- **Connections:** Subtle blue (#0066ff) at 40% opacity
- **Highlighted path:** Bright yellow/gold (#ffea00)
- **Text:** Clean white (#ffffff) with subtle shadow

### Typography
- **Main text:** Darker Grotesque (matches site aesthetic)
- **Stats/numbers:** JetBrains Mono (technical feel)
- **Sizing:** Large and confident - mobile-optimized for 9:16
- **Effects:** Subtle shadows for readability over complex backgrounds

### Animation Style
- **Force graph:** Gentle floating motion, nodes pulsing subtly
- **Text:** Smooth fade-ins with slight scale (0.95 → 1.0)
- **Journey trace:** Smooth camera movement with spring easing curves
- **Transitions:** No cuts - all camera moves and cross-fades
- **Timing:** All animations use Remotion's `useCurrentFrame()` and `interpolate()`

## Content & Messaging

### Text Copy
1. "Every product you use..."
2. "...has a hidden supply chain"
3. Visual journey: Website → Computer → Chip → Sand
4. "1,413 products"
5. "6,532 connections"
6. "worldresearch.com"

### Audio
- **No voiceover** (most X users watch muted)
- **Background music:** Minimal electronic/synth, subtle and non-distracting
- **Optional sound design:** Subtle effects for node highlights

### Data Source
- Pull actual product data from Hugo site's content files
- Use real connections and product names from markdown frontmatter
- Show authentic network structure (not fake demo data)
- Ensures video accurately represents the actual project

## Technical Implementation

### Tech Stack
- **Framework:** Remotion (React-based video framework)
- **3D Rendering:** React Three Fiber + Three.js
- **Language:** TypeScript
- **Styling:** TailwindCSS (consistent with site)
- **Build:** Node.js with standard Remotion tooling

### Project Structure
```
~/world-research-video/
├── src/
│   ├── Root.tsx              # Main composition
│   ├── ForceGraphScene.tsx   # 3D force graph component
│   ├── TextOverlay.tsx       # Animated typography layers
│   ├── CameraController.tsx  # Zoom/pan animation logic
│   ├── DataLoader.tsx        # Load product data from JSON
│   └── utils/
│       └── animations.ts     # Shared animation helpers
├── scripts/
│   └── parse-hugo-data.ts    # Extract data from Hugo markdown
├── public/
│   └── data/
│       └── supply-chain.json # Generated product network data
├── package.json
├── remotion.config.ts
└── tsconfig.json
```

### Key Components

**1. Main Composition**
- Orchestrates all scenes using `<Sequence>` components
- Manages timing and transitions between scenes
- Coordinates 3D canvas and 2D text overlays

**2. ForceGraphScene**
- Renders 3D force graph using React Three Fiber
- Implements force-directed layout algorithm
- Handles node rendering, edge rendering, glow effects
- Responsive to camera position changes

**3. TextOverlay**
- 2D HTML layer positioned over 3D canvas
- Animated text with fade-ins, scale, and timing
- Uses TailwindCSS for styling
- Ensures readability over complex backgrounds

**4. CameraController**
- Manages camera position and rotation over time
- Implements smooth zoom/pan for journey highlight
- Uses spring animations for natural movement
- Interpolates between keyframes based on current frame

**5. DataLoader**
- Reads generated JSON file with product network
- Transforms data into format for force graph
- Handles node positions, connections, labels
- Provides data to ForceGraphScene component

### Data Pipeline

**Step 1: Parse Hugo Content**
```typescript
// scripts/parse-hugo-data.ts
// Read all markdown files from content/pages/
// Extract frontmatter (title, inputs, company, etc.)
// Build graph structure: nodes = products, edges = input relationships
// Output to public/data/supply-chain.json
```

**Step 2: Load in Remotion**
```typescript
// src/DataLoader.tsx
// Import supply-chain.json at build time
// Transform into graph structure for React Three Fiber
// Calculate force-directed layout positions
// Provide to ForceGraphScene
```

### Animation Techniques

**Timing System:**
- Use `useCurrentFrame()` hook for frame-based timing
- Use `interpolate()` for smooth value transitions
- Define keyframes for each animation
- Example: `interpolate(frame, [0, 30], [0, 1], { easing: Easing.ease })`

**Camera Animations:**
- Spring animations for natural movement using `spring()` helper
- Smooth transitions between camera positions
- Interpolate camera position (x, y, z) and rotation
- Focus on specific nodes during journey highlight

**Node Animations:**
- Staggered appearance using `delay()` helper
- Subtle pulsing using sine wave interpolation
- Glow intensity varies with time
- Highlighted nodes scale up slightly

**Text Animations:**
- Fade-in: opacity 0 → 1
- Scale-in: transform scale 0.95 → 1.0
- Staggered appearance for multi-line text
- Hold time before fade-out

### Rendering Specifications

**Output Settings:**
- **Resolution:** 1080x1920 (9:16 vertical for mobile)
- **Frame Rate:** 30fps
- **Duration:** 660 frames (22 seconds at 30fps)
- **Codec:** H.264 with high quality preset
- **Format:** MP4

**Render Commands:**
```bash
# Preview during development
npm run dev

# Render final video
npm run build
npx remotion render src/index.ts MainComposition out/video.mp4
```

## Success Criteria

**Visual Impact:**
- Force graph is immediately eye-catching
- Animations are smooth and professional
- Typography is readable on mobile devices
- Color palette is cohesive and striking

**Message Clarity:**
- Concept is understandable without sound
- Text is legible and well-timed
- Journey highlight clearly shows supply chain path
- Call-to-action is clear and actionable

**Technical Quality:**
- Smooth 30fps playback
- No rendering artifacts or glitches
- Proper aspect ratio for X mobile viewing
- File size optimized for social media (<50MB)

**Engagement:**
- Stops scrollers in first 3 seconds
- Generates curiosity about the project
- Drives traffic to worldresearch.com
- Encourages shares and engagement on X

## Future Iterations

**Potential Variations:**
- Alternative supply chain paths (different products)
- Different color palettes for A/B testing
- Horizontal 16:9 version for YouTube/LinkedIn
- Longer 60-second version with more detail
- Interactive elements (if X supports in future)

## References

- Remotion best practices: ~/.agents/skills/remotion-best-practices/
- Site design aesthetic: layouts/_default/single.html, static/css/style.css
- Existing force graph: Current implementation on homepage
- Product data: content/pages/*.md with YAML frontmatter
