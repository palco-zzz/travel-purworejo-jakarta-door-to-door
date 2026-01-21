/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'sans-serif'],
      },
      colors: {
        brand: {
          orange: '#FF6B00',
          dark: '#0f172a', 
          surface: '#F5F5F7',
          grey: '#86868b',
          glass: 'rgba(255, 255, 255, 0.7)'
        }
      },
      boxShadow: {
        'apple': '0 4px 6px -1px rgba(0, 0, 0, 0.02), 0 2px 4px -1px rgba(0, 0, 0, 0.02), 0 10px 15px -3px rgba(0, 0, 0, 0.05)',
        'glow': '0 0 20px rgba(255, 107, 0, 0.3)',
      },
      backdropBlur: {
        'xs': '2px',
      }
    }
  },
  plugins: [],
}
