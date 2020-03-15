import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import ArticleTeaserList from '../components/articleTeaserList'

export default ({ data }) => (
  <Layout>
    <h2>Blog Post</h2>
    <ArticleTeaserList teasers={data.contentfulTag.blog_post || []} />
  </Layout>
)

export const query = graphql`
  query getTag($slug: String!) {
    contentfulTag(slug: { eq: $slug }) {
      blog_post {
        author {
          name
          contentful_id
        }
        title
        teaser {
          teaser
        }
        slug
        createdAt
      }
    }
  }
`
