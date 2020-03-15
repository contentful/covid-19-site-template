import React, { useState } from 'react'
import { Link } from 'gatsby'

const Nav = () => {
  const [hidden, setHidden] = useState(false)
  return (
    <nav className="flex flex-wrap items-center justify-between p-6">
      <div className="flex items-center flex-shrink-0 mr-6 text-white">
        <Link to="/">
          <span className="text-xl font-semibold tracking-tight">
            Project covid19
          </span>
        </Link>
      </div>
      <div className="block lg:hidden">
        <button
          onClick={() => {
            setHidden(!hidden)
          }}
          className="flex items-center px-3 py-2 text-teal-200 border border-teal-400 rounded hover:text-white hover:border-white"
        >
          <svg
            className="w-3 h-3 fill-current"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      <div
        className={`w-full block flex-grow lg:flex lg:items-center lg:w-auto ${
          hidden ? 'hidden' : ''
        }`}
      >
        <div className="text-sm lg:flex-grow">
          <Link
            to="/contact"
            activeClassName="text-white"
            className="block mt-4 mr-4 text-teal-200 lg:inline-block lg:mt-0 hover:text-white"
          >
            contact
          </Link>
        </div>
        <div>
          <a
            href="#"
            className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0"
          >
            Github
          </a>
        </div>
      </div>
    </nav>
  )
}

export default Nav
