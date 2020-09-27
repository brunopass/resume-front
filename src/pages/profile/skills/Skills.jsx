import React, { useState } from 'react'
import { Helmet } from 'react-helmet'
import AlertCard from '../../../components/AlertCard/AlertCard'
import CardLister from '../../../components/CardLister/CardLister'
import LoggedNavbar from '../../../components/logged-navbar/LoggedNavbar'
import Field from '../../../assets/Field.svg'
import './Skills.css'
import UserPortal from '../../../portals/user/UserPortal'
import TextInput from '../../../components/TextInput/TextInput'
import ButtonAdd from '../../../components/Buttons/ButtonAdd/ButtonAdd'

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

    const userPortal = {
        open: portal,
        handleView:handlePortal,
        title:'Resume | Agregar Habilidades'
    }

    const alertCard = {
        description:"Todavia no agregaste ninguna habilidad? Hazlo ahora mismo!",
        img:Field,
        handleClick:handlePortal
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
                        let props = {
                            id: value.id,
                            title: value.title,
                            key: key
                        }
                        return <SkillCard {...props}/>
                    })}
                </div>
                }
                {skills.length === 0 &&
                    <AlertCard {...alertCard}/>
                }
                </CardLister>
                <UserPortal {...userPortal}>
                    <div className="skills-user-portal-card">
                        <h2 className="skills-user-portal-card-h2">Agrega tus habilidades</h2>
                        <TextInput value="Habilidad *" placeholder="ej: diseño de interfaces"/>
                        <div className="skills-user-portal-card-button">
                            <ButtonAdd value="Agregar"/>
                        </div>
                    </div>
                </UserPortal>
            </div>
        </div>
    )
}

export default Skills