"use client"
import style from './style.module.css';
import PortofoliosMainPage from '@/Components/PortofoliosPage/PortofoliosMainPage';
import { useRouter } from 'next/navigation';
import Cookies from 'js-cookie';
export default async function page() {
    const rout = useRouter();
    const handelLogout = () => {
        "use client";
        Cookies.remove('token');
        localStorage.clear();
        rout.replace('/login');
    };
    return (
        <>
            <div style={{
                display: 'flex',
                justifyContent: 'end',
                alignItems: 'center',
                padding:'20px'
            }}>
                <li className={style.lst} onClick={handelLogout}>
                    <span>Logout</span>
                </li>
            </div>
            <div className={style.pageLayout}>
                <div className={style.title}>
                    <h3>👋 Good morning Mahmoud</h3>
                    <p className='subTitle'>Choose porofilio to enter dashboard</p>
                </div>
                <br />
                <br />
                <div className={style.portfolioContainer}>
                    <PortofoliosMainPage />
                </div>
            </div>
        </>
    );
}
