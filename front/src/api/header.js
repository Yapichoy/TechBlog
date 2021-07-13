import axios from 'axios';
require('dotenv').config();

const instance = axios.create({
    baseURL: `http://localhost:3005/api/`,
    withCredentials: true,
    headers: {
    }
  });

export const connectApi = () => {
    return instance.get(`connect`).then( response => response.data);
}