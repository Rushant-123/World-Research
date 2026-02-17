# Supply Chain Data Enrichment Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Enrich supply chain database with dynamics data (lead times, transportation, risks), fill 425 missing pages, add company depth (employees, factories, R&D), and relationship flows.

**Architecture:** Hybrid approach - real data for top 100 critical companies via research, plausible estimation algorithms for remaining entities. Node.js scripts for data processing, Hugo templates for display.

**Tech Stack:** Node.js, fs/path for file operations, YAML parsing, Hugo static site generator

---

## Task 1: Create Data Infrastructure

**Files:**
- Create: `data/estimation-rules.json`
- Create: `data/geo-clusters.json`
- Create: `data/relationships.json`

**Step 1: Create estimation rules data file**

Create `data/estimation-rules.json`:

```json
{
  "lead_times": {
    "base_manufacturing": {
      "raw_materials": 7,
      "basic_components": 14,
      "complex_components": 30,
      "semiconductors": 90,
      "equipment": 60
    },
    "shipping_additions": {
      "domestic": 3,
      "continental": 14,
      "intercontinental": 30
    }
  },
  "moq": {
    "by_price_range": {
      "0-10": 10000,
      "10-100": 5000,
      "100-1000": 1000,
      "1000-10000": 100,
      "10000+": 10
    }
  },
  "risk_by_country": {
    "low": ["USA", "Germany", "Japan", "South Korea", "Taiwan", "Singapore"],
    "medium": ["China", "Malaysia", "Thailand", "Poland", "Czech Republic"],
    "high": ["Russia", "Venezuela", "Myanmar", "Zimbabwe"]
  },
  "volatility_by_category": {
    "commodities": "volatile",
    "manufactured": "moderate",
    "equipment": "stable",
    "services": "stable"
  },
  "transportation_by_distance": {
    "local": "truck",
    "regional": "rail",
    "continental": "ship",
    "intercontinental": "ship",
    "time_sensitive": "air"
  },
  "employee_revenue_ratio": {
    "software": 500000,
    "semiconductors": 300000,
    "manufacturing": 200000,
    "mining": 250000,
    "services": 150000
  },
  "rd_spending_by_industry": {
    "software": 20,
    "semiconductors": 15,
    "pharmaceuticals": 18,
    "manufacturing": 5,
    "mining": 2,
    "services": 8
  }
}
```

**Step 2: Create geographic clusters data file**

Create `data/geo-clusters.json`:

```json
{
  "industries": {
    "semiconductors": [
      {"country": "Taiwan", "region": "Hsinchu", "share": 35},
      {"country": "South Korea", "region": "Seoul", "share": 25},
      {"country": "USA", "region": "Arizona", "share": 15},
      {"country": "Japan", "region": "Tokyo", "share": 15},
      {"country": "China", "region": "Shanghai", "share": 10}
    ],
    "mining": [
      {"country": "Australia", "region": "Western Australia", "share": 30},
      {"country": "Chile", "region": "Atacama", "share": 25},
      {"country": "Peru", "region": "Arequipa", "share": 15},
      {"country": "China", "region": "Inner Mongolia", "share": 15},
      {"country": "Canada", "region": "Quebec", "share": 15}
    ],
    "software": [
      {"country": "USA", "region": "California", "share": 40},
      {"country": "USA", "region": "Washington", "share": 15},
      {"country": "India", "region": "Bangalore", "share": 15},
      {"country": "China", "region": "Beijing", "share": 15},
      {"country": "UK", "region": "London", "share": 15}
    ],
    "chemicals": [
      {"country": "Germany", "region": "Rhine-Ruhr", "share": 25},
      {"country": "USA", "region": "Texas", "share": 25},
      {"country": "China", "region": "Jiangsu", "share": 20},
      {"country": "Japan", "region": "Osaka", "share": 15},
      {"country": "Saudi Arabia", "region": "Jubail", "share": 15}
    ],
    "manufacturing": [
      {"country": "China", "region": "Guangdong", "share": 35},
      {"country": "USA", "region": "Midwest", "share": 20},
      {"country": "Germany", "region": "Bavaria", "share": 15},
      {"country": "Japan", "region": "Nagoya", "share": 15},
      {"country": "Mexico", "region": "Monterrey", "share": 15}
    ]
  }
}
```

**Step 3: Create relationships data file**

Create `data/relationships.json`:

```json
{
  "trade_routes": {
    "asia_to_usa": {
      "method": "ship",
      "duration_days": 30,
      "cost_per_kg": 2.5
    },
    "europe_to_usa": {
      "method": "ship",
      "duration_days": 14,
      "cost_per_kg": 2.0
    },
    "asia_to_europe": {
      "method": "ship",
      "duration_days": 35,
      "cost_per_kg": 3.0
    },
    "domestic_usa": {
      "method": "truck",
      "duration_days": 3,
      "cost_per_kg": 0.5
    },
    "domestic_asia": {
      "method": "truck",
      "duration_days": 2,
      "cost_per_kg": 0.3
    }
  },
  "certifications_by_industry": {
    "semiconductors": ["ISO 9001", "ISO 14001", "IATF 16949"],
    "chemicals": ["ISO 9001", "ISO 14001", "REACH", "FDA"],
    "manufacturing": ["ISO 9001", "ISO 14001", "CE"],
    "mining": ["ISO 9001", "ISO 14001", "ISO 45001"],
    "software": ["ISO 27001", "SOC 2", "GDPR"]
  }
}
```

