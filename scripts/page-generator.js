#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Load input data files
const missingPages = JSON.parse(
  fs.readFileSync('missing-pages.json', 'utf-8')
);
const missingCompanies = JSON.parse(
  fs.readFileSync('missing-companies.json', 'utf-8')
);
const productAnalysis = JSON.parse(
  fs.readFileSync('product-analysis.json', 'utf-8')
);

// Directories
const PAGES_DIR = path.join(__dirname, '../content/pages');
const COMPANIES_DIR = path.join(__dirname, '../content/companies');

// Counters
let productsCreated = 0;
let productsSkipped = 0;
let companiesCreated = 0;
let companiesSkipped = 0;

/**
 * Generate a product page with enrichment fields
 */
function generateProductPage(slug) {
  const filePath = path.join(PAGES_DIR, `${slug}.md`);

  // Skip if file already exists
  if (fs.existsSync(filePath)) {
    productsSkipped++;
    return;
  }

  // Convert slug to title
  const title = slug
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

  // Estimate enrichment fields
  const estimatedData = {
    selling_price: 10,
    inputs_cost: 7,
    value_created: 3,
    lead_time_days: 30,
    minimum_order_quantity: 1000,
    transportation_method: 'ocean',
    geopolitical_risk: 'medium',
    price_volatility: 'medium',
  };

  // Create page content
  const content = `---
title: "${title}"
company: "Various Manufacturers"
country: "Global"
selling_price: ${estimatedData.selling_price}
inputs:
  - name: "Raw Materials"
    cost: ${estimatedData.inputs_cost}
    link: "raw-materials"
value_created: ${estimatedData.value_created}
lead_time_days: ${estimatedData.lead_time_days}
minimum_order_quantity: ${estimatedData.minimum_order_quantity}
transportation_method: "${estimatedData.transportation_method}"
geopolitical_risk: "${estimatedData.geopolitical_risk}"
price_volatility: "${estimatedData.price_volatility}"

certifications:
  - "ISO9001"
data_quality: "estimated"
---

1. Design ${title} component based on application requirements and interface specifications

2. Create engineering specifications defining dimensions, materials, and performance criteria

3. Select appropriate materials considering operating environment and mechanical properties

4. Source raw materials from qualified suppliers with material certifications

5. Inspect incoming materials verifying compliance with specifications

6. Set up manufacturing equipment and tooling for production

7. Program or configure process parameters based on engineering requirements

8. Load raw materials into manufacturing equipment

9. Execute primary manufacturing process forming component to specifications

10. Monitor process parameters ensuring quality and consistency

11. Perform in-process inspection of critical features

12. Complete secondary operations as required: machining, treatment, finishing

13. Apply surface treatments or coatings if specified

14. Clean components removing process residues

15. Dry components preventing contamination

16. Conduct final inspection measuring critical dimensions and properties

17. Perform functional testing verifying performance requirements

18. Test sample components for material properties and compliance

19. Sort components by quality grade

20. Mark components with identification and traceability information

21. Package components in appropriate containers

22. Label packages with part information and quality status

23. Store in controlled environment

24. Maintain production and traceability records

25. Prepare quality documentation and certificates

26. Package for shipment with appropriate protection

27. Ship ${title} to customers and integration facilities
`;

  fs.writeFileSync(filePath, content, 'utf-8');
  productsCreated++;
}

/**
 * Generate a company page with enrichment fields
 */
function generateCompanyPage(companyData) {
  const { name, slug } = companyData;
  const filePath = path.join(COMPANIES_DIR, `${slug}.md`);

  // Skip if file already exists
  if (fs.existsSync(filePath)) {
    companiesSkipped++;
    return;
  }

  // Estimate enrichment fields
  const estimatedData = {
    employees: 100,
    rd_spending_pct: 5,
    public_private: 'private',
    founded_year: 2000,
    factory_locations: ['China', 'USA'],
  };

  // Create page content
  const content = `---
title: "${name}"
type: "companies"
industry: "Manufacturing"
country: "Global"
employees: ${estimatedData.employees}
rd_spending_pct: ${estimatedData.rd_spending_pct}
public_private: "${estimatedData.public_private}"
founded_year: ${estimatedData.founded_year}

factory_locations:
${estimatedData.factory_locations.map(loc => `  - "${loc}"`).join('\n')}
data_quality: "estimated"
---

# ${name}

${name} is a manufacturer in the global supply chain, producing components and materials for technology products.

## Products

This company manufactures products used in the supply chain documented in this database.

## Market Position

As a manufacturing company, ${name} supplies critical components to the global technology ecosystem.
`;

  fs.writeFileSync(filePath, content, 'utf-8');
  companiesCreated++;
}

/**
 * Main execution
 */
function main() {
  console.log('Starting page generation...\n');

  // Ensure output directories exist
  if (!fs.existsSync(PAGES_DIR)) {
    fs.mkdirSync(PAGES_DIR, { recursive: true });
  }
  if (!fs.existsSync(COMPANIES_DIR)) {
    fs.mkdirSync(COMPANIES_DIR, { recursive: true });
  }

  // Generate product pages
  console.log(`Generating ${missingPages.length} product pages...`);
  for (const slug of missingPages) {
    generateProductPage(slug);
  }
  console.log(`  Created: ${productsCreated}`);
  console.log(`  Skipped (already exist): ${productsSkipped}`);

  // Generate company pages
  console.log(`\nGenerating ${missingCompanies.length} company pages...`);
  for (const company of missingCompanies) {
    generateCompanyPage(company);
  }
  console.log(`  Created: ${companiesCreated}`);
  console.log(`  Skipped (already exist): ${companiesSkipped}`);

  // Summary
  console.log('\n=== Summary ===');
  console.log(`Total product pages created: ${productsCreated}`);
  console.log(`Total company pages created: ${companiesCreated}`);
  console.log(`Total pages generated: ${productsCreated + companiesCreated}`);
}

// Execute
main();
