module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    backgroundColor:theme=>({
      black:'#282133',
      white:'white',
      green:"#31d17983"
    }),
    textColor:{
      primary:'#282133'
  }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
