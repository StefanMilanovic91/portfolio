import React, { Fragment, useContext } from 'react'
import { Switch, Redirect, Route, withRouter } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

import { GlobalContext } from '../../GlobalContext/GlobalContext';

import Home from '../pages/Home/Home';
import Skills from '../pages/Skills/Skills';
import About from '../pages/About/About';
import Contact from '../pages/Contact/Contact';
import Projects from '../pages/Projects/Projects';

const SwitchRoutes = ({ location }) => {

    const { globalState: { containerHeight } } = useContext(GlobalContext);
    
    return (
        <Fragment>
           
            <TransitionGroup style={{"minHeight": containerHeight + 'px'}} className='page-holder'>
                <CSSTransition
                    key={location.key}
                    timeout={1500}
                >
                    <Switch location={location}>
                        
                        <Route exact path="/" render={() => <Redirect to="/home" />} />

                        <Route path="/home" component={Home} />
                        <Route path="/skills" component={Skills} />
                        <Route path="/about" component={About} />
                        <Route path="/contact" component={Contact} />

                        <Route path="/projects" component={Projects} />
                        
                    </Switch>
                </CSSTransition>
            </TransitionGroup>
        </Fragment>
    )
}

export default withRouter(SwitchRoutes)
