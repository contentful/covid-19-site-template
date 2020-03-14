interface CountryConfiguration {
    iso2: string;
}
interface PluginOptions {
    baseURL?: string;
    countries: CountryConfiguration[];
}
export declare const sourceNodes: (kit: any, pluginOptions: PluginOptions) => void;
export {};
//# sourceMappingURL=gatsby-node.d.ts.map