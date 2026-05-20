// =====================================================================
// Royal Plaza Hotel — Content (FR + EN)
// All copy below is verbatim from the brief.
// Photos served from /img/royal/... (optimized WebP @ q=60, lazy-loaded).
// =====================================================================

const R = (section, name) => `/img/royal/${section}/${name}.webp`;

export const NAV = [
  { id: 'home',      fr: 'Accueil',     en: 'Home' },
  { id: 'rooms',     fr: 'Chambres',    en: 'Rooms' },
  { id: 'dining',    fr: 'Saveurs',     en: 'Dining' },
  { id: 'spa',       fr: 'Spa',         en: 'Spa' },
  { id: 'family',    fr: 'Famille',     en: 'Family' },
  { id: 'business',  fr: 'Business',    en: 'Business' }
];

// Hero / Page d'accueil
export const HERO = {
  eyebrow: { fr: 'Royal Plaza Hotel · Une signature', en: 'Royal Plaza Hotel · A signature' },
  title:   { fr: 'On ne séjourne pas.\nOn vit une expérience.', en: 'You don\u2019t just stay.\nYou experience.' },
  body: {
    fr: [
      'Il y a des lieux que l\u2019on visite.',
      'Et d\u2019autres que l\u2019on ressent.',
      'Le Royal Plaza Hotel n\u2019est pas simplement un hôtel.',
      'C\u2019est une atmosphère, une énergie, une signature.',
      'Dès les premiers instants, le temps ralentit.',
      'Les lignes sont épurées, les espaces respirent,',
      'et chaque détail semble pensé pour vous.',
      'Au Royal plaza hotel, on ne séjourne pas.',
      'On vit une expérience.'
    ],
    en: [
      'There are places you visit.',
      'And others you feel.',
      'Royal Plaza Hotel is not just a hotel.',
      'It is an atmosphere, energy, a signature.',
      'From the very first moments, time slows down.',
      'Lines are refined, spaces breathe,',
      'and every detail feels designed for you.',
      'At the Royal plaza hotel, you don\u2019t just stay.',
      'You experience.'
    ]
  },
  videoPoster: '/royal-plaza-poster.jpg',
  videoSrc:    '/videos/royal-plaza-hero.mp4'
};

// Signature Résidentielle (intro to rooms)
export const SIGNATURE = {
  eyebrow: { fr: 'Signature Résidentielle', en: 'Residential Signature' },
  title:   { fr: 'Le silence devient un luxe.', en: 'Silence becomes a luxury.' },
  body: {
    fr: [
      'Poussez la porte\u2026 et laissez le monde extérieur s\u2019effacer.',
      'La lumière s\u2019installe doucement,',
      'les matières enveloppent,',
      'le silence devient un luxe.',
      'Chaque chambre est une promesse :',
      'celle d\u2019un confort absolu,',
      'd\u2019une nuit paisible,',
      'et d\u2019un réveil sans contrainte.',
      'Un équilibre parfait entre élégance et fonctionnalité,',
      'Un hotel pensé pour ceux qui exigent le meilleur, naturellement.'
    ],
    en: [
      'Step inside\u2026 and let the outside world fade away.',
      'Light settles gently,',
      'textures embrace you,',
      'silence becomes a luxury.',
      'Each room is a promise:',
      'absolute comfort,',
      'peaceful nights,',
      'and effortless mornings.',
      'A perfect balance of elegance and functionality,',
      'Hotel designed for those who expect the best.'
    ]
  },
  pledge: {
    fr: 'Chaque chambre est une promesse : celle d\u2019un confort maîtrisé, d\u2019un service discret, et d\u2019une expérience qui dépasse les attentes.',
    en: 'Each room is a promise: of refined comfort, discreet service, and an experience beyond expectations.'
  }
};

