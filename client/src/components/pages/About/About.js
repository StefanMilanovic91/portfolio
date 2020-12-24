import React, { useContext, useRef, useEffect } from 'react';
import { GlobalContext } from '../../../GlobalContext/GlobalContext';


const About = () => {

    const container = useRef();
    
    const { getContainerHeight, GetCurrentWidth } = useContext(GlobalContext);
    const currentWidth = GetCurrentWidth();

    useEffect(() => getContainerHeight(container.current.clientHeight), [currentWidth]);

    return (
        <div ref={container} className="About">
            <div className="container mx-auto">
                <div className="About__title-holder">
                    <h1 className="About__title">About Me</h1>
                    <span className="about-page-icon"></span>
                </div>
            </div>
            <div className="container mx-auto">
                <div className="About__holder mt-10">
                    <div className="About__paragraph">
                        <h3 className="About__sub-title mb-6">Just a little about me</h3>
                        <p className="About__paragraph__content mb-3" >
                            My name is Stefan Milanovic from Serbia and I am 30 years old.
                            I have been learning and upgrading my web development skills for many years, specifically the MERN stack.
                        </p>
                        <p className="About__paragraph__content" >
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique ex officia vitae aliquam totam quas,
                            quos at doloremque, pariatur, culpa consectetur asperiores eum sunt. Quasi et quaerat ea itaque reiciendis?
                        </p>
                    </div>
                    <div className="About__info">
                        <h3 className="About__sub-title mb-6">Personal Information</h3>
                        <ul className="About__info__list">
                            <li className="About__info__item"><span>Name</span>: Stefan Milanovic</li>
                            <li className="About__info__item"><span>Age</span>: 30 Years</li>
                            <li className="About__info__item"><span>Residence</span>: Serbia, Jagodina</li>
                            <li className="About__info__item"><span>Email</span>: stefan1811991@gmail.com</li>
                            <li className="About__info__item"><span>Freelence</span>: Available</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;
