"use client";
import axios from "@/Utils/Axios";
export async function makeTemplateOrder(tempLink, description) {
    try {
        console.log({
            templateLink: tempLink,
            description,
        })
        const res = await axios.post('/orders/make-order', {
            templateLink: tempLink,
            description,
        });
        console.log(res.data)
        return res.data.order;
    } catch (ex) {
        
        
        return null;
    }
}