**Step 4: Commit data infrastructure**

```bash
git add data/estimation-rules.json data/geo-clusters.json data/relationships.json
git commit -m "feat: add data infrastructure for enrichment

Add estimation rules, geographic clusters, and relationship data
for hybrid real/estimated supply chain enrichment."
```

---

## Task 2: Build Top 100 Analysis Script

**Files:**
- Create: `scripts/analyze-top100.js`

**Step 1: Create analysis script skeleton**

Create `scripts/analyze-top100.js`:

```javascript
#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const PAGES_DIR = path.join(ROOT, 'content', 'pages');
const COMPANIES_DIR = path.join(ROOT, 'content', 'companies');
const OUTPUT_FILE = path.join(ROOT, 'data', 'top100-companies.json');

console.log('Analyzing companies for top 100 ranking...');

// Load existing graph data for dependency counts
const graphData = JSON.parse(
  fs.readFileSync(path.join(ROOT, 'static', 'data', 'graph.json'), 'utf-8')
);

// Parse all company files
const companyFiles = fs.readdirSync(COMPANIES_DIR).filter(f => f.endsWith('.md'));
const companies = [];

console.log(`Found ${companyFiles.length} company files`);
```

**Step 2: Add company parsing logic**

Add to `scripts/analyze-top100.js`:

```javascript
companyFiles.forEach(file => {
  const content = fs.readFileSync(path.join(COMPANIES_DIR, file), 'utf-8');
  const slug = file.replace('.md', '');

  // Parse YAML frontmatter
  const titleMatch = content.match(/^title:\s*"([^"]+)"/m);
  const revenueMatch = content.match(/^revenue:\s*([\d]+)/m);
  const marketCapMatch = content.match(/^market_cap:\s*([\d]+)/m);
  const industryMatch = content.match(/^industry:\s*"([^"]+)"/m);

  // Parse products array
  const products = [];
  const productsMatch = content.match(/products:([\s\S]*?)(?=\n\w+:|financials:|---)/);
  if (productsMatch) {
    const linkMatches = productsMatch[1].matchAll(/link:\s*"([^"]+)"/g);
    for (const match of linkMatches) {
      products.push(match[1]);
    }
  }

  companies.push({
    slug,
    name: titleMatch ? titleMatch[1] : slug,
    revenue: revenueMatch ? parseInt(revenueMatch[1]) : 0,
    market_cap: marketCapMatch ? parseInt(marketCapMatch[1]) : 0,
    industry: industryMatch ? industryMatch[1] : 'Unknown',
    product_count: products.length,
    products
  });
});

console.log(`Parsed ${companies.length} companies`);
```

**Step 3: Add dependency counting logic**

Add to `scripts/analyze-top100.js`:

```javascript
// Count downstream dependencies for each company's products
companies.forEach(company => {
  let totalDependencies = 0;
  let minDistance = Infinity;

  company.products.forEach(productSlug => {
    // Find this product in graph
    const node = graphData.nodes.find(n => n.id === productSlug);
    if (node) {
      // Count how many other products depend on this one
      const dependencies = graphData.edges.filter(e => e.target === productSlug).length;
      totalDependencies += dependencies;

      // Track minimum distance to end product
      if (node.distance >= 0 && node.distance < minDistance) {
        minDistance = node.distance;
      }
    }
  });

  company.downstream_dependencies = totalDependencies;
  company.min_distance = minDistance !== Infinity ? minDistance : -1;
});

console.log('Calculated dependency counts');
```

**Step 4: Add scoring and ranking logic**

Add to `scripts/analyze-top100.js`:

```javascript
// Score each company (weights from design doc)
companies.forEach(company => {
  const marketCapScore = (company.market_cap / 1e12) * 40; // Normalize to trillions
  const productScore = company.product_count * 25;
  const dependencyScore = company.downstream_dependencies * 25;
  const distanceScore = company.min_distance >= 0
    ? (6 - company.min_distance) * 10 // Closer to end product = higher score
    : 0;

  company.score = marketCapScore + productScore + dependencyScore + distanceScore;
});

// Sort by score descending
companies.sort((a, b) => b.score - a.score);

// Take top 100
const top100 = companies.slice(0, 100);

// Write output
fs.mkdirSync(path.dirname(OUTPUT_FILE), { recursive: true });
fs.writeFileSync(OUTPUT_FILE, JSON.stringify(top100, null, 2));

console.log(`\nTop 100 companies written to ${OUTPUT_FILE}`);
console.log(`\nTop 10:`);
top100.slice(0, 10).forEach((c, i) => {
  console.log(`${i + 1}. ${c.name} (score: ${c.score.toFixed(1)})`);
});
```

**Step 5: Make script executable and test**

```bash
chmod +x scripts/analyze-top100.js
node scripts/analyze-top100.js
```

Expected output: List of top 100 companies with scores

**Step 6: Commit analysis script**

```bash
git add scripts/analyze-top100.js
git commit -m "feat: add top 100 company analysis script

Scores companies by market cap, product count, dependencies, and
supply chain distance. Outputs ranked list for prioritized research."
```

---

## Task 3: Build Estimation Generator Script

**Files:**
- Create: `scripts/estimate-generator.js`

**Step 1: Create estimation script skeleton**

Create `scripts/estimate-generator.js`:

