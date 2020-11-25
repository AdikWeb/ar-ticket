import axios from 'axios';
import { getToken } from '@/utils/token';

const request = axios.create({
    baseURL: process.env.VUE_APP_BACKEND
});

request.interceptors.request.use(
    config => {
        if (getToken()) {
            config.headers['Authorization'] = getToken()
        }
        return config
    },
    error => {
        return Promise.reject(error)
    }
)

request.interceptors.response.use(
    response => {
        const res = response
        if (res.status !== 200) {
            return Promise.reject(new Error(res.data.error || 'Error'));
        } else {
            return res
        }
    },
    error => {
        //!TODO сделать выход if (error.response.status === 401) store.dispatch('logout')
        return Promise.reject({ error: error, color: 'danger', message: error.response.data.error })
    }
);

export default request;