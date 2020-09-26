import React from 'react'
import { Link } from 'react-router-dom'
import './Tracking.css'

const Tracking = props => {
    const {id, title, value, key} = props

    return (
        <Link to={`/edit/${id}`}>
            <div className="tracking-wrapper">
                <div className="tracking-container" key={key}>
                    <h3 className="tracking-container-h3">{title}</h3>
                    <h3 className="tracking-container-h3">{value}</h3>
                </div>
            </div>
        </Link>
    )
}

export default Tracking