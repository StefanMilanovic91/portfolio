import React, { useEffect, useRef, useContext } from 'react';
import { GlobalContext } from '../../../GlobalContext/GlobalContext';

const Skills = () => {

    const container = useRef();

    const { getContainerHeight, GetCurrentWidth } = useContext(GlobalContext);
    const currentWidth = GetCurrentWidth();
    
    useEffect(() => {
        setTimeout(() => getContainerHeight(container.current.clientHeight), 1700);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [currentWidth]);

    return (
        <div ref={container} className="Skills" >
            <div className="container mx-auto">
                <div className="Skills__title-holder">
                    <h1 className="Skills__title">Skills</h1>
                    <span className="skills-page-icon"></span>
                </div>
            </div>
            <div className="container mx-auto mt-10">
                <div className="Skills__content" >
                <div className="Skills__content__item">
                    <h3 className="Skills__content__title">HTML</h3>
                    <img className="Skills__content__img d-block ml-auto" src="icons/html.png" alt="html" />
                </div>
                <div className="Skills__content__item">
                    <h3 className="Skills__content__title">CSS</h3>
                    <img className="Skills__content__img d-block ml-auto" src="icons/css.png" alt="Css" />
                </div>
                <div className="Skills__content__item">
                    <h3 className="Skills__content__title">SASS</h3>
                    <img className="Skills__content__img d-block ml-auto" src="icons/sass.png" alt="Sass" />
                </div>
                <div className="Skills__content__item">
                    <h3 className="Skills__content__title">JavaScript</h3>
                    <img className="Skills__content__img d-block ml-auto" src="icons/js.png" alt="JavaScript" />
                </div>
                <div className="Skills__content__item">
                    <h3 className="Skills__content__title">React</h3>
                    <img className="Skills__content__img d-block ml-auto" src="icons/react.png" alt="React" />
                </div>
                

                </div>
            </div>
        </div>
    )
}

export default Skills;
