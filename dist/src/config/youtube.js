"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.trendingParams = exports.ApiKey = exports.ytBaseURL = void 0;
exports.ytBaseURL = 'https://youtube.googleapis.com/youtube/v3/videos';
exports.ApiKey = 'AIzaSyDg08trhS610R1VeeJp4hyGMaBryjKS_3s';
exports.trendingParams = {
    maxResults: 50,
    regionCode: 'IN',
    videoCategoryId: 10,
    chart: 'mostPopular',
    part: 'snippet,contentDetails,statistics,status',
    key: exports.ApiKey,
};
