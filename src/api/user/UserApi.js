import request from '@/utils/request';
import { setToken } from '@/utils/token';

export const LoginUser = async (data) => await request({
    url: 'api/login',
    method: 'post',
    data,
}).then(res => {
    setToken(res.data.token);
}, error => error);

export const UserList = async (params) => {
    let users = [
        { id: '1', full_name: 'Manager Full Name', name: 'Manager 1', email: 'manager1@gmail.com', phone: '87008708787', photo: 'https://images.unsplash.com/photo-1529736576495-1ed4a29ca7e1?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjEyMDd9', is_online: true},
        { id: '2', full_name: 'Manager Full Name', name: 'Manager 2', email: 'manager2@gmail.com', phone: '87008708787', photo: 'https://images.unsplash.com/photo-1529736576495-1ed4a29ca7e1?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjEyMDd9', is_online: true},
        { id: '3', full_name: 'Manager Full Name', name: 'Manager 3', email: 'manager3@gmail.com', phone: '87008708787', photo: 'https://images.unsplash.com/photo-1529736576495-1ed4a29ca7e1?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjEyMDd9', is_online: true},
        { id: '4', full_name: 'Manager Full Name', name: 'Manager 4', email: 'manager4@gmail.com', phone: '87008708787', photo: 'https://images.unsplash.com/photo-1529736576495-1ed4a29ca7e1?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjEyMDd9', is_online: true},
    ];
    return new Promise((res) => {
        setTimeout(() => {
            res(users)
        }, 1000)
    })
};



