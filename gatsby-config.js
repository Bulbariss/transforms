module.exports = {
  siteMetadata: {
    title: `CSS Transforms`,
    description: `Playground for CSS transforms.`,
    author: `Vladimir V`,
    siteUrl: "https://plvs.ru",
  },
  plugins: [
    "gatsby-plugin-eslint",
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-jsx`,
    `gatsby-plugin-sitemap`,
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
        purpose: "any maskable",
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
    `gatsby-plugin-offline`,
  ],
};
