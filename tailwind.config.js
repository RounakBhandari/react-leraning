const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        neutralWhite: "#FFFFFF",
        lightGray: "#F2F2F2",
        softPeach: "#FFE5B4",
        mintGreen: "#D4F1C5",
        lightBeige: "#F5F5DC",
        softBrown: "#D3B8AE",
        lightYellow: "#FFF8DC",
        sageGreen: "#C1DAB2",
        darkCharcoal: "#333333",
        black: "#000000",
      },
    },
  },
  plugins: [],
});
