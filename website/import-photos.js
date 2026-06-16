#!/usr/bin/env node
/**
 * Import product photos into the store.
 *
 * Usage:
 *   node import-photos.js
 *   node import-photos.js "C:\Users\leily\Downloads\cursor"
 *   node import-photos.js ./photos-to-import
 */
const fs = require('fs');
const path = require('path');

const INCOMING = path.join(__dirname, 'photos-to-import');
const DEST = path.join(__dirname, 'assets/images/products');

const SLOTS = [
  { out: 'vale-forever-skittle-sweats.jpg', product: 'vale', view: 'front' },
  { out: 'vale-forever-skittle-sweats-2.jpg', product: 'vale', view: 'back' },
  { out: 'project-gr-layered-sweatpants.jpg', product: 'project', view: 'front' },
  { out: 'project-gr-layered-sweatpants-2.jpg', product: 'project', view: 'back' },
  { out: 'project-gr-layered-sweatpants-3.jpg', product: 'project', view: 'detail' },
  { out: 'enfants-riches-deprimes-trashed-hoodie.jpg', product: 'enfants', view: 'front' },
  { out: 'enfants-riches-deprimes-trashed-hoodie-2.jpg', product: 'enfants', view: 'angle' },
  { out: 'enfants-riches-deprimes-trashed-hoodie-3.jpg', product: 'enfants', view: 'back' }
];

const IMAGE_EXT = /\.(jpe?g|png|webp)$/i;

if (!fs.existsSync(DEST)) fs.mkdirSync(DEST, { recursive: true });

function listImages(dir) {
  if (!fs.existsSync(dir)) return [];
  return fs.readdirSync(dir)
    .filter((f) => IMAGE_EXT.test(f))
    .map((f) => path.join(dir, f));
}

function copyAsJpg(src, destName) {
  const dest = path.join(DEST, destName);
  fs.copyFileSync(src, dest);
  console.log('✓', destName, '←', path.basename(src));
}

function scoreFile(filePath, slot) {
  const f = path.basename(filePath).toLowerCase();
  let score = 0;

  if (slot.product === 'vale' && /vale|skittle|valley/.test(f)) score += 20;
  if (slot.product === 'project' && /project|layered|\bgr\b|sweatpant/.test(f)) score += 20;
  if (slot.product === 'enfants' && /enfant|deprim|erd|trashed|hoodie|riches/.test(f)) score += 20;

  if (slot.view === 'front' && /front|face|main|^1[^0-9]|[-_]1\.|[-_]1$/.test(f)) score += 10;
  if (slot.view === 'back' && /back|rear|behind|^3[^0-9]|[-_]3\.|[-_]3$/.test(f)) score += 10;
  if (slot.view === 'angle' && /angle|side|^2[^0-9]|[-_]2\.|[-_]2$/.test(f)) score += 10;
  if (slot.view === 'detail' && /detail|close|waist|layer|zoom/.test(f)) score += 10;

  if (slot.view === 'front' && /back|rear|detail|angle|[-_]2|[-_]3/.test(f)) score -= 8;
  if (slot.view === 'back' && /front|detail|waist|[-_]1\.|main/.test(f)) score -= 5;

  return score;
}

function autoMap(files) {
  const mapping = new Map();
  const used = new Set();

  for (const slot of SLOTS) {
    let best = null;
    let bestScore = 0;
    for (const file of files) {
      if (used.has(file)) continue;
      const s = scoreFile(file, slot);
      if (s > bestScore) {
        bestScore = s;
        best = file;
      }
    }
    if (best && bestScore >= 15) {
      mapping.set(slot.out, best);
      used.add(best);
    }
  }

  const remaining = files.filter((f) => !used.has(f));
  const openSlots = SLOTS.filter((s) => !mapping.has(s.out));
  remaining.sort((a, b) => a.localeCompare(b, undefined, { numeric: true }));
  openSlots.forEach((slot, i) => {
    if (remaining[i]) {
      mapping.set(slot.out, remaining[i]);
      used.add(remaining[i]);
    }
  });

  return mapping;
}

function importFromDir(sourceDir) {
  const exact = SLOTS.filter((s) => fs.existsSync(path.join(sourceDir, s.out)));
  if (exact.length === SLOTS.length) {
    SLOTS.forEach((s) => copyAsJpg(path.join(sourceDir, s.out), s.out));
    return SLOTS.length;
  }

  const files = listImages(sourceDir);
  if (!files.length) return 0;

  const mapping = autoMap(files);
  let copied = 0;
  mapping.forEach((src, destName) => {
    copyAsJpg(src, destName);
    copied++;
  });
  return copied;
}

const sourceArg = process.argv[2];
const sourceDir = sourceArg ? path.resolve(sourceArg) : INCOMING;

if (!fs.existsSync(INCOMING)) fs.mkdirSync(INCOMING, { recursive: true });

console.log('\nMilan Hype — import product photos');
console.log('Source:', sourceDir, '\n');

const copied = importFromDir(sourceDir);

if (!copied) {
  console.log('No photos found.\n');
  console.log('Put your images in one of these places:');
  console.log('  ', INCOMING);
  console.log('  C:\\Users\\leily\\Downloads\\cursor\n');
  console.log('Then run:');
  console.log('  node import-photos.js');
  console.log('  node import-photos.js "C:\\Users\\leily\\Downloads\\cursor"\n');
} else {
  console.log(`\nDone — ${copied} photo(s) added to the store.`);
  console.log('Run: npm start');
  console.log('Open: http://localhost:3000\n');
}
