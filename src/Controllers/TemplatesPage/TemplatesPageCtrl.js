"use client";
import axios from "@/Utils/Axios";
export async function templatesPageCtrl() {
    try {
        const res = await axios.get('/template');
        return res.data.templates;
    } catch (ex) {
        return null;
    }
}

export async function addTemplateToUser(templateId, displayName) {
    try {
        const res = await axios.post(`template/${templateId}/get-template`,{
            displayName
        });

        return res.data.portfolio;
    } catch (ex) {

        return null;
    }
}
