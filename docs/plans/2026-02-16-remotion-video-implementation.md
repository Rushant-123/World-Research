# Remotion Marketing Video Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Create a 22-second marketing video for X showcasing the supply chain visualization with force graph, animated text, and journey highlight.

**Architecture:** Remotion + React Three Fiber for 3D force graph, TypeScript for type safety, data pipeline from Hugo markdown to JSON, four-scene composition with camera animations.

**Tech Stack:** Remotion, React, TypeScript, React Three Fiber, Three.js, TailwindCSS, Node.js

---

## Task 1: Project Setup

**Files:**
- Create: `~/world-research-video/package.json`
- Create: `~/world-research-video/tsconfig.json`
- Create: `~/world-research-video/remotion.config.ts`
- Create: `~/world-research-video/tailwind.config.js`

**Step 1: Create project directory**

```bash
mkdir -p ~/world-research-video
cd ~/world-research-video
```

**Step 2: Initialize Remotion project**

Run: `npm init -y && npm install remotion@4.0.272 react@18.3.1 react-dom@18.3.1`
Expected: package.json created with dependencies

**Step 3: Install Three.js and React Three Fiber**

Run: `npm install three@0.170.0 @react-three/fiber@8.17.10 @react-three/drei@9.117.3`
Expected: 3D rendering dependencies installed

**Step 4: Install dev dependencies**

Run: `npm install -D typescript@5.7.2 @types/react@18.3.12 @types/react-dom@18.3.1 @types/three@0.170.0 tailwindcss@3.4.17 postcss@8.4.49 autoprefixer@10.4.20`
Expected: TypeScript and styling dependencies installed

**Step 5: Create TypeScript config**

```typescript
// tsconfig.json
{
  "compilerOptions": {
    "target": "ES2022",
    "lib": ["DOM", "DOM.Iterable", "ES2022"],
    "jsx": "react-jsx",
    "module": "ES2022",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "allowJs": true,
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true
  },
  "include": ["src/**/*"],
  "exclude": ["node_modules"]
}
```

**Step 6: Create Remotion config**

```typescript
// remotion.config.ts
import { Config } from '@remotion/cli/config';

Config.setVideoImageFormat('jpeg');
Config.setOverwriteOutput(true);
```

**Step 7: Create Tailwind config**

```javascript
// tailwind.config.js
module.exports = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'bg-dark': '#0a0a1a',
        'node-cyan': '#00fff5',
        'edge-blue': '#0066ff',
        'highlight-yellow': '#ffea00',
      },
      fontFamily: {
        'darker-grotesque': ['Darker Grotesque', 'sans-serif'],
        'jetbrains-mono': ['JetBrains Mono', 'monospace'],
      },
    },
  },
  plugins: [],
};
```

**Step 8: Update package.json scripts**

```json
{
  "scripts": {
    "dev": "remotion studio",
    "build": "remotion render src/index.ts MainComposition out/video.mp4",
    "parse-data": "ts-node scripts/parse-hugo-data.ts"
  }
}
```

**Step 9: Install ts-node for data parsing**

Run: `npm install -D ts-node@10.9.2`
Expected: ts-node installed for running TypeScript scripts

**Step 10: Commit project setup**

```bash
git init
git add .
git commit -m "feat: initialize Remotion project with Three.js and Tailwind"
```

---

## Task 2: Data Pipeline - Parse Hugo Content

**Files:**
- Create: `~/world-research-video/scripts/parse-hugo-data.ts`
- Create: `~/world-research-video/public/data/supply-chain.json`

**Step 1: Create scripts directory**

```bash
mkdir -p scripts public/data
```

**Step 2: Write data parsing script**

