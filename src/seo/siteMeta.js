// =====================================================================
// AHR Collections — SEO source-of-truth (FR + EN)
// Single place to maintain page titles, meta descriptions, OG images,
// canonical URLs and JSON-LD structured data.
// =====================================================================

// Production site URL — used for canonical + OG + sitemap.
// ⚠ Update this if the production domain changes.
export const SITE_URL = 'https://www.ahrcollections.com';

export const DEFAULT_OG_IMAGE = '/img/aqua/pool/DJI_0097.webp';

// Per-route SEO content. Keys match React Router paths.
export const ROUTE_SEO = {
  '/': {
    title: {
      fr: 'AHR Collections — Quatre hôtels d’exception à Kénitra (Maroc)',
      en: 'AHR Collections — Four Signature Hotels in Kénitra, Morocco'
    },
    description: {
      fr: 'AHR Collections réunit quatre hôtels signatures à Kénitra : Waves Aqua Resort 5★, Royal Plaza, Vitality Terminus et City Hôtel by Waves. Réservation directe au meilleur tarif.',
      en: 'AHR Collections brings together four signature hotels in Kénitra: Waves Aqua Resort 5★, Royal Plaza, Vitality Terminus and City Hôtel by Waves. Direct booking at the best rate.'
    },
    image: DEFAULT_OG_IMAGE,
    keywords: 'hôtels Kénitra, hôtel 5 étoiles Maroc, AHR Collections, Waves Aqua Resort, Royal Plaza Kénitra, aquaparc Kénitra, séminaire Kénitra, mariage Kénitra'
  },
  '/about': {
    title: {
      fr: 'À propos — AHR Collections · Amwaj Hotels & Resorts',
      en: 'About — AHR Collections · Amwaj Hotels & Resorts'
    },
    description: {
      fr: 'AHR Collection (Amwaj Hotels & Resorts) : une marque marocaine d’excellence ancrée à Kénitra. Élégance, modernité et service sur-mesure pour affaires et loisirs.',
      en: 'AHR Collection (Amwaj Hotels & Resorts): a Moroccan brand of excellence rooted in Kénitra. Elegance, modernity and bespoke service for business and leisure.'
    },
    image: '/img/about/general/DSC01277.webp'
  },
  '/collection': {
    title: {
      fr: 'Notre Collection — Quatre hôtels, quatre univers · AHR Collections',
      en: 'Our Collection — Four Hotels, Four Universes · AHR Collections'
    },
    description: {
      fr: 'Découvrez les quatre adresses AHR Collections à Kénitra : tropical, signature, business et urbain. Choisissez l’émotion qui vous ressemble.',
      en: 'Discover the four AHR Collections addresses in Kénitra: tropical, signature, business and urban. Choose the emotion that matches your trip.'
    },
    image: DEFAULT_OG_IMAGE
  },
  '/offers': {
    title: {
      fr: 'Offres Spéciales — Réservation anticipée, Long séjour, Corporate · AHR Collections',
      en: 'Special Offers — Early Booking, Long Stay, Corporate · AHR Collections'
    },
    description: {
      fr: 'Profitez de tarifs préférentiels chez AHR Collections : −20% en réservation anticipée, 7=6 long séjour, packages corporate et week-end. Réservez en direct.',
      en: 'Enjoy preferential rates at AHR Collections: −20% early booking, 7=6 long stay, corporate and weekend packages. Book directly.'
    },
    image: '/img/royal/junior/DSC06877.webp'
  },
  '/aqua': {
    title: {
      fr: 'Waves Aqua Resort 5★ — Hôtel & Aquaparc géant à Kénitra',
      en: 'Waves Aqua Resort 5★ — Hotel & Vast Aquapark in Kénitra'
    },
    description: {
      fr: 'Resort 5★ avec aquaparc géant (30+ toboggans), Palais des Congrès, spa, hammam, restaurants & bars à Kénitra. Pack Hôtel + Aquaparc inclus.',
      en: '5★ resort with vast aquapark (30+ slides), Convention Center, spa, hammam, restaurants & bars in Kénitra. Hotel + Aquapark package included.'
    },
    image: '/img/aqua/pool/DJI_0097.webp',
    keywords: 'Waves Aqua Resort, hôtel 5 étoiles Kénitra, aquaparc Kénitra, toboggans, palais des congrès Kénitra, spa Kénitra, mariage Kénitra'
  },
  '/plaza': {
    title: {
      fr: 'Royal Plaza — Hôtel signature à Kénitra · AHR Collections',
      en: 'Royal Plaza — Signature Hotel in Kénitra · AHR Collections'
    },
    description: {
      fr: 'Royal Plaza : hôtel signature au cadre raffiné, suites élégantes, spa, restaurants gastronomiques et salles d’événements premium à Kénitra.',
      en: 'Royal Plaza: signature hotel with refined setting, elegant suites, spa, fine-dining restaurants and premium event venues in Kénitra.'
    },
    image: '/img/royal/executive/DSC07000.webp',
    keywords: 'Royal Plaza Kénitra, hôtel signature Kénitra, spa Royal Plaza, restaurant gastronomique Kénitra, mariage Kénitra'
  },
  '/vitality': {
    title: {
      fr: 'Vitality Terminus — Hôtel business à 1 min de la gare LGV de Kénitra',
      en: 'Vitality Terminus — Business Hotel 1 min from Kénitra LGV station'
    },
    description: {
      fr: 'Hôtel business moderne à 1 minute à pied de la gare LGV de Kénitra. Chambres premium, salles de réunion, fitness, restaurant international.',
      en: 'Modern business hotel one minute walk from Kénitra LGV station. Premium rooms, meeting rooms, fitness, international restaurant.'
    },
    image: '/img/vitality/reception/photos__2130.webp',
    keywords: 'Vitality Terminus, hôtel gare LGV Kénitra, hôtel business Kénitra, salle de réunion Kénitra'
  },
  '/city': {
    title: {
      fr: 'City Hôtel by Waves — Hôtel urbain au centre-ville de Kénitra',
      en: 'City Hôtel by Waves — Urban Hotel in Downtown Kénitra'
    },
    description: {
      fr: 'City Hôtel by Waves : adresse urbaine au cœur de Kénitra, à proximité des quartiers d’affaires, centres commerciaux et gares. Restaurant & soft bar.',
      en: 'City Hôtel by Waves: urban address in central Kénitra, close to business districts, shopping centers and stations. Restaurant & soft bar.'
    },
    image: '/img/city/rooms/DSC08025.webp',
    keywords: 'City Hôtel by Waves, hôtel centre-ville Kénitra, hôtel pas cher Kénitra, hôtel d’affaires Kénitra'
  },
  '/contact': {
    title: {
      fr: 'Contact — Réservation & demandes sur-mesure · AHR Collections',
      en: 'Contact — Bookings & Bespoke Requests · AHR Collections'
    },
    description: {
      fr: 'Contactez AHR Collections à Kénitra pour vos réservations, événements ou demandes sur-mesure. Réponse personnalisée dans la journée.',
      en: 'Contact AHR Collections in Kénitra for reservations, events or bespoke requests. Personalized reply within the day.'
    },
    image: DEFAULT_OG_IMAGE
  }
};

