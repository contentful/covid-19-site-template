import CountryStore from './country';
import GlobalStore from './global';
interface APIClientOptions {
    baseURL: string;
}
export default class APIClient {
    private httpClient;
    countries: CountryStore;
    global: GlobalStore;
    constructor(opts?: Partial<APIClientOptions>);
}
export {};
//# sourceMappingURL=index.d.ts.map