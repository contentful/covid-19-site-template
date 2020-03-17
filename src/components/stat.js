import React from 'react'
import { FlagIcon } from 'react-flag-kit'
import microcopy from '../utils/microcopy'

export default ({ summary, microcopies }) => {
  return (
    <section className="mb-8">
      <h2 className="text-xl mb-4 font-semibold">{microcopy(microcopies, 'tracker')}</h2>
      <div className="max-w-lg p-3 bg-white flex items-center mb-4 overflow-hidden">
        <div className="mr-4">
          <FlagIcon code={summary.country} size={48} />
        </div>
        <div className="text-sm">
          <p className="text-gray-900 leading-none">{summary.country}</p>
          <p className="text-gray-600">{microcopy(microcopies, 'last-updated')}: {summary.lastUpdate}</p>
        </div>
      </div>

      <div className="flex justify-between">
        <div className="p-3 bg-white">
          <h3 className="text-2xl bold"> {summary.confirmed}</h3>
          <h4 className="text-base">{microcopy(microcopies, 'confirmed')}</h4>
        </div>
        <div className="p-3 bg-white">
          <h3 className="text-2xl bold"> {summary.recovered}</h3>
          <h4 className="text-base">{microcopy(microcopies, 'recovered')}</h4>
        </div>

        <div className="p-3 bg-white">
          <h3 className="text-2xl bold"> {summary.deaths}</h3>
          <h4 className="text-base">{microcopy(microcopies, 'deaths')}</h4>
        </div>
      </div>
    </section>
  )
}
