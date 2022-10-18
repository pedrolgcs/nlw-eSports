import axios, { AxiosInstance } from 'axios';
import { API_BASE_URL } from '@/constants/environments';

const axiosCreateInstance = (
  callback: (axiosInstance: AxiosInstance) => AxiosInstance
) => {
  axios.defaults.withCredentials = true;

  const api = axios.create({
    headers: {
      'X-Requested-With': 'XMLHttpRequest',
      'Content-Type': 'application/json',
    },
  });

  return callback(api);
};

export const api = axiosCreateInstance((axiosInstance: AxiosInstance) => {
  axiosInstance.interceptors.request.use((config) => {
    config.baseURL = API_BASE_URL;
    return config;
  });

  return axiosInstance;
});
