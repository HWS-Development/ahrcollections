import { motion } from 'framer-motion';
import { useT } from '../contexts/LanguageContext.jsx';
import { RESTAURANT_HALL } from '../data/content.js';
import { BRAND } from '../data/site.js';

/* ─────────────────────────────────────────────
   Reusable cinema tile
───────────────────────────────────────────── */
function CinemaTile({ src, className = '', delay = 0, position = 'center' }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 1.06, y: 20 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 1.2, delay, ease: [0.22, 1, 0.36, 1] }}
      className={`cinema relative overflow-hidden shadow-deep ${className}`}
    >
      <img
        src={src} alt=""
        className="w-full h-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-105"
        style={{ objectPosition: position }}
        loading="lazy"
      />
      <div className="absolute inset-0 bg-bordeaux/20 opacity-0 hover:opacity-60 transition-opacity duration-700" />
    </motion.div>
  );
}

export default function RestaurantHallSection() {
  const t = useT();
  const lines = t(RESTAURANT_HALL.title).split('\n');

  return (
    <section id="restaurant-hall" className="relative overflow-hidden bg-ivory">

      {/* ══════════════════════════════════════════
          PART 1 — Cinematic hero image
      ══════════════════════════════════════════ */}
      <div className="relative h-[62vh] md:h-[78vh] overflow-hidden">

        {/* Slow-zoom hero photo */}
        <img
          src={RESTAURANT_HALL.photos[0]}
          alt="Restaurant Royal Plaza"
          loading="lazy"
          decoding="async"
          className="absolute inset-0 w-full h-full object-cover animate-slowZoom"
          style={{ objectPosition: 'center 40%' }}
        />

        {/* Gradient veil — darker bottom for legibility, lighter top */}
        <div className="absolute inset-0 bg-gradient-to-t from-bordeaux-deep/80 via-bordeaux-deep/30 to-transparent" />

        {/* Film grain */}
        <div className="absolute inset-0 bg-noise opacity-10 mix-blend-overlay pointer-events-none" />

        {/* Top hairline */}
        <motion.span
          initial={{ scaleX: 0 }} animate={{ scaleX: 1 }}
          transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1] }}
          className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-champagne/70 to-transparent origin-center"
        />

        {/* Content overlay — bottom left */}
        <div className="absolute bottom-0 inset-x-0 px-8 md:px-14 pb-10 md:pb-14 flex flex-col md:flex-row items-start md:items-end justify-between gap-6">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 1 }}
              className="font-heading uppercase tracking-[0.46em] text-[0.6rem] text-champagne mb-4"
            >
              {t(RESTAURANT_HALL.eyebrow)}
            </motion.p>
            <h2 className="font-heading uppercase text-ivory leading-[1.0] [text-shadow:0_4px_30px_rgba(0,0,0,0.6)]">
              {lines.map((line, i) => (
                <span key={i} className="block overflow-hidden">
                  <motion.span
                    initial={{ y: '100%', opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1.1, delay: 0.6 + i * 0.2, ease: [0.22, 1, 0.36, 1] }}
                    className={`block ${i === 0 ? 'text-[clamp(1.8rem,5.5vw,5.2rem)]' : 'text-[clamp(1.3rem,2.8vw,2.6rem)] mt-2'}`}
                  >
                    {line}
                  </motion.span>
                </span>
              ))}
            </h2>
            <motion.p
              initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1, duration: 0.9 }}
              className="mt-4 font-display text-ivory/80 text-[0.88rem] tracking-widest italic"
            >
              {t(RESTAURANT_HALL.sub)}
            </motion.p>
          </div>

          <motion.a
            href={BRAND.bookingUrl}
            target="_blank" rel="noreferrer"
            initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.3, duration: 0.9 }}
            className="btn-royal shrink-0 shadow-[0_20px_50px_-15px_rgba(0,0,0,0.8)]"
          >
            {t({ fr: 'Réserver une table', en: 'Reserve a table' })}
            <span aria-hidden>→</span>
          </motion.a>
        </div>
      </div>

      {/* ══════════════════════════════════════════
          PART 2 — Editorial split: text + image stack
      ══════════════════════════════════════════ */}
      <div className="relative max-w-[1500px] mx-auto px-6 lg:px-12 py-20 grid lg:grid-cols-12 gap-10 lg:gap-14">
        <div className="absolute inset-0 bg-champagne-radial pointer-events-none opacity-60" />

        {/* Left — poetic text + venue cards */}
        <div className="relative lg:col-span-5 flex flex-col gap-10">

          {/* Body prose */}
          <div className="space-y-1.5 font-display text-bordeaux/75 leading-[2] text-[0.97rem]">
            {t(RESTAURANT_HALL.body).map((line, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, x: -14 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.75, delay: 0.05 * i, ease: [0.22, 1, 0.36, 1] }}
              >
                {line}
              </motion.p>
            ))}
          </div>

          {/* Champagne divider */}
          <motion.span
            initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="block h-px w-20 bg-gradient-to-r from-champagne/70 to-transparent origin-left"
          />

          {/* Venue cards */}
          <div className="space-y-4">
            {RESTAURANT_HALL.venues.map((v, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.12 * i }}
                className="group relative border border-champagne/40 hover:border-champagne p-6 transition-all duration-700 overflow-hidden bg-ivory/70 backdrop-blur-sm"
              >
                {/* Corner accent */}
                <span className="absolute top-0 left-0 w-6 h-px bg-champagne group-hover:w-full transition-all duration-700" />

                <p className="serif-flourish text-bordeaux text-[1.6rem] leading-tight">{v.name}</p>
                <p className="mt-1 font-heading uppercase tracking-[0.36em] text-[0.58rem] text-champagne group-hover:text-bordeaux transition-colors duration-500">
                  {t(v.tag)}
                </p>
                <span className="block mt-4 h-px w-8 bg-champagne/60 group-hover:w-16 transition-all duration-700" />
                <p className="mt-4 font-display text-bordeaux/70 text-[0.85rem] leading-[1.8] group-hover:text-bordeaux/90 transition-colors duration-500">
                  {t(v.desc)}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Right — stacked image trio */}
        <div className="relative lg:col-span-7 grid grid-rows-[1.7fr_1fr] gap-4 h-auto sm:h-[560px] md:h-[660px]">
          <CinemaTile src={RESTAURANT_HALL.photos[1]} delay={0} />
          <div className="grid grid-cols-2 gap-4">
            <CinemaTile src={RESTAURANT_HALL.photos[2]} delay={0.1} position="center top" />
            <CinemaTile src={RESTAURANT_HALL.photos[3]} delay={0.18} position="center" />
          </div>
        </div>
      </div>

      {/* ══════════════════════════════════════════
          PART 3 — Horizontal filmstrip (5 images)
      ══════════════════════════════════════════ */}
      <div className="max-w-[1600px] mx-auto px-6 lg:px-12 pb-6">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
          {RESTAURANT_HALL.photos.slice(4, 9).map((src, i) => (
            <motion.div
              key={src}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.9, delay: 0.07 * i, ease: [0.22, 1, 0.36, 1] }}
              className="group cinema relative aspect-[3/4] md:aspect-[3/4] overflow-hidden shadow-soft"
            >
              <img src={src} alt="" className="w-full h-full object-cover transition-transform duration-[1200ms] group-hover:scale-108" loading="lazy" decoding="async" />
              {/* Number badge on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-bordeaux-deep/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-start p-4">
                <span className="font-heading text-shimmer text-2xl leading-none">0{i + 1}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ══════════════════════════════════════════
          PART 4 — Closing mosaic (remaining photos)
      ══════════════════════════════════════════ */}
      <div className="max-w-[1600px] mx-auto px-6 lg:px-12 pb-20 mt-3">
        {/* Row A — 3 equal columns */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {RESTAURANT_HALL.photos.slice(9, 12).filter(Boolean).map((src, i) => (
            <CinemaTile key={src} src={src} className="aspect-[4/3]" delay={0.05 * i} />
          ))}
        </div>
        {/* Row B — up to 6 equal columns */}
        <div className="grid grid-cols-2 md:grid-cols-6 gap-3 mt-3">
          {RESTAURANT_HALL.photos.slice(12, 18).filter(Boolean).map((src, i) => (
            <CinemaTile key={src} src={src} className="aspect-[4/3]" delay={0.05 * i} />
          ))}
        </div>
      </div>

      {/* Bottom champagne hairline */}
      <motion.span
        initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }}
        transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
        className="block h-px bg-gradient-to-r from-transparent via-champagne to-transparent origin-center"
      />
    </section>
  );
}
