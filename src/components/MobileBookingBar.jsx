// =====================================================================
// MobileBookingBar — sticky bottom CTA visible only on mobile/tablet
// Hides on contact page (already shows form) and respects safe-area inset.
// =====================================================================
import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useT, useLang } from '../contexts/LanguageContext.jsx';
import { BRAND, UI, HOTELS } from '../data/site.js';

// Per-hotel booking URLs (fall back to group search)
const HOTEL_BOOKING = {
  '/vitality': 'https://vitality-terminus.hotelrunner.com',
  '/city':     'https://city-hotel-by-waves.hotelrunner.com'
};

const HOTEL_PHONES = {
  '/city': '+212 (0) 537 304 400'
};

export default function MobileBookingBar() {
  const { pathname } = useLocation();
  const t = useT();
  const { lang } = useLang();

  // Hide on contact page (already conversion-optimized)
  if (pathname === '/contact') return null;

  const bookUrl = HOTEL_BOOKING[pathname] || BRAND.bookingUrl;
  const phone   = HOTEL_PHONES[pathname] || BRAND.phone;
  const phoneHref = `tel:${phone.replace(/\s|\(|\)/g, '')}`;

  const hotel = HOTELS.find(h => h.to === pathname);
  const contextLabel = hotel
    ? hotel.name
    : (lang === 'en' ? 'Best rate guaranteed' : 'Meilleur tarif garanti');

  return (
    <motion.div
      initial={{ y: 80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.6, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="md:hidden fixed bottom-0 inset-x-0 z-30"
      style={{ paddingBottom: 'env(safe-area-inset-bottom)' }}
      role="region"
      aria-label={t({ fr: 'Réservation rapide', en: 'Quick booking' })}
    >
      <div className="bg-ivory/95 backdrop-blur-xl border-t border-champagne/40 shadow-[0_-8px_24px_rgba(94,26,36,0.10)]">
        {/* Trust strip */}
        <div className="px-4 pt-2 pb-1.5 flex items-center justify-between text-[0.58rem] font-heading uppercase tracking-[0.28em]">
          <span className="text-bordeaux/80 truncate">{contextLabel}</span>
          <span className="flex items-center gap-1 text-champagne shrink-0">
            <span aria-hidden>★★★★★</span>
            <span className="text-bordeaux/60 normal-case tracking-normal font-display">
              · {lang === 'en' ? 'Direct rate' : 'Tarif direct'}
            </span>
          </span>
        </div>
        {/* Actions */}
        <div className="px-3 pb-3 pt-1 grid grid-cols-5 gap-2">
          <a
            href={phoneHref}
            className="col-span-2 flex items-center justify-center gap-2 border border-bordeaux/40 text-bordeaux font-heading uppercase tracking-[0.24em] text-[0.66rem] py-3 hover:bg-bordeaux hover:text-ivory transition-colors duration-300"
            aria-label={t({ fr: 'Appeler la réception', en: 'Call reception' })}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
              <path d="M22 16.92v3a2 2 0 01-2.18 2A19.86 19.86 0 013 5.18 2 2 0 015 3h3a2 2 0 012 1.72c.13.96.36 1.9.7 2.81a2 2 0 01-.45 2.11L8.91 11.09a16 16 0 006 6l1.45-1.45a2 2 0 012.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0122 16.92z"/>
            </svg>
            <span>{t({ fr: 'Appeler', en: 'Call' })}</span>
          </a>
          <a
            href={bookUrl}
            target="_blank"
            rel="noreferrer"
            className="col-span-3 flex items-center justify-center gap-2 bg-bordeaux text-ivory font-heading uppercase tracking-[0.24em] text-[0.66rem] py-3 hover:bg-bordeaux-deep transition-colors duration-300"
          >
            <span>{t(UI.bookNow)}</span>
            <span aria-hidden>→</span>
          </a>
        </div>
      </div>
    </motion.div>
  );
}
