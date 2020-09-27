import React, { useState } from 'react'
import { Helmet } from 'react-helmet'
import AlertCard from '../../../components/AlertCard/AlertCard'
import CardLister from '../../../components/CardLister/CardLister'
import LoggedNavbar from '../../../components/logged-navbar/LoggedNavbar'
import './Education.css'
import Study from '../../../assets/studing.svg'
import UserPortal from '../../../portals/user/UserPortal'
import TextInput from '../../../components/TextInput/TextInput'
import ComboInput from '../../../components/ComboInput/ComboInput'
import ButtonAdd from '../../../components/Buttons/ButtonAdd/ButtonAdd'

const EducationCard = props => {
    const {id } = props
    return(
        <div></div>
    )
}

const Education = () => {

    const [education,setEducation] = useState([])
    const [portal, setPortal] = useState(false)

    const handlePortal = () => {
        setPortal(!portal)
    }

    const getYearList = (isStarting = false) => {
        let years = []
        if(isStarting){
            const thisYear = new Date().getFullYear()
            for(let i=0;i<=60;i++){
                years.push(thisYear-i)
            }
        }else{
            const thisYear = new Date().getFullYear()+7
            for(let i=0;i<=60;i++){
                years.push(thisYear-i)
            }
        }
        return years
    }

    const handleChange = value => {

    }

    const userPortal = {
        open: portal,
        handleView:handlePortal,
        title:"Resume | Agregar Educación"
    }

    const alertCard = {
        description:"Todavia no agregaste tu educación? Hazlo ahora mismo!",
        img:Study,
        handleClick:handlePortal
    }

    return(
        <div className="education-wrapper">
            <Helmet>
                <title>Resume | Editar Educación</title>
            </Helmet>
            <LoggedNavbar/>
            <div className="education-container">
                <CardLister title="Educación" handleClick={handlePortal}>
                    {education.length > 0 && <div>
                        {education.map((value,key)=>{

                        })}   
                    </div>}
                    {education.length === 0 && <div>
                        <AlertCard {...alertCard}/>    
                    </div>}
                </CardLister>
                <UserPortal {...userPortal}>
                        <div className="education-user-portal-card">
                            <h2 className="education-user-portal-card-h2">Agregar Educación</h2>
                            <div className="education-user-portal-card-mid">
                                <div className="education-user-portal-card-text">
                                    <TextInput value="Universidad *"/>
                                    <TextInput value="Título *"/>
                                </div>
                                <div className="education-user-portal-card-combo">
                                    <ComboInput value="Año de inicio" options={getYearList(true)} handleChange={handleChange.bind(this)}/>
                                    <ComboInput value="Año de finalización previsto" options={getYearList(false)} handleChange={handleChange.bind(this)}/>
                                </div>
                            </div>
                            <div className="education-user-portal-card-button">
                                <ButtonAdd value="Agregar"/>
                            </div>
                        </div>
                </UserPortal>
            </div>
        </div>
    )
}

export default Education