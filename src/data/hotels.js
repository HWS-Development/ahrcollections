// =====================================================================
// AHR Collections — Per-hotel content (rooms, amenities, stats, info)
// All media served from /public/img and /public/videos
// =====================================================================

// ─────────────────────────────────────────────────────────────────────
// VITALITY TERMINUS
// ─────────────────────────────────────────────────────────────────────

export const VITALITY_INFO = {
  stars:      4,
  phone:      '+212 (0) 537 304 141',
  bookingUrl: 'http://vitality-terminus.hotelrunner.com',
  address: {
    fr: '185, Avenue Mohamed Diouri, 14000 Kénitra',
    en: '185, Avenue Mohamed Diouri, 14000 Kénitra'
  },
  mapsUrl: 'https://www.google.com/maps/place/34.2541304670068,-6.581325531006',
  tagline: {
    fr: 'À 1 minute à pied de la gare LGV · 4 étoiles · Kénitra',
    en: '1-minute walk from the LGV station · 4 stars · Kénitra'
  }
};

export const VITALITY_ROOMS = [
  {
    id: 'confort-gl',
    label:    { fr: 'Confort Grand Lit', en: 'Comfort King' },
    tag:      { fr: 'Business & Détente · 25 m²', en: 'Business & Leisure · 25 m²' },
    headline: { fr: 'L\'élégance au quotidien.', en: 'Everyday elegance.' },
    description: {
      fr: 'Idéale pour vos voyages d\'affaires au cœur de Kénitra, la chambre Confort allie élégance et modernité dans un cadre chaleureux. Lit King Size, bureau de travail, vitrage antisonore et plateau de courtoisie — un confort absolu pensé dans ses moindres détails.',
      en: 'Ideal for business travel in the heart of Kénitra, the Comfort room blends elegance and modernity in a warm setting. King Size bed, work desk, soundproof glass and welcome tray — absolute comfort thought through to the last detail.'
    },
    amenities: {
      fr: ['Lit King Size', 'Bureau de travail', 'Salle de bain privative', 'Smart TV', 'Wi-Fi haut débit', 'Coffre-fort'],
      en: ['King Size Bed', 'Work desk', 'Private bathroom', 'Smart TV', 'High-speed Wi-Fi', 'Safety box']
    },
    photos: [
      '/img/vitality/confort-gl/photos__2082.webp',
      '/img/vitality/confort-gl/photos__2083.webp',
      '/img/vitality/confort-gl/photos__2084.webp',
      '/img/vitality/confort-gl/photos__2085.webp',
      '/img/vitality/confort-gl/photos__2086.webp',
    ]
  },
  {
    id: 'confort-twin',
    label:    { fr: 'Confort Twin', en: 'Comfort Twin' },
    tag:      { fr: 'Duo · Flexibilité · 25 m²', en: 'Duo · Flexibility · 25 m²' },
    headline: { fr: 'La liberté du voyage en duo.', en: 'The freedom of travelling together.' },
    description: {
      fr: 'Nos chambres Twin sont idéales pour les séjours à Kénitra, qu\'ils soient professionnels ou de plaisir. Deux lits individuels, machine à café, coffre-fort et mini-bar — pour un confort optimal en toutes circonstances.',
      en: 'Our Twin rooms are ideal for stays in Kénitra, whether for business or leisure. Two single beds, coffee machine, safe deposit box and minibar — for optimal comfort in all circumstances.'
    },
    amenities: {
      fr: ['Lits Jumeaux', 'Machine à café', 'Wi-Fi haut débit', 'Smart TV', 'Coffre-fort', 'Mini-bar'],
      en: ['Twin Beds', 'Coffee machine', 'High-speed Wi-Fi', 'Smart TV', 'Safety box', 'Minibar']
    },
    photos: [
      '/img/vitality/confort-twin/photos__2077.webp',
      '/img/vitality/confort-twin/photos__2078.webp',
      '/img/vitality/confort-twin/photos__2079.webp',
      '/img/vitality/confort-twin/photos__2080.webp',
      '/img/vitality/confort-twin/photos__2081.webp',
    ]
  },
  {
    id: 'superieur',
    label:    { fr: 'Supérieure Twin / GL', en: 'Superior Twin / King' },
    tag:      { fr: 'Balcon · Vue sur la ville · 30 m²', en: 'Balcony · City view · 30 m²' },
    headline: { fr: 'La ville à vos pieds, le luxe à portée.', en: 'The city at your feet, luxury within reach.' },
    description: {
      fr: 'Avec leur balcon et leur vue sur la ville, nos chambres Supérieures créent une atmosphère apaisante. 30 m² élégants, finitions haut de gamme et prestations complètes — dont quatre chambres spécialement aménagées pour les personnes allergiques.',
      en: 'With their balcony and city views, our Superior rooms create a soothing atmosphere. 30 elegant m², premium finishes and full amenities — including four rooms specially fitted for allergy sufferers.'
    },
    amenities: {
      fr: ['Balcon vue ville', 'Lit King Size ou Twin', 'Wi-Fi haut débit', 'Smart TV', 'Coffre-fort', 'Mini-bar'],
      en: ['City-view balcony', 'King Size or Twin bed', 'High-speed Wi-Fi', 'Smart TV', 'Safety box', 'Minibar']
    },
    photos: [
      '/img/vitality/confort/photos__2087.webp',
      '/img/vitality/confort/photos__2088.webp',
      '/img/vitality/confort/photos__2089.webp',
      '/img/vitality/confort/photos__2090.webp',
      '/img/vitality/confort/photos__2091.webp',
      '/img/vitality/confort/photos__2092.webp',
    ]
  },
  {
    id: 'suite-junior',
    label:    { fr: 'Suite Junior', en: 'Junior Suite' },
    tag:      { fr: 'Espace & Élégance · 45 m²', en: 'Space & Elegance · 45 m²' },
    headline: { fr: 'L\'art de vivre à l\'hôtel, sublimé.', en: 'The art of hotel living, elevated.' },
    description: {
      fr: 'Nos Suites Juniors incarnent le véritable luxe d\'un hôtel 4 étoiles. Espace séjour et chambre double séparés par une cloison ouverte, finitions élégantes — chaque détail a été pensé pour offrir un cadre chaleureux et raffiné.',
      en: 'Our Junior Suites embody the true luxury of a 4-star hotel. Living area and double bedroom separated by an open partition, elegant finishes — every detail has been crafted for a warm and refined setting.'
    },
    amenities: {
      fr: ['Salon indépendant', 'Lit King Size', 'Salle de bain premium', 'Sèche-cheveux', 'Coffre-fort', 'Wi-Fi haut débit'],
      en: ['Separate lounge', 'King Size bed', 'Premium bathroom', 'Hairdryer', 'Safety box', 'High-speed Wi-Fi']
    },
    photos: [
      '/img/vitality/suite-junior/DSC07776.webp',
      '/img/vitality/suite-junior/DSC07776_3.webp',
      '/img/vitality/suite-junior/photos__2024.webp',
      '/img/vitality/suite-junior/photos__2025.webp',
      '/img/vitality/suite-junior/photos__2026.webp',
      '/img/vitality/suite-junior/photos__2027.webp',
      '/img/vitality/suite-junior/photos__2028.webp',
      '/img/vitality/suite-junior/photos__2029.webp',
    ]
  },
  {
    id: 'suite-presidentielle',
    label:    { fr: 'Suite Présidentielle', en: 'Presidential Suite' },
    tag:      { fr: 'Le summum · 50 m²', en: 'The pinnacle · 50 m²' },
    headline: { fr: 'Quand le luxe ne laisse rien au hasard.', en: 'When luxury leaves nothing to chance.' },
    description: {
      fr: 'Nos Suites Présidentielles incarnent l\'expression ultime du luxe Vitality. Espace séjour et chambre double, balcon avec vue sur la ville, prestations haut de gamme — lit King Size, Smart TV, mini-bar et coffre-fort. Un cadre hors norme.',
      en: 'Our Presidential Suites embody the ultimate expression of Vitality luxury. Living area and double bedroom, balcony with city view, premium amenities — King Size bed, Smart TV, minibar and safe. An extraordinary setting.'
    },
    amenities: {
      fr: ['Balcon panoramique', 'Lit King Size', 'Salle de bain privative', 'Presse pantalons', 'Sèche-cheveux', 'Coffre-fort'],
      en: ['Panoramic balcony', 'King Size bed', 'Private bathroom', 'Trouser press', 'Hairdryer', 'Safety box']
    },
    photos: [
      '/img/vitality/suite-prestige/photos__2062.webp',
      '/img/vitality/suite-prestige/photos__2063.webp',
      '/img/vitality/suite-prestige/photos__2064.webp',
      '/img/vitality/suite-prestige/photos__2065.webp',
      '/img/vitality/suite-prestige/photos__2066.webp',
      '/img/vitality/suite-prestige/photos__2067.webp',
      '/img/vitality/suite-prestige/photos__2068.webp',
      '/img/vitality/suite-prestige/photos__2069.webp',
    ]
  },
];

