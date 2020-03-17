import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import TimeTag from '../components/timeTag'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import RichTextRenderOptions from '../utils/rich-text-render-options'
import SEO from 'react-seo-component'

export default ({ data }) => {
  return (
    <Layout>
      <SEO
        title={data.contentfulBlogPost.title}
        titleTemplate={`Stop the covid-19 spread`}
        description={data.contentfulBlogPost.teaser.teaser}
        image={image}
        pathname={siteUrlPlusSlug}
        siteLanguage={siteLanguage}
        siteLocale={siteLocale}
        twitterUsername={twitterUsername}
        author={authorName}
        article={true}
        publishedDate={createdDate}
        modifiedDate={updatedDate}
      />
      <h1 className="text-3xl semi-bold mb-4">
        {data.contentfulBlogPost.title}
      </h1>
      <TimeTag time={data.contentfulBlogPost.updatedAt} />
      <figure className="mb-8">
        <img
          src={
            data.contentfulBlogPost.heroImage &&
            data.contentfulBlogPost.heroImage.file.url
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

export const query = graphql`
  query getBlogPost($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      body {
        json
      }
<<<<<<< HEAD
      heroImage {
        title
        file {
          url
        }
=======
      teaser {
        teaser
>>>>>>> feat: Add SEO component
      }
      title
      updatedAt(formatString: "DD MMM YYYY")
    }
  }
`
