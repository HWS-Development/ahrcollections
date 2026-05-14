// =====================================================================
// AHR Collections — Per-hotel content (rooms, amenities, stats, info)
// =====================================================================

const SUPA = 'https://nvskwcjdrrrcpyiadoxy.supabase.co/storage/v1/object/public/AHR_COLLECTIONS';
const UP   = (id) => `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=1600&q=60`;

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
    fr: 'À 50 m de la gare LGV · 4 étoiles · Kénitra',
    en: '50 m from LGV station · 4 stars · Kénitra'
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
      `${SUPA}/VITALITY/SuperieurGrandlit_Vitality/photos%20-2082.jpg?q=60`,
      `${SUPA}/VITALITY/SuperieurGrandlit_Vitality/photos%20-2083.jpg?q=60`,
      `${SUPA}/VITALITY/SuperieurGrandlit_Vitality/photos%20-2084.jpg?q=60`,
      `${SUPA}/VITALITY/SuperieurGrandlit_Vitality/photos%20-2085.jpg?q=60`,
      `${SUPA}/VITALITY/SuperieurGrandlit_Vitality/photos%20-2086.jpg?q=60`,
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
      `${SUPA}/VITALITY/CONFORT_TWIN/confort_twin1.jpg?q=60`,
      `${SUPA}/VITALITY/CONFORT_TWIN/confort_twin2.jpg?q=60`,
      `${SUPA}/VITALITY/CONFORT_TWIN/confort_twin3.jpg?q=60`,
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
      `${SUPA}/VITALITY/SUP_TWIN_GL/sup_twin_gl6.jpg?q=60`,
      `${SUPA}/VITALITY/SUP_TWIN_GL/sup_twin_gl2.jpg?q=60`,
      `${SUPA}/VITALITY/SUP_TWIN_GL/sup_twin_gl3.jpg?q=60`,
      `${SUPA}/VITALITY/SUP_TWIN_GL/sup_twin_gl4.jpg?q=60`,
      `${SUPA}/VITALITY/SUP_TWIN_GL/sup_twin_gl5.jpg?q=60`,
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
      `${SUPA}/VITALITY/SUITE_JUNIOR/DSC07776.jpg?q=60`,
      `${SUPA}/VITALITY/SUITE_JUNIOR/DSC07776-2.jpg?q=60`,
      `${SUPA}/VITALITY/SUITE_JUNIOR/DSC07776-3.jpg?q=60`,
      `${SUPA}/VITALITY/SUITE_JUNIOR/photos%20-2024.jpg?q=60`,
      `${SUPA}/VITALITY/SUITE_JUNIOR/photos%20-2025.jpg?q=60`,
      `${SUPA}/VITALITY/SUITE_JUNIOR/photos%20-2026.jpg?q=60`,
      `${SUPA}/VITALITY/SUITE_JUNIOR/photos%20-2027.jpg?q=60`,
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
      `${SUPA}/VITALITY/SUITE_JUNIOR/photos%20-2028.jpg?q=60`,
      `${SUPA}/VITALITY/SUITE_JUNIOR/photos%20-2030.jpg?q=60`,
      `${SUPA}/VITALITY/SUITE_JUNIOR/photos%20-2032.jpg?q=60`,
      `${SUPA}/VITALITY/SUITE_JUNIOR/photos%20-2034.jpg?q=60`,
      `${SUPA}/VITALITY/SUITE_JUNIOR/photos%20-2036.jpg?q=60`,
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
  { icon: '⊕', title: { fr: 'Service 24h/24', en: '24-hour service' },
    desc: { fr: 'Réception et room service disponibles 24h/24, 7j/7 pour votre confort.', en: '24/7 front desk and room service always at your disposal.' } },
  { icon: '∿', title: { fr: 'Fitness Center', en: 'Fitness Center' },
    desc: { fr: 'Salle de fitness entièrement équipée pour maintenir votre rythme, où que vous soyez.', en: 'Fully equipped fitness centre to keep your pace, wherever you are.' } },
  { icon: '◈', title: { fr: '3 Salles Modulables', en: '3 Modular Rooms' },
    desc: { fr: 'Trois espaces événementiels avec équipements audiovisuels professionnels pour vos réunions.', en: 'Three event spaces with professional A/V for all your meetings.' } },
  { icon: '◇', title: { fr: 'Terrasse & Vue ville', en: 'Terrace & City view' },
    desc: { fr: 'Une terrasse panoramique pour souffler entre deux rendez-vous et profiter du panorama de Kénitra.', en: 'A panoramic terrace to unwind between meetings and enjoy Kénitra\'s skyline.' } },
];

