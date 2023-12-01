"use client";
import axios from "@/Utils/Axios";
export async function getUserPortfolios() {
    try {
        const res = await axios.get('/portfolios');
        return res.data.portfolios;
    } catch (ex) {
        return null;
    }
}
export async function getPortfolio(portId) {
    try {
        const res = await axios.get(`/portfolios/${portId}`);

        return res.data.portfolio;
    } catch (ex) {

        return null;
    }
}