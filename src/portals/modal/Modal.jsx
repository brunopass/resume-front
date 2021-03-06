import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import { Helmet } from 'react-helmet'
import ButtonPrincipal from '../../components/Buttons/ButtonPrincipal/ButtonPrincipal'
import TextInput from '../../components/TextInput/TextInput'
import './Modal.css'

const Modal = props => {
    const {open, handleView} = props
    const [name,setName] = useState('')

    const createCurriculum = () => {

    }

    if(!open){
        return null
    }
 
    return ReactDOM.createPortal(
        <div className="modal-wrapper">
            <Helmet>
                <title>Resume | Agregar</title>
            </Helmet>
            <div className="modal-container">
                <div className="modal-container-close" onClick={handleView}>
                  <div className="modal-container-close-child">
                    <div className="modal-container-close-child-md"></div>
                  </div>
                </div>
                <div>
                    <h2>Nuevo currículum</h2>
                    <TextInput value="nombre" placeholder="mi currículum" handleChange={setName.bind(this)}/>
                    <ButtonPrincipal value="Crear currículum" handleClick={createCurriculum}/>
                </div>
            </div>
        </div>,
        document.getElementById("card")
    )
}

export default Modal