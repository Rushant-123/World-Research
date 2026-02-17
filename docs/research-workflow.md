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
