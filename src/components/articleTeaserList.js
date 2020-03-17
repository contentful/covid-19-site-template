import React from 'react'
import ArticleTeaser from './articleTeaser'

export default ({ children, teasers }) => (
  <>
    <h1 className="text-2xl semi-bold">Latest Covid-19 Updates</h1>
    {
      teasers.map(teaser => (
        <ArticleTeaser teaser={teaser} key={teaser.contentful_id} />
      ))
    }
  </>
)
