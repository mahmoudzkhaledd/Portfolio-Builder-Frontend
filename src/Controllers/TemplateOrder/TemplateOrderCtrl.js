"use client";
import axios from "@/Utils/Axios";
export async function makeTemplateOrder(tempLink, description) {
    try {
        
        const res = await axios.post('/orders/make-order', {
            templateLink: tempLink,
            description,
        });
        
        return res.data.order;
    } catch (ex) {
        
        
        return null;
    }
}

