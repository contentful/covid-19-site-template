import React from 'react'

export default ({time}) => (
  <time className="py-1 px-4 bg-blue-600 text-white mb-4 inline-block text-sm font-semibold" dateTime={time}>
    {time}
  </time>
)