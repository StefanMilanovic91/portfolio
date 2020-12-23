import React, { useState, useContext, useEffect } from 'react';
import { GlobalContext } from '../../GlobalContext/GlobalContext';

const HambMenu = () => {

    const { globalState: { toggleMenu }, toggleMenuHendler } = useContext(GlobalContext);

    const [classesTop, setClassesTop] = useState(['HambMenu__item']);
    const [classesMiddle, setClassesMiddle] = useState(['HambMenu__item']);
    const [classesBottom, setClassesBottom] = useState(['HambMenu__item']);
    
    useEffect(() => {
        if (!toggleMenu) {
            animateIn();
        } else {
            animateOut();
        }
    }, [toggleMenu])
 
    const openMenu = () => {
        toggleMenuHendler()
        // animate hamburger menu
        if (toggleMenu) {
            animateIn();
        } else {
            animateOut();
        }
    }
    
    const animateIn = () => {
        setClassesTop(["HambMenu__item", "rotate_top_out"].join(' '));
        setClassesBottom(["HambMenu__item", "rotate_bottom_out"].join(' '));
        setClassesMiddle(["HambMenu__item", "fade_middle_out"].join(' '));
    }
    const animateOut = () => {
        setClassesTop(["HambMenu__item", "rotate_top_in"].join(' '));
        setClassesBottom(["HambMenu__item", "rotate_bottom_in"].join(' '));
        setClassesMiddle(["HambMenu__item", "fade_middle_in"].join(' '));
    }

    return (
        <div onClick={openMenu} className="HambMenu">
            <div className={classesTop}></div>
            <div className={classesMiddle}></div>
            <div className={classesBottom}></div>
        </div>
    )
}

export default HambMenu
