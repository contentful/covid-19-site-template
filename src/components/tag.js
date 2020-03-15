import React from 'react'
import { Link } from 'gatsby'

export default ({ children, tag }) => (
  <Link to={`/tags/${tag.slug}`} className="mr-2 text-sm rounded-lg p-2 bg-indigo-300">
    {tag.name}
  </Link>
)
