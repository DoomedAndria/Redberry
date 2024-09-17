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
      'bd_cl_0': '#DBDBDB',
      'tx_cl_0': '#021526',
      'bg_btn_0': '#F3F3F3'
    }
  },
  plugins: [],
}