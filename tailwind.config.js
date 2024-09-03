/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],

  theme: {
    extend: {
      colors: {
        borderStart: '#4bc4dc',
        borderEnd: '#f37b3b',  
        borderStartDark: '#017dff',   
        borderEndDark: '#ffffff',   
      },

      keyframes: {

        'border-spin': {
          '0%, 100%': { borderColor: '#3B82F6' },
          '50%': { borderColor: 'gray' },
        },
        'border-spin-dark': {
          '0%, 100%': { borderColor: '#DC2626' },
          '50%': { borderColor: 'white' },
        },

      

        "shine-pulse": {
          "0%": {
            "background-position": "0% 0%",
          },
          "50%": {
            "background-position": "100% 100%",
          },
          to: {
            "background-position": "0% 0%",
          },
        },



        moveToCenter: {
          '0%': { transform: 'translateX(100)', opacity: '0'},
          '50%': { transform: 'translateX(50)', opacity: ' 0.5'},
          '100%': { transform: 'translateX(0)', opacity:'1'},
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(10px)', transform:'translateX(1px)', },
          '50%': { opacity: '0', transform: 'translateY(10px)', transform:'translateX(5px)', },
          '100%': { opacity: '1', transform: 'translateY(0)', transform:'translateX(0px)', },
        },

        bounceIn: {
          '0%': { opacity: '0', transform: 'scale(0.9)' },
          '50%': { opacity: '1', transform: 'scale(1.050)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },

      },
      animation: {
        moveToCenter :'moveToCenter 0.5s east-out',
        fadeInUp: 'fadeInUp 0.5s ease-out',
        bounceIn: 'bounceIn 0.7s ease-out',
        'border-spin': 'border-spin 2.5s linear infinite',
        'border-spin-dark': 'border-spin-dark 2.5s linear infinite',

      },
    },
  },
  plugins: [
    require('tailwind-scrollbar'),

    function({ addUtilities}) {
      const newUtilities = {
        '.text-shadow-neon-2': {
          textShadow: '0 0 7px black,0 0 10px black,0 0 21px black,0 0 42px #0000,0 0 82px red,0 0 92px white,0 0 102px blue,0 0 151px yellow;',
        },
        '.text-shadow-neon-1': {
          textShadow: '0 0 5px #b30000 ',
        },

        
      }
      addUtilities(newUtilities, ['responsive', 'hover'])
    }
  ],
  darkMode: 'class',
}