// ─────────────────────────────────────────────────────────────────────
// WAVES AQUA RESORT
// ─────────────────────────────────────────────────────────────────────

export const AQUA_INFO = {
  stars:      5,
  phone:      '+212 537 304 141',
  bookingUrl: 'https://wavesaquaparc.com',
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

export const AQUA_ROOMS = [
  {
    id: 'sup-terrasse-gl',
    label:    { fr: 'Supérieure Terrasse GL', en: 'Superior Terrace King' },
    tag:      { fr: 'Terrasse privée · Vue piscine', en: 'Private terrace · Pool view' },
    headline: { fr: 'L\'éveil au bord de l\'eau.', en: 'Waking up at the water\'s edge.' },
    description: {
      fr: 'Une terrasse privée face à la piscine, décor tropical soigné, lit King Size et lumière naturelle généreuse. La chambre Supérieure Terrasse est pensée pour ceux qui veulent que le luxe commence dès le réveil.',
      en: 'A private terrace facing the pool, thoughtful tropical décor, King Size bed and generous natural light. The Superior Terrace room is designed for those who want luxury to begin from the moment they wake.'
    },
    amenities: { fr: ['Terrasse privée', 'Vue piscine', 'Lit King Size', 'Wi-Fi', 'Climatisation', 'Mini-bar'], en: ['Private terrace', 'Pool view', 'King Size bed', 'Wi-Fi', 'Air conditioning', 'Minibar'] },
    photos: [UP('1582719508461-905c673771fd'), UP('1571003123894-1f0594d2b5d9'), UP('1540541338287-41700207dee6'), UP('1602002418082-a4443e081dd1')]
  },
  {
    id: 'sup-gl',
    label:    { fr: 'Supérieure GL', en: 'Superior King' },
    tag:      { fr: 'Vue jardin · King Size', en: 'Garden view · King Size' },
    headline: { fr: 'La sérénité tropicale au quotidien.', en: 'Tropical serenity, every day.' },
    description: {
      fr: 'Baignée de lumière naturelle avec vue sur les jardins tropicaux, notre chambre Supérieure GL est un refuge intimiste. Commencez chaque journée avec la douceur d\'un cadre pensé pour la détente.',
      en: 'Bathed in natural light overlooking tropical gardens, our Superior GL room is an intimate retreat. Begin each day in the gentle comfort of a space designed for relaxation.'
    },
    amenities: { fr: ['Vue jardin', 'Lit King Size', 'Wi-Fi', 'Climatisation', 'Salle de bain', 'TV satellite'], en: ['Garden view', 'King Size bed', 'Wi-Fi', 'Air conditioning', 'Bathroom', 'Satellite TV'] },
    photos: [UP('1561501900-3701fa6a0864'), UP('1559599238-308793637427'), UP('1540555700478-4be289fbecef'), UP('1571896349842-33c89424de2d')]
  },
  {
    id: 'deluxe-piscine-gl',
    label:    { fr: 'Deluxe Piscine GL', en: 'Deluxe Pool King' },
    tag:      { fr: 'Accès direct piscine · Deluxe', en: 'Direct pool access · Deluxe' },
    headline: { fr: 'Plonger sans quitter sa chambre.', en: 'Dive in without leaving your room.' },
    description: {
      fr: 'Accès direct à la piscine depuis votre chambre Deluxe. Grandes baies vitrées, espace généreux, literie haut de gamme — pour les amateurs de piscine qui refusent de sacrifier le confort.',
      en: 'Direct pool access straight from your Deluxe room. Large picture windows, generous space, premium bedding — for pool lovers who refuse to sacrifice comfort.'
    },
    amenities: { fr: ['Accès piscine direct', 'Baies vitrées', 'Lit King Size', 'Wi-Fi', 'Mini-bar', 'Coffre-fort'], en: ['Direct pool access', 'Picture windows', 'King Size bed', 'Wi-Fi', 'Minibar', 'Safety box'] },
    photos: [UP('1582719478250-c89cae4dc85b'), UP('1431540015161-0bf868a2d407'), UP('1577412647305-991150c7d163'), UP('1551882547-ff40c63fe5fa')]
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
    photos: [UP('1564501049412-61c2a3083791'), UP('1542314831-068cd1dbfeeb'), UP('1505693416388-ac5ce068fe85'), UP('1542744173-8e7e53415bb0')]
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
    photos: [UP('1571003123894-1f0594d2b5d9'), UP('1582719508461-905c673771fd'), UP('1540541338287-41700207dee6'), UP('1559599238-308793637427')]
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
    photos: [UP('1602002418082-a4443e081dd1'), UP('1561501900-3701fa6a0864'), UP('1540555700478-4be289fbecef'), UP('1571896349842-33c89424de2d')]
  },
  {
    id: 'deluxe-family',
    label:    { fr: 'Deluxe Family', en: 'Deluxe Family' },
    tag:      { fr: 'Famille · Espace généreux', en: 'Family · Generous space' },
    headline: { fr: 'Le luxe du partage familial.', en: 'The luxury of family sharing.' },
    description: {
      fr: 'Conçue pour les familles, cette chambre spacieuse offre tout le confort pour les parents comme les enfants. Un espace de vie généreux, une salle de bain complète et une décoration chaleureuse et lumineuse.',
      en: 'Designed for families, this spacious room offers full comfort for parents and children alike. Generous living space, complete bathroom and warm, bright décor.'
    },
    amenities: { fr: ['Configuration famille', 'Espace généreux', 'Wi-Fi', 'Climatisation', 'Mini-bar', 'Coffre-fort'], en: ['Family layout', 'Generous space', 'Wi-Fi', 'Air conditioning', 'Minibar', 'Safety box'] },
    photos: [UP('1582719478250-c89cae4dc85b'), UP('1551882547-ff40c63fe5fa'), UP('1505693416388-ac5ce068fe85'), UP('1542314831-068cd1dbfeeb')]
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
    photos: [UP('1564501049412-61c2a3083791'), UP('1542314831-068cd1dbfeeb'), UP('1577412647305-991150c7d163'), UP('1431540015161-0bf868a2d407')]
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
    photos: [UP('1571003123894-1f0594d2b5d9'), UP('1582719508461-905c673771fd'), UP('1540555700478-4be289fbecef'), UP('1602002418082-a4443e081dd1')]
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
    photos: [UP('1582719478250-c89cae4dc85b'), UP('1431540015161-0bf868a2d407'), UP('1505693416388-ac5ce068fe85'), UP('1542744173-8e7e53415bb0')]
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
    photos: [UP('1561501900-3701fa6a0864'), UP('1559599238-308793637427'), UP('1571896349842-33c89424de2d'), UP('1540555700478-4be289fbecef')]
  },
];

export const AQUA_STATS = [
  { value: 66, symbol: '◇', label: { fr: 'Chambres & Suites', en: 'Rooms & Suites' } },
  { value: 3,  symbol: '◉', label: { fr: 'Salles de Réunions', en: 'Meeting Rooms'  } },
  { value: 2,  symbol: '◌', label: { fr: 'Restaurants',        en: 'Restaurants'    } },
  { value: 5,  symbol: '✦', label: { fr: 'Étoiles',            en: 'Stars'          } },
];

export const AQUA_FEATURES = [
  { icon: '∿', title: { fr: 'Piscine Extérieure', en: 'Outdoor Pool' },
    desc: { fr: 'Grande piscine extérieure avec espaces détente, transats et service de bar en bord de piscine.', en: 'Large outdoor pool with relaxation areas, sun loungers and poolside bar service.' } },
  { icon: '◉', title: { fr: 'Restauration & Terrasse', en: 'Dining & Terrace' },
    desc: { fr: 'Restaurant sur place avec buffet petit-déjeuner, dîners et terrasse animée.', en: 'On-site restaurant with breakfast buffet, dinners and lively terrace.' } },
  { icon: '◇', title: { fr: 'Navette Aéroport', en: 'Airport Shuttle' },
    desc: { fr: 'Navette disponible vers l\'aéroport international Rabat-Salé à 36 km.', en: 'Shuttle service available to Rabat-Salé International Airport, 36 km away.' } },
  { icon: '◈', title: { fr: 'Jardin & Parking', en: 'Garden & Parking' },
    desc: { fr: 'Jardin tropical soigné et parking privé gratuit sur place.', en: 'Beautifully maintained tropical garden and free private parking on site.' } },
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
    fr: 'Hôtel 3 étoiles · Restaurant & Bar · Kénitra',
    en: '3-star hotel · Restaurant & Bar · Kénitra'
  }
};

