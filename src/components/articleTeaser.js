import React from 'react'
import { Link } from 'gatsby'

export default ({ children, teaser }) => {
  console.log(teaser);
  return (
  <article className="mb-6">
    <time className="py-1 px-4 bg-blue-600 text-white mb-4 inline-block text-sm font-semibold" dateTime={teaser.createdAt}>
      {teaser.createdAt}
    </time>
    <figure className="mb-4">
      <Link to={`/blog/${teaser.slug}`}>
        <img src={teaser.heroImage && teaser.heroImage.file.url} alt={teaser.heroImage && teaser.heroImage.title} />
      </Link>
    </figure>
    <h2>
      <Link to={`/blog/${teaser.slug}`} className="text-xl text-black font-semibold no-underline hover:underline">
        { teaser.title }
      </Link>
    </h2>
    <p className="text-grey-darkest text-base leading-normal mb-1">
      { teaser.teaser.teaser }
    </p>
    <div className="text-grey-darkest text-base leading-normal mt-2">
      <Link to={`/blog/${teaser.slug}`} className="text-blue-700 hover:text-blue-900 text-sm no-underline hover:underline">
        Read this article →
      </Link>
    </div>
  </article>
)
  }