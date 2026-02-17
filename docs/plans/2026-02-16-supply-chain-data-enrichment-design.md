# Supply Chain Data Enrichment Design

**Date**: 2026-02-16
**Status**: Approved

## Overview

Enrich the World Research supply chain database with four categories of missing data:
- **B) Supply chain dynamics** - Lead times, transportation, geopolitical risks, price volatility
- **C) Fill existing gaps** - Complete 283 missing product pages, 142 missing company pages, replace 166 "Various Manufacturers"
- **D) Company depth** - Employees, R&D spending, factory locations, production capacity
- **E) Relationships & flows** - Trade routes, quality requirements, minimum order quantities

**Approach**: Hybrid data sourcing - real data for top 100 critical entities, plausible estimates for remaining entries.

## Data Schema Extensions

### Product Pages

Add to YAML frontmatter:

```yaml
lead_time_days: 45              # Manufacturing + shipping time
minimum_order_quantity: 1000     # Smallest purchase quantity
transportation_method: "ship"    # ship/air/rail/truck/pipeline
geopolitical_risk: "medium"      # low/medium/high
price_volatility: "stable"       # stable/moderate/volatile
certifications: ["ISO9001", "RoHS"]  # Quality/safety standards
data_quality: "estimated"        # real/estimated
last_verified: "2026-02-16"      # For real data only
```

### Company Pages

Add to YAML frontmatter:

```yaml
employees: 125000
rd_spending_pct: 15.5            # R&D as % of revenue
public_private: "public"         # public/private
founded_year: 1968
factory_locations:
  - country: "Taiwan"
    city: "Hsinchu"
    capacity_pct: 40
  - country: "USA"
    city: "Arizona"
    capacity_pct: 30
data_quality: "real"
last_verified: "2026-02-16"
```

### New Data Files

**`data/relationships.json`**:
- Trade routes between regions with typical costs
- Lead time matrices by geography
- Shipping method costs and durations
- Quality requirement standards by industry

**`data/geo-clusters.json`**:
- Industry concentration by region (semiconductors → Taiwan/Korea, mining → Australia/Chile)
- Historical rationale for clusters

**`data/estimation-rules.json`**:
- Heuristics for generating plausible values
- Scaling factors by product type
- Geographic distance calculations

## Data Population Strategy

### Phase 1: Identify Top 100 Critical Entities

**Scoring Algorithm**:
- Market cap weight: 40%
- Number of products manufactured: 25%
- Number of downstream dependencies: 25%
- Supply chain distance (proximity to end product): 10%

**Output**: `data/top100-companies.json` with ranked list and scores

### Phase 2: Real Data Research (Top 100)

**Sources**:
- Company annual reports and investor relations
- Industry databases (Bloomberg, S&P, industry associations)
- Factory locations via Google Maps, news articles, LinkedIn
- Lead times from logistics providers and industry standards
- Certifications from regulatory databases

**Documentation**:
- Track sources in `data/real-data-sources.json`
- Include credibility scores and last verification dates
- Store raw research notes in `docs/research/`

### Phase 3: Plausible Estimation (Remaining Entities)

**Lead Times**:
- Base manufacturing time on product complexity (raw materials: 7 days, semiconductors: 90 days)
- Add geographic shipping distance (domestic: +3 days, continental: +14 days, intercontinental: +30 days)

**Minimum Order Quantities**:
- Scale with product cost: cheap bulk goods = high MOQ, expensive equipment = low MOQ
- Raw materials: 10,000+ units
- Components: 1,000-5,000 units
- Equipment: 1-10 units

**Geopolitical Risk**:
- Derive from country-level indices (World Bank governance, political stability, natural disaster frequency)
- Single-country sourcing = higher risk
- Diversified suppliers = lower risk

**Price Volatility**:
- Commodities (metals, oil) = volatile
- Manufactured components = moderate
- Equipment/services = stable

**Factory Locations**:
- Distribute based on industry clusters (geo-clusters.json)
- Major companies: 3-5 locations globally
- Regional companies: 1-2 locations
- Include capacity percentages summing to 100%

**Employee Counts**:
- Scale with revenue and industry (software: high revenue per employee, manufacturing: lower)
- Tech companies: $500K revenue per employee
- Manufacturing: $200K revenue per employee

**R&D Spending**:
- Industry averages: Software 20%, Semiconductors 15%, Manufacturing 5%, Mining 2%

### Phase 4: Fill Missing Pages

**Generate 283 Missing Product Pages**:
- Use existing product page patterns as templates
- Pull data from dependency-distances.json and missing-pages.json
- Apply estimation rules from Phase 3

**Create 142 Missing Company Pages**:
- Use missing-companies.json as source
- Research industry and country for top companies
- Apply estimation rules for remaining companies

