import { CountrySummaryResponse } from './api-client/types'

interface GatsbyNodeTookit {
  createNodeId(arg1: string): string
  createContentDigest(arg1: string): string
}

export interface CountrySummaryNode {
  id: string
  lastUpdate: string
  country: string
  confirmed: number
  deaths: number
  recovered: number
  parent: null
  children: []
  internal: {
    type: string
    contentDigest: string
  }
}

export function toCountrySummaryNode(
  kit: GatsbyNodeTookit,
  iso2: string,
  result: CountrySummaryResponse
): CountrySummaryNode {
  const node = {
    id: kit.createNodeId(`${iso2}-summary`),
    lastUpdate: result.data.lastUpdate,
    country: iso2,
    confirmed: result.data.confirmed.value,
    deaths: result.data.deaths.value,
    recovered: result.data.recovered.value,
    parent: null,
    children: <never[] & { length: 0 }>[],
    internal: {
      type: 'Covid19CountrySummary',
      contentDigest: '',
    },
  }

  node.internal.contentDigest = kit.createContentDigest(JSON.stringify(node))

  return node
}
