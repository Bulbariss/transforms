module.exports = {
  purge: [],
  theme: {
    extend: {
      colors: {
        gray: {
          "100": "#f5f5f5",
          "200": "#eeeeee",
          "300": "#e0e0e0",
          "400": "#999999",
          "500": "#9e9e9e",
          "600": "#757575",
          "700": "#616161",
          "800": "#424242",
          "900": "#212121",
        },
        indigo: {
          "100": "#F0F7FF",
          "200": "#E2EFFF",
          "300": "#C4DBFD",
          "400": "#A1BDFA",
          "500": "#89A3F7",
          "600": "#6C83EA",
          "700": "#5966D9",
          "800": "#4C4EA4",
          "900": "#42417B",
          "1000": "#3A3462",
        },
        coolGray: {
          "050": "#F5F7FA",
          "100": "#E4E7EB",
          "200": "#CBD2D9",
          "300": "#9AA5B1",
          "400": "#7B8794",
          "500": "#616E7C",
          "600": "#52606D",
          "700": "#3E4C59",
          "800": "#323F4B",
          "900": "#1F2933",
        },
        red: {
          "050": "#FFF7F7",
          "100": "#FCE7E9",
          "200": "#FBD5D4",
          "300": "#F7B1B1",
          "400": "#F19394",
          "500": "#E75E5E",
          "600": "#DA3939",
          "700": "#B41E1F",
          "800": "#9B1314",
          "900": "#880F10",
        },
      },
      screens: {
        xxl: "1440px",
      },
      height: {
        "h-14": "3.5rem",
        "h-96": "24rem",
      },
      fontFamily: {
        sans: [
          "iAWriterDuospace",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "Arial",
          "Noto Sans",
          "sans-serif",
          "Apple Color Emoji",
          "Segoe UI Emoji",
          "Segoe UI Symbol",
          "Noto Color Emoji",
        ],
      },
      borderRadius: {
        sd: "0.3125rem",
        xl: "0.75rem",
      },
    },
  },
  variants: {},
  plugins: [require("tailwindcss-theming"), require("autoprefixer")],
  corePlugins: {
    container: false,
  },
};
