module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        primary:[ 'mono', 'sans']

      },
      colors: {
        'black-ka': {
          DEFAULT:'#181818',
          variant: '#0e0e0e'
        },
        'cyan-ka': {
          DEFAULT:'#0fff',
          variant: '#07baba'
        },
        'gray-ka': {
          DEFAULT:'#4e4e4e'
        },
        'gray-inactive': {
          DEFAULT: '#4E4E4E',
          variant: '#828282'
        },
        'white-ka': {
          DEFAULT: '#fbfbfb'
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
