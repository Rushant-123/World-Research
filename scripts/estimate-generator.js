#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Load data files
const estimationRules = JSON.parse(fs.readFileSync(path.join(__dirname, '../data/estimation-rules.json'), 'utf8'));
const geoClusters = JSON.parse(fs.readFileSync(path.join(__dirname, '../data/geo-clusters.json'), 'utf8'));
const relationships = JSON.parse(fs.readFileSync(path.join(__dirname, '../data/relationships.json'), 'utf8'));
const top100Companies = JSON.parse(fs.readFileSync(path.join(__dirname, '../data/top100-companies.json'), 'utf8'));

// Create a Set of top 100 company slugs for fast lookup
const top100Slugs = new Set(top100Companies.map(c => c.slug));

// Estimation functions

/**
 * Estimate lead time based on product slug, price, and country
 * @param {string} productSlug - The product slug
 * @param {number} price - Product price in USD
 * @param {string} country - Manufacturing country
 * @returns {number} Lead time in days
 */
function estimateLeadTime(productSlug, price, country) {
  // Base lead time by product category using estimation rules
  let baseDays = estimationRules.lead_times.base_manufacturing.complex_components;

  // Detect product category from slug
  if (productSlug.match(/software|service|labor|training|education/i)) {
    baseDays = estimationRules.lead_times.base_manufacturing.raw_materials;
  } else if (productSlug.match(/equipment|machine|system|tool|furnace|pump/i)) {
    baseDays = estimationRules.lead_times.base_manufacturing.equipment;
  } else if (productSlug.match(/chip|wafer|semiconductor|transistor/i)) {
    baseDays = estimationRules.lead_times.base_manufacturing.semiconductors;
  } else if (productSlug.match(/metal|ore|chemical|gas|mineral|coal|oil|raw/i)) {
    baseDays = estimationRules.lead_times.base_manufacturing.raw_materials;
  } else if (productSlug.match(/component|part|module/i)) {
    baseDays = estimationRules.lead_times.base_manufacturing.basic_components;
  }

  // Add shipping time based on country
  const countryLower = country.toLowerCase();
  if (countryLower.includes('usa') || countryLower.includes('united states') || countryLower.includes('canada') || countryLower.includes('mexico')) {
    baseDays += estimationRules.lead_times.shipping_additions.domestic;
  } else if (countryLower.includes('china') || countryLower.includes('taiwan') || countryLower.includes('japan') || countryLower.includes('korea')) {
    baseDays += estimationRules.lead_times.shipping_additions.intercontinental;
  } else {
    baseDays += estimationRules.lead_times.shipping_additions.continental;
  }

  // Price adjustment: higher-value items take longer
  if (price > 100000) {
    baseDays *= 1.3;
  } else if (price > 10000) {
    baseDays *= 1.15;
  }

  return Math.round(baseDays);
}

/**
 * Estimate minimum order quantity based on price
 * @param {number} price - Product price in USD
 * @returns {number} Minimum order quantity
 */
function estimateMOQ(price) {
  if (price < 1) return 10000; // Very cheap items (raw materials)
  if (price < 10) return 5000;
  if (price < 100) return 1000;
  if (price < 1000) return 100;
  if (price < 10000) return 10;
  if (price < 100000) return 1;
  return 1; // Expensive equipment
}

/**
 * Estimate geopolitical risk based on country
 * @param {string} country - Manufacturing country
 * @returns {string} Risk level: low, medium, or high
 */
function estimateRisk(country) {
  const countryLower = country.toLowerCase();

  // Check against risk categories in estimation rules
  for (const [riskLevel, countries] of Object.entries(estimationRules.risk_by_country)) {
    if (countries.some(c => countryLower.includes(c.toLowerCase()))) {
      return riskLevel;
    }
  }

  return 'medium'; // Default
}

/**
 * Estimate price volatility based on product slug
 * @param {string} productSlug - The product slug
 * @returns {string} Volatility level: low, medium, or high
 */
function estimateVolatility(productSlug) {
  // Map product to category and use estimation rules
  if (productSlug.match(/metal|ore|oil|gas|coal|copper|aluminum|steel|gold|silver|lithium|cobalt|raw|commodity/i)) {
    return 'high'; // commodities
  }

  if (productSlug.match(/software|service|labor|training|education|consulting/i)) {
    return 'low'; // services
  }

  if (productSlug.match(/equipment|machine|system|tool|furnace|pump/i)) {
    return 'low'; // equipment (stable)
  }

  // Manufactured goods have medium volatility
  return 'medium';
}

