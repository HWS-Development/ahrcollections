import { motion, useInView, useMotionValue, useTransform, animate, AnimatePresence } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { useT } from '../contexts/LanguageContext.jsx';

/* ── Hall images (carousel background) ── */
const BG_IMAGES = [
  '/img/royal/hall/DSC01218.webp',
  '/img/royal/hall/DSC01253.webp',
  '/img/royal/hall/DSC01295.webp',
  '/img/royal/hall/DSC01354.webp',
];

const STATS = [
  { value: 105, symbol: '◇', label: { fr: 'Nombre des Chambres', en: 'Number of Rooms' } },
  { value: 3,   symbol: '◉', label: { fr: 'Salles de Réunions',  en: 'Meeting Rooms' } },
  { value: 2,   symbol: '◌', label: { fr: 'Restaurants',          en: 'Restaurants' } },
  { value: 1,   symbol: '◌', label: { fr: 'Spa',                  en: 'Spa' } },
];

/* ── Count-up ── */
function CountUp({ target, inView }) {
  const ref = useRef(null);
  const motionVal = useMotionValue(0);
  const rounded   = useTransform(motionVal, v => Math.round(v));

  useEffect(() => {
    if (!inView) return;
    const ctrl = animate(motionVal, target, { duration: 2.2, ease: [0.22, 1, 0.36, 1] });
    return ctrl.stop;
  }, [inView, target, motionVal]);

  useEffect(() => {
    return rounded.on('change', v => {
      if (ref.current) ref.current.textContent = v;
    });
  }, [rounded]);

  return <span ref={ref}>0</span>;
}

