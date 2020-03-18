import React from 'react'
import { Link } from 'gatsby'
import TimeTag from './timeTag'
import useI18n from '../hooks/use-i18n'

const ArticleTeaser = ({ teaser }) => {
  const i18n = useI18n()

  return (
    <article className="mb-6">
      <TimeTag time={teaser.createdAt} />
      <figure className="mb-4">
        <Link to={`/blog/${teaser.slug}`}>
          <img src={teaser.heroImage && `https:${teaser.heroImage.file.url}?w=620&h=310&fit=thumb`} alt={teaser.heroImage && teaser.heroImage.title} />
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
          {i18n.get('read-article', { default: 'Read this article' })} →
        </Link>
      </div>
    </article>
  )
}

export default ArticleTeaser
