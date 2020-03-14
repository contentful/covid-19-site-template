import { CountrySummaryResponse } from './api-client/types';
interface GatsbyNodeTookit {
    createNodeId(arg1: string): string;
    createContentDigest(arg1: string): string;
}
export interface CountrySummaryNode {
    id: string;
    confirmed: {
        value: number;
    };
    deaths: {
        value: number;
    };
    recovered: {
        value: number;
    };
    parent: null;
    children: [];
    internal: {
        type: string;
        contentDigest: string;
    };
}
export declare function toCountrySummaryNode(kit: GatsbyNodeTookit, iso2: string, result: CountrySummaryResponse): CountrySummaryNode;
export {};
//# sourceMappingURL=nodes.d.ts.map