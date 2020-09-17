import React from 'react'
import ButtonAdd from '../../Buttons/ButtonAdd/ButtonAdd'
import TextInput from '../../TextInput/TextInput'
import './SocialMedia.css'

const SocialMedia = () =>{

    const add = () => {

    }
    
    return(
        <div className="social-media-container">
            <h2 className="social-media-container-h2">Redes sociales</h2>
            <div className="social-media-container-text">
                <TextInput value="Url"/>
                <ButtonAdd value="Agregar" handleClick={add}/>
            </div>

        </div>
    )
}

export default SocialMedia