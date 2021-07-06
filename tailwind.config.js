module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        primary:[ 'mono', 'sans']

      },
      colors: {
        'cyan-kodemiapp': {
          DEFAULT:'#0fff'
        },
        'gray-kodemiapp': {
          DEFAULT:'#181818'
        },
        'gray-inactive': {
          DEFAULT: '#4E4E4E'
        }
      },
      screens: {
        'xs': {'max': '640px', 'min': '350px'}
      }
    },
  },
  variants: {
    extend: {
      
    },
  },
  plugins: [],
}
