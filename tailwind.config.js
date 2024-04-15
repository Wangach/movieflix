/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      flexBasis: {
        '1/3': '33.333333333%',
        '2/3': '66.666666666%',
        '3/3': '100%',
      },
      padding: {
        'fav': '20px',
        'more': '50px'
      },
      backgroundColor: {
        'primary': '#0E0921',
        'secondary': '#2B46F5',
        'main': '#F2FBE0',
        'light': 'rgba(120, 141, 191, 0.25)',
        'onh': 'rgba(57, 83, 145, 1.0)'
      },
      textColor: {
        'primary': '#F2FBE0',
       'secondary': '#0A74A8',
       'main': '#0E0921',
      }
    },
  },
  plugins: [],
}

