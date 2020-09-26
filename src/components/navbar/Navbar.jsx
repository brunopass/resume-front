<<<<<<< HEAD
import React, { useCallback, useEffect, useState } from 'react'
=======
import React, { useCallback, useState } from 'react'
>>>>>>> 225331b664a72fc99cf275dc68bec6dc8b6e6c19
import { Link } from 'react-router-dom'
import ButtonPrincipal from '../Buttons/ButtonPrincipal/ButtonPrincipal'
import ButtonSecondary from '../Buttons/ButtonSecondary/ButtonSecondary'
import Logo from '../../assets/logo.svg'
import './Navbar.css'

const Navbar = () => {

    const linkers = ['Características','Quienes Somos', 'Iniciar sesión']
<<<<<<< HEAD
    const[style,setStyle] = useState(true)
    
=======
    const[style,setStyle] = useState(false)
>>>>>>> 225331b664a72fc99cf275dc68bec6dc8b6e6c19
    
    const changeStyle = () => {
        if(window.scrollY >= 80){
            setStyle(false)
        }else{
            setStyle(true)
        }
    }

    window.addEventListener('scroll', changeStyle)
<<<<<<< HEAD
    
=======
>>>>>>> 225331b664a72fc99cf275dc68bec6dc8b6e6c19

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