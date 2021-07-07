import axios from 'axios';
require('dotenv').config();

const instance = axios.create({
    baseURL: `http://localhost:3005/api/`,
    withCredentials: true
  });

export const getPostsApi = () => {
    return instance.get(`getPosts`).then( response => response.data);
}