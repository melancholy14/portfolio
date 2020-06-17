/* eslint-disable no-undef */
module.exports = {
  theme: {
    extend: {
      borderRadius: {
        xl: '1rem',
        '2xl': '1.5rem',
        '3xl': '2.5rem',
      },
      width: {
        13: '3.25rem',
        14: '3.5rem',
        15: '3.75rem',
        17: '4.25rem',
        18: '4.5rem',
        19: '4.75rem',
        80: '20rem',
        84: '21rem',
        88: '22rem',
        92: '23rem',
        120: '30rem',
        '12/25': `${(12 / 25) * 100}%`,
      },
      height: {
        13: '3.25rem',
        14: '3.5rem',
        15: '3.75rem',
        17: '4.25rem',
        18: '4.5rem',
        19: '4.75rem',
      },
      transitionProperty: {
        visibility: 'visibility',
        width: 'width',
      },
      inset: {
        4: '1rem',
        8: '2rem',
        80: '20rem',
        84: '21rem',
        '1/50': '2%',
        '1/3': '33%',
        '1/2': '50%',
      },
      padding: {
        '1/20': '5%',
        '1/14': '7%',
        '3/33': '9%',
        '5/33': '15%',
        '1/4': '25%',
      },
      margin: {
        '5/33': '15%',
      },
      fontSize: {
        '11/12': `${(11 / 12) * 100}%`,
      },
      rotate: {
        '-15': '-15deg',
        '15': '15deg',
      },
    },
  },
  variants: {
    margin: ['responsive'],
  },
  plugins: [],
  // purge: {
  //   enabled: false,
  //   content: ['./src/**/*.html', './src/**/*.tsx', './src/**/*.ts'],
  // },
};
