/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    './index.html',
    './src/**/*.{ts,tsx,js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        guide: {
          blue: '#0284c7',
          darkBlue: '#0369a1',
          cyan: '#38bdf8',
          lightCyan: '#e0f2fe',
          plum: '#831843',
          lightPlum: '#fdf2f8',
          borderPlum: '#db2777',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        serif: ['Merriweather', 'Georgia', 'serif'],
      },
    },
  },
  plugins: [],
};
