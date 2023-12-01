import ProjectCard from './ProjectCard';
import style from './style.module.css';

export default function ProjectsViw({ projects }) {
  let i = 0;
  return (
    <div className={style.projectsContainer}>
      {
        projects && projects.map((e) => <ProjectCard
          key={i++}
          title={e.title}
          description={e.description}
          image={e.image}
          link={e.link}
        />)
      }
    </div>
  )
}
