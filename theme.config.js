const { ThemeManager, Theme } = require("tailwindcss-theming/api");

const light = new Theme().setName("light").targetable().addColors({
  background: "#f1f1f1",
  "test-100": "#ccc",
  "test-200": "#a6a6a6",
  "on-background": "black",
});

const dark = new Theme().setName("dark").targetable().addColors({
  background: "#212121",
  "test-100": "#1a1a1a",
  "test-200": "#121212",
  "on-background": "white",
});

module.exports = new ThemeManager()
  .setDefaultTheme(light)
  .setDefaultDarkTheme(dark);
