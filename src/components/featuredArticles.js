import React from 'react'
import FeaturedArticleLink from './featuredArticleLink'

export default ({ children, featuredArticles }) => (
  <section className="mb-8">
    <h2 id="featArticles" className="text-xl mb-4 semi-bold">Featured Articles</h2>
    <nav aria-labelledby="#featArticles">
      <ul>
        {featuredArticles.map(featuredArticle => (
          <li key={featuredArticle.contentful_id}>
            <FeaturedArticleLink
              featuredArticle={featuredArticle}
              key={featuredArticle.contentful_id}
            />
          </li>
        ))}
      </ul>
    </nav>
  </section>
)
