/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        textDown: {
          '0%': { transform: 'translateY(0)', opacity: '0' },
          '100%': { transform: 'translateY(100%)', opacity: '1' },
        },
      },
      animation: {
        textDown: 'textDown 1s ease-out',
      },
    },
  },
  plugins: [],
}

