import React from 'react'
import Layout from '../components/layout'
import { graphql } from 'gatsby'
import ArticleTeaserList from '../components/articleTeaserList'
import SEO from 'react-seo-component'

export default ({ data }) => (
  <Layout>
    <SEO
      title={`Stop the covid-19 spread`}
      titleTemplate={`stop-the-spread.dev`}
      description={`This solution enables organizations to quickly and easily publish a website. We hope to help communities stay better informed and connected in the midst of closures and quarantine.`}
      pathname={`https://stop-the-spread.dev`}
      siteLanguage={`english`}
      siteLocale={`en-US`}
      twitterUsername={`contentful`}
    />
    <ArticleTeaserList teasers={data.allContentfulBlogPost.nodes} />
  </Layout>
)

export const query = graphql`
  {
    allContentfulBlogPost {
      nodes {
        author {
          name
          contentful_id
        }
        title
        teaser {
          teaser
        }
        heroImage {
          title
          file {
            url
          }
        }
        slug
        createdAt(formatString: "DD MMM YYYY")
      }
    }
  }
`
