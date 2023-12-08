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
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '20px',
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                zIndex: 100,
                backgroundColor: "var(--secondary)",
                
            }}>
                <h5 style={{userSelect:'none'}}>Portfolio Builder</h5>
                <li className={`${style.lst} icon-ext`} onClick={handelLogout}>
                    Logout
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
