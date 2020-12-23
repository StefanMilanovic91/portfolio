import React, { Fragment } from 'react'

const Welcome = () => {

    

    const welcomeView = ( <div className="Welcome">
                            <h2 className="mb-2"><span>S</span>tefan <span>M</span>ilanovic</h2>
                            <div className="Welcome__loader">
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                        </div> );


    return (
        <Fragment>
            { welcomeView }
        </Fragment>
    )
}

export default Welcome
