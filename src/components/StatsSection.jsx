import { motion, useInView, useMotionValue, useTransform, animate } from 'framer-motion';
import { useEffect, useRef } from 'react';
import { useT } from '../contexts/LanguageContext.jsx';

const STATS = [
  {
    value: 105,
    symbol: '◈',
    label: { fr: 'Nombre des Chambres', en: 'Number of Rooms' }
  },
  {
    value: 2,
    symbol: '◇',
    label: { fr: 'Salles de Réunions', en: 'Meeting Rooms' }
  },
  {
    value: 2,
    symbol: '◉',
    label: { fr: 'Restaurants', en: 'Restaurants' }
  },
  {
    value: 1,
    symbol: '◌',
    label: { fr: 'Spa', en: 'Spa' }
  }
];

function CountUp({ target, inView }) {
  const ref = useRef(null);
  const motionVal = useMotionValue(0);
  const rounded = useTransform(motionVal, v => Math.round(v));

  useEffect(() => {
    if (!inView) return;
    const ctrl = animate(motionVal, target, { duration: 1.6, ease: 'easeOut' });
    return ctrl.stop;
  }, [inView, target, motionVal]);

  useEffect(() => {
    return rounded.on('change', v => {
      if (ref.current) ref.current.textContent = v;
    });
  }, [rounded]);

  return <span ref={ref}>0</span>;
}

export default function StatsSection() {
  const t = useT();
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: true, amount: 0.3 });

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-bordeaux-deep py-24 md:py-32"
    >
      {/* Ambient glow */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(201,167,102,0.12),_transparent_68%)]" />

      {/* Top & bottom champagne hairlines */}
      <motion.span
        initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }}
        transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
        className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-champagne/60 to-transparent origin-center"
      />
      <motion.span
        initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }}
        transition={{ duration: 1.4, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-champagne/60 to-transparent origin-center"
      />

      {/* Eyebrow */}
      <motion.p
        initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
        transition={{ duration: 0.9 }}
        className="text-center font-heading uppercase tracking-[0.52em] text-champagne/70 text-[0.6rem] mb-16 px-4"
      >
        {t({ fr: 'Royal Plaza Hotel · Kénitra', en: 'Royal Plaza Hotel · Kénitra' })}
      </motion.p>

      {/* Cards grid */}
      <div className="relative max-w-[1300px] mx-auto px-6 lg:px-12 grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        {STATS.map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1, delay: 0.12 * i, ease: [0.22, 1, 0.36, 1] }}
            className="group relative border border-champagne/30 hover:border-champagne/70 transition-colors duration-700 p-8 md:p-10 text-center overflow-hidden"
            style={{ background: 'linear-gradient(120deg, #5E1A24 0%, #3F0E18 100%)' }}
          >
            {/* Corner brackets */}
            <span className="absolute top-3 left-3 w-4 h-4 border-t border-l border-champagne/40 group-hover:border-champagne/80 transition-colors duration-500" />
            <span className="absolute top-3 right-3 w-4 h-4 border-t border-r border-champagne/40 group-hover:border-champagne/80 transition-colors duration-500" />
            <span className="absolute bottom-3 left-3 w-4 h-4 border-b border-l border-champagne/40 group-hover:border-champagne/80 transition-colors duration-500" />
            <span className="absolute bottom-3 right-3 w-4 h-4 border-b border-r border-champagne/40 group-hover:border-champagne/80 transition-colors duration-500" />

            {/* Shimmer sweep on hover — matches btn-royal ::before */}
            <span className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
              style={{ background: 'linear-gradient(110deg, transparent 30%, rgba(241,220,167,0.18) 50%, transparent 70%)' }}
            />

            {/* Symbol */}
            <p className="font-heading text-champagne/50 text-xl tracking-widest mb-5 group-hover:text-champagne/90 transition-colors duration-500">
              {s.symbol}
            </p>

            {/* Animated number */}
            <p className="font-heading text-[clamp(3rem,5.5vw,5rem)] leading-none text-ivory [text-shadow:0_0_40px_rgba(201,167,102,0.25)] group-hover:[text-shadow:0_0_60px_rgba(201,167,102,0.45)] transition-all duration-700">
              <CountUp target={s.value} inView={inView} />
            </p>

            {/* Champagne divider */}
            <span className="block mx-auto mt-5 mb-5 h-px w-8 bg-champagne/40 group-hover:w-16 transition-all duration-700" />

            {/* Label */}
            <p className="font-heading uppercase tracking-[0.32em] text-[0.6rem] text-ivory/50 group-hover:text-ivory/80 transition-colors duration-500 leading-relaxed">
              {t(s.label)}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
