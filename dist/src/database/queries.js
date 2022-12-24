"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getVideoIds = exports.setVideos = void 0;
exports.setVideos = `INSERT INTO videos 
(id, videoId, title, description, thumbnail, publishedAt, channelId, channelTitle, tags, duration, dimension, definition, viewCount, likeCount, commentCount)
VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?); `;
exports.getVideoIds = `select videoId from videos`;
