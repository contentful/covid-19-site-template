import React from 'react'
import Tag from './tag'
import useI18n from '../hooks/use-i18n'

const TagList = ({ tags }) => {
  const i18n = useI18n()

  return (
    <section className="mb-8">
      <h2 className="text-xl mb-4 font-semibold">
        {i18n.get('tags', { default: 'Tags' })}
      </h2>
      <ul>
        {tags.map(tag => (
          <li className="inline-block" key={tag.contentful_id}>
            <Tag tag={tag} />
          </li>
        ))}
      </ul>
    </section>
  )
}

export default TagList
