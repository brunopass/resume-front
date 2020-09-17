import React from 'react'
import './ButtonAdd.css'

const ButtonAdd = props => {
    const {handleClick, value} = props

    return( 
        <input type="button" value={value} onClick={handleClick} className="button-add"/>
    )
}

export default ButtonAdd