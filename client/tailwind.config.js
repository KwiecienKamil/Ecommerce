/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        logo: 'Pacifico'
      },
      colors: {
        dwhite: "#efeff0",
        accent: "#F9B872"
      },
    },
  },
  plugins: [],
}

