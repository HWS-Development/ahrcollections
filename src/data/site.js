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
  { id: 'city',       to: '/city',      fr: 'City Hôtel by Waves', en: 'City Hôtel by Waves' },
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
    image: '/img/aqua/pool/DJI_0097.webp',
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
    image: '/img/royal/executive/DSC07000.webp',
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
    image: '/img/vitality/reception/photos__2130.webp',
    accent: 'olive'
  },
  {
    id: 'city',
    to: '/city',
    name: 'City Hôtel by Waves',
    eyebrow: { fr: 'Urbain & lifestyle', en: 'Urban & lifestyle' },
    short: {
      fr: 'Un emplacement idéal pour vos séjours professionnels et touristiques.',
      en: 'An ideal location for both business and leisure stays.'
    },
    image: '/img/city/rooms/DSC08025.webp',
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
    videoPoster: '/royal-plaza-poster.jpg',
    videoSrc:    '/videos/royal-plaza-hero.mp4'
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
    eyebrow: { fr: 'Qui sommes-nous · AHR Collection', en: 'Who we are · AHR Collection' },
    title:   { fr: 'L’Excellence Hôtelière\nau service de vos envies.',
               en: 'Hotel Excellence\nat the service of your desires.' },
    image:   '/img/about/general/DSC01277.webp'
  },
  story: {
    eyebrow: { fr: 'AHR Collection · Amwaj Hotels & Resorts', en: 'AHR Collection · Amwaj Hotels & Resorts' },
    title:   { fr: 'Une marque marocaine d’excellence, ancrée à Kénitra.', en: 'A Moroccan brand of excellence, rooted in Kénitra.' },
    body: {
      fr: [
        'AHR Collection (Amwaj Hotels & Resorts) est une marque hôtelière marocaine qui incarne l’élégance, la modernité et le service sur-mesure.',
        'Fondée avec la mission d’offrir à ses clients une expérience d’exception, elle s’adresse aussi bien aux voyageurs d’affaires qu’aux familles et aux amateurs de loisirs haut de gamme.',
        'Idéalement implantée à Kénitra, AHR Collection bénéficie d’un emplacement stratégique : la gare LGV relie Rabat en 30 minutes et Casablanca en 1h30, à deux pas des zones économiques et industrielles, et au cœur d’un environnement naturel exceptionnel — plages et forêts de la région d’Al Gharb.',
        'Cette combinaison unique de connectivité et de cadre naturel permet à nos hôtels de proposer un équilibre idéal entre affaires et détente. Chaque séjour avec AHR Collection promet confort, innovation et hospitalité d’excellence.'
      ],
      en: [
        'AHR Collection (Amwaj Hotels & Resorts) is a Moroccan hotel brand that embodies elegance, modernity and tailor-made service.',
        'Founded with the mission to offer an exceptional experience, it serves business travelers, families and lovers of refined leisure alike.',
        'Strategically located in Kénitra, AHR Collection benefits from the LGV high-speed line — 30 minutes from Rabat, 1h30 from Casablanca — at the doorstep of major economic and industrial zones, and surrounded by the beaches and forests of the Gharb region.',
        'This unique blend of connectivity and natural setting lets our hotels deliver the perfect balance between business and relaxation. Every AHR Collection stay promises comfort, innovation and excellence in hospitality.'
      ]
    }
  },
  values: [
    { num: '01', title: { fr: 'Excellence & Personnalisation', en: 'Excellence & Personalization' },
      desc: { fr: 'Une attention unique pour chaque client. De l’accueil aux services personnalisés, chaque détail est pensé pour rendre l’expérience inoubliable.',
              en: 'A unique attention to every guest. From welcome to bespoke service, every detail is crafted to make the experience unforgettable.' },
      image: '/img/royal/hall/DSC01265.webp' },
    { num: '02', title: { fr: 'Innovation & Modernité', en: 'Innovation & Modernity' },
      desc: { fr: 'Salles connectées, espaces de coworking, services digitaux : nos établissements répondent aux exigences des voyageurs modernes.',
              en: 'Connected meeting rooms, coworking spaces, seamless digital services: our properties answer to the demands of today’s travelers.' },
      image: '/img/vitality/meet-marrakech/photos__2097.webp' },
    { num: '03', title: { fr: 'Bien-être & Durabilité', en: 'Wellbeing & Sustainability' },
      desc: { fr: 'Jardins aromatiques, stages de yoga, spa et fitness : un engagement écoresponsable, ancré dans l’économie locale.',
              en: 'Aromatic gardens, yoga sessions, spa and fitness: an eco-responsible commitment rooted in the local economy.' },
      image: '/img/aqua/spa/photos2200.webp' },
    { num: '04', title: { fr: 'Proximité & Engagement Local', en: 'Proximity & Local Commitment' },
      desc: { fr: 'Ancrés dans la région d’Al Gharb, nous mettons à l’honneur les produits, artisans et acteurs culturels de Kénitra.',
              en: 'Anchored in the Gharb region, we celebrate the produce, artisans and cultural voices of Kénitra.' },
      image: '/img/city/tea-garden/DSC08188.webp' }
  ],
  quote: {
    fr: 'Proposer bien plus qu’un séjour : offrir des expériences mémorables, tout en contribuant au rayonnement de la région.',
    en: 'To offer far more than a stay: memorable experiences that also enrich the region we call home.'
  },
  location: {
    eyebrow: { fr: 'Situé au cœur de Kénitra', en: 'At the heart of Kénitra' },
    title:   { fr: 'Une ville connectée, un cadre d’exception.',
               en: 'A connected city, an exceptional setting.' },
    intro: {
      fr: 'Idéalement implantée à Kénitra, AHR Collection bénéficie d’un emplacement stratégique — un trait d’union entre les grandes capitales économiques du Royaume et la nature préservée d’Al Gharb.',
      en: 'Strategically located in Kénitra, AHR Collection offers a privileged gateway — bridging Morocco’s economic capitals and the preserved nature of the Gharb region.'
    },
    points: [
      { icon: '◇',
        title: { fr: 'Gare LGV à proximité', en: 'High-speed rail nearby' },
        desc:  { fr: 'Rabat à 30 minutes, Casablanca à 1h30. La mobilité comme évidence.',
                 en: 'Rabat in 30 minutes, Casablanca in 1h30. Effortless mobility.' } },
      { icon: '◈',
        title: { fr: 'Zones économiques & industrielles', en: 'Economic & industrial zones' },
        desc:  { fr: 'Au plus près des pôles d’affaires, parfait pour les séjours professionnels.',
                 en: 'Steps from major business hubs — ideal for professional stays.' } },
      { icon: '◉',
        title: { fr: 'Plages & forêts d’Al Gharb', en: 'Gharb beaches & forests' },
        desc:  { fr: 'Un environnement naturel exceptionnel, à quelques minutes de l’hôtel.',
                 en: 'An outstanding natural setting, only minutes from the property.' } }
    ]
  },
  mission: {
    eyebrow: { fr: 'Notre Mission', en: 'Our Mission' },
    title:   { fr: 'Proposer bien plus qu’un séjour.', en: 'To offer far more than a stay.' },
    body: {
      fr: 'AHR Collection incarne l’équilibre parfait entre l’hospitalité marocaine traditionnelle et les normes internationales modernes. Notre mission : offrir des expériences mémorables à nos clients tout en contribuant au rayonnement économique, social et culturel de la région de Kénitra et d’Al Gharb.',
      en: 'AHR Collection embodies the perfect balance between traditional Moroccan hospitality and modern international standards. Our mission: deliver memorable experiences to our guests while contributing to the economic, social and cultural rise of Kénitra and the Gharb region.'
    }
  },
  whyChoose: {
    eyebrow: { fr: 'Pourquoi nous choisir', en: 'Why choose us' },
    title:   { fr: 'Pourquoi choisir AHR Collection ?', en: 'Why choose AHR Collection?' },
    points: [
      { num: '01',
        title: { fr: 'Localisation stratégique', en: 'Strategic location' },
        desc:  { fr: 'À Kénitra, au cœur d’un réseau d’affaires et de transport moderne.',
                 en: 'In Kénitra, at the heart of a modern business and transport network.' } },
      { num: '02',
        title: { fr: 'Expériences sur-mesure', en: 'Tailored experiences' },
        desc:  { fr: 'Une variété d’adresses adaptée à tous les profils — luxe, confort, accessibilité.',
                 en: 'A variety of addresses for every profile — luxury, comfort, accessibility.' } },
      { num: '03',
        title: { fr: 'Services premium personnalisés', en: 'Personalized premium services' },
        desc:  { fr: 'Pensés pour répondre aux besoins les plus exigeants, avec une attention sincère.',
                 en: 'Crafted to meet the most demanding needs, with sincere attention.' } },
      { num: '04',
        title: { fr: 'Engagement durable & local', en: 'Sustainable & local commitment' },
        desc:  { fr: 'Des expériences authentiques, ancrées dans le bien-être et le développement durable.',
                 en: 'Authentic experiences rooted in wellbeing and sustainable development.' } }
    ]
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
      image: '/img/royal/junior/DSC06877.webp',
      conditions: { fr: 'Non remboursable · Soumis à disponibilité', en: 'Non-refundable · Subject to availability' }
    },
    {
      tag: { fr: 'Long séjour', en: 'Long stay' },
      title: { fr: 'Le temps qui s’étire.', en: 'Time that stretches.' },
      perk: '7=6',
      desc: { fr: 'À partir de 6 nuits, votre 7ème nuit vous est offerte. Idéal pour les séjours résidentiels.',
              en: 'From 6 nights, the 7th night is on us. Ideal for residential stays.' },
      image: '/img/vitality/suite-prestige/photos__2062.webp',
      conditions: { fr: 'Tarif petit-déjeuner inclus', en: 'Rate includes breakfast' }
    },
    {
      tag: { fr: 'Corporate', en: 'Corporate' },
      title: { fr: 'Le voyageur d’affaires.', en: 'The business traveler.' },
      perk: 'B2B',
      desc: { fr: 'Tarifs négociés, late check-out, espace de travail dédié et conciergerie 24/7.',
              en: 'Negotiated rates, late check-out, dedicated workspace and 24/7 concierge.' },
      image: '/img/royal/business/DSC04522.webp',
      conditions: { fr: 'Réservé aux comptes professionnels', en: 'Reserved for corporate accounts' }
    },
    {
      tag: { fr: 'Évasion week-end', en: 'Weekend escape' },
      title: { fr: 'Deux nuits, une parenthèse.', en: 'Two nights, one pause.' },
      perk: '★★',
      desc: { fr: 'Suite, dîner signature et accès Spa : trois ingrédients pour un week-end qui ne s’oublie pas.',
              en: 'Suite, signature dinner and spa access: three ingredients for an unforgettable weekend.' },
      image: '/img/royal/spa/DSC05192.webp',
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
    title:   { fr: 'Un cadre tropical exceptionnel\nau cœur de Kénitra.',
               en: 'An exceptional tropical setting\nat the heart of Kénitra.' },
    sub: {
      fr: 'Hôtel 5★, aquaparc géant, palais des congrès et bien-être premium — réunis dans un seul complexe.',
      en: '5-star hotel, vast aquapark, convention center and premium wellness — all in one resort.'
    },
    videoPoster: '/img/aqua/pool/DJI_0097.webp',
    videoSrc:    '/videos/aqua-hero.mp4'
  },
  intro: {
    eyebrow: { fr: 'Bienvenue au Waves Aqua Resort', en: 'Welcome to Waves Aqua Resort' },
    title:   { fr: 'Le complexe qui réunit tout ce que vous aimez.', en: 'The resort that brings together everything you love.' },
    body: {
      fr: [
        'Le Waves Aqua Resort est un complexe hôtelier unique combinant luxe et divertissement, dans un cadre tropical enchanteur.',
        'Avec son hôtel 5 étoiles, son parc aquatique spectaculaire, son palais des congrès moderne et son centre de bien-être haut de gamme,',
        'le resort est la destination idéale pour les familles, les professionnels et les amateurs de sensations fortes.',
        'Restaurants à thème, bars en bord de piscine, plages privées : ici, chaque journée invente sa propre lumière.'
      ],
      en: [
        'Waves Aqua Resort is a one-of-a-kind property blending luxury and entertainment in an enchanting tropical setting.',
        'With its five-star hotel, spectacular aquapark, modern convention center and premium wellness sanctuary,',
        'the resort is the ideal destination for families, professionals and thrill-seekers alike.',
        'Themed restaurants, poolside bars, private beaches: here, every day writes its own light.'
      ]
    }
  },
  features: [
    { icon: '∿', title: { fr: 'Aquaparc géant', en: 'Vast aquapark' },
      desc: { fr: 'Le plus grand de la région : plus de 30 toboggans, piscine à vagues, rivière lente.',
              en: 'The largest in the region: 30+ slides, wave pool, lazy river.' } },
    { icon: '✦', title: { fr: 'Centre de bien-être', en: 'Wellness center' },
      desc: { fr: 'Spa, hammam traditionnel, salon de beauté et soins relaxants.',
              en: 'Spa, traditional hammam, beauty salon and relaxing treatments.' } },
    { icon: '◉', title: { fr: 'Palais des Congrès', en: 'Convention Center' },
      desc: { fr: 'Espace événementiel moderne pour séminaires, mariages et conférences.',
              en: 'Modern event venue for seminars, weddings and conferences.' } },
    { icon: '☼', title: { fr: 'Gastronomie unique', en: 'Singular gastronomy' },
      desc: { fr: 'Le Bronze · Sea Food & Grill, Barbecue à Table, Crepland, bars et lounges en bord de piscine.',
              en: 'Le Bronze · Sea Food & Grill, Barbecue à Table, Crepland, bars and poolside lounges.' } }
  ],
  gallery: [
    '/img/aqua/pool/DJI_0097.webp',
    '/img/aqua/pool/DJI_0099.webp',
    '/img/aqua/aquapark/DSC02525.webp',
    '/img/aqua/aquapark/DSC02692.webp',
    '/img/aqua/aquapark/DSC02843.webp',
    '/img/aqua/spa/photos2210.webp',
    '/img/aqua/rooms/DSC00646.webp',
    '/img/aqua/bronz/photos2279.webp'
  ]
};

