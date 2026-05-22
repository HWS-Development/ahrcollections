import { Link } from 'react-router-dom';
import { useT } from '../contexts/LanguageContext.jsx';
import { NAV, BRAND, HOTELS, UI } from '../data/site.js';

/* btn-royal background colour = #5E1A24 (var --rp-bordeaux) */
const TEXT = '#5E1A24';

export default function Footer() {
  const t = useT();
  return (
    <footer style={{ background: '#F6F0E6', color: TEXT }} className="relative overflow-hidden pb-[96px] md:pb-0">
      {/* top champagne hairline */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-champagne to-transparent" />
      {/* soft radial */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(201,167,102,0.22),_transparent_60%)] pointer-events-none" />

      <div className="relative max-w-[1600px] mx-auto px-6 lg:px-12 py-14 lg:py-20 grid md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12">

        {/* Brand + tagline */}
        <div className="lg:col-span-4">
          <p className="font-heading uppercase tracking-[0.5em] text-[0.7rem]" style={{ color: TEXT }}>
            {BRAND.name}
          </p>
          <p className="mt-6 serif-flourish text-3xl leading-snug max-w-md" style={{ color: TEXT }}>
            {t(BRAND.tagline)}
          </p>
          <a
            href={BRAND.bookingUrl}
            target="_blank" rel="noreferrer"
            className="btn-royal mt-10"
          >
            {t(UI.bookNow)} <span aria-hidden>→</span>
          </a>
        </div>

        {/* Navigation */}
        <div className="lg:col-span-3">
          <p className="font-heading uppercase tracking-[0.42em] text-[0.7rem]" style={{ color: TEXT }}>
            {t({ fr: 'Navigation', en: 'Navigation' })}
          </p>
          <ul className="mt-5 space-y-3 font-display">
            {NAV.slice(0, 4).concat(NAV[NAV.length - 1]).map((n) => (
              <li key={n.id}>
                <Link
                  to={n.to}
                  style={{ color: TEXT }}
                  className="group inline-flex items-center gap-2 hover:opacity-60 transition-opacity duration-400"
                >
                  <span className="h-px w-3 bg-current transition-all duration-500 group-hover:w-6" />
                  <span className="font-heading uppercase tracking-[0.18em] text-[0.78rem]">{t(n)}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Hotels */}
        <div className="lg:col-span-2">
          <p className="font-heading uppercase tracking-[0.42em] text-[0.7rem]" style={{ color: TEXT }}>
            {t({ fr: 'Nos hôtels', en: 'Our hotels' })}
          </p>
          <ul className="mt-5 space-y-3 font-display">
            {HOTELS.map((h) => (
              <li key={h.id} className="flex items-center justify-between gap-3">
                <Link
                  to={h.to}
                  style={{ color: TEXT }}
                  className="group inline-flex items-center gap-2 hover:opacity-60 transition-opacity duration-400 min-w-0"
                >
                  <span className="h-px w-3 bg-current transition-all duration-500 group-hover:w-6 flex-shrink-0" />
                  <span className="font-heading uppercase tracking-[0.18em] text-[0.78rem]">{h.name}</span>
                </Link>
                {h.instagram && (
                  <a
                    href={h.instagram}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`Instagram ${h.name}`}
                    style={{ color: TEXT }}
                    className="opacity-70 hover:opacity-100 transition-opacity duration-300 flex-shrink-0"
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                      <rect x="3" y="3" width="18" height="18" rx="5" />
                      <circle cx="12" cy="12" r="4" />
                      <circle cx="17.5" cy="6.5" r="0.9" fill="currentColor" stroke="none" />
                    </svg>
                  </a>
                )}
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div className="lg:col-span-3">
          <p className="font-heading uppercase tracking-[0.42em] text-[0.7rem]" style={{ color: TEXT }}>
            {t({ fr: 'Contact', en: 'Contact' })}
          </p>
          <ul className="mt-5 space-y-3 font-display text-[0.95rem] leading-relaxed" style={{ color: TEXT }}>
            <li>{t(BRAND.address)}</li>
            <li>
              <a
                href={`tel:${BRAND.phone.replace(/\s/g, '')}`}
                style={{ color: TEXT }}
                className="hover:opacity-60 transition-opacity duration-400"
              >
                {BRAND.phone}
              </a>
            </li>
            <li>
              <a
                href={`mailto:${BRAND.email}`}
                style={{ color: TEXT }}
                className="hover:opacity-60 transition-opacity duration-400"
              >
                {BRAND.email}
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="relative border-t" style={{ borderColor: 'rgba(94,26,36,0.2)' }}>
        <div
          className="max-w-[1600px] mx-auto px-6 lg:px-12 py-6 flex flex-col md:flex-row items-center justify-between gap-4 font-heading uppercase tracking-[0.3em] text-[0.62rem]"
          style={{ color: TEXT }}
        >
          <p>© {new Date().getFullYear()} {BRAND.name} · {t({ fr: 'Tous droits réservés', en: 'All rights reserved' })}</p>
          <p>{t({ fr: 'Conçu avec soin · Kénitra · Maroc', en: 'Crafted with care · Kénitra · Morocco' })}</p>
        </div>
      </div>
    </footer>
  );
}
