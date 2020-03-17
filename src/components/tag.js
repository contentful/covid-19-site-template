import React from 'react'
import { Link } from 'gatsby'

export default ({ tag }) => (
  <Link to={`/tags/${tag.slug}`} className="mr-2 text-sm p-2 block text-white bg-blue-600">
    {tag.name}
  </Link>
)
