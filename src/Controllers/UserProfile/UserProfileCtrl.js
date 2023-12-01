import axios from '@/Utils/Axios';

export async function updateUserPortfolio(componens,portId) {
    
    try {
        const res = await axios.put(`/portfolios/${portId}`, {
            componens
        });

        return res.status == 200;
    } catch (ex) {
        console.log(ex.response.data);
        return false;
    }
}