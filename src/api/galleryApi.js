import apiClient from './axiosInstance';

// Get All Gallery with Pagination
export const getAllGalleryApi = async (page = 1, limit = 10, token) => {
  try {
    const response = await apiClient.get(`/api/gallery?page=${page}&limit=${limit}`, {
      headers: {
        Authorization: `Bearer ${token}` 
      }
    });
    return response.data; // Backend ab { data, pagination } bhej raha hai
  } catch (error) {
    console.error("Get Gallery Error:", error.response?.data || error.message);
    throw error;
  }
};

// Create (Upload) Gallery
export const createGalleryApi = async (formData, token) => { // Token receive kiya
  try {
    const response = await apiClient.post('/api/gallery', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
        Authorization: `Bearer ${token}` // Token header mein pass kiya
      },
    });
    return response.data;
  } catch (error) {
    console.error("Upload Error:", error.response?.data || error.message);
    throw error;
  }
};

// Delete Gallery
export const deleteGalleryApi = async (id, token) => { // Token receive kiya
  try {
    const response = await apiClient.delete(`/api/gallery/${id}`, {
      headers: {
        Authorization: `Bearer ${token}` // Token header mein pass kiya
      }
    });
    return response.data;
  } catch (error) {
    console.error("Delete Error:", error.response?.data || error.message);
    throw error;
  }
};

// Update Gallery
export const updateGalleryApi = async (id, formData, token) => { // ID, data, aur token receive kiya
  try {
    const response = await apiClient.put(`/api/gallery/${id}`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data', // Kyuki image update ho sakti hai
        Authorization: `Bearer ${token}` // Token header mein pass kiya
      },
    });
    return response.data;
  } catch (error) {
    console.error("Update Error:", error.response?.data || error.message);
    throw error;
  }
};