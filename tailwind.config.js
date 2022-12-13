/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './public/index.html',
    "./src/**/*.{js,jsx,ts,tsx}",
    './pages/**/*.{html,js}',
    './components/**/*.{html,js}',
    './src/**/*.{html,js}', 
    './node_modules/tw-elements/dist/js/**/*.js',
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('tw-elements/dist/plugin'),
  ],
}
