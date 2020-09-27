import React, { useState } from 'react'
import { Helmet } from 'react-helmet'
import AlertCard from '../../../components/AlertCard/AlertCard'
import CardLister from '../../../components/CardLister/CardLister'
import LoggedNavbar from '../../../components/logged-navbar/LoggedNavbar'
import Field from '../../../assets/Field.svg'
import './Skills.css'
import UserPortal from '../../../portals/user/UserPortal'

const SkillCard = props => {
    const {id, title, key} = props
    
    return (
        <div key={key}>
            {title}
        </div>
    )
}

const Skills = () => {
    const [skills, setSkills] = useState([])
    const [portal,setPortal] = useState(false)

    const handlePortal = () => {
        setPortal(!portal)
    }
    return(
        <div className="skills-wrapper">
            <Helmet>
                <title>Resume | Editar Habilidades</title>
            </Helmet>
            <LoggedNavbar/>
            <div className="skills-container">
                <CardLister title="Habilidades" handleClick={handlePortal}>
                {skills.length !== 0 && 
                <div>
                    {skills.map((value,key)=>{
                        return <SkillCard id={value.id} title={value.title} key={key}/>
                    })}
                </div>
                }
                {skills.length === 0 &&
                    <AlertCard description="Todavia no agregaste ninguna habilidad? Hazlo ahora mismo!" img={Field} handleClick={handlePortal}/>
                }
                </CardLister>
                <UserPortal open={portal} handleView={handlePortal} title="Resume | Agregar Habilidades">
                    lol
                </UserPortal>
            </div>
        </div>
    )
}

export default Skills