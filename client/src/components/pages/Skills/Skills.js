import React, { useEffect, useRef, useContext } from 'react';
import { GlobalContext } from '../../../GlobalContext/GlobalContext';
import icons from './icons';

const Skills = () => {

    const container = useRef();

    const { getContainerHeight, GetCurrentWidth } = useContext(GlobalContext);
    const currentWidth = GetCurrentWidth();
    
    useEffect(() => getContainerHeight(container.current.clientHeight), [currentWidth]);

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
                    <img className="Skills__content__img d-block ml-auto" src={icons.html_icon} alt="html" />
                </div>
                <div className="Skills__content__item">
                    <h3 className="Skills__content__title">CSS</h3>
                    <img className="Skills__content__img d-block ml-auto" src={icons.css_icon} alt="css" />
                </div>
                <div className="Skills__content__item">
                    <h3 className="Skills__content__title">SASS</h3>
                    <img className="Skills__content__img d-block ml-auto" src={icons.sass_icon} alt="sass" />
                </div>
                <div className="Skills__content__item">
                    <h3 className="Skills__content__title">JavaScript</h3>
                    <img className="Skills__content__img d-block ml-auto" src={icons.js_icon} alt="javascript" />
                </div>
                <div className="Skills__content__item">
                    <h3 className="Skills__content__title">Mongo DB</h3>
                    <img className="Skills__content__img d-block ml-auto" src={icons.mongodb_icon} alt="mongodb" />
                </div>
                <div className="Skills__content__item">
                    <h3 className="Skills__content__title">Express JS</h3>
                    <img className="Skills__content__img d-block ml-auto" src={icons.express_icon} alt="express" />
                </div>
                <div className="Skills__content__item">
                    <h3 className="Skills__content__title">React</h3>
                    <img className="Skills__content__img d-block ml-auto" src={icons.react_icon} alt="react" />
                </div>
                <div className="Skills__content__item">
                    <h3 className="Skills__content__title">Node JS</h3>
                    <img className="Skills__content__img d-block ml-auto" src={icons.nodejs_icon} alt="nodejs" />
                </div>

                </div>
            </div>
        </div>
    )
}

export default Skills;
