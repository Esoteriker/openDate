import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        cream: '#f8f3ec',
        roseMist: '#f3d8de',
        coral: '#e57a76',
        lavenderDeep: '#6b5ba6',
        ink: '#2b2433'
      },
      boxShadow: {
        soft: '0 14px 40px -22px rgba(35, 21, 47, 0.40)'
      },
      borderRadius: {
        xl2: '1rem'
      },
      keyframes: {
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' }
        },
        floatIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        }
      },
      animation: {
        shimmer: 'shimmer 1.3s linear infinite',
        floatIn: 'floatIn 0.5s ease-out forwards'
      }
    }
  },
  plugins: []
};

export default config;
