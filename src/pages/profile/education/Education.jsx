import React, { useState } from 'react'
import { Helmet } from 'react-helmet'
import AlertCard from '../../../components/AlertCard/AlertCard'
import CardLister from '../../../components/CardLister/CardLister'
import LoggedNavbar from '../../../components/logged-navbar/LoggedNavbar'
import './Education.css'
import Study from '../../../assets/studing.svg'

const EducationCard = props => {
    const {id } = props
    return(
        <div></div>
    )
}

const Education = () => {

    const [education,setEducation] = useState([])

    return(
        <div className="education-wrapper">
            <Helmet>
                <title>Resume | Editar Educación</title>
            </Helmet>
            <LoggedNavbar/>
            <div className="education-container">
                <CardLister title="Educación">
                    {education.length > 0 && <div>
                        {education.map((value,key)=>{

                        })}   
                    </div>}
                    {education.length === 0 && <div>
                        <AlertCard description="Todavia no agregaste tu educación? Hazlo ahora mismo!" img={Study}/>    
                    </div>}
                </CardLister>
            </div>
        </div>
    )
}

export default Education