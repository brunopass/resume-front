import React from 'react'
import '../../components/CardLister/CardLister.css'

const AlertCard = props => {
    const {id,description,img,handleClick} = props
    
    return(
        <div className="work-experience-container-list-empty">
            <img src={img} className="work-experience-container-list-empty-img"/>
            <div className="work-experience-container-list-empty-child">
                <h3 className="work-experience-container-list-empty-child-h3">{description}</h3>
                <div className="work-experience-container-list-empty-child-button" onClick={handleClick}>
                    <span>Click aquí</span>
                </div>
            </div>
        </div>
    )
}

export default AlertCard