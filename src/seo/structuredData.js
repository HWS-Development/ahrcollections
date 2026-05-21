// =====================================================================
// JSON-LD structured-data builders for AHR Collections
// =====================================================================
import { SITE_URL, HOTEL_SCHEMAS } from './siteMeta.js';

const abs = (path) => (path?.startsWith('http') ? path : `${SITE_URL}${path || ''}`);

export function buildOrganizationJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${SITE_URL}/#organization`,
    name: 'AHR Collections',
    alternateName: 'Amwaj Hotels & Resorts',
    url: SITE_URL,
    logo: abs('/logos/ahr-logo.svg'),
    telephone: '+212 (0) 537 304 141',
    email: 'reservation@ahr.com',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Avenue Mohamed V, Angle Av Al Jahid, Route de Tanger',
      addressLocality: 'Kénitra',
      addressCountry: 'MA'
    },
    sameAs: [
      'https://www.instagram.com/waves_aqua_resort',
      'https://www.instagram.com/royalplaza_kenitra',
      'https://www.instagram.com/city_hotel_by_waves',
      'https://www.instagram.com/vitalityterminuskenitra'
    ]
  };
}

export function buildWebSiteJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${SITE_URL}/#website`,
    url: SITE_URL,
    name: 'AHR Collections',
    inLanguage: ['fr', 'en'],
    publisher: { '@id': `${SITE_URL}/#organization` }
  };
}

export function buildHotelJsonLd(path) {
  const h = HOTEL_SCHEMAS[path];
  if (!h) return null;
  return {
    '@context': 'https://schema.org',
    '@type': 'Hotel',
    '@id': `${SITE_URL}${path}#hotel`,
    name: h.name,
    starRating: { '@type': 'Rating', ratingValue: h.starRating },
    image: abs(h.image),
    telephone: h.phone,
    description: h.description,
    url: `${SITE_URL}${path}`,
    address: {
      '@type': 'PostalAddress',
      streetAddress: h.streetAddress,
      addressLocality: 'Kénitra',
      addressCountry: 'MA'
    },
    brand: { '@id': `${SITE_URL}/#organization` },
    priceRange: '$$$'
  };
}

export function buildBreadcrumbJsonLd(path, lang = 'fr') {
  const items = [{ name: lang === 'en' ? 'Home' : 'Accueil', url: SITE_URL }];
  const labels = {
    '/about':      { fr: 'À propos',          en: 'About' },
    '/collection': { fr: 'Notre Collection',  en: 'Our Collection' },
    '/offers':     { fr: 'Offres Spéciales',  en: 'Special Offers' },
    '/aqua':       { fr: 'Waves Aqua Resort', en: 'Waves Aqua Resort' },
    '/plaza':      { fr: 'Royal Plaza',       en: 'Royal Plaza' },
    '/vitality':   { fr: 'Vitality Terminus', en: 'Vitality Terminus' },
    '/city':       { fr: 'City Hôtel by Waves', en: 'City Hôtel by Waves' },
    '/contact':    { fr: 'Contact',           en: 'Contact' }
  };
  if (labels[path]) items.push({ name: labels[path][lang], url: `${SITE_URL}${path}` });
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((it, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: it.name,
      item: it.url
    }))
  };
}
