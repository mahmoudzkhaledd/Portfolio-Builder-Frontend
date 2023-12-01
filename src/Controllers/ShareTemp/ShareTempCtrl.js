import axios from '@/Utils/Axios';

export async function makeUserShareTemp() {
    try {
        const res = await axios.get('/user/share-template');
        return res.status == 200;
    } catch (ex) {
        return false;
    }
}