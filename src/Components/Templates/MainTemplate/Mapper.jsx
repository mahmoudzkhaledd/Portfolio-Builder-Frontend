import MainHero from "@/Components/Templates/MainTemplate/Hero/MainHero";
import ProjectsSection from '../../../Components/Templates/MainTemplate/Projects/ProjectsSection';
import AboutMeSection from "@/Components/Templates/MainTemplate/AboutMe/AboutMe";
import SkillsSection from "@/Components/Templates/MainTemplate/Skills/SkillsSection";
import SkillsLevel from "@/Components/Templates/MainTemplate/SkillsLevel";
import Navbar from "@/Components/Templates/MainTemplate/Navbar/Navbar";



export default function RnderComponents({ component }) {
    if (component.type == "Navbar") {
        return <Navbar data={component.data} />
    }
    if (component.type == "MainHero") {
        return (<>
            <MainHero data={component.data}/>
            <hr style={{ opacity: 0.3 }} />
        </>);
    }
    if (component.type == "ProjectsSection") {
        return (<><ProjectsSection data={component.data} />
            <hr style={{ opacity: 0.3 }} />
        </>)
    }
    if (component.type == "AboutMeSection") {
        return (<> <AboutMeSection data={component.data} />
            <hr style={{ opacity: 0.3 }} />
        </>)
    }
    if (component.type == "SkillsLevel") {
        return (<>
            <SkillsLevel data={component.data} />
            <hr style={{ opacity: 0.3 }} />
        </>)
    }
    if (component.type == "SkillsSection") {
        return (<>
            <SkillsSection data={component.data} />
            <hr style={{ opacity: 0.3 }} />
        </>)
    }
    return <></>;
}