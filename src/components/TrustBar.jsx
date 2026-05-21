// =====================================================================
// TrustBar — small social-proof / reassurance strip
// Use just below hero to reinforce credibility & encourage direct booking.
// =====================================================================
import { motion } from 'framer-motion';
import { useT, useLang } from '../contexts/LanguageContext.jsx';

const ITEMS = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
        <path d="M12 2l2.39 6.95H22l-6 4.36L18.18 22 12 17.27 5.82 22 8 13.31l-6-4.36h7.61z" />
      </svg>
    ),
    title: { fr: 'Tarif direct garanti', en: 'Best direct rate' },
    desc:  { fr: 'Toujours le meilleur prix sur ahrcollections.com', en: 'Always lowest price on ahrcollections.com' }
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
        <path d="M12 22s-8-4.5-8-12a8 8 0 0116 0c0 7.5-8 12-8 12z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
    title: { fr: 'Cœur de Kénitra', en: 'Heart of Kénitra' },
    desc:  { fr: 'À 30 min de Rabat · 1h30 de Casablanca', en: '30 min from Rabat · 1h30 from Casablanca' }
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
        <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
        <path d="M22 4l-10 10-3-3" />
      </svg>
    ),
    title: { fr: 'Réservation flexible', en: 'Flexible booking' },
    desc:  { fr: 'Annulation gratuite sur la plupart des tarifs', en: 'Free cancellation on most rates' }
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
        <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
      </svg>
    ),
    title: { fr: 'Conciergerie 24/7', en: '24/7 concierge' },
    desc:  { fr: 'Une équipe dédiée, à votre écoute', en: 'A dedicated team, always reachable' }
  }
];

export default function TrustBar({ variant = 'light' }) {
  const t = useT();
  const { lang } = useLang();
  const dark = variant === 'dark';

  return (
    <section
      aria-label={lang === 'en' ? 'Why book direct' : 'Pourquoi réserver en direct'}
      className={`relative border-y ${dark
        ? 'bg-bordeaux/95 text-ivory border-champagne/25'
        : 'bg-ivory-50 text-bordeaux border-champagne/40'}`}
    >
      <div className="max-w-[1500px] mx-auto px-6 lg:px-12 py-7 lg:py-9 grid grid-cols-2 lg:grid-cols-4 gap-y-7 gap-x-6">
        {ITEMS.map((it, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7, delay: 0.06 * i, ease: [0.22, 1, 0.36, 1] }}
            className="flex items-start gap-3"
          >
            <span className={`shrink-0 mt-0.5 ${dark ? 'text-champagne' : 'text-champagne'}`}>
              {it.icon}
            </span>
            <div className="min-w-0">
              <p className="font-heading uppercase tracking-[0.22em] text-[0.72rem] leading-tight">
                {t(it.title)}
              </p>
              <p className={`mt-1 font-display text-[0.78rem] leading-snug ${dark ? 'text-ivory/75' : 'text-ink-soft'}`}>
                {t(it.desc)}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
