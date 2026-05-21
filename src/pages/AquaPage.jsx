import { useRef, useState } from 'react';
import { motion, useInView, useMotionValue, useTransform, animate, AnimatePresence } from 'framer-motion';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

import PageHero            from '../components/PageHero.jsx';
import HotelRoomsSection   from '../components/HotelRoomsSection.jsx';
import { useT }            from '../contexts/LanguageContext.jsx';
import { AQUA, HOTELS }    from '../data/site.js';
import {
  AQUA_ROOMS, AQUA_STATS, AQUA_FEATURES, AQUA_INFO,
  AQUA_HIGHLIGHTS, AQUA_CONVENTION,
  AQUA_AQUAPARK_DETAILS, AQUA_WELLNESS, AQUA_DINING_VENUES, AQUA_PACK_OFFER,
} from '../data/hotels.js';
import { UI } from '../data/site.js';

/* ─── Auto-fading carousel for bento highlight tiles ─── */
function TileCarousel({ images, alt, intervalMs = 3800, video, poster }) {
  const [i, setI] = useState(0);
  useEffect(() => {
    if (video) return;
    if (!images || images.length < 2) return;
    const id = setInterval(() => setI(p => (p + 1) % images.length), intervalMs);
    return () => clearInterval(id);
  }, [images, intervalMs, video]);

  if (video) {
    return (
      <video
        src={video}
        poster={poster}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        aria-label={alt}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
      />
    );
  }

  if (!images || images.length === 0) return null;
  if (images.length === 1) {
    return (
      <img
        src={images[0]}
        alt={alt}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        loading="lazy"
        decoding="async"
      />
    );
  }
  return (
    <AnimatePresence mode="sync">
      <motion.img
        key={images[i]}
        src={images[i]}
        alt={alt}
        loading="lazy"
        decoding="async"
        initial={{ opacity: 0, scale: 1.08 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 1.02 }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        className="absolute inset-0 w-full h-full object-cover"
      />
    </AnimatePresence>
  );
}

/* ─── Count-up ─── */
function CountUp({ target, inView }) {
  const ref = useRef(null);
  const mv  = useMotionValue(0);
  const rnd = useTransform(mv, v => Math.round(v));
  useEffect(() => {
    if (!inView) return;
    const ctrl = animate(mv, target, { duration: 2.2, ease: [0.22, 1, 0.36, 1] });
    return ctrl.stop;
  }, [inView, target, mv]);
  useEffect(() => rnd.on('change', v => { if (ref.current) ref.current.textContent = v; }), [rnd]);
  return <span ref={ref}>0</span>;
}

/* ─── Feature card ─── */
function FeatureCard({ icon, title, desc, delay }) {
  const t = useT();
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 1, delay, ease: [0.22, 1, 0.36, 1] }}
      className="group relative bg-ivory border border-champagne/40 p-8 hover:border-bordeaux transition-colors duration-700 overflow-hidden"
    >
      <span className="absolute inset-0 bg-gradient-to-br from-champagne/0 via-champagne/12 to-bordeaux/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
      <span className="absolute top-3 right-3 w-3 h-3 border-t border-r border-bordeaux/60 pointer-events-none" />
      <span className="font-heading text-shimmer text-3xl leading-none">{icon}</span>
      <h3 className="mt-5 font-heading uppercase text-bordeaux tracking-wider text-[0.95rem] leading-tight">{t(title)}</h3>
      <span className="block mt-4 h-px w-10 bg-champagne group-hover:w-20 transition-all duration-500" />
      <p className="mt-4 font-display text-ink-soft text-[0.92rem] leading-[1.75]">{t(desc)}</p>
    </motion.div>
  );
}

/* ─── CongrèsRoomCard — photo carousel + rich detail ─── */
function CongrèsRoomCard({ room, delay }) {
  const t = useT();
  const [idx, setIdx] = useState(0);
  const photos = room.photos || [room.image];

  useEffect(() => {
    if (photos.length < 2) return;
    const id = setInterval(() => setIdx(p => (p + 1) % photos.length), 4200);
    return () => clearInterval(id);
  }, [photos.length]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 1, delay, ease: [0.22, 1, 0.36, 1] }}
      className="group relative bg-ivory border border-champagne/40 hover:border-bordeaux transition-colors duration-700 overflow-hidden flex flex-col"
    >
      {/* Photo area */}
      <div className="relative h-64 sm:h-72 lg:h-80 cinema overflow-hidden shrink-0">
        <AnimatePresence mode="sync">
          <motion.img
            key={photos[idx]}
            src={photos[idx]}
            alt={room.name}
            loading="lazy"
            decoding="async"
            initial={{ opacity: 0, scale: 1.06 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.02 }}
            transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-0 w-full h-full object-cover"
          />
        </AnimatePresence>
        {/* gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/20 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/30 to-transparent" />

        {/* Capacity badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.82 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}
          transition={{ duration: 0.6, delay: delay + 0.35 }}
          className="absolute top-4 right-4 bg-bordeaux px-4 py-2.5 text-center shadow-deep"
        >
          <p className="font-heading uppercase text-ivory/60 text-[0.5rem] tracking-[0.4em]">{t({ fr: 'Capacité', en: 'Capacity' })}</p>
          <p className="font-heading text-champagne text-2xl leading-none mt-0.5">
            {room.capacity}<span className="text-[0.6rem] ml-0.5 text-champagne/70">{t({ fr: 'p.', en: 'px' })}</span>
          </p>
        </motion.div>

        {/* Tagline */}
        <div className="absolute bottom-4 left-5">
          <p className="font-heading uppercase text-ivory/50 text-[0.56rem] tracking-[0.4em]">{t(room.tagline)}</p>
        </div>

        {/* Photo dots */}
        {photos.length > 1 && (
          <div className="absolute bottom-3 right-4 flex gap-1">
            {photos.map((_, i) => (
              <button
                key={i}
                onClick={() => setIdx(i)}
                aria-label={`Photo ${i + 1}`}
                className={`w-1.5 h-1.5 transition-all duration-400 ${i === idx ? 'bg-champagne scale-125' : 'bg-ivory/40'}`}
              />
            ))}
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-7 flex flex-col flex-1">
        <h3 className="font-heading uppercase text-bordeaux tracking-wider text-[1.1rem] leading-tight">
          {room.name}
        </h3>
        <span className="block mt-3 h-px w-10 bg-champagne group-hover:w-20 transition-all duration-500" />
        <p className="mt-4 font-display text-ink-soft text-[0.9rem] leading-[1.78]">
          {t(room.description)}
        </p>

        {/* Equipment */}
        <ul className="mt-5 space-y-2">
          {t(room.equipment).map((eq, i) => (
            <li key={i} className="flex items-center gap-2.5 font-display text-[0.82rem] text-ink-soft">
              <span className="w-1.5 h-1.5 bg-champagne shrink-0" />
              {eq}
            </li>
          ))}
        </ul>

        {/* Layouts */}
        <div className="mt-5 pt-4 border-t border-champagne/30 mt-auto">
          <p className="font-heading uppercase text-[0.53rem] tracking-[0.4em] text-champagne mb-1.5">
            {t({ fr: 'Configurations disponibles', en: 'Available layouts' })}
          </p>
          <p className="font-display text-[0.82rem] text-ink-soft italic">{t(room.layouts)}</p>
        </div>
      </div>
    </motion.div>
  );
}

