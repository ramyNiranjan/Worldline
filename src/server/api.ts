import axios from 'axios';

const API_URL = 'https://jsonplaceholder.typicode.com';

export const api = axios.create({
  baseURL: API_URL,
});

export const fetchPosts = (page: number = 1) => api.get(`/posts?_page=${page}`);
export const fetchPost = (id: number) => api.get(`/posts/${id}`);
export const fetchComments = (postId: number) => api.get(`/posts/${postId}/comments`);
export const createPost = (data: { title: string; body: string, userId:number }) => api.post(`/posts`, data);
export const updatePost = (id: number, data: { title: string; body: string, userId:number }) => api.put(`/posts/${id}`, data);
export const deletePost = (id: number) => api.delete(`/posts/${id}`);
export const fetchUsers = () => api.get(`/users`);
export const fetchUserPosts = (userId: number) => api.get(`/posts/?userId=${userId}`);

