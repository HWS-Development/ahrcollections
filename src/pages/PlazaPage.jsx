import Hero from '../components/Hero.jsx';
import SignatureSection from '../components/SignatureSection.jsx';
import RoomsSection from '../components/RoomsSection.jsx';
import DiningSection from '../components/DiningSection.jsx';
import SpaSection from '../components/SpaSection.jsx';
import FamilySection from '../components/FamilySection.jsx';
import BusinessSection from '../components/BusinessSection.jsx';

export default function PlazaPage() {
  return (
    <>
      <Hero />
      <SignatureSection />
      <RoomsSection />
      <DiningSection />
      <SpaSection />
      <FamilySection />
      <BusinessSection />
    </>
  );
}
