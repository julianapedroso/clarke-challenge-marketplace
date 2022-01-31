import axios from 'axios';
import { BASE_URL } from './constants';

export const api = axios.create({
  baseURL: BASE_URL,
});

export const createSession = async (email, password) => {
  return api.post('/auth/signin', { email, password });
};

export const getProviders = async () => {
  return api.get('/providers');
};
