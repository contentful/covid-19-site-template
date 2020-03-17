import React from 'react'
import ArticleTeaser from './articleTeaser'
import microcopy from '../utils/microcopy'

export default ({ children, teasers, microcopies }) => (
  <>
    <h1 className="text-2xl mb-4 semi-bold">{microcopy(microcopies, 'latest-updates')}</h1>
    {
      teasers.map(teaser => (
        <ArticleTeaser teaser={teaser} key={teaser.contentful_id} />
      ))
    }
  </>
)
