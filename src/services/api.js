import axios from 'axios';

const api = axios.create({
  baseUrl: 'http://locatlhost:3333'
});

export default api;
