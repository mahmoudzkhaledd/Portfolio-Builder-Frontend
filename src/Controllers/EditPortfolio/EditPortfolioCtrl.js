"use client";
import axios from "@/Utils/Axios";

export async function getComponent(portId, compId) {
    try {
        const res = await axios.get(`/portfolios/${portId}/components/${compId}`);
        return res.data.component;
    } catch (ex) {
        return null;
    }
}
export async function updateComponent(portId, compId, data) {
    try {
        const res = await axios.put(`/portfolios/${portId}/components/${compId}`, data);
        return res.status == 200;
    } catch (ex) {
        return null;
    }
}
