import { readdir, stat, rename } from 'node:fs/promises';
import { join } from 'node:path';
import sharp from 'sharp';

const DIR = new URL('../public/images/', import.meta.url).pathname;

// Full-bleed hero + interior can be wider; cards smaller.
const WIDE = new Set(['hero.jpg', 'interior.jpg', 'experience.jpg']);

const files = (await readdir(DIR)).filter((f) => /\.jpe?g$/i.test(f));

for (const file of files) {
  const src = join(DIR, file);
  const before = (await stat(src)).size;
  const maxW = WIDE.has(file) ? 2000 : 1200;
  const tmp = join(DIR, `_tmp_${file}`);

  await sharp(src)
    .resize({ width: maxW, withoutEnlargement: true })
    .jpeg({ quality: 78, mozjpeg: true, progressive: true })
    .toFile(tmp);

  await rename(tmp, src);
  const after = (await stat(src)).size;
  console.log(
    `${file.padEnd(26)} ${(before / 1024 / 1024).toFixed(2)}MB -> ${(after / 1024 / 1024).toFixed(2)}MB`,
  );
}
