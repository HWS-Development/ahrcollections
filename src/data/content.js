// =====================================================================
// Royal Plaza Hotel — Content (FR + EN)
// All copy below is verbatim from the brief (do not paraphrase).
// Photos use Unsplash placeholders — replace later with real DSC images.
// =====================================================================

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
  title:   { fr: 'On ne séjourne pas.\nOn vit une expérience.', en: 'You don’t just stay.\nYou experience.' },
  body: {
    fr: [
      'Il y a des lieux que l’on visite.',
      'Et d’autres que l’on ressent.',
      'Le Royal Plaza Hotel n’est pas simplement un hôtel.',
      'C’est une atmosphère, une énergie, une signature.',
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
      'At the Royal plaza hotel, you don’t just stay.',
      'Ydou experience.'
    ]
  },
  videoPoster: '/royal-plaza-poster.jpg',
  videoSrc:    '/royal-plaza-hero.mp4'
};

// Signature Résidentielle (intro to rooms)
export const SIGNATURE = {
  eyebrow: { fr: 'Signature Résidentielle', en: 'Residential Signature' },
  title:   { fr: 'Le silence devient un luxe.', en: 'Silence becomes a luxury.' },
  body: {
    fr: [
      'Poussez la porte… et laissez le monde extérieur s’effacer.',
      'La lumière s’installe doucement,',
      'les matières enveloppent,',
      'le silence devient un luxe.',
      'Chaque chambre est une promesse :',
      'celle d’un confort absolu,',
      'd’une nuit paisible,',
      'et d’un réveil sans contrainte.',
      'Un équilibre parfait entre élégance et fonctionnalité,',
      'Un hotel pensé pour ceux qui exigent le meilleur, naturellement.'
    ],
    en: [
      'Step inside… and let the outside world fade away.',
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
    fr: 'Chaque chambre est une promesse : celle d’un confort maîtrisé, d’un service discret, et d’une expérience qui dépasse les attentes.',
    en: 'Each room is a promise: of refined comfort, discreet service, and an experience beyond expectations.'
  }
};

// Rooms (4)
export const ROOMS = [
  {
    id: 'superior',
    label: { fr: 'Chambre Supérieure', en: 'Superior Room' },
    tag:   { fr: 'L’essentiel sublimé', en: 'Essential, elevated' },
    headline: {
      fr: 'L’essentiel, sublimé avec élégance.',
      en: 'Essential comfort, elevated with elegance.'
    },
    description: {
      fr: 'Pensée pour les séjours courts ou les voyageurs d’affaires, la chambre Supérieure du Royal Plaza Hotel offre un environnement épuré, fonctionnel et apaisant. Un espace où chaque détail est optimisé : literie de qualité supérieure, éclairage doux, bureau discret et atmosphère sereine.',
      en: 'Designed for short stays and business travelers, the Superior Room of the Royal Plaza Hotel offers a clean, functional, and calming environment. Every detail is optimized: premium bedding, soft lighting, discreet workspace, and a serene atmosphere.'
    },
    amenities: {
      fr: ['Lit confortable haute qualité', 'Bureau de travail', 'Salle de bain moderne', 'Wi-Fi haut débit', 'Climatisation', 'TV écran plat'],
      en: ['Premium bedding', 'Work desk', 'Modern bathroom', 'High-speed Wi-Fi', 'Air conditioning', 'Flat-screen TV']
    },
    photos: [
      'https://nvskwcjdrrrcpyiadoxy.supabase.co/storage/v1/object/public/AHR_COLLECTIONS/SUPERIOR_ROOM/DSC06865.jpg',
      'https://nvskwcjdrrrcpyiadoxy.supabase.co/storage/v1/object/public/AHR_COLLECTIONS/SUPERIOR_ROOM/DSC06861.jpg',
      'https://nvskwcjdrrrcpyiadoxy.supabase.co/storage/v1/object/public/AHR_COLLECTIONS/SUPERIOR_ROOM/DSC06853.jpg',
      'https://nvskwcjdrrrcpyiadoxy.supabase.co/storage/v1/object/public/AHR_COLLECTIONS/SUPERIOR_ROOM/DSC06821.jpg',
      'https://nvskwcjdrrrcpyiadoxy.supabase.co/storage/v1/object/public/AHR_COLLECTIONS/SUPERIOR_ROOM/DSC04764.jpg'
    ]
  },
  {
    id: 'deluxe',
    label: { fr: 'Chambre Deluxe', en: 'Deluxe Room' },
    tag:   { fr: 'Plus d’espace, plus de liberté', en: 'More space, more freedom' },
    headline: {
      fr: 'Plus d’espace, plus de confort, plus de liberté.',
      en: 'More space, more comfort, more freedom.'
    },
    description: {
      fr: 'La chambre Deluxe du Royal Plaza Hotel offre une expérience plus généreuse, avec un espace optimisé pour le repos et la détente. Les volumes s’ouvrent, la lumière circule, et l’ambiance devient plus enveloppante.',
      en: 'The Deluxe Room of the Royal Plaza Hotel offers a more generous experience, designed for both relaxation and comfort. Open spaces, natural light, and a warm atmosphere create a refined stay.'
    },
    amenities: {
      fr: ['Lit king size ou twin', 'Espace détente', 'Salle de bain élégante', 'Produits d’accueil premium', 'Wi-Fi haut débit', 'Coffre-fort'],
      en: ['King size or twin beds', 'Lounge area', 'Elegant bathroom', 'Premium amenities', 'High-speed Wi-Fi', 'Safety box']
    },
    photos: [
      'https://nvskwcjdrrrcpyiadoxy.supabase.co/storage/v1/object/public/AHR_COLLECTIONS/DELUXE_ROOM/DSC05141.jpg',
      'https://nvskwcjdrrrcpyiadoxy.supabase.co/storage/v1/object/public/AHR_COLLECTIONS/DELUXE_ROOM/DSC04755.jpg',
      'https://nvskwcjdrrrcpyiadoxy.supabase.co/storage/v1/object/public/AHR_COLLECTIONS/DELUXE_ROOM/DSC04748.jpg',
      'https://nvskwcjdrrrcpyiadoxy.supabase.co/storage/v1/object/public/AHR_COLLECTIONS/DELUXE_ROOM/DSC04715.jpg',
      'https://nvskwcjdrrrcpyiadoxy.supabase.co/storage/v1/object/public/AHR_COLLECTIONS/DELUXE_ROOM/DSC06865.jpg',
      'https://nvskwcjdrrrcpyiadoxy.supabase.co/storage/v1/object/public/AHR_COLLECTIONS/DELUXE_ROOM/DSC06942.jpg'
    ]
  },
  {
    id: 'junior',
    label: { fr: 'Junior Suite', en: 'Junior Suite' },
    tag:   { fr: 'Un véritable espace de vie', en: 'A true living space' },
    headline: {
      fr: 'Un espace de vie, une expérience à part.',
      en: 'A living space, a distinct experience.'
    },
    description: {
      fr: 'La Junior Suite du Royal Plaza Hotel propose une séparation subtile entre repos et détente, offrant un cadre plus fluide et confortable. Parfaite pour ceux qui recherchent plus qu’une chambre : un véritable espace de vie.',
      en: 'The Junior Suite of the Royal Plaza Hotel offers a subtle separation between rest and relaxation, creating a more fluid and comfortable environment. Perfect for those seeking more than a room — a true living space.'
    },
    amenities: {
      fr: ['Espace salon', 'Lit king size', 'Salle de bain spacieuse', 'Produits haut de gamme', 'Machine café', 'Peignoir & chaussons'],
      en: ['Lounge area', 'King size bed', 'Spacious bathroom', 'High-end amenities', 'Coffee machine', 'Bathrobe & slippers']
    },
    photos: [
      'https://nvskwcjdrrrcpyiadoxy.supabase.co/storage/v1/object/public/AHR_COLLECTIONS/JUNIOR_SUITE/DSC06877.jpg',
      'https://nvskwcjdrrrcpyiadoxy.supabase.co/storage/v1/object/public/AHR_COLLECTIONS/JUNIOR_SUITE/DSC06902.jpg',
      'https://nvskwcjdrrrcpyiadoxy.supabase.co/storage/v1/object/public/AHR_COLLECTIONS/JUNIOR_SUITE/DSC06907.jpg',
      'https://nvskwcjdrrrcpyiadoxy.supabase.co/storage/v1/object/public/AHR_COLLECTIONS/JUNIOR_SUITE/DSC06871.jpg',
      'https://nvskwcjdrrrcpyiadoxy.supabase.co/storage/v1/object/public/AHR_COLLECTIONS/JUNIOR_SUITE/DSC06913.jpg'
    ]
  },
  {
    id: 'executive',
    label: { fr: 'Executive Suite', en: 'Executive Suite' },
    tag:   { fr: 'L’expression ultime du Royal Plaza', en: 'The ultimate Royal Plaza expression' },
    headline: {
      fr: 'L’expression ultime du Royal Plaza.',
      en: 'The ultimate Royal Plaza expression.'
    },
    description: {
      fr: 'Spacieuse, élégante et parfaitement pensée, l’Executive Suite du Royal Plaza Hotel incarne le luxe discret. Chaque élément y est maîtrisé : volumes généreux, finitions raffinées, confort absolu. Un lieu idéal pour recevoir, se reposer ou travailler dans les meilleures conditions.',
      en: 'Spacious, elegant, and thoughtfully designed, the Executive Suite of the Royal Plaza Hotel embodies understated luxury. Generous volumes, refined finishes, and absolute comfort define the experience. Ideal for hosting, relaxing, or working in complete privacy.'
    },
    amenities: {
      fr: ['Salon indépendant', 'Chambre séparée', 'Salle de bain premium', 'Produits d’exception', 'Machine café & minibar halal', 'Service personnalisé'],
      en: ['Separate living room', 'Private bedroom', 'Premium bathroom', 'Exclusive amenities', 'Coffee machine & halal minibar', 'Personalized service']
    },
    photos: [
      'https://nvskwcjdrrrcpyiadoxy.supabase.co/storage/v1/object/public/AHR_COLLECTIONS/EXECUTIVE_SUITE/DSC06958.jpg',
      'https://nvskwcjdrrrcpyiadoxy.supabase.co/storage/v1/object/public/AHR_COLLECTIONS/EXECUTIVE_SUITE/DSC07000.jpg',
      'https://nvskwcjdrrrcpyiadoxy.supabase.co/storage/v1/object/public/AHR_COLLECTIONS/EXECUTIVE_SUITE/DSC07001.jpg',
      'https://nvskwcjdrrrcpyiadoxy.supabase.co/storage/v1/object/public/AHR_COLLECTIONS/EXECUTIVE_SUITE/DSC07029.jpg',
      'https://nvskwcjdrrrcpyiadoxy.supabase.co/storage/v1/object/public/AHR_COLLECTIONS/EXECUTIVE_SUITE/DSC06863.jpg'
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
      'De la générosité de L’Assiette',
      'à la finesse du Jade,',
      'chaque expérience culinaire au sein de notre hotel devient un voyage.'
    ],
    en: [
      'At Royal Plaza Hotel, every table tells a story.',
      'A scent, a texture, a surprise.',
      'Cuisine that does more than nourish —',
      'it awakens, connects, and leaves a mark.',
      'From the generosity of L’Assiette',
      'to the elegance of Jade,',
      'each dining moment at our hotel becomes a journey.'
    ]
  },
  photos: [
    'https://nvskwcjdrrrcpyiadoxy.supabase.co/storage/v1/object/public/AHR_COLLECTIONS/EMOTIONS_SAVEURS/DSC09492.jpg',
    'https://nvskwcjdrrrcpyiadoxy.supabase.co/storage/v1/object/public/AHR_COLLECTIONS/EMOTIONS_SAVEURS/DSC09483.jpg',
    'https://nvskwcjdrrrcpyiadoxy.supabase.co/storage/v1/object/public/AHR_COLLECTIONS/EMOTIONS_SAVEURS/DSC09478.jpg',
    'https://nvskwcjdrrrcpyiadoxy.supabase.co/storage/v1/object/public/AHR_COLLECTIONS/EMOTIONS_SAVEURS/DSC05743.jpg',
    'https://nvskwcjdrrrcpyiadoxy.supabase.co/storage/v1/object/public/AHR_COLLECTIONS/EMOTIONS_SAVEURS/DSC04976.jpg',
    'https://nvskwcjdrrrcpyiadoxy.supabase.co/storage/v1/object/public/AHR_COLLECTIONS/EMOTIONS_SAVEURS/DSC04805.jpg',
    'https://nvskwcjdrrrcpyiadoxy.supabase.co/storage/v1/object/public/AHR_COLLECTIONS/EMOTIONS_SAVEURS/DSC01746.jpg',
    'https://nvskwcjdrrrcpyiadoxy.supabase.co/storage/v1/object/public/AHR_COLLECTIONS/EMOTIONS_SAVEURS/DSC01736.jpg',
    'https://nvskwcjdrrrcpyiadoxy.supabase.co/storage/v1/object/public/AHR_COLLECTIONS/EMOTIONS_SAVEURS/DSC09483-2.jpg'
  ],
  venues: [
    { name: 'L’Assiette', tag: { fr: 'Générosité & saveurs partagées', en: 'Generosity & shared flavors' } },
    { name: 'Jade',       tag: { fr: 'Finesse asiatique contemporaine', en: 'Contemporary Asian finesse' } }
  ]
};

// Havre de Détente (Spa)
export const SPA = {
  eyebrow: { fr: 'Havre de Détente', en: 'Haven of Calm' },
  title:   { fr: 'Et si vous faisiez une pause… vraiment ?', en: 'What if you truly paused…?' },
  body: {
    fr: [
      'Et si vous faisiez une pause… vraiment ?',
      'Dans un monde qui accélère,',
      'le Serenita Royal Spa vous invite à ralentir.',
      'Respirer.',
      'Relâcher.',
      'Se retrouver.',
      'Entre chaleur, eau et silence,',
      'le corps se détend,',
      'l’esprit s’apaise,',
      'et l’équilibre revient naturellement.'
    ],
    en: [
      'What if you truly paused…?',
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
    'https://nvskwcjdrrrcpyiadoxy.supabase.co/storage/v1/object/public/AHR_COLLECTIONS/HavreDeDetente/DSC05192.jpg',
    'https://nvskwcjdrrrcpyiadoxy.supabase.co/storage/v1/object/public/AHR_COLLECTIONS/HavreDeDetente/DSC05565.jpg',
    'https://nvskwcjdrrrcpyiadoxy.supabase.co/storage/v1/object/public/AHR_COLLECTIONS/HavreDeDetente/DSC05553.jpg',
    'https://nvskwcjdrrrcpyiadoxy.supabase.co/storage/v1/object/public/AHR_COLLECTIONS/HavreDeDetente/DSC05546.jpg',
    'https://nvskwcjdrrrcpyiadoxy.supabase.co/storage/v1/object/public/AHR_COLLECTIONS/HavreDeDetente/DSC05528.jpg',
    'https://nvskwcjdrrrcpyiadoxy.supabase.co/storage/v1/object/public/AHR_COLLECTIONS/HavreDeDetente/DSC05521.jpg',
    'https://nvskwcjdrrrcpyiadoxy.supabase.co/storage/v1/object/public/AHR_COLLECTIONS/HavreDeDetente/DSC05504.jpg',
    'https://nvskwcjdrrrcpyiadoxy.supabase.co/storage/v1/object/public/AHR_COLLECTIONS/HavreDeDetente/DSC05397.jpg',
    'https://nvskwcjdrrrcpyiadoxy.supabase.co/storage/v1/object/public/AHR_COLLECTIONS/HavreDeDetente/DSC05265.jpg',
    'https://nvskwcjdrrrcpyiadoxy.supabase.co/storage/v1/object/public/AHR_COLLECTIONS/HavreDeDetente/DSC05621.jpg',
    'https://nvskwcjdrrrcpyiadoxy.supabase.co/storage/v1/object/public/AHR_COLLECTIONS/HavreDeDetente/DSC05636.jpg',
    'https://nvskwcjdrrrcpyiadoxy.supabase.co/storage/v1/object/public/AHR_COLLECTIONS/HavreDeDetente/DSC09595.jpg',
    'https://nvskwcjdrrrcpyiadoxy.supabase.co/storage/v1/object/public/AHR_COLLECTIONS/HavreDeDetente/DSC02213.jpg',
    'https://nvskwcjdrrrcpyiadoxy.supabase.co/storage/v1/object/public/AHR_COLLECTIONS/HavreDeDetente/DSC02223.jpg'
  ]
};

// Souvenirs en Devenir (Family)
export const FAMILY = {
  eyebrow: { fr: 'Souvenirs en Devenir', en: 'Memories in the Making' },
  title:   { fr: 'Le luxe, c’est aussi partager.', en: 'Luxury is also about sharing.' },
  body: {
    fr: [
      'Parce que le luxe, c’est aussi partager.',
      'Au Royal Plaza Hotel, chaque génération trouve sa place.',
      'Les enfants explorent, jouent et découvrent,',
      'pendant que les parents profitent pleinement.',
      'Un équilibre rare,',
      'où chacun vit son moment…',
      'ensemble.'
    ],
    en: [
      'Because luxury is also about sharing.',
      'At Royal Plaza Hotel, every generation finds its place.',
      'Children explore, play, and discover,',
      'while parents fully unwind.',
      'A rare balance',
      'where everyone lives their moment…',
      'together.'
    ]
  },
  photos: [
    'https://nvskwcjdrrrcpyiadoxy.supabase.co/storage/v1/object/public/AHR_COLLECTIONS/SouvenirsenDevenir/DSC01980.jpg?auto=format&fit=crop&w=1600&q=60',
    'https://nvskwcjdrrrcpyiadoxy.supabase.co/storage/v1/object/public/AHR_COLLECTIONS/SouvenirsenDevenir/DSC02004.jpg?auto=format&fit=crop&w=1600&q=60',
    'https://nvskwcjdrrrcpyiadoxy.supabase.co/storage/v1/object/public/AHR_COLLECTIONS/SouvenirsenDevenir/DSC02025.jpg?auto=format&fit=crop&w=1600&q=60',
    'https://nvskwcjdrrrcpyiadoxy.supabase.co/storage/v1/object/public/AHR_COLLECTIONS/SouvenirsenDevenir/DSC02036.jpg?auto=format&fit=crop&w=1600&q=60',
    'https://nvskwcjdrrrcpyiadoxy.supabase.co/storage/v1/object/public/AHR_COLLECTIONS/SouvenirsenDevenir/DSC02043.jpg?auto=format&fit=crop&w=1600&q=60',
    'https://nvskwcjdrrrcpyiadoxy.supabase.co/storage/v1/object/public/AHR_COLLECTIONS/SouvenirsenDevenir/DSC05305.jpg?auto=format&fit=crop&w=1600&q=60',
    'https://nvskwcjdrrrcpyiadoxy.supabase.co/storage/v1/object/public/AHR_COLLECTIONS/SouvenirsenDevenir/DSC09615.jpg?auto=format&fit=crop&w=1600&q=60',
    'https://nvskwcjdrrrcpyiadoxy.supabase.co/storage/v1/object/public/AHR_COLLECTIONS/SouvenirsenDevenir/DSC09617.jpg?auto=format&fit=crop&w=1600&q=60'
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
  videoSrc: 'https://cdn.coverr.co/videos/coverr-an-empty-business-meeting-room-7766/1080p.mp4',
  photos: [
    'https://nvskwcjdrrrcpyiadoxy.supabase.co/storage/v1/object/public/AHR_COLLECTIONS/BUSINESS_FORM/DSC04522.jpg',
    'https://nvskwcjdrrrcpyiadoxy.supabase.co/storage/v1/object/public/AHR_COLLECTIONS/BUSINESS_FORM/DSC04501.jpg',
    'https://nvskwcjdrrrcpyiadoxy.supabase.co/storage/v1/object/public/AHR_COLLECTIONS/BUSINESS_FORM/DSC04483.jpg',
    'https://nvskwcjdrrrcpyiadoxy.supabase.co/storage/v1/object/public/AHR_COLLECTIONS/BUSINESS_FORM/DSC04477.jpg',
    'https://nvskwcjdrrrcpyiadoxy.supabase.co/storage/v1/object/public/AHR_COLLECTIONS/BUSINESS_FORM/DSC04461.jpg',
    'https://nvskwcjdrrrcpyiadoxy.supabase.co/storage/v1/object/public/AHR_COLLECTIONS/BUSINESS_FORM/DSC04452.jpg',
    'https://nvskwcjdrrrcpyiadoxy.supabase.co/storage/v1/object/public/AHR_COLLECTIONS/BUSINESS_FORM/DSC04450.jpg',
    'https://nvskwcjdrrrcpyiadoxy.supabase.co/storage/v1/object/public/AHR_COLLECTIONS/BUSINESS_FORM/DSC04442.jpg',
    'https://nvskwcjdrrrcpyiadoxy.supabase.co/storage/v1/object/public/AHR_COLLECTIONS/BUSINESS_FORM/DSC04440.jpg'
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