export const VITALITY_STATS = [
  { value: 58, symbol: '◇', label: { fr: 'Chambres & Suites', en: 'Rooms & Suites' } },
  { value: 3,  symbol: '◉', label: { fr: 'Salles de Réunions',  en: 'Meeting Rooms'  } },
  { value: 1,  symbol: '◌', label: { fr: 'Restaurant',          en: 'Restaurant'     } },
  { value: 4,  symbol: '✦', label: { fr: 'Étoiles',             en: 'Stars'          } },
];

export const VITALITY_FEATURES = [
  { icon: '⊕', title: { fr: 'À 1 min de la gare LGV', en: '1 min from the LGV station' },
    desc: { fr: 'Accessibilité optimale pour les voyageurs d\'affaires et les touristes — Rabat à 30 min, Casablanca à 1h30.', en: 'Seamless access for business travellers and tourists — Rabat in 30 min, Casablanca in 1h30.' } },
  { icon: '◈', title: { fr: 'Business Center & Salles', en: 'Business Center & Rooms' },
    desc: { fr: 'Trois salles de réunion modulables, business center équipé pour visioconférences et coworking.', en: 'Three modular meeting rooms, business center equipped for video conferencing and coworking.' } },
  { icon: '◇', title: { fr: 'Restaurant International', en: 'International Restaurant' },
    desc: { fr: 'Carte du monde, petit-déjeuner buffet généreux et ambiance chaleureuse pour vos déjeuners d\'affaires.', en: 'Cuisine from around the world, generous breakfast buffet and a warm atmosphere for business lunches.' } },
  { icon: '✦', title: { fr: 'Conciergerie & Voiturier', en: 'Concierge & Valet' },
    desc: { fr: 'Conciergerie 24h/24, voiturier, bagagerie et Wi-Fi gratuit dans l\'ensemble de l\'hôtel — l\'attention dans chaque détail.', en: '24/7 concierge, valet parking, baggage storage and complimentary Wi-Fi throughout — attention in every detail.' } },
];

// ─────────────────────────────────────────────────────────────────────
// WAVES AQUA RESORT
// ─────────────────────────────────────────────────────────────────────

export const AQUA_INFO = {
  stars:      5,
  phone:      '+212 537 304 141',
  bookingUrl: 'https://ahr-collections.hotelrunner.com/bv3/group-search',
  address: {
    fr: 'Avenue Mohamed V, Route de Tanger, 14000 Kénitra',
    en: 'Avenue Mohamed V, Route de Tanger, 14000 Kénitra'
  },
  mapsUrl: 'https://www.google.com/maps?q=Kenitra',
  tagline: {
    fr: 'Resort 5 étoiles · Piscine extérieure · Kénitra',
    en: '5-star resort · Outdoor pool · Kénitra'
  }
};

// Verified aqua hotel rooms — drawn from WAVES/waves catalog
const AR_ROOM = [
  'DSC00546','DSC00547','DSC00556','DSC00558','DSC00563','DSC00596',
  'DSC00600','DSC00612','DSC00617','DSC00646','DSC00650','DSC00665',
  'DSC00682','DSC00684','DSC00695','DSC00696','DSC00743','DSC00744',
  'DSC00748','DSC00749','DSC00751','DSC00756','DSC00757','DSC00764',
  'DSC09946','DSC09955','DSC09958','DSC09964','DSC09966'
];
const AR_SUITE = [
  'DSC00483','DSC00487','DSC00490','DSC00495','DSC00497','DSC00507',
  'DSC00513','DSC00520','DSC00524','DSC00567','DSC00568','DSC00570',
  'DSC00578','DSC00581','DSC00620','DSC00624','DSC00630','DSC00634','DSC00685'
];
const AR = (i) => `/img/aqua/rooms/${AR_ROOM[i % AR_ROOM.length]}.webp`;
const AS = (i) => `/img/aqua/suites/${AR_SUITE[i % AR_SUITE.length]}.webp`;

