import React from 'react'

const Modal = ({ msg }) => {
    return (
        <div className="Modal">
            <div className="Modal__spinner-holder">
                {msg.length > 0 ? msg.map((message, index) => <p key={index} className="Modal__title">{message}</p>)  : <div className="spinner"></div>}
            </div>
        </div>
    )
}

export default Modal
