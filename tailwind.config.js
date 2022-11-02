module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        blue: {
          101: "#75cff0",
          102: "#69B9D6",
          103: "#5698B0",
        },
        yellow: {
          101: "#f2d267",
        },
      },
      fontFamily: {
        sans: ["Ruda", "sans-serif"],
        serif: ["Roboto Slab", "serif"],
      },
      backgroundImage: {
        hotelFe: "url('./images/hotelFe.png')",
        hotelBe: "url('./images/hotelBe.png')",
        calendar: "url('./images/calendar.png')",
        devAcademy: "url('./images/sda-fall22-bg.png')",
        weather: "url('./images/weather-app-main.png')",
      },
      height: {
        400: "400px",
        500: "500px",
        600: "600px",
      },
    },
  },
  plugins: [],
};
