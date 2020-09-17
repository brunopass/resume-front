import React from 'react'
import './TextInput.css'
import Secure from '../../assets/secure.png'
import { Link } from 'react-router-dom'

const TextInput = props => {
    const {handleChange, value, placeholder, isPassword} = props

    if(isPassword){
        return(
            <div className="text-input-container">
                <h4 className="text-input-container-h4">{value}</h4>
                <div className="text-input-container-children">
                    <img src={Secure} alt="secure login" className="text-input-img"/>
                    <input type="password" placeholder={placeholder} onChange={e => handleChange(e.target.value)} id="" className="text-input-container-children-input"/>
                </div>
            </div>
        )
    }else{
        return(
            <div className="text-input-container">
                <h4 className="text-input-container-h4">{value}</h4>
                <div className="text-input-container-children">
                    <input type="text" placeholder={placeholder} onChange={e => handleChange(e.target.value)} className="text-input-container-children-input"/>
                </div>
            </div>
        )
    }
}

export default TextInput