// =====================================================================
// VITALITY (Vitality Terminus)
// =====================================================================
export const VITALITY = {
  hero: {
    eyebrow: { fr: 'Vitality Terminus · Centre-ville Kénitra', en: 'Vitality Terminus · Downtown Kénitra' },
    title:   { fr: 'À une minute\nde la gare LGV.',
               en: 'One minute\nfrom the LGV station.' },
    sub: {
      fr: 'Un emplacement stratégique en plein centre-ville — pensé pour les voyageurs d’affaires comme pour les touristes.',
      en: 'A strategic location in the heart of the city — designed for business travelers and tourists alike.'
    },
    videoPoster: '/img/vitality/suite-junior/DSC07776.webp',
    videoSrc:    null
  },
  intro: {
    eyebrow: { fr: 'Bienvenue au Vitality Terminus', en: 'Welcome to Vitality Terminus' },
    title:   { fr: 'Confort, efficacité, bien-être.', en: 'Comfort, efficiency, wellbeing.' },
    body: {
      fr: [
        'Le Vitality Terminus est idéalement situé en plein centre-ville de Kénitra, à seulement une minute à pied de la gare LGV.',
        'Une accessibilité optimale pour les voyageurs d’affaires et les touristes en quête d’une adresse fluide et bien connectée.',
        'Avec son design moderne, ses chambres soignées et ses services premium, l’hôtel offre une expérience urbaine sur mesure.',
        'Salles de réunion, business center, restaurant international, espace fitness : tout est réuni pour conjuguer travail, repos et bien-être.'
      ],
      en: [
        'Vitality Terminus sits in the heart of downtown Kénitra, just one minute’s walk from the LGV high-speed station.',
        'A seamless gateway for business travelers and tourists looking for a well-connected, frictionless address.',
        'Modern design, carefully appointed rooms and premium services create a tailor-made urban experience.',
        'Meeting rooms, business center, international restaurant, fitness space: everything is here to balance work, rest and wellbeing.'
      ]
    }
  },
  features: [
    { icon: 'I', title: { fr: 'Proximité Gare LGV', en: 'Steps from the LGV station' },
      desc: { fr: 'À une minute à pied : parfait pour les déplacements professionnels.',
              en: 'A one-minute walk: perfect for professional travel.' } },
    { icon: 'II', title: { fr: 'Business Center', en: 'Business Center' },
      desc: { fr: 'Salles de réunion et visioconférences, coworking, traiteur & pauses-café.',
              en: 'Meeting rooms and video conferencing, coworking, catering & coffee breaks.' } },
    { icon: 'III', title: { fr: 'Restaurant International', en: 'International Restaurant' },
      desc: { fr: 'Carte du monde, petit-déjeuner buffet et room service à toute heure.',
              en: 'Cuisine from around the world, breakfast buffet and round-the-clock room service.' } },
    { icon: 'IV', title: { fr: 'Espace Fitness', en: 'Fitness Space' },
      desc: { fr: 'Un espace moderne pour garder la forme pendant votre séjour.',
              en: 'A modern space to stay in shape throughout your stay.' } }
  ],
  gallery: [
    '/img/vitality/reception/photos__2130.webp',
    '/img/vitality/suite-prestige/photos__2062.webp',
    '/img/vitality/suite-junior/DSC07776.webp',
    '/img/vitality/confort-gl/photos__2082.webp',
    '/img/vitality/meet-marrakech/photos__2095.webp',
    '/img/vitality/meet-rabat/photos__2135.webp',
    '/img/vitality/couloir/photos__2123.webp',
    '/img/vitality/reception/photos__2132.webp'
  ]
};

