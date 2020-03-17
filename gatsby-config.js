require('dotenv').config()

module.exports = {
  siteMetadata: {
    title: 'Stop the Covid-19 Spread',
    titleTemplate: 'stop-the-spread.dev',
    description: 'This solution enables organizations to quickly and easily publish a website. We hope to help communities stay better informed and connected in the midst of closures and quarantine.',
    pathname: 'https://stop-the-spread.dev',
    siteLanguage: 'english',
    siteLocale: 'en-US',
    twitterUsername: 'contentful'

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
