import React, { useState } from 'react'
import { Helmet } from 'react-helmet'
import AlertCard from '../../../components/AlertCard/AlertCard'
import CardLister from '../../../components/CardLister/CardLister'
import LoggedNavbar from '../../../components/logged-navbar/LoggedNavbar'
import Pr from '../../../assets/Project.svg'
import './Projects.css'
import UserPortal from '../../../portals/user/UserPortal'
import TextInput from '../../../components/TextInput/TextInput'

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

    const handlePortal = () => {

        setPortal(!portal)
    }

    const userPortal = {
        open: portal,
        handleView:handlePortal,
        title:'Resume | Agregar Proyecto'
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
                    <div>
                        <h2>Agregar Proyecto</h2>
                        <div>
                            <TextInput value="Nombre del proyecto *"/>
                            <TextInput value="Url"/>
                        </div>
                    </div>
                </UserPortal>
            </div>
        </div>
    )
}

export default Projects