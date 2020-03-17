import React from 'react'
import FeaturedArticleLink from './featuredArticleLink'

export default ({ children, featuredArticles }) => (
  <section className="mt-8">
    <h2 id="featArticles" className="text-xl semi-bold">Featured Articles</h2>
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
