"use client";
import style from './style.module.css';
import { useEffect, useState } from 'react';
import Spinner from '../General/Spinner/Spinner';
import {templatesPageCtrl} from '@/Controllers/TemplatesPage/TemplatesPageCtrl';
import TemplateCard from './TemplateCard';

export default function ChooseTemplate() {
    const [loading, setLoading] = useState({
        loading: true,
        temps: null,
    });

    useEffect(() => {
        const loadTemps = async () => {
            const temps = await templatesPageCtrl();
            setLoading({
                loading: false,
                temps: temps,
            });
        }
        loadTemps();
    }, []);

    if (loading.loading) {
        return <div className={style.spinnerCont} style={{ justifyContent: 'center' }}>
            <Spinner size={40} />
        </div>

    }
    if (loading.temps == null) {
        return <h3>Error Loading Templates, please try again later.</h3>;
    }
    let i =0;
    return (
        <div className={style.body}>
            {
                loading.temps.map((e)=> <TemplateCard key={i++} template={e}/>)
            }
        </div>
    )
}
