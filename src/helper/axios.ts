import axios from 'axios';

export const GET = async (api: String, params?: any) => {
    const query = Object.keys(params).map(key => `${key}=${params[key]}`).join('&');

    const result = await axios.get(`${api}?${query}`);
    return result?.data;
}