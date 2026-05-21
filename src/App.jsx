import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';

import useSmoothScroll from './hooks/useSmoothScroll.js';
import useRevealOnScroll from './hooks/useRevealOnScroll.js';

import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import ScrollProgress from './components/ScrollProgress.jsx';

import HomePage       from './pages/HomePage.jsx';
import AboutPage      from './pages/AboutPage.jsx';
import CollectionPage from './pages/CollectionPage.jsx';
import OffersPage     from './pages/OffersPage.jsx';
import AquaPage       from './pages/AquaPage.jsx';
import PlazaPage      from './pages/PlazaPage.jsx';
import VitalityPage   from './pages/VitalityPage.jsx';
import CityPage       from './pages/CityPage.jsx';
import ContactPage    from './pages/ContactPage.jsx';

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

export default function App() {
  useSmoothScroll();
  return (
    <BrowserRouter>
      <ScrollToTop />
      <ScrollEffects />
      <ScrollProgress />
      <Header />
      <main className="overflow-x-clip">
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
      </main>
      <Footer />
    </BrowserRouter>
  );
}
