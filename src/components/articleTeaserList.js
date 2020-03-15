import React from 'react'
import ArticleTeaser from './articleTeaser'

export default ({ children, teasers }) => (
  <>
    <h1 className="uppercase text-xl semi-bold">Recently Published</h1>
    {
      teasers.map(teaser => (
        <ArticleTeaser teaser={teaser} key={teaser.contentful_id} />
      ))
    }
  </>
)
