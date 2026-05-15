import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        // Editorial
        fraunces: ['var(--font-fraunces)', 'Georgia', 'serif'],
        cormorant: ['var(--font-cormorant)', 'Georgia', 'serif'],
        // Minimal
        familjen: ['var(--font-familjen)', 'system-ui', 'sans-serif'],
        newsreader: ['var(--font-newsreader)', 'Georgia', 'serif'],
        // Boutique
        italiana: ['var(--font-italiana)', 'Didot', 'serif'],
        crimson: ['var(--font-crimson)', 'Garamond', 'serif'],
        caveat: ['var(--font-caveat)', 'cursive'],
        // Bold
        archivo: ['var(--font-archivo)', 'system-ui', 'sans-serif'],
        bigshoulders: ['var(--font-bigshoulders)', 'Impact', 'sans-serif'],
        manrope: ['var(--font-manrope)', 'system-ui', 'sans-serif'],
      },
      colors: {
        // Editorial
        ink: '#1a1d1a',
        cream: '#f5efe1',
        forest: '#1a3a2e',
        moss: '#3a5a44',
        rose: '#c4937a',
        // Minimal
        sage: '#94a888',
        sageDeep: '#5b6f54',
        bone: '#faf7f2',
        // Boutique
        terracotta: '#c97b5a',
        clay: '#b46544',
        parchment: '#f3e8d8',
        olive: '#6b6a4d',
        // Bold
        nightForest: '#0e1f1a',
        chartreuse: '#c5d92d',
        ivory: '#f4f4ec',
      },
    },
  },
  plugins: [],
};

export default config;
