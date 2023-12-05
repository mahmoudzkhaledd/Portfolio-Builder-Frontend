"use client";
import { useLayoutEffect, } from 'react';
import { slice } from '@/hooks/Store/AppStore';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/navigation';
import cookies from 'js-cookie';
export default function RouterValidatorClient({ children }) {
    const rout = useRouter();
    const disp = useDispatch();
    
    useLayoutEffect(() => {
        const process = async () => {
            try {

                const theme = localStorage.getItem('theme') || "light";
                disp(slice.actions.setTheme(theme));
                const str = localStorage.getItem('user');
                const strConf = localStorage.getItem('configs');
                const json = JSON.parse(str);
                const jsonConf = JSON.parse(strConf);
                if (json == null || jsonConf == null) {
                    throw "";
                }

                disp(slice.actions.setLoginState({
                    user: json,
                    configs: jsonConf,
                }));

                disp(slice.actions.setLoggedIn(true));
                return;
            } catch (ex) {
                disp(slice.actions.setLoggedIn(false))
                cookies.remove('token');
                rout.refresh();
            }
        }
        process();
    }, []);
    return children;
}