```typescript
// scripts/parse-hugo-data.ts
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

interface Product {
  id: string;
  title: string;
  company?: string;
  inputs?: Array<{ name: string; link: string }>;
}

interface Node {
  id: string;
  label: string;
  company?: string;
}

interface Edge {
  source: string;
  target: string;
}

interface GraphData {
  nodes: Node[];
  edges: Edge[];
}

const HUGO_CONTENT_PATH = path.join(process.env.HOME!, '.caspian/worktrees/World-Research/rushant-123/quickf/content/pages');

function parseMarkdownFiles(): Product[] {
  const products: Product[] = [];
  const files = fs.readdirSync(HUGO_CONTENT_PATH);

  for (const file of files) {
    if (!file.endsWith('.md')) continue;

    const filePath = path.join(HUGO_CONTENT_PATH, file);
    const content = fs.readFileSync(filePath, 'utf-8');
    const { data } = matter(content);

    products.push({
      id: file.replace('.md', ''),
      title: data.title || file.replace('.md', ''),
      company: data.company,
      inputs: data.inputs || [],
    });
  }

  return products;
}

function buildGraph(products: Product[]): GraphData {
  const nodes: Node[] = products.map(p => ({
    id: p.id,
    label: p.title,
    company: p.company,
  }));

  const edges: Edge[] = [];

  for (const product of products) {
    if (!product.inputs) continue;

    for (const input of product.inputs) {
      edges.push({
        source: input.link,
        target: product.id,
      });
    }
  }

  return { nodes, edges };
}

function main() {
  console.log('Parsing Hugo content...');
  const products = parseMarkdownFiles();
  console.log(`Found ${products.length} products`);

  console.log('Building graph structure...');
  const graph = buildGraph(products);
  console.log(`Created ${graph.nodes.length} nodes and ${graph.edges.length} edges`);

  const outputPath = path.join(__dirname, '../public/data/supply-chain.json');
  fs.writeFileSync(outputPath, JSON.stringify(graph, null, 2));
  console.log(`Graph data written to ${outputPath}`);
}

main();
```

**Step 3: Install gray-matter for parsing**

Run: `npm install gray-matter@4.0.3`
Expected: Markdown frontmatter parser installed

**Step 4: Run data parsing script**

Run: `npm run parse-data`
Expected: supply-chain.json created with nodes and edges

**Step 5: Verify output file**

Run: `cat public/data/supply-chain.json | head -50`
Expected: JSON with nodes and edges arrays

**Step 6: Commit data pipeline**

```bash
git add scripts/ public/data/
git commit -m "feat: add data parsing pipeline from Hugo to JSON"
```

---

## Task 3: Animation Utilities

**Files:**
- Create: `~/world-research-video/src/utils/animations.ts`

**Step 1: Create utils directory**

```bash
mkdir -p src/utils
```

**Step 2: Write animation helper functions**

```typescript
// src/utils/animations.ts
import { interpolate, spring, Easing } from 'remotion';

export interface AnimationConfig {
  startFrame: number;
  durationFrames: number;
  easing?: (t: number) => number;
}

export function fadeIn(frame: number, config: AnimationConfig): number {
  return interpolate(
    frame,
    [config.startFrame, config.startFrame + config.durationFrames],
    [0, 1],
    {
      extrapolateLeft: 'clamp',
      extrapolateRight: 'clamp',
      easing: config.easing || Easing.ease,
    }
  );
}

export function fadeOut(frame: number, config: AnimationConfig): number {
  return interpolate(
    frame,
    [config.startFrame, config.startFrame + config.durationFrames],
    [1, 0],
    {
      extrapolateLeft: 'clamp',
      extrapolateRight: 'clamp',
      easing: config.easing || Easing.ease,
    }
  );
}

export function scaleIn(frame: number, config: AnimationConfig): number {
  return interpolate(
    frame,
    [config.startFrame, config.startFrame + config.durationFrames],
    [0.95, 1],
    {
      extrapolateLeft: 'clamp',
      extrapolateRight: 'clamp',
      easing: config.easing || Easing.ease,
    }
  );
}

export function springAnimation(
  frame: number,
  fps: number,
  config: { delay?: number; durationInFrames?: number } = {}
): number {
  return spring({
    frame,
    fps,
    config: {
      damping: 200,
    },
    delay: config.delay || 0,
    durationInFrames: config.durationInFrames,
  });
}

export interface Vector3 {
  x: number;
  y: number;
  z: number;
}

export function interpolateVector3(
  frame: number,
  startFrame: number,
  endFrame: number,
  start: Vector3,
  end: Vector3,
  easing: (t: number) => number = Easing.inOut(Easing.ease)
): Vector3 {
  const t = interpolate(frame, [startFrame, endFrame], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
    easing,
  });

  return {
    x: start.x + (end.x - start.x) * t,
    y: start.y + (end.y - start.y) * t,
    z: start.z + (end.z - start.z) * t,
  };
}
```

