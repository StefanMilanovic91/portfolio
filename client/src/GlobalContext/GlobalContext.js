import React, { useState, createContext, useEffect } from 'react';

export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {


    const [globalState, setGlobalState] = useState({ toggleMenu: false, welcomeRender: true, containerHeight: '' });

    useEffect(() => {
        let id = setTimeout(() => setGlobalState({...globalState, welcomeRender: false}), 3800);
        return (() => clearTimeout(id));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const getContainerHeight = (height) => setGlobalState({ ...globalState, containerHeight: height });

    const toggleMenuHendler = () => setGlobalState({ ...globalState, toggleMenu: !globalState.toggleMenu });

    

    const GetCurrentWidth = () => {
        const getWidth = () => window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
        const [width, setWidth] = useState(getWidth());

        useEffect(() => {

            const resizeListener = () => setWidth(getWidth());

            window.addEventListener('resize', resizeListener);

            return () => {
                window.removeEventListener('resize', resizeListener);
            }
        }, []);
        return width;
    }

    return (
        <GlobalContext.Provider value={{globalState, toggleMenuHendler, getContainerHeight, GetCurrentWidth}}>
            {children}
        </GlobalContext.Provider>
    )
}