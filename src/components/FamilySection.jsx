import { motion } from 'framer-motion';
import { useT } from '../contexts/LanguageContext.jsx';
import { FAMILY } from '../data/content.js';

export default function FamilySection() {
  const t = useT();

  return (
    <section id="family" className="relative section-pad bg-ivory overflow-hidden">
      <div className="absolute inset-0 bg-champagne-radial pointer-events-none" />

      <div className="relative max-w-[1500px] mx-auto px-6 lg:px-12 grid lg:grid-cols-12 gap-12 items-center">
        {/* Left mosaic */}
        <div className="lg:col-span-7 grid grid-cols-6 grid-rows-6 gap-3 h-[640px]">
          <motion.div initial={{ opacity:0, y:30 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ duration:0.9 }} className="cinema col-span-4 row-span-4 overflow-hidden shadow-deep relative">
            <img src={FAMILY.photos[0]} alt="" className="w-full h-full object-cover" />
            <div className="pointer-events-none absolute inset-3 border border-champagne/40" />
          </motion.div>
          <motion.div initial={{ opacity:0, x:30 }} whileInView={{ opacity:1, x:0 }} viewport={{ once:true }} transition={{ duration:0.9, delay:0.15 }} className="cinema col-span-2 row-span-3 overflow-hidden shadow-soft">
            <img src={FAMILY.photos[1]} alt="" className="w-full h-full object-cover" />
          </motion.div>
          <motion.div initial={{ opacity:0, x:30 }} whileInView={{ opacity:1, x:0 }} viewport={{ once:true }} transition={{ duration:0.9, delay:0.25 }} className="cinema col-span-2 row-span-3 overflow-hidden shadow-soft">
            <img src={FAMILY.photos[2]} alt="" className="w-full h-full object-cover" />
          </motion.div>
          <motion.div initial={{ opacity:0, y:30 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ duration:0.9, delay:0.3 }} className="cinema col-span-2 row-span-2 overflow-hidden shadow-soft">
            <img src={FAMILY.photos[3]} alt="" className="w-full h-full object-cover" />
          </motion.div>
          <motion.div initial={{ opacity:0, y:30 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ duration:0.9, delay:0.35 }} className="cinema col-span-2 row-span-2 overflow-hidden shadow-soft">
            <img src={FAMILY.photos[4]} alt="" className="w-full h-full object-cover" />
          </motion.div>
          <motion.div initial={{ opacity:0, y:30 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ duration:0.9, delay:0.4 }} className="cinema col-span-2 row-span-2 overflow-hidden shadow-soft">
            <img src={FAMILY.photos[5]} alt="" className="w-full h-full object-cover" />
          </motion.div>
        </div>

        {/* Right text */}
        <div className="lg:col-span-5">
          <span className="ornament eyebrow">{t(FAMILY.eyebrow)}</span>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 font-heading uppercase text-bordeaux text-[clamp(2rem,4.4vw,3.4rem)] leading-[1.05]"
          >
            {t(FAMILY.title)}
          </motion.h2>
          <span className="hairline mt-7" />

          <div className="mt-8 space-y-1.5 font-display text-ink-soft leading-[1.95] text-[0.98rem] max-w-lg">
            {t(FAMILY.body).map((line, i) => (
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

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.6 }}
            className="mt-10 serif-flourish text-bordeaux text-3xl leading-snug"
          >
            «&nbsp;{t({ fr: 'Chacun vit son moment… ensemble.', en: 'Everyone lives their moment… together.' })}&nbsp;»
          </motion.p>
        </div>
      </div>
    </section>
  );
}
