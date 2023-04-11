/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
   
    extend: {
      colors: {
        'odm':'#003368',
      }
    },
  },
  plugins: [],
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
};