export default function StatsSection() {
  const t       = useT();
  const sectionRef = useRef(null);
  const inView  = useInView(sectionRef, { once: true, amount: 0.25 });

  /* carousel state */
  const [bgIdx, setBgIdx] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setBgIdx(i => (i + 1) % BG_IMAGES.length), 5500);
    return () => clearInterval(id);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden"
      style={{ minHeight: '680px' }}
    >
      {/* ══════════════════════════════
          LAYER 0 — Carousel background
      ══════════════════════════════ */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence initial={false}>
          <motion.div
            key={bgIdx}
            initial={{ opacity: 0, scale: 1.08 }}
            animate={{ opacity: 1, scale: 1.0 }}
            exit={{ opacity: 0 }}
            transition={{
              opacity: { duration: 1.6, ease: [0.22, 1, 0.36, 1] },
              scale:   { duration: 9,   ease: 'linear' },
            }}
            className="absolute inset-0"
          >
            <img
              src={BG_IMAGES[bgIdx]}
              alt=""
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover"
              style={{ objectPosition: 'center 35%' }}
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* ══════════════════════════════
          LAYER 1 — Light ivory overlays (image stays vivid)
      ══════════════════════════════ */}
      {/* Soft ivory wash to brighten and warm */}
      <div className="absolute inset-0 z-10 pointer-events-none"
           style={{ background: 'linear-gradient(160deg, rgba(248,243,232,0.78) 0%, rgba(241,230,206,0.72) 100%)' }} />
      {/* Edge vignette */}
      <div className="absolute inset-0 z-10 pointer-events-none"
           style={{ background: 'radial-gradient(ellipse at center, transparent 40%, rgba(248,243,232,0.55) 100%)' }} />
      {/* Film grain */}
      <div className="absolute inset-0 z-10 bg-noise opacity-[0.04] mix-blend-overlay pointer-events-none" />

      {/* ══════════════════════════════
          LAYER 2 — Top & bottom hairlines
      ══════════════════════════════ */}
      <motion.span
        initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }}
        transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1] }}
        className="absolute top-0 inset-x-0 h-px z-20 bg-gradient-to-r from-transparent via-champagne/70 to-transparent origin-center pointer-events-none"
      />
      <motion.span
        initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }}
        transition={{ duration: 1.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        className="absolute bottom-0 inset-x-0 h-px z-20 bg-gradient-to-r from-transparent via-champagne/70 to-transparent origin-center pointer-events-none"
      />

      {/* ══════════════════════════════
          LAYER 3 — Foreground content
      ══════════════════════════════ */}
      <div className="relative z-30 flex flex-col items-center justify-center py-20 md:py-28 px-4">

        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="flex items-center gap-4 mb-12 px-5 py-2"
          style={{ background: 'rgba(255,250,240,0.75)', backdropFilter: 'blur(10px)', WebkitBackdropFilter: 'blur(10px)', border: '1px solid rgba(184,140,58,0.30)' }}
        >
          <span className="h-px w-10 bg-bordeaux/40" />
          <p className="font-heading uppercase tracking-[0.52em] text-bordeaux text-[0.58rem]">
            {t({ fr: 'Royal Plaza Hotel · Kénitra', en: 'Royal Plaza Hotel · Kénitra' })}
          </p>
          <span className="h-px w-10 bg-bordeaux/40" />
        </motion.div>

        {/* ── Stats grid ── */}
        <div className="w-full max-w-[1200px] grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
          {STATS.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 60, scale: 0.94 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 1.1, delay: 0.14 * i, ease: [0.22, 1, 0.36, 1] }}
              className="group relative overflow-hidden text-center"
              style={{
                background: 'linear-gradient(135deg, rgba(255,250,240,0.88) 0%, rgba(248,238,218,0.82) 100%)',
                backdropFilter: 'blur(22px)',
                WebkitBackdropFilter: 'blur(22px)',
                border: '1px solid rgba(184,140,58,0.45)',
              }}
            >
              {/* Hover shimmer sweep */}
              <motion.span
                initial={false}
                className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                style={{ background: 'linear-gradient(110deg, transparent 25%, rgba(201,167,102,0.14) 50%, transparent 75%)' }}
              />

              {/* Corner brackets */}
              <span className="absolute top-2.5 left-2.5 w-4 h-4 border-t border-l border-bordeaux/40 group-hover:border-bordeaux transition-colors duration-500 pointer-events-none" />
              <span className="absolute top-2.5 right-2.5 w-4 h-4 border-t border-r border-bordeaux/40 group-hover:border-bordeaux transition-colors duration-500 pointer-events-none" />
              <span className="absolute bottom-2.5 left-2.5 w-4 h-4 border-b border-l border-bordeaux/40 group-hover:border-bordeaux transition-colors duration-500 pointer-events-none" />
              <span className="absolute bottom-2.5 right-2.5 w-4 h-4 border-b border-r border-bordeaux/40 group-hover:border-bordeaux transition-colors duration-500 pointer-events-none" />

              {/* Ghost large number */}
              <span
                aria-hidden
                className="pointer-events-none absolute inset-0 flex items-center justify-center font-heading text-[7rem] md:text-[9rem] leading-none text-bordeaux/[0.05] select-none group-hover:text-bordeaux/[0.09] transition-colors duration-700"
              >
                {s.value}
              </span>

              <div className="relative px-6 md:px-8 py-10 md:py-12">
                {/* Symbol */}
                <motion.p
                  initial={{ opacity: 0, scale: 0.6 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.18 * i + 0.3 }}
                  className="font-heading text-bordeaux/60 text-2xl tracking-widest mb-6 group-hover:text-bordeaux transition-colors duration-500"
                >
                  {s.symbol}
                </motion.p>

                {/* Count-up number */}
                <p
                  className="font-heading leading-none text-bordeaux"
                  style={{
                    fontSize: 'clamp(3.2rem, 6vw, 5.4rem)',
                    textShadow: '0 1px 12px rgba(184,140,58,0.20)',
                  }}
                >
                  <CountUp target={s.value} inView={inView} />
                </p>

                {/* Animated champagne divider */}
                <motion.span
                  initial={{ width: '0%' }}
                  whileInView={{ width: '40%' }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, delay: 0.22 * i + 0.5, ease: [0.22, 1, 0.36, 1] }}
                  className="block mx-auto mt-6 mb-6 h-px bg-gradient-to-r from-transparent via-bordeaux/50 to-transparent"
                />

                {/* Label */}
                <p className="font-heading uppercase tracking-[0.3em] text-[0.58rem] text-ink-soft group-hover:text-bordeaux transition-colors duration-500 leading-loose">
                  {t(s.label)}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Slide indicator dots */}
        <div className="flex items-center gap-2.5 mt-14">
          {BG_IMAGES.map((_, i) => (
            <button
              key={i}
              onClick={() => setBgIdx(i)}
              aria-label={`Image ${i + 1}`}
              className="relative overflow-hidden transition-all duration-500"
              style={{ width: bgIdx === i ? 28 : 8, height: 2, background: bgIdx === i ? 'rgba(94,26,36,0.9)' : 'rgba(94,26,36,0.25)' }}
            >
              {bgIdx === i && (
                <motion.span
                  key={i}
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 5.4, ease: 'linear' }}
                  style={{ transformOrigin: 'left', background: 'rgba(184,140,58,0.95)' }}
                  className="absolute inset-0"
                />
              )}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
