import axios from 'axios';

// Ek naya instance create karein
const apiClient = axios.create({
  baseURL: 'https://oxfordpublicschool.onrender.com', // Aapka Base URL
  headers: {
    'Content-Type': 'application/json',
  },
});

export default apiClient;