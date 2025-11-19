/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        marvel: {
          red: "#ED1D24",
          darkred: "#B11313",
        }
      },
    },
  },
  plugins: [],
}
