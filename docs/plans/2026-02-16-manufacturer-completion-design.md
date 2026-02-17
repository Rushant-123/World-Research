# Manufacturer Completion - Design Document

## Problem Statement

259 products (18.3% of all 1,413 products) currently have generic placeholder manufacturer names instead of real company assignments:

- 166 products → "Various Manufacturers"
- 66 products → "Industrial Manufacturer"
- 18 products → "Semiconductor Manufacturer"
- 9 products → "Various Mining Companies"

This breaks the Wikipedia-style goal where users can click through to learn about each company in the supply chain.

## Goal

Replace all 259 generic manufacturer placeholders with appropriate real company names, reaching 100% manufacturer coverage across the entire supply chain database.

## Current State

- **1,154 products (81.7%)**: Have real manufacturer assignments ✅
- **259 products (18.3%)**: Use generic placeholders ⚠️
- **907 company pages**: Created with market analysis
- **6,532 supply chain connections**: Properly mapped
- **Supply chain depth**: Complete 6 levels ✅

## Architecture Overview

The system will work in four phases:

### Phase 1: Discovery
Identify all 259 products with generic manufacturers and categorize them by type.

### Phase 2: Assignment
For each product, analyze its context (title, inputs, category, price) and assign appropriate real manufacturers using intelligent pattern matching.

### Phase 3: Company Page Generation
Create company pages for any newly assigned manufacturers that don't have pages yet.

### Phase 4: Verification
Validate all assignments and ensure data integrity (no broken links, valid YAML, proper pricing).

## Manufacturer Assignment Strategy

### Pattern Matching
Analyze the existing 1,154 correctly-assigned products to build a knowledge base:
- Extract patterns (e.g., "silicon wafer" → "Shin-Etsu / Sumco / GlobalWafers")
- Build category-to-manufacturer mappings from existing data

