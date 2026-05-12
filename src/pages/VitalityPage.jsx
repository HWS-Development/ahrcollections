import HotelPageTemplate from '../components/HotelPageTemplate.jsx';
import { VITALITY, HOTELS } from '../data/site.js';

export default function VitalityPage() {
  const others = HOTELS.filter((h) => h.id !== 'vitality');
  return <HotelPageTemplate data={VITALITY} accentTone="olive" name="Vitality Terminus" otherHotels={others} />;
}
