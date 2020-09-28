import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet'
import AlertCard from '../../../components/AlertCard/AlertCard'
import CardLister from '../../../components/CardLister/CardLister'
import Working from '../../../assets/Working.svg'
import LoggedNavbar from '../../../components/logged-navbar/LoggedNavbar'
import './Experience.css'
import UserPortal from '../../../portals/user/UserPortal'
import TextInput from '../../../components/TextInput/TextInput'
import ComboInput from '../../../components/ComboInput/ComboInput'
import ButtonAdd from '../../../components/Buttons/ButtonAdd/ButtonAdd'


const CardExperience = props => {
    const {id, job,enterprise,init,end,key} = props

    return(
        <div key={key}>

        </div>
    )
}

const Experience = () => {
    const [xp,setXp] = useState([])
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
        title:"Resume | Agregar Experiencia Laboral"
    }

    const alertCard = {
        description:"Todavia no agregaste tu experiencia laboral? Hazlo ahora mismo!",
        img:Working,
        handleClick:handlePortal
    }

    return (
        <div className="experience-wrapper">
            <Helmet>
                <title>Resume | Editar Experiencia Laboral</title>
            </Helmet>
            <LoggedNavbar/>
            <div className="experience-container">
                <CardLister title="Experiencia Laboral" handleClick={handlePortal}>
                    {xp.length > 0 && 
                    <div>    
                        {xp.map((value,key)=>{
                            let props = {
                                key: key,
                                id: value.id,
                                job: value.title,
                                enterprise: value.enterprise,
                                init: value.init,
                                end: value.end                                
                            }
                            return <CardExperience {...props}/>
                        })}
                    </div>
                    }
                    {
                        xp.length === 0 &&
                        <AlertCard {...alertCard}/>
                    }
                </CardLister>
                <UserPortal {...userPortal}>
                    <div className="experience-portal-child">
                        <h2 className="experience-portal-child-h2">Agregar Experiencia Laboral</h2>
                        <div className="experience-portal-child-text">
                            <div className="experience-portal-child-text-top">
                                <TextInput value="Puesto Laboral *" placeholder="ej: Analista funcional"/>
                                <TextInput value="Empresa *"/>
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
                                <p>Trabajo actualmente aquí</p>
                            </div>
                        </div>
                    </div>
                    <div className="experience-portal-button-add">
                        <ButtonAdd value="Agregar"/>
                    </div>
                </UserPortal>
            </div>
        </div>
    )
}

export default Experience