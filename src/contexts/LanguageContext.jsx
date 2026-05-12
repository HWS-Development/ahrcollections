import { createContext, useContext, useEffect, useState } from 'react';

const LanguageContext = createContext({ lang: 'fr', setLang: () => {}, toggle: () => {} });

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(() => {
    if (typeof window === 'undefined') return 'fr';
    return localStorage.getItem('rp_lang') || (navigator.language?.startsWith('en') ? 'en' : 'fr');
  });

  useEffect(() => {
    localStorage.setItem('rp_lang', lang);
    document.documentElement.lang = lang;
  }, [lang]);

  const toggle = () => setLang((l) => (l === 'fr' ? 'en' : 'fr'));

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggle }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLang = () => useContext(LanguageContext);

/** Pick a translated value: t({ fr: '...', en: '...' }) */
export const useT = () => {
  const { lang } = useLang();
  return (obj) => (obj && obj[lang]) || (obj && obj.fr) || '';
};
