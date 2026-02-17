// Apply manufacturer assignments to product pages
const fs = require('fs');
const path = require('path');

const pagesDir = path.join(__dirname, 'content/pages');
const assignmentsFile = 'manufacturer-assignments.json';

// Check for --apply flag
const dryRun = !process.argv.includes('--apply');

if (dryRun) {
  console.log('DRY RUN MODE - No files will be modified');
  console.log('Use --apply flag to actually write changes\n');
}

const data = JSON.parse(fs.readFileSync(assignmentsFile, 'utf-8'));
const assignments = data.assignments;

let updated = 0;
let errors = 0;

assignments.forEach(assignment => {
  const filePath = path.join(pagesDir, assignment.file);

  try {
    let content = fs.readFileSync(filePath, 'utf-8');

    // Replace company field
    const companyRegex = /company:\s*"([^"]+)"/;
    const newContent = content.replace(companyRegex, `company: "${assignment.proposedCompany}"`);

    if (!dryRun) {
      fs.writeFileSync(filePath, newContent);
    }

    updated++;

    if (updated <= 5 || assignment.confidence === 'low') {
      console.log(`✓ ${assignment.file}`);
      console.log(`  ${assignment.currentCompany} → ${assignment.proposedCompany}`);
      console.log(`  Confidence: ${assignment.confidence} - ${assignment.reasoning}\n`);
    }
  } catch (err) {
    console.error(`✗ Error processing ${assignment.file}: ${err.message}`);
    errors++;
  }
});

console.log(`\n${dryRun ? 'Would update' : 'Updated'} ${updated} product pages`);
if (errors > 0) {
  console.log(`Errors: ${errors}`);
}

if (dryRun) {
  console.log('\nTo apply these changes, run: node apply-manufacturer-assignments.js --apply');
}
