import { motion } from 'framer-motion';

/** Centered eyebrow + title section header (used at top of content sections). */
export default function SectionHeader({ eyebrow, title, sub, alignLeft = false }) {
  return (
    <div className={`max-w-3xl ${alignLeft ? '' : 'mx-auto text-center'}`}>
      {eyebrow && (
        <motion.span
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="ornament eyebrow"
        >
          {eyebrow}
        </motion.span>
      )}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        className="mt-6 font-heading uppercase text-bordeaux text-[clamp(2rem,4.4vw,3.6rem)] leading-[1.05]"
      >
        {title}
      </motion.h2>
      <span className={`block hairline mt-7 ${alignLeft ? '' : 'mx-auto'}`} />
      {sub && (
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.15 }}
          className="mt-6 font-display text-ink-soft leading-[1.85] text-[1rem]"
        >
          {sub}
        </motion.p>
      )}
    </div>
  );
}
