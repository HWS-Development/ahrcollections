/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // Ivory / Champagne / Deep Bordeaux palette
        ivory:      { 50: '#FBF8F3', 100: '#F6F0E6', 200: '#EFE5D2', 300: '#E5D5B6', DEFAULT: '#F6F0E6' },
        champagne:  { 50: '#F4E9D2', 100: '#EAD9B0', 200: '#D9BE85', 300: '#C9A766', 400: '#B6904A', DEFAULT: '#C9A766' },
        bordeaux:   { 50: '#F2E2E4', 100: '#D9A6AC', 200: '#B66068', 300: '#8A2A36', 400: '#5E1A24', 500: '#3F0E18', DEFAULT: '#5E1A24' },
        ink:        { DEFAULT: '#1F1A17', soft: '#3A322D' },
        mist:       '#F1ECE3'
      },
      fontFamily: {
        // User-requested exact fonts with refined fallbacks
        heading: ['"avenir-w01_85-heavy1475544"', '"Avenir Next"', '"Nunito Sans"', 'Helvetica', 'Arial', 'sans-serif'],
        display: ['"avenir-w01_85-heavy1475544"', '"Avenir Next"', '"Nunito Sans"', 'Helvetica', 'sans-serif'],
        body:    ['"avenir-w01_85-heavy1475544"', '"Avenir Next"', '"Nunito Sans"', 'Helvetica', 'sans-serif']
      },
      letterSpacing: {
        royal: '0.32em',
        widest2: '0.5em'
      },
      boxShadow: {
        soft: '0 30px 60px -30px rgba(94, 26, 36, 0.25)',
        deep: '0 50px 90px -40px rgba(31, 26, 23, 0.45)',
        ring: '0 0 0 1px rgba(201, 167, 102, 0.4)'
      },
      backgroundImage: {
        'noise': "url(\"data:image/svg+xml;utf8,<svg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 0.4  0 0 0 0 0.3  0 0 0 0 0.2  0 0 0 0.18 0'/></filter><rect width='100%25' height='100%25' filter='url(%23n)'/></svg>\")",
        'champagne-radial': 'radial-gradient(ellipse at top, rgba(201,167,102,0.18), transparent 60%)',
        'bordeaux-veil': 'linear-gradient(180deg, rgba(94,26,36,0.0) 0%, rgba(94,26,36,0.55) 100%)'
      },
      keyframes: {
        shimmer: {
          '0%':   { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' }
        },
        floaty: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%':       { transform: 'translateY(-8px)' }
        },
        slowZoom: {
          '0%':   { transform: 'scale(1)' },
          '100%': { transform: 'scale(1.12)' }
        }
      },
      animation: {
        shimmer: 'shimmer 6s linear infinite',
        floaty: 'floaty 6s ease-in-out infinite',
        slowZoom: 'slowZoom 18s ease-out forwards'
      }
    }
  },
  plugins: []
};
