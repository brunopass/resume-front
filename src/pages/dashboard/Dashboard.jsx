import React, { Fragment, useState } from 'react'
import Escaleras from '../../assets/escaleras.svg'
import Meta from '../../assets/meta.svg'
import './Dashboard.css'
import Modal from '../../portals/modal/Modal'
import { Helmet } from 'react-helmet'
import Tracking from '../../components/tracking/Tracking'
import LoggedNavbar from '../../components/logged-navbar/LoggedNavbar'

const CVs = () => {

    const [modal,setModal] = useState(false)

    const handleModal = () => {
        setModal(!modal)
    }

    return(
        <div>
            <Helmet>
                <title>Resume | Dashboard</title>
            </Helmet>
            <div className="cv-holder">
                <ul className="cv-holder-list">
                    <div className="cv-holder-list-add" onClick={handleModal}>
                        <div className="cv-holder-list-circle">
                            +
                        </div>
                        <h3 className="cv-holder-list-add-h3">Crear nuevo CV</h3>
                    </div>
                </ul>
                <Modal open={modal} handleView={handleModal}/>
            </div>
        </div>
    )
}


const Dashboard = () => {
    const [name,setName] = useState('Usuario')
    let trackers = [{id: 'experiencia', title: 'Experiencia Laboral', value: 0},{id: 'habilidades', title: 'Habilidades', value: 0},{id: 'educacion', title: 'Educacion', value: 0},{id: 'proyectos', title: 'Proyectos', value: 0},{id: 'redes', title: 'Redes Sociales', value: 0}]
    return(
        <div className="dashboard-body">
            <LoggedNavbar/>
            <div className="dashboard-wrapper">
                <div className="dashboard-wrapper-top-text">
                    <h2 className="dashboard-wrapper-top-text-h2">Hola {name},</h2>
                    <h4 className="dashboard-wrapper-top-text-h4">Nos encanta verte de nuevo!</h4>
                </div>

                <ul className="dashboard-wrapper-top-ul">
                    {trackers.map((value,key)=>{
                        return <Tracking id={value.id} value={value.value} title={value.title} key={key}/>
                    })}
                </ul>

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