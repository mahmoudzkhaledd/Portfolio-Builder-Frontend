import style from './style.module.css';
import { IconButton } from '@mui/material';
import { Tooltip } from "@nextui-org/react";
export default function Card({ children, className, title, data, image, onClick, toolTip }) {


    return (
        <div className={`${style.dataCont} card ${className}`}>
            {children || <>
                <div>
                    <h6 className={style.title}>{title}</h6>
                    <br />
                    <h5 className={style.data}>{data}</h5>
                </div>
                <Tooltip content={toolTip} className={style.toolTip} showArrow={true}>
                    {
                        onClick != null ? <IconButton onClick={onClick}>
                            <i className={`${style.image} ${image}`}></i>
                        </IconButton> : <i className={`${style.image} ${image}`}></i>
                    }
                </Tooltip>
            </>}

        </div>
    )
}
