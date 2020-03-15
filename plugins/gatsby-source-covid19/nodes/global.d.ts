import { SourceNodesArgs, NodeInput } from 'gatsby';
import { ResolverContext } from './types';
import { GlobalSummaryResponse } from '../api-client/global';
export interface GlobalSummaryNode extends NodeInput {
    lastUpdate: string;
    confirmed: number;
    deaths: number;
    recovered: number;
    image: {
        src: string;
    };
}
export declare function toGlobalSummaryNode(kit: SourceNodesArgs, result: GlobalSummaryResponse): GlobalSummaryNode;
export default function resolveGlobalNodes(ctx: ResolverContext): Promise<void>;
//# sourceMappingURL=global.d.ts.map