import axios from "axios";

axios.defaults.baseURL = 'http://localhost:3007/';
//axios.defaults.baseURL = 'http://192.168.1.8:3007/';
axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.withCredentials= true;
export default axios;