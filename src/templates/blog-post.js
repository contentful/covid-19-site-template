import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import TimeTag from '../components/timeTag'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import RichTextRenderOptions from '../utils/rich-text-render-options'
import SiteMeta from '../components/siteMeta'

const BlogPost = ({ data }) => {
  return (
    <Layout>
      <SiteMeta
        title={data.contentfulBlogPost.title}
        description={data.contentfulBlogPost.teaser.teaser || ''}
        image={`https:${data.contentfulBlogPost.heroImage.file.url}`}
        pathname={`https://stop-the-spread.dev/${data.contentfulBlogPost.slug}`}
        article={true}
      />
      <h1 className="text-3xl semi-bold mb-4">
        {data.contentfulBlogPost.title}
      </h1>
      <TimeTag time={data.contentfulBlogPost.updatedAt} />
      <figure className="mb-8">
        <img
          src={
            data.contentfulBlogPost.heroImage &&
            `${data.contentfulBlogPost.heroImage.file.url}?w=630&h=310&fit=thumb`
          }
        />
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

export default BlogPost

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
      teaser {
        teaser
      }
      title
      slug
      updatedAt(formatString: "DD MMM YYYY")
    }
  }
`
