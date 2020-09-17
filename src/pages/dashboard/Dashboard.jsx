import React, { useState } from 'react'
import Escaleras from '../../assets/escaleras.svg'
import Meta from '../../assets/meta.svg'
import './Dashboard.css'
import Modal from '../../components/modal/Modal'

const CVs = () => {

    const [modal,setModal] = useState(false)

    const handleModal = () => {
        setModal(!modal)
    }

    return(
        <div className="cv-holder">
            <ul className="cv-holder-list">
                <div className="cv-holder-list-add" onClick={handleModal}>
                    <div className="cv-holder-list-circle">
                        +
                    </div>
                    <h3 className="cv-holder-list-add-h3">Crear nuevo CV</h3>
                </div>
            </ul>
            <Modal open={modal} handleView={handleModal}>

            </Modal>
        </div>
    )
}


const Dashboard = () => {
    const [name,setName] = useState('Usuario')

    return(
        <div className="dashboard-body">
            <div className="dashboard-wrapper">
                <div className="dashboard-wrapper-top-text">
                    <h2 className="dashboard-wrapper-top-text-h2">Hola {name},</h2>
                    <h4 className="dashboard-wrapper-top-text-h4">Nos encanta verte de nuevo!</h4>
                </div>

                <div className="dashboard-wrapper-top-cards">
                    <div className="dashboard-wrapper-top-card-left">
                        <img src={Escaleras} alt="escaleras"/>
                        <div>
                            <h2 className="dashboard-wrapper-top-card-h2">Mide tu crecimiento personal</h2>
                            <h4 className="dashboard-wrapper-top-card-h4">Lleva un registro de tus estudios, habilidades y experiencia</h4>
                        </div>
                    </div>

                    <div className="dashboard-wrapper-top-card-right">
                        <img src={Meta} alt="meta"/>
                        <div>
                            <h2 className="dashboard-wrapper-top-card-h2">Sobresal del resto</h2>
                            <h4 className="dashboard-wrapper-top-card-h4">Demuestra tus skills, proyectos y más!</h4>
                        </div>
                    </div>
                </div>

                <div className="dashboard-wrapper-middle">
                    <h2 className="dashboard-wrapper-middle-h2">Mis Curriculums</h2>
                    <CVs/>
                </div>
            </div>
        </div>
    )
}

export default Dashboard