// =====================================================================
// AHR Collections — global site content (FR + EN)
// =====================================================================

export const BRAND = {
  name: 'AHR Collections',
  tagline: {
    fr: 'Une collection. Quatre signatures. Une seule promesse : l’exception.',
    en: 'One collection. Four signatures. A single promise: the exceptional.'
  },
  city: 'Kénitra',
  country: { fr: 'Maroc', en: 'Morocco' },
  bookingUrl: 'https://ahr-collections.hotelrunner.com/bv3/group-search',
  phone: '+212 (0) 537 304 141',
  email: 'reservation@ahr.com',
  address: {
    fr: 'Avenue Mohamed V, Angle Av Al Jahid, Route de Tanger, Kénitra',
    en: 'Avenue Mohamed V, Angle Av Al Jahid, Route de Tanger, Kénitra'
  }
};

// Global navigation — used in header & footer
export const NAV = [
  { id: 'home',       to: '/',          fr: 'Accueil',          en: 'Home' },
  { id: 'about',      to: '/about',     fr: 'À propos',         en: 'About' },
  { id: 'collection', to: '/collection',fr: 'Notre Collection', en: 'Our Collection' },
  { id: 'offers',     to: '/offers',    fr: 'Offres Spéciales', en: 'Special Offers' },
  { id: 'aqua',       to: '/aqua',      fr: 'Waves Aqua Resort',en: 'Waves Aqua Resort' },
  { id: 'plaza',      to: '/plaza',     fr: 'Royal Plaza',      en: 'Royal Plaza' },
  { id: 'vitality',   to: '/vitality',  fr: 'Vitality Terminus',en: 'Vitality Terminus' },
  { id: 'city',       to: '/city',      fr: 'City Hôtel',       en: 'City Hotel' },
  { id: 'contact',    to: '/contact',   fr: 'Contact',          en: 'Contact' }
];

export const UI = {
  bookNow:  { fr: 'Réserver',          en: 'Book Now' },
  discover: { fr: 'Découvrir',         en: 'Discover' },
  explore:  { fr: 'Explorer',          en: 'Explore' },
  amenities:{ fr: 'Équipements',       en: 'Amenities' },
  scroll:   { fr: 'Faites défiler',    en: 'Scroll to explore' },
  prev:     { fr: 'Précédent',         en: 'Previous' },
  next:     { fr: 'Suivant',           en: 'Next' },
  view:     { fr: 'Voir l’hôtel',      en: 'View hotel' },
  contactUs:{ fr: 'Nous contacter',    en: 'Contact us' },
  send:     { fr: 'Envoyer',           en: 'Send' },
  thanks:   { fr: 'Merci pour votre message. Nous revenons vers vous très vite.',
              en: 'Thank you. We will get back to you shortly.' }
};

// =====================================================================
// FOUR HOTELS — short profiles (used on home, collection, footer, etc.)
// =====================================================================
export const HOTELS = [
  {
    id: 'aqua',
    to: '/aqua',
    name: 'Waves Aqua Resort',
    eyebrow: { fr: 'Resort tropical', en: 'Tropical resort' },
    short: {
      fr: 'Un cadre tropical exceptionnel au cœur de Kénitra.',
      en: 'An exceptional tropical setting in the heart of Kénitra.'
    },
    image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1800&q=60',
    accent: 'aqua'
  },
  {
    id: 'plaza',
    to: '/plaza',
    name: 'Royal Plaza',
    eyebrow: { fr: 'Hôtel signature', en: 'Signature hotel' },
    short: {
      fr: 'Un cadre raffiné pour une clientèle exigeante.',
      en: 'A refined setting for a demanding clientele.'
    },
    image: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&w=1800&q=60',
    accent: 'bordeaux'
  },
  {
    id: 'vitality',
    to: '/vitality',
    name: 'Vitality Terminus',
    eyebrow: { fr: 'Business · LGV', en: 'Business · LGV' },
    short: {
      fr: 'Un emplacement stratégique à 1 minute de la gare LGV.',
      en: 'A strategic location 1 minute from the LGV station.'
    },
    image: 'https://images.unsplash.com/photo-1455587734955-081b22074882?auto=format&fit=crop&w=1800&q=60',
    accent: 'olive'
  },
  {
    id: 'city',
    to: '/city',
    name: 'City Hôtel',
    eyebrow: { fr: 'Urbain & lifestyle', en: 'Urban & lifestyle' },
    short: {
      fr: 'Un emplacement idéal pour vos séjours professionnels et touristiques.',
      en: 'An ideal location for both business and leisure stays.'
    },
    image: 'https://images.unsplash.com/photo-1564501049412-61c2a3083791?auto=format&fit=crop&w=1800&q=60',
    accent: 'sand'
  }
];