const UC = (id) => `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=1600&q=60`;

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
    photos: [UC('1611892440504-42a792e24d32'), UC('1566665797739-1674de7a421a'), UC('1591088398332-8a7791972843'), UC('1559339352-11d035aa65de')]
  },
  {
    id: 'cosy-twin',
    label:    { fr: 'Chambre Cosy Twin', en: 'Cosy Twin Room' },
    tag:      { fr: 'Deux lits · Confort urbain · 25 m²', en: 'Two beds · Urban comfort · 25 m²' },
    headline: { fr: 'Partager la ville, deux à deux.', en: 'Sharing the city, two by two.' },
    description: {
      fr: 'Articles de toilette gratuits, minibar, coffre-fort et télévision à écran plat — notre Cosy Twin offre tout le nécessaire pour un séjour agréable. Deux lits, une atmosphère urbaine et accueillante.',
      en: 'Complimentary toiletries, minibar, safe deposit and flat-screen TV — our Cosy Twin has everything needed for a pleasant stay. Two beds, an urban and welcoming atmosphere.'
    },
    amenities: { fr: ['Lits Jumeaux', 'Mini-bar', 'TV satellite', 'Climatisation', 'Coffre-fort', 'Non-fumeur'], en: ['Twin beds', 'Minibar', 'Satellite TV', 'Air conditioning', 'Safety box', 'Non-smoking'] },
    photos: [UC('1542314831-068cd1dbfeeb'), UC('1551776235-dde6d4829808'), UC('1485921325833-c519f76c4927'), UC('1564501049412-61c2a3083791')]
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
    photos: [UC('1566665797739-1674de7a421a'), UC('1611892440504-42a792e24d32'), UC('1591088398332-8a7791972843'), UC('1542314831-068cd1dbfeeb')]
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
    photos: [UC('1559339352-11d035aa65de'), UC('1485921325833-c519f76c4927'), UC('1551776235-dde6d4829808'), UC('1564501049412-61c2a3083791')]
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
    photos: [UC('1542314831-068cd1dbfeeb'), UC('1566665797739-1674de7a421a'), UC('1611892440504-42a792e24d32'), UC('1551776235-dde6d4829808')]
  },
];