**Step 3: Commit animation utilities**

```bash
git add src/utils/
git commit -m "feat: add animation utility functions"
```

---

## Task 4: Data Loader Component

**Files:**
- Create: `~/world-research-video/src/DataLoader.tsx`

**Step 1: Write DataLoader component**

```typescript
// src/DataLoader.tsx
import { useMemo } from 'react';
import graphData from '../public/data/supply-chain.json';

export interface Node {
  id: string;
  label: string;
  company?: string;
  position?: [number, number, number];
}

export interface Edge {
  source: string;
  target: string;
}

export interface GraphData {
  nodes: Node[];
  edges: Edge[];
}

export function useGraphData(): GraphData {
  const processedData = useMemo(() => {
    // Calculate force-directed layout positions
    const nodes = graphData.nodes.map((node, index) => {
      // Simple circular layout for demo (can be enhanced with d3-force)
      const angle = (index / graphData.nodes.length) * Math.PI * 2;
      const radius = 30;

      return {
        ...node,
        position: [
          Math.cos(angle) * radius,
          Math.sin(angle) * radius,
          (Math.random() - 0.5) * 10, // Random z-depth
        ] as [number, number, number],
      };
    });

    return {
      nodes,
      edges: graphData.edges,
    };
  }, []);

  return processedData;
}

export function findNodeByLabel(nodes: Node[], label: string): Node | undefined {
  return nodes.find(n => n.label.toLowerCase().includes(label.toLowerCase()));
}

export function findPath(
  nodes: Node[],
  edges: Edge[],
  startLabel: string,
  endLabel: string
): Node[] {
  const startNode = findNodeByLabel(nodes, startLabel);
  const endNode = findNodeByLabel(nodes, endLabel);

  if (!startNode || !endNode) return [];

  // Simple BFS to find path
  const queue: Array<{ node: Node; path: Node[] }> = [{ node: startNode, path: [startNode] }];
  const visited = new Set<string>([startNode.id]);

  while (queue.length > 0) {
    const { node, path } = queue.shift()!;

    if (node.id === endNode.id) {
      return path;
    }

    const connectedEdges = edges.filter(e => e.target === node.id);

    for (const edge of connectedEdges) {
      if (!visited.has(edge.source)) {
        visited.add(edge.source);
        const nextNode = nodes.find(n => n.id === edge.source);
        if (nextNode) {
          queue.push({ node: nextNode, path: [...path, nextNode] });
        }
      }
    }
  }

  return [];
}
```

**Step 2: Commit DataLoader**

```bash
git add src/DataLoader.tsx
git commit -m "feat: add data loader with force-directed layout"
```

---

## Task 5: Force Graph Scene Component

**Files:**
- Create: `~/world-research-video/src/ForceGraphScene.tsx`

**Step 1: Write ForceGraphScene component**

