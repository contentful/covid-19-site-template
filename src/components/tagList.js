import React from 'react'
import Tag from './tag'

export default ({ tags }) => (
  <section className="mt-8">
    <h3 className="text-2xl semi-bold">Top Categories</h3>
    <div className="mt-6">
      {tags.map(tag => (
        <Tag tag={tag} key={tag.contentful_id} />
      ))}
    </div>
  </section>
)