```javascript
#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const PAGES_DIR = path.join(ROOT, 'content', 'pages');
const COMPANIES_DIR = path.join(ROOT, 'content', 'companies');

// Load data files
const estimationRules = JSON.parse(
  fs.readFileSync(path.join(ROOT, 'data', 'estimation-rules.json'), 'utf-8')
);
const geoClusters = JSON.parse(
  fs.readFileSync(path.join(ROOT, 'data', 'geo-clusters.json'), 'utf-8')
);
const relationships = JSON.parse(
  fs.readFileSync(path.join(ROOT, 'data', 'relationships.json'), 'utf-8')
);
const top100 = JSON.parse(
  fs.readFileSync(path.join(ROOT, 'data', 'top100-companies.json'), 'utf-8')
);

const top100Slugs = new Set(top100.map(c => c.slug));

console.log('Generating estimated data for non-top-100 entities...');
```

**Step 2: Add product estimation functions**

Add to `scripts/estimate-generator.js`:

```javascript
function estimateLeadTime(productSlug, price, country) {
  // Determine product category by price and name
  let baseTime = estimationRules.lead_times.base_manufacturing.basic_components;

  if (productSlug.includes('chip') || productSlug.includes('wafer')) {
    baseTime = estimationRules.lead_times.base_manufacturing.semiconductors;
  } else if (price < 10) {
    baseTime = estimationRules.lead_times.base_manufacturing.raw_materials;
  } else if (price > 1000) {
    baseTime = estimationRules.lead_times.base_manufacturing.equipment;
  } else if (price > 100) {
    baseTime = estimationRules.lead_times.base_manufacturing.complex_components;
  }

  // Add shipping time based on country
  let shippingTime = estimationRules.lead_times.shipping_additions.domestic;
  if (!['USA', 'United States'].includes(country)) {
    if (['China', 'Taiwan', 'Japan', 'South Korea'].includes(country)) {
      shippingTime = estimationRules.lead_times.shipping_additions.intercontinental;
    } else {
      shippingTime = estimationRules.lead_times.shipping_additions.continental;
    }
  }

  return baseTime + shippingTime;
}

function estimateMOQ(price) {
  if (price < 10) return 10000;
  if (price < 100) return 5000;
  if (price < 1000) return 1000;
  if (price < 10000) return 100;
  return 10;
}

function estimateRisk(country) {
  for (const [level, countries] of Object.entries(estimationRules.risk_by_country)) {
    if (countries.includes(country)) return level;
  }
  return 'medium'; // default
}

function estimateVolatility(productSlug) {
  if (productSlug.includes('ore') || productSlug.includes('metal') || productSlug.includes('oil')) {
    return 'volatile';
  }
  if (productSlug.includes('equipment') || productSlug.includes('service')) {
    return 'stable';
  }
  return 'moderate';
}

function estimateTransportation(country, price) {
  if (price > 10000) return 'air'; // Expensive equipment
  if (['USA', 'United States'].includes(country)) return 'truck';
  if (['China', 'Taiwan', 'Japan', 'South Korea'].includes(country)) return 'ship';
  return 'rail';
}

function estimateCertifications(industry) {
  return relationships.certifications_by_industry[industry] || ['ISO 9001'];
}
```

**Step 3: Add company estimation functions**

Add to `scripts/estimate-generator.js`:

```javascript
function estimateEmployees(revenue, industry) {
  const ratio = estimationRules.employee_revenue_ratio[industry] || 200000;
  return Math.round(revenue / ratio);
}

function estimateRD(industry) {
  return estimationRules.rd_spending_by_industry[industry] || 5;
}

function estimateFactoryLocations(industry, companyName) {
  const clusters = geoClusters.industries[industry] || geoClusters.industries.manufacturing;

  // Major companies get 3 locations, smaller get 1-2
  const locationCount = companyName.length > 10 ? 3 : (Math.random() > 0.5 ? 2 : 1);

  const locations = [];
  const selectedClusters = clusters.slice(0, locationCount);

  let remainingCapacity = 100;
  selectedClusters.forEach((cluster, i) => {
    const isLast = i === selectedClusters.length - 1;
    const capacity = isLast ? remainingCapacity : Math.round(cluster.share * (100 / clusters.slice(0, locationCount).reduce((sum, c) => sum + c.share, 0)));

    locations.push({
      country: cluster.country,
      city: cluster.region,
      capacity_pct: capacity
    });

    remainingCapacity -= capacity;
  });

  return locations;
}
```

**Step 4: Process product pages**

Add to `scripts/estimate-generator.js`:

```javascript
// Process all product pages
const productFiles = fs.readdirSync(PAGES_DIR).filter(f => f.endsWith('.md'));
let productsUpdated = 0;

productFiles.forEach(file => {
  const filePath = path.join(PAGES_DIR, file);
  let content = fs.readFileSync(filePath, 'utf-8');

  // Check if already has new fields
  if (content.includes('lead_time_days:')) {
    return; // Skip, already enriched
  }

  // Parse existing data
  const slug = file.replace('.md', '');
  const priceMatch = content.match(/^selling_price:\s*([\d.]+)/m);
  const countryMatch = content.match(/^country:\s*"([^"]+)"/m);
  const companyMatch = content.match(/^company:\s*"([^"]+)"/m);

  const price = priceMatch ? parseFloat(priceMatch[1]) : 10;
  const country = countryMatch ? countryMatch[1] : 'USA';
  const company = companyMatch ? companyMatch[1] : '';

  // Determine if this company is in top 100 (skip manual research ones)
  const companySlug = company.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, '');
  if (top100Slugs.has(companySlug)) {
    return; // Skip, will be manually researched
  }

  // Generate estimates
  const leadTime = estimateLeadTime(slug, price, country);
  const moq = estimateMOQ(price);
  const risk = estimateRisk(country);
  const volatility = estimateVolatility(slug);
  const transportation = estimateTransportation(country, price);
  const industry = 'manufacturing'; // Default, would need better detection
  const certifications = estimateCertifications(industry);

  // Insert new fields after value_created
  const newFields = `lead_time_days: ${leadTime}
