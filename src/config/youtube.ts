export const ytBaseURL = 'https://youtube.googleapis.com/youtube/v3/videos';
export const ApiKey = 'AIzaSyDg08trhS610R1VeeJp4hyGMaBryjKS_3s';
export const trendingParams = {
    maxResults: 50,
    regionCode: 'IN',
    videoCategoryId: 10,
    chart: 'mostPopular',
    part: 'snippet,contentDetails,statistics,status',
    key: ApiKey,
};