export const AQUA_ROOMS = [
  {
    id: 'sup-gl',
    label:    { fr: 'Supérieure GL', en: 'Superior King' },
    tag:      { fr: 'Confort tropical · King Size', en: 'Tropical comfort · King Size' },
    headline: { fr: 'La sérénité tropicale au quotidien.', en: 'Tropical serenity, every day.' },
    description: {
      fr: 'Baignée de lumière naturelle dans un cadre tropical soigné, notre chambre Supérieure GL est un refuge intimiste alliant confort et élégance. Décor chaleureux, lit King Size et prestations complètes — pour commencer chaque journée dans la douceur.',
      en: 'Bathed in natural light in a thoughtful tropical setting, our Superior GL room is an intimate retreat blending comfort and elegance. Warm décor, King Size bed and full amenities — for starting every day in ease.'
    },
    amenities: { fr: ['Lit King Size', 'Wi-Fi', 'Climatisation', 'Salle de bain', 'TV satellite', 'Mini-bar'], en: ['King Size bed', 'Wi-Fi', 'Air conditioning', 'Bathroom', 'Satellite TV', 'Minibar'] },
    photos: [AR(0), AR(1), AR(2), AR(3), AR(4), AR(5), AR(6), AR(7)]
  },
  {
    id: 'deluxe-piscine-gl',
    label:    { fr: 'Deluxe Piscine GL', en: 'Deluxe Pool King' },
    tag:      { fr: 'Vue piscine · Deluxe', en: 'Pool view · Deluxe' },
    headline: { fr: 'La piscine, vue depuis votre chambre.', en: 'The pool, framed by your window.' },
    description: {
      fr: 'Vue directe sur la piscine depuis votre chambre Deluxe. Grandes baies vitrées, espace généreux, literie haut de gamme — pour les amateurs de piscine qui exigent à la fois le calme et la beauté aquatique.',
      en: 'A direct pool view from your Deluxe room. Large picture windows, generous space, premium bedding — for pool lovers who want both serenity and aquatic beauty.'
    },
    amenities: { fr: ['Vue sur piscine', 'Baies vitrées', 'Lit King Size', 'Wi-Fi', 'Mini-bar', 'Coffre-fort'], en: ['Pool view', 'Picture windows', 'King Size bed', 'Wi-Fi', 'Minibar', 'Safety box'] },
    photos: [AR(8), AR(9), AR(10), AR(11)]
  },
  {
    id: 'deluxe-paysage-gl',
    label:    { fr: 'Deluxe Paysage GL', en: 'Deluxe Landscape King' },
    tag:      { fr: 'Vue panoramique · King', en: 'Panoramic view · King' },
    headline: { fr: 'Un tableau vivant à chaque aurore.', en: 'A living painting at every dawn.' },
    description: {
      fr: 'La chambre Deluxe Paysage offre une vue panoramique sur l\'environnement naturel qui entoure le resort. Conçue pour ceux qui aiment se réveiller avec un horizon et finir leur journée sous les étoiles.',
      en: 'The Deluxe Landscape room offers a panoramic view over the natural surroundings of the resort. Designed for those who love waking to a horizon and ending their day under the stars.'
    },
    amenities: { fr: ['Vue panoramique', 'Lit King Size', 'Wi-Fi', 'Climatisation', 'Plateau courtoisie', 'Coffre-fort'], en: ['Panoramic view', 'King Size bed', 'Wi-Fi', 'Air conditioning', 'Welcome tray', 'Safety box'] },
    photos: [AR(12), AR(13), AR(14), AR(15)]
  },
  {
    id: 'deluxe-twin-piscine',
    label:    { fr: 'Deluxe Twin Piscine', en: 'Deluxe Pool Twin' },
    tag:      { fr: 'Lits Jumeaux · Vue piscine', en: 'Twin Beds · Pool view' },
    headline: { fr: 'Le voyage en duo, face à l\'eau.', en: 'A duo stay, facing the water.' },
    description: {
      fr: 'Deux lits jumeaux, vue directe sur la piscine et décor lumineux. La chambre Deluxe Twin Piscine est la formule idéale pour les séjours en duo qui veulent profiter au maximum des espaces aquatiques.',
      en: 'Two twin beds, direct pool view and bright décor. The Deluxe Twin Pool room is the ideal formula for duo stays wanting to make the most of the water spaces.'
    },
    amenities: { fr: ['Lits Jumeaux', 'Vue piscine', 'Wi-Fi', 'Climatisation', 'Mini-bar', 'TV satellite'], en: ['Twin beds', 'Pool view', 'Wi-Fi', 'Air conditioning', 'Minibar', 'Satellite TV'] },
    photos: [AR(16), AR(17), AR(18), AR(19)]
  },
  {
    id: 'deluxe-twin-paysage',
    label:    { fr: 'Deluxe Twin Paysage', en: 'Deluxe Landscape Twin' },
    tag:      { fr: 'Lits Jumeaux · Panorama', en: 'Twin Beds · Panorama' },
    headline: { fr: 'Deux regards sur le même horizon.', en: 'Two gazes on the same horizon.' },
    description: {
      fr: 'Deux lits individuels face à un panorama naturel généreux. Pour les voyageurs en duo qui aiment l\'espace, la lumière et la beauté du paysage marocain.',
      en: 'Two single beds facing a generous natural panorama. For duo travellers who love space, light and the beauty of the Moroccan landscape.'
    },
    amenities: { fr: ['Lits Jumeaux', 'Vue panoramique', 'Wi-Fi', 'Climatisation', 'Coffre-fort', 'Sèche-cheveux'], en: ['Twin beds', 'Panoramic view', 'Wi-Fi', 'Air conditioning', 'Safety box', 'Hairdryer'] },
    photos: [AR(20), AR(21), AR(22), AR(23)]
  },
  {
    id: 'suite-confort',
    label:    { fr: 'Suite Confort', en: 'Suite Confort' },
    tag:      { fr: 'Confort · Espace généreux', en: 'Comfort · Generous space' },
    headline: { fr: 'L\'espace comme art de vivre.', en: 'Space as a way of life.' },
    description: {
      fr: 'La Suite Confort offre une expérience généreuse dans un cadre tropical lumineux. Espace de vie bien agencé, salle de bain complète et décoration chaleureuse — un séjour confortable et soigné pour profiter pleinement du resort.',
      en: 'The Suite Confort offers a generous experience in a bright tropical setting. Well-planned living space, full bathroom and warm décor — a comfortable, carefully appointed stay to make the most of the resort.'
    },
    amenities: { fr: ['Configuration confort', 'Espace généreux', 'Wi-Fi', 'Climatisation', 'Mini-bar', 'Coffre-fort'], en: ['Comfort layout', 'Generous space', 'Wi-Fi', 'Air conditioning', 'Minibar', 'Safety box'] },
    photos: [AR(24), AR(25), AR(26), AR(27)]
  },
  {
    id: 'suite-junior',
    label:    { fr: 'Suite Junior', en: 'Junior Suite' },
    tag:      { fr: 'Suite · Espace & Lumière', en: 'Suite · Space & Light' },
    headline: { fr: 'Un espace à soi, face au ciel.', en: 'A space of your own, facing the sky.' },
    description: {
      fr: 'La Suite Junior Waves Aqua est un refuge de lumière et d\'élégance. Salon séparé, chambre lumineuse et terrasse — l\'art de vivre tropical porté à son apogée.',
      en: 'The Waves Aqua Junior Suite is a refuge of light and elegance. Separate lounge, bright bedroom and terrace — tropical art of living at its peak.'
    },
    amenities: { fr: ['Salon séparé', 'Terrasse', 'Lit King Size', 'Wi-Fi', 'Mini-bar premium', 'Coffre-fort'], en: ['Separate lounge', 'Terrace', 'King Size bed', 'Wi-Fi', 'Premium minibar', 'Safety box'] },
    photos: [AS(0), AS(1), AS(2), AS(3)]
  },
  {
    id: 'suite-executive',
    label:    { fr: 'Suite Executive', en: 'Executive Suite' },
    tag:      { fr: 'Suite · Prestige', en: 'Suite · Prestige' },
    headline: { fr: 'Le prestige sans compromis.', en: 'Prestige, uncompromised.' },
    description: {
      fr: 'La Suite Executive incarne le raffinement Waves Aqua. Espace de travail privatif, salon en enfilade et vue imprenable — pour les voyageurs qui exigent l\'excellence sans jamais transiger.',
      en: 'The Executive Suite embodies Waves Aqua refinement. Private workspace, flowing living room and breathtaking views — for travellers who demand excellence without compromise.'
    },
    amenities: { fr: ['Espace travail privé', 'Salon en enfilade', 'Vue panoramique', 'Wi-Fi ultra-rapide', 'Mini-bar premium', 'Service personnalisé'], en: ['Private workspace', 'Flowing living room', 'Panoramic view', 'Ultra-fast Wi-Fi', 'Premium minibar', 'Personalised service'] },
    photos: [AS(4), AS(5), AS(6), AS(7)]
  },
  {
    id: 'suite-presidentielle',
    label:    { fr: 'Suite Présidentielle', en: 'Presidential Suite' },
    tag:      { fr: 'Vue 360° · Exclusivité', en: '360° view · Exclusivity' },
    headline: { fr: 'Quand l\'hôtel tout entier vous appartient.', en: 'When the entire hotel becomes yours.' },
    description: {
      fr: 'La Suite Présidentielle est le couronnement de l\'expérience Waves Aqua. Surface majestueuse, vue à couper le souffle et service entièrement dédié — une expérience sans pareille.',
      en: 'The Presidential Suite is the crown of the Waves Aqua experience. Majestic surface, breathtaking views and a fully dedicated service — an experience without equal.'
    },
    amenities: { fr: ['Vue 360°', 'Salon & salle à manger', 'Deux salles de bain', 'Butler privé', 'Accès spa illimité', 'Transfert VIP'], en: ['360° view', 'Lounge & dining room', 'Two bathrooms', 'Private butler', 'Unlimited spa access', 'VIP transfer'] },
    photos: [AS(8), AS(9), AS(10), AS(11)]
  },
  {
    id: 'suite-royale',
    label:    { fr: 'Suite Royale', en: 'Royal Suite' },
    tag:      { fr: 'L\'absolue excellence', en: 'Absolute excellence' },
    headline: { fr: 'L\'apogée du séjour de luxe.', en: 'The apex of the luxury stay.' },
    description: {
      fr: 'La Suite Royale est une déclaration d\'exception. Trois espaces distincts, piscine privée sur la terrasse, service de majordome — l\'hospitalité Waves Aqua portée à son sommet absolu.',
      en: 'The Royal Suite is a declaration of exception. Three distinct spaces, private pool on the terrace, butler service — Waves Aqua hospitality at its absolute summit.'
    },
    amenities: { fr: ['Piscine privée', 'Trois espaces distincts', 'Butler privé 24h', 'Vue panoramique', 'Spa privatif', 'Accès exclusif'], en: ['Private pool', 'Three distinct spaces', '24h private butler', 'Panoramic view', 'Private spa', 'Exclusive access'] },
    photos: [AS(12), AS(13), AS(14), AS(15)]
  },
];

export const AQUA_STATS = [
  { value: 66, symbol: '◇', label: { fr: 'Chambres & Suites', en: 'Rooms & Suites' } },
  { value: 3,  symbol: '◉', label: { fr: 'Salles de Réunions', en: 'Meeting Rooms'  } },
  { value: 2,  symbol: '◌', label: { fr: 'Restaurants',        en: 'Restaurants'    } },
  { value: 5,  symbol: '✦', label: { fr: 'Étoiles',            en: 'Stars'          } },
];

export const AQUA_FEATURES = [
  { icon: '∿', image: '/img/aqua/features/toboggans.webp', title: { fr: 'Aquaparc géant', en: 'Vast Aquapark' },
    desc: { fr: 'Le plus grand de la région : 30+ toboggans, piscine à vagues, rivière lente, plages privées.', en: 'The largest in the region: 30+ slides, wave pool, lazy river, private beaches.' } },
  { icon: '◉', image: '/img/aqua/dining/DSC00126.webp', title: { fr: 'Gastronomie & Loisirs', en: 'Dining & Leisure' },
    desc: { fr: 'Le Bronze · Sea Food & Grill, Barbecue à Table, Crepland, Play & Jump Park, bars en bord de piscine.', en: 'Le Bronze · Sea Food & Grill, Barbecue à Table, Crepland, Play & Jump Park, poolside bars.' } },
  { icon: '◇', image: '/img/aqua/spa/photos2220.webp', title: { fr: 'Centre de bien-être', en: 'Wellness Center' },
    desc: { fr: 'Spa, hammam traditionnel, salon de beauté et soins relaxants haut de gamme.', en: 'Spa, traditional hammam, beauty salon and premium relaxing treatments.' } },
  { icon: '◈', image: '/img/aqua/congres/DSC01170-HDR.webp', title: { fr: 'Palais des Congrès', en: 'Convention Center' },
    desc: { fr: 'Espace événementiel moderne pour séminaires, mariages, conférences et célébrations privées.', en: 'Modern event venue for seminars, weddings, conferences and private celebrations.' } },
];

// ─────────────────────────────────────────────────────────────────────
// CITY HOTEL BY WAVES
// ─────────────────────────────────────────────────────────────────────

export const CITY_INFO = {
  stars:      3,
  phone:      '+212 (0) 537 304 400',
  email:      'contactwavescityhotel@gmail.com',
  bookingUrl: 'http://city-hotel-by-waves.hotelrunner.com',
  address: {
    fr: 'Rue Maamoura, 14050 Kénitra',
    en: 'Rue Maamoura, 14050 Kénitra'
  },
  mapsUrl: 'https://www.google.com/maps?q=Kenitra',
  tagline: {
    fr: 'Hôtel 3 étoiles · Restaurant & Soft Bar · Kénitra',
    en: '3-star hotel · Restaurant & Soft Bar · Kénitra'
  }
};

const CR = (n) => `/img/city/rooms/DSC0${n}.webp`;
const CB = (n) => `/img/city/bath/DSC0${n}.webp`;

