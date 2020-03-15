import React from 'react'
import Layout from '../components/layout'
import ArticleTeaserList from '../components/articleTeaserList'
import { graphql, Link } from 'gatsby'

export default ({ data }) => (
  <Layout stats={data.allCovid19CountrySummary.nodes} tags={data.tags.nodes} featuredArticles={data.featuredArticles.nodes[0].blogPosts} >
    <h1 className="uppercase text-xl semi-bold">Recently Published</h1>
    <ArticleTeaserList teasers={data.teasers.nodes} />
  </Layout>
)

export const query = graphql`
  {
    allCovid19CountrySummary {
      nodes {
        country
        lastUpdate(fromNow: true)
        deaths
        confirmed
        recovered
      }
    }
    teasers: allContentfulBlogPost {
      nodes {
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
    tags: allContentfulTag {
      nodes {
        name
        slug
        contentful_id
      }
    }
    featuredArticles: allContentfulFeaturedBlogPosts {
      nodes {
        blogPosts {
          slug
          title
        }
      }
    }
  }
`
