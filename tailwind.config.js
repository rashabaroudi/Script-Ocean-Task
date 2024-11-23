/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {

      colors: {
        slate: '#F3F3FF',
        semiBlack:'#21212B',
        portfolio:'#69A5A4',
      },
    },
    fontFamily:{
      manrope :["Manrope"],
     manuale:[ "Manuale"],
      },
      animation:{
        safelist: ['animate-[fade-in_1s_ease-in-out]', 'animate-[fade-in-down_1s_ease-in-out]']
      },
  },
  plugins: [],
}