export const CITY_ROOMS = [
  {
    id: 'cosy-gl',
    label:    { fr: 'Chambre Cosy Grand Lit', en: 'Cosy King Room' },
    tag:      { fr: 'Intime & Chaleureux · 25 m²', en: 'Intimate & Warm · 25 m²' },
    headline: { fr: 'La ville, vécue avec élégance.', en: 'The city, lived with elegance.' },
    description: {
      fr: 'Climatisée, insonorisée et dotée d\'une salle de bain privative avec douche, notre chambre Cosy Grand Lit est le refuge parfait pour explorer Kénitra. Un lit confortable, une atmosphère chaleureuse, un séjour sans fausse note.',
      en: 'Air-conditioned, soundproofed and with a private shower room, our Cosy King room is the perfect base for exploring Kénitra. A comfortable bed, a warm atmosphere — a flawless stay.'
    },
    amenities: { fr: ['Lit Grand Lit', 'Salle de bain privative', 'Wi-Fi gratuit', 'Climatisation', 'Sèche-cheveux', 'Insonorisé'], en: ['King bed', 'Private bathroom', 'Free Wi-Fi', 'Air conditioning', 'Hairdryer', 'Soundproofed'] },
    photos: [CR(8025), CR(8026), CR(8028), CR(8031)]
  },
  {
    id: 'cosy-twin',
    label:    { fr: 'Chambre Cosy Twin', en: 'Cosy Twin Room' },
    tag:      { fr: 'Deux lits · Confort urbain · 25 m²', en: 'Two beds · Urban comfort · 25 m²' },
    headline: { fr: 'Partager la ville, deux à deux.', en: 'Sharing the city, two by two.' },
    description: {
      fr: 'Deux lits confortables, atmosphère urbaine et accueillante : la Cosy Twin réunit tout l\'essentiel pour un séjour serein — minibar, coffre-fort, télévision écran plat et articles de toilette offerts.',
      en: 'Two comfortable beds in a welcoming, urban atmosphere: the Cosy Twin gathers all the essentials for a serene stay — minibar, safe, flat-screen TV and complimentary toiletries.'
    },
    amenities: { fr: ['Lits Jumeaux', 'Mini-bar', 'TV satellite', 'Climatisation', 'Coffre-fort', 'Non-fumeur'], en: ['Twin beds', 'Minibar', 'Satellite TV', 'Air conditioning', 'Safety box', 'Non-smoking'] },
    photos: [CR(8056), CR(8058), CR(8059), CB(8039)]
  },
  {
    id: 'deluxe-gl',
    label:    { fr: 'Chambre Deluxe Grand Lit', en: 'Deluxe King Room' },
    tag:      { fr: 'Espace & Modernité · 32 m²', en: 'Space & Modernity · 32 m²' },
    headline: { fr: 'L\'urbain, version raffinée.', en: 'Urban, the refined version.' },
    description: {
      fr: 'Plus spacieuse, notre Chambre Deluxe Grand Lit associe confort urbain et élégance contemporaine. Minibar, coffre-fort et salle de bain privative avec douche — pour un séjour au-dessus du commun.',
      en: 'More spacious, our Deluxe King room combines urban comfort with contemporary elegance. Minibar, safe deposit box and private shower room — for a stay above the ordinary.'
    },
    amenities: { fr: ['Lit Grand Lit', 'Wi-Fi gratuit', 'Mini-bar', 'Coffre-fort', 'Salle de bain', 'Non-fumeur'], en: ['King bed', 'Free Wi-Fi', 'Minibar', 'Safety box', 'Bathroom', 'Non-smoking'] },
    photos: [CR(8127), CR(8131), CR(8132), CB(8344)]
  },
  {
    id: 'deluxe-twin',
    label:    { fr: 'Chambre Deluxe Twin', en: 'Deluxe Twin Room' },
    tag:      { fr: 'Lits Jumeaux · 32 m²', en: 'Twin Beds · 32 m²' },
    headline: { fr: 'Deux espaces, une même élégance.', en: 'Two spaces, one elegance.' },
    description: {
      fr: 'Notre Chambre Deluxe Twin spacieuse dispose de murs insonorisés, minibar, coffre-fort et TV écran plat. Deux lits pour plus de flexibilité, dans un cadre moderne et épuré.',
      en: 'Our spacious Deluxe Twin room features soundproof walls, minibar, safe deposit box and flat-screen TV. Two beds for added flexibility in a modern, clean setting.'
    },
    amenities: { fr: ['Lits Jumeaux', 'Wi-Fi gratuit', 'TV satellite', 'Mini-bar', 'Non-fumeur', 'Insonorisé'], en: ['Twin beds', 'Free Wi-Fi', 'Satellite TV', 'Minibar', 'Non-smoking', 'Soundproofed'] },
    photos: [CR(8310), CR(8311), CR(8314), CR(8316)]
  },
  {
    id: 'suite',
    label:    { fr: 'Suite City', en: 'City Suite' },
    tag:      { fr: 'Suite · 45 m²', en: 'Suite · 45 m²' },
    headline: { fr: 'La ville comme un tableau depuis votre salon.', en: 'The city as a painting from your lounge.' },
    description: {
      fr: 'Notre Suite City allie salon privatif, chambre séparée et salle de bain de prestige. Minibar, coffre-fort et télévision écran plat — pour un séjour à Kénitra absolument mémorable.',
      en: 'Our City Suite combines a private lounge, separate bedroom and prestige bathroom. Minibar, safe deposit box and flat-screen TV — for an absolutely memorable Kénitra stay.'
    },
    amenities: { fr: ['Salon privé', 'Chambre séparée', 'Wi-Fi gratuit', 'TV satellite', 'Mini-bar', 'Coffre-fort'], en: ['Private lounge', 'Separate bedroom', 'Free Wi-Fi', 'Satellite TV', 'Minibar', 'Safety box'] },
    photos: [CR(8324), CR(8326), CR(8330), CR(8334)]
  },
];

export const CITY_STATS = [
  { value: 39, symbol: '◇', label: { fr: 'Chambres & Suites', en: 'Rooms & Suites' } },
  { value: 2,  symbol: '◉', label: { fr: 'Salles de Réunions', en: 'Meeting Rooms'  } },
  { value: 1,  symbol: '◌', label: { fr: 'Restaurant & Soft Bar', en: 'Restaurant & Soft Bar'} },
  { value: 3,  symbol: '✦', label: { fr: 'Étoiles',            en: 'Stars'          } },
];

export const CITY_FEATURES = [
  { icon: '◇', title: { fr: 'Hôtel Corporate', en: 'Corporate Hotel' },
    desc: { fr: 'Conçu pour les professionnels, avec des services adaptés aux séjours d\'affaires et aux longs séjours.', en: 'Built for professionals, with services tailored to business trips and extended stays.' } },
  { icon: '◉', title: { fr: 'Salles de Conférence', en: 'Conference Rooms' },
    desc: { fr: 'Espaces modulables équipés de vidéoprojecteurs, traiteur et pauses-café pour vos événements.', en: 'Flexible spaces with video projectors, catering and coffee breaks for your events.' } },
  { icon: '◌', title: { fr: 'Localisation centrale', en: 'Central Location' },
    desc: { fr: 'À deux pas des quartiers d\'affaires, des centres commerciaux et des gares de Kénitra.', en: 'Steps from business districts, shopping centers and Kénitra\'s stations.' } },
  { icon: '✦', title: { fr: 'Restaurant & Soft Bar', en: 'Restaurant & Soft Bar' },
    desc: { fr: 'Cuisine variée et équilibrée, petit-déjeuner buffet et ambiance chaleureuse.', en: 'Varied, balanced cuisine, breakfast buffet and a warm atmosphere.' } },
];

// ─────────────────────────────────────────────────────────────────────
// VITALITY — Restaurant, Fitness & Meeting Rooms
// ─────────────────────────────────────────────────────────────────────

export const VITALITY_RESTAURANT = {
  heroImage: '/img/vitality/restaurant/image_resto.webp',
  eyebrow: { fr: 'Gastronomie', en: 'Gastronomy' },
  title: { fr: 'Restaurant International', en: 'International Restaurant' },
  sub: { fr: 'Une expérience culinaire à la hauteur de vos ambitions.', en: 'A culinary experience matching your ambitions.' },
  body: {
    fr: [
      'Une carte variée avec des plats savoureux du monde entier.',
      'Petit-déjeuner buffet : une sélection généreuse de produits frais et équilibrés.',
      'Une ambiance chaleureuse pour vos déjeuners d\'affaires comme vos dîners en privé.',
    ],
    en: [
      'A varied menu featuring delicious dishes from around the world.',
      'Breakfast buffet: a generous selection of fresh, balanced products.',
      'A warm atmosphere for both business lunches and intimate dinners.',
    ],
  },
  amenities: {
    fr: ['Cuisine internationale', 'Buffet petit-déjeuner', 'Dîner à la carte', 'Terrasse', 'Privatisation', 'Ambiance feutrée'],
    en: ['International cuisine', 'Breakfast buffet', 'À la carte dinner', 'Terrace', 'Private hire', 'Refined ambience'],
  },
};

