import { SourceNodesArgs } from 'gatsby'
import APIClient from './api-client'
import resolveCountries from './nodes/countries'
import resolveGlobal from './nodes/global'
import resolveRegions from './nodes/regions'
import { Covid19PluginOptions, ResolverContext } from './nodes/types'

export const sourceNodes = async (nodeKit: SourceNodesArgs, pluginOptions: Covid19PluginOptions) => {
  const apiClient = new APIClient({
    baseURL: pluginOptions.baseURL,
  })

  const ctx: ResolverContext = {
    apiClient,
    nodeKit,
    pluginOptions
  }

  await resolveRegions(ctx)
  await resolveGlobal(ctx)
  await resolveCountries(ctx)
}
