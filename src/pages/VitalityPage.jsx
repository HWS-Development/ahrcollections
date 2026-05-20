import { useRef, useState } from 'react';
import { motion, useInView, useMotionValue, useTransform, animate, AnimatePresence } from 'framer-motion';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

import PageHero            from '../components/PageHero.jsx';
import HotelRoomsSection   from '../components/HotelRoomsSection.jsx';
import { useT }            from '../contexts/LanguageContext.jsx';
import { VITALITY, HOTELS } from '../data/site.js';
import {
  VITALITY_ROOMS, VITALITY_STATS, VITALITY_FEATURES, VITALITY_INFO,
  VITALITY_RESTAURANT, VITALITY_FITNESS, VITALITY_MEETINGS,
} from '../data/hotels.js';
import { UI } from '../data/site.js';

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

export default function VitalityPage() {
  const t = useT();
  const others = HOTELS.filter(h => h.id !== 'vitality');
  const statsRef = useRef(null);
  const statsInView = useInView(statsRef, { once: true, amount: 0.3 });

  // Conference gallery state + parallax
  const [confRoom, setConfRoom] = useState(0);
  const confMouseX = useMotionValue(0);
  const confMouseY = useMotionValue(0);
  const confImgX   = useTransform(confMouseX, [-1, 1], [-9, 9]);
  const confImgY   = useTransform(confMouseY, [-1, 1], [-6, 6]);

  const introImg = `/img/vitality/reception/photos__2131.webp`;

  return (
    <>
      {/* ══════════════════════════════════════════
          HERO
      ══════════════════════════════════════════ */}
      <PageHero
        eyebrow={VITALITY.hero.eyebrow}
        title={VITALITY.hero.title}
        sub={VITALITY.hero.sub}
          videoPoster={VITALITY.hero.videoPoster}
          logo="/logos/vitality-terminus-logo.svg"
          secondaryHref="#intro"
        />

      {/* ══════════════════════════════════════════
          INTRO / SIGNATURE
      ══════════════════════════════════════════ */}
      <section id="intro" className="relative section-pad bg-ivory overflow-hidden">
        <div className="absolute inset-0 bg-champagne-radial pointer-events-none" />
        <div className="absolute -top-32 left-0 w-[480px] h-[480px] bg-bordeaux/5 blur-3xl -translate-x-1/3" />

        <div className="relative max-w-[1400px] mx-auto px-6 lg:px-12 grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          <div className="lg:col-span-5 flex flex-col">
            <motion.span
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="ornament eyebrow"
            >
              {t(VITALITY.intro.eyebrow)}
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ duration: 1.1, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="mt-6 font-heading uppercase text-bordeaux text-[clamp(2rem,4vw,3.6rem)] leading-[1.05]"
            >
              {t(VITALITY.intro.title)}
            </motion.h2>
            <span className="hairline mt-8" />
            <div className="mt-8 space-y-1.5 font-display text-ink-soft leading-[1.95] text-[0.98rem] max-w-lg">
              {t(VITALITY.intro.body).map((line, i) => (
                <motion.p key={i}
                  initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.7, delay: 0.05 * i }}
                >{line}</motion.p>
              ))}
            </div>
            <motion.div
              initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ duration: 0.9, delay: 0.5 }}
              className="mt-10 flex flex-wrap gap-3"
            >
              {[
                { icon: '📍', text: t(VITALITY_INFO.address) },
                { icon: '✆',  text: VITALITY_INFO.phone },
                { icon: '★',  text: t({ fr: '4 Étoiles', en: '4 Stars' }) },
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
              <a href={VITALITY_INFO.bookingUrl} target="_blank" rel="noreferrer" className="btn-royal">
                {t(UI.bookNow)} <span aria-hidden>→</span>
              </a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 60, scale: 1.04 }} whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7 relative"
          >
            <div className="cinema relative overflow-hidden shadow-deep">
              <img src={introImg} alt="Vitality Terminus" className="w-full h-[340px] sm:h-[460px] lg:h-[580px] object-cover" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-tr from-[rgba(163,165,114,0.15)] to-transparent mix-blend-multiply" />
              <div className="pointer-events-none absolute inset-4 border border-champagne/40" />
            </div>
            <motion.div
              initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.5 }}
              className="hidden md:block absolute -bottom-8 -left-8 glass-panel px-7 py-5 shadow-soft"
            >
              <p className="font-heading uppercase tracking-[0.4em] text-[0.6rem] text-champagne mb-1">Vitality Terminus</p>
              <p className="serif-flourish text-bordeaux text-xl leading-snug">
                {t({ fr: '1 min à pied de la gare LGV', en: '1 min walk from the LGV station' })}
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
              { fr: 'Room Service',           en: 'Room Service' },
              { fr: 'Voiturier',              en: 'Valet Parking' },
              { fr: 'Conciergerie',           en: 'Concierge' },
              { fr: '24h/24',                 en: '24/7' },
              { fr: '3 Salles de Réunions',   en: '3 Meeting Rooms' },
              { fr: 'Bagagerie',              en: 'Baggage Storage' },
              { fr: 'Wi-Fi Gratuit',          en: 'Free Wi-Fi' },
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
          ROOMS
      ══════════════════════════════════════════ */}
      <HotelRoomsSection
        rooms={VITALITY_ROOMS}
        eyebrow={{ fr: 'Nos Chambres & Suites', en: 'Rooms & Suites' }}
        title={{ fr: 'Cinq univers, une même excellence.', en: 'Five universes, one excellence.' }}
        sub={{ fr: 'Du confort Business à la Suite Présidentielle — chaque espace Vitality incarne l\'hospitalité 4 étoiles.', en: 'From Business Comfort to the Presidential Suite — every Vitality space embodies 4-star hospitality.' }}
        bg="bg-mist"
        bookingUrl={VITALITY_INFO.bookingUrl}
      />

      {/* ══════════════════════════════════════════
          RESTAURANT INTERNATIONAL
      ══════════════════════════════════════════ */}
      <section className="relative bg-ivory overflow-hidden">
        <div className="absolute inset-0 bg-noise opacity-[0.03] pointer-events-none" />
        <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-champagne/12 blur-3xl pointer-events-none" />

        {/* Animated top hairline */}
        <motion.span
          initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }}
          transition={{ duration: 1.6 }}
          className="block h-px bg-gradient-to-r from-transparent via-bordeaux/40 to-transparent origin-center"
        />

        <div className="relative max-w-[1500px] mx-auto px-6 lg:px-12 py-20 lg:py-28">
          <div className="grid lg:grid-cols-2 gap-0 items-stretch overflow-hidden shadow-[0_30px_80px_-20px_rgba(94,26,36,0.18)]">

            {/* Image column */}
            <motion.div
              initial={{ opacity: 0, x: -60 }} whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 1.3, ease: [0.22, 1, 0.36, 1] }}
              className="relative min-h-[320px] lg:min-h-[520px] cinema overflow-hidden"
            >
              <img
                src={VITALITY_RESTAURANT.heroImage}
                alt="Restaurant Vitality"
                className="absolute inset-0 w-full h-full object-cover"
                loading="lazy"
              />
              <div className="pointer-events-none absolute inset-4 border border-champagne/40" />
              {/* Floating label */}
              <div className="absolute top-8 left-8">
                <span className="inline-block font-heading uppercase tracking-[0.5em] text-[0.6rem] text-ivory bg-bordeaux px-4 py-2">
                  {t({ fr: 'Restaurant International', en: 'International Restaurant' })}
                </span>
              </div>
            </motion.div>

            {/* Text column */}
            <motion.div
              initial={{ opacity: 0, x: 60 }} whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 1.3, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="bg-ivory-50 flex flex-col justify-center px-6 sm:px-10 lg:px-16 py-12 lg:py-16 border border-l-0 border-champagne/40"
            >
              <span className="font-heading uppercase tracking-[0.5em] text-[0.62rem] text-bordeaux">
                {t(VITALITY_RESTAURANT.eyebrow)}
              </span>
              <h2 className="mt-5 font-heading uppercase text-bordeaux text-[clamp(1.9rem,3.5vw,3rem)] leading-[1.05]">
                {t(VITALITY_RESTAURANT.title)}
              </h2>
              <p className="mt-3 font-display text-ink-soft text-[0.88rem] italic leading-relaxed">
                {t(VITALITY_RESTAURANT.sub)}
              </p>
              <span className="mt-7 block h-px w-14 bg-gradient-to-r from-bordeaux/60 to-transparent" />

              <div className="mt-7 space-y-4">
                {t(VITALITY_RESTAURANT.body).map((line, i) => (
                  <motion.p key={i}
                    initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.7, delay: 0.1 * i }}
                    className="flex items-start gap-3 font-display text-ink text-[0.95rem] leading-[1.85]"
                  >
                    <span className="text-bordeaux mt-2 text-[0.5rem] flex-shrink-0">◆</span>
                    {line}
                  </motion.p>
                ))}
              </div>

              <div className="mt-9 flex flex-wrap gap-2">
                {t(VITALITY_RESTAURANT.amenities).map((a) => (
                  <span key={a} className="px-3 py-1.5 border border-champagne/60 text-ink-soft font-heading text-[0.62rem] uppercase tracking-[0.3em] hover:border-bordeaux hover:text-bordeaux transition-colors duration-400 cursor-default">
                    {a}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom hairline */}
        <motion.span
          initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }}
          transition={{ duration: 1.6 }}
          className="block h-px bg-gradient-to-r from-transparent via-bordeaux/30 to-transparent origin-center"
        />
      </section>

      {/* ══════════════════════════════════════════
          ESPACE FITNESS — hidden until hotel provides dedicated photos
      ══════════════════════════════════════════ */}
      {false && (
      <section className="relative overflow-hidden">
        <div
          className="relative min-h-[480px] flex items-center"
          style={{ background: 'linear-gradient(135deg, #F8F3E8 0%, #F1E6CE 50%, #F8F3E8 100%)' }}
        >
          {/* BG image with soft ivory wash */}
          <div className="absolute inset-0 cinema">
            <img
              src={VITALITY_FITNESS.image}
              alt="Fitness Center"
              className="w-full h-full object-cover opacity-35"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-ivory via-ivory/85 to-ivory/45" />
          </div>
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_right,rgba(184,140,58,0.18),transparent_60%)]" />

          <div className="relative max-w-[1500px] mx-auto px-6 lg:px-12 w-full py-20">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              {/* Text */}
              <motion.div
                initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
              >
                <span className="font-heading uppercase tracking-[0.5em] text-[0.62rem] text-bordeaux">
                  {t(VITALITY_FITNESS.eyebrow)}
                </span>
                <h2 className="mt-5 font-heading uppercase text-bordeaux text-[clamp(2rem,4vw,3.4rem)] leading-[1.05]">
                  {t(VITALITY_FITNESS.title)}
                </h2>
                <p className="mt-3 font-display text-ink-soft text-[0.9rem] italic">
                  {t(VITALITY_FITNESS.sub)}
                </p>
                <span className="mt-7 block h-px w-14 bg-bordeaux/50" />
                <p className="mt-7 font-display text-ink leading-[1.9] text-[0.97rem]">
                  {t(VITALITY_FITNESS.body)}
                </p>
              </motion.div>

              {/* Amenity pills grid */}
              <motion.div
                initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 1.1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                className="grid grid-cols-2 gap-3"
              >
                {t(VITALITY_FITNESS.amenities).map((a, i) => (
                  <motion.div
                    key={a}
                    initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.06 * i }}
                    className="group border border-champagne/50 hover:border-bordeaux px-5 py-4 flex items-center gap-3 transition-colors duration-500 bg-ivory/70"
                  >
                    <span className="w-5 h-5 flex-shrink-0 border border-bordeaux/40 group-hover:border-bordeaux flex items-center justify-center transition-colors duration-400">
                      <span className="w-1.5 h-1.5 bg-bordeaux/60 group-hover:bg-bordeaux transition-colors duration-400" />
                    </span>
                    <span className="font-heading uppercase tracking-[0.3em] text-[0.65rem] text-ink-soft group-hover:text-bordeaux transition-colors duration-400">{a}</span>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </section>
      )}

      {/* ══════════════════════════════════════════
          BUSINESS CENTER & SALLES DE SÉMINAIRE
      ══════════════════════════════════════════ */}
      <section className="relative pt-20 lg:pt-28 pb-0 bg-ivory overflow-hidden">
        <div className="absolute -top-32 left-0 w-[500px] h-[500px] bg-champagne/8 blur-3xl pointer-events-none" />
        <div className="absolute top-40 right-0 w-[400px] h-[400px] bg-bordeaux/3 blur-3xl pointer-events-none" />

        {/* ── Section header ── */}
        <div className="relative max-w-[1500px] mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-12 gap-12 items-end">
            <div className="lg:col-span-5">
              <span className="ornament eyebrow">{t({ fr: 'Réunions & Séminaires', en: 'Meetings & Seminars' })}</span>
              <motion.h2
                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
                className="mt-6 font-heading uppercase text-bordeaux text-[clamp(2rem,4vw,3.4rem)] leading-[1.05]"
              >
                {t({ fr: 'Un palais des congrès.', en: 'A congress palace.' })}
              </motion.h2>
              <span className="hairline mt-8" />
            </div>
            <div className="lg:col-span-7">
              <motion.p
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                transition={{ duration: 0.9, delay: 0.15 }}
                className="font-display text-ink-soft leading-[1.95] text-[0.98rem]"
              >
                {t({
                  fr: 'Le Vitality Terminus propose des infrastructures adaptées aux séjours d\'affaires : Business Center équipé pour le travail et les visioconférences, salles de réunion dotées d\'équipements audiovisuels modernes — pour vos rencontres les plus exigeantes.',
                  en: 'Vitality Terminus provides business-ready infrastructure: an equipped Business Center for work and video conferencing, and meeting rooms with modern A/V systems — for your most demanding engagements.',
                })}
              </motion.p>
            </div>
          </div>

          {/* Business Center strip */}
          <motion.div
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="mt-12 border border-champagne/40 hover:border-bordeaux/50 transition-colors duration-700 p-7 flex flex-col sm:flex-row items-start sm:items-center gap-6 bg-ivory"
          >
            <span className="font-heading text-bordeaux/40 text-4xl leading-none flex-shrink-0">◈</span>
            <div>
              <p className="font-heading uppercase tracking-wider text-bordeaux text-[0.9rem]">{t({ fr: 'Business Center', en: 'Business Center' })}</p>
              <p className="mt-1.5 font-display text-ink-soft text-[0.9rem] leading-[1.75]">
                {t({ fr: 'Espace de travail dédié, équipé pour les visioconférences, disponible pour tous les clients de l\'hôtel. Wi-Fi ultra-rapide, imprimante, scanner — tout pour travailler efficacement.', en: 'Dedicated workspace, equipped for video conferencing, available to all hotel guests. Ultra-fast Wi-Fi, printer, scanner — everything to work at full efficiency.' })}
              </p>
            </div>
          </motion.div>
        </div>

        {/* ═══════════════════════════════════
            CINEMATIC CONFERENCE GALLERY
        ═══════════════════════════════════ */}
        <div className="relative mt-14 overflow-hidden" style={{ background: '#FEFCF7' }}>
          {/* Ambient glow */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(201,167,102,0.10),transparent_58%)] pointer-events-none" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(94,26,36,0.05),transparent_55%)] pointer-events-none" />

          {/* Top hairline */}
          <motion.span
            initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }}
            transition={{ duration: 1.8 }}
            className="block h-px bg-gradient-to-r from-transparent via-bordeaux/25 to-transparent origin-center"
          />

          <div className="max-w-[1500px] mx-auto px-6 lg:px-12 pt-12">

            {/* ── Tab selector ── */}
            <motion.div
              initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="flex border-b border-bordeaux/15 overflow-x-auto"
            >
              {VITALITY_MEETINGS.map((room, i) => (
                <button
                  key={room.name}
                  onClick={() => setConfRoom(i)}
                  className={`relative flex-shrink-0 px-7 py-4 font-heading uppercase tracking-[0.32em] text-[0.67rem] select-none transition-colors duration-400 ${confRoom === i ? 'text-bordeaux' : 'text-ink/35 hover:text-ink/65'}`}
                >
                  {room.name}
                  <span className={`ml-2.5 text-[0.55rem] tracking-[0.18em] transition-colors duration-400 ${confRoom === i ? 'text-champagne' : 'text-ink/22'}`}>
                    · {room.capacity}{t({ fr: 'p', en: 'px' })}
                  </span>
                  {confRoom === i && (
                    <motion.span
                      layoutId="conf-tab-line"
                      className="absolute bottom-[-1px] left-0 right-0 h-0.5 bg-bordeaux"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </button>
              ))}
            </motion.div>

            {/* ── Animated room content ── */}
            <AnimatePresence mode="wait">
              <motion.div
                key={confRoom}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.38, ease: 'easeInOut' }}
              >
                {/* Hero split: image (3/5) + info (2/5) */}
                <div className="grid lg:grid-cols-5 items-stretch overflow-hidden shadow-[0_20px_60px_-10px_rgba(94,26,36,0.12)]">

                  {/* ── Left: hero image ── */}
                  <div
                          className="lg:col-span-3 relative min-h-[320px] lg:min-h-[460px] overflow-hidden"
                    onMouseMove={e => {
                      const r = e.currentTarget.getBoundingClientRect();
                      confMouseX.set((e.clientX - r.left) / r.width * 2 - 1);
                      confMouseY.set((e.clientY - r.top) / r.height * 2 - 1);
                    }}
                    onMouseLeave={() => { confMouseX.set(0); confMouseY.set(0); }}
                  >
                    {/* Parallax image wrapper */}
                    <motion.div
                      className="absolute"
                      style={{ top: '-6%', left: '-6%', width: '112%', height: '112%', x: confImgX, y: confImgY }}
                    >
                      <motion.img
                        key={`hero-${confRoom}`}
                        src={VITALITY_MEETINGS[confRoom].photos[0]}
                        alt={VITALITY_MEETINGS[confRoom].name}
                        className="w-full h-full object-cover"
                        loading="eager"
                        initial={{ clipPath: 'inset(0 100% 0 0)' }}
                        animate={{ clipPath: 'inset(0 0% 0 0)' }}
                        transition={{ duration: 1.0, ease: [0.22, 1, 0.36, 1] }}
                      />
                    </motion.div>

                    {/* Overlays for text legibility */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-black/30 pointer-events-none" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent pointer-events-none" />
                    <div className="pointer-events-none absolute inset-5 border border-white/20" />

                    {/* Corner accents */}
                    <span className="absolute top-5 left-5 w-6 h-6 border-t-2 border-l-2 border-champagne/60 pointer-events-none" />
                    <span className="absolute top-5 right-5 w-6 h-6 border-t-2 border-r-2 border-champagne/60 pointer-events-none" />
                    <span className="absolute bottom-5 left-5 w-6 h-6 border-b-2 border-l-2 border-champagne/60 pointer-events-none" />
                    <span className="absolute bottom-5 right-5 w-6 h-6 border-b-2 border-r-2 border-champagne/60 pointer-events-none" />

                    {/* Capacity badge — spring pop */}
                    <motion.div
                      key={`badge-${confRoom}`}
                      initial={{ opacity: 0, scale: 0.4, rotate: -8 }}
                      animate={{ opacity: 1, scale: 1, rotate: 0 }}
                      transition={{ type: 'spring', stiffness: 260, damping: 18, delay: 0.65 }}
                      className="absolute top-4 right-4 sm:top-9 sm:right-9 bg-bordeaux px-4 py-3 sm:px-6 sm:py-5 text-center shadow-deep"
                    >
                      <p className="font-heading uppercase text-champagne/55 text-[0.46rem] tracking-[0.55em] mb-1">{t({ fr: 'Capacité', en: 'Capacity' })}</p>
                      <p className="font-heading text-champagne leading-none" style={{ fontSize: 'clamp(2.8rem,5vw,4rem)' }}>
                        {VITALITY_MEETINGS[confRoom].capacity}
                      </p>
                      <p className="font-heading uppercase text-ivory/50 text-[0.44rem] tracking-[0.4em] mt-1.5">{t({ fr: 'personnes', en: 'guests' })}</p>
                    </motion.div>

                    {/* Bottom tagline */}
                    <motion.div
                      key={`tagline-${confRoom}`}
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.5 }}
                      className="absolute bottom-9 left-9"
                    >
                      <p className="font-heading uppercase text-ivory/50 text-[0.54rem] tracking-[0.3em] sm:tracking-[0.65em]">
                        {t(VITALITY_MEETINGS[confRoom].tagline)}
                      </p>
                    </motion.div>
                  </div>

                  {/* ── Right: info panel (light) ── */}
                  <motion.div
                    key={`info-${confRoom}`}
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.72, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                    className="lg:col-span-2 flex flex-col justify-center px-10 lg:px-14 py-14 bg-ivory border border-l-0 border-champagne/40"
                  >
                    <span className="font-heading uppercase tracking-[0.55em] text-[0.57rem] text-champagne">
                      Vitality Terminus · Kénitra
                    </span>
                    <h3
                      className="mt-4 font-heading uppercase text-bordeaux leading-[1.0]"
                      style={{ fontSize: 'clamp(1.8rem,2.8vw,2.7rem)' }}
                    >
                      {VITALITY_MEETINGS[confRoom].name}
                    </h3>
                    <span className="mt-5 block h-px w-14 bg-gradient-to-r from-champagne to-transparent" />
                    <p className="mt-7 font-display text-ink-soft leading-[1.9] text-[0.93rem]">
                      {t(VITALITY_MEETINGS[confRoom].description)}
                    </p>

                    {/* Equipment list */}
                    <ul className="mt-7 space-y-3">
                      {t(VITALITY_MEETINGS[confRoom].equipment).map((eq, ei) => (
                        <motion.li
                          key={ei}
                          initial={{ opacity: 0, x: 18 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.44, delay: 0.33 + 0.07 * ei }}
                          className="flex items-center gap-3 font-display text-[0.88rem] text-ink-soft"
                        >
                          <span className="w-1.5 h-1.5 bg-champagne flex-shrink-0" />
                          {eq}
                        </motion.li>
                      ))}
                    </ul>

                    {/* Layouts */}
                    <div className="mt-8 pt-5 border-t border-champagne/35">
                      <p className="font-heading uppercase text-[0.52rem] tracking-[0.5em] text-champagne mb-2">
                        {t({ fr: 'Dispositions', en: 'Layouts' })}
                      </p>
                      <p className="font-display text-[0.84rem] text-ink-soft italic leading-relaxed">
                        {t(VITALITY_MEETINGS[confRoom].layouts)}
                      </p>
                    </div>

                    {/* CTA link */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.78 }}
                      className="mt-9"
                    >
                      <Link
                        to="/contact"
                        className="group inline-flex items-center gap-3 font-heading uppercase tracking-[0.42em] text-[0.63rem] text-bordeaux/55 hover:text-bordeaux transition-colors duration-400"
                      >
                        {t({ fr: 'Demander un devis', en: 'Request a quote' })}
                        <span className="transition-transform duration-400 group-hover:translate-x-1.5">→</span>
                      </Link>
                    </motion.div>
                  </motion.div>
                </div>

                {/* ── Photo thumbnail grid ── */}
                {VITALITY_MEETINGS[confRoom].photos.length > 1 && (
                  <div className="mt-2 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2">
                    {VITALITY_MEETINGS[confRoom].photos.slice(1).map((photo, pi) => (
                      <motion.div
                        key={`${confRoom}-p${pi}`}
                        className="group relative cinema overflow-hidden h-72 lg:h-96"
                        initial={{ opacity: 0, clipPath: 'inset(0 0 100% 0)' }}
                        animate={{ opacity: 1, clipPath: 'inset(0 0 0% 0)' }}
                        transition={{ duration: 0.65, delay: 0.08 + 0.055 * pi, ease: [0.22, 1, 0.36, 1] }}
                      >
                        <img
                          src={photo}
                          alt={`${VITALITY_MEETINGS[confRoom].name} — ${pi + 2}`}
                          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                          loading="lazy"
                        />
                        {/* Hover ivory wash */}
                        <div className="absolute inset-0 bg-gradient-to-t from-bordeaux/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        {/* Champagne border reveal */}
                        <div className="absolute inset-0 border border-transparent group-hover:border-champagne/60 transition-colors duration-500 pointer-events-none" />
                        {/* Scan-line shimmer */}
                        <div
                          className="absolute inset-x-0 top-1/2 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none"
                          style={{ background: 'linear-gradient(to right,transparent,rgba(201,167,102,0.6),transparent)' }}
                        />
                        {/* Photo number */}
                        <span className="absolute bottom-3 right-3 font-heading text-[0.5rem] tracking-[0.4em] text-champagne/0 group-hover:text-champagne/80 transition-colors duration-400">
                          {String(pi + 2).padStart(2, '0')}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                )}
              </motion.div>
            </AnimatePresence>

            {/* ── CTA strip ── */}
            <motion.div
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ duration: 0.9, delay: 0.3 }}
              className="mt-10 flex flex-wrap items-center justify-between gap-5 p-6 bg-bordeaux"
            >
              <div>
                <p className="font-heading uppercase tracking-[0.4em] text-[0.6rem] text-champagne/70">{t({ fr: 'Sur demande', en: 'On request' })}</p>
                <p className="mt-1 font-heading uppercase text-ivory text-[1.05rem]">{t({ fr: 'Demandez un devis pour vos événements.', en: 'Request a quote for your events.' })}</p>
              </div>
              <Link to="/contact" className="btn-ghost !border-champagne/60 !text-ivory hover:!bg-ivory hover:!text-bordeaux">
                {t({ fr: 'Nous contacter', en: 'Contact us' })} <span aria-hidden>→</span>
              </Link>
            </motion.div>

          </div>

          {/* Bottom hairline */}
          <motion.span
            initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }}
            transition={{ duration: 1.8, delay: 0.2 }}
            className="block h-px bg-gradient-to-r from-transparent via-bordeaux/20 to-transparent origin-center mt-0"
          />
        </div>

        {/* Spacer so next section doesn't fuse */}
        <div className="h-8 lg:h-28 bg-ivory" />
      </section>

      {/* ══════════════════════════════════════════
          FEATURES (4 cards)
      ══════════════════════════════════════════ */}
      <section className="relative section-pad bg-ivory overflow-hidden">
        <div className="absolute -top-32 right-0 w-[500px] h-[500px] bg-champagne/10 blur-3xl pointer-events-none" />
        <div className="relative max-w-[1500px] mx-auto px-6 lg:px-12">
          <div className="text-center max-w-2xl mx-auto">
            <span className="ornament eyebrow">{t({ fr: 'Expériences', en: 'Experiences' })}</span>
            <motion.h2
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
              className="mt-6 font-heading uppercase text-bordeaux text-[clamp(2rem,4vw,3.6rem)] leading-[1.05]"
            >
              {t({ fr: 'Pensé pour l\'efficacité.', en: 'Built for efficiency.' })}
            </motion.h2>
          </div>
          <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {VITALITY_FEATURES.map((f, i) => (
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
          Vitality Terminus · Kénitra
        </motion.p>
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12 grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {VITALITY_STATS.map((s, i) => (
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
          <p className="font-heading uppercase tracking-[0.5em] text-[0.7rem] text-shimmer">Vitality Terminus</p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            transition={{ duration: 1.1, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 font-heading uppercase text-bordeaux text-[clamp(2rem,4vw,3.4rem)] leading-[1.05]"
          >
            {t({ fr: 'Votre prochain séjour à Kénitra.', en: 'Your next stay in Kénitra.' })}
          </motion.h2>
          <p className="mt-6 font-display text-ink-soft text-[1rem] leading-[1.85]">
            {t({ fr: 'À une minute de la gare LGV, le Vitality Terminus est votre base idéale pour vos déplacements professionnels et vos escapades à Kénitra, Rabat et au-delà.', en: 'One minute from the LGV station, Vitality Terminus is your ideal base for business trips and escapes around Kénitra, Rabat and beyond.' })}
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a href={VITALITY_INFO.bookingUrl} target="_blank" rel="noreferrer" className="btn-royal">
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
