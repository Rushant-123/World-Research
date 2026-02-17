#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Directories
const PAGES_DIR = path.join(__dirname, '../content/pages');
const COMPANIES_DIR = path.join(__dirname, '../content/companies');

// Counters
let productsValidated = 0;
let companiesValidated = 0;
let totalErrors = 0;
let totalWarnings = 0;

// Error and warning collectors
const errors = [];
const warnings = [];

/**
 * Parse frontmatter from markdown file
 */
function parseFrontmatter(content) {
  const match = content.match(/^---\n([\s\S]*?)\n---/);
  if (!match) return null;

  const frontmatter = {};
  const lines = match[1].split('\n');
  let currentKey = null;
  let currentArray = null;
  let currentObject = null;
  let arrayIndent = 0;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    // Skip empty lines
    if (line.trim() === '') continue;

    // Check if this is a key-value pair
    const keyMatch = line.match(/^(\w+):\s*(.*)$/);
    if (keyMatch && !line.startsWith(' ')) {
      currentKey = keyMatch[1];
      const value = keyMatch[2].trim();

      if (value === '') {
        // This might be an array or object
        currentArray = [];
        currentObject = null;
        frontmatter[currentKey] = currentArray;
      } else if (value.startsWith('[')) {
        // Inline array
        try {
          frontmatter[currentKey] = JSON.parse(value);
        } catch (e) {
          frontmatter[currentKey] = value;
        }
        currentArray = null;
        currentObject = null;
      } else if (value.startsWith('"')) {
        // String value
        frontmatter[currentKey] = value.replace(/^"|"$/g, '');
        currentArray = null;
        currentObject = null;
      } else if (!isNaN(value) && value !== '') {
        // Numeric value
        frontmatter[currentKey] = parseFloat(value);
        currentArray = null;
        currentObject = null;
      } else {
        // Other value
        frontmatter[currentKey] = value;
        currentArray = null;
        currentObject = null;
      }
    } else if (line.startsWith('  - ') && currentArray !== null) {
      // Array item
      const itemMatch = line.match(/^  - (.*)$/);
      if (itemMatch) {
        const item = itemMatch[1].trim();
        if (item.startsWith('"')) {
          // String array item
          currentArray.push(item.replace(/^"|"$/g, ''));
          currentObject = null;
        } else if (item.includes(':')) {
          // Object array item
          currentObject = {};
          currentArray.push(currentObject);
          const [objKey, objValue] = item.split(':', 2);
          const parsedValue = parseValue(objValue.trim());
          currentObject[objKey.trim()] = parsedValue;
          arrayIndent = line.search(/\S/);
        } else {
          currentArray.push(item);
          currentObject = null;
        }
      }
    } else if (line.startsWith('    ') && currentObject !== null) {
      // Object property within array
      const objPropMatch = line.match(/^\s+(\w+):\s*(.*)$/);
      if (objPropMatch) {
        const objKey = objPropMatch[1];
        const objValue = objPropMatch[2].trim();
        currentObject[objKey] = parseValue(objValue);
      }
    }
  }

  return frontmatter;
}

/**
 * Parse a value to its appropriate type
 */
function parseValue(value) {
  if (value.startsWith('"') && value.endsWith('"')) {
    return value.slice(1, -1);
  }
  if (!isNaN(value) && value !== '') {
    return parseFloat(value);
  }
  if (value === 'true') return true;
  if (value === 'false') return false;
  return value;
}

/**
 * Validate a product page
 */
function validateProduct(filePath) {
  const content = fs.readFileSync(filePath, 'utf-8');
  const frontmatter = parseFrontmatter(content);
  const fileName = path.basename(filePath);

  if (!frontmatter) {
    errors.push(`${fileName}: Unable to parse frontmatter`);
    totalErrors++;
    return;
  }

  // Check required fields
  if (!frontmatter.title || frontmatter.title === '') {
    errors.push(`${fileName}: Missing required field "title"`);
    totalErrors++;
  }

  if (frontmatter.selling_price === undefined || frontmatter.selling_price === null || frontmatter.selling_price === '') {
    errors.push(`${fileName}: Missing required field "selling_price"`);
    totalErrors++;
  }

  // Check for negative prices (warning)
  if (frontmatter.selling_price !== undefined && frontmatter.selling_price < 0) {
    warnings.push(`${fileName}: Negative selling_price (${frontmatter.selling_price})`);
    totalWarnings++;
  }

  // Check lead times > 365 days (warning)
  if (frontmatter.lead_time_days !== undefined && frontmatter.lead_time_days > 365) {
    warnings.push(`${fileName}: Lead time exceeds 365 days (${frontmatter.lead_time_days})`);
    totalWarnings++;
  }

  // Check certifications format is array (error)
  if (frontmatter.certifications !== undefined && !Array.isArray(frontmatter.certifications)) {
    errors.push(`${fileName}: "certifications" must be an array (found: ${typeof frontmatter.certifications})`);
    totalErrors++;
  }

  productsValidated++;
}

