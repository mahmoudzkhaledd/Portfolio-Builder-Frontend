import { createContext } from "react";

export const profileCtx = createContext();

export function UserProfileContextProvider({ children, value }) {
    return (
        <profileCtx.Provider value={value || {}}>
            {children}
        </profileCtx.Provider>
    )
}
