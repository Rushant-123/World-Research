#!/usr/bin/env python3
"""
Generate detailed Distance 4 manufacturing pages in batches.
Each page gets 50-200 context-specific manufacturing steps.
"""

import os
import json
import re

# Read the list of pages to generate
with open('/tmp/d4-pages-to-generate.txt', 'r') as f:
    pages = [line.strip() for line in f if line.strip()]

print(f"Total pages to generate: {len(pages)}")

# Load graph data to get any existing info
with open('./static/data/graph.json', 'r') as f:
    graph_data = json.load(f)

# Create lookup maps
node_map = {node['id']: node for node in graph_data.get('nodes', [])}
edges_by_target = {}
for edge in graph_data.get('edges', []):
    if edge['target'] not in edges_by_target:
        edges_by_target[edge['target']] = []
    edges_by_target[edge['target']].append(edge)

def categorize_page(page_id):
    """Determine the category of a page based on its ID."""
    pid = page_id.lower()

    # Gases
    if pid.endswith('-gas') or pid in ['ash3-gas', 'bf3-gas', 'b2h6-gas', 'ph3-gas']:
        return 'gas'

    # Solvents and liquid chemicals
    if 'solvent' in pid or 'acid' in pid or pid.endswith('-oil'):
        return 'chemical-liquid'

    # Solid chemicals and materials
    if 'chemical' in pid or 'salt' in pid or 'carbonate' in pid or 'sulfate' in pid or \
       'oxide' in pid or 'powder' in pid or 'catalyst' in pid or 'resin' in pid or \
       'polymer' in pid or 'adhesive' in pid or 'pigment' in pid or 'dye' in pid:
        return 'chemical-solid'

    # Metals and metal products
    if 'ingot' in pid or 'billet' in pid or 'metal' in pid or 'alloy' in pid or \
       'foil' in pid or 'wire' in pid or 'rod' in pid or 'strip' in pid or \
       'sheet' in pid or 'conductor' in pid or pid.endswith('element'):
        return 'metal'

    # Equipment and machinery
    if 'machine' in pid or 'equipment' in pid or 'furnace' in pid or 'press' in pid or \
       'mill' in pid or 'reactor' in pid or 'chamber' in pid or 'system' in pid or \
       'pump' in pid or 'controller' in pid or 'robot' in pid or 'coater' in pid or \
       'grinder' in pid or 'welder' in pid or 'tester' in pid or 'tool' in pid:
        return 'equipment'

    # Electronics/ICs
    if '-ic' in pid or 'chip' in pid or 'asic' in pid or 'circuit' in pid or \
       'transistor' in pid or 'capacitor' in pid or 'resistor' in pid or \
       'core' in pid or 'interface' in pid:
        return 'electronic'

    # Films and substrates
    if 'film' in pid or 'substrate' in pid or 'tape' in pid or 'liner' in pid:
        return 'material-film'

    # Manufacturing processes
    if 'process' in pid or 'production' in pid or 'mining' in pid or \
       'fabrication' in pid or 'coating' in pid or 'treatment' in pid or \
       'assembly' in pid or 'stacking' in pid or 'filling' in pid or \
       'purification' in pid or 'testing' in pid:
        return 'process'

    # Training and labor
    if 'training' in pid or 'labor' in pid or 'workers' in pid or \
       'technicians' in pid or 'engineers' in pid or 'certification' in pid:
        return 'labor'

    # Building/infrastructure
    if 'building' in pid or 'cleanroom' in pid or 'facility' in pid or 'room' in pid:
        return 'infrastructure'

    # Packaged components
    if 'housing' in pid or 'enclosure' in pid or 'package' in pid or \
       'connector' in pid or 'can' in pid or 'body' in pid:
        return 'component'

    return 'component'

# Categorize all pages
categorized = {}
for page_id in pages:
    cat = categorize_page(page_id)
    if cat not in categorized:
        categorized[cat] = []
    categorized[cat].append(page_id)

print("\nCategory breakdown:")
for cat, items in sorted(categorized.items(), key=lambda x: len(x[1]), reverse=True):
    print(f"  {cat}: {len(items)}")

print(f"\nGenerating batch 1 (first 50 pages)...")
batch_1 = pages[:50]

# Save batch info
with open('/tmp/d4-batch-1.txt', 'w') as f:
    for page_id in batch_1:
        cat = categorize_page(page_id)
        f.write(f"{page_id}\t{cat}\n")

print(f"Batch 1 saved to /tmp/d4-batch-1.txt")
print(f"Categories in batch 1:")
batch_1_cats = {}
for page_id in batch_1:
    cat = categorize_page(page_id)
    batch_1_cats[cat] = batch_1_cats.get(cat, 0) + 1
for cat, count in sorted(batch_1_cats.items(), key=lambda x: x[1], reverse=True):
    print(f"  {cat}: {count}")
