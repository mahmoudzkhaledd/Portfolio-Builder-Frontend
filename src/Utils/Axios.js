"use client";

import axios from "axios";
//axios.defaults.baseURL = 'http://localhost:3007/';
axios.defaults.baseURL = 'https://portfolio-248t.onrender.com/';
//axios.defaults.baseURL = 'http://192.168.1.8:3007/';




axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.withCredentials = true;




axios.interceptors.request.use(request => {
    request.headers.set('token', `Bearer ${localStorage.getItem('token')}`);
    return request;
}, error => {
    return Promise.reject(error);
});


axios.interceptors.response.use(response => {
    if (response.data.token != null) {
        document.cookie = `token = Bearer ${response.data.token}; samesite=none; secure`;
        localStorage.setItem('token',response.data.token)
    }
    return response;
}, error => {
    return Promise.reject(error);
});

export default axios;
