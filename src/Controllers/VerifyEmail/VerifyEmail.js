import axios from '@/Utils/Axios';

export default async function verifyEmailCtrl(code) {
    const data = {
        success: false,
        message: null,
        data: null,
        logOut: false,
    };
    try {
        const res = await axios.post('verify-account', {
            code
        });
        data.success = true;
        data.data = res.data;
    } catch (ex) {
        const res = ex.response;
        if (res == null) {
            data.message = "Please Check Internet connection!";
            return data;
        }
        data.data = res.data;
        data.logOut = (res.status == 420);
        data.success = (res.status == 405);
        data.message = res.data.msg || "Unknown error occured, please try again later.";
    }
    return data;
}