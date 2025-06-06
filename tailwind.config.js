/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        slate: {
          900: '#0f172a',
        },
        blue: {
          900: '#1e293b',
        },
        teal: {
          500: '#00c3e8',
        },
      },
    },
  },
  plugins: [],
};
