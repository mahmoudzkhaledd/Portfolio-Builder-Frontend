import ChooseTemplate from '@/Components/ChooseTemplatesPage/ChooseTemplate';
import style from './style.module.css';

export default function page() {
    return (
        <div className={style.mainCont}>
            <div className={style.header}>
                <h4 style={{textAlign:'center'}}>Choose Template And Enjoy</h4>
            </div>
            <div className={style.body}>
                <ChooseTemplate />
            </div>
        </div>
    )
}
