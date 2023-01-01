import axios from 'axios';

export const client = axios.create({
  baseURL: 'https://mocki.io/v1/',
});
