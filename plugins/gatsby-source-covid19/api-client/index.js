"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var axios_1 = __importDefault(require("axios"));
var country_1 = __importDefault(require("./country"));
var DEFAULT_OPTIONS = {
    baseURL: 'https://covid19.mathdro.id'
};
var APIClient = /** @class */ (function () {
    function APIClient(opts) {
        if (opts === void 0) { opts = {}; }
        var options = __assign(__assign({}, DEFAULT_OPTIONS), opts);
        this.httpClient = axios_1.default.create({ baseURL: options.baseURL });
        this.countries = new country_1.default(this.httpClient);
    }
    return APIClient;
}());
exports.default = APIClient;
//# sourceMappingURL=index.js.map