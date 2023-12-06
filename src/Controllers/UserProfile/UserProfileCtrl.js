import axios from '@/Utils/Axios';

export async function updateUserPortfolio(componens, portId) {

    try {
        const res = await axios.put(`/portfolios/${portId}`, {
            componens
        });

        return res.status == 200;
    } catch (ex) {

        return false;
    }
}


export async function switchPortfolioState(portId, state) {
    try {
        const res = await axios.put(`/portfolios/${portId}/switch-state`, {
            state
        });
        return res.data.port;
    } catch (ex) {
        return null;
    }
}
