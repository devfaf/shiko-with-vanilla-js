/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}",
    "./src/assets/**/*.js",
  ],
  theme: {
    fontFamily: {
      Pacifico: "Pacifico",
      BYekan: "BYekan",
      Lalezar:"Lalezar",
    },
    extend: {
      keyframes: {
        slideOpacity: {
          '0%':{opacity: .6},
          '100%':{opacity: 1},
        }
      },
      animation: {
        'slide-slow': 'slideOpacity 1.3s',
      }
    },
  },
  plugins: [],
}