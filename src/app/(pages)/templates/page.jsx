import ChooseTemplate from '@/Components/ChooseTemplatesPage/ChooseTemplate';
import style from './style.module.css';

export default function page() {
    return (
        <div className={style.mainCont}>
            <div className={style.header}>
                <h2>Choose Template And Enjoy</h2>
            </div>
            <div className={style.body}>
                <ChooseTemplate />
            </div>
        </div>
    )
}
