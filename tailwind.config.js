module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      animation: {
        btnMoveUpAnimation: 'btnMoveUp 500ms ease-in',
        btnMoveDownAnimation: 'btnMoveDown 500ms ease-in',
      },
      keyframes: {
        btnMoveUp: {
          '0%': {
            transform: 'translateY(200px)',
            opacity: '0',
          },
          '100%': {
            transform: 'translateY(0px)',
            opacity: '1',
          },
        },

        btnMoveDown: {
          '0%': {
            transform: 'translateY(0px)',
            opacity: '1',
          },
          '100%': {
            transform: 'translateY(200px)',
            opacity: '0',
          },
        },
      },
    },
  },
  plugins: [],
};