/**
 * Estimate transportation method based on country and price
 * @param {string} country - Manufacturing country
 * @param {number} price - Product price in USD
 * @returns {string} Transportation method
 */
function estimateTransportation(country, price) {
  // Time-sensitive or high-value items use air
  if (price > 10000) {
    return 'air';
  }

  const countryLower = country.toLowerCase();

  // Domestic North America uses truck
  if (countryLower.includes('usa') || countryLower.includes('united states') ||
      countryLower.includes('canada') || countryLower.includes('mexico')) {
    return 'truck';
  }

  // International shipping uses ocean/ship
  if (countryLower.includes('china') || countryLower.includes('taiwan') ||
      countryLower.includes('japan') || countryLower.includes('korea') ||
      countryLower.includes('asia') || countryLower.includes('europe')) {
    return 'ocean';
  }

  // Default to ocean for international
  return 'ocean';
}

/**
 * Estimate certifications based on industry
 * @param {string} industry - Company industry
 * @returns {string[]} Array of certifications
 */
function estimateCertifications(industry) {
  const certs = ['ISO9001'];

  if (industry.match(/semiconductor|electronics/i)) {
    certs.push('ISO14001', 'IATF16949');
  } else if (industry.match(/chemical/i)) {
    certs.push('ISO14001', 'ISO45001');
  } else if (industry.match(/software|services/i)) {
    certs.push('ISO27001');
  } else if (industry.match(/mining|metals/i)) {
    certs.push('ISO14001', 'ISO45001');
  } else {
    certs.push('ISO14001');
  }

  return certs;
}

/**
 * Estimate employee count based on revenue and industry
 * @param {number} revenue - Annual revenue in USD
 * @param {string} industry - Company industry
 * @returns {number} Estimated employee count
 */
function estimateEmployees(revenue, industry) {
  // Use revenue per employee ratios from estimation rules
  let revenuePerEmployee = estimationRules.employee_revenue_ratio.manufacturing; // Default

  if (industry.match(/software|services/i)) {
    revenuePerEmployee = estimationRules.employee_revenue_ratio.software;
  } else if (industry.match(/semiconductor/i)) {
    revenuePerEmployee = estimationRules.employee_revenue_ratio.semiconductors;
  } else if (industry.match(/mining|metals/i)) {
    revenuePerEmployee = estimationRules.employee_revenue_ratio.mining;
  } else if (industry.match(/manufacturing|equipment|industrial/i)) {
    revenuePerEmployee = estimationRules.employee_revenue_ratio.manufacturing;
  } else if (industry.match(/service/i)) {
    revenuePerEmployee = estimationRules.employee_revenue_ratio.services;
  }

  return Math.round(revenue / revenuePerEmployee);
}

/**
 * Estimate R&D spending percentage based on industry
 * @param {string} industry - Company industry
 * @returns {number} R&D spending as percentage of revenue
 */
function estimateRD(industry) {
  // Use R&D spending rates from estimation rules
  if (industry.match(/software/i)) {
    return estimationRules.rd_spending_by_industry.software;
  } else if (industry.match(/semiconductor/i)) {
    return estimationRules.rd_spending_by_industry.semiconductors;
  } else if (industry.match(/pharmaceutical/i)) {
    return estimationRules.rd_spending_by_industry.pharmaceuticals;
  } else if (industry.match(/mining|metals/i)) {
    return estimationRules.rd_spending_by_industry.mining;
  } else if (industry.match(/manufacturing|equipment|industrial|electronics/i)) {
    return estimationRules.rd_spending_by_industry.manufacturing;
  } else if (industry.match(/service/i)) {
    return estimationRules.rd_spending_by_industry.services;
  }

  return estimationRules.rd_spending_by_industry.manufacturing; // Default
}

/**
 * Estimate factory locations based on industry and company name
 * @param {string} industry - Company industry
 * @param {string} companyName - Company name
 * @returns {string[]} Array of factory locations
 */
