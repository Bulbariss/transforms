const { ThemeManager, Theme } = require("tailwindcss-theming/api");

const main = new Theme().setName("light").targetable().addColors({
  background: "#f1f1f1",
  gray200: "#ccc",
  gray300: "#a6a6a6",
  "on-background": "black",
});

const dark = new Theme().setName("dark").targetable().addColors({
  background: "#212121",
  gray200: "#1a1a1a",
  gray300: "#121212",
  "on-background": "white",
});

module.exports = new ThemeManager()
  .setDefaultTheme(main)
  .setDefaultDarkTheme(dark);
