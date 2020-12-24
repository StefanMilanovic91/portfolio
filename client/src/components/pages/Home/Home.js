import React, {  useEffect, useState, useContext, useRef } from 'react';
import { Transition } from 'react-transition-group';
import { GlobalContext } from '../../../GlobalContext/GlobalContext';


const Home = () => {

    const container = useRef();

    const {globalState: { welcomeRender }, getContainerHeight, GetCurrentWidth} = useContext(GlobalContext);
    
    const [visible, setVisible] = useState(true);
    const [title, setTitle] = useState('Web Developer');
    const [style, setStyle] = useState({"width": "265px"})
    
    const currentWidth = GetCurrentWidth();

    
    useEffect(() => getContainerHeight(container.current.clientHeight), [currentWidth]);

    useEffect(() => {
        if (!welcomeRender) {
            let id = setInterval(() => {
                setVisible(!visible);
            }, 4000);
            return () => clearInterval(id);
        }
    }, [visible, welcomeRender]);

    const changeOnExited = () => {
        setTimeout(() => {
            setVisible(!visible)
            if (title === 'Web Developer') {
                setTitle('Frelencer')
                setStyle({ "width": "170px" });
            } else {
                setTitle('Web Developer');
                setStyle({ "width": "265px" });
            }
        }, 500);
    }

    const changeOnExit = () => setStyle({ "width": "0" });

    return (
        <div ref={container} className="Home">
            <div className="Home__bkg"></div>
            <div className="Home__title-holder">
                <h1 className="Home__title mb-5">Stefan <p className="Home__title__last-name" >Milanovic</p></h1>
                <div className="Home__typed__text">
                    <p className="Home__typed__text__first-part" >I am a </p>
                    <div style={style} className="Home__typed__text__second-part-holder">
                        <Transition
                            in={visible}
                            timeout={1000}
                            onExit={() => changeOnExit() }
                            onExited={() => changeOnExited()}
                        >
                            <p className='Home__typed__text__second-part'>{title}</p>
                        </Transition>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
