module.exports = {
  content: ["./public/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'body': '#17171F',
        'selected-text': '#A3A3FF',
        'theme': '#3F3FFF',
        'nav': '#404053',
        'secondary': '#9191A4',
        'badge': '#3F3F51',
        'input-border': '#565666',
        'input': '#2A2A35'
      }
    },
    fontFamily: {
      poppins: ['Poppins', 'sans-serif'],
      raleway: ['Raleway', 'sans-serif']
    },
    container: {
      center: true,
      padding: "1rem",
      screens: {
        lg: "1124px",
        xl: "1124px",
        "2xl": "1124px",
      }
    },
  },
  plugins: [],
}