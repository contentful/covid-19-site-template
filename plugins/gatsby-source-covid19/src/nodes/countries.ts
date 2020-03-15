import { SourceNodesArgs, NodeInput } from 'gatsby'
import { CountrySummaryResponse } from '../api-client/types'
import { ResolverContext } from './types'

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

export default async function resolveCountryNodes(ctx: ResolverContext): Promise<void> {
  const { pluginOptions, apiClient, nodeKit } = ctx
  const { actions: { createNode } } = nodeKit

  const countries = pluginOptions.countries || []
  const promises = countries.map(async ({ iso2 }) => {
    let result
    try {
      result = await apiClient.countries.getSummary({
        country: iso2,
      })
    } catch (e) {
      console.log(e)
    }
    if (!result) {
      return
    }
    const node = toCountrySummaryNode(nodeKit, iso2, result)

    createNode(node)
  })

  await Promise.all(promises)
}
