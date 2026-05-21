import { motion } from 'framer-motion';
import SectionHeader from '../components/SectionHeader.jsx';
import { useT } from '../contexts/LanguageContext.jsx';
import { OFFERS, BRAND, UI } from '../data/site.js';

export default function OffersPage() {
  const t = useT();

  return (
    <>
      {/* Hero */}
      <section className="relative pt-[140px] pb-20 bg-ivory overflow-hidden">
        <div className="absolute inset-0 bg-champagne-radial pointer-events-none" />
        <motion.div
          initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.1, delay: 0.3 }}
          className="relative max-w-4xl mx-auto px-6 text-center"
        >
          <span className="ornament eyebrow">{t(OFFERS.hero.eyebrow)}</span>
          <h1 className="mt-6 font-heading uppercase text-bordeaux text-[clamp(1.8rem,5vw,4.6rem)] leading-[1.04]">
            {t(OFFERS.hero.title)}
          </h1>
          <span className="block hairline mt-7 mx-auto" />
          <p className="mt-7 font-display text-ink-soft text-[1.05rem] leading-[1.85]">
            {t(OFFERS.hero.sub)}
          </p>
        </motion.div>
      </section>

      {/* Offers grid */}
      <section className="relative pb-32 bg-ivory">
        <div className="max-w-[1500px] mx-auto px-6 lg:px-12 grid md:grid-cols-2 gap-7">
          {OFFERS.list.map((o, i) => (
            <motion.article
              key={i}
              initial={{ opacity: 0, y: 50, rotateY: 6 }}
              whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 1, delay: 0.08 * i, ease: [0.22, 1, 0.36, 1] }}
              className="group relative bg-mist border border-champagne/40 overflow-hidden hover:border-bordeaux transition-colors duration-700"
              style={{ transformStyle: 'preserve-3d' }}
            >
              <div className="grid md:grid-cols-5">
                <div className="md:col-span-2 cinema relative overflow-hidden h-64 md:h-auto">
                  <img src={o.image} alt="" className="w-full h-full object-cover" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-bordeaux-deep/60 to-transparent" />
                  <div className="absolute top-4 left-4 px-3 py-1 bg-ivory/90 font-heading uppercase tracking-[0.3em] text-[0.6rem] text-bordeaux">
                    {t(o.tag)}
                  </div>
                </div>

                <div className="md:col-span-3 p-7 md:p-9 flex flex-col">
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="font-heading uppercase text-bordeaux text-[clamp(1.3rem,1.9vw,1.7rem)] leading-snug">
                      {t(o.title)}
                    </h3>
                    <span className="font-heading text-shimmer text-3xl leading-none">{o.perk}</span>
                  </div>
                  <span className="block mt-4 h-px w-10 bg-champagne group-hover:w-24 transition-all duration-500" />
                  <p className="mt-5 font-display text-ink-soft leading-[1.85] text-[0.95rem]">
                    {t(o.desc)}
                  </p>
                  <p className="mt-auto pt-6 font-heading uppercase tracking-[0.28em] text-[0.6rem] text-ink-soft/70">
                    {t(o.conditions)}
                  </p>
                  <a href={BRAND.bookingUrl} target="_blank" rel="noreferrer" className="btn-royal mt-6 self-start">
                    {t(UI.bookNow)} <span aria-hidden>→</span>
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      {/* Bespoke note */}
      <section className="relative py-24 bg-bordeaux text-ivory overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(201,167,102,0.18),_transparent_70%)]" />
        <motion.div
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="relative max-w-3xl mx-auto px-6 text-center"
        >
          <p className="font-heading uppercase tracking-[0.4em] text-[0.7rem] text-shimmer">
            {t({ fr: 'Sur-mesure', en: 'Bespoke' })}
          </p>
          <p className="mt-6 serif-flourish text-[clamp(1.6rem,3vw,2.4rem)] leading-snug text-ivory/95">
            {t({
              fr: 'Une demande particulière ? Notre équipe compose votre séjour, à votre image.',
              en: 'A specific request? Our team will craft your stay, in your image.'
            })}
          </p>
          <a href={`mailto:${BRAND.email}`} className="btn-ghost mt-10 border-ivory/60 hover:bg-ivory hover:text-bordeaux">
            {t(UI.contactUs)}
          </a>
        </motion.div>
      </section>
    </>
  );
}
