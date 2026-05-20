import { motion } from 'framer-motion';
import { useT } from '../contexts/LanguageContext.jsx';
import { SIGNATURE } from '../data/content.js';

export default function SignatureSection() {
  const t = useT();

  return (
    <section id="signature" className="relative section-pad bg-ivory overflow-hidden">
      {/* Decorative champagne radial */}
      <div className="absolute inset-0 bg-champagne-radial pointer-events-none" />
      <div className="absolute top-0 left-0 w-[420px] h-[420px] bg-bordeaux/5 blur-3xl -translate-x-1/2 -translate-y-1/2" />

      <div className="relative max-w-[1400px] mx-auto px-6 lg:px-12 grid lg:grid-cols-12 gap-12 lg:gap-20">
        {/* Left: large image with parallax + frame */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
          className="lg:col-span-6 relative"
        >
          <div className="relative cinema overflow-hidden shadow-deep">
            <img
              src="/img/royal/deluxe/DSC06942.webp"
              alt="Royal Plaza signature suite"
              className="w-full h-[380px] sm:h-[480px] lg:h-[640px] object-cover"
              loading="lazy"
              decoding="async"
            />
            <div className="absolute inset-0 bg-bordeaux-veil" />
            {/* Gold frame */}
            <div className="pointer-events-none absolute inset-4 border border-champagne/40" />
          </div>

          {/* Floating accent card */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.4 }}
            className="hidden md:block absolute -bottom-10 -right-10 max-w-xs glass-panel p-7 shadow-soft"
          >
            <p className="serif-flourish text-bordeaux text-2xl leading-snug">
              {t(SIGNATURE.pledge)}
            </p>
          </motion.div>
        </motion.div>

        {/* Right: text */}
        <div className="lg:col-span-6 flex flex-col justify-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="ornament eyebrow"
          >
            {t(SIGNATURE.eyebrow)}
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.1, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 font-heading text-bordeaux text-[clamp(2rem,4vw,3.6rem)] leading-[1.05] uppercase"
          >
            {t(SIGNATURE.title)}
          </motion.h2>

          <span className="hairline mt-8" />

          <div className="mt-8 space-y-1.5 font-display text-ink-soft leading-[1.95] text-[0.98rem] max-w-xl">
            {t(SIGNATURE.body).map((line, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.7, delay: 0.05 * i }}
              >
                {line}
              </motion.p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
