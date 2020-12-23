import React, { useRef, useState } from 'react';



const Project = ({ project }) => {
    
    const [moveCardStyle, setMoveCardStyle] = useState({ "transform": "rotateX(0deg) rotateY(0deg)" });
    
    const container = useRef();

    const moveProjectCardHendler = (e) => {

        let cardFromLeft = container.current.getBoundingClientRect().left;
        let cardFromTop = e.currentTarget.offsetTop;
        
        let yAxis = (e.pageY - cardFromTop).toFixed();
        let xAxis = (e.pageX - cardFromLeft).toFixed();

        let calcYdeg = (10 - ((xAxis / 110) * 10)).toFixed(1);
        let calcXdeg = (- + (10 - ((yAxis / 192) * 10))).toFixed(1);

        setMoveCardStyle({ "transform": `rotateX(${calcXdeg}deg) rotateY(${calcYdeg}deg)` });

    }
   
    const resetMoveCardStyle = () => {
        setMoveCardStyle({"transform": "rotateX(0deg) rotateY(0deg)"})
    }


    return (
        <div ref={container} onMouseMove={moveProjectCardHendler} onMouseLeave={resetMoveCardStyle} className="Project">
            <div style={moveCardStyle} className="Project__holder">
                <div className="Project__img">
                    <img className="Project__img__item" src={project.imgSrc} alt={project.name} />
                </div>
                <div className="Project__content">
                    <p className="Project__content__title">
                        {project.name}
                    </p>
                    <p className="Project__content__tech">
                        Tech:  <span>[</span>{ ` ${project.tech}`}<span> ]</span>
                    </p>
                    <div className="divider"></div>
                    <div className="Project__content__links">
                        <a className="Project__content__link Project__content__github" href={project.gh_link} target="_blank" rel="noreferrer">GitHub</a>
                        <a className="Project__content__link Project__content__live" href={project.live_preview_link} target="_blank" rel="noreferrer">Live Preview</a>
                    </div>
                    
                </div>
                </div>
        </div>
    )
}

export default Project
