import request from '@/utils/request';
import { setToken } from '@/utils/token';

export const LoginUser = async (data) => await request({
    url: 'api/login',
    method: 'post',
    data,
}).then(res => {
    setToken(res.data.token);
}, error => error);