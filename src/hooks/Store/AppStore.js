"use client";
import { configureStore } from '@reduxjs/toolkit';
import { composeWithDevTools } from 'redux-devtools-extension';
import cookie from 'js-cookie';
import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({
    name: "userSlice",
    initialState: {
        user: null,
        configs: null,
        loggedIn: false,
    },
    reducers: {
        configureLogin: (state, action) => {
            state.user = action.payload.user;
            state.configs = action.payload.configs;
            localStorage.setItem("user", JSON.stringify(state.user));
        },
        setLoginState: (state, action) => {
            state.user = action.payload.user;
            state.configs = action.payload.configs;

        },
        logOut: (state) => {
            state.user = null;
            cookie.remove('token');
            localStorage.removeItem("user");
        },
        shareTemp: (state) => {
            state.user.shareTemp = true;
        },
        setConfigs: (state, action) => {
            state.configs = action.payload;
        },
        setLoggedIn: (state, action) => {
            state.loggedIn = action.payload;
            console.log(state.loggedIn);
        }
    }
});

export default configureStore({
    reducer: slice.reducer,
    devTools: true,
}, composeWithDevTools());
