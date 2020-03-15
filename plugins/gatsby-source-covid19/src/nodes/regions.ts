import { SourceNodesArgs, NodeInput } from 'gatsby'
import { CountryRegionDetail } from '../api-client/types'
import { ResolverContext } from './types'

export interface RegionSummaryNode extends NodeInput {
  provinceState: string | null
  countryRegion: string | null
  iso2: string
  iso3: string
  lat: number
  long: number
  lastUpdate: Date

  active: number
  confirmed: number
  deaths: number
  recovered: number
}

export function toRegionDetailNode(
  kit: SourceNodesArgs,
  result: CountryRegionDetail
): RegionSummaryNode {

  const {
    provinceState,
    countryRegion,
    lat,
    long,
    iso2,
    iso3,

    active,
    confirmed,
    recovered,
    deaths
  } = result

  const node: RegionSummaryNode = {
    id: kit.createNodeId([result.iso2, result.provinceState, 'detail'].join('-')),
    iso2,
    iso3,
    provinceState,
    countryRegion,
    lat,
    long,

    lastUpdate: new Date(result.lastUpdate),
    active,
    confirmed,
    deaths,
    recovered,
    internal: {
      type: 'Covid19RegionDetail',
      contentDigest: '',
    },
  }

  node.internal.contentDigest = kit.createContentDigest(JSON.stringify(node))

  return node
}

export default async function resolveRegionNodes(ctx: ResolverContext): Promise<void> {
  const { apiClient, nodeKit } = ctx
  const { actions: { createNode } } = nodeKit

  let result
  try {
    result = await apiClient.global.getConfirmed()
  } catch (e) {
    console.log(e)
  }

  if (!result) {
    return
  }

  result.data.forEach((entry) => {
    const node = toRegionDetailNode(nodeKit, entry)

    createNode(node)
  });
}
