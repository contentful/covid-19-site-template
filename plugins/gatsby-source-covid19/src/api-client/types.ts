
type ISO8601Timestamp = string

export interface CountryDetailRequest {
  /** An ISO2 or ISO3 country string */
  country: string
}

export interface CountrySummaryResponse {
  confirmed: {
    value: number
    detail: string
  }
  recovered: {
    value: number
    detail: string
  }
  deaths: {
    value: number
    detail: string
  }
  lastUpdate: ISO8601Timestamp
}

export interface CountryRegionDetail {
  provinceState: string | null
  countryRegion: string
  iso2: string
  iso3 :string
  lat: number
  long: number

  confirmed: number
  recovered: number
  deaths: number
  active: number
  lastUpdate: ISO8601Timestamp
}
