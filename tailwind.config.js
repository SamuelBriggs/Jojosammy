module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, 
  theme: {
    screens: {
      'custom': {'min': '524px', 'max': '639px'},
      'custom2': {'min': '450px', 'max': '523px'},
      'custom3': {'min': '350px', 'max': '449px'},
      'sm': {'min': '640px', 'max': '767px'},
      // => @media (min-width: 640px and max-width: 767px) { ... }
      // Styles for screens larger than 640px wide (e.g., tablets and desktops

      'md': {'min': '768px', 'max': '1023px'},
      // => @media (min-width: 768px and max-width: 1023px) { ... }

      'lg': {'min': '1024px', 'max': '1279px'},
      // => @media (min-width: 1024px and max-width: 1279px) { ... }

      'xl': {'min': '1280px', 'max': '1535px'},
      // => @media (min-width: 1280px and max-width: 1535px) { ... }

      '2xl': {'min': '1536px'},
      // => @media (min-width: 1536px) { ... }
    }
    },
    extend: {},
    variants: {
      extend: {},
    },
    plugins: [],
  }