// Rooms (4)
export const ROOMS = [
  {
    id: 'superior',
    label: { fr: 'Chambre Supérieure', en: 'Superior Room' },
    tag:   { fr: 'L\u2019essentiel sublimé', en: 'Essential, elevated' },
    headline: { fr: 'L\u2019essentiel, sublimé avec élégance.', en: 'Essential comfort, elevated with elegance.' },
    description: {
      fr: 'Pensée pour les séjours courts ou les voyageurs d\u2019affaires, la chambre Supérieure du Royal Plaza Hotel offre un environnement épuré, fonctionnel et apaisant. Un espace où chaque détail est optimisé : literie de qualité supérieure, éclairage doux, bureau discret et atmosphère sereine.',
      en: 'Designed for short stays and business travelers, the Superior Room of the Royal Plaza Hotel offers a clean, functional, and calming environment. Every detail is optimized: premium bedding, soft lighting, discreet workspace, and a serene atmosphere.'
    },
    amenities: {
      fr: ['Lit confortable haute qualité', 'Bureau de travail', 'Salle de bain moderne', 'Wi-Fi haut débit', 'Climatisation', 'TV écran plat'],
      en: ['Premium bedding', 'Work desk', 'Modern bathroom', 'High-speed Wi-Fi', 'Air conditioning', 'Flat-screen TV']
    },
    photos: [
      R('superior','DSC06865'),
      R('superior','DSC06861'),
      R('superior','DSC06853'),
      R('superior','DSC06821'),
      R('superior','DSC04764'),
    ]
  },
  {
    id: 'deluxe',
    label: { fr: 'Chambre Deluxe', en: 'Deluxe Room' },
    tag:   { fr: 'Plus d\u2019espace, plus de liberté', en: 'More space, more freedom' },
    headline: { fr: 'Plus d\u2019espace, plus de confort, plus de liberté.', en: 'More space, more comfort, more freedom.' },
    description: {
      fr: 'La chambre Deluxe du Royal Plaza Hotel offre une expérience plus généreuse, avec un espace optimisé pour le repos et la détente. Les volumes s\u2019ouvrent, la lumière circule, et l\u2019ambiance devient plus enveloppante.',
      en: 'The Deluxe Room of the Royal Plaza Hotel offers a more generous experience, designed for both relaxation and comfort. Open spaces, natural light, and a warm atmosphere create a refined stay.'
    },
    amenities: {
      fr: ['Lit king size ou twin', 'Espace détente', 'Salle de bain élégante', 'Produits d\u2019accueil premium', 'Wi-Fi haut débit', 'Coffre-fort'],
      en: ['King size or twin beds', 'Lounge area', 'Elegant bathroom', 'Premium amenities', 'High-speed Wi-Fi', 'Safety box']
    },
    photos: [
      R('deluxe','DSC05141'),
      R('deluxe','DSC04755'),
      R('deluxe','DSC04748'),
      R('deluxe','DSC04715'),
      R('deluxe','DSC06865'),
      R('deluxe','DSC06942'),
    ]
  },
  {
    id: 'junior',
    label: { fr: 'Junior Suite', en: 'Junior Suite' },
    tag:   { fr: 'Un véritable espace de vie', en: 'A true living space' },
    headline: { fr: 'Un espace de vie, une expérience à part.', en: 'A living space, a distinct experience.' },
    description: {
      fr: 'La Junior Suite du Royal Plaza Hotel propose une séparation subtile entre repos et détente, offrant un cadre plus fluide et confortable. Parfaite pour ceux qui recherchent plus qu\u2019une chambre : un véritable espace de vie.',
      en: 'The Junior Suite of the Royal Plaza Hotel offers a subtle separation between rest and relaxation, creating a more fluid and comfortable environment. Perfect for those seeking more than a room — a true living space.'
    },
    amenities: {
      fr: ['Espace salon', 'Lit king size', 'Salle de bain spacieuse', 'Produits haut de gamme', 'Machine café', 'Peignoir & chaussons'],
      en: ['Lounge area', 'King size bed', 'Spacious bathroom', 'High-end amenities', 'Coffee machine', 'Bathrobe & slippers']
    },
    photos: [
      R('junior','DSC06877'),
      R('junior','DSC06902'),
      R('junior','DSC06907'),
      R('junior','DSC06871'),
      R('junior','DSC06913'),
      R('junior','DSC09738'),
      R('junior','DSC09734'),
    ]
  },
  {
    id: 'executive',
    label: { fr: 'Executive Suite', en: 'Executive Suite' },
    tag:   { fr: 'L\u2019expression ultime du Royal Plaza', en: 'The ultimate Royal Plaza expression' },
    headline: { fr: 'L\u2019expression ultime du Royal Plaza.', en: 'The ultimate Royal Plaza expression.' },
    description: {
      fr: 'Spacieuse, élégante et parfaitement pensée, l\u2019Executive Suite du Royal Plaza Hotel incarne le luxe discret. Chaque élément y est maîtrisé : volumes généreux, finitions raffinées, confort absolu. Un lieu idéal pour recevoir, se reposer ou travailler dans les meilleures conditions.',
      en: 'Spacious, elegant, and thoughtfully designed, the Executive Suite of the Royal Plaza Hotel embodies understated luxury. Generous volumes, refined finishes, and absolute comfort define the experience. Ideal for hosting, relaxing, or working in complete privacy.'
    },
    amenities: {
      fr: ['Salon indépendant', 'Chambre séparée', 'Salle de bain premium', 'Produits d\u2019exception', 'Machine café & minibar halal', 'Service personnalisé'],
      en: ['Separate living room', 'Private bedroom', 'Premium bathroom', 'Exclusive amenities', 'Coffee machine & halal minibar', 'Personalized service']
    },
    photos: [
      R('executive','DSC06958'),
      R('executive','DSC07000'),
      R('executive','DSC07001'),
      R('executive','DSC07029'),
      R('executive','DSC06863'),
      R('executive','DSC09741'),
      R('executive','DSC09726'),
    ]
  }
];

