"use client";
import axios from "@/Utils/Axios";

export async function getUserPages() {
    try {
        const res = await axios.get(`/pages`);
        return res.data.pages;
    } catch (ex) {
        return null;
    }
}
export async function addUserPages(name, url) {
    try {
        const res = await axios.post(`/pages`, {
            name,
            imageUrl: url,
        });
        return res.data.page;
    } catch (ex) {
        return null;
    }
}
