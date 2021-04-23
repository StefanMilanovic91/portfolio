import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { GlobalContext } from '../../../GlobalContext/GlobalContext';


const Sidebar = () => {

    const globalState = useContext(GlobalContext);

    const { globalState: { toggleMenu }, toggleMenuHendler } = globalState;
    const scrollToTop = () => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }
    return (
        <div className={toggleMenu ? "Sidebar show" : "Sidebar"}>
            <div className="Sidebar__holder-item">
                <div className="Sidebar__profile-img">
                    <img src="images/profile_img.jpg" alt="Stefan Milanovic" />
                    <p className="Sidebar__profile-name">Stefan Milanovic</p>
                </div>

                <div className="Sidebar__navigation">
                    <ul className="Sidebar__navigation-ul">
                        <li className="navigation-item"><NavLink onClick={() => { toggleMenuHendler(); scrollToTop(); }} className="navigation-link" to="/home"><span className="navigation-link-icon"></span> Home</NavLink></li>
                        <li className="navigation-item"><NavLink onClick={() => { toggleMenuHendler(); scrollToTop(); }} className="navigation-link" to="/skills"><span className="navigation-link-icon"></span>Skills</NavLink></li>
                        <li className="navigation-item"><NavLink onClick={() => { toggleMenuHendler(); scrollToTop(); }} className="navigation-link" to="/projects"><span className="navigation-link-icon"></span>Projects</NavLink></li>
                        <li className="navigation-item"><NavLink onClick={() => { toggleMenuHendler(); scrollToTop(); }} className="navigation-link" to="/about"><span className="navigation-link-icon"></span>About Me</NavLink></li>
                        <li className="navigation-item"><NavLink onClick={() => { toggleMenuHendler(); scrollToTop(); }} className="navigation-link" to="/contact"><span className="navigation-link-icon"></span>Contact</NavLink></li>
                    </ul>
                </div>

                <div className="Sidebar__footer">
                    <div className="Sidebar__footer__holder">
                        <ul className="footer-navbar mb-1">
                            <li className="footer-item mr-2" ><a className="footer-icon" href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">&nbsp;</a></li>
                            <li className="footer-item" ><a className="footer-icon" href="https://github.com/StefanMilanovic91" target="_blank" rel="noopener noreferrer">&nbsp;</a></li>
                        </ul>
                        <ul className="footer-text mb-1">
                            <li className="mb-1">Coded by Stefan Milanovic in 2020 year.</li>
                            <li>All Rights Reserved.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sidebar
