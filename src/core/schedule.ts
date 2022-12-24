import { scheduleJob } from 'node-schedule';
import Ybs from './ybs';
import { cronRule, trendingParams, ytBaseURL } from '../config';
import { info, GET, getThumbnail } from '../helper'

export class Schedule {
    private ybs: any;

    constructor() {
        this.ybs = new Ybs;
    }

    public async start() {
        info(cronRule);

        scheduleJob('trending', cronRule, async () => {
            const todaysTrending = await GET(ytBaseURL, trendingParams);
            this.ybs.youtube(todaysTrending)
        })
    }
}