// Émotions & Saveurs (Dining)
export const DINING = {
  eyebrow: { fr: 'Émotions & Saveurs', en: 'Emotions & Flavors' },
  title:   { fr: 'Chaque table raconte une histoire.', en: 'Every table tells a story.' },
  body: {
    fr: [
      'Au Royal Plaza Hotel, chaque table raconte une histoire.',
      'Un parfum, une texture, une surprise.',
      'Une cuisine qui ne se contente pas de nourrir,',
      'mais qui éveille, rassemble et marque les esprits.',
      'De la générosité de L\u2019Assiette',
      'à la finesse du Jade,',
      'chaque expérience culinaire au sein de notre hotel devient un voyage.'
    ],
    en: [
      'At Royal Plaza Hotel, every table tells a story.',
      'A scent, a texture, a surprise.',
      'Cuisine that does more than nourish —',
      'it awakens, connects, and leaves a mark.',
      'From the generosity of L\u2019Assiette',
      'to the elegance of Jade,',
      'each dining moment at our hotel becomes a journey.'
    ]
  },
  photos: [
    R('dining','DSC09492'),
    R('dining','DSC09483'),
    R('dining','DSC09478'),
    R('dining','DSC05743'),
    R('dining','DSC04976'),
    R('dining','DSC04805'),
    R('dining','DSC01746'),
    R('dining','DSC01736'),
  ],
  venues: [
    { name: 'L\u2019Assiette', tag: { fr: 'Générosité & saveurs partagées', en: 'Generosity & shared flavors' } },
    { name: 'Jade',       tag: { fr: 'Finesse asiatique contemporaine', en: 'Contemporary Asian finesse' } }
  ]
};

// Havre de Détente (Spa)
export const SPA = {
  eyebrow: { fr: 'Havre de Détente', en: 'Haven of Calm' },
  title:   { fr: 'Et si vous faisiez une pause\u2026 vraiment ?', en: 'What if you truly paused\u2026?' },
  body: {
    fr: [
      'Et si vous faisiez une pause\u2026 vraiment ?',
      'Dans un monde qui accélère,',
      'le Serenita Royal Spa vous invite à ralentir.',
      'Respirer.',
      'Relâcher.',
      'Se retrouver.',
      'Entre chaleur, eau et silence,',
      'le corps se détend,',
      'l\u2019esprit s\u2019apaise,',
      'et l\u2019équilibre revient naturellement.'
    ],
    en: [
      'What if you truly paused\u2026?',
      'In a world that moves fast,',
      'Serenita Royal Spa invites you to slow down.',
      'Breathe.',
      'Release.',
      'Reconnect.',
      'Through warmth, water, and silence,',
      'the body relaxes,',
      'the mind settles,',
      'and balance returns naturally.'
    ]
  },
  rituals: [
    { fr: 'Respirer', en: 'Breathe' },
    { fr: 'Relâcher', en: 'Release' },
    { fr: 'Se retrouver', en: 'Reconnect' }
  ],
  photos: [
    R('spa','DSC05192'),
    R('spa','DSC05565'),
    R('spa','DSC05553'),
    R('spa','DSC05546'),
    R('spa','DSC05528'),
    R('spa','DSC05521'),
    R('spa','DSC05504'),
    R('spa','DSC05397'),
    R('spa','DSC05265'),
    R('spa','DSC05621'),
    R('spa','DSC05636'),
    R('spa','DSC09595'),
    R('spa','DSC02213'),
    R('spa','DSC02223'),
  ]
};

