import axios from 'axios';

const instance = axios.create({
    baseURL: `${process.env.REACT_APP_SERVER_NAME}/api/`,
    withCredentials: true
  });

export const getPostsApi = () => {
    return instance.get(`getPosts`).then( response => response.data);
}

export const getPostApi = (postId) => {
  return instance.get(`getPost/${postId}`).then( response => response.data);
}