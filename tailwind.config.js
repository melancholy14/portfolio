/* eslint-disable no-undef */
module.exports = {
  theme: {
    extend: {
      colors: {
        // purple: '#5a31c5',
        // 'persian-indigo': '#311a7f',
        // aliceblue: '#eff7ff',
        // turquoise: '#16e3d5',
        // 'light-skyblue': '#86c1ff',
        // eclipse: '#404040',
        // skyblue: '#d4e9ff',
        // 'dodger-blue': '#0e84fe',
        // pink: '#ffbdd0',
        // 'brink-pink': '#ff5b8a',
        // amaranth: '#d92256',
        // 'dim-gray': '#737373',
        // 'dim-black': 'rgba(0, 0, 0, 0.5)',
        // dandelion: '#ffd968',
        // tenne: '#b95500',
        // lightseagreen: '#0fb5a9',
        // lightcyan: '#d1fffc',
      },
      borderRadius: {
        large: '1rem',
        huge: '1.5rem',
        gigantic: '2.5rem',
      },
      width: {
        11: '2.75rem',
        13: '3.25rem',
        14: '3.5rem',
        28: '7rem',
        72: '18rem',
        80: '20rem',
        84: '21rem',
        92: '23rem',
        max: 'max-content',
      },
      minWidth: {
        80: '20rem',
      },
      maxWidth: {
        '2xs': '12.5rem',
        // '5/6': `${(5 / 6) * 100}%`,
        // '11/12': `${(11 / 12) * 100}%`,
      },
      height: {
        11: '2.75rem',
        13: '3.25rem',
        14: '3.5rem',
        36: '9rem',
        44: '11rem',
        // 'full-6': 'calc(100% - 1.5rem)',
        // 'full-24': 'calc(100% - 6rem)',
        // 'full-36': 'calc(100% - 9rem)',
        fit: 'fit-content',
      },
      minHeight: {
        44: '11rem',
      },
      transitionProperty: {
        float: 'float',
        visibility: 'visibility',
        width: 'width',
      },
      boxShadow: {
        // skyblue: '0 2px 40px 0 rgba(14, 132, 254, 0.04)',
        // 'skyblue-200': '0 2px 16px 0 rgba(14, 132, 254, 0.2)',
      },
      inset: {
        6: '1.5rem',
        14: '3.5rem',
      },
    },
  },
  variants: {
    // padding: ['odd', 'even'],
    // margin: ['odd', 'even'],
    // borderRadius: ['first', 'last'],
    // opacity: ['disabled'],
  },
  plugins: [],
  purge: {
    enabled: false,
    content: ['./src/**/*.html', './src/**/*.jsx', './src/**/*.js'],
  },
};
