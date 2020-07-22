/* eslint-disable no-undef */
module.exports = {
  theme: {
    container: {
      center: true,
    },
    extend: {
      fontFamily: {
        pro: 'Source Sans Pro',
        sriracha: 'Sriracha',
      },
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
        '33/20': `${1.65 * 100}%`,
        '7/4': `${1.75 * 100}%`,
      },
      height: {
        '1/2': '50%',
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
        '1/50': `${(1 / 50) * 100}%`,
        '1/3': `${(1 / 3) * 100}%`,
        '1/2': `${(1 / 2) * 100}%`,
      },
      margin: {
        '4/33': `${(4 / 33) * 100}%`,
        '1/4': `${(1 / 4) * 100}%`,
        '1/3': `${(1 / 3) * 100}%`,
        '1/2': `${(1 / 2) * 100}%`,
        '2/5': `${(2 / 5) * 100}%`,
        '3/5': `${(3 / 5) * 100}%`,
      },
      padding: {
        '1/20': `${(1 / 20) * 100}%`,
        '1/14': `${(1 / 14) * 100}%`,
        '1/11': `${(1 / 11) * 100}%`,
        '1/4': `${(1 / 4) * 100}%`,
        '1/3': `${(1 / 3) * 100}%`,
      },
      opacity: {
        95: 0.95,
      },
    },
  },
  variants: {
    margin: ['responsive'],
  },
  plugins: [],
  // purge: {
  //   enabled: true,
  //   content: ['./src/**/*.html', './src/**/*.tsx', './src/**/*.ts'],
  // },
};
