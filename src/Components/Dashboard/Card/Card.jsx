import style from './style.module.css';
import { IconButton } from '@mui/material';
export default function Card({ title, data, image, onClick }) {


    return (
        <div className={`${style.dataCont} card`}>
            <div>
                <h6 className={style.title}>{title}</h6>
                <br />
                <h5 className={style.data}>{data}</h5>
            </div>
            {
                onClick != null ? <IconButton onClick={onClick}>
                    <i className={`${style.image} ${image}`}></i>
                </IconButton> : <i className={`${style.image} ${image}`}></i>
            }

        </div>
    )
}
