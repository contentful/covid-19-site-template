import { AxiosInstance } from 'axios';
import { CountryRegionDetail, URLString, ISO8601Timestamp } from './types';
export declare type CountryRegionDetailResponse = CountryRegionDetail[];
export interface GlobalSummaryResponse {
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
        dailySummary: URLString;
        dailyTimeSeries: {
            pattern: URLString;
            example: URLString;
        };
        image: URLString;
        source: URLString;
        countries: URLString;
        countryDetail: {
            pattern: URLString;
            example: URLString;
        };
        lastUpdate: ISO8601Timestamp;
    };
}
export default class GlobalStore {
    private client;
    constructor(client: Pick<AxiosInstance, 'get'>);
    getSummary(): Promise<GlobalSummaryResponse>;
    /**
     * Cases per region sorted by confirmed cases
     */
    getConfirmed(): Promise<CountryRegionDetailResponse>;
    /**
     * Cases per region sorted by death toll
     */
    getDeaths(): Promise<CountryRegionDetailResponse>;
    /**
     * Cases per region sorted by recovered cases
     */
    getRecovered(): Promise<CountryRegionDetailResponse>;
}
//# sourceMappingURL=global.d.ts.map