function estimateFactoryLocations(industry, companyName) {
  const locations = [];

  // Check company name for geographic hints
  if (companyName.match(/china|chinese|shanghai|beijing|shenzhen/i)) {
    locations.push('China');
  } else if (companyName.match(/japan|tokyo|osaka/i)) {
    locations.push('Japan');
  } else if (companyName.match(/korea|samsung|lg/i)) {
    locations.push('South Korea');
  } else if (companyName.match(/taiwan|tsmc/i)) {
    locations.push('Taiwan');
  } else if (companyName.match(/german|deutsch/i)) {
    locations.push('Germany');
  } else if (companyName.match(/american|usa|us\s/i)) {
    locations.push('USA');
  } else {
    // Default based on industry
    if (industry.match(/semiconductor|electronics/i)) {
      locations.push('Taiwan', 'China');
    } else if (industry.match(/mining/i)) {
      locations.push('Australia', 'Chile');
    } else if (industry.match(/chemical/i)) {
      locations.push('USA', 'Germany');
    } else {
      locations.push('China', 'USA');
    }
  }

  // Add a second location for larger companies (assume from revenue if available)
  if (locations.length === 1) {
    if (industry.match(/semiconductor|electronics/i)) {
      locations.push('USA');
    } else {
      locations.push('China');
    }
  }

  return locations;
}

/**
 * Parse YAML frontmatter from markdown file
 * @param {string} content - File content
 * @returns {object} Object with frontmatter and body
 */
function parseFrontmatter(content) {
  const match = content.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
  if (!match) {
    return null;
  }

  return {
    frontmatter: match[1],
    body: match[2],
    raw: content
  };
}

/**
 * Check if page is already enriched
 * @param {string} frontmatter - YAML frontmatter text
 * @returns {boolean} True if already enriched
 */
function isEnriched(frontmatter) {
  const enrichmentFields = [
    'lead_time_days',
    'minimum_order_quantity',
    'transportation_method',
    'geopolitical_risk',
    'price_volatility',
    'certifications',
    'employees',
    'rd_spending_pct',
    'factory_locations',
    'data_quality'
  ];

  return enrichmentFields.some(field => frontmatter.includes(field + ':'));
}

/**
 * Add fields to YAML frontmatter
 * @param {string} frontmatter - Original frontmatter
 * @param {object} fields - Fields to add
 * @returns {string} Updated frontmatter
 */
function addFieldsToFrontmatter(frontmatter, fields) {
  let updated = frontmatter;

  // Ensure frontmatter ends with newline
  if (!updated.endsWith('\n')) {
    updated += '\n';
  }

  // Add each field
  for (const [key, value] of Object.entries(fields)) {
    if (Array.isArray(value)) {
      updated += `\n${key}:\n`;
      value.forEach(item => {
        updated += `  - "${item}"\n`;
      });
    } else if (typeof value === 'string') {
      updated += `${key}: "${value}"\n`;
    } else {
      updated += `${key}: ${value}\n`;
    }
  }

  return updated;
}

/**
 * Process product pages
 * @param {string} pagesDir - Directory containing product pages
 * @returns {number} Count of updated pages
 */
function processProductPages(pagesDir) {
  const files = fs.readdirSync(pagesDir).filter(f => f.endsWith('.md'));
  let updatedCount = 0;

  for (const file of files) {
    const filePath = path.join(pagesDir, file);
    const content = fs.readFileSync(filePath, 'utf8');
    const parsed = parseFrontmatter(content);

    if (!parsed) continue;

    // Skip if already enriched
    if (isEnriched(parsed.frontmatter)) {
      continue;
    }

    // Extract metadata from frontmatter
    const titleMatch = parsed.frontmatter.match(/title:\s*"(.+?)"/);
    const priceMatch = parsed.frontmatter.match(/selling_price:\s*(\d+(?:\.\d+)?)/);
    const countryMatch = parsed.frontmatter.match(/country:\s*"(.+?)"/);
    const companyMatch = parsed.frontmatter.match(/company:\s*"(.+?)"/);
    const industryMatch = parsed.frontmatter.match(/industry:\s*"(.+?)"/);

    if (!titleMatch) continue;

    const productSlug = file.replace('.md', '');
    const price = priceMatch ? parseFloat(priceMatch[1]) : 1000;
    const country = countryMatch ? countryMatch[1] : 'China';
    const company = companyMatch ? companyMatch[1] : '';
    const industry = industryMatch ? industryMatch[1] : '';

    // Skip if any company is in top 100 (handle multiple companies separated by /)
    const companies = company.split('/').map(c => c.trim());
    let skipProduct = false;
    for (const comp of companies) {
      const companySlug = comp.toLowerCase().replace(/[^a-z0-9]+/g, '-');
      if (top100Slugs.has(companySlug)) {
        skipProduct = true;
        break;
      }
    }
    if (skipProduct) {
      continue;
    }

    // Generate estimates
    const leadTime = estimateLeadTime(productSlug, price, country);
    const moq = estimateMOQ(price);
    const risk = estimateRisk(country);
    const volatility = estimateVolatility(productSlug);
    const transportation = estimateTransportation(country, price);
    const certifications = estimateCertifications(industry);

    // Add fields
    const newFields = {
      lead_time_days: leadTime,
      minimum_order_quantity: moq,
      transportation_method: transportation,
      geopolitical_risk: risk,
      price_volatility: volatility,
      certifications: certifications,
      data_quality: 'estimated'
    };

    const updatedFrontmatter = addFieldsToFrontmatter(parsed.frontmatter, newFields);
    const updatedContent = `---\n${updatedFrontmatter}---\n${parsed.body}`;

    fs.writeFileSync(filePath, updatedContent, 'utf8');
    updatedCount++;
  }

  return updatedCount;
}

