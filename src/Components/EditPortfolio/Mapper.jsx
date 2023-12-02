"use client";
import React, { useContext } from 'react'
import EditNavbarForm from './EditNavbar/EditNavbarForm';
import EditHero from './EditHero/EditHero';
import AboutMeEditor from './AboutMeSection/AboutMeEditor';
import ProjectsSectionEditor from './EditProjectsSection/ProjectsSectionEditor';

export default function EditPortfolioMapper({ component, onClose }) {
    const toEdit = JSON.parse(sessionStorage.getItem('toEdit'));
    component = component || toEdit;
    if (component == null ) return <></>;
    if (component.type == "Navbar") {
        return <EditNavbarForm data={component.data} />;
    }
    if (component.type == "MainHero") {
        return <EditHero data={component.data} />;
    }
    if (component.type == "AboutMeSection") {
        return <AboutMeEditor data={component.data} />;
    }
    if (component.type == "ProjectsSection") {
        return <ProjectsSectionEditor data={component.data} />;
    }

    return <></>;
}
