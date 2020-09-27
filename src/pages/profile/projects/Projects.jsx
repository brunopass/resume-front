import React, { useState } from 'react'
import { Helmet } from 'react-helmet'
import AlertCard from '../../../components/AlertCard/AlertCard'
import CardLister from '../../../components/CardLister/CardLister'
import LoggedNavbar from '../../../components/logged-navbar/LoggedNavbar'
import Pr from '../../../assets/Project.svg'
import './Projects.css'
import '../experience/Experience.css'
import UserPortal from '../../../portals/user/UserPortal'
import TextInput from '../../../components/TextInput/TextInput'
import ComboInput from '../../../components/ComboInput/ComboInput'
import ButtonAdd from '../../../components/Buttons/ButtonAdd/ButtonAdd'

const ProjectCard = props => {
    const {id,key} = props

    return (
        <div key={key}>

        </div>
    )
}

const Projects = () => {
    const [project,setProject] = useState([])
    const [portal, setPortal] = useState(false)
    const [actual,setActual] = useState(true)

    const handlePortal = () => {
        setPortal(!portal)
        setActual(!portal)
    }

    const handleChange = value => {
        
    }

    const actualJob = () => {
        setActual(!actual)
    }

    const getYearList = () => {
        const thisYear = new Date().getFullYear()
        let years = []
        for(let i=0;i<=60;i++){
            years.push(thisYear-i)
        }
        return years
    }

    const comboPropsMonth = {
        value:"Mes",
        options:['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']
    }

    const comboPropsYear = {
        value:"Año",
        options:getYearList()
    }

    const userPortal = {
        open: portal,
        handleView:handlePortal,
        title:"Resume | Agregar Proyecto"
    }

    const alertCard = {
        description:"Todavia no agregaste tu último proyecto? Hazlo ahora mismo!",
        img:Pr,
        handleClick:handlePortal
    }


    return(
        <div className="project-wrapper">
            <Helmet>
                <title>Resume | Editar Proyectos</title>
            </Helmet>
            <LoggedNavbar/>
            <div className="project-container">
                <CardLister title="Proyectos" handleClick={handlePortal}>
                    {project.length > 0 && <div>
                        {project.map((value,key)=>{
                            return <ProjectCard key={key}/>
                        })}    
                    </div>}
                    {project.length === 0 && <div>
                        <AlertCard {...alertCard}/>    
                    </div>}
                </CardLister>
                <UserPortal {...userPortal}>
                    <div className="project-user-portal-card">
                        <h2 className="experience-portal-child-h2">Agregar Proyecto</h2>
                        <div className="experience-portal-child-text">
                            <div className="experience-portal-child-text-top">
                                <TextInput value="Nombre del Proyecto *" placeholder="ej: prototipo de biotecnologia"/>
                                <TextInput value="url"/>
                            </div>
                            <div className="experience-portal-child-text-mid">
                                <div className="experience-portal-child-text-mid-group">
                                    <span className="experience-portal-child-text-mid-group-span">Fecha de Inicio</span>
                                    <div className="experience-portal-child-text-mid-group-combo">
                                    <ComboInput {...comboPropsMonth} handleChange={handleChange.bind(this)}/>
                                    <ComboInput {...comboPropsYear} handleChange={handleChange.bind(this)}/>
                                    </div>
                                </div>
                                <div className={actual ? "experience-portal-child-text-mid-group" : "experience-portal-child-text-mid-group-del" }>
                                    <span className="experience-portal-child-text-mid-group-span">Fecha de Finalización</span>
                                    <div className="experience-portal-child-text-mid-group-combo">
                                        <ComboInput {...comboPropsMonth} handleChange={handleChange.bind(this)}/>
                                        <ComboInput {...comboPropsYear} handleChange={handleChange.bind(this)}/>
                                    </div>
                                </div>
                            </div>
                            <div className="experience-portal-checkbox">
                                <input type="checkbox" onChange={actualJob}/>
                                <p>En desarrollo</p>
                            </div>
                        </div>
                        <div className="project-user-portal-card-text-area-description">
                            <span className="project-user-portal-card-text-area-description-span">Descripción</span>
                            <textarea className="project-user-portal-card-text-area"/>
                        </div>
                        <div className="project-user-portal-card-button">
                            <ButtonAdd value="Agregar"/>
                        </div>
                    </div>
                </UserPortal>
            </div>
        </div>
    )
}

export default Projects