import axios from "axios";

const apiUrl = process.env.REACT_APP_API_URL;

const params = {
  baseURL: apiUrl,
};

const api = axios.create(params);

api.interceptors.request.use(
  (config) => config,
  (error) => Promise.reject(error)
);

api.interceptors.response.use(
  (response) => response,
  (error) => Promise.reject(error)
);

export default api;
