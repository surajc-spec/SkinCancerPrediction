/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#A78BFA',   // Soft Lavender
        secondary: '#FFFFFF', // Very light background
        tertiory: '#D6B4FC', // Very light background
        accent: '#7C3AED',    // Buttons, highlights
        textColor: '#333333', // Readable text
        Grey:'#dddddd',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],         // Default body font
        heading: ['Poppins', 'sans-serif'],    // Headings
        roboto: ['Roboto', 'sans-serif'],      // Optional additional font
        open: ['Open Sans', 'sans-serif'],     // Optional additional font
        nunito: ['Nunito', 'sans-serif'],      // Optional additional font
      },
    },
  },
  plugins: [],
}