```typescript
// src/ForceGraphScene.tsx
import React, { useRef } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { Line } from '@react-three/drei';
import * as THREE from 'three';
import { useCurrentFrame } from 'remotion';
import { Node, Edge } from './DataLoader';

interface ForceGraphSceneProps {
  nodes: Node[];
  edges: Edge[];
  highlightedPath?: string[];
  cameraPosition: [number, number, number];
  cameraTarget: [number, number, number];
}

export const ForceGraphScene: React.FC<ForceGraphSceneProps> = ({
  nodes,
  edges,
  highlightedPath = [],
  cameraPosition,
  cameraTarget,
}) => {
  const frame = useCurrentFrame();
  const { camera } = useThree();

  // Update camera position
  React.useEffect(() => {
    camera.position.set(...cameraPosition);
    camera.lookAt(new THREE.Vector3(...cameraTarget));
  }, [camera, cameraPosition, cameraTarget]);

  return (
    <group>
      {/* Render edges */}
      {edges.map((edge, index) => {
        const sourceNode = nodes.find(n => n.id === edge.source);
        const targetNode = nodes.find(n => n.id === edge.target);

        if (!sourceNode?.position || !targetNode?.position) return null;

        const isHighlighted = highlightedPath.includes(edge.source) && highlightedPath.includes(edge.target);

        return (
          <Line
            key={`edge-${index}`}
            points={[sourceNode.position, targetNode.position]}
            color={isHighlighted ? '#ffea00' : '#0066ff'}
            lineWidth={isHighlighted ? 3 : 1}
            opacity={isHighlighted ? 1 : 0.4}
            transparent
          />
        );
      })}

      {/* Render nodes */}
      {nodes.map((node) => {
        if (!node.position) return null;

        const isHighlighted = highlightedPath.includes(node.id);
        const pulse = Math.sin(frame * 0.1) * 0.1 + 1;

        return (
          <mesh key={node.id} position={node.position}>
            <sphereGeometry args={[isHighlighted ? 0.5 * pulse : 0.3, 16, 16]} />
            <meshStandardMaterial
              color={isHighlighted ? '#ffea00' : '#00fff5'}
              emissive={isHighlighted ? '#ffea00' : '#00fff5'}
              emissiveIntensity={isHighlighted ? 0.8 : 0.3}
            />
          </mesh>
        );
      })}

      {/* Lighting */}
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} />
    </group>
  );
};
```

**Step 2: Commit ForceGraphScene**

```bash
git add src/ForceGraphScene.tsx
git commit -m "feat: add force graph scene with Three.js rendering"
```

---

## Task 6: Text Overlay Component

**Files:**
- Create: `~/world-research-video/src/TextOverlay.tsx`
- Create: `~/world-research-video/src/index.css`

**Step 1: Create Tailwind CSS file**

```css
/* src/index.css */
@import url('https://fonts.googleapis.com/css2?family=Darker+Grotesque:wght@300;400;500;600;700;800;900&family=JetBrains+Mono:wght@400;600&display=swap');

@tailwind base;
@tailwind components;
@tailwind utilities;

body {
  margin: 0;
  padding: 0;
}
```

**Step 2: Write TextOverlay component**

```typescript
// src/TextOverlay.tsx
import React from 'react';
import { AbsoluteFill, useCurrentFrame, interpolate } from 'remotion';
import { fadeIn, scaleIn } from './utils/animations';
import './index.css';

interface TextOverlayProps {
  scene: 'opening' | 'hook' | 'journey' | 'cta';
}

export const TextOverlay: React.FC<TextOverlayProps> = ({ scene }) => {
  const frame = useCurrentFrame();

  if (scene === 'opening') {
    // No text in opening scene
    return null;
  }

  if (scene === 'hook') {
    const text1Opacity = fadeIn(frame, { startFrame: 150, durationFrames: 20 });
    const text1Scale = scaleIn(frame, { startFrame: 150, durationFrames: 20 });

    const text2Opacity = fadeIn(frame, { startFrame: 210, durationFrames: 20 });
    const text2Scale = scaleIn(frame, { startFrame: 210, durationFrames: 20 });

    return (
      <AbsoluteFill className="flex flex-col items-center justify-center pointer-events-none">
        <div
          style={{
            opacity: text1Opacity,
            transform: `scale(${text1Scale})`,
          }}
          className="text-white font-darker-grotesque text-6xl font-bold text-center mb-4"
        >
          Every product you use...
        </div>
        <div
          style={{
            opacity: text2Opacity,
            transform: `scale(${text2Scale})`,
          }}
          className="text-white font-darker-grotesque text-6xl font-bold text-center"
        >
          ...has a hidden supply chain
        </div>
      </AbsoluteFill>
    );
  }

  if (scene === 'journey') {
    // Labels appear as camera moves through journey
    return null; // Labels handled in ForceGraphScene
  }

  if (scene === 'cta') {
    const statsOpacity = fadeIn(frame, { startFrame: 480, durationFrames: 20 });
    const statsScale = scaleIn(frame, { startFrame: 480, durationFrames: 20 });

    return (
      <AbsoluteFill className="flex flex-col items-center justify-center pointer-events-none">
        <div
          style={{
            opacity: statsOpacity,
            transform: `scale(${statsScale})`,
          }}
          className="text-center"
        >
          <div className="text-white font-jetbrains-mono text-5xl font-bold mb-4">
            1,413 products
          </div>
          <div className="text-white font-jetbrains-mono text-5xl font-bold mb-8">
            6,532 connections
          </div>
          <div className="text-white font-darker-grotesque text-4xl font-semibold">
            worldresearch.com
          </div>
        </div>
      </AbsoluteFill>
    );
  }

  return null;
};
```

