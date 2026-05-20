import { motion } from 'framer-motion';
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
              className="w-full h-[480px] md:h-[620px] object-cover"
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
              className="w-full h-[480px] md:h-[620px] object-cover"
              loading="lazy"
              decoding="async"
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-ivory/90 via-ivory/25 to-transparent" />
          <div className="pointer-events-none absolute inset-3 border border-champagne/40" />

          <div className="absolute bottom-0 inset-x-0 p-8 md:p-12 flex flex-wrap items-end justify-between gap-6">
            <div className="max-w-2xl">
              <p
                className="font-heading uppercase tracking-[0.4em] text-[0.65rem]"
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
            <a href="https://ahr-collections.hotelrunner.com/bv3/group-search" target="_blank" rel="noreferrer" className="btn-royal">
              {t({ fr: 'Demander un devis', en: 'Request a quote' })}
            </a>
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
              className="w-full h-[420px] md:h-[560px] object-cover"
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
                className="font-heading uppercase tracking-[0.4em] text-[0.65rem]"
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

        {/* Photo strip */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-3">
          {BUSINESS.photos.slice(0, 8).map((p, i) => (
            <motion.div
              key={p + i}
              initial={{ opacity: 0, scale: 1.05 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.9, delay: 0.06 * i }}
              className="cinema relative aspect-[4/3] overflow-hidden shadow-soft"
            >
              <img src={p} alt="" className="w-full h-full object-cover" loading="lazy" />
              <div className="absolute inset-0 bg-bordeaux/30 opacity-0 hover:opacity-100 transition-opacity duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
