import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import ArticleTeaserList from '../components/articleTeaserList'
import SiteMeta from '../components/siteMeta'

export default ({ data }) => {
  return (
    <Layout>
      <SiteMeta />

      <ArticleTeaserList teasers={data.allContentfulBlogPost.nodes} />
    </Layout>
  )
}

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
