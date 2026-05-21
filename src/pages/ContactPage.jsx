import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionHeader from '../components/SectionHeader.jsx';
import { useT } from '../contexts/LanguageContext.jsx';
import { CONTACT, BRAND, HOTELS, UI } from '../data/site.js';

export default function ContactPage() {
  const t = useT();
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    // Front-end only — replace with real submit logic later.
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 6000);
    e.currentTarget.reset();
  };

  return (
    <>
      {/* Hero */}
      <section className="relative pt-[140px] pb-20 bg-ivory overflow-hidden">
        <div className="absolute inset-0 bg-champagne-radial pointer-events-none" />
        <motion.div
          initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.1, delay: 0.2 }}
          className="relative max-w-4xl mx-auto px-6 text-center"
        >
          <span className="ornament eyebrow">{t(CONTACT.hero.eyebrow)}</span>
          <h1 className="mt-6 font-heading uppercase text-bordeaux text-[clamp(1.8rem,5vw,4.6rem)] leading-[1.04]">
            {t(CONTACT.hero.title)}
          </h1>
          <span className="block hairline mt-7 mx-auto" />
          <p className="mt-7 font-display text-ink-soft text-[1.05rem] leading-[1.85]">
            {t(CONTACT.hero.sub)}
          </p>
        </motion.div>
      </section>

      {/* Channels */}
      <section className="relative pb-12 bg-ivory">
        <div className="max-w-[1300px] mx-auto px-6 lg:px-12 grid md:grid-cols-3 gap-5">
          {CONTACT.channels.map((c, i) => (
            <motion.a
              key={i}
              href={c.href}
              target={c.href.startsWith('http') ? '_blank' : undefined}
              rel="noreferrer"
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.08 * i }}
              className="group relative bg-mist border border-champagne/40 p-7 hover:border-bordeaux transition-colors duration-700 overflow-hidden"
            >
              <span className="absolute inset-0 bg-gradient-to-br from-champagne/0 via-champagne/12 to-bordeaux/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <div className="flex items-center gap-3">
                <ChannelIcon name={c.icon} />
                <p className="eyebrow">{t(c.label)}</p>
              </div>
              <p className="mt-3 font-display text-ink text-[1.05rem] break-words">{c.value}</p>
              <span className="block mt-4 h-px w-10 bg-champagne group-hover:w-24 transition-all duration-500" />
            </motion.a>
          ))}
        </div>
      </section>

      {/* Form + map */}
      <section className="relative section-pad bg-mist overflow-hidden">
        <div className="absolute inset-0 bg-champagne-radial pointer-events-none" />
        <div className="relative max-w-[1500px] mx-auto px-6 lg:px-12 grid lg:grid-cols-12 gap-10">
          {/* Form */}
          <motion.form
            initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            transition={{ duration: 1 }}
            onSubmit={onSubmit}
            className="lg:col-span-7 bg-ivory border border-champagne/40 p-8 md:p-12 shadow-soft relative"
          >
            <span className="absolute top-3 left-3 w-3 h-3 border-t border-l border-bordeaux" />
            <span className="absolute top-3 right-3 w-3 h-3 border-t border-r border-bordeaux" />
            <span className="absolute bottom-3 left-3 w-3 h-3 border-b border-l border-bordeaux" />
            <span className="absolute bottom-3 right-3 w-3 h-3 border-b border-r border-bordeaux" />

            <p className="eyebrow">{t({ fr: 'Formulaire de contact', en: 'Contact form' })}</p>
            <h2 className="mt-3 font-heading uppercase text-bordeaux text-[clamp(1.5rem,2.4vw,2.2rem)] leading-tight">
              {t({ fr: 'Écrivez-nous, nous lisons tout.', en: 'Write to us — we read every message.' })}
            </h2>
            <span className="block hairline mt-5" />

            <div className="mt-8 grid sm:grid-cols-2 gap-5">
              <Field label={t(CONTACT.form.firstName)} name="firstName" required />
              <Field label={t(CONTACT.form.lastName)}  name="lastName"  required />
              <Field label={t(CONTACT.form.email)}     name="email"     type="email" required />
              <Field label={t(CONTACT.form.phone)}     name="phone"     type="tel" />
              <div className="sm:col-span-2">
                <label className="eyebrow">{t(CONTACT.form.hotel)}</label>
                <select
                  name="hotel" defaultValue=""
                  className="mt-2 w-full bg-transparent border-b border-ink/20 focus:border-bordeaux py-3.5 font-display text-ink outline-none transition-colors"
                >
                  <option value="" disabled>{t(CONTACT.form.chooseHotel)}</option>
                  {HOTELS.map((h) => <option key={h.id} value={h.name}>{h.name}</option>)}
                </select>
              </div>
              <div className="sm:col-span-2">
                <label className="eyebrow">{t(CONTACT.form.message)}</label>
                <textarea
                  name="message" rows={5} required
                  className="mt-2 w-full bg-transparent border-b border-ink/20 focus:border-bordeaux py-3.5 font-display text-ink outline-none transition-colors resize-none"
                />
              </div>
            </div>

            <div className="mt-9 flex items-center justify-between gap-4 flex-wrap">
              <button type="submit" className="btn-royal">
                {t(UI.send)} <span aria-hidden>→</span>
              </button>
              <p className="font-heading uppercase tracking-[0.28em] text-[0.6rem] text-ink-soft/70">
                {t({ fr: 'Réponse sous 24h', en: 'Reply within 24h' })}
              </p>
            </div>

            <AnimatePresence>
              {submitted && (
                <motion.p
                  initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
                  className="mt-6 font-display text-bordeaux"
                >
                  {t(UI.thanks)}
                </motion.p>
              )}
            </AnimatePresence>
          </motion.form>

          {/* Side panel */}
          <motion.aside
            initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.15 }}
            className="lg:col-span-5 flex flex-col gap-5"
          >
            <div className="cinema relative overflow-hidden shadow-deep h-72">
              <iframe
                title="map"
                src="https://www.google.com/maps?q=Kenitra,Morocco&output=embed"
                className="w-full h-full border-0 grayscale-[0.2]"
                loading="lazy" referrerPolicy="no-referrer-when-downgrade"
              />
              <div className="pointer-events-none absolute inset-3 border border-champagne/40" />
            </div>

            <div className="bg-bordeaux text-ivory p-8 relative overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(201,167,102,0.2),_transparent_70%)]" />
              <p className="relative font-heading uppercase tracking-[0.4em] text-[0.7rem] text-shimmer">
                {t({ fr: 'Conciergerie 24/7', en: 'Concierge 24/7' })}
              </p>
              <p className="relative mt-4 serif-flourish text-2xl text-ivory/95 leading-snug">
                {t({
                  fr: 'Notre équipe vous accompagne avant, pendant et après votre séjour.',
                  en: 'Our team supports you before, during and after your stay.'
                })}
              </p>
              <a href={`tel:${BRAND.phone.replace(/\s/g,'')}`} className="relative mt-6 inline-flex font-display text-ivory underline decoration-champagne underline-offset-4">
                {BRAND.phone}
              </a>
            </div>
          </motion.aside>
        </div>
      </section>
    </>
  );
}

function Field({ label, name, type = 'text', required = false }) {
  return (
    <div>
      <label className="eyebrow">{label}{required ? ' *' : ''}</label>
      <input
        type={type} name={name} required={required}
        className="mt-2 w-full bg-transparent border-b border-ink/20 focus:border-bordeaux py-3.5 font-display text-ink outline-none transition-colors"
      />
    </div>
  );
}

function ChannelIcon({ name }) {
  const common = { width: 22, height: 22, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 1.6, strokeLinecap: 'round', strokeLinejoin: 'round', 'aria-hidden': true };
  if (name === 'phone') return (
    <svg {...common} className="text-bordeaux flex-shrink-0">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92Z"/>
    </svg>
  );
  if (name === 'email') return (
    <svg {...common} className="text-bordeaux flex-shrink-0">
      <rect x="3" y="5" width="18" height="14" rx="2"/>
      <path d="m3 7 9 6 9-6"/>
    </svg>
  );
  return (
    <svg {...common} className="text-bordeaux flex-shrink-0">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 1 1 18 0Z"/>
      <circle cx="12" cy="10" r="3"/>
    </svg>
  );
}
