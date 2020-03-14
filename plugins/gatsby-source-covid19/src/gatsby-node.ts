import APIClient from './api-client'
import { toCountrySummaryNode } from './nodes'

interface CountryConfiguration {
  iso2: string
}

interface PluginOptions {
  baseURL?: string
  countries: CountryConfiguration[]
}

export const sourceNodes = (kit: any, pluginOptions: PluginOptions) => {
  const { actions } = kit
  const { createNode } = actions

  const apiClient = new APIClient({
    baseURL: pluginOptions.baseURL,
  })

  if (!pluginOptions.countries || pluginOptions.countries.length === 0) {
    throw new Error(
      'Must specify a list of countries in pluginOptions.countries'
    )
  }

  pluginOptions.countries.map(async ({ iso2 }) => {
    let result
    console.log('creating nodes')
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
}

