import { readdir } from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';

const imagesDir = path.join(process.cwd(), 'public', 'images');

async function walk(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) files.push(...(await walk(full)));
    else if (/\.(png|jpe?g)$/i.test(entry.name)) files.push(full);
  }
  return files;
}

const files = await walk(imagesDir);
for (const file of files) {
  const out = file.replace(/\.(png|jpe?g)$/i, '.webp');
  await sharp(file).webp({ quality: 82 }).toFile(out);
  console.log(`webp: ${path.relative(process.cwd(), out)}`);
}
