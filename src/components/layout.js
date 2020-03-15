import React from 'react'
import '../styles/tailwind.css'
import Stat from './stat'
import { Link } from 'gatsby'
import Nav from './nav'

export default ({ children, stats }) => (
  <>
    <header className="relative pb-24 bg-indigo-500">
      <Nav />
      <div className="p-8 flex flex-wrap items-center justify-center container mx-auto max-w-screen-xl">
        {stats.map(summary => (
          <Stat summary={summary} />
        ))}
      </div>
      <svg
        preserveAspectRatio="none"
        width="1440"
        height="74"
        viewBox="0 0 1440 74"
        className="fill-current text-white absolute bottom-0 w-full"
      >
        <path d="M456.464 0.0433865C277.158 -1.70575 0 50.0141 0 50.0141V74H1440V50.0141C1440 50.0141 1320.4 31.1925 1243.09 27.0276C1099.33 19.2816 1019.08 53.1981 875.138 50.0141C710.527 46.3727 621.108 1.64949 456.464 0.0433865Z"></path>
      </svg>
    </header>
    <div className="flex flex-wrap px-16 py-24 container max-w-screen-xl mx-auto">
      <div className="w-full md:w-2/3">{children}</div>
      <div className="w-full md:w-1/3">
        <section className="min-h-full">
          <h3 className="uppercase text-xl semi-bold"> Top Gategories </h3>
          <div className="mt-6">
            <Link to="/" className="mr-2 text-sm rounded-lg p-2 bg-indigo-300">
              News
            </Link>
            <Link to="/" className="mr-2 text-sm rounded-lg p-2 bg-indigo-300">
              stats
            </Link>
            <Link to="/" className="mr-2 text-sm rounded-lg p-2 bg-indigo-300">
              Nutrition
            </Link>
            <Link to="/" className="mr-2 text-sm rounded-lg p-2 bg-indigo-300">
              Update
            </Link>
          </div>
        </section>
        <section className="mt-8 min-h-full">
          <h3 className="uppercase text-xl semi-bold"> Popular Content</h3>
          <div className="mt-6">
            <ul>
              <li>
                <Link className="text-grey-darker hover:text-black text-sm no-underline hover:underline">
                  → Popular Article 1
                </Link>
              </li>
              <li>
                <Link className="text-grey-darker hover:text-black text-sm no-underline hover:underline">
                  → Popular Article 1
                </Link>
              </li>
              <li>
                <Link className="text-grey-darker hover:text-black text-sm no-underline hover:underline">
                  → Popular Article 1
                </Link>
              </li>
              <li>
                <Link className="text-grey-darker hover:text-black text-sm no-underline hover:underline">
                  → Popular Article 1
                </Link>
              </li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  </>
)
