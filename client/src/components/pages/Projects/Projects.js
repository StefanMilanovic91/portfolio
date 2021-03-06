import React, { useRef, useEffect, useContext } from 'react';

import { GlobalContext } from '../../../GlobalContext/GlobalContext';
import Project from './Project/Project';
import projects_data from '../../../assets/project_data/project_data';

const Projects = () => { 

    const container = useRef();

    const allProjects = projects_data.map((project, index) => <Project key={index} project={project} />);

    const { getContainerHeight, GetCurrentWidth } = useContext(GlobalContext);
    const currentWidth = GetCurrentWidth();

    useEffect(() => {
        setTimeout(() => getContainerHeight(container.current.clientHeight), 1700);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [currentWidth]);
    
    
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

export default Projects;
