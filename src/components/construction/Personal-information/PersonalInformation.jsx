import React from 'react'
import TextInput from '../../TextInput/TextInput'
import './PersonalInformation.css'

const PersonalInformation = () => {
    return(
        <div className="personal-information-container">
            <h2 className="personal-information-container-h2">Información Personal</h2>
            <div className="personal-information-container-child">
                <div className="personal-information-container-child-img">
                </div>
                <div className="personal-information-container-child-text">
                    <TextInput value="Nombre y apellido" isPassword={false}/>
                    <TextInput value="Correo electrónico" isPassword={false}/>
                    <TextInput value="Tel / Cel" isPassword={false}/>
                </div>
            </div>
            <div className="personal-information-container-line"></div>
        </div>
    )
}

export default PersonalInformation