import React, { useEffect, useState } from 'react'
import './CardLister.css'

const CardLister = props => {
    const {children, title,img,handleClick } = props
    useEffect(()=>{
        
    }, [])

    return(
        <div className="work-experience-wrapper">
            <div className="work-experience-container-top">
                <h2 className="work-experience-container-top-left-h2">{title}</h2>
                <div className="work-experience-container-top-right-add" onClick={handleClick}>
                    +
                </div>
            </div>

            <ul className="work-experience-container-list">
                {children}
            </ul>
        </div>
    )
}



export default CardLister