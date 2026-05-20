// ============================================================
// AHR Collections — Contact-sheet generator
// Tiles all images from given source folders into 6x6 grids
// with filename labels, output to /tmp/sheets/<group>-NN.jpg
// Lets the agent visually classify many images per Read call.
// ============================================================

import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const SRC  = path.join(ROOT, 'AHRCOLLECTIONSIMAGES');
const OUT  = path.join(ROOT, 'tmp', 'sheets');

const GROUPS = {
  'waves':     ['WAVES/waves'],
  'aquapark':  ['Aquapark/Aquapark'],
  'aqua2026':  ['AQUA2026/photos'],
  'wavescity': ['WAVESCITY/waves city'],
};

const COLS = 4;
const ROWS = 5;             // 20 per sheet → ~10-20 sheets total
const TILE_W = 360;
const TILE_H = 240;
const LABEL_H = 28;
const CELL_H = TILE_H + LABEL_H;
const GAP = 6;
const BG = { r: 17, g: 17, b: 17, alpha: 1 };

function walk(dir) {
  const out = [];
  let items = [];
  try { items = fs.readdirSync(dir, { withFileTypes: true }); } catch { return out; }
  for (const e of items) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) out.push(...walk(p));
    else if (/\.(jpe?g|png)$/i.test(e.name)) out.push(p);
  }
  return out;
}

function escapeXml(s) {
  return s.replace(/[<>&'"]/g, c => ({'<':'&lt;','>':'&gt;','&':'&amp;',"'":'&apos;','"':'&quot;'}[c]));
}

async function makeTile(srcPath) {
  const label = path.basename(srcPath, path.extname(srcPath));
  // Resize image to tile dims
  const img = await sharp(srcPath, { failOn: 'none' })
    .rotate()
    .resize({ width: TILE_W, height: TILE_H, fit: 'cover', position: 'attention' })
    .toBuffer();

  // Compose label strip
  const svg = `<svg width="${TILE_W}" height="${LABEL_H}" xmlns="http://www.w3.org/2000/svg">
    <rect width="100%" height="100%" fill="#0a0a0a"/>
    <text x="8" y="19" font-family="Consolas,monospace" font-size="14" fill="#ffd17a">${escapeXml(label)}</text>
  </svg>`;
  const labelBuf = Buffer.from(svg);

  // Stack image on top of label
  return await sharp({
    create: { width: TILE_W, height: CELL_H, channels: 3, background: BG }
  })
  .composite([
    { input: img, top: 0, left: 0 },
    { input: labelBuf, top: TILE_H, left: 0 },
  ])
  .png()
  .toBuffer();
}

async function makeSheet(tiles, outFile, header) {
  const sheetW = COLS * TILE_W + (COLS + 1) * GAP;
  const sheetH = ROWS * CELL_H + (ROWS + 1) * GAP + 36;

  const headerSvg = `<svg width="${sheetW}" height="36" xmlns="http://www.w3.org/2000/svg">
    <rect width="100%" height="100%" fill="#1a1a1a"/>
    <text x="12" y="24" font-family="Consolas,monospace" font-size="18" fill="#ffd17a">${escapeXml(header)}</text>
  </svg>`;

  const composites = [{ input: Buffer.from(headerSvg), top: 0, left: 0 }];
  tiles.forEach((buf, i) => {
    const col = i % COLS;
    const row = Math.floor(i / COLS);
    const left = GAP + col * (TILE_W + GAP);
    const top  = 36 + GAP + row * (CELL_H + GAP);
    composites.push({ input: buf, top, left });
  });

  await sharp({
    create: { width: sheetW, height: sheetH, channels: 3, background: BG }
  })
  .composite(composites)
  .jpeg({ quality: 78 })
  .toFile(outFile);
}

async function processGroup(name, roots) {
  const files = [];
  for (const r of roots) files.push(...walk(path.join(SRC, r)));
  files.sort();
  // dedupe by basename
  const seen = new Set();
  const uniq = files.filter(f => {
    const k = path.basename(f).toLowerCase();
    if (seen.has(k)) return false;
    seen.add(k); return true;
  });

  const perSheet = COLS * ROWS;
  let idx = 0, sheetNum = 1;
  while (idx < uniq.length) {
    const slice = uniq.slice(idx, idx + perSheet);
    process.stdout.write(`  sheet ${sheetNum} (${slice.length} tiles)\n`);
    const tiles = [];
    for (const f of slice) {
      try { tiles.push(await makeTile(f)); }
      catch (e) { process.stdout.write(`    ! ${path.basename(f)}: ${e.message}\n`); }
    }
    const total = Math.ceil(uniq.length / perSheet);
    const header = `${name}  ·  sheet ${sheetNum}/${total}  ·  ${slice.length} images`;
    const out = path.join(OUT, `${name}-${String(sheetNum).padStart(2,'0')}.jpg`);
    await makeSheet(tiles, out, header);
    idx += perSheet; sheetNum++;
  }
}

fs.mkdirSync(OUT, { recursive: true });

for (const [name, roots] of Object.entries(GROUPS)) {
  console.log(`\n▸ ${name}`);
  await processGroup(name, roots);
}

console.log('\n✓ Sheets ready in tmp/sheets/');
