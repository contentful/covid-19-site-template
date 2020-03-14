"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function toCountrySummaryNode(kit, iso2, result) {
    var node = {
        id: kit.createNodeId(iso2 + "-summary"),
        confirmed: {
            value: result.data.confirmed.value,
        },
        deaths: {
            value: result.data.deaths.value,
        },
        recovered: {
            value: result.data.recovered.value,
        },
        parent: null,
        children: [],
        internal: {
            type: 'Covid19CountrySummary',
            contentDigest: '',
        },
    };
    node.internal.contentDigest = kit.createContentDigest(JSON.stringify(node));
    return node;
}
exports.toCountrySummaryNode = toCountrySummaryNode;
//# sourceMappingURL=nodes.js.map