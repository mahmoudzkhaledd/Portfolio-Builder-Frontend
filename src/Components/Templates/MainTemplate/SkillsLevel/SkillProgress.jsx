import style from './style.module.css';
export default function SkillProgress({ name, progress }) {
    if(progress > 100){
        progress = 100;
    }
    return (
        <div className={style.container}>
            <div className={style.data}>
                <p className={style.title}>{name}</p>
                <p className={style.progress}>{progress + "%"}</p>
            </div>
            <div className={style.progressContainer}>
                <div
                    className={style.progressBar}
                    style={{
                        width: `${progress}%`
                    }}
                ></div>
            </div>
        </div>
    )
}
