import React from 'react'
import { FlagIcon } from 'react-flag-kit'
export default ({ summary }) => {
  return (
    <div className="max-w-lg bg-white rounded overflow-hidden shadow-lg">
      <div className="flex items-center">
        <div className="mr-4">
          <FlagIcon code={summary.country} size={80} />
        </div>
        <div className="text-sm">
          <p className="text-gray-900 leading-none">{summary.country}</p>
          <p className="text-gray-600">last Updated: {summary.lastUpdate}</p>
        </div>
      </div>

      <div className="flex justify-between">
        <div className="w-1/3 border border-gray-500 p-6 text-center">
          <h3 className="text-2xl bold"> {summary.confirmed}</h3>
          <h4 className="text-lg">Confirmed cases</h4>
        </div>
        <div className="w-1/3 border border-gray-500 p-6 text-center">
          <h3 className="text-2xl bold"> {summary.recovered}</h3>
          <h4 className="text-lg">Recovered</h4>
        </div>

        <div className="w-1/3 border border-gray-500 p-6 text-center">
          <h3 className="text-2xl bold"> {summary.deaths}</h3>
          <h4 className="text-lg">Deaths</h4>
        </div>
      </div>
    </div>
  )
}