/**
 * Validate a company page
 */
function validateCompany(filePath) {
  const content = fs.readFileSync(filePath, 'utf-8');
  const frontmatter = parseFrontmatter(content);
  const fileName = path.basename(filePath);

  if (!frontmatter) {
    errors.push(`${fileName}: Unable to parse frontmatter`);
    totalErrors++;
    return;
  }

  // Check required fields
  if (!frontmatter.title || frontmatter.title === '') {
    errors.push(`${fileName}: Missing required field "title"`);
    totalErrors++;
  }

  // Check factory capacities sum to 100% (warning, ±1% tolerance)
  if (frontmatter.factory_locations && Array.isArray(frontmatter.factory_locations)) {
    const capacities = frontmatter.factory_locations
      .filter(loc => loc.capacity_pct !== undefined)
      .map(loc => loc.capacity_pct);

    if (capacities.length > 0) {
      const sum = capacities.reduce((a, b) => a + b, 0);
      if (sum < 99 || sum > 101) {
        warnings.push(`${fileName}: Factory capacities sum to ${sum}% (expected 100% ±1%)`);
        totalWarnings++;
      }
    }
  }

  // Check R&D spending > 30% (warning)
  if (frontmatter.rd_spending_pct !== undefined && frontmatter.rd_spending_pct > 30) {
    warnings.push(`${fileName}: R&D spending is ${frontmatter.rd_spending_pct}% (>30%)`);
    totalWarnings++;
  }

  companiesValidated++;
}

/**
 * Main execution
 */
function main() {
  console.log('Starting data validation...\n');

  // Validate product pages
  console.log('Validating product pages...');
  const productFiles = fs.readdirSync(PAGES_DIR)
    .filter(file => file.endsWith('.md'));

  for (const file of productFiles) {
    try {
      validateProduct(path.join(PAGES_DIR, file));
    } catch (err) {
      errors.push(`${file}: Exception during validation - ${err.message}`);
      totalErrors++;
    }
  }
  console.log(`  Validated: ${productsValidated} products`);

  // Validate company pages
  console.log('\nValidating company pages...');
  const companyFiles = fs.readdirSync(COMPANIES_DIR)
    .filter(file => file.endsWith('.md') && file !== '_index.md');

  for (const file of companyFiles) {
    try {
      validateCompany(path.join(COMPANIES_DIR, file));
    } catch (err) {
      errors.push(`${file}: Exception during validation - ${err.message}`);
      totalErrors++;
    }
  }
  console.log(`  Validated: ${companiesValidated} companies`);

  // Report errors
  console.log('\n=== ERRORS ===');
  if (errors.length === 0) {
    console.log('No errors found!');
  } else {
    console.log(`Found ${totalErrors} errors:\n`);
    errors.forEach(err => console.log(`  ❌ ${err}`));
  }

  // Report warnings
  console.log('\n=== WARNINGS ===');
  if (warnings.length === 0) {
    console.log('No warnings found!');
  } else {
    console.log(`Found ${totalWarnings} warnings:\n`);
    warnings.forEach(warn => console.log(`  ⚠️  ${warn}`));
  }

  // Summary
  console.log('\n=== SUMMARY ===');
  console.log(`Products validated: ${productsValidated}`);
  console.log(`Companies validated: ${companiesValidated}`);
  console.log(`Total errors: ${totalErrors}`);
  console.log(`Total warnings: ${totalWarnings}`);

  // Exit with appropriate code
  if (totalErrors > 0) {
    console.log('\n❌ Validation FAILED (errors found)');
    process.exit(1);
  } else {
    console.log('\n✅ Validation PASSED (no errors)');
    process.exit(0);
  }
}

// Execute
main();
