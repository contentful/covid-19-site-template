import React from 'react'
import '../styles/tailwind.css'
import Stat from './stat'
import TagList from './tagList'
import FeaturedArticles from './featuredArticles'
import { useStaticQuery, graphql } from 'gatsby'
import Nav from './nav'
export default ({ children }) => {
  const { stats, tags, featuredArticles } = useStaticQuery(graphql`
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
      <header className="relative">
        <Nav />
      </header>
      <div role="banner" className="h-64 bg-blue-500"></div>
      <main className="flex flex-wrap bg-white shadow-lg container max-w-screen-xl mx-auto -m-48">
        <section className="w-full pt-8 px-6 md:w-2/3">{children}</section>
        <aside className="w-full px-6 bg-gray-100 md:w-1/3">
          <TagList tags={tags.nodes} />
          <FeaturedArticles
            featuredArticles={featuredArticles.nodes[0].blogPosts}
          />
          {stats.nodes.map(summary => (
            <Stat summary={summary} />
          ))}
        </aside>
      </main>
    </>
  )
}
