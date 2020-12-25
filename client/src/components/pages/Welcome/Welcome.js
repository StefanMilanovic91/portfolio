import React, { Fragment } from 'react'

const Welcome = () => {


    return (
        <Fragment>
            <div className="Welcome">
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
            </div>
        </Fragment>
    )
}

export default Welcome
