import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [ require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
          

 
          "primary": "#22c55e",
                    
          
           
          "secondary": "#4ade80",
                    
          
           
          "accent": "#86efac",
                    
          
           
          "neutral": "#22c55e",
                    
          
           
          "base-100": "#f3f4f6",
                    
          
           
          "info": "#44403c",
                    
          
           
          "success": "#00c858",
                    
          
           
          "warning": "#ef4444",
                    
          
           
          "error": "#ef4444",
                    },
      },
    ],
  },
}
export default config
