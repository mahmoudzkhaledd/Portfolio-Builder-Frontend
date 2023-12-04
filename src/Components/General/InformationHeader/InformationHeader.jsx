import Button from '../Button/Button';
import style from './style.module.css';

export default function InformationHeader({title,buttonText,onClick,image }) {


    return (
        <>
            <div className={style.headerContainer}>
                <div className={style.titleCont}>
                    <h2>{title}</h2>
                    <br />
                    <Button
                        width="fit-content"
                        justifyContent="center"
                        text={buttonText}
                        className="icon-ext"
                        onClick={onClick} />

                </div>
                <img  className={style.headerImage} src={image} />
            </div>
        </>
    )
}