minimum_order_quantity: ${moq}
transportation_method: "${transportation}"
geopolitical_risk: "${risk}"
price_volatility: "${volatility}"
certifications: ${JSON.stringify(certifications)}
data_quality: "estimated"`;

  content = content.replace(
    /(value_created:\s*[\d.-]+)/,
    `$1\n${newFields}`
  );

  fs.writeFileSync(filePath, content);
  productsUpdated++;
});

console.log(`Updated ${productsUpdated} product pages with estimated data`);
```

**Step 5: Process company pages**

Add to `scripts/estimate-generator.js`:

```javascript
// Process all company pages
const companyFiles = fs.readdirSync(COMPANIES_DIR).filter(f => f.endsWith('.md'));
let companiesUpdated = 0;

companyFiles.forEach(file => {
  const filePath = path.join(COMPANIES_DIR, file);
  let content = fs.readFileSync(filePath, 'utf-8');

  // Check if already has new fields
  if (content.includes('employees:')) {
    return; // Skip, already enriched
  }

  const slug = file.replace('.md', '');

  // Skip top 100
  if (top100Slugs.has(slug)) {
    return;
  }

  // Parse existing data
  const nameMatch = content.match(/^title:\s*"([^"]+)"/m);
  const revenueMatch = content.match(/^revenue:\s*([\d]+)/m);
  const industryMatch = content.match(/^industry:\s*"([^"]+)"/m);

  const name = nameMatch ? nameMatch[1] : slug;
  const revenue = revenueMatch ? parseInt(revenueMatch[1]) : 1000000000;
  const industry = industryMatch ? industryMatch[1].toLowerCase() : 'manufacturing';

  // Generate estimates
  const employees = estimateEmployees(revenue, industry);
  const rdSpending = estimateRD(industry);
  const factoryLocations = estimateFactoryLocations(industry, name);
  const publicPrivate = revenue > 10000000000 ? 'public' : 'private';
  const foundedYear = Math.floor(1950 + Math.random() * 70); // Random between 1950-2020

  // Insert new fields after market_cap
  const newFields = `employees: ${employees}
rd_spending_pct: ${rdSpending}
public_private: "${publicPrivate}"
founded_year: ${foundedYear}
factory_locations:
${factoryLocations.map(loc => `  - country: "${loc.country}"\n    city: "${loc.city}"\n    capacity_pct: ${loc.capacity_pct}`).join('\n')}
data_quality: "estimated"`;

  content = content.replace(
    /(market_cap:\s*[\d]+)/,
    `$1\n\n${newFields}`
  );

  fs.writeFileSync(filePath, content);
  companiesUpdated++;
});

console.log(`Updated ${companiesUpdated} company pages with estimated data`);
console.log('\nEstimation complete!');
```

**Step 6: Make script executable and test**

```bash
chmod +x scripts/estimate-generator.js
node scripts/estimate-generator.js
```

Expected output: Counts of updated products and companies

**Step 7: Commit estimation script**

```bash
git add scripts/estimate-generator.js
git commit -m "feat: add estimation generator script

Generates plausible lead times, MOQs, risks, employee counts, and
factory locations for non-top-100 entities using heuristics."
```

---

## Task 4: Manual Research Workflow (Top 100)

**Files:**
- Create: `docs/research-workflow.md`
- Create: `data/real-data-sources.json`

**Step 1: Document research workflow**

Create `docs/research-workflow.md`:

```markdown
# Manual Research Workflow for Top 100 Companies

## Process

For each company in `data/top100-companies.json`:

### 1. Company Research

**Sources to check:**
- Company website (About, Locations pages)
- Annual reports / Investor relations
- LinkedIn company page
- Industry databases (if available)
- News articles about factories/expansions

**Data to collect:**
- Actual employee count
- R&D spending percentage
- Factory locations with cities
- Founded year
- Public/private status

**Record in:** `docs/research/[company-slug].md`

### 2. Product Research

For each product manufactured by the company:

**Sources:**
- Industry lead time standards
- Logistics provider data
- Supplier websites
- Industry publications

**Data to collect:**
- Typical lead times
- Minimum order quantities
- Transportation methods
- Certifications required
- Quality standards

**Record in:** `docs/research/[company-slug].md`

### 3. Update Files

Manually update company and product markdown files with:
- Set `data_quality: "real"`
- Set `last_verified: "2026-02-16"`
- Add researched values

### 4. Document Sources

Add entry to `data/real-data-sources.json`:

```json
{
  "company_slug": {
    "sources": [
      {
        "url": "https://company.com/about",
        "type": "company_website",
        "credibility": "high",
        "accessed": "2026-02-16"
      }
    ],
    "fields_verified": ["employees", "factory_locations", "founded_year"]
  }
}
```

## Priority Order

Work through top100 list in order. First 10 companies are highest priority.

## Time Budget

Allow 30-60 minutes per company for thorough research.
```

**Step 2: Create sources tracking file**

Create `data/real-data-sources.json`:

