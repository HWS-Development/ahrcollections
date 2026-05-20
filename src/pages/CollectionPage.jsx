import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import SectionHeader from '../components/SectionHeader.jsx';
import { useT } from '../contexts/LanguageContext.jsx';
import { COLLECTION, HOTELS, UI } from '../data/site.js';

export default function CollectionPage() {
  const t = useT();

  return (
    <>
      {/* Editorial split hero */}
      <section className="relative pt-[140px] pb-20 bg-ivory overflow-hidden">
        <div className="absolute inset-0 bg-champagne-radial pointer-events-none" />
        <div className="relative max-w-[1500px] mx-auto px-6 lg:px-12 grid lg:grid-cols-12 gap-12 items-end">
          <motion.div
            initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.1, delay: 0.3 }}
            className="lg:col-span-7"
          >
            <span className="ornament eyebrow">{t(COLLECTION.hero.eyebrow)}</span>
            <h1 className="mt-6 font-heading uppercase text-bordeaux text-[clamp(1.8rem,6vw,5.6rem)] leading-[1.02]">
              {t(COLLECTION.hero.title)}
            </h1>
            <span className="block hairline mt-7" />
            <p className="mt-7 font-display text-ink-soft text-[1.05rem] leading-[1.85] max-w-xl">
              {t(COLLECTION.hero.sub)}
            </p>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.1, delay: 0.5 }}
            className="lg:col-span-5 serif-flourish text-bordeaux/80 text-[clamp(1.4rem,2.2vw,2rem)] leading-snug"
          >
            {t(COLLECTION.intro)}
          </motion.p>
        </div>
      </section>

      {/* Featured hotel — large editorial */}
      {HOTELS.map((h, i) => {
        const reverse = i % 2 === 1;
        return (
          <section key={h.id} className={`relative section-pad overflow-hidden ${i % 2 === 0 ? 'bg-mist' : 'bg-ivory'}`}>
            <div className="relative max-w-[1600px] mx-auto px-6 lg:px-12 grid lg:grid-cols-12 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: reverse ? 70 : -70, scale: 1.04 }}
                whileInView={{ opacity: 1, x: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 1.3, ease: [0.22, 1, 0.36, 1] }}
                className={`lg:col-span-7 ${reverse ? 'lg:order-2' : ''}`}
              >
                <div className="cinema relative overflow-hidden shadow-deep">
                  <img src={h.image} alt={h.name} loading="lazy" decoding="async" className="w-full h-[340px] sm:h-[460px] lg:h-[560px] object-cover" />
                  <div className="absolute inset-0 bg-bordeaux-veil" />
                  <div className="pointer-events-none absolute inset-4 border border-champagne/40" />
                  <div className="absolute top-6 left-6 font-heading text-shimmer text-2xl">0{i+1}</div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.2 }}
                className={`lg:col-span-5 ${reverse ? 'lg:order-1' : ''}`}
              >
                <span className="eyebrow">{t(h.eyebrow)}</span>
                <h2 className="mt-4 font-heading uppercase text-bordeaux text-[clamp(2rem,3.6vw,3.2rem)] leading-[1.05]">
                  {h.name}
                </h2>
                <span className="block hairline mt-6" />
                <p className="mt-7 font-display text-ink-soft text-[1.02rem] leading-[1.95] max-w-lg">
                  {t(h.short)}
                </p>
                <Link to={h.to} className="btn-royal mt-10">
                  {t(UI.view)} <span aria-hidden>→</span>
                </Link>
              </motion.div>
            </div>
          </section>
        );
      })}

      {/* Marquee */}
      <section className="relative py-10 bg-bordeaux text-ivory overflow-hidden">
        <div className="marquee font-heading uppercase tracking-[0.5em] text-[0.85rem]">
          {Array.from({ length: 2 }).flatMap((_, k) => HOTELS.map((h) => (
            <span key={h.id + k} className="flex items-center gap-8">
              <span>{h.name}</span>
              <span className="text-champagne">✦</span>
            </span>
          )))}
        </div>
      </section>
    </>
  );
}
