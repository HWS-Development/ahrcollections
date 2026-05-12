import { motion } from 'framer-motion';
import { useT } from '../contexts/LanguageContext.jsx';
import { SPA } from '../data/content.js';

export default function SpaSection() {
  const t = useT();

  return (
    <section id="spa" className="relative section-pad overflow-hidden bg-gradient-to-b from-mist via-ivory to-mist">
      {/* Soft watery shapes */}
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[1100px] h-[700px] bg-champagne/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-bordeaux/10 blur-3xl pointer-events-none" />

      <div className="relative max-w-[1500px] mx-auto px-6 lg:px-12">
        {/* Centered headline */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="ornament eyebrow">{t(SPA.eyebrow)}</span>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 font-heading uppercase text-bordeaux text-[clamp(2rem,4.4vw,3.6rem)] leading-[1.05]"
          >
            {t(SPA.title)}
          </motion.h2>
          <span className="hairline mt-7" />
        </div>

        {/* Three rituals */}
        <div className="mt-16 grid sm:grid-cols-3 gap-6 lg:gap-8">
          {SPA.rituals.map((r, i) => (
            <motion.div
              key={r.fr}
              initial={{ opacity: 0, y: 50, rotateX: -12 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 1.1, delay: 0.15 * i, ease: [0.22, 1, 0.36, 1] }}
              className="group relative bg-ivory border border-champagne/40 p-10 text-center overflow-hidden"
              style={{ transformStyle: 'preserve-3d' }}
            >
              <span className="absolute inset-0 bg-gradient-to-br from-champagne/0 via-champagne/10 to-bordeaux/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <p className="font-heading text-shimmer text-[2.4rem] leading-none">0{i + 1}</p>
              <p className="mt-6 serif-flourish text-bordeaux text-3xl">{t(r)}</p>
              <span className="block mt-6 mx-auto h-px w-10 bg-champagne group-hover:w-24 transition-all duration-700" />
            </motion.div>
          ))}
        </div>

        {/* Body verse + image */}
        <div className="mt-20 grid lg:grid-cols-12 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 1.05 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7 cinema relative overflow-hidden shadow-deep"
          >
            <img src={SPA.photos[0]} alt="" className="w-full h-[560px] object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-bordeaux-deep/40 via-transparent to-transparent" />
            <div className="pointer-events-none absolute inset-3 border border-champagne/40" />
            <div className="absolute bottom-6 left-6 text-ivory">
              <p className="font-heading uppercase tracking-[0.4em] text-[0.65rem] text-shimmer">Serenita Royal Spa</p>
            </div>
          </motion.div>

          <div className="lg:col-span-5 space-y-1.5 font-display text-ink-soft leading-[1.95] text-[1rem]">
            {t(SPA.body).map((line, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: 0.04 * i }}
              >
                {line}
              </motion.p>
            ))}
          </div>
        </div>

        {/* Spa mini-gallery */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3">
          {SPA.photos.slice(1, 7).map((p, i) => (
            <motion.div
              key={p + i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, delay: 0.06 * i }}
              className="cinema aspect-[3/4] overflow-hidden shadow-soft"
            >
              <img src={p} alt="" className="w-full h-full object-cover" loading="lazy" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
