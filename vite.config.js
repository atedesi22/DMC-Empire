import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dmc: {
          dark: '#1A0F0D',    // Chocolat profond
          gold: '#AA7C11',    // Or Bronze
          goldLight: '#D4AF37', // Or éclatant
          cream: '#FDF5E6',   // Crème/Champagne
        }
      },
      fontFamily: {
        serif: ['"Merriweather"', 'serif'],
        sans: ['"Inter"', 'sans-serif'],
      },
      animation: {
        'float-slow': 'float 6s ease-in-out infinite',
        'float-delayed': 'float 6s ease-in-out 3s infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        }
      }
    },
  },
  plugins: [react(),
     tailwindcss()
  ],
}
