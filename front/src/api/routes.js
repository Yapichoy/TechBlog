let axios = require('axios').default
require('dotenv').config();

console.log(process.env.REACT_APP_SERVER_NAME);
const instance = axios.create({
    baseURL:  `${process.env.REACT_APP_SERVER_NAME}/api/`,
    withCredentials: true
  });

module.exports.getRoutesApi = () => {
  console.log(instance)
    return instance.get(`routes`).then( response => response.data);
}