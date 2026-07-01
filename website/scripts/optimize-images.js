#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const DIR = path.join(__dirname, '..', 'assets/images/products');
const FILES = fs.readdirSync(DIR).filter((f) => /^corefit-.+\.(jpe?g|png)$/i.test(f));

(async () => {
  for (const file of FILES) {
    const src = path.join(DIR, file);
    const base = file.replace(/\.(jpe?g|png)$/i, '');
    const dest = path.join(DIR, `${base}.jpg`);
    const tmp = path.join(DIR, `${base}.tmp.jpg`);

    await sharp(src)
      .resize(1200, 1200, { fit: 'inside', withoutEnlargement: true })
      .jpeg({ quality: 82, mozjpeg: true })
      .toFile(tmp);

    fs.renameSync(tmp, dest);
    const size = Math.round(fs.statSync(dest).size / 1024);
    console.log(`✓ ${base}.jpg (${size} KB)`);
  }
})();
