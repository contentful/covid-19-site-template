import { AxiosInstance } from 'axios';
import { CountryDetailRequest, CountryRegionDetail, CountrySummaryResponse } from './types';
export declare type CountryRegionDetailResponse = {
    data: CountryRegionDetail[];
};
export default class CountryStore {
    private client;
    constructor(client: Pick<AxiosInstance, 'get'>);
    getSummary(input: CountryDetailRequest): Promise<CountrySummaryResponse>;
    /**
     * Cases per region in the provided country sorted by confirmed cases
     * @param input
     */
    getConfirmed(input: CountryDetailRequest): Promise<CountryRegionDetailResponse>;
    /**
     * Cases per region in the provided country sorted by death toll
     * @param input
     */
    getDeaths(input: CountryDetailRequest): Promise<CountryRegionDetailResponse>;
    /**
     * Cases per region in the provided country sorted by recovered cases
     * @param input
     */
    getRecovered(input: CountryDetailRequest): Promise<CountryRegionDetailResponse>;
}
//# sourceMappingURL=country.d.ts.map