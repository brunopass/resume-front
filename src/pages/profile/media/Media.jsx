import React, { useState } from 'react'
import { Helmet } from 'react-helmet'
import AlertCard from '../../../components/AlertCard/AlertCard'
import CardLister from '../../../components/CardLister/CardLister'
import LoggedNavbar from '../../../components/logged-navbar/LoggedNavbar'
import SocialMedia from '../../../assets/SocialMedia.svg'
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
    return(
        <div className="media-wrapper">
            <Helmet>
                <title>Resume | Editar Redes Sociales</title>
            </Helmet>
            <LoggedNavbar/>
            <div className="media-container">
                <CardLister title="Redes Sociales">
                    {media.length > 0 && <div>
                        {media.map((value,key)=>{
                            return <MediaCard key={key} id={value.id}/>
                        })}   
                    </div>}
                    {media.length === 0 && <div>
                        <AlertCard description="" img={SocialMedia}/>
                    </div>}
                </CardLister>
            </div>
        </div>
    )
}

export default Media