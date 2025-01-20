/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundColor: {
        'primary-color': '#0C0D17',
        'secondary-color': '#1B1E35',
      },
    },
  },
  plugins: [],
}
