import { useState } from 'react';
import style from './style.module.css';
import { IconButton } from '@mui/joy';
import { IoIosArrowUp } from "react-icons/io";



export default function CollapseCard({ children, className, title, headerColor, bodyColor, initialState }) {
    const [collapse, setCollapse] = useState(initialState || false);
    const handelCollpse = () => {
        setCollapse(!collapse);
    };
    const bodyStyle = {
        backgroundColor: bodyColor || "var(--secondary)",
        height: collapse ? "0":"auto",
    };
    const headerStyle = {
        backgroundColor: headerColor|| "var(--secondary-select)",
    };

    return (
        <div className={`${style.card}`}>
            <div className={style.cardHeader} style={headerStyle}>
                <h5 className={style.title}>{title}</h5>
                <IconButton onClick={handelCollpse} className='icon-ext'>
                    <IoIosArrowUp className={`${style.icon} ${!collapse ? style.rotate : ""}`} />
                </IconButton>
            </div>
            <div className={`${style.cardBody} `} style={bodyStyle}>
                <div className={`${style.cardContent} ${className}`}>
                    {children}
                </div>
            </div>
        </div>
    )
}
