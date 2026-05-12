import { motion } from 'framer-motion';
import { useT } from '../contexts/LanguageContext.jsx';
import { HERO, UI } from '../data/content.js';

export default function Hero() {
  const t = useT();
  const titleLines = t(HERO.title).split('\n');

  return (
    <section id="home" className="relative h-screen min-h-[760px] w-full overflow-hidden bg-ink">

      {/* ── Video ── */}
      <video
        className="absolute inset-0 w-full h-full object-cover scale-105 will-change-transform"
        autoPlay muted loop playsInline preload="metadata"
        poster={HERO.videoPoster}
      >
        <source src={HERO.videoSrc} type="video/mp4" />
      </video>

      {/* ── Overlays ── */}
      <div className="absolute inset-0 bg-gradient-to-b from-bordeaux-deep/55 via-bordeaux-deep/35 to-bordeaux-deep/90" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(31,26,23,0.35)_0%,_rgba(31,26,23,0.85)_100%)]" />
      <div className="absolute inset-0 bg-noise opacity-15 mix-blend-overlay pointer-events-none" />

      {/* ── Top hairline ── */}
      <motion.div
        initial={{ opacity: 0, scaleX: 0 }}
        animate={{ opacity: 1, scaleX: 1 }}
        transition={{ duration: 1.6, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="absolute top-32 left-1/2 -translate-x-1/2 h-px w-40 bg-gradient-to-r from-transparent via-champagne to-transparent origin-center"
      />

      {/* ── Eyebrow — LEFT side, level with title, vertical label ── */}
      <motion.div
        initial={{ opacity: 0, x: -16 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.9, duration: 1 }}
        className="hidden md:flex absolute left-8 lg:left-12 top-[22%] -translate-y-1/2 flex-col items-center gap-3 z-20"
      >
        <span className="h-10 w-px bg-gradient-to-b from-transparent to-champagne/60" />
        <p
          className="font-heading uppercase text-ivory text-[0.62rem] tracking-[0.38em] whitespace-nowrap [text-shadow:0_2px_18px_rgba(0,0,0,0.7)]"
          style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
        >
          {t(HERO.eyebrow)}
        </p>
        <span className="h-10 w-px bg-gradient-to-b from-champagne/60 to-transparent" />
      </motion.div>

      {/* ── All content — fully centered ── */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center px-6 text-center">

        {/* Title — centered, reduced */}
        <h1 className="font-heading uppercase text-ivory leading-[1.05] tracking-tight [text-shadow:0_4px_30px_rgba(0,0,0,0.7)]">
          {titleLines.map((line, li) => (
            <span key={li} className="block overflow-hidden">
              <motion.span
                initial={{ y: '100%', opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1.2, delay: 1.1 + li * 0.25, ease: [0.22, 1, 0.36, 1] }}
                className="block text-[clamp(1.4rem,3.2vw,3rem)] font-heading"
              >
                {line}
              </motion.span>
            </span>
          ))}
        </h1>

        {/* Body prose — line-by-line cinematic reveal */}
        <div className="mt-10 max-w-2xl text-ivory font-display text-[1rem] md:text-[1.05rem] leading-[1.95] tracking-wide space-y-1 [text-shadow:0_2px_18px_rgba(0,0,0,0.6)]">
          {t(HERO.body).map((line, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, y: 14, filter: 'blur(10px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{ delay: 2.1 + i * 0.14, duration: 1.05, ease: [0.22, 1, 0.36, 1] }}
            >
              {line}
            </motion.p>
          ))}
        </div>

        {/* CTAs — centered */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 3.5, duration: 1 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="https://ahr-collections.hotelrunner.com/bv3/group-search"
            target="_blank" rel="noreferrer"
            className="btn-royal shadow-[0_20px_50px_-15px_rgba(0,0,0,0.7)]"
          >
            {t(UI.bookNow)} <span aria-hidden>→</span>
          </a>
          <a
            href="#rooms"
            className="btn-ghost !text-ivory !border-ivory bg-ivory/10 backdrop-blur-md hover:bg-ivory hover:!text-bordeaux"
          >
            {t(UI.discover)}
          </a>
        </motion.div>
      </div>

      {/* ── Scroll indicator ── */}
      <motion.a
        href="#signature"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 4.0, duration: 1 }}
        className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 text-ivory/80 hover:text-champagne transition-colors group"
      >
        <span className="font-heading uppercase tracking-[0.4em] text-[0.62rem]">{t(UI.scroll)}</span>
        <div className="relative h-12 w-px bg-ivory/40 overflow-hidden">
          <span className="absolute inset-x-0 top-0 h-4 bg-gradient-to-b from-champagne to-transparent animate-[floaty_2.4s_ease-in-out_infinite]" />
        </div>
      </motion.a>

      {/* ── Side meta ── */}
      <div className="hidden md:flex absolute left-8 bottom-10 flex-col items-start gap-3 text-ivory/60 font-heading text-[0.6rem] tracking-[0.4em] uppercase">
        <span>Kénitra · Maroc</span>
        <span className="h-8 w-px bg-ivory/30" />
      </div>
      <div className="hidden md:flex absolute right-8 bottom-10 flex-col items-end gap-3 text-ivory/60 font-heading text-[0.6rem] tracking-[0.4em] uppercase">
        <span>Five Stars · Signature</span>
        <span className="h-8 w-px bg-ivory/30" />
      </div>

    </section>
  );
}
