import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero.jsx';
import SectionHeader from '../components/SectionHeader.jsx';
import { useT } from '../contexts/LanguageContext.jsx';
import { HOME, HOTELS, BRAND, UI } from '../data/site.js';

export default function HomePage() {
  const t = useT();

  return (
    <>
      <PageHero
        eyebrow={HOME.hero.eyebrow}
        title={HOME.hero.title}
        sub={HOME.hero.sub}
        videoSrc={HOME.hero.videoSrc}
        videoPoster={HOME.hero.videoPoster}
        secondaryHref="#intro"
        noLift
      />

      {/* INTRO */}
      <section id="intro" className="relative section-pad bg-ivory overflow-hidden">
        <div className="absolute inset-0 bg-champagne-radial pointer-events-none" />
        <div className="relative max-w-[1400px] mx-auto px-6 lg:px-12 grid lg:grid-cols-12 gap-14 items-center">
          <div className="lg:col-span-5">
            <SectionHeader
              alignLeft
              eyebrow={t(HOME.intro.eyebrow)}
              title={t(HOME.intro.title)}
            />
            <motion.p
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ duration: 0.9, delay: 0.2 }}
              className="mt-8 font-display text-ink-soft text-[1rem] leading-[1.95] max-w-lg"
            >
              {t(HOME.intro.body)}
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 60 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            transition={{ duration: 1.3, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7 relative"
          >
            {/* 4-rooms collage — one signature room per hotel */}
            <div className="grid grid-cols-2 gap-3 lg:gap-4">
              {[
                { to: '/plaza',     img: '/img/royal/executive/DSC07000.webp',           label: 'Royal Plaza' },
                { to: '/aqua', img: '/img/aqua/suites/DSC00483.webp',             label: 'Waves Aqua' },
                { to: '/vitality', img: '/img/vitality/suite-prestige/photos__2062.webp', label: 'Vitality' },
                { to: '/city', img: '/img/city/rooms/DSC08025.webp',               label: 'Waves City' },
              ].map((tile, i) => (
                <motion.div
                  key={tile.to}
                  initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                  transition={{ duration: 0.9, delay: 0.08 * i, ease: [0.22, 1, 0.36, 1] }}
                >
                  <Link to={tile.to} className="group cinema relative overflow-hidden shadow-soft block h-[260px] md:h-[300px]">
                    <img src={tile.img} alt={tile.label} loading="lazy" decoding="async"
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1.4s] ease-out group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-bordeaux-deep/85 via-bordeaux-deep/15 to-transparent" />
                    <div className="pointer-events-none absolute inset-2 border border-champagne/30 group-hover:border-champagne/70 transition-colors duration-700" />
                    <div className="absolute bottom-0 inset-x-0 p-4 md:p-5 text-ivory">
                      <p className="font-heading uppercase tracking-[0.32em] text-[0.62rem] text-shimmer">0{i+1}</p>
                      <h4 className="mt-1 font-heading uppercase text-[0.95rem] md:text-[1.05rem] leading-tight">{tile.label}</h4>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* Floating stat */}
            <div className="hidden md:flex absolute -top-8 -left-8 glass-panel px-7 py-5 shadow-soft items-center gap-4 z-10">
              <span className="font-heading text-shimmer text-3xl">04</span>
              <div>
                <p className="eyebrow !tracking-[0.32em]">{t({ fr: 'Adresses', en: 'Addresses' })}</p>
                <p className="font-display text-ink text-[0.85rem]">Kénitra · {t(BRAND.country)}</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* PILLARS */}
      <section className="relative section-pad bg-mist overflow-hidden">
        <div className="absolute -top-32 right-0 w-[480px] h-[480px] bg-champagne/10 blur-3xl" />
        <div className="relative max-w-[1500px] mx-auto px-6 lg:px-12">
          <SectionHeader
            eyebrow={t({ fr: 'Nos Piliers', en: 'Our Pillars' })}
            title={t({ fr: 'Quatre principes, mille attentions.', en: 'Four principles, a thousand attentions.' })}
          />
          <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
            {HOME.pillars.map((p, i) => (
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

      {/* COLLECTION SHOWCASE */}
      <section className="relative section-pad bg-ivory-50 overflow-hidden">
        <div className="relative max-w-[1600px] mx-auto px-6 lg:px-12">
          <SectionHeader
            eyebrow={t({ fr: 'Notre Collection', en: 'Our Collection' })}
            title={t({ fr: 'Choisissez votre univers.', en: 'Choose your universe.' })}
            sub={t({
              fr: 'Quatre maisons, quatre rythmes — une seule signature.',
              en: 'Four houses, four rhythms — one signature.'
            })}
          />

          <div className="mt-16 grid md:grid-cols-2 gap-5 lg:gap-7">
            {HOTELS.map((h, i) => (
              <motion.div
                key={h.id}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 1.1, delay: 0.1 * (i % 2), ease: [0.22, 1, 0.36, 1] }}
              >
                <Link to={h.to} className="group block cinema relative overflow-hidden shadow-soft h-[340px] md:h-[460px]">
                  <img src={h.image} alt={h.name} className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-bordeaux-deep/85 via-bordeaux-deep/30 to-transparent" />
                  <div className="pointer-events-none absolute inset-4 border border-champagne/30 group-hover:border-champagne/70 transition-colors duration-700" />

                  <div className="absolute top-6 left-6 right-6 flex items-center justify-between text-ivory">
                    <span className="font-heading uppercase tracking-[0.4em] text-[0.62rem] text-shimmer">{t(h.eyebrow)}</span>
                    <span className="font-heading uppercase tracking-[0.3em] text-[0.62rem] text-ivory/70">0{i+1} / 0{HOTELS.length}</span>
                  </div>

                  <div className="absolute bottom-0 inset-x-0 p-7 md:p-9 text-ivory">
                    <h3 className="font-heading uppercase text-[clamp(1.6rem,2.6vw,2.4rem)] leading-tight">{h.name}</h3>
                    <span className="block mt-3 h-px w-12 bg-champagne group-hover:w-28 transition-all duration-700" />
                    <p className="mt-4 font-display text-ivory/85 max-w-md text-[0.95rem]">{t(h.short)}</p>
                    <span className="mt-6 inline-flex items-center gap-3 font-heading uppercase tracking-[0.3em] text-[0.65rem] text-shimmer">
                      {t(UI.view)} <span className="transition-transform duration-500 group-hover:translate-x-2">→</span>
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* NUMBERS strip */}
      <section className="relative py-20 bg-bordeaux text-ivory overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(201,167,102,0.15),_transparent_70%)]" />
        <div className="relative max-w-[1300px] mx-auto px-6 lg:px-12 grid grid-cols-2 md:grid-cols-4 gap-10 text-center">
          {HOME.numbers.map((n, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 * i }}
            >
              <p className="font-heading text-shimmer text-[clamp(2.5rem,5vw,4rem)] leading-none">{n.v}</p>
              <p className="mt-3 font-heading uppercase tracking-[0.32em] text-[0.65rem] text-ivory/80">{t(n.l)}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="relative py-28 bg-ivory overflow-hidden">
        <div className="absolute inset-0 bg-champagne-radial" />
        <motion.div
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="relative max-w-3xl mx-auto px-6 text-center"
        >
          <span className="ornament eyebrow">{t({ fr: 'Réservez', en: 'Book' })}</span>
          <p className="mt-6 serif-flourish text-bordeaux text-[clamp(1.8rem,3vw,2.6rem)] leading-snug">
            {t({
              fr: '« Le luxe ne se promet pas, il se vit. Réservez votre temps chez nous. »',
              en: '« Luxury is not promised, it is lived. Reserve your time with us. »'
            })}
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a href={BRAND.bookingUrl} target="_blank" rel="noreferrer" className="btn-royal">{t(UI.bookNow)} <span aria-hidden>→</span></a>
            <Link to="/contact" className="btn-ghost">{t(UI.contactUs)}</Link>
          </div>
        </motion.div>
      </section>
    </>
  );
}
