import { motion } from 'framer-motion';
import { useT } from '../contexts/LanguageContext.jsx';
import { DINING } from '../data/content.js';

export default function DiningSection() {
  const t = useT();

  return (
    <section id="dining" className="relative section-pad bg-ivory-50 overflow-hidden">
      {/* Header */}
      <div className="max-w-[1500px] mx-auto px-6 lg:px-12 grid lg:grid-cols-12 gap-12 items-end">
        <div className="lg:col-span-5">
          <motion.span initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="ornament eyebrow">
            {t(DINING.eyebrow)}
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 font-heading uppercase text-bordeaux text-[clamp(2rem,4.6vw,4rem)] leading-[1.02]"
          >
            {t(DINING.title)}
          </motion.h2>
          <span className="hairline mt-7" />
          {/* Venues */}
          <div className="mt-10 grid sm:grid-cols-2 gap-4">
            {DINING.venues.map((v) => (
              <motion.div
                key={v.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="bg-ivory border border-champagne/40 p-5 hover:border-bordeaux transition-colors group"
              >
                <p className="serif-flourish text-bordeaux text-3xl">{v.name}</p>
                <p className="mt-2 font-display text-ink-soft text-[0.85rem] tracking-wide">{t(v.tag)}</p>
                <span className="mt-4 block h-px w-10 bg-champagne group-hover:w-full transition-all duration-700" />
              </motion.div>
            ))}
          </div>
        </div>

        <div className="lg:col-span-7">
          <div className="space-y-1.5 font-display text-ink-soft leading-[1.95] text-[0.98rem] max-w-xl ml-auto">
            {t(DINING.body).map((line, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: 0.05 * i }}
              >
                {line}
              </motion.p>
            ))}
          </div>
        </div>
      </div>

      {/* Mosaic gallery */}
      <div className="mt-12 md:mt-20 max-w-[1600px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-2 md:grid-cols-12 md:grid-rows-2 gap-3 md:gap-4 h-auto md:h-[720px]">
          <Tile src={DINING.photos[0]} className="col-span-2 md:col-span-6 md:row-span-2 h-64 md:h-auto" delay={0.0} />
          <Tile src={DINING.photos[1]} className="col-span-1 md:col-span-3 md:row-span-1 h-40 md:h-auto" delay={0.1} />
          <Tile src={DINING.photos[2]} className="col-span-1 md:col-span-3 md:row-span-1 h-40 md:h-auto" delay={0.15} />
          <Tile src={DINING.photos[3]} className="col-span-1 md:col-span-2 md:row-span-1 h-32 md:h-auto" delay={0.2} />
          <Tile src={DINING.photos[4]} className="col-span-1 md:col-span-2 md:row-span-1 h-32 md:h-auto" delay={0.25} />
          <Tile src={DINING.photos[5]} className="col-span-2 md:col-span-2 md:row-span-1 h-32 md:h-auto" delay={0.3} />
        </div>
      </div>
    </section>
  );
}

function Tile({ src, className, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 1.04, y: 24 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 1.1, delay, ease: [0.22, 1, 0.36, 1] }}
      className={`cinema relative overflow-hidden shadow-soft ${className}`}
    >
      <img src={src} alt="" className="w-full h-full object-cover" loading="lazy" />
      <div className="absolute inset-0 bg-gradient-to-t from-bordeaux-deep/40 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-700" />
    </motion.div>
  );
}
