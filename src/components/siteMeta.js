import React from 'react'
import SEO from 'react-seo-component'
import { graphql, useStaticQuery } from 'gatsby'

const query = graphql`
  {
    siteMetadata: allContentfulSiteMetadata {
      nodes {
        siteTitle
        description
        pathname
        titleTemplate
        siteLanguage
        siteLocale
        twitterUsername
      }
    }
  }
`

const SiteMeta = (props) => {
  const data = useStaticQuery(query)
  const siteMetadata = data.siteMetadata.nodes[0]

  return (
    <SEO
      title={siteMetadata.siteTitle}
      description={siteMetadata.description}
      pathname={props.pathname || siteMetadata.pathname}
      titleTemplate={siteMetadata.titleTemplate}
      siteLanguage={siteMetadata.siteLanguage}
      siteLocale={siteMetadata.siteLocale}
      twitterUsername={siteMetadata.twitterUsername}
      {...props}
    />
  )
}

export default SiteMeta
