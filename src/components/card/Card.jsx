import React from 'react'
import './Card.css'

const Card = props => {
    const { img,title,description } = props

    return(
        <div className="card-wrapper">
            <img src={img} className="card-wrapper-img"/>
            <h2 className="card-wrapper-h2">{title}</h2>
            <p className="card-wrapper-p">{description}</p>
        </div>
    )
}

export default Card