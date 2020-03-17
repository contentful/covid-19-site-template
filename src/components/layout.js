import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import '../styles/tailwind.css'
import Stat from './stat'
import TagList from './tagList'
import FeaturedArticles from './featuredArticles'
import Nav from './nav'

const Layout = ({ children }) => {
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
      <div role="banner" className="h-banner bg-blue-500"></div>
      <main className="flex flex-wrap bg-white shadow-lg container max-w-screen-xl mx-auto mt-banner">
        <section className="w-full py-8 px-6 md:w-2/3">{children}</section>
        <aside className="w-full px-6 py-8 bg-gray-100 md:w-1/3">
          <FeaturedArticles featuredArticles={featuredArticles.nodes[0].blogPosts} />
          <TagList tags={tags.nodes} />
          {stats.nodes.map(summary => (
            <Stat summary={summary} key={summary.country} />
          ))}
        </aside>
      </main>
    </>
  )
}

export default Layout
