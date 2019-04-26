module.exports = {
  siteMetadata: {
    homeTitle: "Home: title from siteMetadata",
    aboutTitle: "About: title from siteMetadata",
    contactTitle: "Contact: title from siteMetadata",
  },
  // Many sites are hosted at something other than the root of their domain.
  // So these sites need a prefix added to all paths on the site. For more 
  // details, go to the https://www.gatsbyjs.org/docs/path-prefix/
  pathPrefix: `/gatsby-site-demo`,
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
