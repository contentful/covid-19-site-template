import { SourceNodesArgs } from 'gatsby';
import APIClient from '../api-client';
interface CountryConfiguration {
    iso2: string;
}
export interface Covid19PluginOptions {
    baseURL?: string;
    countries: CountryConfiguration[];
}
export interface ResolverContext {
    apiClient: APIClient;
    nodeKit: SourceNodesArgs;
    pluginOptions: Covid19PluginOptions;
}
export {};
//# sourceMappingURL=types.d.ts.map