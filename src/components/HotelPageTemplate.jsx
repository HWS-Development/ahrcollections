import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import PageHero from './PageHero.jsx';
import SectionHeader from './SectionHeader.jsx';
import { useT } from '../contexts/LanguageContext.jsx';
import { BRAND, UI } from '../data/site.js';

/**
 * Generic hotel page used by Waves Aqua, Vitality Terminus and City Hôtel.
 * Each hotel passes its `data` object (hero / intro / features / gallery)
 * and a unique `accentTone` to vary the surface colors.
 *
 * accentTone:
 *   'aqua'   → cool ivory + soft teal accents
 *   'olive'  → warm ivory + olive overlay
 *   'sand'   → warm cream + champagne overlay
 */
export default function HotelPageTemplate({ data, accentTone = 'sand', name, otherHotels = [] }) {
  const t = useT();

  const tones = {
    aqua:  { intro: 'bg-ivory',     features: 'bg-mist',     gallery: 'bg-ivory-50', accent: 'from-[#dcefee] to-[#a3c8c4]' },
    olive: { intro: 'bg-ivory-50',  features: 'bg-mist',     gallery: 'bg-ivory',    accent: 'from-[#e3e3c8] to-[#a8a572]' },
    sand:  { intro: 'bg-ivory',     features: 'bg-mist',     gallery: 'bg-ivory-50', accent: 'from-[#f3e6c9] to-[#c9a766]' }
  };
  const tone = tones[accentTone] || tones.sand;

  return (
    <>
      <PageHero
        eyebrow={data.hero.eyebrow}
        title={data.hero.title}
        sub={data.hero.sub}
        videoSrc={data.hero.videoSrc}
        videoPoster={data.hero.videoPoster}
        secondaryHref="#intro"
      />

      {/* INTRO */}
      <section id="intro" className={`relative section-pad overflow-hidden ${tone.intro}`}>
        <div className="absolute inset-0 bg-champagne-radial pointer-events-none" />
        <div className="relative max-w-[1400px] mx-auto px-6 lg:px-12 grid lg:grid-cols-12 gap-14 items-center">
          <div className="lg:col-span-5">
            <SectionHeader
              alignLeft
              eyebrow={t(data.intro.eyebrow)}
              title={t(data.intro.title)}
            />
            <div className="mt-8 space-y-3 font-display text-ink-soft text-[1rem] leading-[1.95] max-w-lg">
              {t(data.intro.body).map((p, i) => (
                <motion.p
                  key={i}
                  initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.7, delay: 0.06 * i }}
                >
                  {p}
                </motion.p>
              ))}
            </div>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 60, scale: 1.04 }} whileInView={{ opacity: 1, y: 0, scale: 1 }} viewport={{ once: true }}
            transition={{ duration: 1.3, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7 relative"
          >
            <div className="cinema relative overflow-hidden shadow-deep">
              <img src={data.gallery[0]} alt={name} loading="eager" decoding="async" className="w-full h-[320px] sm:h-[440px] lg:h-[560px] object-cover" />
              <div className="pointer-events-none absolute inset-4 border border-champagne/40" />
              <div className={`absolute inset-0 bg-gradient-to-tr ${tone.accent} mix-blend-multiply opacity-15`} />
            </div>
            <div className="hidden md:flex absolute -bottom-7 -left-7 glass-panel px-7 py-5 shadow-soft items-center gap-4">
              <span className="font-heading text-shimmer text-2xl">{name}</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FEATURES */}
      <section className={`relative section-pad overflow-hidden ${tone.features}`}>
        <div className="absolute -top-32 right-0 w-[500px] h-[500px] bg-champagne/10 blur-3xl" />
        <div className="relative max-w-[1500px] mx-auto px-6 lg:px-12">
          <SectionHeader
            eyebrow={t({ fr: 'Expériences', en: 'Experiences' })}
            title={t({ fr: 'Quatre raisons d’y séjourner.', en: 'Four reasons to stay.' })}
          />
          <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {data.features.map((f, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 60, rotateX: -10 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 1, delay: 0.08 * i, ease: [0.22, 1, 0.36, 1] }}
                className="group relative bg-ivory border border-champagne/40 p-8 hover:border-bordeaux transition-colors duration-700 overflow-hidden"
                style={{ transformStyle: 'preserve-3d' }}
              >
                <span className="absolute inset-0 bg-gradient-to-br from-champagne/0 via-champagne/15 to-bordeaux/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <span className="absolute top-3 right-3 w-3 h-3 border-t border-r border-bordeaux/60" />
                <span className="font-heading text-shimmer text-3xl leading-none">{f.icon}</span>
                <h3 className="mt-5 font-heading uppercase text-bordeaux tracking-wider text-[0.95rem] leading-tight">{t(f.title)}</h3>
                <span className="block mt-4 h-px w-10 bg-champagne group-hover:w-20 transition-all duration-500" />
                <p className="mt-4 font-display text-ink-soft text-[0.92rem] leading-[1.75]">{t(f.desc)}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY mosaic */}
      <section className={`relative section-pad overflow-hidden ${tone.gallery}`}>
        <div className="relative max-w-[1600px] mx-auto px-6 lg:px-12">
          <SectionHeader
            eyebrow={t({ fr: 'Galerie', en: 'Gallery' })}
            title={t({ fr: 'Un avant-goût de l’expérience.', en: 'A taste of the experience.' })}
          />
          <div className="mt-10 md:mt-14 grid grid-cols-2 md:grid-cols-12 md:grid-rows-2 gap-3 md:gap-4 h-auto md:h-[760px]">
            <Tile src={data.gallery[1] || data.gallery[0]} className="col-span-2 md:col-span-7 md:row-span-2 h-64 md:h-auto" delay={0} />
            <Tile src={data.gallery[2] || data.gallery[0]} className="col-span-2 md:col-span-5 md:row-span-1 h-44 md:h-auto" delay={0.1} />
            <Tile src={data.gallery[3] || data.gallery[0]} className="col-span-1 md:col-span-3 md:row-span-1 h-32 md:h-auto" delay={0.15} />
            <Tile src={data.gallery[4] || data.gallery[0]} className="col-span-1 md:col-span-2 md:row-span-1 h-32 md:h-auto" delay={0.2} />
          </div>
          <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
            {data.gallery.slice(5, 9).map((src, i) => (
              <Tile key={src + i} src={src} className="aspect-[4/3]" delay={0.05 * i} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-28 bg-bordeaux text-ivory overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(201,167,102,0.2),_transparent_70%)]" />
        <motion.div
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="relative max-w-3xl mx-auto px-6 text-center"
        >
          <p className="font-heading uppercase tracking-[0.5em] text-[0.7rem] text-shimmer">{name}</p>
          <p className="mt-6 serif-flourish text-[clamp(1.6rem,3vw,2.4rem)] leading-snug text-ivory/95">
            {t({
              fr: 'Réservez l’expérience, vivez le souvenir.',
              en: 'Book the experience, live the memory.'
            })}
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a href={BRAND.bookingUrl} target="_blank" rel="noreferrer" className="btn-royal">{t(UI.bookNow)} <span aria-hidden>→</span></a>
            <Link to="/contact" className="btn-ghost text-ivory border-ivory/60 hover:bg-ivory hover:text-bordeaux">{t(UI.contactUs)}</Link>
          </div>
        </motion.div>
      </section>

      {/* OTHER HOTELS */}
      {otherHotels.length > 0 && (
        <section className="relative section-pad bg-ivory overflow-hidden">
          <SectionHeader
            eyebrow={t({ fr: 'Continuez l’exploration', en: 'Continue exploring' })}
            title={t({ fr: 'Les autres signatures AHR.', en: 'Other AHR signatures.' })}
          />
          <div className="mt-16 max-w-[1500px] mx-auto px-6 lg:px-12 grid md:grid-cols-3 gap-5">
            {otherHotels.map((h, i) => (
              <motion.div
                key={h.id}
                initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.9, delay: 0.08 * i }}
              >
                <Link to={h.to} className="group block cinema relative overflow-hidden shadow-soft h-72">
                  <img src={h.image} alt={h.name} className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-bordeaux-deep/85 via-bordeaux-deep/30 to-transparent" />
                  <div className="pointer-events-none absolute inset-3 border border-champagne/30 group-hover:border-champagne/70 transition-colors duration-700" />
                  <div className="absolute bottom-0 inset-x-0 p-6 text-ivory">
                    <p className="font-heading uppercase tracking-[0.35em] text-[0.6rem] text-shimmer">{t(h.eyebrow)}</p>
                    <h4 className="mt-2 font-heading uppercase text-[1.4rem] leading-tight">{h.name}</h4>
                    <span className="mt-3 inline-flex items-center gap-2 font-heading uppercase tracking-[0.3em] text-[0.6rem]">
                      {t(UI.view)} <span className="transition-transform duration-500 group-hover:translate-x-1.5">→</span>
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </section>
      )}
    </>
  );
}

function Tile({ src, className, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 1.04, y: 24 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 1.1, delay, ease: [0.22, 1, 0.36, 1] }}
      className={`cinema relative overflow-hidden shadow-soft ${className}`}
    >
      <img src={src} alt="" className="w-full h-full object-cover" loading="lazy" />
      <div className="absolute inset-0 bg-bordeaux/30 opacity-0 hover:opacity-60 transition-opacity duration-700" />
    </motion.div>
  );
}
