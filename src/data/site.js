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
  },
  socials: {
    aquaResort:  'https://www.instagram.com/waves_aqua_resort?igsh=MXUxY3V6NWFsbXRlNw%3D%3D',
    royalPlaza:  'https://www.instagram.com/royalplaza_kenitra?igsh=MWFxNXdlcmQ0d2duMg==',
    city:        'https://www.instagram.com/city_hotel_by_waves?igsh=MTUwMDZ6cDY0c2Rwbw%3D%3D',
    vitality:    'https://www.instagram.com/vitalityterminuskenitra?igsh=MW1lbWp0ZnlxbXRpYg%3D%3D',
    aquaFit:     'https://www.instagram.com/aqua_fit_kenitra?igsh=MWdkZ3ZqaHR2bW5ydg==',
    playAndJump: 'https://www.instagram.com/play_and_jump_park?igsh=MXZtZHUwZW1nc3YzZg=='
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
    accent: 'aqua',
    instagram: 'https://www.instagram.com/waves_aqua_resort?igsh=MXUxY3V6NWFsbXRlNw%3D%3D'
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
    accent: 'bordeaux',
    instagram: 'https://www.instagram.com/royalplaza_kenitra?igsh=MWFxNXdlcmQ0d2duMg=='
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
    accent: 'olive',
    instagram: 'https://www.instagram.com/vitalityterminuskenitra?igsh=MW1lbWp0ZnlxbXRpYg=='
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
    accent: 'sand',
    instagram: 'https://www.instagram.com/city_hotel_by_waves?igsh=MTUwMDZ6cDY0c2Rwbw%3D%3D'
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
      fr: 'Là où l’eau, la lumière et l’enfance se rencontrent — un univers tropical sculpté pour les sens, à quelques minutes du centre de Kénitra.',
      en: 'Where water, light and childhood meet — a tropical world sculpted for the senses, minutes from downtown Kénitra.'
    },
    videoPoster: '/img/aqua/pool/DJI_0097.webp',
    videoSrc:    '/videos/aqua-hero.mp4'
  },
  intro: {
    eyebrow: { fr: 'Bienvenue au Waves Aqua Resort', en: 'Welcome to Waves Aqua Resort' },
    title:   { fr: 'Une journée ici se mesure en frissons, en éclats de rire, en silences partagés.', en: 'A day here is measured in shivers, in bursts of laughter, in shared silences.' },
    body: {
      fr: [
        'Le matin, l’horizon turquoise s’éveille au son lointain des cascades — déjà, les premiers plongeons résonnent dans le grand bassin.',
        'À midi, les transats deviennent des îles privées, les enfants disparaissent sur les toboggans, et les conversations s’étirent autour d’un déjeuner pieds nus.',
        'L’après-midi se prolonge au Spa puis sur les plages VIP, avant que la magie du soir ne prenne le relais : grillades en live-cooking, cocktails au coucher du soleil, tempo lounge.',
        'Le Waves Aqua Resort n’est pas un hôtel — c’est une parenthèse, un terrain de jeu et un refuge, dans un seul et même lieu.'
      ],
      en: [
        'Morning unfolds in turquoise, to the distant rumble of cascades — already, the first dives ripple through the great pool.',
        'By noon, sun loungers become private islands, the children vanish onto the slides, and lunch stretches out, barefoot, around long tables.',
        'Afternoons drift into the Spa, then onto the VIP beaches, before the evening shifts gear: live-cooking grills, sunset cocktails, lounge tempo.',
        'Waves Aqua Resort is not a hotel — it is a pause, a playground and a refuge, all at once.'
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
      fr: 'Posez votre valise à une minute du quai LGV — et retrouvez immédiatement le calme, le confort, et le café qui réveille vraiment.',
      en: 'Drop your bag one minute from the LGV platform — and find instant calm, comfort, and a coffee that actually wakes you up.'
    },
    videoPoster: '/img/vitality/suite-junior/DSC07776.webp',
    videoSrc:    null
  },
  intro: {
    eyebrow: { fr: 'Bienvenue au Vitality Terminus', en: 'Welcome to Vitality Terminus' },
    title:   { fr: 'L’efficacité du centre-ville, sans en avoir l’usure.', en: 'The efficiency of downtown — without its wear.' },
    body: {
      fr: [
        'Vous descendez du train, vous traversez la rue, vous êtes arrivé. Le Vitality Terminus a été pensé pour ce geste-là : un seuil franchi, et la journée change de rythme.',
        'Les chambres respirent — lignes nettes, textiles doux, lumière maîtrisée. Le Business Center attend votre prochaine visio, le restaurant international votre prochaine pause.',
        'Au matin, le buffet s’étire jusqu’à tard ; au soir, le fitness reste ouvert quand le reste de la ville s’apaise.',
        'C’est l’hôtel d’une mobilité fluide — pour ceux qui ne font que passer, et pour ceux qui veulent vraiment être là.'
      ],
      en: [
        'You step off the train, cross the street, and you have arrived. Vitality Terminus is built around that single gesture: one threshold crossed, and the pace of the day shifts.',
        'Rooms breathe — clean lines, soft textiles, considered light. The Business Center is ready for your next call, the international restaurant for your next pause.',
        'In the morning, breakfast stretches late; at night, the fitness floor stays open while the rest of the city quiets down.',
        'This is the hotel of effortless mobility — for those passing through, and for those who truly want to be here.'
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
      desc: { fr: 'Carte du monde et petit-déjeuner buffet à savourer toute la matinée.',
              en: 'Cuisine from around the world with an all-morning breakfast buffet.' } },
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
      fr: 'Une adresse urbaine, un service sincère — pour vos rendez-vous d’affaires, vos visites en famille, vos parenthèses citadines.',
      en: 'An urban address, a sincere service — for business meetings, family visits, and city pauses.'
    },
    videoPoster: '/img/city/reception/DSC08733.webp',
    videoSrc:    '/videos/city-hero.mp4'
  },
  intro: {
    eyebrow: { fr: 'Bienvenue au City Hôtel', en: 'Welcome to City Hotel' },
    title:   { fr: 'L’élégance discrète d’un hôtel qui a choisi la ville.', en: 'The quiet elegance of a hotel that chose the city.' },
    body: {
      fr: [
        'Au croisement des avenues animées et des rues plus calmes de Kénitra, le City Hôtel by Waves a le bon goût de la discrétion.',
        'Chambres lumineuses, salles modulables, soft bar à la lumière tamisée : un cadre simple et soigné, où l’on travaille bien et où l’on rentre toujours volontiers.',
        'Pour le voyageur d’affaires, l’évidence d’un emplacement central. Pour le visiteur du week-end, la promesse d’un point d’ancrage tranquille avant d’explorer le Gharb.',
        'Ici, l’art de recevoir se mesure aux petites attentions — celles qui ne se remarquent pas, sauf quand elles manquent ailleurs.'
      ],
      en: [
        'At the crossroads of Kénitra’s busy avenues and quieter streets, City Hôtel by Waves has the good taste of discretion.',
        'Bright rooms, flexible meeting spaces, a softly-lit bar: a simple, well-tailored setting — easy to work in, easy to come back to.',
        'For the business traveler, the obvious appeal of a central address. For the weekend visitor, a calm anchor before exploring the Gharb region.',
        'Here, hospitality shows in the small attentions — the kind you only notice when they are missing elsewhere.'
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
      desc: { fr: 'Cuisine variée, petit-déjeuner buffet et ambiance chaleureuse.',
              en: 'Varied cuisine, breakfast buffet and a warm atmosphere.' } }
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
    { icon: 'phone',   label: { fr: 'Téléphone', en: 'Phone' }, value: BRAND.phone, href: `tel:${BRAND.phone.replace(/\s/g,'')}` },
    { icon: 'email',   label: { fr: 'Email',     en: 'Email' }, value: BRAND.email, href: `mailto:${BRAND.email}` },
    { icon: 'address', label: { fr: 'Adresse',   en: 'Address' }, value: BRAND.address.fr, href: 'https://www.google.com/maps?q=Kenitra' }
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
