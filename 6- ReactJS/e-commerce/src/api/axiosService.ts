import axios from 'axios';

// export const axiosInstance = axios.create({
//   baseURL: API_URL,
//   headers: {
//     'Authorization': `Bearer ${token}`,
//     'Content-type': 'application/json; charset=UTF-8',
//   },
// });

export const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_BACKEND,
});

axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    const auth = token ? `Bearer ${token}` : '';
    config.headers['Authorization'] = auth;
    return config;
  },
  (error) => Promise.reject(error),
);

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 401) {
      console.log('call the refresh token api here')
      // Handle 401 error, e.g., redirect to login or refresh token
    }
    console.log('Status Code: ', error.response.status)
    return Promise.reject(error)
  },
)