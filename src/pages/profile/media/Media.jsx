import React, { useState } from 'react'
import { Helmet } from 'react-helmet'
import AlertCard from '../../../components/AlertCard/AlertCard'
import CardLister from '../../../components/CardLister/CardLister'
import LoggedNavbar from '../../../components/logged-navbar/LoggedNavbar'
import SocialMedia from '../../../assets/SocialMedia.svg'
import UserPortal from '../../../portals/user/UserPortal'
import TextInput from '../../../components/TextInput/TextInput'
import ButtonAdd from '../../../components/Buttons/ButtonAdd/ButtonAdd'
import './Media.css'

const MediaCard = props => {
    const {id,url,key} = props
    return(
        <div key={key}>

        </div>
    )
}

const Media = () => {
    const [media,setMedia] = useState([])
    const [portal, setPortal] = useState(false)

    const handlePortal = () => {
        setPortal(!portal)
    }

    const userPortal = {
        open: portal,
        handleView:handlePortal,
        title:"Resume | Agregar Experiencia Laboral"
    }

    const alertCard = {
        description:"Todavia no agregaste tus redes sociales? Hazlo ahora mismo!",
        img:SocialMedia,
        handleClick:handlePortal
    }
    return(
        <div className="media-wrapper">
            <Helmet>
                <title>Resume | Editar Redes Sociales</title>
            </Helmet>
            <LoggedNavbar/>
            <div className="media-container">
                <CardLister title="Redes Sociales" handleClick={handlePortal}>
                    {media.length > 0 && <div>
                        {media.map((value,key)=>{
                            return <MediaCard key={key} id={value.id}/>
                        })}   
                    </div>}
                    {media.length === 0 && <div>
                        <AlertCard {...alertCard}/>
                    </div>}
                </CardLister>
                <UserPortal {...userPortal}>
                    <div className="media-user-portal-card">
                        <h2 className="media-user-portal-card-h2">Agregar Red Social</h2>
                        <TextInput value="Url *" placeholder="ej: https://www.linkedin.com/in/bruno-passarelli-4b6947184/"/>
                        <div className="media-user-portal-card-button">
                            <ButtonAdd value="Agregar"/>
                        </div>
                    </div>
                </UserPortal>
            </div>
        </div>
    )
}

export default Media