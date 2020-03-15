import { AxiosInstance } from 'axios'
import {
  CountryRegionDetail,
  URLString,
  ISO8601Timestamp,
} from './types'

export type CountryRegionDetailResponse = CountryRegionDetail[]

export interface GlobalSummaryResponse {
  data: {
    confirmed: {
      value: number
      detail: URLString
    }
    recovered: {
      value: number
      detail: URLString
    }
    deaths: {
      value: number
      detail: URLString
    }
    dailySummary: URLString
    dailyTimeSeries: {
      pattern: URLString
      example: URLString
    }
    image: URLString
    source: URLString
    countries: URLString
    countryDetail: {
      pattern: URLString
      example: URLString
    }
    lastUpdate: ISO8601Timestamp
  }
}

export default class GlobalStore {
  constructor(private client: Pick<AxiosInstance, 'get'>) {}

  async getSummary(): Promise<GlobalSummaryResponse> {
    const url = `/api`;

    return this.client.get(url)
  }

  /**
   * Cases per region sorted by confirmed cases
   */
  async getConfirmed(): Promise<CountryRegionDetailResponse> {
    const url = `/api/confirmed`

    return this.client.get(url)
  }

  /**
   * Cases per region sorted by death toll
   */
  async getDeaths(): Promise<CountryRegionDetailResponse> {
    const url = `/api/confirmed`

    return this.client.get(url)
  }

  /**
   * Cases per region sorted by recovered cases
   */
  async getRecovered(): Promise<CountryRegionDetailResponse> {
    const url = `/api/confirmed`

    return this.client.get(url)
  }
}
