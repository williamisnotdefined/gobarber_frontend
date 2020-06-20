import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3334',
});

api.interceptors.response.use((response) => response.data);

export default api;
