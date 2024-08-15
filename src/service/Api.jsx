import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000', // Your backend API URL
});

export const login = (credentials) => api.post('/login', credentials);
// Add more API services here

export default api;
