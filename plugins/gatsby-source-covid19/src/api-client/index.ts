import Axios, { AxiosInstance } from 'axios'
import CountryStore from './country'
import GlobalStore from './global'

interface APIClientOptions {
  baseURL: string
}

const DEFAULT_OPTIONS = {
  baseURL: 'https://covid19.mathdro.id'
}

export default class APIClient {
  private httpClient: AxiosInstance
  public countries: CountryStore
  public global: GlobalStore

  constructor(opts: Partial<APIClientOptions> = {}) {
    const baseURL = opts.baseURL || DEFAULT_OPTIONS.baseURL

    this.httpClient = Axios.create({ baseURL })
    this.countries = new CountryStore(this.httpClient)
    this.global = new GlobalStore(this.httpClient)
  }
}
