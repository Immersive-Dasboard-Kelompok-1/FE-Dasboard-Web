/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Contoh warna baru
        primary: '#00BDD6FF',

        // warna untuk dashboard
        blue1: '#F0F8FEFF',
        blue2: '#F1F4FDFF',
        blue3: '#FDF2F2FF',
        blue4: '#4069E5FF',
        red: '#E05858FF'

        
      },
    },
  },
  plugins: [require("daisyui")],
}

