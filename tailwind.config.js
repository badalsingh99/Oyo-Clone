/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
     height : {
      'large-box' : "400px"
     }
    },
  },
  plugins: [],
}

