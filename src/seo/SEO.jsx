// =====================================================================
// <SEO /> — declarative head-tag manager for the AHR Collections SPA
// No external deps. Mutates document head on mount + cleans up on unmount.
// =====================================================================
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useLang } from '../contexts/LanguageContext.jsx';
import { ROUTE_SEO, SITE_URL, DEFAULT_OG_IMAGE } from './siteMeta.js';
import {
  buildOrganizationJsonLd,
  buildWebSiteJsonLd,
  buildHotelJsonLd,
  buildBreadcrumbJsonLd
} from './structuredData.js';

const MANAGED_ATTR = 'data-ahr-seo';

function upsertMeta({ name, property, content }) {
  if (!content) return;
  const sel = name ? `meta[name="${name}"]` : `meta[property="${property}"]`;
  let el = document.head.querySelector(sel);
  if (!el) {
    el = document.createElement('meta');
    if (name) el.setAttribute('name', name);
    if (property) el.setAttribute('property', property);
    el.setAttribute(MANAGED_ATTR, '1');
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

function upsertLink({ rel, href, hreflang }) {
  if (!href) return;
  const sel = hreflang
    ? `link[rel="${rel}"][hreflang="${hreflang}"]`
    : `link[rel="${rel}"]:not([hreflang])`;
  let el = document.head.querySelector(sel);
  if (!el) {
    el = document.createElement('link');
    el.setAttribute('rel', rel);
    if (hreflang) el.setAttribute('hreflang', hreflang);
    el.setAttribute(MANAGED_ATTR, '1');
    document.head.appendChild(el);
  }
  el.setAttribute('href', href);
}

function injectJsonLd(id, data) {
  if (!data) return;
  let el = document.head.querySelector(`script[type="application/ld+json"][data-jsonld="${id}"]`);
  if (!el) {
    el = document.createElement('script');
    el.type = 'application/ld+json';
    el.setAttribute('data-jsonld', id);
    el.setAttribute(MANAGED_ATTR, '1');
    document.head.appendChild(el);
  }
  el.textContent = JSON.stringify(data);
}

const absUrl = (path) => (path?.startsWith('http') ? path : `${SITE_URL}${path || ''}`);

export default function SEO() {
  const { pathname } = useLocation();
  const { lang } = useLang();

  useEffect(() => {
    const meta = ROUTE_SEO[pathname] || ROUTE_SEO['/'];
    const title = (meta.title?.[lang]) || meta.title?.fr || 'AHR Collections';
    const description = (meta.description?.[lang]) || meta.description?.fr || '';
    const imageAbs = absUrl(meta.image || DEFAULT_OG_IMAGE);
    const canonical = `${SITE_URL}${pathname === '/' ? '' : pathname}`;

    // Title
    document.title = title;

    // Basic meta
    upsertMeta({ name: 'description', content: description });
    if (meta.keywords) upsertMeta({ name: 'keywords', content: meta.keywords });
    upsertMeta({ name: 'robots', content: 'index, follow, max-image-preview:large' });

    // Canonical + hreflang alternates
    upsertLink({ rel: 'canonical', href: canonical });
    upsertLink({ rel: 'alternate', hreflang: 'fr',     href: canonical });
    upsertLink({ rel: 'alternate', hreflang: 'en',     href: canonical });
    upsertLink({ rel: 'alternate', hreflang: 'x-default', href: canonical });

    // Open Graph
    upsertMeta({ property: 'og:type',        content: pathname === '/' ? 'website' : 'article' });
    upsertMeta({ property: 'og:site_name',   content: 'AHR Collections' });
    upsertMeta({ property: 'og:title',       content: title });
    upsertMeta({ property: 'og:description', content: description });
    upsertMeta({ property: 'og:url',         content: canonical });
    upsertMeta({ property: 'og:image',       content: imageAbs });
    upsertMeta({ property: 'og:image:alt',   content: title });
    upsertMeta({ property: 'og:locale',      content: lang === 'en' ? 'en_US' : 'fr_FR' });
    upsertMeta({ property: 'og:locale:alternate', content: lang === 'en' ? 'fr_FR' : 'en_US' });

    // Twitter
    upsertMeta({ name: 'twitter:card',        content: 'summary_large_image' });
    upsertMeta({ name: 'twitter:title',       content: title });
    upsertMeta({ name: 'twitter:description', content: description });
    upsertMeta({ name: 'twitter:image',       content: imageAbs });

    // JSON-LD: always Organization + WebSite. Hotel on hotel pages. Breadcrumb always.
    injectJsonLd('organization', buildOrganizationJsonLd());
    injectJsonLd('website',      buildWebSiteJsonLd());
    injectJsonLd('breadcrumb',   buildBreadcrumbJsonLd(pathname, lang));
    const hotelLd = buildHotelJsonLd(pathname);
    // remove stale hotel jsonld when navigating away
    const stale = document.head.querySelector('script[data-jsonld="hotel"]');
    if (hotelLd) {
      injectJsonLd('hotel', hotelLd);
    } else if (stale) {
      stale.remove();
    }
  }, [pathname, lang]);

  return null;
}
