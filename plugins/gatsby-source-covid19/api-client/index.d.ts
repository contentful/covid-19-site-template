import CountryStore from './country';
interface APIClientOptions {
    baseURL: string;
}
export default class APIClient {
    private httpClient;
    countries: CountryStore;
    constructor(opts?: Partial<APIClientOptions>);
}
export {};
//# sourceMappingURL=index.d.ts.map