/* ─── Meeting room card (legacy — kept for backward compat) ─── */
function MeetingRoomCard({ room, delay }) {
  const t = useT();
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 1, delay, ease: [0.22, 1, 0.36, 1] }}
      className="group relative bg-ivory border border-champagne/40 hover:border-bordeaux transition-colors duration-700 overflow-hidden"
    >
      {/* Image */}
      <div className="relative h-80 md:h-96 lg:h-[440px] cinema overflow-hidden">
        <img src={room.image} alt={room.name} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
        <div className="absolute bottom-0 inset-x-0 h-36 bg-gradient-to-t from-ink/85 to-transparent" />
        <div className="absolute top-0 inset-x-0 h-24 bg-gradient-to-b from-ink/45 to-transparent" />
        {/* Capacity badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}
          transition={{ duration: 0.6, delay: delay + 0.3 }}
          className="absolute top-4 right-4 bg-bordeaux px-4 py-2 text-center shadow-deep"
        >
          <p className="font-heading uppercase text-ivory/70 text-[0.52rem] tracking-[0.35em]">{t({ fr: 'Capacité', en: 'Capacity' })}</p>
          <p className="font-heading text-champagne text-2xl leading-none mt-0.5">
            {room.capacity}<span className="text-[0.65rem] ml-0.5 text-champagne/70">{t({ fr: 'p.', en: 'px' })}</span>
          </p>
        </motion.div>
        {/* Tagline overlay */}
        <div className="absolute bottom-4 left-5">
          <p className="font-heading uppercase text-ivory/50 text-[0.58rem] tracking-[0.4em]">{t(room.tagline)}</p>
        </div>
      </div>

      {/* Content */}
      <div className="p-7">
        <h3 className="font-heading uppercase text-bordeaux tracking-wider text-[1.1rem] leading-tight">{room.name}</h3>
        <span className="block mt-3 h-px w-10 bg-champagne group-hover:w-20 transition-all duration-500" />
        <p className="mt-4 font-display text-ink-soft text-[0.9rem] leading-[1.75]">{t(room.description)}</p>

        {/* Equipment */}
        <ul className="mt-5 space-y-2">
          {t(room.equipment).map((eq, i) => (
            <li key={i} className="flex items-center gap-2.5 font-display text-[0.83rem] text-ink-soft">
              <span className="w-1.5 h-1.5 bg-champagne flex-shrink-0" />
              {eq}
            </li>
          ))}
        </ul>

        {/* Layouts */}
        <div className="mt-5 pt-4 border-t border-champagne/30">
          <p className="font-heading uppercase text-[0.55rem] tracking-[0.4em] text-champagne mb-1.5">{t({ fr: 'Dispositions disponibles', en: 'Available layouts' })}</p>
          <p className="font-display text-[0.82rem] text-ink-soft italic">{t(room.layouts)}</p>
        </div>
      </div>
    </motion.div>
  );
}