export const VITALITY_FITNESS = {
  images: [
    '/img/vitality/fitness/treadmill.webp',
    '/img/vitality/fitness/gymbox.webp',
  ],
  eyebrow: { fr: 'Bien-être & Vitalité', en: 'Wellbeing & Vitality' },
  title: { fr: 'Espace Fitness & GymBox', en: 'Fitness Center & GymBox' },
  sub: { fr: 'Maintenez votre rythme, où que vous soyez.', en: 'Keep your pace, wherever you are.' },
  body: {
    fr: 'Salle de fitness entièrement équipée, disponible à toute heure pour les clients de l\'hôtel. Cardio sur tapis de course panoramique, musculation et GymBox — tout est réuni pour ne jamais interrompre votre routine.',
    en: 'Fully equipped fitness centre, available round the clock for hotel guests. Cardio on panoramic treadmills, weights and GymBox — everything in one place so your routine never stops.',
  },
  amenities: {
    fr: ['Cardio training', 'Musculation', 'Tapis de course', 'GymBox · Boxe', 'Casiers sécurisés', 'Serviettes offertes'],
    en: ['Cardio training', 'Weight training', 'Treadmills', 'GymBox · Boxing', 'Secure lockers', 'Complimentary towels'],
  },
};

export const VITALITY_MEETINGS = [
  {
    name: 'Salle Marrakech',
    capacity: 30,
    tagline: { fr: 'Workshops & Formations', en: 'Workshops & Training' },
    description: {
      fr: 'L\'adresse idéale pour vos workshops, réunions et formations.',
      en: 'The ideal venue for your workshops, meetings and training sessions.',
    },
    equipment: {
      fr: ['Micros avec fil', 'Vidéoprojecteur', 'Wi-Fi'],
      en: ['Wired microphones', 'Video projector', 'Wi-Fi'],
    },
    layouts: { fr: 'En U, Classe, Théâtre, Cabaret', en: 'U-shape, Classroom, Theatre, Cabaret' },
    image: '/img/vitality/meet-marrakech/photos__2093.webp',
    photos: [
      '/img/vitality/meet-marrakech/photos__2093.webp',
      '/img/vitality/meet-marrakech/photos__2096.webp',
      '/img/vitality/meet-marrakech/photos__2098.webp',
      '/img/vitality/meet-marrakech/photos__2094.webp',
      '/img/vitality/meet-marrakech/photos__2100.webp',
    ],
  },
  {
    name: 'Salle Agadir',
    capacity: 14,
    tagline: { fr: 'Confidentialité & Confort', en: 'Privacy & Comfort' },
    description: {
      fr: 'Confidentialité et confort pour vos réunions d\'exception.',
      en: 'Privacy and comfort for your exceptional meetings.',
    },
    equipment: {
      fr: ['Paperboard', 'Système audio', 'Vidéoprojecteur'],
      en: ['Flipchart', 'Audio system', 'Video projector'],
    },
    layouts: { fr: 'Réunion', en: 'Meeting' },
    image: '/img/vitality/meet-agadir/photos__2108.webp',
    photos: [
      '/img/vitality/meet-agadir/photos__2108.webp',
      '/img/vitality/meet-agadir/photos__2116.webp',
      '/img/vitality/meet-agadir/photos__2114.webp',
      '/img/vitality/meet-agadir/photos__2119.webp',
    ],
  },
  {
    name: 'Salle Rabat',
    capacity: 80,
    tagline: { fr: 'Grand Impact', en: 'Grand Impact' },
    description: {
      fr: 'Notre plus grande salle, votre plus grand impact.',
      en: 'Our largest room, your greatest impact.',
    },
    equipment: {
      fr: ['Sonorisation', 'Micros sans fil', 'Vidéoprojecteur', 'Tableau interactif', 'Wi-Fi'],
      en: ['PA system', 'Wireless mics', 'Video projector', 'Interactive board', 'Wi-Fi'],
    },
    layouts: { fr: 'Théâtre, Classe, En U, Cabaret', en: 'Theatre, Classroom, U-shape, Cabaret' },
    image: '/img/vitality/meet-rabat/photos__2107.webp',
    photos: [
      '/img/vitality/meet-rabat/photos__2107.webp',
      '/img/vitality/meet-rabat/photos__2136.webp',
      '/img/vitality/meet-rabat/photos__2138.webp',
      '/img/vitality/meet-rabat/photos__2139.webp',
      '/img/vitality/meet-rabat/photos__2141.webp',
    ],
  },
];

// ─────────────────────────────────────────────────────────────────────
// CITY — Restaurant & Meeting Rooms
// ─────────────────────────────────────────────────────────────────────

export const CITY_RESTAURANT = {
  heroImage: '/img/city/dining/DSC08270.webp',
  eyebrow: { fr: 'Nos Saveurs', en: 'Our Flavours' },
  title: { fr: 'Restaurant & Soft Bar', en: 'Restaurant & Soft Bar' },
  sub: { fr: 'Raffinement et convivialité, à toute heure.', en: 'Refinement and conviviality, at any hour.' },
  body: {
    fr: [
      'Vivez une expérience culinaire inoubliable au Restaurant & Soft Bar du City Hôtel,',
      'où raffinement et convivialité se rencontrent.',
      'Cuisine variée, élaborée à partir de produits frais et locaux —',
      'parfaite pour vos déjeuners professionnels, dîners en famille ou apéritifs entre amis.',
    ],
    en: [
      'Experience an unforgettable culinary journey at City Hôtel\'s Restaurant & Soft Bar,',
      'where refinement meets conviviality.',
      'Varied cuisine, crafted from fresh local produce —',
      'perfect for business lunches, family dinners or drinks with friends.',
    ],
  },
  amenities: {
    fr: ['Cuisine marocaine & internationale', 'Buffet petit-déjeuner', 'Déjeuner & dîner', 'Soft Bar', 'Terrasse animée'],
    en: ['Moroccan & international cuisine', 'Breakfast buffet', 'Lunch & dinner', 'Soft Bar', 'Lively terrace'],
  },
};

export const CITY_MEETINGS = [
  {
    name: 'Les Idrissides',
    capacity: 60,
    tagline: { fr: 'Votre plus grand impact', en: 'Your greatest impact' },
    description: {
      fr: 'Confidentialité et confort pour vos événements d\'exception.',
      en: 'Privacy and comfort for your exceptional events.',
    },
    equipment: {
      fr: ['Paperboard', 'Système audio', 'Vidéoprojecteur', 'Micros avec fil'],
      en: ['Flipchart', 'Audio system', 'Video projector', 'Wired microphones'],
    },
    layouts: { fr: 'Conférence, Classe, Théâtre, Cabaret', en: 'Conference, Classroom, Theatre, Cabaret' },
    image: '/img/city/meeting/DSC08475.webp',
  },
  {
    name: 'Les Mérinides',
    capacity: 20,
    tagline: { fr: 'Workshops & Formations', en: 'Workshops & Training' },
    description: {
      fr: 'L\'adresse idéale pour vos workshops, réunions et formations.',
      en: 'The ideal venue for your workshops, meetings and training sessions.',
    },
    equipment: {
      fr: ['Micros avec fil', 'Vidéoprojecteur', 'Wi-Fi'],
      en: ['Wired microphones', 'Video projector', 'Wi-Fi'],
    },
    layouts: { fr: 'En U, Classe, Théâtre, Cabaret', en: 'U-shape, Classroom, Theatre, Cabaret' },
    image: '/img/city/meeting/DSC08491.webp',
  },
];

// ─────────────────────────────────────────────────────────────────────
// AQUA — Highlights (Nos Points Forts) & Convention Center
// ─────────────────────────────────────────────────────────────────────