// =====================================================================
// HOME (Accueil — AHR brand)
// =====================================================================
export const HOME = {
  hero: {
    eyebrow: { fr: 'AHR Collections · Kénitra · Maroc', en: 'AHR Collections · Kénitra · Morocco' },
    title:   { fr: 'Une collection.\nQuatre signatures.', en: 'One collection.\nFour signatures.' },
    sub: {
      fr: 'De la quiétude tropicale du Waves Aqua à l’élégance résidentielle du Royal Plaza, chaque adresse AHR est une promesse — celle d’un séjour pensé dans ses plus fins détails.',
      en: 'From the tropical calm of Waves Aqua to the residential elegance of Royal Plaza, each AHR address is a promise — that of a stay crafted to its finest details.'
    },
    videoPoster: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=2000&q=60',
    videoSrc:    'https://cdn.coverr.co/videos/coverr-a-luxurious-hotel-room-7741/1080p.mp4'
  },
  intro: {
    eyebrow: { fr: 'L’art de recevoir', en: 'The art of hospitality' },
    title:   { fr: 'L’hospitalité comme un art vivant.', en: 'Hospitality as a living art.' },
    body: {
      fr: 'Implantée à Kénitra, AHR Collections rassemble quatre maisons d’exception, chacune pensée pour un état d’esprit, une façon de voyager, une émotion. Une même exigence : transformer chaque séjour en souvenir durable.',
      en: 'Rooted in Kénitra, AHR Collections brings together four exceptional houses, each designed for a state of mind, a way of traveling, an emotion. One shared standard: turn every stay into a lasting memory.'
    }
  },
  pillars: [
    { num: '01', title: { fr: 'Lieux choisis', en: 'Chosen places' },
      desc: { fr: 'Chaque adresse a été pensée pour son atmosphère, son emplacement, sa singularité.',
              en: 'Every address was chosen for its atmosphere, location and singularity.' } },
    { num: '02', title: { fr: 'Service signature', en: 'Signature service' },
      desc: { fr: 'Une attention discrète, formée à reconnaître ce qui n’est pas dit.',
              en: 'Discreet care, trained to read what is left unsaid.' } },
    { num: '03', title: { fr: 'Détails maîtrisés', en: 'Mastered details' },
      desc: { fr: 'Du linge aux lumières, chaque élément est pensé pour servir l’ensemble.',
              en: 'From linens to lighting, every element serves the whole.' } },
    { num: '04', title: { fr: 'Ancrage marocain', en: 'Moroccan roots' },
      desc: { fr: 'L’élégance internationale, infusée de l’hospitalité marocaine.',
              en: 'International elegance, infused with Moroccan hospitality.' } }
  ],
  numbers: [
    { v: '4',   l: { fr: 'Adresses signatures', en: 'Signature addresses' } },
    { v: '500+',l: { fr: 'Chambres & suites',   en: 'Rooms & suites' } },
    { v: '24/7',l: { fr: 'Conciergerie dédiée', en: 'Dedicated concierge' } },
    { v: '★★★★★',l:{ fr: 'Standard de service', en: 'Service standard' } }
  ]
};

