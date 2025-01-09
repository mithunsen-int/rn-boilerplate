import axios, { AxiosResponse } from 'axios';

const BASE_URL = 'https://reqres.in/'; // Add your base URL here

const axiosInstance = axios.create({
  baseURL: BASE_URL,
});

axiosInstance.interceptors.request.use(
  async (config) => {
    // Get token and add to headers

    /* if(idToken) {
      config.headers.Authorization = `Bearer ${idToken}`;
    } */
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

axiosInstance.interceptors.response.use(
  (response: AxiosResponse) => {
    return response;
  },
  async (error) => {
    const originalRequest = error.config;
    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      try {
        const refreshToken = '';
        const response = await axios.post('{{refresh-token-api}}', {
          token: refreshToken,
        });
        const newToken = response.data.token;

        // Update token in storage here

        originalRequest.headers.Authorization = `Bearer ${newToken}`;
        return axiosInstance(originalRequest);
      } catch (refreshError) {
        return Promise.reject(refreshError);
      }
    }

    return Promise.reject(error);
  },
);

export default axiosInstance;
