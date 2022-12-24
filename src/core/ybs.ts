import { DB } from '../database/manager';
import { randomUUID } from 'crypto';
import { getVideoIds, setVideos } from '../database/queries';
import { getThumbnail, info, warning } from '../helper';

export default class Ybs {
    private db: any;

    constructor() {
        this.db = new DB;
    }

    youtube = async (todaysTrending: any) => {
        this.db.connect();

        const existingVideos = await this.db.execute(getVideoIds);
        const existingVideoIds = existingVideos && existingVideos.length > 0 ? existingVideos.map((e: any) => e.videoId) : [];

        todaysTrending?.items.map(async (video: any, index: Number) => {
            if (existingVideoIds.indexOf(video.id) < 0) {
                const { title = "", description = "", thumbnails = "", publishedAt = "", channelId = "", channelTitle = "", tags = [] } = video.snippet;
                const { duration = "", dimension = "", definition = "" } = video.contentDetails;
                const { viewCount = "", likeCount = "", commentCount = "" } = video.statistics;
                const thumbnail = getThumbnail(thumbnails);
                const videoId = video.id;
                const id = randomUUID();

                const videoDetails = [id, videoId, title, description, thumbnail, publishedAt, channelId, channelTitle, JSON.stringify(tags), duration, dimension, definition, viewCount, likeCount, commentCount]
                await this.db.execute(setVideos, videoDetails);

                info(`${index}) ${title}`)
            }
            else {
                warning(`${index}) ${video?.snippet?.title}`)
            }
        })

        this.db.kill();
    }
}