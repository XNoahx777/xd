/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        yellow: {
          50: '#FFFAEB',
          100: '#FFF3C4',
          200: '#FFEA99',
          300: '#FFE070',
          400: '#FFD94D',
          500: '#FFD100', // Primary yellow
          600: '#E6B800',
          700: '#B38F00',
          800: '#806600',
          900: '#4D3D00',
        },
        navy: {
          50: '#E6EBF4',
          100: '#CCD7E9',
          200: '#99AFD3',
          300: '#6687BD',
          400: '#335FA7',
          500: '#003791',
          600: '#002F7A',
          700: '#001F4D',
          800: '#001233',
          900: '#000C22', // Darker navy
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', '"Open Sans"', '"Helvetica Neue"', 'sans-serif'],
        heading: ['Poppins', 'system-ui', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', '"Open Sans"', '"Helvetica Neue"', 'sans-serif'],
      },
      boxShadow: {
        'lg': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        'xl': '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
        '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
      },
    },
  },
  plugins: [],
};