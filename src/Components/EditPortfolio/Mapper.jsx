"use client";
import React, { useContext, useEffect, useState } from 'react'
import EditNavbarForm from './EditNavbar/EditNavbarForm';
import EditHero from './EditHero/EditHero';
import AboutMeEditor from './AboutMeSection/AboutMeEditor';
import ProjectsSectionEditor from './EditProjectsSection/ProjectsSectionEditor';
import { useParams } from 'next/navigation';
import { getComponent } from '@/Controllers/EditPortfolio/EditPortfolioCtrl';
import style from './style.module.css';
import Spinner from '../General/Spinner/Spinner';
import EditSkillsLevel from './EditSkillsLevel/EditSkillsLevel';
import GeneralSkillsEditor from './GeneralSkills/GeneralSkills';

function SorryDiv() {
    return (
        <div className={style.sorryDiv}>
            <h6>{"Sorry, we couldn't find the component you search for :("}</h6>
        </div>
    );
}

export default function EditPortfolioMapper({ }) {
    const param = useParams();
    const [loading, setLoading] = useState({
        loading: true,
        data: null,
    });

    if (param.compId == null || param.id == null || param.compId.length != 24 || param.id.length != 24) {
        return <SorryDiv />;
    }
    useEffect(() => {
        const process = async () => {
            loading.loading = true;
            setLoading({ ...loading });
            loading.data = await getComponent(param.id, param.compId);
            loading.loading = false;
            setLoading({ ...loading });
        };
        process();
    }, []);
    if (loading.loading) {
        return <div className={style.sorryDiv}>
            <Spinner />
        </div>;
    }
    const component = loading.data;
    if (loading.data == null) return <SorryDiv/>;

    if (component.settings.type == "Navbar") {
        return <EditNavbarForm data={component} />;
    }
    if (component.settings.type == "Hero Component") {
        return <EditHero data={component} />;
    }
    if (component.settings.type == "About Me Section") {
        return <AboutMeEditor data={component} />;
    }
    if (component.settings.type == "Projects Section") {
        return <ProjectsSectionEditor data={component} />;
    }
    if (component.settings.type == "Skills Level Section") {
        return <EditSkillsLevel data={component} />;
    }
    if (component.settings.type == "Skills Section") {
        return <GeneralSkillsEditor data={component} />;
    }

    return <></>;
}
