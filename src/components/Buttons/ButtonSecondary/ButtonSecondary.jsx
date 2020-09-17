import React from 'react'
import './ButtonSecondary.css'

 const ButtonSecondary = props => {
     const {value, handleClick} = props

     return(
         <input type="button" value={value} onClick={handleClick} className="button-secondary"/>
     )
 }

 export default ButtonSecondary