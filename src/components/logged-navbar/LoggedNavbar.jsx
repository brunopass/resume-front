import React from 'react'
import { Link } from 'react-router-dom'
import ButtonPrincipal from '../Buttons/ButtonPrincipal/ButtonPrincipal'
import Logo from '../../assets/logo-color.svg'
import './LoggedNavbar.css'

const LoggedNavbar = () => {

    let points = 0

    return (
        <div className="logged-navbar-wrapper">
            <div className="logged-navbar-container">
                <Link to="/dashboard">
                    <img alt="logo" src="" className="logged-navbar-container-img"/>
                </Link>

                <div className="logged-navbar-container-right">

                    <div className="logged-navbar-container-right-list-points">
                        <h6>Puntaje</h6>
                        <h6>{points}</h6>
                    </div>

                    <Link to="/dashboard/mi-perfil">
                        <ButtonPrincipal value="Mi Perfil"/>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default LoggedNavbar