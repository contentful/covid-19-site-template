export declare type ISO8601Timestamp = string;
export declare type ISO2CountryCode = string;
export declare type ISO3CountryCode = string;
export declare type ISOCountryCode = ISO2CountryCode | ISO3CountryCode;
export declare type URLString = string;
export interface CountryDetailRequest {
    country: ISOCountryCode;
}
export interface CountrySummaryResponse {
    data: {
        confirmed: {
            value: number;
            detail: URLString;
        };
        recovered: {
            value: number;
            detail: URLString;
        };
        deaths: {
            value: number;
            detail: URLString;
        };
        lastUpdate: ISO8601Timestamp;
    };
}
export interface CountryRegionDetail {
    provinceState: string | null;
    countryRegion: string;
    iso2: ISO2CountryCode;
    iso3: ISO3CountryCode;
    lat: number;
    long: number;
    confirmed: number;
    recovered: number;
    deaths: number;
    active: number;
    lastUpdate: ISO8601Timestamp;
}
//# sourceMappingURL=types.d.ts.map