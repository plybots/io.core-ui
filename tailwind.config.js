const defaultTheme = require('tailwindcss/defaultTheme');
const sans = [
  'Roboto',
  'system-ui',
  '-apple-system',
  'Lucida Sans',
  'Lucida Sans Regular',
  'Lucida Grande',
  'Lucida Sans Unicode',
  'BlinkMacSystemFont',
  'Roboto',
  'Geneva',
  'Verdana',
  'sans-serif',
];
const serif = [
  'Roboto',
  'ui-serif',
  'Georgia',
  'Cambria',
  'Times New Roman',
  'Times',
  'serif',
];

module.exports = {
  presets: [
    require('./node_modules/@plydot/ui-components/tailwind-workspace-preset.js')
  ],
  content: [
    "./src/**/*.{js,jsx}",
    "./node_modules/@plydot/ui-components/*.{js,jsx}",
    "!./node_modules/@plydot/ui-components/tailwind-workspace-preset.js",
  ],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        headline: sans,
        body: serif,
        sans,
        serif,
        mono: [...defaultTheme.fontFamily.mono],
      },
    },
  },
  theme: {
    extend: {},
  },
  plugins: [],
}
