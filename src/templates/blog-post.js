import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import RichTextRenderOptions from '../utils/rich-text-render-options'
export default ({ data }) => {
  return (
    <Layout>
      <h2 className="text-3xl semi-bold">{data.contentfulBlogPost.title}</h2>
      <div className="mt-8">
        {documentToReactComponents(
          data.contentfulBlogPost.body.json,
          RichTextRenderOptions
        )}
      </div>
    </Layout>
  )
}

export const query = graphql`
  query getBlogPost($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      body {
        json
      }
      title
      updatedAt
    }
  }
`
