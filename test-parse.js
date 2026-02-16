const fs = require('fs');

const content = fs.readFileSync('content/pages/abs-resin.md', 'utf8');

// Test frontmatter parsing
const fmMatch = content.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
console.log('Frontmatter match:', !!fmMatch);

if (fmMatch) {
  const frontmatter = fmMatch[1];
  console.log('\nFrontmatter length:', frontmatter.length);

  // Test inputs parsing
  const inputsMatch = frontmatter.match(/inputs:\s*\n((?:  - .*\n)*)/);
  console.log('Inputs match:', !!inputsMatch);

  if (inputsMatch) {
    console.log('\nInputs block:');
    console.log(inputsMatch[1]);

    // Test splitting
    const inputEntries = inputsMatch[1].split(/(?=  - name:)/);
    console.log(`\nFound ${inputEntries.length} input entries`);

    inputEntries.forEach((entry, i) => {
      if (!entry.trim()) return;
      console.log(`\nEntry ${i}:`);
      console.log(entry);

      const nameMatch = entry.match(/name:\s*"([^"]+)"/);
      const costMatch = entry.match(/cost:\s*([0-9.]+)/);
      const linkMatch = entry.match(/link:\s*"([^"]+)"/);

      console.log('  Name:', nameMatch?.[1]);
      console.log('  Cost:', costMatch?.[1]);
      console.log('  Link:', linkMatch?.[1]);
    });
  }
}
