/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {

      screens: {
        '2xs': '20px',
        'xs': '480px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      },

      colors: {
        'grey-1': '#1E1E1E',
        'grey-2': '#2C2C2C',
        'grey-3': '#444444',
        'grey-4': '#252525',
        'white': '#ffffff',
        'primary': '#B2CC39',
        'secondary': '#2B4D48',
      },
      
      fontFamily: {
        'montserrat': ['"Montserrat"', 'sans-serif'],
        'open-sans': ['"Open Sans"', 'sans-serif'],
      },

      fontSize: {
        'text-14': '0.875rem',
        'text-16': '1rem', 
        'text-20': '1.25rem', 
        'text-24': '1.5rem', 
        'text-30': '1.875rem', 
        'text-32': '2rem', 
        'text-42': '2.625rem', 

        'base-label': '1.25rem', // 20px
        'xl-label': '1.563rem', // 25px
        'xxl-label': '1.875rem', // 30px
        'base-text': '1.25rem', // 20px
        'xl-text': '1.563rem', // 25px
        'base-tittle': '2.813rem', // 45px
        'xl-tittle': '4.375rem', // 70px
        //0.938rem = 15px
      },
    },
  },
  plugins: [],
}

