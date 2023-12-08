"use client";
import { useEffect, useLayoutEffect, } from 'react';
import { slice } from '@/hooks/Store/AppStore';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/navigation';
import cookies from 'js-cookie';
import ModeSwitcher from '@/Components/ModeSwitcher/ModeSwitcher';



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


export default function RouterValidatorClient({ children }) {
    const rout = useRouter();
    const disp = useDispatch();

    useEffect(() => {
        try {
            const storage = localStorage.getItem('token');
            const cok = cookies.get('token');

            const theme = localStorage.getItem('theme') || "light";
            console.log(theme);
            disp(slice.actions.setTheme(theme));
            if (cok == null || storage == null) {
                throw "";
            }
            disp(slice.actions.setLoggedIn(true));
            

        } catch (ex) {

            if (typeof window !== 'undefined' && !matchRoute(window.location.pathname)) {
                window.localStorage.removeItem('token');
                cookies.remove('token');
                rout.replace('/login');
            }
        }
    }, []);


    return <div style={{
        width: "100%",
        height: "100%",

    }}>
        <div style={{
            zIndex: 1000,
            right: 30,
            bottom: 30,
            position: 'fixed'
        }}><ModeSwitcher /></div>
        {children}
    </div>;
}
