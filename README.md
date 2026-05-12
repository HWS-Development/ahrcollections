# AHR Collections — Hospitality Website

Cinematic, fully-animated multi-page redesign for **AHR Collections**, the K&eacute;nitra-based luxury hotel collection (Royal Plaza, Waves Aqua Resort, Vitality Terminus, City H&ocirc;tel).

## Stack

- **Vite + React 18 + React Router 6**
- **TailwindCSS 3** (Ivory / Champagne / Deep Bordeaux palette)
- **Framer Motion** (orchestrated reveals, AnimatePresence, layout)
- **GSAP** (loaded — ready for ScrollTrigger extensions)
- **Lenis** (buttery smooth scrolling, hash-anchor handling)
- IntersectionObserver helpers for cinematic reveals

## Quick start (Windows PowerShell)

```powershell
cd ahrcollections
npm install
npm run dev
```

Opens at http://localhost:5173

## Routes

| Path | Page | Component |
|---|---|---|
| `/`           | Accueil — AHR brand showcase                  | `HomePage.jsx` |
| `/about`      | &Agrave; propos — story, values, quote        | `AboutPage.jsx` |
| `/collection` | Notre Collection — 4 hotels editorial         | `CollectionPage.jsx` |
| `/offers`     | Offres Sp&eacute;ciales — 4 perks cards       | `OffersPage.jsx` |
| `/aqua`       | Waves Aqua Resort                              | `AquaPage.jsx` |
| `/plaza`      | Royal Plaza (single-page experience)           | `PlazaPage.jsx` |
| `/vitality`   | Vitality Terminus                              | `VitalityPage.jsx` |
| `/city`       | City H&ocirc;tel                               | `CityPage.jsx` |
| `/contact`    | Contact (form, map, channels)                  | `ContactPage.jsx` |

## Languages (FR / EN)

Toggle in the header (top right). Persisted in `localStorage`. All copy in `src/data/site.js` and `src/data/content.js`.

## Fonts

```css
font-family: "helvetica-w01-bold",         "Helvetica Neue", Helvetica, Arial, sans-serif;       /* headings */
font-family: "avenir-w01_85-heavy1475544", "Avenir Next",     "Nunito Sans", sans-serif;         /* body */
```

If your hosting loads these proprietary faces (Adobe Fonts / MyFonts / Wix), they will be used. Otherwise the chain falls back to refined alternates.

## Replacing placeholder photos

All images are Unsplash URLs. To swap:

1. Drop your real images in `/public/images/`
2. Replace each Unsplash URL in `src/data/site.js` and `src/data/content.js`

Hero / featured videos use free Coverr clips — replace `videoSrc` with your own MP4 URL when ready.

## Build for production

```powershell
npm run build
npm run preview
```

The `dist/` folder is fully static — deploy to Netlify, Vercel, GitHub Pages, or upload as a Wix Velo custom element.
