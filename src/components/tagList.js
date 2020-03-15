import React from 'react'
import Tag from '../components/Tag'

export default ({ tags }) => (
  <section className="mt-8">
    <h3 className="uppercase text-xl semi-bold"> Top Gategories </h3>
    <div className="mt-6">
      {tags.map(tag => (
        <Tag tag={tag} key={tag.contentful_id} />
      ))}
    </div>
  </section>
)
