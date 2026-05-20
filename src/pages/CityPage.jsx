import { useRef } from 'react';
import { motion, useInView, useMotionValue, useTransform, animate } from 'framer-motion';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

import PageHero            from '../components/PageHero.jsx';
import HotelRoomsSection   from '../components/HotelRoomsSection.jsx';
import { useT }            from '../contexts/LanguageContext.jsx';
import { CITY, HOTELS }    from '../data/site.js';
import {
  CITY_ROOMS, CITY_STATS, CITY_FEATURES, CITY_INFO,
  CITY_RESTAURANT, CITY_MEETINGS,
  CITY_PRO_SERVICES, CITY_ROOM_AMENITIES, CITY_BUSINESS_PACK,
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

/* ─── Meeting room card ─── */
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
      <div className="relative h-80 md:h-96 lg:h-[440px] cinema overflow-hidden">
        <img src={room.image} alt={room.name} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
        <div className="absolute bottom-0 inset-x-0 h-36 bg-gradient-to-t from-ink/85 to-transparent" />
        <div className="absolute top-0 inset-x-0 h-24 bg-gradient-to-b from-ink/45 to-transparent" />
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
        <div className="absolute bottom-4 left-5">
          <p className="font-heading uppercase text-ivory/50 text-[0.58rem] tracking-[0.4em]">{t(room.tagline)}</p>
        </div>
      </div>
      <div className="p-7">
        <h3 className="font-heading uppercase text-bordeaux tracking-wider text-[1.1rem] leading-tight">{room.name}</h3>
        <span className="block mt-3 h-px w-10 bg-champagne group-hover:w-20 transition-all duration-500" />
        <p className="mt-4 font-display text-ink-soft text-[0.9rem] leading-[1.75]">{t(room.description)}</p>
        <ul className="mt-5 space-y-2">
          {t(room.equipment).map((eq, i) => (
            <li key={i} className="flex items-center gap-2.5 font-display text-[0.83rem] text-ink-soft">
              <span className="w-1.5 h-1.5 bg-champagne flex-shrink-0" />
              {eq}
            </li>
          ))}
        </ul>
        <div className="mt-5 pt-4 border-t border-champagne/30">
          <p className="font-heading uppercase text-[0.55rem] tracking-[0.4em] text-champagne mb-1.5">{t({ fr: 'Dispositions disponibles', en: 'Available layouts' })}</p>
          <p className="font-display text-[0.82rem] text-ink-soft italic">{t(room.layouts)}</p>
        </div>
      </div>
    </motion.div>
  );
}

