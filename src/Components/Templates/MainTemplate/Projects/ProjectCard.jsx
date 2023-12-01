import Image from 'next/image';
import style from './style.module.css';

export default function ProjectCard({ title, description, image, link }) {
    return (
        <div className={style.projectCard}>
            <img
                src={image}
                className={style.cardImage}
            />
            <div className={style.cardTitleContainer}>
                <h1 className={style.cardTitle}>{title}</h1>
                <p className={style.cardSubTitle}>{description}</p>
            </div>
        </div>
    )
}
