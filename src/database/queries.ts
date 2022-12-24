export const setVideos = `INSERT INTO videos 
(id, videoId, title, description, thumbnail, publishedAt, channelId, channelTitle, tags, duration, dimension, definition, viewCount, likeCount, commentCount)
VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?); `;

export const getVideoIds = `select videoId from videos`;
