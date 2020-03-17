import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import TimeTag from '../components/timeTag'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import RichTextRenderOptions from '../utils/rich-text-render-options'
export default ({ data }) => {
  return (
    <Layout>
      <h1 className="text-3xl semi-bold mb-4">{data.contentfulBlogPost.title}</h1>
      <TimeTag time={data.contentfulBlogPost.updatedAt} />
      <figure className="mb-8">
        <img src={data.contentfulBlogPost.heroImage && data.contentfulBlogPost.heroImage.file.url} />
      </figure>
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
      heroImage {
        title
        file {
          url
        }
      }
      title
      updatedAt(formatString: "DD MMM YYYY")
    }
  }
`
