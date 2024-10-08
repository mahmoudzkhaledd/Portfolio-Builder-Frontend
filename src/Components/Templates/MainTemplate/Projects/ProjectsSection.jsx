
import ProjectsCategory from './ProjectsCategory';
import style from './style.module.css';
import ProjectsViw from './ProjectsViw';
export default function ProjectsSection({ data }) {
    
    return (
        <div id={data.id}>
            <div style={{
                textAlign: 'center',
                marginTop: 20,
            }}>
                <h3>{data.title}</h3>
                <p style={{
                    color: "#a2a0ae",
                    marginTop: 10,
                    
                }}>{data.subTitle}</p>
            </div>
            <div className={style.mainContainer}>
                <div>
                    <ProjectsCategory projects={data.projects} />
                </div>
                <ProjectsViw projects={data.projects} />
            </div>
        </div>

    )
}
