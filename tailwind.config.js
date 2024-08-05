/* eslint-disable @typescript-eslint/no-var-requires */

/** @type {import('tailwindcss').Config} */
const colors = require('./src/constant/colors');

export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      height: {
        'calc-100-minus-200': 'calc(100% - 200px)',
      },
      colors: colors,
      screens: {
        xs: '380px',
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px',
      },
    },
  },
  plugins: [require('@headlessui/tailwindcss')],
};
