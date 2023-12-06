import SkillContainer from "./SkillContainer";

import style from './style.module.css';

export default function SkillsSection({ data }) {
    const skills = {};
    for (const x of data.skills) {
        if (skills[x.category] == null) {
            skills[x.category] = [x.title];
        } else {
            skills[x.category].push(x.title);
        }
    }

    let i = 0;
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
                    
                }}>{data.subTitle}</p>
            </div>
            <br />
            <br />
            <div className={style.mainContainer}>
                {
                    skills &&
                    Object.keys(skills)
                        .map((e) => <SkillContainer key={i++} data={skills[e]} title={e} />)
                }
            </div>
            <br />
        </div>
    )
}
