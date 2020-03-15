import { SourceNodesArgs } from 'gatsby'
import APIClient from './api-client'
import resolveCountries from './nodes/countries'
import { Covid19PluginOptions } from './nodes/types'

export const sourceNodes = async (nodeKit: SourceNodesArgs, pluginOptions: Covid19PluginOptions) => {
  const apiClient = new APIClient({
    baseURL: pluginOptions.baseURL,
  })

  await resolveCountries({ nodeKit, pluginOptions, apiClient })
}

