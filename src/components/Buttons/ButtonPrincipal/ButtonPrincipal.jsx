import React from 'react'
import './ButtonPrincipal.css'

const ButtonPrincipal = props => {
    const {value, handleClick} = props

    return(
        <input type="button" value={value} onClick={handleClick} className="button-principal"/>
    ) 
}

export default ButtonPrincipal