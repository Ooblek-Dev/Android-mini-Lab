/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: '#0A0A0B',
        surface: '#111113',
      },
      animation: {
        'slide-in': 'slideIn 0.3s ease',
      }
    },
  },
  plugins: [],
}
