import style from './style.module.css';

export default function ExperienceCard({ icon, title, subTitle }) {
    return (
        <div className={style.experienceCard}>
            <i className={`${icon} icon ${style.icon}`}></i>
            <p className={style.title}>{title}</p>
            <p className={style.subTitle}>{subTitle}</p>

        </div>
    )
}
