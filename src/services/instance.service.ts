import axios from "axios";

export const instance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

const username = import.meta.env.VITE_APP_API_USERNAME;
const password = import.meta.env.VITE_APP_API_PASSWORD;

const token = btoa(`${username}:${password}`);

instance.interceptors.request.use((config) => {
  config.headers.Authorization = `Basic ${token}`;
  return config;
});
