import React, { useContext } from 'react'
import CustomModal from '../Modal/CustomModal'
import EditNavbarForm from './EditNavbar/EditNavbarForm';
import { profileCtx } from '../UserPortfolio/Context/UserProfileContext';
import EditHero from './EditHero/EditHero';
import AboutMeEditor from './AboutMeSection/AboutMeEditor';
import ProjectsSectionEditor from './EditProjectsSection/ProjectsSectionEditor';

export default function EditPortfolioMapper({ component, onClose }) {
    if (component == null) return <></>;
    const ctx = useContext(profileCtx);
    ctx.component = component;
    const handelClose = () => {
        ctx.component = null;
        onClose();
    }
    if (component.type == "Navbar") {
        return <CustomModal onClose={handelClose} title="Edit Navbar">
            <EditNavbarForm data={component.data} onClose={onClose}/>
        </CustomModal>;
    }
    if (component.type == "MainHero") {
        return <CustomModal onClose={handelClose} title="Edit Hero Section">
            <EditHero data={component.data} onClose={onClose}/>
        </CustomModal>;
    }
    if (component.type == "AboutMeSection") {
        return <CustomModal onClose={handelClose} title="Edit About Me Section">
            <AboutMeEditor data={component.data} onClose={onClose}/>
        </CustomModal>;
    }
    if (component.type == "ProjectsSection") {
        return <CustomModal onClose={handelClose} title="Edit Projects Section">
           <ProjectsSectionEditor data={component.data} onClose={onClose}/>
        </CustomModal>;
    }

    return <></>;
}
