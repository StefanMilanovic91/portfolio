import React, { Fragment, useContext } from 'react';
import SwitchRoutes from './components/SwitchRoutes/SwitchRoutes';
import { Route } from 'react-router-dom';
import { GlobalContext } from './GlobalContext/GlobalContext';

import Layout from './components/layout/Layout';
import Welcome from './components/pages/Welcome/Welcome';
import Sidebar from './components/layout/Sidebar/Sidebar';
import HambMenu from './components/layout/HambMenu';




const App = () => {

    let { globalState: { welcomeRender }} = useContext(GlobalContext)

    return (
        <Fragment>

            {welcomeRender ? <Welcome /> : null}
        
            <Layout>
                
                    
                <HambMenu />
                <Sidebar />
                <Route render={() => <SwitchRoutes /> } />
                        
                
            </Layout>
        </Fragment>
    )
}

export default App