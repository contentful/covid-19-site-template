import React from 'react'
import { Link } from 'gatsby'

export default ({ children, teaser }) => (
  <article className="mt-8 px-4">
    <div>
      <h2>
        <Link to={`/blog/${teaser.slug}`} className="text-lg text-black font-bold no-underline hover:underline">
          { teaser.title }
        </Link>
      </h2>
      <p className="text-grey-darkest text-base leading-normal mt-1">
        { teaser.teaser.teaser }
      </p>
      <div className="text-grey-darkest text-base leading-normal mt-2">
        <Link to={`/blog/${teaser.slug}`} className="text-grey-darker hover:text-black text-sm no-underline hover:underline">
          Read this article →
        </Link>
      </div>
    </div>
  </article>
)
