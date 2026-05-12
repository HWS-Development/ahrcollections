import HotelPageTemplate from '../components/HotelPageTemplate.jsx';
import { AQUA, HOTELS } from '../data/site.js';

export default function AquaPage() {
  const others = HOTELS.filter((h) => h.id !== 'aqua');
  return <HotelPageTemplate data={AQUA} accentTone="aqua" name="Waves Aqua Resort" otherHotels={others} />;
}
