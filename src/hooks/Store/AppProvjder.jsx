"use client";
import { Provider, useDispatch } from 'react-redux';
import appStore from '@/hooks/Store/AppStore';

export default function AppProvider({ children }) {

    return (
        <Provider store={appStore}>
            {children}
        </Provider>
    );
}