export const CITY_STATS = [
  { value: 39, symbol: '◇', label: { fr: 'Chambres & Suites', en: 'Rooms & Suites' } },
  { value: 2,  symbol: '◉', label: { fr: 'Salles de Réunions', en: 'Meeting Rooms'  } },
  { value: 1,  symbol: '◌', label: { fr: 'Restaurant & Bar',   en: 'Restaurant & Bar'} },
  { value: 3,  symbol: '✦', label: { fr: 'Étoiles',            en: 'Stars'          } },
];

export const CITY_FEATURES = [
  { icon: '◇', title: { fr: 'Restaurant & Bar', en: 'Restaurant & Bar' },
    desc: { fr: 'Restaurant et bar sur place — brunchs, dîners en soirée et moments de convivialité.', en: 'On-site restaurant and bar — brunches, evening dinners and convivial moments.' } },
  { icon: '◉', title: { fr: 'Service en chambre', en: 'Room Service' },
    desc: { fr: 'Room service disponible pour vos repas et boissons, à toute heure.', en: 'Room service available for meals and drinks at any hour.' } },
  { icon: '◌', title: { fr: 'Terrasse animée', en: 'Lively Terrace' },
    desc: { fr: 'Une terrasse idéale pour observer le rythme de la ville de Kénitra et ses avenues.', en: 'A terrace perfect for watching the lively rhythm of Kénitra\'s streets.' } },
  { icon: '✦', title: { fr: 'Visites guidées', en: 'Guided Tours' },
    desc: { fr: 'Notre équipe organise des visites guidées pour découvrir Kénitra et ses environs.', en: 'Our team organises guided tours to discover Kénitra and its surroundings.' } },
];

