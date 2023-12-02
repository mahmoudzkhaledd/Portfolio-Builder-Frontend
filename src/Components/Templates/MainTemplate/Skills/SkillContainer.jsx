import style from './style.module.css'
export default function SkillContainer({ data, title }) {
    let i =10;
    return (
        <div className={style.skillContainer}>
            <h4>{title}</h4>
            <br/>
            <div className={style.skillsCollector}>
                {
                    data.map((e) => <span key={i++} className={style.prop}>
                        {e}
                    </span>)
                }
            </div>
        </div>
    )
}
