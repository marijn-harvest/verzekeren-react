import axios from 'axios';
import history from "./history";

const axiosInstance = axios.create();

axiosInstance.interceptors.request.use((config) => {
    config.withCredentials = true;
    config.headers = {...config.headers, 'X-Requested-With': 'XMLHttpRequest'};
    return config;
});

axiosInstance.interceptors.response.use((response) => {
    return response;
}, (error) => {
    if (error.response.status === 401) {
        sessionStorage.setItem('isAuthenticated', 'false');
        history.push('/');
    }
    return Promise.reject(error);
});

export default axiosInstance;