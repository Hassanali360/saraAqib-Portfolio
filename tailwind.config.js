/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#008080',      // Ocean Teal
        secondary: '#A2D5C4',    // Mint Green (darker)
        accent: '#F77F4A',       // Coral Peach
        body: '#2B2D42',         // Deep Charcoal
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],  // Poppins as default sans
      },
    },
  },
  plugins: [],
}