export const AQUA_HIGHLIGHTS = [
  {
    id: 'aquapark',
    label: { fr: 'Aqua Park', en: 'Aqua Park' },
    sub: { fr: 'Plongez dans l\'aventure, éclatez-vous à chaque vague', en: 'Dive into adventure, enjoy every wave' },
    image: '/img/aqua/pool/DJI_0097.webp',
    images: [
      '/img/aqua/pool/DJI_0097.webp',
      '/img/aqua/pool/DJI_0099.webp',
      '/img/aqua/aquapark/DSC02525.webp',
      '/img/aqua/aquapark/DSC02692.webp',
      '/img/aqua/aquapark/DSC02843.webp',
    ],
    video: '/videos/aqua-aquapark.mp4',
    icon: '∿',
    wide: true,
  },
  {
    id: 'relax',
    label: { fr: 'Stay & Relax', en: 'Stay & Relax' },
    sub: { fr: 'Piscine, transat et sérénité au bord de l\'eau', en: 'Pool, sun lounger and serenity waterside' },
    image: '/img/aqua/pool/DSC02482.webp',
    images: [
      '/img/aqua/pool/DSC02482.webp',
      '/img/aqua/pool/DSC02481.webp',
      '/img/aqua/pool/DSC02508.webp',
      '/img/aqua/pool/DSC00712.webp',
    ],
    icon: '◇',
    wide: false,
  },
  {
    id: 'spa',
    label: { fr: 'Le Spa by Waves', en: 'The Waves Spa' },
    sub: { fr: 'Là où commence votre bien-être · 100% Femmes', en: 'Where your wellbeing begins · Ladies only' },
    image: '/img/aqua/spa/photos2210.webp',
    images: [
      '/img/aqua/spa/photos2200.webp',
      '/img/aqua/spa/photos2210.webp',
      '/img/aqua/spa/photos2219.webp',
      '/img/aqua/spa/photos2230.webp',
      '/img/aqua/spa/photos2238.webp',
    ],
    video: '/videos/aqua-spa.mp4',
    icon: '✦',
    wide: false,
  },
  {
    id: 'saveurs',
    label: { fr: 'Nos Saveurs', en: 'Our Flavours' },
    sub: { fr: 'Le goût des vacances, à chaque repas', en: 'The taste of holidays, every meal' },
    image: '/img/aqua/dining/DSC00126.webp',
    images: [
      '/img/aqua/dining/DSC00126.webp',
      '/img/aqua/dining/DSC00146.webp',
      '/img/aqua/dining/DSC00207.webp',
      '/img/aqua/dining/DSC00345.webp',
      '/img/aqua/dining/DSC00452.webp',
    ],
    icon: '◉',
    wide: false,
  },
  {
    id: 'bronz',
    label: { fr: 'Le Bronze · Sea Food & Grill', en: 'Le Bronze · Sea Food & Grill' },
    sub: { fr: 'Grillades de soirée, cocktails signature au coucher du soleil', en: 'Evening grills, signature cocktails at sunset' },
    image: '/img/aqua/bronz/photos2273.webp',
    images: [
      '/img/aqua/bronz/photos2273.webp',
      '/img/aqua/bronz/photos2279.webp',
      '/img/aqua/bronz/photos2281.webp',
      '/img/aqua/bronz/photos2285.webp',
      '/img/aqua/bronz/photos2287.webp',
      '/img/aqua/bronz/photos2290.webp',
      '/img/aqua/bronz/photos2295.webp',
      '/img/aqua/bronz/photos2299.webp',
    ],
    video: '/videos/aqua-bronze.mp4',
    icon: '◈',
    wide: false,
  },
  {
    id: 'aquafit',
    label: { fr: 'Aquafit', en: 'Aquafit' },
    sub: { fr: 'Votre force, notre mission', en: 'Your strength, our mission' },
    image: '/img/aqua/aquapark/DSC02525.webp',
    images: [
      '/img/aqua/aquapark/DSC02525.webp',
      '/img/aqua/aquapark/DSC02610.webp',
      '/img/aqua/aquapark/DSC02653.webp',
      '/img/aqua/aquapark/DSC02768.webp',
    ],
    icon: '⊕',
    wide: true,
  },
  {
    id: 'funzone',
    label: { fr: 'Fun Zone', en: 'Fun Zone' },
    sub: { fr: 'L\'énergie en plein vol !', en: 'Energy at full flight!' },
    image: '/img/aqua/kids/photos2244.webp',
    images: [
      '/img/aqua/kids/photos2244.webp',
      '/img/aqua/kids/photos2246.webp',
      '/img/aqua/kids/photos2252.webp',
      '/img/aqua/kids/photos2257.webp',
      '/img/aqua/kids/photos2266.webp',
    ],
    icon: '◐',
    wide: true,
  },
  {
    id: 'ballroom',
    label: { fr: 'Palais & Ballroom', en: 'Palace & Ballroom' },
    sub: { fr: 'Congrès le jour, salle des fêtes le soir', en: 'Conference by day, ballroom by night' },
    image: '/img/aqua/ballroom/palais-poster.webp',
    images: [
      '/img/aqua/ballroom/palais-poster.webp',
      '/img/aqua/congres/business_center_waves.webp',
      '/img/aqua/congres/DSC01170-HDR.webp',
      '/img/aqua/congres/DSC01176-HDR.webp',
      '/img/aqua/congres/DSC01191.webp',
      '/img/aqua/congres/DSC01221.webp',
    ],
    video: '/videos/aqua-palais.mp4',
    icon: '◆',
    wide: true,
  },
];

const CG = (name) => `/img/aqua/congres/${name}.webp`;

export const AQUA_CONVENTION = {
  eyebrow: { fr: 'Palais des Congrès · Ballroom · Waves Aqua Resort', en: 'Convention Palace · Ballroom · Waves Aqua Resort' },
  title: { fr: 'Un seul lieu, deux signatures.', en: 'One venue, two signatures.' },
  sub: {
    fr: 'Palais des Congrès le jour, Ballroom le soir — trois salles modulables, équipements audiovisuels haute définition et services traiteur sur mesure pour conférences, séminaires, mariages et galas.',
    en: 'Convention Palace by day, Ballroom by night — three flexible rooms, HD audio-visual equipment and bespoke catering for conferences, seminars, weddings and galas.',
  },
  videoSrc:    '/videos/aqua-palais.mp4',
  videoPoster: '/img/aqua/ballroom/palais-poster.webp',
  heroImage:   CG('business_center_waves'),
  rooms: [
    {
      name: 'Salle Plénière',
      capacity: 100,
      tagline: { fr: 'Grande conférence · Plénière', en: 'Main conference · Plenary' },
      description: {
        fr: 'Notre plus grande salle vous accueille pour conférences plénières, assemblées générales et événements d\'envergure. Équipée d\'un système de sonorisation professionnel, écrans HD et éclairage scénique modulable.',
        en: 'Our largest room hosts plenary conferences, general assemblies and large-scale events. Equipped with professional sound, HD screens and adjustable stage lighting.',
      },
      equipment: {
        fr: ['Sonorisation professionnelle', 'Micros sans fil', 'Vidéoprojecteur HD', 'Écran LCD géant', 'Éclairage scénique', 'Wi-Fi haut débit'],
        en: ['Professional PA system', 'Wireless microphones', 'HD video projector', 'Giant LCD screen', 'Stage lighting', 'High-speed Wi-Fi'],
      },
      layouts: { fr: 'Théâtre, Classe, En U, Cabaret, Banquet', en: 'Theatre, Classroom, U-shape, Cabaret, Banquet' },
      image: CG('business_center_waves'),
      photos: [
        CG('business_center_waves'),
        CG('DSC01160'),
        CG('DSC01170-HDR'),
        CG('DSC01176-HDR'),
        CG('DSC01191'),
        CG('DSC01221'),
      ],
    },
    {
      name: 'Salle New York',
      capacity: 30,
      tagline: { fr: 'Workshops & Formations', en: 'Workshops & Training' },
      description: {
        fr: 'Espace moderne et lumineux dédié aux workshops, formations et réunions de travail. Tableau interactif, visioconférence intégrée et configuration modulable selon vos besoins.',
        en: 'Modern, bright space designed for workshops, training sessions and working meetings. Interactive board, integrated video conferencing and flexible layout to suit your needs.',
      },
      equipment: {
        fr: ['Écran LCD interactif', 'Micros avec fil', 'Visioconférence', 'Tableau interactif', 'Wi-Fi', 'Paperboard'],
        en: ['Interactive LCD screen', 'Wired microphones', 'Video conferencing', 'Interactive board', 'Wi-Fi', 'Flipchart'],
      },
      layouts: { fr: 'En U, Classe, Théâtre, Cabaret', en: 'U-shape, Classroom, Theatre, Cabaret' },
      image: CG('DSC01201'),
      photos: [
        CG('DSC01201'),
        CG('DSC01204'),
        CG('DSC01206'),
        CG('IMG_8677'),
        CG('IMG_8680'),
      ],
    },
    {
      name: 'Salle Paris',
      capacity: 14,
      tagline: { fr: 'Réunions & Décisions', en: 'Meetings & Decisions' },
      description: {
        fr: 'Salle intime et confidentielle, idéale pour comités de direction, réunions restreintes et entretiens. Un cadre élégant qui favorise la concentration et la prise de décision.',
        en: 'Intimate and confidential room, ideal for board meetings, restricted gatherings and interviews. An elegant setting that encourages focus and decision-making.',
      },
      equipment: {
        fr: ['Écran LCD', 'Paperboard', 'Système audio', 'Micro avec fil', 'Wi-Fi'],
        en: ['LCD screen', 'Flipchart', 'Audio system', 'Wired microphone', 'Wi-Fi'],
      },
      layouts: { fr: 'Réunion', en: 'Meeting' },
      image: CG('DSC01264'),
      photos: [
        CG('DSC01264'),
        CG('DSC01267'),
        CG('DSC01273'),
        CG('IMG_8700'),
      ],
    },
  ],
  specs: [
    { value: '3',    label: { fr: 'Salles modulables',   en: 'Modular rooms'     } },
    { value: '100',  label: { fr: 'Invités max.',        en: 'Max guests'        } },
    { value: 'HD',   label: { fr: 'Équipements A/V',     en: 'A/V Equipment'     } },
    { value: '24/7', label: { fr: 'Traiteur & service',  en: 'Catering & service'} },
  ],
  ballroomImage: '/img/aqua/bronz/photos2279.webp',
  ballroomSub: {
    fr: 'Mariages, galas, soirées d\'entreprise ou célébrations privées — Le Ballroom vous accueille dans un cadre somptueux conçu pour l\'inoubliable.',
    en: 'Weddings, galas, corporate evenings or private celebrations — The Ballroom welcomes you in a sumptuous setting designed for the unforgettable.',
  },
};

