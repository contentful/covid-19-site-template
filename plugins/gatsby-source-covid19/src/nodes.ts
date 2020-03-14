import { CountrySummaryResponse } from './api-client/types'

interface GatsbyNodeTookit {
  createNodeId(arg1: string): string
  createContentDigest(arg1: string): string
}

export interface CountrySummaryNode {
  id: string
  confirmed: {
    value: number
  }
  deaths: {
    value: number
  }
  recovered: {
    value: number
  }
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
    confirmed: {
      value: result.data.confirmed.value,
    },
    deaths: {
      value: result.data.deaths.value,
    },
    recovered: {
      value: result.data.recovered.value,
    },
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
