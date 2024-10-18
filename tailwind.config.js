const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          light: "#7c3aed", // Light purple
          DEFAULT: "#6d28d9", // Default purple (used for primary)
          dark: "#4c1d95", // Dark purple
        },
        secondary: {
          light: "#f87171", // Light red
          DEFAULT: "#ef4444", // Default red (used for secondary)
          dark: "#b91c1c", // Dark red
        },
        neutral: {
          light: "#d1d5db", // Light gray
          DEFAULT: "#6b7280", // Default gray
          dark: "#374151", // Dark gray
        },
      },
    },
  },
  plugins: [],
});
