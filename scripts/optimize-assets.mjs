// ============================================================
// AHR Collections — Asset optimizer
// Reads ../AHRCOLLECTIONSIMAGES/*, produces optimized WebPs
// (max 1600px wide, q=60) into ../public/img/<section>/<id>.webp
// ------------------------------------------------------------
// Per section, you provide an array of IDs (e.g. "DSC06865").
// The script tries to locate any file whose basename contains
// the ID OR its zero-padded / un-padded variant in any folder
// listed in `searchRoots`. Missing files are reported.
// ============================================================

import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const SRC  = path.join(ROOT, 'AHRCOLLECTIONSIMAGES');
const OUT  = path.join(ROOT, 'public', 'img');

// ---------- Asset map ----------
// section folder => { roots: [...subfolders to search], ids: [...DSC numbers] }
const MAP = {
  // ── Royal Plaza ───────────────────────────────────────────
  'royal/superior': {
    roots: ['ROYALPLAZA/ChambresPlaza/Chambres'],
    ids: ['DSC06865','DSC06861','DSC06853','DSC06821','DSC04764'],
  },
  'royal/deluxe': {
    roots: ['ROYALPLAZA/ChambresPlaza/Chambres'],
    ids: ['DSC04755','DSC04748','DSC04715','DSC05141','DSC06865','DSC06942'],
  },
  'royal/junior': {
    roots: ['ROYALPLAZA/ChambresPlaza/Chambres','ROYALPLAZA/Restaurants&Hall&Faces/Restaurants & Hall & Faces'],
    ids: ['DSC06877','DSC06902','DSC06907','DSC06871','DSC06913','DSC09738','DSC09734'],
  },
  'royal/executive': {
    roots: ['ROYALPLAZA/ChambresPlaza/Chambres','ROYALPLAZA/Restaurants&Hall&Faces/Restaurants & Hall & Faces'],
    ids: ['DSC06958','DSC07000','DSC07001','DSC07029','DSC06863','DSC09741','DSC09726'],
  },
  'royal/dining': {
    roots: ['ROYALPLAZA/Restaurants&Hall&Faces/Restaurants & Hall & Faces'],
    ids: ['DSC09492','DSC09483','DSC09478','DSC05743','DSC04976','DSC04805','DSC01746','DSC01736'],
  },
  'royal/spa': {
    roots: ['ROYALPLAZA/Spa&piscinePlaza/Spa & piscine','ROYALPLAZA/Moveup&Kidsclub/Move up & Kids club'],
    ids: ['DSC05192','DSC05565','DSC05553','DSC05546','DSC05528','DSC05521','DSC05504','DSC05397','DSC05265','DSC05621','DSC05636','DSC09595','DSC02213','DSC02223'],
  },
  'royal/family': {
    roots: ['ROYALPLAZA/Moveup&Kidsclub/Move up & Kids club','ROYALPLAZA/Spa&piscinePlaza/Spa & piscine'],
    ids: ['DSC02043','DSC02036','DSC02025','DSC02004','DSC01980','DSC09615','DSC09617','DSC05305'],
  },
  'royal/business': {
    roots: ['ROYALPLAZA/SalledeconferencePlaza'],
    ids: ['DSC04522','DSC04501','DSC04409','DSC04483','DSC04477','DSC04461','DSC04452','DSC04450','DSC04442','DSC04440'],
  },
  // Extra dining-hall / restaurant interiors — auto-pick to extend RESTAURANT_HALL gallery
  'royal/hall': {
    roots: ['ROYALPLAZA/Restaurants&Hall&Faces/Restaurants & Hall & Faces'],
    take: 24,
  },

  // ── Waves Aqua Resort ─────────────────────────────────────
  // Verified per-image via contact-sheet audit (see tmp/sheets/)
  'aqua/rooms': {
    roots: ['WAVES/waves'],
    ids: ['DSC00546','DSC00547','DSC00556','DSC00558','DSC00563','DSC00596','DSC00600','DSC00612','DSC00617','DSC00646','DSC00650','DSC00665','DSC00682','DSC00684','DSC00695','DSC00696','DSC00743','DSC00744','DSC00748','DSC00749','DSC00751','DSC00756','DSC00757','DSC00764','DSC09946','DSC09955','DSC09958','DSC09964','DSC09966'],
  },
  'aqua/suites': {
    roots: ['WAVES/waves'],
    ids: ['DSC00483','DSC00487','DSC00490','DSC00495','DSC00497','DSC00507','DSC00513','DSC00520','DSC00524','DSC00567','DSC00568','DSC00570','DSC00578','DSC00581','DSC00620','DSC00624','DSC00630','DSC00634','DSC00684','DSC00685'],
  },
  'aqua/dining': {
    // restaurant interior + plated food (WAVES kitchen)
    roots: ['WAVES/waves'],
    ids: ['DSC00126','DSC00146','DSC00165','DSC00171','DSC00180','DSC00195','DSC00207','DSC00215','DSC00247','DSC00274','DSC00276','DSC00304','DSC00345','DSC00354','DSC00364','DSC00369','DSC00387','DSC00409','DSC00440','DSC00452','DSC00462'],
  },
  'aqua/cocktails': {
    roots: ['WAVES/waves'],
    ids: ['DSC00041','DSC00087','DSC00089','DSC00092','DSC00106','DSC00471','DSC00475','DSC00477','DSC00480','DSC00717','DSC00719','DSC00730','DSC00732','DSC00735','DSC00741'],
  },
  'aqua/pool': {
    // verified aerials + poolside views
    roots: ['Aquapark/Aquapark','WAVES/waves'],
    ids: ['DJI_0087','DJI_0088','DJI_0092','DJI_0097','DJI_0098','DJI_0099','DJI_0100','DJI_0101','DJI_0102','DJI_0103','DJI_0104','DSC00702','DSC00703','DSC00712','DSC02481','DSC02482','DSC02508'],
  },
  'aqua/aquapark': {
    // slides, kids, performers, mascot, candy castle, fire show
    roots: ['Aquapark/Aquapark'],
    ids: ['DSC02152','DSC02159','DSC02167','DSC02177','DSC02218','DSC02222','DSC02232','DSC02257','DSC02292','DSC02330','DSC02375','DSC02415','DSC02425','DSC02442','DSC02489','DSC02525','DSC02563','DSC02582','DSC02610','DSC02653','DSC02692','DSC02768','DSC02799','DSC02811','DSC02814','DSC02826','DSC02831','DSC02841','DSC02843'],
  },
  'aqua/spa': {
    // AQUA2026 spa, hammam, beauty, massage chairs
    roots: ['AQUA2026/photos'],
    ids: ['photos2200','photos2202','photos2204','photos2205','photos2207','photos2209','photos2210','photos2213','photos2219','photos2220','photos2222','photos2230','photos2231','photos2233','photos2236','photos2238','photos2241','photos2242'],
  },
  'aqua/kids': {
    // AQUA2026 indoor playground (JUMP)
    roots: ['AQUA2026/photos'],
    ids: ['photos2244','photos2245','photos2246','photos2247','photos2248','photos2249','photos2250','photos2252','photos2253','photos2256','photos2257','photos2264','photos2266','photos2268'],
  },
  'aqua/bronz': {
    // BRONZ restaurant + grill / seafood
    roots: ['AQUA2026/photos'],
    ids: ['photos2269','photos2273','photos2279','photos2281','photos2285','photos2287','photos2289','photos2290','photos2291','photos2293','photos2295','photos2298','photos2299','photos2300','photos2302'],
  },
  'aqua/staff': {
    roots: ['WAVES/waves'],
    ids: ['DSC09027','DSC09029','DSC09039','DSC09040','DSC09043','DSC09045','DSC09046','DSC09047','DSC09048','DSC09051','DSC09053','DSC09054','DSC09055','DSC09057'],
  },

  // ── Vitality Terminus ─────────────────────────────────────
  'vitality/confort-gl': { roots: ['VITALITY/SuperieurGrandlit/Supérieur Grand lit'], take: 5 },
  'vitality/confort-twin': { roots: ['VITALITY/SuperieurTwin/Supérieur Twin'], take: 5 },
  'vitality/confort':    { roots: ['VITALITY/Confort/Confort'], take: 6 },
  'vitality/suite-junior': { roots: ['VITALITY/SuiteJunior/Suite Junior'], take: 8 },
  'vitality/suite-prestige': { roots: ['VITALITY/SuitePrestige/Suite Préstige'], take: 8 },
  'vitality/nuit':       { roots: ['VITALITY/Nuitdenoces/Nuit de noces'], take: 10 },
  'vitality/reception':  { roots: ['VITALITY/Reception/Récéption'], take: 5 },
  'vitality/couloir':    { roots: ['VITALITY/CouloirChambre/Couloir Chambre'], take: 4 },
  'vitality/meet-marrakech': { roots: ['VITALITY/LesSallesdeConferences/Les Salles de Conférences/MARRAKECH'], take: 12 },
  'vitality/meet-agadir':    { roots: ['VITALITY/LesSallesdeConferences/Les Salles de Conférences/AGADIR'], take: 7 },
  'vitality/meet-rabat':     { roots: ['VITALITY/LesSallesdeConferences/Les Salles de Conférences/RABAT,VITALITY'], take: 9 },
  'vitality/meet-hall':      { roots: ['VITALITY/LesSallesdeConferences/Les Salles de Conférences/haul des salles'], take: 7 },

  // ── City Hotel (by Waves) ─────────────────────────────────
  // Verified per-image via contact-sheet audit
  'city/rooms': {
    roots: ['WAVESCITY/waves city'],
    ids: ['DSC08014','DSC08025','DSC08026','DSC08028','DSC08031','DSC08056','DSC08058','DSC08059','DSC08110','DSC08115','DSC08125','DSC08127','DSC08131','DSC08132','DSC08317','DSC08324','DSC08326','DSC08330','DSC08334','DSC08337','DSC08352','DSC08361','DSC08371','DSC08374','DSC08380','DSC08382','DSC08385','DSC08407','DSC08413','DSC08426','DSC08433','DSC08434','DSC08454','DSC08310','DSC08311','DSC08314','DSC08316','DSC08388','DSC08391'],
  },
  'city/bath': {
    roots: ['WAVESCITY/waves city'],
    ids: ['DSC08039','DSC08041','DSC08344','DSC08349'],
  },
  'city/tea-garden': {
    // afternoon tea cages, cocktails by plant wall (signature city venue)
    roots: ['WAVESCITY/waves city'],
    ids: ['DSC08147','DSC08149','DSC08150','DSC08151','DSC08155','DSC08156','DSC08157','DSC08158','DSC08169','DSC08172','DSC08177','DSC08180','DSC08188','DSC08193','DSC08202','DSC08206','DSC08207','DSC08209','DSC08210'],
  },
  'city/dining': {
    // restaurant tables, place settings, dining room
    roots: ['WAVESCITY/waves city'],
    ids: ['DSC08215','DSC08241','DSC08243','DSC08246','DSC08250','DSC08251','DSC08270','DSC08272','DSC08278','DSC08286','DSC08299','DSC08300','DSC08586','DSC08588','DSC08595','DSC08599','DSC08605','DSC08609','DSC08630','DSC08640'],
  },
  'city/meeting': {
    // conference rooms with blue chairs + microphones
    roots: ['WAVESCITY/waves city'],
    ids: ['DSC08462','DSC08470','DSC08473','DSC08475','DSC08481','DSC08482','DSC08484','DSC08486','DSC08491','DSC08493','DSC08494','DSC08498','DSC08505','DSC08508','DSC08516','DSC08523','DSC08529','DSC08530','DSC08535','DSC08542','DSC08548','DSC08552','DSC08560'],
  },
  'city/lobby': {
    // lounges, business center, framed art, sofas
    roots: ['WAVESCITY/waves city'],
    ids: ['DSC08653','DSC08656','DSC08657','DSC08660','DSC08667','DSC08669','DSC08673','DSC08683','DSC08685','DSC08688','DSC08692','DSC08715','DSC08720'],
  },
  'city/reception': {
    // gold clock, lit chandelier, Waves City wordmark
    roots: ['WAVESCITY/waves city'],
    ids: ['DSC08728','DSC08733','DSC08744','DSC08752'],
  },
  'city/staff': {
    roots: ['WAVESCITY/waves city'],
    ids: ['DSC08748','DSC08749','DSC08774'],
  },
  'city/brand': {
    roots: ['WAVESCITY/waves city'],
    ids: ['DSC08084','DSC08089','DSC08092','DSC08101','DSC08104'],
  },

  // ── About / brand ─────────────────────────────────────────
  'about/general': { roots: ['ROYALPLAZA/Restaurants&Hall&Faces/Restaurants & Hall & Faces','WAVES/waves','VITALITY/Reception/Récéption'], take: 12 },
};

