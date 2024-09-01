import ProjectCard from "./ProjectCard";
import style from "./style.module.css";

export default function ProjectsViw({ projects }) {
  const cols = [[], [], []];
  if (projects) {
    let x = 0;
    for (const i of projects) {
      if (x >= cols.length) {
        x = 0;
      }
      cols[x].push(i);
      x++;
    }
  }
  return (
    <div className={style.projectsContainer}>
      {projects &&
        // projects.map((e) => (
        //   <ProjectCard
        //     key={i++}
        //     title={e.title}
        //     description={e.description}
        //     image={e.image}
        //     link={e.link}
        //   />
        // ))
        cols.map((k, idx1) => (
          <div key={idx1}>
            {k.map((e, idx2) => (
              <ProjectCard
                key={idx2}
                title={e.title}
                description={e.description}
                image={e.image}
                link={e.link}
              />
            ))}
          </div>
        ))}
    </div>
  );
}
