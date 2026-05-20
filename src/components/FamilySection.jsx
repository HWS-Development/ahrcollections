import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useT } from '../contexts/LanguageContext.jsx';
import { FAMILY } from '../data/content.js';

const slideVariants = {
  enter:  (d) => ({ opacity: 0, scale: 1.06, x: d > 0 ?  60 : -60, filter: 'blur(8px)' }),
  center:      ({ opacity: 1, scale: 1.0,  x: 0,          filter: 'blur(0px)' }),
  exit:   (d) => ({ opacity: 0, scale: 1.02, x: d > 0 ? -60 :  60, filter: 'blur(8px)' }),
};

const TRANSITION = {
  opacity: { duration: 0.9,  ease: [0.22, 1, 0.36, 1] },
  scale:   { duration: 1.4,  ease: [0.22, 1, 0.36, 1] },
  x:       { duration: 0.9,  ease: [0.22, 1, 0.36, 1] },
  filter:  { duration: 0.7,  ease: [0.22, 1, 0.36, 1] },
};

export default function FamilySection() {
  const t = useT();
  const photos = FAMILY.photos;
  const [idx, setIdx]   = useState(0);
  const [dir, setDir]   = useState(1);

  /* autoplay */
  useEffect(() => {
    const id = setInterval(() => {
      setDir(1);
      setIdx((i) => (i + 1) % photos.length);
    }, 5500);
    return () => clearInterval(id);
  }, [photos.length]);

  const goNext = () => { setDir(1);  setIdx((i) => (i + 1) % photos.length); };
  const goPrev = () => { setDir(-1); setIdx((i) => (i - 1 + photos.length) % photos.length); };

  return (
    <section id="family" className="relative section-pad bg-ivory overflow-hidden">
      <div className="absolute inset-0 bg-champagne-radial pointer-events-none" />

      <div className="relative max-w-[1500px] mx-auto px-6 lg:px-12 grid lg:grid-cols-12 gap-12 items-center">

        {/* ── Left: cinematic carousel ── */}
        <div className="lg:col-span-7 relative">

          {/* Main viewport */}
          <div className="relative cinema overflow-hidden shadow-deep h-[320px] sm:h-[420px] md:h-[600px] bg-bordeaux-deep">

            <AnimatePresence custom={dir} mode="popLayout" initial={false}>
              <motion.img
                key={idx}
                src={photos[idx]}
                alt=""
                custom={dir}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={TRANSITION}
                className="absolute inset-0 w-full h-full object-cover will-change-transform"
              />
            </AnimatePresence>

            {/* gradient veil */}
            <div className="absolute inset-0 bg-gradient-to-t from-bordeaux-deep/65 via-bordeaux-deep/10 to-transparent pointer-events-none" />
            {/* inner border accent */}
            <div className="pointer-events-none absolute inset-3 border border-champagne/35" />

            {/* Eyebrow top-left */}
            <div className="absolute top-6 left-6 flex items-center gap-3">
              <span className="h-px w-8 bg-champagne" />
              <span className="font-heading uppercase tracking-[0.4em] text-[0.65rem] text-champagne/80">
                {t(FAMILY.eyebrow)}
              </span>
            </div>

            {/* Prev / Next arrows */}
            <button
              onClick={goPrev}
              aria-label={t({ fr: 'Précédent', en: 'Previous' })}
              className="group absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center bg-ivory/10 backdrop-blur-md border border-ivory/30 text-ivory hover:bg-champagne hover:border-champagne hover:text-bordeaux-deep transition-all duration-500"
            >
              <span className="text-xl leading-none transition-transform duration-500 group-hover:-translate-x-0.5">‹</span>
            </button>
            <button
              onClick={goNext}
              aria-label={t({ fr: 'Suivant', en: 'Next' })}
              className="group absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center bg-ivory/10 backdrop-blur-md border border-ivory/30 text-ivory hover:bg-champagne hover:border-champagne hover:text-bordeaux-deep transition-all duration-500"
            >
              <span className="text-xl leading-none transition-transform duration-500 group-hover:translate-x-0.5">›</span>
            </button>

            {/* Progress bar + counter */}
            <div className="absolute bottom-6 left-6 right-6 flex items-center gap-4 text-ivory">
              <span className="font-heading text-[0.7rem] tracking-[0.4em] text-champagne">
                {String(idx + 1).padStart(2, '0')}
              </span>
              <div className="flex-1 h-px bg-ivory/20 relative overflow-hidden">
                <motion.span
                  key={'bar-' + idx}
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 5.4, ease: 'linear' }}
                  style={{ transformOrigin: 'left' }}
                  className="absolute inset-0 bg-gradient-to-r from-champagne to-ivory/80"
                />
              </div>
              <span className="font-heading text-[0.7rem] tracking-[0.4em] text-ivory/55">
                {String(photos.length).padStart(2, '0')}
              </span>
            </div>
          </div>

          {/* Thumbnail strip */}
          <div
            className="mt-4 grid gap-3"
            style={{ gridTemplateColumns: `repeat(${photos.length}, minmax(0,1fr))` }}
          >
            {photos.map((src, i) => (
              <button
                key={src + i}
                onClick={() => { setDir(i > idx ? 1 : -1); setIdx(i); }}
                aria-label={`Photo ${i + 1}`}
                className={`relative cinema aspect-[4/3] overflow-hidden shadow-soft transition-all duration-500 ${
                  idx === i
                    ? 'ring-2 ring-champagne ring-offset-2 ring-offset-ivory'
                    : 'opacity-55 hover:opacity-100'
                }`}
              >
                <img src={src} alt="" loading="lazy" decoding="async" className="w-full h-full object-cover" />
                <div className={`absolute inset-0 transition-colors duration-500 ${
                  idx === i ? 'bg-bordeaux/0' : 'bg-bordeaux/35 hover:bg-bordeaux/0'
                }`} />
              </button>
            ))}
          </div>
        </div>

        {/* ── Right: text ── */}
        <div className="lg:col-span-5">
          <span className="ornament eyebrow">{t(FAMILY.eyebrow)}</span>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 font-heading uppercase text-bordeaux text-[clamp(2rem,4.4vw,3.4rem)] leading-[1.05]"
          >
            {t(FAMILY.title)}
          </motion.h2>
          <span className="hairline mt-7" />

          <div className="mt-8 space-y-1.5 font-display text-ink-soft leading-[1.95] text-[0.98rem] max-w-lg">
            {t(FAMILY.body).map((line, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: 0.04 * i }}
              >
                {line}
              </motion.p>
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.6 }}
            className="mt-10 serif-flourish text-bordeaux text-3xl leading-snug"
          >
            «&nbsp;{t({ fr: 'Chacun vit son moment… ensemble.', en: 'Everyone lives their moment… together.' })}&nbsp;»
          </motion.p>
        </div>
      </div>
    </section>
  );
}
