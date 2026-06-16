#!/usr/bin/env node
/**
 * Drop your product photos into website/photos-to-import/ then run:
 *   node import-photos.js
 *
 * Name files exactly like the slots below (or pass paths as arguments).
 */
const fs = require('fs');
const path = require('path');

const INCOMING = path.join(__dirname, 'photos-to-import');
const DEST = path.join(__dirname, 'assets/images/products');

const EXPECTED = [
  'vale-forever-skittle-sweats.jpg',
  'vale-forever-skittle-sweats-2.jpg',
  'project-gr-layered-sweatpants.jpg',
  'project-gr-layered-sweatpants-2.jpg',
  'project-gr-layered-sweatpants-3.jpg',
  'enfants-riches-deprimes-trashed-hoodie.jpg',
  'enfants-riches-deprimes-trashed-hoodie-2.jpg',
  'enfants-riches-deprimes-trashed-hoodie-3.jpg'
];

if (!fs.existsSync(INCOMING)) fs.mkdirSync(INCOMING, { recursive: true });
if (!fs.existsSync(DEST)) fs.mkdirSync(DEST, { recursive: true });

const args = process.argv.slice(2);
let copied = 0;

function copyFile(name) {
  const src = path.join(INCOMING, name);
  if (!fs.existsSync(src)) return false;
  fs.copyFileSync(src, path.join(DEST, name));
  console.log('✓', name);
  copied++;
  return true;
}

if (args.length) {
  args.forEach((file) => {
    const base = path.basename(file);
    if (!EXPECTED.includes(base)) {
      console.warn('Skip (wrong name):', base);
      return;
    }
    fs.copyFileSync(path.resolve(file), path.join(DEST, base));
    console.log('✓', base);
    copied++;
  });
} else {
  EXPECTED.forEach(copyFile);
}

if (!copied) {
  console.log('\nNo photos found yet.\n');
  console.log('1. Save your 8 product photos to:');
  console.log('   ', INCOMING);
  console.log('2. Use these exact filenames:');
  EXPECTED.forEach((n) => console.log('   -', n));
  console.log('\n3. Run again: node import-photos.js\n');
} else {
  console.log(`\nDone — ${copied} photo(s) live. Refresh http://localhost:3000\n`);
}
