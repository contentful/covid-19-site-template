require('dotenv').config()

module.exports = {
  siteMetadata: {
    title: 'Gatsby Contentful CoVid Template',
  },
  plugins: [
    'gatsby-transformer-remark',
    'gatsby-transformer-sharp',
    'gatsby-plugin-react-helmet',
    `gatsby-plugin-postcss`,
    {
      resolve: `gatsby-plugin-purgecss`,
      options: {
        tailwind: true,
        purgeOnly: ['src/styles/tailwind.css'],
      },
    },
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-source-mathdroid-covid19',
      options: {
        countries: [{ iso2: 'DE' }],
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CF_COVID_SPACE_ID,
        accessToken: process.env.CF_COVID_ACCESS_TOKEN,
      },
    },
  ],
}