// Souvenirs en Devenir (Family)
export const FAMILY = {
  eyebrow: { fr: 'Souvenirs en Devenir', en: 'Memories in the Making' },
  title:   { fr: 'Le luxe, c\u2019est aussi partager.', en: 'Luxury is also about sharing.' },
  body: {
    fr: [
      'Parce que le luxe, c\u2019est aussi partager.',
      'Au Royal Plaza Hotel, chaque génération trouve sa place.',
      'Les enfants explorent, jouent et découvrent,',
      'pendant que les parents profitent pleinement.',
      'Un équilibre rare,',
      'où chacun vit son moment\u2026',
      'ensemble.'
    ],
    en: [
      'Because luxury is also about sharing.',
      'At Royal Plaza Hotel, every generation finds its place.',
      'Children explore, play, and discover,',
      'while parents fully unwind.',
      'A rare balance',
      'where everyone lives their moment\u2026',
      'together.'
    ]
  },
  photos: [
    R('family','DSC02043'),
    R('family','DSC02036'),
    R('family','DSC02025'),
    R('family','DSC02004'),
    R('family','DSC01980'),
    R('family','DSC09615'),
    R('family','DSC09617'),
    R('family','DSC05305'),
  ]
};

// Le Business Forum
export const BUSINESS = {
  eyebrow: { fr: 'Le Business Forum', en: 'The Business Forum' },
  title:   { fr: 'Créer, décider, rassembler.', en: 'Create, decide, connect.' },
  body: {
    fr: [
      'Créer, décider, rassembler.',
      'Dans un environnement d hotel pensé pour inspirer,',
      'vos idées prennent forme avec fluidité.',
      'Chaque espace a été conçu pour allier efficacité et élégance,',
      'afin que chaque rencontre devienne une réussite.'
    ],
    en: [
      'Create, decide, connect.',
      'In an hotel environment designed to inspire,',
      'your ideas take shape effortlessly.',
      'Each space blends efficiency and elegance,',
      'turning every meeting into success.'
    ]
  },
  videoSrc:    '/videos/royal-business-forum.mp4',
  videoPoster: R('business','DSC04522'),
  ballroomVideoSrc:    '/videos/royal-ballroom.mp4',
  ballroomVideoPoster: R('business','DSC04501'),
  ballroomEyebrow: { fr: 'Grand Ballroom · Royal Plaza', en: 'Grand Ballroom · Royal Plaza' },
  ballroomTitle: {
    fr: 'Un écrin pour vos plus grands moments.',
    en: 'A setting for your grandest moments.'
  },
  photos: [
    R('business','DSC04522'),
    R('business','DSC04501'),
    R('business','DSC04483'),
    R('business','DSC04477'),
    R('business','DSC04461'),
    R('business','DSC04452'),
    R('business','DSC04450'),
    R('business','DSC04442'),
    R('business','DSC04440'),
  ]
};

// =====================================================================
// Restaurant Hall — L'Assiette Royale & Le Jade
// =====================================================================
export const RESTAURANT_HALL = {
  eyebrow: { fr: 'L\'Assiette Royale · Le Jade', en: 'L\'Assiette Royale · Le Jade' },
  title: {
    fr: 'Émotions & Saveurs\nChaque table raconte une histoire',
    en: 'Emotions & Flavors\nEvery table tells a story'
  },
  sub: {
    fr: 'Deux tables. Une seule âme.',
    en: 'Two tables. One soul.'
  },
  body: {
    fr: [
      'Au Royal Plaza Hotel, chaque table raconte une histoire.',
      'Un parfum, une texture, une surprise.',
      'Une cuisine qui ne se contente pas de nourrir,',
      'mais qui éveille, rassemble et marque les esprits.',
      'De la générosité de L\'Assiette',
      'à la finesse du Jade,',
      'chaque expérience culinaire au sein de notre hotel devient un voyage.'
    ],
    en: [
      'At Royal Plaza Hotel, every table tells a story.',
      'A fragrance, a texture, a surprise.',
      'A cuisine that does not merely nourish,',
      'but awakens, unites, and lingers in the mind.',
      'From the generosity of L\'Assiette',
      'to the refinement of Le Jade,',
      'every culinary experience within our hotel becomes a journey.'
    ]
  },
  venues: [
    {
      name: 'L\'Assiette Royale',
      tag:  { fr: 'Gastronomique · Lounge Soft Bar', en: 'Gastronomic · Lounge Soft Bar' },
      desc: {
        fr: 'Une cuisine signature aux produits d\'exception, dans une salle qui respire l\'élégance.',
        en: 'Signature cuisine with exceptional produce, in a room that breathes elegance.'
      }
    },
    {
      name: 'Le Jade',
      tag:  { fr: 'Restaurant Fusion · Asie & Méditerranée', en: 'Fusion Restaurant · Asia & Mediterranean' },
      desc: {
        fr: 'Un voyage gustatif entre deux rives, sublimé par une mise en scène soignée.',
        en: 'A gastronomic journey between two shores, elevated by meticulous staging.'
      }
    }
  ],
  photos: [
    R('dining','DSC09492'),
    R('dining','DSC09483'),
    R('dining','DSC09478'),
    R('dining','DSC05743'),
    R('dining','DSC04976'),
    R('dining','DSC04805'),
    R('dining','DSC01746'),
    R('dining','DSC01736'),
    R('hall','DSC01228'),
    R('hall','DSC01253'),
    R('hall','DSC01264'),
    R('hall','DSC01277'),
    R('hall','DSC01282'),
    R('hall','DSC01295'),
    R('hall','DSC01302'),
    R('hall','DSC01314'),
    R('hall','DSC01337'),
    R('hall','DSC01354'),
  ]
};

