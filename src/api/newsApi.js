import apiClient from './axiosInstance';

// Public API
export const getPublicNewsApi = async () => {
  const response = await apiClient.get('/api/news/public');
  return response.data;
};

// Admin API with Pagination
export const getAdminNewsApi = async (page = 1, limit = 10, token) => {
  const response = await apiClient.get(`/api/news/admin?page=${page}&limit=${limit}`, {
    headers: { Authorization: `Bearer ${token}` }
  });
  return response.data; // Yeh ab { data, currentPage, totalPages, totalItems } return karega
};

export const createNewsApi = async (newsData, token) => {
  const response = await apiClient.post('/api/news', newsData, {
    headers: { Authorization: `Bearer ${token}` }
  });
  return response.data;
};

export const updateNewsApi = async (id, updatedData, token) => {
  const response = await apiClient.put(`/api/news/${id}`, updatedData, {
    headers: { Authorization: `Bearer ${token}` }
  });
  return response.data;
};

export const deleteNewsApi = async (id, token) => {
  const response = await apiClient.delete(`/api/news/${id}`, {
    headers: { Authorization: `Bearer ${token}` }
  });
  return response.data;
};