module.exports = {
  siteMetadata: {
    title: `CSS Transforms`,
    description: `Playground for CSS transforms.`,
    author: `Vladimir V`,
  },
  plugins: [
    "gatsby-plugin-eslint",
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-jsx`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `CSS Transforms`,
        short_name: `CSS Transforms`,
        lang: `en`,
        start_url: `/`,
        background_color: `#f6f6f6`,
        theme_color: `#333333`,
        display: `minimal-ui`,
        icon: `./src/images/icon.png`,
      },
    },
    {
      resolve: "gatsby-plugin-postcss",
      options: {
        postCssPlugins: [
          require(`tailwindcss`)(`./tailwind.config.js`),
          require(`autoprefixer`),
          require(`cssnano`),
        ],
      },
    },
    {
      resolve: `gatsby-plugin-purgecss`,
      options: {
        tailwind: true,
        whitelistPatterns: [/sym-\d?\d/g],
        purgeOnly: [`src/css/style.css`],
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images",
      },
    },
    // {
    //   resolve: `gatsby-plugin-google-analytics`,
    //   options: {
    //     trackingId: "UA-171683260-1",
    //   },
    // },
    `gatsby-plugin-offline`,
  ],
};
