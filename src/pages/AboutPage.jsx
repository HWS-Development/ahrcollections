import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero.jsx';
import SectionHeader from '../components/SectionHeader.jsx';
import { useT } from '../contexts/LanguageContext.jsx';
import { ABOUT, UI } from '../data/site.js';

export default function AboutPage() {
  const t = useT();

  return (
    <>
      <PageHero
        eyebrow={ABOUT.hero.eyebrow}
        title={ABOUT.hero.title}
        image={ABOUT.hero.image}
        secondaryHref="#story"
        minimal
      />

      {/* STORY */}
      <section id="story" className="relative section-pad bg-ivory overflow-hidden">
        <div className="absolute inset-0 bg-champagne-radial pointer-events-none" />
        <div className="relative max-w-[1400px] mx-auto px-6 lg:px-12 grid lg:grid-cols-12 gap-14 items-center">
          {/* image */}
          <motion.div
            initial={{ opacity: 0, scale: 1.04 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}
            transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-6 cinema relative overflow-hidden shadow-deep"
          >
            <img src="/img/about/general/DSC01282.webp"
              alt="" loading="lazy" decoding="async" className="w-full h-[360px] sm:h-[480px] lg:h-[620px] object-cover" />
            <div className="pointer-events-none absolute inset-3 border border-champagne/40" />
            <div className="absolute inset-0 bg-bordeaux-veil" />
          </motion.div>

          {/* text */}
          <div className="lg:col-span-6">
            <SectionHeader
              alignLeft
              eyebrow={t(ABOUT.story.eyebrow)}
              title={t(ABOUT.story.title)}
            />
            <div className="mt-8 space-y-4 font-display text-ink-soft leading-[1.95] text-[1rem] max-w-xl">
              {t(ABOUT.story.body).map((p, i) => (
                <motion.p
                  key={i}
                  initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.7, delay: 0.08 * i }}
                >
                  {p}
                </motion.p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* QUOTE */}
      <section className="relative py-24 bg-bordeaux text-ivory overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(201,167,102,0.18),_transparent_70%)]" />
        <motion.blockquote
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          transition={{ duration: 1.1 }}
          className="relative max-w-4xl mx-auto px-6 text-center"
        >
          <span className="font-heading text-shimmer text-6xl leading-none block mb-6">«</span>
          <p className="serif-flourish text-[clamp(1.6rem,3vw,2.6rem)] leading-snug text-ivory/95">
            {t(ABOUT.quote)}
          </p>
        </motion.blockquote>
      </section>

      {/* VALUES — alternating image/text */}
      <section className="relative section-pad bg-ivory-50 overflow-hidden">
        <div className="relative max-w-[1500px] mx-auto px-6 lg:px-12">
          <SectionHeader
            eyebrow={t({ fr: 'Nos Valeurs', en: 'Our Values' })}
            title={t({ fr: 'Quatre convictions, tenues chaque jour.', en: 'Four convictions, kept every day.' })}
          />

          <div className="mt-12 sm:mt-20 space-y-14 lg:space-y-24">
            {ABOUT.values.map((v, i) => {
              const reverse = i % 2 === 1;
              return (
                <div key={v.num} className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
                  <motion.div
                    initial={{ opacity: 0, x: reverse ? 60 : -60 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                    className={`lg:col-span-7 ${reverse ? 'lg:order-2' : ''}`}
                  >
                    <div className="cinema relative overflow-hidden shadow-deep">
                      <img src={v.image} alt="" loading="lazy" decoding="async" className="w-full h-[300px] sm:h-[400px] lg:h-[460px] object-cover" />
                      <div className="pointer-events-none absolute inset-3 border border-champagne/40" />
                      <div className="absolute top-5 left-5 font-heading text-shimmer text-3xl">{v.num}</div>
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.15 }}
                    className="lg:col-span-5"
                  >
                    <span className="eyebrow">{v.num} · {t({ fr: 'Valeur', en: 'Value' })}</span>
                    <h3 className="mt-3 font-heading uppercase text-bordeaux text-[clamp(1.6rem,2.6vw,2.4rem)] leading-tight">{t(v.title)}</h3>
                    <span className="block hairline mt-5" />
                    <p className="mt-6 font-display text-ink-soft text-[1rem] leading-[1.85]">{t(v.desc)}</p>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* LOCATION — Ville Connectée */}
      <section className="relative section-pad bg-ivory overflow-hidden">
        <div className="absolute inset-0 bg-champagne-radial pointer-events-none" />
        <div className="relative max-w-[1400px] mx-auto px-6 lg:px-12">
          <SectionHeader
            eyebrow={t(ABOUT.location.eyebrow)}
            title={t(ABOUT.location.title)}
            sub={t(ABOUT.location.intro)}
          />
          <div className="mt-12 sm:mt-16 grid md:grid-cols-3 gap-5 lg:gap-7">
            {ABOUT.location.points.map((p, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.9, delay: 0.1 * i, ease: [0.22, 1, 0.36, 1] }}
                className="group relative bg-ivory-50 border border-champagne/40 p-8 overflow-hidden hover:border-bordeaux transition-colors duration-700"
              >
                <span className="absolute inset-0 bg-gradient-to-br from-champagne/0 via-champagne/15 to-bordeaux/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <span className="absolute top-3 left-3 w-3 h-3 border-t border-l border-bordeaux/60" />
                <span className="absolute bottom-3 right-3 w-3 h-3 border-b border-r border-bordeaux/60" />
                <p className="font-heading text-shimmer text-3xl">{p.icon}</p>
                <h3 className="mt-5 font-heading uppercase text-bordeaux tracking-wider text-[0.95rem] leading-tight">{t(p.title)}</h3>
                <span className="block mt-4 h-px w-10 bg-champagne group-hover:w-20 transition-all duration-500" />
                <p className="mt-4 font-display text-ink-soft text-[0.92rem] leading-[1.75]">{t(p.desc)}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* MISSION — titled block */}
      <section className="relative py-24 sm:py-28 bg-mist overflow-hidden">
        <div className="absolute -top-32 right-0 w-[480px] h-[480px] bg-champagne/10 blur-3xl pointer-events-none" />
        <motion.div
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
          className="relative max-w-3xl mx-auto px-6 text-center"
        >
          <span className="ornament eyebrow">{t(ABOUT.mission.eyebrow)}</span>
          <h2 className="mt-6 font-heading uppercase text-bordeaux text-[clamp(1.8rem,3vw,2.8rem)] leading-tight">
            {t(ABOUT.mission.title)}
          </h2>
          <span className="block hairline mx-auto mt-6" />
          <p className="mt-8 font-display text-ink-soft text-[1.02rem] leading-[1.9] max-w-2xl mx-auto">
            {t(ABOUT.mission.body)}
          </p>
        </motion.div>
      </section>

      {/* WHY CHOOSE — 4 numbered cards */}
      <section className="relative section-pad bg-ivory-50 overflow-hidden">
        <div className="absolute -top-32 left-0 w-[480px] h-[480px] bg-bordeaux/5 blur-3xl pointer-events-none" />
        <div className="relative max-w-[1500px] mx-auto px-6 lg:px-12">
          <SectionHeader
            eyebrow={t(ABOUT.whyChoose.eyebrow)}
            title={t(ABOUT.whyChoose.title)}
          />
          <div className="mt-12 sm:mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
            {ABOUT.whyChoose.points.map((p, i) => (
              <motion.div
                key={p.num}
                initial={{ opacity: 0, y: 50, rotateX: -12 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 1, delay: 0.1 * i, ease: [0.22, 1, 0.36, 1] }}
                className="group relative bg-ivory border border-champagne/40 p-8 overflow-hidden hover:border-bordeaux transition-colors duration-700"
                style={{ transformStyle: 'preserve-3d' }}
              >
                <span className="absolute inset-0 bg-gradient-to-br from-champagne/0 via-champagne/15 to-bordeaux/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <span className="absolute top-3 left-3 w-3 h-3 border-t border-l border-bordeaux/60" />
                <span className="absolute bottom-3 right-3 w-3 h-3 border-b border-r border-bordeaux/60" />
                <p className="font-heading text-shimmer text-3xl">{p.num}</p>
                <h3 className="mt-5 font-heading uppercase text-bordeaux tracking-wider text-[0.95rem] leading-tight">{t(p.title)}</h3>
                <span className="block mt-4 h-px w-10 bg-champagne group-hover:w-20 transition-all duration-500" />
                <p className="mt-4 font-display text-ink-soft text-[0.92rem] leading-[1.75]">{t(p.desc)}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-28 bg-mist overflow-hidden">
        <div className="absolute inset-0 bg-champagne-radial" />
        <div className="relative max-w-3xl mx-auto px-6 text-center">
          <p className="serif-flourish text-bordeaux text-[clamp(1.8rem,3vw,2.6rem)] leading-snug">
            {t({ fr: 'Découvrez nos quatre signatures.', en: 'Discover our four signatures.' })}
          </p>
          <div className="mt-10 flex justify-center flex-wrap gap-4">
            <Link to="/collection" className="btn-royal">{t(UI.explore)} <span aria-hidden>→</span></Link>
            <Link to="/contact" className="btn-ghost">{t(UI.contactUs)}</Link>
          </div>
        </div>
      </section>
    </>
  );
}
