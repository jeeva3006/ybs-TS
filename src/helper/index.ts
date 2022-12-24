export { success, danger, info, warning } from './chalk';
export { GET } from './axios';

export const getThumbnail = (thumbnails: any) => {
    return thumbnails ? (thumbnails.maxres ? thumbnails.maxres.url : thumbnails.high.url ? thumbnails.high.url : thumbnails.default.url ? thumbnails.default.url : "") : "";
}