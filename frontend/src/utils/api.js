import axios from 'axios';
import { toast } from 'react-toastify';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor to add auth token
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor for error handling
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response) {
      const { status, data } = error.response;
      
      if (status === 401) {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        window.location.href = '/login';
        toast.error('Session expired. Please login again.');
      } else if (status === 403) {
        toast.error('You do not have permission to perform this action.');
      } else if (status === 404) {
        toast.error('Resource not found.');
      } else if (status === 500) {
        toast.error('Server error. Please try again later.');
      } else if (data.error) {
        toast.error(data.error);
      }
    } else if (error.request) {
      toast.error('Network error. Please check your connection.');
    } else {
      toast.error('An unexpected error occurred.');
    }
    
    return Promise.reject(error);
  }
);

// Auth API
export const authAPI = {
  login: (credentials) => api.post('/auth/login', credentials),
  register: (userData) => api.post('/auth/register', userData),
  getMe: () => api.get('/auth/me'),
};

// Contact API
export const contactAPI = {
  submit: (data) => api.post('/contact', data),
  getAll: (params) => api.get('/contact', { params }),
  updateStatus: (id, status) => api.patch(`/contact/${id}/status`, { status }),
  delete: (id) => api.delete(`/contact/${id}`),
};

// Blog API
export const blogAPI = {
  getAll: (params) => api.get('/blog', { params }),
  getBySlug: (slug) => api.get(`/blog/${slug}`),
  create: (data) => {
    const formData = new FormData();
    Object.keys(data).forEach(key => {
      if (key === 'featuredImage' && data[key]) {
        formData.append(key, data[key]);
      } else if (key === 'tags' && Array.isArray(data[key])) {
        formData.append(key, data[key].join(','));
      } else {
        formData.append(key, data[key]);
      }
    });
    return api.post('/blog', formData, {
      headers: { 'Content-Type': 'multipart/form-data' }
    });
  },
  update: (id, data) => {
    const formData = new FormData();
    Object.keys(data).forEach(key => {
      if (key === 'featuredImage' && data[key] instanceof File) {
        formData.append(key, data[key]);
      } else if (key === 'tags' && Array.isArray(data[key])) {
        formData.append(key, data[key].join(','));
      } else if (data[key] !== undefined) {
        formData.append(key, data[key]);
      }
    });
    return api.put(`/blog/${id}`, formData, {
      headers: { 'Content-Type': 'multipart/form-data' }
    });
  },
  delete: (id) => api.delete(`/blog/${id}`),
  getAllAdmin: (params) => api.get('/blog/admin/all', { params }),
};

// Projects API
export const projectsAPI = {
  getAll: (params) => api.get('/projects', { params }),
  getById: (id) => api.get(`/projects/${id}`),
  create: (data) => {
    const formData = new FormData();
    Object.keys(data).forEach(key => {
      if (key === 'images' && data[key]) {
        data[key].forEach(image => formData.append('images', image));
      } else if (key === 'technologies' && Array.isArray(data[key])) {
        formData.append(key, data[key].join(','));
      } else {
        formData.append(key, data[key]);
      }
    });
    return api.post('/projects', formData, {
      headers: { 'Content-Type': 'multipart/form-data' }
    });
  },
  update: (id, data) => {
    const formData = new FormData();
    Object.keys(data).forEach(key => {
      if (key === 'images' && data[key]) {
        data[key].forEach(image => formData.append('images', image));
      } else if (key === 'technologies' && Array.isArray(data[key])) {
        formData.append(key, data[key].join(','));
      } else if (data[key] !== undefined) {
        formData.append(key, data[key]);
      }
    });
    return api.put(`/projects/${id}`, formData, {
      headers: { 'Content-Type': 'multipart/form-data' }
    });
  },
  delete: (id) => api.delete(`/projects/${id}`),
};

// Services API
export const servicesAPI = {
  getAll: () => api.get('/services'),
  getById: (id) => api.get(`/services/${id}`),
  create: (data) => api.post('/services', data),
  update: (id, data) => api.put(`/services/${id}`, data),
  delete: (id) => api.delete(`/services/${id}`),
  getAllAdmin: () => api.get('/services/admin/all'),
};

export default api;