import React from 'react'
import Layout from '../components/layout'
import { graphql, Link } from 'gatsby'

export default ({ data }) => (
  <Layout stats={data.allCovid19CountrySummary.nodes}>
    <h1 className="uppercase text-xl semi-bold">Recently Published</h1>
    <article className="mt-8 px-4">
      <div>
        <div>
          <Link className="text-lg text-black font-bold no-underline hover:underline">
            Something Somethings
          </Link>
        </div>
        <p className="text-grey-darkest text-base leading-normal mt-1">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>
        <div className="text-grey-darkest text-base leading-normal mt-2">
          <Link className="text-grey-darker hover:text-black text-sm no-underline hover:underline">
            Read this article →
          </Link>
        </div>
      </div>
    </article>
  </Layout>
)

export const query = graphql`
  {
    allCovid19CountrySummary {
      nodes {
        country
        lastUpdate(fromNow: true)
        deaths
        confirmed
        recovered
      }
    }
  }
`
