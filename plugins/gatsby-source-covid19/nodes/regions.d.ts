import { SourceNodesArgs, NodeInput } from 'gatsby';
import { CountryRegionDetail } from '../api-client/types';
import { ResolverContext } from './types';
export interface RegionSummaryNode extends NodeInput {
    provinceState: string | null;
    countryRegion: string | null;
    iso2: string;
    iso3: string;
    lat: number;
    long: number;
    lastUpdate: Date;
    active: number;
    confirmed: number;
    deaths: number;
    recovered: number;
}
export declare function toRegionDetailNode(kit: SourceNodesArgs, result: CountryRegionDetail): RegionSummaryNode;
export default function resolveRegionNodes(ctx: ResolverContext): Promise<void>;
//# sourceMappingURL=regions.d.ts.map