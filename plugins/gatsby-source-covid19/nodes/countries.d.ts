import { SourceNodesArgs, NodeInput } from 'gatsby';
import { CountrySummaryResponse } from '../api-client/types';
import { ResolverContext } from './types';
export interface CountrySummaryNode extends NodeInput {
    lastUpdate: string;
    country: string;
    confirmed: number;
    deaths: number;
    recovered: number;
}
export declare function toCountrySummaryNode(kit: SourceNodesArgs, iso2: string, result: CountrySummaryResponse): CountrySummaryNode;
export default function resolveCountryNodes(ctx: ResolverContext): Promise<void>;
//# sourceMappingURL=countries.d.ts.map