module.exports = {
  siteMetadata: {
    homeTitle: "Home: title from siteMetadata",
    aboutTitle: "About: title from siteMetadata",
    contactTitle: "Contact: title from siteMetadata",
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
  ],
}
