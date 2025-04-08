/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#ffffff",
          dark: "#0a192f",
          light: "#ffffff"
        },
        secondary: {
          DEFAULT: "#64ffda",
          dark: "#64ffda",
          light: "#64ffda"
        },
        text: {
          primary: "#1a1a1a",
          secondary: "#4a5568",
          'dark-primary': "#ccd6f6",
          'dark-secondary': "#8892b0"
        },
        'primary-light': "#112240"
      }
    },
  },
  plugins: [],
}