// Hotel addresses & coords used for JSON-LD Hotel schema.
export const HOTEL_SCHEMAS = {
  '/aqua': {
    name: 'Waves Aqua Resort',
    starRating: 5,
    phone: '+212 (0) 537 304 141',
    image: '/img/aqua/pool/DJI_0097.webp',
    streetAddress: 'Route de Tanger, Kénitra',
    description: '5-star tropical resort in Kénitra with vast aquapark, convention center, spa & wellness, and signature restaurants.'
  },
  '/plaza': {
    name: 'Royal Plaza',
    starRating: 5,
    phone: '+212 (0) 537 304 141',
    image: '/img/royal/executive/DSC07000.webp',
    streetAddress: 'Avenue Mohamed V, Kénitra',
    description: 'Signature 5-star hotel in Kénitra featuring elegant rooms, spa, fine-dining restaurants and premium event venues.'
  },
  '/vitality': {
    name: 'Vitality Terminus',
    starRating: 4,
    phone: '+212 (0) 537 304 141',
    image: '/img/vitality/reception/photos__2130.webp',
    streetAddress: 'Centre-ville, Kénitra (1 min Gare LGV)',
    description: 'Modern business hotel one minute on foot from Kénitra LGV high-speed station, with meeting rooms, fitness and restaurant.'
  },
  '/city': {
    name: 'City Hôtel by Waves',
    starRating: 3,
    phone: '+212 (0) 537 304 400',
    image: '/img/city/rooms/DSC08025.webp',
    streetAddress: 'Rue Maamoura, 14050 Kénitra',
    description: 'Urban 3-star hotel in downtown Kénitra, close to business districts, shopping centers and stations.'
  }
};
