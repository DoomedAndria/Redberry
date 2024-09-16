/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      padding:{
        'g': '162px'
      }
    },
    colors: {
      'bd_cl_0': '#DBDBDB'
    }
  },
  plugins: [],
}