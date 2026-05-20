import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useLang, useT } from '../contexts/LanguageContext.jsx';
import { NAV, UI, BRAND, HOTELS } from '../data/site.js';

/* ---------- Tiny inline flag icons ---------- */
function FlagFR({ className = '' }) {
  return (
    <svg viewBox="0 0 24 16" className={className} aria-hidden>
      <rect width="8"  height="16" x="0"  fill="#0055A4" />
      <rect width="8"  height="16" x="8"  fill="#FFFFFF" />
      <rect width="8"  height="16" x="16" fill="#EF4135" />
    </svg>
  );
}
function FlagEN({ className = '' }) {
  return (
    <svg viewBox="0 0 60 30" className={className} aria-hidden>
      <clipPath id="t"><path d="M0,0 v30 h60 v-30 z"/></clipPath>
      <clipPath id="s"><path d="M30,15 h30 v15 z v15 h-30 z h-30 v-15 z v-15 h30 z"/></clipPath>
      <g clipPath="url(#t)">
        <path d="M0,0 v30 h60 v-30 z" fill="#012169"/>
        <path d="M0,0 L60,30 M60,0 L0,30" stroke="#fff" strokeWidth="6"/>
        <path d="M0,0 L60,30 M60,0 L0,30" clipPath="url(#s)" stroke="#C8102E" strokeWidth="4"/>
        <path d="M30,0 v30 M0,15 h60" stroke="#fff" strokeWidth="10"/>
        <path d="M30,0 v30 M0,15 h60" stroke="#C8102E" strokeWidth="6"/>
      </g>
    </svg>
  );
}

/* Tiny diamond ornament SVG */
function Diamond() {
  return (
    <svg width="7" height="7" viewBox="0 0 7 7" fill="none" aria-hidden>
      <rect x="3.5" y="0" width="4.95" height="4.95" rx="0" transform="rotate(45 3.5 0)" fill="#C9A766"/>
    </svg>
  );
}

const BORDEAUX  = '#5E1A24';
const CHAMPAGNE = '#C9A766';

/* Hotels are entries with ids matching the four properties */
const HOTEL_IDS = new Set(['aqua', 'plaza', 'vitality', 'city']);

