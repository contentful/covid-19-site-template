import { SourceNodesArgs } from 'gatsby'
import APIClient from './api-client'
import { toCountrySummaryNode } from './nodes'

interface CountryConfiguration {
  iso2: string
}

interface PluginOptions {
  baseURL?: string
  countries: CountryConfiguration[]
}

export const onPreInit = () => {
  console.log('Loaded gatsby-source-covid19')
}

export const sourceNodes = (kit: SourceNodesArgs, pluginOptions: PluginOptions) => {
  const { actions: { createNode } } = kit

  const apiClient = new APIClient({
    baseURL: pluginOptions.baseURL,
  })

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
    const node = toCountrySummaryNode(kit, iso2, result)

    createNode(node)
  })

  return Promise.all(promises)
}