// ─────────────────────────────────────────────────────────────────────
// VITALITY — Restaurant, Fitness & Meeting Rooms
// ─────────────────────────────────────────────────────────────────────

export const VITALITY_RESTAURANT = {
  heroImage: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1600&q=60',
  eyebrow: { fr: 'Gastronomie', en: 'Gastronomy' },
  title: { fr: 'Restaurant International', en: 'International Restaurant' },
  sub: { fr: 'Une expérience culinaire à la hauteur de vos ambitions.', en: 'A culinary experience matching your ambitions.' },
  body: {
    fr: [
      'Une carte variée avec des plats savoureux du monde entier.',
      'Petit-déjeuner buffet : une sélection généreuse de produits frais et équilibrés.',
      'Room Service disponible pour un confort optimal en chambre.',
    ],
    en: [
      'A varied menu featuring delicious dishes from around the world.',
      'Breakfast buffet: a generous selection of fresh, balanced products.',
      'Room Service available for optimal in-room comfort.',
    ],
  },
  amenities: {
    fr: ['Cuisine internationale', 'Buffet petit-déjeuner', 'Room Service', 'Dîner à la carte', 'Terrasse', 'Privatisation'],
    en: ['International cuisine', 'Breakfast buffet', 'Room Service', 'À la carte dinner', 'Terrace', 'Private hire'],
  },
};

export const VITALITY_FITNESS = {
  image: 'https://images.unsplash.com/photo-1534438327993-c9de87398bd0?auto=format&fit=crop&w=1600&q=60',
  eyebrow: { fr: 'Bien-être & Vitalité', en: 'Wellbeing & Vitality' },
  title: { fr: 'Espace Fitness', en: 'Fitness Center' },
  sub: { fr: 'Maintenez votre rythme, où que vous soyez.', en: 'Keep your pace, wherever you are.' },
  body: {
    fr: 'Salle de fitness entièrement équipée, disponible à toute heure pour les clients de l\'hôtel. Cardio, musculation, étirements — tout est réuni pour ne jamais interrompre votre routine.',
    en: 'Fully equipped fitness centre, available round the clock for hotel guests. Cardio, weights, stretching — everything in one place so your routine never stops.',
  },
  amenities: {
    fr: ['Cardio training', 'Musculation', 'Tapis de course', 'Vélo elliptique', 'Accès 24h/24', 'Serviettes offertes'],
    en: ['Cardio training', 'Weight training', 'Treadmills', 'Elliptical bike', '24h access', 'Complimentary towels'],
  },
};

