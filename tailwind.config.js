const plugin = require('tailwindcss/plugin');
const flattenColorPalette = require('tailwindcss/lib/util/flattenColorPalette').default;

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  mode: 'jit',
  theme: {
    extend: {
      colors: {
        cpBeige: '#EDE5D8',
        cpGreen: '#5A8065',
        cpYellow: '#D7BC8D',
        cpRed: '#FF6250',
        cpDark: '#2D2D2D',
        caOrange: '#D49A82',
      },
      fontFamily: {
        qtBasker: ['QT Basker'],
        poppins: ['Poppins'],
        mulish: ['Mulish'],
      },
      fontSize: {
        '12xl': '12rem',
        '24xl': '24rem',
      },
    },
  },
  plugins: [
    plugin(({ matchUtilities, theme }) => {
      matchUtilities(
        {
          'text-stroke-color': (value) => {
            return { WebkitTextStrokeColor: value };
          },
        },
        { values: flattenColorPalette(theme('colors')) }
      );
    }),
  ],
};
