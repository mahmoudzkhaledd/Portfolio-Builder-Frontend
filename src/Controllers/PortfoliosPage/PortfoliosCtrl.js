
import axios from "@/Utils/Axios";
export async function getUserPortfolios() {
    try {
        const res = await axios.get('/portfolios');
        
        return res.data.portfolios;
    } catch (ex) {
        console.log(ex);
        return null;
    }
}
export async function getPortfolio(portId) {
    try {
        const res = await axios.get(`/portfolios/${portId}`);
        console.log(res.data);
        return res.data.portfolio;
    } catch (ex) {
        console.log(ex);
        return null;
    }
}
export async function getPortfolioComponents(portId) {
    try {
        const res = await axios.get(`/portfolios/${portId}/get-components`);
        
        return res.data;
    } catch (ex) {

        return null;
    }
}

export async function addPortfolioComponents(portId, chosen) {
    try {
        const res = await axios.put(`/portfolios/${portId}`, {
            chosen: chosen,
        });

        return res.data;
    } catch (ex) {
        return null;
    }
}