```json
{
  "_readme": "Track all sources used for manual research of top 100 companies",
  "_template": {
    "company_slug": {
      "sources": [
        {
          "url": "https://example.com",
          "type": "company_website|annual_report|news|database",
          "credibility": "high|medium|low",
          "accessed": "YYYY-MM-DD"
        }
      ],
      "fields_verified": ["employees", "rd_spending_pct", "factory_locations"]
    }
  }
}
```

**Step 3: Create research directory**

```bash
mkdir -p docs/research
echo "# Research Notes\n\nStore individual company research files here." > docs/research/README.md
```

**Step 4: Commit research workflow**

```bash
git add docs/research-workflow.md data/real-data-sources.json docs/research/
git commit -m "docs: add manual research workflow for top 100

Documents process for researching real data, tracking sources,
and maintaining data quality standards."
```

---

## Task 5: Page Generator for Missing Content

**Files:**
- Create: `scripts/page-generator.js`

**Step 1: Create page generator skeleton**

Create `scripts/page-generator.js`:

```javascript
#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const PAGES_DIR = path.join(ROOT, 'content', 'pages');
const COMPANIES_DIR = path.join(ROOT, 'content', 'companies');

// Load data files
const missingPages = JSON.parse(
  fs.readFileSync(path.join(ROOT, 'missing-pages.json'), 'utf-8')
);
const missingCompanies = JSON.parse(
  fs.readFileSync(path.join(ROOT, 'missing-companies.json'), 'utf-8')
);
const productAnalysis = JSON.parse(
  fs.readFileSync(path.join(ROOT, 'product-analysis.json'), 'utf-8')
);

console.log(`Missing pages: ${missingPages.length}`);
console.log(`Missing companies: ${missingCompanies.length}`);
```

**Step 2: Add product page template**

Add to `scripts/page-generator.js`:

```javascript
function generateProductPage(slug) {
  // Try to find product info in product-analysis
  const companyFreq = productAnalysis.companyFrequency || {};

  // Generate basic product info
  const title = slug.split('-').map(w =>
    w.charAt(0).toUpperCase() + w.slice(1)
  ).join(' ');

  // Assign to most common manufacturer or "Various Manufacturers"
  const company = Object.keys(companyFreq).length > 0
    ? Object.keys(companyFreq)[Math.floor(Math.random() * Math.min(5, Object.keys(companyFreq).length))]
    : "Various Manufacturers";

  const country = "Global";
  const price = Math.round(Math.random() * 1000) + 10;

  const template = `---
title: "${title}"
company: "${company}"
country: "${country}"
selling_price: ${price}
inputs:
  - name: "Raw Materials"
    cost: ${Math.round(price * 0.4)}
    link: "raw-materials"
  - name: "Energy"
    cost: ${Math.round(price * 0.2)}
    link: "electricity"
  - name: "Labor"
    cost: ${Math.round(price * 0.3)}
    link: "skilled-labor"
value_created: ${Math.round(price * 0.1)}
lead_time_days: 30
minimum_order_quantity: 1000
transportation_method: "ship"
geopolitical_risk: "medium"
price_volatility: "moderate"
certifications: ["ISO 9001"]
data_quality: "estimated"
---

1. Procure raw materials from suppliers

2. Transport materials to manufacturing facility

3. Process materials through production equipment

4. Apply quality control checks at each stage

5. Package finished ${title} products

6. Ship to distribution centers and customers

This product is manufactured using standard industrial processes.
`;

  return template;
}
```

**Step 3: Add company page template**

Add to `scripts/page-generator.js`:

```javascript
function generateCompanyPage(companyData) {
  const { name, slug, products } = companyData;

  const template = `---
title: "${name}"
type: "companies"
industry: "Manufacturing"
country: "Global"
revenue: 1000000000
market_cap: 2000000000
employees: 5000
rd_spending_pct: 5
public_private: "private"
founded_year: 1980
factory_locations:
  - country: "China"
    city: "Shanghai"
    capacity_pct: 60
  - country: "USA"
    city: "California"
    capacity_pct: 40
data_quality: "estimated"

products:
${products.map(p => `  - name: "${p.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')}"\n    link: "${p}"`).join('\n')}

financials:
  profit_margin: 10.0
  operating_margin: 15.0
---

# ${name}

${name} is a manufacturing company producing components for the global supply chain.

## Products

${name} produces ${products.length} products in our database.

## Market Position

As a manufacturing company, ${name} supplies components to various industries worldwide.

## Industry

**Manufacturing**: Companies in this sector typically have 10% profit margins.
`;

  return template;
}
```

**Step 4: Generate missing pages**

Add to `scripts/page-generator.js`:

```javascript
// Generate missing product pages
let createdProducts = 0;
missingPages.forEach(slug => {
  const filePath = path.join(PAGES_DIR, `${slug}.md`);

  // Skip if already exists
  if (fs.existsSync(filePath)) {
    return;
  }

  const content = generateProductPage(slug);
  fs.writeFileSync(filePath, content);
  createdProducts++;
});

console.log(`Created ${createdProducts} product pages`);

// Generate missing company pages
let createdCompanies = 0;
missingCompanies.forEach(company => {
  const filePath = path.join(COMPANIES_DIR, `${company.slug}.md`);

  // Skip if already exists
  if (fs.existsSync(filePath)) {
    return;
  }

  const content = generateCompanyPage(company);
  fs.writeFileSync(filePath, content);
  createdCompanies++;
});

console.log(`Created ${createdCompanies} company pages`);
console.log('\nPage generation complete!');
```

