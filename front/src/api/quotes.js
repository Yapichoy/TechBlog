import axios from 'axios';
require('dotenv').config();

const instance = axios.create({
    baseURL: `http://localhost:3005/api/`,
    withCredentials: true
  });

export const getQuotesApi = () => {
    return instance.get(`getQuotes`).then( response => response.data);
}