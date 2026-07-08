#!/usr/bin/env node
/**
 * Import CoreFit product photos into the store.
 *
 * Usage:
 *   node import-photos.js
 *   node import-photos.js ./photos-to-import
 *   node import-photos.js "C:\Users\...\Downloads\photos"
 */
const fs = require('fs');
const path = require('path');

const INCOMING = path.join(__dirname, 'photos-to-import');
const DEST = path.join(__dirname, 'assets/images/products');
const SOCIAL_DEST = path.join(__dirname, 'assets/images/social');
const TIER_DEST = path.join(__dirname, 'assets/images/products/tiers');

const REVIEW_SLOTS = [
  { out: 'review-mirror-front.jpg', social: true, tierBlack: ['tier-essential-black-model.jpg', 'tier-elite-black-model.jpg'] },
  { out: 'review-mirror-side.jpg', social: true, tierBlack: 'tier-pro-black-model.jpg' },
  { out: 'review-before-after-side.jpg', social: true, tierBlack: 'tier-signature-black-model.jpg' }
];

const TIER_WHITE_SLOTS = [
  { out: 'tier-essential-white-model.jpg' },
  { out: 'tier-pro-white-model.jpg' },
  { out: 'tier-elite-white-model.jpg' },
  { out: 'tier-signature-white-model.jpg' }
];

const TIER_PREMIUM_COLOR_SLOTS = [
  { out: 'tier-elite-green-model.jpg' },
  { out: 'tier-elite-blue-model.jpg' },
  { out: 'tier-signature-green-model.jpg' },
  { out: 'tier-signature-blue-model.jpg' }
];

const SLOTS = [
  { out: 'corefit-essential.jpg', product: 'essential', view: 'front' },
  { out: 'corefit-essential-2.jpg', product: 'essential', view: 'lifestyle' },
  { out: 'corefit-pro.jpg', product: 'pro', view: 'front' },
  { out: 'corefit-pro-2.jpg', product: 'pro', view: 'lifestyle' },
  { out: 'corefit-elite.jpg', product: 'elite', view: 'front' },
  { out: 'corefit-elite-2.jpg', product: 'elite', view: 'lifestyle' },
  { out: 'corefit-elite-green.jpg', product: 'elite', view: 'green' },
  { out: 'corefit-elite-blue.jpg', product: 'elite', view: 'blue' },
  { out: 'corefit-signature.jpg', product: 'signature', view: 'front' },
  { out: 'corefit-signature-2.jpg', product: 'signature', view: 'lifestyle' },
  { out: 'corefit-signature-green.jpg', product: 'signature', view: 'green' },
  { out: 'corefit-signature-blue.jpg', product: 'signature', view: 'blue' }
];

const IMAGE_EXT = /\.(jpe?g|png|webp)$/i;

if (!fs.existsSync(DEST)) fs.mkdirSync(DEST, { recursive: true });

function listImages(dir) {
  if (!fs.existsSync(dir)) return [];
  return fs.readdirSync(dir)
    .filter((f) => IMAGE_EXT.test(f))
    .map((f) => path.join(dir, f));
}

function copyToDir(src, destDir, destName) {
  if (!fs.existsSync(destDir)) fs.mkdirSync(destDir, { recursive: true });
  const dest = path.join(destDir, destName);
  fs.copyFileSync(src, dest);
  console.log('✓', destName, '←', path.basename(src));
}

function copyAsJpg(src, destName) {
  copyToDir(src, DEST, destName);
}

function importReviewPhotos(sourceDir) {
  let copied = 0;
  for (const slot of REVIEW_SLOTS) {
    const exact = path.join(sourceDir, slot.out);
    if (!fs.existsSync(exact)) continue;
    copyToDir(exact, SOCIAL_DEST, slot.out);
    if (slot.tierBlack) {
      const targets = Array.isArray(slot.tierBlack) ? slot.tierBlack : [slot.tierBlack];
      targets.forEach((name) => copyToDir(exact, TIER_DEST, name));
    }
    copied++;
  }
  for (const slot of TIER_WHITE_SLOTS) {
    const exact = path.join(sourceDir, slot.out);
    if (!fs.existsSync(exact)) continue;
    copyToDir(exact, TIER_DEST, slot.out);
    copied++;
  }
  for (const slot of TIER_PREMIUM_COLOR_SLOTS) {
    const exact = path.join(sourceDir, slot.out);
    if (!fs.existsSync(exact)) continue;
    copyToDir(exact, TIER_DEST, slot.out);
    copied++;
  }
  return copied;
}

function scoreFile(filePath, slot) {
  const f = path.basename(filePath).toLowerCase();
  let score = 0;

  if (slot.product === 'essential' && /essential|entry|basic/.test(f)) score += 20;
  if (slot.product === 'pro' && /\bpro\b|bestseller|seller/.test(f)) score += 20;
  if (slot.product === 'elite' && /elite|premium|italian/.test(f)) score += 20;
  if (slot.product === 'signature' && /signature|limited|gold|swiss/.test(f)) score += 20;

  if (slot.view === 'front' && /front|flat|lay|main|^1[^0-9]|[-_]1\.|[-_]1$/.test(f)) score += 10;
  if (slot.view === 'lifestyle' && /lifestyle|wear|shirt|model|under|angle|^2[^0-9]|[-_]2\.|[-_]2$/.test(f)) score += 10;
  if (slot.view === 'green' && /green/.test(f)) score += 15;
  if (slot.view === 'blue' && /blue|navy/.test(f)) score += 15;

  if (slot.view === 'front' && /lifestyle|wear|model|[-_]2/.test(f)) score -= 8;
  if (slot.view === 'lifestyle' && /front|flat|lay|[-_]1\.|main/.test(f)) score -= 5;

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

console.log('\nMilan Hype CoreFit — import product photos');
console.log('Source:', sourceDir, '\n');

const reviewCopied = importReviewPhotos(sourceDir);
const copied = importFromDir(sourceDir);

if (!copied && !reviewCopied) {
  console.log('No photos found.\n');
  console.log('Put your images in:');
  console.log('  ', INCOMING, '\n');
  console.log('Filenames (optional — script auto-matches too):');
  SLOTS.forEach((s) => console.log('  ', s.out));
  console.log('\nReview / testimonial photos (your real mirror selfies):');
  REVIEW_SLOTS.forEach((s) => console.log('  ', s.out));
  console.log('\nThen run:  node import-photos.js\n');
} else {
  const total = copied + reviewCopied;
  console.log(`\nDone — ${total} photo(s) added (${reviewCopied} review, ${copied} product).`);
  console.log('Commit and push to update milanhype.com\n');
}
