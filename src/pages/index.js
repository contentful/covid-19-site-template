import React from 'react'
import Layout from '../components/layout'
import { graphql } from 'gatsby'
import ArticleTeaserList from '../components/articleTeaserList'

export default ({ data }) => (
  <Layout>
    <ArticleTeaserList teasers={data.allContentfulBlogPost.nodes} microcopies={data.microcopies.nodes} />
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

    microcopies: allContentfulMicrocopy {
      nodes {
        key
        value
      }
    }
  }
`