**Step 3: Commit TextOverlay**

```bash
git add src/TextOverlay.tsx src/index.css
git commit -m "feat: add text overlay component with animations"
```

---

## Task 7: Main Composition

**Files:**
- Create: `~/world-research-video/src/Root.tsx`
- Create: `~/world-research-video/src/index.ts`

**Step 1: Write main composition**

```typescript
// src/Root.tsx
import React from 'react';
import { Composition } from 'remotion';
import { MainComposition } from './MainComposition';

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="MainComposition"
        component={MainComposition}
        durationInFrames={660}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{}}
      />
    </>
  );
};
```

**Step 2: Write MainComposition orchestrating all scenes**

```typescript
// src/MainComposition.tsx
import React from 'react';
import { AbsoluteFill, Sequence } from 'remotion';
import { Canvas } from '@react-three/fiber';
import { useGraphData, findPath } from './DataLoader';
import { ForceGraphScene } from './ForceGraphScene';
import { TextOverlay } from './TextOverlay';
import { interpolateVector3 } from './utils/animations';
import { useCurrentFrame } from 'remotion';

export const MainComposition: React.FC = () => {
  const graphData = useGraphData();
  const frame = useCurrentFrame();

  // Find the journey path: Website -> Computer -> Chip -> Sand
  const journeyPath = React.useMemo(() => {
    const path = findPath(graphData.nodes, graphData.edges, 'website', 'sand');
    return path.map(n => n.id);
  }, [graphData]);

  // Camera positions for each scene
  const getCameraPosition = (): [number, number, number] => {
    // Scene 1: Opening (0-150 frames) - distant view
    if (frame < 150) {
      return [0, 0, 100];
    }

    // Scene 2: Hook (150-300 frames) - same position
    if (frame < 300) {
      return [0, 0, 100];
    }

    // Scene 3: Journey (300-480 frames) - zoom in and follow path
    if (frame < 480) {
      const startPos = { x: 0, y: 0, z: 100 };
      const endPos = { x: 20, y: 10, z: 40 };
      const pos = interpolateVector3(frame, 300, 480, startPos, endPos);
      return [pos.x, pos.y, pos.z];
    }

    // Scene 4: CTA (480-660 frames) - pull back
    const startPos = { x: 20, y: 10, z: 40 };
    const endPos = { x: 0, y: 0, z: 100 };
    const pos = interpolateVector3(frame, 480, 660, startPos, endPos);
    return [pos.x, pos.y, pos.z];
  };

  const getCameraTarget = (): [number, number, number] => {
    return [0, 0, 0];
  };

  const getHighlightedPath = (): string[] => {
    if (frame >= 300 && frame < 480) {
      return journeyPath;
    }
    return [];
  };

  return (
    <AbsoluteFill style={{ backgroundColor: '#0a0a1a' }}>
      {/* 3D Canvas */}
      <Canvas>
        <ForceGraphScene
          nodes={graphData.nodes}
          edges={graphData.edges}
          highlightedPath={getHighlightedPath()}
          cameraPosition={getCameraPosition()}
          cameraTarget={getCameraTarget()}
        />
      </Canvas>

      {/* Text Overlays */}
      <Sequence from={0} durationInFrames={150}>
        <TextOverlay scene="opening" />
      </Sequence>

      <Sequence from={150} durationInFrames={150}>
        <TextOverlay scene="hook" />
      </Sequence>

      <Sequence from={300} durationInFrames={180}>
        <TextOverlay scene="journey" />
      </Sequence>

      <Sequence from={480} durationInFrames={180}>
        <TextOverlay scene="cta" />
      </Sequence>
    </AbsoluteFill>
  );
};
```

