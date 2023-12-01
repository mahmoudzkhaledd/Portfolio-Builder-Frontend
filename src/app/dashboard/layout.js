"use client";
import Navbar from '@/Components/Dashboard/Navboar/Navbar';
import style from './layoutStyle.module.css';
import SideBar from "@/Components/Dashboard/SideBar/Sidebar";

import { useState, useEffect, useContext } from 'react';
import { dashContext } from '@/hooks/state/dashboardState';
import { useParams } from 'next/navigation';
import Spinner from '@/Components/General/Spinner/Spinner';
import { getPortfolio } from '@/Controllers/PortfoliosPage/PortfoliosCtrl';


export default function layout({ children }) {
    const param = useParams();
    if (param.id == null || param.id.length != 24) {
        return <div className={style.sorryDiv}> Sorry, we can't find the portfolio you search for </div>;
    }
    const ctx = useContext(dashContext);

    const [page, setPage] = useState("Dashboard");
    const [loading, setLoading] = useState({
        loading: true,
        port: null,
    });
    const handelPage = (text) => {
        if (page != text) {
            setPage(text);
        }
    }
    useEffect(() => {
        const getUsrPortfolio = async () => {
            const port = await getPortfolio(param.id);
            setLoading({
                loading: false,
                port: port,
            });
        };
        getUsrPortfolio();
    }, []);
    if (loading.loading) {
        return <div className={style.sorryDiv}> <Spinner size={35}/> </div>;
    }
    if (loading.port == null) {
        return <div className={style.sorryDiv}> Sorry, we can't find the portfolio you search for </div>;
    }
    return (
        <dashContext.Provider value={{ currentPage: page, setPage: handelPage,port:loading.port }}>

            <div className={style.mainBody}>
                <SideBar />
                <div style={{ width: "100%" }}>
                    <Navbar />
                    <div className={style.secBody}>
                        {children}
                    </div>
                </div>
            </div>
        </dashContext.Provider>
    )
}
