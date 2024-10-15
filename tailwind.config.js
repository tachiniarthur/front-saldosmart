/** @type {import('tailwindcss').Config} */
export default {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  content: [],
  theme: {
    extend: {
      fontFamily: {
        'neo-sans': ['Neo-Sans-Pro', 'sans-serif'],
        'neo-sans-bold': ['Neo-Sans-Pro-Bold', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

