import React, { useState } from 'react'
import { Helmet } from 'react-helmet'
import AlertCard from '../../../components/AlertCard/AlertCard'
import CardLister from '../../../components/CardLister/CardLister'
import Working from '../../../assets/Working.svg'
import LoggedNavbar from '../../../components/logged-navbar/LoggedNavbar'
import './Experience.css'

const CardExperience = props => {
    const {id, title, description,enterprise,init,end,key} = props

    return(
        <div key={key}>

        </div>
    )
}

const Experience = () => {
    const [xp,setXp] = useState([])
    return (
        <div className="experience-wrapper">
            <Helmet>
                <title>Resume | Editar Experiencia Laboral</title>
            </Helmet>
            <LoggedNavbar/>
            <div className="experience-container">
                <CardLister title="Experiencia Laboral">
                    {xp.length > 0 && 
                    <div>    
                        {xp.map((value,key)=>{
                            return <CardExperience key={key}/>
                        })}
                    </div>
                    }
                    {
                        xp.length === 0 &&
                        <AlertCard description="Todavia no agregaste tu experiencia laboral? Hazlo ahora mismo!" img={Working}/>
                    }
                </CardLister>
            </div>
        </div>
    )
}

export default Experience