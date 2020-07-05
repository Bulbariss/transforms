const { ThemeManager, Theme } = require("tailwindcss-theming/api");

const light = new Theme().setName("light").targetable().addColors({
  "grey-900": "#1B1B1B",
  "grey-800": "#2B2B2B",
  "grey-700": "#3D3D3D",
  "grey-600": "#666666",
  "grey-500": "#949494",
  "grey-400": "#C4C4C4",
  "grey-300": "#E0E0E0",
  "grey-200": "#EBEBEB",
  "grey-100": "#F1F1F1",
  "grey-50": "#F6F6F6",
  light: "#fff",
  dark: "#333",
  black: "#000",
  white: "#fff",
});

const dark = new Theme().setName("dark").targetable().addColors({
  "grey-900": "#F6F6F6",
  "grey-800": "#F1F1F1",
  "grey-700": "#EBEBEB",
  "grey-600": "#E0E0E0",
  "grey-500": "#C4C4C4",
  "grey-400": "#949494",
  "grey-300": "#666666",
  "grey-200": "#3D3D3D",
  "grey-100": "#2B2B2B",
  "grey-50": "#1B1B1B",
  light: "#000",
  dark: "#f8f8f8",
  black: "#fff",
  white: "#fff",
});

module.exports = new ThemeManager()
  .setDefaultTheme(light)
  .setDefaultDarkTheme(dark);
