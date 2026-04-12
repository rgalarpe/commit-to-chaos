import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'media', // automatic based on system preference
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ], 
  theme: {
  extend: {
    colors: {
      background: 'rgb(var(--background-rgb) / <alpha-value>)',
      foreground: 'rgb(var(--foreground-rgb) / <alpha-value>)',
    },
  },
},
  plugins: [require('daisyui')],
  daisyui: {
    themes: ['synthwave'],
  },
}

export default config