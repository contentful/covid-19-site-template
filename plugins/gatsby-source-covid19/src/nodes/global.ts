import { SourceNodesArgs, NodeInput } from 'gatsby'
import { ResolverContext } from './types'
import { GlobalSummaryResponse } from '../api-client/global'

export interface GlobalSummaryNode extends NodeInput {
  lastUpdate: string
  confirmed: number
  deaths: number
  recovered: number
  image: {
    src: string
  }
}

export function toGlobalSummaryNode(
  kit: SourceNodesArgs,
  result: GlobalSummaryResponse
): GlobalSummaryNode {
  const node: GlobalSummaryNode = {
    id: kit.createNodeId(`global-summary`),
    lastUpdate: result.data.lastUpdate,
    confirmed: result.data.confirmed.value,
    deaths: result.data.deaths.value,
    recovered: result.data.recovered.value,
    image: {
      src: result.data.image
    },

    internal: {
      type: 'Covid19GlobalSummary',
      contentDigest: '',
    },
  }

  node.internal.contentDigest = kit.createContentDigest(JSON.stringify(node))

  return node
}

export default async function resolveGlobalNodes(ctx: ResolverContext): Promise<void> {
  const { apiClient, nodeKit } = ctx
  const { actions: { createNode } } = nodeKit

  let result
  try {
    result = await apiClient.global.getSummary()
  } catch (e) {
    console.log(e)
  }
  if (!result) {
    return
  }
  const node = toGlobalSummaryNode(nodeKit, result)

  createNode(node)
}