// =====================================================================
// Spa Piscine — Serenita Pool & Treatments
// =====================================================================
export const SPA_POOL = {
  eyebrow: { fr: 'Serenita · Piscine & Soins', en: 'Serenita · Pool & Treatments' },
  title: {
    fr: 'L\'eau comme\nrituel de luxe.',
    en: 'Water as a\nluxury ritual.'
  },
  sub: {
    fr: 'Piscine intérieure chauffée · Hammam · Massages & Soins Exclusifs',
    en: 'Indoor Heated Pool · Hammam · Massages & Exclusive Treatments'
  },
  quote: {
    fr: '« L\'eau n\'efface pas — elle transforme. »',
    en: '« Water does not erase — it transforms. »'
  },
  body: {
    fr: [
      'Au cœur du Royal Plaza, la Serenita est un monde à part.',
      'L\'eau chaude enveloppe,',
      'le silence apaise,',
      'le corps retrouve son équilibre.',
      'Piscine intérieure chauffée, hammam traditionnel,',
      'massages et soins signatures —',
      'chaque visite est une cérémonie,',
      'chaque instant, une renaissance.'
    ],
    en: [
      'At the heart of Royal Plaza, Serenita is a world apart.',
      'Warm water envelops,',
      'silence soothes,',
      'the body finds its balance.',
      'Indoor heated pool, traditional hammam,',
      'signature massages and treatments —',
      'every visit is a ceremony,',
      'every moment, a rebirth.'
    ]
  },
  features: [
    { icon: '∿', label: { fr: 'Piscine Intérieure Chauffée', en: 'Indoor Heated Pool' } },
    { icon: '◎', label: { fr: 'Hammam Traditionnel',         en: 'Traditional Hammam'  } },
    { icon: '◇', label: { fr: 'Massages & Soins',            en: 'Massages & Treatments' } },
    { icon: '◈', label: { fr: 'Jardins Aromatiques',         en: 'Aromatic Gardens'    } }
  ],
  photos: [
    R('spa','DSC05192'),
    R('spa','DSC05565'),
    R('spa','DSC05553'),
    R('spa','DSC05546'),
    R('spa','DSC05528'),
    R('spa','DSC05521'),
    R('spa','DSC05504'),
    R('spa','DSC05397'),
    R('spa','DSC05265'),
    R('spa','DSC05621'),
    R('spa','DSC05636'),
  ]
};

export const FOOTER = {
  address:  { fr: 'Avenue Mohamed V, Angle Av Al Jahid, Route de Tanger, Kénitra', en: 'Avenue Mohamed V, Angle Av Al Jahid, Route de Tanger, Kénitra' },
  phone:    '+212 (0) 537 304 141',
  email:    'reservation@ahr.com',
  rights:   { fr: '© 2025 Royal Plaza Hotel · Une Maison AHR Collections', en: '© 2025 Royal Plaza Hotel · An AHR Collections Maison' },
  cta:      { fr: 'Réserver votre séjour', en: 'Book your stay' }
};

export const UI = {
  bookNow:  { fr: 'Réserver', en: 'Book Now' },
  discover: { fr: 'Découvrir', en: 'Discover' },
  amenities:{ fr: 'Équipements', en: 'Amenities' },
  scroll:   { fr: 'Faites défiler', en: 'Scroll to explore' },
  prev:     { fr: 'Précédent', en: 'Previous' },
  next:     { fr: 'Suivant', en: 'Next' }
};
