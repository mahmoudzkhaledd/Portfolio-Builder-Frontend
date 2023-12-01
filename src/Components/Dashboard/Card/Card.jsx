import style from './style.module.css';

export default function Card({ title, data, image }) {
    return (
        <div className={`${style.dataCont} card`}>
            <div>
                <h6 className={style.title}>{title}</h6>
                <br/>
                <h5 className={style.data}>{data}</h5>
            </div>
            {/* {
                image && <img src={image} className={style.image}/>
            } */}
        </div>
    )
}
