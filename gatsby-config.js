module.exports = {
  siteMetadata: {
    title: 'Gatsby Contentful starter',
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
      resolve: 'gatsby-source-covid19',
      options: {
        countries: [{ iso2: 'USA' }, { iso2: 'DE' }],
      },
    },
  ],
}
