import style from './style.module.css';
import PortofoliosMainPage from '@/Components/PortofoliosPage/PortofoliosMainPage';

export default async function page() {
    
    return (
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
    );
}