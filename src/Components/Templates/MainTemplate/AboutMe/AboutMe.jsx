
import style from './style.module.css';
import ExperienceCard from './ExperienceCard';

export default function AboutMeSection({ data }) {
    let i = 0;
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
            <div className={style.aboutContainer} >
                {data.image && <img
                    src={data.image.link}
                    width={data.image.width}
                    height={data.image.height}
                    alt=""
                    className={style.image}
                    
                />}
                <div className={style.rightSec} style={{ width: '100%' }}>

                    <div className={style.experienceContainer}>
                        {
                            data.experiences.map((e) => {
                                return <ExperienceCard
                                    icon={e.icon}
                                    title={e.title}
                                    subTitle={e.subTitle}
                                    key={i++}
                                />;
                            })
                        }

                    </div>
                    <div >
                        <br />
                        <p className={style.subTitle}>{data.description}</p>
                        <br />
                        {
                            data.button && <button className={style.btn} >
                                <a href={data.button.link} target="_blank" rel="noopener noreferrer">
                                    {data.button.text}
                                </a>
                            </button>
                        }
                    </div>
                </div>
            </div>
        </div>

    )
}
