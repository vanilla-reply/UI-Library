const defaultTheme = require("tailwindcss/defaultTheme");
const { colors } = require("tailwindcss/defaultTheme");

module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: ["./public/**/*.html", "./src/**/*.vue"],
  darkMode: false, // or 'media' or 'class',
  theme: {
    fontFamily: {
      sans: ["Inter", ...defaultTheme.fontFamily.sans],
    },
    extend: {
      colors: {
        primary: colors.blue,
        secondary: colors.green,
        inactive: colors.grey,
        success: colors.green,
        danger: colors.red,
        link: colors.yellow,
      },
    },
  },
};
