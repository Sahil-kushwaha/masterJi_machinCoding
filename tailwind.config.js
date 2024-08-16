/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        "dm-serif": ["DM Serif Text", "serif"],
        "dm-sans": ["DM Sans" ,"sans"]
      },
      backgroundImage:{
        'main_background': "url('./src/assets/mainBackground.png')",
        },
    },
  },
  plugins: [],
}

