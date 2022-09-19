import axios, { AxiosInstance } from 'axios';

const axiosCreateInstance = (
  callback: (axiosInstance: AxiosInstance) => AxiosInstance
) => {
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
    config.baseURL = 'http://localhost:3333';
    return config;
  });

  return axiosInstance;
});
