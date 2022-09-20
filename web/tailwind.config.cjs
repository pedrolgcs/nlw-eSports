/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      sans: ['Inter', 'sans-serif'],
    },
    extend: {
      backgroundImage: {
        galaxy: 'url(/images/background-galaxy.png)',
        'game-gradient':
          'linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.9) 67.08%)',
      },
    },
    linearBorderGradients: () => ({
      colors: {
        'nwl-gradient': ['#9572FC', '#43E7AD', '#E1D55D'],
      },
    }),
  },
  plugins: [require('tailwindcss-border-gradients')()],
};
