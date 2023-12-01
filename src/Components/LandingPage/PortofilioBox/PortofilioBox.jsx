import style from './style.module.css';

export default function portfolioBox({ name }) {
    return (
        <div className={style.portfolioBox}>
            <p className={style.title}>{name}</p>
        </div>
    )
}
