import React, { useState } from 'react'
import ReactDOM from 'react-dom'
<<<<<<< HEAD
import { Helmet } from 'react-helmet'
=======
>>>>>>> 225331b664a72fc99cf275dc68bec6dc8b6e6c19
import ButtonPrincipal from '../Buttons/ButtonPrincipal/ButtonPrincipal'
import TextInput from '../TextInput/TextInput'
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
<<<<<<< HEAD
            <Helmet>
                <title>Resume | Agregar</title>
            </Helmet>
=======
>>>>>>> 225331b664a72fc99cf275dc68bec6dc8b6e6c19
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