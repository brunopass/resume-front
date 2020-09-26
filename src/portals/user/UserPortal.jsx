import React from 'react'
import { Helmet } from 'react-helmet'
import ReactDOM from 'react-dom'
import './UserPortal.css'

const Portal = props => {
    const {title} = props
    return (
        <div className="user-portal-wrapper">
        <Helmet>
            <title>{title}</title>
        </Helmet>
        <div className="user-portal-container">
            <div className="modal-container-close" onClick="">
              <div className="modal-container-close-child">
                <div className="modal-container-close-child-md"></div>
              </div>
            </div>
            {props.children}
        </div>
    </div>
    )
}

const UserPortal = props => {
    const {children,handleClick} = props
    return ReactDOM.createPortal( <Portal>{children}</Portal>,document.getElementById("card"))
}

export default UserPortal