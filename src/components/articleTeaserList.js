import React from 'react'
import ArticleTeaser from '../components/articleTeaser'

export default ({ children, teasers }) => (
  <>
    {
      teasers.map(teaser => (
        <ArticleTeaser teaser={teaser} key={teaser.contentful_id} />
      ))
    }
  </>
)
