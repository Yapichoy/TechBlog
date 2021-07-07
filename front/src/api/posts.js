import axios from 'axios';
require('dotenv').config();

const instance = axios.create({
    baseURL: process.env.SERVER_URL+`/api/`,
    withCredentials: true
  });

export const getPostsApi = () => {
    return instance.get(`getPosts`).then( response => response.data);
}