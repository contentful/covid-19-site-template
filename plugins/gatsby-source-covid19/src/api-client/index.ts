import Axios, { AxiosInstance } from 'axios'
import CountryStore from './country'

interface APIClientOptions {
  baseURL: string
}

const DEFAULT_OPTIONS = {
  baseURL: 'https://covid19.mathdro.id'
}

export default class APIClient {
  private httpClient: AxiosInstance
  public countries: CountryStore

  constructor(opts: Partial<APIClientOptions> = {}) {
    const options = { ...DEFAULT_OPTIONS, ...opts }

    this.httpClient = Axios.create({ baseURL: options.baseURL })
    this.countries = new CountryStore(this.httpClient)
  }
}
