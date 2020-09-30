const { string } = require("prop-types");

module.exports = {
  siteMetadata: {
    title: `American Made Grills`,
    description: `American Made Grills`,
    author: `Shyft Creative`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-fontawesome-css`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/logo-orange.png`,
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-169809812-2",
      },
    }, {
      resolve: 'gatsby-plugin-mailchimp',
      options: {
        endpoint: 'https://summersetgrills.us10.list-manage.com/subscribe/post?u=ecd8eb3194fa34b9f05d1293e&amp;id=84262d4220', // string; add your MC list endpoint here; see instructions below
        timeout: 3500, // number; the amount of time, in milliseconds, that you want to allow mailchimp to respond to your request before timing out. defaults to 3500
      },
    },
  ],
}
