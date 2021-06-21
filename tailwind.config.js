module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "blue-lighter": "#1E213A",
        "blue-dark": "#100E1D",
        "light-gray": "#6E707A",
        "progress-bar": "#FFEC65",
      },
      backgroundImage: {
        "cloud-image": "url('/src/images/cloud-bg.png')",
        dashboard: "url('/src/images/wallpaper/LightRain.jpg')",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
