import apiClient from './axiosInstance';


/**
 * GET - Public Route
 * School profile fetch karne ke liye
 */
export const getSchoolProfileApi = async () => {
  try {
    const response = await apiClient.get('/api/school-profile');
    return response.data;
  } catch (error) {
    console.error("Get School Profile API Error:", error.response?.data || error.message);
    throw error;
  }
};

export const updateSchoolProfileApi = async (formData, token) => {
  try {
    const response = await apiClient.post('/api/school-profile', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
        'Authorization': `Bearer ${token}` // Token yahan explicitly pass hoga
      },
    });
    return response.data;
  } catch (error) {
    console.error("Update School Profile API Error:", error.response?.data || error.message);
    throw error;
  }
};