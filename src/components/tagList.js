import React from 'react'
import Tag from './tag'

export default ({ tags }) => (
  <section className="mb-8">
    <h2 className="text-2xl mb-4 semi-bold">Top Categories</h2>
    <ul>
      {tags.map(tag => (
        <li className="inline-block">
          <Tag tag={tag} key={tag.contentful_id} />
        </li>
      ))}
    </ul>
  </section>
)
