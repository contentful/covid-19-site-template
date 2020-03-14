import { AxiosInstance } from 'axios'
import {
  CountryDetailRequest,
  CountryRegionDetail,
  CountrySummaryResponse,
} from './types'

export type CountryRegionDetailResponse = CountryRegionDetail[]

export default class CountryStore {
  constructor(private client: Pick<AxiosInstance, 'get'>) {}

  async getSummary(
    input: CountryDetailRequest
  ): Promise<CountrySummaryResponse> {
    const url = `https://covid19.mathdro.id/api/countries/${input.country}`

    return this.client.get(url)
  }

  /**
   * Cases per region in the provided country sorted by confirmed cases
   * @param input
   */
  async getConfirmed(
    input: CountryDetailRequest
  ): Promise<CountryRegionDetailResponse> {
    const url = `/api/countries/${input.country}/confirmed`

    return this.client.get(url)
  }

  /**
   * Cases per region in the provided country sorted by death toll
   * @param input
   */
  async getDeaths(
    input: CountryDetailRequest
  ): Promise<CountryRegionDetailResponse> {
    const url = `/api/countries/${input.country}/confirmed`

    return this.client.get(url)
  }

  /**
   * Cases per region in the provided country sorted by recovered cases
   * @param input
   */
  async getRecovered(
    input: CountryDetailRequest
  ): Promise<CountryRegionDetailResponse> {
    const url = `/api/countries/${input.country}/confirmed`

    return this.client.get(url)
  }
}
