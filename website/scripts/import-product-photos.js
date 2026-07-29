#!/usr/bin/env node
/**
 * Copy seller photos from website/photos-to-import into public product assets
 * and point products.ts image paths from .svg placeholders to the real files.
 * Does not edit or regenerate images — copies bytes as-is.
 */
const fs = require('fs');
const path = require('path');

const root = path.join(__dirname, '..');
const srcDir = path.join(root, 'photos-to-import');
const destDir = path.join(root, 'public', 'assets', 'images', 'products');
const productsFile = path.join(root, 'lib', 'products.ts');

const EXTS = ['.jpg', '.jpeg', '.png', '.webp'];

function main() {
  if (!fs.existsSync(srcDir)) {
    console.error('Missing photos-to-import/');
    process.exit(1);
  }
  const files = fs.readdirSync(srcDir).filter((f) => EXTS.includes(path.extname(f).toLowerCase()));
  if (!files.length) {
    console.log('No images in photos-to-import/. Drop JPG/PNG/WebP with the README filenames.');
    process.exit(0);
  }

  let products = fs.readFileSync(productsFile, 'utf8');
  let copied = 0;

  for (const file of files) {
    const stem = file.replace(/\.(jpe?g|png|webp)$/i, '');
    const dest = path.join(destDir, file);
    fs.copyFileSync(path.join(srcDir, file), dest);
    copied += 1;
    // Prefer real photo over SVG placeholder in catalog
    const svgPath = `/assets/images/products/${stem}.svg`;
    const realPath = `/assets/images/products/${file}`;
    if (products.includes(svgPath)) {
      products = products.split(svgPath).join(realPath);
    }
  }

  fs.writeFileSync(productsFile, products);
  console.log(`Copied ${copied} photo(s) as-is and updated products.ts paths.`);
}

main();
