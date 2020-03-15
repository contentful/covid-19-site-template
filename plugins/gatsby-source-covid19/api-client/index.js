"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var axios_1 = __importDefault(require("axios"));
var country_1 = __importDefault(require("./country"));
var global_1 = __importDefault(require("./global"));
var DEFAULT_OPTIONS = {
    baseURL: 'https://covid19.mathdro.id'
};
var APIClient = /** @class */ (function () {
    function APIClient(opts) {
        if (opts === void 0) { opts = {}; }
        var baseURL = opts.baseURL || DEFAULT_OPTIONS.baseURL;
        this.httpClient = axios_1.default.create({ baseURL: baseURL });
        this.countries = new country_1.default(this.httpClient);
        this.global = new global_1.default(this.httpClient);
    }
    return APIClient;
}());
exports.default = APIClient;
//# sourceMappingURL=index.js.map