import axios from '@/Utils/Axios';

export async function configsCtrl() {
    try {
        const res = await axios.get('configs');
        return res.data.configs;
    } catch (ex) {
        console.log(ex.response.data)
        return null;
    }
}
