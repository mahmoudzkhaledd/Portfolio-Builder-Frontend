import MainHero from "@/Components/Templates/MainTemplate/Hero/MainHero";
import ProjectsSection from '../../../Components/Templates/MainTemplate/Projects/ProjectsSection';
import AboutMeSection from "@/Components/Templates/MainTemplate/AboutMe/AboutMe";
import SkillsSection from "@/Components/Templates/MainTemplate/Skills/SkillsSection";
import SkillsLevel from "@/Components/Templates/MainTemplate/SkillsLevel";
import Navbar from "@/Components/Templates/MainTemplate/Navbar/Navbar";



export default function RnderComponents({ component,className }) {

    if (component.type == "Navbar") {
        return <Navbar data={component.data} />
    }
    if (component.type == "Hero Component") {
        return (<div className={className}>
            <MainHero data={component.data}/>
            
        </div>);
    }
    if (component.type == "Projects Section") {
        return (<div className={className}><ProjectsSection data={component.data} />
            
        </div>)
    }
    if (component.type == "About Me Section") {
        return (<div className={className}> <AboutMeSection data={component.data} />
            
        </div>)
    }
    if (component.type == "Skills Level Section") {
        return (<div className={className}>
            <SkillsLevel data={component.data} />
            
        </div>)
    }
    if (component.type == "Skills Section") {
        return (<div className={className}>
            <SkillsSection data={component.data} />
            
        </div>)
    }
    return <></>;
}