import React, { useState } from 'react'
import { Helmet } from 'react-helmet'
import AlertCard from '../../../components/AlertCard/AlertCard'
import CardLister from '../../../components/CardLister/CardLister'
import LoggedNavbar from '../../../components/logged-navbar/LoggedNavbar'
import Pr from '../../../assets/Project.svg'
import './Projects.css'

const ProjectCard = props => {
    const {id,key} = props

    return (
        <div key={key}>

        </div>
    )
}

const Projects = () => {
    const [project,setProject] = useState([])
    return(
        <div className="project-wrapper">
            <Helmet>
                <title>Resume | Editar Proyectos</title>
            </Helmet>
            <LoggedNavbar/>
            <div className="project-container">
                <CardLister title="Proyectos">
                    {project.length > 0 && <div>
                        {project.map((value,key)=>{
                            return <ProjectCard key={key}/>
                        })}    
                    </div>}
                    {project.length === 0 && <div>
                        <AlertCard description="Todavia no agregaste tu último proyecto? Hazlo ahora mismo!" img={Pr}/>    
                    </div>}
                </CardLister>
            </div>
        </div>
    )
}

export default Projects