import React, { useState } from 'react'
import { Helmet } from 'react-helmet'
import AlertCard from '../../../components/AlertCard/AlertCard'
import CardLister from '../../../components/CardLister/CardLister'
import LoggedNavbar from '../../../components/logged-navbar/LoggedNavbar'

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
        <div>
            <Helmet>
                <title>Resume | Editar Proyectos</title>
            </Helmet>
            <LoggedNavbar/>
            <div>
                <CardLister title="Proyectos">
                    {project.length > 0 && <div>
                        {project.map((value,key)=>{
                            return <ProjectCard key={key}/>
                        })}    
                    </div>}
                    {project.length === 0 && <div>
                        <AlertCard description="" img=""/>    
                    </div>}
                </CardLister>
            </div>
        </div>
    )
}

export default Projects