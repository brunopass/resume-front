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
    const {id, title, description,enterprise,init,end,key} = props
    

    return(
        <div key={key}>

        </div>
    )
}

const Experience = () => {
    const [xp,setXp] = useState([])
    const [portal, setPortal] = useState(false)

    const handlePortal = () => {
        setPortal(!portal)
    }

    const handleChange = value => {
        alert(value)
    }

    const getYearList = () => {
        const thisYear = new Date().getFullYear()
        let years = []
        for(let i=0;i<=60;i++){
            years.push(thisYear-i)
        }
        return years
    }

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
                        <AlertCard description="Todavia no agregaste tu experiencia laboral? Hazlo ahora mismo!" img={Working} handleClick={handlePortal}/>
                    }
                </CardLister>
                <UserPortal open={portal} handleView={handlePortal}>
                    <div className="">
                        <h2>Agregar Experiencia Laboral</h2>
                        <div>
                            <TextInput value="Puesto"/>
                            <TextInput value="Empresa"/>
                            <div className="">
                                <div>
                                    <span>Fecha de Inicio</span>
                                    <div>
                                    <ComboInput value="Mes" options={['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']} handleChange={handleChange.bind(this)}/>
                                    <ComboInput value="Año" options={getYearList()} handleChange={handleChange.bind(this)}/>
                                    </div>
                                </div>
                                <div>
                                    <span>Fecha de Inicio</span>
                                    <div>
                                    <ComboInput value="Mes" options={['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']} handleChange={handleChange.bind(this)}/>
                                    <ComboInput value="Año" options={getYearList()} handleChange={handleChange.bind(this)}/>
                                    </div>
                                </div>
                            </div>
                            <input type="checkbox"/>
                        </div>
                    </div>
                    <ButtonAdd value="Agregar"/>
                </UserPortal>
            </div>
        </div>
    )
}

export default Experience