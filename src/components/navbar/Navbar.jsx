import React, { useCallback, useState } from 'react'
import { Link } from 'react-router-dom'
import ButtonPrincipal from '../Buttons/ButtonPrincipal/ButtonPrincipal'
import ButtonSecondary from '../Buttons/ButtonSecondary/ButtonSecondary'
import Logo from '../../assets/logo.svg'
import './Navbar.css'

const Navbar = () => {

    const linkers = ['Características','Quienes Somos', 'Iniciar sesión']
    const[style,setStyle] = useState(false)
    
    const changeStyle = () => {
        if(window.scrollY >= 80){
            setStyle(false)
        }else{
            setStyle(true)
        }
    }

    window.addEventListener('scroll', changeStyle)

    return(
        <nav className={style ? "navbar-wrap-off" : "navbar-wrap"}> 
            <div className="navbar-container">
                <img src={Logo} alt="logo" className="img-logo"/>
                <div className="navbar-children">
                    <ul className="navbar-children-ul">
                        {linkers.map(useCallback((value,key)=>{
                        return(
                            <Link to={`/${value.toLowerCase().split(' ').join('-').replace(/ó/,'o').replace(/í/,'i')}`}>
                                <li key={key} className="navbar-children-ul-li">{value}</li>
                            </Link>
                            )})
                        )}
                    </ul>
                    <Link to="/iniciar-sesion" className="navbar-button">
                        <li className="navbar-children-ul-li-iniciar">Iniciar sesión</li>
                    </Link>
                    <Link to="/crear-cuenta">
                        <ButtonPrincipal value="Crear Cuenta"/>
                    </Link>
                </div>
            </div>
        </nav>
    )
}

export default Navbar