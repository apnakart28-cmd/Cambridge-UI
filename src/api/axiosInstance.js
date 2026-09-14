import axios from 'axios';

// Ek naya instance create karein
const apiClient = axios.create({
  baseURL: 'https://cambridge-server-62kv.onrender.com', // Aapka Base URL
  headers: {
    'Content-Type': 'application/json',
  },
});

export default apiClient;