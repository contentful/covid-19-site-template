import { SourceNodesArgs, NodeInput } from 'gatsby'
import { CountrySummaryResponse } from './api-client/types'

export interface CountrySummaryNode extends NodeInput {
  lastUpdate: string
  country: string
  confirmed: number
  deaths: number
  recovered: number
}

export function toCountrySummaryNode(
  kit: SourceNodesArgs,
  iso2: string,
  result: CountrySummaryResponse
): CountrySummaryNode {
  const node: CountrySummaryNode = {
    id: kit.createNodeId(`${iso2}-summary`),
    lastUpdate: result.data.lastUpdate,
    country: iso2,
    confirmed: result.data.confirmed.value,
    deaths: result.data.deaths.value,
    recovered: result.data.recovered.value,
    internal: {
      type: 'Covid19CountrySummary',
      contentDigest: '',
    },
  }

  node.internal.contentDigest = kit.createContentDigest(JSON.stringify(node))

  return node
}
