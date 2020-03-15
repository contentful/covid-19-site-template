import React from 'react'
import '../styles/tailwind.css'
import Stat from './stat'
import TagList from './tagList'
import FeaturedArticles from './featuredArticles'
import ArticleTeaserList from '../components/articleTeaserList'
import { Link, useStaticQuery, graphql } from 'gatsby'
export default ({ children }) => {
  const { stats, teasers, tags, featuredArticles } = useStaticQuery(graphql`
    {
      stats: allCovid19CountrySummary {
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
  `)
  return (
    <>
      <header className="relative pb-24 bg-indigo-500">
        <div className="p-8 flex flex-wrap items-center justify-center container mx-auto max-w-screen-xl">
          {stats.nodes.map(summary => (
            <Stat summary={summary} />
          ))}
        </div>
        <svg
          preserveAspectRatio="none"
          width="1440"
          height="74"
          viewBox="0 0 1440 74"
          className="fill-current text-white absolute bottom-0 w-full"
        >
          <path d="M456.464 0.0433865C277.158 -1.70575 0 50.0141 0 50.0141V74H1440V50.0141C1440 50.0141 1320.4 31.1925 1243.09 27.0276C1099.33 19.2816 1019.08 53.1981 875.138 50.0141C710.527 46.3727 621.108 1.64949 456.464 0.0433865Z"></path>
        </svg>
      </header>
      <div className="flex flex-wrap px-16 py-24 container max-w-screen-xl mx-auto">
        <div className="w-full md:w-2/3">
          <ArticleTeaserList teasers={teasers.nodes} />
        </div>
        <div className="w-full md:w-1/3">
          <TagList tags={tags.nodes} />
          <FeaturedArticles featuredArticles={featuredArticles.nodes[0].blogPosts} />
        </div>
      </div>
    </>
  )
}
