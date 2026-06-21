import apiClient from './axiosInstance';

// 1. Get All Teachers (with Pagination)
export const getAllTeachersApi = async (page = 1, limit = 10) => {
  try {
    const response = await apiClient.get(`/api/teachers?page=${page}&limit=${limit}`);
    return response.data; 
  } catch (error) {
    console.error("Get All Teachers Error:", error.response?.data || error.message);
    throw error;
  }
};

// 2. Get Teacher By ID
export const getTeacherByIdApi = async (id) => {
  try {
    const response = await apiClient.get(`/api/teachers/${id}`);
    return response.data;
  } catch (error) {
    console.error("Get Teacher By ID Error:", error.response?.data || error.message);
    throw error;
  }
};

// 3. Create Teacher
// Note: `teacherData` frontend se FormData() object hona chahiye
export const createTeacherApi = async (teacherData, token) => {
  try {
    const response = await apiClient.post('/api/teachers', teacherData, {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'multipart/form-data', // Image upload ke liye zaroori
      },
    });
    return response.data;
  } catch (error) {
    console.error("Create Teacher Error:", error.response?.data || error.message);
    throw error;
  }
};

// 4. Update Teacher
// Note: `teacherData` frontend se FormData() object hona chahiye
export const updateTeacherApi = async (id, teacherData, token) => {
  try {
    const response = await apiClient.put(`/api/teachers/${id}`, teacherData, {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'multipart/form-data', // Image upload ke liye zaroori
      },
    });
    return response.data;
  } catch (error) {
    console.error("Update Teacher Error:", error.response?.data || error.message);
    throw error;
  }
};

// 5. Delete Teacher
export const deleteTeacherApi = async (id, token) => {
  try {
    const response = await apiClient.delete(`/api/teachers/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Delete Teacher Error:", error.response?.data || error.message);
    throw error;
  }
};