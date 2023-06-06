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
        
      },
    },
  },
  plugins: [require("daisyui")],
}

