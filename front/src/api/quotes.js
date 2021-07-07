import axios from 'axios';
require('dotenv').config();

const instance = axios.create({
    baseURL: process.env.SERVER_URL+`/api/`,
    withCredentials: true
  });

export const getQuotesApi = () => {
    return instance.get(`getQuotes`).then( response => response.data);
}