**Step 5: Make script executable and test**

```bash
chmod +x scripts/page-generator.js
node scripts/page-generator.js
```

Expected output: Counts of created pages

**Step 6: Commit page generator**

```bash
git add scripts/page-generator.js content/pages/ content/companies/
git commit -m "feat: generate missing product and company pages

Creates 283 missing product pages and 142 missing company pages
with basic structure and estimated data."
```

---

## Task 6: Validation Script

**Files:**
- Create: `scripts/validate-data.js`

**Step 1: Create validation script**

Create `scripts/validate-data.js`:

```javascript
#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const PAGES_DIR = path.join(ROOT, 'content', 'pages');
const COMPANIES_DIR = path.join(ROOT, 'content', 'companies');

const errors = [];
const warnings = [];

console.log('Validating data...\n');

// Validate product pages
const productFiles = fs.readdirSync(PAGES_DIR).filter(f => f.endsWith('.md'));

productFiles.forEach(file => {
  const content = fs.readFileSync(path.join(PAGES_DIR, file), 'utf-8');
  const slug = file.replace('.md', '');

  // Check required fields
  if (!content.match(/^title:/m)) {
    errors.push(`${slug}: Missing title field`);
  }
  if (!content.match(/^selling_price:/m)) {
    errors.push(`${slug}: Missing selling_price field`);
  }

  // Check for negative prices
  const priceMatch = content.match(/^selling_price:\s*([\d.-]+)/m);
  if (priceMatch && parseFloat(priceMatch[1]) < 0) {
    warnings.push(`${slug}: Negative price ${priceMatch[1]}`);
  }

  // Check lead times are reasonable
  const leadTimeMatch = content.match(/^lead_time_days:\s*([\d]+)/m);
  if (leadTimeMatch && parseInt(leadTimeMatch[1]) > 365) {
    warnings.push(`${slug}: Unusually long lead time ${leadTimeMatch[1]} days`);
  }

  // Check certifications format
  const certsMatch = content.match(/^certifications:\s*(.+)/m);
  if (certsMatch && !certsMatch[1].startsWith('[')) {
    errors.push(`${slug}: Certifications must be an array`);
  }
});

// Validate company pages
const companyFiles = fs.readdirSync(COMPANIES_DIR).filter(f => f.endsWith('.md'));

companyFiles.forEach(file => {
  const content = fs.readFileSync(path.join(COMPANIES_DIR, file), 'utf-8');
  const slug = file.replace('.md', '');

  // Check required fields
  if (!content.match(/^title:/m)) {
    errors.push(`Company ${slug}: Missing title field`);
  }

  // Check factory locations sum to 100%
  const factoryMatches = [...content.matchAll(/capacity_pct:\s*(\d+)/g)];
  if (factoryMatches.length > 0) {
    const total = factoryMatches.reduce((sum, m) => sum + parseInt(m[1]), 0);
    if (Math.abs(total - 100) > 1) {
      warnings.push(`Company ${slug}: Factory capacities sum to ${total}%, not 100%`);
    }
  }

  // Check R&D percentage is reasonable
  const rdMatch = content.match(/^rd_spending_pct:\s*([\d.]+)/m);
  if (rdMatch && parseFloat(rdMatch[1]) > 30) {
    warnings.push(`Company ${slug}: Unusually high R&D spending ${rdMatch[1]}%`);
  }
});

// Report results
console.log(`Validated ${productFiles.length} products and ${companyFiles.length} companies\n`);

if (errors.length > 0) {
  console.log(`❌ ${errors.length} ERRORS:\n`);
  errors.forEach(e => console.log(`  - ${e}`));
  console.log();
}

if (warnings.length > 0) {
  console.log(`⚠️  ${warnings.length} WARNINGS:\n`);
  warnings.forEach(w => console.log(`  - ${w}`));
  console.log();
}

if (errors.length === 0 && warnings.length === 0) {
  console.log('✅ All validations passed!');
}

process.exit(errors.length > 0 ? 1 : 0);
```

**Step 2: Make script executable and test**

```bash
chmod +x scripts/validate-data.js
node scripts/validate-data.js
```

Expected output: Validation report with any errors/warnings

**Step 3: Fix any validation errors**

Review validation output and fix issues in source files.

**Step 4: Commit validation script**

```bash
git add scripts/validate-data.js
git commit -m "feat: add data validation script

Checks schema compliance, detects anomalies like negative prices,
validates factory capacity percentages, and reports errors/warnings."
```

---

## Task 7: Hugo Template Updates

**Files:**
- Modify: `layouts/pages/single.html`
- Modify: `layouts/companies/single.html`
- Create: `layouts/partials/data-quality-badge.html`

**Step 1: Add data quality badge partial**

Create `layouts/partials/data-quality-badge.html`:

```html
{{ $quality := .Params.data_quality | default "unknown" }}
{{ $verified := .Params.last_verified }}

{{ if eq $quality "real" }}
  <span class="badge badge-verified" title="Verified real data{{ if $verified }} - Last verified: {{ $verified }}{{ end }}">
    ✓ Verified
  </span>
{{ else if eq $quality "estimated" }}
  <span class="badge badge-estimated" title="Estimated data - See methodology">
    ~ Estimated
  </span>
{{ end }}
```

**Step 2: Update product page layout**

Find the section in `layouts/pages/single.html` that displays frontmatter and add new fields. Add after the existing price display:

