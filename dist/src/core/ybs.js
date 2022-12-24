"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const manager_1 = require("../database/manager");
const crypto_1 = require("crypto");
const queries_1 = require("../database/queries");
const helper_1 = require("../helper");
class Ybs {
    constructor() {
        this.youtube = (todaysTrending) => __awaiter(this, void 0, void 0, function* () {
            this.db.connect();
            const existingVideos = yield this.db.execute(queries_1.getVideoIds);
            const existingVideoIds = existingVideos && existingVideos.length > 0 ? existingVideos.map((e) => e.videoId) : [];
            todaysTrending === null || todaysTrending === void 0 ? void 0 : todaysTrending.items.map((video, index) => __awaiter(this, void 0, void 0, function* () {
                var _a;
                if (existingVideoIds.indexOf(video.id) < 0) {
                    const { title = "", description = "", thumbnails = "", publishedAt = "", channelId = "", channelTitle = "", tags = [] } = video.snippet;
                    const { duration = "", dimension = "", definition = "" } = video.contentDetails;
                    const { viewCount = "", likeCount = "", commentCount = "" } = video.statistics;
                    const thumbnail = (0, helper_1.getThumbnail)(thumbnails);
                    const videoId = video.id;
                    const id = (0, crypto_1.randomUUID)();
                    const videoDetails = [id, videoId, title, description, thumbnail, publishedAt, channelId, channelTitle, JSON.stringify(tags), duration, dimension, definition, viewCount, likeCount, commentCount];
                    yield this.db.execute(queries_1.setVideos, videoDetails);
                    (0, helper_1.info)(`${index}) ${title}`);
                }
                else {
                    (0, helper_1.warning)(`${index}) ${(_a = video === null || video === void 0 ? void 0 : video.snippet) === null || _a === void 0 ? void 0 : _a.title}`);
                }
            }));
            this.db.kill();
        });
        this.db = new manager_1.DB;
    }
}
exports.default = Ybs;
