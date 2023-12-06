import axios from '@/Utils/Axios';
export async function loginCtrl(email, password) {
    const data = {
        success: false,
        message: null,
        data: null,
        emailVerified: true,
    };
    try {
        const res = await axios.post('login', {
            email,
            password
        });
        data.success = true;
        data.emailVerified = true;
        data.data = {
            user: res.data.user,
            configs: res.data.configs,
        };
        localStorage.setItem('user', JSON.stringify(res.data.user));
        localStorage.setItem('configs', JSON.stringify(res.data.configs));


    } catch (ex) {
        const res = ex.response;
        if (res == null) {
            data.message = "Please Check Internet connection!";
            return data;
        }
        data.data = res.data;
        if (res.status === 401) {
            data.message = 'Please Check Your Email and Password';
        }
        else if (res.status === 402) {
            data.emailVerified = false;
            data.data = {
                user: res.data.user,
                configs: res.data.configs,
            };
        }
        else if (res.status === 400) {
            data.message = res.data;
        }
    }
    return data;
}
export async function register(firstName, lastName, email, password) {
    const data = {
        success: false,
        message: null,
        data: null,
        emailVerified: false,
    };
    try {
        const res = await axios.post('signup', {
            email,
            password,
            firstName,
            lastName
        });
        data.success = true;
        data.emailVerified = false;
        data.data = {
            user: res.data.user,
            configs: res.data.configs,
        };
        localStorage.setItem('user', JSON.stringify(res.data.user));
        localStorage.setItem('configs', JSON.stringify(res.data.configs));


    } catch (ex) {
        const res = ex.response;
        if (res == null) {
            data.message = "Please Check Internet connection!";
            return data;
        }
        data.data = res.data;
        if (res.status === 409) {
            data.message = 'User already exist!';
        }
        else if (res.status === 402) {
            data.emailVerified = false;
            data.data = {
                user: res.data.user,
                configs: res.data.configs,
            };
        }
        else if (res.status === 420) {
            data.message = res.data.msg;
        }
        else if (res.status === 400) {
            data.message = res.data;
        }
    }
    return data;
}
