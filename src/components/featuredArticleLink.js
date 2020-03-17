import React from 'react'
import { Link } from 'gatsby'

export default ({ children, featuredArticle }) => (
  <Link to={`/blog/${featuredArticle.slug}`} className="text-blue-700 hover:text-blue-900 block text-base no-underline py-1 hover:underline">
    → {featuredArticle.title}
  </Link>
)
