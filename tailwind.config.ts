import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/**/*.{ts,tsx,js,jsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          950: '#05070C',
          900: '#0A0E16',
          850: '#0E1420',
          800: '#131B29',
          700: '#1D2838',
          600: '#33475F',
        },
        signal: {
          DEFAULT: '#1580F5',
          soft: '#4DA0FF',
          deep: '#0E66D6',
        },
        data: {
          DEFAULT: '#46C7F5',
          soft: '#8ADCFB',
        },
        silver: {
          1: '#F2F5F9',
          2: '#AEB8C4',
          3: '#7C8794',
        },
        paper: {
          DEFAULT: '#F5F7FA',
          2: '#EDF1F6',
        },
        ink: {
          DEFAULT: '#0B1826',
          2: '#26384A',
        },
        muted: {
          DEFAULT: '#5A6B7C',
          2: '#8A98A6',
        },
        line: {
          DEFAULT: '#E2E8F0',
        },
        ok: '#16A34A',
        warn: '#F59E0B',
        err: '#DC2626',
      },
      fontFamily: {
        display: ['var(--font-display)', 'Arial Narrow', 'system-ui', 'sans-serif'],
        body: ['var(--font-body)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-mono)', 'ui-monospace', 'monospace'],
      },
      maxWidth: {
        wrap: '1180px',
      },
      boxShadow: {
        soft: '0 1px 2px rgba(11,24,38,.06),0 8px 24px rgba(11,24,38,.06)',
        deep: '0 20px 60px rgba(6,15,26,.16)',
      },
    },
  },
  plugins: [],
};

export default config;
