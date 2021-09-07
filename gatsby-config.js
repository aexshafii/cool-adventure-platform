/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: "Simply Recipes",
    description: "hello",
    author: "@alexshafii",
    person: { name: "alex", age: 28 },
    simpleData: ["item 1", "item 2"],
    complexData: [
      { name: "john", age: 12 },
      { name: "alex", age: 28 },
    ],
  },
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`, // Needed for dynamic images
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `bapkyyx4dp18`,
        // Learn about environment variables: https://gatsby.dev/env-vars
        accessToken: process.env.CONTENTFUL_API_KEY,
      },
    },
  ],
}
