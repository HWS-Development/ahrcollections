import Hero from '../components/Hero.jsx';
import SignatureSection from '../components/SignatureSection.jsx';
import RoomsSection from '../components/RoomsSection.jsx';
import RestaurantHallSection from '../components/RestaurantHallSection.jsx';
import SpaPoolSection from '../components/SpaPoolSection.jsx';
import FamilySection from '../components/FamilySection.jsx';
import StatsSection from '../components/StatsSection.jsx';
import BusinessSection from '../components/BusinessSection.jsx';

export default function PlazaPage() {
  return (
    <>
      <Hero />
      <SignatureSection />
      <RoomsSection />
      <RestaurantHallSection />
      <SpaPoolSection />
      <FamilySection />
      <StatsSection />
      <BusinessSection />
    </>
  );
}
