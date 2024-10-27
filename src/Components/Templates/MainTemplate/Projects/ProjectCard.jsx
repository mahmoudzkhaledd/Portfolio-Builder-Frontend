import Image from "next/image";
import style from "./style.module.css";
import Link from "next/link";
export default function ProjectCard({ title, description, image, link }) {
  return (
    <Link href={link} target="_blank" rel="noopener noreferrer">
      <div className={style.projectCard}>
        <img src={image} className={style.cardImage} />
        <div className={style.cardTitleContainer}>
          <h1 className={style.cardTitle}>{title}</h1>
          <div
            className={style.cardSubTitle}
            dangerouslySetInnerHTML={{ __html: description }}
          />
          {/* <p className={style.cardSubTitle}>{description}</p> */}
        </div>
      </div>
    </Link>
  );
}
