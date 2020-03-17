import React from 'react'
import Tag from './tag'
import microcopy from '../utils/microcopy'

export default ({ tags, microcopies }) => (
  <section className="mb-8">
    <h2 className="text-xl mb-4 font-semibold">{microcopy(microcopies, 'tags')}</h2>
    <ul>
      {tags.map(tag => (
        <li className="inline-block">
          <Tag tag={tag} key={tag.contentful_id} />
        </li>
      ))}
    </ul>
  </section>
)
