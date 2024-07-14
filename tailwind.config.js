/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
          fontFamily: {
            'Nunito': ['Nunito', 'sans-serif'],
            'Sans': ['Open Sans', 'sans-serif'],
           
      },
      colours:{
        'primary': '#5F35F5',
        overlay: 'rgba(0, 0, 0, 0.41)'
      }
    },
  },
  plugins: [],
}