const VM_MARRAKECH = `${SUPA}/VITALITY/SALLE_CONFERENCE/MARRAKECH`;
const VM_AGADIR    = `${SUPA}/VITALITY/SALLE_CONFERENCE/AGADIR`;
const VM_RABAT     = `${SUPA}/VITALITY/SALLE_CONFERENCE/RABAT`;

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
    image: `${VM_MARRAKECH}/photos%20-2093.jpg?q=60`,
    photos: [
      `${VM_MARRAKECH}/photos%20-2093.jpg?q=60`,
      `${VM_MARRAKECH}/photos%20-2095.jpg?q=60`,
      `${VM_MARRAKECH}/photos%20-2096.jpg?q=60`,
      `${VM_MARRAKECH}/photos%20-2097.jpg?q=60`,
      `${VM_MARRAKECH}/photos%20-2098.jpg?q=60`,
      `${VM_MARRAKECH}/photos%20-2101.jpg?q=60`,
      `${VM_MARRAKECH}/photos%20-2102.jpg?q=60`,
      `${VM_MARRAKECH}/photos%20-2103.jpg?q=60`,
      `${VM_MARRAKECH}/photos%20-2104.jpg?q=60`,
      `${VM_MARRAKECH}/photos%20-2105.jpg?q=60`,
      `${VM_MARRAKECH}/photos%20-2106.jpg?q=60`,
      `${VM_MARRAKECH}/photos%20-2109.jpg?q=60`,
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
    image: `${VM_AGADIR}/photos%20-2108.jpg?q=60`,
    photos: [
      `${VM_AGADIR}/photos%20-2108.jpg?q=60`,
      `${VM_AGADIR}/photos%20-2114.jpg?q=60`,
      `${VM_AGADIR}/photos%20-2115.jpg?q=60`,
      `${VM_AGADIR}/photos%20-2116.jpg?q=60`,
      `${VM_AGADIR}/photos%20-2117.jpg?q=60`,
      `${VM_AGADIR}/photos%20-2118.jpg?q=60`,
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
    image: `${VM_RABAT}/photos%20-2107.jpg?q=60`,
    photos: [
      `${VM_RABAT}/photos%20-2107.jpg?q=60`,
      `${VM_RABAT}/photos%20-2135.jpg?q=60`,
      `${VM_RABAT}/photos%20-2136.jpg?q=60`,
      `${VM_RABAT}/photos%20-2137.jpg?q=60`,
      `${VM_RABAT}/photos%20-2138.jpg?q=60`,
      `${VM_RABAT}/photos%20-2139.jpg?q=60`,
      `${VM_RABAT}/photos%20-2140.jpg?q=60`,
      `${VM_RABAT}/photos%20-2141.jpg?q=60`,
    ],
  },
];

// ─────────────────────────────────────────────────────────────────────
// CITY — Restaurant & Meeting Rooms
// ─────────────────────────────────────────────────────────────────────

export const CITY_RESTAURANT = {
  heroImage: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1600&q=60',
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
    fr: ['Cuisine marocaine & internationale', 'Buffet petit-déjeuner', 'Déjeuner & dîner', 'Soft Bar', 'Terrasse animée', 'Room Service'],
    en: ['Moroccan & international cuisine', 'Breakfast buffet', 'Lunch & dinner', 'Soft Bar', 'Lively terrace', 'Room Service'],
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
    image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=1200&q=60',
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
    image: 'https://images.unsplash.com/photo-1517502884422-41eaead166d4?auto=format&fit=crop&w=1200&q=60',
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
    image: 'https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=1600&q=60',
    icon: '∿',
    wide: true,
  },
  {
    id: 'relax',
    label: { fr: 'Stay & Relax', en: 'Stay & Relax' },
    sub: { fr: 'Piscine, transat et sérénité au bord de l\'eau', en: 'Pool, sun lounger and serenity waterside' },
    image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1200&q=60',
    icon: '◇',
    wide: false,
  },
  {
    id: 'convention',
    label: { fr: 'Convention Center', en: 'Convention Center' },
    sub: { fr: 'L\'endroit idéal pour vos événements d\'exception', en: 'The ideal venue for exceptional events' },
    image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=60',
    icon: '◈',
    wide: false,
  },
  {
    id: 'spa',
    label: { fr: 'Le Spa by Waves', en: 'The Waves Spa' },
    sub: { fr: 'Là où commence votre bien-être · 100% Femmes', en: 'Where your wellbeing begins · Ladies only' },
    image: 'https://images.unsplash.com/photo-1544161515-4be5c55f5fad?auto=format&fit=crop&w=1200&q=60',
    icon: '✦',
    wide: false,
  },
  {
    id: 'saveurs',
    label: { fr: 'Nos Saveurs', en: 'Our Flavours' },
    sub: { fr: 'Le goût des vacances, à chaque repas', en: 'The taste of holidays, every meal' },
    image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1200&q=60',
    icon: '◉',
    wide: false,
  },
  {
    id: 'aquafit',
    label: { fr: 'Aquafit', en: 'Aquafit' },
    sub: { fr: 'Votre force, notre mission', en: 'Your strength, our mission' },
    image: 'https://images.unsplash.com/photo-1534438327993-c9de87398bd0?auto=format&fit=crop&w=1200&q=60',
    icon: '⊕',
    wide: true,
  },
  {
    id: 'ballroom',
    label: { fr: 'Le Ballroom', en: 'The Ballroom' },
    sub: { fr: 'La Salle des Merveilles', en: 'The Room of Wonders' },
    image: 'https://images.unsplash.com/photo-1519167758481-83f550bb1b6b?auto=format&fit=crop&w=1600&q=60',
    icon: '◌',
    wide: true,
  },
  {
    id: 'funzone',
    label: { fr: 'Fun Zone', en: 'Fun Zone' },
    sub: { fr: 'L\'énergie en plein vol !', en: 'Energy at full flight!' },
    image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1200&q=60',
    icon: '◐',
    wide: true,
  },
];

