"use client";
import { createContext } from "react";
export const dashContext = createContext();
export default function DashCtxProvider({ children }) {
    return (
        <dashContext.Provider value={{
            currentPage: "Dashboard",
        }}>
            {children}
        </dashContext.Provider>
    );
} 