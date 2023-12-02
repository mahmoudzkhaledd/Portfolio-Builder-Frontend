import SkillContainer from "./SkillContainer";

import style from './style.module.css';

export default function SkillsSection({ data }) {
    let i =0;
    return (
        <div>
            <div style={{
                textAlign: 'center',
                marginTop: 20,
            }}>
                <h3>{data.title}</h3>
                <p style={{
                    color: "#a2a0ae",
                    marginTop: 10,
                    paddingInline: 50,
                }}>{data.subTitle}</p>
            </div>
            <br />
            <br />
            <div className={style.mainContainer}>
                {
                    data.skills && 
                    data.skills.map((e) => <SkillContainer key={i++} data={e.skills} title={e.title} />)
                }
            </div>
            <br />
        </div>
    )
}