/**
 * Process company pages
 * @param {string} companiesDir - Directory containing company pages
 * @returns {number} Count of updated pages
 */
function processCompanyPages(companiesDir) {
  const files = fs.readdirSync(companiesDir).filter(f => f.endsWith('.md'));
  let updatedCount = 0;

  for (const file of files) {
    const filePath = path.join(companiesDir, file);
    const content = fs.readFileSync(filePath, 'utf8');
    const parsed = parseFrontmatter(content);

    if (!parsed) continue;

    // Skip if already enriched
    if (isEnriched(parsed.frontmatter)) {
      continue;
    }

    const companySlug = file.replace('.md', '');

    // Skip if company is in top 100
    if (top100Slugs.has(companySlug)) {
      continue;
    }

    // Extract metadata from frontmatter
    const titleMatch = parsed.frontmatter.match(/title:\s*"(.+?)"/);
    const revenueMatch = parsed.frontmatter.match(/revenue:\s*(\d+(?:\.\d+)?)/);
    const industryMatch = parsed.frontmatter.match(/industry:\s*"(.+?)"/);

    if (!titleMatch) continue;

    const companyName = titleMatch[1];
    const revenue = revenueMatch ? parseFloat(revenueMatch[1]) : 10000000;
    const industry = industryMatch ? industryMatch[1] : '';

    // Generate estimates
    const employees = estimateEmployees(revenue, industry);
    const rdSpending = estimateRD(industry);
    const factoryLocations = estimateFactoryLocations(industry, companyName);

    // Estimate public/private (assume private for smaller companies)
    const publicPrivate = revenue > 1000000000 ? 'public' : 'private';

    // Estimate founded year (assume established companies, 20-40 years old)
    const currentYear = new Date().getFullYear();
    const foundedYear = currentYear - Math.floor(20 + Math.random() * 20);

    // Add fields
    const newFields = {
      employees: employees,
      rd_spending_pct: rdSpending,
      public_private: publicPrivate,
      founded_year: foundedYear,
      factory_locations: factoryLocations,
      data_quality: 'estimated'
    };

    const updatedFrontmatter = addFieldsToFrontmatter(parsed.frontmatter, newFields);
    const updatedContent = `---\n${updatedFrontmatter}---\n${parsed.body}`;

    fs.writeFileSync(filePath, updatedContent, 'utf8');
    updatedCount++;
  }

  return updatedCount;
}

// Main execution
console.log('Starting estimation generator...\n');

const pagesDir = path.join(__dirname, '../content/pages');
const companiesDir = path.join(__dirname, '../content/companies');

console.log('Processing product pages...');
const productsUpdated = processProductPages(pagesDir);
console.log(`✓ Updated ${productsUpdated} product pages\n`);

console.log('Processing company pages...');
const companiesUpdated = processCompanyPages(companiesDir);
console.log(`✓ Updated ${companiesUpdated} company pages\n`);

console.log('Estimation generation complete!');
console.log(`Total: ${productsUpdated} products + ${companiesUpdated} companies = ${productsUpdated + companiesUpdated} pages enriched`);
