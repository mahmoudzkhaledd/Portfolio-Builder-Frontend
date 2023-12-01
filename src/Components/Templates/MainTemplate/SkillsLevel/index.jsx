import style from './style.module.css'
import SkillProgress from './SkillProgress'

export default function SkillsLevel({ data }) {
    let i =0;
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
            <br />
            <div className={style.grid}>

                {
                    data.skills && data.skills.map((e) => <SkillProgress key={i++} name={e.title} progress={e.progress} />)
                }
            </div>
            <br />
        </div>
    )
}
