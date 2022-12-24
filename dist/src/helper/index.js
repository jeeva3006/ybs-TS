"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getThumbnail = exports.GET = exports.warning = exports.info = exports.danger = exports.success = void 0;
var chalk_1 = require("./chalk");
Object.defineProperty(exports, "success", { enumerable: true, get: function () { return chalk_1.success; } });
Object.defineProperty(exports, "danger", { enumerable: true, get: function () { return chalk_1.danger; } });
Object.defineProperty(exports, "info", { enumerable: true, get: function () { return chalk_1.info; } });
Object.defineProperty(exports, "warning", { enumerable: true, get: function () { return chalk_1.warning; } });
var axios_1 = require("./axios");
Object.defineProperty(exports, "GET", { enumerable: true, get: function () { return axios_1.GET; } });
const getThumbnail = (thumbnails) => {
    return thumbnails ? (thumbnails.maxres ? thumbnails.maxres.url : thumbnails.high.url ? thumbnails.high.url : thumbnails.default.url ? thumbnails.default.url : "") : "";
};
exports.getThumbnail = getThumbnail;
