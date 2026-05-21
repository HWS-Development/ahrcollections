import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero.jsx';
import TrustBar from '../components/TrustBar.jsx';
import SignatureSection from '../components/SignatureSection.jsx';
import RoomsSection from '../components/RoomsSection.jsx';
import RestaurantHallSection from '../components/RestaurantHallSection.jsx';
import SpaPoolSection from '../components/SpaPoolSection.jsx';
import FamilySection from '../components/FamilySection.jsx';
import StatsSection from '../components/StatsSection.jsx';
import BusinessSection from '../components/BusinessSection.jsx';
import { useT } from '../contexts/LanguageContext.jsx';
import { HOTELS, UI } from '../data/site.js';

export default function PlazaPage() {
  const t = useT();
  const others = HOTELS.filter(h => h.id !== 'plaza');

  return (
    <>
      <Hero />
      <TrustBar />
      <SignatureSection />
      <RoomsSection />
      <RestaurantHallSection />
      <SpaPoolSection />
      <FamilySection />
      <StatsSection />
      <BusinessSection />

      {/* ══════════════════════════════════════════
          OTHER HOTELS
      ══════════════════════════════════════════ */}
      <section className="relative section-pad bg-mist overflow-hidden">
        <div className="max-w-[1500px] mx-auto px-6 lg:px-12">
          <div className="text-center max-w-2xl mx-auto">
            <span className="ornament eyebrow">{t({ fr: 'Continuez l\'exploration', en: 'Continue exploring' })}</span>
            <h2 className="mt-6 font-heading uppercase text-bordeaux text-[clamp(1.8rem,3.5vw,3rem)] leading-[1.05]">
              {t({ fr: 'Les autres signatures AHR.', en: 'Other AHR signatures.' })}
            </h2>
          </div>
          <div className="mt-16 grid md:grid-cols-3 gap-5">
            {others.map((h, i) => (
              <motion.div key={h.id}
                initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
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
        </div>
      </section>
    </>
  );
}
