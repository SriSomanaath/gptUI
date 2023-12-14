import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        buttonBackground: '#ff4820',
        appBackgroundFrom: "#27a6d0",
        appBackgroundTo: "#021731",
        textGradientStart: "#ad67f9",
        textGradientVia: "#d17faf",
        textGradientFrom: "#f1966c",
        contentTextColor:"#81afdd",
        inputBoxColor:"#052d56"
      }
    },
  },
  plugins: [],
}
export default config
