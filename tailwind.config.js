module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {

    fontFamily:{
      'body':['Poppins','sans-serif'] 
    },
    extend: {
      colors: {
        'black-ka': {
          DEFAULT: '#181818',
          variant: '#0e0e0e'
        },
        'cyan-ka': {
          DEFAULT: '#00ffff',
          variant: '#07baba'
        },
        'gray-ka': {
          DEFAULT: '#4e4e4e',
          variant: '#0e0e0e'
        },
        'gray-inactive': {
          DEFAULT: '#4E4E4E',
          variant: '#828282'
        },
        'white-ka': {
          DEFAULT: '#fbfbfb'
        },
        'error-ka': {
          DEFAULT: '#f95249'
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
