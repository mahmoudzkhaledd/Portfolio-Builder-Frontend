import jwt from "jsonwebtoken";
import { cookies, headers } from 'next/headers';
import dotEnv from 'dotenv';
import UnauhtorizedPage from "@/Components/General/UnAuthorized/Unauhtorized";
import { redirect } from 'next/navigation'
dotEnv.config();

const unProtectedRoutes = [
    '/login',
    '/register',
    '/portfolio/:id',
];
const notAlloweRoutes = [
    '/login',
    '/register',
    '/verify-email',
];

function matchRoute(incomingRoute) {
    for (const route of unProtectedRoutes) {
        const regexRoute = new RegExp('^' + route.replace(/:[a-zA-Z0-9]+/g, '([a-zA-Z0-9]+)') + '$');
        if (regexRoute.test(incomingRoute)) {
            return true;
        }
    }
    return false;
}


export default async function RouterValidator({ children }) {
    "use server";

    const headersList = headers();
    
    const header_url = headersList.get('x-url');
    
    const token = cookies().get('token');

    let userModel;
    try {
        userModel = jwt.verify(token.value.split(' ')[1], process.env.ACCESS_TOKEN_KEY);
        if(userModel == null) throw "";
    } catch (ex) {
        
        if (matchRoute(header_url)) {
            return children;
        }
        return <UnauhtorizedPage />
    }
    if (!userModel.verifiedEmail && header_url != '/verify-email') {
        return redirect('/verify-email');
    }
    if(notAlloweRoutes.includes(header_url) && userModel.verifiedEmail){
        return redirect('/');
    }
    
    return children;
}
