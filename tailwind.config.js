/** @type {import('tailwindcss').Config} */
module.exports = {
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
        'primBlue': '#393DCF',
        'secBlue': '#140F46',
        'triBlue': '#433D5C',
        'darkBlue': '#11225B',
        'primGray': '#EAECF2',
        'secGray': '#D0D6E7',
      },
    },
  },
  plugins: [],
}
