import apiClient from './axiosInstance';

export const loginApi = async (email, password) => {
  try {
    const response = await apiClient.post('/api/auth/login', { 
      email, 
      password 
    });
    return response.data; 

  } catch (error) {
    console.error("Login API Error:", error.response?.data || error.message);
    throw error;
  }
};
