
import ProjectsCategory from './ProjectsCategory';
import style from './style.module.css';
import ProjectsViw from './ProjectsViw';
export default function ProjectsSection({ data }) {

    return (
        <div>
            <div style={{
                textAlign: 'center',
                marginTop: 20,
            }}>
                <h1>{data.title}</h1>
                <p style={{
                    color: "#a2a0ae",
                    marginTop: 10,
                    paddingInline: 50,
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
