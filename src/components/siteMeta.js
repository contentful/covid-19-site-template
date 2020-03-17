import React from 'react'
import SEO from 'react-seo-component'
import { graphql, useStaticQuery } from 'gatsby'

const query = graphql`
  query siteMeta {
    site {
      siteMetadata {
        title
        titleTemplate
        description
        pathname
        siteLanguage
        siteLocale
        twitterUsername
      }
    }
  }
`

const SiteMeta = (props) => {
  const data = useStaticQuery(query)
  const { site: { siteMetadata } } = data

  return (
    <SEO
      title={siteMetadata.title}
      description={siteMetadata.description}
      pathname={props.pathname || siteMetadata.pathname}
      titleTemplate={siteMetadata.titleTemplate}
      siteLanguage={siteMetadata.language}
      siteLocale={siteMetadata.siteLocale}
      twitterUsername={siteMetadata.twitterUsername}
      {...props}
    />
  )
}

export default SiteMeta