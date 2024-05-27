import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:3001/api', // URL del backend
});

export default axiosInstance;