export const AQUA_CONVENTION = {
  eyebrow: { fr: 'Événements & Affaires', en: 'Events & Business' },
  title: { fr: 'Convention Center & Le Ballroom', en: 'Convention Center & The Ballroom' },
  sub: {
    fr: 'Organisez vos événements professionnels dans nos salles de conférence modernes et parfaitement équipées, ou offrez à vos invités une expérience inoubliable dans notre somptueuse salle de fêtes.',
    en: 'Host your professional events in our modern, fully-equipped conference rooms, or offer your guests an unforgettable experience in our sumptuous event hall.',
  },
  rooms: [
    {
      name: 'Salle Plénière',
      capacity: 100,
      tagline: { fr: 'Notre plus grande salle', en: 'Our largest room' },
      description: {
        fr: 'Parfaite pour conférences, assemblées et événements d\'envergure.',
        en: 'Perfect for conferences, assemblies and large-scale events.',
      },
      equipment: {
        fr: ['Sonorisation', 'Micros sans fil', 'Vidéoprojecteur', 'Écran LCD', 'Wi-Fi'],
        en: ['PA system', 'Wireless mics', 'Video projector', 'LCD screen', 'Wi-Fi'],
      },
      layouts: { fr: 'Théâtre, Classe, En U, Cabaret', en: 'Theatre, Classroom, U-shape, Cabaret' },
      image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=60',
    },
    {
      name: 'Salle New York',
      capacity: 30,
      tagline: { fr: 'Workshops & Formations', en: 'Workshops & Training' },
      description: {
        fr: 'Espace moderne pour workshops, réunions et formations.',
        en: 'Modern space for workshops, meetings and training sessions.',
      },
      equipment: {
        fr: ['Écran LCD', 'Micros avec fil', 'Vidéoprojecteur', 'Tableau interactif', 'Wi-Fi'],
        en: ['LCD screen', 'Wired mics', 'Video projector', 'Interactive board', 'Wi-Fi'],
      },
      layouts: { fr: 'En U, Classe, Théâtre, Cabaret', en: 'U-shape, Classroom, Theatre, Cabaret' },
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=60',
    },
    {
      name: 'Salle Paris',
      capacity: 14,
      tagline: { fr: 'Réunions Confidentielles', en: 'Private Meetings' },
      description: {
        fr: 'Salle intimiste, idéale pour petits groupes ou réunions confidentielles.',
        en: 'Intimate room, ideal for small groups or private meetings.',
      },
      equipment: {
        fr: ['Écran LCD', 'Paperboard', 'Système audio', 'Micro avec fil'],
        en: ['LCD screen', 'Flipchart', 'Audio system', 'Wired mic'],
      },
      layouts: { fr: 'Réunion', en: 'Meeting' },
      image: 'https://images.unsplash.com/photo-1517502884422-41eaead166d4?auto=format&fit=crop&w=1200&q=60',
    },
  ],
  ballroomImage: 'https://images.unsplash.com/photo-1519167758481-83f550bb1b6b?auto=format&fit=crop&w=1600&q=60',
  ballroomSub: {
    fr: 'Mariages, galas, soirées d\'entreprise ou célébrations privées — Le Ballroom vous accueille dans un cadre somptueux conçu pour l\'inoubliable.',
    en: 'Weddings, galas, corporate evenings or private celebrations — The Ballroom welcomes you in a sumptuous setting designed for the unforgettable.',
  },
};
