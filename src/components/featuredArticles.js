import React from 'react'
import FeaturedArticleLink from './featuredArticleLink'
import microcopy from '../utils/microcopy'

export default ({ children, featuredArticles, microcopies }) => (
  <section className="mb-8">
    <h2 id="featArticles" className="text-xl mb-4 font-semibold">{microcopy(microcopies, 'featured-articles')}</h2>
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
