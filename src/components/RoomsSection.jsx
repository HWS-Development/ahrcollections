import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useT } from '../contexts/LanguageContext.jsx';
import { ROOMS, UI } from '../data/content.js';

export default function RoomsSection() {
  const t = useT();
  const [active, setActive] = useState(0);
  const [photoIdx, setPhotoIdx] = useState(0);
  const [direction, setDirection] = useState(1);
  const room = ROOMS[active];
  const photos = room.photos;

  // Reset photo when room changes
  useEffect(() => { setPhotoIdx(0); setDirection(1); }, [active]);

  // Autoplay
  useEffect(() => {
    const id = setInterval(() => {
      setDirection(1);
      setPhotoIdx((i) => (i + 1) % photos.length);
    }, 5500);
    return () => clearInterval(id);
  }, [photos.length, active]);

  const goNext = () => {
    setDirection(1);
    setPhotoIdx((i) => (i + 1) % photos.length);
  };
  const goPrev = () => {
    setDirection(-1);
    setPhotoIdx((i) => (i - 1 + photos.length) % photos.length);
  };

  const slideVariants = {
    enter: (dir) => ({ opacity: 0, scale: 1.06, x: dir > 0 ? 60 : -60, filter: 'blur(8px)' }),
    center:        { opacity: 1, scale: 1.0,  x: 0, filter: 'blur(0px)' },
    exit:  (dir) => ({ opacity: 0, scale: 1.02, x: dir > 0 ? -60 : 60, filter: 'blur(8px)' })
  };

  return (
    <section id="rooms" className="relative section-pad bg-mist overflow-hidden">
      {/* decorative blurs (no rounding) */}
      <div className="absolute -top-40 right-0 w-[500px] h-[500px] bg-champagne/10 blur-3xl" />
      <div className="absolute -bottom-40 left-0 w-[500px] h-[500px] bg-bordeaux/10 blur-3xl" />

      <div className="relative max-w-[1500px] mx-auto px-6 lg:px-12">
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="ornament eyebrow">{t({ fr: 'Nos Espaces', en: 'Our Spaces' })}</span>
          <h2 className="mt-6 font-heading uppercase text-bordeaux text-[clamp(2.2rem,4.4vw,4rem)] leading-[1.05]">
            {t({ fr: 'Quatre univers, une même signature', en: 'Four universes, one signature' })}
          </h2>
          <p className="mt-6 font-display text-ink-soft text-[1rem] leading-[1.85]">
            {t({
              fr: 'De la chambre Supérieure à l’Executive Suite, chaque espace incarne une lecture différente du même art : celui d’un confort discret, durable, et profondément humain.',
              en: 'From the Superior Room to the Executive Suite, every space embodies a different reading of the same art: discreet, lasting, deeply human comfort.'
            })}
          </p>
        </div>

        {/* Room tabs */}
        <div className="mt-14 flex flex-wrap items-center justify-center gap-2 md:gap-3">
          {ROOMS.map((r, i) => (
            <button
              key={r.id}
              onClick={() => setActive(i)}
              className={`relative px-5 md:px-7 py-3 font-heading uppercase tracking-[0.28em] text-[0.66rem] md:text-[0.72rem] border transition-all duration-500
                ${active === i
                  ? 'bg-bordeaux text-ivory border-bordeaux shadow-soft'
                  : 'bg-transparent text-ink border-ink/20 hover:border-bordeaux hover:text-bordeaux'}`}
            >
              {t(r.label)}
              {active === i && (
                <motion.span
                  layoutId="rp-tab-glow"
                  className="absolute inset-0 ring-1 ring-champagne/60 pointer-events-none"
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                />
              )}
            </button>
          ))}
        </div>

        {/* Detail */}
        <div className="mt-16 grid lg:grid-cols-12 gap-10 lg:gap-14 items-stretch">
          {/* ============ Cinematic image gallery ============ */}
          <div className="lg:col-span-7 relative">
            <div className="relative cinema overflow-hidden shadow-deep h-[460px] md:h-[600px] bg-bordeaux-deep">
              <AnimatePresence custom={direction} mode="popLayout" initial={false}>
                <motion.img
                  key={room.id + '-' + photoIdx}
                  src={photos[photoIdx]}
                  alt={t(room.label)}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{
                    opacity: { duration: 0.9, ease: [0.22, 1, 0.36, 1] },
                    scale:   { duration: 1.4, ease: [0.22, 1, 0.36, 1] },
                    x:       { duration: 0.9, ease: [0.22, 1, 0.36, 1] },
                    filter:  { duration: 0.7, ease: [0.22, 1, 0.36, 1] }
                  }}
                  className="absolute inset-0 w-full h-full object-cover will-change-transform"
                />
              </AnimatePresence>

              {/* Cinematic overlays */}
              <div className="absolute inset-0 bg-gradient-to-t from-bordeaux-deep/75 via-bordeaux-deep/10 to-transparent pointer-events-none" />
              <div className="pointer-events-none absolute inset-3 border border-champagne/40" />

              {/* Top label */}
              <div className="absolute top-6 left-6 flex items-center gap-3 text-ivory">
                <span className="h-px w-8 bg-champagne" />
                <span className="font-heading uppercase tracking-[0.4em] text-[0.65rem] text-shimmer">
                  {t(room.tag)}
                </span>
              </div>

              {/* Bottom title + counter */}
              <div className="absolute bottom-20 left-6 right-6 flex items-end justify-between text-ivory">
                <h3 className="font-heading uppercase text-[clamp(1.4rem,2.6vw,2.4rem)] leading-tight max-w-md [text-shadow:0_3px_20px_rgba(0,0,0,0.6)]">
                  {t(room.headline)}
                </h3>
                <span className="hidden md:block font-heading text-shimmer text-[0.72rem] tracking-[0.4em] uppercase">
                  0{active + 1} / 0{ROOMS.length}
                </span>
              </div>

              {/* ====== Gallery navigation ====== */}
              <button
                onClick={goPrev}
                aria-label={t(UI.prev)}
                className="group absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center bg-ivory/10 backdrop-blur-md border border-ivory/30 text-ivory hover:bg-champagne hover:border-champagne hover:text-bordeaux-deep transition-all duration-500"
              >
                <span className="text-xl leading-none transition-transform duration-500 group-hover:-translate-x-0.5">‹</span>
              </button>
              <button
                onClick={goNext}
                aria-label={t(UI.next)}
                className="group absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center bg-ivory/10 backdrop-blur-md border border-ivory/30 text-ivory hover:bg-champagne hover:border-champagne hover:text-bordeaux-deep transition-all duration-500"
              >
                <span className="text-xl leading-none transition-transform duration-500 group-hover:translate-x-0.5">›</span>
              </button>

              {/* Photo index pill + progress */}
              <div className="absolute bottom-6 left-6 right-6 flex items-center gap-4 text-ivory">
                <span className="font-heading text-[0.7rem] tracking-[0.4em] text-champagne">
                  {String(photoIdx + 1).padStart(2,'0')}
                </span>
                <div className="flex-1 h-px bg-ivory/20 relative overflow-hidden">
                  <motion.span
                    key={room.id + '-bar-' + photoIdx}
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 5.4, ease: 'linear' }}
                    style={{ transformOrigin: 'left' }}
                    className="absolute inset-0 bg-gradient-to-r from-champagne to-ivory/80"
                  />
                </div>
                <span className="font-heading text-[0.7rem] tracking-[0.4em] text-ivory/80">
                  {String(photos.length).padStart(2,'0')}
                </span>
              </div>
            </div>

            {/* Thumbnail strip */}
            <div className="mt-4 grid gap-3" style={{ gridTemplateColumns: `repeat(${Math.min(photos.length, 7)}, minmax(0,1fr))` }}>
              {photos.slice(0, 7).map((src, i) => (
                <button
                  key={src + i}
                  onClick={() => { setDirection(i > photoIdx ? 1 : -1); setPhotoIdx(i); }}
                  aria-label={`Photo ${i + 1}`}
                  className={`relative cinema aspect-[4/3] overflow-hidden shadow-soft transition-all duration-500 ${
                    photoIdx === i ? 'ring-2 ring-champagne ring-offset-2 ring-offset-mist' : 'opacity-70 hover:opacity-100'
                  }`}
                >
                  <img src={src} alt="" className="w-full h-full object-cover" />
                  <div className={`absolute inset-0 transition-colors duration-500 ${
                    photoIdx === i ? 'bg-bordeaux/0' : 'bg-bordeaux/30 hover:bg-bordeaux/0'
                  }`} />
                </button>
              ))}
            </div>
          </div>

          {/* Description card */}
          <div className="lg:col-span-5 relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={room.id + '-desc'}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                className="h-full bg-ivory border border-champagne/40 p-8 md:p-12 relative shadow-soft flex flex-col"
              >
                {/* corner ornaments */}
                <span className="absolute top-3 left-3 w-3 h-3 border-t border-l border-bordeaux" />
                <span className="absolute top-3 right-3 w-3 h-3 border-t border-r border-bordeaux" />
                <span className="absolute bottom-3 left-3 w-3 h-3 border-b border-l border-bordeaux" />
                <span className="absolute bottom-3 right-3 w-3 h-3 border-b border-r border-bordeaux" />

                <p className="eyebrow">{t(room.tag)}</p>
                <h4 className="mt-4 font-heading uppercase text-bordeaux text-[clamp(1.4rem,2.4vw,2.2rem)] leading-tight">
                  {t(room.label)}
                </h4>
                <span className="hairline mt-5" />

                <p className="mt-6 font-display text-ink-soft leading-[1.85] text-[0.95rem]">
                  {t(room.description)}
                </p>

                <div className="mt-8">
                  <p className="eyebrow">{t(UI.amenities)}</p>
                  <ul className="mt-4 grid grid-cols-2 gap-x-6 gap-y-3 font-display text-[0.88rem] text-ink">
                    {t(room.amenities).map((a, i) => (
                      <motion.li
                        key={a + i}
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.45, delay: 0.05 * i }}
                        className="flex items-start gap-3"
                      >
                        <span className="mt-[6px] h-[5px] w-[5px] bg-champagne ring-2 ring-champagne/30 flex-shrink-0" />
                        <span>{a}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                <div className="mt-auto pt-10 flex items-center justify-between">
                  <a href="https://ahr-collections.hotelrunner.com/bv3/group-search" target="_blank" rel="noreferrer" className="btn-royal">
                    {t(UI.bookNow)} <span aria-hidden>→</span>
                  </a>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setActive((a) => (a - 1 + ROOMS.length) % ROOMS.length)}
                      aria-label={t(UI.prev)}
                      className="w-10 h-10 border border-bordeaux/40 text-bordeaux flex items-center justify-center hover:bg-bordeaux hover:text-ivory transition-colors"
                    >‹</button>
                    <button
                      onClick={() => setActive((a) => (a + 1) % ROOMS.length)}
                      aria-label={t(UI.next)}
                      className="w-10 h-10 border border-bordeaux/40 text-bordeaux flex items-center justify-center hover:bg-bordeaux hover:text-ivory transition-colors"
                    >›</button>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Marquee under */}
        <div className="mt-24 overflow-hidden border-y border-champagne/30 py-6">
          <div className="marquee text-bordeaux/70 font-heading uppercase tracking-[0.5em] text-[0.85rem]">
            {Array.from({ length: 2 }).flatMap((_, k) => ROOMS.map((r) => (
              <span key={r.id + k} className="flex items-center gap-8">
                <span>{t(r.label)}</span>
                <span className="text-champagne">✦</span>
              </span>
            )))}
          </div>
        </div>
      </div>
    </section>
  );
}
