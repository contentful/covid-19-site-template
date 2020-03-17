import React from 'react'
import ArticleTeaser from './articleTeaser'
import useI18n from '../hooks/use-i18n'

const ArticleTeaserList = ({ teasers }) => {
  const i18n = useI18n()

  return (
    <>
      <h1 className="text-2xl mb-6 font-semibold">
        {i18n.get('latest-updates', { default: 'Latest Updates' })}
      </h1>
      {
        teasers.map(teaser => (
          <ArticleTeaser teaser={teaser} key={teaser.slug} />
        ))
      }
    </>
  )
}

export default ArticleTeaserList