**Step 3: Write index entry point**

```typescript
// src/index.ts
import { registerRoot } from 'remotion';
import { RemotionRoot } from './Root';

registerRoot(RemotionRoot);
```

**Step 4: Commit main composition**

```bash
git add src/Root.tsx src/MainComposition.tsx src/index.ts
git commit -m "feat: add main composition orchestrating all scenes"
```

---

## Task 8: Testing and Preview

**Step 1: Start Remotion studio**

Run: `npm run dev`
Expected: Browser opens at http://localhost:3000 with video preview

**Step 2: Verify Scene 1 (0-5s)**

Preview frames 0-150
Expected: Force graph visible, nodes pulsing, no text

**Step 3: Verify Scene 2 (5-10s)**

Preview frames 150-300
Expected: Text "Every product you use..." and "...has a hidden supply chain" fade in

**Step 4: Verify Scene 3 (10-16s)**

Preview frames 300-480
Expected: Yellow path highlights journey, camera zooms in

**Step 5: Verify Scene 4 (16-22s)**

Preview frames 480-660
Expected: Camera pulls back, stats and URL appear

**Step 6: Check for issues**

Common issues:
- Fonts not loading: Check Google Fonts import in index.css
- 3D not rendering: Verify React Three Fiber setup
- Timing off: Adjust frame numbers in MainComposition.tsx

---

## Task 9: Final Rendering

**Step 1: Test render a short segment**

Run: `npx remotion render src/index.ts MainComposition out/test.mp4 --frames=0-150`
Expected: 5-second video file created

**Step 2: Verify test render quality**

Run: `open out/test.mp4`
Expected: Smooth playback, no artifacts

**Step 3: Render full video**

Run: `npm run build`
Expected: Full 22-second video rendered to out/video.mp4

**Step 4: Verify file size**

Run: `ls -lh out/video.mp4`
Expected: <50MB for social media upload

**Step 5: Commit final adjustments**

```bash
git add .
git commit -m "feat: complete video rendering with all scenes"
```

---

## Success Criteria Checklist

- [ ] Force graph renders with 1,413 nodes and 6,532 edges
- [ ] Opening scene (0-5s) shows pure visualization
- [ ] Hook text (5-10s) fades in with scale animation
- [ ] Journey highlight (10-16s) traces yellow path through network
- [ ] CTA scene (16-22s) shows stats and URL
- [ ] Video is 1080x1920 (9:16 vertical)
- [ ] Smooth 30fps playback
- [ ] File size under 50MB
- [ ] Typography uses Darker Grotesque and JetBrains Mono
- [ ] Color palette matches design (cyan nodes, yellow highlights)

---

## Notes

**Performance:**
- If rendering is slow, reduce node count in DataLoader
- Consider using LOD (level of detail) for distant nodes
- Optimize Three.js materials (use `MeshBasicMaterial` instead of `MeshStandardMaterial`)

**Enhancements:**
- Add subtle background music (drop MP3 in public/ and use `<Audio>`)
- Implement actual force-directed layout using d3-force
- Add particle effects for extra visual flair
- Create horizontal 16:9 version for other platforms

**References:**
- Remotion docs: https://www.remotion.dev/docs
- React Three Fiber: https://docs.pmnd.rs/react-three-fiber
- Design doc: docs/plans/2026-02-16-remotion-video-design.md
