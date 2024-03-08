/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        favorite: '#F08080',
        paleta:{
          '100':'red',
          '200' :'blue'
        }
      }
    },
  },
  plugins: [require("daisyui")],
  daisyui:{
    themes: ["light", "dark","dracula","dracula"],
  }
}