export default function AquaPage() {
  const t = useT();
  const others = HOTELS.filter(h => h.id !== 'aqua');
  const statsRef = useRef(null);
  const statsInView = useInView(statsRef, { once: true, amount: 0.3 });

  const introImg = `/img/aqua/pool/DJI_0099.webp`;

  return (
    <>
      {/* ══════════════════════════════════════════
          HERO
      ══════════════════════════════════════════ */}
      <PageHero
        eyebrow={AQUA.hero.eyebrow}
        title={AQUA.hero.title}
        sub={AQUA.hero.sub}
          videoPoster={AQUA.hero.videoPoster}
          logo="/logos/wave-aqua-resort-logo.svg"
          secondaryHref="#intro"
        />

      {/* ══════════════════════════════════════════
          INTRO / SIGNATURE
      ══════════════════════════════════════════ */}
      <section id="intro" className="relative section-pad bg-ivory overflow-hidden">
        <div className="absolute inset-0 bg-champagne-radial pointer-events-none" />
        <div className="absolute -top-32 left-0 w-[480px] h-[480px] bg-bordeaux/5 blur-3xl -translate-x-1/3" />

        <div className="relative max-w-[1400px] mx-auto px-6 lg:px-12 grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">

          {/* Left text */}
          <div className="lg:col-span-5 flex flex-col">
            <motion.span
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="ornament eyebrow"
            >
              {t(AQUA.intro.eyebrow)}
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ duration: 1.1, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="mt-6 font-heading uppercase text-bordeaux text-[clamp(2rem,4vw,3.6rem)] leading-[1.05]"
            >
              {t(AQUA.intro.title)}
            </motion.h2>
            <span className="hairline mt-8" />

            <div className="mt-8 space-y-1.5 font-display text-ink-soft leading-[1.95] text-[0.98rem] max-w-lg">
              {t(AQUA.intro.body).map((line, i) => (
                <motion.p key={i}
                  initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.7, delay: 0.05 * i }}
                >
                  {line}
                </motion.p>
              ))}
            </div>

            {/* Info pills */}
            <motion.div
              initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ duration: 0.9, delay: 0.5 }}
              className="mt-10 flex flex-wrap gap-3"
            >
              {[
                { icon: '📍', text: t(AQUA_INFO.address) },
                { icon: '✆',  text: AQUA_INFO.phone },
                { icon: '★',  text: t({ fr: '5 Étoiles', en: '5 Stars' }) },
              ].map((p) => (
                <span key={p.text} className="inline-flex items-center gap-2 px-4 py-2 border border-champagne/50 bg-ivory font-display text-[0.82rem] text-ink-soft">
                  <span className="text-champagne text-xs">{p.icon}</span>
                  {p.text}
                </span>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ duration: 0.9, delay: 0.7 }}
              className="mt-8"
            >
              <a href={AQUA_INFO.bookingUrl} target="_blank" rel="noreferrer" className="btn-royal">
                {t(UI.bookNow)} <span aria-hidden>→</span>
              </a>
            </motion.div>
          </div>

          {/* Right image */}
          <motion.div
            initial={{ opacity: 0, y: 60, scale: 1.04 }} whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7 relative"
          >
            <div className="cinema relative overflow-hidden shadow-deep">
              <img src={introImg} alt="Waves Aqua Resort" className="w-full h-[340px] sm:h-[460px] lg:h-[580px] object-cover" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-tr from-[rgba(163,218,230,0.12)] to-transparent mix-blend-multiply" />
              <div className="pointer-events-none absolute inset-4 border border-champagne/40" />
            </div>
            {/* Floating badge */}
            <motion.div
              initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.5 }}
              className="hidden md:block absolute -bottom-8 -left-8 glass-panel px-7 py-5 shadow-soft"
            >
              <p className="font-heading uppercase tracking-[0.4em] text-[0.6rem] text-champagne mb-1">Waves Aqua Resort</p>
              <p className="serif-flourish text-bordeaux text-xl leading-snug">
                {t({ fr: 'Resort 5★ · Piscine extérieure', en: '5★ Resort · Outdoor pool' })}
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          AMENITIES STRIP
      ══════════════════════════════════════════ */}
      <div className="relative bg-bordeaux py-6 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(201,167,102,0.15),_transparent_70%)]" />
        <div className="relative marquee text-ivory/90 font-heading uppercase tracking-[0.5em] text-[0.72rem]">
          {Array.from({ length: 3 }).flatMap((_, k) =>
            [
              { fr: 'Piscine Extérieure', en: 'Outdoor Pool' },
              { fr: 'Room Service',       en: 'Room Service' },
              { fr: 'Aqua Spa',           en: 'Aqua Spa' },
              { fr: 'Restaurant & Bar',   en: 'Restaurant & Bar' },
              { fr: 'Parking Gratuit',    en: 'Free Parking' },
              { fr: 'Navette Aéroport',   en: 'Airport Shuttle' },
              { fr: 'Wi-Fi Gratuit',      en: 'Free Wi-Fi' },
              { fr: 'Jardin Tropical',    en: 'Tropical Garden' },
            ].map((a, idx) => (
              <span key={idx + '-' + k} className="flex items-center gap-6">
                <span>{t(a)}</span>
                <span className="text-champagne">◇</span>
              </span>
            ))
          )}
        </div>
      </div>

      {/* ══════════════════════════════════════════
          AQUAPARC HERO TEASER — full-bleed cinematic
      ══════════════════════════════════════════ */}
      <section id="aquaparc-teaser" className="relative overflow-hidden">
        <div className="relative min-h-[440px] sm:min-h-[520px] lg:min-h-[620px] flex items-end">
          {/* Background: autoplay aquapark video */}
          <video
            className="absolute inset-0 w-full h-full object-cover"
            src="/videos/aqua-aquapark.mp4"
            poster="/img/aqua/pool/DJI_0097.webp"
            autoPlay muted loop playsInline preload="metadata"
          />
          {/* Overlays: teal gradient + dark base */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#051a2e]/95 via-[#082030]/55 to-[#0a2535]/20" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(163,218,230,0.18),_transparent_60%)]" />
          <div className="pointer-events-none absolute inset-0 border-[0px]" />

          {/* Top label */}
          <motion.div
            initial={{ opacity: 0, y: -12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="absolute top-8 left-8 sm:left-12"
          >
            <span className="inline-flex items-center gap-2 font-heading uppercase tracking-[0.5em] text-[0.6rem] text-ivory/80 bg-[rgba(10,60,80,0.55)] backdrop-blur-sm border border-white/10 px-4 py-2">
              <span className="text-[#5ecfea]">∿</span>
              {t({ fr: 'Aqua Park · Waves Aqua Resort', en: 'Aqua Park · Waves Aqua Resort' })}
            </span>
          </motion.div>

          {/* Main content */}
          <div className="relative z-10 w-full px-8 sm:px-12 lg:px-20 pb-14 lg:pb-20 grid lg:grid-cols-2 gap-10 items-end">
            <div>
              <motion.span
                initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="font-heading uppercase tracking-[0.5em] text-[0.62rem] text-[#5ecfea]/80"
              >
                {t({ fr: 'Le parc aquatique le plus grand de la région', en: 'The largest water park in the region' })}
              </motion.span>
              <motion.h2
                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                transition={{ duration: 1.1, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="mt-4 font-heading uppercase text-ivory text-[clamp(2.2rem,4.8vw,4.2rem)] leading-[1.02]"
              >
                {t({ fr: 'L\'Aquaparc\nWaves.', en: 'The Waves\nAquaparc.' })}
              </motion.h2>
              <span className="block mt-6 h-px w-16 bg-gradient-to-r from-[#5ecfea]/70 to-transparent" />
            </div>

            <div className="lg:pb-1">
              <motion.p
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                transition={{ duration: 0.9, delay: 0.2 }}
                className="font-display text-ivory/75 leading-[1.95] text-[0.98rem] max-w-lg"
              >
                {t({
                  fr: 'Plus de 30 toboggans géants, piscine à vagues, rivière lente et espaces VIP — une aventure aquatique hors normes, incluse dans votre séjour ou accessible en ticket journée.',
                  en: 'Over 30 giant slides, wave pool, lazy river and VIP areas — an extraordinary aquatic adventure, included with your stay or available as a day-pass.'
                })}
              </motion.p>

              {/* Quick badges */}
              <motion.div
                initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                transition={{ duration: 0.9, delay: 0.35 }}
                className="mt-7 flex flex-wrap gap-2.5"
              >
                {[
                  { fr: '30+ Toboggans', en: '30+ Slides' },
                  { fr: 'Piscine à Vagues', en: 'Wave Pool' },
                  { fr: 'Rivière Lente', en: 'Lazy River' },
                  { fr: 'Espace VIP', en: 'VIP Area' },
                ].map(badge => (
                  <span
                    key={badge.fr}
                    className="inline-block font-heading uppercase tracking-[0.3em] text-[0.58rem] text-ivory/80 bg-white/10 backdrop-blur-sm border border-white/15 px-3 py-1.5"
                  >
                    {t(badge)}
                  </span>
                ))}
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                transition={{ duration: 0.9, delay: 0.5 }}
                className="mt-8 flex gap-4 flex-wrap"
              >
                <a
                  href={AQUA_INFO.bookingUrl}
                  target="_blank" rel="noreferrer"
                  className="btn-royal"
                >
                  {t({ fr: 'Réserver mon séjour', en: 'Book my stay' })} <span aria-hidden>→</span>
                </a>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          ROOMS
      ══════════════════════════════════════════ */}
      <HotelRoomsSection
        rooms={AQUA_ROOMS}
        eyebrow={{ fr: 'Nos Chambres & Suites', en: 'Rooms & Suites' }}
        title={{ fr: 'Dix univers, une même sérénité.', en: 'Ten universes, one serenity.' }}
        sub={{ fr: 'De la Supérieure Terrasse à la Suite Royale — chaque espace Waves Aqua est une invitation à la douceur de vivre 5 étoiles.', en: 'From the Superior Terrace to the Royal Suite — every Waves Aqua space is an invitation to 5-star soft living.' }}
        bg="bg-mist"
        bookingUrl={AQUA_INFO.bookingUrl}
      />

      {/* ══════════════════════════════════════════
          NOS POINTS FORTS — BENTO GRID
      ══════════════════════════════════════════ */}
      <section className="relative section-pad bg-ivory-50 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(201,167,102,0.18),_transparent_65%)] pointer-events-none" />

        {/* Animated top hairline */}
        <motion.span
          initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }}
          transition={{ duration: 1.6 }}
          className="block h-px bg-gradient-to-r from-transparent via-bordeaux/40 to-transparent origin-center mb-16"
        />

        <div className="relative max-w-[1500px] mx-auto px-6 lg:px-12">
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto">
            <motion.span
              initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="font-heading uppercase tracking-[0.3em] sm:tracking-[0.55em] text-[0.6rem] sm:text-[0.65rem] text-bordeaux"
            >
              {t({ fr: 'Expériences Exclusives', en: 'Exclusive Experiences' })}
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ duration: 1.1, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="mt-6 font-heading uppercase text-bordeaux text-[clamp(2rem,4vw,3.6rem)] leading-[1.05]"
            >
              {t({ fr: 'Nos Points Forts.', en: 'Our Highlights.' })}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ duration: 0.9, delay: 0.2 }}
              className="mt-5 font-display text-ink-soft text-[0.95rem] leading-[1.85]"
            >
              {t({ fr: 'Du parc aquatique à la salle de fêtes — le Waves Aqua Resort est un monde en soi.', en: 'From the aqua park to the ballroom — Waves Aqua Resort is a world of its own.' })}
            </motion.p>
          </div>

          {/* Bento grid — 4 cols desktop, 2 cols mobile */}
          <div className="mt-14 grid grid-cols-2 lg:grid-cols-4 gap-3">
            {AQUA_HIGHLIGHTS.map((tile, i) => (
              <motion.div
                key={tile.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.9, delay: 0.06 * i, ease: [0.22, 1, 0.36, 1] }}
                className={`group relative cinema overflow-hidden ${tile.wide ? 'col-span-2' : 'col-span-1'} h-64 lg:h-80 border border-champagne/40`}
              >
                <TileCarousel images={tile.images || [tile.image]} video={tile.video} poster={tile.image} alt={t(tile.label)} intervalMs={3500 + (i * 350)} />
                {/* Light gradient overlay for text readability — gentle */}
                <div className="absolute inset-0 bg-gradient-to-t from-bordeaux-deep/85 via-bordeaux-deep/25 to-transparent group-hover:from-bordeaux-deep/75 transition-all duration-700" />
                <div className="pointer-events-none absolute inset-0 border border-champagne/0 group-hover:border-champagne/60 transition-colors duration-700" />

                {/* Icon */}
                <div className="absolute top-5 left-5">
                  <span className="font-heading text-champagne text-xl">{tile.icon}</span>
                </div>

                {/* Text */}
                <div className="absolute bottom-0 inset-x-0 p-5">
                  <h3 className="font-heading uppercase text-ivory tracking-wider text-[0.92rem] leading-tight group-hover:text-champagne transition-colors duration-500">
                    {t(tile.label)}
                  </h3>
                  <p className="mt-1.5 font-display text-ivory/85 text-[0.78rem] leading-[1.6] transition-colors duration-500">
                    {t(tile.sub)}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom hairline */}
        <motion.span
          initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }}
          transition={{ duration: 1.6 }}
          className="block h-px bg-gradient-to-r from-transparent via-bordeaux/30 to-transparent origin-center mt-16"
        />
      </section>

      {/* ══════════════════════════════════════════
          AQUAPARC DETAILS — slides / waves / kids / VIP
      ══════════════════════════════════════════ */}
      <section className="relative section-pad bg-ivory overflow-hidden">
        <div className="absolute -top-32 right-0 w-[480px] h-[480px] bg-champagne/10 blur-3xl pointer-events-none" />
        <div className="relative max-w-[1500px] mx-auto px-6 lg:px-12">
          <div className="text-center max-w-3xl mx-auto">
            <span className="ornament eyebrow">{t(AQUA_AQUAPARK_DETAILS.eyebrow)}</span>
            <motion.h2
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
              className="mt-6 font-heading uppercase text-bordeaux text-[clamp(1.8rem,3vw,2.8rem)] leading-tight"
            >
              {t(AQUA_AQUAPARK_DETAILS.title)}
            </motion.h2>
            <span className="block hairline mx-auto mt-6" />
            <p className="mt-6 font-display text-ink-soft text-[1rem] leading-[1.85]">
              {t(AQUA_AQUAPARK_DETAILS.sub)}
            </p>
          </div>
          <div className="mt-14 sm:mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
            {AQUA_AQUAPARK_DETAILS.items.map((it, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.9, delay: 0.08 * i, ease: [0.22, 1, 0.36, 1] }}
                className="group relative bg-ivory-50 border border-champagne/40 p-7 overflow-hidden hover:border-bordeaux transition-colors duration-700"
              >
                <span className="absolute top-3 left-3 w-3 h-3 border-t border-l border-bordeaux/60" />
                <span className="absolute bottom-3 right-3 w-3 h-3 border-b border-r border-bordeaux/60" />
                <p className="font-heading text-shimmer text-3xl">{it.icon}</p>
                <h3 className="mt-5 font-heading uppercase text-bordeaux tracking-wider text-[0.92rem] leading-tight">{t(it.title)}</h3>
                <span className="block mt-4 h-px w-10 bg-champagne group-hover:w-20 transition-all duration-500" />
                <p className="mt-4 font-display text-ink-soft text-[0.9rem] leading-[1.7]">{t(it.desc)}</p>
              </motion.div>
            ))}
          </div>
          <p className="mt-10 text-center font-heading uppercase tracking-[0.32em] text-[0.7rem] text-bordeaux/80">
            {t(AQUA_AQUAPARK_DETAILS.access)}
          </p>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          WELLNESS — Spa / Hammam / Beauty
      ══════════════════════════════════════════ */}
      <section className="relative section-pad bg-mist overflow-hidden">
        <div className="absolute -top-32 left-0 w-[480px] h-[480px] bg-bordeaux/5 blur-3xl pointer-events-none" />
        <div className="relative max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="text-center max-w-3xl mx-auto">
            <span className="ornament eyebrow">{t(AQUA_WELLNESS.eyebrow)}</span>
            <motion.h2
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
              className="mt-6 font-heading uppercase text-bordeaux text-[clamp(1.7rem,2.8vw,2.6rem)] leading-tight"
            >
              {t(AQUA_WELLNESS.title)}
            </motion.h2>
            <span className="block hairline mx-auto mt-6" />
          </div>
          <div className="mt-14 grid md:grid-cols-3 gap-5 lg:gap-7">
            {AQUA_WELLNESS.items.map((it, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.9, delay: 0.1 * i, ease: [0.22, 1, 0.36, 1] }}
                className="group relative bg-ivory border border-champagne/40 p-8 overflow-hidden hover:border-bordeaux transition-colors duration-700"
              >
                <span className="absolute inset-0 bg-gradient-to-br from-champagne/0 via-champagne/15 to-bordeaux/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <span className="absolute top-3 left-3 w-3 h-3 border-t border-l border-bordeaux/60" />
                <span className="absolute bottom-3 right-3 w-3 h-3 border-b border-r border-bordeaux/60" />
                <p className="font-heading text-shimmer text-3xl">{it.icon}</p>
                <h3 className="mt-5 font-heading uppercase text-bordeaux tracking-wider text-[0.95rem] leading-tight">{t(it.title)}</h3>
                <span className="block mt-4 h-px w-10 bg-champagne group-hover:w-20 transition-all duration-500" />
                <p className="mt-4 font-display text-ink-soft text-[0.92rem] leading-[1.75]">{t(it.desc)}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          DINING VENUES — 5 named restaurants/lounges
      ══════════════════════════════════════════ */}
      <section className="relative section-pad bg-ivory-50 overflow-hidden">
        <div className="absolute inset-0 bg-champagne-radial pointer-events-none" />
        <div className="relative max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="text-center max-w-3xl mx-auto">
            <span className="ornament eyebrow">{t(AQUA_DINING_VENUES.eyebrow)}</span>
            <motion.h2
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
              className="mt-6 font-heading uppercase text-bordeaux text-[clamp(1.7rem,2.8vw,2.6rem)] leading-tight"
            >
              {t(AQUA_DINING_VENUES.title)}
            </motion.h2>
            <span className="block hairline mx-auto mt-6" />
          </div>
          <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
            {AQUA_DINING_VENUES.venues.map((v, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.9, delay: 0.08 * i, ease: [0.22, 1, 0.36, 1] }}
                className="group relative bg-ivory border border-champagne/40 p-7 overflow-hidden hover:border-bordeaux transition-colors duration-700"
              >
                <span className="absolute top-3 left-3 w-3 h-3 border-t border-l border-bordeaux/60" />
                <span className="absolute bottom-3 right-3 w-3 h-3 border-b border-r border-bordeaux/60" />
                <p className="font-heading uppercase text-bordeaux text-[1.05rem] tracking-wider leading-tight">{v.name}</p>
                <span className="block mt-3 h-px w-10 bg-champagne group-hover:w-20 transition-all duration-500" />
                <p className="mt-4 font-display text-ink-soft text-[0.92rem] leading-[1.75]">{t(v.desc)}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          PACK HÔTEL & AQUAPARC — booking offer
      ══════════════════════════════════════════ */}
      <section className="relative py-24 sm:py-28 bg-bordeaux text-ivory overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(201,167,102,0.18),_transparent_70%)]" />
        <motion.div
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
          className="relative max-w-3xl mx-auto px-6 text-center"
        >
          <span className="font-heading uppercase tracking-[0.4em] text-[0.7rem] text-shimmer">{t(AQUA_PACK_OFFER.eyebrow)}</span>
          <h2 className="mt-6 font-heading uppercase text-ivory text-[clamp(1.8rem,3vw,2.8rem)] leading-tight">
            {t(AQUA_PACK_OFFER.title)}
          </h2>
          <span className="block h-px w-20 bg-champagne mx-auto mt-6" />
          <p className="mt-8 font-display text-ivory/90 text-[1.02rem] leading-[1.9] max-w-2xl mx-auto">
            {t(AQUA_PACK_OFFER.sub)}
          </p>
          <ul className="mt-10 space-y-3 text-left max-w-xl mx-auto">
            {AQUA_PACK_OFFER.perks.map((p, i) => (
              <li key={i} className="flex items-start gap-3 font-display text-ivory/85 text-[0.95rem] leading-[1.7]">
                <span className="text-champagne mt-1">◆</span>
                <span>{t(p)}</span>
              </li>
            ))}
          </ul>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a href={AQUA_INFO.bookingUrl} target="_blank" rel="noreferrer" className="btn-royal">
              {t(UI.bookNow)} <span aria-hidden>→</span>
            </a>
          </div>
        </motion.div>
      </section>

      {/* ══════════════════════════════════════════
          LE BALLROOM — standalone banner
      ══════════════════════════════════════════ */}
      <section className="relative section-pad bg-ink overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(201,167,102,0.08),_transparent_70%)] pointer-events-none" />
        <div className="relative max-w-[1500px] mx-auto px-6 lg:px-12">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <motion.span
              initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="font-heading uppercase tracking-[0.55em] text-[0.65rem] text-shimmer"
            >
              {t({ fr: 'Waves Aqua Resort · Événements', en: 'Waves Aqua Resort · Events' })}
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ duration: 1.1, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="mt-6 font-heading uppercase text-ivory text-[clamp(2rem,4vw,3.4rem)] leading-[1.05]"
            >
              {t({ fr: 'La Salle des Merveilles.', en: 'The Room of Wonders.' })}
            </motion.h2>
            <span className="block h-px w-16 bg-champagne/50 mx-auto mt-8" />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 1.2, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="relative cinema overflow-hidden shadow-deep min-h-[380px] lg:min-h-[480px] flex items-end"
          >
            <img
              src={AQUA_CONVENTION.ballroomImage}
              alt="Le Ballroom Waves Aqua Resort"
              className="absolute inset-0 w-full h-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/50 to-ink/15" />
            <div className="pointer-events-none absolute inset-5 border border-champagne/25" />

            <div className="absolute top-6 left-8">
              <span className="inline-block font-heading uppercase tracking-[0.5em] text-[0.6rem] text-ivory bg-bordeaux px-4 py-2">
                {t({ fr: 'Salle des Merveilles', en: 'Room of Wonders' })}
              </span>
            </div>

            <div className="relative z-10 w-full p-10 lg:p-14 grid lg:grid-cols-2 gap-8 items-end">
              <div>
                <p className="font-heading uppercase tracking-[0.5em] text-[0.65rem] text-champagne/70 mb-4">
                  {t({ fr: 'Waves Aqua Resort · Le Ballroom', en: 'Waves Aqua Resort · The Ballroom' })}
                </p>
                <h3 className="font-heading uppercase text-ivory text-[clamp(1.6rem,3vw,2.8rem)] leading-[1.05]">
                  {t({ fr: 'Votre plus grand événement mérite le plus beau cadre.', en: 'Your greatest event deserves the finest stage.' })}
                </h3>
                <span className="block mt-6 h-px w-14 bg-gradient-to-r from-champagne/60 to-transparent" />
              </div>
              <div>
                <p className="font-display text-ivory/65 leading-[1.9] text-[0.97rem]">
                  {t(AQUA_CONVENTION.ballroomSub)}
                </p>
                <a
                  href={AQUA_INFO.bookingUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-7 inline-flex items-center gap-2 font-heading uppercase tracking-[0.4em] text-[0.65rem] text-champagne hover:text-ivory transition-colors duration-400"
                >
                  {t({ fr: 'Privatiser le Ballroom', en: 'Book the Ballroom' })} <span>→</span>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          PALAIS DES CONGRÈS — fully redesigned
      ══════════════════════════════════════════ */}
      <section id="congres" className="relative overflow-hidden">

        {/* ── Video / Hero Banner ── */}
        <div className="relative min-h-[480px] sm:min-h-[560px] lg:min-h-[640px] flex items-end overflow-hidden">
          {AQUA_CONVENTION.videoSrc ? (
            <video
              className="absolute inset-0 w-full h-full object-cover"
              src={AQUA_CONVENTION.videoSrc}
              poster={AQUA_CONVENTION.videoPoster}
              autoPlay muted loop playsInline preload="metadata"
            />
          ) : (
            <img
              src={AQUA_CONVENTION.videoPoster}
              alt="Palais des Congrès Waves Aqua"
              className="absolute inset-0 w-full h-full object-cover"
              loading="lazy"
            />
          )}
          {/* layered gradients — dark at base + teal cinematic tint */}
          <div className="absolute inset-0 bg-gradient-to-t from-ink/95 via-ink/55 to-ink/15" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(163,218,230,0.12),_transparent_60%)]" />
          <div className="pointer-events-none absolute inset-0 border-[0px]" />

          {/* Top badge */}
          <div className="absolute top-8 left-8 sm:left-12">
            <motion.span
              initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="inline-flex items-center gap-2 font-heading uppercase tracking-[0.45em] text-[0.6rem] text-ivory/80 bg-bordeaux/70 backdrop-blur-sm px-4 py-2"
            >
              <span className="text-champagne">◆</span>
              {t({ fr: 'Palais des Congrès', en: 'Convention Center' })}
            </motion.span>
          </div>

          {/* Bottom content */}
          <div className="relative z-10 w-full px-8 sm:px-12 lg:px-20 pb-14 lg:pb-20 grid lg:grid-cols-2 gap-10 items-end">
            <div>
              <motion.span
                initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="font-heading uppercase tracking-[0.5em] text-[0.62rem] text-champagne/80"
              >
                Waves Aqua Resort · {t({ fr: 'Événements & Affaires', en: 'Events & Business' })}
              </motion.span>
              <motion.h2
                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                transition={{ duration: 1.1, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="mt-4 font-heading uppercase text-ivory text-[clamp(2rem,4.2vw,3.8rem)] leading-[1.04]"
              >
                {t(AQUA_CONVENTION.title)}
              </motion.h2>
              <span className="block mt-6 h-px w-16 bg-gradient-to-r from-champagne/70 to-transparent" />
            </div>
            <div className="lg:pb-1">
              <motion.p
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                transition={{ duration: 0.9, delay: 0.2 }}
                className="font-display text-ivory/75 leading-[1.9] text-[0.97rem] max-w-lg"
              >
                {t(AQUA_CONVENTION.sub)}
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                transition={{ duration: 0.9, delay: 0.4 }}
                className="mt-8"
              >
                <Link
                  to="/contact"
                  className="btn-royal"
                >
                  {t({ fr: 'Demander un devis', en: 'Request a quote' })} <span aria-hidden>→</span>
                </Link>
              </motion.div>
            </div>
          </div>
        </div>

        {/* ── Specs strip ── */}
        <div className="bg-bordeaux py-5 overflow-hidden">
          <div className="max-w-[1500px] mx-auto px-6 lg:px-12 grid grid-cols-2 sm:grid-cols-4 gap-px bg-bordeaux/20">
            {AQUA_CONVENTION.specs.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.06 * i }}
                className="bg-bordeaux px-6 py-5 text-center"
              >
                <p className="font-heading text-champagne text-3xl leading-none">{s.value}</p>
                <p className="mt-2 font-heading uppercase tracking-[0.35em] text-[0.58rem] text-ivory/65">{t(s.label)}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ── Meeting Room Cards ── */}
        <div className="relative bg-ivory-50 section-pad overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_rgba(201,167,102,0.12),_transparent_60%)] pointer-events-none" />
          <div className="relative max-w-[1500px] mx-auto px-6 lg:px-12">

            <div className="text-center max-w-2xl mx-auto mb-14">
              <motion.span
                initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="ornament eyebrow"
              >
                {t({ fr: 'Nos Salles', en: 'Our Rooms' })}
              </motion.span>
              <motion.h3
                initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="mt-5 font-heading uppercase text-bordeaux text-[clamp(1.7rem,3vw,2.8rem)] leading-[1.06]"
              >
                {t({ fr: 'Trois espaces, un seul standard : l\'excellence.', en: 'Three spaces, one standard: excellence.' })}
              </motion.h3>
            </div>

            {/* 3-col grid → 1-col on mobile */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
              {AQUA_CONVENTION.rooms.map((room, i) => (
                <CongrèsRoomCard key={room.name} room={room} delay={0.1 * i} />
              ))}
            </div>

            {/* CTA bar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ duration: 0.9, delay: 0.3 }}
              className="mt-10 flex flex-wrap items-center justify-between gap-5 p-7 lg:p-8 bg-bordeaux"
            >
              <div>
                <p className="font-heading uppercase tracking-[0.45em] text-[0.58rem] text-champagne/70">
                  {t({ fr: 'Sur devis · Disponibilité en temps réel', en: 'On quote · Real-time availability' })}
                </p>
                <p className="mt-1.5 font-heading uppercase text-ivory text-[1.05rem] leading-tight">
                  {t({ fr: 'Organisez votre événement avec nos équipes.', en: 'Plan your event with our team.' })}
                </p>
              </div>
              <a
                href={AQUA_INFO.bookingUrl}
                target="_blank" rel="noreferrer"
                className="btn-ghost !border-champagne/60 !text-ivory hover:!bg-ivory hover:!text-bordeaux shrink-0"
              >
                {t({ fr: 'Nous contacter', en: 'Contact us' })} <span aria-hidden>→</span>
              </a>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          FEATURES (4 cards)
      ══════════════════════════════════════════ */}
      <section className="relative section-pad bg-ivory-50 overflow-hidden">
        <div className="absolute -top-32 right-0 w-[500px] h-[500px] bg-champagne/10 blur-3xl pointer-events-none" />
        <div className="relative max-w-[1500px] mx-auto px-6 lg:px-12">
          <div className="text-center max-w-2xl mx-auto">
            <span className="ornament eyebrow">{t({ fr: 'Expériences', en: 'Experiences' })}</span>
            <motion.h2
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
              className="mt-6 font-heading uppercase text-bordeaux text-[clamp(2rem,4vw,3.6rem)] leading-[1.05]"
            >
              {t({ fr: 'Pensé pour le bien-être.', en: 'Built for wellbeing.' })}
            </motion.h2>
          </div>
          <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {AQUA_FEATURES.map((f, i) => (
              <FeatureCard key={i} {...f} delay={0.08 * i} />
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          STATS
      ══════════════════════════════════════════ */}
      <section ref={statsRef} className="relative bg-ivory-50 py-14 sm:py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(184,140,58,0.18),_transparent_68%)]" />
        <motion.span
          initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }}
          transition={{ duration: 1.6 }}
          className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-bordeaux/50 to-transparent origin-center"
        />
        <motion.span
          initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }}
          transition={{ duration: 1.6, delay: 0.1 }}
          className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-bordeaux/50 to-transparent origin-center"
        />

        <motion.p
          initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="text-center font-heading uppercase tracking-[0.52em] text-bordeaux text-[0.6rem] mb-14 px-4"
        >
          Waves Aqua Resort · Kénitra
        </motion.p>

        <div className="max-w-[1200px] mx-auto px-6 lg:px-12 grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {AQUA_STATS.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 1, delay: 0.12 * i, ease: [0.22, 1, 0.36, 1] }}
              className="group relative border border-champagne/50 hover:border-bordeaux p-8 md:p-10 text-center overflow-hidden transition-colors duration-700 bg-ivory/70"
            >
              <span className="absolute top-2.5 left-2.5 w-4 h-4 border-t border-l border-bordeaux/40 group-hover:border-bordeaux transition-colors duration-500 pointer-events-none" />
              <span className="absolute top-2.5 right-2.5 w-4 h-4 border-t border-r border-bordeaux/40 group-hover:border-bordeaux transition-colors duration-500 pointer-events-none" />
              <span className="absolute bottom-2.5 left-2.5 w-4 h-4 border-b border-l border-bordeaux/40 group-hover:border-bordeaux transition-colors duration-500 pointer-events-none" />
              <span className="absolute bottom-2.5 right-2.5 w-4 h-4 border-b border-r border-bordeaux/40 group-hover:border-bordeaux transition-colors duration-500 pointer-events-none" />

              <p className="font-heading text-bordeaux/60 text-xl tracking-widest mb-5 group-hover:text-bordeaux transition-colors duration-500">{s.symbol}</p>
              <p className="font-heading leading-none text-bordeaux" style={{ fontSize: 'clamp(3rem,5.5vw,5rem)', textShadow: '0 1px 14px rgba(184,140,58,0.18)' }}>
                <CountUp target={s.value} inView={statsInView} />
              </p>
              <span className="block mx-auto mt-5 mb-5 h-px w-8 bg-bordeaux/40 group-hover:w-16 transition-all duration-700" />
              <p className="font-heading uppercase tracking-[0.32em] text-[0.6rem] text-ink-soft group-hover:text-bordeaux transition-colors duration-500 leading-relaxed">{t(s.label)}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════════════
          CTA
      ══════════════════════════════════════════ */}
      <section className="relative py-28 bg-ivory overflow-hidden">
        <div className="absolute inset-0 bg-champagne-radial pointer-events-none" />
        <motion.div
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="relative max-w-3xl mx-auto px-6 text-center"
        >
          <p className="font-heading uppercase tracking-[0.5em] text-[0.7rem] text-shimmer">Waves Aqua Resort</p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            transition={{ duration: 1.1, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 font-heading uppercase text-bordeaux text-[clamp(2rem,4vw,3.4rem)] leading-[1.05]"
          >
            {t({ fr: 'Votre escapade à Kénitra.', en: 'Your escape in Kénitra.' })}
          </motion.h2>
          <p className="mt-6 font-display text-ink-soft text-[1rem] leading-[1.85]">
            {t({ fr: 'Piscine, détente, gastronomie et service 5 étoiles — le Waves Aqua Resort est votre refuge tropical au cœur du Maroc.', en: 'Pool, relaxation, gastronomy and 5-star service — Waves Aqua Resort is your tropical refuge in the heart of Morocco.' })}
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a href={AQUA_INFO.bookingUrl} target="_blank" rel="noreferrer" className="btn-royal">
              {t(UI.bookNow)} <span aria-hidden>→</span>
            </a>
            <Link to="/contact" className="btn-ghost">{t(UI.contactUs)}</Link>
          </div>
        </motion.div>
      </section>

      {/* ══════════════════════════════════════════
          OTHER HOTELS
      ══════════════════════════════════════════ */}
      <section className="relative section-pad bg-mist overflow-hidden">
        <div className="max-w-[1500px] mx-auto px-6 lg:px-12">
          <div className="text-center max-w-2xl mx-auto">
            <span className="ornament eyebrow">{t({ fr: 'Continuez l\'exploration', en: 'Continue exploring' })}</span>
            <h2 className="mt-6 font-heading uppercase text-bordeaux text-[clamp(1.8rem,3.5vw,3rem)] leading-[1.05]">
              {t({ fr: 'Les autres signatures AHR.', en: 'Other AHR signatures.' })}
            </h2>
          </div>
          <div className="mt-16 grid md:grid-cols-3 gap-5">
            {others.map((h, i) => (
              <motion.div key={h.id}
                initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.9, delay: 0.08 * i }}
              >
                <Link to={h.to} className="group block cinema relative overflow-hidden shadow-soft h-72">
                  <img src={h.image} alt={h.name} className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-bordeaux-deep/85 via-bordeaux-deep/30 to-transparent" />
                  <div className="pointer-events-none absolute inset-3 border border-champagne/30 group-hover:border-champagne/70 transition-colors duration-700" />
                  <div className="absolute bottom-0 inset-x-0 p-6 text-ivory">
                    <p className="font-heading uppercase tracking-[0.35em] text-[0.6rem] text-shimmer">{t(h.eyebrow)}</p>
                    <h4 className="mt-2 font-heading uppercase text-[1.4rem] leading-tight">{h.name}</h4>
                    <span className="mt-3 inline-flex items-center gap-2 font-heading uppercase tracking-[0.3em] text-[0.6rem]">
                      {t(UI.view)} <span className="transition-transform duration-500 group-hover:translate-x-1.5">→</span>
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