// =====================================================================
// ABOUT (À propos)
// =====================================================================
export const ABOUT = {
  hero: {
    eyebrow: { fr: 'À propos d’AHR Collections', en: 'About AHR Collections' },
    title:   { fr: 'Une maison, plusieurs façons d’habiter le voyage.',
               en: 'One house, many ways to inhabit travel.' },
    image:   'https://images.unsplash.com/photo-1564501049412-61c2a3083791?auto=format&fit=crop&w=2000&q=60'
  },
  story: {
    eyebrow: { fr: 'Notre histoire', en: 'Our story' },
    title:   { fr: 'Née à Kénitra, pensée pour le monde.', en: 'Born in Kénitra, designed for the world.' },
    body: {
      fr: [
        'AHR Collections est née d’une conviction simple : l’hospitalité de prestige ne se résume pas à une catégorie ou à une étoile.',
        'C’est une attention. Un rythme. Une lecture des silences.',
        'Depuis Kénitra, nous avons réuni quatre adresses singulières, autour d’une même exigence : faire de chaque séjour une expérience marquante, durable, personnelle.'
      ],
      en: [
        'AHR Collections was born of a simple conviction: prestigious hospitality is not summed up by a category or a star.',
        'It is an attention. A rhythm. A reading of silences.',
        'From Kénitra, we have brought together four singular addresses around a single standard: turning every stay into a meaningful, lasting, personal experience.'
      ]
    }
  },
  values: [
    { num: '01', title: { fr: 'Élégance discrète', en: 'Discreet elegance' },
      desc: { fr: 'Le luxe n’a pas besoin de bruit. Il s’éprouve.', en: 'Luxury needs no noise. It is felt.' },
      image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1400&q=60' },
    { num: '02', title: { fr: 'Précision du geste', en: 'Precision of gesture' },
      desc: { fr: 'Un service formé à anticiper, pas à attendre.', en: 'Service trained to anticipate, not to wait.' },
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1400&q=60' },
    { num: '03', title: { fr: 'Hospitalité marocaine', en: 'Moroccan hospitality' },
      desc: { fr: 'L’accueil comme art de vivre, transmis et tenu.', en: 'Welcome as a way of life, handed down and held.' },
      image: 'https://images.unsplash.com/photo-1539020140153-e479b8c46a96?auto=format&fit=crop&w=1400&q=60' },
    { num: '04', title: { fr: 'Engagement durable', en: 'Lasting commitment' },
      desc: { fr: 'Bien-être des équipes, respect des lieux, fidélité aux producteurs locaux.',
              en: 'Wellbeing for our teams, respect for our places, loyalty to local producers.' },
      image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1400&q=60' }
  ],
  quote: {
    fr: 'Nous ne vendons pas des nuits. Nous offrons des temps qui restent.',
    en: 'We do not sell nights. We offer moments that stay.'
  }
};

// =====================================================================
// COLLECTION (Notre Collection)
// =====================================================================
export const COLLECTION = {
  hero: {
    eyebrow: { fr: 'Notre Collection', en: 'Our Collection' },
    title:   { fr: 'Quatre maisons. Quatre univers.', en: 'Four houses. Four universes.' },
    sub: {
      fr: 'Choisissez l’émotion qui vous ressemble : tropicale, signature, business ou urbaine.',
      en: 'Choose the emotion that fits you: tropical, signature, business or urban.'
    }
  },
  intro: {
    fr: 'Chaque hôtel AHR a sa propre voix. Pourtant, tous parlent la même langue : celle de l’exigence et de l’élégance — celle d’un service qui sait disparaître quand il le faut, et briller au bon moment.',
    en: 'Each AHR hotel has its own voice. Yet they all speak the same language: that of refinement and elegance — of service that knows when to step back, and when to shine.'
  }
};

// =====================================================================
// OFFERS (Offres Spéciales)
// =====================================================================
export const OFFERS = {
  hero: {
    eyebrow: { fr: 'Offres Spéciales', en: 'Special Offers' },
    title:   { fr: 'Des privilèges à la hauteur du voyage.', en: 'Privileges that match the journey.' },
    sub: {
      fr: 'Tarifs préférentiels, longs séjours, escapades professionnelles : sélectionnez l’expérience qui vous correspond.',
      en: 'Preferential rates, long stays, professional escapes: choose the experience that suits you.'
    }
  },
  list: [
    {
      tag: { fr: 'Réservation anticipée', en: 'Early booking' },
      title: { fr: 'L’avantage du temps.', en: 'The advantage of time.' },
      perk: '−20%',
      desc: { fr: 'Réservez 30 jours à l’avance et bénéficiez de 20% sur le tarif flexible, petit-déjeuner inclus.',
              en: 'Book 30 days ahead and enjoy 20% off the flexible rate, breakfast included.' },
      image: 'https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&w=1600&q=60',
      conditions: { fr: 'Non remboursable · Soumis à disponibilité', en: 'Non-refundable · Subject to availability' }
    },
    {
      tag: { fr: 'Long séjour', en: 'Long stay' },
      title: { fr: 'Le temps qui s’étire.', en: 'Time that stretches.' },
      perk: '7=6',
      desc: { fr: 'À partir de 6 nuits, votre 7ème nuit vous est offerte. Idéal pour les séjours résidentiels.',
              en: 'From 6 nights, the 7th night is on us. Ideal for residential stays.' },
      image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=1600&q=60',
      conditions: { fr: 'Tarif petit-déjeuner inclus', en: 'Rate includes breakfast' }
    },
    {
      tag: { fr: 'Corporate', en: 'Corporate' },
      title: { fr: 'Le voyageur d’affaires.', en: 'The business traveler.' },
      perk: 'B2B',
      desc: { fr: 'Tarifs négociés, late check-out, espace de travail dédié et conciergerie 24/7.',
              en: 'Negotiated rates, late check-out, dedicated workspace and 24/7 concierge.' },
      image: 'https://images.unsplash.com/photo-1517502884422-41eaead166d4?auto=format&fit=crop&w=1600&q=60',
      conditions: { fr: 'Réservé aux comptes professionnels', en: 'Reserved for corporate accounts' }
    },
    {
      tag: { fr: 'Évasion week-end', en: 'Weekend escape' },
      title: { fr: 'Deux nuits, une parenthèse.', en: 'Two nights, one pause.' },
      perk: '★★',
      desc: { fr: 'Suite, dîner signature et accès Spa : trois ingrédients pour un week-end qui ne s’oublie pas.',
              en: 'Suite, signature dinner and spa access: three ingredients for an unforgettable weekend.' },
      image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1600&q=60',
      conditions: { fr: 'Vendredi & samedi · Selon disponibilité', en: 'Friday & Saturday · Subject to availability' }
    }
  ]
};

// =====================================================================
// AQUA (Waves Aqua Resort)
// =====================================================================
export const AQUA = {
  hero: {
    eyebrow: { fr: 'Waves Aqua Resort · Kénitra', en: 'Waves Aqua Resort · Kénitra' },
    title:   { fr: 'Le voyage commence\nau bord de l’eau.', en: 'The journey begins\nat the water’s edge.' },
    sub: {
      fr: 'Un resort tropical à taille humaine, pensé pour la lenteur, le bien-être et les souvenirs partagés.',
      en: 'A boutique tropical resort, designed for slowness, wellbeing and shared memories.'
    },
    videoPoster: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=2000&q=60',
    videoSrc:    null
  },
  intro: {
    eyebrow: { fr: 'L’esprit Waves', en: 'The Waves spirit' },
    title:   { fr: 'Là où la lumière se pose, le temps respire.', en: 'Where light settles, time breathes.' },
    body: {
      fr: [
        'Au Waves Aqua Resort, le décor parle avant nous : palmes, eau claire, brise et lumière dorée.',
        'Ici, on enlève sa montre. On marche pieds nus.',
        'Les enfants explorent, les couples se retrouvent, les amis prolongent la soirée.',
        'Et chaque journée se termine par le même rituel : un coucher de soleil partagé.'
      ],
      en: [
        'At Waves Aqua Resort, the setting speaks first: palm leaves, clear water, breeze and golden light.',
        'Here, you take off your watch. You walk barefoot.',
        'Children explore, couples reconnect, friends linger into the night.',
        'And every day ends with the same ritual: a sunset shared.'
      ]
    }
  },
  features: [
    { icon: '∿', title: { fr: 'Piscines lagons', en: 'Lagoon pools' },
      desc: { fr: 'Piscines à débordement, transats privés, service au bord de l’eau.',
              en: 'Infinity pools, private sun loungers, poolside service.' } },
    { icon: '✦', title: { fr: 'Aqua Spa', en: 'Aqua Spa' },
      desc: { fr: 'Soins inspirés de l’eau, hammam, sauna, parcours sensoriel.',
              en: 'Water-inspired treatments, hammam, sauna, sensory circuit.' } },
    { icon: '◉', title: { fr: 'Kids Resort', en: 'Kids Resort' },
      desc: { fr: 'Mini-club encadré, ateliers créatifs, activités aquatiques sécurisées.',
              en: 'Supervised mini-club, creative workshops, safe water activities.' } },
    { icon: '☼', title: { fr: 'Tropical Bar', en: 'Tropical Bar' },
      desc: { fr: 'Cocktails signatures, jus pressés et plateaux à partager au coucher du soleil.',
              en: 'Signature cocktails, fresh-pressed juices and shared platters at sunset.' } }
  ],
  gallery: [
    'https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?auto=format&fit=crop&w=1600&q=60',
    'https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=1600&q=60',
    'https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=1600&q=60',
    'https://images.unsplash.com/photo-1602002418082-a4443e081dd1?auto=format&fit=crop&w=1600&q=60',
    'https://images.unsplash.com/photo-1561501900-3701fa6a0864?auto=format&fit=crop&w=1600&q=60',
    'https://images.unsplash.com/photo-1559599238-308793637427?auto=format&fit=crop&w=1600&q=60',
    'https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1600&q=60',
    'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1600&q=60'
  ]
};

// =====================================================================
// VITALITY (Vitality Terminus)
// =====================================================================
export const VITALITY = {
  hero: {
    eyebrow: { fr: 'Vitality Terminus · Gare LGV Kénitra', en: 'Vitality Terminus · LGV Station Kénitra' },
    title:   { fr: 'L’hôtel des esprits\nen mouvement.', en: 'The hotel for minds\nin motion.' },
    sub: {
      fr: 'À une minute de la gare LGV, pensé pour celles et ceux qui transforment les déplacements en opportunités.',
      en: 'One minute from the LGV station, designed for those who turn travel into opportunity.'
    },
    videoPoster: 'https://nvskwcjdrrrcpyiadoxy.supabase.co/storage/v1/object/public/AHR_COLLECTIONS/VITALITY/SUITE_JUNIOR/DSC07776.jpg?q=60',
    videoSrc:    null
  },
  intro: {
    eyebrow: { fr: 'Pensé pour le voyageur d’affaires', en: 'Designed for the business traveler' },
    title:   { fr: 'Efficacité, élégance, énergie.', en: 'Efficiency, elegance, energy.' },
    body: {
      fr: [
        'Le Vitality Terminus a été conçu pour un seul rythme : le vôtre.',
        'Check-in en 90 secondes, espaces de travail à toute heure, conciergerie qui anticipe.',
        'Et lorsqu’il faut souffler, un rooftop, un spa et une cuisine généreuse vous attendent.',
        'Tout est là, à portée de main, pensé pour ne jamais vous ralentir.'
      ],
      en: [
        'Vitality Terminus was built for one rhythm: yours.',
        '90-second check-in, workspaces open round the clock, a concierge that anticipates.',
        'When you need to pause, a rooftop, a spa and a generous kitchen await.',
        'Everything within reach — designed never to slow you down.'
      ]
    }
  },
  features: [
    { icon: 'I', title: { fr: 'Connectivité totale', en: 'Total connectivity' },
      desc: { fr: 'Wi-Fi très haut débit, prises USB-C, écrans 4K dans toutes les chambres.',
              en: 'Ultra-high-speed Wi-Fi, USB-C outlets, 4K displays in every room.' } },
    { icon: 'II', title: { fr: 'Express Check-in', en: 'Express check-in' },
      desc: { fr: 'Arrivée en moins de 2 minutes, départ sans contrainte.',
              en: 'Arrival in under 2 minutes, hassle-free departure.' } },
    { icon: 'III', title: { fr: '3 Salles de réunion', en: '3 Meeting rooms' },
      desc: { fr: '3 espaces modulables, équipement audio-vidéo professionnel.',
              en: '3 modular spaces with full professional A/V.' } },
    { icon: 'IV', title: { fr: 'Rooftop & Terrasse', en: 'Rooftop & Terrace' },
      desc: { fr: 'Une vue, un calme, une parenthèse — entre deux rendez-vous.',
              en: 'A view, a calm, a pause — between two appointments.' } }
  ],
  gallery: [
    'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&w=1600&q=60',
    'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1600&q=60',
    'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=1600&q=60',
    'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1600&q=60',
    'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1600&q=60',
    'https://images.unsplash.com/photo-1431540015161-0bf868a2d407?auto=format&fit=crop&w=1600&q=60',
    'https://images.unsplash.com/photo-1564501049412-61c2a3083791?auto=format&fit=crop&w=1600&q=60',
    'https://images.unsplash.com/photo-1577412647305-991150c7d163?auto=format&fit=crop&w=1600&q=60'
  ]
};

// =====================================================================
// CITY (City Hôtel)
// =====================================================================
export const CITY = {
  hero: {
    eyebrow: { fr: 'City Hôtel · Centre-ville Kénitra', en: 'City Hotel · Downtown Kénitra' },
    title:   { fr: 'L’adresse urbaine,\nau cœur de la ville.', en: 'The urban address,\nat the heart of the city.' },
    sub: {
      fr: 'À deux pas des incontournables, un hôtel agile, lumineux et sincèrement accueillant.',
      en: 'Steps from the city’s essentials — an agile, bright, sincerely welcoming hotel.'
    },
    videoPoster: 'https://images.unsplash.com/photo-1564501049412-61c2a3083791?auto=format&fit=crop&w=2000&q=60',
    videoSrc:    null
  },
  intro: {
    eyebrow: { fr: 'Esprit lifestyle', en: 'Lifestyle spirit' },
    title:   { fr: 'La ville comme terrain de jeu.', en: 'The city as a playground.' },
    body: {
      fr: [
        'Au City Hôtel, l’hospitalité s’écrit avec le rythme de la ville.',
        'Des chambres à la fois compactes et chaleureuses,',
        'un café-restaurant ouvert à tous les moments de la journée,',
        'et une équipe qui connaît Kénitra mieux que personne.'
      ],
      en: [
        'At City Hotel, hospitality is written to the rhythm of the city.',
        'Rooms that are both compact and warm,',
        'a café-restaurant open at every hour,',
        'and a team that knows Kénitra better than anyone.'
      ]
    }
  },
  features: [
    { icon: '◇', title: { fr: 'Emplacement central', en: 'Central location' },
      desc: { fr: 'Au cœur des avenues commerçantes et culturelles.',
              en: 'In the heart of the city’s commercial and cultural avenues.' } },
    { icon: '◈', title: { fr: 'Café-restaurant', en: 'Café & restaurant' },
      desc: { fr: 'Brunchs lumineux, dîners conviviaux, terrasse animée.',
              en: 'Bright brunches, friendly dinners, lively terrace.' } },
    { icon: '◐', title: { fr: 'Lobby vivant', en: 'Living lobby' },
      desc: { fr: 'Travail, café, rendez-vous : un lobby pensé comme un salon.',
              en: 'Work, coffee, meetings: a lobby designed as a living room.' } },
    { icon: '◎', title: { fr: 'Bons plans', en: 'Local tips' },
      desc: { fr: 'Conciergerie locale, sélection d’adresses confidentielles.',
              en: 'Local concierge, curated insider addresses.' } }
  ],
  gallery: [
    'https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&w=1600&q=60',
    'https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=1600&q=60',
    'https://images.unsplash.com/photo-1591088398332-8a7791972843?auto=format&fit=crop&w=1600&q=60',
    'https://images.unsplash.com/photo-1564501049412-61c2a3083791?auto=format&fit=crop&w=1600&q=60',
    'https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=1600&q=60',
    'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1600&q=60',
    'https://images.unsplash.com/photo-1551776235-dde6d4829808?auto=format&fit=crop&w=1600&q=60',
    'https://images.unsplash.com/photo-1485921325833-c519f76c4927?auto=format&fit=crop&w=1600&q=60'
  ]
};

// =====================================================================
// CONTACT
// =====================================================================
export const CONTACT = {
  hero: {
    eyebrow: { fr: 'Contact', en: 'Contact' },
    title:   { fr: 'Parlons de votre prochain séjour.', en: 'Let’s talk about your next stay.' },
    sub: {
      fr: 'Réservation, événement, demande sur-mesure : notre équipe vous répond personnellement, dans la journée.',
      en: 'Reservations, events, bespoke requests: our team replies personally, within the day.'
    }
  },
  channels: [
    { label: { fr: 'Téléphone', en: 'Phone' }, value: BRAND.phone, href: `tel:${BRAND.phone.replace(/\s/g,'')}` },
    { label: { fr: 'Email',     en: 'Email' }, value: BRAND.email, href: `mailto:${BRAND.email}` },
    { label: { fr: 'Adresse',   en: 'Address' }, value: BRAND.address.fr, href: 'https://www.google.com/maps?q=Kenitra' }
  ],
  form: {
    firstName: { fr: 'Prénom',                en: 'First name' },
    lastName:  { fr: 'Nom',                   en: 'Last name' },
    email:     { fr: 'E-mail',                en: 'Email' },
    phone:     { fr: 'Téléphone',             en: 'Phone' },
    hotel:     { fr: 'Hôtel concerné',        en: 'Concerned hotel' },
    chooseHotel: { fr: 'Sélectionnez un hôtel', en: 'Select a hotel' },
    message:   { fr: 'Votre message',         en: 'Your message' }
  }
};