// ---------- Helpers ----------
function walk(dir, out = []) {
  let items = [];
  try { items = fs.readdirSync(dir, { withFileTypes: true }); } catch { return out; }
  for (const e of items) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) walk(p, out);
    else out.push(p);
  }
  return out;
}

function normalizeName(s) {
  // strip extension, lowercase, remove non-alphanum (so DSC06865 == dsc06865 == dsc_06865)
  return path.basename(s, path.extname(s)).toLowerCase().replace(/[^a-z0-9]/g, '');
}

function variants(id) {
  // DSC06865 -> ["dsc06865","dsc6865","dsc006865","dsc0006865"]
  const cleaned = id.toLowerCase().replace(/[^a-z0-9]/g, '');
  const m = cleaned.match(/^([a-z]+)(\d+)$/);
  if (!m) return [cleaned];
  const prefix = m[1];
  const numStr = m[2];
  const n = parseInt(numStr, 10);
  const set = new Set();
  set.add(cleaned);
  set.add(prefix + numStr);
  set.add(prefix + n.toString());
  // pad widths 4..7
  for (let w = 4; w <= 7; w++) set.add(prefix + n.toString().padStart(w,'0'));
  return [...set];
}

function findInRoots(id, roots) {
  const wanted = new Set(variants(id));
  for (const r of roots) {
    const full = path.join(SRC, r);
    if (!fs.existsSync(full)) continue;
    const files = walk(full).filter(f => /\.(jpe?g|png|webp|tiff?)$/i.test(f));
    for (const f of files) {
      const norm = normalizeName(f);
      if (wanted.has(norm)) return f;
      // also accept basename starting with variant + optional -2 etc.
      for (const v of wanted) {
        if (norm === v || norm.startsWith(v + 'hdr') || norm.startsWith(v + '2')) return f;
      }
    }
  }
  return null;
}

