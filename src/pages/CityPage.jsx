import HotelPageTemplate from '../components/HotelPageTemplate.jsx';
import { CITY, HOTELS } from '../data/site.js';

export default function CityPage() {
  const others = HOTELS.filter((h) => h.id !== 'city');
  return <HotelPageTemplate data={CITY} accentTone="sand" name="City Hôtel" otherHotels={others} />;
}
