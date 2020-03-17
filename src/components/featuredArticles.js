import React from 'react'
import FeaturedArticleLink from './featuredArticleLink'
import useI18n from '../hooks/use-i18n'

const FeaturedArticles = ({ featuredArticles }) => {
  const i18n = useI18n()

  return (
    <section className="mb-8">
      <h2 id="featArticles" className="text-xl mb-4 font-semibold">
        {i18n.get('featured-articles', { default: 'Featured Articles' })}
      </h2>
      <nav aria-labelledby="#featArticles">
        <ul>
          {featuredArticles.map(featuredArticle => (
            <li key={featuredArticle.slug}>
              <FeaturedArticleLink featuredArticle={featuredArticle} />
            </li>
          ))}
        </ul>
      </nav>
    </section>
  )
}

export default FeaturedArticles
