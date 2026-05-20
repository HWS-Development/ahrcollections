import { motion } from 'framer-motion';
import { useT } from '../contexts/LanguageContext.jsx';
import { UI, BRAND } from '../data/site.js';

/**
 * Cinematic full-screen hero used by every hotel/page.
 * Props: { eyebrow, title, sub, videoSrc, videoPoster, accent='bordeaux', children }
 */
export default function PageHero({ eyebrow, title, sub, videoSrc, videoPoster, image, logo, accent = 'bordeaux', minimal = false, ctaTo, ctaLabel, secondaryHref = '#below' }) {
  const t = useT();
  const titleLines = (typeof title === 'string' ? title : t(title)).split('\n');

  return (
    <section className="relative h-screen min-h-[560px] md:min-h-[680px] w-full overflow-hidden bg-ink">
      {videoSrc ? (
        <video
          className="absolute inset-0 w-full h-full object-cover scale-105"
          autoPlay muted loop playsInline preload="metadata"
          poster={videoPoster || image}
        >
          <source src={videoSrc} type="video/mp4" />
        </video>
      ) : (
        <img src={image || videoPoster} alt="" loading="eager" decoding="async" className="absolute inset-0 w-full h-full object-cover scale-105 animate-slowZoom" />
      )}

      {/* Cinematic overlays — strengthened for legibility */}
      <div className="absolute inset-0 bg-gradient-to-b from-bordeaux-deep/55 via-bordeaux-deep/35 to-bordeaux-deep/95" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(31,26,23,0.35)_0%,_rgba(31,26,23,0.85)_100%)]" />
      <div className="absolute inset-0 bg-noise opacity-12 mix-blend-overlay pointer-events-none" />

      {/* Top hairline */}
      <motion.div
        initial={{ opacity: 0, scaleX: 0 }}
        animate={{ opacity: 1, scaleX: 1 }}
        transition={{ duration: 1.4, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="absolute top-32 left-1/2 -translate-x-1/2 h-px w-40 bg-gradient-to-r from-transparent via-champagne to-transparent"
      />

      {/* Eyebrow */}
      {eyebrow && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.9 }}
          className="absolute top-36 sm:top-40 inset-x-0 px-6 font-heading uppercase tracking-[0.22em] sm:tracking-[0.4em] md:tracking-[0.5em] text-[0.55rem] sm:text-[0.65rem] md:text-[0.7rem] text-shimmer text-center break-words"
        >
          {typeof eyebrow === 'string' ? eyebrow : t(eyebrow)}
        </motion.p>
      )}

      {/* Title + sub */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center px-6 pb-20 sm:pb-24 md:pb-28 lg:pb-32 text-center">
        {logo && (
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
            className="mb-4 sm:mb-6 md:mb-8 inline-flex items-center justify-center"
          >
            <img
              src={logo}
              alt=""
              className="h-16 sm:h-24 md:h-32 lg:h-40 w-auto drop-shadow-[0_10px_40px_rgba(0,0,0,0.75)]"
              draggable={false}
            />
          </motion.div>
        )}
        <h1 className="font-heading uppercase text-ivory leading-[0.95] [text-shadow:0_4px_30px_rgba(0,0,0,0.75)]">
          {titleLines.map((line, li) => (
            <span key={li} className="block overflow-hidden">
              <motion.span
                initial={{ y: '100%', opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1.1, delay: 1 + li * 0.22, ease: [0.22, 1, 0.36, 1] }}
                className={`block font-heading ${minimal ? 'text-[clamp(0.85rem,1.7vw,1.6rem)]' : 'text-[clamp(1rem,2.1vw,2rem)]'}`}
              >
                {line}
              </motion.span>
            </span>
          ))}
        </h1>

        {sub && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.8, duration: 1 }}
            className="mt-5 sm:mt-7 md:mt-8 max-w-2xl text-ivory font-display text-[0.85rem] sm:text-[0.95rem] md:text-[1.05rem] leading-[1.6] sm:leading-[1.75] md:leading-[1.85] tracking-wide [text-shadow:0_2px_18px_rgba(0,0,0,0.6)]"
          >
            {typeof sub === 'string' ? sub : t(sub)}
          </motion.p>
        )}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.2, duration: 0.9 }}
          className="mt-6 sm:mt-8 md:mt-10 flex flex-wrap items-center justify-center gap-3 sm:gap-4"
        >
          <a href={BRAND.bookingUrl} target="_blank" rel="noreferrer" className="btn-royal shadow-[0_20px_50px_-15px_rgba(0,0,0,0.7)]">
            {t(UI.bookNow)} <span aria-hidden>→</span>
          </a>
          <a href={secondaryHref} className="btn-ghost !text-ivory !border-ivory bg-ivory/10 backdrop-blur-md hover:bg-ivory hover:!text-bordeaux">
            {t(UI.discover)}
          </a>
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.a
        href={secondaryHref}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.6, duration: 1 }}
        className="hidden md:flex absolute bottom-6 left-1/2 -translate-x-1/2 flex-col items-center gap-3 text-ivory/80 hover:text-champagne transition-colors"
      >
        <span className="font-heading uppercase tracking-[0.4em] text-[0.62rem]">{t(UI.scroll)}</span>
        <div className="relative h-12 w-px bg-ivory/40 overflow-hidden">
          <span className="absolute inset-x-0 top-0 h-4 bg-gradient-to-b from-champagne to-transparent animate-[floaty_2.4s_ease-in-out_infinite]" />
        </div>
      </motion.a>
    </section>
  );
}
