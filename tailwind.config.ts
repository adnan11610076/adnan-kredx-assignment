import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      container:{
        center:true,
        padding:"15px"
      },
      colors:{
        seagreen:"rgba(35, 154, 153, 1)",
        white:"rgba(255, 255, 255, 1)",
      },

   

    },
  },
  plugins: [],
}
export default config
