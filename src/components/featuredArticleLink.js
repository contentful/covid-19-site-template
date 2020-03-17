import React from 'react'
import { Link } from 'gatsby'

const FeaturedArticleLink = ({ featuredArticle }) => (
  <Link to={`/blog/${featuredArticle.slug}`} className="text-blue-700 hover:text-blue-900 block text-base no-underline py-1 hover:underline">
    → {featuredArticle.title}
  </Link>
)

export default FeaturedArticleLink