export default function Header() {
  const { lang, setLang } = useLang();
  const t = useT();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen]   = useState(false);
  const { pathname } = useLocation();

  useEffect(() => { setOpen(false); }, [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  /* Lock body scroll when sidebar open */
  useEffect(() => {
    const original = document.body.style.overflow;
    document.body.style.overflow = open ? 'hidden' : original || '';
    return () => { document.body.style.overflow = original || ''; };
  }, [open]);

  const onDarkHero = ['/', '/aqua', '/plaza', '/vitality', '/city'].includes(pathname);
  const transparent = !scrolled && onDarkHero;

  /* Split navigation into pages vs. hotel properties */
  const mainNav  = NAV.filter(n => !HOTEL_IDS.has(n.id));
  const hotelNav = NAV.filter(n =>  HOTEL_IDS.has(n.id));

  return (
    <>
      {/* ============ TOP BAR ============ */}
      <motion.header
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.0, ease: [0.22, 1, 0.36, 1], delay: 0.25 }}
        className={`fixed top-0 inset-x-0 z-40 transition-all duration-700
          ${scrolled
            ? 'bg-ivory/90 backdrop-blur-xl border-b border-champagne/30 py-3'
            : (onDarkHero ? 'bg-transparent py-6' : 'bg-ivory/85 backdrop-blur-md py-5 border-b border-champagne/20')}`}
      >
        <div className="max-w-[1600px] mx-auto px-5 lg:px-10 flex items-center justify-between gap-6">
          {/* Brand */}
          <Link to="/" className="flex items-center gap-3 group flex-shrink-0">
            <span className={`hidden md:block h-px w-8 bg-gradient-to-r from-transparent to-champagne transition-all duration-700 ${scrolled ? 'opacity-100' : 'opacity-60'}`} />
            <img
              src="/logos/ahr-logo.svg"
              alt="AHR Collections"
              className={`h-14 md:h-16 lg:h-20 w-auto transition-all duration-500 ${transparent ? 'drop-shadow-[0_4px_18px_rgba(0,0,0,0.55)]' : ''}`}
              draggable={false}
            />
          </Link>

          {/* Right cluster */}
          <div className="flex items-center gap-4 lg:gap-6 flex-shrink-0">
            <a
              href={BRAND.bookingUrl}
              target="_blank" rel="noreferrer"
              className="hidden sm:inline-flex btn-royal !py-3 !px-6"
            >
              {t(UI.bookNow)}
              <span aria-hidden>→</span>
            </a>

            {/* Menu trigger */}
            <button
              onClick={() => setOpen(true)}
              aria-label="Open menu"
              className={`group relative flex items-center gap-3 font-heading uppercase tracking-[0.34em] text-[0.7rem] transition-colors
                ${transparent ? 'text-ivory hover:text-champagne' : 'text-ink hover:text-bordeaux'}`}
            >
              <span className="hidden sm:inline">Menu</span>
              <span className="flex flex-col gap-[5px] items-end">
                <span className="block h-[1.5px] w-7 bg-current transition-all duration-500 group-hover:w-8" />
                <span className="block h-[1.5px] w-5 bg-current transition-all duration-500 group-hover:w-7" />
                <span className="block h-[1.5px] w-7 bg-current transition-all duration-500 group-hover:w-5" />
              </span>
            </button>
          </div>
        </div>
      </motion.header>

      {/* ============ SIDEBAR DRAWER ============ */}
      <AnimatePresence>
        {open && (
          <>
            {/* Backdrop */}
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 z-[60] bg-bordeaux-deep/50 backdrop-blur-sm"
            />

            {/* Drawer */}
            <motion.aside
              key="drawer"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              style={{ background: '#FFFAF0' }}
              className="fixed top-0 right-0 z-[70] h-full w-[92vw] sm:w-[460px] flex flex-col overflow-hidden"
            >
              {/* Decorative radial glow */}
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(201,167,102,0.14),_transparent_55%)] pointer-events-none" />
              {/* Left border accent */}
              <div className="absolute top-0 left-0 h-full w-px bg-gradient-to-b from-transparent via-champagne/70 to-transparent" />

              {/* Drawer header */}
              <div className="relative flex items-center justify-between px-8 lg:px-10 py-7 border-b border-champagne/40">
                <img src="/logos/ahr-logo.svg" alt="AHR Collections" className="h-14 w-auto" />
                <button
                  onClick={() => setOpen(false)}
                  aria-label="Close menu"
                  className="group flex items-center gap-3 font-heading uppercase tracking-[0.32em] text-[0.66rem] transition-opacity duration-300 hover:opacity-60"
                  style={{ color: BORDEAUX }}
                >
                  <span>Close</span>
                  <span className="relative w-5 h-5 inline-block flex-shrink-0">
                    <span className="absolute top-1/2 left-0 w-full h-[1.5px] bg-current rotate-45 -translate-y-1/2" />
                    <span className="absolute top-1/2 left-0 w-full h-[1.5px] bg-current -rotate-45 -translate-y-1/2" />
                  </span>
                </button>
              </div>

              {/* Scrollable body */}
              <div className="relative flex-1 overflow-y-auto px-8 lg:px-10 py-10">

                {/* — MAIN NAVIGATION — */}
                <p className="font-heading uppercase tracking-[0.42em] text-[0.66rem]" style={{ color: BORDEAUX }}>
                  {t({ fr: 'Navigation', en: 'Navigation' })}
                </p>

                <nav className="mt-6">
                  <ul className="flex flex-col">
                    {mainNav.map((item, i) => (
                      <motion.li
                        key={item.id}
                        initial={{ opacity: 0, x: 40 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.08 + i * 0.05, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                        className="border-b border-bordeaux/12"
                      >
                        <NavLink
                          to={item.to}
                          end={item.to === '/'}
                          onClick={() => setOpen(false)}
                          className="group flex items-center justify-between py-5 font-heading uppercase tracking-[0.28em] text-[1rem] transition-opacity duration-400 hover:opacity-60"
                          style={{ color: BORDEAUX }}
                        >
                          <span className="flex items-center gap-4">
                            <span className="font-heading text-[0.6rem] tracking-[0.4em] text-champagne">
                              0{i + 1}
                            </span>
                            <span className="relative">
                              {t(item)}
                              <span
                                className="absolute -bottom-1 left-0 h-px w-0 transition-all duration-500 group-hover:w-full"
                                style={{ background: BORDEAUX }}
                              />
                            </span>
                          </span>
                          <span
                            className="font-heading text-[1.1rem] transition-transform duration-500 group-hover:translate-x-1"
                            style={{ color: CHAMPAGNE }}
                          >
                            →
                          </span>
                        </NavLink>
                      </motion.li>
                    ))}
                  </ul>
                </nav>

                {/* ——— HOTEL PROPERTIES GROUP ——— */}
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.08 + mainNav.length * 0.05 + 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  className="mt-8"
                >
                  {/* Section divider with label */}
                  <div className="flex items-center gap-3 mb-5">
                    <span
                      className="flex-1 h-px"
                      style={{ background: `linear-gradient(90deg, rgba(201,167,102,0.55), transparent)` }}
                    />
                    <span
                      className="flex items-center gap-2 font-heading uppercase tracking-[0.48em] text-[0.56rem] whitespace-nowrap"
                      style={{ color: CHAMPAGNE }}
                    >
                      <Diamond />
                      {t({ fr: 'Nos Hôtels', en: 'Our Hotels' })}
                      <Diamond />
                    </span>
                    <span
                      className="flex-1 h-px"
                      style={{ background: `linear-gradient(90deg, transparent, rgba(201,167,102,0.55))` }}
                    />
                  </div>

                  {/* Hotel cards panel */}
                  <div
                    className="overflow-hidden"
                    style={{
                      background: 'rgba(94,26,36,0.03)',
                      borderLeft: `2px solid rgba(201,167,102,0.5)`,
                    }}
                  >
                    {hotelNav.map((item, i) => {
                      const hotel = HOTELS.find(h => h.id === item.id);
                      return (
                        <motion.div
                          key={item.id}
                          initial={{ opacity: 0, x: 30 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{
                            delay: 0.08 + mainNav.length * 0.05 + 0.18 + i * 0.07,
                            duration: 0.5,
                            ease: [0.22, 1, 0.36, 1]
                          }}
                        >
                          <NavLink
                            to={item.to}
                            onClick={() => setOpen(false)}
                            className={({ isActive }) =>
                              `group relative flex items-center justify-between px-4 py-[14px] transition-all duration-400
                              ${i < hotelNav.length - 1 ? 'border-b border-bordeaux/[0.08]' : ''}
                              ${isActive ? 'bg-bordeaux/[0.06]' : 'hover:bg-bordeaux/[0.05]'}`
                            }
                            style={{ color: BORDEAUX }}
                          >
                            {/* Active indicator bar */}
                            <span
                              className="absolute left-0 top-0 h-full w-[2px] opacity-0 group-[.active]:opacity-100 transition-opacity duration-300"
                              style={{ background: BORDEAUX }}
                            />

                            <span className="flex items-start gap-3 min-w-0">
                              {/* Index counter */}
                              <span
                                className="flex-shrink-0 mt-[3px] font-heading text-[0.52rem] tracking-[0.38em]"
                                style={{ color: CHAMPAGNE }}
                              >
                                {String(i + 1).padStart(2, '0')}
                              </span>
                              <span className="flex flex-col gap-[3px] min-w-0">
                                {/* Hotel name */}
                                <span className="font-heading uppercase tracking-[0.22em] text-[0.88rem] leading-tight truncate">
                                  {t(item)}
                                </span>
                                {/* Eyebrow / category badge */}
                                {hotel && (
                                  <span
                                    className="font-display text-[0.68rem] tracking-[0.12em] italic leading-none"
                                    style={{ color: CHAMPAGNE }}
                                  >
                                    {t(hotel.eyebrow)}
                                  </span>
                                )}
                              </span>
                            </span>

                            {/* Arrow */}
                            <span
                              className="flex-shrink-0 font-heading text-[0.9rem] transition-transform duration-400 group-hover:translate-x-1 ml-3"
                              style={{ color: CHAMPAGNE }}
                            >
                              →
                            </span>
                          </NavLink>
                        </motion.div>
                      );
                    })}
                  </div>

                  {/* Subtle note */}
                  <p
                    className="mt-3 font-display text-[0.64rem] tracking-[0.12em] opacity-60"
                    style={{ color: BORDEAUX }}
                  >
                    {t({ fr: 'Collection Kénitra · Maroc', en: 'Kénitra Collection · Morocco' })}
                  </p>
                </motion.div>

                {/* Language switch */}
                <div className="mt-10">
                  <p className="font-heading uppercase tracking-[0.42em] text-[0.66rem]" style={{ color: BORDEAUX }}>
                    {t({ fr: 'Langue', en: 'Language' })}
                  </p>
                  <div className="mt-5 flex items-center gap-3">
                    <button
                      onClick={() => setLang('fr')}
                      className="group flex items-center gap-3 px-4 py-3 border transition-all duration-400"
                      style={{
                        color: BORDEAUX,
                        borderColor: lang === 'fr' ? BORDEAUX : 'rgba(94,26,36,0.3)',
                        background: lang === 'fr' ? 'rgba(94,26,36,0.07)' : 'transparent'
                      }}
                    >
                      <FlagFR className="w-6 h-4 ring-1 ring-bordeaux/20" />
                      <span className="font-heading uppercase tracking-[0.32em] text-[0.7rem]">Français</span>
                    </button>
                    <button
                      onClick={() => setLang('en')}
                      className="group flex items-center gap-3 px-4 py-3 border transition-all duration-400"
                      style={{
                        color: BORDEAUX,
                        borderColor: lang === 'en' ? BORDEAUX : 'rgba(94,26,36,0.3)',
                        background: lang === 'en' ? 'rgba(94,26,36,0.07)' : 'transparent'
                      }}
                    >
                      <FlagEN className="w-6 h-4 ring-1 ring-bordeaux/20" />
                      <span className="font-heading uppercase tracking-[0.32em] text-[0.7rem]">English</span>
                    </button>
                  </div>
                </div>

                {/* Contact mini */}
                <div className="mt-10 pt-8 border-t border-bordeaux/15">
                  <p className="font-heading uppercase tracking-[0.42em] text-[0.66rem]" style={{ color: BORDEAUX }}>
                    Contact
                  </p>
                  <ul className="mt-5 space-y-3 font-display text-[0.9rem] leading-relaxed" style={{ color: BORDEAUX }}>
                    <li className="opacity-80">{t(BRAND.address)}</li>
                    <li>
                      <a
                        href={`tel:${BRAND.phone.replace(/\s/g,'')}`}
                        className="hover:opacity-60 transition-opacity"
                        style={{ color: BORDEAUX }}
                      >
                        {BRAND.phone}
                      </a>
                    </li>
                    <li>
                      <a
                        href={`mailto:${BRAND.email}`}
                        className="hover:opacity-60 transition-opacity"
                        style={{ color: BORDEAUX }}
                      >
                        {BRAND.email}
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Footer CTA */}
              <div className="relative px-8 lg:px-10 py-7 border-t border-champagne/40" style={{ background: '#F6F0E6' }}>
                <a
                  href={BRAND.bookingUrl}
                  target="_blank" rel="noreferrer"
                  className="btn-royal w-full justify-center"
                >
                  {t(UI.bookNow)} <span aria-hidden>→</span>
                </a>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