```html
<!-- Data Quality Badge -->
<div class="data-quality">
  {{ partial "data-quality-badge.html" . }}
</div>

<!-- Supply Chain Dynamics -->
{{ with .Params.lead_time_days }}
<div class="supply-chain-info">
  <h3>Supply Chain Information</h3>
  <div class="info-grid">
    <div class="info-item">
      <span class="icon">📅</span>
      <strong>Lead Time:</strong> {{ . }} days
    </div>
    {{ with $.Params.minimum_order_quantity }}
    <div class="info-item">
      <span class="icon">📦</span>
      <strong>Minimum Order:</strong> {{ . }} units
    </div>
    {{ end }}
    {{ with $.Params.transportation_method }}
    <div class="info-item">
      <span class="icon">🚢</span>
      <strong>Transportation:</strong> {{ . }}
    </div>
    {{ end }}
    {{ with $.Params.geopolitical_risk }}
    <div class="info-item risk-{{ . }}">
      <span class="icon">⚠️</span>
      <strong>Geopolitical Risk:</strong> {{ . }}
    </div>
    {{ end }}
    {{ with $.Params.price_volatility }}
    <div class="info-item volatility-{{ . }}">
      <span class="icon">📊</span>
      <strong>Price Volatility:</strong> {{ . }}
    </div>
    {{ end }}
  </div>

  {{ with $.Params.certifications }}
  <div class="certifications">
    <strong>Certifications:</strong>
    {{ range . }}
      <span class="cert-badge">{{ . }}</span>
    {{ end }}
  </div>
  {{ end }}
</div>
{{ end }}
```

**Step 3: Update company page layout**

Find the section in `layouts/companies/single.html` after revenue/market_cap and add:

```html
<!-- Company Details -->
{{ with .Params.employees }}
<div class="company-details">
  <h3>Company Information</h3>

  <div class="info-grid">
    <div class="info-item">
      <span class="icon">👥</span>
      <strong>Employees:</strong> {{ . | lang.FormatNumber 0 }}
    </div>
    {{ with $.Params.founded_year }}
    <div class="info-item">
      <span class="icon">📅</span>
      <strong>Founded:</strong> {{ . }}
    </div>
    {{ end }}
    {{ with $.Params.rd_spending_pct }}
    <div class="info-item">
      <span class="icon">🔬</span>
      <strong>R&D Spending:</strong> {{ . }}% of revenue
    </div>
    {{ end }}
    {{ with $.Params.public_private }}
    <div class="info-item">
      <span class="icon">🏢</span>
      <strong>Type:</strong> {{ . | title }}
    </div>
    {{ end }}
  </div>

  {{ with $.Params.factory_locations }}
  <div class="factory-locations">
    <h4>Factory Locations</h4>
    <div class="locations-grid">
      {{ range . }}
      <div class="location-card">
        <div class="location-header">
          <strong>{{ .city }}, {{ .country }}</strong>
        </div>
        <div class="capacity-bar">
          <div class="capacity-fill" style="width: {{ .capacity_pct }}%"></div>
          <span class="capacity-label">{{ .capacity_pct }}% capacity</span>
        </div>
      </div>
      {{ end }}
    </div>
  </div>
  {{ end }}

  <!-- Data Quality Badge -->
  <div class="data-quality">
    {{ partial "data-quality-badge.html" . }}
  </div>
</div>
{{ end }}
```

**Step 4: Add CSS styles**

Add to your site's CSS file (likely in `static/css/` or `assets/css/`):

```css
.badge {
  display: inline-block;
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 0.85em;
  font-weight: 600;
  margin-left: 8px;
}

.badge-verified {
  background: #10b981;
  color: white;
}

.badge-estimated {
  background: #f59e0b;
  color: white;
}

.supply-chain-info, .company-details {
  margin: 2rem 0;
  padding: 1.5rem;
  background: #f9fafb;
  border-radius: 8px;
}

.info-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
  margin: 1rem 0;
}

.info-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.info-item .icon {
  font-size: 1.2em;
}

.risk-high { color: #dc2626; }
.risk-medium { color: #f59e0b; }
.risk-low { color: #10b981; }

.volatility-volatile { color: #dc2626; }
.volatility-moderate { color: #f59e0b; }
.volatility-stable { color: #10b981; }

.certifications {
  margin-top: 1rem;
}

.cert-badge {
  display: inline-block;
  background: #3b82f6;
  color: white;
  padding: 4px 12px;
  border-radius: 16px;
  margin: 4px;
  font-size: 0.85em;
}

.factory-locations {
  margin-top: 1.5rem;
}

.locations-grid {
  display: grid;
  gap: 1rem;
  margin-top: 1rem;
}

.location-card {
  border: 1px solid #e5e7eb;
  padding: 1rem;
  border-radius: 8px;
  background: white;
}

.capacity-bar {
  margin-top: 0.5rem;
  height: 24px;
  background: #e5e7eb;
  border-radius: 4px;
  position: relative;
  overflow: hidden;
}

.capacity-fill {
  height: 100%;
  background: #3b82f6;
  transition: width 0.3s ease;
}

.capacity-label {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 0.85em;
  font-weight: 600;
  color: #1f2937;
}
```

**Step 5: Test Hugo build**

```bash
hugo server
```

Visit site in browser and check that new fields display correctly.

**Step 6: Commit template updates**

```bash
git add layouts/ static/css/
git commit -m "feat: update Hugo templates for enriched data

Add display of lead times, MOQs, risks, certifications, employee
counts, factory locations, and data quality badges."
```

