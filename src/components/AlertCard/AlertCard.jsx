import React from 'react'

const AlertCard = props => {
    const {id,description,img} = props
    return(
        <div className="work-experience-container-list-empty">
            <img src={img} className="work-experience-container-list-empty-img"/>
            <div className="work-experience-container-list-empty-child">
                <h3 className="work-experience-container-list-empty-child-h3">{description}</h3>
                <div className="work-experience-container-list-empty-child-button">
                    <span>Click aquí</span>
                </div>
            </div>
        </div>
    )
}

export default AlertCard