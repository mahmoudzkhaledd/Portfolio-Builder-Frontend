"use client";
import { useLayoutEffect, } from 'react';
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
    console.log('object');
    try {
        const storage = localStorage.getItem('token');
        const cok = cookies.get('token');
        if (cok == null || storage == null) {
            throw "";
        }
        const theme = localStorage.getItem('theme') || "light";
        disp(slice.actions.setTheme(theme));
        disp(slice.actions.setLoggedIn(true));

    } catch (ex) {
        if(!matchRoute(window.location.pathname)){
            localStorage.removeItem('token');
            cookies.remove('token');
            rout.replace('/login');
        } 
    }
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
