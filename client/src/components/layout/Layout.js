import React, { useContext } from 'react' 
import { GlobalContext } from '../../GlobalContext/GlobalContext';

const Layout = ({children}) => {

    let { globalState: { welcomeRender } } = useContext(GlobalContext);

    let classes = ['Layout'];

    if (!welcomeRender) {
        classes = ['Layout', 'show'].join(' ');
    }

    return (
        <div className={classes}>
            {children}
        </div>
    )
}

export default Layout