**Replace "Various Manufacturers" (166 instances)**:
- Map generic manufacturers to real company names
- Use missing-companies.json for candidate companies
- Ensure product-company industry alignment

## Technical Implementation

### Scripts Directory (`/scripts`)

**`analyze-top100.js`**:
- Parse all product and company markdown files
- Calculate scoring metrics
- Output ranked list to `data/top100-companies.json`

**`research-scraper.js`**:
- Fetch real data from public sources
- Rate limiting and error handling
- Store raw data and parsed results
- Document sources in `data/real-data-sources.json`

**`estimate-generator.js`**:
- Load estimation rules from `data/estimation-rules.json`
- Apply heuristics to generate plausible values
- Calculate lead times, MOQs, risk scores
- Output enriched data files

**`page-generator.js`**:
- Create missing product/company pages from templates
- Merge in estimated/real data
- Maintain consistent formatting

**`validate-data.js`**:
- Check YAML schema compliance
- Detect anomalies (negative prices, impossible lead times)
- Verify cross-references between products/companies
- Output validation report

### Data Files

- `data/top100-companies.json` - Ranked list with scores
- `data/real-data-sources.json` - Research sources with credibility scores
- `data/estimation-rules.json` - Heuristics for generating plausible values
- `data/relationships.json` - Trade routes, shipping matrices, quality standards
- `data/geo-clusters.json` - Industry geographic concentration data
- `data/update-queue.json` - Tracks which data needs refreshing

### Hugo Template Updates

**Product Page Layout** (`layouts/pages/single.html`):
- Display lead time with calendar icon
- Show MOQ with package icon
- Display certifications as badges
- Add transportation method indicator
- Show risk/volatility with color-coded labels
- Add data quality badge (verified/estimated)

**Company Page Layout** (`layouts/companies/single.html`):
- Interactive world map showing factory locations with capacity percentages
- Employee count chart over time (if historical data available)
- R&D spending as percentage bar chart
- Founded year in company header
- Data quality indicators

**New Partial** (`layouts/partials/supply-chain-flow.html`):
- Interactive flow diagram
- Lead times as edge weights
- Transportation methods as edge colors
- Risk indicators on nodes

### Workflow

1. **Run analysis**: `node scripts/analyze-top100.js`
2. **Manual research**: Populate real data for top 100 companies (document in `docs/research/`)
3. **Run estimation**: `node scripts/estimate-generator.js`
4. **Generate pages**: `node scripts/page-generator.js`
5. **Validate**: `node scripts/validate-data.js`
6. **Hugo rebuild**: `hugo` then deploy to Vercel

## Data Display & Maintenance

### Visual Enhancements

**Supply Chain Flow View**:
- Interactive diagram with D3.js or similar
- Lead times as edge weights (thicker = longer)
- Transportation methods as colors (blue=ship, red=air, etc.)
- Click edges to see detailed route info

**Risk Dashboard**:
- Heat map showing geopolitical risks across supply chain levels
- Price volatility indicators
- Filter by risk level to identify vulnerable paths

**Company Deep Dive**:
- Expandable factory location section with world map
- Employee distribution charts
- R&D investment trends
- Historical company timeline

**Data Quality Badges**:
- ✓ "Verified" icon for real data
- ~ "Estimated" icon for generated data
- Hover tooltips explaining methodology
- Link to `/docs/estimation-methods.md`

### Search & Filter Extensions

**New Filters**:
- Lead time ranges (< 30 days, 30-90 days, > 90 days)
- Risk level (low/medium/high geopolitical or price volatility)
- Transportation method
- Certifications
- Company size (employees, revenue)
- Factory locations

### Maintenance Strategy

**Data Quality Tracking**:
- Mark all estimated data with `data_quality: "estimated"`
- Add `last_verified: "YYYY-MM-DD"` to real data
- Track coverage metrics on homepage (% real vs estimated)

**Update Queue**:
- `data/update-queue.json` lists data needing refresh
- Prioritize by: page views, supply chain criticality, data age
- Quarterly review process for top 100 companies

**Documentation**:
- `/docs/estimation-methods.md` - Transparent methodology
- `/docs/research/` - Raw research notes by company
- `/docs/data-sources.md` - List of reliable sources

**Progressive Enhancement**:
- Start with basic data population (all estimated)
- Gradually replace estimates with real data as researched
- Track improvement metrics over time
- User-submitted corrections workflow (future)

## Success Metrics

- 100% page coverage (0 missing pages)
- 0 instances of "Various Manufacturers"
- Top 100 companies have 90%+ real data fields
- All products have lead time, MOQ, transportation method
- All companies have factory locations, employee count
- Data quality badges visible on all pages
- User engagement with risk/flow visualizations

## Open Questions

None - design approved.
