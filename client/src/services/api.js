import axios from 'axios';

const handler = axios.create({
  baseURL: 'http://localhost:5000',
});

export const getPosts = async () => {
  const response = await handler.get('/');

  return response.data;
}

export const createPost = async(data) => {
  const response = await handler.post('/', data);

  return response.data;
}