export default function CityPage() {
  const t = useT();
  const others = HOTELS.filter(h => h.id !== 'city');
  const statsRef = useRef(null);
  const statsInView = useInView(statsRef, { once: true, amount: 0.3 });

  const introImg = `/img/city/lobby/DSC08685.webp`;

  return (
    <>
      {/* ══════════════════════════════════════════
          HERO
      ══════════════════════════════════════════ */}
      <PageHero
        eyebrow={CITY.hero.eyebrow}
        title={CITY.hero.title}
        sub={CITY.hero.sub}
          videoPoster={CITY.hero.videoPoster}
          logo="/logos/waves-city-hotel-logo.svg"
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
              {t(CITY.intro.eyebrow)}
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ duration: 1.1, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="mt-6 font-heading uppercase text-bordeaux text-[clamp(2rem,4vw,3.6rem)] leading-[1.05]"
            >
              {t(CITY.intro.title)}
            </motion.h2>
            <span className="hairline mt-8" />
            <div className="mt-8 space-y-1.5 font-display text-ink-soft leading-[1.95] text-[0.98rem] max-w-lg">
              {t(CITY.intro.body).map((line, i) => (
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
                { icon: '📍', text: t(CITY_INFO.address) },
                { icon: '✆',  text: CITY_INFO.phone },
                { icon: '★',  text: t({ fr: '3 Étoiles', en: '3 Stars' }) },
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
              <a href={CITY_INFO.bookingUrl} target="_blank" rel="noreferrer" className="btn-royal">
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
              <img src={introImg} alt="City Hôtel by Waves" className="w-full h-[340px] sm:h-[460px] lg:h-[580px] object-cover" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-tr from-[rgba(163,165,114,0.12)] to-transparent mix-blend-multiply" />
              <div className="pointer-events-none absolute inset-4 border border-champagne/40" />
            </div>
            <motion.div
              initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.5 }}
              className="hidden md:block absolute -bottom-8 -left-8 glass-panel px-7 py-5 shadow-soft"
            >
              <p className="font-heading uppercase tracking-[0.4em] text-[0.6rem] text-champagne mb-1">City Hôtel by Waves</p>
              <p className="serif-flourish text-bordeaux text-xl leading-snug">
                {t({ fr: 'Au cœur de Kénitra', en: 'In the heart of Kénitra' })}
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
              { fr: 'Café-Restaurant',    en: 'Café-Restaurant' },
              { fr: 'Bar Lounge',         en: 'Lounge Bar' },
              { fr: 'Room Service',       en: 'Room Service' },
              { fr: 'Wi-Fi Gratuit',      en: 'Free Wi-Fi' },
              { fr: 'Conciergerie Locale',en: 'Local Concierge' },
              { fr: 'Parking',            en: 'Parking' },
              { fr: 'Terrasse',           en: 'Terrace' },
              { fr: 'TV Satellite',       en: 'Satellite TV' },
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
        rooms={CITY_ROOMS}
        eyebrow={{ fr: 'Nos Chambres & Suites', en: 'Rooms & Suites' }}
        title={{ fr: 'Cinq univers, une ville à vivre.', en: 'Five universes, a city to live.' }}
        sub={{ fr: 'De la Cosy Grand Lit à la Suite City — chaque espace City Hôtel incarne l\'hospitalité urbaine 3 étoiles dans toute sa sincérité.', en: 'From the Cosy King to the City Suite — every City Hotel space embodies sincere 3-star urban hospitality.' }}
        bg="bg-mist"
        bookingUrl={CITY_INFO.bookingUrl}
      />

      {/* ══════════════════════════════════════════
          RESTAURANT & SOFT BAR
      ══════════════════════════════════════════ */}
      <section className="relative overflow-hidden">
        <motion.span
          initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }}
          transition={{ duration: 1.6 }}
          className="block h-px bg-gradient-to-r from-transparent via-champagne/40 to-transparent origin-center bg-ivory"
        />

        <div className="relative bg-ivory">
          <div className="absolute inset-0 bg-noise opacity-[0.03] pointer-events-none" />
          <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-champagne/10 blur-3xl pointer-events-none" />

          <div className="relative max-w-[1500px] mx-auto px-6 lg:px-12 py-20 lg:py-28">
            <div className="grid lg:grid-cols-2 gap-0 items-stretch overflow-hidden shadow-[0_30px_80px_-20px_rgba(94,26,36,0.18)]">

              {/* Text column — left on City (reversed from Vitality) */}
              <motion.div
                initial={{ opacity: 0, x: -60 }} whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 1.3, ease: [0.22, 1, 0.36, 1] }}
                className="bg-ivory-50 flex flex-col justify-center px-6 sm:px-10 lg:px-16 py-12 lg:py-16 border border-r-0 border-champagne/40 order-2 lg:order-1"
              >
                <span className="font-heading uppercase tracking-[0.5em] text-[0.62rem] text-bordeaux">
                  {t(CITY_RESTAURANT.eyebrow)}
                </span>
                <h2 className="mt-5 font-heading uppercase text-bordeaux text-[clamp(1.9rem,3.5vw,3rem)] leading-[1.05]">
                  {t(CITY_RESTAURANT.title)}
                </h2>
                <p className="mt-3 font-display text-ink-soft text-[0.88rem] italic leading-relaxed">
                  {t(CITY_RESTAURANT.sub)}
                </p>
                <span className="mt-7 block h-px w-14 bg-gradient-to-r from-bordeaux/60 to-transparent" />

                <div className="mt-7 space-y-4">
                  {t(CITY_RESTAURANT.body).map((line, i) => (
                    <motion.p key={i}
                      initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }}
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
                  {t(CITY_RESTAURANT.amenities).map((a) => (
                    <span key={a} className="px-3 py-1.5 border border-champagne/60 text-ink-soft font-heading text-[0.62rem] uppercase tracking-[0.3em] hover:border-bordeaux hover:text-bordeaux transition-colors duration-400 cursor-default">
                      {a}
                    </span>
                  ))}
                </div>
              </motion.div>

              {/* Image column — right */}
              <motion.div
                initial={{ opacity: 0, x: 60 }} whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 1.3, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
                className="relative min-h-[320px] lg:min-h-[520px] cinema overflow-hidden order-1 lg:order-2"
              >
                <img
                  src={CITY_RESTAURANT.heroImage}
                  alt="Restaurant City Hôtel"
                  className="absolute inset-0 w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="pointer-events-none absolute inset-4 border border-champagne/40" />
                <div className="absolute top-8 right-8">
                  <span className="inline-block font-heading uppercase tracking-[0.5em] text-[0.6rem] text-ivory bg-bordeaux px-4 py-2">
                    {t({ fr: 'Restaurant & Soft Bar', en: 'Restaurant & Soft Bar' })}
                  </span>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        <motion.span
          initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }}
          transition={{ duration: 1.6 }}
          className="block h-px bg-gradient-to-r from-transparent via-champagne/30 to-transparent origin-center bg-ivory"
        />
      </section>

      {/* ══════════════════════════════════════════
          SALLES DE CONFÉRENCE & RÉUNION
      ══════════════════════════════════════════ */}
      <section className="relative section-pad bg-ivory-50 overflow-hidden">
        <div className="absolute -top-32 right-0 w-[500px] h-[500px] bg-champagne/8 blur-3xl pointer-events-none" />
        <div className="relative max-w-[1500px] mx-auto px-6 lg:px-12">

          {/* Header */}
          <div className="grid lg:grid-cols-12 gap-12 items-end">
            <div className="lg:col-span-5">
              <span className="ornament eyebrow">{t({ fr: 'Réunions & Séminaires', en: 'Meetings & Seminars' })}</span>
              <motion.h2
                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
                className="mt-6 font-heading uppercase text-bordeaux text-[clamp(2rem,4vw,3.4rem)] leading-[1.05]"
              >
                {t({ fr: 'Salles de conférence.', en: 'Conference rooms.' })}
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
                  fr: 'Organisez vos événements professionnels dans nos salles de conférence et de réunion modernes et parfaitement équipées. Que ce soit pour un séminaire, une formation ou une conférence, nous vous proposons des solutions sur mesure.',
                  en: 'Organise your professional events in our modern, fully-equipped conference and meeting rooms. Whether for a seminar, training session or conference, we offer bespoke solutions.',
                })}
              </motion.p>
            </div>
          </div>

          {/* Meeting room cards — 2 columns */}
          <div className="mt-12 grid md:grid-cols-2 gap-6">
            {CITY_MEETINGS.map((room, i) => (
              <MeetingRoomCard key={room.name} room={room} delay={0.12 * i} />
            ))}
          </div>

          {/* CTA strip */}
          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.4 }}
            className="mt-10 flex flex-wrap items-center justify-between gap-5 p-6 bg-bordeaux"
          >
            <div>
              <p className="font-heading uppercase tracking-[0.4em] text-[0.6rem] text-champagne/70">{t({ fr: 'Sur demande', en: 'On request' })}</p>
              <p className="mt-1 font-heading uppercase text-ivory text-[1.05rem]">{t({ fr: 'Organisez votre événement au City Hôtel.', en: 'Organise your event at City Hôtel.' })}</p>
            </div>
            <Link to="/contact" className="btn-ghost !border-champagne/60 !text-ivory hover:!bg-ivory hover:!text-bordeaux">
              {t(UI.contactUs)} <span aria-hidden>→</span>
            </Link>
          </motion.div>
        </div>
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
              {t({ fr: 'Pensé pour la ville.', en: 'Built for the city.' })}
            </motion.h2>
          </div>
          <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {CITY_FEATURES.map((f, i) => (
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
          City Hôtel by Waves · Kénitra
        </motion.p>
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12 grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {CITY_STATS.map((s, i) => (
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
          <p className="font-heading uppercase tracking-[0.5em] text-[0.7rem] text-shimmer">City Hôtel by Waves</p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            transition={{ duration: 1.1, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 font-heading uppercase text-bordeaux text-[clamp(2rem,4vw,3.4rem)] leading-[1.05]"
          >
            {t({ fr: 'Kénitra, vécue de l\'intérieur.', en: 'Kénitra, lived from within.' })}
          </motion.h2>
          <p className="mt-6 font-display text-ink-soft text-[1rem] leading-[1.85]">
            {t({ fr: 'Au cœur de la ville, le City Hôtel by Waves vous offre un accès direct aux avenues, restaurants et lieux incontournables de Kénitra.', en: 'In the heart of the city, City Hôtel by Waves gives you direct access to Kénitra\'s avenues, restaurants and unmissable spots.' })}
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a href={CITY_INFO.bookingUrl} target="_blank" rel="noreferrer" className="btn-royal">
              {t(UI.bookNow)} <span aria-hidden>→</span>
            </a>
            <Link to="/contact" className="btn-ghost">{t(UI.contactUs)}</Link>
          </div>
        </motion.div>
      </section>

      {/* ══════════════════════════════════════════
          ROOM AMENITIES — Standard/Superior + Family
      ══════════════════════════════════════════ */}
      <section className="relative section-pad bg-ivory overflow-hidden">
        <div className="absolute inset-0 bg-champagne-radial pointer-events-none" />
        <div className="relative max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="text-center max-w-3xl mx-auto">
            <span className="ornament eyebrow">{t(CITY_ROOM_AMENITIES.eyebrow)}</span>
            <motion.h2
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
              className="mt-6 font-heading uppercase text-bordeaux text-[clamp(1.7rem,2.8vw,2.6rem)] leading-tight"
            >
              {t(CITY_ROOM_AMENITIES.title)}
            </motion.h2>
            <span className="block hairline mx-auto mt-6" />
          </div>
          <div className="mt-14 grid md:grid-cols-2 gap-5 lg:gap-7">
            {CITY_ROOM_AMENITIES.tiers.map((tier, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.9, delay: 0.1 * i, ease: [0.22, 1, 0.36, 1] }}
                className="group relative bg-ivory-50 border border-champagne/40 p-8 overflow-hidden hover:border-bordeaux transition-colors duration-700"
              >
                <span className="absolute top-3 left-3 w-3 h-3 border-t border-l border-bordeaux/60" />
                <span className="absolute bottom-3 right-3 w-3 h-3 border-b border-r border-bordeaux/60" />
                <h3 className="font-heading uppercase text-bordeaux tracking-wider text-[1.05rem] leading-tight">{t(tier.title)}</h3>
                <span className="block mt-4 h-px w-12 bg-champagne group-hover:w-24 transition-all duration-500" />
                <p className="mt-5 font-display text-ink-soft text-[0.95rem] leading-[1.8]">{t(tier.desc)}</p>
              </motion.div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <span className="eyebrow !tracking-[0.32em]">{t(CITY_ROOM_AMENITIES.included.label)}</span>
            <div className="mt-5 flex flex-wrap justify-center gap-3">
              {CITY_ROOM_AMENITIES.included.items.map((it, i) => (
                <span key={i} className="px-4 py-2 border border-champagne/50 text-bordeaux/85 font-heading uppercase tracking-[0.2em] text-[0.65rem] bg-ivory">
                  {t(it)}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          PRO SERVICES — Conference / Coworking / Catering
      ══════════════════════════════════════════ */}
      <section className="relative section-pad bg-mist overflow-hidden">
        <div className="absolute -top-32 right-0 w-[480px] h-[480px] bg-champagne/10 blur-3xl pointer-events-none" />
        <div className="relative max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="text-center max-w-3xl mx-auto">
            <span className="ornament eyebrow">{t(CITY_PRO_SERVICES.eyebrow)}</span>
            <motion.h2
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
              className="mt-6 font-heading uppercase text-bordeaux text-[clamp(1.7rem,2.8vw,2.6rem)] leading-tight"
            >
              {t(CITY_PRO_SERVICES.title)}
            </motion.h2>
            <span className="block hairline mx-auto mt-6" />
          </div>
          <div className="mt-14 grid md:grid-cols-3 gap-5 lg:gap-6">
            {CITY_PRO_SERVICES.items.map((it, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.9, delay: 0.1 * i, ease: [0.22, 1, 0.36, 1] }}
                className="group relative bg-ivory border border-champagne/40 p-8 overflow-hidden hover:border-bordeaux transition-colors duration-700"
              >
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
          BUSINESS PACK — Special offers
      ══════════════════════════════════════════ */}
      <section className="relative py-24 sm:py-28 bg-bordeaux text-ivory overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(201,167,102,0.18),_transparent_70%)]" />
        <motion.div
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
          className="relative max-w-3xl mx-auto px-6 text-center"
        >
          <span className="font-heading uppercase tracking-[0.4em] text-[0.7rem] text-shimmer">{t(CITY_BUSINESS_PACK.eyebrow)}</span>
          <h2 className="mt-6 font-heading uppercase text-ivory text-[clamp(1.7rem,2.8vw,2.6rem)] leading-tight">
            {t(CITY_BUSINESS_PACK.title)}
          </h2>
          <span className="block h-px w-20 bg-champagne mx-auto mt-6" />
          <ul className="mt-10 space-y-3 text-left max-w-xl mx-auto">
            {CITY_BUSINESS_PACK.perks.map((p, i) => (
              <li key={i} className="flex items-start gap-3 font-display text-ivory/85 text-[0.95rem] leading-[1.7]">
                <span className="text-champagne mt-1">◆</span>
                <span>{t(p)}</span>
              </li>
            ))}
          </ul>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a href={CITY_INFO.bookingUrl} target="_blank" rel="noreferrer" className="btn-royal">
              {t(UI.bookNow)} <span aria-hidden>→</span>
            </a>
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
