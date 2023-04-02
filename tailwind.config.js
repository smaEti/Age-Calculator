/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    container:{
      center : true,
    },
    extend: {
      fontFamily: {
        'Poppins-bold' : './assets/fonts/Poppins-ExtraBold.ttf',
        'Poppins' : ['Poppins','sans-serif'],
      },
      // TODO: border rounded full doesn't work
      borderRadius:{
        'full' : '50%',
        'notFull' : '36%',
      },
      padding: {
          '13': '3.4rem',
      },
      margin:{
        '13' : '3.4rem',
      },
      height :{
        '18' : '4.4rem',
      },
      spacing:{
        '14' : '3.4rem',
        '38' : '9.5rem',
      },
      colors :{
        'smokeygray' : '#716f6f',
        'primary': '#854dff',
        'lightGray': '#716f6f',
        'backprime' : '#dbdbdb',
      }
    },
  },
  plugins: [],
};