// =====================================================================
// AQUA — Spec-aligned additions (Aquaparc details, Wellness, Dining venues, Pack offer)
// =====================================================================
export const AQUA_AQUAPARK_DETAILS = {
  eyebrow: { fr: 'L’Aquaparc & les Loisirs', en: 'Aquapark & Leisure' },
  title:   { fr: 'Un parc aquatique conçu pour le plaisir de tous.', en: 'A water park designed for everyone’s delight.' },
  sub: {
    fr: 'Plus de 30 toboggans géants, piscine à vagues, rivière lente, espaces enfants et plages privées — l’accès est inclus avec votre réservation à l’hôtel ou disponible en ticket à la journée.',
    en: '30+ giant slides, wave pool, lazy river, kids zones and private beaches — access is included with your hotel stay or available as a day-pass.'
  },
  items: [
    { icon: '∿',
      image: '/img/aqua/aquapark/DSC02610.webp',
      title: { fr: 'Toboggans géants',         en: 'Giant slides' },
      desc:  { fr: 'Sensations fortes garanties sur plus de 30 toboggans.', en: '30+ slides for guaranteed thrills.' } },
    { icon: '~',
      image: '/img/aqua/features/wave-river.webp',
      title: { fr: 'Piscine à vagues & rivière lente', en: 'Wave pool & lazy river' },
      desc:  { fr: 'Pour un moment de détente aquatique en famille.', en: 'For a relaxing aquatic moment with family.' } },
    { icon: '◌',
      image: '/img/aqua/features/kids.webp',
      title: { fr: 'Espaces enfants',         en: 'Kids zones' },
      desc:  { fr: 'Jeux interactifs et bassins adaptés aux plus petits.', en: 'Interactive games and pools tailored for little ones.' } },
    { icon: '★',
      image: '/img/aqua/features/vip-beach.webp',
      title: { fr: 'Plages privées & VIP',    en: 'Private beaches & VIP' },
      desc:  { fr: 'Cabanas, services premium et tranquillité pour une expérience exclusive.', en: 'Cabanas, premium service and quiet for an exclusive experience.' } }
  ],
  access: {
    fr: 'Accès au parc inclus avec la réservation de l’hôtel · Ticket à la journée disponible.',
    en: 'Park access included with hotel reservation · Day-pass available.'
  }
};

export const AQUA_WELLNESS = {
  eyebrow: { fr: 'Bien-être & Détente', en: 'Wellbeing & Relaxation' },
  title:   { fr: 'Un centre dédié au soin du corps et de l’esprit.', en: 'A center devoted to body and mind.' },
  items: [
    { icon: '◇',
      image: '/img/aqua/spa/photos2230.webp',
      title: { fr: 'Spa & Massages',          en: 'Spa & Massages' },
      desc:  { fr: 'Une sélection de soins relaxants et thérapeutiques par nos experts.', en: 'A curated selection of relaxing and therapeutic treatments by our experts.' } },
    { icon: '◈',
      image: '/img/aqua/spa/photos2210.webp',
      title: { fr: 'Hammam traditionnel',     en: 'Traditional hammam' },
      desc:  { fr: 'Rituel marocain ancestral pour une purification complète.', en: 'Ancestral Moroccan ritual for a complete purification.' } },
    { icon: '◉',
      image: '/img/aqua/spa/photos2241.webp',
      title: { fr: 'Salon de beauté',         en: 'Beauty salon' },
      desc:  { fr: 'Soins visage, coiffure et manucure dans un cadre raffiné.', en: 'Facial care, hair and manicure services in a refined setting.' } }
  ]
};

export const AQUA_DINING_VENUES = {
  eyebrow: { fr: 'Gastronomie & Loisirs', en: 'Gastronomy & Leisure' },
  title:   { fr: 'Une offre culinaire variée et innovante.', en: 'A varied and innovative culinary offer.' },
  venues: [
    { name: 'Le Bronze · Sea Food & Grill',
      image: '/img/aqua/dining/DSC00171.webp',
      desc: { fr: 'Spécialités de fruits de mer et cuisine méditerranéenne.', en: 'Seafood specialties and Mediterranean cuisine.' } },
    { name: 'Barbecue à Table',
      image: '/img/aqua/bronz/photos2273.webp',
      desc: { fr: 'Grillades en live cooking pour une expérience conviviale.', en: 'Live-cooking grills for a convivial experience.' } },
    { name: 'Play & Jump Park',
      image: '/img/aqua/wejump/IMG_8884.webp',
      desc: { fr: 'Espace de loisirs interactif pour petits et grands.', en: 'Interactive leisure space for young and old alike.' } },
    { name: 'Crepland & Food Snacks',
      image: '/img/aqua/dining/DSC00440.webp',
      desc: { fr: 'Crêpes gourmandes et en-cas savoureux à toute heure.', en: 'Gourmet crêpes and savory snacks all day long.' } },
    { name: 'Bars & Lounges',
      image: '/img/aqua/cocktails/DSC00735.webp',
      desc: { fr: 'Cocktails raffinés et ambiance détente en bord de piscine.', en: 'Refined cocktails and a relaxed poolside ambience.' } }
  ]
};

export const AQUA_PACK_OFFER = {
  eyebrow: { fr: 'Réservez Votre Séjour', en: 'Book Your Stay' },
  title:   { fr: 'Pack Hôtel & Aquaparc.', en: 'Hotel & Aquapark Pack.' },
  sub: {
    fr: 'Séjournez dans le plus beau resort aquatique de la région — accès exclusif aux attractions inclus.',
    en: 'Stay in the region’s most beautiful water resort — exclusive access to attractions included.'
  },
  perks: [
    { fr: 'Réservation simple et rapide via notre plateforme en ligne.', en: 'Simple, fast booking via our online platform.' },
    { fr: 'Offres spéciales pour les réservations anticipées et les séjours prolongés.', en: 'Special offers for early bookings and extended stays.' },
    { fr: 'Pack Hôtel & Aquaparc avec accès exclusif aux attractions.', en: 'Hotel & Aquapark pack with exclusive access to attractions.' }
  ]
};

// =====================================================================
// AQUA — Additional experiences (We Jump / Edge, AquaFit, Palais des Congrès, Reels)
// =====================================================================
export const AQUA_WEJUMP = {
  eyebrow:    { fr: 'Salle de jeux · Famille', en: 'Game arcade · Family' },
  title:      { fr: 'Play & Jump · L\'Edge.', en: 'Play & Jump · The Edge.' },
  sub: {
    fr: 'Trampolines géants, parcours d\'agilité, arcades, simulateurs et terrains pour grimper, sauter, défier — une parenthèse adrénaline pour toute la famille au cœur du resort.',
    en: 'Giant trampolines, agility courses, arcades, simulators and courts to climb, jump, challenge — an adrenaline escape for the whole family at the heart of the resort.'
  },
  images: [
    '/img/aqua/wejump/DSC09796.webp',
    '/img/aqua/wejump/DSC09797.webp',
    '/img/aqua/wejump/DSC09803.webp',
    '/img/aqua/wejump/DSC09887.webp',
    '/img/aqua/wejump/IMG_8851.webp',
    '/img/aqua/wejump/IMG_8884.webp',
    '/img/aqua/wejump/IMG_8896.webp',
    '/img/aqua/wejump/IMG_8917.webp',
    '/img/aqua/wejump/IMG_8933.webp'
  ],
  badges: [
    { fr: 'Trampoline Park',  en: 'Trampoline Park' },
    { fr: 'Edge & Arcades',   en: 'Edge & Arcades' },
    { fr: 'Parcours Ninja',   en: 'Ninja Course' },
    { fr: 'Tous les âges',    en: 'All ages' }
  ],
  instagram: 'https://www.instagram.com/play_and_jump_park?igsh=MXZtZHUwZW1nc3YzZg=='
};

export const AQUA_AQUAFIT = {
  eyebrow:    { fr: 'AquaFit · Move Up Club', en: 'AquaFit · Move Up Club' },
  title:      { fr: 'Se dépasser, en mode resort.', en: 'Push your limits, resort-style.' },
  sub: {
    fr: 'Salle de sport haut-de-gamme, espace cardio, GymBox de combat, coaching personnalisé et cours collectifs : votre routine fitness sans quitter le resort.',
    en: 'High-end gym, cardio space, combat GymBox, personal coaching and group classes: keep your fitness routine without leaving the resort.'
  },
  amenities: {
    fr: ['Cardio & Musculation', 'GymBox · Boxe', 'Coaching personnel', 'Cours collectifs', 'Vestiaires & douches', 'Accès 7j/7'],
    en: ['Cardio & Strength',    'GymBox · Boxing','Personal coaching',  'Group classes',  'Locker rooms & showers','7-day access']
  },
  images: [
    '/img/aqua/aquafit/DSC05621.webp',
    '/img/aqua/aquafit/DSC05636.webp',
    '/img/aqua/aquafit/DSC02213.webp',
    '/img/aqua/aquafit/DSC02223.webp',
    '/img/aqua/aquafit/DSC02194.webp',
    '/img/aqua/aquafit/DSC02181.webp'
  ],
  instagram: 'https://www.instagram.com/aqua_fit_kenitra?igsh=MWdkZ3ZqaHR2bW5ydg=='
};

