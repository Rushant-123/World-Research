const fs = require('fs');

const content = fs.readFileSync('content/pages/abs-resin.md', 'utf8');

// Better regex to capture full inputs block
const fmMatch = content.match(/^---\n([\s\S]*?)\n---/);
if (!fmMatch) {
  console.log('No frontmatter found');
  process.exit(1);
}

const frontmatter = fmMatch[1];

// Find inputs section - capture everything until next top-level key or end
const inputsMatch = frontmatter.match(/inputs:\s*\n((?:  .*\n)*)/);

if (inputsMatch) {
  console.log('Inputs block:');
  console.log(inputsMatch[1]);
  console.log('\n' + '='.repeat(60));

  // Split by entries starting with "  - name:"
  const entries = inputsMatch[1].split(/(?=  - name:)/);

  console.log(`\nFound ${entries.length} entries`);

  entries.forEach((entry, i) => {
    if (!entry.trim()) return;

    console.log(`\nEntry ${i}:`);
    console.log(entry);

    const nameMatch = entry.match(/name:\s*"([^"]+)"/);
    const costMatch = entry.match(/cost:\s*([0-9.]+)/);
    const linkMatch = entry.match(/link:\s*"([^"]+)"/);

    if (nameMatch && costMatch && linkMatch) {
      console.log(`  ✓ Parsed: ${linkMatch[1]} - ${nameMatch[1]} ($${costMatch[1]})`);
    } else {
      console.log(`  ✗ Failed to parse`);
    }
  });
}