function listAllJpgs(roots) {
  const out = [];
  const seen = new Set();
  for (const r of roots) {
    const full = path.join(SRC, r);
    if (!fs.existsSync(full)) continue;
    const files = walk(full).filter(f => /\.(jpe?g|png)$/i.test(f) && !/-2\.(jpe?g|png)$/i.test(f));
    files.sort();
    for (const f of files) {
      const key = path.basename(f).toLowerCase();
      if (seen.has(key)) continue;
      seen.add(key);
      out.push(f);
    }
  }
  return out;
}

async function optimize(srcFile, dstFile) {
  fs.mkdirSync(path.dirname(dstFile), { recursive: true });
  await sharp(srcFile, { failOn: 'none' })
    .rotate()
    .resize({ width: 1600, height: 1600, fit: 'inside', withoutEnlargement: true })
    .webp({ quality: 60, effort: 4 })
    .toFile(dstFile);
}

// ---------- Run ----------
const report = { ok: [], miss: [], total: 0 };

for (const [section, cfg] of Object.entries(MAP)) {
  const dstDir = path.join(OUT, section);
  const list = [];

  // Skip sections that already have the expected number of outputs (incremental mode).
  // Run with FORCE=1 env var to re-encode everything.
  if (!process.env.FORCE && fs.existsSync(dstDir)) {
    const have = fs.readdirSync(dstDir).filter(f => f.endsWith('.webp')).length;
    const want = cfg.ids ? cfg.ids.length : (cfg.take || 0);
    if (have >= want && want > 0) {
      process.stdout.write(`↷ ${section} (cached, ${have} files)\n`);
      continue;
    }
  }

  if (cfg.ids) {
    for (const id of cfg.ids) {
      const found = findInRoots(id, cfg.roots);
      if (!found) { report.miss.push(`${section}: ${id}`); continue; }
      list.push({ id, src: found });
    }
  } else if (cfg.take) {
    const all = listAllJpgs(cfg.roots);
    const picked = all.slice(0, cfg.take);
    picked.forEach((src, i) => {
      const id = path.basename(src, path.extname(src)).replace(/[^A-Za-z0-9]/g,'_');
      list.push({ id, src });
    });
  }

  for (const { id, src } of list) {
    const dst = path.join(dstDir, id + '.webp');
    try {
      await optimize(src, dst);
      report.ok.push(`${section}/${id}.webp`);
      report.total++;
    } catch (e) {
      report.miss.push(`${section}: ${id} (optimize failed: ${e.message})`);
    }
  }
  process.stdout.write(`✔ ${section} (${list.length})\n`);
}

console.log(`\n— DONE: ${report.total} files generated`);
if (report.miss.length) {
  console.log(`\n— MISSING / FAILED (${report.miss.length}):`);
  report.miss.forEach(m => console.log('  · ' + m));
}

// also write a manifest
fs.writeFileSync(
  path.join(OUT, '_manifest.json'),
  JSON.stringify(report, null, 2)
);
