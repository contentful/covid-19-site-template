import React from 'react'
import { Link } from 'gatsby'

export default ({ children, featuredArticle }) => (
  <Link to={`/blog/${featuredArticle.slug}`} className="text-grey-darker hover:text-black text-sm no-underline hover:underline">
    → {featuredArticle.title}
  </Link>
)
