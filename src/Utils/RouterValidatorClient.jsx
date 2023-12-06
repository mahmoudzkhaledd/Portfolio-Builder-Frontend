"use client";
import { useLayoutEffect, } from 'react';
import { slice } from '@/hooks/Store/AppStore';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/navigation';
import cookies from 'js-cookie';
import ModeSwitcher from '@/Components/ModeSwitcher/ModeSwitcher';
export default function RouterValidatorClient({ children }) {
    const rout = useRouter();
    const disp = useDispatch();

    useLayoutEffect(() => {
        const process = async () => {
            try {
                const theme = localStorage.getItem('theme') || "light";
                disp(slice.actions.setTheme(theme));
                disp(slice.actions.setLoggedIn(true));
                return; 
            } catch (ex) {
                console.log('eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee');
            }
        }
        process();
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
