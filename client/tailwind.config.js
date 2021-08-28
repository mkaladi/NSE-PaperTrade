module.exports = {
  mode: 'jit',
  purge: [
    './index.html',
    './src/**/*.vue',
    './src/**/*.js',
    './src/**/*.{vue,js,ts,jsx,tsx}',
  ],
  darkMode: true, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