### Context Analysis
For each generic product, examine:
- Product title and technical domain
- Input materials (what it's made from reveals the industry)
- Distance level (D3, D4, D5) indicates complexity
- Price range (commodity vs specialized)

### Assignment Rules

**Semiconductors/Electronics**: Use major fab/IC companies
- TSMC, Samsung, Intel, Texas Instruments, Analog Devices, Cirrus Logic, Broadcom, Qualcomm, etc.

**Industrial Equipment**: Use equipment manufacturers
- Caterpillar, Komatsu, Siemens, ABB, GE, Hitachi, Sandvik, Atlas Copco, etc.

**Mining/Metals**: Use mining companies
- Rio Tinto, BHP, Glencore, Freeport-McMoRan, Vale, Anglo American, etc.

**Chemicals/Materials**: Use chemical companies
- BASF, Dow, DuPont, Evonik, Huntsman, Arkema, Solvay, etc.

**General Rules**:
- Assign 2-4 companies per product (matching existing pattern)
- Use "/" separator between companies
- Prefer companies already in the database (907 existing pages)
- Ensure geographic diversity (project covers 49 countries)
- Match technical capability to product complexity

### Quality Checks
- Companies must be real and appropriate for the product type
- Maintain consistency with similar existing products
- Verify company pages exist or can be created
- Ensure assignments make technical sense

## Implementation Components

### Script 1: `identify-generic-manufacturers.js`
**Purpose**: Scan all product pages for generic manufacturer names

**Output**: `generic-products.json`
```json
{
  "variousManufacturers": [...],
  "industrialManufacturer": [...],
  "semiconductorManufacturer": [...],
  "variousMiningCompanies": [...],
  "totalCount": 259
}
```

### Script 2: `build-manufacturer-knowledge-base.js`
**Purpose**: Analyze the 1,154 correctly-assigned products

**Process**:
1. Read all product pages
2. Categorize by product type (semiconductors, equipment, chemicals, etc.)
3. Extract manufacturer patterns per category
4. Build frequency maps of common assignments

**Output**: `manufacturer-patterns.json`
```json
{
  "patterns": {
    "silicon wafer": ["Shin-Etsu", "Sumco", "GlobalWafers"],
    "industrial pump": ["Alfa Laval", "GEA", "SPX Flow"],
    ...
  },
  "categoryManufacturers": {
    "semiconductors": ["TSMC", "Samsung", "Intel", ...],
    "mining": ["Rio Tinto", "BHP", "Glencore", ...],
    ...
  }
}
```

### Script 3: `assign-manufacturers.js` (main script)
**Purpose**: Generate manufacturer assignments for all 259 products

**Algorithm**:
```
for each product with generic manufacturer:
  1. Analyze product title, inputs, category, price
  2. Match to similar existing products in knowledge base
  3. Find best manufacturer set:
     - Check for exact title match patterns
     - Check for keyword/category matches
     - Use input materials as hints
     - Use distance level and price as filters
  4. Assign 2-4 appropriate manufacturers
  5. Log confidence level (high/medium/low)
```

**Output**: `manufacturer-assignments.json`
```json
{
  "assignments": [
    {
      "file": "adc-dac-circuits.md",
      "currentCompany": "Various Manufacturers",
      "proposedCompany": "Analog Devices / Texas Instruments / Cirrus Logic",
      "confidence": "high",
      "reasoning": "Matched pattern for ADC/DAC circuits"
    },
    ...
  ],
  "statistics": {
    "total": 259,
    "highConfidence": 180,
    "mediumConfidence": 65,
    "lowConfidence": 14
  }
}
```

### Script 4: `apply-manufacturer-assignments.js`
**Purpose**: Apply the reviewed assignments to product pages

**Process**:
1. Read `manufacturer-assignments.json`
2. For each assignment:
   - Load product markdown file
   - Parse YAML frontmatter
   - Update `company` field
   - Preserve all other fields (title, price, inputs, value_created)
   - Write back to file
3. Generate summary report

**Safety**: Dry-run mode by default, requires `--apply` flag to actually write files

### Script 5: `find-missing-company-pages.js`
**Purpose**: Identify companies that need pages created

**Process**:
1. Extract all unique companies from updated product pages
2. Split by "/" separator
3. Compare to existing company page slugs
4. Output list of missing companies

**Output**: `missing-companies.json`

### Script 6: `generate-company-pages.js`
**Purpose**: Create company pages for new manufacturers

**Process**:
1. Read `missing-companies.json`
2. For each company:
   - Generate slug (lowercase, hyphenated)
   - Create markdown file with frontmatter
   - Include: company name, industry, country, description
   - Follow existing company page format
3. Place in `content/companies/`

**Template**: Match existing company page structure

### Script 7: `verify-completion.js`
**Purpose**: Final validation that all goals are met

**Checks**:
- Zero products with generic manufacturer names
- All company links are valid (slugified correctly)
- All product pages have valid YAML syntax
- Price calculations still valid (selling_price > sum of input costs)
- No broken links

**Output**: Completion report with statistics

## Data Flow

```
1. identify-generic-manufacturers.js
   ↓ generic-products.json

2. build-manufacturer-knowledge-base.js
   ↓ manufacturer-patterns.json

3. assign-manufacturers.js (reads both above)
   ↓ manufacturer-assignments.json
   ↓ (manual review/editing if needed)

4. apply-manufacturer-assignments.js
   ↓ updates content/pages/*.md

5. find-missing-company-pages.js
   ↓ missing-companies.json

6. generate-company-pages.js
   ↓ creates content/companies/*.md

7. verify-completion.js
   ↓ final-report.json
```

## Error Handling & Validation

### Safety Mechanisms

1. **Dry-Run Mode**: All scripts generate review files before making changes
   - Inspect `manufacturer-assignments.json` before applying
   - Can manually edit assignments if suggestions are incorrect

2. **Backup Strategy**:
   - Git is the safety net - all changes in a single commit
   - Can easily revert if needed
   - Working in isolated branch: `rushant-123/quickf`

3. **Validation Checks**:
   - Verify no generic names remain after assignment
   - Check all company links are valid (slugified correctly)
   - Ensure price calculations still valid
   - Confirm YAML syntax remains valid

4. **Edge Cases**:
   - Products with unusual names that don't fit categories → use closest industry leaders
   - Very niche products → assign major players in adjacent industries
   - Products that should legitimately have "Various" → reassign for consistency

5. **Review Points**:
   - Script outputs summary statistics before/after
   - Highlights any assignments with low confidence
   - Lists new company pages that will be created
   - Flags any edge cases for manual review

### Validation Script Checks

**Data Integrity**:
- YAML frontmatter syntax valid
- All required fields present (title, company, country, price, inputs, value_created)
- Company field not empty or generic

**Link Integrity**:
- All input links resolve to existing pages
- Company slugs can be generated and would match existing/new pages

**Economic Model**:
- Sum of input costs < selling_price
- value_created = selling_price - sum(input costs)
- Margins remain in 15-40% range

**Statistics**:
- Total product count still 1,413
- Total company count increases appropriately
- Country coverage maintained (49 countries)
- Supply chain connections still 6,532

## Success Criteria

- ✅ 0 products with generic manufacturer names
- ✅ All 259 products have real company assignments
- ✅ No broken links
- ✅ Company page count increases to cover all new manufacturers
- ✅ Supply chain integrity maintained
- ✅ All pages have valid YAML syntax
- ✅ Economic model (pricing/margins) preserved
- ✅ Geographic distribution maintained

## Testing Strategy

1. **Unit Testing**: Test each script independently with sample data
2. **Integration Testing**: Run full pipeline on 10 test products first
3. **Validation**: Run verify script at each stage
4. **Manual Review**: Inspect assignments before applying
5. **Rollback Plan**: Git revert if major issues discovered

## Timeline Estimate

- Script development: 1 hour
- Knowledge base generation: 10 minutes
- Assignment generation + review: 20 minutes
- Application + company page creation: 10 minutes
- Verification: 10 minutes

**Total**: ~2 hours

## Conclusion

This AI-assisted approach will efficiently complete the manufacturer coverage by leveraging patterns in the existing 1,154 correctly-assigned products. The multi-stage pipeline with review points ensures quality while maintaining the project's Wikipedia-style goal of traceable supply chains with real company information.
