import React from 'react'
import { Link } from 'react-router-dom'
import notFound from '../../assets/notFound.svg'
import ButtonPrincipal from '../../components/Buttons/ButtonPrincipal/ButtonPrincipal'
import './NotFound.css'

const NotFound = () => {
    return(
        <div className="not-found-wrapper">
            <img src={notFound} className="not-found-wrapper-img"/>
        </div>
    )
}

export default NotFound