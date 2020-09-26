import React from 'react'
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'
import PersonalInformation from '../../components/construction/Personal-information/PerrsonalInformation'
import LoggedNavbar from '../../components/logged-navbar/LoggedNavbar'
import './Profile.css'

const Tracker = props => {
    const {id, title, value, key} = props

    return (
        <Link to={`/edit/${id}`}>
            <div className="tracking-wrapper-long">
                <div className="tracking-container-long" key={key}>
                    <h3 className="tracking-container-h3-long">{title}</h3>
                    <h3 className="tracking-container-h3-long">{value}</h3>
                </div>
            </div>
        </Link>
    )
}

const Profile = () => {
    let trackers = [{id: 'experiencia', title: 'Experiencia Laboral', value: 0},{id: 'habilidades', title: 'Habilidades', value: 0},{id: 'educacion', title: 'Educacion', value: 0},{id: 'proyectos', title: 'Proyectos', value: 0},{id: 'redes', title: 'Redes Sociales', value: 0}]

    return(
        <div className="profile-wrapper">
            <Helmet>
                <title>Resume | Perfil</title>
            </Helmet>
            <LoggedNavbar/>
            <div className="profile-container">
                <PersonalInformation/>
                <ul className="profile-container-list">
                    {trackers.map((value,key)=>{
                        return <Tracker id={value.id} value={value.value} title={value.title} key={key}/>
                    })}
                </ul>
            </div>
        </div>
    )
}

export default Profile