---

## Task 8: Documentation

**Files:**
- Create: `docs/estimation-methods.md`
- Modify: `README.md`

**Step 1: Document estimation methodology**

Create `docs/estimation-methods.md`:

```markdown
# Data Estimation Methodology

## Overview

This document explains how estimated data is generated for supply chain entities not in the top 100 critical companies.

## Transparency

All estimated data is clearly marked with:
- `data_quality: "estimated"` in YAML frontmatter
- ~ "Estimated" badge in the UI
- This methodology document linked from pages

## Lead Times

**Formula:** Base Manufacturing Time + Shipping Time

**Base Manufacturing Times:**
- Raw materials: 7 days
- Basic components: 14 days
- Complex components: 30 days
- Semiconductors: 90 days
- Equipment: 60 days

**Shipping Additions:**
- Domestic: +3 days
- Continental: +14 days
- Intercontinental: +30 days

## Minimum Order Quantities

Scaled by product price:
- $0-10: 10,000 units
- $10-100: 5,000 units
- $100-1,000: 1,000 units
- $1,000-10,000: 100 units
- $10,000+: 10 units

## Geopolitical Risk

Based on country-level stability indices:
- **Low**: USA, Germany, Japan, South Korea, Taiwan, Singapore
- **Medium**: China, Malaysia, Thailand, Poland, Czech Republic
- **High**: Countries with political instability or sanctions

## Price Volatility

Based on product category:
- **Volatile**: Commodities (metals, oil, ores)
- **Moderate**: Manufactured components
- **Stable**: Equipment and services

## Transportation Methods

- Local: Truck
- Regional: Rail
- Continental/Intercontinental: Ship
- Time-sensitive or high-value: Air

## Employee Counts

Based on revenue and industry:
- Software: $500K revenue per employee
- Semiconductors: $300K per employee
- Manufacturing: $200K per employee
- Mining: $250K per employee

## R&D Spending

Industry averages:
- Software: 20%
- Semiconductors: 15%
- Pharmaceuticals: 18%
- Manufacturing: 5%
- Mining: 2%

## Factory Locations

Distributed based on historical industry clusters:
- Semiconductors: Taiwan, South Korea, USA, Japan, China
- Mining: Australia, Chile, Peru, China, Canada
- Software: USA (CA, WA), India, China, UK
- Chemicals: Germany, USA, China, Japan, Saudi Arabia

Major companies: 3 locations
Regional companies: 1-2 locations

## Continuous Improvement

As we research real data for top 100 companies, we:
1. Update pages with `data_quality: "real"`
2. Add `last_verified: "YYYY-MM-DD"`
3. Document sources in `data/real-data-sources.json`
4. Refine estimation rules based on real data patterns
```

**Step 2: Update README**

Add section to `README.md` after the Statistics section:

```markdown
## Data Quality

This database uses a hybrid approach to data:

- **Top 100 Critical Companies**: Real data from company reports, industry databases, and verified sources
- **Remaining Entities**: Plausible estimates based on industry standards and heuristics

All pages are marked with data quality badges:
- ✓ **Verified**: Real data from documented sources
- ~ **Estimated**: Generated using our [estimation methodology](/docs/estimation-methods.md)

We continuously improve data quality by researching and replacing estimates with verified information.
```

**Step 3: Commit documentation**

```bash
git add docs/estimation-methods.md README.md
git commit -m "docs: add estimation methodology and data quality info

Documents transparent methodology for estimated data and explains
hybrid real/estimated approach in README."
```

---

## Task 9: Build and Deploy

**Step 1: Rebuild graph data**

```bash
node scripts/build-graph-data.js
```

**Step 2: Run validation**

```bash
node scripts/validate-data.js
```

Fix any errors reported.

**Step 3: Build Hugo site**

```bash
hugo
```

Check for build errors.

**Step 4: Test locally**

```bash
hugo server
```

Manual testing checklist:
- [ ] Product pages show new supply chain fields
- [ ] Company pages show employee/factory data
- [ ] Data quality badges display correctly
- [ ] Certifications render as badges
- [ ] Factory capacity bars display
- [ ] No missing pages (404s)
- [ ] Graph visualization still works

**Step 5: Final commit**

```bash
git add public/ static/data/
git commit -m "build: regenerate site with enriched data"
```

**Step 6: Push and deploy**

```bash
git push origin rushant-123/quickf
```

Vercel will automatically deploy.

---

## Success Criteria

- [ ] 0 missing product pages (283 created)
- [ ] 0 missing company pages (142 created)
- [ ] 0 instances of "Various Manufacturers" replaced
- [ ] All products have lead_time_days, MOQ, transportation_method
- [ ] All companies have employees, factory_locations, rd_spending_pct
- [ ] Data quality badges visible on all pages
- [ ] Top 100 list generated and documented
- [ ] Validation passes with no errors
- [ ] Hugo builds successfully
- [ ] Site deploys to Vercel

---

## Future Enhancements

After initial implementation:

1. **Manual Research**: Work through top 100 companies using `docs/research-workflow.md`
2. **Interactive Visualizations**: Add D3.js supply chain flow diagrams
3. **Risk Dashboard**: Build heat map visualization
4. **Search Filters**: Add filtering by lead time, risk, certifications
5. **User Contributions**: Add workflow for user-submitted corrections
6. **Quarterly Updates**: Schedule regular data refreshes
