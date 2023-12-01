"use client";
import CardHover from '@/Components/General/CardHover/CardHover';
import { useEffect, useState,useRef } from 'react';
import Spinner from '../General/Spinner/Spinner';
import { getUserPortfolios } from '@/Controllers/PortfoliosPage/PortfoliosCtrl';
import style from './style.module.css';

export default function PortofoliosMainPage() {
 
    
    const [loading, setLoading] = useState({
        loading: true,
        ports: null,
    });
    useEffect(() => {
        const getPortfolios = async () => {
            const ports = await getUserPortfolios();
            setLoading({
                loading: false,
                ports: ports,
            });
        };
        getPortfolios();
    }, []);


    if (loading.loading) {
        return <div className={style.spinnerCont} style={{ justifyContent: 'center' }}>
            <Spinner size={40} />
        </div>

    }
    if (loading.ports == null) {
        return <h3>Error Loading Portfolios, please try again later.</h3>;
    }
    let i = 0;
    return (
        <>
            <CardHover link={`/templates`} title={"Add Template"} icon="fa-solid fa-circle-plus" />
            {
                loading.ports.map((e) => <CardHover
                    key={i++}
                    circleColor={`#${Math.floor(Math.random() * (256 * 256 * 256)).toString(16)}`}
                    link={`/dashboard/${e._id}`}
                    title={e.displayName}
                    icon="fa-solid fa-circle-plus"
                />)
            }
        </>
    )
}
