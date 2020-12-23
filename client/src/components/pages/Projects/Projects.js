import React, { useRef, useEffect, useContext } from 'react';

import { GlobalContext } from '../../../GlobalContext/GlobalContext';
import Project from './Project/Project';
import projects_data from '../../../assets/project_data/project_data';

const Projects = () => { 

    let allProjects = projects_data.map((project, index) => <Project key={index} project={project} /> );

    const { getContainerHeight, GetCurrentWidth } = useContext(GlobalContext);
    const container = useRef();
    const currentWidth = GetCurrentWidth();

    useEffect(() => getContainerHeight(container.current.clientHeight), [currentWidth]);

    return (
        <div ref={container} className="Projects">
            <div className="container mx-auto">
                <div className="Projects__title-holder">
                    <h1 className="Projects__title">Projects</h1>
                    <span className="projects-page-icon"></span>
                </div>
            </div>
            <div className="container mx-auto">
                <div className="Projects__holder mt-10">
                    {allProjects}
                </div>
            </div>
        </div>
    )
}

export default Projects
