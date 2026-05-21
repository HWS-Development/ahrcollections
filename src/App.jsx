import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { lazy, Suspense, useEffect } from 'react';

import useSmoothScroll from './hooks/useSmoothScroll.js';
import useRevealOnScroll from './hooks/useRevealOnScroll.js';

import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import ScrollProgress from './components/ScrollProgress.jsx';
import MobileBookingBar from './components/MobileBookingBar.jsx';
import SEO from './seo/SEO.jsx';

// Home is eagerly loaded so the initial route paints instantly.
import HomePage from './pages/HomePage.jsx';

// Other routes are code-split — each chunk loads on demand.
const AboutPage      = lazy(() => import('./pages/AboutPage.jsx'));
const CollectionPage = lazy(() => import('./pages/CollectionPage.jsx'));
const OffersPage     = lazy(() => import('./pages/OffersPage.jsx'));
const AquaPage       = lazy(() => import('./pages/AquaPage.jsx'));
const PlazaPage      = lazy(() => import('./pages/PlazaPage.jsx'));
const VitalityPage   = lazy(() => import('./pages/VitalityPage.jsx'));
const CityPage       = lazy(() => import('./pages/CityPage.jsx'));
const ContactPage    = lazy(() => import('./pages/ContactPage.jsx'));

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    if (window.__lenis) {
      window.__lenis.scrollTo(0, { immediate: true });
    } else {
      window.scrollTo({ top: 0, behavior: 'instant' });
    }
  }, [pathname]);
  return null;
}

function ScrollEffects() {
  const { pathname } = useLocation();
  useRevealOnScroll(pathname);
  return null;
}

function RouteFallback() {
  return (
    <div
      className="min-h-[60vh] flex items-center justify-center bg-ivory"
      role="status"
      aria-live="polite"
    >
      <span className="font-heading uppercase tracking-[0.4em] text-[0.7rem] text-bordeaux/70">
        Chargement…
      </span>
    </div>
  );
}

export default function App() {
  useSmoothScroll();
  return (
    <BrowserRouter>
      <ScrollToTop />
      <ScrollEffects />
      <SEO />
      <ScrollProgress />
      <Header />
      <main className="overflow-x-clip">
        <Suspense fallback={<RouteFallback />}>
          <Routes>
            <Route path="/"           element={<HomePage />} />
            <Route path="/about"      element={<AboutPage />} />
            <Route path="/collection" element={<CollectionPage />} />
            <Route path="/offers"     element={<OffersPage />} />
            <Route path="/aqua"       element={<AquaPage />} />
            <Route path="/plaza"      element={<PlazaPage />} />
            <Route path="/vitality"   element={<VitalityPage />} />
            <Route path="/city"       element={<CityPage />} />
            <Route path="/contact"    element={<ContactPage />} />
            <Route path="*"           element={<HomePage />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
      <MobileBookingBar />
    </BrowserRouter>
  );
}
