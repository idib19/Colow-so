/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      height: {
        '111': '22rem',
        '112': '24rem',
        '113': '28rem',
        '115': '132rem', // Change the value to your desired rem equivalent
      },
      width: {
        '115': '138rem',
      },
      spacing: {
        '1/2': '50%',
        '1/3': '33.3333%',
        '2/3': '66.6666%',
        '1/4': '25%',

      },
    },
  },
  plugins: [],
}