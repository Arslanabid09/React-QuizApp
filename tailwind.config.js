/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        slideIn: {
          '0%': { transform: 'translateX(-100px)', opacity: 0 },
          '100%': { transform: 'translateX(0)', opacity: 1 },
        },
        slideup: {
          '0%': { transform: 'translateY(100px)', opacity: 0 },  
          '30%': { transform: 'translateY(-20px)', opacity: 1 }, 
                   '50%': { transform: 'translateY(10px)' },              
                    '70%': { transform: 'translateY(-5px)' },              
                    '100%': { transform: 'translateY(0)', opacity: 1 },    
        },
      },
      animation: {
        fadeIn: 'fadeIn 1.5s ease-in-out forwards',
        slideIn: 'slideIn 1s ease-in-out forwards',
        slideup: 'slideup 2s ease-in forwards',
      },
    },
  },
  plugins: [],
}