export const AQUA_PALAIS = {
  eyebrow:    { fr: 'Palais des Congrès · Ballroom', en: 'Convention Palace · Ballroom' },
  title:      { fr: 'Un seul lieu. Deux signatures.', en: 'One venue. Two signatures.' },
  sub: {
    fr: 'Le plus grand espace évènementiel de la région — congrès, séminaires, mariages et galas — jusqu\'à 1 200 invités sous un volume cathédrale, en plein cœur du resort.',
    en: 'The region\'s largest event venue — congresses, seminars, weddings and galas — up to 1,200 guests beneath a cathedral-scale ceiling at the heart of the resort.'
  },
  video:  '/videos/aqua-palais.mp4',
  poster: '/img/aqua/ballroom/palais-poster.webp',
  stats: [
    { value: '1 200', label: { fr: 'invités max',    en: 'guests max' } },
    { value: '1 500', label: { fr: 'm² modulables',   en: 'm² modular' } },
    { value: '10 m',  label: { fr: 'hauteur sous plafond', en: 'ceiling height' } },
    { value: '2',     label: { fr: 'noms · 1 lieu',   en: 'names · 1 venue' } }
  ],
  gallery: [
    '/img/aqua/congres/DJI_0183.webp',
    '/img/aqua/congres/DJI_0185.webp',
    '/img/aqua/congres/DSC01170-HDR.webp',
    '/img/aqua/congres/DSC01176-HDR.webp',
    '/img/aqua/congres/DSC01182-HDR.webp',
    '/img/aqua/congres/DSC01216-HDR.webp',
    '/img/aqua/congres/DSC01198.webp',
    '/img/aqua/congres/DSC01231.webp'
  ]
};

export const AQUA_REELS = [
  { src: '/videos/aqua-reel-1.mp4', poster: '/img/aqua/reels/reel-1.webp', label: { fr: 'Aqua Resort · Vibes',   en: 'Aqua Resort · Vibes' } },
  { src: '/videos/aqua-reel-2.mp4', poster: '/img/aqua/reels/reel-2.webp', label: { fr: 'Aquaparc · Sensations', en: 'Aquapark · Sensations' } },
  { src: '/videos/aqua-reel-3.mp4', poster: '/img/aqua/reels/reel-3.webp', label: { fr: 'Pool & Sunset',          en: 'Pool & Sunset' } },
  { src: '/videos/aqua-reel-4.mp4', poster: '/img/aqua/reels/reel-4.webp', label: { fr: 'Family Moments',         en: 'Family Moments' } },
  { src: '/videos/aqua-reel-5.mp4', poster: '/img/aqua/reels/reel-5.webp', label: { fr: 'Night Show',             en: 'Night Show' } }
];

// =====================================================================
// VITALITY — Spec-aligned additions (Pro services, room amenities, booking)
// =====================================================================
export const VITALITY_PRO_SERVICES = {
  eyebrow: { fr: 'Services aux Professionnels', en: 'Professional Services' },
  title:   { fr: 'Des infrastructures pensées pour vos séjours d’affaires.', en: 'Infrastructure built for your business stays.' },
  items: [
    { icon: '◇',
      title: { fr: 'Business Center',           en: 'Business Center' },
      desc:  { fr: 'Équipé pour le travail et les visioconférences.', en: 'Equipped for work and video conferencing.' } },
    { icon: '◈',
      title: { fr: 'Salles de réunion & conférence', en: 'Meeting & conference rooms' },
      desc:  { fr: 'Dotées d’équipements audiovisuels modernes.', en: 'Featuring modern audio-visual equipment.' } },
    { icon: '◉',
      title: { fr: 'Espaces de coworking',      en: 'Coworking spaces' },
      desc:  { fr: 'Pour travailler en toute tranquillité.', en: 'To work in absolute calm.' } },
    { icon: '☕',
      title: { fr: 'Traiteur & pauses-café',    en: 'Catering & coffee breaks' },
      desc:  { fr: 'Pour vos événements professionnels et séminaires.', en: 'For your corporate events and seminars.' } }
  ]
};

export const VITALITY_ROOM_AMENITIES = {
  eyebrow: { fr: 'Chambres & Équipements', en: 'Rooms & Amenities' },
  title:   { fr: 'Le confort dans chaque détail.', en: 'Comfort in every detail.' },
  intro: {
    fr: 'Nos chambres sont pensées pour offrir un maximum de confort et de fonctionnalité — du voyageur d’affaires de passage au séjour long.',
    en: 'Our rooms are designed for maximum comfort and functionality — from the passing business traveler to extended stays.'
  },
  tiers: [
    { title: { fr: 'Chambres Standard & Supérieures', en: 'Standard & Superior Rooms' },
      desc:  { fr: 'Literie de qualité, bureau de travail, Wi-Fi haut débit.',
               en: 'Quality bedding, work desk, high-speed Wi-Fi.' } },
    { title: { fr: 'Chambres Premium', en: 'Premium Rooms' },
      desc:  { fr: 'Plus spacieuses, avec des équipements haut de gamme.',
               en: 'More spacious, with premium-grade amenities.' } }
  ],
  included: {
    label: { fr: 'Prestations incluses', en: 'Included' },
    items: [
      { fr: 'Climatisation',          en: 'Air conditioning' },
      { fr: 'TV écran plat',           en: 'Flat-screen TV' },
      { fr: 'Coffre-fort',             en: 'Safe' },
      { fr: 'Minibar',                 en: 'Minibar' },
      { fr: 'Service de blanchisserie',en: 'Laundry service' }
    ]
  }
};

export const VITALITY_BOOKING_SECTION = {
  eyebrow: { fr: 'Réservation en Ligne', en: 'Online Booking' },
  title:   { fr: 'Séjournez dans un hôtel moderne et parfaitement situé.', en: 'Stay in a modern, perfectly located hotel.' },
  perks: [
    { fr: 'Réservation rapide et sécurisée.', en: 'Fast and secure booking.' },
    { fr: 'Meilleurs tarifs garantis en direct.', en: 'Best rates guaranteed when booking direct.' },
    { fr: 'Packages affaires & bien-être personnalisés.', en: 'Tailored business & wellness packages.' },
    { fr: 'Offres long séjour pour les clients en déplacement prolongé.', en: 'Long-stay offers for extended business travelers.' }
  ]
};

// =====================================================================
// CITY — Spec-aligned additions (Pro services, room amenities, business pack)
// =====================================================================
export const CITY_PRO_SERVICES = {
  eyebrow: { fr: 'Services aux Professionnels', en: 'Professional Services' },
  title:   { fr: 'Tout pour vos réunions et séminaires.', en: 'Everything for your meetings and seminars.' },
  items: [
    { icon: '◇',
      title: { fr: 'Salles de conférence & réunion', en: 'Conference & meeting rooms' },
      desc:  { fr: 'Équipées de vidéoprojecteurs et connexion internet rapide.',
               en: 'Equipped with video projectors and fast internet connection.' } },
    { icon: '◈',
      title: { fr: 'Espaces de coworking', en: 'Coworking spaces' },
      desc:  { fr: 'Parfaits pour travailler dans un environnement calme et professionnel.',
               en: 'Perfect for working in a calm, professional environment.' } },
    { icon: '◉',
      title: { fr: 'Traiteur & pauses-café', en: 'Catering & coffee breaks' },
      desc:  { fr: 'Pour accompagner vos événements professionnels.',
               en: 'To complement your corporate events.' } }
  ]
};

export const CITY_ROOM_AMENITIES = {
  eyebrow: { fr: 'Présentation des Chambres', en: 'Our Rooms' },
  title:   { fr: 'Modernes, fonctionnelles, accueillantes.', en: 'Modern, functional and welcoming.' },
  tiers: [
    { title: { fr: 'Chambres Standard & Supérieures', en: 'Standard & Superior Rooms' },
      desc:  { fr: 'Espace optimisé avec bureau, TV écran plat, climatisation et Wi-Fi haut débit.',
               en: 'Optimized space with desk, flat-screen TV, air conditioning and high-speed Wi-Fi.' } },
    { title: { fr: 'Chambres Familiales', en: 'Family Rooms' },
      desc:  { fr: 'Adaptées aux séjours en groupe ou en famille, avec options de lits supplémentaires.',
               en: 'Suited to group or family stays, with extra-bed options.' } }
  ],
  included: {
    label: { fr: 'Équipements', en: 'Amenities' },
    items: [
      { fr: 'Coffre-fort',              en: 'Safe' },
      { fr: 'Minibar',                  en: 'Minibar' },
      { fr: 'Service de blanchisserie', en: 'Laundry service' },
      { fr: 'Salle de bain privative',  en: 'Private bathroom' },
      { fr: 'Articles de toilette offerts', en: 'Complimentary toiletries' }
    ]
  }
};

export const CITY_BUSINESS_PACK = {
  eyebrow: { fr: 'Offres Spéciales & Promotions', en: 'Special Offers & Promotions' },
  title:   { fr: 'Tarifs exclusifs adaptés à vos besoins.', en: 'Exclusive rates tailored to your needs.' },
  perks: [
    { fr: 'Réductions pour les réservations anticipées.', en: 'Discounts for early bookings.' },
    { fr: 'Formules Séminaire & Business Pack.', en: 'Seminar & Business Pack formulas.' },
    { fr: 'Offres spéciales pour les longs séjours.', en: 'Special long-stay offers.' }
  ]
};

