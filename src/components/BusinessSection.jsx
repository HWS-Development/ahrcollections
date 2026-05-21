import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useT } from '../contexts/LanguageContext.jsx';
import { BUSINESS } from '../data/content.js';

export default function BusinessSection() {
  const t = useT();

  return (
    <section id="business" className="relative section-pad overflow-hidden bg-gradient-to-b from-ivory via-ivory-50 to-mist">
      <div className="relative max-w-[1500px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="grid lg:grid-cols-12 gap-12 items-end">
          <div className="lg:col-span-6">
            <span className="ornament eyebrow">{t(BUSINESS.eyebrow)}</span>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
              className="mt-6 font-heading uppercase text-bordeaux text-[clamp(2rem,4.6vw,4rem)] leading-[1.02]"
            >
              {t(BUSINESS.title)}
            </motion.h2>
            <span className="hairline mt-7" />
          </div>
          <div className="lg:col-span-6">
            <div className="space-y-1.5 font-display text-ink-soft leading-[1.95] text-[0.98rem] max-w-xl">
              {t(BUSINESS.body).map((line, i) => (
                <motion.p
                  key={i}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.6, delay: 0.05 * i }}
                >
                  {line}
                </motion.p>
              ))}
            </div>
          </div>
        </div>

        {/* Featured video */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative mt-16 cinema overflow-hidden shadow-deep"
        >
          {BUSINESS.videoSrc ? (
            <video
              className="w-full h-[280px] sm:h-[400px] md:h-[620px] object-cover"
              src={BUSINESS.videoSrc}
              poster={BUSINESS.videoPoster}
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
            />
          ) : (
            <img
              src={BUSINESS.videoPoster || BUSINESS.photos?.[0]}
              alt="Business Forum"
              className="w-full h-[280px] sm:h-[400px] md:h-[620px] object-cover"
              loading="lazy"
              decoding="async"
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-ivory/90 via-ivory/25 to-transparent" />
          <div className="pointer-events-none absolute inset-3 border border-champagne/40" />

          <div className="absolute bottom-0 inset-x-0 p-8 md:p-12 flex flex-wrap items-end justify-between gap-6">
            <div className="max-w-2xl">
              <p
                className="font-heading uppercase tracking-[0.25em] sm:tracking-[0.4em] text-[0.6rem] sm:text-[0.65rem]"
                style={{ color: '#5E1A24' }}
              >
                {t({ fr: 'Espaces de réunion · 10–250 invités', en: 'Meeting Spaces · 10–250 guests' })}
              </p>
              <h3
                className="mt-3 font-heading uppercase text-[clamp(1.4rem,2.8vw,2.4rem)] leading-tight"
                style={{ color: '#5E1A24' }}
              >
                {t({
                  fr: 'Vos rencontres méritent un cadre à leur hauteur.',
                  en: 'Your meetings deserve a setting worthy of them.'
                })}
              </h3>
            </div>
            <Link to="/contact" className="btn-royal">
              {t({ fr: 'Demander un devis', en: 'Request a quote' })}
            </Link>
          </div>
        </motion.div>

        {/* Ballroom video */}
        {BUSINESS.ballroomVideoSrc && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="relative mt-10 cinema overflow-hidden shadow-deep"
          >
            <video
              className="w-full h-[260px] sm:h-[380px] md:h-[560px] object-cover"
              src={BUSINESS.ballroomVideoSrc}
              poster={BUSINESS.ballroomVideoPoster}
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ivory/90 via-ivory/25 to-transparent" />
            <div className="pointer-events-none absolute inset-3 border border-champagne/40" />
            <div className="absolute bottom-0 inset-x-0 p-8 md:p-12">
              <p
                className="font-heading uppercase tracking-[0.25em] sm:tracking-[0.4em] text-[0.6rem] sm:text-[0.65rem]"
                style={{ color: '#5E1A24' }}
              >
                {t(BUSINESS.ballroomEyebrow)}
              </p>
              <h3
                className="mt-3 font-heading uppercase text-[clamp(1.4rem,2.8vw,2.4rem)] leading-tight max-w-2xl"
                style={{ color: '#5E1A24' }}
              >
                {t(BUSINESS.ballroomTitle)}
              </h3>
            </div>
          </motion.div>
        )}

        {/* Stats strip */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { v: '6', l: { fr: 'Salles modulables', en: 'Modular rooms' } },
            { v: '250', l: { fr: 'Invités max.', en: 'Max guests' } },
            { v: '24/7', l: { fr: 'Concierge dédié', en: 'Dedicated concierge' } },
            { v: 'HD', l: { fr: 'Audio · Vidéo', en: 'Audio · Video' } }
          ].map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.08 * i }}
              className="bg-ivory border border-champagne/40 p-6 text-center hover:border-bordeaux transition-colors"
            >
              <p className="font-heading text-shimmer text-4xl">{s.v}</p>
              <p className="mt-2 font-heading uppercase tracking-[0.3em] text-[0.62rem] text-ink-soft">{t(s.l)}</p>
            </motion.div>
          ))}
        </div>

        {/* ── Curated photo grid — 4 best, asymmetric editorial layout ── */}
        <div className="mt-16 grid grid-cols-12 gap-3 lg:gap-4 auto-rows-[minmax(180px,1fr)]">
          {/* Large hero — left, 2 rows tall */}
          <motion.div
            initial={{ opacity: 0, scale: 1.06 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
            className="relative col-span-12 sm:col-span-7 row-span-2 cinema overflow-hidden shadow-deep group"
          >
            <img src={BUSINESS.photos[0]} alt="" loading="lazy" className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1400ms] group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-bordeaux/55 via-transparent to-transparent" />
            <div className="pointer-events-none absolute inset-3 border border-champagne/40" />
            <span className="absolute top-5 left-5 w-7 h-7 border-t-2 border-l-2 border-champagne/70 pointer-events-none" />
            <span className="absolute bottom-5 right-5 w-7 h-7 border-b-2 border-r-2 border-champagne/70 pointer-events-none" />
          </motion.div>

          {/* Top right — tall vertical */}
          <motion.div
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1, delay: 0.1 }}
            className="relative col-span-6 sm:col-span-5 row-span-1 cinema overflow-hidden shadow-soft group"
          >
            <img src={BUSINESS.photos[1]} alt="" loading="lazy" className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1200ms] group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-tr from-ink/40 via-transparent to-transparent" />
            <div className="pointer-events-none absolute inset-2 border border-champagne/30" />
          </motion.div>

          {/* Bottom right — square */}
          <motion.div
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative col-span-6 sm:col-span-5 row-span-1 cinema overflow-hidden shadow-soft group"
          >
            <img src={BUSINESS.photos[3]} alt="" loading="lazy" className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1200ms] group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-bl from-bordeaux/35 via-transparent to-transparent" />
            <div className="pointer-events-none absolute inset-2 border border-champagne/30" />
          </motion.div>

          {/* Wide bottom — full width */}
          <motion.div
            initial={{ opacity: 0, scale: 1.04 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1.1, delay: 0.3 }}
            className="relative col-span-12 row-span-1 cinema overflow-hidden shadow-deep group h-[220px] sm:h-[280px]"
          >
            <img src={BUSINESS.photos[5]} alt="" loading="lazy" className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1400ms] group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-r from-bordeaux/50 via-transparent to-bordeaux/20" />
            <div className="pointer-events-none absolute inset-3 border border-champagne/40" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