// =====================================================================
// CITY (City Hôtel)
// =====================================================================
export const CITY = {
  hero: {
    eyebrow: { fr: 'City Hôtel · Centre-ville Kénitra', en: 'City Hotel · Downtown Kénitra' },
    title:   { fr: 'L’emplacement idéal pour vos séjours\npro & touristiques.',
               en: 'The ideal address for business\n& leisure stays.' },
    sub: {
      fr: 'Au cœur de Kénitra, à proximité des quartiers d’affaires, des centres commerciaux et des gares.',
      en: 'In the heart of Kénitra — close to business districts, shopping centers and stations.'
    },
    videoPoster: '/img/city/reception/DSC08733.webp',
    videoSrc:    '/videos/city-hero.mp4'
  },
  intro: {
    eyebrow: { fr: 'Bienvenue au City Hôtel', en: 'Welcome to City Hotel' },
    title:   { fr: 'L’hôtel corporate au cœur de la ville.', en: 'The corporate hotel at the heart of the city.' },
    body: {
      fr: [
        'Situé en plein centre-ville de Kénitra, le City Hôtel bénéficie d’un emplacement stratégique.',
        'À proximité des principaux quartiers d’affaires, des centres commerciaux et des gares, il offre un accès rapide aux infrastructures essentielles et aux attractions de la ville.',
        'Conçu pour les professionnels comme pour les voyageurs en quête de confort, l’hôtel propose des chambres modernes, des salles de conférence modulables et un restaurant chaleureux.',
        'L’adresse idéale pour conjuguer travail, découverte et art de recevoir.'
      ],
      en: [
        'In the heart of downtown Kénitra, City Hotel enjoys a strategic location.',
        'Close to the main business districts, shopping centers and stations, it offers quick access to the city’s essentials and attractions.',
        'Designed for professionals as well as travelers seeking comfort, the hotel offers modern rooms, flexible conference spaces and a warm restaurant.',
        'The ideal address to combine work, discovery and the art of welcoming.'
      ]
    }
  },
  features: [
    { icon: '◇', title: { fr: 'Hôtel Corporate', en: 'Corporate Hotel' },
      desc: { fr: 'Conçu pour les professionnels, avec des services adaptés aux séjours d’affaires.',
              en: 'Built for professionals, with services tailored to business stays.' } },
    { icon: '◈', title: { fr: 'Salles de Conférence', en: 'Conference Rooms' },
      desc: { fr: 'Espaces modulables, équipement audio-vidéo, traiteur & pauses-café.',
              en: 'Flexible spaces, A/V equipment, catering & coffee breaks.' } },
    { icon: '◐', title: { fr: 'Localisation centrale', en: 'Central location' },
      desc: { fr: 'À deux pas des axes de transport et des principaux centres d’intérêt.',
              en: 'Steps from major transport links and key points of interest.' } },
    { icon: '◎', title: { fr: 'Restaurant & Soft Bar', en: 'Restaurant & Soft Bar' },
      desc: { fr: 'Cuisine variée, petit-déjeuner buffet, room service et ambiance chaleureuse.',
              en: 'Varied cuisine, breakfast buffet, room service and a warm atmosphere.' } }
  ],
  gallery: [
    '/img/city/rooms/DSC08025.webp',
    '/img/city/tea-garden/DSC08147.webp',
    '/img/city/tea-garden/DSC08156.webp',
    '/img/city/dining/DSC08270.webp',
    '/img/city/lobby/DSC08685.webp',
    '/img/city/meeting/DSC08475.webp',
    '/img/city/reception/DSC08733.webp',
    '/img/city/rooms/DSC08326.webp'
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
