import { motion } from 'framer-motion';
import { useT } from '../contexts/LanguageContext.jsx';
import { SPA, SPA_POOL } from '../data/content.js';
import { BRAND } from '../data/site.js';

export default function SpaPoolSection() {
  const t = useT();

  return (
    <section id="spa-pool" className="relative overflow-hidden bg-ivory">

      {/* Ambient champagne glow */}
      <div className="pointer-events-none absolute top-0 inset-x-0 h-[600px] bg-champagne-radial" />

      {/* ══════════════════════════════════════════
          PART 1 — Centered header  (SpaSection copy)
      ══════════════════════════════════════════ */}
      <div className="relative max-w-4xl mx-auto px-6 pt-24 pb-16 text-center">

        <motion.span
          initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="ornament eyebrow"
        >
          {t(SPA.eyebrow)}
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
          className="mt-6 font-heading uppercase text-bordeaux text-[clamp(1.9rem,4.2vw,3.8rem)] leading-[1.05]"
        >
          {t(SPA.title)}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.9 }}
          className="mt-5 font-heading uppercase tracking-[0.28em] text-[0.6rem] text-ink-soft/55"
        >
          {t(SPA_POOL.sub)}
        </motion.p>

        <motion.span
          initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="block mx-auto mt-8 h-px w-24 bg-gradient-to-r from-transparent via-champagne to-transparent origin-center"
        />
      </div>

      {/* ══════════════════════════════════════════
          PART 2 — Three ritual cards  (SpaSection)
      ══════════════════════════════════════════ */}
      <div className="relative max-w-[1300px] mx-auto px-6 lg:px-12 pb-16">
        <div className="grid sm:grid-cols-3 gap-5 lg:gap-7">
          {SPA.rituals.map((r, i) => (
            <motion.div
              key={r.fr}
              initial={{ opacity: 0, y: 50, rotateX: -12 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 1.1, delay: 0.15 * i, ease: [0.22, 1, 0.36, 1] }}
              className="group relative bg-ivory border border-champagne/40 p-10 text-center overflow-hidden hover:border-bordeaux transition-colors duration-700"
              style={{ transformStyle: 'preserve-3d' }}
            >
              <span className="absolute inset-0 bg-gradient-to-br from-champagne/0 via-champagne/10 to-bordeaux/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <p className="font-heading text-shimmer text-[2.2rem] leading-none">0{i + 1}</p>
              <p className="mt-6 serif-flourish text-bordeaux text-3xl">{t(r)}</p>
              <span className="block mt-6 mx-auto h-px w-10 bg-champagne group-hover:w-24 transition-all duration-700" />
            </motion.div>
          ))}
        </div>
      </div>

      {/* ══════════════════════════════════════════
          PART 3 — Panoramic pool hero
      ══════════════════════════════════════════ */}
      <div className="px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 1.03 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
          className="relative cinema overflow-hidden shadow-deep"
          style={{ aspectRatio: '16/7' }}
        >
          <img
            src={SPA_POOL.photos[0]}
            alt="Serenita Pool — Royal Plaza"
            className="absolute inset-0 w-full h-full object-cover"
            style={{ objectPosition: 'center 50%' }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/50 via-transparent to-transparent" />
          <div className="pointer-events-none absolute inset-4 border border-champagne/30" />

          {/* Floating quote */}
          <div className="absolute bottom-0 inset-x-0 px-8 md:px-20 pb-10 text-center">
            <motion.p
              initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 1 }}
              className="serif-flourish text-ivory text-[clamp(1rem,2vw,1.6rem)] leading-snug [text-shadow:0_2px_24px_rgba(0,0,0,0.6)]"
            >
              {t(SPA_POOL.quote)}
            </motion.p>
            <motion.span
              initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }}
              transition={{ delay: 0.7, duration: 1 }}
              className="block mx-auto mt-4 h-px w-16 bg-gradient-to-r from-transparent via-champagne/70 to-transparent origin-center"
            />
          </div>
        </motion.div>
      </div>

      {/* ══════════════════════════════════════════
          PART 4 — Feature pills (4 services)
      ══════════════════════════════════════════ */}
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 mt-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {SPA_POOL.features.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.08 * i, ease: [0.22, 1, 0.36, 1] }}
              className="group relative border border-champagne/40 hover:border-bordeaux bg-white/50 hover:bg-ivory transition-all duration-700 p-6 md:p-8 text-center overflow-hidden"
            >
              <span className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-champagne/60 to-transparent" />
              <p className="font-heading text-bordeaux/50 group-hover:text-bordeaux text-2xl leading-none transition-colors duration-500">
                {f.icon}
              </p>
              <span className="block mx-auto mt-4 h-px w-6 bg-champagne/50 group-hover:w-12 transition-all duration-700" />
              <p className="mt-4 font-heading uppercase tracking-[0.26em] text-[0.6rem] text-ink-soft/60 group-hover:text-bordeaux transition-colors duration-500 leading-relaxed">
                {t(f.label)}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ══════════════════════════════════════════
          PART 5 — Body prose (SpaSection) + image grid
      ══════════════════════════════════════════ */}
      <div className="max-w-[1500px] mx-auto px-6 lg:px-12 py-20 grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">

        {/* Left — poetic body */}
        <div className="lg:col-span-4">
          <div className="space-y-1.5 font-display text-ink-soft text-[1rem] leading-[2]">
            {t(SPA.body).map((line, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 10, filter: 'blur(4px)' }}
                whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, delay: 0.055 * i, ease: [0.22, 1, 0.36, 1] }}
              >
                {line}
              </motion.p>
            ))}
          </div>

          <motion.a
            href={BRAND.bookingUrl}
            target="_blank" rel="noreferrer"
            initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            transition={{ delay: 0.7, duration: 0.9 }}
            className="btn-royal mt-10 inline-flex"
          >
            {t({ fr: 'Réserver un soin', en: 'Book a treatment' })}
            <span aria-hidden>→</span>
          </motion.a>
        </div>

        {/* Right — asymmetric image grid (flex, no col-span) */}
        <div className="lg:col-span-8 flex flex-col sm:flex-row gap-4" style={{ height: '520px' }}>
          {/* Large left image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="cinema relative overflow-hidden shadow-deep sm:w-[58%] h-64 sm:h-full"
          >
            <img src={SPA_POOL.photos[1]} alt="" className="w-full h-full object-cover" loading="lazy" />
            <div className="pointer-events-none absolute inset-3 border border-champagne/30" />
            <div className="absolute inset-0 bg-gradient-to-t from-bordeaux/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-700" />
          </motion.div>

          {/* Two stacked right images */}
          <div className="sm:w-[42%] flex flex-row sm:flex-col gap-4 h-56 sm:h-full">
            {[SPA_POOL.photos[2], SPA_POOL.photos[3]].map((src, i) => (
              <motion.div
                key={src}
                initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
                transition={{ duration: 1.1, delay: 0.12 + i * 0.14, ease: [0.22, 1, 0.36, 1] }}
                className="cinema relative flex-1 overflow-hidden shadow-soft"
              >
                <img src={src} alt="" className="w-full h-full object-cover" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-bordeaux/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-700" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* ══════════════════════════════════════════
          PART 6 — Gallery strip (aspect-ratio, no fixed heights)
      ══════════════════════════════════════════ */}
      <div className="max-w-[1600px] mx-auto px-6 lg:px-12 pb-24 space-y-3">
        {/* 4-image row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {SPA_POOL.photos.slice(4, 8).map((src, i) => (
            <motion.div
              key={src}
              initial={{ opacity: 0, scale: 1.05 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 1, delay: 0.07 * i, ease: [0.22, 1, 0.36, 1] }}
              className="group cinema relative aspect-[4/3] overflow-hidden shadow-soft"
            >
              <img
                src={src} alt=""
                className="w-full h-full object-cover transition-transform duration-[1200ms] group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-bordeaux/25 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            </motion.div>
          ))}
        </div>

        {/* 3-image row */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {SPA_POOL.photos.slice(8, 11).map((src, i) => (
            <motion.div
              key={src}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: 0.08 * i }}
              className="group cinema relative aspect-[4/3] overflow-hidden shadow-soft"
            >
              <img src={src} alt="" className="w-full h-full object-cover transition-transform duration-[1200ms] group-hover:scale-105" loading="lazy" />
              <div className="absolute inset-0 bg-bordeaux/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            </motion.div>
          ))}
        </div>
      </div>

    </section>
  );
}
